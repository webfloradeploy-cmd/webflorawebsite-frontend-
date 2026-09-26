"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  MousePointerClick,
  Share2,
  Instagram,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  Check,
  Send,
  Loader2
} from "lucide-react";
import API_BASE_URL from "../../config";

const SERVICE_ICON_MAP = {
  seo: Search,
  "local-seo": MapPin,
  "google-ads": MousePointerClick,
  "meta-ads": Share2,
  "social-media": Instagram,
  "cro-web": Zap
};

/* ── 1. SERVICES DEEP DIVE TABS WIDGET ── */
export function ServiceDeepDiveWidget({ marketingServices = [] }) {
  const [activeTab, setActiveTab] = useState(marketingServices[0]?.id || "seo");

  const currentService = marketingServices.find((s) => s.id === activeTab) || marketingServices[0];
  const CurrentIcon = (currentService && SERVICE_ICON_MAP[currentService.id]) || Search;

  return (
    <div className="w-full">
      {/* Service Navigation Tabs - Swipeable on mobile */}
      <div className="flex overflow-x-auto no-scrollbar gap-1.5 sm:gap-2 mb-6 sm:mb-10 justify-start sm:justify-center px-1 sm:px-0 -mx-4 sm:mx-0 pb-2">
        {marketingServices.map((s) => {
          const IconComp = SERVICE_ICON_MAP[s.id] || Search;
          const isActive = activeTab === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              aria-label={`View ${s.title} details`}
              className={`shrink-0 flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-[#d93200] text-white shadow-[0_0_15px_rgba(217,50,0,0.4)]"
                  : "bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="whitespace-nowrap">{s.title.split(" (")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Active Service Showcase Card */}
      {currentService && (
        <div className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Left: What it does + Best for */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#d93200]/15 border border-[#d93200]/30 flex items-center justify-center text-[#ff3b00] shrink-0">
                  <CurrentIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-orange-300 font-bold block">
                    {currentService.title}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {currentService.headline}
                  </h3>
                </div>
              </div>

              <p className="text-neutral-200 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                {currentService.desc}
              </p>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-orange-300 font-bold mb-1">
                  Best suited for:
                </div>
                <p className="text-neutral-200 text-xs sm:text-sm">
                  {currentService.bestFor}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1 sm:pt-2">
                <a
                  href="#consultation"
                  aria-label="Request Marketing Audit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#d93200] hover:bg-[#c22d00] text-white text-xs sm:text-sm font-bold tracking-wide uppercase transition-colors duration-300 shadow-[0_4px_20px_rgba(217,50,0,0.35)]"
                >
                  <span>Request Marketing Audit</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>

            {/* Right: Deliverables Checklist */}
            <div className="lg:col-span-6 bg-black/40 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/5 h-full">
              <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-200 font-bold mb-3 sm:mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff3b00] shrink-0" />
                <span>Key Deliverables & Campaign Scope:</span>
              </h4>
              <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
                {(currentService.features || []).map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00] mt-1.5 shrink-0" />
                    <span>{item}</span>
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

/* ── 2. DIGITAL GROWTH GUIDE CHAPTERS WIDGET ── */
export function GrowthGuideWidget({ guideChapters = [] }) {
  const [activeChapter, setActiveChapter] = useState(0);

  const currentChapter = guideChapters[activeChapter] || guideChapters[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-start w-full">
      {/* Chapter Selector */}
      <div className="lg:col-span-4 space-y-1.5 sm:space-y-2">
        {guideChapters.map((ch, idx) => {
          const isActive = activeChapter === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveChapter(idx)}
              aria-label={`View Chapter 0${idx + 1}: ${ch.title}`}
              className={`w-full text-left p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 border flex items-center justify-between ${
                isActive
                  ? "bg-[#d93200]/15 border-[#d93200] text-white shadow-[0_0_20px_rgba(217,50,0,0.2)]"
                  : "bg-white/[0.02] border-white/5 text-neutral-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <div>
                <span className="text-[9px] sm:text-[10px] font-mono text-orange-300 uppercase block font-bold">
                  Chapter 0{idx + 1}
                </span>
                <span className="text-xs sm:text-sm font-semibold block">{ch.title}</span>
              </div>
              <ArrowRight
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform ${
                  isActive ? "translate-x-1 text-[#ff3b00]" : "opacity-30"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Active Chapter Reader */}
      {currentChapter && (
        <div className="lg:col-span-8 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 relative">
          <span className="text-[10px] sm:text-xs font-mono text-orange-300 uppercase tracking-wider block mb-1.5 sm:mb-2 font-bold">
            Chapter 0{activeChapter + 1} Analysis
          </span>
          <h3 className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-6">
            {currentChapter.title}
          </h3>
          <p className="text-neutral-200 text-xs sm:text-sm md:text-base font-light leading-relaxed">
            {currentChapter.content}
          </p>
        </div>
      )}
    </div>
  );
}

/* ── 3. FAQ ACCORDION WIDGET ── */
export function FaqAccordionWidget({ faqs = [] }) {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="space-y-3 sm:space-y-4 w-full">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;
        const faqBtnId = `dm-faq-trigger-${idx}`;
        const faqContentId = `dm-faq-content-${idx}`;

        return (
          <div
            key={idx}
            className="rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden transition-colors"
          >
            <button
              id={faqBtnId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={faqContentId}
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full p-4 sm:p-5 md:p-6 text-left flex items-center justify-between gap-3 text-white hover:text-[#ff3b00] transition-colors"
            >
              <span className="text-xs sm:text-sm md:text-base font-medium leading-snug">
                {faq.q || faq.question}
              </span>
              <ChevronDown
                className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-[#ff3b00]" : "text-neutral-400"
                }`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div
                id={faqContentId}
                role="region"
                aria-labelledby={faqBtnId}
                className="px-4 pb-4 sm:px-6 sm:pb-6 text-xs sm:text-sm text-neutral-200 font-light leading-relaxed border-t border-white/5 pt-3 sm:pt-4"
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

/* ── 4. CONSULTATION FORM WIDGET ── */
export function ConsultationFormWidget() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    serviceNeeded: "Full Digital Marketing (SEO + Ads)",
    businessType: "Coaching / Education",
    monthlyBudget: "₹18,999 - ₹34,999",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        service: `Digital Marketing Inquiry: ${formState.serviceNeeded}`,
        details: `Business Type: ${formState.businessType} | Budget: ${formState.monthlyBudget} | Message: ${formState.message}`
      };

      const res = await fetch(`${API_BASE_URL}/api/public/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-12 text-center p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-emerald-500/30">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
        <p className="text-neutral-200 text-sm max-w-md mx-auto mb-6 font-light">
          Thank you. A senior marketing strategist from our Patna office will contact you within 24 business hours to discuss your digital growth plan.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormState({
              name: "",
              email: "",
              phone: "",
              serviceNeeded: "Full Digital Marketing (SEO + Ads)",
              businessType: "Coaching / Education",
              monthlyBudget: "₹18,999 - ₹34,999",
              message: ""
            });
          }}
          className="px-6 py-2.5 rounded-full bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 relative overflow-hidden">
      <form onSubmit={handleSubmit} className="space-y-4" id="dm-consultation-form">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="dm-form-name" className="text-xs text-neutral-300 uppercase tracking-wider block mb-1.5 font-mono font-medium">
              Your Name *
            </label>
            <input
              id="dm-form-name"
              name="name"
              type="text"
              required
              placeholder="e.g. Ramesh Kumar"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ff3b00] focus:bg-white/10 transition-all font-light"
            />
          </div>
          <div>
            <label htmlFor="dm-form-phone" className="text-xs text-neutral-300 uppercase tracking-wider block mb-1.5 font-mono font-medium">
              Phone / WhatsApp *
            </label>
            <input
              id="dm-form-phone"
              name="phone"
              type="tel"
              required
              placeholder="+91 9876543210"
              value={formState.phone}
              onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ff3b00] focus:bg-white/10 transition-all font-light"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="dm-form-email" className="text-xs text-neutral-300 uppercase tracking-wider block mb-1.5 font-mono font-medium">
              Email Address *
            </label>
            <input
              id="dm-form-email"
              name="email"
              type="email"
              required
              placeholder="ramesh@example.com"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ff3b00] focus:bg-white/10 transition-all font-light"
            />
          </div>
          <div>
            <label htmlFor="dm-form-industry" className="text-xs text-neutral-300 uppercase tracking-wider block mb-1.5 font-mono font-medium">
              Business / Industry *
            </label>
            <select
              id="dm-form-industry"
              name="businessType"
              value={formState.businessType}
              onChange={(e) => setFormState({ ...formState, businessType: e.target.value })}
              className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff3b00] transition-all font-light"
            >
              <option value="Coaching / Education">Coaching / Education</option>
              <option value="Healthcare / Clinic / Hospital">Healthcare / Clinic / Hospital</option>
              <option value="Real Estate / Builder">Real Estate / Builder</option>
              <option value="Retail / Local Shop / CA">Retail / Local Shop / CA</option>
              <option value="D2C / E-Commerce">D2C / E-Commerce</option>
              <option value="Other Business">Other Business</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="dm-form-service" className="text-xs text-neutral-300 uppercase tracking-wider block mb-1.5 font-mono font-medium">
              Primary Marketing Need *
            </label>
            <select
              id="dm-form-service"
              name="serviceNeeded"
              value={formState.serviceNeeded}
              onChange={(e) => setFormState({ ...formState, serviceNeeded: e.target.value })}
              className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff3b00] transition-all font-light"
            >
              <option value="Full Digital Marketing (SEO + Ads)">Full Digital Marketing (SEO + Ads)</option>
              <option value="SEO & Google Maps Local 3-Pack">SEO & Google Maps Local 3-Pack</option>
              <option value="Google Ads (Search PPC & YouTube)">Google Ads (Search PPC & YouTube)</option>
              <option value="Meta Ads (Facebook & Instagram)">Meta Ads (Facebook & Instagram)</option>
              <option value="Social Media Content & Reels">Social Media Content & Reels</option>
              <option value="AEO & GEO (AI Search Optimization)">AEO & GEO (AI Search Optimization)</option>
            </select>
          </div>
          <div>
            <label htmlFor="dm-form-budget" className="text-xs text-neutral-300 uppercase tracking-wider block mb-1.5 font-mono font-medium">
              Target Monthly Budget *
            </label>
            <select
              id="dm-form-budget"
              name="monthlyBudget"
              value={formState.monthlyBudget}
              onChange={(e) => setFormState({ ...formState, monthlyBudget: e.target.value })}
              className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff3b00] transition-all font-light"
            >
              <option value="Starter (₹8,999/mo)">Starter (₹8,999/mo)</option>
              <option value="Growth (₹18,999/mo)">Growth (₹18,999/mo)</option>
              <option value="Business (₹34,999/mo)">Business (₹34,999/mo)</option>
              <option value="Enterprise / Custom Scale">Enterprise / Custom Scale</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="dm-form-message" className="text-xs text-neutral-300 uppercase tracking-wider block mb-1.5 font-mono font-medium">
            Brief Business Details / Current Challenges
          </label>
          <textarea
            id="dm-form-message"
            name="message"
            rows={3}
            placeholder="Tell us about your target location, current inquiry volume, and goals..."
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ff3b00] focus:bg-white/10 transition-all font-light resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          aria-label="Submit Marketing Consultation Request"
          className="w-full py-4 rounded-full bg-[#d93200] hover:bg-[#c22d00] text-white font-bold text-sm tracking-wider uppercase transition-all shadow-[0_4px_25px_rgba(217,50,0,0.4)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Inquiry...</span>
            </>
          ) : (
            <>
              <span>Submit Marketing Consultation Request</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-1 font-light">
          <span>🔒 Strict Confidentiality & NDA</span>
          <span>⚡ Fast 2-Hour Response Time</span>
        </div>
      </form>
    </div>
  );
}
