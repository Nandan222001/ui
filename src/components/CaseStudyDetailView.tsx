import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { CASE_STUDIES } from "../data/caseStudiesData";
import { NotFoundView } from "./NotFoundView";
import { Reveal } from "./home/Reveal";

interface CaseStudyDetailViewProps {
  onOpenDemo: () => void;
}

const SECTION_BACKGROUNDS: { bg: string; text: string }[] = [
  { bg: "#000000", text: "#ffffff" },
  { bg: "#e5e5e5", text: "#000000" },
];

export const CaseStudyDetailView: React.FC<CaseStudyDetailViewProps> = ({ onOpenDemo }) => {
  const { slug } = useParams<{ slug: string }>();
  const study = CASE_STUDIES.find((s) => s.slug === slug);

  if (!study) return <NotFoundView />;

  return (
    <div>
      {/* Hero */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 font-neo text-sm font-medium text-[#444444] hover:text-[#000000] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              All case studies
            </Link>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="mint-tag">{study.industry}</span>
              <span className="mint-tag">{study.platformType}</span>
            </div>
            <h1 className="type-h1 max-w-4xl">{study.title}</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="type-body-headline text-[#444444] max-w-2xl mt-8">
              {study.description}
            </p>
            <span className="font-mono-tag text-[#979797] block mt-6">{study.date}</span>
          </Reveal>
        </div>
      </section>

      {/* Metric callout */}
      {study.metric && (
        <section className="w-full bg-[#d1ffca] text-[#000000]">
          <div className="site-grid section-block">
            <Reveal>
              <span className="font-mono-tag text-[#000000]/60 block mb-4">RESULT</span>
              <div className="flex items-baseline gap-4">
                <span className="type-h1">{study.metric.value}</span>
                <span className="type-body-headline">{study.metric.label}</span>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Sections, alternating backgrounds */}
      {study.sections.map((section, idx) => {
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

      {/* Closing CTA */}
      <section className="w-full bg-[#e5e5e5] text-[#000000] pt-0">
        <div className="site-grid pb-16 sm:pb-24">
          <button
            onClick={onOpenDemo}
            className="w-full text-left bg-[#000000] text-[#ffffff] rounded-[24px] p-8 sm:p-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 hover:bg-[#2f2f2f] transition-colors cursor-pointer"
          >
            <h3 className="type-h3">
              See what Hero
              <br />
              could do for you.
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
