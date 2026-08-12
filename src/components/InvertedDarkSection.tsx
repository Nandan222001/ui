import React from "react";
import { DAYOS_PHILOSOPHY } from "../data/mockData";
import { ArrowUpRight } from "lucide-react";

interface InvertedDarkSectionProps {
  onOpenDemo: () => void;
}

export const InvertedDarkSection: React.FC<InvertedDarkSectionProps> = ({
  onOpenDemo,
}) => {
  return (
    <section className="w-full bg-[#000000] text-[#ffffff] py-20 px-4 sm:px-8 mt-12 border-t border-[#2f2f2f]">
      <div className="max-w-[1240px] mx-auto">
        {/* Top Annotation */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[#fff100] animate-pulse"></span>
          <span className="font-mono text-xs text-[#979797] uppercase tracking-wider font-semibold">
            THE DAYOS ADVANTAGE // ENTERPRISE ARCHITECTURE
          </span>
        </div>

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-8">
            <h2 className="font-condensed text-[48px] sm:text-[72px] lg:text-[88px] font-bold text-[#ffffff] leading-[0.9] tracking-[-0.03em] uppercase">
              BORN FROM THE AI ERA. <br />
              <span className="text-[#979797]">NOT BOLTED ONTO IT.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between">
            <p className="font-neo text-base text-[#979797] leading-relaxed mb-6">
              Dayos isn't a legacy ERP plugin re-branded as AI. Hero was architected from day one for autonomous execution, multi-step planning, and direct system navigation.
            </p>

            <button
              onClick={onOpenDemo}
              className="bg-[#ffffff] hover:bg-[#e5e5e5] text-[#000000] px-6 py-3.5 rounded-lg font-neo text-sm font-medium self-start flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>Request System Architecture Spec</span>
              <ArrowUpRight className="w-4 h-4 text-[#000000]" />
            </button>
          </div>
        </div>

        {/* System Capabilities Matrix Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DAYOS_PHILOSOPHY.map((cap, idx) => (
            <div
              key={idx}
              className="bg-[#2f2f2f] rounded-[24px] p-6 border border-[#444444] flex flex-col justify-between hover:border-[#d1ffca] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#fff100] font-bold">
                    0{idx + 1} //
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#d1ffca]"></span>
                </div>

                <h3 className="font-condensed text-2xl font-bold text-[#ffffff] uppercase mb-1 leading-snug">
                  {cap.title}
                </h3>

                <p className="font-mono text-xs text-[#d1ffca] mb-3">
                  {cap.subtitle}
                </p>

                <p className="font-neo text-xs text-[#979797] leading-relaxed">
                  {cap.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#444444] flex items-center justify-between text-xs font-mono text-[#979797]">
                <span>VERIFIED</span>
                <span className="text-[#ffffff]">ISO 42001</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
