import React from "react";
import { ViewMode } from "../types";
import { ArrowUpRight, Cpu } from "lucide-react";

interface NavbarProps {
  activeView: ViewMode;
  onSelectView: (view: ViewMode) => void;
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onSelectView,
  onOpenDemo,
}) => {
  return (
    <header className="w-full h-32 bg-[#e5e5e5] px-4 sm:px-8 flex items-center justify-between sticky top-0 z-40 transition-colors">
      {/* Brand Logo */}
      <div 
        onClick={() => onSelectView("showroom")}
        className="cursor-pointer flex items-center gap-3 group"
      >
        <div className="w-10 h-10 bg-[#000000] text-[#ffffff] flex items-center justify-center font-condensed text-2xl font-bold rounded-lg group-hover:bg-[#2f2f2f] transition-colors">
          D
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-condensed text-3xl font-bold tracking-tight text-[#000000] leading-none">
              DAYOS
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#d1ffca] inline-block"></span>
          </div>
          <span className="font-mono text-[10px] text-[#444444] uppercase tracking-wider font-semibold">
            AI FOR BUSINESS
          </span>
        </div>
      </div>

      {/* Nav Pill Container - White Floating Capsule */}
      <nav className="hidden lg:flex items-center bg-[#ffffff] rounded-[48px] px-3 py-2 border border-[#c6c6c6]/40 shadow-none gap-1">
        <button
          onClick={() => onSelectView("showroom")}
          className={`px-5 py-2.5 rounded-full text-sm font-neo font-medium transition-all ${
            activeView === "showroom"
              ? "bg-[#000000] text-[#ffffff]"
              : "text-[#444444] hover:text-[#000000] hover:bg-[#f3f3f3]"
          }`}
        >
          SHOWROOM
        </button>

        <button
          onClick={() => onSelectView("agent-sandbox")}
          className={`px-5 py-2.5 rounded-full text-sm font-neo font-medium flex items-center gap-2 transition-all ${
            activeView === "agent-sandbox"
              ? "bg-[#000000] text-[#ffffff]"
              : "text-[#444444] hover:text-[#000000] hover:bg-[#f3f3f3]"
          }`}
        >
          <span>AGENT SANDBOX</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#fff100] animate-pulse"></span>
        </button>

        <button
          onClick={() => onSelectView("roi-calculator")}
          className={`px-5 py-2.5 rounded-full text-sm font-neo font-medium transition-all ${
            activeView === "roi-calculator"
              ? "bg-[#000000] text-[#ffffff]"
              : "text-[#444444] hover:text-[#000000] hover:bg-[#f3f3f3]"
          }`}
        >
          ROI ESTIMATOR
        </button>

        <button
          onClick={() => onSelectView("readiness-assessment")}
          className={`px-5 py-2.5 rounded-full text-sm font-neo font-medium transition-all ${
            activeView === "readiness-assessment"
              ? "bg-[#000000] text-[#ffffff]"
              : "text-[#444444] hover:text-[#000000] hover:bg-[#f3f3f3]"
          }`}
        >
          READINESS DIAGNOSTIC
        </button>

        <button
          onClick={() => onSelectView("use-cases")}
          className={`px-5 py-2.5 rounded-full text-sm font-neo font-medium transition-all ${
            activeView === "use-cases"
              ? "bg-[#000000] text-[#ffffff]"
              : "text-[#444444] hover:text-[#000000] hover:bg-[#f3f3f3]"
          }`}
        >
          SOLUTIONS
        </button>
      </nav>

      {/* Right Side CTA */}
      <div className="flex items-center gap-3">
        {/* Mobile menu pill toggle */}
        <div className="flex lg:hidden overflow-x-auto gap-1 bg-[#ffffff] p-1.5 rounded-full border border-[#c6c6c6]">
          <button
            onClick={() => onSelectView("showroom")}
            className={`px-3 py-1.5 rounded-full text-xs font-neo font-medium ${
              activeView === "showroom" ? "bg-[#000000] text-[#ffffff]" : "text-[#444444]"
            }`}
          >
            Showroom
          </button>
          <button
            onClick={() => onSelectView("agent-sandbox")}
            className={`px-3 py-1.5 rounded-full text-xs font-neo font-medium ${
              activeView === "agent-sandbox" ? "bg-[#000000] text-[#ffffff]" : "text-[#444444]"
            }`}
          >
            Sandbox
          </button>
          <button
            onClick={() => onSelectView("roi-calculator")}
            className={`px-3 py-1.5 rounded-full text-xs font-neo font-medium ${
              activeView === "roi-calculator" ? "bg-[#000000] text-[#ffffff]" : "text-[#444444]"
            }`}
          >
            ROI
          </button>
        </div>

        {/* Schedule Demo Button (Filled Dark Button) */}
        <button
          onClick={onOpenDemo}
          className="bg-[#000000] hover:bg-[#2f2f2f] text-[#ffffff] px-5 py-3 rounded-lg text-sm font-neo font-medium flex items-center gap-2 transition-colors cursor-pointer"
        >
          <span>Schedule a Demo</span>
          <ArrowUpRight className="w-4 h-4 text-[#d1ffca]" />
        </button>
      </div>
    </header>
  );
};
