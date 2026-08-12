import React from "react";

export const HeroHome: React.FC = () => {
  return (
    <section className="w-full bg-[#e5e5e5] text-[#000000] relative overflow-hidden">
      <div className="site-grid section-block grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Headline + supporting copy */}
        <div className="lg:col-span-7">
          <h1 className="type-h1 text-[#000000]">
            Born From
            <br />
            The AI era.
            <br />
            Not Bolted
            <br />
            Onto It.
          </h1>

          <p className="type-body-headline text-[#000000] max-w-lg mt-10">
            We don't sell managed services to the enterprise. We provide the
            AI that does the work. Production-ready in 2 weeks. A new agent
            every year, lowering your support cost the longer you run Hero.
          </p>
        </div>

        {/* Hero video */}
        <div className="lg:col-span-5 w-full">
          <div className="relative w-full aspect-[4/5] sm:aspect-[1/1] rounded-[32px] overflow-hidden bg-[#000000]">
            <video
              className="absolute inset-0 w-full h-full object-cover"
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
