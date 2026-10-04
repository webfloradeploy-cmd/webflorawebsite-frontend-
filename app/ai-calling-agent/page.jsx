"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import {
  PhoneCall,
  Mic,
  MicOff,
  Volume2,
  Bot,
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Globe2,
  Calendar,
  Users,
  Database,
  Building2,
  GraduationCap,
  Home,
  HeartPulse,
  ShoppingBag,
  Plane,
  Landmark,
  Headphones,
  FileCheck,
  TrendingUp,
  Sparkles,
  PhoneForwarded,
  Layers,
  Server,
  RefreshCw,
  Clock,
  Radio,
  Play,
  Pause,
  ChevronDown
} from "lucide-react";
import ClientMarquee from "../Components/ClientMarquee";

// ==========================================
// INTERACTIVE AUDIO / CALL SIMULATOR COMPONENT
// ==========================================
function LiveCallVisualizer() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const callScenarios = [
    {
      title: "Real Estate Site Visit Qualifier",
      caller: "Rahul Sharma (Interested Buyer)",
      lang: "Hindi + English (Hinglish)",
      duration: "01:24",
      status: "CRM Updated & Slot Booked",
      dialogues: [
        { speaker: "agent", text: "Namaste Rahul ji! Main Webflora Real Estate se baat kar raha hoon. Kya aap Patna Boring Road wale 3BHK project ki site visit ke liye interested hain?" },
        { speaker: "user", text: "Haan, main interested hoon. Kya Saturday afternoon 3 baje slot available hai?" },
        { speaker: "agent", text: "Bilkul! Saturday afternoon 3:00 PM ka slot confirm kar diya gaya hai. Location details aapke WhatsApp par bhej di gayi hain." },
        { speaker: "system", text: "Action: WhatsApp Sent | Calendar Synced | CRM Lead Tagged 'High Intent'" }
      ]
    },
    {
      title: "EdTech Student Counselling",
      caller: "Pooja Verma (Student Inquiry)",
      lang: "English / Hindi",
      duration: "02:10",
      status: "Counselling Call Scheduled",
      dialogues: [
        { speaker: "agent", text: "Hello Pooja! Thanks for inquiring about the Full-Stack Engineering Program. Are you looking for weekend or weekday batches?" },
        { speaker: "user", text: "I'm currently working, so weekend online batches will suit me best." },
        { speaker: "agent", text: "Great! Our next weekend cohort starts on the 15th. Would you like me to connect you with our senior academic counsellor for syllabus walkthrough?" },
        { speaker: "system", text: "Action: Lead Qualified | Batch: Weekend | Transferred to Senior Counsellor" }
      ]
    },
    {
      title: "Customer Support & Handoff",
      caller: "Vikram Malhotra (Account Holder)",
      lang: "English",
      duration: "00:54",
      status: "Warm Human Handoff",
      dialogues: [
        { speaker: "agent", text: "Hi Vikram! How can I assist you with your payment processing inquiry today?" },
        { speaker: "user", text: "I need to discuss custom API webhooks for international transactions." },
        { speaker: "agent", text: "Understood. I am transferring your call immediately to our Enterprise Technical Specialist. Please stay on line." },
        { speaker: "system", text: "Action: Context Packaged | Human Handoff Initiated (<3s latency)" }
      ]
    }
  ];

  const currentCall = callScenarios[activeTab];

  return (
    <div className="relative w-full rounded-3xl bg-[#09090b] border border-white/10 p-6 md:p-8 shadow-[0_0_50px_rgba(255,59,0,0.15)] overflow-hidden">
      {/* Glow Backdrop */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#FF3B00]/10 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-600/10 blur-[80px] pointer-events-none" />

      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#FF3B00]/10 border border-[#FF3B00]/40 text-[#FF3B00]">
            <Radio className="w-4 h-4 animate-pulse" />
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#FF3B00]">Live Voice Demo</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">&lt;200ms</span>
            </div>
            <h4 className="text-white font-bold text-xs sm:text-sm">{currentCall.title}</h4>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/10">
          {callScenarios.map((sc, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                activeTab === i
                  ? "bg-[#FF3B00] text-white shadow-md"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Scenario {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Live Audio Visualizer Bars */}
      <div className="my-3.5 p-3 rounded-xl bg-black/60 border border-white/5 flex items-center justify-between gap-3 relative z-10">
        <div className="flex items-center gap-2.5">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#FF3B00] text-white flex items-center justify-center transition-colors"
          >
            {isPlaying ? <Volume2 size={15} className="text-[#FF3B00] hover:text-white" /> : <MicOff size={15} />}
          </button>
          <div>
            <div className="text-[11px] text-neutral-400">Caller: <span className="text-white font-medium">{currentCall.caller}</span></div>
            <div className="text-[10px] text-neutral-500">Language: {currentCall.lang}</div>
          </div>
        </div>

        {/* Animated Sound Wave bars */}
        <div className="flex items-center gap-1 h-6">
          {[40, 75, 90, 60, 30, 85, 100, 45, 95, 70, 35, 80, 65, 90, 50, 85, 30, 70, 95, 40].map((h, idx) => (
            <motion.div
              key={idx}
              animate={isPlaying ? { height: [`${h * 0.2}%`, `${h}%`, `${h * 0.3}%`] } : { height: "20%" }}
              transition={{ repeat: Infinity, duration: 1.2, delay: idx * 0.05, ease: "easeInOut" }}
              className="w-0.5 rounded-full bg-gradient-to-t from-[#FF3B00] to-orange-400"
            />
          ))}
        </div>

        <div className="hidden sm:flex flex-col items-end">
          <span className="text-[11px] font-mono text-emerald-400 font-bold">{currentCall.status}</span>
          <span className="text-[9px] font-mono text-neutral-500">Duration: {currentCall.duration}</span>
        </div>
      </div>

      {/* Live Conversation Stream */}
      <div className="space-y-2 relative z-10 max-h-[220px] overflow-y-auto pr-1 custom-scrollbar">
        {currentCall.dialogues.map((item, idx) => (
          <motion.div
            key={`${activeTab}-${idx}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.12 }}
            className={`flex items-start gap-2.5 p-2.5 rounded-xl text-xs ${
              item.speaker === "agent"
                ? "bg-[#FF3B00]/10 border border-[#FF3B00]/30 text-white ml-0 mr-4"
                : item.speaker === "user"
                ? "bg-white/5 border border-white/10 text-neutral-200 ml-4 mr-0"
                : "bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-mono text-[11px]"
            }`}
          >
            {item.speaker === "agent" && (
              <div className="w-5 h-5 rounded-md bg-[#FF3B00] flex items-center justify-center shrink-0 mt-0.5 text-white">
                <Bot size={12} />
              </div>
            )}
            {item.speaker === "user" && (
              <div className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center shrink-0 mt-0.5 text-white">
                <Users size={12} />
              </div>
            )}
            {item.speaker === "system" && (
              <div className="w-5 h-5 rounded-md bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                <Zap size={12} />
              </div>
            )}
            <div className="flex-1">
              <div className="text-[9px] font-mono uppercase tracking-wider text-neutral-400 mb-0.5">
                {item.speaker === "agent" ? "Webflora AI Agent" : item.speaker === "user" ? "Prospect" : "System Automated Action"}
              </div>
              <p className="leading-snug font-light">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// ACCORDION FAQ COMPONENT FOR FULL AEO
// ==========================================
function CustomFAQAccordion({ items }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen ? "bg-white/[0.04] border-[#FF3B00]/40 shadow-[0_0_25px_rgba(255,59,0,0.1)]" : "bg-white/[0.02] border-white/5 hover:border-white/10"
            }`}
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full text-left p-6 md:p-7 flex items-center justify-between gap-4"
              aria-expanded={isOpen}
            >
              <span className="text-base md:text-xl font-bold text-white tracking-tight flex items-center gap-3">
                <span className="text-xs font-mono text-[#FF3B00] px-2 py-1 rounded bg-[#FF3B00]/10 border border-[#FF3B00]/20">Q{idx + 1}</span>
                {item.question}
              </span>
              <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#FF3B00] text-white border-[#FF3B00]" : ""}`}>
                <ChevronDown size={18} />
              </div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-7 md:px-7 md:pb-8 pt-0 border-t border-white/5 text-neutral-300 text-sm md:text-base leading-relaxed font-light">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
export default function AICallingAgentPage() {
  const faqData = [
    {
      question: "What is an AI calling agent?",
      answer: "An AI calling agent is an intelligent, voice-based AI system that can autonomously make outbound calls and receive inbound phone calls. Unlike traditional press-button IVRs, it listens, understands human intent using Natural Language Processing (NLP), speaks back with ultra-realistic human voices in real-time (<200ms latency), collects data, answers questions, and triggers automated business workflows."
    },
    {
      question: "Can an AI calling agent speak Hindi, Hinglish, and other Indian languages?",
      answer: "Yes! Webflora Technologies develops multilingual AI voice agents trained for Hindi, Indian English, Hinglish, Bengali, Tamil, Telugu, and other regional dialects. Our speech models understand local colloquial accents and switch naturally between Hindi and English during live business conversations."
    },
    {
      question: "Can an AI calling agent make outbound calls?",
      answer: "Yes. Our AI outbound calling agents automatically dial leads from your CRM, website forms, ad campaigns, or uploaded databases. It qualifies prospects, conducts automated follow-ups for abandoned carts, sends event and payment reminders, and schedules site visits without requiring human callers."
    },
    {
      question: "Can an AI calling agent receive inbound calls?",
      answer: "Yes. An AI voice agent answers 100% of incoming customer calls 24/7/365 with zero waiting time. It handles FAQs, captures customer inquiries, verifies caller identities, takes messages, and resolves support tickets instantly."
    },
    {
      question: "Can it connect with my CRM, WhatsApp, and existing business software?",
      answer: "Yes. Webflora builds deep integrations with HubSpot, Salesforce, Zoho, LeadSquared, Google Sheets, custom PostgreSQL/MongoDB databases, WhatsApp Business API, Google Calendar, Calendly, n8n, Zapier, and custom REST APIs to sync call transcripts, recordings, and lead qualification scores in real time."
    },
    {
      question: "Can the AI transfer a call to a human agent?",
      answer: "Yes. If a caller requests human support, gets stuck, or is identified as an enterprise VIP lead, the AI agent performs an instant warm handoff. It dials your sales or support executive while forwarding the caller's context and conversation summary directly to their screen."
    },
    {
      question: "Can you build a custom AI calling agent for my business?",
      answer: "Absolutely. Webflora Technologies designs, develops, and deploys fully tailored AI calling agents adapted to your specific business rules, conversation scripts, compliance policies, tone of voice, and API backends across India and worldwide."
    }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-[#FF3B00] selection:text-white overflow-hidden">

      {/* Global Background Glow Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(255,59,0,0.15)_0%,transparent_70%)] blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-[#FF3B00]/10 rounded-full blur-[140px]" />
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative z-10 min-h-[90vh] lg:min-h-[85vh] flex items-center justify-center pt-24 pb-12 lg:pt-28 lg:pb-10 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: SEO Headings, Descriptions, CTA */}
          <div className="lg:col-span-6 flex flex-col space-y-4 text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF3B00]/30 bg-[#FF3B00]/10 backdrop-blur-md w-fit">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3B00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF3B00]"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF3B00]">Next-Gen Voice Intelligence</span>
              <span className="text-neutral-500 text-xs">|</span>
              <span className="text-[11px] text-neutral-300 font-medium">Multilingual Voice AI</span>
            </div>

            {/* H1 Primary Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.2rem] font-black tracking-tight leading-[1.08] text-white">
              AI Calling Agent for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B00] via-orange-400 to-amber-400">Smarter, Automated</span> Business Calls
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              Automate your customer calls with intelligent AI calling agents that speak naturally, understand complex conversations, qualify high-intent leads, schedule appointments, follow up with prospects 24/7, and seamlessly transfer calls to your team when human assistance is needed.
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
              <strong className="text-white font-medium">Webflora Technologies</strong> builds tailored AI voice agents integrated with your CRM, telephony provider, WhatsApp, and business workflows across India and globally.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#FF3B00] hover:bg-[#e03400] text-white font-bold text-xs sm:text-sm tracking-wide rounded-xl shadow-[0_0_25px_rgba(255,59,0,0.35)] transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Build Your AI Calling Agent</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:border-white/30"
              >
                <PhoneCall size={16} className="text-[#FF3B00]" />
                <span>Book a Free Consultation</span>
              </Link>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/10 text-[11px] text-neutral-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>Zero Latency Voice</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>Hindi & English Natural</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>Instant CRM Sync</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Call Simulator */}
          <div className="lg:col-span-6 w-full">
            <LiveCallVisualizer />
          </div>

        </div>
      </section>

      {/* Client Marquee */}
      <ClientMarquee />

      {/* ========================================================================= */}
      {/* SECTION 2: WHAT IS AN AI CALLING AGENT? */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-24 px-6 lg:px-8 border-b border-white/5 bg-gradient-to-b from-transparent via-[#050505] to-transparent">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF3B00]/30 bg-[#FF3B00]/5 text-[#FF3B00] text-xs font-mono font-semibold uppercase tracking-wider">
                Direct Definition & Understanding
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                What Is an <span className="text-[#FF3B00]">AI Calling Agent</span>?
              </h2>

              <p className="text-lg text-neutral-200 font-light leading-relaxed">
                An <strong className="text-white font-medium">AI calling agent</strong> is an intelligent voice-based system that can make and receive phone calls and communicate with customers using natural human language.
              </p>

              <p className="text-neutral-400 leading-relaxed font-light">
                Unlike traditional legacy IVR systems that force users through rigid press-button keypad menus (<em className="text-neutral-300">"Press 1 for Sales, Press 2 for Support"</em>), AI calling agents listen dynamically to full sentences, understand context, adapt responses in real time, extract parameters, and perform complex business actions automatically.
              </p>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <h4 className="text-white font-bold text-base flex items-center gap-2">
                  <Sparkles size={18} className="text-[#FF3B00]" />
                  Custom Engineering by Webflora Technologies
                </h4>
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  Webflora Technologies develops custom AI voice agent solutions specifically architected for lead generation, customer support, appointment scheduling, automated reminders, feedback surveys, follow-ups, and end-to-end business workflows.
                </p>
              </div>
            </div>

            {/* Visual comparison box */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              <div className="p-6 rounded-2xl bg-red-950/20 border border-red-500/20 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase text-red-400">Traditional IVR / Robot Callers</span>
                  <span className="text-[10px] bg-red-500/20 text-red-300 px-2 py-0.5 rounded">Outdated</span>
                </div>
                <ul className="space-y-2 text-xs text-neutral-400">
                  <li className="flex items-center gap-2">❌ Robotic, monotone synthetic voices</li>
                  <li className="flex items-center gap-2">❌ Rigid number pad menu navigation</li>
                  <li className="flex items-center gap-2">❌ Inability to handle interruptions or questions</li>
                  <li className="flex items-center gap-2">❌ 60%+ customer hangup & frustration rate</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#FF3B00]/10 border border-[#FF3B00]/30 space-y-3 shadow-[0_0_30px_rgba(255,59,0,0.15)]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase text-[#FF3B00]">Webflora AI Calling Agent</span>
                  <span className="text-[10px] bg-[#FF3B00]/30 text-white font-bold px-2 py-0.5 rounded">Next-Gen</span>
                </div>
                <ul className="space-y-2 text-xs text-neutral-200">
                  <li className="flex items-center gap-2">✅ Ultra-realistic natural voice with breathing & pacing</li>
                  <li className="flex items-center gap-2">✅ Speaks Hindi, English & Indian regional dialects</li>
                  <li className="flex items-center gap-2">✅ Handles instant interruptions & complex questions</li>
                  <li className="flex items-center gap-2">✅ Automatically books calendar slots & logs CRM leads</li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: AUTOMATE YOUR BUSINESS CALLS (FEATURES GRID) */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-24 px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF3B00]/30 bg-[#FF3B00]/5 text-[#FF3B00] text-xs font-mono font-semibold uppercase tracking-wider">
              Automated Business Workflows
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Turn Every Business Call Into an <span className="text-[#FF3B00]">Automated Workflow</span>
            </h2>
            <p className="text-neutral-300 font-light text-base md:text-lg">
              Your sales and support teams shouldn't have to spend hours making repetitive calls. Our AI calling agents handle routine conversations automatically while your team focuses on closing high-value deals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: PhoneCall,
                title: "AI Outbound Calling",
                desc: "Automatically call leads, customers, prospects, or uploaded customer databases based on your predefined sales triggers."
              },
              {
                icon: Headphones,
                title: "AI Inbound Calling",
                desc: "Allow customers to call your business 24/7 and receive instant, personalized answers without waiting in long queues."
              },
              {
                icon: FileCheck,
                title: "Lead Qualification",
                desc: "Ask predefined or dynamic qualification questions, understand customer budget & urgency, and tag high-intent leads."
              },
              {
                icon: RefreshCw,
                title: "Automated Follow-Ups",
                desc: "Automatically follow up with inbound inquiries or quotation requests who haven't responded or completed the next step."
              },
              {
                icon: Calendar,
                title: "Appointment Booking",
                desc: "Schedule product demos, consultations, doctor visits, or interviews directly into your Google Calendar or Calendly."
              },
              {
                icon: Users,
                title: "Customer Support",
                desc: "Resolve common customer questions, order status inquiries, and policy queries without needing human agent overhead."
              },
              {
                icon: PhoneForwarded,
                title: "Human Handoff",
                desc: "Seamlessly transfer live calls to your human sales or technical team whenever a caller asks for specialist assistance."
              },
              {
                icon: Database,
                title: "CRM Integration",
                desc: "Automatically push call summaries, audio recordings, customer transcripts, and lead statuses to your CRM in real time."
              }
            ].map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-8 rounded-3xl bg-[#09090b] border border-white/10 hover:border-[#FF3B00]/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_0_30px_rgba(255,59,0,0.15)] flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FF3B00]/10 border border-[#FF3B00]/30 flex items-center justify-center text-[#FF3B00] group-hover:bg-[#FF3B00] group-hover:text-white transition-colors duration-300">
                      <IconComp size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#FF3B00] transition-colors">{feat.title}</h3>
                    <p className="text-sm text-neutral-400 font-light leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: AI CALLING AGENT FEATURES (16 PILLARS) */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-24 px-6 lg:px-8 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF3B00]/30 bg-[#FF3B00]/5 text-[#FF3B00] text-xs font-mono font-semibold uppercase tracking-wider">
              Comprehensive Feature Engine
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Powerful AI Voice Agent Features for <span className="text-[#FF3B00]">Your Business</span>
            </h2>
            <p className="text-neutral-300 font-light text-base md:text-lg">
              Engineered with state-of-the-art Voice AI LLMs, sub-second latency speech synthesis, and enterprise-grade reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Natural conversational voice", desc: "Human-like breathing, cadence, and empathy" },
              { title: "Hindi, English & Multilingual", desc: "Speaks Hindi, English, Hinglish, & regional dialects" },
              { title: "Inbound & Outbound Calling", desc: "Full two-way communication capabilities" },
              { title: "Lead Qualification", desc: "Smart filtering based on custom business criteria" },
              { title: "Automated Follow-ups", desc: "Scheduled callback cadences for missed prospects" },
              { title: "Appointment Scheduling", desc: "Instant sync with calendars and booking slots" },
              { title: "Customer Verification", desc: "OTP verification and phone number confirmation" },
              { title: "FAQ Handling", desc: "Trained on your knowledge base, PDFs, & FAQs" },
              { title: "Call Transfer to Humans", desc: "Warm handoff with packaged conversation context" },
              { title: "Call Recording & Transcription", desc: "Searchable transcripts with speaker diarization" },
              { title: "CRM Integration", desc: "Two-way data exchange with HubSpot, Zoho, LeadSquared" },
              { title: "API & Webhook Integration", desc: "Trigger external webhooks, SMS, and emails" },
              { title: "Automated Data Collection", desc: "Extract names, budget, dates, and intent" },
              { title: "Call Analytics & Reporting", desc: "Conversion rates, sentiment analysis, and call duration" },
              { title: "Custom Conversation Flows", desc: "Visual decision trees and prompt orchestration" },
              { title: "24/7/365 Availability", desc: "Zero downtime, handles thousands of concurrent calls" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#FF3B00]/40 transition-all duration-300 flex items-start gap-3.5 group hover:bg-white/[0.04]"
              >
                <div className="w-8 h-8 rounded-xl bg-[#FF3B00]/10 border border-[#FF3B00]/20 flex items-center justify-center text-[#FF3B00] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#FF3B00] transition-colors">{item.title}</h4>
                  <p className="text-xs text-neutral-400 font-light mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: AI CALLING AGENT FOR DIFFERENT INDUSTRIES */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-24 px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF3B00]/30 bg-[#FF3B00]/5 text-[#FF3B00] text-xs font-mono font-semibold uppercase tracking-wider">
              Vertical Customization
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              AI Calling Solutions Built for <span className="text-[#FF3B00]">Your Industry</span>
            </h2>
            <p className="text-neutral-300 font-light text-base md:text-lg">
              Tailored dialogue design, compliance guardrails, and integrations engineered for your specific business sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Education & Coaching",
                desc: "Automatically contact student enquiries, understand course requirements, provide fee and syllabus info, qualify prospective candidates, and schedule counselling calls with academic mentors."
              },
              {
                icon: Home,
                title: "Real Estate & Builders",
                desc: "Instantly contact property enquiries, capture budget and location preferences, qualify buyer intent, schedule on-site visits, and forward high-intent hot leads directly to sales executives."
              },
              {
                icon: HeartPulse,
                title: "Healthcare & Clinics",
                desc: "Automate patient appointment bookings, voice confirmations, OPD reminders, and general clinic inquiries while seamlessly routing urgent medical conversations to hospital staff."
              },
              {
                icon: ShoppingBag,
                title: "E-Commerce & D2C Brands",
                desc: "Handle order confirmation calls, Cash-on-Delivery (COD) verification, shipping updates, customer feedback collection, and automated abandoned cart recovery outreach."
              },
              {
                icon: Plane,
                title: "Travel & Hospitality",
                desc: "Manage holiday booking inquiries, hotel reservation confirmations, check-in reminders, customer FAQs, customized itinerary follow-ups, and post-stay feedback collection."
              },
              {
                icon: Landmark,
                title: "Financial Services & Insurance",
                desc: "Automate loan eligibility checks, policy renewal voice reminders, payment collection alerts, and prospect qualification while upholding strict regulatory compliance standards."
              }
            ].map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#09090b] border border-white/10 hover:border-[#FF3B00]/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(255,59,0,0.12)]"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF3B00] group-hover:bg-[#FF3B00] group-hover:text-white transition-all duration-300">
                      <IconComp size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#FF3B00] transition-colors">{ind.title}</h3>
                    <p className="text-neutral-400 font-light text-sm leading-relaxed">{ind.desc}</p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-white/5">
                    <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold text-[#FF3B00] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                      <span>Deploy for {ind.title.split(" ")[0]}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: AI CALLING USE CASES */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-24 px-6 lg:px-8 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF3B00]/30 bg-[#FF3B00]/5 text-[#FF3B00] text-xs font-mono font-semibold uppercase tracking-wider">
              Operational Impact
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              What Can an <span className="text-[#FF3B00]">AI Calling Agent Do?</span>
            </h2>
            <p className="text-neutral-300 font-light text-base md:text-lg">
              Explore the core voice automation use cases where AI calling agents outperform manual dialing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Lead Generation",
                desc: "Automatically dial fresh inbound inquiries within 10 seconds of form submission. Engage prospects while interest is hot and transfer qualified buyers."
              },
              {
                title: "Lead Follow-Up",
                desc: "Never let leads go cold. The AI agent executes structured follow-up call cadences according to your business workflow."
              },
              {
                title: "Appointment Confirmation",
                desc: "Call clients automatically to confirm demos, clinic visits, site visits, or consultations, drastically slashing no-show rates."
              },
              {
                title: "Reminder Calls",
                desc: "Deliver personalized voice reminders for pending invoice payments, webinar events, live classes, renewal dates, and deadlines."
              },
              {
                title: "Customer Surveys & Feedback",
                desc: "Gather structured Net Promoter Scores (NPS) and voice feedback through natural dialog and automatically store ratings for sentiment analytics."
              },
              {
                title: "Reactivation Campaigns",
                desc: "Call older, dormant lead databases to discover reactivated demand and generate pipeline from leads you had already written off."
              },
              {
                title: "Customer Support Tier 1",
                desc: "Resolve routine FAQs, account balance checks, and status requests instantly while escalating complex tickets to human experts."
              }
            ].map((uc, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#09090b] border border-white/10 hover:border-[#FF3B00]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-xs font-mono font-bold text-[#FF3B00]">USE CASE 0{idx + 1}</div>
                  <h3 className="text-xl font-bold text-white">{uc.title}</h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: HOW IT WORKS (6 STEPS) */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-24 px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF3B00]/30 bg-[#FF3B00]/5 text-[#FF3B00] text-xs font-mono font-semibold uppercase tracking-wider">
              Step-By-Step Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              How Our <span className="text-[#FF3B00]">AI Calling Agent Works</span>
            </h2>
            <p className="text-neutral-300 font-light text-base md:text-lg">
              From data integration to live calling, our 6-step deployment lifecycle ensures robust, enterprise-grade execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Connect Your Business Data",
                desc: "We integrate your CRM, customer database, website forms, telephony trunk (Twilio/Exotel), or existing ERP software."
              },
              {
                step: "02",
                title: "Define the Conversation",
                desc: "We engineer customized conversation flows, voice personas, objection handling prompts, and human escalation rules."
              },
              {
                step: "03",
                title: "AI Makes or Receives Calls",
                desc: "The AI agent communicates with callers using ultra-realistic voice synthesis in Hindi, English, and regional accents."
              },
              {
                step: "04",
                title: "Understand & Qualify",
                desc: "Using advanced NLP, the agent collects details, measures buyer intent, and determines the appropriate next step."
              },
              {
                step: "05",
                title: "Take Automated Action",
                desc: "The agent updates your CRM, books calendar slots, triggers WhatsApp messages, or completes a live human transfer."
              },
              {
                step: "06",
                title: "Track Everything",
                desc: "Access full call recordings, transcripts, sentiment scores, and conversion analytics on your connected analytics dashboard."
              }
            ].map((st, idx) => (
              <div
                key={idx}
                className="relative p-8 rounded-3xl bg-[#09090b] border border-white/10 hover:border-[#FF3B00]/50 transition-all duration-300 group"
              >
                <div className="text-4xl font-black font-mono text-[#FF3B00]/40 group-hover:text-[#FF3B00] transition-colors mb-4">
                  {st.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{st.title}</h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: AI CALLING AGENT VS TRADITIONAL CALLING (TABLE) */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-24 px-6 lg:px-8 border-b border-white/5 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF3B00]/30 bg-[#FF3B00]/5 text-[#FF3B00] text-xs font-mono font-semibold uppercase tracking-wider">
              Comparative Analysis
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Move Beyond <span className="text-[#FF3B00]">Traditional Calling</span>
            </h2>
            <p className="text-neutral-300 font-light text-base md:text-lg">
              Compare the operational advantages of Webflora AI Voice Agents over manual telecalling teams.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#09090b] shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="p-5 md:p-6 text-sm font-bold text-neutral-400 uppercase font-mono">Calling Feature</th>
                  <th className="p-5 md:p-6 text-sm font-bold text-neutral-400 uppercase font-mono">Traditional Calling</th>
                  <th className="p-5 md:p-6 text-sm font-bold text-[#FF3B00] uppercase font-mono bg-[#FF3B00]/5">Webflora AI Calling Agent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {[
                  { feature: "Calling Mechanism", trad: "Manual human dialing", ai: "100% Automated concurrent dialing" },
                  { feature: "Operating Hours", trad: "Limited to 8-hour shifts", ai: "24/7/365 Continuous availability" },
                  { feature: "Repetitive Tasks", trad: "Human fatigue & high churn", ai: "Never gets tired or loses tone quality" },
                  { feature: "Lead Qualification", trad: "Inconsistent criteria", ai: "Standardized, automated scoring" },
                  { feature: "Follow-Up Cadence", trad: "Frequent missed follow-ups", ai: "Instant automated trigger workflows" },
                  { feature: "Data Entry & Logging", trad: "Manual, slow, error-prone", ai: "Real-time CRM & API synchronization" },
                  { feature: "Scalability", trad: "High hiring & training costs", ai: "Scale from 10 to 100,000+ calls instantly" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 md:p-6 font-semibold text-white">{row.feature}</td>
                    <td className="p-5 md:p-6 text-neutral-400">{row.trad}</td>
                    <td className="p-5 md:p-6 font-medium text-emerald-400 bg-[#FF3B00]/[0.02]">{row.ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: CUSTOM AI CALLING AGENT (TAILORED) */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-24 px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="p-8 md:p-14 rounded-3xl bg-gradient-to-br from-[#0c0c0e] via-[#08080a] to-[#120804] border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF3B00]/10 blur-[100px] pointer-events-none" />

            <div className="max-w-3xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF3B00]/30 bg-[#FF3B00]/5 text-[#FF3B00] text-xs font-mono font-semibold uppercase tracking-wider">
                Bespoke Solutions
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Your Business. <span className="text-[#FF3B00]">Your AI Calling Agent.</span>
              </h2>
              <p className="text-lg text-neutral-300 font-light leading-relaxed">
                Every business has a distinct customer journey and calling process. That's why Webflora Technologies never relies on a one-size-fits-all voice template. We design AI calling agents architected around your specific business objectives, customer questions, compliance requirements, and sales targets.
              </p>
              <p className="text-neutral-400 font-light leading-relaxed text-sm">
                Whether you need an outbound engine for real estate site visits, education admissions, healthcare reminders, or large-scale customer support, we construct the custom logic, prompt engineering, and API pipelines to match your needs perfectly.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF3B00] hover:bg-[#e03400] text-white font-bold text-sm rounded-2xl shadow-lg transition-all"
                >
                  <span>Request Custom Voice Architecture</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: INTEGRATIONS */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-24 px-6 lg:px-8 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF3B00]/30 bg-[#FF3B00]/5 text-[#FF3B00] text-xs font-mono font-semibold uppercase tracking-wider">
              Ecosystem Connectivity
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Connect Your AI Calling Agent With <span className="text-[#FF3B00]">Your Existing Tools</span>
            </h2>
            <p className="text-neutral-300 font-light text-base md:text-lg">
              Your AI calling agent becomes a seamless part of your operational ecosystem rather than an isolated silo.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "CRM Platforms", desc: "HubSpot, Zoho, Salesforce" },
              { name: "Website Portals", desc: "Next.js, WordPress, Webflow" },
              { name: "Google Sheets", desc: "Real-time spreadsheet sync" },
              { name: "Calendars", desc: "Google Cal, Calendly, Cal.com" },
              { name: "Lead Forms", desc: "Meta Ads, Google Ads Forms" },
              { name: "WhatsApp API", desc: "Instant follow-up messages" },
              { name: "Email Gateways", desc: "SMTP, SendGrid, Resend" },
              { name: "REST APIs", desc: "Custom JSON endpoints" },
              { name: "Webhooks", desc: "Real-time event streaming" },
              { name: "ERP Systems", desc: "Enterprise database hooks" },
              { name: "Custom Software", desc: "Internal corporate portals" },
              { name: "n8n Automation", desc: "Visual automation pipelines" }
            ].map((tool, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#09090b] border border-white/10 hover:border-[#FF3B00]/40 transition-all text-center flex flex-col items-center justify-center gap-2 hover:bg-white/[0.02]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FF3B00]/10 flex items-center justify-center text-[#FF3B00]">
                  <Layers size={20} />
                </div>
                <div className="text-sm font-bold text-white">{tool.name}</div>
                <div className="text-[11px] text-neutral-500 font-light">{tool.desc}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 11: WHY WEBFLORA TECHNOLOGIES? */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-24 px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF3B00]/30 bg-[#FF3B00]/5 text-[#FF3B00] text-xs font-mono font-semibold uppercase tracking-wider">
                Engineering Authority
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Build Your AI Calling Agent With <span className="text-[#FF3B00]">Webflora Technologies</span>
              </h2>
              <p className="text-neutral-300 font-light leading-relaxed">
                Webflora Technologies builds customized AI automation solutions for forward-thinking enterprises that want to reduce manual repetitive labor, eliminate lost leads, and automate high-touch customer communication.
              </p>
              <p className="text-neutral-400 font-light text-sm leading-relaxed">
                From initial conversation design and Voice LLM prompt engineering to low-latency telephony infrastructure and CRM integration, we manage the complete development lifecycle.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Custom AI Voice Solutions", desc: "Engineered specifically for your exact business use case" },
                { title: "Business-Specific Conversation Flows", desc: "No generic bots; bespoke logic tailored to your market" },
                { title: "Deep CRM & API Integration", desc: "Flawless real-time data sync across all your systems" },
                { title: "Hindi, Hinglish & English", desc: "Natural conversational tone that matches Indian nuances" },
                { title: "Lead Generation Automation", desc: "Instant dialing for maximum sales conversion rates" },
                { title: "n8n Workflow Automation", desc: "Powerful, low-cost multi-step automation engines" },
                { title: "Custom Analytics Dashboards", desc: "Deep operational visibility into every single conversation" },
                { title: "End-to-End SLA Support", desc: "Long-term monitoring, latency tuning, and model upgrades" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#09090b] border border-white/10 flex items-start gap-3.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#FF3B00]/10 flex items-center justify-center text-[#FF3B00] shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-neutral-400 font-light mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 12: CTA SECTION */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-24 px-6 lg:px-8 border-b border-white/5 bg-gradient-to-b from-black via-[#110500] to-black">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF3B00]/40 bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono font-bold uppercase tracking-wider">
            Start Your Voice Automation Journey
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Ready to Automate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B00] via-orange-400 to-amber-400">Business Calls</span>?
          </h2>

          <p className="text-lg md:text-xl text-neutral-300 font-light max-w-3xl mx-auto leading-relaxed">
            Tell us how your current calling process works, and our team will help you identify which conversations can be automated with AI. From lead qualification and follow-ups to customer support and appointment booking, Webflora Technologies builds the solution around your workflow.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FF3B00] hover:bg-[#e03400] text-white font-bold text-base rounded-2xl shadow-[0_0_40px_rgba(255,59,0,0.4)] transition-all duration-300 hover:scale-105"
            >
              <span>Talk to an AI Expert</span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-9 py-5 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-base backdrop-blur-md transition-all duration-300"
            >
              <Calendar size={20} className="text-[#FF3B00]" />
              <span>Request a Free Consultation</span>
            </Link>
          </div>

          <div className="pt-6 text-xs text-neutral-500 font-mono">
            Fast setup • Zero disruption to existing telephony • Dedicated engineer support
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 13: FAQ (COMPREHENSIVE FOR AEO & SEO) */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF3B00]/30 bg-[#FF3B00]/5 text-[#FF3B00] text-xs font-mono font-semibold uppercase tracking-wider">
              Answers & Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Frequently Asked Questions About <span className="text-[#FF3B00]">AI Calling Agents</span>
            </h2>
            <p className="text-neutral-400 font-light text-base">
              Clear, direct answers to common questions about voice AI capabilities, language models, CRM integrations, and pricing.
            </p>
          </div>

          <CustomFAQAccordion items={faqData} />

        </div>
      </section>

      {/* ========================================================================= */}
      {/* STRUCTURED DATA: JSON-LD SCHEMAS (FULL SEO, GEO & AEO) */}
      {/* ========================================================================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://webfloratechnologies.com/ai-calling-agent#service",
                "name": "AI Calling Agent & Voice Bot Development Services",
                "serviceType": "AI Voice Calling Agent Development",
                "provider": {
                  "@type": "Organization",
                  "name": "Webflora Technologies",
                  "url": "https://webfloratechnologies.com",
                  "logo": "https://webfloratechnologies.com/title-logo.png",
                  "telephone": "+918540814729",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri",
                    "addressLocality": "Patna",
                    "addressRegion": "Bihar",
                    "postalCode": "800016",
                    "addressCountry": "IN"
                  }
                },
                "areaServed": [
                  { "@type": "Country", "name": "India" },
                  { "@type": "AdministrativeArea", "name": "Bihar" },
                  { "@type": "City", "name": "Patna" }
                ],
                "description": "Webflora Technologies designs and deploys custom AI calling agents for outbound sales qualification, inbound customer support, automated appointment booking, and Hindi/English multilingual voice workflows.",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "AI Voice Calling Solutions",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "AI Outbound Calling Agent"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "AI Inbound Voice Support Agent"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Multilingual Hindi & English Voice Bot"
                      }
                    }
                  ]
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://webfloratechnologies.com/ai-calling-agent#webpage",
                "url": "https://webfloratechnologies.com/ai-calling-agent",
                "name": "AI Calling Agent for Smarter, Automated Business Calls | Webflora Technologies",
                "description": "Automate customer calls with intelligent AI calling agents that speak naturally, qualify leads, schedule appointments, and transfer calls to your human team.",
                "publisher": {
                  "@type": "Organization",
                  "name": "Webflora Technologies",
                  "url": "https://webfloratechnologies.com"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://webfloratechnologies.com/ai-calling-agent#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://webfloratechnologies.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://webfloratechnologies.com/it-company-in-patna"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "AI Calling Agent",
                    "item": "https://webfloratechnologies.com/ai-calling-agent"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://webfloratechnologies.com/ai-calling-agent#faq",
                "mainEntity": faqData.map((faq) => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }
            ]
          })
        }}
      />

    </main>
  );
}
