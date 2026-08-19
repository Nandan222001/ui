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
    slug: "ai-chatbot-support-deflection",
    title: "AI Chatbot Cuts Support Ticket Volume in Half",
    description:
      "An e-commerce client's support inbox was drowning in the same shipping and returns questions every day. We built an LLM-powered chatbot grounded in their own policies and live order data, and cut ticket volume in half within a month.",
    industry: "E-commerce",
    platformType: "AI & LLM Integration",
    image: "/images/it-integrate.webp",
    date: "2025",
    metric: { label: "Support Tickets Deflected", value: "50%" },
    sections: [
      {
        heading: "The challenge",
        body: "The client's small support team was fielding dozens of near-identical questions every day: where's my order, can I change my address, what's the return policy. Peak season made it worse, with response times stretching past a day and customer satisfaction sliding as a result.",
      },
      {
        heading: "The approach",
        body: "We built a chatbot on top of an LLM backend, grounded in the client's actual policy documents and connected live to their order-management system through retrieval-augmented generation, so answers reflected real data instead of a static script. We deployed it as a website widget and a WhatsApp integration, with a clean handoff to a human agent whenever a question fell outside its scope, full conversation history attached.",
      },
      {
        heading: "The outcome",
        body: "Within a month of launch, the bot was resolving half of all incoming questions without a human touching them, and first-response time dropped from hours to under two seconds for anything it could handle directly. The support team redirected the time they got back toward the harder cases that actually needed a person, and customer satisfaction scores rose alongside the faster responses.",
      },
    ],
  },
  {
    slug: "custom-software-inventory-system",
    title: "Custom Software Replaces a Six-Spreadsheet Mess",
    description:
      "A logistics client was tracking inventory, orders, and vendor invoices across six disconnected spreadsheets. We built a single custom system around their actual workflow instead of forcing them into a generic off-the-shelf platform.",
    industry: "Logistics",
    platformType: "Custom Software Development",
    image: "/images/image_3.webp",
    date: "2025",
    metric: { label: "Manual Data Entry Reduced", value: "-65%" },
    sections: [
      {
        heading: "The challenge",
        body: "Inventory counts lived in one spreadsheet, purchase orders in another, and vendor invoices in a third, maintained by different people with no shared source of truth. Reconciling them at month-end regularly took days and still produced errors that rippled into the next cycle.",
      },
      {
        heading: "The approach",
        body: "Rather than recommending an off-the-shelf ERP that would have required the client to change how they actually operate, we mapped their existing workflow in detail and built a custom web application around it: one system for inventory, orders, and invoicing, with role-based access so each team only saw what was relevant to them, and automated reports replacing the manual month-end roll-up.",
      },
      {
        heading: "The outcome",
        body: "Manual data entry dropped by roughly two-thirds once information only had to be entered once instead of copied between spreadsheets, and reconciliation errors fell by a similar margin. The client's ops team went from spending the first week of every month untangling the prior month's numbers to reviewing a report that was already correct.",
      },
    ],
  },
  {
    slug: "mobile-app-ai-assistant",
    title: "A Mobile App With a Built-In AI Assistant",
    description:
      "A wellness startup needed a mobile app fast, and wanted an AI assistant baked in from day one rather than bolted on after launch. We delivered both together, on iOS and Android, in a single build.",
    industry: "Health & Wellness",
    platformType: "Mobile App Development",
    image: "/images/image_2.webp",
    date: "2025",
    sections: [
      {
        heading: "The challenge",
        body: "The client wanted a consumer app that could answer users' wellness questions conversationally, not just serve static content, but had no in-house mobile or AI engineering team to build it, and a launch date that didn't leave room for two separate build phases.",
      },
      {
        heading: "The approach",
        body: "We built the app cross-platform to cover iOS and Android from one codebase, with an in-app assistant powered by an LLM backend from the start, integrated with the app's own content library through a retrieval pipeline so its answers stayed grounded in the client's actual wellness guidance rather than generic advice.",
      },
      {
        heading: "The outcome",
        body: "The app shipped to both app stores on schedule with the AI assistant fully working at launch, not added as a later update. We've continued supporting the app post-launch, handling OS updates and new features as the client's user base has grown.",
      },
    ],
  },
];
