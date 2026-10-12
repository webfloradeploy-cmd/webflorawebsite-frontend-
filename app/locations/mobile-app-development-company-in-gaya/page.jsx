import React from "react";
import Link from "next/link";
import {
  Smartphone,
  Layers,
  Cpu,
  Database,
  Lock,
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Bell,
  Code2,
  Workflow,
  Search,
  Users,
  Compass,
  FileCheck,
  Clock,
  ChevronRight,
  Check,
  MessageSquare,
  Sparkles,
  Award,
  Sliders,
  Hotel,
  ShoppingBag,
  GraduationCap,
  Stethoscope,
  Building,
  Truck,
  Globe2,
  RefreshCw,
  Server,
  Cloud
} from "lucide-react";
import ContactSection from "../../Components/ContactSection";
import ClientMarquee from "../../Components/ClientMarquee";
import GayaAppHeroWidget from "./GayaAppHeroWidget";
import GayaAppScopeEstimator from "./GayaAppScopeEstimator";
import GayaAppFAQAccordion from "./GayaAppFAQAccordion";
import GayaServicesNav from "../GayaServicesNav";
import {
  buildWebPageSchema,
  buildServiceSchema,
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
  buildOrganizationSchema,
  buildProfessionalServiceSchema,
  buildSoftwareApplicationSchema,
  buildProductSchema,
  buildReviewSchema,
  buildHowToSchema,
  buildItemListSchema,
  buildSiteNavigationElementSchema,
  JsonLd
} from "../../lib/schemas";

export const dynamic = "force-static";

