"use client";

import React, { useState } from "react";
import {
  Calculator,
  Check,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Hotel,
  ShoppingBag,
  GraduationCap,
  Stethoscope,
  Building,
  Briefcase,
  Target,
  Globe2,
  MousePointerClick,
  Share2,
  MapPin,
  BarChart3,
  MessageSquare
} from "lucide-react";

const industries = [
  {
    id: "hospitality",
    name: "Hospitality & Bodh Gaya Tourism",
    icon: Hotel,
    focus: "Hotel bookings, meditation tours & international pilgrim search",
    defaultChannels: ["google-ads", "local-seo", "landing-page"],
    recommendedStrategy: "High-intent Google Search campaigns for seasonal travelers + multi-lingual landing pages + optimized Google Business Profile."
  },
  {
    id: "retail",
    name: "Retail & Local Commerce",
    icon: ShoppingBag,
    focus: "Store footfall, festival offers & WhatsApp product inquiries",
    defaultChannels: ["meta-ads", "local-seo"],
    recommendedStrategy: "Local radius Meta advertising for seasonal offers + Google Map Pack optimization for nearby shoppers."
  },
  {
    id: "education",
    name: "Education & Coaching Institutes",
    icon: GraduationCap,
    focus: "Student admissions, demo class registrations & parent inquiries",
    defaultChannels: ["google-ads", "meta-ads", "landing-page"],
    recommendedStrategy: "Targeted admission cycle campaigns across Gaya & Magadh division + instant lead generation forms + follow-up automation."
  },
  {
    id: "healthcare",
    name: "Healthcare, Clinics & Labs",
    icon: Stethoscope,
    focus: "Appointment requests, doctor profile discoverability & lab tests",
    defaultChannels: ["local-seo", "google-ads"],
    recommendedStrategy: "Ethical local SEO for treatments & specialties + verified Google Business reviews + fast click-to-call mobile experience."
  },
  {
    id: "realestate",
    name: "Real Estate & Builders",
    icon: Building,
    focus: "High-ticket property inquiries, site visit bookings & investor leads",
    defaultChannels: ["meta-ads", "google-ads", "landing-page"],
    recommendedStrategy: "High-definition video walkthrough ads on Meta + Google search intent targeting + dedicated high-converting project microsites."
  },
  {
    id: "services",
    name: "Professional & B2B Services",
    icon: Briefcase,
    focus: "Corporate contracts, business consultations & qualified leads",
    defaultChannels: ["google-ads", "seo"],
    recommendedStrategy: "Search intent SEO for corporate service terms + targeted Google Ads + transparent case study proof."
  }
];

const channelOptions = [
  { id: "local-seo", label: "Local SEO & Google Business 3-Pack", icon: MapPin, tag: "High Local Discovery" },
  { id: "google-ads", label: "Google Search Ads (PPC)", icon: MousePointerClick, tag: "Immediate High-Intent" },
  { id: "meta-ads", label: "Instagram & Facebook Paid Ads", icon: Share2, tag: "Visual Storytelling" },
  { id: "seo", label: "Organic SEO & Content Authority", icon: Globe2, tag: "Long-Term Equity" },
  { id: "landing-page", label: "High-Conversion Mobile Landing Page", icon: Target, tag: "Conversion Multiplier" },
];

