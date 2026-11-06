// Generates supabase/seed.sql from the static content in src/data. Run: npx tsx scripts/generate-seed.ts
import { writeFileSync } from "node:fs";
import { FEATURED_AGENTS, ENTERPRISE_USE_CASES, READINESS_QUIZ_QUESTIONS } from "../src/data/mockData";
import { CASE_STUDIES } from "../src/data/caseStudiesData";
import { PLATFORM_PILLARS } from "../src/data/platformData";
import { SOLUTION_DETAILS } from "../src/data/solutionsData";
import { RELEASES } from "../src/data/releasesData";

const q = (v: string | undefined | null) => (v == null ? "null" : `'${v.replace(/'/g, "''")}'`);
const out: string[] = [];
const uniq = (xs: string[]) => [...new Set(xs)];
const lookup = (table: string, col: string, vals: string[]) =>
  out.push(`insert into ${table}(${col}) values ${uniq(vals).map((v) => `(${q(v)})`).join(", ")} on conflict do nothing;`);

lookup("industries", "name", CASE_STUDIES.map((c) => c.industry));
lookup("platform_types", "name", CASE_STUDIES.map((c) => c.platformType));
lookup("departments", "name", ENTERPRISE_USE_CASES.map((u) => u.department));
lookup("tags", "name", ENTERPRISE_USE_CASES.map((u) => u.tag));
lookup("agent_categories", "name", FEATURED_AGENTS.map((a) => a.category));
lookup("connectors", "name", [...FEATURED_AGENTS.flatMap((a) => a.connectors), ...ENTERPRISE_USE_CASES.flatMap((u) => u.systemIntegration)]);
const levels = uniq(FEATURED_AGENTS.map((a) => a.autonomyLevel)).sort();
out.push(`insert into autonomy_levels(label, rank) values ${levels.map((l) => `(${q(l)}, ${parseInt(l.match(/L(\d)/)![1])})`).join(", ")} on conflict do nothing;`);

FEATURED_AGENTS.forEach((a, i) => {
  out.push(`insert into agents(id, code, name, role, category_id, autonomy_level_id, description, sample_prompt, latency, accuracy, savings_multiplier, sort_order) values (${q(a.id)}, ${q(a.code)}, ${q(a.name)}, ${q(a.role)}, (select id from agent_categories where name=${q(a.category)}), (select id from autonomy_levels where label=${q(a.autonomyLevel)}), ${q(a.description)}, ${q(a.samplePrompt)}, ${q(a.metrics.latency)}, ${q(a.metrics.accuracy)}, ${q(a.metrics.savingsMultiplier)}, ${i});`);
  a.connectors.forEach((c, p) => out.push(`insert into agent_connectors(agent_id, connector_id, position) values (${q(a.id)}, (select id from connectors where name=${q(c)}), ${p});`));
});

ENTERPRISE_USE_CASES.forEach((u, i) => {
  out.push(`insert into use_cases(id, title, department_id, tag_id, headline, problem, solution, sort_order) values (${q(u.id)}, ${q(u.title)}, (select id from departments where name=${q(u.department)}), (select id from tags where name=${q(u.tag)}), ${q(u.headline)}, ${q(u.problem)}, ${q(u.solution)}, ${i});`);
  u.systemIntegration.forEach((c, p) => out.push(`insert into use_case_connectors(use_case_id, connector_id, position) values (${q(u.id)}, (select id from connectors where name=${q(c)}), ${p});`));
  u.impactMetrics.forEach((m, p) => out.push(`insert into use_case_metrics values (${q(u.id)}, ${p}, ${q(m.label)}, ${q(m.value)});`));
});

CASE_STUDIES.forEach((c, i) => {
  out.push(`insert into case_studies(slug, title, description, industry_id, platform_type_id, image_url, published_on, metric_label, metric_value, sort_order) values (${q(c.slug)}, ${q(c.title)}, ${q(c.description)}, (select id from industries where name=${q(c.industry)}), (select id from platform_types where name=${q(c.platformType)}), ${q(c.image)}, ${q(c.date)}, ${q(c.metric?.label)}, ${q(c.metric?.value)}, ${i});`);
  c.sections.forEach((s, p) => out.push(`insert into case_study_sections values (${q(c.slug)}, ${p}, ${q(s.heading)}, ${q(s.body)});`));
});

const offerings = [
  ...PLATFORM_PILLARS.map((o) => ({ kind: "platform", ...o })),
  ...SOLUTION_DETAILS.map((o) => ({ kind: "solution", ...o })),
];
offerings.forEach((o, i) => {
  out.push(`insert into offerings(kind, slug, name, tagline, description, sort_order) values (${q(o.kind)}, ${q(o.slug)}, ${q(o.name)}, ${q(o.tagline)}, ${q(o.description)}, ${i});`);
  o.sections.forEach((s, p) => out.push(`insert into offering_sections values (${q(o.kind)}, ${q(o.slug)}, ${p}, ${q(s.heading)}, ${q(s.body)});`));
  (o.stats ?? []).forEach((s, p) => out.push(`insert into offering_stats values (${q(o.kind)}, ${q(o.slug)}, ${p}, ${q(s.label)}, ${q(s.value)});`));
});

RELEASES.forEach((r, i) => {
  out.push(`with r as (insert into releases(version, codename, released_on, summary, sort_order) values (${q(r.version)}, ${q(r.codename)}, ${q(r.date)}, ${q(r.summary)}, ${i}) returning id) insert into release_items select r.id, v.kind::release_item_kind, v.pos, v.body from r, (values ${[
    ...r.highlights.map((h, p) => `('highlight', ${p}, ${q(h)})`),
    ...(r.knownIssues ?? []).map((h, p) => `('known_issue', ${p}, ${q(h)})`),
  ].join(", ")}) as v(kind, pos, body);`);
});

READINESS_QUIZ_QUESTIONS.forEach((qq, i) => {
  out.push(`insert into quiz_questions values (${q(qq.id)}, ${i}, ${q(qq.question)});`);
  qq.options.forEach((o, p) => out.push(`insert into quiz_options(question_id, position, label) values (${q(qq.id)}, ${p}, ${q(o)});`));
});

writeFileSync("supabase/seed.sql", out.join("\n") + "\n");
console.log(out.length, "statements");
