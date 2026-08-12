import React from "react";
import { ViewMode } from "../types";
import { ArrowUpRight } from "lucide-react";

interface FooterProps {
  onSelectView: (view: ViewMode) => void;
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectView, onOpenDemo }) => {
  return (
    <footer className="w-full bg-[#000000] text-[#ffffff]">
      <div className="site-grid pt-16 pb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 pb-12 border-b border-[#2f2f2f]">
          <div>
            <button
              onClick={onOpenDemo}
              className="type-h2 text-left hover:text-[#d1ffca] transition-colors cursor-pointer"
            >
              Let's transform the
              <br />
              way work works.
            </button>
          </div>
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 bg-[#ffffff] text-[#000000] px-6 py-3.5 rounded-lg font-neo font-medium text-sm shrink-0 cursor-pointer hover:bg-[#e5e5e5] transition-colors"
          >
            Schedule a Demo
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-12 border-b border-[#2f2f2f]">
          <div>
            <span className="font-mono-tag text-[#979797] block mb-4">Platform</span>
            <ul className="space-y-2 font-neo text-sm font-medium text-[#979797]">
              <li>
                <button onClick={() => onSelectView("showroom")} className="hover:text-[#ffffff] transition-colors cursor-pointer">
                  Showroom
                </button>
              </li>
              <li>
                <button onClick={() => onSelectView("agent-sandbox")} className="hover:text-[#ffffff] transition-colors cursor-pointer">
                  Hero Actions
                </button>
              </li>
              <li>
                <button onClick={() => onSelectView("use-cases")} className="hover:text-[#ffffff] transition-colors cursor-pointer">
                  Solutions
                </button>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-mono-tag text-[#979797] block mb-4">Resources</span>
            <ul className="space-y-2 font-neo text-sm font-medium text-[#979797]">
              <li>
                <button onClick={() => onSelectView("roi-calculator")} className="hover:text-[#ffffff] transition-colors cursor-pointer">
                  ROI Estimator
                </button>
              </li>
              <li>
                <button onClick={() => onSelectView("readiness-assessment")} className="hover:text-[#ffffff] transition-colors cursor-pointer">
                  Readiness Assessment
                </button>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-mono-tag text-[#979797] block mb-4">Company</span>
            <ul className="space-y-2 font-neo text-sm font-medium text-[#979797]">
              <li className="hover:text-[#ffffff] transition-colors">Why Dayos</li>
              <li className="hover:text-[#ffffff] transition-colors">Careers</li>
            </ul>
          </div>

          <div>
            <span className="font-mono-tag text-[#979797] block mb-4">Have questions or want to chat?</span>
            <a
              href="mailto:hello@dayos.com"
              className="voltage-highlight font-mono text-sm tracking-wide hover:underline inline-block mb-4"
            >
              hello@dayos.com
            </a>
            <p className="font-neo text-xs text-[#979797] leading-relaxed">
              Join our Slack community for support.
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-[#979797] gap-4">
          <span>Dayos © 2026 — All rights reserved</span>
          <span>3 Temasek Ave, Level 18, Centennial Tower, Singapore 039190</span>
        </div>
      </div>
    </footer>
  );
};
