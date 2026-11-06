-- Preserve source ordering that join tables / unordered entities would otherwise lose.
alter table agent_connectors add column position smallint not null default 0;
alter table use_case_connectors add column position smallint not null default 0;
alter table case_studies add column sort_order smallint not null default 0;
alter table releases add column sort_order smallint not null default 0;

-- backfill from physical insertion order (tables were freshly seeded, never updated)
update agent_connectors t set position = s.rn - 1
from (select agent_id, connector_id, row_number() over (partition by agent_id order by ctid) rn from agent_connectors) s
where t.agent_id = s.agent_id and t.connector_id = s.connector_id;
update use_case_connectors t set position = s.rn - 1
from (select use_case_id, connector_id, row_number() over (partition by use_case_id order by ctid) rn from use_case_connectors) s
where t.use_case_id = s.use_case_id and t.connector_id = s.connector_id;
update case_studies t set sort_order = s.rn - 1
from (select slug, row_number() over (order by ctid) rn from case_studies) s where t.slug = s.slug;
update releases set sort_order = id - 1;
