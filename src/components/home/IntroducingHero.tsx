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
            alt="Hero platform"
            className="w-full lg:w-[110%] object-contain"
          />
        </div>

        <div className="lg:col-span-5 order-2 lg:order-1">
          <span className="font-mono-tag text-[#979797] block mb-6">INTRODUCING HERO</span>

          <Reveal>
            <h2 className="type-h2 mb-8">
              Built to do the work, not simply recommend it.
            </h2>
          </Reveal>

          <p className="type-body-large text-[#ffffff] mb-6">
            Hero deploys AI agents that connect directly to your ERP through
            native APIs, read real data, apply business logic, and execute
            transactions with human approval. It logs in, does the work, and
            validates the output. This is a direct replacement for AMS
            contracts, not a tool layered on top.
          </p>

          <p className="type-body-large text-[#ffffff] mb-10">
            Hero is self-learning. Every ticket, every reconciliation, every
            close pattern trains the platform on your environment. Every
            twelve months, an autonomous agent builds and delivers a net-new
            custom agent targeting your highest-cost manual workflow. Year
            three runs on a fraction of year one's support footprint.
          </p>

          <HoverLoopButton
            onClick={onOpenDemo}
            className="bg-[#ffffff] text-[#000000] px-6 py-4 rounded-lg font-neo font-medium text-base"
          >
            <span>Book an intro</span>
            <ArrowUpRight className="w-4 h-4" />
          </HoverLoopButton>
        </div>
      </div>
    </section>
  );
};
