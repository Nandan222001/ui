import { AgentModule, EnterpriseUseCase } from "../types";

export const HERO_CAPABILITIES = [
  {
    code: "HERO-ANSWERS",
    name: "HERO ANSWERS",
    tagline: "REAL-TIME ENTERPRISE INSIGHTS",
    description: "Provides instant, context-aware answers to complex queries across company policies, ERP ledgers, benefits, and technical documentation.",
    connectors: ["Oracle Fusion", "Workday", "SAP S/4HANA", "ServiceNow"],
    accent: "#d1ffca"
  },
  {
    code: "HERO-ACTIONS",
    name: "HERO ACTIONS",
    tagline: "AUTONOMOUS SYSTEM EXECUTION",
    description: "Navigates enterprise UI and APIs, executes multi-step workflows, reconciles GL accounts, and automates grunt work with human-in-the-loop oversight.",
    connectors: ["Oracle EBS", "NetSuite", "Microsoft Dynamics", "Salesforce"],
    accent: "#fff100"
  },
  {
    code: "HERO-SUPPORT",
    name: "HERO SUPPORT",
    tagline: "CONTINUOUS AI OPTIMIZATION",
    description: "Ensures ISO/IEC 42001 certified governance, continuous prompt tuning, and enterprise AMS team replacement with 91-day deployment guarantees.",
    connectors: ["ISO 42001", "SOC2 Type II", "Azure Cloud", "GDPR"],
    accent: "#ffffff"
  }
];

export const FEATURED_AGENTS: AgentModule[] = [
  {
    id: "hero-actions-accounting",
    code: "HERO-ACT-01",
    name: "MONTH-END CLOSE & GL RECONCILER",
    role: "Autonomous Oracle Fusion & SAP GL Audit",
    category: "Finance & GL",
    connectors: ["Oracle Fusion", "SAP S/4HANA", "NetSuite"],
    autonomyLevel: "L4 - Autonomous",
    description: "Executes 3-way line item matching across international banking feeds and ERP general ledgers, reducing 12-day close cycles down to 4 hours.",
    samplePrompt: "Reconcile October variance between Oracle GL account #41000 and Citibank wire feed. Flag all discrepancies over $5,000 with audit logs.",
    metrics: {
      latency: "1.2s / batch",
      accuracy: "99.98%",
      savingsMultiplier: "70% Time Saved"
    }
  },
  {
    id: "hero-actions-hr",
    code: "HERO-ACT-02",
    name: "HR SELF-SERVICE & WORKFORCE CO-PILOT",
    role: "Workday & Greenhouse Talent Intelligence",
    category: "HR & Talent",
    connectors: ["Workday", "Greenhouse", "ServiceNow"],
    autonomyLevel: "L3 - Supervised",
    description: "Answers employee policy queries, manages benefits enrollment, and synthesizes compensation equity across global engineering teams.",
    samplePrompt: "Synthesize Q4 engineering headcounts in Workday vs Greenhouse pipeline, and generate salary band equity benchmarks.",
    metrics: {
      latency: "450ms",
      accuracy: "99.6%",
      savingsMultiplier: "3.5x Velocity"
    }
  },
  {
    id: "hero-actions-procurement",
    code: "HERO-ACT-03",
    name: "PROCUREMENT & INVOICE GOVERNOR",
    role: "Multi-ERP Purchase Order & Vendor Auditor",
    category: "Supply Chain",
    connectors: ["SAP EWM", "Oracle EBS", "Coupa"],
    autonomyLevel: "L4 - Autonomous",
    description: "Validates line-item PO matches, flags duplicate vendor billing, and prediction-routes freight shipments during port congestion.",
    samplePrompt: "Audit pending vendor invoices over $50,000 against SAP purchase orders and flag non-matching line-item tax surcharges.",
    metrics: {
      latency: "600ms",
      accuracy: "99.9%",
      savingsMultiplier: "$3.2M Saved"
    }
  },
  {
    id: "hero-actions-it",
    code: "HERO-ACT-04",
    name: "IT ADMIN & SERVICE DESK AGENT",
    role: "ServiceNow & Microsoft Dynamics Auto-Resolver",
    category: "Core System",
    connectors: ["ServiceNow", "Microsoft Dynamics", "Okta"],
    autonomyLevel: "L4 - Autonomous",
    description: "Resolves L1/L2 IT tickets, provisions user credentials across cloud infrastructure, and enforces ISO/IEC 42001 access policies.",
    samplePrompt: "Process offboarding checklist for user #88392 across ServiceNow, Workday, and Microsoft Entra ID with full audit logging.",
    metrics: {
      latency: "300ms",
      accuracy: "99.95%",
      savingsMultiplier: "91-Day SLA"
    }
  }
];

