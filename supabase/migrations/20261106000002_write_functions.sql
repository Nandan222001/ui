-- Atomic write paths used by the Express server (service role only).

create function upsert_contact(p_email text, p_full_name text, p_company text)
returns uuid language plpgsql set search_path = '' as $$
declare v_id uuid;
begin
  if p_email is null or btrim(p_email) = '' then return null; end if;
  insert into public.contacts(email, full_name, company)
  values (btrim(p_email), nullif(btrim(p_full_name), ''), nullif(btrim(p_company), ''))
  on conflict (email) do update
    set full_name = coalesce(excluded.full_name, public.contacts.full_name),
        company   = coalesce(excluded.company, public.contacts.company)
  returning id into v_id;
  return v_id;
end $$;

create function submit_demo_request(p_email text, p_full_name text, p_company text, p_project_type text)
returns uuid language plpgsql set search_path = '' as $$
declare v_contact uuid; v_pt smallint; v_id uuid;
begin
  v_contact := public.upsert_contact(p_email, p_full_name, p_company);
  if v_contact is null then raise exception 'email is required'; end if;
  if nullif(btrim(p_project_type), '') is not null then
    insert into public.platform_types(name) values (btrim(p_project_type))
    on conflict (name) do update set name = excluded.name returning id into v_pt;
  end if;
  insert into public.demo_requests(contact_id, platform_type_id) values (v_contact, v_pt) returning id into v_id;
  return v_id;
end $$;

create function save_readiness_audit(p_answers jsonb, p_result jsonb)
returns uuid language plpgsql set search_path = '' as $$
declare v_id uuid;
begin
  insert into public.readiness_audits(tier, score, first_action, summary)
  values (p_result->>'tier',
          greatest(0, least(100, coalesce((p_result->>'score')::numeric, 0))),
          p_result->>'firstAction', p_result->>'summary')
  returning id into v_id;

  insert into public.readiness_audit_answers(audit_id, question_id, option_id)
  select v_id, a->>'questionId', o.id
  from jsonb_array_elements(coalesce(p_answers, '[]')) a
  join public.quiz_options o
    on o.question_id = a->>'questionId' and o.position = (a->>'optionIndex')::int;

  insert into public.readiness_audit_findings(audit_id, kind, position, body)
  select v_id, 'strength', (t.i - 1)::smallint, t.b
  from jsonb_array_elements_text(coalesce(p_result->'strengths', '[]')) with ordinality t(b, i);
  insert into public.readiness_audit_findings(audit_id, kind, position, body)
  select v_id, 'gap', (t.i - 1)::smallint, t.b
  from jsonb_array_elements_text(coalesce(p_result->'vulnerabilities', '[]')) with ordinality t(b, i);
  return v_id;
end $$;

create function save_usecase_analysis(p_input jsonb, p_result jsonb)
returns uuid language plpgsql set search_path = '' as $$
declare v_id uuid; v_ind smallint; v_pt smallint; m record; c text; v_conn integer;
begin
  if nullif(btrim(p_input->>'industry'), '') is not null then
    insert into public.industries(name) values (btrim(p_input->>'industry'))
    on conflict (name) do update set name = excluded.name returning id into v_ind;
  end if;
  if nullif(btrim(p_input->>'department'), '') is not null then
    insert into public.platform_types(name) values (btrim(p_input->>'department'))
    on conflict (name) do update set name = excluded.name returning id into v_pt;
  end if;

  insert into public.usecase_analyses(industry_id, platform_type_id, workflow_description, team_size,
    current_monthly_cost, title, executive_summary, readiness_score, monthly_savings_est,
    time_saved_per_week_hours, roi_percentage)
  values (v_ind, v_pt, p_input->>'workflowDescription', p_input->>'teamSize', p_input->>'currentCost',
    p_result->>'title', p_result->>'executiveSummary', (p_result->>'readinessScore')::numeric,
    p_result->>'monthlySavingsEst', (p_result->>'timeSavedPerWeekHours')::numeric,
    (p_result->>'roiPercentage')::numeric)
  returning id into v_id;

  for m in
    select (t.i - 1)::smallint as pos, t.j as j
    from jsonb_array_elements(coalesce(p_result->'agentModules', '[]')) with ordinality t(j, i)
  loop
    insert into public.usecase_analysis_modules(analysis_id, position, name, role, autonomy_level_id, description)
    values (v_id, m.pos, m.j->>'name', m.j->>'role',
      (select id from public.autonomy_levels
        where label = m.j->>'autonomyLevel'
           or rank = nullif(substring(m.j->>'autonomyLevel' from 'L(\d)'), '')::int
        order by (label = m.j->>'autonomyLevel') desc limit 1),
      m.j->>'description');
    for c in select distinct btrim(x) from jsonb_array_elements_text(coalesce(m.j->'connectors', '[]')) x
             where btrim(x) <> ''
    loop
      insert into public.connectors(name) values (c)
      on conflict (name) do update set name = excluded.name returning id into v_conn;
      insert into public.usecase_analysis_module_connectors values (v_id, m.pos, v_conn);
    end loop;
  end loop;

  insert into public.usecase_analysis_milestones(analysis_id, position, phase, duration, deliverables)
  select v_id, (t.i - 1)::smallint, t.j->>'phase', t.j->>'duration', t.j->>'deliverables'
  from jsonb_array_elements(coalesce(p_result->'milestones', '[]')) with ordinality t(j, i);

  insert into public.usecase_analysis_governance_notes(analysis_id, position, note)
  select v_id, (t.i - 1)::smallint, t.b
  from jsonb_array_elements_text(coalesce(p_result->'governanceNotes', '[]')) with ordinality t(b, i);
  return v_id;
end $$;

create function save_playground_run(p_agent_id text, p_query text, p_context jsonb, p_output text)
returns uuid language plpgsql set search_path = '' as $$
declare v_id uuid;
begin
  insert into public.agent_playground_runs(agent_id, user_query, context_data, output)
  values ((select id from public.agents where id = p_agent_id), p_query, p_context, p_output)
  returning id into v_id;
  return v_id;
end $$;

-- lock down: callable only with the service role key
revoke all on function upsert_contact, submit_demo_request, save_readiness_audit,
  save_usecase_analysis, save_playground_run from public, anon, authenticated;
grant execute on function upsert_contact, submit_demo_request, save_readiness_audit,
  save_usecase_analysis, save_playground_run to service_role;
