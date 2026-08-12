import React from "react";
import { ArrowUpRight } from "lucide-react";

interface IntroducingHeroProps {
  onOpenDemo: () => void;
}

export const IntroducingHero: React.FC<IntroducingHeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="w-full bg-[#e5e5e5] text-[#000000]">
      <div className="site-grid section-block grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <span className="font-mono-tag text-[#000000] block mb-6">INTRODUCING HERO</span>
          <img
            src="/images/image.webp"
            alt="Hero platform"
            className="w-full rounded-[24px] object-cover"
          />
        </div>

        <div className="lg:col-span-7">
          <h2 className="type-h2 mb-8 max-w-3xl">
            Built to do the work, not simply recommend it.
          </h2>

          <p className="type-body-large text-[#444444] mb-6 max-w-2xl">
            Hero deploys AI agents that connect directly to your ERP through
            native APIs, read real data, apply business logic, and execute
            transactions with human approval. It logs in, does the work, and
            validates the output. This is a direct replacement for AMS
            contracts, not a tool layered on top.
          </p>

          <p className="type-body-large text-[#444444] mb-10 max-w-2xl">
            Hero is self-learning. Every ticket, every reconciliation, every
            close pattern trains the platform on your environment. Every
            twelve months, an autonomous agent builds and delivers a net-new
            custom agent targeting your highest-cost manual workflow. Year
            three runs on a fraction of year one's support footprint.
          </p>

          <button
            onClick={onOpenDemo}
            className="bg-[#000000] hover:bg-[#2f2f2f] text-[#ffffff] px-6 py-4 rounded-lg font-neo font-medium text-base flex items-center gap-3 transition-colors cursor-pointer"
          >
            <span>Book an intro</span>
            <ArrowUpRight className="w-4 h-4 text-[#d1ffca]" />
          </button>
        </div>
      </div>
    </section>
  );
};
