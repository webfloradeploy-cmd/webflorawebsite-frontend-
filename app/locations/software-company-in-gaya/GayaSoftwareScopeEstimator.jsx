"use client";

import React, { useState } from "react";
import {
  Calculator,
  Check,
  Clock,
  Code2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  Database,
  Layers,
  Workflow,
  Laptop,
  MessageSquare,
  Lock
} from "lucide-react";

const softwareTypes = [
  {
    id: "custom",
    icon: Code2,
    name: "Custom Software",
    desc: "Bespoke internal management tools & operational workflows",
    baseDays: "3 - 6 Weeks",
    stack: "React, Node.js & Database",
  },
  {
    id: "webapp",
    icon: Laptop,
    name: "Web Application",
    desc: "Browser-based portals with authentication & client dashboards",
    baseDays: "2 - 5 Weeks",
    stack: "Next.js, Node.js & Edge API",
  },
  {
    id: "crm-erp",
    icon: Building2,
    name: "CRM / ERP System",
    desc: "Customer tracking, inventory, order management & reporting",
    baseDays: "4 - 8 Weeks",
    stack: "PostgreSQL, Express & React",
  },
  {
    id: "saas",
    icon: Layers,
    name: "SaaS Product MVP",
    desc: "Multi-tenant platforms with user accounts & subscription logic",
    baseDays: "6 - 10 Weeks",
    stack: "Next.js, Node.js & Cloud DB",
  },
  {
    id: "automation",
    icon: Workflow,
    name: "AI & Automation",
    desc: "Repetitive workflow automation, lead routing & API connectors",
    baseDays: "1 - 3 Weeks",
    stack: "Python/Node.js & Webhooks",
  },
];

const moduleOptions = [
  { id: "rbac", label: "Role-Based Access Control (RBAC)", tag: "Security", recommended: true },
  { id: "reports", label: "Custom Analytics & Excel/PDF Reports", tag: "Data Insights", recommended: true },
  { id: "api", label: "Third-Party API Integration (Payment/SMS)", tag: "Integration", recommended: false },
  { id: "database", label: "High-Capacity Database & Automated Backups", tag: "PostgreSQL/Mongo", recommended: true },
  { id: "notifications", label: "WhatsApp & Email Notification Triggers", tag: "Alerts", recommended: false },
  { id: "audit", label: "Audit Logs & Activity History Tracking", tag: "Compliance", recommended: false },
];

