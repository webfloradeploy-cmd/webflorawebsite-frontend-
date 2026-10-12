"use client";

import React, { useState } from "react";
import {
  Code2,
  Database,
  Layers,
  Cpu,
  Shield,
  Zap,
  Server,
  Workflow,
  CheckCircle2,
  Laptop,
  Users,
  LineChart,
  Lock,
  ArrowRight
} from "lucide-react";

export default function GayaSoftwareHeroWidget() {
  const [activeTab, setActiveTab] = useState("architecture"); // 'architecture' | 'dashboard' | 'automation'

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Ambient background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-600/25 via-[#FF3C00]/30 to-amber-500/15 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

      {/* Main Glassmorphic Terminal Container */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-zinc-950/90 border border-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
        
        {/* Window Title Bar */}
        <div className="flex items-center justify-between px-3.5 py-2.5 sm:px-5 sm:py-3.5 border-b border-white/10 bg-black/60">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/90 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/90 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/90 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <div className="hidden sm:flex items-center gap-1.5 ml-3 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>enterprise-core.sys</span>
            </div>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="flex items-center gap-1 bg-zinc-900/90 p-0.5 sm:p-1 rounded-xl border border-white/5 text-[10px] sm:text-xs">
            <button
              type="button"
              onClick={() => setActiveTab("architecture")}
              className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                activeTab === "architecture"
                  ? "bg-[#FF3C00] text-white shadow-md shadow-[#FF3C00]/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Layers size={12} />
              <span>Architecture</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("dashboard")}
              className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                activeTab === "dashboard"
                  ? "bg-[#FF3C00] text-white shadow-md shadow-[#FF3C00]/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Laptop size={12} />
              <span>CRM/ERP</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("automation")}
              className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                activeTab === "automation"
                  ? "bg-[#FF3C00] text-white shadow-md shadow-[#FF3C00]/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Workflow size={12} />
              <span>AI/Auto</span>
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Body */}
        <div className="p-3.5 sm:p-5 min-h-[320px] flex flex-col justify-between">
          
          {/* TAB 1: ENTERPRISE SOFTWARE ARCHITECTURE */}
          {activeTab === "architecture" && (
            <div className="space-y-3 animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold">
                  Modular Multi-Tier Software Stack
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Production Ready
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-left">
                <div className="p-2.5 rounded-xl bg-zinc-900/70 border border-white/5 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                    <Laptop size={13} className="text-[#FF3C00]" />
                    <span>Frontend Tier</span>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-normal">
                    React, Next.js & TypeScript with modular UI component design.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-900/70 border border-white/5 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                    <Server size={13} className="text-cyan-400" />
                    <span>Backend Tier</span>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-normal">
                    Node.js & Express RESTful APIs with microservice flexibility.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-900/70 border border-white/5 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                    <Database size={13} className="text-amber-400" />
                    <span>Data & Storage</span>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-normal">
                    PostgreSQL / MongoDB with structured indexing & backup sync.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-900/70 border border-white/5 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                    <Shield size={13} className="text-emerald-400" />
                    <span>Security & Auth</span>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-normal">
                    Role-based access controls (RBAC), JWT sessions & SSL encryption.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CRM & ERP SIMULATION */}
          {activeTab === "dashboard" && (
            <div className="space-y-3 animate-in fade-in duration-300">
              <div className="p-3 rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF3C00]" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white font-bold">
                      Business Operations Dashboard
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-gray-400">v2.4 Live</span>
                </div>

                <div className="grid grid-cols-3 gap-1.5 text-center">
                  <div className="p-2 rounded-lg bg-black/50 border border-white/5">
                    <span className="text-xs font-mono font-bold text-white block">Active</span>
                    <span className="text-[8px] font-mono text-gray-500 uppercase">Customer CRM</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/50 border border-white/5">
                    <span className="text-xs font-mono font-bold text-emerald-400 block">Synced</span>
                    <span className="text-[8px] font-mono text-gray-500 uppercase">Inventory / ERP</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/50 border border-white/5">
                    <span className="text-xs font-mono font-bold text-orange-400 block">Automated</span>
                    <span className="text-[8px] font-mono text-gray-500 uppercase">Billing & Tax</span>
                  </div>
                </div>

                <div className="space-y-1 pt-1 text-[11px] text-gray-300">
                  <div className="flex items-center justify-between py-0.5 border-b border-white/5">
                    <span className="text-gray-400">Order Routing:</span>
                    <span className="text-emerald-400 font-mono">Real-time status</span>
                  </div>
                  <div className="flex items-center justify-between py-0.5">
                    <span className="text-gray-400">User Roles:</span>
                    <span className="text-white font-mono">Admin / Manager / Staff</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: AI AUTOMATION WORKFLOWS */}
          {activeTab === "automation" && (
            <div className="space-y-3 animate-in fade-in duration-300">
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/10 text-center space-y-1">
                <span className="text-[9px] font-mono uppercase tracking-widest text-orange-400 font-bold block">
                  Practical Business Automation
                </span>
                <h4 className="text-xs font-bold text-white">
                  Intelligent Task & Notification Workflows
                </h4>
              </div>

              <div className="space-y-1.5">
                {[
                  { title: "Lead Routing Automation", desc: "Instantly routes web inquiries to sales reps via WhatsApp & email" },
                  { title: "AI Document Processing", desc: "Extracts key data fields from bills, forms, and client applications" },
                  { title: "Multi-System Data Sync", desc: "Keeps inventory, accounts, and order databases synchronized" },
                ].map((item, i) => (
                  <div key={i} className="p-2 rounded-lg bg-black/50 border border-white/5 flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-[#FF3C00] shrink-0 mt-0.5" />
                    <div className="min-w-0 text-left">
                      <span className="text-xs font-bold text-white block">{item.title}</span>
                      <span className="text-[10px] text-gray-400 leading-tight block">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Status Indicators */}
          <div className="pt-2.5 mt-2 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-gray-400">
            <span className="flex items-center gap-1 text-gray-300">
              <Zap size={12} className="text-[#FF3C00]" />
              Scalable Core
            </span>
            <span className="text-gray-600">|</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <Lock size={12} />
              Enterprise RBAC Security
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
