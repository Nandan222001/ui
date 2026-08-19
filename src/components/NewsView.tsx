import React from "react";
import { Mail } from "lucide-react";

export const NewsView: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <span className="mint-tag mb-6">NEWS</span>
          <h1 className="type-h1 max-w-4xl">
            Company news and press coverage.
          </h1>
          <p className="type-body-headline text-[#444444] max-w-2xl mt-8">
            Announcements, milestones, and press mentions from NMT Solutions,
            collected in one place.
          </p>
        </div>
      </section>

      {/* Empty state */}
      <section className="w-full bg-[#e5e5e5] text-[#000000] pt-0">
        <div className="site-grid pb-16 sm:pb-24">
          <span className="font-mono-tag text-[#979797] block mb-4">
            LATEST NEWS
          </span>
          <div className="bg-[#ffffff] rounded-[24px] p-8 sm:p-12 border border-[#c6c6c6]/50">
            <h3 className="type-h4 mb-4">No news posted yet.</h3>
            <p className="type-body-large text-[#444444] max-w-2xl">
              We're a small, heads-down team and haven't published anything
              in this section yet. When there's real news to share, milestones,
              new projects, or press coverage, it'll show up here. In the
              meantime, reach out directly using the contacts below.
            </p>
            <div className="flex flex-col sm:flex-row gap-x-8 gap-y-3 mt-8">
              <a
                href="mailto:hr@nmtsolution.com"
                className="inline-flex items-center gap-2 font-neo font-medium text-base underline underline-offset-4"
              >
                <Mail className="w-4 h-4" />
                hr@nmtsolution.com
                <span className="font-mono-tag text-[#979797] no-underline">
                  general inquiries
                </span>
              </a>
              <a
                href="mailto:hr@nmtsolution.com"
                className="inline-flex items-center gap-2 font-neo font-medium text-base underline underline-offset-4"
              >
                <Mail className="w-4 h-4" />
                hr@nmtsolution.com
                <span className="font-mono-tag text-[#979797] no-underline">
                  media inquiries
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
