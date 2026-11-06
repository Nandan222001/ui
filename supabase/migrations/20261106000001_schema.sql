-- NMT Solutions schema (3NF). Content is public-read; all submissions are server-only (service role).
create extension if not exists citext;

-- ---------- enums ----------
create type offering_kind as enum ('platform', 'solution');
create type release_item_kind as enum ('highlight', 'known_issue');
create type finding_kind as enum ('strength', 'gap');

-- ---------- shared lookup tables ----------
create table industries (
  id smallint generated always as identity primary key,
  name text not null unique
);
create table platform_types (
  id smallint generated always as identity primary key,
  name text not null unique
);
create table departments (
  id smallint generated always as identity primary key,
  name text not null unique
);
create table tags (
  id smallint generated always as identity primary key,
  name text not null unique
);
create table agent_categories (
  id smallint generated always as identity primary key,
  name text not null unique
);
create table autonomy_levels (
  id smallint generated always as identity primary key,
  label text not null unique,
  rank smallint not null unique
);
-- tools / systems referenced by agents and use cases (Zendesk, Slack, GPT-4...)
create table connectors (
  id integer generated always as identity primary key,
  name text not null unique
);

-- ---------- agents ----------
create table agents (
  id text primary key,                        -- slug e.g. nmt-chat-support
  code text not null unique,                  -- NMT-CHAT-01
  name text not null,
  role text not null,
  category_id smallint not null references agent_categories(id),
  autonomy_level_id smallint not null references autonomy_levels(id),
  description text not null,
  sample_prompt text not null,
  latency text,
  accuracy text,
  savings_multiplier text,
  sort_order smallint not null default 0
);
create index on agents(category_id);
create index on agents(autonomy_level_id);

create table agent_connectors (
  agent_id text not null references agents(id) on delete cascade,
  connector_id integer not null references connectors(id) on delete restrict,
  primary key (agent_id, connector_id)
);
create index on agent_connectors(connector_id);

-- ---------- use cases ----------
create table use_cases (
  id text primary key,
  title text not null,
  department_id smallint not null references departments(id),
  tag_id smallint not null references tags(id),
  headline text not null,
  problem text not null,
  solution text not null,
  sort_order smallint not null default 0
);
create index on use_cases(department_id);
create index on use_cases(tag_id);

create table use_case_connectors (
  use_case_id text not null references use_cases(id) on delete cascade,
  connector_id integer not null references connectors(id) on delete restrict,
  primary key (use_case_id, connector_id)
);
create index on use_case_connectors(connector_id);

create table use_case_metrics (
  use_case_id text not null references use_cases(id) on delete cascade,
  position smallint not null,
  label text not null,
  value text not null,
  primary key (use_case_id, position)
);

-- ---------- case studies ----------
create table case_studies (
  slug text primary key,
  title text not null,
  description text not null,
  industry_id smallint not null references industries(id),
  platform_type_id smallint not null references platform_types(id),
  image_url text,
  published_on text not null,                 -- source data only has a year ("2025")
  metric_label text,
  metric_value text,
  check ((metric_label is null) = (metric_value is null))
);
create index on case_studies(industry_id);
create index on case_studies(platform_type_id);

create table case_study_sections (
  case_study_slug text not null references case_studies(slug) on delete cascade,
  position smallint not null,
  heading text not null,
  body text not null,
  primary key (case_study_slug, position)
);

-- ---------- platform pillars + solutions (same shape => one table, discriminated by kind) ----------
create table offerings (
  kind offering_kind not null,
  slug text not null,
  name text not null,
  tagline text not null,
  description text not null,
  sort_order smallint not null default 0,
  primary key (kind, slug)
);
create table offering_sections (
  kind offering_kind not null,
  slug text not null,
  position smallint not null,
  heading text not null,
  body text not null,
  primary key (kind, slug, position),
  foreign key (kind, slug) references offerings(kind, slug) on delete cascade
);
create table offering_stats (
  kind offering_kind not null,
  slug text not null,
  position smallint not null,
  label text not null,
  value text not null,
  primary key (kind, slug, position),
  foreign key (kind, slug) references offerings(kind, slug) on delete cascade
);

-- ---------- releases ----------
create table releases (
  id integer generated always as identity primary key,
  version text not null,
  codename text not null,
  released_on text not null,
  summary text not null,
  unique (version, codename)
);
create table release_items (
  release_id integer not null references releases(id) on delete cascade,
  kind release_item_kind not null,
  position smallint not null,
  body text not null,
  primary key (release_id, kind, position)
);

-- ---------- readiness quiz definition ----------
create table quiz_questions (
  id text primary key,
  position smallint not null unique,
  question text not null
);
create table quiz_options (
  id integer generated always as identity primary key,
  question_id text not null references quiz_questions(id) on delete cascade,
  position smallint not null,
  label text not null,
  unique (question_id, position)
);

