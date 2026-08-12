import React from "react";
import { ArrowUpRight } from "lucide-react";

interface DemoCtaProps {
  onOpenDemo: () => void;
}

export const DemoCta: React.FC<DemoCtaProps> = ({ onOpenDemo }) => {
  return (
    <section className="w-full bg-[#e5e5e5] text-[#000000]">
      <div className="site-grid section-block grid grid-cols-1 sm:grid-cols-2 gap-6">
        <button
          onClick={onOpenDemo}
          className="text-left bg-[#000000] text-[#ffffff] rounded-[24px] p-8 sm:p-12 flex flex-col justify-between min-h-[280px] hover:bg-[#2f2f2f] transition-colors cursor-pointer"
        >
          <h3 className="type-h3">
            Schedule
            <br />a Demo
          </h3>
          <div>
            <p className="type-body-medium text-[#979797] mb-6 max-w-xs">
              Let's transform the way work works. Book an intro to see our
              demo in action.
            </p>
            <span className="inline-flex items-center gap-2 bg-[#ffffff] text-[#000000] px-5 py-3 rounded-lg font-neo font-medium text-sm">
              Get started
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </button>

        <div className="bg-[#ffffff] text-[#000000] rounded-[24px] p-8 sm:p-12 flex flex-col justify-between min-h-[280px] border border-[#c6c6c6]/40">
          <h3 className="type-h3">
            About
            <br />us
          </h3>
          <p className="type-body-medium text-[#444444] max-w-xs">
            Learn more about our company's journey in redefining how good
            work gets done.
          </p>
        </div>
      </div>
    </section>
  );
};
