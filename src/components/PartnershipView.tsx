import React from "react";
import { ArrowUpRight, CheckCircle2, X } from "lucide-react";
import { Reveal } from "./home/Reveal";
import { HoverLoopButton } from "./home/HoverLoopButton";

interface PartnershipViewProps {
  onOpenDemo: () => void;
}

const ECOSYSTEMS = ["Oracle", "SAP", "Workday"];

const BENEFITS = [
  {
    stat: "35%",
    label: "Fewer low-value tickets",
    detail:
      "Hero absorbs the routine, repetitive support volume so your consultants spend their hours on strategic work instead.",
  },
  {
    stat: "10x",
    label: "New revenue potential",
    detail:
      "Stand up AI-enabled service lines as new, high-margin SKUs with recurring revenue attached, not one-off project fees.",
  },
  {
    stat: "+15pt",
    label: "Client satisfaction lift",
    detail:
      "Faster resolutions and sharper insights translate directly into stronger retention and higher win rates on renewals.",
  },
  {
    stat: "$0",
    label: "Upfront investment",
    detail:
      "A 90-day trial with no program fees and no minimum commitment, so there's nothing to underwrite before you start.",
  },
];

const COMPARISON = [
  {
    label: "The relationship",
    typical: "A transactional reseller arrangement",
    founding: "A strategic co-creation partnership",
  },
  {
    label: "The investment",
    typical: "Annual fees, certification costs, and revenue minimums",
    founding: "Zero program fees, zero downside risk",
  },
  {
    label: "Your influence",
    typical: "Reserved for a handful of top-tier accounts",
    founding: "A direct hand in shaping the product roadmap",
  },
  {
    label: "Your access",
    typical: "A generic ticketing and support portal",
    founding: "A direct line into the Dayos leadership team",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Apply",
    detail: "Put your firm forward for a small, founding cohort capped at three to five service leaders.",
  },
  {
    n: "02",
    title: "Launch a pilot",
    detail: "Pick a handful of strategic accounts and run a fully supported 90-day pilot alongside our team.",
  },
  {
    n: "03",
    title: "Prove the value",
    detail: "Show measurable ROI, automation gains, and new insight, backed by real client outcomes.",
  },
  {
    n: "04",
    title: "Scale it",
    detail: "Turn the pilot into a standing, recurring-revenue practice and expand the AI service line further.",
  },
];

const FAQ = [
  {
    q: "Whose brand is on it?",
    a: "Your brand leads. The platform ships co-branded, presented to clients as \"Powered by Dayos\" underneath your firm's name.",
  },
  {
    q: "What's included in the pilot?",
    a: "Full platform access, hands-on setup support, and a ready-made sales and marketing toolkit to bring to clients.",
  },
  {
    q: "How much time does this take from my team?",
    a: "Very little. Dayos carries the heavy lifting on implementation so your consultants stay focused on client delivery.",
  },
  {
    q: "How does compensation work?",
    a: "A blended model: recurring platform margins layered with revenue from the services you deliver on top.",
  },
];

