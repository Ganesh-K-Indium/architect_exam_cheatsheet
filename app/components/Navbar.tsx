"use client";

import { useState, useEffect } from "react";
import { domains, domainColors } from "@/app/data/domains";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const sectionIds = ["hero", "scenarios", ...domains.map((d) => d.id), "quickref"];
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-2">

        {/* Logo — always visible, never shrinks */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex-shrink-0 flex items-center gap-2 group"
        >
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-orange-500/30">
            CA
          </div>
          <span className="hidden lg:block text-sm font-semibold text-slate-300 group-hover:text-white transition-colors whitespace-nowrap">
            Architect Exam
          </span>
        </button>

        <div className="h-5 w-px bg-slate-700 flex-shrink-0" />

        {/* Scenarios — always visible */}
        <button
          onClick={() => scrollTo("scenarios")}
          className={`flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
            active === "scenarios"
              ? "bg-orange-500/20 text-orange-400 border border-orange-500/50"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
          }`}
        >
          <span className="text-orange-400 font-bold">6</span>
          Scenarios
        </button>

        <div className="h-5 w-px bg-slate-700 flex-shrink-0" />

        {/* Domain links — fills remaining space, scrollable if screen too narrow */}
        <div className="flex-1 min-w-0 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1 w-max">
            {domains.map((domain) => {
              const colors = domainColors[domain.colorKey];
              const isActive = active === domain.id;
              return (
                <button
                  key={domain.id}
                  onClick={() => scrollTo(domain.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? `${colors.bg} ${colors.text} border ${colors.border}`
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} />
                  <span className="hidden sm:inline text-slate-500 font-mono">D{domain.number}</span>
                  <span>{domain.shortTitle}</span>
                  <span
                    className={`hidden xl:inline text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isActive ? colors.badge : "bg-slate-800 text-slate-500"
                    }`}
                  >
                    {domain.weight}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="h-5 w-px bg-slate-700 flex-shrink-0" />

        {/* Quick Ref — always visible, pinned right */}
        <button
          onClick={() => scrollTo("quickref")}
          className={`flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
            active === "quickref"
              ? "bg-orange-500/20 text-orange-400 border border-orange-500/50"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
          }`}
        >
          <span className="text-orange-400">⚡</span>
          Quick Ref
        </button>

      </div>
    </nav>
  );
}
