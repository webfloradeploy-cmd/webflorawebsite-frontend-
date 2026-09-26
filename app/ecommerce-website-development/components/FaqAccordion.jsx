"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FaqAccordion({ faqs }) {
  const [openFaqs, setOpenFaqs] = useState({ 0: true });

  const toggleFaq = (index) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openFaqs[idx] ?? false;
        return (
          <div
            key={idx}
            className="bg-neutral-900/50 border border-white/5 hover:border-white/15 rounded-2xl overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFaq(idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-ans-${idx}`}
              className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
            >
              <span className="text-sm sm:text-base font-semibold text-white flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] flex items-center justify-center text-xs font-mono font-bold shrink-0">
                  Q
                </span>
                {faq.q}
              </span>
              <span className="text-neutral-400 shrink-0">
                {isOpen ? <ChevronUp className="w-5 h-5 text-[#FF3B00]" /> : <ChevronDown className="w-5 h-5" />}
              </span>
            </button>

            {/* Accessible FAQ content */}
            <div
              id={`faq-ans-${idx}`}
              className={`px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/5 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <div className="pl-9">{faq.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
