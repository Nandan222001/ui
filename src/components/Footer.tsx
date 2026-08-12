import React from "react";
import { ViewMode } from "../types";

interface FooterProps {
  onSelectView: (view: ViewMode) => void;
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectView, onOpenDemo }) => {
  return (
    <footer className="w-full bg-[#000000] text-[#ffffff] pt-16 pb-12 px-4 sm:px-8 border-t border-[#2f2f2f] mt-20">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#2f2f2f]">
          {/* Col 1: Brand Logo & Email Highlight */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#ffffff] text-[#000000] flex items-center justify-center font-condensed text-2xl font-bold rounded-lg">
                D
              </div>
              <span className="font-condensed text-4xl font-bold tracking-tight text-[#ffffff]">
                DAYOS
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#d1ffca] inline-block"></span>
            </div>

            <p className="font-neo text-sm text-[#979797] max-w-sm leading-relaxed">
              Autonomous enterprise AI agents engineered for deterministic ERP, CRM, and SCM execution with zero-shadow security.
            </p>

            <div className="pt-2">
              <span className="font-mono text-xs text-[#979797] uppercase block mb-1">
                DIRECT ARCHITECT INQUIRIES
              </span>
              <a
                href="mailto:contact@dayos.ai"
                className="voltage-highlight font-mono text-sm tracking-wide hover:underline inline-block"
              >
                contact@dayos.ai
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-mono text-xs text-[#d1ffca] uppercase block font-semibold mb-3">
              PLATFORM NAVIGATION
            </span>
            <ul className="space-y-2 font-neo text-sm text-[#979797]">
              <li>
                <button
                  onClick={() => onSelectView("showroom")}
                  className="hover:text-[#ffffff] transition-colors"
                >
                  System Showroom
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectView("agent-sandbox")}
                  className="hover:text-[#ffffff] transition-colors flex items-center gap-1.5"
                >
                  <span>Agent Sandbox</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fff100]"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectView("roi-calculator")}
                  className="hover:text-[#ffffff] transition-colors"
                >
                  ROI Estimator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectView("readiness-assessment")}
                  className="hover:text-[#ffffff] transition-colors"
                >
                  Readiness Assessment
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectView("use-cases")}
                  className="hover:text-[#ffffff] transition-colors"
                >
                  Solutions Catalogue
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Compliance & Security */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-mono text-xs text-[#d1ffca] uppercase block font-semibold mb-3">
              COMPLIANCE & GOVERNANCE
            </span>
            <ul className="space-y-2 font-mono text-xs text-[#979797]">
              <li>SOC2 TYPE II VERIFIED</li>
              <li>ISO27001 AUDITED</li>
              <li>DETERMINISTIC GUARDRAILS</li>
              <li>ROLE-BASED API POLICIES</li>
            </ul>

            <button
              onClick={onOpenDemo}
              className="mt-4 bg-[#ffffff] hover:bg-[#e5e5e5] text-[#000000] px-4 py-2.5 rounded-lg font-neo text-xs font-medium cursor-pointer"
            >
              Request Security Whitepaper
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-[#979797] gap-4">
          <span>© 2026 DAYOS INC. ALL RIGHTS RESERVED.</span>
          <span className="text-[#d1ffca]">BUILT ON BRUTALIST EDITORIAL DESIGN SYSTEM</span>
        </div>
      </div>
    </footer>
  );
};
