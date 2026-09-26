"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const softwareProducts = [
  {
    id: "attendance-software",
    category: "ATTENDANCE & HRMS",
    title: "Smart QR Code Attendance Management Software",
    href: "/attendance-management-software",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    icon: "solar:qr-code-bold-duotone",
    accentGlow: "group-hover:border-amber-500/40",
    description:
      "Enterprise QR-code and biometric attendance tracking system engineered for coaching institutes, schools, clinics, and corporate offices in Bihar with zero proxy logs.",
    features: [
      "Dynamic real-time QR code generation & GPS geofencing",
      "Automated daily WhatsApp & SMS parent/staff alerts",
      "Biometric hardware & multi-device sync integration",
      "Monthly payroll attendance logs with overtime calculation"
    ],
    metric: "99.8% On-Time Log Accuracy",
    cta: "Explore Attendance Software"
  },
  {
    id: "ehr-software",
    category: "HEALTHCARE & CLINIC",
    title: "Electronic Health Records (EHR) & Clinic Software",
    href: "/electronic-health-records-software",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    icon: "solar:health-bold-duotone",
    accentGlow: "group-hover:border-emerald-500/40",
    description:
      "NABH-ready hospital, clinic, and diagnostic laboratory management software with automated OPD/IPD intake, electronic prescriptions, and pharmacy billing.",
    features: [
      "Digital patient OPD registration & token queue displays",
      "Comprehensive EHR/EMR medical history & lab reports",
      "Pharmacy batch inventory & GST invoice generation",
      "WhatsApp automated diagnostic report delivery"
    ],
    metric: "NABH / HIPAA Standard",
    cta: "Explore Healthcare EHR"
  },
  {
    id: "custom-erp",
    category: "ENTERPRISE SOFTWARE",
    title: "Custom ERP Software Development in Patna",
    href: "/it-company-in-patna/software-development-company-in-patna",
    badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    icon: "solar:layers-bold-duotone",
    accentGlow: "group-hover:border-blue-500/40",
    description:
      "End-to-end enterprise ERP architecture built for wholesale distributors, manufacturers, and multi-branch networks across Bihar with full source code handover.",
    features: [
      "Centralized multi-location inventory & warehouse tracking",
      "Purchase order workflows & supplier billing ledgers",
      "Role-Based Access Control (RBAC) with granular permissions",
      "100% source code ownership with zero monthly per-user fees"
    ],
    metric: "100% Source Code Ownership",
    cta: "Explore Custom ERP"
  },
  {
    id: "trading-crm",
    category: "B2B TRADING & FLEET",
    title: "B2B Goods Trading & Logistics CRM Suite",
    href: "/it-company-in-patna/software-development-company-in-patna",
    badgeColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    icon: "solar:delivery-bold-duotone",
    accentGlow: "group-hover:border-orange-500/40",
    description:
      "Specialized operations CRM developed for goods trading enterprises (like Brijrani & LogiSafe) featuring live driver dispatch, load status tracking, and automated trade ledgers.",
    features: [
      "Distributor order ingestion & live inventory deduction",
      "Driver route navigation & delivery consignment manifests",
      "Real-time GPS parcel and shipment tracking pipelines",
      "Automated WhatsApp delivery updates & GST invoice sync"
    ],
    metric: "Zero Manual Reconciliation",
    cta: "Explore Trading CRM"
  },
  {
    id: "ecommerce-software",
    category: "ECOMMERCE & POS",
    title: "Custom eCommerce Web & Invoicing System",
    href: "/ecommerce-website-development",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    icon: "solar:cart-large-bold-duotone",
    accentGlow: "group-hover:border-cyan-500/40",
    description:
      "Ultra-fast Next.js direct-to-consumer online stores and counter POS billing systems with instant UPI payment gateway checkout and automated inventory synchronization.",
    features: [
      "Sub-second Next.js storefront loading under 500ms",
      "One-click UPI, credit card, and Razorpay checkout",
      "Real-time multi-warehouse stock deduction & catalog sync",
      "Automated thermal receipt & GST invoice printing"
    ],
    metric: "Sub-500ms Checkout Speed",
    cta: "Explore eCommerce Systems"
  },
  {
    id: "ai-automation",
    category: "AI & WORKFLOW",
    title: "AI Chatbots & Autonomous CRM Automations",
    href: "/it-company-in-patna/ai-chatbot-company-in-patna",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    icon: "solar:cpu-bold-duotone",
    accentGlow: "group-hover:border-purple-500/40",
    description:
      "Custom conversational AI assistants and n8n autonomous pipelines integrated with your business database to qualify enquiries, resolve support tickets, and route leads 24/7.",
    features: [
      "Trained on custom enterprise PDFs, FAQs & website data",
      "WhatsApp Business API automated customer conversations",
      "Real-time lead qualification & CRM auto-assignment",
      "Zero human latency with 24/7 instant response guarantee"
    ],
    metric: "84% Automated Lead Capture",
    cta: "Explore AI Chatbots"
  }
];

