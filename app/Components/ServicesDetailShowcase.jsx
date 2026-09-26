"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "web",
    title: "Website Development",
    subtitle: "High-Performance Next.js & Web Platforms",
    badge: "Top Web Agency in Bihar",
    href: "/it-company-in-patna/website-development-company-in-patna",
    icon: "solar:display-bold-duotone",
    accentColor: "#d93200",
    themeColor: "from-orange-500/15 via-red-500/5 to-transparent",
    glow: "rgba(217, 50, 0, 0.18)",
    textColor: "text-orange-400",
    activeBorder: "border-[#d93200]/60 bg-[#d93200]/10",
    desc: "We engineer lightning-fast, SEO-dominant websites and custom web applications powered by Next.js and React. Built from the ground up for sub-second page loads, exceptional conversions, and full source code ownership.",
    included: [
      "Custom Next.js & React Web Portals",
      "Headless & Custom Ecommerce Engines",
      "100/100 Core Web Vitals Optimization",
      "Dynamic Schema & Local SEO Architecture",
      "Responsive UI/UX with Micro-Interactions",
      "Enterprise Cloud CDN & SSL Deployment"
    ],
    stats: [
      { label: "Load Speed", val: "<0.5s", sub: "Global Edge CDN" },
      { label: "SEO Score", val: "100%", sub: "Lighthouse Verified" },
      { label: "Uptime SLA", val: "99.9%", sub: "Enterprise Hosting" }
    ]
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    subtitle: "Native iOS & Android Applications",
    badge: "Top Mobile App Company in Patna",
    href: "/it-company-in-patna/mobile-app-development-company-in-patna",
    icon: "solar:smartphone-line-duotone",
    accentColor: "#06b6d4",
    themeColor: "from-cyan-500/15 via-blue-500/5 to-transparent",
    glow: "rgba(6, 182, 212, 0.18)",
    textColor: "text-cyan-400",
    activeBorder: "border-cyan-500/60 bg-cyan-500/10",
    desc: "We build intuitive, fluid mobile applications for Android and iOS using Flutter and React Native. Engineered for high user retention, biometric security, smooth 60fps animations, and offline-first database sync.",
    included: [
      "Native iOS & Android Architecture",
      "Cross-Platform Flutter & React Native",
      "Integrated UPI & Razorpay Payment Gateways",
      "Offline Database Cache & Realtime Sync",
      "Biometric FaceID & Fingerprint Auth",
      "Play Store & App Store SEO Publishing"
    ],
    stats: [
      { label: "Smoothness", val: "60 FPS", sub: "Native Rendering" },
      { label: "Binary Size", val: "<15 MB", sub: "Lightweight Build" },
      { label: "Multi-OS", val: "iOS & Android", sub: "Single Codebase" }
    ]
  },
  {
    id: "software",
    title: "Custom Software & ERP",
    subtitle: "Enterprise Workflow & Automation Systems",
    badge: "Top Rated Software Company in Patna",
    href: "/it-company-in-patna/software-development-company-in-patna",
    icon: "solar:code-circle-bold-duotone",
    accentColor: "#3b82f6",
    themeColor: "from-blue-500/15 via-indigo-500/5 to-transparent",
    glow: "rgba(59, 130, 246, 0.18)",
    textColor: "text-blue-400",
    activeBorder: "border-blue-500/60 bg-blue-500/10",
    desc: "Tailor-made ERP, CRM, and inventory management platforms developed around your exact business logic. Eliminate recurring user license fees, automate manual bottlenecks, and maintain 100% data security.",
    included: [
      "Custom ERP & Centralized Operations",
      "Lead Tracking & Sales Pipeline CRM",
      "GST-Compliant Automated Invoicing",
      "Biometric & Smart QR Attendance Engine",
      "Role-Based Access Control (RBAC)",
      "Automated WhatsApp & SMS Notifications"
    ],
    stats: [
      { label: "Data Security", val: "AES-256", sub: "End-to-End Encrypted" },
      { label: "Ownership", val: "100%", sub: "Zero Monthly Fees" },
      { label: "Scalability", val: "Infinite", sub: "Modular Microservices" }
    ],
    specialtyLinks: [
      { name: "Attendance Software", href: "/attendance-management-software", icon: "solar:qr-code-bold" },
      { name: "Healthcare & EHR", href: "/electronic-health-records-software", icon: "solar:health-bold" },
      { name: "Custom ERP Patna", href: "/it-company-in-patna/software-development-company-in-patna", icon: "solar:layers-bold" },
      { name: "eCommerce & POS", href: "/ecommerce-website-development", icon: "solar:cart-large-bold" }
    ]
  },
  {
    id: "ai",
    title: "AI & Automation",
    subtitle: "Custom Chatbots & Automated Pipelines",
    badge: "Leading AI Agency in Bihar",
    href: "/it-company-in-patna/ai-automation-company-in-patna",
    icon: "solar:cpu-bold-duotone",
    accentColor: "#a855f7",
    themeColor: "from-purple-500/15 via-fuchsia-500/5 to-transparent",
    glow: "rgba(168, 85, 247, 0.18)",
    textColor: "text-purple-400",
    activeBorder: "border-purple-500/60 bg-purple-500/10",
    desc: "Harness modern LLMs, autonomous agents, and n8n workflow pipelines to automate customer support, qualify inbound leads instantly, and streamline multi-department business operations 24/7.",
    included: [
      "Custom AI Support & Sales Chatbots",
      "Instant WhatsApp Lead Automation",
      "Automated n8n & API Integrations",
      "Document & Invoice OCR Data Parsing",
      "Automated Follow-ups & Lead Scoring",
      "Custom LLM Fine-Tuning & Knowledge Bases"
    ],
    stats: [
      { label: "Time Saved", val: "80%", sub: "Task Automation" },
      { label: "Operation", val: "24 / 7", sub: "Zero Downtime" },
      { label: "Lead Response", val: "<30s", sub: "Instant AI Engagement" }
    ],
    specialtyLinks: [
      { name: "AI Chatbots in Patna", href: "/it-company-in-patna/ai-chatbot-company-in-patna", icon: "solar:chat-round-bold" },
      { name: "n8n Workflow Automation", href: "/it-company-in-patna/ai-automation-company-in-patna", icon: "solar:tuning-bold" }
    ]
  },
  {
    id: "marketing",
    title: "Digital Marketing & SEO",
    subtitle: "Performance Growth & Lead Generation",
    badge: "Top SEO Agency in Patna",
    href: "/it-company-in-patna/digital-marketing-agency-in-patna",
    icon: "solar:ranking-bold-duotone",
    accentColor: "#10b981",
    themeColor: "from-emerald-500/15 via-teal-500/5 to-transparent",
    glow: "rgba(16, 185, 129, 0.18)",
    textColor: "text-emerald-400",
    activeBorder: "border-emerald-500/60 bg-emerald-500/10",
    desc: "Data-driven organic SEO, Google Maps 3-Pack domination, and high-ROI paid ad campaigns designed to generate high-intent inbound customer inquiries for regional and national businesses.",
    included: [
      "Technical & Local SEO Domination",
      "Google Maps Top 3-Pack Ranking",
      "High-ROAS Google Ads (Search & Display)",
      "Targeted Meta (Facebook/Instagram) Ads",
      "Conversion Rate Optimization (CRO)",
      "Transparent Real-Time Analytics Dashboard"
    ],
    stats: [
      { label: "Target ROAS", val: "10x", sub: "Performance Campaigns" },
      { label: "Local Rank", val: "#1 3-Pack", sub: "Google Business Profile" },
      { label: "Lead Growth", val: "3x+", sub: "Verified Pipeline Boost" }
    ]
  }
];

