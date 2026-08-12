import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenDemo: () => void;
}

const NAV_ITEMS: { to: string; label: string; pulse?: boolean }[] = [
  { to: "/", label: "SHOWROOM" },
  { to: "/agent-sandbox", label: "AGENT SANDBOX", pulse: true },
  { to: "/roi-calculator", label: "ROI ESTIMATOR" },
  { to: "/readiness-assessment", label: "READINESS DIAGNOSTIC" },
  { to: "/use-cases", label: "SOLUTIONS" },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#e5e5e5] sticky top-0 z-40 transition-colors">
      <div className="h-20 sm:h-24 lg:h-32 px-4 sm:px-6 lg:px-20 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <div
          onClick={goHome}
          className="cursor-pointer flex items-center gap-2 sm:gap-3 group shrink-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#000000] text-[#ffffff] flex items-center justify-center font-condensed text-xl sm:text-2xl font-bold rounded-lg group-hover:bg-[#2f2f2f] transition-colors">
            D
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-condensed text-2xl sm:text-3xl font-bold tracking-tight text-[#000000] leading-none">
                DAYOS
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#d1ffca] inline-block"></span>
            </div>
            <span className="hidden sm:block font-mono text-[10px] text-[#444444] uppercase tracking-wider font-semibold">
              AI FOR BUSINESS
            </span>
          </div>
        </div>

        {/* Nav Pill Container - White Floating Capsule (desktop only) */}
        <nav className="hidden lg:flex items-center bg-[#ffffff] rounded-[48px] px-3 py-2 border border-[#c6c6c6]/40 shadow-none gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `px-5 py-2.5 rounded-full text-sm font-neo font-medium flex items-center gap-2 transition-all ${
                  isActive
                    ? "bg-[#000000] text-[#ffffff]"
                    : "text-[#444444] hover:text-[#000000] hover:bg-[#f3f3f3]"
                }`
              }
            >
              <span>{item.label}</span>
              {item.pulse && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#fff100] animate-pulse"></span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Schedule Demo Button (Filled Dark Button) */}
          <button
            onClick={onOpenDemo}
            className="bg-[#000000] hover:bg-[#2f2f2f] text-[#ffffff] px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-neo font-medium flex items-center gap-1.5 sm:gap-2 transition-colors cursor-pointer whitespace-nowrap"
          >
            <span className="sm:hidden">Demo</span>
            <span className="hidden sm:inline">Schedule a Demo</span>
            <ArrowUpRight className="w-4 h-4 text-[#d1ffca] shrink-0" />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#ffffff] border border-[#c6c6c6] flex items-center justify-center text-[#000000] cursor-pointer shrink-0"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="lg:hidden px-4 sm:px-6 pb-6 flex flex-col gap-1.5 bg-[#e5e5e5] border-t border-[#c6c6c6]/60">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `mt-1.5 first:mt-4 px-4 py-3.5 rounded-xl text-left text-sm font-neo font-medium flex items-center justify-between transition-colors ${
                  isActive
                    ? "bg-[#000000] text-[#ffffff]"
                    : "bg-[#ffffff] text-[#444444] border border-[#c6c6c6]/40"
                }`
              }
            >
              <span>{item.label}</span>
              {item.pulse && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#fff100] animate-pulse"></span>
              )}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};
