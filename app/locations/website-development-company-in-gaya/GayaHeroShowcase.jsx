"use client";

import React, { useState } from "react";
import {
  Globe,
  Zap,
  ShieldCheck,
  Smartphone,
  Gauge,
  Code2,
  Database,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Laptop
} from "lucide-react";

export default function GayaHeroShowcase() {
  const [activeTab, setActiveTab] = useState("preview"); // 'preview' | 'architecture' | 'audit'

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Ambient background glows */}
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-600/30 via-[#FF3C00]/40 to-amber-500/20 rounded-3xl blur-2xl opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 -left-12 w-48 h-48 bg-[#FF3C00]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Glassmorphic Studio Frame */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-zinc-950/90 border border-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
        
        {/* macOS Style Window Header */}
        <div className="flex items-center justify-between px-3.5 py-2.5 sm:px-5 sm:py-3.5 border-b border-white/10 bg-black/50">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/90 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/90 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/90 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <div className="hidden sm:flex items-center gap-1.5 ml-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>webflora.com/gaya-showcase</span>
            </div>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="flex items-center gap-1 bg-zinc-900/90 p-0.5 sm:p-1 rounded-xl border border-white/5 text-[10px] sm:text-xs">
            <button
              type="button"
              onClick={() => setActiveTab("preview")}
              className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 ${
                activeTab === "preview"
                  ? "bg-[#FF3C00] text-white shadow-md shadow-[#FF3C00]/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Laptop size={12} />
              <span>Preview</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("architecture")}
              className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 ${
                activeTab === "architecture"
                  ? "bg-[#FF3C00] text-white shadow-md shadow-[#FF3C00]/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Code2 size={12} />
              <span>Stack</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("audit")}
              className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 ${
                activeTab === "audit"
                  ? "bg-[#FF3C00] text-white shadow-md shadow-[#FF3C00]/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Gauge size={12} />
              <span>99 Vitals</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display Area */}
        <div className="p-3.5 sm:p-6 min-h-[330px] flex flex-col justify-between">
          
          {/* TAB 1: LIVE PREVIEW SIMULATION */}
          {activeTab === "preview" && (
            <div className="space-y-3 sm:space-y-4 animate-in fade-in duration-300">
              {/* Simulated Website Hero Card */}
              <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-black border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-36 h-36 sm:w-44 sm:h-44 bg-gradient-to-bl from-orange-500/20 via-amber-500/10 to-transparent rounded-bl-full pointer-events-none" />
                
                <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-[#FF3C00] shrink-0" />
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-orange-400 font-bold truncate">
                      Bodh Gaya Heritage & Resort
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 ml-1">
                    Live Demo
                  </span>
                </div>

                <div className="pt-2.5 space-y-1.5">
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    Luxury Pilgrimage & Hospitality Portal
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed line-clamp-2 sm:line-clamp-none">
                    Custom Next.js booking engine with instant WhatsApp reservation, multi-currency support, and multilingual guides for Bodh Gaya tourists.
                  </p>
                </div>

                {/* Simulated Interactive Metrics inside card */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-3 mt-2.5 border-t border-white/5 text-center">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="text-xs sm:text-sm font-mono font-bold text-white block">0.65s</span>
                    <span className="text-[8px] sm:text-[9px] font-mono text-gray-500 uppercase">Load Time</span>
                  </div>
                  <div className="p-1.5 sm:p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="text-xs sm:text-sm font-mono font-bold text-emerald-400 block">+140%</span>
                    <span className="text-[8px] sm:text-[9px] font-mono text-gray-500 uppercase">Direct Leads</span>
                  </div>
                  <div className="p-1.5 sm:p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="text-xs sm:text-sm font-mono font-bold text-orange-400 block">0%</span>
                    <span className="text-[8px] sm:text-[9px] font-mono text-gray-500 uppercase">Comm. Loss</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/60 border border-white/5 flex items-center gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#FF3C00] shrink-0">
                    <Smartphone size={13} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-white block truncate">100% Mobile Fluid</span>
                    <span className="text-[10px] text-gray-400 truncate block">Touch-first interactions</span>
                  </div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/60 border border-white/5 flex items-center gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <ShieldCheck size={13} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-white block truncate">Bank-Grade SSL</span>
                    <span className="text-[10px] text-gray-400 truncate block">Zero vulnerability leaks</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE STACK */}
          {activeTab === "architecture" && (
            <div className="space-y-2.5 animate-in fade-in duration-300">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { name: "Next.js 15", cat: "SSR & Static App", tag: "Full-Stack" },
                  { name: "React 19", cat: "Component Engine", tag: "Frontend" },
                  { name: "TypeScript", cat: "Strict Type Safety", tag: "Reliability" },
                  { name: "Tailwind 4", cat: "Zero-Bloat CSS", tag: "Design" },
                  { name: "Node.js", cat: "High-Throughput", tag: "Backend" },
                  { name: "PostgreSQL", cat: "Relational DB", tag: "Database" },
                  { name: "Redis", cat: "Edge In-Memory", tag: "Caching" },
                  { name: "AWS Cloud", cat: "Global CDN", tag: "Infra" },
                  { name: "Figma UI", cat: "Custom Wireframes", tag: "Bespoke" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-zinc-900/70 border border-white/5 hover:border-[#FF3C00]/40 transition-all duration-200 group text-left"
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-wider text-gray-500 group-hover:text-[#FF3C00] transition-colors truncate">
                        {item.tag}
                      </span>
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-white block group-hover:text-orange-400 transition-colors truncate">
                      {item.name}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-gray-400 block truncate">
                      {item.cat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: LIGHTHOUSE SPEED AUDIT */}
          {activeTab === "audit" && (
            <div className="space-y-3 animate-in fade-in duration-300 py-1">
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/10 text-center space-y-0.5">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                  Audited with Google Lighthouse 12.0
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-white">
                  Real Performance for Gaya Deployments
                </h4>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { label: "Performance", score: "99", color: "text-emerald-400 border-emerald-500/40" },
                  { label: "Accessibility", score: "100", color: "text-emerald-400 border-emerald-500/40" },
                  { label: "Best Practices", score: "100", color: "text-emerald-400 border-emerald-500/40" },
                  { label: "SEO Score", score: "100", color: "text-emerald-400 border-emerald-500/40" },
                ].map((audit, i) => (
                  <div
                    key={i}
                    className="p-2 sm:p-2.5 rounded-xl bg-black/60 border border-white/5 flex flex-col items-center justify-center space-y-1"
                  >
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 ${audit.color} flex items-center justify-center bg-emerald-500/10`}>
                      <span className="font-mono text-xs sm:text-sm font-black text-white">{audit.score}</span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-medium text-gray-300 text-center leading-tight">
                      {audit.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-[10px] sm:text-xs text-gray-400 flex items-center justify-between">
                <span>FCP: <strong className="text-white">0.4s</strong></span>
                <span>Speed Index: <strong className="text-emerald-400">0.8s</strong></span>
              </div>
            </div>
          )}

          {/* Bottom Security & Handover Strip */}
          <div className="pt-2.5 mt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-gray-400">
            <span className="flex items-center gap-1 text-gray-300">
              <Zap size={12} className="text-[#FF3C00]" />
              99+ Speed
            </span>
            <span className="text-gray-600">|</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 size={12} />
              100% Code Handover
            </span>
          </div>
        </div>
      </div>

      {/* Floating Modern Accent Badges (hidden on very small screens to avoid overflow) */}
      <div className="absolute -bottom-3 -left-2 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/95 border border-white/15 backdrop-blur-xl shadow-2xl z-20">
        <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#FF3C00] to-amber-500 flex items-center justify-center text-white shadow-md shadow-[#FF3C00]/40">
          <Zap size={12} />
        </div>
        <div>
          <span className="text-[10px] font-bold text-white block">Sub-Second Delivery</span>
          <span className="text-[8px] font-mono text-gray-400">Edge Optimized</span>
        </div>
      </div>

      <div className="absolute -top-2.5 -right-2 hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 backdrop-blur-xl shadow-xl z-20">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-[9px] font-mono font-bold text-emerald-300 uppercase tracking-wider">
          MSME Verified
        </span>
      </div>
    </div>
  );
}
