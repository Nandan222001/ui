import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./home/Reveal";

const RESOURCE_LINKS = [
  {
    label: "Use Case Library",
    to: "/use-cases",
    description: "Browse the specific workflows Hero automates, department by department.",
  },
  {
    label: "Case Studies",
    to: "/case-studies",
    description: "See how real teams put Hero into production, and what changed for them.",
  },
  {
    label: "Blog",
    to: "/blog",
    description: "Perspective from our team on agentic AI, enterprise systems, and the work of closing the gap.",
  },
  {
    label: "News",
    to: "/news",
    description: "Announcements, coverage, and milestones from Dayos as they happen.",
  },
  {
    label: "Partnership Program",
    to: "/partnership",
    description: "How systems integrators and consultancies build and deploy Hero alongside us.",
  },
  {
    label: "Release Notes",
    to: "/releases",
    description: "The changelog for Hero: what shipped, what improved, and what's next.",
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
              Everything you need to see how Hero runs in production.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="type-body-headline text-[#444444] max-w-2xl mt-8">
              Use cases, customer stories, product updates, and the partners
              helping deploy Hero across the enterprise, all in one place.
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
