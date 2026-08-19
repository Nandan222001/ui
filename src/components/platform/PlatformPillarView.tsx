import React from "react";
import { useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PLATFORM_PILLARS } from "../../data/platformData";
import { NotFoundView } from "../NotFoundView";
import { Reveal } from "../home/Reveal";

interface PlatformPillarViewProps {
  onOpenDemo: () => void;
}

const SECTION_BACKGROUNDS: Array<{ bg: string; text: string; muted: string }> = [
  { bg: "#000000", text: "#ffffff", muted: "#979797" },
  { bg: "#e5e5e5", text: "#000000", muted: "#444444" },
  { bg: "#d1ffca", text: "#000000", muted: "#444444" },
];

export const PlatformPillarView: React.FC<PlatformPillarViewProps> = ({ onOpenDemo }) => {
  const { slug } = useParams<{ slug: string }>();
  const pillar = PLATFORM_PILLARS.find((p) => p.slug === slug);
  if (!pillar) return <NotFoundView />;

  return (
    <div>
      {/* Hero */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal>
            <span className="mint-tag mb-6">{pillar.tagline}</span>
            <h1 className="type-h1 max-w-4xl">{pillar.name}</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="type-body-headline text-[#444444] max-w-2xl mt-8">
              {pillar.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sections */}
      {pillar.sections.map((section, idx) => {
        const palette = SECTION_BACKGROUNDS[idx % SECTION_BACKGROUNDS.length];
        return (
          <section
            key={section.heading}
            className="w-full"
            style={{ backgroundColor: palette.bg, color: palette.text }}
          >
            <div className="site-grid section-block">
              <Reveal>
                <span
                  className="font-mono-tag block mb-4"
                  style={{ color: palette.muted }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h2 className="type-h2 max-w-3xl mb-6">{section.heading}</h2>
                <p className="type-body-large max-w-2xl" style={{ color: palette.muted }}>
                  {section.body}
                </p>
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* Stats */}
      {pillar.stats && pillar.stats.length > 0 && (
        <section className="w-full bg-[#000000] text-[#ffffff]">
          <div className="site-grid section-block">
            <Reveal className="mb-12">
              <span className="font-mono-tag text-[#979797] block mb-4">BY THE NUMBERS</span>
              <h2 className="type-h2 max-w-3xl">What {pillar.name} moves for teams like yours.</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillar.stats.map((stat, idx) => (
                <Reveal key={stat.label} delay={idx * 0.08}>
                  <div className="bg-[#2f2f2f] rounded-[24px] p-6 h-full border border-[#c6c6c6]/40">
                    <span className="font-mono-tag text-[#979797] block mb-2">
                      {stat.label}
                    </span>
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
        <div className="site-grid pb-16 sm:pb-24 pt-16 sm:pt-24">
          <button
            onClick={onOpenDemo}
            className="w-full text-left bg-[#000000] text-[#ffffff] rounded-[24px] p-8 sm:p-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 hover:bg-[#2f2f2f] transition-colors cursor-pointer"
          >
            <h3 className="type-h3">
              See {pillar.name}
              <br />
              on your data.
            </h3>
            <span className="inline-flex items-center gap-2 bg-[#ffffff] text-[#000000] px-5 py-3 rounded-lg font-neo font-medium text-sm shrink-0">
              Get a Free Quote
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};
