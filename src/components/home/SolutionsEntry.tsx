import React from "react";
import { Reveal } from "./Reveal";

const SOLUTIONS = [
  {
    name: "Answers",
    description:
      "Agents that provide real-time, analyst-level insights across your critical business data without waiting for reports or manual analysis.",
    video: "/media/ai_solutions-loop.webm",
  },
  {
    name: "Actions",
    description:
      "AI agents that take action inside your ERP. Configuration changes, journal entries, procurement matching, and month-end close. Hero doesn't recommend what to do. It does it.",
    video: "/media/x_as_a_service-loop.webm",
  },
  {
    name: "Experts",
    description:
      "AI handles the repetitive work. We route the rest to the best engineers globally. Human-assisted tickets are billed based on complexity on a sliding scale. Replace or extend your current AMS provider.",
    video: "/media/professional_services-loop.webm",
  },
];

export const SolutionsEntry: React.FC = () => {
  return (
    <section className="w-full bg-[#000000] text-[#ffffff]">
      <div className="site-grid section-block">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <Reveal className="lg:col-span-8">
            <h2 className="type-quote">
              Supercharge your ERP and HCM with Agentic AI
            </h2>
          </Reveal>
          <p className="lg:col-span-4 type-body-large text-[#979797]">
            Hero executes real work inside your ERP. Multiple entry points.
            Same outcome: the work gets done.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 lg:gap-24">
          {SOLUTIONS.map((sol) => (
            <div key={sol.name} className="group cursor-pointer">
              {/* Real site: media-wrap has overflow:visible — the clip is
                  shifted -20% and spills past its own square, not clipped */}
              <div className="w-full aspect-square overflow-visible mb-6">
                <video
                  className="w-full h-full object-contain -translate-x-[20%] transition-transform duration-300 ease-in-out group-hover:-translate-x-[20%] group-hover:scale-125"
                  src={sol.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <h3 className="type-h3 mb-3">{sol.name}</h3>
              <p className="type-body-medium text-[#979797]">
                {sol.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
