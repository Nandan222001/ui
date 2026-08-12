import React, { useState } from "react";
import { READINESS_QUIZ_QUESTIONS } from "../data/mockData";
import { ReadinessAuditResponse } from "../types";
import { CheckCircle2, ShieldAlert, ArrowUpRight, Loader2, Award, Zap } from "lucide-react";

interface ReadinessAssessmentViewProps {
  onOpenDemo: () => void;
}

export const ReadinessAssessmentView: React.FC<ReadinessAssessmentViewProps> = ({
  onOpenDemo,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [auditResponse, setAuditResponse] = useState<ReadinessAuditResponse | null>(null);

  const handleSelectOption = (questionId: string, optionIdx: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleEvaluateReadiness = async () => {
    setIsLoading(true);

    try {
      const answersPayload = READINESS_QUIZ_QUESTIONS.map((q) => ({
        question: q.question,
        selectedOption: q.options[selectedAnswers[q.id] || 0],
      }));

      const res = await fetch("/api/gemini/readiness-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: answersPayload }),
      });

      if (!res.ok) {
        throw new Error("Failed to evaluate readiness");
      }

      const data = await res.json();
      setAuditResponse(data);
    } catch (err: any) {
      console.error(err);
      alert("Error evaluating readiness: " + (err.message || "Unknown error"));
    } finally {
      setIsLoading(false);
    }
  };

  const isFormComplete = READINESS_QUIZ_QUESTIONS.every((q) => selectedAnswers[q.id] !== undefined);

  return (
    <div className="w-full bg-[#e5e5e5] py-8 px-4 sm:px-8 max-w-[1240px] mx-auto min-h-[calc(100vh-8rem)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#c6c6c6]">
        <div>
          <span className="mint-tag mb-2">
            ENTERPRISE AI DIAGNOSTIC
          </span>
          <h1 className="font-condensed text-4xl sm:text-6xl font-bold text-[#000000] uppercase tracking-tight">
            ORGANIZATIONAL READINESS AUDIT
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Quiz Questions Column (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {READINESS_QUIZ_QUESTIONS.map((q, qIdx) => (
            <div key={q.id} className="bg-[#ffffff] rounded-[24px] p-6 border border-[#c6c6c6]">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-[#000000] font-bold">
                  QUESTION 0{qIdx + 1} //
                </span>
              </div>

              <h3 className="font-neo text-base font-semibold text-[#000000] mb-4">
                {q.question}
              </h3>

              <div className="space-y-2">
                {q.options.map((opt, oIdx) => {
                  const isSelected = selectedAnswers[q.id] === oIdx;
                  return (
                    <div
                      key={oIdx}
                      onClick={() => handleSelectOption(q.id, oIdx)}
                      className={`p-3.5 rounded-xl border cursor-pointer font-neo text-xs transition-all flex items-center justify-between ${
                        isSelected
                          ? "bg-[#000000] text-[#ffffff] border-[#000000]"
                          : "bg-[#f3f3f3] text-[#444444] border-[#c6c6c6]/50 hover:border-[#000000]"
                      }`}
                    >
                      <span>{opt}</span>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected ? "border-[#d1ffca] bg-[#d1ffca]" : "border-[#c6c6c6]"
                      }`}>
                        {isSelected && <div className="w-1.5 h-1.5 bg-[#000000] rounded-full" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <button
            onClick={handleEvaluateReadiness}
            disabled={!isFormComplete || isLoading}
            className="w-full bg-[#000000] hover:bg-[#2f2f2f] disabled:opacity-50 text-[#ffffff] py-4 rounded-xl font-neo text-sm font-medium flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#d1ffca]" />
                <span>EVALUATING READINESS MATRIX...</span>
              </>
            ) : (
              <>
                <span>Submit Diagnostic Questionnaire</span>
                <Award className="w-4 h-4 text-[#d1ffca]" />
              </>
            )}
          </button>
        </div>

        {/* Results Column (5 cols) */}
        <div className="lg:col-span-5">
          {auditResponse ? (
            <div className="bg-[#ffffff] rounded-[24px] p-6 sm:p-8 border border-[#c6c6c6] space-y-6 sticky top-36">
              <div className="flex items-center justify-between pb-4 border-b border-[#f3f3f3]">
                <div>
                  <span className="mint-tag mb-1">DIAGNOSTIC COMPLETE</span>
                  <h3 className="font-condensed text-3xl font-bold text-[#000000] uppercase">
                    TIER: {auditResponse.tier}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[10px] text-[#979797] uppercase block">SCORE</span>
                  <span className="font-condensed text-4xl font-bold text-[#000000]">
                    {auditResponse.score}%
                  </span>
                </div>
              </div>

              <div>
                <span className="font-mono text-xs text-[#000000] font-bold uppercase block mb-1">
                  EXECUTIVE ASSESSMENT
                </span>
                <p className="font-neo text-xs text-[#444444] leading-relaxed">
                  {auditResponse.summary}
                </p>
              </div>

              <div>
                <span className="font-mono text-xs text-[#000000] font-bold uppercase block mb-2">
                  ORGANIZATIONAL STRENGTHS
                </span>
                <div className="space-y-1.5">
                  {auditResponse.strengths.map((s, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-neo text-[#000000]">
                      <CheckCircle2 className="w-4 h-4 text-[#000000] shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-mono text-xs text-[#000000] font-bold uppercase block mb-2">
                  CRITICAL BOTTLENECKS
                </span>
                <div className="space-y-1.5">
                  {auditResponse.vulnerabilities.map((v, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-neo text-[#444444]">
                      <ShieldAlert className="w-4 h-4 text-[#000000] shrink-0 mt-0.5" />
                      <span>{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#f3f3f3] rounded-xl border border-[#c6c6c6]">
                <span className="font-mono text-[10px] text-[#979797] uppercase block mb-1">RECOMMENDED FIRST ACTION</span>
                <p className="font-neo text-xs font-semibold text-[#000000]">{auditResponse.firstAction}</p>
              </div>

              <button
                onClick={onOpenDemo}
                className="w-full bg-[#000000] hover:bg-[#2f2f2f] text-[#ffffff] py-3 rounded-lg font-neo text-xs font-medium flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Discuss Results with Dayos Engineers</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#d1ffca]" />
              </button>
            </div>
          ) : (
            <div className="bg-[#ffffff] rounded-[24px] p-8 border border-[#c6c6c6] flex flex-col items-center justify-center text-center sticky top-36">
              <Award className="w-12 h-12 text-[#979797] mb-4" />
              <h3 className="font-condensed text-2xl font-bold text-[#000000] uppercase mb-2">
                READINESS SCORECARD
              </h3>
              <p className="font-neo text-xs text-[#444444] max-w-xs leading-relaxed mb-4">
                Select your current enterprise practices on the left to receive a governance and deployment diagnostic score.
              </p>
              <span className="mint-tag">
                GEMINI DIAGNOSTIC ENGINE READY
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
