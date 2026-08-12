import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface FooterProps {
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo }) => {
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 py-12 border-b border-[#2f2f2f]">
          <div>
            <span className="font-mono-tag text-[#979797] block mb-4">Platform</span>
            <ul className="space-y-2 font-neo text-sm font-medium text-[#979797]">
              <li>
                <Link to="/platform/hero-answers" className="hover:text-[#ffffff] transition-colors">
                  Hero Answers
                </Link>
              </li>
              <li>
                <Link to="/platform/hero-actions" className="hover:text-[#ffffff] transition-colors">
                  Hero Actions
                </Link>
              </li>
              <li>
                <Link to="/platform/hero-experts" className="hover:text-[#ffffff] transition-colors">
                  Hero Experts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-mono-tag text-[#979797] block mb-4">Solutions</span>
            <ul className="space-y-2 font-neo text-sm font-medium text-[#979797]">
              <li>
                <Link to="/solutions/ai-it-management-software" className="hover:text-[#ffffff] transition-colors">
                  IT Management
                </Link>
              </li>
              <li>
                <Link to="/solutions/ai-accounting-software" className="hover:text-[#ffffff] transition-colors">
                  Accounting
                </Link>
              </li>
              <li>
                <Link to="/solutions/ai-hr-software" className="hover:text-[#ffffff] transition-colors">
                  Human Resources
                </Link>
              </li>
              <li>
                <Link to="/solutions/ai-finance-software" className="hover:text-[#ffffff] transition-colors">
                  Finance
                </Link>
              </li>
              <li>
                <Link to="/solutions/ai-procurement-software" className="hover:text-[#ffffff] transition-colors">
                  Procurement
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-mono-tag text-[#979797] block mb-4">Resources</span>
            <ul className="space-y-2 font-neo text-sm font-medium text-[#979797]">
              <li>
                <Link to="/use-cases" className="hover:text-[#ffffff] transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-[#ffffff] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#ffffff] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-[#ffffff] transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-[#ffffff] transition-colors">
                  Support Hub
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-mono-tag text-[#979797] block mb-4">Plans</span>
            <ul className="space-y-2 font-neo text-sm font-medium text-[#979797]">
              <li>
                <Link to="/plans" className="hover:text-[#ffffff] transition-colors">
                  Plans &amp; Pricing
                </Link>
              </li>
              <li>
                <Link to="/partnership" className="hover:text-[#ffffff] transition-colors">
                  Partnership
                </Link>
              </li>
              <li>
                <Link to="/agent-sandbox" className="hover:text-[#ffffff] transition-colors">
                  Agent Sandbox
                </Link>
              </li>
              <li>
                <Link to="/roi-calculator" className="hover:text-[#ffffff] transition-colors">
                  ROI Estimator
                </Link>
              </li>
              <li>
                <Link to="/readiness-assessment" className="hover:text-[#ffffff] transition-colors">
                  Readiness Assessment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-mono-tag text-[#979797] block mb-4">Company</span>
            <ul className="space-y-2 font-neo text-sm font-medium text-[#979797]">
              <li>
                <Link to="/company" className="hover:text-[#ffffff] transition-colors">
                  Why Dayos
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-[#ffffff] transition-colors">
                  Our Partners
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#ffffff] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/releases" className="hover:text-[#ffffff] transition-colors">
                  Releases
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-8 border-b border-[#2f2f2f]">
          <span className="font-mono-tag text-[#979797] block mb-3">Have questions or want to chat?</span>
          <a
            href="mailto:hello@dayos.com"
            className="voltage-highlight font-mono text-sm tracking-wide hover:underline inline-block mr-4"
          >
            hello@dayos.com
          </a>
          <span className="font-neo text-xs text-[#979797] leading-relaxed">
            Join our Slack community for support.
          </span>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-[#979797] gap-4">
          <span>Dayos © 2026 — All rights reserved</span>
          <div className="flex items-center gap-4">
            <Link to="/terms-of-service" className="hover:text-[#ffffff] transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy-statement" className="hover:text-[#ffffff] transition-colors">
              Privacy Statement
            </Link>
          </div>
          <span>3 Temasek Ave, Level 18, Centennial Tower, Singapore 039190</span>
        </div>
      </div>
    </footer>
  );
};
