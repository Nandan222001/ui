export interface CaseStudySection {
  heading: string;
  body: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  industry: string;
  platformType: string;
  image: string;
  date: string;
  metric?: { label: string; value: string };
  sections: CaseStudySection[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "agent-orchestrated-workflows",
    title: "Streamline Manual Processes with Agentic Workflows",
    description:
      "A leading analyst firm named agentic AI the top strategic enterprise technology trend for 2025. Dayos has spent the year turning that forecast into deployed infrastructure, and now leads the category for enterprise business applications.",
    industry: "Tech",
    platformType: "Hero Actions",
    image: "/images/it-integrate.webp",
    date: "January 2025",
    sections: [
      {
        heading: "The challenge",
        body: "A mid-market technology company had automated the easy parts of its back office years earlier, but a long tail of manual, judgment-heavy workflows remained stuck between systems: reconciling exception reports by hand, re-keying data across a patchwork of point tools, and routing approvals over email because no workflow engine covered the edge case. Every one of these tasks was too irregular to script with traditional RPA, but too repetitive to keep paying skilled staff to do by hand.",
      },
      {
        heading: "The approach",
        body: "Dayos deployed Hero Actions directly against the company's core systems rather than building a separate automation layer on top. Instead of scripting each exception path in advance, Hero was given the underlying business context and left to reason through the actual workflow the way a trained analyst would: reading the exception, checking it against policy, and either resolving it or routing it with a clear explanation attached. Within the first deployment cycle, Hero was handling the majority of the routine workflow volume end to end, with a human reviewing only the cases that fell outside its confidence threshold.",
      },
      {
        heading: "The outcome",
        body: "Within a single fiscal quarter, the manual backlog that had accumulated for years was cleared and stayed clear, with new exceptions resolved same-day instead of queuing for a weekly batch review. The operations team redirected the hours it recovered toward process improvement work instead of process execution, and leadership pointed to the deployment internally as the proof point that justified expanding Hero Actions into two additional departments the following year.",
      },
    ],
  },
  {
    slug: "beyond-ktlo",
    title: "Go Beyond KTLO with Hero Pro",
    description:
      "Keeping the lights on has long been treated as the ceiling for enterprise application support. Hero Pro treats it as the floor: every twelve months, an autonomous agent-build process ships a brand-new custom agent aimed at whatever manual workflow is currently costing the customer the most.",
    industry: "Manufacturing, Tech, Healthcare",
    platformType: "Hero Experts",
    image: "/images/accounting-generalLedger.webp",
    date: "January 2025",
    sections: [
      {
        heading: "The challenge",
        body: "Across manufacturing, technology, and healthcare, a common pattern kept showing up: enterprises were paying standing support contracts just to keep existing ERP and HR systems running, with no path for that spend to ever produce new capability. Support headcount held steady or grew even as the underlying systems matured, because maintenance work doesn't shrink on its own, and every year of deferred modernization added another layer of manual workaround.",
      },
      {
        heading: "The approach",
        body: "Hero Pro replaced the standing support arrangement with a structure built around continuous improvement rather than flat maintenance. A Hero Experts team of specialists paired with the platform's autonomous agent-build pipeline to identify, each year, the single manual workflow costing the customer the most in labor and error-correction, then designed and shipped a purpose-built agent against exactly that workflow, on top of handling the day-to-day support load the old contract used to cover.",
      },
      {
        heading: "The outcome",
        body: "Customers across all three industries saw their support footprint shrink with each passing year, even as the number of automated workflows grew, because each new custom agent absorbed work a human support team used to have to do manually. One healthcare deployment reached a state where routine ticket volume had fallen by more than half within eighteen months, while the manufacturing and technology cohorts reported comparable reductions in the recurring maintenance hours billed against their support budgets.",
      },
    ],
  },
  {
    slug: "guaranteed-close-earlier",
    title: "Reduce Month-End Close Time by 20% with Agentic AI",
    description:
      "An AI-driven close agent gave one Oracle-based finance organization an accelerated month-end close cycle and cost savings that reached beyond what the underlying ERP system alone could deliver.",
    industry: "Tech",
    platformType: "Hero Actions",
    image: "/images/accounting-accountsReceivable.webp",
    date: "January 2025",
    metric: { label: "Month-End Close Time", value: "-20%" },
    sections: [
      {
        heading: "The challenge",
        body: "A technology company running its finance operations on an Oracle ERP stack had a close process that, while functional, still leaned heavily on a finance team manually matching transactions, chasing down unreconciled line items, and re-checking entries before books could be finalized each month. The close reliably finished, but only after long hours in the final week of every cycle, and the team had little room left over to spend on analysis instead of assembly.",
      },
      {
        heading: "The approach",
        body: "Dayos deployed a close-focused Hero Actions agent inside the existing Oracle environment, configured to pre-match transactions against source documents automatically, flag likely discrepancies before a human ever looked at them, and stage routine adjusting entries for accountant review rather than manual entry. Because the agent worked from the same ledger data the finance team already trusted, adoption didn't require a parallel system or a change in the underlying chart of accounts.",
      },
      {
        heading: "The outcome",
        body: "Month-end close time fell by 20%, driven almost entirely by the hours no longer spent on manual matching and first-pass reconciliation. The finance team also reported cost savings beyond what the base ERP system had delivered on its own, since the close agent's pre-matching work reduced the need for outside reconciliation support the team had previously relied on during peak close weeks.",
      },
    ],
  },
];