export const PartnershipView: React.FC<PartnershipViewProps> = ({ onOpenDemo }) => {
  return (
    <div>
      {/* Hero */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal>
            <span className="mint-tag mb-6">FOUNDING PARTNER PROGRAM</span>
            <h1 className="type-h1 max-w-5xl">
              Your AI advantage in the enterprise market.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="type-body-headline text-[#444444] max-w-2xl mt-8">
              The enterprise AI market is here. Dayos brings the platform, you
              bring the expertise, and together we rewrite what services look
              like across the Oracle, SAP, and Workday ecosystems.
            </p>
          </Reveal>
          <Reveal delay={0.25} className="mt-10 flex flex-wrap gap-3">
            {ECOSYSTEMS.map((eco) => (
              <span
                key={eco}
                className="font-mono-tag bg-[#ffffff] text-[#000000] px-4 py-2 rounded-full border border-[#c6c6c6]/60"
              >
                {eco}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* A Partnership Built for Results */}
      <section className="w-full bg-[#000000] text-[#ffffff]">
        <div className="site-grid section-block">
          <Reveal className="mb-12">
            <span className="font-mono-tag text-[#979797] block mb-4">
              A PARTNERSHIP BUILT FOR RESULTS
            </span>
            <h2 className="type-h2 max-w-3xl">
              We're inviting a small number of select service leaders to
              deliver Hero under their own name.
            </h2>
            <p className="type-body-large text-[#979797] max-w-2xl mt-6">
              No need to build the underlying agent platform or carry its
              complexity yourself. Deploy Hero, an enterprise-grade AI, wrapped
              in the brand your clients already trust.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {BENEFITS.map((b, idx) => (
              <Reveal key={b.label} delay={idx * 0.08}>
                <div className="bg-[#2f2f2f]/40 border border-[#c6c6c6]/20 rounded-[24px] p-6 h-full">
                  <span className="font-neo font-bold text-4xl sm:text-5xl text-[#d1ffca] block mb-3">
                    {b.stat}
                  </span>
                  <h3 className="type-body-headline mb-2">{b.label}</h3>
                  <p className="type-body-medium text-[#979797]">{b.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Partner Advantage */}
      <section className="w-full bg-[#d1ffca] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal>
            <span className="font-mono-tag text-[#000000]/60 block mb-4">
              THE FOUNDING PARTNER ADVANTAGE
            </span>
            <p className="type-quote max-w-4xl">
              Founding partners aren't resellers. They sit at the table as
              strategic advisors, helping shape where the product goes next
              instead of just moving units.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Comparison table */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal className="mb-12">
            <span className="font-mono-tag text-[#979797] block mb-4">
              HOW THIS IS DIFFERENT
            </span>
            <h2 className="type-h2 max-w-3xl">
              Typical partner programs vs. the Dayos founding partnership.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-[#ffffff] rounded-[24px] border border-[#c6c6c6]/60 overflow-x-auto">
              <div className="min-w-[640px] grid grid-cols-3 border-b border-[#c6c6c6]/50">
                <div className="p-5 sm:p-6 font-mono-tag text-[#979797]">CATEGORY</div>
                <div className="p-5 sm:p-6 font-mono-tag text-[#979797] border-l border-[#c6c6c6]/50">
                  TYPICAL PARTNER PROGRAMS
                </div>
                <div className="p-5 sm:p-6 font-mono-tag text-[#000000] border-l border-[#c6c6c6]/50 bg-[#d1ffca]/40">
                  DAYOS FOUNDING PARTNER
                </div>
              </div>
              {COMPARISON.map((row) => (
                <div
                  key={row.label}
                  className="min-w-[640px] grid grid-cols-3 border-b border-[#c6c6c6]/40 last:border-b-0"
                >
                  <div className="p-5 sm:p-6 type-body-medium font-medium">{row.label}</div>
                  <div className="p-5 sm:p-6 border-l border-[#c6c6c6]/40 flex items-start gap-2">
                    <X className="w-4 h-4 text-[#979797] mt-1 shrink-0" />
                    <span className="type-body-medium text-[#444444]">{row.typical}</span>
                  </div>
                  <div className="p-5 sm:p-6 border-l border-[#c6c6c6]/40 bg-[#d1ffca]/10 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#000000] mt-1 shrink-0" />
                    <span className="type-body-medium font-medium">{row.founding}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="w-full bg-[#000000] text-[#ffffff]">
        <div className="site-grid section-block">
          <Reveal className="mb-12">
            <span className="font-mono-tag text-[#979797] block mb-4">HOW IT WORKS</span>
            <h2 className="type-h2 max-w-3xl">From application to a scaled AI practice.</h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            {STEPS.map((step, idx) => (
              <Reveal key={step.n} delay={idx * 0.08}>
                <span className="font-mono-tag text-[#d1ffca] block mb-3">{step.n}</span>
                <h3 className="type-h4 mb-3">{step.title}</h3>
                <p className="type-body-medium text-[#979797]">{step.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal className="mb-10">
            <span className="font-mono-tag text-[#979797] block mb-4">GOOD TO KNOW</span>
            <h2 className="type-h2 max-w-3xl">Common questions from founding partners.</h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FAQ.map((item, idx) => (
              <Reveal key={item.q} delay={idx * 0.06}>
                <div className="bg-[#ffffff] rounded-[24px] p-6 sm:p-8 border border-[#c6c6c6]/60 h-full">
                  <h3 className="type-body-headline mb-3">{item.q}</h3>
                  <p className="type-body-medium text-[#444444]">{item.a}</p>
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
              Become a founding
              <br />
              partner.
            </h3>
            <HoverLoopButton
              as="span"
              className="bg-[#ffffff] text-[#000000] px-5 py-3 rounded-lg font-neo font-medium text-sm shrink-0"
            >
              <span>Schedule a Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </HoverLoopButton>
          </button>
        </div>
      </section>
    </div>
  );
};
