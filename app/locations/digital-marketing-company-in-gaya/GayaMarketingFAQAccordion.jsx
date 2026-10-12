"use client";

import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export default function GayaMarketingFAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-5 max-w-4xl mx-auto">
      {/* Quick Search Input */}
      <div className="relative max-w-md mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
          <Search size={14} />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search marketing FAQs (e.g., SEO, Google Ads, pricing, Bodh Gaya)..."
          className="w-full pl-9 pr-10 py-2.5 rounded-xl bg-zinc-900/80 border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#FF3C00] transition-colors"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-gray-400 hover:text-white"
          >
            Clear
          </button>
        )}
      </div>

      {/* Accordion Items */}
      <div className="space-y-3">
        {filteredFaqs.map((faq, index) => {
          const originalIndex = faqs.findIndex((f) => f.question === faq.question);
          const isOpen = openIndex === originalIndex;
          const numberFormatted = String(originalIndex + 1).padStart(2, "0");

          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-zinc-900/90 border-[#FF3C00]/40 shadow-[0_4px_25px_rgba(255,60,0,0.12)]"
                  : "bg-zinc-950/70 border-white/5 hover:border-white/15 hover:bg-zinc-900/40"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(originalIndex)}
                aria-expanded={isOpen}
                aria-controls={`marketing-faq-${originalIndex}`}
                id={`marketing-faq-btn-${originalIndex}`}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3C00] group cursor-pointer"
              >
                <div className="flex items-center gap-3 sm:gap-4 pr-3 min-w-0">
                  <span
                    className={`font-mono text-xs font-bold shrink-0 transition-colors ${
                      isOpen ? "text-[#FF3C00]" : "text-gray-500 group-hover:text-gray-300"
                    }`}
                  >
                    {numberFormatted}
                  </span>
                  <span
                    className={`text-xs sm:text-sm md:text-base font-bold transition-colors ${
                      isOpen ? "text-white" : "text-neutral-200 group-hover:text-white"
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>

                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "bg-[#FF3C00] text-white shadow-md shadow-[#FF3C00]/40 rotate-180"
                      : "bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white"
                  }`}
                >
                  <ChevronDown size={15} />
                </div>
              </button>

              <div
                id={`marketing-faq-${originalIndex}`}
                role="region"
                aria-labelledby={`marketing-faq-btn-${originalIndex}`}
                className={`transition-all duration-300 ease-in-out px-4 sm:px-5 ${
                  isOpen ? "max-h-[600px] pb-4 sm:pb-5 opacity-100" : "max-h-0 pb-0 opacity-0 pointer-events-none"
                }`}
              >
                <div className="pt-2 border-t border-white/5">
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-8 text-gray-400 text-xs sm:text-sm">
            No matching questions found for &quot;{searchQuery}&quot;. Please contact us directly for quick assistance.
          </div>
        )}
      </div>
    </div>
  );
}
