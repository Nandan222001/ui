import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "./home/Reveal";

interface SupportViewProps {
  onOpenDemo: () => void;
}

const FAQS = [
  {
    q: "What kind of support do I get after my project is delivered?",
    a: "Every project ships with a post-launch support window to fix bugs and answer questions about what we built. If you need something beyond that, we offer ongoing support and maintenance arrangements scoped to your project.",
  },
  {
    q: "What if I'm not happy with a deliverable?",
    a: "Tell us specifically what isn't meeting the brief and we'll work through it with you. We build to the requirements agreed at scoping, and revisions within that scope are part of the process, not an extra ask.",
  },
  {
    q: "Do you offer ongoing support contracts?",
    a: "Yes. For clients who want continuous updates, feature additions, or a dedicated point of contact beyond initial delivery, we offer ongoing IT and AI support arrangements — from occasional maintenance to a standing partnership.",
  },
  {
    q: "How do I get a quote for a project?",
    a: "Email us with a short description of what you're trying to build, whether it's a business system, a mobile app, or an academic project. We'll follow up to scope requirements and send back transparent pricing.",
  },
  {
    q: "I'm a student — can I get help after my project is delivered?",
    a: "Yes. Academic and final-year project clients can reach out with questions about their delivered work, whether that's understanding the code, preparing for a viva, or requesting a small adjustment.",
  },
  {
    q: "What should I expect in terms of timeline and communication?",
    a: "We agree on a timeline and communication cadence before work starts, so you always know what's next. For most projects that means regular check-ins as milestones are reached, not silence until delivery day.",
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
              Common questions about working with NMT Solutions.
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
                  href="mailto:hr@nmtsolution.com"
                  className="inline-flex items-center gap-2 font-neo font-medium text-base underline underline-offset-4"
                >
                  <Mail className="w-4 h-4" />
                  hr@nmtsolution.com
                </a>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <span className="font-mono-tag text-[#979797] block mb-4">
                LET'S TALK
              </span>
              <div className="bg-[#ffffff] rounded-[24px] p-6 sm:p-8 border border-[#c6c6c6]/60 h-full">
                <p className="type-body-large text-[#444444] mb-6">
                  Prefer to talk through your project before writing an
                  email? Book a quick call and we'll walk through your
                  requirements together.
                </p>
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 font-neo font-medium text-base underline underline-offset-4 cursor-pointer"
                >
                  Schedule a call
                  <ArrowUpRight className="w-4 h-4" />
                </button>
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
              Get a Free Quote
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};
