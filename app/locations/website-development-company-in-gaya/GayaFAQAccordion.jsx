"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, Plus, Minus } from "lucide-react";

export default function GayaFAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchFilter.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Optional Search / Quick Filter */}
      <div className="relative max-w-md mx-auto">
        <input
          type="text"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
          placeholder="Search questions (e.g. cost, timeline, SEO, Bodh Gaya)..."
          className="w-full px-4 py-3 rounded-2xl bg-zinc-900/80 border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#FF3C00] transition-colors"
        />
        {searchFilter && (
          <button
            type="button"
            onClick={() => setSearchFilter("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
          >
            Clear
          </button>
        )}
      </div>

      {/* FAQ Items */}
      <div className="space-y-3.5">
        {filteredFaqs.map((faq, index) => {
          const originalIndex = faqs.findIndex((f) => f.question === faq.question);
          const isOpen = openIndex === originalIndex;
          const numberFormatted = String(originalIndex + 1).padStart(2, "0");

          return (
            <div
              key={index}
              className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-gradient-to-r from-zinc-900/90 via-zinc-950 to-zinc-900/90 border-[#FF3C00]/40 shadow-[0_4px_30px_rgba(255,60,0,0.12)]"
                  : "bg-zinc-950/70 border-white/5 hover:border-white/15 hover:bg-zinc-900/40"
              }`}
            >
              {/* Subtle left active glow bar */}
              {isOpen && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 via-[#FF3C00] to-red-600" />
              )}

              <button
                type="button"
                onClick={() => toggle(originalIndex)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${originalIndex}`}
                id={`faq-question-${originalIndex}`}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3C00] group cursor-pointer"
              >
                <div className="flex items-center gap-3.5 sm:gap-5 pr-4">
                  <span className={`font-mono text-xs font-bold shrink-0 transition-colors ${
                    isOpen ? "text-[#FF3C00]" : "text-gray-500 group-hover:text-gray-300"
                  }`}>
                    {numberFormatted}
                  </span>
                  <span className={`text-sm sm:text-base font-bold transition-colors ${
                    isOpen ? "text-white" : "text-neutral-200 group-hover:text-white"
                  }`}>
                    {faq.question}
                  </span>
                </div>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "bg-[#FF3C00] text-white shadow-md shadow-[#FF3C00]/40 rotate-180"
                      : "bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white"
                  }`}
                >
                  <ChevronDown size={16} />
                </div>
              </button>

              <div
                id={`faq-answer-${originalIndex}`}
                role="region"
                aria-labelledby={`faq-question-${originalIndex}`}
                className={`transition-all duration-300 ease-in-out px-5 sm:px-6 ${
                  isOpen
                    ? "max-h-[600px] pb-6 opacity-100 border-t border-white/5 pt-4"
                    : "max-h-0 pb-0 opacity-0 overflow-hidden"
                }`}
              >
                <div className="pl-7 sm:pl-9">
                  <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
