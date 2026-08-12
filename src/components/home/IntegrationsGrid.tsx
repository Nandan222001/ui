import React, { useRef } from "react";
import { Reveal } from "./Reveal";

const INTEGRATIONS = [
  { name: "Oracle", logo: "/images/oracle-white.svg" },
  { name: "SAP", logo: "/images/sap-white.svg" },
  { name: "Workday", logo: "/images/workday-white.svg" },
  { name: "ServiceNow", logo: "/images/servicenow-white.svg" },
  { name: "Coupa", logo: "/images/coupa-white.svg" },
  { name: "Atlassian Jira", logo: "/images/jira-white.svg" },
  { name: "Anaplan", logo: "/images/anaplan-white.svg" },
  { name: "Slack", logo: "/images/slack-white.svg" },
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
              Finally, AI that understands your back office.
            </h2>
          </Reveal>
          <p className="lg:col-span-6 lg:col-start-7 type-body-headline text-[#000000] opacity-50 self-end">
            We operate your systems, not just connect to them. 20+ years of
            implementation experience across Oracle, Workday, and SAP encoded
            into agents that execute inside your system of record.
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
              <img
                src={item.logo}
                alt={item.name}
                className="absolute inset-0 m-auto max-h-[33%] max-w-[70%] transition-all duration-200 group-hover:invert"
              />
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
