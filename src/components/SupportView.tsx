import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "./home/Reveal";
import { HoverLoopButton } from "./home/HoverLoopButton";

interface SupportViewProps {
  onOpenDemo: () => void;
}

const FAQS = [
  {
    q: "How does ticket routing between Hero and a human actually work?",
    a: "Hero picks up incoming tickets first and resolves what it's confident and authorized to handle end-to-end. Anything outside its guardrails, low confidence, missing approval, or a change it isn't scoped for, gets escalated to a human queue with the full context Hero already gathered attached, so nobody starts from zero.",
  },
  {
    q: "What should I do if an agent's output looks wrong?",
    a: "Flag it from wherever you saw it and stop before approving anything downstream. Every action Hero takes is logged with the reasoning and data behind it, so our team can trace exactly what happened and correct it, rather than guessing.",
  },
  {
    q: "Is there an audit trail for what agents changed in our systems?",
    a: "Yes. Every configuration change, ticket resolution, and data action Hero takes is recorded with a reason and timestamp, so your team always has a governed, reviewable record of what an agent did and why.",
  },
  {
    q: "Can we test an agent before it touches production?",
    a: "That's what the Agent Sandbox is for. It lets you run a sample task against a chosen agent module and see the reasoning and output before anything is wired into a live system.",
  },
  {
    q: "Is there a status page for uptime and incidents?",
    a: "Not a public one yet. If something looks down, email support and we'll get back to you directly with what's happening and an ETA.",
  },
  {
    q: "How do I reach the team directly?",
    a: "Email support@dayos.com for anything account or product related. It's a small team on the other end, not a ticket queue that disappears into a void.",
  },
];

export const SupportView: React.FC<SupportViewProps> = ({ onOpenDemo }) => {
  return (
    <div>
      {/* Hero */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal>
            <span className="mint-tag mb-6">SUPPORT</span>
            <h1 className="type-h1 max-w-4xl">Help when you need it.</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="type-body-headline text-[#444444] max-w-2xl mt-8">
              Answers to the questions we hear most, plus a direct line to
              the team if you need more.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-[#000000] text-[#ffffff]">
        <div className="site-grid section-block">
          <Reveal className="mb-12">
            <span className="font-mono-tag text-[#979797] block mb-4">
              FREQUENTLY ASKED
            </span>
            <h2 className="type-h2 max-w-3xl">
              Common questions about working with Hero.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
            {FAQS.map((faq, idx) => (
              <Reveal key={faq.q} delay={idx * 0.06}>
                <h3 className="type-h4 mb-3">{faq.q}</h3>
                <p className="type-body-medium text-[#979797]">{faq.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="font-mono-tag text-[#979797] block mb-4">
                CONTACT SUPPORT
              </span>
              <div className="bg-[#ffffff] rounded-[24px] p-6 sm:p-8 border border-[#c6c6c6]/60 h-full">
                <p className="type-body-large text-[#444444] mb-6">
                  Email us directly and a real person on our team will
                  respond.
                </p>
                <a
                  href="mailto:support@dayos.com"
                  className="inline-flex items-center gap-2 font-neo font-medium text-base underline underline-offset-4"
                >
                  <Mail className="w-4 h-4" />
                  support@dayos.com
                </a>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <span className="font-mono-tag text-[#979797] block mb-4">
                COMMUNITY
              </span>
              <div className="bg-[#ffffff] rounded-[24px] p-6 sm:p-8 border border-[#c6c6c6]/60 h-full">
                <p className="type-body-large text-[#444444] mb-6">
                  Join our Slack community for support, and to hear how
                  other teams are running Hero day to day.
                </p>
                <Link
                  to="/company"
                  className="inline-flex items-center gap-2 font-neo font-medium text-base underline underline-offset-4"
                >
                  More about Dayos
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
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
              Still have
              <br />
              questions?
            </h3>
            <span className="inline-flex items-center gap-2 bg-[#ffffff] text-[#000000] px-5 py-3 rounded-lg font-neo font-medium text-sm shrink-0">
              Schedule a Demo
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};
