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
  Hotel,
  ShoppingCart,
  GraduationCap,
  Layers,
  MessageSquare
} from "lucide-react";

const projectTypes = [
  {
    id: "corporate",
    icon: Building2,
    name: "Corporate & MSME",
    desc: "For Gaya manufacturing, trading & corporate services",
    baseDays: "7 - 12 Days",
    idealFor: "Brochure & Inquiry Portal",
  },
  {
    id: "hospitality",
    icon: Hotel,
    name: "Hotel & Tourism",
    desc: "For Bodh Gaya hotels, guest houses & tour operators",
    baseDays: "10 - 15 Days",
    idealFor: "Direct Room Booking & Multi-Language",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    name: "E-Commerce Store",
    desc: "For Gaya retail merchants & Manpur textiles",
    baseDays: "14 - 21 Days",
    idealFor: "Online Catalog & UPI Payment Checkout",
  },
  {
    id: "coaching",
    icon: GraduationCap,
    name: "Education & Coaching",
    desc: "For Gaya competitive coaching centers & academies",
    baseDays: "10 - 14 Days",
    idealFor: "Batches, Notice Board & Online Admission",
  },
  {
    id: "custom",
    icon: Layers,
    name: "Custom Web App",
    desc: "Purpose-built client portals & booking engines",
    baseDays: "21 - 35 Days",
    idealFor: "Dynamic Database & Secure Auth",
  },
];

const featureAddons = [
  { id: "whatsapp", label: "WhatsApp Direct Lead Engine", tag: "High Leads", recommended: true },
  { id: "payment", label: "Indian Payment Gateway (UPI)", tag: "Instant Pay", recommended: false },
  { id: "multilang", label: "Multi-Language Support (EN/HI)", tag: "Bodh Gaya", recommended: false },
  { id: "seo", label: "Schema.org & Technical SEO Setup", tag: "Google Rank", recommended: true },
  { id: "cms", label: "Custom Admin CMS / Content Control", tag: "Easy Edit", recommended: false },
  { id: "speed", label: "Core Web Vitals 99+ Optimization", tag: "Sub-Second", recommended: true },
];

export default function GayaCostEstimator() {
  const [selectedType, setSelectedType] = useState("corporate");
  const [selectedFeatures, setSelectedFeatures] = useState(["whatsapp", "seo", "speed"]);

  const toggleFeature = (id) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const currentType = projectTypes.find((p) => p.id === selectedType) || projectTypes[0];

  const handleWhatsAppInquiry = () => {
    const selectedFeatureLabels = featureAddons
      .filter((f) => selectedFeatures.includes(f.id))
      .map((f) => f.label)
      .join(", ");

    const text = encodeURIComponent(
      `Hi Webflora Technologies! I am looking for a website in Gaya.\n\nProject Type: ${currentType.name}\nRequired Modules: ${selectedFeatureLabels}\n\nPlease share a transparent customized quote.`
    );
    window.open(`https://wa.me/918540814729?text=${text}`, "_blank");
  };

  return (
    <div className="relative rounded-2xl sm:rounded-3xl bg-zinc-950/80 border border-white/10 backdrop-blur-2xl p-4 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-bl from-orange-600/15 via-[#FF3C00]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* Left Column: Interactive Selector */}
        <div className="lg:col-span-7 space-y-5">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Calculator size={12} />
              <span>INTERACTIVE SCOPE CALCULATOR</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
              Estimate Your Website Scope in Gaya
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Select your business model and key functional modules to view estimated delivery timelines and engineering architecture recommendations.
            </p>
          </div>

          {/* Step 1: Select Type */}
          <div className="space-y-2.5">
            <label className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-gray-400 font-bold block">
              Step 1: Choose Website Category
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {projectTypes.map((type) => {
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
                        {type.idealFor}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Select Modules */}
          <div className="space-y-2.5 pt-1">
            <label className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-gray-400 font-bold block">
              Step 2: Choose Essential Modules
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {featureAddons.map((addon) => {
                const isChecked = selectedFeatures.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleFeature(addon.id)}
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
                      <span className="truncate text-[11px] sm:text-xs">{addon.label}</span>
                    </div>
                    <span className="text-[8px] sm:text-[9px] font-mono text-gray-500 shrink-0">
                      {addon.tag}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Live Scope Summary Card */}
        <div className="lg:col-span-5 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-white/10 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-orange-400 block font-bold">
                Project Scope Summary
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
                Turnaround Time:
              </span>
              <span className="font-mono font-bold text-white text-[11px] sm:text-xs">
                {currentType.baseDays}
              </span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-white/5">
              <span className="text-gray-400 flex items-center gap-1.5 text-[11px] sm:text-xs">
                <Code2 size={12} className="text-cyan-400 shrink-0" />
                Architecture:
              </span>
              <span className="font-mono font-bold text-white text-[11px] sm:text-xs">
                Next.js 15 + React 19
              </span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-white/5">
              <span className="text-gray-400 flex items-center gap-1.5 text-[11px] sm:text-xs">
                <ShieldCheck size={12} className="text-emerald-400 shrink-0" />
                Code Rights:
              </span>
              <span className="font-mono font-bold text-emerald-400 text-[11px] sm:text-xs">
                100% Client Ownership
              </span>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="text-gray-400 text-[11px] sm:text-xs">Active Modules:</span>
              <span className="font-mono text-gray-300 font-bold text-[11px] sm:text-xs">
                {selectedFeatures.length} Modules Active
              </span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-black/60 border border-white/5 space-y-1">
            <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block font-bold">
              Included In Every Webflora Build
            </span>
            <p className="text-[10px] sm:text-[11px] text-gray-300 leading-normal">
              Zero template dependencies, full mobile responsive QA, JSON-LD Schema.org SEO, SSL setup, and 12-month technical maintenance.
            </p>
          </div>

          <div className="pt-1 space-y-2">
            <button
              type="button"
              onClick={handleWhatsAppInquiry}
              className="w-full py-3 px-3.5 rounded-xl bg-gradient-to-r from-[#FF3C00] via-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-[0_0_20px_rgba(255,60,0,0.35)] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <MessageSquare size={15} />
              <span>Get WhatsApp Quote</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#contact"
              className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-medium text-[11px] sm:text-xs transition-colors flex items-center justify-center gap-1"
            >
              <span>Or Submit Inquiry via Email</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
