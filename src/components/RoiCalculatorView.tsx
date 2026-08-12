import React, { useState } from "react";
import { UsecaseAuditResponse } from "../types";
import { Calculator, ArrowUpRight, CheckCircle2, Loader2, Sparkles, TrendingUp, Clock, ShieldAlert } from "lucide-react";

interface RoiCalculatorViewProps {
  onOpenDemo: () => void;
}

export const RoiCalculatorView: React.FC<RoiCalculatorViewProps> = ({
  onOpenDemo,
}) => {
  const [industry, setIndustry] = useState<string>("Small Business / Startup");
  const [department, setDepartment] = useState<string>("AI Chatbot / LLM Integration");
  const [workflowDescription, setWorkflowDescription] = useState<string>(
    "Support team manually answers the same 20+ repetitive customer questions every day by email, with no chatbot or automation in place."
  );
  const [teamSize, setTeamSize] = useState<string>("5 team members");
  const [currentCost, setCurrentCost] = useState<string>("$3,000 / month");

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
    <div className="site-grid py-12 min-h-[calc(100vh-8rem)]">
      {/* Header Annotation */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#c6c6c6]">
        <div>
          <span className="mint-tag mb-2">
            AI PROJECT COST ESTIMATOR
          </span>
          <h1 className="type-h3">
            Estimate your project's cost & savings
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (5 cols): Input Form */}
        <div className="lg:col-span-5 bg-[#ffffff] rounded-[24px] p-6 sm:p-8 border border-[#c6c6c6] h-fit">
          <h2 className="font-neo font-bold uppercase tracking-tight text-xl text-[#000000] mb-4">
            Input workflow parameters
          </h2>

          <form onSubmit={handleCalculateRoi} className="space-y-4">
            <div>
              <label className="font-mono-tag text-[#000000] block mb-1">
                BUSINESS TYPE
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full bg-[#f3f3f3] border border-[#c6c6c6] rounded-xl p-3 type-body-medium text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#000000]"
              >
                <option>Small Business / Startup</option>
                <option>E-commerce & Retail</option>
                <option>Healthcare & Wellness</option>
                <option>Education / Academic</option>
                <option>Enterprise / Corporate</option>
                <option>Logistics & Supply Chain</option>
              </select>
            </div>

            <div>
              <label className="font-mono-tag text-[#000000] block mb-1">
                PROJECT TYPE
              </label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full bg-[#f3f3f3] border border-[#c6c6c6] rounded-xl p-3 type-body-medium text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#000000]"
              >
                <option>AI Chatbot / LLM Integration</option>
                <option>Custom Software Development</option>
                <option>Academic Project</option>
                <option>Business IT Solutions</option>
                <option>Mobile App Development</option>
              </select>
            </div>

            <div>
              <label className="font-mono-tag text-[#000000] block mb-1">
                CURRENT WORKFLOW & PAIN POINTS
              </label>
              <textarea
                value={workflowDescription}
                onChange={(e) => setWorkflowDescription(e.target.value)}
                rows={3}
                className="w-full bg-[#f3f3f3] border border-[#c6c6c6] rounded-xl p-3 type-body-medium text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#000000] resize-none"
                placeholder="Describe manual tasks, bottleneck frequency, and tool stack..."
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-mono-tag text-[#000000] block mb-1">
                  TEAM SIZE
                </label>
                <input
                  type="text"
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-full bg-[#f3f3f3] border border-[#c6c6c6] rounded-xl p-3 type-body-medium text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                />
              </div>

              <div>
                <label className="font-mono-tag text-[#000000] block mb-1">
                  EST. MONTHLY COST
                </label>
                <input
                  type="text"
                  value={currentCost}
                  onChange={(e) => setCurrentCost(e.target.value)}
                  className="w-full bg-[#f3f3f3] border border-[#c6c6c6] rounded-xl p-3 type-body-medium text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#000000]"
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
                  <span>Estimate My Project Cost</span>
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
                  <span className="mint-tag mb-1">ESTIMATE READY</span>
                  <h3 className="font-neo font-bold uppercase tracking-tight text-2xl text-[#000000]">
                    {auditResult.title}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="font-mono-tag text-[#979797] block">PROJECT FIT SCORE</span>
                  <span className="font-neo font-bold text-2xl text-[#000000]">
                    {auditResult.readinessScore}/100
                  </span>
                </div>
              </div>

              {/* Highlight Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#f3f3f3] p-4 rounded-2xl border border-[#c6c6c6]/50">
                <div>
                  <span className="font-mono-tag text-[#979797] block">PROJECTED ROI</span>
                  <span className="font-neo font-bold text-2xl text-[#000000]">
                    {auditResult.roiPercentage}%
                  </span>
                </div>
                <div>
                  <span className="font-mono-tag text-[#979797] block">EST. MONTHLY SAVINGS</span>
                  <span className="font-neo font-bold text-2xl text-[#000000] break-words">
                    {auditResult.monthlySavingsEst}
                  </span>
                </div>
                <div>
                  <span className="font-mono-tag text-[#979797] block">WEEKLY TIME SAVED</span>
                  <span className="font-neo font-bold text-2xl text-[#000000]">
                    {auditResult.timeSavedPerWeekHours} hrs
                  </span>
                </div>
              </div>

              {/* Executive Summary */}
              <div>
                <span className="font-mono-tag text-[#000000] block mb-2">
                  EXECUTIVE SUMMARY
                </span>
                <p className="type-body-medium text-[#444444]">
                  {auditResult.executiveSummary}
                </p>
              </div>

              {/* Recommended Agent Modules */}
              <div>
                <span className="font-mono-tag text-[#000000] block mb-3">
                  RECOMMENDED SOLUTION COMPONENTS
                </span>
                <div className="space-y-3">
                  {auditResult.agentModules.map((m, idx) => (
                    <div key={idx} className="bg-[#f3f3f3] p-4 rounded-xl border border-[#c6c6c6]/40">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-neo font-bold text-base text-[#000000]">{m.name}</span>
                        <span className="font-mono-tag bg-[#000000] text-[#ffffff] px-2 py-0.5 rounded">
                          {m.autonomyLevel}
                        </span>
                      </div>
                      <p className="type-body-medium text-[#444444] mb-2">{m.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {m.connectors.map((c, cIdx) => (
                          <span key={cIdx} className="font-mono-tag bg-[#ffffff] text-[#000000] px-2 py-0.5 rounded border border-[#c6c6c6]">
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
                <span className="font-mono-tag text-[#000000] block mb-3">
                  IMPLEMENTATION TIMELINE
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {auditResult.milestones.map((ms, idx) => (
                    <div key={idx} className="bg-[#f3f3f3] p-3.5 rounded-xl border border-[#c6c6c6]/40">
                      <div className="flex justify-between font-mono-tag text-[#000000] mb-1">
                        <span>{ms.phase}</span>
                        <span className="text-[#979797]">{ms.duration}</span>
                      </div>
                      <p className="type-body-medium text-[#444444]">{ms.deliverables}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 border-t border-[#f3f3f3] flex justify-between items-center">
                <span className="font-mono-tag text-[#979797]">
                  NMT SOLUTIONS — READY WHEN YOU ARE
                </span>
                <button
                  onClick={onOpenDemo}
                  className="bg-[#000000] hover:bg-[#2f2f2f] text-[#ffffff] px-5 py-2.5 rounded-lg font-neo text-sm font-medium flex items-center gap-2 cursor-pointer"
                >
                  <span>Schedule a Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#d1ffca]" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-[#ffffff] rounded-[24px] p-8 border border-[#c6c6c6] flex flex-col items-center justify-center text-center h-full min-h-[420px]">
              <Calculator className="w-12 h-12 text-[#979797] mb-4" />
              <h3 className="font-neo font-bold uppercase tracking-tight text-2xl text-[#000000] mb-2">
                Awaiting your project details
              </h3>
              <p className="type-body-medium text-[#444444] max-w-md mb-6">
                Fill out your project details on the left to generate a personalized cost and savings estimate with an implementation roadmap.
              </p>
              <div className="mint-tag">
                GEMINI 3.6-FLASH ESTIMATOR ACTIVE
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
