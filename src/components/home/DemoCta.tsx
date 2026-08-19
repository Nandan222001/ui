import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface DemoCtaProps {
  onOpenDemo: () => void;
}

export const DemoCta: React.FC<DemoCtaProps> = ({ onOpenDemo }) => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#e5e5e5] text-[#000000]">
      <div className="site-grid section-block grid grid-cols-1 sm:grid-cols-2 gap-6">
        <button
          onClick={onOpenDemo}
          className="text-left bg-[#000000] text-[#ffffff] rounded-[24px] p-8 sm:p-12 flex flex-col justify-between min-h-[280px] hover:bg-[#2f2f2f] transition-colors cursor-pointer"
        >
          <h3 className="type-h3">
            Get a
            <br />Free Quote
          </h3>
          <div>
            <p className="type-body-medium text-[#979797] mb-6 max-w-xs">
              Tell us about your project — academic or business — and get a
              clear scope with transparent pricing.
            </p>
            <span className="inline-flex items-center gap-2 bg-[#ffffff] text-[#000000] px-5 py-3 rounded-lg font-neo font-medium text-sm">
              Get started
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </button>

        <button
          onClick={() => navigate("/company")}
          className="text-left bg-[#ffffff] text-[#000000] rounded-[24px] p-8 sm:p-12 flex flex-col justify-between min-h-[280px] border border-[#c6c6c6]/40 hover:bg-[#f3f3f3] transition-colors cursor-pointer"
        >
          <h3 className="type-h3">
            About
            <br />us
          </h3>
          <p className="type-body-medium text-[#444444] max-w-xs">
            NMT Solutions bridges the gap between ideas and digital reality —
            100+ engineers building original software, AI integrations, and
            academic projects the right way.
          </p>
        </button>
      </div>
    </section>
  );
};
