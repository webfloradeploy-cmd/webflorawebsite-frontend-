"use client";

import React, { useState, useMemo } from "react";
import SafeIcon from "./client/SafeIcon";
import { ChevronDown, ArrowRight, HelpCircle } from "lucide-react";

const FaqSection = ({ faqs: dynamicFaqs, title }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = useMemo(() => {
    if (dynamicFaqs && dynamicFaqs.length > 0) {
      return dynamicFaqs.map((f, i) => ({
        id: i + 1,
        ...f
      }));
    }
    return [
      {
        id: 1,
        question: "Do you provide all services together?",
        answer: "Yes, we offer comprehensive service bundles tailored to your needs. You can choose individual services or combine multiple services into a cohesive strategy. Our team ensures seamless integration across all services for maximum impact and efficiency.",
      },
      {
        id: 2,
        question: "What is the timeline?",
        answer: "Project timelines vary based on scope and complexity. Typically, strategy and planning take 2-4 weeks, implementation spans 4-12 weeks, and optimization is ongoing.",
      },
      {
        id: 3,
        question: "Do you offer support?",
        answer: "Absolutely. We provide ongoing support including 24/7 email support, weekly strategy calls, and monthly performance reviews. Our dedicated account manager ensures your success.",
      }
    ];
  }, [dynamicFaqs]);

  return (
    <section className="py-20 px-6 bg-black relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[#FF3B00] bg-[#FF3B00]/5 mb-8">
            <SafeIcon icon="solar:question-square-bold" className="text-[#FF3B00]" width={20} height={20} />
            <span className="text-xs font-bold text-[#FF3B00] uppercase tracking-[0.2em]">FAQ & Support</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none mb-8 font-display uppercase">
            {title?.toLowerCase() === "home" ? (
              <>Frequently Asked Questions About <span className="text-[#FF3B00]">Webflora Technologies</span></>
            ) : title?.toLowerCase().includes("website") ? (
              <>Frequently Asked Questions About <span className="text-[#FF3B00]">Website Development</span></>
            ) : title?.toLowerCase().includes("software") ? (
              <>Frequently Asked Questions About <span className="text-[#FF3B00]">Software Development</span></>
            ) : title?.toLowerCase().includes("mobile") ? (
              <>Frequently Asked Questions About <span className="text-[#FF3B00]">Mobile App Development</span></>
            ) : (
              <>Frequently Asked <span className="text-[#FF3B00]">Questions</span></>
            )}
          </h2>

          <p className="text-lg text-neutral-300 max-w-2xl font-light leading-relaxed">
            Get answers to common questions about our {title || "services"}, timelines, support, and flexible engagement models.
          </p>
        </div>

        {/* ACCORDION ITEMS */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "border-[#FF3B00] bg-white/[0.02] shadow-[0_0_40px_rgba(255,59,0,0.08)]"
                    : "border-white/5 bg-white/[0.005] hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full p-4 md:p-5 text-left flex items-center gap-3 md:gap-5 cursor-pointer"
                  aria-expanded={isExpanded}
                  aria-label={`${isExpanded ? "Collapse" : "Expand"} answer to: ${faq.question}`}
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isExpanded ? "bg-[#FF3B00] text-black" : "bg-white/5 text-[#FF3B00]"
                  }`}>
                    {faq.icon ? (
                      <SafeIcon icon={faq.icon} className="text-lg md:text-xl" width={22} height={22} />
                    ) : (
                      <HelpCircle size={20} />
                    )}
                  </div>

                  <h3
                    id={`faq-question-${faq.id}`}
                    className={`text-sm sm:text-base md:text-lg font-semibold flex-1 transition-colors ${
                      isExpanded ? "text-white" : "text-neutral-200 hover:text-white"
                    }`}
                  >
                    {faq.question}
                  </h3>

                  <ChevronDown
                    size={20}
                    className={`text-[#FF3B00] shrink-0 transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-6 md:px-8 pb-6 pt-2">
                    <div className="h-[1px] w-full bg-gradient-to-r from-[#FF3B00]/30 to-transparent mb-5" />
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light max-w-4xl mb-5">
                      {faq.answer}
                    </p>
                    <a
                      href="/contact"
                      aria-label="Get Started with Webflora Technologies"
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-[#FF3B00]/30 bg-[#FF3B00]/10 text-[#FF3B00] text-sm font-bold hover:bg-[#FF3B00] hover:text-black transition-all group"
                    >
                      Get Started
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255, 59, 0, 0.05) 0%, transparent 70%)" }} aria-hidden="true" />
    </section>
  );
};

export default FaqSection;