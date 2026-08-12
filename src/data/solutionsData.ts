export interface SolutionSection {
  heading: string;
  body: string;
}

export interface SolutionStat {
  label: string;
  value: string;
}

export interface SolutionDetail {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  sections: SolutionSection[];
  stats?: SolutionStat[];
}

export const SOLUTION_DETAILS: SolutionDetail[] = [
  {
    slug: "ai-accounting-software",
    name: "Accounting",
    tagline: "AUTONOMOUS ACCOUNTING OPERATIONS",
    description:
      "Hero sits inside your general ledger and bank feeds around the clock, closing the books faster and catching the discrepancies a monthly review would miss.",
    sections: [
      {
        heading: "Every ledger question answered on the spot",
        body: "Instead of waiting on a controller to pull a report, finance teams ask Hero directly and get a live answer sourced from the general ledger itself: today's consolidated cash position across every bank account, how much headroom is left on a credit facility, which customers have aged past 60 days and for how much, or which invoices look like duplicates and what they'd cost if paid twice. Because Hero reads the underlying data instead of a cached dashboard, the numbers it returns match what's actually posted right now.",
      },
      {
        heading: "From flagging problems to fixing them",
        body: "Once Hero can answer a question, the natural next step is letting it act on the answer: clearing a duplicate invoice, chasing a past-due account, or booking a routine adjusting entry for review. Accounting is consistently one of the highest-return places to deploy this kind of agent, because so much of the work is high-frequency, rules-based, and painfully manual today.",
      },
      {
        heading: "Built to pass an audit, not just a demo",
        body: "Every entry Hero touches carries a full audit trail back to source documents, with tiered approval thresholds so nothing above a set dollar amount posts without a human signing off. The platform runs on encrypted infrastructure, never trains on your ledger data, and keeps each customer's environment fully isolated from every other tenant.",
      },
      {
        heading: "Where accounting teams are already using it",
        body: "One deployment cut a global close cycle by roughly a fifth by having Hero pre-match transactions ahead of the accounting team's review. Another replaced a standing 'keep the lights on' support contract with a Hero Pro engagement spanning manufacturing, technology, and healthcare finance functions, cutting the ongoing cost of just maintaining the ERP without adding new capability.",
      },
    ],
    stats: [
      { label: "Close Cycle Reduction", value: "~20%" },
      { label: "ROI vs. Sales/Marketing AI Use Cases", value: "+30%" },
      { label: "Duplicate Invoice Detection", value: "Same-Day" },
      { label: "Deployment SLA", value: "91 Days" },
    ],
  },
  {
    slug: "ai-hr-software",
    name: "HR",
    tagline: "AI-POWERED WORKFORCE OPERATIONS",
    description:
      "Hero answers the employee and manager questions that normally sit in an HR ticket queue for days, then handles the routine workflow behind the answer.",
    sections: [
      {
        heading: "A live view into your workforce data",
        body: "HR and people teams can ask Hero for the state of things right now: which top performers are due for a promotion conversation, which pay changes crossed a compliance threshold, how many bonus payouts are pending and their total value, who still hasn't finished benefits enrollment, or which reviews are overdue in a given department. Hero pulls straight from the HRIS, so the numbers reflect the current pay period, not last month's export.",
      },
      {
        heading: "Turning every answer into a resolved ticket",
        body: "Most HR inquiries follow a predictable pattern, which makes them a strong candidate for automation once Hero can already answer the question reliably. It can route a benefits enrollment reminder, flag a wage garnishment for processing, or nudge a hiring manager about a requisition that's been open for two months, closing the loop without a person having to notice the issue first.",
      },
      {
        heading: "Governance built for people data",
        body: "Because HR systems hold some of the most sensitive data in the enterprise, Hero is built around certified information-security standards, encrypts everything in transit and at rest, never trains on customer data, and keeps every tenant's environment isolated. Most enterprise AI deployments stall before they reach production; Hero is engineered specifically to be one of the few that makes it there.",
      },
      {
        heading: "Proven inside real HR organizations",
        body: "One customer folded Hero into an Oracle-based finance and HR stack to speed up close-adjacent workforce reporting. Others have used a broader Hero Pro engagement to take on the ongoing maintenance work that used to require a dedicated support contract, across manufacturing, technology, and healthcare employers.",
      },
    ],
    stats: [
      { label: "Enterprise AI Success Rate", value: "5% Industry / Dayos Beats It" },
      { label: "Overdue Review Visibility", value: "Real-Time" },
      { label: "Benefits Enrollment Gaps Caught", value: "Automatic" },
      { label: "Deployment SLA", value: "91 Days" },
    ],
  },
  {
    slug: "ai-finance-software",
    name: "Finance",
    tagline: "REAL-TIME FINANCIAL INTELLIGENCE",
    description:
      "Hero gives FP&A and treasury teams a direct line into live financial data, so forecasting, budget variance, and risk exposure stop depending on last week's spreadsheet.",
    sections: [
      {
        heading: "Forecasts and variances, answered instantly",
        body: "Finance leaders can ask Hero how a revenue shortfall would ripple through covenant thresholds, what the updated quarterly forecast looks like against the prior version, how the cash conversion cycle has moved quarter over quarter, or which departments are running over budget and by how much. Because it's reading live financial data rather than a monthly snapshot, the answer reflects transactions posted this morning.",
      },
      {
        heading: "From reporting variance to managing it",
        body: "Once a variance is visible, Hero can go further: surfacing which capital projects are behind schedule and under budget at the same time, recommending a hedge against a specific currency exposure, or explaining why an effective tax rate shifted this quarter. This category has repeatedly shown some of the strongest returns of any AI use case in the enterprise, well ahead of typical sales or marketing deployments.",
      },
      {
        heading: "Security that treasury teams can sign off on",
        body: "Because financial forecasts and covenant data are among the most sensitive numbers a company holds, Hero runs on certified, encrypted infrastructure, never trains on customer financial data, and keeps every customer's data fully partitioned from every other customer's environment.",
      },
      {
        heading: "A faster path to close and confidence",
        body: "Finance organizations have used Hero to shrink month-end close timelines by roughly a fifth and to replace standing advisory or 'keep the lights on' support arrangements with a fixed-scope Hero Pro engagement, spanning industries from manufacturing to healthcare finance.",
      },
    ],
    stats: [
      { label: "ROI vs. Sales/Marketing AI Use Cases", value: "+30%" },
      { label: "Close Cycle Reduction", value: "~20%" },
      { label: "Cash Conversion Visibility", value: "Live" },
      { label: "Deployment SLA", value: "91 Days" },
    ],
  },
  {
    slug: "ai-procurement-software",
    name: "Procurement",
    tagline: "AUTONOMOUS SOURCE-TO-PAY OPERATIONS",
    description:
      "Hero watches sourcing events, supplier performance, and purchase orders in real time, surfacing savings and risk that usually only show up in a quarterly spend review.",
    sections: [
      {
        heading: "Procurement questions, answered as they happen",
        body: "Procurement teams can ask Hero which sourcing events are closing this week, which suppliers have gone quiet for a year or more, which vendors are failing a compliance requalification, how much spend has slipped outside approved contracts, or which purchase orders are about to expire. Hero reads directly from sourcing and ERP systems, so nothing is stale by the time someone acts on it.",
      },
      {
        heading: "Turning visibility into completed work",
        body: "Once maverick spend or a lapsed supplier is flagged, Hero can move on it directly, routing a requisition rejection back for correction, escalating a price variance on an open PO, or compiling the savings realized across recent sourcing events against baseline pricing. Procurement is one of the categories where this kind of automation consistently outperforms typical enterprise AI rollouts in sales or marketing.",
      },
      {
        heading: "Vendor data handled with enterprise-grade controls",
        body: "Contract terms and supplier data stay inside a certified, encrypted environment that's fully isolated per customer, with no model training on your procurement data and full customer control over how any of it is shared.",
      },
      {
        heading: "Savings that show up in the numbers",
        body: "Deployments have delivered measurable savings against sourcing baselines while cutting the manual legwork of chasing supplier compliance and PO variance, freeing procurement staff to spend time on supplier strategy instead of spreadsheet reconciliation.",
      },
    ],
    stats: [
      { label: "ROI vs. Sales/Marketing AI Use Cases", value: "+30%" },
      { label: "Sourcing Savings vs. Baseline", value: "~10% Avg." },
      { label: "Inactive Supplier Detection", value: "Automatic" },
      { label: "Deployment SLA", value: "91 Days" },
    ],
  },
  {
    slug: "ai-it-management-software",
    name: "IT Management",
    tagline: "AGENTIC IT SERVICE & SPEND MANAGEMENT",
    description:
      "Hero replaces the standing application-support contract with an agent that answers portfolio questions instantly and takes on the maintenance work behind them.",
    sections: [
      {
        heading: "Portfolio health, on demand",
        body: "IT and PMO leads can ask Hero which projects are at risk from resource shortages, what the overall health of the project portfolio looks like right now, which grants or budgets have funds expiring this quarter, how planned hours compare to actual hours logged this month, or who has exceeded allowable overtime across active projects. The answers come straight from live resourcing and ticketing data.",
      },
      {
        heading: "Insure, augment, or replace your support budget",
        body: "Dayos frames IT spend as three tiers a team can mix: a usage dashboard that shows exactly where support budget is going, on-demand expert engineers who plug gaps in application support without a long-term hire, and an AI layer that takes over back-office and routine usage work outright. The goal is getting more capability out of the same support budget, not just cutting it.",
      },
      {
        heading: "Outcome-based pilots, not advisory decks",
        body: "Rather than another AI strategy engagement, Hero ships as a 90-day pilot with a forward-deployed engineering team attached, measured against a concrete outcome instead of a slide about potential. Most enterprise AI initiatives never make it past pilot; this is built specifically to be one of the ones that does.",
      },
      {
        heading: "Deploy it the way your infrastructure requires",
        body: "Teams can run Hero as a fully managed SaaS instance with no infrastructure to stand up, a hybrid model with a cloud-hosted app in front of a self-hosted AI layer, or a fully self-hosted deployment for teams that need maximum control over where the model and data live. Every option runs on certified, encrypted infrastructure with isolated tenant environments and no training on customer data.",
      },
    ],
    stats: [
      { label: "Typical Enterprise AI Pilot Success Rate", value: "~5%" },
      { label: "Close-Adjacent Cycle Time Cut", value: "~20%" },
      { label: "Pilot Length", value: "90 Days" },
      { label: "Deployment SLA", value: "91 Days" },
    ],
  },
];
