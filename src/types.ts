export type ViewMode =
  | "showroom"
  | "agent-sandbox"
  | "roi-calculator"
  | "readiness-assessment"
  | "use-cases"
  | "about"
  | "contact";

export interface DemoModalState {
  isOpen: boolean;
  selectedAgent?: string;
}

export interface AgentModule {
  id: string;
  code: string;
  name: string;
  role: string;
  category: "Finance & GL" | "Supply Chain" | "HR & Talent" | "Core System";
  connectors: string[];
  autonomyLevel: "L3 - Supervised" | "L4 - Autonomous" | "L5 - Fully Delegated";
  description: string;
  samplePrompt: string;
  metrics: {
    latency: string;
    accuracy: string;
    savingsMultiplier: string;
  };
}

export interface EnterpriseUseCase {
  id: string;
  title: string;
  systemIntegration: string[];
  department: string;
  headline: string;
  problem: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  tag: string;
}

export interface UsecaseAuditResponse {
  title: string;
  executiveSummary: string;
  readinessScore: number;
  monthlySavingsEst: string;
  timeSavedPerWeekHours: number;
  roiPercentage: number;
  agentModules: {
    name: string;
    role: string;
    connectors: string[];
    autonomyLevel: string;
    description: string;
  }[];
  milestones: {
    phase: string;
    duration: string;
    deliverables: string;
  }[];
  governanceNotes: string[];
}

export interface ReadinessAuditResponse {
  tier: string;
  score: number;
  strengths: string[];
  vulnerabilities: string[];
  firstAction: string;
  summary: string;
}
