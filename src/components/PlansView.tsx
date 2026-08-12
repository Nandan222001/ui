import React from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "./home/Reveal";
import { HoverLoopButton } from "./home/HoverLoopButton";

interface PlansViewProps {
  onOpenDemo: () => void;
}

interface Plan {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const PLANS: Plan[] = [
  {
    name: "Hero Starter",
    price: "$60K",
    priceNote: "per year",
    description:
      "A two-week install onto a single ERP or HCM system, with an AI-first ticketing layer sitting on top from day one.",
    features: [
      "Live on one core system (ERP or HCM) within 14 days",
      "AI-first ticketing platform included",
      "Tickets the agent resolves outright cost nothing extra",
      "Human-assisted tickets billed at standard market rates",
      "Pre-built agents drawn from our production library",
      "~30% of tickets closed with zero human touch, immediately",
      "Reporting built roughly 70% faster, SLAs met roughly 50% faster",
    ],
    cta: "Get Started",
  },
  {
    name: "Hero Pro",
    price: "$150K",
    priceNote: "per year, all-in",
    description:
      "Everything in Starter, plus a forward-deployed engineering team living inside your stack and a platform that keeps getting sharper.",
    features: [
      "Includes the full Starter tier",
      "Forward-deployed engineers embedded across your systems",
      "Learns continuously from every ticket, reconciliation, and close",
      "One net-new custom agent shipped every year",
      "Agents tuned to your industry and your SOPs specifically",
      "Automation compounds — Year 2 outperforms Year 1 by design",
      "Connects across Oracle, Workday, SAP, NetSuite, and Dynamics",
    ],
    cta: "Talk to Us",
    popular: true,
  },
  {
    name: "Hero Enterprise",
    price: "Custom",
    priceNote: "typically $1.5M–$3M / year",
    description:
      "Built for legacy, nonstandard, or proprietary environments where off-the-shelf configuration runs out of road.",
    features: [
      "Net-new agents engineered for legacy or proprietary systems",
      "Oracle and Workday rollouts roughly 90% faster via agent-led config",
      "Senior engineers embedded with you full-time",
      "Multi-year accountability for operational outcomes",
      "You retain ownership of every agent and all resulting IP",
    ],
    cta: "Talk to Us",
  },
];

const SHARED_FEATURES = [
  "Full access to Hero Answers, Hero Actions, and Hero Experts",
  "A dedicated onboarding track to get your data and teams AI-ready",
  "Hands-on engineering support, not a ticket queue",
  "A shared commitment to measurable ROI inside the first 90 days",
];

const CYCLE_STEPS = [
  {
    quarter: "Q1",
    title: "Diagnose",
    description:
      "Over the first 90 days the agent builds operational memory from your systems and ranks your costliest pain points.",
  },
  {
    quarter: "Q2",
    title: "Scope",
    description:
      "We define a roadmap aimed at the single highest-cost workflow we found, with engineering sign-off before anything ships.",
  },
  {
    quarter: "Q3",
    title: "Build",
    description:
      "Agent scaffolding gets built and feature-flagged, developed and tested under real production conditions.",
  },
  {
    quarter: "Q4",
    title: "Ship",
    description:
      "The rollout goes live behind feature flags in production, and the compounding cycle restarts for Year 2.",
  },
];

const FAQS = [
  {
    q: "What actually separates the three plans?",
    a: "Starter gets one core system onto the platform fast, with AI resolving tickets for free and humans billing at market rate for the rest. Pro adds an embedded engineering team, a yearly custom agent, and a platform that compounds what it learns. Enterprise is for legacy or proprietary environments that need net-new agents built from scratch, with senior engineers on-site and multi-year accountability.",
  },
  {
    q: "When you say \"agent,\" do you mean a chatbot?",
    a: "No. An agent here is autonomously built software that understands a specific business process end to end and takes validated actions inside your systems, not a conversational front end. Every action runs under governance controls with a full audit trail.",
  },
  {
    q: "How does the platform actually get smarter over time?",
    a: "It trains continuously on your ticket history, reconciliation patterns, close cycles, and even supplier behavior. That accumulated semantic memory is what lets each year's new agents launch sharper than the last, rather than starting from zero.",
  },
  {
    q: "How is this different from bringing in contract staff?",
    a: "Staff augmentation bills for hours worked. We sell outcomes running on a platform you end up owning: the agents and the IP they generate are yours, and our accountability is measured in multi-year results, not a timesheet.",
  },
  {
    q: "How fast is this actually running in production?",
    a: "Starter is live within 14 days of kickoff. Pro and Enterprise engagements are validated running in production by day 91, in line with the Q1 diagnostic phase of the annual cycle.",
  },
  {
    q: "Which systems can this connect to?",
    a: "Oracle Fusion and E-Business Suite, Workday, SAP, NetSuite, and ServiceNow are all supported out of the box. Enterprise engagements extend coverage to legacy or proprietary systems that don't fit a standard connector.",
  },
  {
    q: "Do we need to rip out our current systems or MSP?",
    a: "No. The platform runs alongside what you already have, including any managed service providers you rely on today. Nothing needs to be replaced for the agents to start working.",
  },
  {
    q: "How does support and data security actually work?",
    a: "Support means a direct line to senior engineers, not a tier-one queue. On security, connections are encrypted, agents default to read-only access until actions are pre-validated, deployments are dedicated per customer, and our practices align with SOC 2 Type II and ISO 42001.",
  },
];

export const PlansView: React.FC<PlansViewProps> = ({ onOpenDemo }) => {
  return (
    <div>
      {/* Hero */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal>
            <span className="mint-tag mb-6">PLANS</span>
            <h1 className="type-h1 max-w-4xl">Prove it in two weeks.</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="type-body-headline text-[#444444] max-w-2xl mt-8">
              Tickets the agent resolves on its own don't cost you anything.
              Tickets that still need a human are billed on a sliding scale,
              so the incentive stays aligned with automating more of the work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Plan comparison */}
      <section className="w-full bg-[#f3f3f3] text-[#000000]">
        <div className="site-grid section-block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {PLANS.map((plan, idx) => (
              <Reveal key={plan.name} delay={idx * 0.1} className="h-full">
                <div
                  className={`h-full flex flex-col rounded-[24px] p-6 sm:p-8 border ${
                    plan.popular
                      ? "bg-[#000000] text-[#ffffff] border-[#000000]"
                      : "bg-[#ffffff] text-[#000000] border-[#c6c6c6]/60"
                  }`}
                >
                  {plan.popular && (
                    <span className="mint-tag mb-4 self-start">POPULAR</span>
                  )}
                  <h3 className="type-h4 mb-1">{plan.name}</h3>
                  <p
                    className={`type-body-medium mb-6 ${
                      plan.popular ? "text-[#979797]" : "text-[#444444]"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="font-mono-tag block mb-1 text-[#979797] uppercase">
                      {plan.priceNote}
                    </span>
                    <span className="font-neo font-bold text-4xl sm:text-5xl">
                      {plan.price}
                    </span>
                  </div>

                  <div className="flex-1 space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <Check
                          className={`w-4 h-4 mt-0.5 shrink-0 ${
                            plan.popular ? "text-[#d1ffca]" : "text-[#000000]"
                          }`}
                        />
                        <span
                          className={`type-body-medium ${
                            plan.popular ? "text-[#e5e5e5]" : "text-[#444444]"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onOpenDemo}
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg font-neo font-medium text-sm cursor-pointer transition-colors ${
                      plan.popular
                        ? "bg-[#ffffff] text-[#000000] hover:bg-[#e5e5e5]"
                        : "bg-[#000000] text-[#ffffff] hover:bg-[#2f2f2f]"
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Shared across every plan */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal className="mb-12">
            <span className="font-mono-tag text-[#444444] block mb-4">
              EVERY PLAN INCLUDES
            </span>
            <h2 className="type-h2 max-w-3xl">
              Some things aren't a tier. They're the baseline.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SHARED_FEATURES.map((feature, idx) => (
              <Reveal key={feature} delay={idx * 0.08}>
                <div className="bg-[#ffffff] rounded-[24px] p-6 border border-[#c6c6c6]/60 h-full">
                  <Check className="w-5 h-5 text-[#000000] mb-4" />
                  <p className="type-body-medium text-[#444444]">{feature}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Annual deployment cycle */}
      <section className="w-full bg-[#000000] text-[#ffffff]">
        <div className="site-grid section-block">
          <Reveal className="mb-12">
            <span className="font-mono-tag text-[#979797] block mb-4">
              THE ANNUAL DEPLOYMENT CYCLE
            </span>
            <h2 className="type-h2 max-w-3xl">
              Four quarters, then it compounds.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-6">
            {CYCLE_STEPS.map((step, idx) => (
              <Reveal key={step.quarter} delay={idx * 0.08}>
                <span className="font-mono-tag text-[#d1ffca] block mb-3">
                  {step.quarter}
                </span>
                <h3 className="type-h4 mb-3">{step.title}</h3>
                <p className="type-body-medium text-[#979797]">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal className="mb-12">
            <span className="font-mono-tag text-[#444444] block mb-4">
              FREQUENTLY ASKED
            </span>
            <h2 className="type-h2 max-w-3xl">Questions, answered plainly.</h2>
          </Reveal>

          <div className="max-w-3xl space-y-0 divide-y divide-[#c6c6c6]/60 border-t border-b border-[#c6c6c6]/60">
            {FAQS.map((faq, idx) => (
              <Reveal key={faq.q} delay={idx * 0.04}>
                <div className="py-8">
                  <span className="font-mono-tag text-[#979797] block mb-2">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="type-body-headline mb-3">{faq.q}</h3>
                  <p className="type-body-medium text-[#444444]">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="w-full bg-[#e5e5e5] text-[#000000] pt-0">
        <div className="site-grid pb-16 sm:pb-24">
          <button
            onClick={onOpenDemo}
            className="w-full text-left bg-[#000000] text-[#ffffff] rounded-[24px] p-8 sm:p-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 hover:bg-[#2f2f2f] transition-colors cursor-pointer"
          >
            <h3 className="type-h3">
              Ready to prove it
              <br />
              in two weeks?
            </h3>
            <HoverLoopButton
              as="span"
              className="bg-[#ffffff] text-[#000000] px-5 py-3 rounded-lg font-neo font-medium text-sm shrink-0"
            >
              <span>Book an Intro</span>
              <ArrowUpRight className="w-4 h-4" />
            </HoverLoopButton>
          </button>
        </div>
      </section>
    </div>
  );
};
