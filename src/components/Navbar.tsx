import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenDemo: () => void;
}

type NavItem = { to: string; label: string; pulse?: boolean };

// Desktop pill only shows this core set — the app's own interactive tools.
const NAV_ITEMS: NavItem[] = [
  { to: "/", label: "SHOWROOM" },
  { to: "/agent-sandbox", label: "AGENT SANDBOX", pulse: true },
  { to: "/roi-calculator", label: "ROI ESTIMATOR" },
  { to: "/readiness-assessment", label: "READINESS DIAGNOSTIC" },
  { to: "/use-cases", label: "USE CASES" },
];

// Mobile menu shows everything, grouped the same way as the footer, so the
// rest of the site (Platform, Solutions, Resources, Company) isn't only
// reachable by scrolling all the way down.
const MOBILE_NAV_GROUPS: { title: string | null; items: NavItem[] }[] = [
  { title: null, items: NAV_ITEMS },
  {
    title: "PLATFORM",
    items: [
      { to: "/platform/hero-answers", label: "Hero Answers" },
      { to: "/platform/hero-actions", label: "Hero Actions" },
      { to: "/platform/hero-experts", label: "Hero Experts" },
    ],
  },
  {
    title: "SOLUTIONS",
    items: [
      { to: "/solutions/ai-it-management-software", label: "IT Management" },
      { to: "/solutions/ai-accounting-software", label: "Accounting" },
      { to: "/solutions/ai-hr-software", label: "Human Resources" },
      { to: "/solutions/ai-finance-software", label: "Finance" },
      { to: "/solutions/ai-procurement-software", label: "Procurement" },
    ],
  },
  {
    title: "RESOURCES",
    items: [
      { to: "/case-studies", label: "Case Studies" },
      { to: "/blog", label: "Blog" },
      { to: "/news", label: "News" },
      { to: "/support", label: "Support Hub" },
      { to: "/releases", label: "Release Notes" },
    ],
  },
  {
    title: "COMPANY",
    items: [
      { to: "/company", label: "Why Dayos" },
      { to: "/partners", label: "Our Partners" },
      { to: "/careers", label: "Careers" },
      { to: "/plans", label: "Plans & Pricing" },
      { to: "/partnership", label: "Partnership" },
    ],
  },
];

// Reads the background color directly behind the floating nav bar and
// flips the wordmark to white when that section is dark, mirroring
// dayos.com's own transparent, color-inverting header.
function backgroundLuminance(x: number, y: number): number | null {
  let el = document.elementFromPoint(x, y) as HTMLElement | null;
  while (el) {
    const bg = getComputedStyle(el).backgroundColor;
    const match = bg.match(/rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\s*\)/);
    if (match) {
      const alpha = match[4] !== undefined ? parseFloat(match[4]) : 1;
      if (alpha > 0.4) {
        const [, r, g, b] = match;
        return (0.2126 * Number(r) + 0.7152 * Number(g) + 0.0722 * Number(b)) / 255;
      }
    }
    el = el.parentElement;
  }
  return null;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLSpanElement>(null);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    setIsMenuOpen(false);
  };

  useEffect(() => {
    let raf = 0;

    const sample = () => {
      raf = 0;
      const bar = barRef.current;
      const wordmark = wordmarkRef.current;
      if (!bar || !wordmark) return;
      // Probe directly behind the wordmark itself (not the viewport center) —
      // sections can split into differently-colored halves (e.g. a black
      // card next to a white one), so only the logo's own position tells us
      // what color it actually needs to be legible against.
      const wordmarkRect = wordmark.getBoundingClientRect();
      const probeX = wordmarkRect.left + wordmarkRect.width / 2;
      const probeY = bar.getBoundingClientRect().bottom + 2;
      const luminance = backgroundLuminance(probeX, probeY);
      setOnDark(luminance !== null && luminance < 0.5);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(sample);
    };

    sample();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className="w-full sticky top-0 z-40">
      <div
        ref={barRef}
        className="h-20 sm:h-24 lg:h-32 px-4 sm:px-6 lg:px-20 flex items-center justify-between gap-3"
      >
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
              <span
                ref={wordmarkRef}
                className={`font-condensed text-2xl sm:text-3xl font-bold tracking-tight leading-none transition-colors duration-300 ${
                  onDark ? "text-[#ffffff]" : "text-[#000000]"
                }`}
              >
                DAYOS
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#d1ffca] inline-block"></span>
            </div>
            <span
              className={`hidden sm:block font-mono text-[10px] uppercase tracking-wider font-semibold transition-colors duration-300 ${
                onDark ? "text-[#979797]" : "text-[#444444]"
              }`}
            >
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
        <div className="lg:hidden px-4 sm:px-6 pb-6 bg-[#e5e5e5] border-t border-[#c6c6c6]/60 max-h-[calc(100dvh-5rem)] overflow-y-auto">
          {MOBILE_NAV_GROUPS.map((group, groupIdx) => (
            <div key={group.title ?? "primary"} className={groupIdx === 0 ? "mt-4" : "mt-6"}>
              {group.title && (
                <span className="font-mono-tag text-[#979797] block mb-2 px-1">
                  {group.title}
                </span>
              )}
              <div className="flex flex-col gap-1.5">
                {group.items.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3.5 rounded-xl text-left text-sm font-neo font-medium flex items-center justify-between transition-colors ${
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
            </div>
          ))}
        </div>
      )}
    </header>
  );
};
