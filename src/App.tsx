import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import { PlatformPillarView } from "./components/platform/PlatformPillarView";
import { SolutionDetailView } from "./components/solutions/SolutionDetailView";
import { CompanyView } from "./components/CompanyView";
import { CareersView } from "./components/CareersView";
import { TermsView } from "./components/TermsView";
import { PrivacyView } from "./components/PrivacyView";
import { NotFoundView } from "./components/NotFoundView";
import { DemoModal } from "./components/DemoModal";
import { Footer } from "./components/Footer";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
};

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState<boolean>(false);
  const onOpenDemo = () => setIsDemoOpen(true);

  return (
    <div className="min-h-screen bg-[#e5e5e5] text-[#000000] flex flex-col font-neo antialiased">
      <ScrollToTop />

      {/* Top Floating Navbar */}
      <Navbar onOpenDemo={onOpenDemo} />

      {/* Main Content Area */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroHome />
                <ManifestoColumns />
                <RevolutionStatement />
                <IntroducingHero onOpenDemo={onOpenDemo} />
                <SolutionsEntry />
                <UseCaseCarousel />
                <IntegrationsGrid />
                <DepartmentsShowcase />
                <DemoCta onOpenDemo={onOpenDemo} />
              </>
            }
          />

          <Route path="/agent-sandbox" element={<AgentSandboxView onOpenDemo={onOpenDemo} />} />
          <Route path="/roi-calculator" element={<RoiCalculatorView onOpenDemo={onOpenDemo} />} />
          <Route
            path="/readiness-assessment"
            element={<ReadinessAssessmentView onOpenDemo={onOpenDemo} />}
          />
          <Route path="/use-cases" element={<UseCasesView onOpenDemo={onOpenDemo} />} />

          <Route path="/platform/:slug" element={<PlatformPillarView onOpenDemo={onOpenDemo} />} />
          <Route path="/solutions/:slug" element={<SolutionDetailView onOpenDemo={onOpenDemo} />} />

          <Route path="/company" element={<CompanyView onOpenDemo={onOpenDemo} />} />
          <Route path="/careers" element={<CareersView onOpenDemo={onOpenDemo} />} />
          <Route path="/terms-of-service" element={<TermsView />} />
          <Route path="/privacy-statement" element={<PrivacyView />} />

          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onOpenDemo={onOpenDemo} />

      {/* Schedule Demo Modal */}
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
