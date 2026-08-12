export interface PlatformSection {
  heading: string;
  body: string;
}

export interface PlatformStat {
  label: string;
  value: string;
}

export interface PlatformPillar {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  sections: PlatformSection[];
  stats?: PlatformStat[];
}

export const PLATFORM_PILLARS: PlatformPillar[] = [
  {
    slug: "hero-answers",
    name: "Hero Answers",
    tagline: "REAL-TIME BUSINESS INTELLIGENCE",
    description:
      "Ask a plain question about your business and get a trustworthy answer back immediately, sourced straight from the systems of record that actually run your company, not a guess about the public internet.",
    sections: [
      {
        heading: "Stop hunting, start asking",
        body: "Your numbers live in five different platforms, and each one insists it holds the real version. Getting a single answer usually means logging into each system, exporting a report, and stitching the results together in a spreadsheet before anyone can trust it. Hero Answers skips all of that by connecting directly into your ERP, HR, and ticketing systems and responding in plain language, in seconds, with the underlying data attached.",
      },
      {
        heading: "Fluent in your business, not a generic one",
        body: "Off-the-shelf assistants only know what's public. Hero Answers is trained on your chart of accounts, your org structure, your internal shorthand, and the quirks of how your company actually operates, so it can answer questions that span multiple departments and multiple ERP modules in a single pass.",
      },
      {
        heading: "Answers that survive an audit",
        body: "Every query runs through the access controls you already have. Hero Answers inherits existing user roles and permissions, connects over encrypted, secure API channels, and keeps a full audit trail of what was asked and what was returned, so speed never comes at the cost of governance.",
      },
      {
        heading: "The payoff of putting answers on tap",
        body: "When people stop waiting on data teams to pull one-off reports, the hours add up fast, and so do the savings from shifting routine reporting work to self-service.",
      },
    ],
    stats: [
      { label: "Hours reclaimed / employee / year", value: "450+" },
      { label: "Workweeks recovered annually", value: "~12" },
      { label: "3-year savings from self-service", value: "$2M+" },
      { label: "Employees wanting mobile-ready answers", value: "57%" },
    ],
  },
  {
    slug: "hero-actions",
    name: "Hero Actions",
    tagline: "AUTONOMOUS WORKFLOW EXECUTION",
    description:
      "Hero Actions turns your AI from an advisor into an operator, logging into your systems, running multi-step workflows end to end, and clearing the queue of grunt work nobody wants, with a human always a click away from stepping in.",
    sections: [
      {
        heading: "From advice to execution",
        body: "Most AI tools stop at a suggestion and leave the clicking to you. Hero Actions is a copilot for the workflow itself: it navigates your applications, pulls and cross-checks data, and carries out multi-step processes on its own, handling the tedious middle steps so your team can stay focused on the decisions that actually need a person.",
      },
      {
        heading: "Oversight that doesn't slow anything down",
        body: "Low-risk, routine steps run quietly in the background. Anything with real financial or operational weight pauses for a one-click human approval before it goes through, so you get the speed of automation without giving up control over what matters.",
      },
      {
        heading: "One agent, every system you run on",
        body: "Hero Actions moves across your stack the way a person would, working through finance close tasks, HR requests, procurement approvals, and IT tickets inside the same session, instead of stopping at the edge of a single application.",
      },
      {
        heading: "What handing off the busywork is worth",
        body: "Automating the repetitive slice of the workday frees up meaningfully more time than most teams expect, and it tends to pay off twice: once in hours saved, and again in the people who stick around because the job got less tedious.",
      },
    ],
    stats: [
      { label: "Time reclaimed per employee", value: "Up to 70%" },
      { label: "Cross-functional tasks automatable", value: "~50%" },
      { label: "Retention lift from reskilling", value: "4x" },
    ],
  },
  {
    slug: "hero-experts",
    name: "Hero Experts",
    tagline: "AI-ACCELERATED IMPLEMENTATION",
    description:
      "When getting Hero live still calls for a human hand, Hero Experts pairs AI-accelerated setup with a bench of veteran ERP specialists who get you into production in weeks, not the better part of a year.",
    sections: [
      {
        heading: "Decades of ERP scar tissue, compressed",
        body: "The team behind Hero Experts came up inside the product and consulting arms of the major ERP vendors, carrying decades of combined implementation experience. They now run that expertise through the same AI tooling your team will use, instead of the slow, manual playbooks a traditional systems integrator relies on.",
      },
      {
        heading: "Live before the quarter turns over",
        body: "A focused starter engagement can be live in under two weeks because the AI handles configuration, data mapping, and testing in parallel rather than in the usual long sequential handoffs between consulting teams.",
      },
      {
        heading: "A managed service built to pay for itself",
        body: "Larger engagements come with ongoing spend visibility, budget controls, and ticket-based support built in from day one, so the program keeps tuning itself well after go-live instead of quietly drifting out of shape.",
      },
      {
        heading: "Full visibility from kickoff to go-live",
        body: "Every engagement runs through a shared project portal with milestone tracking, so you always know exactly which specialist is on point and how close the work is to done.",
      },
    ],
    stats: [
      { label: "Starter pilot go-live", value: "< 2 weeks" },
      { label: "Combined ERP implementation experience", value: "25+ yrs" },
      { label: "Typical 90-day savings, larger engagements", value: "$2M-$10M" },
    ],
  },
];
