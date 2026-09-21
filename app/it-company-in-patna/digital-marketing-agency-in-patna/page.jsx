"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import {
  Search,
  MapPin,
  MousePointerClick,
  Share2,
  Instagram,
  Zap,
  TrendingUp,
  BarChart3,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock,
  Phone,
  PhoneCall,
  Send,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Target,
  FileText,
  DollarSign,
  Users,
  Eye,
  Check,
  Building2,
  Layers,
  Cpu,
  Globe
} from "lucide-react";
import ClientMarquee from "../../Components/ClientMarquee";
import GoogleReviewsSection from "../../Components/GoogleReviewsSection";
import API_BASE_URL from "../../config";

export default function DigitalMarketingPatnaPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeServiceTab, setActiveServiceTab] = useState("seo");
  const [activeChapter, setActiveChapter] = useState(0);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    serviceNeeded: "Full Digital Marketing (SEO + Ads)",
    businessType: "Coaching / Education",
    monthlyBudget: "₹18,999 - ₹34,999",
    message: ""
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);

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
        setFormSuccess(true);
      } else {
        alert("Something went wrong. Please call us directly at +91 8540814729.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please call +91 8540814729 or contact us on WhatsApp.");
    } finally {
      setFormLoading(false);
    }
  };

  const marketingServices = [
    {
      id: "seo",
      title: "Search Engine Optimization (SEO)",
      icon: Search,
      headline: "Improve Organic Search Visibility on Google",
      desc: "We deliver technical, on-page, and off-page SEO designed to improve your organic rankings for high-intent search queries. Build a sustainable compounding stream of website visitors without paying per click.",
      features: [
        "In-depth keyword research for transactional search intent",
        "Technical site audits, crawl error fixes & XML sitemaps",
        "On-page content optimization & semantic heading structures",
        "Structured Schema.org markup for rich search snippets",
        "Authoritative local citation building and backlinks",
        "Monthly keyword ranking & organic traffic tracking"
      ],
      bestFor: "Businesses seeking sustainable long-term customer acquisition with compounding organic ROI."
    },
    {
      id: "local-seo",
      title: "Local SEO & Google Maps",
      icon: MapPin,
      headline: "Google Business Profile & Local 3-Pack Optimization",
      desc: "We optimize your digital presence for nearby customers actively searching in Patna and Bihar. Capture high-intent footfall, direct phone calls, and direction requests across local neighborhoods.",
      features: [
        "Google Business Profile (GBP) verification & full optimization",
        "NAP (Name, Address, Phone) consistency across regional directories",
        "Targeting localized search queries in Boring Road, Kankarbagh, Bailey Road",
        "Automated customer review generation and response workflows",
        "Local landing page creation with geo-specific content",
        "Google Maps ranking audits and competitor positioning"
      ],
      bestFor: "Coaching institutes, clinics, retail showrooms, restaurants, and local service providers in Patna."
    },
    {
      id: "google-ads",
      title: "Google Ads (PPC)",
      icon: MousePointerClick,
      headline: "High-Intent Pay-Per-Click Advertising Campaigns",
      desc: "Place your business at the exact moment customers are actively searching for your services on Google. We build, manage, and optimize high-converting Search, Display, and YouTube campaigns.",
      features: [
        "High-intent commercial search keyword structuring",
        "Negative keyword pruning to eliminate wasted ad budget",
        "Compelling ad copywriting with dynamic text extensions",
        "Conversion tracking setup via Google Tag Manager (GTM)",
        "A/B testing of ad copies and landing page variants",
        "Direct client billing with 100% budget transparency"
      ],
      bestFor: "Businesses needing immediate student admissions, doctor appointments, or urgent customer inquiries."
    },
    {
      id: "meta-ads",
      title: "Meta Ads (Facebook & Instagram)",
      icon: Share2,
      headline: "Targeted Audience Demand Generation",
      desc: "Reach your ideal customers during their daily social media browsing. We engineer high-performing Facebook and Instagram campaigns with custom creative assets and structured conversion funnels.",
      features: [
        "Custom visual creative design & compelling ad copywriting",
        "Interest, demographic, and lookalike audience targeting",
        "Meta Pixel and Conversions API (CAPI) server tracking",
        "Instant lead forms with automated CRM & WhatsApp sync",
        "Advantage+ shopping campaigns for D2C product catalogs",
        "Retargeting funnels to convert previous website visitors"
      ],
      bestFor: "Real estate developers, coaching batches, fashion brands, restaurants, and D2C businesses."
    },
    {
      id: "social-media",
      title: "Social Media Marketing (SMM)",
      icon: Instagram,
      headline: "Brand Storytelling, Community Growth & Short-Form Video",
      desc: "Build authentic brand authority and customer trust across Instagram, Facebook, and LinkedIn. We handle end-to-end social media strategy, design, and short-form video production.",
      features: [
        "Monthly strategic content calendars and publishing schedules",
        "Custom graphic designs, carousel posts, and brand banners",
        "Scripting, storyboard guidance, and editing for Reels & Shorts",
        "Caption copywriting with relevant hashtag research",
        "Community engagement and comment monitoring",
        "Consistent brand voice aligned with your business goals"
      ],
      bestFor: "Brands looking to establish market authority, customer loyalty, and organic social reach."
    },
    {
      id: "cro-web",
      title: "Conversion Web & Next.js Funnels",
      icon: Zap,
      headline: "High-Performance Landing Pages Designed to Convert",
      desc: "Digital marketing without a fast, conversion-optimized landing page leads to wasted ad spend. We engineer sub-second Next.js landing pages paired with clear calls-to-action to maximize lead conversion rates.",
      features: [
        "Sub-second page load times with Next.js static generation",
        "Mobile-first responsive UX/UI layouts tested for high conversions",
        "Direct WhatsApp and telephone call click triggers",
        "Clear value propositions and objection-handling structures",
        "Google Analytics 4 (GA4) and GTM custom event logging",
        "Automated lead delivery to WhatsApp and email in real time"
      ],
      bestFor: "Any business running paid advertising that wants to reduce cost-per-lead and increase form completions."
    }
  ];

  const guideChapters = [
    {
      title: "How Customers Search for Local Businesses in Patna",
      content: "Consumer search behavior in Patna is overwhelmingly mobile-first. When residents in areas like Boring Road, Kankarbagh, Bailey Road, or Rajendra Nagar look for services (such as coaching institutes, healthcare clinics, interior designers, or restaurants), they predominantly use localized Google search and Google Maps queries like 'best JEE coaching in Boring Road' or 'pediatrician near Bailey Road'. Ensuring your business appears prominently with complete contact information, customer reviews, and fast mobile pages is the first step toward digital discovery."
    },
    {
      title: "SEO vs Google Ads for a Patna Business",
      content: "Both channels serve distinct, complementary purposes. Google Ads (PPC) delivers immediate visibility at the top of search results, making it ideal for time-sensitive demands such as annual coaching batch admissions, seasonal real estate launches, or immediate medical appointments. Search Engine Optimization (SEO), on the other hand, builds compounding long-term equity. Once you achieve top organic rankings, your website continues to generate qualified inquiries month after month without paying for individual clicks."
    },
    {
      title: "How Google Maps and Local SEO Work",
      content: "Google determines local search ranking based on three primary factors: Relevance (how well your profile matches the search query), Distance (how close your location is to the searcher), and Prominence (your online reputation, reviews, and citations). To rank in Google's Local 3-Pack, a business must have a fully verified Google Business Profile, accurate category selections, consistent Name-Address-Phone (NAP) records across online directories, and a steady stream of authentic client reviews."
    },
    {
      title: "How Much Digital Marketing Costs in Patna",
      content: "Digital marketing costs in Patna typically consist of two components: the agency management retainer and the direct advertising spend. Management retainers at Webflora start from ₹8,999/month for local businesses, while multi-channel growth packages range from ₹18,999 to ₹34,999/month based on the scope of SEO, content creation, social media, and ad management. Advertising budget is paid directly by the client to Google or Meta, ensuring complete financial transparency."
    },
    {
      title: "How to Measure Leads and Marketing ROI",
      content: "Meaningful marketing measurement focuses on business outcomes rather than vanity metrics like impressions or follower counts. We implement Google Tag Manager (GTM) and Google Analytics 4 (GA4) to track specific conversion events: form completions, telephone call clicks, and WhatsApp chat initiations. By connecting these events with your CRM or sales records, you can calculate your exact Cost Per Lead (CPL) and Return on Ad Spend (ROAS)."
    },
    {
      title: "How AI Search and AEO/GEO Are Changing Discovery",
      content: "Search is expanding beyond traditional search result pages. Users increasingly receive synthesized answers from AI systems such as Google AI Overviews, ChatGPT Search, and Perplexity. Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) focus on establishing clear entity relationships, publishing verifiable business facts, answering common user questions directly, and utilizing structured Schema.org data so that AI models recognize and cite your business as a trusted source."
    }
  ];

  const glossaryTerms = [
    {
      term: "SEO (Search Engine Optimization)",
      def: "The practice of improving a website's technical architecture, content quality, and authority to earn organic (non-paid) search rankings on Google.",
      icon: Search
    },
    {
      term: "Local SEO",
      def: "Optimizing a physical business's online presence to rank prominently on Google Maps and localized neighborhood search results.",
      icon: MapPin
    },
    {
      term: "PPC (Pay-Per-Click)",
      def: "An online advertising model where advertisers pay a fee each time an interested user clicks on one of their search or display ads.",
      icon: MousePointerClick
    },
    {
      term: "ROAS (Return on Ad Spend)",
      def: "A performance marketing metric calculating total revenue generated for every rupee spent on advertising campaigns (Revenue ÷ Ad Spend).",
      icon: TrendingUp
    },
    {
      term: "CPL (Cost Per Lead)",
      def: "The average advertising and marketing cost incurred to generate a single qualified business inquiry or prospective customer contact.",
      icon: DollarSign
    },
    {
      term: "CRO (Conversion Rate Optimization)",
      def: "The systematic process of improving landing page design, copywriting, and user flow to increase the percentage of visitors who become leads.",
      icon: Zap
    },
    {
      term: "AEO (Answer Engine Optimization)",
      def: "Structuring content with direct, factual answers and Schema.org markup to be surfaced in AI answer engines like Google AI Overviews.",
      icon: Sparkles
    },
    {
      term: "GEO (Generative Engine Optimization)",
      def: "Optimizing brand entity signals, authoritative mentions, and knowledge graphs so AI models understand and reference your business.",
      icon: Cpu
    },
    {
      term: "GA4 (Google Analytics 4)",
      def: "Google's modern event-based analytics platform for tracking website user behavior, acquisition channels, and conversion paths.",
      icon: BarChart3
    },
    {
      term: "GTM (Google Tag Manager)",
      def: "A tag management system that allows marketing teams to deploy and update tracking pixels without editing website source code directly.",
      icon: FileText
    }
  ];

  const marketingFaqs = [
    {
      q: "What does a digital marketing agency in Patna do?",
      a: "A digital marketing agency in Patna helps businesses attract customers through online channels such as Google Search, Google Ads, social media, local search, content marketing, and conversion-focused websites. Webflora Technologies provides these services along with AEO, GEO, analytics, and AI automation for businesses in Patna, Bihar, and across India."
    },
    {
      q: "How much does digital marketing cost in Patna?",
      a: "Digital marketing costs in Patna vary according to the services, competition, target locations, content requirements, and advertising scope. Webflora's current plans start from ₹8,999/month for the services included in the Starter package, while multi-channel growth packages range from ₹18,999 to ₹34,999/month. Package fees cover listed marketing services; Google/Meta advertising budget is paid directly to the platforms."
    },
    {
      q: "Which digital marketing services does Webflora Technologies provide?",
      a: "Webflora Technologies provides comprehensive digital marketing solutions including Search Engine Optimization (SEO), Local SEO (Google Maps / Google Business Profile), Google Ads (Search, Display, YouTube PPC), Meta Ads (Facebook & Instagram), Social Media Marketing (SMM), Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), conversion rate optimization (CRO), high-speed Next.js landing pages, and CRM lead tracking integrations."
    },
    {
      q: "How long does SEO take to show measurable results?",
      a: "Organic search visibility is a compounding long-term asset. Technical audit fixes and Google Maps optimizations can show initial ranking improvements within 4 to 8 weeks, while ranking for competitive regional and commercial terms on Google's first page typically requires 3 to 6 months of structured on-page optimization, content publishing, and local authority building."
    },
    {
      q: "Do you provide Local SEO for businesses targeting Patna neighborhoods?",
      a: "Yes. We optimize your Google Business Profile (GBP), manage categories, build consistent NAP citations across regional directories, target localized neighborhood keywords (such as Boring Road, Kankarbagh, Bailey Road, Fraser Road, and Patliputra), and implement systematic review collection workflows to improve visibility on Google Maps and Local 3-Pack results."
    },
    {
      q: "Do you manage Google Ads and pay-per-click (PPC) campaigns?",
      a: "Yes. We set up, manage, and optimize Google Search, Display, Remarketing, and YouTube Ads. We conduct deep keyword research, structure high-intent match types, eliminate negative search terms to prevent wasted spend, and connect conversion tracking to measure qualified inquiries directly."
    },
    {
      q: "Do you manage Meta (Facebook & Instagram) advertising?",
      a: "Yes. We manage end-to-end Meta advertising including custom graphic creative design, compelling ad copywriting, audience interest and lookalike targeting, Meta Pixel / Conversions API tracking setup, and campaign optimization focused on cost-per-lead (CPL) and return on ad spend (ROAS)."
    },
    {
      q: "Do you provide social media marketing and content creation?",
      a: "Yes. We manage business profiles across Instagram, Facebook, and LinkedIn. Our deliverables include monthly content calendars, custom graphic design, caption copywriting, and scripting/editing support for short-form video reels to build brand authority and customer engagement."
    },
    {
      q: "Can you help our business optimize for AI search, AEO, and GEO?",
      a: "Yes. We optimize your brand for answer engines and generative search tools like Google AI Overviews, ChatGPT Search, and Perplexity by structuring entity data, creating clear question-and-answer content, publishing verifiable business facts, and implementing structured Schema.org markup."
    },
    {
      q: "Do you work with businesses outside Patna?",
      a: "Yes. While our headquarters are in Patna, Bihar, our digital marketing team serves businesses across Bihar (Muzaffarpur, Gaya, Bhagalpur, Darbhanga), pan-India (Delhi, Mumbai, Bangalore, Pune), and international clients remotely through agile communication and transparent reporting."
    },
    {
      q: "How do you measure and report digital marketing results?",
      a: "We track meaningful business metrics rather than vanity impressions. This includes organic search impressions, qualified lead form submissions, direct phone calls, WhatsApp inquiries, cost-per-lead (CPL), and return on ad spend (ROAS) using Google Analytics 4 (GA4), Google Tag Manager (GTM), and CRM lead attribution dashboards."
    },
    {
      q: "How can I get started with a digital marketing campaign?",
      a: "You can request a free consultation through our website form, call our Patna office at +91 8540814729, or message us on WhatsApp. We will audit your current online visibility, identify growth opportunities, and provide a transparent, milestone-driven digital marketing roadmap."
    }
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-[#ff3b00] selection:text-white font-sans overflow-x-hidden">
      
      {/* ── AMBIENT BACKGROUND GLOWS ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-[#ff3b00]/10 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-[#ff3b00]/8 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10">

        {/* ── BEAUTIFUL, MODERN & PROFESSIONAL HERO SECTION ── */}
        <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#030303] pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-white/10">
          
          {/* Background Grid Pattern & Ambient Glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div className="creative-grid-bg opacity-30" />
            <div className="creative-grid-dots opacity-30" />

            {/* Rising glowing particles */}
            <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_10px_#ff3c00,0_0_20px_#ff3c00]" style={{ left: "calc(50px * 2)", "--duration": "10s", "--delay": "0s" }} />
            <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_12px_#ff3c00,0_0_24px_#ff3c00]" style={{ left: "calc(50px * 7)", "--duration": "14s", "--delay": "2s" }} />
            <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6,0_0_20px_#3b82f6]" style={{ left: "calc(50px * 14)", "--duration": "11s", "--delay": "1s" }} />
            <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-orange-400 rounded-full shadow-[0_0_10px_#fb923c,0_0_20px_#fb923c]" style={{ left: "calc(50px * 20)", "--duration": "13s", "--delay": "4s" }} />
            <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_12px_#ff3c00,0_0_24px_#ff3c00]" style={{ left: "calc(50px * 26)", "--duration": "9s", "--delay": "3s" }} />

            {/* Centered glowing orb behind content */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] md:w-[650px] md:h-[650px] rounded-full opacity-25"
              style={{ background: "radial-gradient(circle, rgba(255,59,0,0.22) 0%, rgba(0,0,0,0) 70%)" }}
            />
            <div
              className="absolute right-[15%] top-1/4 w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full opacity-15"
              style={{ background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(0,0,0,0) 70%)" }}
            />
          </div>

          {/* Floating subtle ambient accents (Large 2XL desktop only) */}
          <div className="absolute right-[2%] top-[20%] hidden 2xl:block opacity-10 animate-float-1 pointer-events-none text-white text-3xl font-mono select-none" aria-hidden="true">
            {"<growth_roi />"}
          </div>
          <div className="absolute left-[2%] bottom-[20%] hidden 2xl:block opacity-10 animate-float-2 pointer-events-none text-white text-3xl font-mono select-none" aria-hidden="true">
            {"{ scale_funnel }"}
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
            
            {/* Modern Glassmorphic Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border border-orange-500/25 bg-orange-500/10 backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(255,59,0,0.12)] max-w-full justify-center flex-wrap">
              <span className="w-2 h-2 rounded-full bg-[#ff3b00] animate-ping shrink-0" />
              <span className="text-[11px] sm:text-xs tracking-wider text-neutral-200 font-mono uppercase">
                Patna HQ • MSME: <strong className="text-white font-mono">UDYAM-BR-26-0183379</strong>
              </span>
              <span className="text-neutral-500 hidden sm:inline">•</span>
              <span className="text-yellow-400 font-semibold text-xs flex items-center gap-1">
                ★ 4.9/5 <span className="text-neutral-300 font-light">Google Rating</span>
              </span>
            </div>

            {/* Main H1 - Grand, Authoritative & Beautiful */}
            <h1 className="font-display font-extrabold tracking-tight leading-[1.08] text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.6rem] max-w-5xl mx-auto text-white mb-6">
              Digital Marketing Agency in Patna for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#FF3B00] to-red-500 font-black drop-shadow-[0_0_35px_rgba(255,59,0,0.35)]">
                SEO, Google Ads & Business Growth
              </span>
            </h1>

            {/* Subtext description */}
            <p className="text-neutral-300 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-6 px-1 sm:px-0">
              <strong className="text-white font-medium">Webflora Technologies</strong> is a premier digital marketing agency in Patna engineering high-intent customer acquisition funnels through SEO, Local Maps 3-Pack, Google Ads, Meta Ads, AEO, GEO, and high-converting web systems.
            </p>

            {/* Quick Channel Capabilities Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-10 max-w-4xl mx-auto">
              {[
                { name: "Technical SEO", icon: Search },
                { name: "Google Maps 3-Pack", icon: MapPin },
                { name: "Google Ads (PPC)", icon: MousePointerClick },
                { name: "Meta Ads (FB/IG)", icon: Share2 },
                { name: "Generative AI Search (AEO/GEO)", icon: Sparkles }
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/5 text-xs text-neutral-300 transition-all font-mono"
                  >
                    <IconComp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#ff3b00] shrink-0" />
                    <span>{item.name}</span>
                  </span>
                );
              })}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10 sm:mb-14">
              <a
                href="#consultation"
                className="px-8 py-4 w-full sm:w-auto cursor-pointer bg-gradient-to-r from-[#FF3B00] via-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-sm sm:text-base font-bold tracking-wide text-center rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,59,0,0.4)] hover:scale-105 hover:shadow-[0_0_45px_rgba(255,59,0,0.6)] flex items-center justify-center gap-2 group"
              >
                <span>Get a Free Marketing Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/918540814729?text=Hi%20Webflora,%20I%20want%20to%20discuss%20a%20digital%20marketing%20strategy%20in%20Patna."
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 w-full sm:w-auto bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-white text-sm sm:text-base font-semibold text-center rounded-full transition-all duration-300 backdrop-blur-md hover:scale-105 flex items-center justify-center gap-2"
              >
                <Icon icon="logos:whatsapp-icon" className="w-4 h-4 shrink-0" />
                <span>Talk to Webflora</span>
              </a>

              <a
                href="tel:+918540814729"
                className="px-7 py-4 w-full sm:w-auto bg-white/5 border border-white/10 hover:border-[#FF3B00]/50 hover:bg-[#FF3B00]/10 text-neutral-300 hover:text-white text-sm sm:text-base font-semibold text-center rounded-full transition-all duration-300 backdrop-blur-md hover:scale-105 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#ff3b00] shrink-0" />
                <span>Call +91 8540814729</span>
              </a>
            </div>

            {/* Statistics Grid (The 4 Trust Pillars) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 w-full max-w-4xl pt-8 border-t border-white/10">
              <Link
                href="/case-studies"
                className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 backdrop-blur-md hover:border-[#FF3B00]/50 hover:shadow-[0_10px_30px_rgba(255,59,0,0.15)] hover:-translate-y-1 transition-all duration-300 group text-center block"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono text-white group-hover:text-[#ff3b00] transition-colors">
                  200+
                </div>
                <div className="text-neutral-400 text-[10px] sm:text-xs font-mono uppercase tracking-wider mt-1 font-semibold">
                  Projects Delivered →
                </div>
              </Link>

              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 backdrop-blur-md hover:border-[#FF3B00]/50 hover:shadow-[0_10px_30px_rgba(255,59,0,0.15)] hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono text-[#ff3b00]">
                  150+
                </div>
                <div className="text-neutral-400 text-[10px] sm:text-xs font-mono uppercase tracking-wider mt-1 font-semibold">
                  Clients Served
                </div>
              </div>

              <Link
                href="/about"
                className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 backdrop-blur-md hover:border-[#FF3B00]/50 hover:shadow-[0_10px_30px_rgba(255,59,0,0.15)] hover:-translate-y-1 transition-all duration-300 group text-center block"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono text-white group-hover:text-[#ff3b00] transition-colors">
                  5+ Years
                </div>
                <div className="text-neutral-400 text-[10px] sm:text-xs font-mono uppercase tracking-wider mt-1 font-semibold">
                  Experience →
                </div>
              </Link>

              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-emerald-500/10 to-white/[0.01] border border-emerald-500/20 backdrop-blur-md hover:border-emerald-500/50 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)] hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono text-emerald-400">
                  4.9 ★
                </div>
                <div className="text-neutral-300 text-[10px] sm:text-xs font-mono uppercase tracking-wider mt-1 font-semibold">
                  Google Rating
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── CLIENT MARQUEE ── */}
        <ClientMarquee />

        {/* ── ANSWER-FIRST AEO BLOCK (DIRECT ANSWER) ── */}
        <section className="py-12 sm:py-16 bg-[#080808] border-b border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#ff3b00]/10 via-[#0d0d0d] to-[#ff3b00]/5 border border-[#ff3b00]/30 shadow-2xl relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ff3b00]/20 border border-[#ff3b00]/40 text-[#ff3b00] text-[10px] sm:text-xs font-mono uppercase tracking-wider mb-3 sm:mb-4">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span>AEO Direct Answer • Who We Are & What We Do</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 leading-snug">
                What Does a Digital Marketing Agency in Patna Do?
              </h2>

              <p className="text-neutral-200 text-xs sm:text-sm md:text-base font-light leading-relaxed mb-3 sm:mb-4">
                A digital marketing agency in Patna helps businesses attract customers through online channels such as Google Search, Google Ads, social media, local search, content marketing and conversion-focused websites. Webflora Technologies provides these services along with AEO, GEO, analytics and AI automation for businesses in Patna, Bihar and across India.
              </p>

              <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light leading-relaxed mb-5 sm:mb-6">
                Depending on the business, a digital marketing strategy may include SEO for long-term organic visibility, Google Ads for high-intent searches, Local SEO for Google Maps, social media for brand awareness, and conversion optimization for turning website visitors into enquiries.
              </p>

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-white/10">
                <span className="text-[10px] sm:text-xs font-mono text-neutral-400 mr-1 sm:mr-2 w-full sm:w-auto mb-1 sm:mb-0">Explore Core Disciplines:</span>
                {[
                  { label: "SEO", id: "seo" },
                  { label: "Local SEO & Maps", id: "local-seo" },
                  { label: "Google Ads (PPC)", id: "google-ads" },
                  { label: "Meta Ads (FB/IG)", id: "meta-ads" },
                  { label: "Social Media (SMM)", id: "social-media" },
                  { label: "Conversion Funnels", id: "cro-web" }
                ].map((pill) => (
                  <button
                    key={pill.id}
                    onClick={() => {
                      setActiveServiceTab(pill.id);
                      const el = document.getElementById("services-deep-dive");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-[#ff3b00]/20 text-[11px] sm:text-xs font-medium text-neutral-300 hover:text-white border border-white/10 hover:border-[#ff3b00]/40 transition-all"
                  >
                    {pill.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── MEASURABLE DIGITAL MARKETING (METRICS WITH SUBSTANTIATION) ── */}
        <section className="py-12 sm:py-16 md:py-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-1.5 sm:mb-2">
                Substantiated Attribution
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                Measurable Digital Marketing
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm md:text-base font-light px-1 sm:px-0">
                We track the metrics relevant to each campaign, including organic visibility, qualified enquiries, calls, conversion rates, cost per lead, advertising spend and attributed revenue where reliable tracking is available.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff3b00]/30 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-3 sm:mb-4">
                  <Search className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">Organic Search Visibility</h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                  We monitor impressions, first-page keyword rankings, and click-through rates (CTR) directly within verified Google Search Console data.
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff3b00]/30 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-3 sm:mb-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">Qualified Inquiries & Calls</h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                  Every lead form fill, WhatsApp conversation click, and direct telephone call is tracked through Google Tag Manager (GTM) custom event triggers.
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff3b00]/30 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-3 sm:mb-4">
                  <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">Cost Per Lead (CPL)</h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                  We calculate exact cost-per-acquisition across Google and Meta ad accounts by dividing verified inquiries by total active media spend.
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff3b00]/30 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-3 sm:mb-4">
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">Attributed Revenue</h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                  Where CRM or sales management tools are connected, we track incoming leads through final admission or booking stage for true ROI visibility.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── CORE DIGITAL MARKETING SERVICES (DEEP DIVE) ── */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#080808] border-b border-white/10" id="services-deep-dive">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-1.5 sm:mb-2">
                Service Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                Digital Marketing Services in Patna
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm md:text-base font-light px-1 sm:px-0">
                Explore our core marketing disciplines. Each channel is configured around your business model, customer journey, and commercial goals.
              </p>
            </div>

            {/* Service Navigation Tabs - Swipeable on mobile */}
            <div className="flex overflow-x-auto no-scrollbar gap-1.5 sm:gap-2 mb-6 sm:mb-10 justify-start sm:justify-center px-1 sm:px-0 -mx-4 sm:mx-0 pb-2">
              {marketingServices.map((s) => {
                const IconComp = s.icon;
                const isActive = activeServiceTab === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveServiceTab(s.id)}
                    className={`shrink-0 flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-[#ff3b00] text-white shadow-[0_0_15px_rgba(255,59,0,0.4)]"
                        : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5"
                    }`}
                  >
                    <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span className="whitespace-nowrap">{s.title.split(" (")[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Service Showcase Card */}
            {marketingServices.map((s) => {
              if (s.id !== activeServiceTab) return null;
              const IconComp = s.icon;
              return (
                <div
                  key={s.id}
                  className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 shadow-2xl relative overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                    
                    {/* Left: What it does + Best for */}
                    <div className="lg:col-span-6 space-y-4 sm:space-y-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#ff3b00]/10 border border-[#ff3b00]/30 flex items-center justify-center text-[#ff3b00] shrink-0">
                          <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#ff3b00] font-semibold block">
                            {s.title}
                          </span>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                            {s.headline}
                          </h3>
                        </div>
                      </div>

                      <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                        {s.desc}
                      </p>

                      <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5">
                        <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#ff3b00] font-semibold mb-1">
                          Best suited for:
                        </div>
                        <p className="text-neutral-300 text-xs sm:text-sm">
                          {s.bestFor}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-1 sm:pt-2">
                        <a
                          href="#consultation"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#ff3b00] hover:bg-[#e03400] text-white text-xs sm:text-sm font-medium transition-colors duration-300 shadow-[0_0_20px_rgba(255,59,0,0.3)]"
                        >
                          <span>Request Marketing Audit</span>
                          <ArrowRight className="w-4 h-4 shrink-0" />
                        </a>
                      </div>
                    </div>

                    {/* Right: Deliverables Checklist */}
                    <div className="lg:col-span-6 bg-black/40 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/5 h-full">
                      <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b00] shrink-0" />
                        <span>Key Deliverables & Campaign Scope:</span>
                      </h4>
                      <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
                        {s.features.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00] mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── DEDICATED AEO & GEO SECTION (AI-POWERED SEARCH DISCOVERY) ── */}
        <section className="py-12 sm:py-16 md:py-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-1.5 sm:mb-2">
                Generative Discovery
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                AEO & GEO for AI-Powered Search
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm md:text-base font-light px-1 sm:px-0">
                Search is expanding beyond traditional blue links. Users increasingly interact with AI-powered search and answer experiences to discover businesses, products and services.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-12">
              
              {/* Card 1: AEO */}
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 relative overflow-hidden">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ff3b00]/10 border border-[#ff3b00]/30 text-[#ff3b00] text-[10px] sm:text-xs font-mono uppercase tracking-wider mb-3 sm:mb-4">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  <span>AEO — Answer Engine Optimization</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                  Direct Answer Synthesis
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-4 sm:mb-6">
                  We structure content around clear questions, direct answers, supporting explanations and relevant entities so information is easier for answer-oriented search systems (like Google AI Overviews and Perplexity) to understand and surface.
                </p>
                <div className="space-y-2 text-xs text-neutral-400">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Question-and-answer format optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Structured Schema.org FAQ and HowTo markup</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Clean factual bullet points and comparative tables</span>
                  </div>
                </div>
              </div>

              {/* Card 2: GEO */}
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 relative overflow-hidden">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] sm:text-xs font-mono uppercase tracking-wider mb-3 sm:mb-4">
                  <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  <span>GEO — Generative Engine Optimization</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                  Entity Clarity & AI Citations
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-4 sm:mb-6">
                  We focus on entity clarity, consistent business information, original expertise, supporting evidence and structured content to improve how a brand can be understood and cited across generative search experiences (like ChatGPT Search and Claude).
                </p>
                <div className="space-y-2 text-xs text-neutral-400">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Verifiable business entity details (NAP, founders, registration)</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>First-party case studies and original research</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Internal link graphs connecting topical concepts</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-black/40 border border-white/5">
              <h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2.5 sm:mb-3">
                What We Optimize for AI Search:
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {[
                  "Entity information",
                  "Business facts",
                  "Expert authorship",
                  "Question-answer content",
                  "Original research",
                  "Case studies",
                  "Internal linking",
                  "Structured data",
                  "Local business information",
                  "Relevant third-party references"
                ].map((item, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] sm:text-xs text-neutral-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── OUR EXPERIENCE IN PATNA (FIRST-HAND REGIONAL OBSERVATIONS) ── */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#080808] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-center">
              
              <div className="lg:col-span-5">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-1.5 sm:mb-2">
                  Patna Experience Section
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-6">
                  What We See in Patna&apos;s Digital Market
                </h2>
                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 mb-4 sm:mb-6">
                  <div className="text-[10px] sm:text-xs text-[#ff3b00] font-mono uppercase mb-1">Key Observation</div>
                  <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
                    Most businesses in Patna have fragmented digital footprints — active social media without lead attribution, unoptimized Google Business Profiles, or slow websites that lose ad traffic.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-neutral-300 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                <p>
                  Through our work with businesses and organizations in Patna, we commonly see the same digital-growth challenges: businesses have websites but limited organic visibility, social media activity without measurable lead attribution, incomplete Google Business Profiles, and advertising campaigns that are not connected to conversion tracking.
                </p>
                <p>
                  Our approach is to connect these areas rather than treat them as separate activities.
                </p>
                <p className="p-3.5 sm:p-4 rounded-xl bg-black/40 border border-white/5 text-neutral-400 text-xs sm:text-sm">
                  For a local business, that may mean improving Google Business Profile visibility and local landing pages. For a coaching institute, it may involve SEO, Google Ads, admission-focused landing pages and lead tracking. For an e-commerce or D2C brand, the strategy may combine technical SEO, Meta Ads, Google Ads, analytics and conversion optimization.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── PRIMARY DIGITAL MARKETING CASE STUDY (E-E-A-T ASSET) ── */}
        <section className="py-12 sm:py-16 md:py-20 border-b border-white/10" id="case-study">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-1.5 sm:mb-2">
                Verified E-E-A-T Case Study
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                Case Study: Team Excellent Career Institute
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm md:text-base font-light px-1 sm:px-0">
                How a premier coaching institute in Patna scaled student admissions through connected SEO, Local Google Maps, and high-intent advertising.
              </p>
            </div>

            <div className="p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-6 sm:mb-8">
                
                {/* Meta details */}
                <div className="lg:col-span-4 space-y-3 sm:space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ff3b00]/10 border border-[#ff3b00]/30 text-[#ff3b00] text-[10px] sm:text-xs font-mono uppercase">
                    <span>Education / Coaching</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Team Excellent Career Institute
                  </h3>
                  <div className="text-xs text-neutral-400 space-y-1 font-mono">
                    <div>Location: <strong className="text-white">Patna, Bihar</strong></div>
                    <div>Services: <strong className="text-white">SEO + Local SEO + Ads + Website + AEO/GEO</strong></div>
                    <div>Timeline: <strong className="text-white">Multi-Year Strategic Growth</strong></div>
                  </div>
                  <Link
                    href="/case-studies/complete-website-rebuild-optimization-for-team-excellent-career-institute"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#ff3b00] hover:bg-[#e03400] text-white text-xs font-medium transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </Link>
                </div>

                {/* Challenge, Strategy, Implementation */}
                <div className="lg:col-span-8 space-y-4 sm:space-y-6 text-xs sm:text-sm font-light">
                  
                  <div className="p-3.5 sm:p-4 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[11px] sm:text-xs font-mono uppercase text-red-400 font-bold block mb-1">Challenge</span>
                    <p className="text-neutral-300 leading-relaxed">
                      Low organic search visibility for competitive medical & engineering coaching keywords across Patna, high mobile bounce rates on legacy web pages, and heavy reliance on offline hoarding banners without conversion attribution.
                    </p>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[11px] sm:text-xs font-mono uppercase text-[#ff3b00] font-bold block mb-1">Strategy & Implementation</span>
                    <p className="text-neutral-300 leading-relaxed">
                      Webflora re-architected the institute&apos;s digital ecosystem: deployed a sub-second Next.js web portal, optimized Google Business Profile for local map searches, targeted high-intent seasonal admission keywords on Google Ads, ran Meta Advantage+ campaigns for upcoming batches, and implemented GTM event tracking.
                    </p>
                  </div>

                  {/* Verified Results Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 pt-1 sm:pt-2">
                    <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-emerald-400 mb-0.5">180+</div>
                      <div className="text-[10px] sm:text-[11px] text-neutral-400">Monthly Verified Admissions Inquiries</div>
                    </div>
                    <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-white mb-0.5">Top 3</div>
                      <div className="text-[10px] sm:text-[11px] text-neutral-400">Google Local Rankings Across Patna</div>
                    </div>
                    <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-[#ff3b00] mb-0.5">62%</div>
                      <div className="text-[10px] sm:text-[11px] text-neutral-400">Lower Cost Per Inquiry vs Offline Ads</div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── SEO VS PAID ADVERTISING COMPARISON ── */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#080808] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-1.5 sm:mb-2">
                Channel Selection Guide
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                SEO + Paid Advertising: When Should You Use Each?
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm md:text-base font-light px-1 sm:px-0">
                Understanding the distinct roles of organic search and paid advertising ensures you allocate marketing budget effectively based on your business stage.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.02]">
              <table className="w-full text-left border-collapse min-w-[580px] sm:min-w-[650px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-[11px] sm:text-sm font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                    <th className="p-3.5 sm:p-5 w-1/4">Channel</th>
                    <th className="p-3.5 sm:p-5 w-1/3">Best Suited For</th>
                    <th className="p-3.5 sm:p-5 w-1/3 text-[#ff3b00]">Main Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                  <tr>
                    <td className="p-3.5 sm:p-5 font-bold text-white">SEO</td>
                    <td className="p-3.5 sm:p-5 text-neutral-300">Long-term search visibility & authority</td>
                    <td className="p-3.5 sm:p-5 text-neutral-200">Compounding organic traffic without per-click cost</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-5 font-bold text-white">Google Ads (PPC)</td>
                    <td className="p-3.5 sm:p-5 text-neutral-300">High-intent transactional searches</td>
                    <td className="p-3.5 sm:p-5 text-neutral-200">Immediate paid visibility for urgent customer demands</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-5 font-bold text-white">Local SEO</td>
                    <td className="p-3.5 sm:p-5 text-neutral-300">Local businesses, clinics & storefronts</td>
                    <td className="p-3.5 sm:p-5 text-neutral-200">Google Maps / Local 3-Pack discovery and calls</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-5 font-bold text-white">Meta Ads</td>
                    <td className="p-3.5 sm:p-5 text-neutral-300">Demand generation & lifestyle branding</td>
                    <td className="p-3.5 sm:p-5 text-neutral-200">Granular demographic & interest-based audience targeting</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-5 font-bold text-white">Social Media</td>
                    <td className="p-3.5 sm:p-5 text-neutral-300">Brand authority, community & awareness</td>
                    <td className="p-3.5 sm:p-5 text-neutral-200">Long-term customer trust, reviews, and video engagement</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── WHY BUSINESSES WORK WITH WEBFLORA ── */}
        <section className="py-12 sm:py-16 md:py-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-1.5 sm:mb-2">
                Operational Advantages
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                Why Businesses Work With Webflora
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm md:text-base font-light px-1 sm:px-0">
                Here are the practical reasons businesses and startups partner with Webflora Technologies for digital growth in Bihar and across India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
              
              <div className="p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff3b00]/30 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-3.5 sm:mb-5">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">Marketing + Technology</h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                  We combine digital marketing with web development and technical implementation so your campaigns are supported by fast, high-converting digital assets.
                </p>
              </div>

              <div className="p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff3b00]/30 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-3.5 sm:mb-5">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">Local Market Understanding</h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                  We understand regional search behaviors and consumer intent patterns across Patna, Muzaffarpur, Gaya, and commercial markets in Bihar.
                </p>
              </div>

              <div className="p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff3b00]/30 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-3.5 sm:mb-5">
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">Measurable Campaigns</h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                  We track meaningful business metrics — verified inquiries, calls, conversion rates, and revenue attribution — rather than relying only on vanity impressions.
                </p>
              </div>

              <div className="p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff3b00]/30 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-3.5 sm:mb-5">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">AI & Search Evolution</h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                  Our strategy considers traditional search engines, answer engines (AEO), and generative search experiences (GEO) so your brand remains visible as search evolves.
                </p>
              </div>

              <div className="p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff3b00]/30 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-3.5 sm:mb-5">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">Transparent Reporting</h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                  Clients receive clear reporting on agreed campaign metrics, keyword ranking progress, ad spend breakdowns, and verified lead counts.
                </p>
              </div>

              <div className="p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff3b00]/30 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-3.5 sm:mb-5">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">Direct Implementation</h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                  The same engineering and marketing team works directly across your websites, SEO, advertising, analytics, and CRM automation without outsourcing delays.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── LOCAL SEO FOR PATNA BUSINESSES ── */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#080808] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-1.5 sm:mb-2">
                Neighborhood-Level Optimization
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                Local SEO for Patna Businesses
              </h2>
              <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light leading-relaxed px-1 sm:px-0">
                We optimize digital campaigns around the locations, services and search intent relevant to each business. For Patna businesses, this can include Google Business Profile optimization, local landing pages, local keyword research, review management and location-specific content.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl mx-auto text-center text-xs">
              {[
                "Boring Road & Boring Canal Road",
                "Kankarbagh & Rajendra Nagar",
                "Bailey Road & Saguna More",
                "Fraser Road & Exhibition Road",
                "Patliputra Colony & Digha",
                "Danapur & Khagaul",
                "Anisabad & Phulwari Sharif",
                "Bajar Samiti & Kumhrar"
              ].map((loc, i) => (
                <div key={i} className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-neutral-300 text-[11px] sm:text-xs">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff3b00] mx-auto mb-1.5 sm:mb-2" />
                  <span>{loc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PATNA DIGITAL GROWTH GUIDE (6 CHAPTERS) ── */}
        <section className="py-12 sm:py-16 md:py-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-1.5 sm:mb-2">
                Knowledge Resource
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                Digital Marketing in Patna: A Practical Guide for Businesses
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm md:text-base font-light px-1 sm:px-0">
                Explore key chapters answering how businesses in Patna can systematically build, measure, and scale customer acquisition online.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-start">
              
              {/* Chapter Selector */}
              <div className="lg:col-span-4 space-y-1.5 sm:space-y-2">
                {guideChapters.map((ch, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveChapter(idx)}
                    className={`w-full text-left p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 border flex items-center justify-between ${
                      activeChapter === idx
                        ? "bg-[#ff3b00]/10 border-[#ff3b00] text-white shadow-[0_0_20px_rgba(255,59,0,0.15)]"
                        : "bg-white/[0.02] border-white/5 text-neutral-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-mono text-[#ff3b00] uppercase block">
                        Chapter 0{idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold block">{ch.title}</span>
                    </div>
                    <ArrowRight className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform ${activeChapter === idx ? "translate-x-1 text-[#ff3b00]" : "opacity-30"}`} />
                  </button>
                ))}
              </div>

              {/* Active Chapter Reader */}
              <div className="lg:col-span-8 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 relative">
                <span className="text-[10px] sm:text-xs font-mono text-[#ff3b00] uppercase tracking-wider block mb-1.5 sm:mb-2">
                  Chapter 0{activeChapter + 1} Analysis
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-6">
                  {guideChapters[activeChapter].title}
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                  {guideChapters[activeChapter].content}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── DIGITAL MARKETING TERMS EXPLAINED (CLEAN GLOSSARY) ── */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#080808] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-1.5 sm:mb-2">
                Terminology Glossary
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                Digital Marketing Terms Explained
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm md:text-base font-light px-1 sm:px-0">
                Clear, practical explanations of key digital marketing metrics and concepts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
              {glossaryTerms.map((term, i) => {
                const IconC = term.icon;
                return (
                  <div key={i} className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ff3b00] mb-3 sm:mb-4">
                      <IconC className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2">{term.term}</h3>
                    <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                      {term.def}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── ABOUT WEBFLORA TECHNOLOGIES (ENTITY & FOUNDERS) ── */}
        <section className="py-12 sm:py-16 md:py-20 border-b border-white/10" id="about-entity">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-1.5 sm:mb-2">
                Verifiable Entity Signals
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                About Webflora Technologies
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm md:text-base font-light px-1 sm:px-0">
                Webflora Technologies is an MSME-registered technology and digital marketing company based in Patna, Bihar. The company provides digital marketing, SEO, website development, software development, AI automation and related digital services to businesses in Patna and clients across India.
              </p>
            </div>

            {/* Entity Facts Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 mb-8 sm:mb-12">
              <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <div className="text-neutral-500 text-[10px] sm:text-[11px] uppercase font-mono mb-0.5 sm:mb-1">Founded</div>
                <div className="text-white font-bold text-xs sm:text-base">2021</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <div className="text-neutral-500 text-[10px] sm:text-[11px] uppercase font-mono mb-0.5 sm:mb-1">Location</div>
                <div className="text-white font-bold text-xs sm:text-sm">Patna, Bihar</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <div className="text-neutral-500 text-[10px] sm:text-[11px] uppercase font-mono mb-0.5 sm:mb-1">Registration</div>
                <div className="text-white font-mono text-[10px] sm:text-xs truncate">UDYAM-BR-26</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <div className="text-neutral-500 text-[10px] sm:text-[11px] uppercase font-mono mb-0.5 sm:mb-1">Founder & CTO</div>
                <div className="text-white font-bold text-[11px] sm:text-sm">Shashank Manohar</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <div className="text-neutral-500 text-[10px] sm:text-[11px] uppercase font-mono mb-0.5 sm:mb-1">Co-Founder & CEO</div>
                <div className="text-white font-bold text-[11px] sm:text-sm">Amitesh Kumar</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <div className="text-neutral-500 text-[10px] sm:text-[11px] uppercase font-mono mb-0.5 sm:mb-1">Service Area</div>
                <div className="text-white font-bold text-[11px] sm:text-sm">Patna & India</div>
              </div>
            </div>

            {/* Leadership Profiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#ff3b00]/10 border border-[#ff3b00]/30 flex items-center justify-center text-[#ff3b00] shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Shashank Manohar</h3>
                  <div className="text-xs text-[#ff3b00] font-mono mb-1.5 sm:mb-2">Founder & CTO — Webflora Technologies</div>
                  <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                    Works across web development, digital marketing, SEO, AI automation and technology solutions for businesses.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#ff3b00]/10 border border-[#ff3b00]/30 flex items-center justify-center text-[#ff3b00] shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Amitesh Kumar</h3>
                  <div className="text-xs text-[#ff3b00] font-mono mb-1.5 sm:mb-2">Co-Founder & CEO — Webflora Technologies</div>
                  <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                    Oversees client growth strategy, performance marketing campaigns, and regional business partnerships.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── TECHNICAL PERFORMANCE & PLATFORMS ── */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#080808] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-3 sm:space-y-4">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block">
                  Page Experience & Ad Quality
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  Technical Performance & Landing Page Quality
                </h2>
                <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                  Slow-loading pages can increase user friction, reduce conversion opportunities and negatively affect page experience. Landing-page experience also matters to advertising performance, making technical performance an important part of conversion optimization.
                </p>
              </div>

              <div className="lg:col-span-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5">
                <h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 sm:mb-4">
                  Tools & Platforms We Work With:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 text-xs">
                  {[
                    { name: "Google Ads", icon: "logos:google-ads" },
                    { name: "Meta Ads Manager", icon: "logos:meta-icon" },
                    { name: "Google Analytics 4", icon: "logos:google-analytics" },
                    { name: "Search Console", icon: "logos:google-icon" },
                    { name: "Tag Manager", icon: "logos:google-tag-manager" },
                    { name: "Next.js Engine", icon: "logos:nextjs-icon" }
                  ].map((tool, idx) => (
                    <div key={idx} className="p-2.5 sm:p-3 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2 text-neutral-300 text-[11px] sm:text-xs">
                      <Icon icon={tool.icon} className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                      <span className="truncate">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── TRANSPARENT PRICING SECTION ── */}
        <section className="py-12 sm:py-16 md:py-20 border-b border-white/10" id="pricing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-1.5 sm:mb-2">
                Simple & Transparent
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                Digital Marketing Packages in Patna
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm md:text-base font-light px-1 sm:px-0">
                Select the marketing plan tailored to your business scale.
              </p>
            </div>

            {/* Critical Pricing Clarification Box */}
            <div className="max-w-3xl mx-auto mb-8 sm:mb-12 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#ff3b00]/10 border border-[#ff3b00]/30 text-center">
              <span className="text-[10px] sm:text-xs font-mono uppercase text-[#ff3b00] font-bold block mb-1">
                Important Budget Notice:
              </span>
              <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
                Package fees cover the listed marketing and management services. Google/Meta advertising spend is separate and paid directly by the client to the advertising platforms, ensuring complete financial transparency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              
              {/* Starter */}
              <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Starter Package</h3>
                  <div className="text-[11px] sm:text-xs text-[#ff3b00] font-mono mb-3 sm:mb-4">Small Local Shops, Clinics, CAs</div>
                  <div className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6">
                    ₹8,999 <span className="text-xs font-light text-neutral-400 font-mono">/ month</span>
                  </div>
                  <ul className="space-y-2.5 sm:space-y-3 text-xs text-neutral-300 mb-6 sm:mb-8">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> Google Maps Optimization</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> Up to 10 Local Keywords</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> Facebook & IG Page Setup</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> Monthly Performance Reports</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> On-Page SEO Technical Basics</li>
                  </ul>
                </div>
                <a href="#consultation" className="w-full py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold text-center transition-colors">
                  Get Started
                </a>
              </div>

              {/* Growth */}
              <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#ff3b00]/20 to-white/[0.02] border border-[#ff3b00]/40 shadow-xl flex flex-col justify-between relative">
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-2.5 py-0.5 rounded-full bg-[#ff3b00] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                  Popular
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Growth Package</h3>
                  <div className="text-[11px] sm:text-xs text-[#ff3b00] font-mono mb-3 sm:mb-4">Coaching Centres, Polyclinics</div>
                  <div className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6">
                    ₹18,999 <span className="text-xs font-light text-neutral-400 font-mono">/ month</span>
                  </div>
                  <ul className="space-y-2.5 sm:space-y-3 text-xs text-neutral-300 mb-6 sm:mb-8">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> Google Maps Optimization</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> Up to 25 Regional Keywords</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> Meta Ads Management (FB & IG)</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> Google Ads (Search PPC)</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> 12 Custom Posts + 2 Reels/mo</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> 1 High-Speed Next.js Landing Page</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> Weekly Performance Reports</li>
                  </ul>
                </div>
                <a href="#consultation" className="w-full py-3 rounded-full bg-[#ff3b00] hover:bg-[#e03400] text-white text-xs font-semibold text-center transition-colors shadow-lg shadow-[#ff3b00]/30">
                  Select Growth Plan
                </a>
              </div>

              {/* Business */}
              <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Business Package</h3>
                  <div className="text-[11px] sm:text-xs text-[#ff3b00] font-mono mb-3 sm:mb-4">Real Estate Builders, Brands</div>
                  <div className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6">
                    ₹34,999 <span className="text-xs font-light text-neutral-400 font-mono">/ month</span>
                  </div>
                  <ul className="space-y-2.5 sm:space-y-3 text-xs text-neutral-300 mb-6 sm:mb-8">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> Google Maps Optimization</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> Up to 50 Commercial Keywords</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> Meta Advantage+ Audience Funnels</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> Google Ads (Search & Display)</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> 24 Custom Posts + 6 Reels/mo</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> 1 Custom Conversion Funnel</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> Detailed Weekly Analysis Reports</li>
                  </ul>
                </div>
                <a href="#consultation" className="w-full py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold text-center transition-colors">
                  Choose Business Plan
                </a>
              </div>

              {/* Enterprise */}
              <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Enterprise Plan</h3>
                  <div className="text-[11px] sm:text-xs text-[#ff3b00] font-mono mb-3 sm:mb-4">Multi-Location & Startups</div>
                  <div className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6">
                    Custom <span className="text-xs font-light text-neutral-400 font-mono">/ scope</span>
                  </div>
                  <ul className="space-y-2.5 sm:space-y-3 text-xs text-neutral-300 mb-6 sm:mb-8">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> Unlimited Target Keywords</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> Dedicated Funnel Management</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> Full PMax & YouTube Campaigns</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> Daily Custom Creative Production</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> Custom Multi-Step Web App Funnel</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#ff3b00] shrink-0" /> Dedicated Account Manager</li>
                  </ul>
                </div>
                <a href="#consultation" className="w-full py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold text-center transition-colors">
                  Contact for Scope
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ── VERIFIED GOOGLE CLIENT REVIEWS ── */}
        <GoogleReviewsSection />

        {/* ── 12 HIGH-INTENT FAQS SECTION (SUBSTANTIVE HTML ANSWERS) ── */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#080808] border-b border-white/10" id="faqs">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-1.5 sm:mb-2">
                Frequently Answered
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                Digital Marketing FAQs
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm font-light px-1 sm:px-0">
                Direct answers to common questions about digital marketing, SEO, advertising budgets, and timelines in Patna.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {marketingFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 md:p-6 text-left flex items-center justify-between gap-3 text-white hover:text-[#ff3b00] transition-colors"
                    >
                      <span className="text-xs sm:text-sm md:text-base font-medium leading-snug">{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff3b00] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-500 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed border-t border-white/5 pt-3 sm:pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CONSULTATION & PROJECT SCOPE INQUIRY (CTA) ── */}
        <section id="consultation" className="py-12 sm:py-16 md:py-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              
              <div className="lg:col-span-5">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-1.5 sm:mb-2">
                  Start Your Growth
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                  Request a Free Digital Marketing Consultation
                </h2>
                <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light leading-relaxed mb-4 sm:mb-6">
                  Discuss your business goals directly with our Patna marketing team and receive a transparent, data-backed growth roadmap.
                </p>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-xs sm:text-sm text-neutral-300">
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3b00] shrink-0 mt-0.5" />
                    <span>Free website & Google Business Profile visibility audit</span>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3b00] shrink-0 mt-0.5" />
                    <span>Target keyword recommendations & competitor analysis</span>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3b00] shrink-0 mt-0.5" />
                    <span>Direct founder consultation (Shashank Manohar & Amitesh Kumar)</span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="text-[11px] sm:text-xs text-neutral-400 mb-1">Direct Marketing Desk:</div>
                  <a href="tel:+918540814729" className="text-base sm:text-lg font-bold text-white hover:text-[#ff3b00] transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#ff3b00]" /> +91 8540814729
                  </a>
                  <div className="text-[10px] sm:text-xs text-neutral-500 mt-1.5 sm:mt-2 font-mono">
                    Saketpuri, Bajar Samiti, Patna, Bihar – 800016
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-7">
                <div className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 relative overflow-hidden backdrop-blur-xl">
                  {formSuccess ? (
                    <div className="py-12 text-center">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                      <p className="text-neutral-300 text-sm max-w-md mx-auto mb-6 font-light">
                        Thank you. A senior marketing strategist from our Patna office will contact you within 24 business hours to discuss your digital growth plan.
                      </p>
                      <button
                        onClick={() => {
                          setFormSuccess(false);
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
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-neutral-400 uppercase tracking-wider block mb-1.5 font-mono">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Ramesh Kumar"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#ff3b00]/60 focus:bg-white/10 transition-all font-light"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-neutral-400 uppercase tracking-wider block mb-1.5 font-mono">
                            Phone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 9876543210"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#ff3b00]/60 focus:bg-white/10 transition-all font-light"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-neutral-400 uppercase tracking-wider block mb-1.5 font-mono">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="ramesh@example.com"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#ff3b00]/60 focus:bg-white/10 transition-all font-light"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-neutral-400 uppercase tracking-wider block mb-1.5 font-mono">
                            Business / Industry
                          </label>
                          <select
                            value={formState.businessType}
                            onChange={(e) => setFormState({ ...formState, businessType: e.target.value })}
                            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff3b00]/60 transition-all font-light"
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
                          <label className="text-xs text-neutral-400 uppercase tracking-wider block mb-1.5 font-mono">
                            Primary Marketing Need
                          </label>
                          <select
                            value={formState.serviceNeeded}
                            onChange={(e) => setFormState({ ...formState, serviceNeeded: e.target.value })}
                            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff3b00]/60 transition-all font-light"
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
                          <label className="text-xs text-neutral-400 uppercase tracking-wider block mb-1.5 font-mono">
                            Target Monthly Budget
                          </label>
                          <select
                            value={formState.monthlyBudget}
                            onChange={(e) => setFormState({ ...formState, monthlyBudget: e.target.value })}
                            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff3b00]/60 transition-all font-light"
                          >
                            <option value="Starter (₹8,999/mo)">Starter (₹8,999/mo)</option>
                            <option value="Growth (₹18,999/mo)">Growth (₹18,999/mo)</option>
                            <option value="Business (₹34,999/mo)">Business (₹34,999/mo)</option>
                            <option value="Enterprise / Custom Scale">Enterprise / Custom Scale</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs text-neutral-400 uppercase tracking-wider block mb-1.5 font-mono">
                          Brief Business Details / Current Challenges
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Tell us about your target location, current inquiry volume, and goals..."
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#ff3b00]/60 focus:bg-white/10 transition-all font-light"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={formLoading}
                        className="w-full py-4 rounded-full bg-[#ff3b00] hover:bg-[#e03400] text-white font-medium transition-all shadow-[0_0_25px_rgba(255,59,0,0.3)] flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                      >
                        {formLoading ? (
                          <span>Submitting...</span>
                        ) : (
                          <>
                            <span>Submit Marketing Consultation Request</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── CROSS-SITE INTERNAL LINKS FOOTER ── */}
        <section className="py-16 bg-[#030303] border-t border-white/10 text-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div>
                <h4 className="font-mono uppercase tracking-wider text-neutral-400 font-bold mb-3">Core Digital Services</h4>
                <ul className="space-y-2 text-neutral-400 font-light">
                  <li><Link href="/seo-services-in-patna" className="hover:text-white transition">SEO Company in Patna</Link></li>
                  <li><Link href="/it-company-in-patna/digital-marketing-agency-in-patna" className="hover:text-white transition">Digital Marketing Patna</Link></li>
                  <li><Link href="/it-company-in-patna/ai-automation-company-in-patna" className="hover:text-white transition">AI Automation Patna</Link></li>
                  <li><Link href="/it-company-in-patna/software-development-company-in-patna" className="hover:text-white transition">Software Development Patna</Link></li>
                  <li><Link href="/ecommerce-website-development" className="hover:text-white transition">E-Commerce Web Patna</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono uppercase tracking-wider text-neutral-400 font-bold mb-3">Industry Solutions</h4>
                <ul className="space-y-2 text-neutral-400 font-light">
                  <li><Link href="/industries/education" className="hover:text-white transition">Coaching & Institute Marketing</Link></li>
                  <li><Link href="/industries/healthcare" className="hover:text-white transition">Hospital & Clinic SEO</Link></li>
                  <li><Link href="/industries/real-estate" className="hover:text-white transition">Real Estate Lead Generation</Link></li>
                  <li><Link href="/electronic-health-records-software" className="hover:text-white transition">EHR Software Solutions</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono uppercase tracking-wider text-neutral-400 font-bold mb-3">Case Studies & Proof</h4>
                <ul className="space-y-2 text-neutral-400 font-light">
                  <li><Link href="/case-studies/complete-website-rebuild-optimization-for-team-excellent-career-institute" className="hover:text-white transition">Team Excellent Case Study</Link></li>
                  <li><Link href="/case-studies/smart-qr-code-attendance-system" className="hover:text-white transition">Smart QR Code System</Link></li>
                  <li><Link href="/case-studies/case-study-vegavan-ai-smart-ai-chatbot" className="hover:text-white transition">Vegavan AI Chatbot</Link></li>
                  <li><Link href="/case-studies" className="hover:text-white transition">All Verified Case Studies</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono uppercase tracking-wider text-neutral-400 font-bold mb-3">Company & Leadership</h4>
                <ul className="space-y-2 text-neutral-400 font-light">
                  <li><Link href="/about" className="hover:text-white transition">About Webflora Technologies</Link></li>
                  <li><Link href="/why-webflora" className="hover:text-white transition">Why Choose Webflora</Link></li>
                  <li><Link href="/compare/custom-software-vs-saas" className="hover:text-white transition">Custom vs SaaS Analysis</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition">Visit Patna Office (Saketpuri)</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
