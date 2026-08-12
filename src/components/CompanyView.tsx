import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./home/Reveal";
import { HoverLoopButton } from "./home/HoverLoopButton";

interface CompanyViewProps {
  onOpenDemo: () => void;
}

const AXIOMS = [
  {
    title: "Every business is a special case.",
    description:
      "No two companies share the same processes, history, or regulatory footprint. Standard software was never going to fit all of them equally well.",
  },
  {
    title: "Enterprise software targets the middle.",
    description:
      "Systems built for the largest buyer base are engineered to the median requirement, not to any single company's edge cases.",
  },
  {
    title: "The gap doesn't close on its own.",
    description:
      "The distance between what's unique to you and what standard platforms can configure stays roughly constant, no matter how many features ship.",
  },
  {
    title: "The truth lives inside your walls.",
    description:
      "Transaction history, configuration state, and process logic sit behind your firewall. No public model gets to see it.",
  },
  {
    title: "New tools need new plumbing.",
    description:
      "When the mechanism that closes the gap changes, from human labor to software, the architecture underneath has to change with it.",
  },
];

const PARTNERS = [
  { name: "Oracle", detail: "Cloud Build & Cloud Service Partner" },
  { name: "SAP", detail: "Service Partner" },
  { name: "Workday", detail: "Silver Innovation & Sales Partner" },
];

export const CompanyView: React.FC<CompanyViewProps> = ({ onOpenDemo }) => {
  return (
    <div>
      {/* Hero */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal>
            <span className="mint-tag mb-6">AI-NATIVE SERVICE COMPANY</span>
            <h1 className="type-h1 max-w-4xl">
              Born from one idea: revolutionize how good work gets done.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="type-body-headline text-[#444444] max-w-2xl mt-8">
              We don't sell managed services to the enterprise. We build the
              AI that does the work, deployed directly inside Oracle,
              Workday, SAP, NetSuite, and Dynamics.
            </p>
          </Reveal>
        </div>
      </section>

      {/* First Principles */}
      <section className="w-full bg-[#000000] text-[#ffffff]">
        <div className="site-grid section-block">
          <Reveal className="mb-12">
            <span className="font-mono-tag text-[#979797] block mb-4">FIRST PRINCIPLES</span>
            <h2 className="type-h2 max-w-3xl">
              Five ideas everything else at Dayos is built on.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {AXIOMS.map((axiom, idx) => (
              <Reveal key={axiom.title} delay={idx * 0.08}>
                <span className="font-mono-tag text-[#d1ffca] block mb-3">
                  0{idx + 1}
                </span>
                <h3 className="type-h4 mb-3">{axiom.title}</h3>
                <p className="type-body-medium text-[#979797]">{axiom.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Positioning Quote */}
      <section className="w-full bg-[#d1ffca] text-[#000000]">
        <div className="site-grid section-block">
          <Reveal>
            <p className="type-quote max-w-4xl">
              "Hero is the first closing mechanism in thirty years that isn't
              capped by vendor configuration limits, isn't dependent on a
              shrinking pool of systems engineers, and isn't limited to what a
              public model can guess about your business."
            </p>
          </Reveal>
        </div>
      </section>

      {/* Partners + HQ */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="font-mono-tag text-[#979797] block mb-4">ECOSYSTEM PARTNERS</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {PARTNERS.map((partner) => (
                  <div
                    key={partner.name}
                    className="bg-[#ffffff] rounded-[24px] p-6 border border-[#c6c6c6]/60"
                  >
                    <h3 className="type-h4 mb-2">{partner.name}</h3>
                    <p className="type-body-medium text-[#444444]">{partner.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <span className="font-mono-tag text-[#979797] block mb-4">WHERE WE OPERATE</span>
              <div className="bg-[#ffffff] rounded-[24px] p-6 sm:p-8 border border-[#c6c6c6]/60 h-full">
                <p className="type-body-large text-[#444444] mb-4">
                  Headquartered in Singapore's Centennial Tower, with a Delaware
                  entity serving customers across the Americas.
                </p>
                <p className="type-body-large text-[#444444]">
                  Our team spans six continents by design, so someone is always
                  awake when your close cycle needs to run.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Working here */}
      <section className="w-full bg-[#000000] text-[#ffffff]">
        <div className="site-grid section-block">
          <Reveal className="mb-12">
            <span className="font-mono-tag text-[#979797] block mb-4">WORKING AT DAYOS</span>
            <h2 className="type-h2 max-w-3xl">
              We pay in growth, ownership, and coverage that travels with you.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <Reveal>
              <h3 className="type-h4 mb-3">Compounding AI exposure</h3>
              <p className="type-body-medium text-[#979797]">
                Every engineer works directly on production agents running
                inside real enterprise systems, not internal tooling.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 className="type-h4 mb-3">Profit-sharing</h3>
              <p className="type-body-medium text-[#979797]">
                When Hero saves a customer money, the team that shipped it
                shares in the upside.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <h3 className="type-h4 mb-3">Healthcare, worldwide</h3>
              <p className="type-body-medium text-[#979797]">
                Coverage built for a distributed team, wherever our engineers
                choose to be based.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="mt-12">
            <Link to="/careers" className="inline-block">
              <HoverLoopButton
                as="span"
                className="bg-[#ffffff] text-[#000000] px-6 py-4 rounded-lg font-neo font-medium text-base"
              >
                <span>Explore open roles</span>
                <ArrowUpRight className="w-4 h-4" />
              </HoverLoopButton>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Mission close */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-8">
            <h2 className="type-h2">
              Just getting by shouldn't be good enough.
            </h2>
          </Reveal>
          <p className="lg:col-span-4 type-body-large text-[#444444]">
            Dayos builds an agent tailored to your enterprise ecosystem,
            cutting cost and freeing your people to do the work only they can
            do.
          </p>
        </div>
      </section>

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
