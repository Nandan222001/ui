import React, { useState } from "react";
import { UsecaseAuditResponse } from "../types";
import { Calculator, ArrowUpRight, CheckCircle2, Loader2, Sparkles, TrendingUp, Clock, ShieldAlert } from "lucide-react";

interface RoiCalculatorViewProps {
  onOpenDemo: () => void;
}

export const RoiCalculatorView: React.FC<RoiCalculatorViewProps> = ({
  onOpenDemo,
}) => {
  const [industry, setIndustry] = useState<string>("Financial Services & Banking");
  const [department, setDepartment] = useState<string>("Finance & Treasury");
  const [workflowDescription, setWorkflowDescription] = useState<string>(
    "Manual monthly account reconciliation across 15 subsidiary banks, requiring 40 analyst hours per close cycle to match GL entries against wire feeds."
  );
  const [teamSize, setTeamSize] = useState<string>("20 team members");
  const [currentCost, setCurrentCost] = useState<string>("$45,000 / month");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [auditResult, setAuditResult] = useState<UsecaseAuditResponse | null>(null);

  const handleCalculateRoi = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/gemini/analyze-usecase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          industry,
          department,
          workflowDescription,
          teamSize,
          currentCost,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to calculate ROI report");
      }

      const data = await res.json();
      setAuditResult(data);
    } catch (err: any) {
      console.error(err);
      alert("Error calculating ROI: " + (err.message || "Unknown error"));
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
            AI WORKFLOW ARCHITECT & ROI ESTIMATOR
          </span>
          <h1 className="font-condensed text-4xl sm:text-6xl font-bold text-[#000000] uppercase tracking-tight">
            CALCULATE ENTERPRISE AGENT SAVINGS
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (5 cols): Input Form */}
        <div className="lg:col-span-5 bg-[#ffffff] rounded-[24px] p-6 sm:p-8 border border-[#c6c6c6] h-fit">
          <h2 className="font-condensed text-2xl font-bold text-[#000000] uppercase mb-4">
            INPUT WORKFLOW PARAMETERS
          </h2>

          <form onSubmit={handleCalculateRoi} className="space-y-4">
            <div>
              <label className="font-mono text-xs text-[#000000] uppercase block mb-1 font-semibold">
                INDUSTRY SECTOR
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full bg-[#f3f3f3] border border-[#c6c6c6] rounded-xl p-3 font-neo text-sm text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#000000]"
              >
                <option>Financial Services & Banking</option>
                <option>Healthcare & Life Sciences</option>
                <option>Supply Chain & Logistics</option>
                <option>Manufacturing & Industrial</option>
                <option>Enterprise Software & SaaS</option>
                <option>Retail & E-commerce</option>
              </select>
            </div>

            <div>
              <label className="font-mono text-xs text-[#000000] uppercase block mb-1 font-semibold">
                TARGET DEPARTMENT
              </label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full bg-[#f3f3f3] border border-[#c6c6c6] rounded-xl p-3 font-neo text-sm text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#000000]"
              >
                <option>Finance & Treasury</option>
                <option>Supply Chain & Operations</option>
                <option>Human Resources & Talent</option>
                <option>Sales Operations & CRM</option>
                <option>Legal & Compliance</option>
              </select>
            </div>

            <div>
              <label className="font-mono text-xs text-[#000000] uppercase block mb-1 font-semibold">
                CURRENT WORKFLOW & PAIN POINTS
              </label>
              <textarea
                value={workflowDescription}
                onChange={(e) => setWorkflowDescription(e.target.value)}
                rows={3}
                className="w-full bg-[#f3f3f3] border border-[#c6c6c6] rounded-xl p-3 font-neo text-sm text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#000000] resize-none"
                placeholder="Describe manual tasks, bottleneck frequency, and tool stack..."
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-mono text-xs text-[#000000] uppercase block mb-1 font-semibold">
                  TEAM SIZE
                </label>
                <input
                  type="text"
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-full bg-[#f3f3f3] border border-[#c6c6c6] rounded-xl p-3 font-neo text-sm text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-[#000000] uppercase block mb-1 font-semibold">
                  EST. MONTHLY COST
                </label>
                <input
                  type="text"
                  value={currentCost}
                  onChange={(e) => setCurrentCost(e.target.value)}
                  className="w-full bg-[#f3f3f3] border border-[#c6c6c6] rounded-xl p-3 font-neo text-sm text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#000000] hover:bg-[#2f2f2f] text-[#ffffff] py-4 rounded-xl font-neo text-sm font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer mt-4"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#d1ffca]" />
                  <span>GENERATING AUDIT REPORT...</span>
                </>
              ) : (
                <>
                  <span>Generate AI ROI Audit</span>
                  <Calculator className="w-4 h-4 text-[#d1ffca]" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Column (7 cols): Generated Report Output */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {auditResult ? (
            <div className="bg-[#ffffff] rounded-[24px] p-6 sm:p-8 border border-[#c6c6c6] space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#f3f3f3]">
                <div>
                  <span className="mint-tag mb-1">AUDIT COMPLETE</span>
                  <h3 className="font-condensed text-3xl font-bold text-[#000000] uppercase">
                    {auditResult.title}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[10px] text-[#979797] uppercase block">READINESS SCORE</span>
                  <span className="font-condensed text-3xl font-bold text-[#000000]">
                    {auditResult.readinessScore}/100
                  </span>
                </div>
              </div>

              {/* Highlight Cards */}
              <div className="grid grid-cols-3 gap-4 bg-[#f3f3f3] p-4 rounded-2xl border border-[#c6c6c6]/50">
                <div>
                  <span className="font-mono text-[10px] text-[#979797] uppercase block">PROJECTED ROI</span>
                  <span className="font-condensed text-3xl font-bold text-[#000000]">
                    {auditResult.roiPercentage}%
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#979797] uppercase block">EST. MONTHLY SAVINGS</span>
                  <span className="font-condensed text-3xl font-bold text-[#000000]">
                    {auditResult.monthlySavingsEst}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#979797] uppercase block">WEEKLY TIME SAVED</span>
                  <span className="font-condensed text-3xl font-bold text-[#000000]">
                    {auditResult.timeSavedPerWeekHours} hrs
                  </span>
                </div>
              </div>

              {/* Executive Summary */}
              <div>
                <span className="font-mono text-xs text-[#000000] font-bold uppercase block mb-2">
                  EXECUTIVE SUMMARY
                </span>
                <p className="font-neo text-sm text-[#444444] leading-relaxed">
                  {auditResult.executiveSummary}
                </p>
              </div>

              {/* Recommended Agent Modules */}
              <div>
                <span className="font-mono text-xs text-[#000000] font-bold uppercase block mb-3">
                  RECOMMENDED AGENT ARCHITECTURE
                </span>
                <div className="space-y-3">
                  {auditResult.agentModules.map((m, idx) => (
                    <div key={idx} className="bg-[#f3f3f3] p-4 rounded-xl border border-[#c6c6c6]/40">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-condensed text-lg font-bold text-[#000000]">{m.name}</span>
                        <span className="font-mono text-[10px] bg-[#000000] text-[#ffffff] px-2 py-0.5 rounded">
                          {m.autonomyLevel}
                        </span>
                      </div>
                      <p className="font-neo text-xs text-[#444444] mb-2">{m.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {m.connectors.map((c, cIdx) => (
                          <span key={cIdx} className="font-mono text-[10px] bg-[#ffffff] text-[#000000] px-2 py-0.5 rounded border border-[#c6c6c6]">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline Milestones */}
              <div>
                <span className="font-mono text-xs text-[#000000] font-bold uppercase block mb-3">
                  IMPLEMENTATION TIMELINE
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {auditResult.milestones.map((ms, idx) => (
                    <div key={idx} className="bg-[#f3f3f3] p-3.5 rounded-xl border border-[#c6c6c6]/40">
                      <div className="flex justify-between font-mono text-xs font-bold text-[#000000] mb-1">
                        <span>{ms.phase}</span>
                        <span className="text-[#979797]">{ms.duration}</span>
                      </div>
                      <p className="font-neo text-xs text-[#444444]">{ms.deliverables}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 border-t border-[#f3f3f3] flex justify-between items-center">
                <span className="font-mono text-xs text-[#979797]">
                  DAYOS ENTERPRISE DEPLOYMENT READY
                </span>
                <button
                  onClick={onOpenDemo}
                  className="bg-[#000000] hover:bg-[#2f2f2f] text-[#ffffff] px-5 py-2.5 rounded-lg font-neo text-xs font-medium flex items-center gap-2 cursor-pointer"
                >
                  <span>Schedule Deployment Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#d1ffca]" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-[#ffffff] rounded-[24px] p-8 border border-[#c6c6c6] flex flex-col items-center justify-center text-center h-full min-h-[420px]">
              <Calculator className="w-12 h-12 text-[#979797] mb-4" />
              <h3 className="font-condensed text-3xl font-bold text-[#000000] uppercase mb-2">
                AWAITING AUDIT PARAMETERS
              </h3>
              <p className="font-neo text-sm text-[#444444] max-w-md leading-relaxed mb-6">
                Fill out your department's workflow specifications on the left to generate a personalized AI agent architecture report with cost savings and implementation roadmap.
              </p>
              <div className="mint-tag">
                GEMINI 3.6-FLASH AUDIT ENGINE ACTIVE
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
