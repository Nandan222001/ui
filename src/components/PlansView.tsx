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
    name: "Starter Project",
    price: "From $1,500",
    priceNote: "fixed price",
    description:
      "For a single, well-defined deliverable — a chatbot integration, a small business website, or an academic final-year project.",
    features: [
      "One clearly scoped deliverable, fixed price agreed upfront",
      "Typically delivered in a few weeks",
      "Includes a chatbot, AI feature, or LLM integration where relevant",
      "100% original, custom-built work — no templates resold as bespoke",
      "Direct communication with the engineer building your project",
      "Great fit for students and small businesses alike",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "Project-based",
    priceNote: "scoped after a call",
    description:
      "For a full custom software build, a mobile app, or a business automation project — with AI features included where they add value.",
    features: [
      "End-to-end custom software or mobile app development",
      "AI & LLM integration (chatbots, RAG pipelines, automation agents) included where scoped",
      "Business IT consulting and digital transformation support",
      "Typically delivered over 1–3 months, milestone by milestone",
      "Transparent pricing, agreed before work begins",
      "Direct access to the engineering team throughout the build",
    ],
    cta: "Talk to Us",
    popular: true,
  },
  {
    name: "Enterprise / Ongoing Partnership",
    price: "Custom Quote",
    priceNote: "multi-phase or ongoing",
    description:
      "For larger, multi-phase engagements or an ongoing IT and AI partnership with a dedicated team behind it.",
    features: [
      "Dedicated team drawn from our 100+ engineers",
      "Continuous delivery across multiple phases or workstreams",
      "Ongoing AI, automation, and custom software support",
      "Priority access to senior engineers for planning and reviews",
      "Flexible engagement structure — retainer or phased statements of work",
    ],
    cta: "Talk to Us",
  },
];

const SHARED_FEATURES = [
  "Transparent, upfront pricing — no hidden line items",
  "Direct access to the engineers actually building your project",
  "A timely delivery commitment agreed at kickoff",
  "Post-launch support once your project ships",
];

const CYCLE_STEPS = [
  {
    step: "01",
    title: "Discover",
    description:
      "We start with a conversation about what you're trying to build, whether it's a business system, an app, or an academic project with specific requirements.",
  },
  {
    step: "02",
    title: "Scope & Quote",
    description:
      "We turn that conversation into a clear scope and a transparent price or estimate, so there are no surprises once work begins.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Our engineers build your project with regular check-ins, so you always know where things stand and can steer along the way.",
  },
  {
    step: "04",
    title: "Deliver & Support",
    description:
      "We hand off a finished, working product and stay reachable afterward for the support your plan includes.",
  },
];

const FAQS = [
  {
    q: "How is pricing determined?",
    a: "It depends on the scope: a single deliverable like a chatbot integration or a small website is usually fixed-price, while a full custom software build, mobile app, or automation project is scoped and quoted after a short requirements call. Either way, you get a clear price before any work begins.",
  },
  {
    q: "Do AI or LLM features cost extra?",
    a: "AI and LLM integration — chatbots, virtual assistants, RAG pipelines, or automation agents — is one of our core specialties, so it's factored into the project scope rather than tacked on afterward. If you want AI features added mid-project, we'll quote that addition transparently before starting it.",
  },
  {
    q: "What's a typical project timeline?",
    a: "A focused deliverable like a chatbot integration or a small site usually takes a few weeks. Full custom software, mobile apps, and business automation projects typically run 1–3 months depending on scope. Larger, multi-phase or ongoing partnerships are planned around your timeline.",
  },
  {
    q: "How does pricing for academic projects differ from business projects?",
    a: "Academic and final-year projects are priced to reflect their scope and academic requirements, with an emphasis on originality and meeting your specific brief. Business and professional projects are scoped around production readiness, integration needs, and ongoing support, which generally puts them in a different pricing range.",
  },
  {
    q: "What's the payment structure?",
    a: "Smaller, fixed-price projects are typically split into a deposit and a final payment on delivery. Larger projects are broken into milestones, with payment tied to agreed checkpoints throughout the build.",
  },
  {
    q: "What happens after my project is delivered?",
    a: "Every plan includes a post-launch support window to fix issues and answer questions about what was built. If you need ongoing maintenance, feature additions, or ongoing IT/AI support beyond that window, we offer support arrangements that scale with your needs.",
  },
  {
    q: "Can I start small and scale up later?",
    a: "Yes. Many engagements start as a single deliverable and grow into a larger build or an ongoing partnership once the initial scope proves out. We'll always quote the next step transparently rather than assuming a bigger engagement upfront.",
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
            <h1 className="type-h1 max-w-4xl">Transparent pricing, scoped to your project.</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="type-body-headline text-[#444444] max-w-2xl mt-8">
              Whether it's a final-year project, a business website, or a
              full custom software build with AI baked in, you'll know the
              price before we start — and the team behind it throughout.
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
                    <span className="mint-tag mb-4 self-start">MOST POPULAR</span>
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
          <p className="type-body-medium text-[#444444] mt-8 max-w-2xl">
            Figures above are illustrative starting points, not fixed quotes —
            every project gets a specific price after we understand its scope.
          </p>
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

      {/* Project lifecycle */}
      <section className="w-full bg-[#000000] text-[#ffffff]">
        <div className="site-grid section-block">
          <Reveal className="mb-12">
            <span className="font-mono-tag text-[#979797] block mb-4">
              HOW A PROJECT RUNS
            </span>
            <h2 className="type-h2 max-w-3xl">
              Four steps, from idea to delivery.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-6">
            {CYCLE_STEPS.map((step, idx) => (
              <Reveal key={step.step} delay={idx * 0.08}>
                <span className="font-mono-tag text-[#d1ffca] block mb-3">
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
              Ready to scope
              <br />
              your project?
            </h3>
            <HoverLoopButton
              as="span"
              className="bg-[#ffffff] text-[#000000] px-5 py-3 rounded-lg font-neo font-medium text-sm shrink-0"
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </HoverLoopButton>
          </button>
        </div>
      </section>
    </div>
  );
};