export default function GayaSoftwareScopeEstimator() {
  const [selectedType, setSelectedType] = useState("custom");
  const [selectedModules, setSelectedModules] = useState(["rbac", "reports", "database"]);

  const toggleModule = (id) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const currentType = softwareTypes.find((s) => s.id === selectedType) || softwareTypes[0];

  const handleWhatsAppInquiry = () => {
    const selectedModuleLabels = moduleOptions
      .filter((m) => selectedModules.includes(m.id))
      .map((m) => m.label)
      .join(", ");

    const text = encodeURIComponent(
      `Hello Webflora Technologies! I am looking for software development for my business in Gaya.\n\nSoftware Type: ${currentType.name}\nRequired Capabilities: ${selectedModuleLabels}\n\nPlease help me plan this project and provide a requirement assessment.`
    );
    window.open(`https://wa.me/918540814729?text=${text}`, "_blank");
  };

  return (
    <div className="relative rounded-2xl sm:rounded-3xl bg-zinc-950/80 border border-white/10 backdrop-blur-2xl p-4 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-orange-600/15 via-[#FF3C00]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* Left Column: Interactive Type & Module Selector */}
        <div className="lg:col-span-7 space-y-5">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Calculator size={12} />
              <span>INTERACTIVE SOFTWARE SCOPE PLANNER</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
              Plan Your Software Project in Gaya
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Select your software requirements and core functional modules to see recommended architectural approaches and estimated implementation milestones.
            </p>
          </div>

          {/* Step 1: Software Classification */}
          <div className="space-y-2.5">
            <label className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-gray-400 font-bold block">
              Step 1: Choose Software Category
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {softwareTypes.map((type) => {
                const IconComponent = type.icon;
                const isSelected = selectedType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={`p-3 rounded-xl border text-left transition-all duration-200 flex items-start gap-2.5 cursor-pointer ${
                      isSelected
                        ? "bg-gradient-to-r from-orange-500/15 to-transparent border-[#FF3C00] shadow-[0_0_20px_rgba(255,60,0,0.15)]"
                        : "bg-zinc-900/40 border-white/5 hover:border-white/15 hover:bg-zinc-900/70"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "bg-[#FF3C00] text-white shadow-md shadow-[#FF3C00]/40"
                          : "bg-white/5 text-gray-400"
                      }`}
                    >
                      <IconComponent size={16} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-white block truncate">
                        {type.name}
                      </span>
                      <span className="text-[10px] text-gray-400 line-clamp-1">
                        {type.desc}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: System Capabilities */}
          <div className="space-y-2.5 pt-1">
            <label className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-gray-400 font-bold block">
              Step 2: Choose Essential Capabilities
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {moduleOptions.map((mod) => {
                const isChecked = selectedModules.includes(mod.id);
                return (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => toggleModule(mod.id)}
                    className={`px-3 py-2 rounded-xl border text-left transition-all duration-200 flex items-center justify-between text-xs cursor-pointer ${
                      isChecked
                        ? "bg-orange-500/10 border-orange-500/40 text-white"
                        : "bg-zinc-900/30 border-white/5 text-gray-400 hover:text-gray-200 hover:border-white/15"
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate pr-1">
                      <div
                        className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 transition-colors ${
                          isChecked ? "bg-[#FF3C00] text-white" : "border border-gray-600"
                        }`}
                      >
                        {isChecked && <Check size={10} strokeWidth={3} />}
                      </div>
                      <span className="truncate text-[11px] sm:text-xs">{mod.label}</span>
                    </div>
                    <span className="text-[8px] sm:text-[9px] font-mono text-gray-500 shrink-0">
                      {mod.tag}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Scope Summary Card */}
        <div className="lg:col-span-5 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-white/10 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-orange-400 block font-bold">
                Recommended Software Scope
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white">
                {currentType.name}
              </h4>
            </div>
            <div className="p-2 rounded-lg bg-orange-500/10 text-[#FF3C00]">
              <Sparkles size={18} />
            </div>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="flex items-center justify-between py-1 border-b border-white/5">
              <span className="text-gray-400 flex items-center gap-1.5 text-[11px] sm:text-xs">
                <Clock size={12} className="text-orange-400 shrink-0" />
                Estimated Milestone:
              </span>
              <span className="font-mono font-bold text-white text-[11px] sm:text-xs">
                {currentType.baseDays}
              </span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-white/5">
              <span className="text-gray-400 flex items-center gap-1.5 text-[11px] sm:text-xs">
                <Code2 size={12} className="text-cyan-400 shrink-0" />
                Technical Stack:
              </span>
              <span className="font-mono font-bold text-white text-[11px] sm:text-xs">
                {currentType.stack}
              </span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-white/5">
              <span className="text-gray-400 flex items-center gap-1.5 text-[11px] sm:text-xs">
                <ShieldCheck size={12} className="text-emerald-400 shrink-0" />
                Code & IP Rights:
              </span>
              <span className="font-mono font-bold text-emerald-400 text-[11px] sm:text-xs">
                100% Client Ownership
              </span>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="text-gray-400 text-[11px] sm:text-xs">Active Modules:</span>
              <span className="font-mono text-gray-300 font-bold text-[11px] sm:text-xs">
                {selectedModules.length} Modules Selected
              </span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-black/60 border border-white/5 space-y-1">
            <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block font-bold">
              Deliverables Included
            </span>
            <p className="text-[10px] sm:text-[11px] text-gray-300 leading-normal">
              Functional requirement specification, UI design mockups, end-to-end development, staging testing, deployment setup, and admin training.
            </p>
          </div>

          <div className="pt-1 space-y-2">
            <button
              type="button"
              onClick={handleWhatsAppInquiry}
              className="w-full py-3 px-3.5 rounded-xl bg-gradient-to-r from-[#FF3C00] via-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-[0_0_20px_rgba(255,60,0,0.35)] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <MessageSquare size={15} />
              <span>Discuss Requirements on WhatsApp</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#contact"
              className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-medium text-[11px] sm:text-xs transition-colors flex items-center justify-center gap-1"
            >
              <span>Or Submit Requirements via Contact Form</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
