"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Search,
  MousePointerClick,
  Share2,
  MapPin,
  BarChart3,
  Users,
  Target,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Globe2
} from "lucide-react";

export default function GayaMarketingHeroWidget() {
  const [activeTab, setActiveTab] = useState("vitals"); // 'vitals' | 'channels' | 'funnel'

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Ambient background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-600/25 via-[#FF3C00]/30 to-amber-500/15 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

      {/* Main Glassmorphic Container */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-zinc-950/90 border border-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
        
        {/* Window Title Bar */}
        <div className="flex items-center justify-between px-3.5 py-2.5 sm:px-5 sm:py-3.5 border-b border-white/10 bg-black/60">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/90 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/90 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/90 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <div className="hidden sm:flex items-center gap-1.5 ml-3 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>growth-engine.live</span>
            </div>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="flex items-center gap-1 bg-zinc-900/90 p-0.5 sm:p-1 rounded-xl border border-white/5 text-[10px] sm:text-xs">
            <button
              type="button"
              onClick={() => setActiveTab("vitals")}
              className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                activeTab === "vitals"
                  ? "bg-[#FF3C00] text-white shadow-md shadow-[#FF3C00]/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <BarChart3 size={12} />
              <span>Vitals</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("channels")}
              className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                activeTab === "channels"
                  ? "bg-[#FF3C00] text-white shadow-md shadow-[#FF3C00]/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Globe2 size={12} />
              <span>Channels</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("funnel")}
              className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                activeTab === "funnel"
                  ? "bg-[#FF3C00] text-white shadow-md shadow-[#FF3C00]/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Target size={12} />
              <span>Funnel</span>
            </button>
          </div>
        </div>

        {/* Dynamic Body */}
        <div className="p-3.5 sm:p-5 min-h-[320px] flex flex-col justify-between">
          
          {/* TAB 1: CAMPAIGN VITALS */}
          {activeTab === "vitals" && (
            <div className="space-y-3 animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold">
                  Live Marketing Metrics Dashboard
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                  Real-time Data
                </span>
              </div>

              {/* 4 Stat Cards */}
              <div className="grid grid-cols-2 gap-2 text-left">
                <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/80 border border-white/5">
                  <div className="flex items-center justify-between text-gray-400 text-[10px] font-mono">
                    <span>TOTAL IMPRESSIONS</span>
                    <TrendingUp size={11} className="text-emerald-400" />
                  </div>
                  <div className="text-lg sm:text-xl font-black text-white mt-1">184.2K</div>
                  <div className="text-[9px] text-emerald-400 font-mono mt-0.5 flex items-center gap-0.5">
                    <ArrowUpRight size={10} /> +38% Regional Reach
                  </div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/80 border border-white/5">
                  <div className="flex items-center justify-between text-gray-400 text-[10px] font-mono">
                    <span>AVG. CLICK RATE</span>
                    <MousePointerClick size={11} className="text-amber-400" />
                  </div>
                  <div className="text-lg sm:text-xl font-black text-white mt-1">4.85%</div>
                  <div className="text-[9px] text-amber-400 font-mono mt-0.5">High Intent Search</div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/80 border border-white/5">
                  <div className="flex items-center justify-between text-gray-400 text-[10px] font-mono">
                    <span>QUALIFIED ENQUIRIES</span>
                    <Users size={11} className="text-[#FF3C00]" />
                  </div>
                  <div className="text-lg sm:text-xl font-black text-white mt-1">340+</div>
                  <div className="text-[9px] text-[#FF3C00] font-mono mt-0.5">Verified Phone & Lead Forms</div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/80 border border-white/5">
                  <div className="flex items-center justify-between text-gray-400 text-[10px] font-mono">
                    <span>BLENDED ROAS</span>
                    <Sparkles size={11} className="text-purple-400" />
                  </div>
                  <div className="text-lg sm:text-xl font-black text-white mt-1">3.8x</div>
                  <div className="text-[9px] text-purple-400 font-mono mt-0.5">Campaign Performance</div>
                </div>
              </div>

              {/* Progress Tracker */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-gray-300">Conversion Optimization Index</span>
                  <span className="text-[#FF3C00] font-bold">96.4% Efficiency</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-500 via-[#FF3C00] to-red-600 h-1.5 rounded-full w-[96%]" />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CHANNEL MATRIX */}
          {activeTab === "channels" && (
            <div className="space-y-2.5 animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-1.5 border-b border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold">
                  Omni-Channel Acquisition Grid
                </span>
                <span className="text-[9px] font-mono text-gray-400">Gaya & Bodh Gaya</span>
              </div>

              <div className="space-y-1.5 text-left">
                <div className="p-2 sm:p-2.5 rounded-xl bg-zinc-900/80 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                      <Search size={14} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Google Organic Search (SEO)</div>
                      <div className="text-[9px] text-gray-400 font-mono">High-Intent Keywords & Local Signals</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Active Rank #1-3
                  </span>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-zinc-900/80 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <MousePointerClick size={14} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Google Ads (Search & Maps)</div>
                      <div className="text-[9px] text-gray-400 font-mono">Targeted Negative Keywords & Extensions</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    Sub-Second Leads
                  </span>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-zinc-900/80 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 shrink-0">
                      <Share2 size={14} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Meta Ads (Instagram & FB)</div>
                      <div className="text-[9px] text-gray-400 font-mono">Visual Storytelling & Retargeting Audiences</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-pink-500/10 text-pink-400 border border-pink-500/20">
                    High Engagement
                  </span>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-zinc-900/80 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <MapPin size={14} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Google Business Profile (Local SEO)</div>
                      <div className="text-[9px] text-gray-400 font-mono">Map 3-Pack Optimization & Local Citations</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Direct Calls
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CONVERSION FUNNEL */}
          {activeTab === "funnel" && (
            <div className="space-y-2.5 animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-1.5 border-b border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold">
                  Data-Driven Lead Generation Funnel
                </span>
                <span className="text-[9px] font-mono text-emerald-400">Zero Vanity Metrics</span>
              </div>

              <div className="space-y-2 text-left">
                <div className="p-2.5 rounded-xl bg-zinc-900/70 border border-white/5 flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-mono text-xs font-bold text-white shrink-0">
                    1
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold text-white">Targeted Traffic Acquisition</div>
                    <div className="text-[10px] text-gray-400">Filtered high-intent searches from Gaya, Bodh Gaya & regional Bihar</div>
                  </div>
                  <span className="text-[10px] font-mono text-orange-400">Top-of-Funnel</span>
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-900/70 border border-white/5 flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-mono text-xs font-bold text-white shrink-0">
                    2
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold text-white">High-Speed Landing Experience</div>
                    <div className="text-[10px] text-gray-400">Frictionless mobile layouts with clear value propositions & proof</div>
                  </div>
                  <span className="text-[10px] font-mono text-amber-400">Mid-Funnel</span>
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-900/70 border border-white/5 flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF3C00] flex items-center justify-center font-mono text-xs font-bold text-white shrink-0">
                    3
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold text-white">Direct Enquiry Conversion</div>
                    <div className="text-[10px] text-gray-400">Direct phone calls, WhatsApp inquiries & validated CRM form leads</div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">Bottom-of-Funnel</span>
                </div>
              </div>
            </div>
          )}

          {/* Footer Terminal Status Bar */}
          <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={12} className="text-emerald-400" />
              100% Client Ad Account Ownership
            </span>
            <span className="text-gray-500">Patna HQ → Gaya Delivery</span>
          </div>

        </div>
      </div>
    </div>
  );
}
