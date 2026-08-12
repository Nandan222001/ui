import React, { useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const CASE_STUDIES = [
  {
    title: "Go Beyond KTLO with Hero Pro.",
    description:
      "Keeping the lights on is the baseline. Hero takes it further. Every twelve months, autonomous agent build ships a new custom agent against your biggest manual workflow. Your support footprint shrinks every year you run Hero.",
    image: "/images/accounting-generalLedger.webp",
  },
  {
    title: "Streamline Manual Processes with Agentic Workflows.",
    description:
      "Named the Top Strategic Tech Trend of 2025 by Gartner, Dayos leads the way in Agentic AI for enterprise business apps.",
    image: "/images/it-integrate.webp",
  },
  {
    title: "Reduce month-end close time by 20% with Agentic AI.",
    description:
      "Experience an accelerated close process and cost savings beyond your ERP system with our AI month-end close agent.",
    image: "/images/accounting-accountsReceivable.webp",
  },
];

export const UseCaseCarousel: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[idx] as HTMLElement | undefined;
    if (card) {
      track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    }
    setActive(idx);
  };

  return (
    <section className="w-full bg-[#e5e5e5] text-[#000000]">
      <div className="site-grid section-block">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="type-quote max-w-2xl mb-3">
              Explore our Use Case Library.
            </h2>
            <p className="type-body-large text-[#444444] max-w-md">
              Deploy AI quickly with our use case library. No more worries
              about where or how to start.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToIndex(Math.max(active - 1, 0))}
              className="w-11 h-11 rounded-full bg-[#ffffff] border border-[#c6c6c6] flex items-center justify-center hover:bg-[#f3f3f3] transition-colors cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToIndex(Math.min(active + 1, CASE_STUDIES.length - 1))}
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
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.title}
              className="snap-start shrink-0 w-[85%] sm:w-[45%] lg:w-[31%] bg-[#ffffff] rounded-[24px] overflow-hidden border border-[#c6c6c6]/40"
            >
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="type-h4 mb-3">
                  {cs.title}
                </h3>
                <p className="type-body-medium text-[#444444] mb-6">
                  {cs.description}
                </p>
                <span className="font-neo text-sm font-medium flex items-center gap-2">
                  More details
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {CASE_STUDIES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                idx === active ? "bg-[#000000]" : "bg-[#c6c6c6]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
