import React, { useState } from "react";
import { FEATURED_AGENTS } from "../data/mockData";
import { AgentModule } from "../types";
import { Play, Terminal, ArrowUpRight, CheckCircle2, Loader2, Sparkles } from "lucide-react";

interface AgentSandboxViewProps {
  initialAgent?: AgentModule;
  onOpenDemo: () => void;
}

export const AgentSandboxView: React.FC<AgentSandboxViewProps> = ({
  initialAgent,
  onOpenDemo,
}) => {
  const [selectedAgentId, setSelectedAgentId] = useState<string>(
    initialAgent?.id || FEATURED_AGENTS[0].id
  );
  const [userQuery, setUserQuery] = useState<string>(
    initialAgent?.samplePrompt || FEATURED_AGENTS[0].samplePrompt
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [agentOutput, setAgentOutput] = useState<string | null>(null);
  const [executionTime, setExecutionTime] = useState<number | null>(null);

  const activeAgent =
    FEATURED_AGENTS.find((a) => a.id === selectedAgentId) || FEATURED_AGENTS[0];

  const handleSelectAgentChange = (agent: AgentModule) => {
    setSelectedAgentId(agent.id);
    setUserQuery(agent.samplePrompt);
    setAgentOutput(null);
  };

  const handleRunTask = async () => {
    if (!userQuery.trim()) return;
    setIsLoading(true);
    setAgentOutput(null);
    const startTime = Date.now();

    try {
      const res = await fetch("/api/gemini/agent-playground", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          agentType: activeAgent.id,
          userQuery,
          contextData: {
            agentCode: activeAgent.code,
            connectors: activeAgent.connectors,
            autonomyLevel: activeAgent.autonomyLevel,
          },
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to execute agent task");
      }

      const data = await res.json();
      setAgentOutput(data.output || "Task completed successfully with no output.");
      setExecutionTime(Date.now() - startTime);
    } catch (err: any) {
      setAgentOutput(`Error executing task: ${err.message || "Unknown error"}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#e5e5e5] py-8 px-4 sm:px-8 max-w-[1240px] mx-auto min-h-[calc(100vh-8rem)]">
      {/* Header Annotation */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#c6c6c6]">
        <div>
          <span className="mint-tag mb-2">
            INTERACTIVE AGENT SANDBOX
          </span>
          <h1 className="font-condensed text-4xl sm:text-6xl font-bold text-[#000000] uppercase tracking-tight">
            SIMULATE AUTONOMOUS WORKFLOW EXECUTION
          </h1>
        </div>

        <button
          onClick={onOpenDemo}
          className="hidden sm:flex bg-[#000000] text-[#ffffff] px-4 py-2.5 rounded-lg font-neo text-xs font-medium items-center gap-2"
        >
          <span>Deploy to Enterprise</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#d1ffca]" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (5 cols): Agent Selector & Configuration */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Agent Selection Cards */}
          <div className="bg-[#ffffff] rounded-[24px] p-6 border border-[#c6c6c6]">
            <span className="font-mono text-xs text-[#979797] uppercase block mb-4 font-semibold">
              SELECT TARGET AGENT MODULE
            </span>

            <div className="space-y-3">
              {FEATURED_AGENTS.map((agent) => {
                const isSelected = agent.id === selectedAgentId;
                return (
                  <div
                    key={agent.id}
                    onClick={() => handleSelectAgentChange(agent)}
                    className={`p-4 rounded-xl cursor-pointer border transition-all ${
                      isSelected
                        ? "bg-[#000000] text-[#ffffff] border-[#000000]"
                        : "bg-[#f3f3f3] text-[#000000] border-[#c6c6c6]/50 hover:border-[#000000]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-mono text-xs font-bold ${isSelected ? "text-[#d1ffca]" : "text-[#000000]"}`}>
                        {agent.code}
                      </span>
                      <span className={`font-mono text-[10px] px-2 py-0.5 rounded font-semibold ${
                        isSelected ? "bg-[#2f2f2f] text-[#ffffff]" : "bg-[#ffffff] text-[#444444]"
                      }`}>
                        {agent.autonomyLevel}
                      </span>
                    </div>
                    <div className={`font-condensed text-xl font-bold uppercase ${isSelected ? "text-[#ffffff]" : "text-[#000000]"}`}>
                      {agent.name}
                    </div>
                    <p className={`font-neo text-xs mt-1 ${isSelected ? "text-[#979797]" : "text-[#444444]"}`}>
                      {agent.role}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Agent Meta */}
          <div className="bg-[#ffffff] rounded-[24px] p-6 border border-[#c6c6c6]">
            <span className="font-mono text-xs text-[#979797] uppercase block mb-2 font-semibold">
              NATIVE CONNECTOR BINDINGS
            </span>
            <div className="flex flex-wrap gap-2 mb-4">
              {activeAgent.connectors.map((c, idx) => (
                <span key={idx} className="bg-[#f3f3f3] text-[#000000] font-mono text-xs px-2.5 py-1 rounded font-medium">
                  {c}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#f3f3f3]">
              <div>
                <span className="font-mono text-[10px] text-[#979797] block">TARGET ACCURACY</span>
                <span className="font-mono text-sm font-bold text-[#000000]">{activeAgent.metrics.accuracy}</span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#979797] block">SAVINGS MULTIPLIER</span>
                <span className="font-mono text-sm font-bold text-[#000000]">{activeAgent.metrics.savingsMultiplier}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): Terminal Prompt Input & Output Execution Box */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Prompt Input Box */}
          <div className="bg-[#ffffff] rounded-[24px] p-6 border border-[#c6c6c6]">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-[#000000] font-bold uppercase flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#000000]" />
                ENTERPRISE EVENT QUERY
              </span>
              <button
                onClick={() => setUserQuery(activeAgent.samplePrompt)}
                className="font-mono text-xs text-[#444444] hover:text-[#000000] underline"
              >
                Reset Sample Prompt
              </button>
            </div>

            <textarea
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              rows={4}
              placeholder="Enter instructions for the agent..."
              className="w-full bg-[#f3f3f3] border border-[#c6c6c6] rounded-xl p-4 font-mono text-xs text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#000000] resize-none leading-relaxed"
            />

            <div className="mt-4 flex justify-between items-center">
              <span className="font-mono text-[11px] text-[#979797]">
                [ SERVER-SIDE GEMINI 3.6-FLASH ENGINE ]
              </span>

              <button
                onClick={handleRunTask}
                disabled={isLoading}
                className="bg-[#000000] hover:bg-[#2f2f2f] disabled:opacity-50 text-[#ffffff] px-6 py-3 rounded-lg font-neo text-sm font-medium flex items-center gap-2 transition-colors cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#d1ffca]" />
                    <span>EXECUTING AGENT TASK...</span>
                  </>
                ) : (
                  <>
                    <span>Execute Agent Task</span>
                    <Play className="w-4 h-4 fill-[#d1ffca] text-[#d1ffca]" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Terminal Execution Output Terminal (Brutalist Graphite Box) */}
          <div className="bg-[#2f2f2f] text-[#ffffff] rounded-[24px] p-6 border border-[#444444] flex-1 flex flex-col min-h-[320px]">
            <div className="flex items-center justify-between pb-3 border-b border-[#444444] mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#d1ffca]"></span>
                <span className="font-mono text-xs text-[#d1ffca] font-bold">
                  {activeAgent.code} // EXECUTION LOG
                </span>
              </div>
              {executionTime && (
                <span className="font-mono text-xs text-[#fff100]">
                  COMPLETED IN {executionTime}ms
                </span>
              )}
            </div>

            <div className="flex-1 font-mono text-xs overflow-y-auto leading-relaxed space-y-2 whitespace-pre-wrap text-[#e5e5e5]">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center h-48 gap-3 text-[#979797]">
                  <Loader2 className="w-6 h-6 animate-spin text-[#d1ffca]" />
                  <p className="font-mono text-xs">
                    Connecting to {activeAgent.connectors.join(", ")} APIs...
                  </p>
                </div>
              ) : agentOutput ? (
                <div>
                  <div className="text-[#d1ffca] mb-2 font-bold">[RESPONSE RECEIVED]</div>
                  {agentOutput}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-48 text-[#979797] text-center">
                  <Terminal className="w-8 h-8 mb-2 opacity-50" />
                  <p className="font-mono text-xs mb-1">AWAITING AGENT COMMAND</p>
                  <p className="font-neo text-xs text-[#979797] max-w-sm">
                    Click 'Execute Agent Task' above to run autonomous GL reconciliation, logistics routing, or workforce synthesis.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
