import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "../data/caseStudiesData";
import { Reveal } from "./home/Reveal";

export const CaseStudiesView: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal>
            <span className="mint-tag mb-6">CASE STUDIES</span>
            <h1 className="type-h1 max-w-4xl">Case Studies</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="type-body-headline text-[#444444] max-w-2xl mt-8">
              Our business solutions and services are built to accelerate
              growth by meeting customers exactly where their needs are.
              Here's a look at what that looks like once it's running.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Cards */}
      <section className="w-full bg-[#ffffff] text-[#000000]">
        <div className="site-grid section-block">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((cs, idx) => (
              <Reveal key={cs.slug} delay={idx * 0.08}>
                <Link
                  to={`/case-studies/${cs.slug}`}
                  className="group flex flex-col h-full bg-[#f3f3f3] rounded-[24px] border border-[#c6c6c6]/40 overflow-hidden hover:border-[#000000]/40 transition-colors"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="font-mono-tag bg-[#ffffff] text-[#000000] px-3 py-1 rounded-full border border-[#c6c6c6]/50">
                        {cs.industry}
                      </span>
                      <span className="font-mono-tag bg-[#ffffff] text-[#000000] px-3 py-1 rounded-full border border-[#c6c6c6]/50">
                        {cs.platformType}
                      </span>
                    </div>
                    <h2 className="type-h4 mb-3 flex-1">{cs.title}</h2>
                    {cs.metric && (
                      <div className="mb-4">
                        <span className="font-neo font-bold text-2xl text-[#000000]">
                          {cs.metric.value}
                        </span>
                        <span className="font-mono-tag text-[#979797] block">
                          {cs.metric.label}
                        </span>
                      </div>
                    )}
                    <span className="inline-flex items-center gap-2 font-neo font-medium text-sm text-[#000000] mt-auto">
                      Read the case study
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
