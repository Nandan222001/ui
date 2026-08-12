import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "./home/Reveal";
import { HoverLoopButton } from "./home/HoverLoopButton";

interface CareersViewProps {
  onOpenDemo: () => void;
}

const VALUES = [
  {
    title: "Optimize for flow, not hours.",
    description:
      "We measure work by the quality of what ships, not by time logged. If an agent can absorb the repetitive half of a job, we'd rather our people spend their hours on the half that actually needs a human.",
  },
  {
    title: "Small teams, real ownership.",
    description:
      "Every hire works close to production, close to customers, and close to the outcome. There's no layer of process between you and the systems Dayos runs inside.",
  },
  {
    title: "Built by people who'd use it.",
    description:
      "We're a team that has sat inside enterprise close cycles and reconciliations ourselves, and built the product we wished existed back then.",
  },
];

const BENEFITS = [
  {
    title: "Compounding AI exposure",
    description:
      "Everyone works directly on production agents deployed inside real enterprise systems, not on internal prototypes shelved after a demo.",
  },
  {
    title: "Profit-sharing",
    description:
      "When our agents save a customer real money, the team behind that work shares in the upside, not just the base salary line.",
  },
  {
    title: "Healthcare, worldwide",
    description:
      "Coverage designed for a distributed team, wherever in the world our people choose to be based.",
  },
  {
    title: "Async by default",
    description:
      "We're spread across time zones on purpose. Meetings are the exception, and documentation is how decisions actually travel.",
  },
];

export const CareersView: React.FC<CareersViewProps> = () => {
  return (
    <div>
      {/* Hero */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal>
            <span className="mint-tag mb-6">CAREERS</span>
            <h1 className="type-h1 max-w-4xl">
              Help us change how good work actually gets done.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="type-body-headline text-[#444444] max-w-2xl mt-8">
              We're a small team building the agents that take over the
              repetitive core of enterprise work, so the people inside those
              companies get their time back for the work only they can do.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="w-full bg-[#000000] text-[#ffffff]">
        <div className="site-grid section-block">
          <Reveal className="mb-12">
            <span className="font-mono-tag text-[#979797] block mb-4">HOW WE WORK</span>
            <h2 className="type-h2 max-w-3xl">
              A few things we hold onto as we grow.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-12">
            {VALUES.map((value, idx) => (
              <Reveal key={value.title} delay={idx * 0.08}>
                <span className="font-mono-tag text-[#d1ffca] block mb-3">
                  0{idx + 1}
                </span>
                <h3 className="type-h4 mb-3">{value.title}</h3>
                <p className="type-body-medium text-[#979797]">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full bg-[#d1ffca] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal className="mb-12">
            <span className="font-mono-tag text-[#000000]/60 block mb-4">WHY JOIN</span>
            <h2 className="type-h2 max-w-3xl">
              We pay in growth, ownership, and coverage that travels with you.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <Reveal key={benefit.title} delay={idx * 0.06}>
                <div className="bg-[#ffffff] rounded-[24px] p-6 sm:p-8 h-full">
                  <h3 className="type-h4 mb-3">{benefit.title}</h3>
                  <p className="type-body-medium text-[#444444]">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal>
            <span className="font-mono-tag text-[#979797] block mb-4">OPEN ROLES</span>
            <div className="bg-[#ffffff] rounded-[24px] p-8 sm:p-12 border border-[#c6c6c6]/50">
              <h3 className="type-h4 mb-4">
                Nothing posted right now.
              </h3>
              <p className="type-body-large text-[#444444] max-w-2xl">
                We don't have any open positions at the moment. We're a
                small team, so we hire in bursts rather than running a
                constant pipeline. Check back later, or send us a note
                below if you think you'd be a strong fit whenever a role
                does open up.
              </p>
              <a
                href="mailto:hello@dayos.com"
                className="inline-flex items-center gap-2 mt-8 font-neo font-medium text-base underline underline-offset-4"
              >
                <Mail className="w-4 h-4" />
                hello@dayos.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="w-full bg-[#e5e5e5] text-[#000000] pt-0">
        <div className="site-grid pb-16 sm:pb-24">
          <div className="w-full bg-[#000000] text-[#ffffff] rounded-[24px] p-8 sm:p-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h3 className="type-h3">
              Curious what
              <br />
              we're building?
            </h3>
            <Link to="/company" className="inline-block shrink-0">
              <HoverLoopButton
                as="span"
                className="bg-[#ffffff] text-[#000000] px-5 py-3 rounded-lg font-neo font-medium text-sm"
              >
                <span>Learn more about Dayos</span>
                <ArrowUpRight className="w-4 h-4" />
              </HoverLoopButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
