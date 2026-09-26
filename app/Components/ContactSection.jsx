"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import API_BASE_URL from "../config";

const BRAND = "#ff3b00";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  return (
    <section
      id="contact"
      className="relative py-20 px-6 overflow-hidden bg-neutral-950"
    >
      {/* Animated gradient background */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full pointer-events-none blur-2xl opacity-30"
        style={{
          background: `linear-gradient(to left, ${BRAND}33, transparent)`,
        }}
      />

      {/* Floating glow orbs */}
      <div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: `${BRAND}` }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: `${BRAND}` }}
      />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
        {/* Left */}
        <div className="lg:w-1/2">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight mb-6 leading-tight">
            LET&apos;S CREATE <br />
            <span style={{ color: BRAND }}>EXTRAORDINARY</span>
          </h2>

          <p className="text-neutral-300 text-base mb-8">
            Ready to start? Tell us about your project, timeline, and
            budget. We typically reply within 24 hours.
          </p>

          <div className="space-y-8">
            {[
              {
                icon: MapPin,
                title: "LOCATION",
                value: "NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri, Patna, Bihar, 800016, India",
              },
              {
                icon: Phone,
                title: "PHONE",
                links: [
                  { label: "+91 85408 14729", url: "tel:+918540814729" },
                  { label: "+91 88630 81255", url: "tel:+918863081255" }
                ],
              },
              {
                icon: Mail,
                title: "EMAIL",
                links: [
                  { label: "hello@webfloratechnologies.com", url: "mailto:hello@webfloratechnologies.com" },
                  { label: "info@webfloratechnologies.com", url: "mailto:info@webfloratechnologies.com" }
                ],
              },
            ].map((item, i) => {
              const IconComp = item.icon;
              return (
                <div key={i} className="flex items-start gap-4 group">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mt-1 transition-transform duration-300 group-hover:scale-110 shrink-0"
                    style={{
                      backgroundColor: `${BRAND}1a`,
                      color: BRAND,
                    }}
                  >
                    <IconComp size={20} aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="text-white font-bold mb-1">
                      {item.title}
                    </h3>
                    {item.links ? (
                      <div className="flex flex-col gap-1">
                        {item.links.map((l, idx) => (
                          <a key={idx} href={l.url} className="text-neutral-300 hover:text-white transition-colors">
                            {l.label}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p className="text-neutral-300">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:w-1/2">
          <div
            className="relative p-[1px] rounded-3xl"
            style={{
              background: `linear-gradient(135deg, ${BRAND}66, rgba(255,255,255,0.1), ${BRAND}66)`,
            }}
          >
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                setFeedback(null);
                const formData = new FormData(e.target);
                const data = {
                  name: formData.get("name"),
                  email: formData.get("email"),
                  service: formData.get("service"),
                  message: formData.get("message"),
                  website: formData.get("website") || "",
                };

                try {
                  const res = await fetch(`${API_BASE_URL}/api/public/inquiry`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                  });
                  const resData = await res.json();
                  if (res.ok) {
                    setFeedback({ success: true, message: resData.message || "Message sent successfully! We will get back to you soon." });
                    e.target.reset();
                  } else {
                    setFeedback({ success: false, message: resData.message || "Failed to send message. Please try calling directly." });
                  }
                } catch (err) {
                  setFeedback({ success: false, message: "Server connection error. Please call us directly." });
                } finally {
                  setIsSubmitting(false);
                }
              }}
              className="bg-neutral-900/90 backdrop-blur-xl p-8 md:p-10 rounded-3xl space-y-6"
            >
              {/* Anti-spam Honeypot input */}
              <input
                type="text"
                name="website"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
                className="hidden pointer-events-none opacity-0 absolute -left-[9999px]"
              />

              {feedback && (
                <div
                  className={`p-4 rounded-xl text-sm font-medium ${feedback.success
                      ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                      : "bg-red-500/10 border border-red-500/30 text-red-400"
                    }`}
                >
                  {feedback.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="name" label="Your Name" placeholder="John Doe" required />
                <Input
                  name="email"
                  label="Email"
                  placeholder="john@company.com"
                  type="email"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-service"
                  className="text-xs font-bold tracking-widest uppercase text-neutral-200"
                >
                  Service Interested In
                </label>
                <select
                  id="contact-service"
                  name="service"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none transition-colors appearance-none"
                  required
                >
                  <option className="bg-black">Web Development</option>
                  <option className="bg-black">Software Development</option>
                  <option className="bg-black">Mobile App Development</option>
                  <option className="bg-black">AI/ML Solution</option>
                  <option className="bg-black">UI/UX Design</option>
                  <option className="bg-black">Digital Marketing & SEO</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-bold tracking-widest uppercase text-neutral-200"
                >
                  Project Details
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project requirements..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                aria-label="Send project inquiry message"
                className="w-full py-4 text-white font-black rounded-xl shadow-lg relative overflow-hidden transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 bg-[#d93200] hover:bg-[#bf2c00] shadow-[0_10px_30px_rgba(217,50,0,0.3)]"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send size={16} aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({ label, name, type = "text", placeholder, required = false, ...props }) {
  const inputId = `contact-input-${name}`;

  return (
    <div className="space-y-2">
      <label
        htmlFor={inputId}
        className="text-xs font-bold tracking-widest uppercase text-neutral-200"
      >
        {label}
      </label>
      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        {...props}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none transition-colors"
      />
    </div>
  );
}
