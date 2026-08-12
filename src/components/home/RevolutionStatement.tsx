import React from "react";
import { Reveal } from "./Reveal";

export const RevolutionStatement: React.FC = () => {
  return (
    <section className="w-full bg-[#e5e5e5] text-[#000000]">
      <div className="site-grid section-block grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
        <Reveal className="lg:col-span-2">
          <h2 className="type-h2">
            We're revolutionizing the way good work gets done.
          </h2>
        </Reveal>
        <p className="type-body-large text-[#444444]">
          You don't need to replace your ERP. You don't need vendor AI that
          only works inside one system. You don't need another consulting
          firm billing you $2,000 per ticket for the same work, year after
          year. You need AI that operates across all of them and does the
          work.
        </p>
      </div>
    </section>
  );
};
