import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./home/Reveal";

interface PartnersViewProps {
  onOpenDemo: () => void;
}

const PRIMARY_PARTNERS = [
  { name: "Oracle", detail: "Cloud Build & Cloud Service Partner" },
  { name: "SAP", detail: "Service Partner" },
  { name: "Workday", detail: "Silver Innovation & Sales Partner" },
];

const CONNECTED_SYSTEMS = ["NetSuite", "Microsoft Dynamics", "ServiceNow"];

export const PartnersView: React.FC<PartnersViewProps> = ({ onOpenDemo }) => {
  return (
    <div>
      {/* Hero */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal>
            <span className="mint-tag mb-6">OUR PARTNERS</span>
            <h1 className="type-h1 max-w-4xl">
              Built alongside the systems of record we run inside.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="type-body-headline text-[#444444] max-w-2xl mt-8">
              Hero is deployed directly inside the enterprise platforms our
              customers already run, backed by formal partnerships with the
              vendors themselves.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Primary partners */}
      <section className="w-full bg-[#000000] text-[#ffffff]">
        <div className="site-grid section-block">
          <Reveal className="mb-12">
            <span className="font-mono-tag text-[#979797] block mb-4">
              STRATEGIC PARTNERS
            </span>
            <h2 className="type-h2 max-w-3xl">
              Formal partnerships with the platforms enterprises run on.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {PRIMARY_PARTNERS.map((partner, idx) => (
              <Reveal key={partner.name} delay={idx * 0.08}>
                <div className="bg-[#2f2f2f] rounded-[24px] p-6 sm:p-8 h-full">
                  <span className="font-mono-tag text-[#d1ffca] block mb-3">
                    0{idx + 1}
                  </span>
                  <h3 className="type-h4 mb-3">{partner.name}</h3>
                  <p className="type-body-medium text-[#979797]">
                    {partner.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Connected systems */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal className="mb-12">
            <span className="font-mono-tag text-[#979797] block mb-4">
              ECOSYSTEM
            </span>
            <h2 className="type-h2 max-w-3xl">
              Plus the systems Hero natively connects to.
            </h2>
            <p className="type-body-large text-[#444444] max-w-2xl mt-4">
              Beyond our formal partnerships, Hero integrates directly with
              additional systems enterprises rely on day to day.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {CONNECTED_SYSTEMS.map((name) => (
              <div
                key={name}
                className="aspect-[302/140] rounded-[24px] bg-[#000000] flex items-center justify-center p-6"
              >
                <span className="type-h4 text-[#ffffff] text-center">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="w-full bg-[#e5e5e5] text-[#000000] pt-0">
        <div className="site-grid pb-16 sm:pb-24">
          <button
            onClick={onOpenDemo}
            className="w-full text-left bg-[#000000] text-[#ffffff] rounded-[24px] p-8 sm:p-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 hover:bg-[#2f2f2f] transition-colors cursor-pointer"
          >
            <h3 className="type-h3">
              See it running
              <br />
              on your data.
            </h3>
            <span className="inline-flex items-center gap-2 bg-[#ffffff] text-[#000000] px-5 py-3 rounded-lg font-neo font-medium text-sm shrink-0">
              Schedule a Demo
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};
