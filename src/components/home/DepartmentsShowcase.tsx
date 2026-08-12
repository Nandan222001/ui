import React, { useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const DEPARTMENTS = [
  {
    name: "Accounting",
    description:
      "Empower your team with AI to reduce manual workloads, manage month-end close, and achieve more with fewer resources.",
    image: "/images/image_3.webp",
  },
  {
    name: "Human Resources",
    description:
      "Simplify HR with employee self-service powered by AI. Answer policy questions, manage benefits, and ensure satisfaction across the board.",
    image: "/images/image_2.webp",
  },
  {
    name: "Procurement",
    description:
      "Prevent costly errors before they happen. Agentic AI analyzes procurement data, flags duplicates, and connects the dots between contracts, invoices, and payments.",
    image: "/images/image_8.webp",
  },
  {
    name: "Information Technology",
    description:
      "Reduce rising SaaS and labor costs with efficient agentic workflows that deliver quality support and help you be a better business partner.",
    image: "/images/image_4.webp",
  },
  {
    name: "Finance",
    description:
      "Agentic AI eliminates errors by integrating headcount, cost centers, and product data into a reliable, repeatable process—no more manual data collection or spreadsheets.",
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
          <div>
            <h2 className="type-h2 mb-4 max-w-3xl">
              Run a better business with Dayos.
            </h2>
            <p className="type-body-large text-[#444444] max-w-2xl">
              Every department runs on systems engineering. Configuration,
              reporting, compliance, and close. Hero automates the 30% that
              platforms can't solve out of the box, across Accounting, HR,
              Procurement, IT, and Finance.
            </p>
          </div>

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
            <div
              key={dept.name}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