export default function SoftwareProductsShowcase() {
  return (
    <section id="software-products" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030303] relative overflow-hidden border-t border-white/5">
      {/* Background ambient radial lighting */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 10%, rgba(255, 59, 0, 0.08) 0%, transparent 55%), radial-gradient(circle at 90% 60%, rgba(59, 130, 246, 0.06) 0%, transparent 50%)"
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 mb-4">
            <span className="text-orange-400 text-xs">⚡</span>
            <span className="text-[11px] font-mono font-bold tracking-widest text-orange-300 uppercase">
              Enterprise Software Suite • Patna &amp; Bihar
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white uppercase font-display leading-[1.1]">
            Custom Software &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#FF3B00] to-red-500">
              Enterprise Platforms
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            From QR-code attendance and hospital EHR software to B2B trading CRMs and animal feed manufacturing ERPs, we build production-ready digital systems with 100% source code ownership.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {[
              { label: "Attendance Software", href: "/attendance-management-software" },
              { label: "Hospital EHR Software", href: "/electronic-health-records-software" },
              { label: "Custom ERP Patna", href: "/it-company-in-patna/software-development-company-in-patna" },
              { label: "eCommerce Systems", href: "/ecommerce-website-development" },
              { label: "AI Chatbots", href: "/it-company-in-patna/ai-chatbot-company-in-patna" }
            ].map((pill, pIdx) => (
              <Link
                key={pIdx}
                href={pill.href}
                className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-300 hover:text-white border border-white/10 text-xs font-medium transition-all"
              >
                {pill.label} →
              </Link>
            ))}
          </div>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {softwareProducts.map((p) => (
            <div
              key={p.id}
              className={`group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-white/10 ${p.accentGlow} hover:bg-zinc-900/40 transition-all duration-300 shadow-2xl`}
            >
              <div>
                {/* Card Top: Category Badge + Icon */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[10px] font-mono font-bold uppercase tracking-wider ${p.badgeColor}`}>
                    {p.category}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-orange-400 transition-colors">
                    <Icon icon={p.icon} className="text-lg" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-orange-300 transition-colors tracking-tight font-display mb-3">
                  <Link href={p.href} className="hover:underline">
                    {p.title}
                  </Link>
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                  {p.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                    Key Features:
                  </span>
                  {p.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-200 leading-relaxed">
                      <Icon icon="solar:check-circle-bold" className="text-orange-400 shrink-0 mt-0.5 text-sm" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Metric Badge */}
                <div className="mb-5 p-2.5 rounded-lg bg-black/60 border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-[10px] font-mono uppercase text-neutral-400 font-semibold">Standard:</span>
                  <span className="text-xs font-mono font-bold text-orange-300">{p.metric}</span>
                </div>

                {/* Card Action Link */}
                <Link
                  href={p.href}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-[#d93200] border border-white/10 hover:border-[#d93200] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(217,50,0,0.3)]"
                >
                  <span>{p.cta}</span>
                  <Icon icon="solar:arrow-right-up-linear" className="text-sm" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
