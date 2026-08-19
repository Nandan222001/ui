import React from "react";
import { Reveal } from "./Reveal";

const COLUMNS = [
  {
    title: "IDEA.",
    description:
      "Every project starts as a concept — a student's final-year proposal, a founder's product vision, a process a business needs rebuilt. The idea is never the hard part.",
  },
  {
    title: "GAP.",
    description:
      "Turning that idea into working software takes engineers who understand the requirements and the technology — original code, not recycled templates, and AI integrated properly, not bolted on.",
  },
  {
    title: "CLOSED.",
    description:
      "NMT Solutions closes the gap with 100+ engineers, 10+ years of combined experience, and AI at the center of how we build — from chatbots to full platforms, on time and on budget.",
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
