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
              Born From
              <br />
              The AI era.
              <br />
              Not Bolted
              <br />
              Onto It.
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="type-body-headline text-[#000000] max-w-lg mt-10">
              We don't sell managed services to the enterprise. We provide the
              AI that does the work. Production-ready in 2 weeks. A new agent
              every year, lowering your support cost the longer you run Hero.
            </p>
          </Reveal>
        </div>

        {/* Hero video — no card/box on the real site: it's scaled up well
            past its column, bleeds off the right edge of the viewport, and
            fades out via a bottom mask instead of a hard crop */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          <div
            className="w-[115%] sm:w-full lg:absolute lg:w-[68vw] lg:left-[-18vw] lg:top-[calc(50%-100px)] lg:-translate-y-1/2 aspect-square"
            style={{
              maskImage: "linear-gradient(180deg, #000 80%, transparent 93%)",
              WebkitMaskImage: "linear-gradient(180deg, #000 80%, transparent 93%)",
            }}
          >
            <video
              className="w-full h-full object-contain"
              src="/media/1721996743-hero-latest.webm"
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
