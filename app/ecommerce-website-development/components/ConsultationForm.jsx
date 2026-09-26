"use client";

import React, { useState } from "react";
import { Check, RefreshCw, Send } from "lucide-react";
import API_BASE_URL from "../../config";

export default function ConsultationForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Custom eCommerce Website",
    budget: "₹60,000–₹1,50,000",
    message: ""
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/public/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formState,
          subject: `eCommerce Website Development Inquiry: ${formState.projectType}`
        })
      });
      if (res.ok) {
        setFormSuccess(true);
      } else {
        alert("Submission error. Please call +91 8540814729 directly.");
      }
    } catch (err) {
      alert("Network error. Please WhatsApp us directly at +91 8540814729.");
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="bg-neutral-900/90 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl">
      {formSuccess ? (
        <div className="text-center py-10 space-y-4">
          <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
            <Check className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white">Consultation Request Received!</h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto">
            Our eCommerce lead developer in Patna will review your requirements and get in touch within 2 business hours.
          </p>
          <button
            onClick={() => setFormSuccess(false)}
            className="px-6 py-2.5 bg-[#d93200] hover:bg-[#c22d00] text-white text-xs font-bold rounded-xl cursor-pointer transition"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <h3 className="text-lg font-bold text-white mb-2">
            Request an eCommerce Quote in Patna
          </h3>

          <div>
            <label htmlFor="form-full-name" className="block text-xs font-mono uppercase text-neutral-300 mb-1 font-medium">
              Your Full Name *
            </label>
            <input
              id="form-full-name"
              type="text"
              required
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              placeholder="e.g. Rahul Sharma"
              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FF3B00]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="form-phone" className="block text-xs font-mono uppercase text-neutral-300 mb-1 font-medium">
                Phone Number *
              </label>
              <input
                id="form-phone"
                type="tel"
                required
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FF3B00]"
              />
            </div>
            <div>
              <label htmlFor="form-email" className="block text-xs font-mono uppercase text-neutral-300 mb-1 font-medium">
                Email Address *
              </label>
              <input
                id="form-email"
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="rahul@company.com"
                className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FF3B00]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="form-project-type" className="block text-xs font-mono uppercase text-neutral-300 mb-1 font-medium">
                Platform / Solution
              </label>
              <select
                id="form-project-type"
                aria-label="Platform or Solution Type"
                value={formState.projectType}
                onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                className="w-full bg-black/60 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF3B00]"
              >
                <option value="Custom eCommerce Website">Custom eCommerce (Next.js)</option>
                <option value="Shopify Store Development">Shopify Store in Patna</option>
                <option value="WooCommerce Development">WooCommerce Store</option>
                <option value="B2B eCommerce Platform">B2B Wholesale Platform</option>
                <option value="Multi-Vendor Marketplace">Multi-Vendor Marketplace</option>
                <option value="eCommerce Mobile App">eCommerce Mobile App</option>
              </select>
            </div>

            <div>
              <label htmlFor="form-budget" className="block text-xs font-mono uppercase text-neutral-300 mb-1 font-medium">
                Estimated Budget
              </label>
              <select
                id="form-budget"
                aria-label="Estimated Project Budget"
                value={formState.budget}
                onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                className="w-full bg-black/60 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF3B00]"
              >
                <option value="₹30,000–₹60,000">₹30,000 – ₹60,000 (Basic)</option>
                <option value="₹60,000–₹1,50,000">₹60,000 – ₹1,50,000 (Professional)</option>
                <option value="₹1,50,000–₹5,00,000">₹1,50,000 – ₹5,00,000 (Custom / B2B)</option>
                <option value="₹3,00,000+">₹3,00,000+ (Multi-Vendor)</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="form-message" className="block text-xs font-mono uppercase text-neutral-300 mb-1 font-medium">
              Project Details / Requirements
            </label>
            <textarea
              id="form-message"
              rows={3}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              placeholder="Tell us what products you sell, estimated SKU count, or specific integrations needed..."
              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FF3B00]"
            />
          </div>

          <button
            type="submit"
            disabled={formLoading}
            className="w-full py-3.5 bg-[#d93200] hover:bg-[#c22d00] text-white rounded-xl text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-[#d93200]/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {formLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Request an eCommerce Quote</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
