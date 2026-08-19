import React from "react";
import { Reveal } from "./Reveal";

export const RevolutionStatement: React.FC = () => {
  return (
    <section className="w-full bg-[#e5e5e5] text-[#000000]">
      <div className="site-grid section-block grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
        <Reveal className="lg:col-span-2">
          <h2 className="type-h2">
            We're redefining how great software gets built.
          </h2>
        </Reveal>
        <p className="type-body-large text-[#444444]">
          You don't need a resold template dressed up as original work. You
          don't need vendor AI bolted onto a system it was never built for.
          You don't need a shop that quotes one price and delivers another.
          You need engineers who write 100% original software, integrate real
          LLMs the right way, and price the work transparently from day one.
        </p>
      </div>
    </section>
  );
};
