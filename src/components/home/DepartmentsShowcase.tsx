import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const DEPARTMENTS = [
  {
    name: "AI & LLM Integration",
    slug: "ai-llm-integration",
    description:
      "Chatbots, virtual assistants, and custom AI features built on OpenAI, Anthropic, and Google models, with RAG pipelines and automation agents grounded in your own data.",
    image: "/images/image_3.webp",
  },
  {
    name: "Custom Software Development",
    slug: "custom-software-development",
    description:
      "End-to-end software built around how your business actually works, from concept to completion, not forced into a generic off-the-shelf mold.",
    image: "/images/image_2.webp",
  },
  {
    name: "Academic Projects",
    slug: "academic-projects",
    description:
      "Final-year student projects built to your exact brief, with original, custom code you can defend with confidence.",
    image: "/images/image_8.webp",
  },
  {
    name: "Business IT Solutions",
    slug: "business-it-solutions",
    description:
      "IT consulting, web design and development, and business automation that move your digital transformation forward.",
    image: "/images/image_4.webp",
  },
  {
    name: "Mobile App Development",
    slug: "mobile-app-development",
    description:
      "Native and cross-platform mobile apps designed, built, and managed for iOS and Android from a single team.",
    image: "/images/image_7.webp",
  },
];

export const DepartmentsShowcase: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[0] as HTMLElement | undefined;
    const width = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: dir * width, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#e5e5e5] text-[#000000]">
      <div className="site-grid section-block">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <Reveal>
            <h2 className="type-h2 mb-4 max-w-3xl">
              Five ways we turn ideas into digital reality.
            </h2>
            <p className="type-body-large text-[#444444] max-w-2xl">
              From AI-powered products to final-year student projects, our
              100+ engineers bridge the gap between an idea and a working
              system, across AI & LLM Integration, Custom Software, Academic
              Projects, Business IT, and Mobile Apps.
            </p>
          </Reveal>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scrollByCard(-1)}
              className="w-11 h-11 rounded-full bg-[#ffffff] border border-[#c6c6c6] flex items-center justify-center hover:bg-[#f3f3f3] transition-colors cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollByCard(1)}
              className="w-11 h-11 rounded-full bg-[#ffffff] border border-[#c6c6c6] flex items-center justify-center hover:bg-[#f3f3f3] transition-colors cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory"
        >
          {DEPARTMENTS.map((dept) => (
            <Link
              key={dept.name}
              to={`/solutions/${dept.slug}`}
              className="snap-start shrink-0 w-[80%] sm:w-[40%] lg:w-[22%] bg-[#ffffff] rounded-[24px] overflow-hidden border border-[#c6c6c6]/40"
            >
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="type-h4 mb-2">
                  {dept.name}
                </h3>
                <p className="type-body-medium text-[#444444] mb-4">
                  {dept.description}
                </p>
                <span className="font-neo text-sm font-medium flex items-center gap-2">
                  More details
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
