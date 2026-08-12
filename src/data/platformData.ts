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
    slug: "ai-chatbots-assistants",
    name: "AI Chatbots & Assistants",
    tagline: "CONVERSATIONAL AI THAT ACTUALLY HELPS",
    description:
      "We design and build LLM-powered chatbots and virtual assistants that answer real questions with real data, on your website, inside your product, or across the messaging channels your customers already use.",
    sections: [
      {
        heading: "Trained on your business, not the whole internet",
        body: "A generic chatbot only knows what's public. Ours is grounded in your own documentation, product catalog, support history, and internal knowledge base through retrieval-augmented generation, so it answers with your actual policies and your actual data instead of a plausible-sounding guess.",
      },
      {
        heading: "From FAQ bot to full assistant",
        body: "We build everything from a simple support widget that deflects the repetitive questions your team is tired of answering, to a full conversational assistant that can look up an order, walk a student through a project requirement, or triage a support ticket before a human ever sees it.",
      },
      {
        heading: "Wherever your customers already are",
        body: "Web chat widget, WhatsApp, Slack, Microsoft Teams, or a custom in-app assistant, we build on the channel that fits your users, and connect it to the same LLM backend so the answers stay consistent everywhere.",
      },
      {
        heading: "Built to hand off gracefully",
        body: "Every assistant we ship knows its own limits. When a question needs a human, it escalates with the full conversation context attached instead of leaving your customer to repeat themselves from scratch.",
      },
    ],
    stats: [
      { label: "Typical first-response time", value: "< 2 sec" },
      { label: "Common ticket deflection rate", value: "40-60%" },
      { label: "Channels supported", value: "Web, WhatsApp, Slack, Teams" },
    ],
  },
  {
    slug: "ai-automation-agents",
    name: "AI Automation & Agents",
    tagline: "AI THAT DOES THE WORK, NOT JUST SUGGESTS IT",
    description:
      "Beyond answering questions, we build AI agents that take action: pulling data across your tools, filling out the repetitive parts of a workflow, and handing off to a person only for the decisions that actually need one.",
    sections: [
      {
        heading: "From advice to execution",
        body: "A chatbot that only suggests what to do still leaves someone clicking through five screens to do it. We build agents that carry out the multi-step task itself, reading data from one system, applying your business rules, and writing the result back to another, so the person on the other end gets a finished task, not a to-do list.",
      },
      {
        heading: "Human-in-the-loop where it matters",
        body: "Low-risk, repetitive steps run automatically. Anything with real weight, a refund, a data change, a message to a client, pauses for a quick human approval first, so you get the speed of automation without losing control over what actually goes out the door.",
      },
      {
        heading: "Built on the frameworks doing the heavy lifting",
        body: "We build agents with the current generation of agentic tooling, LangChain, LlamaIndex, and function-calling / tool-use APIs from providers like OpenAI, Anthropic, and Google, choosing whichever stack fits your existing systems best rather than forcing one tool everywhere.",
      },
      {
        heading: "Where this pays off fastest",
        body: "Internal reporting that used to mean copying numbers between three spreadsheets. Lead qualification that used to sit in an inbox overnight. Document processing that used to be a full-time job for someone new. These are exactly the repetitive, rules-heavy tasks agentic automation is built to absorb.",
      },
    ],
    stats: [
      { label: "Typical manual-hours saved / week", value: "10-25 hrs" },
      { label: "Workflows we've automated", value: "Ticketing, reporting, data entry" },
      { label: "Human approval on high-impact steps", value: "Always" },
    ],
  },
  {
    slug: "llm-integration",
    name: "LLM Integration & Custom AI",
    tagline: "YOUR PRODUCT, POWERED BY YOUR OWN AI",
    description:
      "When off-the-shelf AI features aren't enough, we integrate and fine-tune large language models directly into your product: custom prompting, retrieval pipelines, and, where it's worth it, model fine-tuning built around your own data.",
    sections: [
      {
        heading: "The right model for the job, not just the biggest one",
        body: "We work across the major model providers, OpenAI's GPT models, Anthropic's Claude, Google's Gemini, and open-source options where self-hosting makes sense, and help you pick based on cost, latency, and the kind of task you're actually solving, instead of defaulting to whichever model is loudest that quarter.",
      },
      {
        heading: "RAG pipelines that keep answers grounded",
        body: "We build retrieval-augmented generation pipelines that connect an LLM to your own documents, database, or knowledge base, so responses are grounded in your real content instead of the model's general training data, with citations back to the source when it matters.",
      },
      {
        heading: "Fine-tuning when it's actually worth it",
        body: "For teams with enough of their own data and a genuinely repetitive task, we fine-tune a smaller model to match, which usually means lower latency and lower cost per call than routing everything through the largest general-purpose model available.",
      },
      {
        heading: "Shipped like software, not a proof of concept",
        body: "Every integration comes with proper API design, rate limiting, logging, and cost monitoring built in from day one, because an AI feature that works in a demo and falls over in production isn't actually done.",
      },
    ],
    stats: [
      { label: "Model providers we build with", value: "OpenAI, Anthropic, Google, open-source" },
      { label: "Typical integration timeline", value: "2-6 weeks" },
      { label: "Delivered with logging & cost monitoring", value: "Always" },
    ],
  },
];
