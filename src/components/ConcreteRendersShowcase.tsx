import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export const ConcreteRendersShowcase: React.FC = () => {
  const [activeBlock, setActiveBlock] = useState<string>("oracle");

  const blocks = [
    {
      id: "oracle",
      brand: "ORACLE FUSION & EBS",
      color: "#000000",
      accent: "#d1ffca",
      label: "ACCOUNTING & CLOSE",
      status: "3-WAY GL MATCHING ACTIVE",
      metric: "Reduces close from 12 days to 4 hrs",
      description: "Hero AI agents log directly into Oracle Fusion and EBS to execute line-item matching, GL reconciliation, and variance audits."
    },
    {
      id: "workday",
      brand: "WORKDAY",
      color: "#2f2f2f",
      accent: "#fff100",
      label: "HR & SELF-SERVICE",
      status: "EMPLOYEE CO-PILOT",
      metric: "70% manual HR workload automated",
      description: "Answers policy questions, handles benefits administration, and manages internal employee mobility directly within Workday."
    },
    {
      id: "sap",
      brand: "SAP S/4HANA",
      color: "#000000",
      accent: "#d1ffca",
      label: "PROCUREMENT & PO AUDIT",
      status: "VENDOR INVOICE RECON",
      metric: "Replaces traditional AMS teams",
      description: "Validates line-item PO matches, prevents duplicate vendor payments, and automates multi-system procurement workflows."
    },
    {
      id: "servicenow",
      brand: "SERVICENOW",
      color: "#444444",
      accent: "#fff100",
      label: "IT & SERVICE DESK",
      status: "L1/L2 TICKET AUTO-RESOLVE",
      metric: "91-day SLA deployment",
      description: "Navigates IT service desk requests, executes cross-system credential provisioning, and enforces ISO/IEC 42001 governance."
    },
  ];

  return (
    <div className="w-full bg-[#f3f3f3] rounded-[32px] p-6 sm:p-8 relative overflow-hidden border border-[#c6c6c6]/50">
      {/* Header annotation */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#c6c6c6]/50">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#000000]"></span>
          <span className="font-mono text-xs text-[#000000] uppercase font-semibold">
            HERO ADAPTERS // ENTERPRISE CONNECTORS
          </span>
        </div>
        <span className="mint-tag">
          ISO/IEC 42001 CERTIFIED
        </span>
      </div>

      {/* Isometric / 3D Block Graphic Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Visual 3D Concrete Blocks Illustration */}
        <div className="relative h-72 sm:h-80 bg-[#e5e5e5] rounded-[24px] p-6 flex items-center justify-center overflow-hidden border border-[#c6c6c6]">
          {/* Grid pattern background */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          {/* 3D Concrete Blocks Composition */}
          <div className="relative z-10 w-full max-w-xs flex flex-col items-center justify-center">
            {/* Top Block - Oracle */}
            <div 
              onClick={() => setActiveBlock("oracle")}
              className={`w-56 h-20 bg-[#000000] text-[#ffffff] rounded-2xl p-4 cursor-pointer transform transition-all duration-300 hover:-translate-y-1 ${
                activeBlock === "oracle" ? "ring-2 ring-[#d1ffca] scale-105" : "opacity-90"
              }`}
            >
              <div className="flex justify-between items-start">
                <span className="font-condensed text-xl font-bold tracking-tight text-[#ffffff]">
                  ORACLE FUSION & EBS
                </span>
                <span className="w-3 h-3 rounded-full bg-[#d1ffca]"></span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="font-mono text-[10px] text-[#979797]">CONCRETE BLOCK #01</span>
                <span className="bg-[#d1ffca] text-[#000000] font-mono text-[9px] px-1.5 py-0.5 rounded font-bold">
                  HERO ACTIONS
                </span>
              </div>
            </div>

            {/* Middle Block - Workday & SAP side-by-side overlap */}
            <div className="flex gap-3 -mt-3">
              <div 
                onClick={() => setActiveBlock("workday")}
                className={`w-36 h-20 bg-[#ffffff] text-[#000000] border-2 border-[#000000] rounded-2xl p-3 cursor-pointer transform transition-all duration-300 hover:-translate-y-1 ${
                  activeBlock === "workday" ? "ring-2 ring-[#fff100] scale-105" : "opacity-90"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-condensed text-base font-bold text-[#000000]">
                    WORKDAY
                  </span>
                  <span className="w-2.5 h-2.5 bg-[#fff100] rounded-full"></span>
                </div>
                <p className="font-mono text-[9px] text-[#444444] mt-2 font-medium">HR SELF-SERVICE</p>
              </div>

              <div 
                onClick={() => setActiveBlock("sap")}
                className={`w-36 h-20 bg-[#2f2f2f] text-[#ffffff] rounded-2xl p-3 cursor-pointer transform transition-all duration-300 hover:-translate-y-1 ${
                  activeBlock === "sap" ? "ring-2 ring-[#d1ffca] scale-105" : "opacity-90"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-condensed text-base font-bold text-[#ffffff]">
                    SAP S/4HANA
                  </span>
                  <span className="w-2.5 h-2.5 bg-[#d1ffca] rounded-full"></span>
                </div>
                <p className="font-mono text-[9px] text-[#979797] mt-2">PO RECON</p>
              </div>
            </div>

            {/* Base Block - ServiceNow */}
            <div 
              onClick={() => setActiveBlock("servicenow")}
              className={`w-60 h-16 bg-[#ffffff] text-[#000000] border border-[#c6c6c6] rounded-2xl p-3 -mt-2 cursor-pointer transform transition-all duration-300 hover:-translate-y-1 ${
                activeBlock === "servicenow" ? "ring-2 ring-[#000000] scale-105" : "opacity-90"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-condensed text-lg font-bold text-[#000000]">
                  SERVICENOW & NETSUITE
                </span>
                <span className="font-mono text-[10px] bg-[#fff100] text-[#000000] px-2 py-0.5 rounded font-bold">
                  IT & AMS AUTO
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Block Info Panel */}
        <div className="flex flex-col justify-between h-full bg-[#ffffff] rounded-[24px] p-6 border border-[#c6c6c6]">
          {(() => {
            const current = blocks.find((b) => b.id === activeBlock) || blocks[0];
            return (
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-[#979797] uppercase">
                      ENTERPRISE CONNECTOR SPEC
                    </span>
                    <span 
                      className="px-3 py-1 rounded-full font-mono text-xs font-semibold"
                      style={{ backgroundColor: current.accent, color: "#000000" }}
                    >
                      {current.label}
                    </span>
                  </div>

                  <h3 className="font-condensed text-3xl font-bold text-[#000000] mb-2">
                    {current.brand} CONNECTOR
                  </h3>

                  <p className="font-neo text-sm text-[#444444] mb-4 leading-relaxed">
                    {current.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs font-neo text-[#000000]">
                      <CheckCircle2 className="w-4 h-4 text-[#000000]" />
                      <span>Replaces high-cost third-party AMS support teams</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-neo text-[#000000]">
                      <CheckCircle2 className="w-4 h-4 text-[#000000]" />
                      <span>ISO/IEC 42001 certified governance & human oversight</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#f3f3f3] flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-[#979797] block uppercase">PERFORMANCE IMPACT</span>
                    <span className="font-mono text-xs font-bold text-[#000000]">{current.metric}</span>
                  </div>
                  <span className="font-mono text-xs text-[#000000] font-bold underline cursor-pointer">
                    View Hero Specs →
                  </span>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
};