export const ENTERPRISE_USE_CASES: EnterpriseUseCase[] = [
  {
    id: "uc-1",
    title: "MONTH-END CLOSE & ACCOUNTING AUTOMATION",
    systemIntegration: ["Oracle Fusion", "SAP S/4HANA", "Citibank"],
    department: "Accounting & Finance",
    headline: "REDUCED 12-DAY MONTH-END CLOSE TO 4 HOURS FOR GLOBAL ENTERPRISES",
    problem: "Every department runs on systems engineering. Manual spreadsheet matching across international subsidiaries led to delayed reporting and $1.4M in annual reconciliation errors.",
    solution: "Deployed Hero Actions across multi-currency bank feeds and Oracle GL instances to automatically detect, categorize, and reconcile 98% of line items with complete human oversight.",
    impactMetrics: [
      { label: "Close Time", value: "96% Faster" },
      { label: "Manual Workload", value: "-70%" },
      { label: "Audit Accuracy", value: "99.98%" }
    ],
    tag: "FINANCE"
  },
  {
    id: "uc-2",
    title: "EMPLOYEE SELF-SERVICE & HR WORKFLOWS",
    systemIntegration: ["Workday", "Greenhouse", "ServiceNow"],
    department: "Human Resources",
    headline: "SIMPLIFY HR WITH AI-POWERED EMPLOYEE SELF-SERVICE & POLICY AUTOMATION",
    problem: "Fragmented employee policy inquiries and benefit requests consumed 35% of HR bandwidth, causing delayed response times and onboarding fatigue.",
    solution: "Hero Answers and Hero Actions unified policy search, benefits management, and internal mobility workflows directly inside Workday and Slack/Teams.",
    impactMetrics: [
      { label: "HR Inquiry Time", value: "Instant" },
      { label: "Employee Retention", value: "+24%" },
      { label: "Self-Service Rate", value: "88%" }
    ],
    tag: "HR & TALENT"
  },
  {
    id: "uc-3",
    title: "PROCUREMENT & INVOICE RECONCILIATION",
    systemIntegration: ["SAP EWM", "NetSuite", "Oracle EBS"],
    department: "Procurement & IT",
    headline: "AUTOMATED THE 30% THAT PLATFORMS CAN'T SOLVE OUT OF THE BOX",
    problem: "Unstructured vendor invoices and complex multi-line tax codes required manual intervention from AMS consultant teams at high hourly rates.",
    solution: "Hero AI agents log in, execute, and validate directly within ERP systems like Oracle and SAP, replacing traditional AMS maintenance teams.",
    impactMetrics: [
      { label: "AMS Cost Saved", value: "$4.8M" },
      { label: "Deployment Time", value: "< 91 Days" },
      { label: "Uptime SLA", value: "99.99%" }
    ],
    tag: "PROCUREMENT"
  }
];

export const DAYOS_PHILOSOPHY = [
  {
    title: "BORN FROM THE AI ERA. NOT BOLTED ONTO IT.",
    subtitle: "Built Native for Agentic Intelligence",
    description: "Dayos wasn't a legacy ERP plugin re-branded as AI. Hero was architected from day one for autonomous execution, multi-step planning, and multi-system navigation."
  },
  {
    title: "REPLACE TRADITIONAL ENTERPRISE AMS TEAMS",
    subtitle: "Direct System Login & Execution",
    description: "Hero AI agents log in, execute, and validate directly within systems like Oracle, Workday, SAP, NetSuite, and ServiceNow — eliminating high-cost AMS maintenance contracts."
  },
  {
    title: "HUMAN-IN-THE-LOOP GOVERNANCE",
    subtitle: "ISO/IEC 42001 Certified Management",
    description: "Full control over high-impact decisions. Low-risk operations run in the background while high-stakes transactions require one-click human approval."
  },
  {
    title: "PRODUCTION WITHIN 91 DAYS",
    subtitle: "Rapid Deployment SLA",
    description: "Our expert engineering team integrates Hero into your live ERP ecosystem and trains the model on your unique company terminology within 91 days."
  }
];

export const READINESS_QUIZ_QUESTIONS = [
  {
    id: "q1",
    question: "Which primary enterprise platforms anchor your daily business operations?",
    options: [
      "Oracle (Fusion / EBS) or SAP (S/4HANA)",
      "Workday or ServiceNow",
      "NetSuite, Microsoft Dynamics, or Salesforce",
      "Combination of 3+ disparate enterprise systems"
    ]
  },
  {
    id: "q2",
    question: "What percentage of month-end close & reporting tasks rely on manual spreadsheet reconciliation?",
    options: [
      "More than 50% — heavy manual spreadsheet matching",
      "30% to 50% — moderate manual intervention required",
      "10% to 30% — mostly automated with custom scripts",
      "Less than 10% — fully integrated event-driven data flow"
    ]
  },
  {
    id: "q3",
    question: "How does your organization handle custom ERP configuration & AMS support contracts?",
    options: [
      "Outsourced to expensive third-party AMS consulting firms",
      "Handled by internal IT teams with large backlog queues",
      "Hybrid internal team + external consultants",
      "Evaluating AI-first agentic automation to replace AMS teams"
    ]
  }
];
