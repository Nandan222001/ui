import React from "react";

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

export const IntegrationsGrid: React.FC = () => {
  return (
    <section className="w-full bg-[#e5e5e5] text-[#000000]">
      <div className="site-grid section-block">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          <h2 className="lg:col-span-6 type-h2">
            Finally, AI that understands your back office.
          </h2>
          <p className="lg:col-span-6 lg:col-start-7 type-body-headline text-[#000000] opacity-50 self-end">
            We operate your systems, not just connect to them. 20+ years of
            implementation experience across Oracle, Workday, and SAP encoded
            into agents that execute inside your system of record.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {INTEGRATIONS.map((item, idx) => (
            <div
              key={item.name}
              className="group relative aspect-[302/140] rounded-[24px] sm:rounded-[32px] bg-[#000000] overflow-hidden transition-colors duration-200"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
