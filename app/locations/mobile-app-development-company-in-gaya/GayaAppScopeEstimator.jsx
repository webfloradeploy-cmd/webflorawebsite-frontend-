"use client";

import React, { useState } from "react";
import {
  Calculator,
  Check,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Layers,
  GraduationCap,
  ShoppingBag,
  Hotel,
  Stethoscope,
  Building,
  Truck,
  MessageSquare,
  Lock,
  Bell,
  CreditCard,
  Database,
  Globe2
} from "lucide-react";

const platformOptions = [
  {
    id: "cross-platform",
    title: "Cross-Platform (React Native / Flutter)",
    desc: "Single codebase running natively on both Android and iOS",
    tag: "Most Popular & Cost-Effective",
  },
  {
    id: "android",
    title: "Dedicated Android App",
    desc: "Optimized specifically for Google Play Store and Android devices",
    tag: "High Regional Penetration",
  },
  {
    id: "ios",
    title: "Dedicated iOS App",
    desc: "Engineered specifically for Apple iPhone & iPad App Store",
    tag: "Premium Audience",
  },
];

const appSectors = [
  {
    id: "education",
    name: "Coaching & Education App",
    icon: GraduationCap,
    desc: "Student accounts, video lectures, online mock tests, notices & fee records",
    recommendedFeatures: ["auth", "notifications", "admin-panel", "payments"],
  },
  {
    id: "retail",
    name: "Retail & E-Commerce App",
    icon: ShoppingBag,
    desc: "Product catalog, cart, Razorpay/UPI payment, order tracking & customer reviews",
    recommendedFeatures: ["auth", "payments", "notifications", "admin-panel"],
  },
  {
    id: "hospitality",
    name: "Hospitality & Bodh Gaya Tourism",
    icon: Hotel,
    desc: "Direct hotel room bookings, tourist guide itineraries, multi-language support",
    recommendedFeatures: ["payments", "notifications", "admin-panel"],
  },
  {
    id: "healthcare",
    name: "Clinic & Healthcare App",
    icon: Stethoscope,
    desc: "Doctor appointment slots, tele-consultation, lab report downloads & reminders",
    recommendedFeatures: ["auth", "notifications", "admin-panel"],
  },
  {
    id: "realestate",
    name: "Real Estate & Builder App",
    icon: Building,
    desc: "Project listings, floor plans, virtual tours, site visit booking & broker leads",
    recommendedFeatures: ["auth", "admin-panel", "notifications"],
  },
  {
    id: "ondemand",
    name: "On-Demand & Logistics App",
    icon: Truck,
    desc: "Service booking, live assignment, GPS tracking, invoice billing & rating",
    recommendedFeatures: ["auth", "payments", "notifications", "admin-panel"],
  },
];

const featureList = [
  { id: "auth", label: "Phone OTP & User Authentication", tag: "Security" },
  { id: "payments", label: "In-App UPI & Card Payment Gateway", tag: "Revenue" },
  { id: "notifications", label: "Push Notifications (FCM / APNs)", tag: "Engagement" },
  { id: "admin-panel", label: "Web Admin Dashboard & Analytics", tag: "Management" },
  { id: "offline", label: "Offline Mode & Local Data Caching", tag: "Performance" },
  { id: "roles", label: "Multi-Role Accounts (Admin / Staff / User)", tag: "Workflows" },
];

