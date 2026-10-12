"use client";

import React, { useState } from "react";
import {
  Smartphone,
  Layers,
  Zap,
  ShieldCheck,
  Bell,
  Cpu,
  Database,
  ArrowRight,
  Sparkles,
  WifiOff,
  Lock,
  Compass
} from "lucide-react";

export default function GayaAppHeroWidget() {
  const [activeTab, setActiveTab] = useState("simulator"); // 'simulator' | 'stack' | 'vitals'

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
              <span>app-engine.apk / .ipa</span>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-1 bg-zinc-900/90 p-0.5 sm:p-1 rounded-xl border border-white/5 text-[10px] sm:text-xs">
            <button
              type="button"
              onClick={() => setActiveTab("simulator")}
              className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                activeTab === "simulator"
                  ? "bg-[#FF3C00] text-white shadow-md shadow-[#FF3C00]/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Smartphone size={12} />
              <span>Preview</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("stack")}
              className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                activeTab === "stack"
                  ? "bg-[#FF3C00] text-white shadow-md shadow-[#FF3C00]/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Layers size={12} />
              <span>Stack</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("vitals")}
              className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                activeTab === "vitals"
                  ? "bg-[#FF3C00] text-white shadow-md shadow-[#FF3C00]/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Zap size={12} />
              <span>Vitals</span>
            </button>
          </div>
        </div>

        {/* Dynamic Body */}
        <div className="p-3.5 sm:p-5 min-h-[320px] flex flex-col justify-between">
          
          {/* TAB 1: INTERACTIVE APP PREVIEW SIMULATOR */}
          {activeTab === "simulator" && (
            <div className="space-y-3 animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold">
                  Cross-Platform App UI Preview
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                  iOS & Android Ready
                </span>
              </div>

              {/* App Shell Mockup */}
              <div className="p-3 rounded-2xl bg-zinc-900/90 border border-white/10 space-y-2.5 text-left">
                {/* Phone Header */}
                <div className="flex items-center justify-between text-xs pb-2 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-[#FF3C00] flex items-center justify-center text-white font-black text-[10px]">
                      WF
                    </div>
                    <div>
                      <div className="text-white font-bold leading-none text-xs">Gaya Business Suite</div>
                      <div className="text-[9px] text-gray-400 font-mono">React Native Core</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <Bell size={13} className="text-orange-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                </div>

                {/* Quick Action Cards in Phone View */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="text-[10px] font-mono text-gray-400">BOOKINGS / ORDERS</div>
                    <div className="text-sm font-black text-white">Direct Checkout</div>
                    <div className="text-[9px] text-emerald-400 font-mono">UPI & Razorpay</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="text-[10px] font-mono text-gray-400">PUSH NOTIFICATIONS</div>
                    <div className="text-sm font-black text-white">Instant Alerts</div>
                    <div className="text-[9px] text-orange-400 font-mono">FCM & APNs</div>
                  </div>
                </div>

                {/* Simulated Module Status */}
                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-gray-300 font-medium">Offline Data Sync Engine</span>
                  <span className="text-emerald-400 font-mono text-[10px]">SQLite / WatermelonDB</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TECH STACK ARCHITECTURE */}
          {activeTab === "stack" && (
            <div className="space-y-2.5 animate-in fade-in duration-300 text-left">
              <div className="flex items-center justify-between pb-1.5 border-b border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold">
                  Mobile Engineering Technology Stack
                </span>
                <span className="text-[9px] font-mono text-gray-400">Verified Capabilities</span>
              </div>

              <div className="space-y-1.5">
                <div className="p-2 sm:p-2.5 rounded-xl bg-zinc-900/80 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                      <Cpu size={14} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">React Native & Flutter</div>
                      <div className="text-[9px] text-gray-400 font-mono">Single Codebase for Android & iOS</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Cross-Platform
                  </span>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-zinc-900/80 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <Database size={14} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Node.js & Express REST APIs</div>
                      <div className="text-[9px] text-gray-400 font-mono">Secure Cloud Backend & MongoDB</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    High Concurrency
                  </span>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-zinc-900/80 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                      <Lock size={14} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">JWT & Firebase Phone Auth</div>
                      <div className="text-[9px] text-gray-400 font-mono">SMS OTP Verification & Encrypted Storage</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    Secure Auth
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: APP VITALS & STORE READINESS */}
          {activeTab === "vitals" && (
            <div className="space-y-3 animate-in fade-in duration-300 text-left">
              <div className="flex items-center justify-between pb-1.5 border-b border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold">
                  Quality Assurance & Performance Vitals
                </span>
                <span className="text-[9px] font-mono text-emerald-400">Play Store & App Store Ready</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-xl bg-zinc-900/80 border border-white/5">
                  <div className="text-[10px] font-mono text-gray-400">FRAME RATE</div>
                  <div className="text-base font-black text-white mt-0.5">60 FPS Smooth</div>
                  <div className="text-[9px] text-emerald-400 font-mono">Zero Scroll Stutter</div>
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-900/80 border border-white/5">
                  <div className="text-[10px] font-mono text-gray-400">BUNDLE SIZE</div>
                  <div className="text-base font-black text-white mt-0.5">Under 25 MB</div>
                  <div className="text-[9px] text-amber-400 font-mono">Optimized ProGuard</div>
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-900/80 border border-white/5">
                  <div className="text-[10px] font-mono text-gray-400">OFFLINE SUPPORT</div>
                  <div className="text-base font-black text-white mt-0.5">Cached Data</div>
                  <div className="text-[9px] text-cyan-400 font-mono">Local State Sync</div>
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-900/80 border border-white/5">
                  <div className="text-[10px] font-mono text-gray-400">API LATENCY</div>
                  <div className="text-base font-black text-white mt-0.5">&lt; 150ms Response</div>
                  <div className="text-[9px] text-purple-400 font-mono">Edge CDN Powered</div>
                </div>
              </div>
            </div>
          )}

          {/* Footer Terminal Status Bar */}
          <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={12} className="text-emerald-400" />
              100% Complete Source Code Ownership
            </span>
            <span className="text-gray-500">Patna HQ → Gaya Delivery</span>
          </div>

        </div>
      </div>
    </div>
  );
}
