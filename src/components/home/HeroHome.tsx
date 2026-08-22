import React from "react";
import { Reveal } from "./Reveal";

export const HeroHome: React.FC = () => {
  return (
    <section className="w-full bg-[#e5e5e5] text-[#000000] relative overflow-hidden">
      <div className="site-grid section-block grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Headline + supporting copy */}
        <div className="lg:col-span-7">
          <Reveal>
            <h1 className="type-h1 text-[#000000]">
              Ideas In.
              <br />
              Software
              <br />
              Out.
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="type-body-headline text-[#000000] max-w-lg mt-10">
              NMT Solutions is an AI-first software studio that turns ideas
              into digital reality. We build LLM-powered chatbots, automation
              agents, and custom software with AI at the core from day one,
              not stapled on at the end.
            </p>
          </Reveal>
        </div>

        {/* Hero video — the AI-solutions loop asset, an abstract 3D
            still-life with no third-party branding baked in */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          <div
            className="w-[85%] sm:w-[70%] lg:w-full max-w-md aspect-square"
            style={{
              maskImage: "linear-gradient(180deg, #000 85%, transparent 97%)",
              WebkitMaskImage: "linear-gradient(180deg, #000 85%, transparent 97%)",
            }}
          >
            <video
              className="w-full h-full object-contain"
              src="/media/ai_solutions-loop.webm"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};
