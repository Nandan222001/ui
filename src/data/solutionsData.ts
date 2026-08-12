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
    slug: "ai-llm-integration",
    name: "AI & LLM Integration",
    tagline: "OUR MOST-REQUESTED SPECIALTY",
    description:
      "Chatbots, virtual assistants, and LLM-powered features built into your product or business, grounded in your own data instead of generic answers pulled from nowhere.",
    sections: [
      {
        heading: "What we actually build",
        body: "Customer-facing chatbots that answer from your real documentation and order data. Internal assistants that let your team ask a question in plain language instead of digging through a dashboard. AI agents that take on a repetitive workflow end to end. Custom features built directly on top of GPT, Claude, or Gemini, wired into your existing product rather than bolted on as a separate widget.",
      },
      {
        heading: "Grounded in your data, not just the model's training",
        body: "We build retrieval-augmented generation pipelines that connect the model to your own documents, product catalog, or database, so answers are sourced from what's actually true for your business right now, with the option to fine-tune a smaller model for high-volume, narrowly scoped tasks where that's more cost-effective.",
      },
      {
        heading: "A team that ships AI features, not just demos",
        body: "Every integration we deliver comes with the unglamorous parts done properly: rate limiting, error handling, logging, and cost monitoring, so the feature holds up once real traffic hits it instead of only working in a screen recording.",
      },
      {
        heading: "Fits whatever you're already running",
        body: "Whether your product is a web app, a mobile app, or an internal tool, we integrate the AI layer into your existing stack rather than asking you to rebuild around it.",
      },
    ],
    stats: [
      { label: "Model providers we build with", value: "OpenAI, Anthropic, Google" },
      { label: "Typical chatbot deployment", value: "2-4 weeks" },
      { label: "Delivered with monitoring & logging", value: "Always" },
      { label: "Engineers with AI/LLM project experience", value: "Growing team" },
    ],
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    tagline: "END TO END, CONCEPT TO COMPLETION",
    description:
      "We design, build, and ship custom software from the first requirements conversation through to a finished, production-ready product, not a template with your logo on it.",
    sections: [
      {
        heading: "Built around your actual requirements",
        body: "Every business runs a little differently, and off-the-shelf software rarely fits perfectly. We start by understanding what you actually need the software to do, then build around that instead of forcing your workflow to match someone else's assumptions.",
      },
      {
        heading: "From concept through to completion",
        body: "We handle the full lifecycle: requirements and architecture, design, development, testing, and deployment, with regular check-ins along the way so you're never waiting weeks to see what's been built.",
      },
      {
        heading: "100% original, custom-built work",
        body: "Every project is written for you specifically, not repurposed from a template or lifted from another client's codebase. That matters whether you're a business that needs software nobody else is running, or a student whose project needs to actually be their own original work.",
      },
      {
        heading: "Timely delivery, transparent pricing",
        body: "We agree on scope, timeline, and price upfront, and we keep you posted if anything shifts. No surprise invoices, and no silently slipping deadlines.",
      },
    ],
    stats: [
      { label: "Team of engineers", value: "100+" },
      { label: "Combined engineering experience", value: "10+ yrs" },
      { label: "Original, custom-built work", value: "100%" },
      { label: "Pricing", value: "Transparent, agreed upfront" },
    ],
  },
  {
    slug: "academic-projects",
    name: "Academic Projects",
    tagline: "FINAL-YEAR PROJECTS, DONE PROPERLY",
    description:
      "We help students plan and build final-year and academic projects that meet their exact brief, with original code and a level of technical depth that holds up under a viva or a demo defense.",
    sections: [
      {
        heading: "Built to your brief, not a stock template",
        body: "We work from your actual project requirements, department guidelines, and evaluation criteria, and build something matched to them specifically, rather than reselling the same generic project to every student who asks.",
      },
      {
        heading: "Originality that can survive scrutiny",
        body: "Every academic project we deliver is written from scratch for that student. We can walk through the architecture and the reasoning behind it, because it's built to be understood and defended, not just handed over.",
      },
      {
        heading: "AI-powered projects are our specialty",
        body: "A large share of the academic projects we take on now involve AI in some form: a chatbot, an LLM-based tool, a recommendation system, or a machine learning model. If your brief calls for AI and you're not sure how to scope it, that's exactly where we're most useful.",
      },
      {
        heading: "Support through the whole timeline",
        body: "From initial proposal and literature review through implementation, documentation, and presentation prep, we work to your submission deadline, not around it.",
      },
    ],
    stats: [
      { label: "Focus", value: "Originality & custom requirements" },
      { label: "AI/ML project requests", value: "Growing fast" },
      { label: "Delivery", value: "Matched to your deadline" },
    ],
  },
  {
    slug: "business-it-solutions",
    name: "Business IT Solutions",
    tagline: "IT CONSULTING, WEB, AND AUTOMATION",
    description:
      "IT consulting, web design and development, and business process automation aimed at one outcome: less manual work, and systems that actually talk to each other.",
    sections: [
      {
        heading: "IT consulting that starts with your actual bottleneck",
        body: "We look at where your team is losing time, duplicate data entry, disconnected tools, manual reporting, and recommend and build the fix, rather than selling a generic digital-transformation package regardless of what you actually need.",
      },
      {
        heading: "Web design and development",
        body: "From marketing sites to full web applications, we design and build for your business specifically, with a focus on something that actually converts and holds up, not just something that looks good in a first draft.",
      },
      {
        heading: "Automation for the repetitive stuff",
        body: "Data entry between systems, routine reports, approval workflows, we look for the manual steps eating your team's time and replace them with automation, increasingly built with an AI layer where a workflow needs judgment, not just rules.",
      },
      {
        heading: "Digital transformation, at your pace",
        body: "We don't require a full platform rebuild to get started. Most engagements begin with one clear bottleneck, prove the approach works, and expand from there.",
      },
    ],
    stats: [
      { label: "Services", value: "Consulting, web, automation" },
      { label: "Approach", value: "Start small, prove it, expand" },
      { label: "Support", value: "Ongoing, not one-and-done" },
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    tagline: "BUILT, SHIPPED, AND MAINTAINED",
    description:
      "We build and manage mobile applications from first design through App Store and Play Store release, and keep supporting them after launch.",
    sections: [
      {
        heading: "Native feel, whichever stack fits",
        body: "Depending on your requirements and budget, we build natively for iOS and Android or with a cross-platform framework to cover both from a single codebase, and we'll tell you honestly which approach fits your project instead of defaulting to whichever is easiest for us.",
      },
      {
        heading: "AI features are increasingly part of the brief",
        body: "A growing share of the mobile apps we build now include an AI-powered layer of some kind: an in-app assistant, smart search, personalized recommendations, or a chatbot for support, built with the same LLM integration work we do for web products.",
      },
      {
        heading: "From design through to the app stores",
        body: "UI/UX design, development, testing across devices, and the submission process for the App Store and Google Play, we manage the parts that are easy to get stuck on if you haven't shipped a mobile app before.",
      },
      {
        heading: "We don't disappear after launch",
        body: "Apps need upkeep: OS updates, new device sizes, bug fixes, and new features as your user base grows. We offer ongoing management so your app doesn't quietly go stale a year after it ships.",
      },
    ],
    stats: [
      { label: "Platforms", value: "iOS & Android" },
      { label: "AI features on request", value: "Assistants, search, recommendations" },
      { label: "Post-launch support", value: "Available" },
    ],
  },
];