export default function GayaAppScopeEstimator() {
  const [selectedPlatform, setSelectedPlatform] = useState("cross-platform");
  const [selectedSector, setSelectedSector] = useState("education");
  const [selectedFeatures, setSelectedFeatures] = useState(["auth", "notifications", "admin-panel", "payments"]);

  const currentSector = appSectors.find((s) => s.id === selectedSector) || appSectors[0];
  const currentPlatform = platformOptions.find((p) => p.id === selectedPlatform) || platformOptions[0];

  const handleSectorChange = (sector) => {
    setSelectedSector(sector.id);
    setSelectedFeatures(sector.recommendedFeatures);
  };

  const toggleFeature = (id) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter((f) => f !== id) : prev) : [...prev, id]
    );
  };

  const handleWhatsAppAction = () => {
    const featuresLabel = featureList
      .filter((f) => selectedFeatures.includes(f.id))
      .map((f) => f.label)
      .join(", ");

    const text = encodeURIComponent(
      `Hello Webflora Technologies! I am planning a mobile app for my business in Gaya.\n\nApp Type: ${currentSector.name}\nTarget Platform: ${currentPlatform.title}\nSelected Modules: ${featuresLabel}\n\nPlease help me evaluate the architecture, delivery timeline, and project estimate.`
    );
    window.open(`https://wa.me/918540814729?text=${text}`, "_blank");
  };

  return (
    <div className="relative rounded-2xl sm:rounded-3xl bg-zinc-950/80 border border-white/10 backdrop-blur-2xl p-4 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-orange-600/15 via-[#FF3C00]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6 sm:space-y-8 text-left">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400 mb-1">
              <Calculator size={12} />
              <span>INTERACTIVE APP PLANNER</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Gaya Mobile App Scope & Architecture Planner
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Select your platform and target industry to receive a custom architecture breakdown.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center px-3 py-1.5 rounded-xl bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400">
            <ShieldCheck size={14} />
            <span>Full Code Ownership</span>
          </div>
        </div>

        {/* Step 1: Target Platform */}
        <div className="space-y-2.5">
          <label className="text-xs font-mono uppercase tracking-wider text-gray-300 font-bold block">
            Step 1: Choose Target Platform
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
            {platformOptions.map((plat) => {
              const isSelected = selectedPlatform === plat.id;
              return (
                <button
                  key={plat.id}
                  type="button"
                  onClick={() => setSelectedPlatform(plat.id)}
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#FF3C00]/15 border-[#FF3C00] shadow-[0_0_20px_rgba(255,60,0,0.25)]"
                      : "bg-zinc-900/70 border-white/5 hover:border-white/15 hover:bg-zinc-900"
                  }`}
                >
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white block">
                      {plat.title}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono block mt-1">
                      {plat.desc}
                    </span>
                  </div>
                  <span className="mt-3 inline-block text-[9px] font-mono text-orange-400 font-bold">
                    {plat.tag}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Choose Industry Sector */}
        <div className="space-y-2.5">
          <label className="text-xs font-mono uppercase tracking-wider text-gray-300 font-bold block">
            Step 2: Choose Application Type & Industry
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {appSectors.map((sector) => {
              const Icon = sector.icon;
              const isSelected = selectedSector === sector.id;
              return (
                <button
                  key={sector.id}
                  type="button"
                  onClick={() => handleSectorChange(sector)}
                  className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${
                    isSelected
                      ? "bg-zinc-900 border-[#FF3C00] shadow-[0_0_15px_rgba(255,60,0,0.2)]"
                      : "bg-zinc-900/50 border-white/5 hover:border-white/15 hover:bg-zinc-900"
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected ? "bg-[#FF3C00] text-white" : "bg-white/5 text-gray-400"
                    }`}
                  >
                    <Icon size={15} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-white block truncate">
                      {sector.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Required Modules */}
        <div className="space-y-2.5">
          <label className="text-xs font-mono uppercase tracking-wider text-gray-300 font-bold block">
            Step 3: Core Features & Functional Modules
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {featureList.map((feature) => {
              const isChecked = selectedFeatures.includes(feature.id);
              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => toggleFeature(feature.id)}
                  className={`p-2.5 rounded-xl border text-left transition-all duration-200 flex items-center gap-2.5 cursor-pointer ${
                    isChecked
                      ? "bg-zinc-900 border-[#FF3C00]/60 shadow-[0_0_12px_rgba(255,60,0,0.15)]"
                      : "bg-zinc-900/40 border-white/5 hover:border-white/10 hover:bg-zinc-900/70"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center shrink-0 transition-colors ${
                      isChecked ? "bg-[#FF3C00] text-white" : "border border-white/20 bg-white/5"
                    }`}
                  >
                    {isChecked && <Check size={10} strokeWidth={3} />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-medium text-white block truncate">
                      {feature.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Calculated Proposal Output */}
        <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-zinc-900/90 to-black border border-white/10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/5">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#FF3C00]" />
              <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                Project Architecture Recommendation
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <Clock size={12} /> Sprint Cycle: 4-8 Weeks
              </span>
              <span>•</span>
              <span className="text-gray-300">Play Store & App Store Support</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
            Engineered with <strong className="text-white">{currentPlatform.title}</strong> and a high-performance Node.js / Express backend. Includes {selectedFeatures.length} functional modules, API security hardening, and complete source code repository handover.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="text-[11px] font-mono text-gray-400">
              <span className="text-white font-bold">{currentSector.name}</span> • Zero third-party lock-in.
            </div>

            <button
              type="button"
              onClick={handleWhatsAppAction}
              className="px-5 py-3 rounded-full bg-gradient-to-r from-[#FF3C00] via-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(255,60,0,0.35)] flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <MessageSquare size={14} />
              <span>Get Custom App Development Estimate</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
