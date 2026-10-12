import React from "react";
import Link from "next/link";
import {
  TrendingUp,
  Search,
  MousePointerClick,
  Share2,
  MapPin,
  Target,
  BarChart3,
  Globe2,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Smartphone,
  ChevronRight,
  Check,
  Lock,
  MessageSquare,
  Sparkles,
  Award,
  Sliders,
  Hotel,
  ShoppingBag,
  GraduationCap,
  Stethoscope,
  Building,
  Briefcase,
  FileCheck,
  Clock,
  Instagram,
  Facebook,
  Bot,
  PieChart
} from "lucide-react";
import ContactSection from "../../Components/ContactSection";
import ClientMarquee from "../../Components/ClientMarquee";
import GayaMarketingHeroWidget from "./GayaMarketingHeroWidget";
import GayaMarketingScopeEstimator from "./GayaMarketingScopeEstimator";
import GayaMarketingFAQAccordion from "./GayaMarketingFAQAccordion";
import GayaServicesNav from "../GayaServicesNav";
import {
  buildWebPageSchema,
  buildServiceSchema,
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
  buildOrganizationSchema,
  buildProfessionalServiceSchema,
  buildProductSchema,
  buildReviewSchema,
  buildHowToSchema,
  buildItemListSchema,
  buildSiteNavigationElementSchema,
  JsonLd
} from "../../lib/schemas";

export const dynamic = "force-static";

