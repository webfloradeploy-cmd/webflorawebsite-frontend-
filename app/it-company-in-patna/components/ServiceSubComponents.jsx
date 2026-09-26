import React from "react";
import Link from "next/link";
import SafeIcon from "./client/SafeIcon";
import { servicesData } from "../data";

/* ── 1. Problem Wrapper ── */
export const ProblemWrapper = ({ data }) => {
  if (!data?.problems || data.problems.length === 0) return null;

  return (
    <section className="py-20 px-6 relative bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Challenge list on the left */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-orange-300 font-bold tracking-[0.25em] uppercase text-xs block mb-4">
              The Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 tracking-tight leading-[1.1] uppercase text-white font-display">
              {data.problemTitle || "Market Challenges"}
            </h2>
            <div className="space-y-4">
              {data.problems.map((p, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-zinc-950/60 border border-white/10 hover:border-red-500/30 transition-all duration-300">
                  <div className="w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                    <SafeIcon icon="solar:close-circle-bold" className="text-red-500" width={16} />
                  </div>
                  <span className="text-sm text-neutral-200 font-normal leading-relaxed">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions card on the right */}
          <div className="lg:col-span-6 relative flex">
            <div className="relative w-full p-8 md:p-10 rounded-2xl bg-zinc-950/80 border border-white/10 shadow-2xl flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-6 flex items-center gap-4 text-white uppercase tracking-tight font-display">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                  <SafeIcon icon="solar:check-circle-bold" className="text-emerald-400" width={18} />
                </div>
                Our Engineered Solutions
              </h3>
              <div className="space-y-5">
                {(data.solutions || [
                  "High-performance native mobile apps engineered for speed and responsiveness",
                  "Cross-platform Flutter & React Native codebases saving up to 50% in development costs",
                  "Play Store & App Store SEO compliance guaranteeing higher organic installs",
                  "Enterprise-grade UPI & payment gateway integrations with real-time database sync",
                  "Continuous post-launch maintenance, automated crash logs, and timely OS updates"
                ]).map((s, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-orange-300 font-mono text-sm mt-0.5 font-bold">0{i + 1}</span>
                    <div className="w-full pb-3 border-b border-white/5">
                      <h4 className="text-sm md:text-base font-bold text-neutral-100">{s}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── 2. Benefits Wrapper ── */
export const BenefitsWrapper = ({ data }) => {
  if (!data?.benefits || data.benefits.length === 0) return null;

  return (
    <section id="impact" className="py-20 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-orange-300 font-bold uppercase tracking-[0.3em] mb-4 block text-xs">
              Unmatched Value
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight uppercase font-display">
              Benefits
            </h2>
          </div>
          <p className="text-base md:text-lg text-neutral-300 max-w-sm font-light">We don&apos;t just deliver services; we deliver measurable business outcomes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.benefits.map((b, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl border border-white/10 bg-[#080808] hover:border-[#FF3B00]/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-[#FF3B00] transition-colors">
                <SafeIcon icon={b.icon} width={24} />
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl sm:text-3xl font-black text-white">{b.stat}</span>
                <span className="text-[10px] font-bold text-orange-300 uppercase tracking-widest">{b.statLabel}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-white">{b.title}</h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-light">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── 3. Featured Apps Showcase Wrapper ── */
export const FeaturedAppsWrapper = ({ data }) => {
  if (!data?.featuredApps || data.featuredApps.length === 0) return null;

  return (
    <section id="featured-apps" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#030303] relative overflow-hidden border-t border-white/5">
      {/* Background ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle at 50% 15%, rgba(255, 59, 0, 0.1) 0%, transparent 60%)"
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 mb-4">
            <span className="text-orange-300 text-xs">🚀</span>
            <span className="text-[11px] font-mono font-bold tracking-widest text-orange-300 uppercase">
              Proven In Production • Patna &amp; Bihar
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white uppercase font-display max-w-3xl">
            Featured Mobile Apps{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#FF3B00] to-red-500">
              We&apos;ve Developed
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-2xl font-light">
            High-performance native and cross-platform mobile apps engineered by our expert app developers in Patna for logistics tracking, goods trading dispatch, and coaching ERPs.
          </p>
        </div>

        {/* 3-Column Apps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.featuredApps.map((app, i) => (
            <div
              key={i}
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-zinc-950/90 border border-white/10 hover:border-orange-500/40 hover:bg-zinc-900/40 transition-all duration-300 shadow-2xl"
            >
              <div>
                {/* Header: Category Badge + Status */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono font-bold uppercase tracking-wider text-orange-300">
                    <SafeIcon icon={app.icon || "solar:box-minimalistic-bold"} width={13} height={13} />
                    {app.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-semibold shrink-0">
                    ● Live in Production
                  </span>
                </div>

                {/* Title & Client */}
                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-orange-300 transition-colors tracking-tight font-display mb-2">
                  {app.title}
                </h3>
                <div className="text-xs font-mono text-neutral-400 mb-4">
                  Client: <span className="text-neutral-200 font-semibold">{app.client}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-6">
                  {app.desc}
                </p>

                {/* Key Highlights */}
                {app.highlights && (
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-white/5">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                      Key Capabilities:
                    </span>
                    {app.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-200 leading-relaxed">
                        <SafeIcon icon="solar:check-circle-bold" className="text-orange-400 shrink-0 mt-0.5" width={14} height={14} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                {/* Metrics Pill */}
                {app.metrics && (
                  <div className="mb-5 p-2.5 rounded-lg bg-black/60 border border-white/5 flex items-center justify-between text-xs">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 font-semibold">Live Metric:</span>
                    <span className="text-xs font-mono font-bold text-orange-300">{app.metrics}</span>
                  </div>
                )}

                {/* Tech Tags */}
                {app.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mb-6">
                    {app.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-white/5 text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA Action */}
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-[#d93200] border border-white/10 hover:border-[#d93200] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(217,50,0,0.3)]"
                >
                  <span>Build Similar App</span>
                  <SafeIcon icon="solar:arrow-right-up-linear" width={14} height={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── 4. Tech Stack Wrapper ── */
export const TechStackWrapper = ({ data }) => {
  if (data?.featuredApps && data.featuredApps.length > 0) {
    return <FeaturedAppsWrapper data={data} />;
  }

  if (!data?.techStack) return null;

  return (
    <section className="py-20 px-6 bg-[#030303] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-16 tracking-tight text-white uppercase font-display">
          {data.techStackTitle || (
            <>
              OUR TECH <span className="text-neutral-300">ARSENAL.</span>
            </>
          )}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {data.techStack.map((tech, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-white/10 bg-white/[0.01] hover:border-[#FF3B00]/40 hover:bg-neutral-900/40 transition-all duration-300 cursor-default flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 flex items-center justify-center text-white">
                <SafeIcon icon={tech.icon} width={36} height={36} />
              </div>
              <span className="text-xs font-bold text-neutral-200 uppercase tracking-wider">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── 4. SubServices Wrapper ── */
export const SubServicesWrapper = ({ data }) => {
  if (!data?.subServices || data.subServices.length === 0) return null;

  return (
    <section className="py-20 px-6 bg-[#030303] relative border-y border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <span className="text-orange-300 font-bold uppercase tracking-[0.25em] mb-3 block text-xs">
            Comprehensive Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight uppercase leading-tight font-display">
            {data.subServicesTitle || "Features"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.subServices.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-zinc-950/60 border border-white/10 hover:border-[#FF3B00]/30 hover:bg-zinc-900/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 group-hover:border-[#FF3B00]/40 transition-colors">
                  <SafeIcon icon={service.icon} width={18} className="text-white group-hover:text-[#FF3B00] transition-colors" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#FF3B00] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-bold text-neutral-300 group-hover:text-white transition-colors cursor-pointer uppercase tracking-widest">
                <span>Learn More</span>
                <SafeIcon icon="solar:arrow-right-line-duotone" width={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── 5. Suitable For Wrapper ── */
export const SuitableForWrapper = ({ data }) => {
  if (!data?.suitableFor || data.suitableFor.length === 0) return null;

  return (
    <section className="py-20 px-6 bg-black relative border-b border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <div className="mb-12 text-center">
          <span className="text-orange-300 font-bold uppercase tracking-[0.25em] mb-3 block text-xs">
            Target Audience
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight uppercase leading-tight font-display">
            Who Should Choose <span className="text-neutral-300">This Service?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {data.suitableFor.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-zinc-950/60 border border-white/10 hover:border-[#FF3B00]/30 hover:bg-zinc-900/30 transition-all duration-300 flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 group-hover:border-[#FF3B00]/40 transition-colors">
                <SafeIcon icon={item.icon} width={18} className="text-white group-hover:text-[#FF3B00] transition-colors" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#FF3B00] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-neutral-300 font-light leading-relaxed">
                {item.reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── 6. Industries Wrapper ── */
export const IndustriesWrapper = ({ data }) => {
  const getIndustryContent = (title) => {
    const name = (title || "").toLowerCase();

    if (name.includes("website") || name.includes("web design")) {
      return [
        { industry: "Coaching Institutes", title: "Website Design for Coaching Institutes", desc: "Custom educational portals with online registrations, course catalogs, student achievements, and local SEO.", icon: "solar:backpack-bold-duotone" },
        { industry: "Hospitals", title: "Website Design for Hospitals", desc: "Healthcare websites with doctor directories, clinical departments, appointment requests, and patient guidance.", icon: "solar:health-bold-duotone" },
        { industry: "Real Estate", title: "Website Design for Real Estate", desc: "Property catalogs with advanced search filters, interactive mapping, virtual tours, and lead capture forms.", icon: "solar:home-bold-duotone" },
        { industry: "Schools", title: "Website Design for Schools", desc: "School portals equipped with notice boards, academic calendars, registration forms, and galleries.", icon: "solar:square-academic-cap-bold-duotone" },
        { industry: "Restaurants", title: "Website Design for Restaurants", desc: "Digital menus and reservation scheduling, operating hours, food highlights, and map directions.", icon: "solar:cup-hot-bold-duotone" },
        { industry: "Manufacturing Companies", title: "Website Design for Manufacturing Companies", desc: "Industrial B2B web development showcasing product catalogs, ISO certifications, and RFQ forms.", icon: "solar:settings-bold-duotone" }
      ];
    } else if (name.includes("mobile") || name.includes("app")) {
      return [
        { industry: "Coaching Institutes", title: "Mobile App Development for Coaching Institutes", desc: "Custom coaching apps with student logins, live virtual classes, mock exams, and fee payment gateways.", icon: "solar:backpack-bold-duotone" },
        { industry: "Hospitals", title: "Mobile App Development for Hospitals", desc: "Clinical mobile apps for booking doctor appointments, remote video calls, and lab report downloads.", icon: "solar:health-bold-duotone" },
        { industry: "Real Estate", title: "Mobile App Development for Real Estate", desc: "Property apps with dynamic geolocation sorting, real-time agent messaging, and interactive maps.", icon: "solar:home-bold-duotone" },
        { industry: "Schools", title: "Mobile App Development for Schools", desc: "Parent-teacher school apps showing student homework, report cards, fee payments, and bus tracking.", icon: "solar:square-academic-cap-bold-duotone" },
        { industry: "Restaurants", title: "Mobile App Development for Restaurants", desc: "Food ordering apps with digital menu navigation, cart checkouts, secure payments, and live order tracking.", icon: "solar:cup-hot-bold-duotone" },
        { industry: "Manufacturing Companies", title: "Mobile App Development for Manufacturing Companies", desc: "Operations mobile apps to monitor factory machinery, delivery logs, employee shifts, and inventory.", icon: "solar:settings-bold-duotone" }
      ];
    } else {
      return [
        { industry: "Coaching Institutes", title: "Software Solutions for Coaching Institutes", desc: "Coaching ERP systems handling student registrations, automated fee alerts, and batch management.", icon: "solar:backpack-bold-duotone" },
        { industry: "Hospitals", title: "Software Solutions for Hospitals", desc: "Hospital Management Software coordinating OPD/IPD registers, patient EHRs, and pharmacy supplies.", icon: "solar:health-bold-duotone" },
        { industry: "Real Estate", title: "Software Solutions for Real Estate", desc: "Real estate CRM systems managing broker commissions, customer history, and property allotments.", icon: "solar:home-bold-duotone" },
        { industry: "Schools", title: "Software Solutions for Schools", desc: "School ERP platforms managing student records, library books, employee payroll, and exam results.", icon: "solar:square-academic-cap-bold-duotone" },
        { industry: "Restaurants", title: "Software Solutions for Restaurants", desc: "Point of Sale billing software managing kitchen order tickets, recipe stocks, and GST transactions.", icon: "solar:cup-hot-bold-duotone" },
        { industry: "Manufacturing Companies", title: "Software Solutions for Manufacturing Companies", desc: "Manufacturing ERP databases coordinating supply chain assets, BOM, and production pipelines.", icon: "solar:settings-bold-duotone" }
      ];
    }
  };

  const industries = getIndustryContent(data?.title || "");

  return (
    <section className="py-20 px-6 bg-[#030303] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-14 text-center max-w-3xl mx-auto space-y-3">
          <span className="text-orange-300 font-bold uppercase tracking-[0.3em] block text-xs">
            Who We Serve
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight uppercase font-display">
            Industries <span className="text-[#FF3B00]">We Serve</span>
          </h2>
          <p className="text-neutral-300 text-sm md:text-base font-light leading-relaxed">
            We engineer specialized digital systems tailored to meet the strict technical demands of key commercial sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item) => (
            <div key={item.industry} className="group p-6 md:p-8 rounded-2xl bg-zinc-950/60 border border-white/10 hover:border-[#FF3B00]/30 hover:bg-zinc-900/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-5 group-hover:border-[#FF3B00]/40 transition-colors">
                  <SafeIcon icon={item.icon} width={22} className="text-white group-hover:text-[#FF3B00] transition-colors" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#FF3B00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-neutral-300 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── 7. Process Wrapper ── */
export const ProcessWrapper = ({ data }) => {
  if (!data?.process || data.process.length === 0) return null;

  return (
    <section className="py-20 px-6 bg-[#050505] relative border-y border-white/5 overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <span className="text-orange-300 font-bold uppercase tracking-[0.25em] mb-3 block text-xs">
            How We Work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight uppercase leading-tight font-display">
            Development Process
          </h2>
        </div>

        <div className="space-y-4">
          {data.process.map((step, index) => (
            <div key={index} className="group p-5 md:p-6 rounded-xl bg-zinc-950/60 border border-white/10 hover:border-[#FF3B00]/30 transition-all duration-300 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-zinc-900 border border-[#FF3B00]/40 flex items-center justify-center text-xs font-mono text-[#FF3B00] font-bold shrink-0 mt-0.5">
                {index + 1}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-[#FF3B00] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── 8. Pricing Wrapper ── */
export const PricingWrapper = ({ data }) => {
  const getPricingPackages = (title) => {
    const name = (title || "").toLowerCase();

    if (name.includes("mobile") || name.includes("app")) {
      return [
        {
          name: "MVP Mobile App",
          subtitle: "For Startups & Early Tests",
          price: "₹80,000",
          period: "one-time",
          features: [
            "Cross-Platform (Flutter / React Native)",
            "Clean UI/UX & User Authentication",
            "Basic REST API Database Connection",
            "Push Notifications Setup",
            "Play Store & App Store Deployment"
          ],
          popular: false
        },
        {
          name: "Business App",
          subtitle: "For Scaling Companies",
          price: "₹1,40,000",
          period: "one-time",
          features: [
            "Advanced Role Dashboards & Live Chat",
            "UPI & Razorpay Payment Gateways",
            "Real-Time Geolocation / Order Tracking",
            "Offline Data Caching & Auto-Sync",
            "6 Months Dedicated Tech Support"
          ],
          popular: true
        },
        {
          name: "Enterprise Ecosystem",
          subtitle: "For Full-Scale Brands",
          price: "₹2,20,000+",
          period: "based on scope",
          features: [
            "Custom Native Code Modules (Swift / Kotlin)",
            "Microservices Cloud Backend Integration",
            "Biometric Auth & High Security",
            "High-Concurrency Performance Tuning",
            "Complete Source Code Handover"
          ],
          popular: false
        }
      ];
    } else {
      return [
        {
          name: "Starter Package",
          subtitle: "Core Engineering",
          price: "₹25,000",
          period: "one-time",
          features: [
            "Modern Responsive UI Design",
            "Next.js High Performance Static Core",
            "Google Local SEO Optimization",
            "Contact & Lead Capture Forms",
            "1 Year Free SSL & Hosting Setup"
          ],
          popular: false
        },
        {
          name: "Growth Dynamic",
          subtitle: "For Growing Companies",
          price: "₹45,000",
          period: "one-time",
          features: [
            "Complete CMS / Blog Integration",
            "Dynamic Admin Dashboard",
            "WhatsApp & CRM Lead Auto-Sync",
            "Sub-1s Page Load Optimization",
            "Priority Technical Maintenance"
          ],
          popular: true
        },
        {
          name: "Enterprise Solution",
          subtitle: "For Large Brands",
          price: "₹75,000+",
          period: "based on scope",
          features: [
            "Custom Web Applications & Portals",
            "Multi-User Role Permissions",
            "Advanced API & ERP Sync Pipelines",
            "Dedicated Cloud Architecture (AWS)",
            "100% Source Code Ownership & SLA"
          ],
          popular: false
        }
      ];
    }
  };

  const packages = data?.pricing || getPricingPackages(data?.title || "");

  return (
    <section className="py-20 px-6 bg-[#030303] relative border-y border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <div className="mb-12">
          <span className="text-orange-300 font-bold uppercase tracking-[0.25em] mb-3 block text-xs">
            Simple & Transparent
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight uppercase leading-tight font-display">
            Pricing Plans
          </h2>
          <p className="text-neutral-300 text-xs sm:text-sm font-light max-w-lg mx-auto mt-3 leading-relaxed">
            Select the perfect package custom-tailored for your growth milestones. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`p-6 md:p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${pkg.popular
                ? "bg-[#0c0c0e] border-[#FF3B00] shadow-[0_0_40px_rgba(255,59,0,0.15)]"
                : "bg-zinc-950/60 border-white/10 hover:border-white/20"
                }`}
            >
              <div>
                <div className="flex justify-between items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white uppercase">{pkg.name}</h3>
                    <p className="text-xs text-orange-300 font-mono font-semibold">{pkg.subtitle}</p>
                  </div>
                  {pkg.popular && (
                    <span className="px-2.5 py-0.5 bg-[#FF3B00] rounded-full text-black text-[10px] font-black uppercase tracking-wider shadow-sm">
                      Popular
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1 pb-4 mb-5 border-b border-white/10">
                  <span className="text-2xl sm:text-3xl font-black text-white">{pkg.price}</span>
                  {pkg.period && <span className="text-xs text-neutral-300 font-mono">/{pkg.period.replace("per ", "")}</span>}
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300 font-light mb-6">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <SafeIcon icon="lucide:check" width={14} className="text-orange-300 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold uppercase tracking-wider text-xs transition-all ${pkg.popular
                  ? "bg-[#d93200] hover:bg-[#c22d00] text-white shadow-lg shadow-[rgba(217,50,0,0.25)]"
                  : "bg-white/5 border border-white/10 hover:border-white/30 text-white"
                  }`}
              >
                <span>{pkg.popular ? "Request Quote" : "Get Started"}</span>
                <SafeIcon icon="lucide:arrow-right" width={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── 9. Detailed Article Wrapper ── */
export const DetailedArticleWrapper = ({ data }) => {
  if (!data?.detailedArticle) return null;
  const { title, sections } = data.detailedArticle;

  return (
    <section className="py-20 px-6 bg-[#030303] relative border-y border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-10 text-center">
          <span className="text-orange-300 font-bold uppercase tracking-[0.25em] mb-2 block text-xs">
            Documentation & Guide
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase font-display">
            {title || "Overview Guide"}
          </h2>
        </div>

        <div className="space-y-6">
          {sections.map((section, idx) => (
            <div key={idx} className="p-6 md:p-8 rounded-2xl bg-zinc-950/60 border border-white/10">
              <span className="text-[10px] font-mono text-orange-300 font-bold uppercase tracking-wider block mb-2">
                Chapter 0{idx + 1}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 tracking-tight">
                {section.title}
              </h3>
              <div className="text-neutral-300 font-light leading-relaxed text-xs sm:text-sm space-y-3">
                {Array.isArray(section.paragraphs) ? (
                  section.paragraphs.map((p, pi) => (
                    <p key={pi}>{p}</p>
                  ))
                ) : (
                  <p>{section.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── 10. Service Comparison Wrapper ── */
export const ServiceComparisonWrapper = ({ data }) => {
  const getPageKey = (data) => {
    if (!data || !data.title) return "website";
    const titleLower = data.title.toLowerCase();
    if (titleLower.includes("marketing") || titleLower.includes("seo") || titleLower.includes("digital")) return "marketing";
    if (titleLower.includes("chatbot") || titleLower.includes("bot") || titleLower.includes("chat")) return "chatbot";
    if (titleLower.includes("app") || titleLower.includes("mobile")) return "mobile";
    if (titleLower.includes("ai") || titleLower.includes("automation")) return "ai";
    if (titleLower.includes("software")) return "software";
    return "website";
  };

  const comparisonData = {
    "mobile": [
      { feature: "Performance", custom: "Native UI rendering (Flutter/React Native), 60FPS smoothness", standard: "WebView wrappers, slow loading web frames" },
      { feature: "Offline Support", custom: "Local database caching, offline operation sync", standard: "Requires active internet for all basic screens" },
      { feature: "UX/UI Design", custom: "Custom micro-animations, tailored platform flows", standard: "Outdated material design templates" },
      { feature: "Security", custom: "Biometric auth, secure keychain storage, AES-256", standard: "Basic plaintext data, vulnerable endpoints" }
    ],
    "website": [
      { feature: "Tech Stack", custom: "Next.js, React, Tailwind CSS, Vercel/AWS", standard: "Generic PHP, heavy WordPress, cheap hosting templates" },
      { feature: "Performance", custom: "Under 1s load time, 95+ Core Web Vitals score", standard: "3s+ load time, bloated plugins, poor speed optimization" },
      { feature: "SEO & Rankings", custom: "Dynamic schemas, structured AEO glossary, metadata", standard: "Basic meta tags, no semantic structure, poor indexing" },
      { feature: "Ownership", custom: "100% source code ownership, zero monthly fees", standard: "Locked theme, platform dependencies, vendor fees" }
    ]
  };

  const headingData = {
    "mobile": { title: "Native Mobile App", vs: "WebView App Wrappers", label: "Optimized Core Performance vs. Fused Frames", customCol: "Webflora Native App", standardCol: "WebView Wrappers" },
    "website": { title: "Custom Next.js Web", vs: "Generic WordPress Theme", label: "Tailored Speed vs. Bloated Code", customCol: "Webflora Custom Web", standardCol: "Bloated Templates" }
  };

  const pageKey = getPageKey(data);
  const rows = comparisonData[pageKey] || comparisonData["website"];
  const headers = headingData[pageKey] || headingData["website"];

  return (
    <section className="py-20 px-6 bg-[#030303] relative border-b border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-orange-300 font-bold uppercase tracking-[0.25em] mb-3 block text-xs">
            Architecture Comparison
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight uppercase font-display">
            {headers.title} <span className="text-neutral-300">vs. {headers.vs}</span>
          </h2>
          <p className="text-neutral-300 text-sm mt-2 font-light">
            {headers.label}
          </p>
        </div>

        <div className="w-full bg-neutral-950/80 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-neutral-300 border-collapse">
              <thead>
                <tr className="border-b border-white/10 font-mono">
                  <th className="p-4 bg-white/[0.02] text-neutral-200 font-bold text-xs uppercase tracking-wider w-1/4">Feature</th>
                  <th className="p-4 bg-[#FF3B00]/10 border-x border-[#FF3B00]/20 text-white font-bold text-xs uppercase tracking-wider text-center w-2/5">
                    {headers.customCol}
                  </th>
                  <th className="p-4 bg-white/[0.01] text-neutral-300 font-bold text-xs uppercase tracking-wider text-center w-1/3">{headers.standardCol}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-4 font-semibold text-white font-mono text-xs uppercase tracking-wider">{row.feature}</td>
                    <td className="p-4 border-x border-[#FF3B00]/10 bg-[#FF3B00]/[0.02] text-white font-medium text-center">
                      <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                        <SafeIcon icon="solar:check-circle-bold" width={14} /> {row.custom}
                      </span>
                    </td>
                    <td className="p-4 text-neutral-300 text-center text-xs">{row.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── 11. Service Glossary Wrapper ── */
export const ServiceGlossaryWrapper = ({ data }) => {
  const getPageKey = (data) => {
    if (!data || !data.title) return "website";
    const titleLower = data.title.toLowerCase();
    if (titleLower.includes("app") || titleLower.includes("mobile")) return "mobile";
    return "website";
  };

  const glossaryData = {
    "mobile": [
      { term: "Cross-Platform Framework", def: "Single codebase framework (e.g. Flutter/React Native) compiled directly to native ARM code on both iOS and Android.", icon: "solar:code-square-bold-duotone" },
      { term: "API Integration", def: "Connecting the mobile application frontend to databases and secure third-party billing gates via secure REST/GraphQL endpoints.", icon: "solar:database-bold-duotone" },
      { term: "State Management", def: "Managing active app data states (user sessions, carts, filters) locally for instant, glitch-free screen renders.", icon: "solar:cpu-bolt-bold-duotone" }
    ],
    "website": [
      { term: "Headless Architecture", def: "Decoupling the frontend user interface from the backend database for unmatched speed, scalability, and security.", icon: "solar:code-square-bold-duotone" },
      { term: "Core Web Vitals", def: "A set of specific Google metrics used to measure user experience, including loading performance, interactivity, and visual stability.", icon: "solar:database-bold-duotone" },
      { term: "Static Site Generation (SSG)", def: "Pre-rendering frontend pages into HTML files at build time to deliver instant loading speeds and serverless scale.", icon: "solar:cpu-bolt-bold-duotone" }
    ]
  };

  const pageKey = getPageKey(data);
  const terms = glossaryData[pageKey] || glossaryData["website"];

  return (
    <section className="py-20 px-6 bg-black relative border-b border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-orange-300 font-bold uppercase tracking-[0.25em] mb-3 block text-xs">
            Terminology Glossary
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight uppercase font-display">
            {data?.title} <span className="text-neutral-300">Glossary</span>
          </h2>
          <p className="text-neutral-300 text-sm mt-2 font-light">
            Understand key industry terms that drive premium digital systems and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {terms.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-zinc-950/60 hover:border-[#FF3B00]/30 transition-all duration-300 flex flex-col justify-start">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-300 mb-4">
                <SafeIcon icon={item.icon} width={20} />
              </div>
              <h3 className="text-white font-bold text-base tracking-tight mb-2">{item.term}</h3>
              <p className="text-neutral-300 font-light text-xs sm:text-sm leading-relaxed">
                {item.def}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── 12. Other Services Wrapper ── */
export const OtherServicesWrapper = ({ currentService }) => {
  const otherServices = Object.entries(servicesData)
    .filter(([key, service]) => service.title !== currentService)
    .slice(0, 4)
    .map(([key, service]) => ({
      ...service,
      slug: key,
    }));

  if (otherServices.length === 0) return null;

  return (
    <section className="py-20 px-6 bg-[#030303] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-[10px] font-bold uppercase tracking-widest mb-4">
            Discover More
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tighter leading-tight mb-3 font-display">
            WIDEN YOUR <span className="text-neutral-300">HORIZON.</span>
          </h2>
          <p className="text-base text-neutral-300 font-light leading-relaxed">
            From intelligence to infrastructure, we provide the full spectrum of digital evolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {otherServices.map((service, index) => (
            <Link
              key={service.slug}
              href={`/it-company-in-patna/${service.slug}`}
              className="group p-6 rounded-2xl bg-neutral-900/40 border border-white/10 hover:border-[#FF3B00]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center mb-4 text-white group-hover:text-[#FF3B00] transition-colors">
                  <SafeIcon
                    icon={service.subServices?.[0]?.icon || "solar:widget-linear"}
                    width={20}
                  />
                </div>
                <h3 className="font-bold text-white text-base mb-2">
                  {service.title}
                </h3>
                <p className="text-neutral-300 font-light text-xs line-clamp-3 leading-relaxed">
                  {service.subtext}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-neutral-300 group-hover:text-white font-bold uppercase tracking-wider">
                <span>View Details</span>
                <SafeIcon icon="solar:arrow-right-up-linear" width={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
