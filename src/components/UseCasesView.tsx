import React, { useState } from "react";
import { ENTERPRISE_USE_CASES } from "../data/mockData";
import { EnterpriseUseCase } from "../types";
import { ArrowUpRight, Layers, CheckCircle2 } from "lucide-react";

interface UseCasesViewProps {
  onOpenDemo: () => void;
}

const FILTER_TAGS = [
  "ALL",
  "AI & LLM",
  "CUSTOM SOFTWARE",
  "ACADEMIC",
  "BUSINESS IT",
  "MOBILE APP",
];

const getRelatedUseCases = (uc: EnterpriseUseCase): EnterpriseUseCase[] => {
  const sameTag = ENTERPRISE_USE_CASES.filter((o) => o.id !== uc.id && o.tag === uc.tag);
  const others = ENTERPRISE_USE_CASES.filter((o) => o.id !== uc.id && o.tag !== uc.tag);
  return [...sameTag, ...others].slice(0, 3);
};

export const UseCasesView: React.FC<UseCasesViewProps> = ({ onOpenDemo }) => {
  const [selectedTag, setSelectedTag] = useState<string>("ALL");

  const filteredUseCases =
    selectedTag === "ALL"
      ? ENTERPRISE_USE_CASES
      : ENTERPRISE_USE_CASES.filter((u) => u.tag === selectedTag);

  const goToUseCase = (id: string) => {
    setSelectedTag("ALL");
    setTimeout(() => {
      document
        .getElementById(`usecase-${id}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div className="site-grid py-12 min-h-[calc(100vh-8rem)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#c6c6c6] gap-4">
        <div>
          <span className="mint-tag mb-2">
            REAL PROJECT EXAMPLES
          </span>
          <h1 className="type-h3">
            Proven use case showcase
          </h1>
        </div>

        {/* Filter Tabs */}
        <div className="max-w-full overflow-x-auto no-scrollbar self-start md:self-auto">
          <div className="flex gap-2 bg-[#ffffff] p-1.5 rounded-full border border-[#c6c6c6] w-max">
            {FILTER_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1.5 rounded-full font-neo text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedTag === tag
                    ? "bg-[#000000] text-[#ffffff]"
                    : "text-[#444444] hover:text-[#000000]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* List of Use Case Cards */}
      <div className="space-y-8">
        {filteredUseCases.map((uc) => (
          <div
            key={uc.id}
            id={`usecase-${uc.id}`}
            className="bg-[#ffffff] rounded-[32px] p-6 sm:p-10 border border-[#c6c6c6] space-y-6 scroll-mt-24"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#f3f3f3] gap-4">
              <div>
                <span className="mint-tag mb-2">{uc.tag}</span>
                <h2 className="font-neo font-bold uppercase tracking-tight text-2xl sm:text-3xl text-[#000000]">
                  {uc.title}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {uc.systemIntegration.map((s, idx) => (
                  <span
                    key={idx}
                    className="font-mono-tag bg-[#f3f3f3] text-[#000000] px-3 py-1 rounded-full border border-[#c6c6c6]/50"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Headline */}
            <h3 className="type-h4 text-[#000000] leading-tight">
              "{uc.headline}"
            </h3>

            {/* Problem vs Solution Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#f3f3f3] p-6 rounded-2xl border border-[#c6c6c6]/40">
              <div>
                <span className="font-mono-tag text-[#000000] block mb-2">
                  THE CHALLENGE
                </span>
                <p className="type-body-medium text-[#444444]">
                  {uc.problem}
                </p>
              </div>

              <div>
                <span className="font-mono-tag text-[#000000] block mb-2">
                  THE NMT SOLUTION
                </span>
                <p className="type-body-medium font-medium text-[#000000]">
                  {uc.solution}
                </p>
              </div>
            </div>

            {/* Impact Metrics Bar */}
            <div className="pt-4 border-t border-[#f3f3f3] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-8">
                {uc.impactMetrics.map((m, idx) => (
                  <div key={idx}>
                    <span className="font-mono-tag text-[#979797] block">{m.label}</span>
                    <span className="font-neo font-bold text-xl text-[#000000]">{m.value}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenDemo}
                className="bg-[#000000] hover:bg-[#2f2f2f] text-[#ffffff] px-5 py-3 rounded-lg font-neo text-sm font-medium flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span>Request a Similar Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#d1ffca]" />
              </button>
            </div>

            {/* Related use cases */}
            <div className="pt-6 border-t border-[#f3f3f3]">
              <span className="font-mono-tag text-[#979797] block mb-3">
                RELATED USE CASES
              </span>
              <div className="flex flex-wrap gap-2">
                {getRelatedUseCases(uc).map((related) => (
                  <button
                    key={related.id}
                    onClick={() => goToUseCase(related.id)}
                    title={related.title}
                    className="max-w-full font-mono-tag bg-[#f3f3f3] hover:bg-[#e5e5e5] text-[#000000] px-3 py-1.5 rounded-full border border-[#c6c6c6]/50 cursor-pointer transition-colors flex items-center gap-2"
                  >
                    <span className="shrink-0">{related.tag}</span>
                    <span className="truncate normal-case font-medium">
                      {related.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