export const metadata = {
  title: "Digital Marketing Company in Gaya, Bihar | Webflora Technologies",
  description:
    "Looking for a digital marketing company in Gaya, Bihar? Webflora Technologies provides data-driven SEO, Google Ads, Meta Ads, Local SEO, and lead generation.",
  keywords:
    "digital marketing company in gaya, digital marketing agency in gaya, digital marketing company in gaya bihar, SEO company in gaya, SEO services in gaya, local SEO services gaya, social media marketing agency gaya, Google Ads agency gaya, Facebook ads agency gaya, Instagram marketing gaya, online marketing company gaya, lead generation services gaya, digital marketing services in gaya, Webflora Technologies",
  alternates: {
    canonical: "https://webfloratechnologies.com/locations/digital-marketing-company-in-gaya",
  },
  openGraph: {
    title: "Digital Marketing Company in Gaya, Bihar | Webflora Technologies",
    description:
      "Looking for a digital marketing company in Gaya, Bihar? Webflora Technologies provides data-driven SEO, Google Ads, Meta Ads, Local SEO, and lead generation.",
    url: "https://webfloratechnologies.com/locations/digital-marketing-company-in-gaya",
    siteName: "Webflora Technologies",
    images: [
      {
        url: "https://webfloratechnologies.com/title-logo.png",
        width: 512,
        height: 512,
        alt: "Webflora Technologies - Digital Marketing Company in Gaya, Bihar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Company in Gaya, Bihar | Webflora Technologies",
    description:
      "Looking for a digital marketing company in Gaya, Bihar? Webflora Technologies provides data-driven SEO, Google Ads, Meta Ads, Local SEO, and lead generation.",
    images: ["https://webfloratechnologies.com/title-logo.png"],
  },
};

const marketingFaqsData = [
  {
    question: "Which is a leading digital marketing company in Gaya, Bihar?",
    answer:
      "Webflora Technologies is a premier performance digital marketing agency serving businesses in Gaya, Bodh Gaya, and surrounding districts. Headquartered in Patna, Bihar (registered MSME: UDYAM-BR-26-0183379), Webflora Technologies delivers data-driven Search Engine Optimization (SEO), high-intent Google Ads management, Meta Ads (Instagram & Facebook), and Local SEO remotely with transparent communication and zero vanity metrics.",
  },
  {
    question: "What digital marketing services do you provide for businesses in Gaya?",
    answer:
      "We provide comprehensive end-to-end digital marketing services including Search Engine Optimization (SEO), Local SEO and Google Business Profile optimization, Google Search & Display PPC Ads, Meta (Instagram & Facebook) performance campaigns, high-converting mobile landing page development, conversion rate optimization (CRO), content marketing, and multi-channel analytics tracking.",
  },
  {
    question: "How much does digital marketing cost in Gaya, Bihar?",
    answer:
      "Digital marketing costs vary based on your industry, channel mix, advertising budget, and growth goals. Ad budgets (paid directly to Google and Meta) are customized to your monthly targets, while agency management fees cover strategic campaign planning, continuous keyword and negative list pruning, ad copywriting, custom graphics, landing page optimization, and transparent bi-weekly performance reporting.",
  },
  {
    question: "How long does it take to see measurable results from digital marketing?",
    answer:
      "Paid advertising channels such as Google Search Ads and Meta Ads can generate targeted inquiries and phone calls within 24 to 72 hours of campaign launch. In contrast, organic SEO and Google Business 3-Pack rankings typically build sustained momentum over 3 to 6 months as domain authority, content indexing, and local citation signals compound.",
  },
  {
    question: "What is the difference between SEO and Google Ads (PPC)?",
    answer:
      "Google Ads (PPC) is a paid auction platform where your business appears immediately at the top of search results for chosen keywords, paying only when a prospective customer clicks your ad. SEO (Search Engine Optimization) is an organic strategy that optimizes your website structure, speed, and content to earn long-term unpaid rankings on search engine result pages.",
  },
  {
    question: "How does Local SEO help my local retail store or clinic in Gaya?",
    answer:
      "Local SEO ensures your business appears prominently when nearby customers search for services on Google Maps and regional search results (e.g., 'doctor near me' or 'hotel in Bodh Gaya'). We optimize your Google Business Profile, ensure consistent NAP (Name, Address, Phone) citations, integrate local geo-relevance, and help you systematically gather genuine customer reviews.",
  },
  {
    question: "Do I need a website before starting digital marketing campaigns?",
    answer:
      "While social media awareness ads and lead generation forms can run directly within Facebook or Instagram, a fast, mobile-friendly landing page or website significantly increases conversion rates, establishes credibility, enables Google Ads quality score discounts, and allows advanced tracking via Google Tag Manager and GA4.",
  },
  {
    question: "Can you run targeted ads on Instagram and Facebook for my business?",
    answer:
      "Yes. We design high-impact visual creatives, write persuasive regional copy, configure demographic and interest-based audience targeting across Gaya and Bihar, and implement retargeting funnels to re-engage prospective customers who have previously visited your profiles or website.",
  },
  {
    question: "Who owns our ad accounts, creatives, and analytics data?",
    answer:
      "You retain 100% ownership of all Google Ads accounts, Meta Business Managers, analytics profiles, and creative assets. Webflora Technologies operates under partner access protocols, ensuring complete financial and data transparency with zero vendor lock-in.",
  },
  {
    question: "How do you track and report campaign performance?",
    answer:
      "We configure Google Analytics 4 (GA4), Google Tag Manager, Meta Pixel, and server-side tracking to monitor verified conversions such as phone calls, WhatsApp inquiries, and form submissions. You receive transparent bi-weekly reports detailing impressions, click-through rates, qualified leads, and cost per lead.",
  },
  {
    question: "How can tourism, hotels, and guest houses in Bodh Gaya benefit from digital marketing?",
    answer:
      "Hotels and travel agencies in Bodh Gaya benefit from multi-lingual Google Search campaigns targeting seasonal pilgrims and international travelers, optimized Google Business listings showcasing amenities and room photos, and direct booking landing pages that save substantial third-party OTA commissions.",
  },
  {
    question: "How can we start a digital marketing project with Webflora Technologies?",
    answer:
      "You can start by submitting the enquiry form below or contacting our team via WhatsApp at +91 85408 14729. We will conduct a preliminary digital presence and competitor review for your business in Gaya, followed by a discovery discussion to align on target channels, budgets, and timelines.",
  },
];

export default function DigitalMarketingCompanyInGayaPage() {
  const canonicalUrl = "https://webfloratechnologies.com/locations/digital-marketing-company-in-gaya";

  const pageSchemas = [
    buildOrganizationSchema(),
    buildProfessionalServiceSchema({
      name: "Webflora Technologies - Digital Marketing Company in Gaya",
      url: canonicalUrl,
      description: "Performance digital marketing, Search Engine Optimization (SEO), Local SEO, Google Ads, and Meta Ads management for businesses in Gaya and Bihar.",
      areaServed: {
        "@type": "AdministrativeArea",
        "name": "Gaya, Bihar, India"
      }
    }),
    buildProductSchema({
      name: "Webflora Digital Marketing & Local SEO Growth Package",
      description: "Data-driven SEO, Google Ads, Meta Ads management, and Google Business Profile optimization for businesses in Gaya and Bihar.",
      category: "Digital Marketing Services",
      image: "https://webfloratechnologies.com/title-logo.png",
      url: canonicalUrl,
      offers: {
        price: "15000",
        priceCurrency: "INR",
        url: canonicalUrl
      },
      aggregateRating: {
        ratingValue: 4.9,
        reviewCount: 78
      }
    }),
    buildReviewSchema({
      authorName: "Sanjay Gupta",
      reviewRating: 5,
      reviewBody: "Webflora transformed our online lead generation in Gaya. Our Google Maps visibility improved significantly within 60 days, and our ad ROI doubled.",
      itemReviewed: {
        "@type": "Service",
        "name": "Digital Marketing Services in Gaya",
        "provider": {
          "@type": "Organization",
          "name": "Webflora Technologies",
          "url": "https://webfloratechnologies.com"
        }
      }
    }),
    buildWebPageSchema({
      url: canonicalUrl,
      name: "Digital Marketing Company in Gaya, Bihar | Webflora Technologies",
      description:
        "Looking for a digital marketing company in Gaya, Bihar? Webflora Technologies provides data-driven SEO, Google Ads, Meta Ads, Local SEO, and lead generation.",
    }),
    buildServiceSchema({
      name: "Digital Marketing Services in Gaya",
      serviceType: "Digital Marketing Services",
      description:
        "Performance digital marketing, Search Engine Optimization (SEO), Local SEO, Google Ads, and Meta Ads management for businesses in Gaya and Bihar.",
      areaServed: "Gaya, Bihar, India",
    }),
    buildBreadcrumbListSchema([
      { name: "Home", url: "/" },
      { name: "Locations", url: "/locations" },
      {
        name: "Digital Marketing Company in Gaya",
        url: canonicalUrl,
      },
    ]),
    buildHowToSchema({
      name: "Our Data-Driven Digital Marketing Framework in Gaya",
      description: "A continuous 6-step performance marketing framework engineered to generate verified inquiries and maximize ROI.",
      steps: [
        { name: "Business Discovery & Competitor Analysis", text: "We analyze your target audience, existing lead funnels, margins, and local search competition in Gaya." },
        { name: "Search Intent & Audience Segmentation", text: "Map high-converting commercial intent search keywords, regional search queries, and custom social audience personas." },
        { name: "Campaign Architecture & Ad Creative Engineering", text: "Design high-converting landing pages, compelling ad copywriting, and striking visual graphics tailored for Gaya businesses." },
        { name: "Server-Side Tracking & Attribution Setup", text: "Implement Meta Conversions API (CAPI), Google Tag Manager, GA4, and call attribution tracking for zero data leakage." },
        { name: "Agile Bid Optimization & A/B Testing", text: "Continuously test ad hooks, adjust keyword negative lists, optimize target CPA, and scale top-performing audience segments." },
        { name: "Transparent Reporting & Strategy Reviews", text: "Deliver weekly metrics showing verified leads, cost-per-acquisition (CPA), return on ad spend (ROAS), and next sprint goals." }
      ]
    }),
    buildItemListSchema([
      { name: "Search Engine Optimization (SEO) & Technical Audits", url: `${canonicalUrl}#services` },
      { name: "Local SEO & Google Business Profile 3-Pack Optimization", url: `${canonicalUrl}#services` },
      { name: "Social Media Marketing & Instagram Content Production", url: `${canonicalUrl}#services` },
      { name: "High-Intent Google Ads & PPC Search Campaigns", url: `${canonicalUrl}#services` },
      { name: "Meta (Facebook & Instagram) Targeted Lead Generation Ads", url: `${canonicalUrl}#services` },
      { name: "WhatsApp Automation, Drip Sequences & Retargeting", url: `${canonicalUrl}#services` },
      { name: "Conversion Rate Optimization (CRO) & Landing Page Design", url: `${canonicalUrl}#services` },
      { name: "Analytics, Call Tracking & End-to-End ROI Attribution", url: `${canonicalUrl}#services` }
    ]),
    buildSiteNavigationElementSchema(),
    buildFAQPageSchema(marketingFaqsData),
  ];

  return (
    <div className="bg-[#030303] text-white selection:bg-[#FF3C00] selection:text-white min-h-screen relative overflow-x-hidden font-sans">
      <JsonLd data={pageSchemas} />

      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="relative pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden border-b border-white/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-orange-600/15 via-[#FF3C00]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-7 text-left">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-transparent border border-orange-500/30 text-[10px] sm:text-xs font-mono tracking-wider text-orange-400 backdrop-blur-md shadow-[0_0_20px_rgba(255,60,0,0.1)] w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3C00] animate-pulse shrink-0" />
                <span className="font-bold text-white tracking-wider shrink-0">WEBFLORA</span>
                <span className="text-gray-500">|</span>
                <span className="text-orange-300">GAYA DIGITAL GROWTH AGENCY</span>
              </div>

              {/* Exact H1 and Supporting Headline */}
              <div className="space-y-2 sm:space-y-3">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
                  Digital Marketing Company in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 drop-shadow-[0_0_25px_rgba(255,60,0,0.35)]">
                    Gaya, Bihar
                  </span>
                </h1>
                <p className="text-sm sm:text-base lg:text-lg font-medium text-orange-300/90 font-mono tracking-tight">
                  Data-Driven Digital Marketing, SEO & Performance Advertising for Growing Businesses
                </p>
              </div>

              {/* Hero description */}
              <p className="text-gray-300 text-xs sm:text-base lg:text-lg font-light leading-relaxed max-w-xl">
                Looking for a digital marketing company in Gaya, Bihar? Webflora Technologies helps businesses improve online visibility, reach relevant local and regional audiences, generate qualified enquiries, and measure marketing performance through tailored, high-converting digital marketing strategies.
              </p>

              {/* 4 Supporting points */}
              <div className="grid grid-cols-2 gap-2 max-w-xl pt-1">
                {[
                  { text: "Search engine optimization", hint: "Top Search Rankings" },
                  { text: "Local SEO & Google Maps", hint: "Map 3-Pack Visibility" },
                  { text: "Google Ads & Meta Ads", hint: "High-Intent Enquiries" },
                  { text: "Lead gen & landing pages", hint: "Conversion Engineered" },
                ].map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-2.5 py-2 sm:px-3 sm:py-2.5 rounded-xl bg-zinc-900/80 border border-white/10 hover:border-[#FF3C00]/40 transition-all backdrop-blur-md"
                  >
                    <CheckCircle2 size={13} className="text-[#FF3C00] shrink-0" />
                    <div className="min-w-0">
                      <span className="text-[11px] sm:text-xs text-white font-medium block truncate">
                        {point.text}
                      </span>
                      <span className="text-[9px] text-gray-400 font-mono hidden sm:block">
                        {point.hint}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
                <a
                  id="hero-consultation-cta"
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#FF3C00] via-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(255,60,0,0.4)] hover:shadow-[0_0_40px_rgba(255,60,0,0.6)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Get a Free Consultation</span>
                  <ArrowRight size={14} />
                </a>

                <a
                  id="hero-services-cta"
                  href="#services"
                  className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-white/5 border border-white/15 hover:border-orange-500/50 hover:bg-orange-500/10 text-white font-semibold text-xs sm:text-sm transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-1.5"
                >
                  <TrendingUp size={13} className="text-orange-400" />
                  <span>Explore Our Services</span>
                </a>
              </div>

              {/* Direct WhatsApp Consultation */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] sm:text-xs text-gray-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Direct Consultation:
                </span>
                <a
                  href="https://wa.me/918540814729?text=Hello%20Webflora%2C%20I%20am%20looking%20for%20digital%20marketing%20services%20in%20Gaya."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white underline decoration-emerald-500/40"
                >
                  +91 85408 14729
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Marketing Hero Widget */}
            <div className="lg:col-span-5 relative pt-4 lg:pt-0">
              <GayaMarketingHeroWidget />
            </div>
          </div>

          {/* Metric & Credibility Strip */}
          <div className="pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 text-xs font-mono uppercase tracking-wider text-gray-400">
            <div className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-zinc-950/70 border border-white/10 shadow-lg backdrop-blur-md">
              <ShieldCheck size={18} className="text-[#FF3C00] shrink-0" />
              <div className="min-w-0">
                <span className="text-white font-bold block truncate text-[11px] sm:text-xs">UDYAM-BR-26-0183379</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 truncate block">Registered MSME</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-zinc-950/70 border border-white/10 shadow-lg backdrop-blur-md">
              <BarChart3 size={18} className="text-amber-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-white font-bold block truncate text-[11px] sm:text-xs">Verified Enquiries</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 truncate block">Zero Vanity Clicks</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-zinc-950/70 border border-white/10 shadow-lg backdrop-blur-md">
              <Lock size={18} className="text-emerald-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-white font-bold block truncate text-[11px] sm:text-xs">100% Ad Account Control</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 truncate block">Direct Billing to Meta/Google</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-zinc-950/70 border border-white/10 shadow-lg backdrop-blur-md">
              <Zap size={18} className="text-orange-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-white font-bold block truncate text-[11px] sm:text-xs">Fast Execution</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 truncate block">Live in 5-7 Days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <ClientMarquee />

      {/* =========================================================================
          SECTION 2: TRUST AND VALUE PROPOSITION
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#080808] border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <ShieldCheck size={12} />
              <span>TRANSPARENT GROWTH PARTNER</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Helping Businesses in Gaya Grow Through Digital Marketing
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg font-light leading-relaxed">
              Modern commerce in Gaya is increasingly digital. Whether a consumer is seeking a specialist doctor near Medical College Road, a pilgrim booking a heritage stay in Bodh Gaya, or a student researching coaching institutes on GB Road, discovery begins on a mobile screen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-[#FF3C00]">
                <Target size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">High-Intent Traffic Acquisition</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                We avoid spending your budget on irrelevant clicks. Our campaigns focus exclusively on customers actively looking for your specific services in Gaya, Bodh Gaya, and Bihar.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                <Smartphone size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">Mobile-First Landing Experience</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Over 85% of regional search traffic originates on mobile phones. We develop lightning-fast landing pages with 1-click WhatsApp and call buttons to maximize conversions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                <BarChart3 size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">Data Clarity & Transparent Reports</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                No confusing jargon or vanity metrics. You receive clear performance metrics tracking verified phone inquiries, form leads, and cost per qualified acquisition.
              </p>
            </div>
          </div>

          {/* Explicit Disclosure on Patna HQ & Remote Delivery */}
          <div className="p-4 sm:p-6 rounded-2xl bg-zinc-900/60 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                <MapPin size={16} />
              </div>
              <div className="text-xs sm:text-sm text-gray-300">
                <span className="font-bold text-white block">Headquartered in Patna, Bihar — Serving Gaya Remotely</span>
                Webflora Technologies operates from Patna, delivering elite digital marketing, paid ads, and technical SEO management remotely to businesses in Gaya, Bodh Gaya, and across India. We do not claim a physical branch in Gaya.
              </div>
            </div>
            <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 shrink-0">
              Direct Video & WhatsApp Coordination
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: COMPREHENSIVE DIGITAL MARKETING SERVICES IN GAYA
          ========================================================================= */}
      <section id="services" className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#030303] border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <TrendingUp size={12} />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Our Digital Marketing Services in Gaya
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg font-light leading-relaxed">
              We provide tailored, multi-channel marketing campaigns built around your unique business economics, margin structure, and growth milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* 1. SEO */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#FF3C00]/40 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:bg-[#FF3C00] group-hover:text-white transition-all">
                  <Search size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Search Engine Optimization (SEO)
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                  Build long-term organic authority on Google. We handle comprehensive keyword research, search intent mapping, technical SEO audits, site speed optimization, schema markup, and internal link architecture.
                </p>
                <div className="pt-2 text-[11px] font-mono text-orange-400/90">
                  • On-Page & Technical Audits<br />
                  • Core Web Vitals Optimization<br />
                  • Regional Search Keyword Targeting
                </div>
              </div>
            </div>

            {/* 2. Local SEO & Google Business Profile */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#FF3C00]/40 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-[#FF3C00] group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Local SEO & Google Business Profile
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                  Dominate local map searches in Gaya. We optimize your Google Business listing, synchronize consistent NAP citations across directories, manage localized content, and guide authentic review acquisition.
                </p>
                <div className="pt-2 text-[11px] font-mono text-emerald-400/90">
                  • Google Maps 3-Pack Optimization<br />
                  • Local Directory Citations<br />
                  • Review Generation Guidance
                </div>
              </div>
            </div>

            {/* 3. Social Media Marketing */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#FF3C00]/40 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:bg-[#FF3C00] group-hover:text-white transition-all">
                  <Share2 size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Social Media Marketing
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                  Engage local audiences across Instagram, Facebook, and LinkedIn. We plan creative content calendars, design premium branded visual graphics, produce short-form video reels, and manage community interactions.
                </p>
                <div className="pt-2 text-[11px] font-mono text-pink-400/90">
                  • Visual Content Creation<br />
                  • Instagram Reels & Carousels<br />
                  • Community & DM Engagement
                </div>
              </div>
            </div>

            {/* 4. Google Ads & Performance PPC */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#FF3C00]/40 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-[#FF3C00] group-hover:text-white transition-all">
                  <MousePointerClick size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Google Ads & Performance PPC
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                  Capture immediate commercial intent with Google Search campaigns. We curate precise negative keyword lists, implement ad extensions, manage bid strategies, and minimize cost-per-click while driving high-value leads.
                </p>
                <div className="pt-2 text-[11px] font-mono text-blue-400/90">
                  • Search & Call-Only Ads<br />
                  • Strict Negative Keyword Pruning<br />
                  • Real-Time Lead Conversion Tracking
                </div>
              </div>
            </div>

            {/* 5. Meta Ads (Facebook & Instagram) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#FF3C00]/40 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-[#FF3C00] group-hover:text-white transition-all">
                  <Instagram size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Meta Ads (Facebook & Instagram)
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                  Target prospective buyers based on demographics, localized geo-radii, and specific user interests. We run lead generation instant forms, WhatsApp click-to-chat campaigns, and custom audience retargeting.
                </p>
                <div className="pt-2 text-[11px] font-mono text-purple-400/90">
                  • Instant Lead Form Campaigns<br />
                  • WhatsApp Direct Ad Funnels<br />
                  • Retargeting Website Visitors
                </div>
              </div>
            </div>

            {/* 6. Conversion Rate Optimization (CRO) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#FF3C00]/40 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-[#FF3C00] group-hover:text-white transition-all">
                  <Target size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  CRO & High-Speed Landing Pages
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                  Driving clicks without conversions wastes budget. We engineer lightweight, fast-loading mobile landing pages designed with persuasive copy, trust signals, and clear call-to-action buttons to double lead capture.
                </p>
                <div className="pt-2 text-[11px] font-mono text-amber-400/90">
                  • Sub-Second Page Speed<br />
                  • Frictionless Lead Forms<br />
                  • A/B Headline & Offer Testing
                </div>
              </div>
            </div>

            {/* 7. Content Marketing & AEO */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#FF3C00]/40 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-[#FF3C00] group-hover:text-white transition-all">
                  <Bot size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Content Marketing & AEO / GEO
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                  Optimize for AI search engines like Google AI Overviews, Perplexity, and voice queries. We produce authoritative, helpful guides answering specific customer questions, establishing brand topical authority.
                </p>
                <div className="pt-2 text-[11px] font-mono text-cyan-400/90">
                  • AI Overviews (SGE) Structuring<br />
                  • Topical Authority Silos<br />
                  • Fact-Checked Regional Content
                </div>
              </div>
            </div>

            {/* 8. Marketing Analytics & Tracking */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#FF3C00]/40 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:bg-[#FF3C00] group-hover:text-white transition-all">
                  <PieChart size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Analytics & Performance Reporting
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                  Full tracking infrastructure setup using Google Analytics 4, Google Tag Manager, Meta Conversions API, and UTM tracking. You receive regular performance reviews analyzing lead quality and channel efficiency.
                </p>
                <div className="pt-2 text-[11px] font-mono text-red-400/90">
                  • Server-Side Event Tracking<br />
                  • Verified Call & Form Attribution<br />
                  • Bi-Weekly Performance Audits
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: INDUSTRY-SPECIFIC MARKETING SOLUTIONS
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#080808] border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Building size={12} />
              <span>LOCAL SECTOR PLAYBOOKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Digital Marketing Solutions for Businesses in Gaya
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg font-light leading-relaxed">
              Every industry in Gaya operates under different sales cycles, customer touchpoints, and regional search dynamics. We build bespoke strategies for key regional sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Industry 1: Hospitality & Bodh Gaya Tourism */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400">
                <Hotel size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Hospitality & Tourism in Bodh Gaya</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Hotels, resorts, guest houses, and Buddhist travel agencies serving Bodh Gaya benefit from high-intent Google Search campaigns for seasonal pilgrims, multi-lingual landing pages, Google Maps visibility, and direct room booking funnels that reduce hefty OTA commissions.
              </p>
            </div>

            {/* Industry 2: Retail & Local Commerce */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                <ShoppingBag size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Retail & Commercial Outlets</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Retail showrooms, textile stores around Manpur, electronics dealers, and jewelers along GB Road can leverage local radius Meta advertising during festive periods, Google Business 3-Pack optimization, and WhatsApp catalog marketing to drive physical footfall.
              </p>
            </div>

            {/* Industry 3: Education & Coaching Institutes */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Education & Coaching Institutes</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Competitive exam academies, CBSE schools, and skill training centers require targeted admission cycle marketing across Gaya and Magadh division. We run targeted lead gen ads, demo registration funnels, and automated WhatsApp follow-ups for parent inquiries.
              </p>
            </div>

            {/* Industry 4: Healthcare & Clinics */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                <Stethoscope size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Healthcare, Clinics & Diagnostic Labs</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Hospitals, specialized doctors, and diagnostic centers along Medical College Road benefit from ethical, informative local search optimization, verified doctor Google profiles, appointment booking landing pages, and patient trust-building content.
              </p>
            </div>

            {/* Industry 5: Real Estate & Builders */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400">
                <Building size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Real Estate & Property Developers</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Residential apartment projects, commercial complexes, and plotting ventures require high-ticket lead generation. We deploy cinematic video walkthrough ads on Meta, search ads targeting active property buyers, and dedicated project inquiry microsites.
              </p>
            </div>

            {/* Industry 6: Professional B2B Services */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
                <Briefcase size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Professional & B2B Services</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Chartered accountants, legal consultants, logistics firms, and corporate equipment vendors can establish market authority through targeted Google Search campaigns, LinkedIn outreach, and case study-driven conversion assets.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHY CHOOSE WEBFLORA TECHNOLOGIES
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#030303] border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Award size={12} />
              <span>ACCOUNTABILITY & INTEGRITY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Why Choose Webflora Technologies for Digital Marketing in Gaya?
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg font-light leading-relaxed">
              We are engineering-first marketers who prioritize measurable business outcomes over empty clicks and cosmetic vanity metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                title: "Data-Driven Strategy",
                desc: "We analyze competitor dynamics, regional search volume, and profit margins before allocating a single rupee of budget.",
                icon: BarChart3,
              },
              {
                title: "100% Ad Account Control",
                desc: "You retain direct administrative ownership of your Google Ads and Meta ad accounts. Zero markup on media spend.",
                icon: Lock,
              },
              {
                title: "Bihar Market Knowledge",
                desc: "Headquartered in Patna, we intimately understand regional buyer psychology, regional languages, and Magadh market dynamics.",
                icon: Globe2,
              },
              {
                title: "Conversion-Focused",
                desc: "We do not just generate clicks; we optimize landing pages and tracking to deliver qualified phone calls and CRM leads.",
                icon: Target,
              },
              {
                title: "No Cookie-Cutter Packages",
                desc: "Every campaign strategy is tailored around your actual sales capacity, product margins, and growth objectives.",
                icon: Sliders,
              },
              {
                title: "Technical Engineering Depth",
                desc: "Our in-house web development capabilities ensure fast code, schema implementation, and flawless tracking tags.",
                icon: Zap,
              },
              {
                title: "Transparent Reporting",
                desc: "Bi-weekly reporting dashboards detailing exact ad spend, cost per inquiry, and campaign optimization milestones.",
                icon: FileCheck,
              },
              {
                title: "Registered MSME",
                desc: "Officially registered enterprise (UDYAM-BR-26-0183379) ensuring professional contracts and transparent billing.",
                icon: ShieldCheck,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-zinc-950/70 border border-white/10 hover:border-[#FF3C00]/40 transition-all space-y-2.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                    <Icon size={16} />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: OUR 6-STEP DIGITAL MARKETING PROCESS
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#080808] border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Clock size={12} />
              <span>STRUCTURED EXECUTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Our 6-Step Digital Marketing Framework
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg font-light leading-relaxed">
              A transparent, phased methodology ensuring your marketing campaigns launch quickly, track accurately, and scale efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                step: "01",
                title: "Market Audit & Competitor Discovery",
                desc: "We analyze your existing website, Google Business Profile, active competitor campaigns in Gaya, and high-intent customer search keywords.",
              },
              {
                step: "02",
                title: "Strategy & Channel Mapping",
                desc: "We define targeted channels (Google Ads, Meta Ads, Local SEO), establish budget allocations, and outline conversion KPIs.",
              },
              {
                step: "03",
                title: "Tracking Infrastructure Setup",
                desc: "We install Google Tag Manager, GA4 event tracking, Meta Pixel, and phone call click tracking to ensure 100% conversion attribution.",
              },
              {
                step: "04",
                title: "Creative Development & Launch",
                desc: "We write persuasive ad copy, design eye-catching graphic banners, configure targeted ad groups, and launch campaigns live.",
              },
              {
                step: "05",
                title: "Data Analysis & A/B Optimization",
                desc: "We actively prune negative keywords, test alternative creative variants, optimize bid strategies, and refine audience targeting.",
              },
              {
                step: "06",
                title: "Transparent Reporting & Scaling",
                desc: "We provide bi-weekly performance reviews analyzing lead volume and blended cost-per-lead, scaling winning campaigns profitably.",
              },
            ].map((stepItem, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#FF3C00]/40 transition-all space-y-3 relative overflow-hidden group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-[#FF3C00]/80 group-hover:text-[#FF3C00] transition-colors">
                    {stepItem.step}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-gray-400">
                    Phase {idx + 1}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">{stepItem.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: INTERACTIVE SCOPE & STRATEGY ESTIMATOR
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#030303] border-b border-white/10 relative">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#FF3C00] font-mono text-xs font-black uppercase tracking-[0.25em] block">
              Tailored Strategy Planning
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
              Plan Your Gaya Marketing Roadmap
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">
              Use our interactive planner to explore ideal marketing channels and receive an actionable strategy proposal.
            </p>
          </div>

          <GayaMarketingScopeEstimator />
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: DIGITAL MARKETING COST IN GAYA, BIHAR
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#080808] border-b border-white/10 relative">
        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Sparkles size={12} />
              <span>TRANSPARENT PRICING PRINCIPLES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Digital Marketing Cost in Gaya, Bihar
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg font-light leading-relaxed">
              We believe in complete pricing transparency. A local business in Gaya does not need a massive enterprise budget to start capturing qualified inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Target size={18} className="text-[#FF3C00]" />
                Media Budget (Paid Direct to Platforms)
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Your advertising budget is paid directly to Google Ads or Meta Ads with zero agency markup. You maintain full administrative visibility into billing, cost-per-click, and daily budgets, starting from as low as ₹300 to ₹1,500 per day depending on target lead volume.
              </p>
              <div className="p-3 rounded-xl bg-white/5 text-[11px] font-mono text-emerald-400">
                ✓ 100% Direct Platform Billing & GST Invoices
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Briefcase size={18} className="text-amber-400" />
                Agency Management & Creative Retainer
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Our management retainer covers strategic planning, ad copywriting, custom graphic banner design, technical conversion tracking setup, weekly bid adjustments, continuous negative keyword pruning, and bi-weekly performance reporting.
              </p>
              <div className="p-3 rounded-xl bg-white/5 text-[11px] font-mono text-orange-400">
                ✓ Continuous Optimization & Strategic Oversight
              </div>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF3C00] via-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xs sm:text-sm transition-all shadow-[0_0_25px_rgba(255,60,0,0.35)]"
            >
              <span>Discuss Your Marketing Requirements</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: LOCAL SEO & REGIONAL MARKET INSIGHTS
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#030303] border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Globe2 size={12} />
              <span>REGIONAL SEO CONTEXT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Digital Marketing Services in Gaya and Across Bihar
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg font-light leading-relaxed">
              Gaya represents one of Bihar&apos;s most vital cultural, educational, and commercial centers. Here is how modern digital marketing powers growth across its commercial corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Hotel size={18} className="text-[#FF3C00]" />
                Bodh Gaya International Hospitality Belt
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                As a UNESCO World Heritage destination, Bodh Gaya draws pilgrims and international tourists from Southeast Asia, Sri Lanka, Japan, and across India. Multi-lingual digital marketing, Google Maps visibility, and direct hotel booking landing pages enable local operators to capture high-value direct bookings without surrendering 20-30% margins to third-party travel aggregators.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <ShoppingBag size={18} className="text-amber-400" />
                Urban Commerce & Healthcare Along GB Road
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Enterprises situated across commercial zones such as GB Road markets, Manpur textile clusters, Chandauti, and Medical College Road require digital platforms that capture regional search inquiries, verify local business authenticity, and present professional contact details directly on mobile devices.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-zinc-900/60 border border-white/10 text-xs sm:text-sm text-gray-300 leading-relaxed">
            We collaborate with clients across Gaya and Bodh Gaya remotely from our headquarters in Patna, Bihar. We do not manufacture fake local office locations or publish misleading street addresses. Instead, we deliver verified digital marketing management, direct video review calls, and round-the-clock WhatsApp support.
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: FREQUENTLY ASKED QUESTIONS (AEO OPTIMIZED)
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#080808] border-b border-white/10 relative">
        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <MessageSquare size={12} />
              <span>CLEAR & FACTUAL ANSWERS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Frequently Asked Questions About Digital Marketing in Gaya
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg">
              Find transparent answers to the most common questions regarding digital marketing budgets, SEO timelines, Google Ads setup, and remote collaboration.
            </p>
          </div>

          <GayaMarketingFAQAccordion faqs={marketingFaqsData} />
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: VERIFIED INTERNAL LINKS
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#030303] border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#FF3C00] font-mono text-xs font-black uppercase tracking-[0.25em] block">
              Verified Solutions
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white">
              Related Web, Software & Marketing Services
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                title: "Website Development in Gaya",
                href: "/locations/website-development-company-in-gaya",
                desc: "High-speed custom websites in Gaya",
              },
              {
                title: "Software Company in Gaya",
                href: "/locations/software-company-in-gaya",
                desc: "Custom CRM, ERP & SaaS portals",
              },
              {
                title: "Mobile App Development in Gaya",
                href: "/locations/mobile-app-development-company-in-gaya",
                desc: "Android, iOS & cross-platform apps",
              },
              {
                title: "Digital Marketing in Patna",
                href: "/it-company-in-patna/digital-marketing-agency-in-patna",
                desc: "Enterprise performance marketing",
              },
              {
                title: "SEO Services",
                href: "/seo-services-in-patna",
                desc: "Technical search engine optimization",
              },
              {
                title: "Mobile App Development",
                href: "/it-company-in-patna/mobile-app-development-company-in-patna",
                desc: "Cross-platform iOS & Android apps",
              },
              {
                title: "Software Development",
                href: "/it-company-in-patna/software-development-company-in-patna",
                desc: "Enterprise portals & management",
              },
              {
                title: "Verified Case Studies",
                href: "/case-studies",
                desc: "Client growth & campaign results",
              },
              {
                title: "National Locations",
                href: "/locations",
                desc: "Cities served across India",
              },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-orange-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                      {link.title}
                    </span>
                    <ChevronRight size={13} className="text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <span className="text-[11px] sm:text-xs text-gray-400 font-mono">
                    {link.desc}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GAYA TECHNOLOGY ECOSYSTEM CROSS-LINKS */}
      <GayaServicesNav activeId="marketing" />

      {/* =========================================================================
          SECTION 12: FINAL CONVERSION CTA BANNER
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#080808] via-zinc-950 to-black border-b border-white/10 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,60,0,0.18),transparent_65%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-[11px] sm:text-xs font-mono text-orange-400">
            <Sparkles size={12} />
            <span>START YOUR MARKETING GROWTH TODAY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Looking for a Digital Marketing Company in Gaya?
          </h2>

          <p className="text-gray-300 text-xs sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Whether you need Search Engine Optimization (SEO), high-intent Google Search Ads, local Google Maps ranking, or Meta performance campaigns, Webflora Technologies can help you build and execute a high-converting growth strategy.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <a
              id="final-consultation-btn"
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-9 sm:py-4 rounded-full bg-gradient-to-r from-[#FF3C00] via-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xs sm:text-base transition-all duration-300 shadow-[0_0_35px_rgba(255,60,0,0.4)] hover:shadow-[0_0_50px_rgba(255,60,0,0.6)] cursor-pointer"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight size={16} />
            </a>
            <Link
              id="final-contact-btn"
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-9 sm:py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-orange-500/40 font-semibold text-xs sm:text-base transition-all duration-300 backdrop-blur-md"
            >
              Contact Webflora Technologies
            </Link>
          </div>
        </div>
      </section>

      {/* WORKING CONTACT & ENQUIRY SECTION */}
      <ContactSection />
    </div>
  );
}
