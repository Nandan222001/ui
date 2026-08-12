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
    version: "Milestone",
    codename: "AI Practice Launch",
    date: "2025",
    summary:
      "We formalized AI & LLM Integration as a dedicated practice alongside our existing software development, academic projects, business IT, and mobile app work, in direct response to how much client demand had shifted toward chatbots, virtual assistants, and custom AI features.",
    highlights: [
      "Stood up a dedicated AI & LLM Integration service line covering chatbots, virtual assistants, and custom model integrations.",
      "Expanded academic project support to cover machine learning and AI-based final-year projects specifically.",
      "Adopted retrieval-augmented generation as our default approach for grounding chatbot answers in a client's real data.",
      "Began building agentic automation workflows on top of LangChain and function-calling APIs from major model providers.",
      "Crossed 100 engineers across our software development, IT solutions, and AI teams.",
    ],
  },
];
