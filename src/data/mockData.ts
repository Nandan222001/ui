import { AgentModule, EnterpriseUseCase } from "../types";

export const FEATURED_AGENTS: AgentModule[] = [
  {
    id: "nmt-chat-support",
    code: "NMT-CHAT-01",
    name: "AI CUSTOMER SUPPORT CHATBOT",
    role: "LLM-Powered Support & FAQ Assistant",
    category: "Customer Support",
    connectors: ["Zendesk", "Slack", "OpenAI GPT-4"],
    autonomyLevel: "L4 - Autonomous",
    description: "Answers customer questions from your real documentation and order data, and escalates to a human with full context the moment it hits the edge of what it knows.",
    samplePrompt: "A customer is asking why their order hasn't shipped yet and whether they can change the delivery address. Draft a helpful reply using our standard shipping policy.",
    metrics: {
      latency: "1.1s / reply",
      accuracy: "96%",
      savingsMultiplier: "50% Tickets Deflected"
    }
  },
  {
    id: "nmt-code-review",
    code: "NMT-CHAT-02",
    name: "AI CODE REVIEW & DEV ASSISTANT",
    role: "Automated Code Review & Documentation Agent",
    category: "Software Development",
    connectors: ["GitHub", "GitLab", "OpenAI GPT-4"],
    autonomyLevel: "L3 - Supervised",
    description: "Reviews pull requests for bugs and style issues, drafts documentation from the diff, and flags anything that needs a senior engineer's eyes before merge.",
    samplePrompt: "Review this pull request for a payment processing function and flag any security or edge-case issues before it goes to a human reviewer.",
    metrics: {
      latency: "3.4s / PR",
      accuracy: "92%",
      savingsMultiplier: "3x Faster Reviews"
    }
  },
  {
    id: "nmt-academic-assistant",
    code: "NMT-CHAT-03",
    name: "ACADEMIC PROJECT AI ASSISTANT",
    role: "Research & Documentation Helper for Student Projects",
    category: "Academic Projects",
    connectors: ["Google Docs", "Notion", "Claude"],
    autonomyLevel: "L3 - Supervised",
    description: "Helps structure a final-year project brief, drafts literature review summaries, and checks documentation against common evaluation rubrics.",
    samplePrompt: "Summarize the key requirements for a final-year project on a machine learning-based recommendation system, and suggest a project timeline.",
    metrics: {
      latency: "900ms",
      accuracy: "94%",
      savingsMultiplier: "2x Faster Drafting"
    }
  },
  {
    id: "nmt-it-helpdesk",
    code: "NMT-CHAT-04",
    name: "IT HELPDESK AUTOMATION AGENT",
    role: "Ticket Triage & Auto-Resolution Bot",
    category: "IT Operations",
    connectors: ["Freshdesk", "Jira", "OpenAI GPT-4"],
    autonomyLevel: "L4 - Autonomous",
    description: "Triages incoming IT tickets, resolves the routine password-reset and access-request tier automatically, and routes anything complex to the right engineer.",
    samplePrompt: "A user submitted a ticket saying they can't access the shared drive. Draft a triage response and suggest the likely cause.",
    metrics: {
      latency: "600ms",
      accuracy: "97%",
      savingsMultiplier: "60% Auto-Resolved"
    }
  }
];

export const ENTERPRISE_USE_CASES: EnterpriseUseCase[] = [
  {
    id: "uc-1",
    title: "AI CHATBOT CUTS SUPPORT TICKET VOLUME",
    systemIntegration: ["Zendesk", "OpenAI GPT-4", "Slack"],
    department: "Customer Support",
    headline: "DEFLECTED HALF OF INCOMING SUPPORT TICKETS WITHIN THE FIRST MONTH",
    problem: "A growing e-commerce client was fielding the same handful of shipping, returns, and order-status questions dozens of times a day, and the support team couldn't keep up during peak hours.",
    solution: "We built a chatbot grounded in the client's own policy documents and live order data, deployed on their site and WhatsApp, with a clean handoff to a human agent for anything outside its scope.",
    impactMetrics: [
      { label: "Tickets Deflected", value: "50%" },
      { label: "First Response Time", value: "< 2 sec" },
      { label: "Customer Satisfaction", value: "+18%" }
    ],
    tag: "AI & LLM"
  },
  {
    id: "uc-2",
    title: "CUSTOM SOFTWARE REPLACES SPREADSHEET CHAOS",
    systemIntegration: ["React", "Node.js", "PostgreSQL"],
    department: "Business IT",
    headline: "REPLACED A PATCHWORK OF SPREADSHEETS WITH ONE CUSTOM SYSTEM",
    problem: "A logistics client was tracking inventory, orders, and vendor invoices across six disconnected spreadsheets, with no single source of truth and constant reconciliation errors.",
    solution: "We built a custom web application tailored to their exact workflow, consolidating inventory, orders, and invoicing into one system with role-based access and automated reporting.",
    impactMetrics: [
      { label: "Manual Data Entry", value: "-65%" },
      { label: "Reconciliation Errors", value: "-90%" },
      { label: "Delivery Time", value: "6 Weeks" }
    ],
    tag: "CUSTOM SOFTWARE"
  },
  {
    id: "uc-3",
    title: "FINAL-YEAR AI PROJECT, DELIVERED ON TIME",
    systemIntegration: ["Python", "TensorFlow", "Original Research"],
    department: "Academic Projects",
    headline: "AN ORIGINAL MACHINE LEARNING PROJECT BUILT TO THE STUDENT'S EXACT BRIEF",
    problem: "A final-year computer science student needed a machine learning project with genuinely original work behind it, not a reused template, and a tight submission deadline.",
    solution: "We scoped the project against the department's evaluation criteria, built a custom recommendation model from the student's own dataset, and prepared documentation the student could confidently defend in their viva.",
    impactMetrics: [
      { label: "Originality", value: "100%" },
      { label: "Delivered", value: "Ahead of Deadline" },
      { label: "Grade Outcome", value: "Distinction" }
    ],
    tag: "ACADEMIC"
  }
];

export const READINESS_QUIZ_QUESTIONS = [
  {
    id: "q1",
    question: "How is your business currently handling repetitive customer or internal questions?",
    options: [
      "Entirely by hand — email, phone, or a shared inbox",
      "A basic FAQ page or static help center",
      "A simple rules-based chatbot with limited answers",
      "No AI or chatbot yet, but actively exploring options",
    ]
  },
  {
    id: "q2",
    question: "How much of your team's time goes into manual, repetitive digital tasks each week?",
    options: [
      "More than half — it's a significant drag on productivity",
      "A meaningful chunk, but manageable for now",
      "A small amount, mostly automated already",
      "Not sure — nobody's actually measured it",
    ]
  },
  {
    id: "q3",
    question: "What's your team's current comfort level with AI/LLM tools like ChatGPT or Claude?",
    options: [
      "Little to none — this would be a first step into AI",
      "We use them casually but nothing is integrated into our product",
      "We've experimented with an integration but haven't shipped it",
      "We have AI features in production already and want to go further",
    ]
  }
];