export const metadata = {
  title: "Mobile App Development Company in Gaya, Bihar | Webflora",
  description:
    "Looking for a mobile app development company in Gaya, Bihar? Webflora Technologies helps businesses plan custom Android, iOS, and cross-platform app solutions.",
  keywords:
    "mobile app development company in gaya, mobile app development company in gaya bihar, app development company in gaya, mobile app developers in gaya, Android app development gaya, iOS app development gaya, Flutter app development gaya, React Native app development gaya, custom mobile app development gaya, business app development gaya, ecommerce app development gaya, mobile application development services gaya, Webflora Technologies",
  alternates: {
    canonical: "https://webfloratechnologies.com/locations/mobile-app-development-company-in-gaya",
  },
  openGraph: {
    title: "Mobile App Development Company in Gaya, Bihar | Webflora",
    description:
      "Looking for a mobile app development company in Gaya, Bihar? Webflora Technologies helps businesses plan custom Android, iOS, and cross-platform app solutions.",
    url: "https://webfloratechnologies.com/locations/mobile-app-development-company-in-gaya",
    siteName: "Webflora Technologies",
    images: [
      {
        url: "https://webfloratechnologies.com/title-logo.png",
        width: 512,
        height: 512,
        alt: "Webflora Technologies - Mobile App Development Company in Gaya, Bihar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Company in Gaya, Bihar | Webflora",
    description:
      "Looking for a mobile app development company in Gaya, Bihar? Webflora Technologies helps businesses plan custom Android, iOS, and cross-platform app solutions.",
    images: ["https://webfloratechnologies.com/title-logo.png"],
  },
};

const appFaqsData = [
  {
    question: "Which company provides mobile app development services in Gaya, Bihar?",
    answer:
      "Webflora Technologies provides mobile application engineering and cross-platform development services for businesses in Gaya and Bodh Gaya. Headquartered in Patna, Bihar (registered MSME: UDYAM-BR-26-0183379), Webflora Technologies designs, builds, and maintains custom Android, iOS, and React Native/Flutter applications remotely with clear milestones, clean code architecture, and transparent communication.",
  },
  {
    question: "Does Webflora develop Android and iOS applications?",
    answer:
      "Yes. We develop cross-platform mobile applications using React Native and Flutter that compile to native performance across both Google Android and Apple iOS devices from a shared codebase. We also build dedicated Android or iOS solutions where platform-specific native hardware modules or architectures are required.",
  },
  {
    question: "What is the cost of developing a mobile application in Gaya?",
    answer:
      "The cost of developing a mobile app depends entirely on project scope, including the number of screens, platform selection (Android, iOS, or cross-platform), backend API requirements, payment gateways, push notifications, and administrative dashboards. Basic business utility apps differ significantly in development effort from complex on-demand or multi-role platforms. We invite you to discuss your requirements for a detailed scope assessment.",
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer:
      "A structured mobile application typically takes between 4 to 10 weeks depending on complexity. Initial UI/UX design wireframes take approximately 1 to 2 weeks, followed by front-end client development, backend REST API integration, device testing, and store publishing preparation.",
  },
  {
    question: "Should I choose Flutter or React Native for my application?",
    answer:
      "Both React Native and Flutter are excellent cross-platform frameworks. React Native is ideal if your team uses JavaScript/React, requires native module flexibility, or shares web application logic. Flutter offers consistent UI rendering across older Android devices with its custom Skia/Impeller graphics engine. We evaluate your target features and existing tech stack to recommend the most practical option.",
  },
  {
    question: "Can you develop an app for a coaching institute or school in Gaya?",
    answer:
      "Yes. We engineer education and coaching applications featuring student login, live batch notices, video lecture modules, automated online mock tests, digital fee payment receipts via UPI/Razorpay, and comprehensive administrative control panels.",
  },
  {
    question: "Can my mobile app connect to my existing website or software?",
    answer:
      "Yes. If your current website, database, or CRM provides or supports RESTful or GraphQL APIs, we can connect the mobile application directly to synchronize customer data, product catalogs, order records, and user authentication seamlessly.",
  },
  {
    question: "Will you help publish the application on Google Play or the Apple App Store?",
    answer:
      "Yes. We guide clients through Google Play Console and Apple Developer account setup, bundle signing, asset preparation (screenshots, privacy policies, app store descriptions), and submission. Approval is governed by Google and Apple store compliance policies.",
  },
  {
    question: "Do you provide mobile app maintenance after launch?",
    answer:
      "Yes. We offer structured post-launch maintenance packages covering Android/iOS version compatibility updates, third-party library patches, security fixes, server monitoring, and feature enhancement sprints.",
  },
  {
    question: "Can Webflora Technologies work with businesses in Gaya from Patna?",
    answer:
      "Yes. Webflora Technologies is legally headquartered in Patna, Bihar, and operates a seamless remote delivery model with businesses in Gaya, Bodh Gaya, and across India. We communicate through structured video calls, WhatsApp, milestone demos, and staging test builds without requiring a physical Gaya office.",
  },
];

export default function MobileAppDevelopmentCompanyInGayaPage() {
  const canonicalUrl = "https://webfloratechnologies.com/locations/mobile-app-development-company-in-gaya";

  const pageSchemas = [
    buildOrganizationSchema(),
    buildProfessionalServiceSchema({
      name: "Webflora Technologies - Mobile App Development Company in Gaya",
      url: canonicalUrl,
      description: "Custom Android, iOS, and cross-platform mobile application development using React Native and Flutter for businesses in Gaya and Bihar.",
      areaServed: {
        "@type": "AdministrativeArea",
        "name": "Gaya, Bihar, India"
      }
    }),
    buildSoftwareApplicationSchema({
      name: "Webflora Custom Mobile Applications",
      applicationCategory: "MobileApplication",
      operatingSystem: "Android, iOS",
      description: "Production-grade native Android, iOS, and Flutter/React Native mobile applications custom-engineered by Webflora Technologies for businesses in Gaya, Bihar.",
      url: canonicalUrl,
      offers: { price: "45000", priceCurrency: "INR", url: canonicalUrl },
      aggregateRating: { ratingValue: 4.9, reviewCount: 96 }
    }),
    buildProductSchema({
      name: "Webflora Custom Mobile App Development Package",
      description: "Native Android, iOS, and Flutter mobile application engineering with complete source code handover and app store deployment for Gaya businesses.",
      category: "Mobile Application Software",
      image: "https://webfloratechnologies.com/title-logo.png",
      url: canonicalUrl,
      offers: {
        price: "45000",
        priceCurrency: "INR",
        url: canonicalUrl
      },
      aggregateRating: {
        ratingValue: 4.9,
        reviewCount: 96
      }
    }),
    buildReviewSchema({
      authorName: "Anand Verma",
      reviewRating: 5,
      reviewBody: "Webflora Technologies developed our Flutter mobile app with seamless Razorpay integration and live GPS order tracking. Excellent communication and high performance.",
      itemReviewed: {
        "@type": "Service",
        "name": "Mobile App Development Services in Gaya",
        "provider": {
          "@type": "Organization",
          "name": "Webflora Technologies",
          "url": "https://webfloratechnologies.com"
        }
      }
    }),
    buildWebPageSchema({
      url: canonicalUrl,
      name: "Mobile App Development Company in Gaya, Bihar | Webflora",
      description:
        "Looking for a mobile app development company in Gaya, Bihar? Webflora Technologies helps businesses plan custom Android, iOS, and cross-platform app solutions.",
    }),
    buildServiceSchema({
      name: "Mobile App Development Services in Gaya",
      serviceType: "Mobile App Development Services",
      description:
        "Custom Android, iOS, and cross-platform mobile application development using React Native and Flutter for businesses in Gaya and Bihar.",
      areaServed: "Gaya, Bihar, India",
    }),
    buildBreadcrumbListSchema([
      { name: "Home", url: "/" },
      { name: "Locations", url: "/locations" },
      {
        name: "Mobile App Development Company in Gaya",
        url: canonicalUrl,
      },
    ]),
    buildHowToSchema({
      name: "Our Mobile App Development Lifecycle in Gaya",
      description: "A disciplined 7-stage mobile app engineering process delivering high-performance, store-compliant applications.",
      steps: [
        { name: "Product Scope & Requirement Definition", text: "We analyze your business objectives, map user journeys, outline core MVP features, and establish technical milestones." },
        { name: "Interactive Figma UI/UX Prototyping", text: "Design modern, tactile app interfaces with click-through Figma prototypes tested for seamless mobile usability." },
        { name: "Frontend & Backend Mobile Engineering", text: "Develop reactive mobile frontends in Flutter or React Native backed by secure Node.js, Python, or Go microservices." },
        { name: "API, Payment & Hardware Integration", text: "Integrate UPI/Razorpay payment gateways, GPS geofencing, push notifications, and device sensors via secure REST APIs." },
        { name: "Device Lab & Quality Assurance Testing", text: "Rigorous testing across diverse Android and iOS hardware screens, network throttles, and edge cases." },
        { name: "Google Play & Apple App Store Publishing", text: "Prepare store assets, privacy compliance documentation, and ensure successful review approvals on Google Play and Apple App Store." },
        { name: "Post-Launch Monitoring & Iterative Updates", text: "Crash analytics monitoring, OS version compatibility updates, performance tuning, and planned feature expansions." }
      ]
    }),
    buildItemListSchema([
      { name: "Custom Android App Development (Kotlin & Java)", url: `${canonicalUrl}#app-services` },
      { name: "Native iOS App Development (Swift & SwiftUI)", url: `${canonicalUrl}#app-services` },
      { name: "Cross-Platform Mobile Apps (Flutter & React Native)", url: `${canonicalUrl}#app-services` },
      { name: "E-Commerce & Retail Shopping Mobile Apps", url: `${canonicalUrl}#app-services` },
      { name: "EdTech & Online Learning Applications", url: `${canonicalUrl}#app-services` },
      { name: "Healthcare & Doctor Appointment Booking Apps", url: `${canonicalUrl}#app-services` },
      { name: "Bodh Gaya Pilgrimage & Hotel Booking Mobile Apps", url: `${canonicalUrl}#app-services` },
      { name: "Logistics, Delivery & Driver Tracking Applications", url: `${canonicalUrl}#app-services` },
      { name: "Field Staff & Enterprise Workflow Mobile Apps", url: `${canonicalUrl}#app-services` },
      { name: "App Maintenance, OS Updates & App Store Compliance", url: `${canonicalUrl}#app-services` }
    ]),
    buildSiteNavigationElementSchema(),
    buildFAQPageSchema(appFaqsData),
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
                <span className="text-orange-300">GAYA MOBILE APP ENGINEERING</span>
              </div>

              {/* Exact H1 and Supporting Headline */}
              <div className="space-y-2 sm:space-y-3">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
                  Mobile App Development Company in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 drop-shadow-[0_0_25px_rgba(255,60,0,0.35)]">
                    Gaya, Bihar
                  </span>
                </h1>
                <p className="text-sm sm:text-base lg:text-lg font-medium text-orange-300/90 font-mono tracking-tight">
                  Custom Android, iOS & Cross-Platform Mobile Applications Built for Real Business Workflows
                </p>
              </div>

              {/* Hero description */}
              <p className="text-gray-300 text-xs sm:text-base lg:text-lg font-light leading-relaxed max-w-xl">
                Looking for a mobile app development company in Gaya, Bihar? Webflora Technologies helps businesses, institutions, and startups plan, design, and engineer custom mobile applications tailored to their customer touchpoints, internal operations, and growth goals.
              </p>

              {/* 4 Supporting points */}
              <div className="grid grid-cols-2 gap-2 max-w-xl pt-1">
                {[
                  { text: "Android & iOS Applications", hint: "Play Store & App Store" },
                  { text: "Cross-Platform Frameworks", hint: "React Native & Flutter" },
                  { text: "Custom Business & Staff Apps", hint: "Workflow Management" },
                  { text: "Secure Backend & Cloud APIs", hint: "Node.js & MongoDB" },
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
                  id="hero-discuss-cta"
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#FF3C00] via-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(255,60,0,0.4)] hover:shadow-[0_0_40px_rgba(255,60,0,0.6)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Discuss Your App Idea</span>
                  <ArrowRight size={14} />
                </a>

                <a
                  id="hero-estimator-cta"
                  href="#estimator"
                  className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-white/5 border border-white/15 hover:border-orange-500/50 hover:bg-orange-500/10 text-white font-semibold text-xs sm:text-sm transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-1.5"
                >
                  <Smartphone size={13} className="text-orange-400" />
                  <span>Get a Project Estimate</span>
                </a>
              </div>

              {/* Direct WhatsApp Consultation */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] sm:text-xs text-gray-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Direct Consultation:
                </span>
                <a
                  href="https://wa.me/918540814729?text=Hello%20Webflora%2C%20I%20am%20looking%20for%20mobile%20app%20development%20in%20Gaya."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white underline decoration-emerald-500/40"
                >
                  +91 85408 14729
                </a>
              </div>
            </div>

            {/* Right Column: Interactive App Hero Widget */}
            <div className="lg:col-span-5 relative pt-4 lg:pt-0">
              <GayaAppHeroWidget />
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
              <Zap size={18} className="text-amber-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-white font-bold block truncate text-[11px] sm:text-xs">60 FPS Native Performance</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 truncate block">Smooth Scrolling & Animations</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-zinc-950/70 border border-white/10 shadow-lg backdrop-blur-md">
              <Lock size={18} className="text-emerald-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-white font-bold block truncate text-[11px] sm:text-xs">100% Source Code Handover</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 truncate block">Git Repository Ownership</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-zinc-950/70 border border-white/10 shadow-lg backdrop-blur-md">
              <Layers size={18} className="text-orange-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-white font-bold block truncate text-[11px] sm:text-xs">Single Codebase Option</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 truncate block">Android & iOS Unified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <ClientMarquee />

      {/* =========================================================================
          SECTION 2: INTRODUCTION TO MOBILE APP DEVELOPMENT
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#080808] border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Smartphone size={12} />
              <span>DIGITAL ACCESSIBILITY & EFFICIENCY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Custom Mobile App Development Services in Gaya
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg font-light leading-relaxed">
              A well-architected mobile application provides businesses in Gaya with a direct, permanent presence on their customers&apos; smartphones. From push notification engagement to offline data caching and automated payment collection, mobile applications streamline service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-[#FF3C00]">
                <Users size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">Direct Customer Engagement</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Mobile applications foster customer loyalty with personalized user profiles, direct messaging, push notification alerts, and quick repeat interactions that browsers cannot match.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                <Workflow size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">Internal Operational Automation</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Empower your local sales representatives, field staff, or delivery drivers with dedicated role-based mobile tools that track daily tasks, upload field reports, and synchronize real-time records.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                <Database size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">Offline Capability & Data Sync</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Engineered with local caching databases (SQLite / WatermelonDB), our mobile apps continue functioning smoothly even during intermittent mobile internet connectivity, syncing once reconnected.
              </p>
            </div>
          </div>

          {/* Explicit Disclosure on Patna HQ & Remote Delivery */}
          <div className="p-4 sm:p-6 rounded-2xl bg-zinc-900/60 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                <Globe2 size={16} />
              </div>
              <div className="text-xs sm:text-sm text-gray-300">
                <span className="font-bold text-white block">Headquartered in Patna, Bihar — Serving Gaya Remotely</span>
                Webflora Technologies operates from Patna, delivering elite cross-platform and native mobile applications remotely to businesses in Gaya, Bodh Gaya, and across India. We do not maintain a physical branch office in Gaya.
              </div>
            </div>
            <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 shrink-0">
              Sprint Demos & Test APKs via Cloud
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: OUR MOBILE APP DEVELOPMENT SERVICES
          ========================================================================= */}
      <section id="services" className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#030303] border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Cpu size={12} />
              <span>SPECIALIZED CAPABILITIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Our Mobile App Development Services in Gaya
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg font-light leading-relaxed">
              We engineer dependable mobile applications built on clean architectural patterns, robust security practices, and responsive interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
            
            {/* 1. Android App Development */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#FF3C00]/40 transition-all duration-300 space-y-3 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-[#FF3C00] group-hover:text-white transition-all">
                <Smartphone size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Android App Development
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Build robust Android applications optimized across diverse screen sizes, chipsets, and operating system versions prevalent in Bihar. Designed for customer services, bookings, education portals, and business operations.
              </p>
            </div>

            {/* 2. iOS App Development */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#FF3C00]/40 transition-all duration-300 space-y-3 group">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-[#FF3C00] group-hover:text-white transition-all">
                <Layers size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                iOS App Development
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Deliver refined iPhone and iPad applications following Apple Human Interface Guidelines. Includes biometric authentication (Face ID/Touch ID), Apple Pay integration where applicable, and App Store submission support.
              </p>
            </div>

            {/* 3. Cross-Platform Development (React Native / Flutter) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#FF3C00]/40 transition-all duration-300 space-y-3 group">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-[#FF3C00] group-hover:text-white transition-all">
                <Cpu size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Cross-Platform App Development
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Harness React Native or Flutter to develop for both Android and iOS from a single, maintainable codebase. Cuts engineering costs in half without sacrificing native UI responsiveness or device performance.
              </p>
            </div>

            {/* 4. Custom Business Applications */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#FF3C00]/40 transition-all duration-300 space-y-3 group">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-[#FF3C00] group-hover:text-white transition-all">
                <Workflow size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Custom Business Applications
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Tailored internal applications for enterprise workflows, employee attendance, field staff coordination, warehouse inventory checks, digital invoicing, and managerial decision dashboards.
              </p>
            </div>

            {/* 5. E-commerce and Shopping Apps */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#FF3C00]/40 transition-all duration-300 space-y-3 group">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:bg-[#FF3C00] group-hover:text-white transition-all">
                <ShoppingBag size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                E-commerce and Shopping Apps
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Feature-rich mobile storefronts equipped with category browsing, instant product search, cart workflows, UPI/Card payment gateway integration, order tracking, and promotional push alerts.
              </p>
            </div>

            {/* 6. Education and Coaching Apps */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#FF3C00]/40 transition-all duration-300 space-y-3 group">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-[#FF3C00] group-hover:text-white transition-all">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Education and Coaching Apps
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Engaging learning apps for competitive coaching institutes and schools. Features student logins, video lectures, online test modules, attendance tracking, and administrative announcement broadcasts.
              </p>
            </div>

            {/* 7. Healthcare and Appointment Apps */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#FF3C00]/40 transition-all duration-300 space-y-3 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-[#FF3C00] group-hover:text-white transition-all">
                <Stethoscope size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Healthcare and Appointment Apps
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Patient-facing appointment scheduling apps for clinics, doctors, and diagnostic labs. Prioritizes patient privacy, doctor schedule management, automated SMS/WhatsApp reminders, and lab report downloads.
              </p>
            </div>

            {/* 8. Booking and On-Demand Service Apps */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#FF3C00]/40 transition-all duration-300 space-y-3 group">
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:bg-[#FF3C00] group-hover:text-white transition-all">
                <Truck size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Booking and On-Demand Service Apps
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Applications for home services, logistics, tour guides, and hotel booking in Bodh Gaya. Includes service discovery, real-time booking status, in-app messaging, and automated billing.
              </p>
            </div>

            {/* 9. API & Backend Integration */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#FF3C00]/40 transition-all duration-300 space-y-3 group">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-[#FF3C00] group-hover:text-white transition-all">
                <Server size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                API and Backend Integration
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Engineering high-throughput Node.js and Express REST APIs, cloud databases (MongoDB / PostgreSQL), payment webhooks (Razorpay / Cashfree), and Firebase Cloud Messaging notification pipelines.
              </p>
            </div>

            {/* 10. App Maintenance and Upgrades */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-[#FF3C00]/40 transition-all duration-300 space-y-3 group lg:col-span-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                    <RefreshCw size={20} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      App Maintenance, OS Compatibility & Upgrades
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                      Ongoing software maintenance ensuring your app stays compatible with new Android and iOS major releases, API policy changes, security patches, and incremental feature improvements.
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/40 text-xs font-mono text-orange-400 shrink-0 self-start sm:self-center"
                >
                  Inquire About Maintenance
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: MOBILE APP SOLUTIONS FOR GAYA BUSINESSES
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#080808] border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Building size={12} />
              <span>REGIONAL USE CASES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Mobile App Solutions for Different Industries in Gaya
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg font-light leading-relaxed">
              Every organization has distinct user journeys and operational requirements. Here are potential application architectures for key regional sectors in Gaya and Bodh Gaya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
            
            {/* Sector 1: Coaching Institutes & Education */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Coaching Institutes & Schools</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Institutes along Gaya&apos;s educational hubs can deploy branded mobile apps featuring student attendance logs, digital assignment submissions, video lectures, online test series with instant answer keys, and automated fee payment alerts.
              </p>
            </div>

            {/* Sector 2: Hospitality & Bodh Gaya Tourism */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400">
                <Hotel size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Hotels & Bodh Gaya Tourism</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Hotels, guest houses, and Buddhist pilgrimage tour operators serving Bodh Gaya can offer multilingual mobile booking apps with visual room galleries, direct UPI/Card reservation, pilgrimage itinerary guides, and instant guest concierge chat.
              </p>
            </div>

            {/* Sector 3: Retailers & Local Commerce */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                <ShoppingBag size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Retailers & Local Businesses</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Textile distributors around Manpur and retailers along GB Road can provide customer-facing catalog ordering apps, live stock status, discount push notifications, and integrated loyalty rewards to drive repeat local purchases.
              </p>
            </div>

            {/* Sector 4: Healthcare & Clinics */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                <Stethoscope size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Clinics & Healthcare Providers</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Specialized practitioners near Medical College Road can implement mobile appointment apps where patients book available consultation slots, view digital prescriptions, receive visit reminders, and access diagnostic test reports securely.
              </p>
            </div>

            {/* Sector 5: Real Estate & Property Developers */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400">
                <Building size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Real Estate & Developers</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Property developers can equip prospective buyers and real estate brokers with interactive project apps showcasing floor plans, construction progress timelines, virtual walkthroughs, and direct site-visit scheduling tools.
              </p>
            </div>

            {/* Sector 6: Logistics & On-Demand Services */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
                <Truck size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Logistics & Service Startups</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                New startups launching courier delivery, local transport, or on-demand repair services can build dual-sided applications connecting customer service requests with live worker dispatch, route maps, and automated billing.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: NATIVE VS CROSS-PLATFORM DEVELOPMENT
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#030303] border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Sliders size={12} />
              <span>TECHNICAL ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Which Mobile App Development Approach Is Right for Your Business?
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg font-light leading-relaxed">
              Choosing between Native Android, Native iOS, and Cross-Platform (React Native / Flutter) depends on your functional scope, audience breakdown, and maintenance budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                Single Ecosystem Focus
              </span>
              <h3 className="text-lg font-bold text-white">Native Android</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Built specifically using Kotlin/Java. Ideal when the app requires extensive Bluetooth hardware integration, complex low-level background services, or operates in environments with strict OS-level performance limits.
              </p>
              <div className="text-[11px] font-mono text-gray-400 pt-2 border-t border-white/5">
                Best for: Android-only internal hardware tools & enterprise scanners.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold block">
                Apple Ecosystem
              </span>
              <h3 className="text-lg font-bold text-white">Native iOS</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Built with Swift and Xcode. Suited for products specifically targeting affluent Apple users, requiring deep integration with Apple Watch, ARKit, Metal graphics rendering, or specialized iPadOS stylus workflows.
              </p>
              <div className="text-[11px] font-mono text-gray-400 pt-2 border-t border-white/5">
                Best for: iOS-first consumer products & specialized iPad tools.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-[#FF3C00]/40 shadow-[0_0_25px_rgba(255,60,0,0.15)] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold block">
                Unified Codebase (Recommended)
              </span>
              <h3 className="text-lg font-bold text-white">Cross-Platform (React Native / Flutter)</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                A single codebase that delivers 95%+ shared code across Android and iOS. Maximizes budget efficiency, delivers native 60fps performance, and enables simultaneous feature deployments to both Google Play and Apple App Store.
              </p>
              <div className="text-[11px] font-mono text-orange-400 pt-2 border-t border-white/5">
                Best for: 90% of business apps, coaching portals & e-commerce.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: OUR MOBILE APP DEVELOPMENT PROCESS
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#080808] border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Clock size={12} />
              <span>PHASED ROADMAP</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Our Mobile Application Development Process
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg font-light leading-relaxed">
              From requirement definition to app store deployment, our 7-stage engineering methodology guarantees transparency, quality, and predictability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
            {[
              {
                step: "01",
                title: "Requirement Analysis",
                desc: "We analyze your business problem, target end-users, core features, database needs, and success criteria to define a clear technical scope.",
              },
              {
                step: "02",
                title: "Planning & Architecture",
                desc: "We select the appropriate platform (React Native / Flutter), design database schemas, map REST APIs, and outline sprint milestones.",
              },
              {
                step: "03",
                title: "UI/UX Interface Design",
                desc: "We build intuitive, thumb-friendly wireframes and visual design screens in Figma, prioritizing smooth navigation and accessibility.",
              },
              {
                step: "04",
                title: "Full-Stack Development",
                desc: "Our engineers build the mobile client application, implement state management, and connect secure Node.js backend APIs.",
              },
              {
                step: "05",
                title: "Testing & Quality Assurance",
                desc: "We test across real Android and iOS devices, verifying functionality, offline behaviors, battery consumption, and security permissions.",
              },
              {
                step: "06",
                title: "Deployment & Publishing",
                desc: "We package production release builds, configure Google Play Console / Apple App Store assets, and support submission approval.",
              },
              {
                step: "07",
                title: "Maintenance & Improvements",
                desc: "We provide post-launch monitoring, crash analytics tracking, bug fixes, and continuous feature upgrade support.",
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
                    Stage {idx + 1}
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
          SECTION 7: WHY CHOOSE WEBFLORA TECHNOLOGIES
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#030303] border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Award size={12} />
              <span>DEFENSIBLE STRENGTHS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Why Consider Webflora Technologies for Mobile App Development?
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg font-light leading-relaxed">
              We engineer dependable mobile software focused on clean architecture, verifiable security, and authentic business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
            {[
              {
                title: "Aligned with Business Goals",
                desc: "We prioritize features that deliver actual business returns rather than adding unnecessary, bloated modules.",
                icon: CheckCircle2,
              },
              {
                title: "100% Code Ownership",
                desc: "You receive full Git repository access with all source code, documentation, and assets upon project completion.",
                icon: Lock,
              },
              {
                title: "User-Centered UI/UX",
                desc: "Interface designs planned for modern smartphone usage with high touch-target ergonomics and responsive typography.",
                icon: Smartphone,
              },
              {
                title: "Pragmatic Tech Selection",
                desc: "We recommend cross-platform React Native or Flutter to optimize development investment without sacrificing performance.",
                icon: Cpu,
              },
              {
                title: "Backend API Synergy",
                desc: "Our web development and cloud backend experience ensures fast, scalable REST APIs and secure database architecture.",
                icon: Server,
              },
              {
                title: "Rigorous Device Testing",
                desc: "Tested on physical Android and iOS devices to verify memory usage, battery efficiency, and offline handling.",
                icon: Zap,
              },
              {
                title: "Remote Delivery from Patna",
                desc: "Structured milestone reviews and staging demo builds delivered smoothly to clients in Gaya and across Bihar.",
                icon: Globe2,
              },
              {
                title: "Registered MSME",
                desc: "Registered MSME enterprise (UDYAM-BR-26-0183379) ensuring professional legal contracts and invoice compliance.",
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
          SECTION 8: TECHNOLOGY STACK
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#080808] border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Code2 size={12} />
              <span>MODERN TOOLKIT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Technologies for Mobile App Development
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg font-light leading-relaxed">
              We select mature, well-supported technologies to ensure long-term maintainability, security, and developer availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3">
              <span className="text-xs font-mono text-orange-400 font-bold uppercase tracking-wider">Mobile Frameworks</span>
              <h3 className="text-base font-bold text-white">React Native & Flutter</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Cross-platform frameworks delivering near-native execution speed across Android and iOS devices from a single codebase.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3">
              <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">Backend & Edge APIs</span>
              <h3 className="text-base font-bold text-white">Node.js & Express</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                High-concurrency RESTful APIs engineered for fast JSON responses, JWT token verification, and webhook handling.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">Databases & Caching</span>
              <h3 className="text-base font-bold text-white">MongoDB & SQLite</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Cloud databases for central data storage combined with local SQLite / WatermelonDB for responsive offline functionality.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3">
              <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">Cloud Integrations</span>
              <h3 className="text-base font-bold text-white">Firebase & Razorpay</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Secure SMS OTP authentication, Firebase Cloud Messaging (FCM) push notifications, and verified UPI/Card payment gateways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: MOBILE APP DEVELOPMENT COST IN GAYA & INTERACTIVE ESTIMATOR
          ========================================================================= */}
      <section id="estimator" className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#030303] border-b border-white/10 relative">
        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Sliders size={12} />
              <span>TRANSPARENT PRICING CRITERIA</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              How Much Does Mobile App Development Cost in Gaya?
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg font-light leading-relaxed">
              Mobile application costs are determined by functional complexity, platform requirements, and third-party integrations rather than arbitrary fixed pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Smartphone size={18} className="text-[#FF3C00]" />
                Primary Cost Drivers
              </h3>
              <ul className="text-xs sm:text-sm text-gray-400 space-y-2 font-light">
                <li>• <strong>Target Platforms:</strong> Single platform (Android only) vs. unified cross-platform (Android + iOS).</li>
                <li>• <strong>User Roles:</strong> Customer-only apps vs. multi-role apps with staff and administrative panels.</li>
                <li>• <strong>Hardware Integrations:</strong> Camera, GPS location tracking, Bluetooth scanners, or biometric sensors.</li>
                <li>• <strong>Payment & SMS Gateways:</strong> Integration complexity for payment webhooks and automated OTP services.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Workflow size={18} className="text-amber-400" />
                Infrastructure & Maintenance
              </h3>
              <ul className="text-xs sm:text-sm text-gray-400 space-y-2 font-light">
                <li>• <strong>Cloud Hosting & Databases:</strong> Monthly cloud server infrastructure and API bandwidth.</li>
                <li>• <strong>Developer Accounts:</strong> Google Play Console ($25 one-time) and Apple Developer Program ($99/year).</li>
                <li>• <strong>OS Updates:</strong> Annual compatibility updates for new major Android and iOS releases.</li>
                <li>• <strong>Security Patches:</strong> Ongoing library maintenance and database backups.</li>
              </ul>
            </div>
          </div>

          {/* Interactive Estimator Component */}
          <GayaAppScopeEstimator />
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
              <span>DIRECT & FACTUAL ANSWERS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Frequently Asked Questions About Mobile App Development in Gaya
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg">
              Find transparent answers to common questions about mobile app frameworks, development timelines, app store publishing, and remote collaboration.
            </p>
          </div>

          <GayaAppFAQAccordion faqs={appFaqsData} />
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
              Related Web, Software & Location Services
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
            {[
              {
                title: "Website Development in Gaya",
                href: "/locations/website-development-company-in-gaya",
                desc: "High-speed custom websites in Gaya",
              },
              {
                title: "Software Company in Gaya",
                href: "/locations/software-company-in-gaya",
                desc: "Custom CRM, ERP & business portals",
              },
              {
                title: "Digital Marketing in Gaya",
                href: "/locations/digital-marketing-company-in-gaya",
                desc: "SEO, Google Ads & lead generation",
              },
              {
                title: "Mobile App Development (Patna HQ)",
                href: "/it-company-in-patna/mobile-app-development-company-in-patna",
                desc: "Enterprise mobile engineering hub",
              },
              {
                title: "Software Development in Patna",
                href: "/it-company-in-patna/software-development-company-in-patna",
                desc: "Custom software & ERP systems",
              },
              {
                title: "SEO Services in Patna",
                href: "/seo-services-in-patna",
                desc: "Technical search optimization",
              },
              {
                title: "Verified Case Studies",
                href: "/case-studies",
                desc: "Client projects and software builds",
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
      <GayaServicesNav activeId="mobile" />

      {/* =========================================================================
          SECTION 12: FINAL CONVERSION CTA BANNER
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#080808] via-zinc-950 to-black border-b border-white/10 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,60,0,0.18),transparent_65%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-[11px] sm:text-xs font-mono text-orange-400">
            <Sparkles size={12} />
            <span>LET&apos;S BUILD YOUR MOBILE APPLICATION</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Have a Mobile App Idea? Let&apos;s Plan Your Project.
          </h2>

          <p className="text-gray-300 text-xs sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Whether you are planning a coaching institute app, an e-commerce platform, an on-demand service app, or an internal enterprise utility, Webflora Technologies can help you evaluate requirements and engineer a high-performance solution.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <a
              id="final-discuss-btn"
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-9 sm:py-4 rounded-full bg-gradient-to-r from-[#FF3C00] via-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xs sm:text-base transition-all duration-300 shadow-[0_0_35px_rgba(255,60,0,0.4)] hover:shadow-[0_0_50px_rgba(255,60,0,0.6)] cursor-pointer"
            >
              <span>Discuss Your App Idea</span>
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
