import React from "react";
import Link from "next/link";
import {
  Globe,
  Layout,
  ShoppingCart,
  Code2,
  GraduationCap,
  Hotel,
  Stethoscope,
  Sparkles,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Smartphone,
  Search,
  Users,
  Compass,
  FileCheck,
  Layers,
  Building2,
  Clock,
  PhoneCall,
  ChevronRight,
  Laptop,
  Check,
  Lock,
  MessageSquare,
  Star,
  Award,
  Sliders,
  TrendingUp,
  MapPin
} from "lucide-react";
import ContactSection from "../../Components/ContactSection";
import ClientMarquee from "../../Components/ClientMarquee";
import GayaFAQAccordion from "./GayaFAQAccordion";
import GayaHeroShowcase from "./GayaHeroShowcase";
import GayaCostEstimator from "./GayaCostEstimator";
import GayaComparisonTable from "./GayaComparisonTable";
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
  title: "Website Development Company in Gaya, Bihar | Webflora Technologies",
  description:
    "Looking for a website development company in Gaya, Bihar? Webflora Technologies builds responsive business websites, e-commerce stores and custom web applications.",
  keywords:
    "website development company in gaya, website development company in gaya bihar, website designing company in gaya, web design company in gaya, website developers in gaya, business website development gaya, ecommerce website development gaya, custom website development gaya, responsive web design gaya, web development services in gaya, website development agency in gaya, Webflora Technologies",
  alternates: {
    canonical: "https://webfloratechnologies.com/locations/website-development-company-in-gaya",
  },
  openGraph: {
    title: "Website Development Company in Gaya, Bihar | Webflora Technologies",
    description:
      "Looking for a website development company in Gaya, Bihar? Webflora Technologies builds responsive business websites, e-commerce stores and custom web applications.",
    url: "https://webfloratechnologies.com/locations/website-development-company-in-gaya",
    siteName: "Webflora Technologies",
    images: [
      {
        url: "https://webfloratechnologies.com/title-logo.png",
        width: 512,
        height: 512,
        alt: "Webflora Technologies - Website Development Company in Gaya, Bihar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Gaya, Bihar | Webflora Technologies",
    description:
      "Looking for a website development company in Gaya, Bihar? Webflora Technologies builds responsive business websites, e-commerce stores and custom web applications.",
    images: ["https://webfloratechnologies.com/title-logo.png"],
  },
};

const faqsData = [
  {
    question: "Which is a website development company in Gaya, Bihar?",
    answer:
      "Webflora Technologies is a premier website development company serving businesses in Gaya, Bihar. Headquartered in Patna, Bihar (registered MSME: UDYAM-BR-26-0183379), Webflora Technologies builds responsive corporate websites, e-commerce platforms, and custom web applications remotely for clients in Gaya, Bodh Gaya, and across India.",
  },
  {
    question: "How much does website development cost in Gaya?",
    answer:
      "Website development cost in Gaya depends on multiple factors including the number of pages, custom UI/UX design scope, technical functionality, e-commerce requirements, third-party API integrations, content preparation, and ongoing maintenance. Simple business showcase websites require fewer development hours than complex database-driven portals. Webflora Technologies provides transparent, requirement-specific quotations without hidden charges.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "A standard professional business website typically takes 1 to 3 weeks from discovery to final deployment. More intricate projects such as multi-category e-commerce platforms, educational institute portals, or custom web applications with complex workflows usually take 3 to 6 weeks depending on feature complexity and feedback iterations.",
  },
  {
    question: "Do you develop mobile-friendly websites?",
    answer:
      "Yes. Every website built by Webflora Technologies is developed with a mobile-first philosophy. We ensure 100% fluid responsiveness across smartphones, tablets, laptops, and large desktop screens, delivering fast touch interactions and flawless typography on all devices.",
  },
  {
    question: "Can you build an SEO-friendly website for my business?",
    answer:
      "Yes. Technical SEO is integrated directly into our development lifecycle. We build with clean semantic HTML5 markup, optimal page load speeds, responsive layouts, structured JSON-LD schema data, logical heading hierarchies (H1, H2, H3), meta tags, open graph tags, and search engine-friendly URL structures.",
  },
  {
    question: "Do you develop e-commerce websites in Gaya?",
    answer:
      "Yes. We develop scalable e-commerce websites for retailers, manufacturers, and merchants in Gaya. Our online store solutions include secure payment gateway integration (UPI, cards, net banking), product catalog management, shopping carts, order tracking, and mobile-optimized checkout flows.",
  },
  {
    question: "Can you build a website for a hotel in Bodh Gaya?",
    answer:
      "Yes. We design and develop dedicated hospitality websites for hotels, guest houses, meditation retreats, and resorts in Gaya and Bodh Gaya. Key features include direct room reservation inquiries, photo galleries, accommodation showcases, nearby pilgrimage tour details, multi-language support, and WhatsApp booking buttons.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. If your current website is outdated, slow, non-responsive, or not producing business inquiries, Webflora Technologies can perform a complete redesign. We modernize your user experience, migrate existing content, enhance page speed, update security protocols, and protect existing search authority through proper 301 URL redirects.",
  },
  {
    question: "Will my website rank on Google after development?",
    answer:
      "We implement all the technical SEO best practices, structured schemas, fast load times, and crawlable architectures required for Google to index your website efficiently. However, ranking on competitive search keywords depends on ongoing domain authority, local competition, content marketing, backlinks, and search engine algorithms. We do not make misleading guarantees of overnight #1 rankings.",
  },
  {
    question: "How do I choose the right website development company in Gaya?",
    answer:
      "When choosing a web development partner, assess their technical stack (such as modern React or Next.js architectures), portfolio quality, mobile responsiveness standards, technical SEO capabilities, transparent milestone communication, and post-launch maintenance support.",
  },
  {
    question: "Can I generate business enquiries through my website?",
    answer:
      "Yes. A well-engineered business website acts as an active digital inquiry engine. By combining fast loading speeds, clear value propositions, trust indicators, local SEO targeting, and prominent calls to action (such as WhatsApp integration, quote request forms, and click-to-call buttons), your website helps turn visitors into qualified leads.",
  },
  {
    question: "How can I contact Webflora Technologies?",
    answer:
      "You can contact Webflora Technologies directly by calling or messaging +91 85408 14729 or +91 88630 81255, sending an email to hello@webfloratechnologies.com, or submitting a project inquiry through the contact form on our website. Our technical team responds within 24 hours.",
  },
];

const serviceCards = [
  {
    icon: Building2,
    badge: "Corporate",
    title: "Business Website Development",
    desc: "Custom-crafted corporate websites designed to establish authority, present business capabilities, and capture high-intent inquiries.",
    features: ["Bespoke Brand UI/UX", "Direct Lead Engine", "Executive Credibility"],
    useCase: "Ideal for Gaya manufacturing firms, trading companies, legal advisors, and local corporate businesses.",
  },
  {
    icon: Layout,
    badge: "UI/UX & Code",
    title: "Website Design and Development",
    desc: "Bespoke UI/UX design paired with clean frontend engineering, ensuring visually captivating layouts and intuitive customer navigation.",
    features: ["Figma Prototyping", "Fluid Responsive Code", "Micro-Interactions"],
    useCase: "Perfect for brands seeking a modern digital presence that sets them apart from template-driven competitors.",
  },
  {
    icon: ShoppingCart,
    badge: "E-Commerce",
    title: "E-commerce Website Development",
    desc: "High-conversion online retail stores featuring secure Indian payment gateways, mobile catalog browsing, and inventory controls.",
    features: ["UPI & Card Gateway", "Cart & Order Tracking", "Inventory Controls"],
    useCase: "Tailored for Gaya retail merchants, traditional textile sellers, handicraft producers, and FMCG businesses.",
  },
  {
    icon: Code2,
    badge: "Full-Stack",
    title: "Custom Website Development",
    desc: "Purpose-built web applications and dynamic business portals engineered with React and Next.js to automate operational workflows.",
    features: ["Next.js 15 App Router", "Serverless Edge APIs", "Custom Data Workflows"],
    useCase: "Suited for organizations needing client portals, custom booking engines, or specialized database workflows.",
  },
  {
    icon: GraduationCap,
    badge: "Education",
    title: "Educational Website Development",
    desc: "Structured educational portals featuring course catalogs, student notice boards, online admission inquiry forms, and faculty sections.",
    features: ["Batch Schedules", "Online Admissions", "Student Notice Wall"],
    useCase: "Designed for coaching institutes, competitive exam academies, colleges, and private schools across Gaya.",
  },
  {
    icon: Hotel,
    badge: "Hospitality",
    title: "Hotel and Tourism Website Development",
    desc: "High-performance hospitality platforms with direct room inquiry systems, photo galleries, pilgrim guides, and multi-language support.",
    features: ["Direct Room Inquiries", "Zero Aggregator Fees", "Multilingual Support"],
    useCase: "Engineered specifically for hotels, guest houses, and Buddhist pilgrimage tour operators in Gaya and Bodh Gaya.",
  },
  {
    icon: Stethoscope,
    badge: "Healthcare",
    title: "Hospital and Clinic Website Development",
    desc: "Patient-friendly healthcare websites featuring doctor profiles, department specialties, OPD scheduling details, and emergency contacts.",
    features: ["OPD Consultation Hours", "Emergency Call Link", "Doctor Profiles"],
    useCase: "Built for multi-specialty hospitals, private medical clinics, diagnostic labs, and healthcare centers in Gaya.",
  },
  {
    icon: Sparkles,
    badge: "Performance",
    title: "Landing Page Development",
    desc: "Conversion-optimized, lightning-fast single-page websites crafted specifically for Google Ads campaigns, seasonal offers, and lead generation.",
    features: ["Sub-Second TTFB", "High Conversion CTA", "A/B Testing Ready"],
    useCase: "Optimal for real estate project launches, local event promotions, and targeted promotional campaigns.",
  },
  {
    icon: RefreshCw,
    badge: "Maintenance",
    title: "Website Redesign and Maintenance",
    desc: "Performance audits, contemporary visual revamps, security patches, speed optimizations, and ongoing support for existing websites.",
    features: ["SEO Equity Protection", "Speed Optimization", "Cloud Security Patches"],
    useCase: "For businesses with outdated, slow, or non-responsive websites seeking an upgrade without losing SEO equity.",
  },
];

const whyChoosePoints = [
  {
    icon: Compass,
    title: "Business-Focused Planning",
    desc: "We begin every project by analyzing your specific business objectives, target audience, and local competitive landscape in Gaya.",
    highlight: "Custom Roadmap",
  },
  {
    icon: Smartphone,
    title: "Responsive Website Development",
    desc: "Flawless rendering and smooth touch navigation across all screen dimensions, from smartphones to widescreen desktop displays.",
    highlight: "100% Fluid Mobile",
  },
  {
    icon: Search,
    title: "SEO-Friendly Website Structure",
    desc: "Clean semantic markup, metadata tags, open graph attributes, and JSON-LD schema integration to facilitate search engine indexing.",
    highlight: "Schema.org Native",
  },
  {
    icon: Layout,
    title: "User-Friendly Navigation",
    desc: "Logical page hierarchies, clear call-to-action touchpoints, and intuitive menu flows that guide visitors toward taking action.",
    highlight: "Intuitive Flow",
  },
  {
    icon: Zap,
    title: "Conversion-Focused Functionality",
    desc: "Strategically placed inquiry forms, click-to-call links, and WhatsApp integration designed to convert visitors into genuine business leads.",
    highlight: "Lead Conversion",
  },
  {
    icon: Layers,
    title: "Scalable Technical Solutions",
    desc: "Engineered on modern component-driven architectures like React and Next.js, allowing your website to easily expand as your business grows.",
    highlight: "Zero Lock-in",
  },
  {
    icon: FileCheck,
    title: "Transparent Project Communication",
    desc: "Direct communication with engineering leads, regular staging milestones, and clear delivery timelines without ambiguity.",
    highlight: "Direct Engineering Access",
  },
];

const processSteps = [
  {
    number: "01",
    phase: "Discovery",
    title: "Requirement Analysis",
    desc: "We discover your business model, customer demographics, competitor benchmarks, and core website objectives.",
    deliverable: "Project Scope Document",
    duration: "Day 1 - 2",
  },
  {
    number: "02",
    phase: "Architecture",
    title: "Website Planning",
    desc: "We outline the information architecture, sitemap hierarchy, page flow, and conversion pathways.",
    deliverable: "Wireframes & Sitemap",
    duration: "Day 3 - 4",
  },
  {
    number: "03",
    phase: "Creative",
    title: "UI/UX Design",
    desc: "We craft modern, user-centric wireframes and interactive visual mockups aligned with your brand aesthetic.",
    deliverable: "Figma High-Fidelity UI",
    duration: "Day 5 - 7",
  },
  {
    number: "04",
    phase: "Engineering",
    title: "Website Development",
    desc: "We write clean, modular, and performant code using industry-standard modern frontend and backend technologies.",
    deliverable: "Clean Component Codebase",
    duration: "Day 8 - 14",
  },
  {
    number: "05",
    phase: "Optimization",
    title: "Content and SEO Setup",
    desc: "We structure your content, optimize heading tags, configure meta descriptions, and embed schema markup.",
    deliverable: "On-Page SEO & Schema",
    duration: "Day 15 - 16",
  },
  {
    number: "06",
    phase: "Validation",
    title: "Testing and Quality Assurance",
    desc: "Rigorous cross-browser, mobile responsiveness, page speed, security, and broken-link testing prior to deployment.",
    deliverable: "Core Web Vitals 95+ Audit",
    duration: "Day 17 - 18",
  },
  {
    number: "07",
    phase: "Go Live",
    title: "Website Launch and Handover",
    desc: "Seamless domain configuration, live deployment, search console submission, and admin orientation.",
    deliverable: "100% Code & Asset Handover",
    duration: "Day 19 - 21",
  },
];

const industries = [
  {
    icon: Building2,
    title: "Local Businesses and Retailers",
    desc: "Retail stores and local traders across Gaya can showcase their product ranges, advertise local promotions, and generate footfall and direct call inquiries with a clean digital storefront.",
    tag: "Retail & MSME",
    stat: "High Local Call-Through",
  },
  {
    icon: GraduationCap,
    title: "Coaching Institutes and Educational Organizations",
    desc: "With Gaya being a prominent educational center in Bihar, institutes can publish batch schedules, student notices, faculty profiles, and online admission enquiry forms to capture student registrations.",
    tag: "EdTech & Coaching",
    stat: "Automated Admissions",
  },
  {
    icon: Hotel,
    title: "Hotels and Guest Houses in Gaya and Bodh Gaya",
    desc: "Hospitality providers in Gaya and Bodh Gaya can present room inventories, seasonal tariff details, photo galleries, and direct booking inquiry channels to both domestic and international travelers.",
    tag: "Hospitality & Pilgrimage",
    stat: "Zero Aggregator Cuts",
  },
  {
    icon: Globe,
    title: "Travel Agencies and Tourism Businesses",
    desc: "Tour operators can display spiritual tour itineraries, Bodh Gaya excursion packages, vehicle rental details, and multilingual inquiry buttons to assist pilgrims and tourists.",
    tag: "Tours & Excursions",
    stat: "Multi-Language Leads",
  },
  {
    icon: Stethoscope,
    title: "Hospitals and Clinics",
    desc: "Healthcare centers, nursing homes, and diagnostic facilities can provide doctor availability, department details, test booking inquiries, and emergency helpline numbers for patients.",
    tag: "Healthcare & OPD",
    stat: "Emergency Touchpoints",
  },
  {
    icon: Layers,
    title: "Real Estate Businesses",
    desc: "Property developers, commercial complexes, and real estate consultants can present property listings, floor plans, location highlights, and lead-capture forms for prospective buyers.",
    tag: "Commercial & Plots",
    stat: "High-Intent Enquiries",
  },
  {
    icon: Sparkles,
    title: "Startups and Growing Companies",
    desc: "New ventures can establish early credibility, showcase technological capabilities, build trust with investors, and attract clients with an authoritative modern web platform.",
    tag: "Venture & Tech",
    stat: "Enterprise Polish",
  },
];

const pricingFactors = [
  {
    title: "Number of Pages",
    desc: "A compact 5-page brochure site requires less engineering time than a comprehensive 30-page corporate or educational portal.",
    metric: "Scale Indicator",
  },
  {
    title: "Design Complexity",
    desc: "Custom bespoke UI/UX designs with unique branding elements require dedicated design iterations compared to standard layouts.",
    metric: "UI/UX Scope",
  },
  {
    title: "Website Functionality",
    desc: "Dynamic features such as interactive calculators, filterable directories, and user authentication require deeper backend development.",
    metric: "Logic & Database",
  },
  {
    title: "E-commerce Requirements",
    desc: "Online stores require product database configuration, shopping cart logic, payment gateway verification, and order processing setups.",
    metric: "Payment & Catalog",
  },
  {
    title: "Third-Party Integrations",
    desc: "Connecting external CRMs, SMS gateways, ERP tools, or automated booking systems influences the overall development scope.",
    metric: "API Connections",
  },
  {
    title: "Content and SEO Scope",
    desc: "Comprehensive copywriting, technical search engine optimization, and detailed structured data setups influence project investment.",
    metric: "Copy & Meta Graph",
  },
  {
    title: "Maintenance Requirements",
    desc: "Ongoing security updates, cloud backups, domain management, and content updates are factored into long-term support plans.",
    metric: "SLA & Cloud",
  },
];

export default function GayaLandingPage() {
  const canonicalUrl = "https://webfloratechnologies.com/locations/website-development-company-in-gaya";

  const pageSchemas = [
    buildOrganizationSchema(),
    buildProfessionalServiceSchema({
      name: "Webflora Technologies - Website Development Company in Gaya",
      url: canonicalUrl,
      description: "Premier website design, corporate web development, and e-commerce portal engineering in Gaya and Bodh Gaya, Bihar.",
      areaServed: {
        "@type": "AdministrativeArea",
        "name": "Gaya, Bihar, India"
      }
    }),
    buildProductSchema({
      name: "Webflora Custom Website Development Package",
      description: "Responsive Next.js corporate website and e-commerce web engineering with custom design, CMS, and full source code handover in Gaya.",
      category: "Website Engineering & Design",
      image: "https://webfloratechnologies.com/title-logo.png",
      url: canonicalUrl,
      offers: {
        price: "25000",
        priceCurrency: "INR",
        url: canonicalUrl
      },
      aggregateRating: {
        ratingValue: 4.9,
        reviewCount: 130
      },
      review: {
        authorName: "Manish Kumar",
        reviewRating: 5,
        reviewBody: "Webflora Technologies built our hotel booking website in Bodh Gaya. Super fast load speed, direct WhatsApp reservations, and seamless mobile design."
      }
    }),
    buildWebPageSchema({
      name: "Website Development Company in Gaya, Bihar | Webflora Technologies",
      description:
        "Looking for a website development company in Gaya, Bihar? Webflora Technologies builds responsive business websites, e-commerce stores and custom web applications.",
      url: canonicalUrl,
    }),
    buildServiceSchema({
      name: "Website Development Services in Gaya",
      serviceType: "Website Development",
      description:
        "Webflora Technologies builds responsive business websites, e-commerce stores, and custom web applications for businesses in Gaya and Bodh Gaya, Bihar.",
      areaServed: "Gaya, Bihar, India",
    }),
    buildBreadcrumbListSchema([
      { name: "Home", url: "/" },
      { name: "Locations", url: "/locations" },
      {
        name: "Website Development Company in Gaya",
        url: canonicalUrl,
      },
    ]),
    buildHowToSchema({
      name: "Our Website Development Process in Gaya",
      description: "Our structured 7-phase web design and software engineering framework delivering production-grade web solutions.",
      steps: [
        { name: "Discovery and Strategic Planning", text: "We analyze your business model, customer demographics, search competition in Gaya, and outline technical specifications." },
        { name: "Information Architecture and Wireframing", text: "We plan clear visual hierarchies, user navigation paths, conversion touchpoints, and functional page layouts." },
        { name: "UI/UX Design and Prototyping", text: "Crafting modern, branded visual design components with responsive layouts optimized across mobile, tablet, and desktop." },
        { name: "Website Development & Coding", text: "Writing clean, modular, and performant code using industry-standard modern frontend and backend technologies." },
        { name: "Content and SEO Setup", text: "Structuring on-page content, heading hierarchy, meta descriptions, semantic tags, and Google schema markup." },
        { name: "Testing and Quality Assurance", text: "Rigorous cross-browser, mobile responsiveness, page speed, security, and Core Web Vitals audits prior to deployment." },
        { name: "Website Launch and Handover", text: "Seamless domain configuration, live cloud deployment, search console indexing, and full source code handover." }
      ]
    }),
    buildItemListSchema([
      { name: "Corporate & Business Website Development", url: `${canonicalUrl}#services` },
      { name: "Bespoke Website UI/UX Design & Development", url: `${canonicalUrl}#services` },
      { name: "E-Commerce Online Stores & Payment Gateways", url: `${canonicalUrl}#services` },
      { name: "Hotels & Bodh Gaya Pilgrimage Booking Portals", url: `${canonicalUrl}#services` },
      { name: "Website Redesign & Speed Optimization", url: `${canonicalUrl}#services` },
      { name: "High-Converting Digital Campaign Landing Pages", url: `${canonicalUrl}#services` },
      { name: "Custom CMS & Dynamic Content Portals", url: `${canonicalUrl}#services` },
      { name: "Website Maintenance & Cloud Security Support", url: `${canonicalUrl}#services` }
    ]),
    buildSiteNavigationElementSchema(),
    buildFAQPageSchema(faqsData),
  ];

  return (
    <div className="bg-[#050505] text-white selection:bg-[#FF3C00] selection:text-white min-h-screen font-sans antialiased overflow-x-hidden">
      {/* Structured Schema Data */}
      <JsonLd data={pageSchemas} />

      {/* =========================================================================
          SECTION 1: HERO SECTION (MODERN LUXURY & INTERACTIVE SHOWCASE)
          ========================================================================= */}
      <section className="relative pt-24 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 overflow-hidden border-b border-white/10">
        {/* Subtle grid pattern & artistic lighting */}
        <div className="creative-grid-bg opacity-25 pointer-events-none" />
        <div className="creative-grid-dots opacity-20 pointer-events-none" />
        
        {/* Ambient atmospheric glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,60,0,0.18),transparent_65%)] blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-24 w-[450px] h-[450px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-7 text-left">
              {/* Luxury eyebrow badge */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-transparent border border-orange-500/30 text-[10px] sm:text-xs font-mono tracking-wider text-orange-400 backdrop-blur-md shadow-[0_0_20px_rgba(255,60,0,0.1)] w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3C00] animate-pulse shrink-0" />
                <span className="font-bold text-white tracking-wider shrink-0">WEBFLORA</span>
                <span className="text-gray-500">|</span>
                <span className="text-orange-300">GAYA & BODH GAYA WEB STUDIO</span>
              </div>

              {/* Refined classic headline */}
              <h1 className="text-[26px] sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
                Website Development <br className="hidden sm:inline" />
                Company in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 drop-shadow-[0_0_25px_rgba(255,60,0,0.35)]">
                  Gaya, Bihar
                </span>
              </h1>

              {/* Exact required introduction preserved */}
              <p className="text-gray-300 text-xs sm:text-base lg:text-lg font-light leading-relaxed max-w-xl">
                Looking for a professional website development company in Gaya? Webflora Technologies helps businesses build responsive business websites, e-commerce stores, and custom web applications designed around their business goals.
              </p>

              {/* 4 Supporting points in compact 2x2 mobile grid */}
              <div className="grid grid-cols-2 gap-2 max-w-xl pt-1">
                {[
                  { text: "Fluid Responsive", hint: "Mobile First" },
                  { text: "SEO & Schema", hint: "Schema.org" },
                  { text: "Custom Web", hint: "Next.js 15" },
                  { text: "Lead-Engine UX", hint: "High Inquiries" },
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
                  id="hero-quote-btn"
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#FF3C00] via-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(255,60,0,0.4)] hover:shadow-[0_0_40px_rgba(255,60,0,0.6)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Get a Website Quote</span>
                  <ArrowRight size={14} />
                </a>

                <a
                  id="hero-services-btn"
                  href="#services"
                  className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-white/5 border border-white/15 hover:border-orange-500/50 hover:bg-orange-500/10 text-white font-semibold text-xs sm:text-sm transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-1.5"
                >
                  <Laptop size={13} className="text-orange-400" />
                  <span>Explore Our Services</span>
                </a>
              </div>

              {/* Instant WhatsApp Quick Touchpoint */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] sm:text-xs text-gray-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  WhatsApp Direct Support:
                </span>
                <a
                  href="https://wa.me/918540814729?text=Hello%20Webflora%2C%20I%20need%20a%20website%20quote%20for%20my%20business%20in%20Gaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white underline decoration-emerald-500/40"
                >
                  +91 85408 14729
                </a>
              </div>
            </div>

            {/* Right Column: High-Fidelity Studio Showcase */}
            <div className="lg:col-span-5 relative pt-4 lg:pt-0">
              <GayaHeroShowcase />
            </div>
          </div>

          {/* Modern Trust & Metric Strip */}
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
                <span className="text-white font-bold block truncate text-[11px] sm:text-xs">Sub-Second Load</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 truncate block">Core Web Vitals 99+</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-zinc-950/70 border border-white/10 shadow-lg backdrop-blur-md">
              <Lock size={18} className="text-emerald-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-white font-bold block truncate text-[11px] sm:text-xs">100% Code Ownership</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 truncate block">Zero Lock-in</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-zinc-950/70 border border-white/10 shadow-lg backdrop-blur-md">
              <Star size={18} className="text-orange-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-white font-bold block truncate text-[11px] sm:text-xs">4.9 / 5 Rating</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 truncate block">120+ Deployments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: STRATEGIC INTRODUCTION & REMOTE DELIVERY TRANSPARENCY
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#080808] border-b border-white/10 relative">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-orange-500/5 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14 relative z-10">
          <div className="space-y-3 sm:space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Sparkles size={12} />
              <span>STRATEGIC DIGITAL EVOLUTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Professional Website Development Services in Gaya
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Context Card */}
            <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-zinc-950/80 border border-white/10 flex flex-col justify-between space-y-6 sm:space-y-8 backdrop-blur-xl relative overflow-hidden">
              <div className="space-y-4 sm:space-y-5 text-gray-300 leading-relaxed text-xs sm:text-base lg:text-lg font-light">
                <p>
                  In today&apos;s digital-first economy, a professional website represents the single most critical asset in validating your company&apos;s credibility. For enterprises in Gaya, Bihar, an authoritative website allows businesses to present their services clearly, verify their credentials, establish prominence on regional search engines, and convert everyday online searches into genuine commercial enquiries.
                </p>
                <p>
                  Whether running a manufacturing unit, a retail outlet in Gaya&apos;s bustling commercial markets, a prominent coaching institute preparing students for national exams, or an accommodation facility in the international tourist belt of Bodh Gaya, operating with an outdated or non-responsive site limits growth. A high-performance website bridges this gap by functioning as a 24/7 lead acquisition portal.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6 border-t border-white/10 text-center">
                <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-zinc-900/50 border border-white/5">
                  <span className="text-lg sm:text-2xl lg:text-3xl font-black text-white block">24/7</span>
                  <span className="text-[9px] sm:text-[11px] font-mono text-gray-400 uppercase tracking-wider">Inquiry Engine</span>
                </div>
                <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-zinc-900/50 border border-white/5">
                  <span className="text-lg sm:text-2xl lg:text-3xl font-black text-[#FF3C00] block">&lt; 0.8s</span>
                  <span className="text-[9px] sm:text-[11px] font-mono text-gray-400 uppercase tracking-wider">Load Time</span>
                </div>
                <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-zinc-900/50 border border-white/5">
                  <span className="text-lg sm:text-2xl lg:text-3xl font-black text-white block">100%</span>
                  <span className="text-[9px] sm:text-[11px] font-mono text-gray-400 uppercase tracking-wider">Mobile Fluid</span>
                </div>
              </div>
            </div>

            {/* Remote Delivery Transparency Card */}
            <div className="lg:col-span-5 p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-zinc-900/80 via-zinc-950 to-black border border-white/10 flex flex-col justify-between space-y-6 sm:space-y-7 relative overflow-hidden backdrop-blur-xl">
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-orange-400">
                  <ShieldCheck size={13} />
                  Honest & Transparent Model
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight">
                  Headquartered in Patna, Serving Gaya Remotely
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Webflora Technologies is an officially registered software company based in <strong className="text-white">Patna, Bihar</strong> (MSME Registration: UDYAM-BR-26-0183379), delivering custom web solutions remotely to businesses across Gaya and throughout India.
                </p>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  We maintain strict corporate integrity: we do not claim to have a physical office or branch address in Gaya. Instead, our remote delivery workflow combines virtual screen-share discovery sessions, daily staging deployment links, and direct technical support to ensure seamless collaboration.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/60 border border-white/10 space-y-2.5 sm:space-y-3">
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-300">
                  <Check size={13} className="text-[#FF3C00] shrink-0" strokeWidth={3} />
                  <span>Daily Staging Links & Git Versioning</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-300">
                  <Check size={13} className="text-[#FF3C00] shrink-0" strokeWidth={3} />
                  <span>Direct WhatsApp & Video Consultation</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-300">
                  <Check size={13} className="text-[#FF3C00] shrink-0" strokeWidth={3} />
                  <span>Direct Engineering Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFIED CLIENT LOGO MARQUEE */}
      <ClientMarquee />

      {/* =========================================================================
          SECTION 3: WEBSITE DEVELOPMENT SERVICES (UPGRADED GLASS CARDS)
          ========================================================================= */}
      <section id="services" className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#050505] border-b border-white/10 relative scroll-mt-20">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/5 blur-[140px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Layers size={12} />
              <span>CORE ENGINEERING CAPABILITIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Our Website Development Services in Gaya
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg">
              Explore our full suite of professional website design and technical web engineering solutions crafted for businesses and institutions in Gaya, Bihar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {serviceCards.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-zinc-950/70 border border-white/10 hover:border-[#FF3C00]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,60,0,0.15)] flex flex-col justify-between overflow-hidden backdrop-blur-xl"
                >
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF3C00] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[#FF3C00] group-hover:bg-[#FF3C00] group-hover:text-white transition-all duration-300 shadow-md">
                        <ServiceIcon size={22} />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Service Feature Highlights */}
                    <div className="space-y-1.5 pt-1">
                      {service.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-center gap-2 text-[11px] sm:text-xs text-gray-300">
                          <Check size={11} className="text-[#FF3C00] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 space-y-1.5">
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
                      Target Use Case
                    </span>
                    <p className="text-[11px] sm:text-xs text-gray-300 leading-normal">
                      {service.useCase}
                    </p>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-[#FF3C00] font-bold group-hover:text-orange-300 pt-1 font-mono"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: ARCHITECTURAL COMPARISON (WHY NEXT.JS VS TRADITIONAL)
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#080808] border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
          <GayaComparisonTable />
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHY CHOOSE WEBFLORA TECHNOLOGIES
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#050505] border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Award size={12} />
              <span>THE WEBFLORA ADVANTAGE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Why Choose Webflora Technologies for Website Development in Gaya?
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg">
              We engineer custom web architectures from scratch without relying on bloated page templates, giving your business an enduring competitive edge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whyChoosePoints.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-zinc-950/70 border border-white/10 hover:border-orange-500/40 transition-all duration-300 space-y-3 sm:space-y-4 relative group backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-[#FF3C00] group-hover:scale-105 transition-transform">
                      <IconComp size={20} />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-orange-400 px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: METHODICAL DEVELOPMENT PROCESS (TIMELINE FLOW)
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#080808] border-b border-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Clock size={12} />
              <span>DISCIPLINED EXECUTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Our Disciplined Website Development Process
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg">
              A disciplined 7-stage software development lifecycle ensuring predictable timelines, impeccable quality control, and zero surprises.
            </p>
          </div>

          <div className="relative space-y-3 sm:space-y-4 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl bg-zinc-950/70 border border-white/10 hover:border-[#FF3C00]/40 transition-all duration-300 gap-4 sm:gap-6 backdrop-blur-xl"
              >
                <div className="flex items-start sm:items-center gap-3.5 sm:gap-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center font-mono font-black text-base sm:text-lg text-[#FF3C00] shrink-0 group-hover:scale-105 group-hover:border-[#FF3C00] transition-all">
                    {step.number}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-orange-400 font-bold">
                        Phase {index + 1}: {step.phase}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-mono text-gray-500">
                        • {step.duration}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xl">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right shrink-0 self-end sm:self-center pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10 w-full sm:w-auto">
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-gray-500 block">Deliverable</span>
                  <span className="text-[11px] sm:text-xs font-bold text-gray-200 font-mono bg-white/5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-white/5 inline-block mt-0.5">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: INDUSTRY-SPECIFIC SOLUTIONS IN GAYA
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#050505] border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Building2 size={12} />
              <span>TARGETED SECTOR EXPERTISE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Website Development for Different Industries in Gaya
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg">
              Every vertical in Gaya requires distinct user journeys. Discover how dedicated web functionality helps distinct business sectors present services and capture qualified leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {industries.map((ind, index) => {
              const IndIcon = ind.icon;
              return (
                <div
                  key={index}
                  className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-zinc-950/70 border border-white/10 hover:border-white/20 transition-all duration-300 space-y-3 sm:space-y-4 flex flex-col justify-between backdrop-blur-xl group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#FF3C00] group-hover:scale-105 transition-transform">
                        <IndIcon size={20} />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-orange-400 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                        {ind.tag}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-gray-500">
                    <span>Impact Metric</span>
                    <span className="text-emerald-400 font-bold">{ind.stat}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: TECHNICAL SEO FOUNDATIONS & SCHEMA MARKS
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#080808] border-b border-white/10 relative">
        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
          <div className="space-y-3 sm:space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Search size={12} />
              <span>SEARCH VISIBILITY FOUNDATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              SEO-Friendly Website Development Company in Gaya
            </h2>
          </div>

          <div className="prose prose-invert max-w-none text-gray-300 space-y-4 sm:space-y-6 leading-relaxed text-xs sm:text-base lg:text-lg font-light">
            <p>
              A visually appealing website delivers little business value if prospective clients cannot locate it on search engines. As a technical <strong>website designing company in Gaya</strong>, Webflora Technologies develops websites that adhere to modern search engine standards, providing a solid foundation for organic visibility.
            </p>
            <p>
              When businesses invest in <strong>website development services in Gaya</strong>, our engineering team ensures that technical SEO is treated as an architectural requirement rather than a cosmetic afterthought. This includes enforcing mobile responsiveness, strict logical heading hierarchies (single descriptive H1 followed by intuitive H2 and H3 elements), semantic HTML5 tags, comprehensive meta descriptions, and clean URL routing.
            </p>
            <p>
              We optimize website crawlability and asset delivery through next-gen image compression, minimal render-blocking JavaScript, and disciplined internal link networks. Furthermore, whether delivering an <strong>e-commerce website development in Gaya</strong> project or configuring <strong>custom website development in Gaya</strong> for a hospitality provider, we implement structured JSON-LD schema data (including WebPage, Service, BreadcrumbList, and FAQPage schemas) to help search engines interpret your commercial entity accurately.
            </p>
            <p>
              As an established <strong>web design company in Gaya, Bihar</strong> partner, we operate with ethical search principles: we avoid keyword stuffing, adhere to core web vitals performance benchmarks, and never make dishonest guarantees of instant ranking positions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 pt-2 sm:pt-4">
            {[
              { label: "Semantic HTML5", desc: "Structured crawlability" },
              { label: "Core Web Vitals", desc: "Sub-second speed" },
              { label: "JSON-LD Schema", desc: "Native Google indexing" },
              { label: "Mobile-First UX", desc: "100% fluid responsive" },
            ].map((seo, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-zinc-950/80 border border-white/10 text-center space-y-1 hover:border-orange-500/40 transition-colors backdrop-blur-xl"
              >
                <span className="text-xs sm:text-sm font-bold text-white block">
                  {seo.label}
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400 font-mono">
                  {seo.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: TRANSPARENT PRICING & INTERACTIVE SCOPE ESTIMATOR
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#050505] border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Sliders size={12} />
              <span>TRANSPARENT INVESTMENT CRITERIA</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Website Development Cost in Gaya, Bihar
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg">
              Website development pricing in Gaya varies based on your precise technical requirements, project scale, and business scope. We do not use arbitrary generic package pricing; instead, cost is shaped by these clear factors:
            </p>
          </div>

          {/* Pricing Factors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
            {pricingFactors.map((factor, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-zinc-950/70 border border-white/10 space-y-2 hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between backdrop-blur-xl"
              >
                <div className="space-y-1.5">
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold block">
                    {factor.metric}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white">{factor.title}</h3>
                  <p className="text-[11px] sm:text-xs lg:text-sm text-gray-400 leading-relaxed">
                    {factor.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Project Cost & Scope Estimator */}
          <GayaCostEstimator />
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: REGIONAL GEO INSIGHTS: GAYA & BODH GAYA DUAL FOCUS
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#080808] border-b border-white/10 relative">
        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
          <div className="space-y-3 sm:space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <MapPin size={12} />
              <span>REGIONAL COMMERCIAL INSIGHTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Website Development Services in Gaya and Bodh Gaya
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed text-xs sm:text-base lg:text-lg font-light">
            <p>
              The Gaya and Bodh Gaya region occupies a distinctive position in Bihar&apos;s economic landscape. While Gaya functions as a historic commercial trading hub, educational cluster, and administrative center, adjacent Bodh Gaya attracts an international influx of Buddhist pilgrims, researchers, and tourists from across Asia and the globe.
            </p>
            <p>
              This regional diversity means businesses require tailored web strategies:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-4 sm:my-6">
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-zinc-950/80 border border-white/10 space-y-3 sm:space-y-4 backdrop-blur-xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-[#FF3C00]">
                  <Hotel size={22} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Hospitality & Tourism in Bodh Gaya
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Hotels, guest houses, meditation centers, and travel agencies serving Bodh Gaya benefit immensely from high-speed websites featuring multi-language guidance, clear photo galleries of amenities, direct inquiry buttons, and room booking integrations that bypass hefty third-party aggregator commissions.
                </p>
              </div>

              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-zinc-950/80 border border-white/10 space-y-3 sm:space-y-4 backdrop-blur-xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-400">
                  <Building2 size={22} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Urban Commerce & Services in Gaya
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Enterprises situated across commercial zones such as GB Road markets, Manpur textile units, Chandauti, and Medical College Road require digital platforms that capture regional search inquiries, verify local business authenticity, and present professional contact details directly on mobile devices.
                </p>
              </div>
            </div>

            <p>
              We serve businesses across Gaya, Bodh Gaya, and surrounding districts remotely from our headquarters in Patna, Bihar. We do not publish fake local addresses or claim branch locations where none exist; instead, we deliver enterprise-standard web engineering backed by direct, honest communication.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#050505] border-b border-white/10 relative">
        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <MessageSquare size={12} />
              <span>CLEAR & FACTUAL ANSWERS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Frequently Asked Questions About Website Development in Gaya
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg">
              Find transparent answers to the most common questions about web development timelines, costs, technologies, and remote collaboration.
            </p>
          </div>

          <GayaFAQAccordion faqs={faqsData} />
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: VERIFIED INTERNAL LINKS
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#080808] border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#FF3C00] font-mono text-xs font-black uppercase tracking-[0.25em] block">
              Verified Solutions
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white">
              Related Web & Technology Services
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                title: "Software Company in Gaya",
                href: "/locations/software-company-in-gaya",
                desc: "Custom CRM, ERP & SaaS portals",
              },
              {
                title: "Digital Marketing in Gaya",
                href: "/locations/digital-marketing-company-in-gaya",
                desc: "SEO, Google Ads & lead generation",
              },
              {
                title: "Mobile App Development in Gaya",
                href: "/locations/mobile-app-development-company-in-gaya",
                desc: "Android, iOS & cross-platform apps",
              },
              {
                title: "Website Development",
                href: "/it-company-in-patna/website-development-company-in-patna",
                desc: "High-speed custom websites",
              },
              {
                title: "Mobile App Development",
                href: "/it-company-in-patna/mobile-app-development-company-in-patna",
                desc: "iOS & Android solutions",
              },
              {
                title: "Software Development",
                href: "/it-company-in-patna/software-development-company-in-patna",
                desc: "Custom enterprise portals",
              },
              {
                title: "Digital Marketing",
                href: "/it-company-in-patna/digital-marketing-agency-in-patna",
                desc: "Lead generation & growth",
              },
              {
                title: "SEO Services",
                href: "/seo-services-in-patna",
                desc: "Technical search optimization",
              },
              {
                title: "Case Studies & Work",
                href: "/case-studies",
                desc: "Verified client projects",
              },
              {
                title: "National Locations",
                href: "/locations",
                desc: "Cities served across India",
              },
              {
                title: "Contact Us",
                href: "/contact",
                desc: "Consult with our tech lead",
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
      <GayaServicesNav activeId="website" />

      {/* =========================================================================
          SECTION 13: FINAL CONVERSION CTA BANNER
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#080808] via-zinc-950 to-black border-b border-white/10 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,60,0,0.18),transparent_65%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-[11px] sm:text-xs font-mono text-orange-400">
            <Sparkles size={12} />
            <span>START YOUR PROJECT TODAY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Ready to Build Your Business Website in Gaya?
          </h2>

          <p className="text-gray-300 text-xs sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Webflora Technologies can help businesses plan business websites, e-commerce stores, educational websites, hospitality websites, landing pages, and custom web applications. Partner with an engineering team that delivers real technical value.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <a
              id="final-quote-btn"
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-9 sm:py-4 rounded-full bg-gradient-to-r from-[#FF3C00] via-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xs sm:text-base transition-all duration-300 shadow-[0_0_35px_rgba(255,60,0,0.4)] hover:shadow-[0_0_50px_rgba(255,60,0,0.6)] cursor-pointer"
            >
              <span>Get a Website Quote</span>
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
