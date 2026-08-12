import React, { useState } from "react";
import { ViewMode, AgentModule } from "./types";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturedAgentsGrid } from "./components/FeaturedAgentsGrid";
import { InvertedDarkSection } from "./components/InvertedDarkSection";
import { AgentSandboxView } from "./components/AgentSandboxView";
import { RoiCalculatorView } from "./components/RoiCalculatorView";
import { ReadinessAssessmentView } from "./components/ReadinessAssessmentView";
import { UseCasesView } from "./components/UseCasesView";
import { DemoModal } from "./components/DemoModal";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeView, setActiveView] = useState<ViewMode>("showroom");
  const [selectedAgent, setSelectedAgent] = useState<AgentModule | undefined>(undefined);
  const [isDemoOpen, setIsDemoOpen] = useState<boolean>(false);

  const handleSelectAgent = (agent: AgentModule) => {
    setSelectedAgent(agent);
  };

  return (
    <div className="min-h-screen bg-[#e5e5e5] text-[#000000] flex flex-col font-neo antialiased">
      {/* Top Floating Navbar */}
      <Navbar
        activeView={activeView}
        onSelectView={(view) => {
          setActiveView(view);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onOpenDemo={() => setIsDemoOpen(true)}
      />

      {/* Main Content Area Based On View Mode */}
      <main className="flex-1">
        {activeView === "showroom" && (
          <>
            <HeroSection
              onSelectView={(view) => {
                setActiveView(view);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onOpenDemo={() => setIsDemoOpen(true)}
            />
            <FeaturedAgentsGrid
              onSelectAgent={handleSelectAgent}
              onSelectView={(view) => {
                setActiveView(view);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
            <InvertedDarkSection
              onOpenDemo={() => setIsDemoOpen(true)}
            />
          </>
        )}

        {activeView === "agent-sandbox" && (
          <AgentSandboxView
            initialAgent={selectedAgent}
            onOpenDemo={() => setIsDemoOpen(true)}
          />
        )}

        {activeView === "roi-calculator" && (
          <RoiCalculatorView
            onOpenDemo={() => setIsDemoOpen(true)}
          />
        )}

        {activeView === "readiness-assessment" && (
          <ReadinessAssessmentView
            onOpenDemo={() => setIsDemoOpen(true)}
          />
        )}

        {activeView === "use-cases" && (
          <UseCasesView
            onOpenDemo={() => setIsDemoOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectView={(view) => {
          setActiveView(view);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onOpenDemo={() => setIsDemoOpen(true)}
      />

      {/* Schedule Demo Modal */}
      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </div>
  );
}
