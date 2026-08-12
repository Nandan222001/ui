export interface ReleaseEntry {
  version: string;
  codename: string;
  date: string;
  summary: string;
  highlights: string[];
  knownIssues?: string[];
}

export const RELEASES: ReleaseEntry[] = [
  {
    version: "Version 2.0",
    codename: "Athena",
    date: "June 9, 2026",
    summary:
      "Athena moves Hero to the front of the queue for back-office support, closing out Oracle and Workday tickets start to finish, answering questions about Oracle data in ordinary language, and making Oracle configuration changes through conversation instead of clicks.",
    highlights: [
      "Closes roughly 60% of incoming Oracle and Workday support tickets on its own, no human hand-off required.",
      "Lets users open tickets conversationally, and automatically flags related or duplicate tickets across the queue.",
      "Answers plain-language questions against Oracle data and can generate reports directly from the conversation.",
      "Builds out chart-of-accounts structures and manages value sets for Oracle General Ledger.",
      "Connects to Slack so a dedicated #oracle-help channel can route requests straight to Hero.",
      "Runs every action through a five-stage reasoning check before anything is committed.",
      "Adds a preview mode for Workday HCM queries, so results can be reviewed before they're finalized.",
      "Strengthens security with per-tenant isolation, query validation, and additional guardrails for production environments.",
      "Refreshes the interface, including visual themes that shift with the time of day.",
    ],
    knownIssues: [
      "Microsoft Copilot integration is in progress and not yet available.",
      "Performance tuning for peak-load periods is still being finalized.",
    ],
  },
];