-- ---------- people + submissions ----------
create table contacts (
  id uuid primary key default gen_random_uuid(),
  email citext not null unique,
  full_name text,
  company text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table demo_requests (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references contacts(id) on delete restrict,
  platform_type_id smallint references platform_types(id),
  created_at timestamptz not null default now()
);
create index on demo_requests(contact_id);
create index on demo_requests(platform_type_id);

create table readiness_audits (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid references contacts(id) on delete set null,
  tier text not null,
  score numeric(5,2) not null check (score between 0 and 100),
  first_action text not null,
  summary text not null,
  created_at timestamptz not null default now()
);
create index on readiness_audits(contact_id);

create table readiness_audit_answers (
  audit_id uuid not null references readiness_audits(id) on delete cascade,
  question_id text not null references quiz_questions(id),
  option_id integer not null references quiz_options(id),
  primary key (audit_id, question_id)
);
create index on readiness_audit_answers(option_id);
create index on readiness_audit_answers(question_id);

create table readiness_audit_findings (
  audit_id uuid not null references readiness_audits(id) on delete cascade,
  kind finding_kind not null,
  position smallint not null,
  body text not null,
  primary key (audit_id, kind, position)
);

create table usecase_analyses (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid references contacts(id) on delete set null,
  industry_id smallint references industries(id),
  platform_type_id smallint references platform_types(id),
  workflow_description text,
  team_size text,
  current_monthly_cost text,
  title text not null,
  executive_summary text not null,
  readiness_score numeric(5,2),
  monthly_savings_est text,
  time_saved_per_week_hours numeric(8,2),
  roi_percentage numeric(10,2),
  created_at timestamptz not null default now()
);
create index on usecase_analyses(contact_id);
create index on usecase_analyses(industry_id);
create index on usecase_analyses(platform_type_id);

create table usecase_analysis_modules (
  analysis_id uuid not null references usecase_analyses(id) on delete cascade,
  position smallint not null,
  name text not null,
  role text not null,
  autonomy_level_id smallint references autonomy_levels(id),
  description text not null,
  primary key (analysis_id, position)
);
create index on usecase_analysis_modules(autonomy_level_id);

create table usecase_analysis_module_connectors (
  analysis_id uuid not null,
  position smallint not null,
  connector_id integer not null references connectors(id) on delete restrict,
  primary key (analysis_id, position, connector_id),
  foreign key (analysis_id, position) references usecase_analysis_modules(analysis_id, position) on delete cascade
);
create index on usecase_analysis_module_connectors(connector_id);

create table usecase_analysis_milestones (
  analysis_id uuid not null references usecase_analyses(id) on delete cascade,
  position smallint not null,
  phase text not null,
  duration text not null,
  deliverables text not null,
  primary key (analysis_id, position)
);
create table usecase_analysis_governance_notes (
  analysis_id uuid not null references usecase_analyses(id) on delete cascade,
  position smallint not null,
  note text not null,
  primary key (analysis_id, position)
);

create table agent_playground_runs (
  id uuid primary key default gen_random_uuid(),
  agent_id text references agents(id) on delete set null,  -- null => "custom" agent
  user_query text not null,
  context_data jsonb,
  output text,
  created_at timestamptz not null default now()
);
create index on agent_playground_runs(agent_id);

-- ---------- updated_at trigger ----------
create function set_updated_at() returns trigger language plpgsql
set search_path = '' as $$ begin new.updated_at = now(); return new; end $$;
create trigger contacts_updated_at before update on contacts
  for each row execute function set_updated_at();

-- ---------- RLS ----------
-- Content tables: public read-only. Submission tables: RLS on, no policies => only the service role can access.
do $$
declare t text;
begin
  for t in select unnest(array[
    'industries','platform_types','departments','tags','agent_categories','autonomy_levels','connectors',
    'agents','agent_connectors','use_cases','use_case_connectors','use_case_metrics',
    'case_studies','case_study_sections','offerings','offering_sections','offering_stats',
    'releases','release_items','quiz_questions','quiz_options'])
  loop
    execute format('alter table public.%I enable row level security', t);
    execute format('create policy "public read" on public.%I for select to anon, authenticated using (true)', t);
  end loop;
  for t in select unnest(array[
    'contacts','demo_requests','readiness_audits','readiness_audit_answers','readiness_audit_findings',
    'usecase_analyses','usecase_analysis_modules','usecase_analysis_module_connectors',
    'usecase_analysis_milestones','usecase_analysis_governance_notes','agent_playground_runs'])
  loop
    execute format('alter table public.%I enable row level security', t);
  end loop;
end $$;
