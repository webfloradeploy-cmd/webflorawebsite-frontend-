"use client";

import React, { useState } from "react";
import SafeIcon from "../it-company-in-patna/components/client/SafeIcon";
import API_BASE_URL from "../config";

export default function NewsletterForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    try {
      const res = await fetch(`${API_BASE_URL}/api/public/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus({ success: true, message: "Successfully subscribed!" });
        e.target.reset();
      } else {
        const data = await res.json();
        setStatus({ success: false, message: data.message || "Subscription failed" });
      }
    } catch (err) {
      setStatus({ success: false, message: "Server error" });
    }
  };

  return (
    <div className="w-full max-w-sm">
      <label htmlFor="newsletter-email" className="text-xs text-neutral-300 uppercase tracking-widest mb-3 block">
        Subscribe to updates
      </label>
      <form onSubmit={handleSubmit} className="relative group">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-lg py-3 px-4 outline-none focus:border-[#ff3b00]/50 focus:bg-white/10 focus:ring-1 focus:ring-[#ff3b00]/50 transition-all duration-300 placeholder:text-neutral-400 font-light"
        />
        <button
          type="submit"
          aria-label="Subscribe to newsletter"
          className="absolute right-1 top-1 p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center bg-neutral-800 hover:bg-[#ff3b00] rounded-md text-white transition-colors duration-300 group-focus-within:bg-[#ff3b00] cursor-pointer"
        >
          <SafeIcon icon="solar:plain-3-linear" width={18} height={18} />
        </button>
      </form>
      {status && (
        <p className={`text-xs mt-2 ${status.success ? "text-emerald-400" : "text-red-400"}`}>
          {status.message}
        </p>
      )}
    </div>
  );
}
