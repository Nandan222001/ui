import React from "react";
import { ViewMode } from "../types";
import { ArrowUpRight, Play, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { ConcreteRendersShowcase } from "./ConcreteRendersShowcase";

interface HeroSectionProps {
  onSelectView: (view: ViewMode) => void;
  onOpenDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectView,
  onOpenDemo,
}) => {
  return (
    <section className="w-full bg-[#e5e5e5] pt-6 pb-16 px-4 sm:px-8 max-w-[1240px] mx-auto">
      {/* Top Taxonomy Mint Pill */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="mint-tag">
          DAYOS HERO AI PLATFORM // ENTERPRISE AGENTIC AI
        </span>
        <span className="font-mono text-xs text-[#000000] font-semibold bg-[#fff100] px-2 py-0.5 rounded">
          ISO/IEC 42001 CERTIFIED
        </span>
        <span className="hidden sm:inline-block font-mono text-xs text-[#979797]">
          [ PRODUCTION WITHIN 91 DAYS ]
        </span>
      </div>

      {/* Grid Layout: Massive Display Headline Left + 3D Product Render Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left Column (7 cols): Massive Condensed Headline */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <h1 className="font-condensed text-[56px] sm:text-[84px] lg:text-[100px] xl:text-[112px] font-bold text-[#000000] leading-[0.88] tracking-[-0.03em] uppercase mb-8">
            EVERYTHING THAT <br />
            NEEDS DOING: <br />
            <span className="text-[#000000] bg-[#d1ffca] px-3 py-1 inline-block rounded-xl my-1">
              DONE.
            </span>
          </h1>

          <p className="font-neo text-lg sm:text-xl text-[#000000] leading-relaxed max-w-xl mb-6 font-medium">
            Transform your AI from advisor to executor. The Hero AI Platform unites real-time answers, agentic workflows across enterprise systems, and expert support.
          </p>

          <p className="font-neo text-sm text-[#444444] leading-relaxed max-w-xl mb-8">
            Hero automates the 30% that platforms can't solve out of the box across Accounting, HR, Procurement, IT, and Finance — logging directly into Oracle, Workday, SAP, NetSuite, and ServiceNow.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onSelectView("agent-sandbox")}
              className="bg-[#000000] hover:bg-[#2f2f2f] text-[#ffffff] px-6 py-4 rounded-lg font-neo font-medium text-base flex items-center gap-3 transition-colors cursor-pointer shadow-none"
            >
              <span>Test Hero AI Actions</span>
              <Play className="w-4 h-4 fill-[#d1ffca] text-[#d1ffca]" />
            </button>

            <button
              onClick={() => onSelectView("roi-calculator")}
              className="bg-[#ffffff] hover:bg-[#f3f3f3] text-[#000000] border-1.5 border-[#444444] px-6 py-4 rounded-lg font-neo font-medium text-base flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>Estimate Enterprise ROI</span>
              <ArrowUpRight className="w-4 h-4 text-[#000000]" />
            </button>
          </div>

          {/* Micro Stats Bar */}
          <div className="grid grid-cols-3 gap-4 pt-10 mt-10 border-t border-[#c6c6c6]/60">
            <div>
              <span className="font-condensed text-3xl sm:text-4xl font-bold text-[#000000] block">
                70%
              </span>
              <span className="font-mono text-xs text-[#979797] uppercase">
                TIME SAVED PER USER
              </span>
            </div>
            <div>
              <span className="font-condensed text-3xl sm:text-4xl font-bold text-[#000000] block">
                91 DAYS
              </span>
              <span className="font-mono text-xs text-[#979797] uppercase">
                PRODUCTION SLA
              </span>
            </div>
            <div>
              <span className="font-condensed text-3xl sm:text-4xl font-bold text-[#000000] block">
                ISO 42001
              </span>
              <span className="font-mono text-xs text-[#979797] uppercase">
                AI MANAGEMENT SYSTEM
              </span>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): 3D Material Product Block Showcase */}
        <div className="lg:col-span-5 w-full">
          <ConcreteRendersShowcase />
        </div>
      </div>
    </section>
  );
};
