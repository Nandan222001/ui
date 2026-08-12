import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./home/Reveal";

const RESOURCE_LINKS = [
  {
    label: "Use Case Library",
    to: "/use-cases",
    description: "Browse the kinds of projects we build, from AI chatbots to academic final-year builds.",
  },
  {
    label: "Case Studies",
    to: "/case-studies",
    description: "See how student and business clients have worked with NMT Solutions, project by project.",
  },
  {
    label: "Blog",
    to: "/blog",
    description: "Perspective from our team on AI integration, custom software, and building for real requirements.",
  },
  {
    label: "News",
    to: "/news",
    description: "Announcements and milestones from NMT Solutions as they happen.",
  },
  {
    label: "Partnership Program",
    to: "/partnership",
    description: "How agencies, consultancies, and institutions collaborate with NMT Solutions on client work.",
  },
  {
    label: "Milestones",
    to: "/releases",
    description: "A running log of what we've shipped and improved across our services.",
  },
];

export const ResourcesView: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal>
            <span className="mint-tag mb-6">RESOURCES</span>
            <h1 className="type-h1 max-w-4xl">
              Everything you need to see how NMT Solutions works.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="type-body-headline text-[#444444] max-w-2xl mt-8">
              Use cases, client stories, updates, and the partners we
              collaborate with, all in one place.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Link grid */}
      <section className="w-full bg-[#ffffff] text-[#000000]">
        <div className="site-grid section-block">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCE_LINKS.map((item, idx) => (
              <Reveal key={item.to} delay={idx * 0.06}>
                <Link
                  to={item.to}
                  className="group flex flex-col justify-between h-full bg-[#f3f3f3] rounded-[24px] p-8 border border-[#c6c6c6]/40 hover:bg-[#000000] hover:text-[#ffffff] transition-colors"
                >
                  <div>
                    <h3 className="type-h4 mb-3">{item.label}</h3>
                    <p className="type-body-medium text-[#444444] group-hover:text-[#c6c6c6] transition-colors">
                      {item.description}
                    </p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 font-neo text-sm font-medium">
                    Explore
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
