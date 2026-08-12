import React from "react";
import { FEATURED_AGENTS } from "../data/mockData";
import { AgentModule, ViewMode } from "../types";
import { ArrowUpRight, Cpu, Zap, ShieldCheck } from "lucide-react";

interface FeaturedAgentsGridProps {
  onSelectAgent: (agent: AgentModule) => void;
  onSelectView: (view: ViewMode) => void;
}

export const FeaturedAgentsGrid: React.FC<FeaturedAgentsGridProps> = ({
  onSelectAgent,
  onSelectView,
}) => {
  return (
    <section className="w-full bg-[#e5e5e5] py-16 px-4 sm:px-8 max-w-[1240px] mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-[#000000] rounded-full"></span>
            <span className="font-mono text-xs text-[#000000] uppercase font-semibold tracking-wider">
              AGENT MODULE CATALOGUE
            </span>
          </div>
          <h2 className="font-neo text-3xl sm:text-4xl font-normal text-[#000000] uppercase tracking-tight">
            HARDENED AUTONOMOUS AGENTS FOR ENTERPRISE WORKFLOWS
          </h2>
        </div>

        <button
          onClick={() => onSelectView("agent-sandbox")}
          className="bg-[#000000] hover:bg-[#2f2f2f] text-[#ffffff] px-5 py-3 rounded-lg text-sm font-neo font-medium flex items-center gap-2 self-start md:self-auto transition-colors cursor-pointer"
        >
          <span>Open Interactive Sandbox</span>
          <ArrowUpRight className="w-4 h-4 text-[#d1ffca]" />
        </button>
      </div>

      {/* Grid of Agent Cards (Flat White Surfaces, 32px Radius, No Shadow) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FEATURED_AGENTS.map((agent) => (
          <div
            key={agent.id}
            className="bg-[#ffffff] rounded-[32px] p-6 sm:p-8 flex flex-col justify-between border border-[#c6c6c6]/40 hover:border-[#000000] transition-all group"
          >
            <div>
              {/* Card Header Top */}
              <div className="flex items-center justify-between mb-4">
                <span className="mint-tag">
                  {agent.code}
                </span>
                <span className="font-mono text-xs text-[#000000] font-bold bg-[#f3f3f3] px-3 py-1 rounded-full">
                  {agent.autonomyLevel}
                </span>
              </div>

              {/* Agent Title */}
              <h3 className="font-condensed text-3xl sm:text-4xl font-bold text-[#000000] uppercase mb-1 leading-none group-hover:text-[#2f2f2f] transition-colors">
                {agent.name}
              </h3>

              <p className="font-neo text-sm font-medium text-[#444444] mb-4">
                {agent.role}
              </p>

              {/* Description */}
              <p className="font-neo text-sm text-[#444444] leading-relaxed mb-6">
                {agent.description}
              </p>

              {/* Enterprise Connectors List */}
              <div className="mb-6 pt-4 border-t border-[#f3f3f3]">
                <span className="font-mono text-[10px] text-[#979797] uppercase block mb-2 font-semibold">
                  NATIVE CONNECTORS
                </span>
                <div className="flex flex-wrap gap-2">
                  {agent.connectors.map((c, idx) => (
                    <span
                      key={idx}
                      className="bg-[#f3f3f3] text-[#000000] font-mono text-xs px-2.5 py-1 rounded-md font-medium border border-[#c6c6c6]/40"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Metrics Bar & Action */}
            <div className="pt-4 border-t border-[#f3f3f3] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div>
                  <span className="font-mono text-[10px] text-[#979797] uppercase block">LATENCY</span>
                  <span className="font-mono text-xs font-bold text-[#000000]">{agent.metrics.latency}</span>
                </div>
                <div className="w-px h-6 bg-[#c6c6c6]"></div>
                <div>
                  <span className="font-mono text-[10px] text-[#979797] uppercase block">ACCURACY</span>
                  <span className="font-mono text-xs font-bold text-[#000000]">{agent.metrics.accuracy}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onSelectAgent(agent);
                  onSelectView("agent-sandbox");
                }}
                className="bg-[#000000] hover:bg-[#2f2f2f] text-[#ffffff] px-4 py-2.5 rounded-lg font-neo text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Test Agent</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#d1ffca]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
