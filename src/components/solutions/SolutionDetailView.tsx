import React from "react";
import { useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SOLUTION_DETAILS } from "../../data/solutionsData";
import { NotFoundView } from "../NotFoundView";
import { Reveal } from "../home/Reveal";

interface SolutionDetailViewProps {
  onOpenDemo: () => void;
}

const SECTION_BACKGROUNDS: { bg: string; text: string }[] = [
  { bg: "#000000", text: "#ffffff" },
  { bg: "#e5e5e5", text: "#000000" },
];

export const SolutionDetailView: React.FC<SolutionDetailViewProps> = ({ onOpenDemo }) => {
  const { slug } = useParams<{ slug: string }>();
  const solution = SOLUTION_DETAILS.find((s) => s.slug === slug);

  if (!solution) return <NotFoundView />;

  return (
    <div>
      {/* Hero */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal>
            <span className="mint-tag mb-6">{solution.tagline}</span>
            <h1 className="type-h1 max-w-4xl">{solution.name}</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="type-body-headline text-[#444444] max-w-2xl mt-8">
              {solution.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sections, alternating backgrounds */}
      {solution.sections.map((section, idx) => {
        const { bg, text } = SECTION_BACKGROUNDS[idx % SECTION_BACKGROUNDS.length];
        const muted = bg === "#000000" ? "#979797" : "#444444";
        return (
          <section key={section.heading} className="w-full" style={{ backgroundColor: bg, color: text }}>
            <div className="site-grid section-block">
              <Reveal>
                <span className="font-mono-tag block mb-4" style={{ color: muted }}>
                  0{idx + 1}
                </span>
                <h2 className="type-h2 max-w-3xl mb-6">{section.heading}</h2>
                <p className="type-body-large max-w-2xl" style={{ color: muted }}>
                  {section.body}
                </p>
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* Stats */}
      {solution.stats && solution.stats.length > 0 && (
        <section className="w-full bg-[#d1ffca] text-[#000000]">
          <div className="site-grid section-block">
            <Reveal className="mb-12">
              <span className="font-mono-tag text-[#000000]/60 block mb-4">BY THE NUMBERS</span>
              <h2 className="type-h3 max-w-3xl">
                What {solution.name.toLowerCase()} teams see after deployment.
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {solution.stats.map((stat, idx) => (
                <Reveal key={stat.label} delay={idx * 0.08}>
                  <div className="bg-[#ffffff] rounded-[24px] p-6 border border-[#c6c6c6]/40 h-full">
                    <span className="font-mono-tag text-[#979797] block mb-3">{stat.label}</span>
                    <span className="type-h4">{stat.value}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section className="w-full bg-[#e5e5e5] text-[#000000] pt-0">
        <div className="site-grid pb-16 sm:pb-24">
          <button
            onClick={onOpenDemo}
            className="w-full text-left bg-[#000000] text-[#ffffff] rounded-[24px] p-8 sm:p-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 hover:bg-[#2f2f2f] transition-colors cursor-pointer"
          >
            <h3 className="type-h3">
              See {solution.name}
              <br />
              running on your data.
            </h3>
            <span className="inline-flex items-center gap-2 bg-[#ffffff] text-[#000000] px-5 py-3 rounded-lg font-neo font-medium text-sm shrink-0">
              Schedule a Demo
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};
