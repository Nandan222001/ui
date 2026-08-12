import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./home/Reveal";
import { RELEASES } from "../data/releasesData";

export const ReleasesView: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal>
            <span className="mint-tag mb-6">MILESTONES</span>
            <h1 className="type-h1 max-w-4xl">
              Where we've been, and where we're headed.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="type-body-headline text-[#444444] max-w-2xl mt-8">
              A running record of how NMT Solutions has grown, service by service.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Release entries */}
      <section className="w-full bg-[#ffffff] text-[#000000]">
        <div className="site-grid section-block">
          <div className="flex flex-col gap-10">
            {RELEASES.map((release, idx) => (
              <Reveal key={release.version} delay={idx * 0.08}>
                <div className="bg-[#f3f3f3] rounded-[24px] border border-[#c6c6c6]/40 p-8 sm:p-12">
                  <span className="font-mono-tag text-[#979797] block mb-4">
                    {release.date}
                  </span>
                  <h2 className="type-h3 mb-6">
                    {release.version} — {release.codename}
                  </h2>
                  <p className="type-body-large text-[#444444] max-w-3xl mb-10">
                    {release.summary}
                  </p>

                  <span className="font-mono-tag text-[#979797] block mb-4">
                    HIGHLIGHTS
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-2">
                    {release.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#000000] shrink-0 mt-0.5" />
                        <span className="type-body-medium text-[#444444]">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {release.knownIssues && release.knownIssues.length > 0 && (
                    <div className="mt-10 pt-8 border-t border-[#c6c6c6]/60">
                      <span className="font-mono-tag text-[#979797] block mb-4">
                        KNOWN ISSUES
                      </span>
                      <ul className="flex flex-col gap-2">
                        {release.knownIssues.map((issue) => (
                          <li key={issue} className="type-body-medium text-[#444444]">
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
