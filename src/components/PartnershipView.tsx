import React from "react";
import { ArrowUpRight, CheckCircle2, X } from "lucide-react";
import { Reveal } from "./home/Reveal";
import { HoverLoopButton } from "./home/HoverLoopButton";

interface PartnershipViewProps {
  onOpenDemo: () => void;
}

const FOCUS_AREAS = ["AI & LLM Integration", "Custom Software", "Mobile Apps"];

const BENEFITS = [
  {
    stat: "$0",
    label: "No cost to join",
    detail:
      "There's no signup fee and no minimum volume commitment. You refer work when it makes sense for you, nothing more.",
  },
  {
    stat: "%",
    label: "Referral fee on closed projects",
    detail:
      "Earn a competitive referral fee or revenue share on any project that closes, paid out once the client signs on.",
  },
  {
    stat: "WL",
    label: "White-label delivery available",
    detail:
      "We can deliver quietly in the background under your brand, or as a co-branded team, whichever fits the client.",
  },
  {
    stat: "1:1",
    label: "You stay the main contact",
    detail:
      "Your client relationship stays yours. We work behind the scenes as your delivery partner, not a competitor.",
  },
];

const COMPARISON = [
  {
    label: "Skills gap",
    yourself: "You turn down or scramble to staff work outside your specialty",
    withNmt: "You refer it to NMT and still get the win with your client",
  },
  {
    label: "Hiring cost",
    yourself: "Hire, train, or contract for skills you'll only need occasionally",
    withNmt: "Tap our engineers on demand, with no hiring or overhead",
  },
  {
    label: "Delivery risk",
    yourself: "Learn a new stack under a live client deadline",
    withNmt: "Experienced team delivers work we do every day",
  },
  {
    label: "Speed",
    yourself: "Ramp-up time before work can even start",
    withNmt: "Fast turnaround since it's already our core focus",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Apply",
    detail: "Tell us a little about your agency, consultancy, or freelance practice and the kind of work you typically see.",
  },
  {
    n: "02",
    title: "Refer a project",
    detail: "Send over a client or project, especially anything involving AI/LLM work, that falls outside what you handle in-house.",
  },
  {
    n: "03",
    title: "We deliver",
    detail: "Our team builds it white-labeled under your brand, or co-branded alongside you, your call on how it's presented.",
  },
  {
    n: "04",
    title: "Get paid",
    detail: "Once the project closes, you receive your referral fee or revenue share for the work delivered.",
  },
];

const FAQ = [
  {
    q: "Who owns the client relationship?",
    a: "You do. NMT works as your delivery partner behind the scenes, we don't approach your client directly or try to take over the relationship.",
  },
  {
    q: "How and when do I get paid?",
    a: "You earn a referral fee or revenue share once a referred project closes and is invoiced. We'll agree on the specifics upfront for each engagement.",
  },
  {
    q: "Can I white-label the delivery?",
    a: "Yes. We can deliver entirely under your brand, or as a co-branded team if you'd rather your client know NMT is involved. It's your choice per project.",
  },
  {
    q: "Is there a cost to join?",
    a: "No. There's no signup fee, no minimum commitment, and no obligation to refer any set amount of work. You bring us projects only when it makes sense.",
  },
];

export const PartnershipView: React.FC<PartnershipViewProps> = ({ onOpenDemo }) => {
  return (
    <div>
      {/* Hero */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal>
            <span className="mint-tag mb-6">PARTNER WITH US</span>
            <h1 className="type-h1 max-w-5xl">
              Extend what you can offer your clients.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="type-body-headline text-[#444444] max-w-2xl mt-8">
              Agencies, consultancies, and freelancers refer us the projects
              outside their specialty, especially AI and LLM work, and we
              deliver it under your name or alongside you. You keep the
              client, we handle the build.
            </p>
          </Reveal>
          <Reveal delay={0.25} className="mt-10 flex flex-wrap gap-3">
            {FOCUS_AREAS.map((eco) => (
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

      {/* Benefits */}
      <section className="w-full bg-[#000000] text-[#ffffff]">
        <div className="site-grid section-block">
          <Reveal className="mb-12">
            <span className="font-mono-tag text-[#979797] block mb-4">
              WHY PARTNER WITH NMT
            </span>
            <h2 className="type-h2 max-w-3xl">
              A straightforward referral partnership, built for agencies and
              freelancers.
            </h2>
            <p className="type-body-large text-[#979797] max-w-2xl mt-6">
              No need to hire for skills you only need occasionally. Refer the
              work to NMT, and let a team of 100+ engineers handle delivery
              while you stay the client's main point of contact.
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

      {/* Positioning quote */}
      <section className="w-full bg-[#d1ffca] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal>
            <span className="font-mono-tag text-[#000000]/60 block mb-4">
              WHY THIS WORKS
            </span>
            <p className="type-quote max-w-4xl">
              You don't have to say no to work outside your specialty, and you
              don't have to hire for skills you'll only need occasionally.
              Partnering with NMT lets you extend your service offering on
              demand, while we quietly handle delivery in the background.
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
              Handling it yourself vs. partnering with NMT.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-[#ffffff] rounded-[24px] border border-[#c6c6c6]/60 overflow-x-auto">
              <div className="min-w-[640px] grid grid-cols-3 border-b border-[#c6c6c6]/50">
                <div className="p-5 sm:p-6 font-mono-tag text-[#979797]">CATEGORY</div>
                <div className="p-5 sm:p-6 font-mono-tag text-[#979797] border-l border-[#c6c6c6]/50">
                  HANDLING IT YOURSELF
                </div>
                <div className="p-5 sm:p-6 font-mono-tag text-[#000000] border-l border-[#c6c6c6]/50 bg-[#d1ffca]/40">
                  PARTNERING WITH NMT
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
                    <span className="type-body-medium text-[#444444]">{row.yourself}</span>
                  </div>
                  <div className="p-5 sm:p-6 border-l border-[#c6c6c6]/40 bg-[#d1ffca]/10 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#000000] mt-1 shrink-0" />
                    <span className="type-body-medium font-medium">{row.withNmt}</span>
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
            <h2 className="type-h2 max-w-3xl">From application to a paid referral.</h2>
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
            <h2 className="type-h2 max-w-3xl">Common questions from partners.</h2>
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
              Ready to become
              <br />
              a partner?
            </h3>
            <HoverLoopButton
              as="span"
              className="bg-[#ffffff] text-[#000000] px-5 py-3 rounded-lg font-neo font-medium text-sm shrink-0"
            >
              <span>Apply to Partner</span>
              <ArrowUpRight className="w-4 h-4" />
            </HoverLoopButton>
          </button>
        </div>
      </section>
    </div>
  );
};