export default function ServicesDetailShowcase() {
  const [activeTab, setActiveTab] = useState("web");

  const currentService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <section className="py-24 bg-[#030303] relative overflow-hidden border-t border-white/5">
      {/* Background Ambient Radial Glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-20 blur-[140px] transition-all duration-700 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${currentService.glow} 0%, rgba(0,0,0,0) 70%)` }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-xs text-orange-400 font-mono tracking-wider uppercase font-semibold">
            🚀 Complete Engineering Suite
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase font-display">
            What We Build & Deliver
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light max-w-2xl mx-auto">
            Explore our specialized development and growth capabilities. Every solution is custom-architected for maximum speed, security, and measurable commercial return.
          </p>
        </div>

        {/* Desktop Interface */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-stretch">

          {/* Left: Interactive Tab Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            {services.map((item) => {
              const isActive = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`group w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 cursor-pointer relative overflow-hidden ${
                    isActive
                      ? `${item.activeBorder} shadow-lg shadow-black/40 scale-[1.02]`
                      : "bg-zinc-950/40 border-white/5 text-neutral-400 hover:text-white hover:bg-zinc-900/40 hover:border-white/10"
                  }`}
                  aria-label={`Select ${item.title}`}
                >
                  {/* Left accent bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-orange-400 to-[#d93200]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive
                      ? "bg-white text-black shadow-md"
                      : "bg-white/5 text-neutral-300 group-hover:bg-white/10 group-hover:text-white"
                  }`}>
                    <Icon icon={item.icon} className="text-2xl" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-sm sm:text-base text-white truncate tracking-tight">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-neutral-400 font-light truncate mt-0.5">
                      {item.subtitle}
                    </div>
                  </div>

                  <Icon
                    icon="solar:arrow-right-linear"
                    className={`text-lg transition-transform duration-300 shrink-0 ${
                      isActive ? "text-white translate-x-1" : "text-neutral-600 group-hover:text-neutral-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Active Service Showcase Card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className={`h-full p-8 sm:p-10 rounded-3xl bg-zinc-950/90 border border-white/10 shadow-2xl backdrop-blur-2xl flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Subtle top glowing line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

                <div className="space-y-6">
                  {/* Badge and Title */}
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-orange-400 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {currentService.badge}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight flex items-center gap-3">
                      {currentService.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-200 text-sm sm:text-base font-light leading-relaxed max-w-3xl">
                    {currentService.desc}
                  </p>

                  {/* High-Impact Stat Pills */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {currentService.stats.map((st, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-center space-y-1">
                        <span className="block text-xl sm:text-2xl font-black text-white font-mono tracking-tight">
                          {st.val}
                        </span>
                        <span className="block text-xs font-bold text-neutral-200 uppercase tracking-wider">
                          {st.label}
                        </span>
                        <span className="block text-[10px] text-neutral-400 font-mono">
                          {st.sub}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Included Checklist */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-300 font-bold block">
                      Engineered Capabilities & Modules
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentService.included.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.01]">
                          <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold shrink-0">
                            ✓
                          </span>
                          <span className="text-neutral-200 text-xs sm:text-sm font-light leading-snug">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specialty Software & Solution Quick Links */}
                  {currentService.specialtyLinks && (
                    <div className="pt-4 border-t border-white/10 space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-orange-400 font-bold block">
                        Dedicated Software &amp; Portals
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {currentService.specialtyLinks.map((link, lIdx) => (
                          <Link
                            key={lIdx}
                            href={link.href}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/40 text-neutral-200 hover:text-white text-xs font-medium transition-all"
                          >
                            <Icon icon={link.icon} className="text-orange-400 text-sm" />
                            <span>{link.name}</span>
                            <span className="text-neutral-500">→</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Dual Action CTAs */}
                <div className="pt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 mt-6">
                  <Link
                    href={currentService.href}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#d93200] hover:bg-[#ff3b00] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(217,50,0,0.35)] hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <span>Explore Full Specs & Case Studies</span>
                    <Icon icon="solar:arrow-right-up-linear" className="text-base" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-white border border-white/10 text-xs font-medium uppercase tracking-wider transition-all"
                  >
                    <span>Request Custom Quote</span>
                    <Icon icon="solar:chat-round-dots-linear" className="text-sm text-orange-400" />
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Mobile Accordion Interface */}
        <div className="lg:hidden space-y-4">
          {services.map((item) => {
            const isOpen = activeTab === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-zinc-950/90 border-orange-500/30 shadow-xl"
                    : "bg-zinc-950/40 border-white/5"
                }`}
              >
                {/* Header Toggle */}
                <button
                  onClick={() => setActiveTab(isOpen ? "" : item.id)}
                  className="w-full flex justify-between items-center p-5 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isOpen ? "bg-[#d93200] text-white" : "bg-white/5 text-neutral-300"
                    }`}>
                      <Icon icon={item.icon} className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-white">{item.title}</h3>
                      <span className="text-[11px] text-neutral-400 font-light">{item.subtitle}</span>
                    </div>
                  </div>
                  <Icon
                    icon="solar:alt-arrow-down-linear"
                    className={`text-lg text-neutral-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-orange-400" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Content */}
                {isOpen && (
                  <div className="p-5 pt-0 space-y-5 border-t border-white/5">
                    <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed pt-3">
                      {item.desc}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2">
                      {item.stats.map((st, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                          <span className="block text-base font-bold text-white font-mono">{st.val}</span>
                          <span className="text-[9px] text-neutral-400 uppercase font-semibold">{st.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Checklist */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-300 font-bold block">
                        Included Modules:
                      </span>
                      <div className="space-y-1.5">
                        {item.included.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-neutral-200 font-light">
                            <span className="text-emerald-400 font-bold">✓</span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 flex flex-col gap-2.5">
                      <Link
                        href={item.href}
                        className="w-full py-3 rounded-xl bg-[#d93200] text-white font-bold uppercase tracking-wider text-xs text-center shadow-lg block"
                      >
                        Explore Details
                      </Link>
                      <Link
                        href="/contact"
                        className="w-full py-2.5 rounded-xl border border-white/10 text-neutral-300 hover:text-white font-semibold uppercase tracking-wider text-xs text-center block bg-white/[0.02]"
                      >
                        Request Consultation
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
