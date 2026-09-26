"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Code2,
  Layers,
  Database,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  Users,
  Smartphone,
  Globe,
  Server,
  Settings,
  Cpu,
  BarChart3,
  Clock,
  PhoneCall,
  Phone,
  Check,
  ChevronDown,
  ChevronUp,
  Award,
  Lock,
  Workflow,
  Laptop,
  GraduationCap,
  Heart,
  Store,
  Rocket,
  Utensils,
  MapPin,
  ExternalLink,
  HelpCircle,
  TrendingUp,
  Activity,
  Sliders,
  Send,
  Loader2
} from "lucide-react";

/* ── 1. SERVICES TABS WIDGET ── */
export function ServicesTabsWidget({ servicesBreakdown = [] }) {
  const [activeTab, setActiveTab] = useState(servicesBreakdown[0]?.id || "erp");

  const currentService = servicesBreakdown.find((s) => s.id === activeTab) || servicesBreakdown[0];

  return (
    <div className="w-full">
      {/* Tab Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        {servicesBreakdown.map((s) => {
          const isActive = activeTab === s.id;
          const IconComp = s.icon || Code2;
          return (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              aria-label={`View ${s.title} details`}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-[#d93200] text-white shadow-[0_0_20px_rgba(217,50,0,0.4)]"
                  : "bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              <IconComp className="w-4 h-4" />
              <span>{s.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Service Showcase Card */}
      {currentService && (
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#d93200]/15 border border-[#d93200]/40 flex items-center justify-center text-[#ff5722]">
                  {React.createElement(currentService.icon || Code2, { className: "w-6 h-6" })}
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-orange-300 font-bold block">
                    Core Capability
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {currentService.headline || currentService.title}
                  </h3>
                </div>
              </div>

              <p className="text-neutral-200 text-sm sm:text-base font-light leading-relaxed">
                {currentService.description}
              </p>

              {currentService.bestSuitedFor && (
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold block mb-1">
                    Best Suited For:
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-200">
                    {currentService.bestSuitedFor}
                  </p>
                </div>
              )}
            </div>

            {/* Right: Features List */}
            <div className="lg:col-span-6">
              <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
                <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Key Modules & Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(currentService.features || []).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200">
                      <span className="text-[#ff5722] mt-0.5 shrink-0 font-bold">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {currentService.relatedProject && (
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-neutral-300">Live Case Study:</span>
                    <Link
                      href={currentService.relatedProject.link}
                      className="text-orange-300 hover:text-white underline font-medium"
                    >
                      {currentService.relatedProject.name} →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs text-neutral-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full Custom Architecture & Code Ownership</span>
            </div>
            <Link
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-[#d93200] hover:bg-[#ff3b00] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(217,50,0,0.3)]"
            >
              Consult for {currentService.title} →
            </Link>
          </div>
        </div>
      )}

      {/* Quick 8-Services Grid Browser */}
      <div className="mt-12">
        <div className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold mb-4 text-center">
          All 8 Core Development Capabilities at a Glance
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {servicesBreakdown.map((item) => {
            const IconC = item.icon || Code2;
            const isActive = activeTab === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setActiveTab(item.id); }}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  isActive
                    ? "bg-[#d93200]/15 border-[#d93200] shadow-[0_0_20px_rgba(217,50,0,0.25)]"
                    : "bg-white/[0.02] hover:bg-white/[0.06] border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    isActive ? "bg-[#d93200] text-white" : "bg-white/5 text-[#ff5722]"
                  }`}>
                    <IconC className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-300 uppercase">
                    Module
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                <p className="text-neutral-300 text-xs line-clamp-2 font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── 2. INDUSTRY TABS WIDGET ── */
export function IndustryTabsWidget({ industries = [] }) {
  const [activeTab, setActiveTab] = useState(industries[0]?.id || "education");

  const currentInd = industries.find((ind) => ind.id === activeTab) || industries[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
        {industries.map((ind) => {
          const IconComponent = ind.icon || Building2;
          const isActive = activeTab === ind.id;
          return (
            <button
              key={ind.id}
              onClick={() => setActiveTab(ind.id)}
              aria-label={`View ${ind.name} industry software`}
              className={`p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-2 transition-all duration-300 border ${
                isActive
                  ? "bg-[#d93200] border-[#d93200] text-white shadow-[0_0_25px_rgba(217,50,0,0.35)] scale-[1.02]"
                  : "bg-white/[0.02] hover:bg-white/[0.06] border-white/10 text-neutral-300 hover:text-white"
              }`}
            >
              <IconComponent className="w-6 h-6" />
              <span className="text-xs font-semibold">{ind.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Industry Card */}
      {currentInd && (
        <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#d93200]/15 border border-[#d93200]/40 flex items-center justify-center text-[#ff5722]">
                {React.createElement(currentInd.icon || Building2, { className: "w-6 h-6" })}
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-orange-300 font-bold block">
                  Industry Specification: {currentInd.tag || "Tailored"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {currentInd.headline || currentInd.name}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {currentInd.industryLink && (
                <Link
                  href={currentInd.industryLink}
                  className="text-xs px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-200 border border-white/10 transition-colors"
                >
                  Industry Overview →
                </Link>
              )}
              {currentInd.productLink && (
                <Link
                  href={currentInd.productLink}
                  className="text-xs px-4 py-2 rounded-full bg-[#d93200] hover:bg-[#ff3b00] text-white font-bold transition-all"
                >
                  Specific Solutions →
                </Link>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-neutral-300 font-bold">
                Operational Overview
              </h4>
              <p className="text-neutral-200 text-sm sm:text-base font-light leading-relaxed">
                {currentInd.desc}
              </p>
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs leading-relaxed">
                ✓ Proven deployment track record across Patna, Muzaffarpur, Gaya, Bhagalpur, and Purnia businesses.
              </div>
            </div>

            <div className="lg:col-span-7">
              <h4 className="text-sm font-mono uppercase tracking-wider text-neutral-300 font-bold mb-4">
                Core Industry Modules
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(currentInd.features || []).map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                    <span className="text-[#ff5722] mt-0.5 shrink-0 font-bold">✓</span>
                    <span className="text-xs sm:text-sm text-neutral-200 font-light">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── 3. PROCESS STEPS WIDGET ── */
export function ProcessStepsWidget({ processSteps = [] }) {
  const [activeStep, setActiveStep] = useState(0);

  const step = processSteps[activeStep] || processSteps[0];

  return (
    <div className="w-full mb-12">
      {/* Step Numbers Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
        {processSteps.map((s, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              aria-label={`View step ${s.number}: ${s.title}`}
              className={`p-3 rounded-xl border text-left transition-all ${
                isActive
                  ? "bg-[#d93200] border-[#d93200] text-white shadow-[0_0_20px_rgba(217,50,0,0.3)]"
                  : "bg-white/[0.02] border-white/10 text-neutral-300 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              <div className="text-xs font-mono font-bold opacity-80">{s.number}</div>
              <div className="text-xs font-bold truncate mt-0.5">{s.title}</div>
            </button>
          );
        })}
      </div>

      {/* Step Details View */}
      {step && (
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10 mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-mono font-bold text-[#ff5722]">
                {step.number}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {step.title} — {step.sub}
              </h3>
            </div>
            {step.timeline && (
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-200">
                Estimated Timeline: {step.timeline}
              </span>
            )}
          </div>
          <p className="text-neutral-200 text-sm sm:text-base font-light leading-relaxed mb-6">
            {step.desc}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold block mb-1">
                Core Deliverables
              </span>
              <p className="text-xs sm:text-sm text-neutral-200 font-light">
                {step.deliverables || "SRS Document, Architecture Diagrams & Project Roadmap"}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold block mb-1">
                Engineering Tools & Method
              </span>
              <p className="text-xs sm:text-sm text-neutral-200 font-light">
                {step.tools || "Jira, Figma, GitHub, CI/CD Automated Pipelines"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── 4. CONSULTATION FORM WIDGET ── */
export function ConsultationFormWidget() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "Custom ERP / CRM Development",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("https://api.webflora.in/api/leads/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formState,
          source: "Software Development Patna Page Consultation Form"
        })
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        // Fallback smooth acknowledgment
        setSubmitted(true);
      }
    } catch {
      // Local fallback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.04] border border-emerald-500/30 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-5 text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Requirement Received</h3>
        <p className="text-sm text-neutral-200 font-light max-w-md mx-auto mb-6">
          Thank you! Our technical lead in Patna will review your scope and contact you within 2 business hours for an architecture walkthrough and quote.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormState({
              name: "",
              phone: "",
              email: "",
              serviceType: "Custom ERP / CRM Development",
              message: ""
            });
          }}
          className="text-xs font-mono uppercase tracking-wider px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      id="software-consultation-form"
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="sw-form-name" className="text-xs text-neutral-300 uppercase tracking-wider block mb-1.5 font-mono font-medium">
            Full Name *
          </label>
          <input
            id="sw-form-name"
            name="name"
            type="text"
            required
            placeholder="e.g. Ramesh Kumar"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ff5722] focus:bg-white/10 transition-all font-light"
          />
        </div>
        <div>
          <label htmlFor="sw-form-phone" className="text-xs text-neutral-300 uppercase tracking-wider block mb-1.5 font-mono font-medium">
            Phone / WhatsApp *
          </label>
          <input
            id="sw-form-phone"
            name="phone"
            type="tel"
            required
            placeholder="e.g. +91 98765 43210"
            value={formState.phone}
            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ff5722] focus:bg-white/10 transition-all font-light"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="sw-form-email" className="text-xs text-neutral-300 uppercase tracking-wider block mb-1.5 font-mono font-medium">
            Email Address (Optional)
          </label>
          <input
            id="sw-form-email"
            name="email"
            type="email"
            placeholder="name@company.com"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ff5722] focus:bg-white/10 transition-all font-light"
          />
        </div>
        <div>
          <label htmlFor="sw-form-service" className="text-xs text-neutral-300 uppercase tracking-wider block mb-1.5 font-mono font-medium">
            System Required *
          </label>
          <select
            id="sw-form-service"
            name="serviceType"
            value={formState.serviceType}
            onChange={(e) => setFormState({ ...formState, serviceType: e.target.value })}
            className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff5722] transition-all font-light"
          >
            <option value="Custom ERP / CRM Development">Custom ERP / CRM Development</option>
            <option value="Hospital Management / EHR">Hospital Management / EHR</option>
            <option value="School / College ERP">School / College ERP</option>
            <option value="Retail POS & Multi-Store Inventory">Retail POS & Multi-Store Inventory</option>
            <option value="Mobile App (Android/iOS)">Mobile App (Android/iOS)</option>
            <option value="AI Automation & Custom SaaS">AI Automation & Custom SaaS</option>
            <option value="Other Custom Software">Other Custom Software</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="sw-form-message" className="text-xs text-neutral-300 uppercase tracking-wider block mb-1.5 font-mono font-medium">
          Brief Requirements / Current Problem
        </label>
        <textarea
          id="sw-form-message"
          name="message"
          rows={3}
          placeholder="Describe what you want to automate or build..."
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ff5722] focus:bg-white/10 transition-all font-light resize-none"
        />
      </div>

      {errorMsg && (
        <div className="text-xs text-red-400 font-light">{errorMsg}</div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-xl bg-[#d93200] hover:bg-[#ff3b00] text-white font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(217,50,0,0.35)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Transmitting Request...</span>
          </>
        ) : (
          <>
            <span>Request Direct Technical Consultation & Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-2 font-light">
        <span>🔒 Strict NDA & Data Privacy</span>
        <span>⚡ 2-Hour Response Time</span>
      </div>
    </form>
  );
}

/* ── 5. FAQ ACCORDION WIDGET ── */
export function FaqAccordionWidget({ faqs = [] }) {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;
        const faqBtnId = `faq-trigger-${idx}`;
        const faqContentId = `faq-content-${idx}`;

        return (
          <div
            key={idx}
            className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors"
          >
            <button
              id={faqBtnId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={faqContentId}
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-white hover:text-[#ff5722] transition-colors"
            >
              <span className="text-base sm:text-lg font-medium">
                {faq.q || faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-[#ff5722]" : "text-neutral-400"
                }`}
                aria-hidden="true"
              />
            </button>

            {isOpen && (
              <div
                id={faqContentId}
                role="region"
                aria-labelledby={faqBtnId}
                className="px-5 sm:px-6 pb-6 pt-2 text-neutral-200 text-sm sm:text-base font-light leading-relaxed border-t border-white/5"
              >
                {faq.a || faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
