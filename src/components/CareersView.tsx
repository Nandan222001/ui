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
    title: "Original work, no shortcuts.",
    description:
      "Every project ships as custom, original work built for that client's requirement, whether it's a production system or a student's final-year project. Recycled templates aren't part of how we operate.",
  },
  {
    title: "Business and academic, both real work.",
    description:
      "We take student and academic projects as seriously as business engagements. Different audience, same bar for craftsmanship and originality.",
  },
  {
    title: "Hands-on, not just advisory.",
    description:
      "We build the thing, not just a slide deck about the thing. Engineers here write code, ship features, and stay close to what actually goes live.",
  },
];

const BENEFITS = [
  {
    title: "Hands-on AI project exposure",
    description:
      "Work directly on chatbots, virtual assistants, and LLM integrations built with OpenAI, Anthropic, and Google's models, deployed to real clients.",
  },
  {
    title: "Fast-growing specialty tracks",
    description:
      "AI and LLM work is the newest and fastest-growing part of what we do, which means real room to grow into it as the team scales past 100+ engineers.",
  },
  {
    title: "Genuinely varied project work",
    description:
      "One week it's a business automation platform, the next a mobile app or an academic ML project. The range stays wide on purpose.",
  },
  {
    title: "Support to keep growing",
    description:
      "Competitive benefits and real support for professional development, so engineers keep building skills alongside the projects.",
  },
];

export const CareersView: React.FC<CareersViewProps> = () => {
  return (
    <div>
      {/* Hero */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="mint-tag mb-6">CAREERS</span>
              <h1 className="type-h1">
                Join a growing team building real AI, software, and IT projects.
              </h1>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <p className="type-body-headline text-[#444444] lg:mt-4">
                NMT Solutions is a 100+ engineer team delivering AI integrations,
                custom software, academic projects, business IT solutions, and
                mobile apps for clients who expect original work, not templates.
              </p>
            </Reveal>
          </div>
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
              We pay in real AI exposure, growth, and genuinely varied work.
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
                We don't have any open positions listed at the moment. We hire
                as the team's project load grows rather than running a
                constant pipeline. Check back later, or reach out directly if
                you think you'd be a strong fit whenever a role does open up.
              </p>
              <a
                href="mailto:info@nmtsolution.com"
                className="inline-flex items-center gap-2 mt-8 font-neo font-medium text-base underline underline-offset-4"
              >
                <Mail className="w-4 h-4" />
                info@nmtsolution.com
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
                <span>Learn more about NMT Solutions</span>
                <ArrowUpRight className="w-4 h-4" />
              </HoverLoopButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