export default function GayaMarketingScopeEstimator() {
  const [selectedIndustry, setSelectedIndustry] = useState("hospitality");
  const [selectedChannels, setSelectedChannels] = useState(["google-ads", "local-seo", "landing-page"]);
  const [primaryGoal, setPrimaryGoal] = useState("leads");

  const currentIndustry = industries.find((i) => i.id === selectedIndustry) || industries[0];

  const toggleChannel = (id) => {
    setSelectedChannels((prev) =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter((c) => c !== id) : prev) : [...prev, id]
    );
  };

  const handleIndustrySelect = (ind) => {
    setSelectedIndustry(ind.id);
    setSelectedChannels(ind.defaultChannels);
  };

  const handleWhatsAppAction = () => {
    const channelNames = channelOptions
      .filter((c) => selectedChannels.includes(c.id))
      .map((c) => c.label)
      .join(", ");

    const text = encodeURIComponent(
      `Hello Webflora Technologies! I am looking for digital marketing services in Gaya.\n\nIndustry: ${currentIndustry.name}\nPrimary Goal: ${primaryGoal === "leads" ? "Qualified Inbound Leads & Calls" : primaryGoal === "footfall" ? "Local Footfall & Maps" : "Brand Awareness & Reach"}\nSelected Channels: ${channelNames}\n\nPlease share a customized strategy proposal and timeline.`
    );
    window.open(`https://wa.me/918540814729?text=${text}`, "_blank");
  };

  return (
    <div className="relative rounded-2xl sm:rounded-3xl bg-zinc-950/80 border border-white/10 backdrop-blur-2xl p-4 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-orange-600/15 via-[#FF3C00]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6 sm:space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400 mb-1">
              <Calculator size={12} />
              <span>INTERACTIVE CAMPAIGN PLANNER</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Gaya Marketing Strategy & Channel Estimator
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Select your business sector and growth goals to receive a tailored digital marketing roadmap.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center px-3 py-1.5 rounded-xl bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400">
            <ShieldCheck size={14} />
            <span>Zero Lock-in Contract</span>
          </div>
        </div>

        {/* Step 1: Select Industry */}
        <div className="space-y-3">
          <label className="text-xs font-mono uppercase tracking-wider text-gray-300 font-bold block">
            Step 1: Choose Your Business Sector in Gaya
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {industries.map((ind) => {
              const Icon = ind.icon;
              const isSelected = selectedIndustry === ind.id;
              return (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => handleIndustrySelect(ind)}
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#FF3C00]/15 border-[#FF3C00] shadow-[0_0_20px_rgba(255,60,0,0.25)]"
                      : "bg-zinc-900/70 border-white/5 hover:border-white/15 hover:bg-zinc-900"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center ${
                        isSelected ? "bg-[#FF3C00] text-white" : "bg-white/5 text-gray-400"
                      }`}
                    >
                      <Icon size={16} />
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#FF3C00] animate-pulse" />
                    )}
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white block leading-tight">
                      {ind.name}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono line-clamp-1 mt-0.5">
                      {ind.focus}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Select Growth Channels */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono uppercase tracking-wider text-gray-300 font-bold block">
              Step 2: Recommended Marketing Channels
            </label>
            <span className="text-[10px] font-mono text-gray-400">Select multiple channels</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5">
            {channelOptions.map((channel) => {
              const Icon = channel.icon;
              const isChecked = selectedChannels.includes(channel.id);
              return (
                <button
                  key={channel.id}
                  type="button"
                  onClick={() => toggleChannel(channel.id)}
                  className={`p-3 rounded-xl border text-left transition-all duration-200 flex items-center gap-3 cursor-pointer ${
                    isChecked
                      ? "bg-zinc-900 border-[#FF3C00]/60 shadow-[0_0_15px_rgba(255,60,0,0.15)]"
                      : "bg-zinc-900/40 border-white/5 hover:border-white/10 hover:bg-zinc-900/70"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center shrink-0 transition-colors ${
                      isChecked ? "bg-[#FF3C00] text-white" : "border border-white/20 bg-white/5"
                    }`}
                  >
                    {isChecked && <Check size={12} strokeWidth={3} />}
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-bold text-white block truncate">
                      {channel.label}
                    </span>
                    <span className="text-[9px] font-mono text-orange-400/90 block">
                      {channel.tag}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Calculated Strategic Output Box */}
        <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-zinc-900/90 to-black border border-white/10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/5">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#FF3C00]" />
              <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                Tailored Growth Strategy for {currentIndustry.name}
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <Clock size={12} /> Setup: 5-7 Days
              </span>
              <span>•</span>
              <span className="text-gray-300">Bi-Weekly Reporting</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
            {currentIndustry.recommendedStrategy}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="text-[11px] font-mono text-gray-400">
              <span className="text-white font-bold">{selectedChannels.length} Channels Selected</span> • Includes conversion tracking, creative design & weekly optimization.
            </div>

            <button
              type="button"
              onClick={handleWhatsAppAction}
              className="px-5 py-3 rounded-full bg-gradient-to-r from-[#FF3C00] via-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(255,60,0,0.35)] flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <MessageSquare size={14} />
              <span>Get Custom Marketing Proposal</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
