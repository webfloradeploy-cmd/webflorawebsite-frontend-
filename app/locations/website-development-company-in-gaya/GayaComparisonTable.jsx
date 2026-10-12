"use client";

import React from "react";
import { Check, X, Shield, Zap, Sparkles, AlertCircle } from "lucide-react";

const comparisonData = [
  {
    feature: "Load Performance & Speed",
    traditional: "3 to 6+ seconds (Slow WordPress/PHP plugins, heavy bloat)",
    webflora: "Sub-second (<0.8s) via Next.js 15 SSR & Edge Caching",
  },
  {
    feature: "Mobile Experience on 4G/5G",
    traditional: "Clunky responsive adaptations, distorted menus",
    webflora: "100% fluid mobile-first touch UI with instant transitions",
  },
  {
    feature: "Security & Vulnerabilities",
    traditional: "Frequent database breaches, outdated plugin hacks",
    webflora: "Zero exposed database ports, static attack-surface immunity",
  },
  {
    feature: "Technical SEO & Schema",
    traditional: "Basic auto-generated tags, poor crawlability",
    webflora: "Full JSON-LD structured schemas, semantic HTML5, Core Web Vitals 99+",
  },
  {
    feature: "Source Code Ownership",
    traditional: "Locked inside proprietary page builders or retainers",
    webflora: "100% full source code and asset handover upon deployment",
  },
  {
    feature: "Scalability for E-commerce & Portals",
    traditional: "Slows down and crashes as inventory or traffic expands",
    webflora: "Serverless edge architecture easily handles thousands of concurrent users",
  },
];

export default function GayaComparisonTable() {
  return (
    <div className="relative rounded-2xl sm:rounded-3xl bg-zinc-950/80 border border-white/10 backdrop-blur-2xl p-4 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-orange-500/10 via-[#FF3C00]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6 sm:space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
            <Sparkles size={12} />
            <span>ARCHITECTURAL COMPARISON</span>
          </div>
          <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Why Gaya Businesses Upgrade to Webflora
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
            See how custom React and Next.js engineering compares against outdated template builders used by traditional local agencies.
          </p>
        </div>

        {/* Desktop View (Table Layout) */}
        <div className="hidden md:block rounded-2xl border border-white/10 overflow-hidden bg-black/40">
          <div className="grid grid-cols-12 bg-zinc-900/90 border-b border-white/10 p-4 text-xs font-mono uppercase tracking-wider font-bold">
            <div className="col-span-4 text-gray-400">
              Evaluation Metric
            </div>
            <div className="col-span-4 text-red-400/90 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/60" />
              <span>Generic Templates</span>
            </div>
            <div className="col-span-4 text-[#FF3C00] flex items-center gap-1.5 font-black">
              <span className="w-2 h-2 rounded-full bg-[#FF3C00] animate-pulse" />
              <span>Webflora Next.js</span>
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-12 p-4 items-center hover:bg-white/[0.02] transition-colors gap-4"
              >
                <div className="col-span-4 font-bold text-white text-xs sm:text-sm">
                  {row.feature}
                </div>
                <div className="col-span-4 text-xs text-gray-400 flex items-start gap-2">
                  <X size={15} className="text-red-500 shrink-0 mt-0.5" />
                  <span>{row.traditional}</span>
                </div>
                <div className="col-span-4 text-xs text-gray-200 font-medium flex items-start gap-2 bg-[#FF3C00]/5 p-2.5 rounded-xl border border-[#FF3C00]/20">
                  <Check size={15} className="text-[#FF3C00] shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-white">{row.webflora}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View (Card-Based Comparison) */}
        <div className="md:hidden space-y-3">
          {comparisonData.map((row, index) => (
            <div
              key={index}
              className="p-3.5 rounded-xl bg-black/60 border border-white/10 space-y-2.5"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs font-bold text-white tracking-tight">
                  {row.feature}
                </span>
                <span className="text-[9px] font-mono uppercase text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded">
                  Criterion #{index + 1}
                </span>
              </div>

              {/* Webflora advantage */}
              <div className="p-2.5 rounded-lg bg-orange-500/10 border border-orange-500/20 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase font-bold text-[#FF3C00]">
                  <Check size={12} strokeWidth={3} />
                  <span>Webflora Next.js 15:</span>
                </div>
                <p className="text-xs text-white font-medium pl-4 leading-relaxed">
                  {row.webflora}
                </p>
              </div>

              {/* Generic limitation */}
              <div className="p-2 rounded-lg bg-zinc-900/40 border border-white/5 space-y-0.5">
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-gray-400">
                  <X size={12} className="text-red-500" />
                  <span>Generic Templates:</span>
                </div>
                <p className="text-[11px] text-gray-400 pl-4 leading-relaxed">
                  {row.traditional}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom takeaway pill */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/60 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <Shield size={15} className="text-emerald-400 shrink-0" />
            <span className="text-[11px] sm:text-xs">Every website is custom engineered without bloated themes or third-party license lock-ins.</span>
          </div>
          <a
            href="#contact"
            className="text-[#FF3C00] hover:text-orange-400 font-bold whitespace-nowrap inline-flex items-center gap-1 font-mono tracking-tight text-[11px] sm:text-xs"
          >
            Schedule Assessment →
          </a>
        </div>
      </div>
    </div>
  );
}
