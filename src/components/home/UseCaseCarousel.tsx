import React, { useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Reveal } from "./Reveal";
import { HoverLoopButton } from "./HoverLoopButton";

const CASE_STUDIES = [
  {
    title: "Cut Support Tickets in Half with an AI Chatbot.",
    description:
      "We built an LLM-powered chatbot grounded in a client's own policies and live order data. Ticket volume dropped 50% within a month of launch.",
    image: "/images/it-integrate.webp",
  },
  {
    title: "Replace Spreadsheet Chaos with Custom Software.",
    description:
      "Six disconnected spreadsheets became one custom-built system mapped to the client's real workflow, cutting manual data entry by roughly two-thirds.",
    image: "/images/accounting-generalLedger.webp",
  },
  {
    title: "Ship a Mobile App with a Built-In AI Assistant.",
    description:
      "iOS and Android from a single codebase, with an LLM-powered assistant grounded in the client's own content, live at launch rather than bolted on later.",
    image: "/images/accounting-accountsReceivable.webp",
  },
];

export const UseCaseCarousel: React.FC = () => {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % CASE_STUDIES.length);
    }, 5000);
    return () => clearInterval(id);
  }, [playing]);

  return (
    <section className="w-full bg-[#ffffff] text-[#000000]">
      <div className="site-grid section-block">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <Reveal>
            <h2 className="type-quote max-w-2xl mb-3">
              Explore our Use Case Library.
            </h2>
            <p className="type-body-large text-[#444444] max-w-md">
              Real projects across AI, custom software, and mobile. No more
              worries about where or how to start.
            </p>
          </Reveal>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setPlaying((p) => !p)}
              className="w-11 h-11 rounded-full bg-[#f3f3f3] flex items-center justify-center hover:bg-[#e5e5e5] transition-colors cursor-pointer"
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setActive((i) => (i - 1 + CASE_STUDIES.length) % CASE_STUDIES.length)}
              className="w-11 h-11 rounded-full bg-[#f3f3f3] flex items-center justify-center hover:bg-[#e5e5e5] transition-colors cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActive((i) => (i + 1) % CASE_STUDIES.length)}
              className="w-11 h-11 rounded-full bg-[#f3f3f3] flex items-center justify-center hover:bg-[#e5e5e5] transition-colors cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Real site: one full-width slide at a time, sliding via transform */}
        <div className="relative overflow-hidden rounded-[24px] bg-[#f3f3f3]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {CASE_STUDIES.map((cs) => (
              <div key={cs.title} className="w-full shrink-0 grid grid-cols-1 sm:grid-cols-2">
                <div className="p-8 sm:p-12 flex flex-col justify-center order-2 sm:order-1">
                  <h3 className="type-h4 mb-4">{cs.title}</h3>
                  <p className="type-body-medium text-[#444444] mb-8 max-w-md">
                    {cs.description}
                  </p>
                  <HoverLoopButton className="font-neo text-base font-medium">
                    More details
                    <ArrowUpRight className="w-4 h-4" />
                  </HoverLoopButton>
                </div>
                <div className="order-1 sm:order-2 aspect-[4/3] sm:aspect-auto">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {CASE_STUDIES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
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
