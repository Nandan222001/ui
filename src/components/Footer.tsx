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
              Let's build your
              <br />
              next project.
            </button>
          </div>
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 bg-[#ffffff] text-[#000000] px-6 py-3.5 rounded-lg font-neo font-medium text-sm shrink-0 cursor-pointer hover:bg-[#e5e5e5] transition-colors"
          >
            Get a Free Quote
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 py-12 border-b border-[#2f2f2f]">
          <div>
            <span className="font-mono-tag text-[#979797] block mb-4">Platform</span>
            <ul className="space-y-2 font-neo text-sm font-medium text-[#979797]">
              <li>
                <Link to="/platform/ai-chatbots-assistants" className="hover:text-[#ffffff] transition-colors">
                  AI Chatbots & Assistants
                </Link>
              </li>
              <li>
                <Link to="/platform/ai-automation-agents" className="hover:text-[#ffffff] transition-colors">
                  AI Automation & Agents
                </Link>
              </li>
              <li>
                <Link to="/platform/llm-integration" className="hover:text-[#ffffff] transition-colors">
                  LLM Integration & Custom AI
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-mono-tag text-[#979797] block mb-4">Solutions</span>
            <ul className="space-y-2 font-neo text-sm font-medium text-[#979797]">
              <li>
                <Link to="/solutions/ai-llm-integration" className="hover:text-[#ffffff] transition-colors">
                  AI & LLM Integration
                </Link>
              </li>
              <li>
                <Link to="/solutions/custom-software-development" className="hover:text-[#ffffff] transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link to="/solutions/academic-projects" className="hover:text-[#ffffff] transition-colors">
                  Academic Projects
                </Link>
              </li>
              <li>
                <Link to="/solutions/business-it-solutions" className="hover:text-[#ffffff] transition-colors">
                  Business IT Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions/mobile-app-development" className="hover:text-[#ffffff] transition-colors">
                  Mobile App Development
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
            <span className="font-mono-tag text-[#979797] block mb-4">Try It Out</span>
            <ul className="space-y-2 font-neo text-sm font-medium text-[#979797]">
              <li>
                <Link to="/plans" className="hover:text-[#ffffff] transition-colors">
                  Plans &amp; Pricing
                </Link>
              </li>
              <li>
                <Link to="/partnership" className="hover:text-[#ffffff] transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/agent-sandbox" className="hover:text-[#ffffff] transition-colors">
                  AI Chatbot Sandbox
                </Link>
              </li>
              <li>
                <Link to="/roi-calculator" className="hover:text-[#ffffff] transition-colors">
                  Cost Estimator
                </Link>
              </li>
              <li>
                <Link to="/readiness-assessment" className="hover:text-[#ffffff] transition-colors">
                  AI Readiness Quiz
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-mono-tag text-[#979797] block mb-4">Company</span>
            <ul className="space-y-2 font-neo text-sm font-medium text-[#979797]">
              <li>
                <Link to="/company" className="hover:text-[#ffffff] transition-colors">
                  Why NMT Solutions
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-[#ffffff] transition-colors">
                  Technologies We Use
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#ffffff] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/releases" className="hover:text-[#ffffff] transition-colors">
                  Milestones
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-8 border-b border-[#2f2f2f]">
          <span className="font-mono-tag text-[#979797] block mb-3">Have a project in mind?</span>
          <a
            href="mailto:hr@nmtsolution.com"
            className="voltage-highlight font-mono text-sm tracking-wide hover:underline inline-block mr-4"
          >
            hr@nmtsolution.com
          </a>
          <span className="font-neo text-xs text-[#979797] leading-relaxed">
            Project inquiries. For careers, see the Careers page.
          </span>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-[#979797] gap-4">
          <span>NMT Solutions © 2026 — All rights reserved</span>
          <div className="flex items-center gap-4">
            <Link to="/terms-of-service" className="hover:text-[#ffffff] transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy-statement" className="hover:text-[#ffffff] transition-colors">
              Privacy Statement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
