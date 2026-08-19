import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { HoverLoopButton } from "./HoverLoopButton";

interface IntroducingHeroProps {
  onOpenDemo: () => void;
}

export const IntroducingHero: React.FC<IntroducingHeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="w-full bg-[#000000] text-[#ffffff]">
      <div className="site-grid section-block grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Real site: text column is the narrower 5/12, image takes the
            remaining 7/12 (and its own media even bleeds slightly past
            that column edge) */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <img
            src="/images/image.webp"
            alt="AI platform illustration"
            className="w-full lg:w-[110%] object-contain"
          />
        </div>

        <div className="lg:col-span-5 order-2 lg:order-1">
          <span className="font-mono-tag text-[#979797] block mb-6">AI &amp; LLM INTEGRATION</span>

          <Reveal>
            <h2 className="type-h2 mb-8">
              We build the AI, not just talk about it.
            </h2>
          </Reveal>

          <p className="type-body-large text-[#ffffff] mb-6">
            Our team designs and ships chatbots, virtual assistants, and
            automation agents powered by OpenAI, Anthropic, and Google's
            models — wired into your product with retrieval-augmented
            pipelines, not a generic widget bolted onto your site.
          </p>

          <p className="type-body-large text-[#ffffff] mb-10">
            Every engagement pairs AI engineering with full-stack
            development, so what you get is production-ready, tested, and
            maintained — whether it's a customer-facing assistant, an
            internal automation agent, or a custom LLM integration built for
            your exact workflow.
          </p>

          <HoverLoopButton
            onClick={onOpenDemo}
            className="bg-[#ffffff] text-[#000000] px-6 py-4 rounded-lg font-neo font-medium text-base"
          >
            <span>Get a Free Quote</span>
            <ArrowUpRight className="w-4 h-4" />
          </HoverLoopButton>
        </div>
      </div>
    </section>
  );
};
