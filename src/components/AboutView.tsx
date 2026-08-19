import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./home/Reveal";
import {
  COMPANY_STATS,
  DAYOS_PHILOSOPHY,
  DEPLOYMENT_PROCESS,
  CERTIFICATIONS,
} from "../data/mockData";

interface AboutViewProps {
  onOpenDemo: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenDemo }) => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal>
            <span className="mint-tag mb-6">ABOUT DAYOS</span>
            <h1 className="type-h1 max-w-4xl">
              We build the AI
              <br />
              that does the work.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="type-body-headline text-[#444444] max-w-xl mt-10">
              Dayos was founded on a simple observation: legacy enterprise
              software solves 70% of the work. The other 30% still requires
              systems engineers who take a decade to train. We closed that
              gap with software, not headcount.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full bg-[#000000] text-[#ffffff]">
        <div className="site-grid section-block grid grid-cols-2 lg:grid-cols-4 gap-10">
          {COMPANY_STATS.map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 0.08}>
              <div className="flex items-baseline gap-1">
                <span className="type-h2">{stat.value}</span>
                <span className="type-h4 text-[#d1ffca]">{stat.suffix}</span>
              </div>
              <p className="font-mono-tag text-[#979797] mt-2 max-w-[16ch]">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission / Origin split */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16">
          <Reveal>
            <h2 className="type-h4 mb-4">Our Mission</h2>
            <p className="type-body-large text-[#444444]">
              Give every enterprise team an AI colleague that logs into their
              real systems — Oracle, SAP, Workday, NetSuite — and finishes the
              work end to end, with a human able to step in on anything that
              matters.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="type-h4 mb-4">Our Origin</h2>
            <p className="type-body-large text-[#444444]">
              Two million computer science students graduate every year, and
              AI has collapsed the cost of shipping software. We built Hero
              natively for that era instead of bolting a chatbot onto a
              20-year-old ERP module.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Dayos pillars */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid pb-24">
          <Reveal>
            <span className="mint-tag mb-4">WHY DAYOS</span>
            <h2 className="type-h3 mb-12 max-w-2xl">
              Built different, on purpose.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DAYOS_PHILOSOPHY.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.08}>
                <div className="bg-[#ffffff] rounded-[24px] p-8 border border-[#c6c6c6]/40 h-full">
                  <span className="font-mono-tag text-[#979797] block mb-3">
                    {item.subtitle}
                  </span>
                  <h3 className="font-neo font-bold uppercase tracking-tight text-xl sm:text-2xl text-[#000000] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="type-body-medium text-[#444444]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment process */}
      <section className="w-full bg-[#000000] text-[#ffffff]">
        <div className="site-grid section-block">
          <Reveal>
            <span className="mint-tag mb-4">HOW WE WORK</span>
            <h2 className="type-h3 mb-16 max-w-2xl">
              From discovery to governed autonomy.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {DEPLOYMENT_PROCESS.map((step, idx) => (
              <Reveal key={step.step} delay={idx * 0.08}>
                <span className="font-mono-tag text-[#d1ffca] block mb-4">
                  {step.step}
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

      {/* Certifications strip */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid py-12 flex flex-col sm:flex-row sm:items-center gap-6 border-b border-[#c6c6c6]">
          <span className="font-mono-tag text-[#979797] shrink-0">
            GOVERNANCE &amp; COMPLIANCE
          </span>
          <div className="flex flex-wrap gap-2">
            {CERTIFICATIONS.map((cert) => (
              <span
                key={cert}
                className="font-mono-tag bg-[#ffffff] text-[#000000] px-3 py-1.5 rounded-full border border-[#c6c6c6]/50"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <div className="bg-[#000000] rounded-[24px] p-8 sm:p-14 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <h3 className="type-h3 text-[#ffffff] max-w-lg">
              Ready to see Hero inside your systems?
            </h3>
            <button
              onClick={onOpenDemo}
              className="bg-[#ffffff] hover:bg-[#e5e5e5] text-[#000000] px-6 py-3.5 rounded-lg font-neo font-medium text-sm flex items-center gap-2 cursor-pointer transition-colors shrink-0 w-fit"
            >
              <span>Schedule a Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
