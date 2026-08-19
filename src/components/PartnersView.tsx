import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./home/Reveal";

interface PartnersViewProps {
  onOpenDemo: () => void;
}

const AI_PLATFORMS = [
  {
    name: "OpenAI",
    detail:
      "GPT models power most of our conversational chatbot and virtual assistant builds.",
  },
  {
    name: "Anthropic",
    detail:
      "Claude is our default choice for tasks that need careful, nuanced reasoning and long-context work.",
  },
  {
    name: "Google",
    detail:
      "Gemini covers our multimodal features and cost-sensitive, high-volume integrations.",
  },
];

const TOOLS_WE_BUILD_WITH = [
  "LangChain",
  "React",
  "Node.js",
  "AWS",
  "PostgreSQL",
  "Slack",
];

export const PartnersView: React.FC<PartnersViewProps> = ({ onOpenDemo }) => {
  return (
    <div>
      {/* Hero */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal>
            <span className="mint-tag mb-6">TECHNOLOGIES WE USE</span>
            <h1 className="type-h1 max-w-4xl">
              The AI models, frameworks, and tools behind everything we build.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="type-body-headline text-[#444444] max-w-2xl mt-8">
              NMT Solutions builds on the leading LLM providers and a modern,
              proven engineering stack, so every chatbot, automation, and
              product we ship is fast, reliable, and easy to maintain.
            </p>
          </Reveal>
        </div>
      </section>

      {/* AI / LLM platforms */}
      <section className="w-full bg-[#000000] text-[#ffffff]">
        <div className="site-grid section-block">
          <Reveal className="mb-12">
            <span className="font-mono-tag text-[#979797] block mb-4">
              AI &amp; LLM PLATFORMS
            </span>
            <h2 className="type-h2 max-w-3xl">
              The model providers we integrate into our AI work.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {AI_PLATFORMS.map((platform, idx) => (
              <Reveal key={platform.name} delay={idx * 0.08}>
                <div className="bg-[#2f2f2f] rounded-[24px] p-6 sm:p-8 h-full">
                  <span className="font-mono-tag text-[#d1ffca] block mb-3">
                    0{idx + 1}
                  </span>
                  <h3 className="type-h4 mb-3">{platform.name}</h3>
                  <p className="type-body-medium text-[#979797]">
                    {platform.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks & infra */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal className="mb-12">
            <span className="font-mono-tag text-[#979797] block mb-4">
              FRAMEWORKS &amp; INFRASTRUCTURE
            </span>
            <h2 className="type-h2 max-w-3xl">
              Plus the frameworks and infrastructure we build with.
            </h2>
            <p className="type-body-large text-[#444444] max-w-2xl mt-4">
              Beyond the AI layer, our engineers rely on a battle-tested set of
              frameworks and infrastructure to ship custom software, mobile
              apps, and business systems.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {TOOLS_WE_BUILD_WITH.map((name) => (
              <div
                key={name}
                className="aspect-[302/140] rounded-[24px] bg-[#000000] flex items-center justify-center p-6"
              >
                <span className="type-h4 text-[#ffffff] text-center">
                  {name}
                </span>
              </div>
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
              Want this stack
              <br />
              working for you?
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
