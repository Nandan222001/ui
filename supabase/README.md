# Database (Supabase project `nmt-solutions`, ref `rcsyuzumqdyauakdvfuy`)

Apply `migrations/*` in order, then `seed.sql` (regenerate with `npx tsx scripts/generate-seed.ts`).

**Content** (public read via RLS): `industries, platform_types, departments, tags, agent_categories,
autonomy_levels, connectors` (lookups) -> `agents`, `use_cases`, `case_studies`, `offerings`
(platform pillars + solutions, discriminated by `kind`), `releases`, `quiz_questions/options`; child
tables hold ordered sections/metrics/stats and many-to-many links (`agent_connectors`, `use_case_connectors`).

**Submissions** (RLS on, no policies => server/service role only): `contacts` (unique citext email) <-
`demo_requests`; `readiness_audits` + answers (FK to quiz options) + findings; `usecase_analyses` + modules,
module connectors, milestones, governance notes; `agent_playground_runs`. Written only through the atomic
`SECURITY INVOKER` functions in migration 2, executable by `service_role` only.
