import React, { useState } from "react";
import { ViewMode } from "./types";
import { Navbar } from "./components/Navbar";
import { HeroHome } from "./components/home/HeroHome";
import { ManifestoColumns } from "./components/home/ManifestoColumns";
import { RevolutionStatement } from "./components/home/RevolutionStatement";
import { IntroducingHero } from "./components/home/IntroducingHero";
import { SolutionsEntry } from "./components/home/SolutionsEntry";
import { UseCaseCarousel } from "./components/home/UseCaseCarousel";
import { IntegrationsGrid } from "./components/home/IntegrationsGrid";
import { DepartmentsShowcase } from "./components/home/DepartmentsShowcase";
import { DemoCta } from "./components/home/DemoCta";
import { AgentSandboxView } from "./components/AgentSandboxView";
import { RoiCalculatorView } from "./components/RoiCalculatorView";
import { ReadinessAssessmentView } from "./components/ReadinessAssessmentView";
import { UseCasesView } from "./components/UseCasesView";
import { AboutView } from "./components/AboutView";
import { ContactView } from "./components/ContactView";
import { DemoModal } from "./components/DemoModal";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeView, setActiveView] = useState<ViewMode>("showroom");
  const [isDemoOpen, setIsDemoOpen] = useState<boolean>(false);

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
            <HeroHome />
            <ManifestoColumns />
            <RevolutionStatement />
            <IntroducingHero onOpenDemo={() => setIsDemoOpen(true)} />
            <SolutionsEntry />
            <UseCaseCarousel />
            <IntegrationsGrid />
            <DepartmentsShowcase />
            <DemoCta
              onOpenDemo={() => setIsDemoOpen(true)}
              onSelectView={(view) => {
                setActiveView(view);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </>
        )}

        {activeView === "agent-sandbox" && (
          <AgentSandboxView
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

        {activeView === "about" && (
          <AboutView
            onOpenDemo={() => setIsDemoOpen(true)}
          />
        )}

        {activeView === "contact" && (
          <ContactView
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
