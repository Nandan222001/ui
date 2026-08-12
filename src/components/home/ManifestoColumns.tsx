import React from "react";
import { Reveal } from "./Reveal";

const COLUMNS = [
  {
    title: "AI.",
    description:
      "Two million computer science students graduate every year. AI has dramatically lowered the cost and speed of code deployment.",
  },
  {
    title: "GAP.",
    description:
      "Legacy ERP software solves 70%. The other 30% requires systems engineers who take a decade to train. Near-zero are entering the market.",
  },
  {
    title: "CLOSED.",
    description:
      "Hero closes the gap with software, not labor. A new agent every year, against the highest-cost workflow your team still does by hand.",
  },
];

export const ManifestoColumns: React.FC = () => {
  return (
    <section className="w-full bg-[#e5e5e5] text-[#000000]">
      <div className="site-grid section-block grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16">
        {COLUMNS.map((col, idx) => (
          <Reveal key={col.title} delay={idx * 0.1}>
            <h2 className="type-h2 mb-6">{col.title}</h2>
            <p className="type-body-large text-[#444444] max-w-sm">
              {col.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
