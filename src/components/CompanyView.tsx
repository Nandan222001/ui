import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./home/Reveal";
import { HoverLoopButton } from "./home/HoverLoopButton";

interface CompanyViewProps {
  onOpenDemo: () => void;
}

const AXIOMS = [
  {
    title: "Original work, every time.",
    description:
      "No reused templates, no recycled boilerplate passed off as new. Every project, whether it's a client product or a final-year submission, is built from the requirement up, because originality isn't optional for either kind of client.",
  },
  {
    title: "AI is core, not bolted on.",
    description:
      "Chatbots, virtual assistants, and LLM-powered features aren't a separate offering we sell alongside the real work. They're built into how we approach almost every engagement now, from OpenAI, Anthropic, and Google models to the RAG pipelines and automation agents around them.",
  },
  {
    title: "Delivery dates and prices are commitments.",
    description:
      "Timelines slip and budgets creep when scope and pricing were never pinned down honestly. We'd rather be precise upfront than apologetic later.",
  },
  {
    title: "Breadth lives in-house.",
    description:
      "A team of 100+ engineers means we don't outsource pieces of a project to whoever's available. Web, mobile, AI, and infrastructure work sit under one roof, with 10+ years of combined experience behind the decisions.",
  },
  {
    title: "Support doesn't stop at handoff.",
    description:
      "Larger engagements need more than code. We stay involved through planning, investment strategy, and risk management guidance, not just the sprint that ships the feature.",
  },
];

const STATS = [
  { value: "100+", label: "Software engineers on the team" },
  { value: "10+", label: "Years of combined engineering experience" },
  { value: "100%", label: "Custom, original project work" },
  { value: "5", label: "Core service specialties, AI-led" },
];

export const CompanyView: React.FC<CompanyViewProps> = ({ onOpenDemo }) => {
  return (
    <div>
      {/* Hero */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal>
            <span className="mint-tag mb-6">IT SERVICES & AI SOLUTIONS</span>
            <h1 className="type-h1 max-w-4xl">
              Bridging the gap between your idea and its digital reality.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="type-body-headline text-[#444444] max-w-2xl mt-8">
              NMT Solutions builds AI and LLM integrations, custom software,
              academic projects, business IT solutions, and mobile apps, with
              AI as the specialty leading everything else we do.
            </p>
          </Reveal>
        </div>
      </section>

      {/* First Principles */}
      <section className="w-full bg-[#000000] text-[#ffffff]">
        <div className="site-grid section-block">
          <Reveal className="mb-12">
            <span className="font-mono-tag text-[#979797] block mb-4">FIRST PRINCIPLES</span>
            <h2 className="type-h2 max-w-3xl">
              Five ideas everything else at NMT Solutions is built on.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {AXIOMS.map((axiom, idx) => (
              <Reveal key={axiom.title} delay={idx * 0.08}>
                <span className="font-mono-tag text-[#d1ffca] block mb-3">
                  0{idx + 1}
                </span>
                <h3 className="type-h4 mb-3">{axiom.title}</h3>
                <p className="type-body-medium text-[#979797]">{axiom.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Positioning Quote */}
      <section className="w-full bg-[#d1ffca] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal>
            <p className="type-quote max-w-4xl">
              "We're not a template shop and we're not a staffing pool. We're
              an in-house team of 100+ engineers who'd rather build one
              original, AI-native solution for you than reassemble the same
              generic one for everybody."
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats / highlights */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal className="mb-10">
            <span className="font-mono-tag text-[#979797] block mb-4">BY THE NUMBERS</span>
            <h2 className="type-h2 max-w-3xl">
              What working with us actually looks like.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 0.08}>
                <div className="bg-[#ffffff] rounded-[24px] p-6 sm:p-8 border border-[#c6c6c6]/60 h-full">
                  <p className="type-h2 mb-2">{stat.value}</p>
                  <p className="type-body-medium text-[#444444]">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Working here */}
      <section className="w-full bg-[#000000] text-[#ffffff]">
        <div className="site-grid section-block">
          <Reveal className="mb-12">
            <span className="font-mono-tag text-[#979797] block mb-4">WORKING AT NMT SOLUTIONS</span>
            <h2 className="type-h2 max-w-3xl">
              We pay in real AI exposure, growth, and genuinely varied work.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <Reveal>
              <h3 className="type-h4 mb-3">Hands-on AI project exposure</h3>
              <p className="type-body-medium text-[#979797]">
                Engineers work directly on live chatbots, LLM integrations,
                and automation agents shipped to real clients, not internal
                experiments that never leave the lab.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 className="type-h4 mb-3">Room to grow fast</h3>
              <p className="type-body-medium text-[#979797]">
                As a growing 100+ person team, there's real headroom to move
                into new specialties, especially as AI and LLM work expands
                across every service line.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <h3 className="type-h4 mb-3">Work that never gets repetitive</h3>
              <p className="type-body-medium text-[#979797]">
                One sprint might be a business automation platform, the next
                a final-year academic project or a mobile app, so the variety
                stays high by design.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="mt-12">
            <Link to="/careers" className="inline-block">
              <HoverLoopButton
                as="span"
                className="bg-[#ffffff] text-[#000000] px-6 py-4 rounded-lg font-neo font-medium text-base"
              >
                <span>Explore open roles</span>
                <ArrowUpRight className="w-4 h-4" />
              </HoverLoopButton>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Mission close */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-8">
            <h2 className="type-h2">
              Just shipping something shouldn't be good enough.
            </h2>
          </Reveal>
          <p className="lg:col-span-4 type-body-large text-[#444444]">
            NMT Solutions builds original software, AI features, and IT
            solutions around what you actually need, delivered on time, priced
            transparently, and supported well past launch.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#e5e5e5] text-[#000000] pt-0">
        <div className="site-grid pb-16 sm:pb-24">
          <button
            onClick={onOpenDemo}
            className="w-full text-left bg-[#000000] text-[#ffffff] rounded-[24px] p-8 sm:p-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 hover:bg-[#2f2f2f] transition-colors cursor-pointer"
          >
            <h3 className="type-h3">
              Have a project
              <br />
              in mind?
            </h3>
            <span className="inline-flex items-center gap-2 bg-[#ffffff] text-[#000000] px-5 py-3 rounded-lg font-neo font-medium text-sm shrink-0">
              Get a Free Quote
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};
