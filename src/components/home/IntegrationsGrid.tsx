import React, { useRef } from "react";
import { Reveal } from "./Reveal";

const INTEGRATIONS = [
  { name: "OpenAI" },
  { name: "Anthropic" },
  { name: "Google Gemini" },
  { name: "LangChain" },
  { name: "React" },
  { name: "Node.js" },
  { name: "AWS" },
  { name: "Slack" },
];

const HOVER_COLORS = ["#00fd74", "#ff7ef2", "#00d1ff", "#ff6838", "#b874fc"];

const TiltCard: React.FC<{ children: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({
  children,
  className,
  style,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${px * 16}deg) rotateX(${-py * 16}deg)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transition: "transform 200ms ease-out", ...style }}
    >
      {children}
    </div>
  );
};

export const IntegrationsGrid: React.FC = () => {
  return (
    <section className="w-full bg-[#e5e5e5] text-[#000000]">
      <div className="site-grid section-block">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          <Reveal className="lg:col-span-6">
            <h2 className="type-h2">
              The AI and engineering stack behind everything we build.
            </h2>
          </Reveal>
          <p className="lg:col-span-6 lg:col-start-7 type-body-headline text-[#000000] opacity-50 self-end">
            We build with the leading LLM providers and a modern engineering
            stack, so the chatbots, apps, and systems we ship are fast,
            reliable, and built to last.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {INTEGRATIONS.map((item, idx) => (
            <TiltCard
              key={item.name}
              className="group relative aspect-[302/140] rounded-[24px] sm:rounded-[32px] bg-[#000000] overflow-hidden"
              style={{ "--hover-color": HOVER_COLORS[idx % HOVER_COLORS.length] } as React.CSSProperties}
            >
              <div
                className="absolute inset-0 transition-colors duration-200 group-hover:[background-color:var(--hover-color)]"
              />
              <span className="absolute inset-0 flex items-center justify-center px-4 type-h4 text-[#ffffff] text-center transition-colors duration-200 group-hover:text-[#000000]">
                {item.name}
              </span>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
