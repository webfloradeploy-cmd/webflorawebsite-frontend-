"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  TrendingUp,
  Globe,
  MapPin,
  CheckCircle2,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Layers,
  Cpu,
  Bot,
  FileText,
  Users,
  Building2,
  PhoneCall,
  Phone,
  ChevronDown,
  ChevronUp,
  Star,
  Compass,
  Check,
  X,
  Share2,
  ExternalLink,
  Target,
  LineChart,
  HelpCircle,
  Clock,
  Eye,
  MousePointerClick,
  Award,
  Send,
  Sliders,
  Database,
  RefreshCw,
  FolderSearch,
  MessageSquare,
  ShieldAlert,
  Code2,
  CheckCircle,
  Wrench,
  FileSearch,
  AlertTriangle,
  Flame,
  ArrowUpRight,
  Laptop,
  ShoppingCart,
  Smartphone,
  Server
} from "lucide-react";
import ClientMarquee from "../Components/ClientMarquee";
import API_BASE_URL from "../config";

export default function SeoServicesPatnaPage() {
  const [activeServiceTab, setActiveServiceTab] = useState("technical");
  const [activeIndustryTab, setActiveIndustryTab] = useState("healthcare");
  const [activeFaq, setActiveFaq] = useState(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    businessType: "Local Business in Patna",
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
          subject: `SEO Audit Request: ${formState.website || formState.name} (${formState.businessType})`
        })
      });
      if (res.ok) {
        setFormSuccess(true);
      } else {
        alert("Submission failed. Please call +91 8540814729 or message us on WhatsApp directly.");
      }
    } catch (err) {
      alert("Network error. Please call +91 8540814729 or connect on WhatsApp.");
    } finally {
      setFormLoading(false);
    }
  };

  // 3. Why SEO Matters
  const whySeoMatters = [
    {
      icon: "solar:magnifer-linear",
      title: "Get Found on Google",
      desc: "Improve your visibility when potential customers search for the specific products and services you offer in Patna and across Bihar."
    },
    {
      icon: "solar:users-group-rounded-linear",
      title: "Reach High-Intent Buyers",
      desc: "Target search keywords based on what commercial buyers are actively typing, connecting you with people ready to make an enquiry."
    },
    {
      icon: "solar:map-point-wave-linear",
      title: "Get More Local Enquiries",
      desc: "For businesses in Patna, local SEO and Google Maps optimization put your phone number, directions, and reviews in front of nearby prospects."
    },
    {
      icon: "solar:chart-2-linear",
      title: "Build Long-Term Traffic",
      desc: "Unlike paid advertising that stops the moment your budget runs out, organic SEO builds compounding search equity that delivers lasting traffic."
    },
    {
      icon: "solar:laptop-minimalistic-linear",
      title: "Improve Website Health",
      desc: "SEO systematically uncovers technical bottlenecks, slow mobile loading times, broken pages, and content gaps to create a superior user experience."
    },
    {
      icon: "solar:phone-calling-rounded-linear",
      title: "Turn Traffic Into Enquiries",
      desc: "We don't look at rankings alone. We focus on search intent, call triggers, WhatsApp clicks, and form submissions to generate real business value."
    }
  ];

  // 4. Why Businesses Choose Webflora
  const whyChooseReasons = [
    {
      icon: "solar:laptop-linear",
      title: "SEO + Website Development Under One Team",
      desc: "SEO often requires direct code modifications, speed optimization, and structural changes. Because Webflora is also a custom web and software engineering company, our developers fix technical issues directly without relying on external third parties.",
      link: "/it-company-in-patna/website-development-company-in-patna",
      linkText: "See Web Development Services"
    },
    {
      icon: "solar:map-point-linear",
      title: "Local Market Understanding",
      desc: "Being based in Patna gives us a practical understanding of the local market, customer behavior, and regional search patterns across Bihar. You can meet our team directly.",
      link: "/locations/patna",
      linkText: "Explore Patna Office Hub"
    },
    {
      icon: "solar:chat-round-line-linear",
      title: "Clear, Transparent Communication",
      desc: "No confusing technical buzzwords or hidden metrics. You will receive transparent monthly reports detailing exactly what was worked on, what improved, and what is planned next.",
      link: "/contact",
      linkText: "Get in Touch With Us"
    },
    {
      icon: "solar:target-linear",
      title: "Business-Focused SEO",
      desc: "We don't focus only on vanity rankings for low-value keywords. We focus on whether SEO is helping your business attract relevant visitors, phone calls, and qualified customer enquiries.",
      link: "/case-studies",
      linkText: "View Client Case Studies"
    },
    {
      icon: "solar:cpu-bolt-linear",
      title: "Modern Search Optimization (AEO & GEO)",
      desc: "Along with traditional Google search fundamentals, we integrate Answer Engine Optimization and structured data to prepare your brand for emerging AI search engines.",
      link: "/it-company-in-patna/ai-automation-company-in-patna",
      linkText: "Explore AI Automation & Agents"
    },
    {
      icon: "solar:shield-check-linear",
      title: "Sustainable, Long-Term Approach",
      desc: "We follow strict Google Search Essentials and white-hat optimization practices, protecting your website from algorithm penalties and building lasting search authority.",
      link: "/why-webflora",
      linkText: "Why Choose Webflora"
    }
  ];

  // 5. SEO Services Overview Pillars
  const servicePillars = {
    technical: {
      tabLabel: "Technical SEO",
      title: "Technical SEO & Speed Architecture",
      icon: "solar:code-file-linear",
      badge: "Crawl & Speed Foundation",
      tagline: "We make sure search engines can properly crawl, understand, and index your website without technical roadblocks.",
      ctaLink: "/it-company-in-patna/website-development-company-in-patna",
      ctaText: "Explore Website Development in Patna",
      items: [
        { name: "Technical SEO audit", desc: "Comprehensive scan of crawl errors, server response times, and indexation issues." },
        { name: "Website structure & silos", desc: "Logical URL hierarchy and internal link flow so search bots understand page relationships." },
        { name: "Crawl and indexing fixes", desc: "Resolving soft 404s, redirect loops, crawl budget wastage, and noindex mistakes." },
        { name: "Sitemap and robots.txt", desc: "Clean XML sitemaps and properly configured robots directives for efficient bot crawling." },
        { name: "Canonical tags & redirects", desc: "Preventing duplicate content penalties with self-referencing canonicals and clean 301 redirects." },
        { name: "Core Web Vitals & speed", desc: "Optimizing LCP, INP, and CLS performance for fast mobile rendering on Indian telecom networks." }
      ]
    },
    onpage: {
      tabLabel: "On-Page SEO",
      title: "On-Page SEO & Content Intent",
      icon: "solar:document-text-linear",
      badge: "Search Intent & Content",
      tagline: "We optimize the pages that your customers actually see to align with search intent and Google ranking signals.",
      ctaLink: "/ecommerce-website-development",
      ctaText: "Explore eCommerce Website Development",
      items: [
        { name: "Keyword research & mapping", desc: "Finding high-intent commercial keywords and assigning each page a distinct focus topic." },
        { name: "Meta titles & descriptions", desc: "Compelling, CTR-optimized meta tags written for humans with accurate keyword inclusion." },
        { name: "Headings & page structure", desc: "Clear H1, H2, H3 semantic hierarchy that makes reading effortless for users and bots." },
        { name: "Page content optimization", desc: "Clear, helpful copy that thoroughly answers visitor questions without keyword stuffing." },
        { name: "Image optimization & alt text", desc: "Compressed WebP images with descriptive alt tags for faster load times and image search visibility." },
        { name: "Schema markup & FAQs", desc: "Structured data (Organization, LocalBusiness, FAQPage, Product) for Google rich results." }
      ]
    },
    local: {
      tabLabel: "Local SEO (Patna)",
      title: "Local SEO Services in Patna",
      icon: "solar:map-point-linear",
      badge: "Google Maps 3-Pack",
      tagline: "If you want customers from Patna and surrounding districts, appearing in local search results makes a big difference.",
      ctaLink: "/locations/patna",
      ctaText: "Explore Patna Tech Office & Hub",
      items: [
        { name: "Google Business Profile optimization", desc: "Complete GBP setup, primary category selection, services list, opening hours, and photos." },
        { name: "Google Maps 3-Pack ranking", desc: "Local ranking signals to help your business appear prominently in local map pack results." },
        { name: "Local keyword research", desc: "Targeting hyper-local search phrases like 'near me', 'in Patna', and specific locality terms." },
        { name: "NAP consistency & citations", desc: "Ensuring exact Name, Address, and Phone Number across all major Indian business directories." },
        { name: "Authentic review strategy", desc: "Ethical workflows to help you consistently gather genuine customer reviews and ratings on Google." },
        { name: "Patna locality pages", desc: "Tailored landing pages addressing key neighborhoods like Boring Road, Kankarbagh, and Bailey Road." }
      ]
    },
    offpage: {
      tabLabel: "Off-Page & Authority",
      title: "Off-Page SEO & Authority Building",
      icon: "solar:link-circle-linear",
      badge: "Trust & Mentions",
      tagline: "We improve your website's domain authority through relevant, genuine online mentions and high-quality backlinks.",
      ctaLink: "/it-company-in-patna/digital-marketing-agency-in-patna",
      ctaText: "Explore Digital Marketing & Ads in Patna",
      items: [
        { name: "Ethical link building", desc: "Manual outreach to industry blogs and regional portals for clean, editorial backlinks." },
        { name: "Local citations & listings", desc: "Verified listings on Google Maps, Justdial, Sulekha, IndiaMART, and local business directories." },
        { name: "Guest posting & articles", desc: "Publishing insightful thought leadership articles on reputable niche publications." },
        { name: "Brand mentions & digital PR", desc: "Earning authentic brand references across news portals, regional press, and community blogs." },
        { name: "Competitor backlink analysis", desc: "Analyzing where your top ranking competitors get their links and bridging the authority gap." },
        { name: "Toxic link audits", desc: "Identifying and disavowing spammy or low-quality links to protect your website's reputation." }
      ]
    },
    content: {
      tabLabel: "SEO Content",
      title: "SEO Content Strategy & Topic Clusters",
      icon: "solar:notes-linear",
      badge: "Helpful Content",
      tagline: "We create practical, well-researched content that answers the real questions your potential clients are asking.",
      ctaLink: "/blog",
      ctaText: "Read Latest Tech & SEO Articles",
      items: [
        { name: "Helpful blog articles", desc: "Informative articles addressing customer pain points, buying guides, and technical explanations." },
        { name: "Service & solution pages", desc: "Clear, conversion-focused landing pages explaining your core service offerings." },
        { name: "Location-specific pages", desc: "Targeted pages highlighting your capabilities in Patna, Gaya, Muzaffarpur, and across Bihar." },
        { name: "Topic clusters & pillar pages", desc: "Comprehensive pillar content linked to supporting subtopics to establish topical authority." },
        { name: "Frequently asked questions (FAQs)", desc: "Direct, scannable answers to common customer objections and technical questions." },
        { name: "Content updates & refreshes", desc: "Auditing existing outdated pages and updating them with fresh data to regain search visibility." }
      ]
    },
    aeo: {
      tabLabel: "AEO & AI Search",
      title: "AEO & Generative Engine Optimization (GEO)",
      icon: "solar:cpu-bolt-linear",
      badge: "Modern Search Preparedness",
      tagline: "Search is changing, and people are increasingly using AI tools like ChatGPT, Google AI Overviews, and Perplexity to find answers.",
      ctaLink: "/it-company-in-patna/ai-automation-company-in-patna",
      ctaText: "Explore AI Automation & Agents",
      items: [
        { name: "Answer Engine Optimization (AEO)", desc: "Formatting content into concise, authoritative answers that AI models easily understand and quote." },
        { name: "Entity & brand grounding", desc: "Structuring business details, founder bios, and expertise signals so AI systems recognize your entity." },
        { name: "Schema & JSON-LD depth", desc: "Comprehensive semantic markup linking your brand to recognized industry categories and services." },
        { name: "Direct conversational Q&A", desc: "Writing conversational Q&A blocks matching how people prompt AI assistants via voice and chat." },
        { name: "Citation-ready data", desc: "Publishing original data, local case studies, and clear service definitions that AI engines cite as sources." },
        { name: "Future-proof SEO strategy", desc: "Combining classic search fundamentals with modern AI search readiness for long-term resilience." }
      ]
    }
  };

  // 6. Local SEO Patna Localities
  const patnaLocalities = [
    { name: "Boring Road", desc: "Coaching institutes, commercial offices, retail outlets, and cafe chains." },
    { name: "Kankarbagh", desc: "Healthcare clinics, multi-speciality diagnostic centres, and residential services." },
    { name: "Bailey Road", desc: "Corporate enterprises, auto showrooms, and large multi-speciality hospitals." },
    { name: "Rajendra Nagar", desc: "Educational centres, coaching hubs, and established local trade distributors." },
    { name: "Patliputra Colony", desc: "IT startups, consulting firms, architecture studios, and corporate offices." },
    { name: "Danapur & Saguna More", desc: "Rapidly expanding residential developments, schools, real estate, and retail." },
    { name: "Fraser Road & Exhibition Road", desc: "Financial institutions, hotels, commercial banks, and legal corporate chambers." },
    { name: "Patna City (Old Patna)", desc: "Traditional wholesalers, FMCG distributors, textiles, and manufacturing units." },
    { name: "Phulwari Sharif & Anisabad", desc: "Emerging logistics corridors, schools, and regional healthcare hubs." }
  ];

  // 8. SEO by Industry
  const industryVerticals = {
    healthcare: {
      title: "Healthcare Clinics, Doctors & Hospitals",
      icon: "solar:medical-kit-linear",
      badge: "Healthcare SEO",
      desc: "For doctors, diagnostic centres, and clinics in Patna, patient trust and local visibility are critical. We optimize medical schemas, local Google Maps 3-Pack, and specialist treatment pages.",
      points: [
        "Doctor profile and speciality treatment schema markup",
        "Google Maps optimization for 'doctor near me' & speciality queries in Patna",
        "NABH-compliant patient content guidelines & appointment booking triggers",
        "Review management & verified patient feedback systems"
      ],
      link: "/electronic-health-records-software",
      linkText: "Explore Healthcare EHR Software"
    },
    education: {
      title: "Coaching Institutes, Schools & Colleges",
      icon: "solar:graduation-cap-linear",
      badge: "Education SEO",
      desc: "Patna is a major educational hub with thousands of students searching for IIT-JEE, NEET, UPSC, and competitive exam coaching in Boring Road and Kankarbagh.",
      points: [
        "Course curriculum, fee structure, and batch schedule landing pages",
        "Hyper-local ranking in Boring Road, Kankarbagh, and Rajendra Nagar",
        "Student enquiry forms, syllabus downloads, and direct WhatsApp lead flows",
        "Seasonal admission surge campaigns and scholarship test page optimization"
      ],
      link: "/it-company-in-patna/website-development-company-in-patna",
      linkText: "Explore Educational Web Portals"
    },
    realestate: {
      title: "Real Estate Developers & Property Agents",
      icon: "solar:buildings-2-linear",
      badge: "Real Estate SEO",
      desc: "Help property buyers in Patna and NRIs discover your residential apartments, commercial plots, and township projects in Bihta, Danapur, and Bailey Road.",
      points: [
        "Project landing pages with RERA compliance schema and floor plans",
        "Targeting commercial queries like 'flats for sale in Danapur Patna'",
        "High-intent brochure download funnels and site visit request triggers",
        "Google Maps pin points for upcoming and ready-to-move projects"
      ],
      link: "/case-studies",
      linkText: "View Property Client Studies"
    },
    ecommerce: {
      title: "E-Commerce Stores & D2C Brands",
      icon: "solar:cart-large-4-linear",
      badge: "E-Commerce SEO",
      desc: "Scale organic sales across India with structured product data, optimized category silos, fast checkout speeds, and transactional buyer keyword targeting.",
      points: [
        "Product, Offer, and AggregateRating schema markup for Google Rich Snippets",
        "Faceted navigation crawl budget control & canonical URL management",
        "Category hierarchy optimization for high-volume commercial shopping queries",
        "Core Web Vitals sub-second page rendering for mobile shoppers"
      ],
      link: "/ecommerce-website-development",
      linkText: "Explore eCommerce Development"
    },
    b2b: {
      title: "B2B Manufacturers & Industrial Suppliers",
      icon: "solar:box-minimalistic-linear",
      badge: "B2B Manufacturing SEO",
      desc: "Expand your dealer, distributor, and wholesale client base across Bihar, Jharkhand, and North India through targeted technical product specifications.",
      points: [
        "Technical specification datasheets and PDF catalog download indexing",
        "Targeting wholesale keywords: 'bulk supplier', 'manufacturer in Bihar'",
        "Distributor application funnels and RFQ (Request for Quote) optimization",
        "Industry trade portal citation building & B2B entity authority"
      ],
      link: "/it-company-in-patna/software-development-company-in-patna",
      linkText: "Explore Custom Software"
    },
    professional: {
      title: "Law Firms, CAs & Corporate Consultants",
      icon: "solar:user-check-linear",
      badge: "Professional Services",
      desc: "Build high-trust authority for legal advocates, chartered accountants, tax consultants, and corporate advisory firms in Fraser Road and Bailey Road.",
      points: [
        "Practice area pages with author E-E-A-T credentials and lawyer profiles",
        "Local citation building across Bar directories and financial associations",
        "Direct consultation scheduling triggers and WhatsApp booking funnels",
        "Informational legal and GST compliance guides for business owners"
      ],
      link: "/why-webflora",
      linkText: "Why Choose Webflora"
    }
  };

  // 9. 7-Step SEO Process
  const seoProcessSteps = [
    {
      step: "01",
      title: "Understand Your Business",
      desc: "We first understand your specific services, target customer segments, commercial margins, regional competitors, and enquiry goals."
    },
    {
      step: "02",
      title: "Comprehensive Website Audit",
      desc: "We perform a thorough audit examining crawl errors, mobile speed, Core Web Vitals, site architecture, and current keyword footprints."
    },
    {
      step: "03",
      title: "Keyword & Search Intent Mapping",
      desc: "We identify commercial and transactional search terms that potential customers in Patna and target regions type when ready to buy."
    },
    {
      step: "04",
      title: "Prioritized Action Plan",
      desc: "We prioritize critical code fixes, on-page content creation, local Google Business Profile signals, and internal linking structure."
    },
    {
      step: "05",
      title: "On-Page & Technical Execution",
      desc: "Our engineering and content team implements technical fixes, meta tags, schema markup, mobile speed tuning, and content updates."
    },
    {
      step: "06",
      title: "Authority & Local Signals",
      desc: "We build verified local citations, manage GBP updates, earn ethical brand mentions, and establish regional topical authority."
    },
    {
      step: "07",
      title: "Transparent Tracking & Refinement",
      desc: "We monitor keyword positions, organic impressions, clicks, phone calls, and form submissions to continually refine our strategy."
    }
  ];

  // 10. SEO Timeline (What to Expect)
  const seoTimelineStages = [
    {
      stage: "Month 1",
      title: "Technical Foundation & Indexation Audit",
      badge: "Foundation Phase",
      items: [
        "Complete technical health audit and crawl error remediation",
        "Google Search Console & GA4 tracking configuration",
        "Google Business Profile (GBP) audit & category correction",
        "Core Web Vitals speed optimization and mobile rendering tuning"
      ]
    },
    {
      stage: "Months 2–3",
      title: "On-Page Silos & Local Maps 3-Pack Growth",
      badge: "Local Visibility",
      items: [
        "Targeted on-page optimization for primary service pages",
        "Local citation building and NAP consistency cleanup across Patna",
        "Schema structured data deployment (LocalBusiness, FAQ, Service)",
        "First wave of low-to-medium competition keyword rank movements"
      ]
    },
    {
      stage: "Months 4–6",
      title: "Topical Authority & Commercial Traffic",
      badge: "Compounding Growth",
      items: [
        "Publishing helpful topic cluster content and service guides",
        "Top-3 Google Maps visibility for core local Patna queries",
        "Steady increase in qualified organic impressions and phone calls",
        "AEO and AI search answer grounding for generative queries"
      ]
    },
    {
      stage: "Months 6+",
      title: "Market Leadership & Sustainable Scaling",
      badge: "Authority & Scaling",
      items: [
        "Consolidation of top rankings for competitive commercial terms",
        "Expansion into surrounding districts (Gaya, Muzaffarpur, Pan-India)",
        "Continuous content updates and competitor backlink gap bridging",
        "Compounding inbound lead generation without paid advertising costs"
      ]
    }
  ];

  // 17. SEO KPIs That Actually Matter
  const seoKpis = [
    {
      icon: "solar:phone-calling-rounded-linear",
      title: "Direct Calls & Inquiries",
      desc: "Tracked phone calls, WhatsApp messages, and website contact form submissions from genuine local buyers."
    },
    {
      icon: "solar:cursor-square-linear",
      title: "High-Intent Organic Clicks",
      desc: "Traffic from commercial and transactional keywords rather than generic, low-converting informational queries."
    },
    {
      icon: "solar:map-point-wave-linear",
      title: "Google Maps 3-Pack Views",
      desc: "Customer actions on your Google Business Profile including direction requests, phone clicks, and website visits."
    },
    {
      icon: "solar:graph-up-linear",
      title: "Search Console Impressions",
      desc: "Continuous expansion of your website's total search footprint across Google Search and Google AI Overviews."
    }
  ];

  // 19. Grounded Case Studies
  const caseStudies = [
    {
      client: "Edugen World School & Academy",
      category: "Education & Coaching",
      location: "Boring Road & Kankarbagh, Patna",
      challenge: "The coaching academy had minimal visibility on Google Maps for competitive searches in Boring Road, and their legacy website was slow on mobile devices.",
      solution: "We re-engineered the website architecture for sub-second mobile loading, created course-specific curriculum pages, and fully optimized their Google Business Profile with structured local schemas.",
      outcome: "Ranked prominently in the Google Maps 3-Pack for primary coaching queries in Patna and generated a steady flow of student admission calls throughout the academic season.",
      link: "/it-company-in-patna/website-development-company-in-patna",
      linkText: "See Web Development Services"
    },
    {
      client: "Care & Health Multi-Speciality Clinic",
      category: "Healthcare & Clinics",
      location: "Bailey Road, Patna",
      challenge: "Speciality doctors in Bailey Road were unable to be found by patients on Google Search, and NAP records were inconsistent across business directories.",
      solution: "Implemented medical schema markup, cleaned up citation consistency across 30+ medical directories, created symptom-to-specialist landing pages, and established a smooth review collection workflow.",
      outcome: "Significantly increased monthly patient enquiries and direct phone calls from Google Maps, establishing strong local trust across Western Patna.",
      link: "/electronic-health-records-software",
      linkText: "Explore Healthcare EHR Systems"
    },
    {
      client: "Regional Agricultural & B2B Manufacturer",
      category: "B2B & Manufacturing",
      location: "Bihar & North India",
      challenge: "The manufacturer produced high-quality agricultural equipment but had near-zero organic search presence outside their offline dealer network.",
      solution: "Developed technical product category pages, implemented product specification schemas, and targeted high-intent commercial B2B keywords across North India.",
      outcome: "Expanded organic search footprint across Bihar, Jharkhand, and UP, resulting in direct wholesale distributor enquiries and catalog downloads.",
      link: "/ecommerce-website-development",
      linkText: "Explore eCommerce Solutions"
    }
  ];

  // 20. Verified Client Testimonials
  const clientReviews = [
    {
      quote: "Webflora helped our coaching institute rank in Google Maps for Boring Road. The best part is their developers fix technical issues directly without passing the buck.",
      author: "Rajiv Ranjan",
      role: "Director, Educational Academy",
      location: "Boring Road, Patna",
      rating: 5
    },
    {
      quote: "We were tired of agencies promising instant #1 rankings. Webflora gave us a realistic roadmap, fixed our mobile website speed, and our clinic patient calls doubled in 4 months.",
      author: "Dr. A. K. Verma",
      role: "Lead Consultant, Specialist Clinic",
      location: "Bailey Road, Patna",
      rating: 5
    },
    {
      quote: "Being a local technology company in Patna made all the difference. We could meet their team in person, review our Search Console reports, and plan our quarterly growth.",
      author: "Sanjay Kumar",
      role: "Founder, B2B Industrial Supply",
      location: "Patna City, Bihar",
      rating: 5
    }
  ];

  // 21. Transparent Pricing Plans
  const pricingPlans = [
    {
      name: "Starter SEO",
      price: "₹14,999",
      period: "/ month",
      desc: "Ideal for local businesses, clinics, and service providers that want to establish strong visibility in Patna.",
      badge: "Local Business",
      popular: false,
      features: [
        "Google Business Profile (GBP) optimization",
        "Google Maps 3-Pack setup & citation updates",
        "Target up to 15 local keywords",
        "Technical website health & mobile speed audit",
        "On-page optimization for up to 5 core pages",
        "Local citation building (Top Indian directories)",
        "Monthly performance & keyword report"
      ],
      cta: "Choose Starter Plan"
    },
    {
      name: "Growth SEO",
      price: "₹24,999",
      period: "/ month",
      desc: "For growing businesses, institutes, and service companies wanting to expand keywords and generate consistent organic enquiries.",
      badge: "Most Popular",
      popular: true,
      features: [
        "Everything in Starter SEO",
        "Target up to 30 commercial & informational keywords",
        "Complete technical SEO & Core Web Vitals optimization",
        "On-page optimization for up to 12 pages",
        "2 SEO blog articles or guides per month",
        "Schema structured data (FAQ, Service, LocalBusiness)",
        "Review management & local citation updates",
        "Monthly strategy call & Search Console reporting"
      ],
      cta: "Choose Growth Plan"
    },
    {
      name: "Professional SEO",
      price: "₹39,999",
      period: "/ month",
      desc: "For competitive sectors, e-commerce stores, healthcare chains, and companies targeting multiple services or locations.",
      badge: "High Competition",
      popular: false,
      features: [
        "Everything in Growth SEO",
        "Target up to 50+ high-intent keywords",
        "Advanced technical SEO & code-level architecture tuning",
        "On-page optimization for up to 25 pages",
        "4 SEO articles & topical cluster content per month",
        "AEO & AI search readiness (Entity & structured data)",
        "Editorial outreach & quality authority backlinks",
        "Bi-weekly ranking updates & dedicated SEO strategist"
      ],
      cta: "Choose Professional Plan"
    },
    {
      name: "Custom SEO",
      price: "Custom",
      period: "Quote",
      desc: "For large enterprise portals, multi-city platforms, e-commerce marketplaces, and custom software systems.",
      badge: "Enterprise Scope",
      popular: false,
      features: [
        "Tailored keyword scope (Pan-India or multi-location)",
        "Full headless / custom framework SEO engineering",
        "Comprehensive content topic clusters & landing page engine",
        "Full Entity & Generative Engine Optimization (GEO)",
        "Digital PR and authority backlink strategy",
        "Multi-location local SEO architecture",
        "Direct developer access & priority support"
      ],
      cta: "Talk to Our Team"
    }
  ];

  // 22. SEO vs Google Ads Comparison Table
  const seoVsAdsData = [
    { factor: "Cost Model", seo: "Fixed monthly investment; organic clicks are free", ads: "Pay-Per-Click (PPC); cost increases as bids rise" },
    { factor: "Longevity", seo: "Compounding equity; continues delivering traffic", ads: "Stops immediately the moment budget is exhausted" },
    { factor: "Time to Results", seo: "3 to 6 months for sustainable organic ranking", ads: "Instant visibility within hours of campaign launch" },
    { factor: "User Trust", seo: "High trust; 70%+ of searchers prefer organic links", ads: "Lower CTR; marked as 'Sponsored' or 'Ad'" },
    { factor: "Targeting", seo: "Broad topical coverage, long-tail and intent terms", ads: "Exact keyword matching and demographic targeting" },
    { factor: "Best Approach", seo: "Long-term organic foundation and brand authority", ads: "Short-term promotions and immediate seasonal surges" }
  ];

  // 23. How to Choose an SEO Company (Buyer Guide)
  const redFlagsVsGreenFlags = [
    {
      red: "Guarantees #1 Google ranking in 7 to 15 days",
      green: "Provides realistic timelines (3–6 months) based on search competition"
    },
    {
      red: "Uses automated spam links and hidden black-hat tricks",
      green: "Strictly follows Google Search Essentials and white-hat guidelines"
    },
    {
      red: "Focuses only on vanity rankings for low-value zero-search keywords",
      green: "Focuses on commercial intent, qualified phone calls, and customer leads"
    },
    {
      red: "No in-house developers; unable to fix website speed or code errors",
      green: "In-house software engineering team capable of direct code-level fixes"
    },
    {
      red: "Vague, confusing reports with no access to Search Console or GA4",
      green: "Complete transparency with direct access to Google Search Console metrics"
    }
  ];

  // 24. Honest & Conversational FAQs with Internal Links
  const conversationalFaqs = [
    {
      q: "What is the best SEO company in Patna?",
      renderA: () => (
        <div className="space-y-2">
          <p>
            The best SEO company depends on your specific business, industry, budget, and goals. A good SEO partner should understand your business model, communicate their strategy in plain language, use sustainable white-hat practices, and measure success through meaningful business metrics (such as customer enquiries, calls, and qualified traffic) rather than vanity keyword rankings alone.
          </p>
          <p className="text-neutral-400 text-xs">
            Learn more about our development and consulting philosophy on our <Link href="/why-webflora" className="text-[#ff3b00] hover:underline font-semibold">Why Choose Webflora</Link> page.
          </p>
        </div>
      )
    },
    {
      q: "How long does SEO take to show results?",
      renderA: () => (
        <p>
          SEO is a progressive, compounding investment. Initial technical fixes, sitemap indexation, and low-competition search terms typically start moving within 4 to 8 weeks. For competitive local business keywords in Patna or national commercial terms, establishing consistent, strong visibility usually takes 3 to 6 months of steady optimization.
        </p>
      )
    },
    {
      q: "Can an SEO company guarantee #1 rankings on Google?",
      renderA: () => (
        <p>
          No ethical SEO company can guarantee a #1 ranking on Google, as search algorithms consider hundreds of dynamic factors including search intent, user location, competition, and regular algorithm updates. What we guarantee is a transparent, rigorous process: adhering strictly to Google&apos;s Search Essentials, fixing technical bottlenecks, creating high-value content, and executing proven local and on-page strategies that give your website the highest chance of ranking prominently.
        </p>
      )
    },
    {
      q: "What is the difference between SEO and Google Ads?",
      renderA: () => (
        <div className="space-y-2">
          <p>
            Google Ads (PPC) provides immediate paid visibility where you pay for every single click; the moment you stop spending, traffic disappears. SEO builds long-term organic equity in your website, providing consistent 24/7 visibility and inbound customer leads over time without paying Google per click.
          </p>
          <p className="text-neutral-400 text-xs">
            Need immediate lead generation alongside long-term SEO? Explore our <Link href="/it-company-in-patna/digital-marketing-agency-in-patna" className="text-[#ff3b00] hover:underline font-semibold">Digital Marketing & PPC Ads Management</Link>.
          </p>
        </div>
      )
    },
    {
      q: "Do you provide local SEO for specific areas in Patna?",
      renderA: () => (
        <div className="space-y-2">
          <p>
            Yes. We specifically optimize for high-demand business localities across Patna including Boring Road, Kankarbagh, Bailey Road, Rajendra Nagar, Patliputra Colony, Danapur, Saguna More, Fraser Road, and Patna City. We manage Google Business Profile optimization, local citations, and geo-targeted landing pages.
          </p>
          <p className="text-neutral-400 text-xs">
            Discover our regional capabilities at the <Link href="/locations/patna" className="text-[#ff3b00] hover:underline font-semibold">Webflora Patna Tech Hub</Link>.
          </p>
        </div>
      )
    },
    {
      q: "What reports will I receive each month?",
      renderA: () => (
        <p>
          Every month, you receive a clear, transparent report summarizing keyword position movements, organic clicks and impressions from Google Search Console, website visitors, top performing pages, and the specific technical and content work completed during that month.
        </p>
      )
    },
    {
      q: "Why is Webflora Technologies different from other SEO agencies?",
      renderA: () => (
        <div className="space-y-2">
          <p>
            Because Webflora is a full-stack technology and web development company, our team includes both SEO specialists and software engineers. If your website has code-level issues, slow loading speeds, or layout problems, our developers fix them directly without delays.
          </p>
          <p className="text-neutral-400 text-xs">
            Looking for a new website built on modern architecture? Check our <Link href="/it-company-in-patna/website-development-company-in-patna" className="text-[#ff3b00] hover:underline font-semibold">Website Development Services in Patna</Link> or review our <Link href="/case-studies" className="text-[#ff3b00] hover:underline font-semibold">Client Case Studies</Link>.
          </p>
        </div>
      )
    }
  ];

  // 26. Related Services Matrix
  const otherDigitalServices = [
    {
      title: "Website Development in Patna",
      desc: "Custom, responsive websites built with modern frameworks, fast load speeds, and clean SEO architecture.",
      href: "/it-company-in-patna/website-development-company-in-patna",
      icon: "solar:laptop-minimalistic-linear",
      badge: "Web Engineering"
    },
    {
      title: "eCommerce Website Development",
      desc: "High-converting online stores, Shopify, WooCommerce, and custom Next.js storefronts with UPI payment gateways.",
      href: "/ecommerce-website-development",
      icon: "solar:cart-large-4-linear",
      badge: "Online Stores"
    },
    {
      title: "Mobile App Development",
      desc: "Cross-platform iOS and Android mobile apps engineered with React Native and Flutter for optimal performance.",
      href: "/it-company-in-patna/mobile-app-development-company-in-patna",
      icon: "solar:smartphone-linear",
      badge: "iOS & Android"
    },
    {
      title: "Custom Software Development",
      desc: "Custom ERP systems, CRM portals, business automation platforms, and scalable cloud databases.",
      href: "/it-company-in-patna/software-development-company-in-patna",
      icon: "solar:code-linear",
      badge: "Enterprise SaaS"
    },
    {
      title: "AI Automation & Workflows",
      desc: "Custom AI agent pipelines, n8n automations, and CRM integrations to eliminate manual business bottlenecks.",
      href: "/it-company-in-patna/ai-automation-company-in-patna",
      icon: "solar:cpu-bolt-linear",
      badge: "AI Solutions"
    },
    {
      title: "Digital Marketing & Ads (PPC)",
      desc: "Performance Google Search ads, Meta ads management, and high-conversion lead generation funnels.",
      href: "/it-company-in-patna/digital-marketing-agency-in-patna",
      icon: "solar:chart-square-linear",
      badge: "Performance Marketing"
    },
    {
      title: "Attendance Management Software",
      desc: "Automated biometric and geo-fenced attendance tracking system with payroll sync for enterprises.",
      href: "/attendance-management-software",
      icon: "solar:user-check-linear",
      badge: "HR Software"
    },
    {
      title: "Electronic Health Records (EHR)",
      desc: "NABH-compliant digital clinical management, OPD billing, prescription modules, and patient records.",
      href: "/electronic-health-records-software",
      icon: "solar:medical-kit-linear",
      badge: "Healthcare SaaS"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#ff3b00] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* ── Background Ambient Glow ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#ff3b00]/10 blur-[160px] rounded-full" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-orange-600/5 blur-[180px] rounded-full" />
      </div>

      {/* ── 1. Hero Section ── */}
      <header className="relative z-10 pt-28 pb-16 md:pt-40 md:pb-28 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="max-w-4xl">
            {/* Breadcrumbs Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-neutral-400">
              <Link href="/" className="hover:text-[#ff3b00] transition">Home</Link>
              <span>/</span>
              <Link href="/it-company-in-patna" className="hover:text-[#ff3b00] transition">IT Company in Patna</Link>
              <span>/</span>
              <span className="text-neutral-200 font-medium">SEO Services in Patna</span>
            </nav>

            {/* Primary Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#ff3b00]/25 bg-[#ff3b00]/10 mb-6 md:mb-8 backdrop-blur-md max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#ff3b00] animate-pulse shrink-0" />
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-[#ff3b00] font-bold">
                Best SEO Company in Patna
              </span>
            </div>

            {/* Main H1 */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] sm:leading-[1.08] mb-6 md:mb-8 font-display">
              Best SEO Company in Patna for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3b00] via-orange-500 to-amber-500">
                Sustainable Online Growth.
              </span>
            </h1>

            {/* Human-First Opening Copy with Contextual Internal Links */}
            <div className="space-y-4 text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed mb-8 md:mb-10 max-w-3xl">
              <p>
                Finding the right SEO company can be difficult when every agency promises instant #1 rankings and unrealistic traffic surges.
              </p>
              <p className="text-neutral-400">
                At <Link href="/why-webflora" className="text-white font-semibold underline decoration-[#ff3b00]/50 hover:decoration-[#ff3b00] transition">Webflora Technologies</Link>, we take a practical, transparent approach to search engine optimization. We help businesses improve their visibility on Google, reach the right customers, and generate genuine customer enquiries through organic search.
              </p>
              <p className="text-neutral-400 text-sm sm:text-base">
                As a dedicated <strong className="text-white font-medium">SEO company in Patna</strong>, we partner with local businesses, coaching institutes, healthcare clinics, <Link href="/ecommerce-website-development" className="text-neutral-200 underline decoration-neutral-600 hover:text-white transition">e-commerce stores</Link>, startups, and companies across Bihar and India. Our work covers <Link href="/it-company-in-patna/website-development-company-in-patna" className="text-neutral-200 underline decoration-neutral-600 hover:text-white transition">technical SEO & web performance</Link>, on-page optimization, local Google Maps visibility, high-quality content, and <Link href="/it-company-in-patna/ai-automation-company-in-patna" className="text-neutral-200 underline decoration-neutral-600 hover:text-white transition">AEO & GEO search strategies</Link>.
              </p>
            </div>

            {/* Trust Signals Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 py-5 md:py-6 my-6 md:my-8 border-y border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff3b00] flex-shrink-0" />
                <span className="text-[11px] sm:text-xs text-neutral-300 font-medium">In-House Developers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff3b00] flex-shrink-0" />
                <span className="text-[11px] sm:text-xs text-neutral-300 font-medium">Clear Monthly Reports</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff3b00] flex-shrink-0" />
                <span className="text-[11px] sm:text-xs text-neutral-300 font-medium">100% White-Hat SEO</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff3b00] flex-shrink-0" />
                <span className="text-[11px] sm:text-xs text-neutral-300 font-medium">Patna Headquarters</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#audit-form"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-[#ff3b00] hover:bg-[#e03400] text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-lg shadow-[#ff3b00]/25 hover:shadow-[#ff3b00]/40 text-center"
              >
                <span>Get a Free SEO Audit</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+918540814729"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 text-center"
              >
                <PhoneCall className="w-4 h-4 text-[#ff3b00]" />
                <span>Call +91 85408 14729</span>
              </a>
            </div>

          </div>

        </div>
      </header>

      {/* ── 2. Trust / Proof (Client Logos Infinite Marquee) ── */}
      <section className="relative z-10 border-b border-white/5">
        <ClientMarquee />
      </section>

      {/* ── 3. Why SEO Matters for Your Business ── */}
      <section className="py-24 relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] mb-3 block">
              Business Impact
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Why SEO Matters for Your Business
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed font-normal">
              When someone needs a service, one of the first things they often do is search online. If your business doesn't appear when potential customers are searching, you may be losing enquiries to competitors who are easier to find.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whySeoMatters.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#ff3b00]/10 border border-[#ff3b00]/20 flex items-center justify-center text-[#ff3b00] mb-6">
                    <Icon icon={item.icon} width={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. Why Businesses Choose Webflora Technologies ── */}
      <section className="py-24 relative z-10 border-b border-white/5 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] mb-3 block">
              Our Value Proposition
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Why Businesses Choose Webflora Technologies
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed font-normal">
              We focus on building long-term partnerships through clear communication, technical competence, and practical search results:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseReasons.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#ff3b00] mb-6">
                    <Icon icon={item.icon} width={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {item.link && (
                  <div className="pt-4 mt-6 border-t border-white/5">
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff3b00] hover:text-white transition"
                    >
                      <span>{item.linkText}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/why-webflora"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition"
            >
              <span>Learn More About Our Engineering Standards & Philosophy</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#ff3b00]" />
            </Link>
          </div>

        </div>
      </section>

      {/* ── 5. SEO Services (Overview Pillars) ── */}
      <section id="services" className="py-24 relative z-10 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] mb-3 block">
              Full-Stack Optimization
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              SEO Services in Patna
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed font-normal">
              Effective SEO requires a balance of clean website code, helpful on-page content, strong local presence, and genuine domain authority. Here is how we help your website rank:
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-white/10">
            {Object.keys(servicePillars).map((key) => {
              const pillar = servicePillars[key];
              const isSelected = activeServiceTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveServiceTab(key)}
                  className={`px-5 py-3 rounded-xl text-xs font-bold tracking-wide uppercase transition-all duration-200 whitespace-nowrap flex items-center gap-2.5 ${
                    isSelected
                      ? "bg-[#ff3b00] text-white shadow-md shadow-[#ff3b00]/20"
                      : "bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.07] border border-white/5"
                  }`}
                >
                  <Icon icon={pillar.icon} width={16} />
                  <span>{pillar.tabLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Active Service Content */}
          <div className="p-8 md:p-12 rounded-3xl bg-neutral-900/50 border border-white/10">
            <div className="max-w-3xl mb-10">
              <span className="px-3 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider text-[#ff3b00] bg-[#ff3b00]/10 border border-[#ff3b00]/20 inline-block mb-4">
                {servicePillars[activeServiceTab].badge}
              </span>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                {servicePillars[activeServiceTab].title}
              </h3>
              <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
                {servicePillars[activeServiceTab].tagline}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicePillars[activeServiceTab].items.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#ff3b00]/10 border border-[#ff3b00]/20 flex items-center justify-center text-[#ff3b00] flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1.5">{item.name}</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contextual Action Link Inside Service Tab */}
            {servicePillars[activeServiceTab].ctaLink && (
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs text-neutral-400">
                  Looking for full-service technology implementation or consulting?
                </p>
                <Link
                  href={servicePillars[activeServiceTab].ctaLink}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff3b00] hover:text-white transition group"
                >
                  <span>{servicePillars[activeServiceTab].ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ── 6. Local SEO in Patna ── */}
      <section className="py-24 relative z-10 border-b border-white/5 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] block">
                Local Search Presence
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Local SEO Services in Patna
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed">
                If your customers are located in Patna, appearing in local search results and the Google Maps 3-Pack can make a huge difference to your monthly enquiry volume.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We help local clinics, coaching institutes, retail outlets, legal firms, and service contractors build a reliable local search presence so that nearby customers can quickly find your phone number, address, and positive reviews.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ff3b00] flex-shrink-0" />
                  <span>Google Business Profile (GBP) setup, verification & weekly updates</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ff3b00] flex-shrink-0" />
                  <span>Accurate Name, Address, and Phone (NAP) citations across business directories</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ff3b00] flex-shrink-0" />
                  <span>Proactive customer review generation strategies and review responses</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ff3b00] flex-shrink-0" />
                  <span>Geo-targeted local business schema markup for Google Maps signals</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href="#audit-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition"
                >
                  <span>Request Local SEO Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/locations/patna"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-xs uppercase tracking-wider transition"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#ff3b00]" />
                  <span>Patna Technology Office</span>
                </Link>
              </div>
            </div>

            {/* Localities Grid Card */}
            <div className="lg:col-span-6 bg-neutral-900/50 border border-white/10 rounded-3xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#ff3b00]" />
                <span>Areas We Cover Across Patna</span>
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                We optimize local search campaigns for businesses operating across key Patna commercial zones:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {patnaLocalities.map((loc, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-black/50 border border-white/5">
                    <div className="font-semibold text-sm text-white mb-0.5">{loc.name}</div>
                    <div className="text-[11px] text-neutral-400 leading-tight">{loc.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 7. Google Business Profile (GBP) Optimization ── */}
      <section className="py-24 relative z-10 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] mb-3 block">
              Google Maps 3-Pack
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Google Business Profile (GBP) Management
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed font-normal">
              For local businesses in Patna, your Google Maps listing is often your primary source of direct phone calls, walk-in directions, and quote requests. We optimize and maintain your profile weekly:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#ff3b00]/10 border border-[#ff3b00]/20 flex items-center justify-center text-[#ff3b00] mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Category & Service Mapping</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Precise primary and secondary category assignments so Google knows exactly which search terms match your business.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#ff3b00]/10 border border-[#ff3b00]/20 flex items-center justify-center text-[#ff3b00] mb-4">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Review Collection System</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Ethical QR codes, WhatsApp review collection triggers, and professional review response templates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#ff3b00]/10 border border-[#ff3b00]/20 flex items-center justify-center text-[#ff3b00] mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Weekly Geo-Tagged Updates</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Publishing regular Google Posts, product highlights, and high-resolution geotagged photos of your Patna office.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#ff3b00]/10 border border-[#ff3b00]/20 flex items-center justify-center text-[#ff3b00] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">NAP Citation Synchronization</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Matching exact Name, Address, and Phone numbers across Justdial, IndiaMART, Sulekha, and Apple Maps.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 8. SEO by Industry ── */}
      <section className="py-24 relative z-10 border-b border-white/5 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] mb-3 block">
              Specialized Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Tailored SEO by Industry
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed font-normal">
              Every sector in Patna has different customer search habits, conversion cycles, and competitive dynamics. We tailor strategies to your field:
            </p>
          </div>

          {/* Industry Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-white/10">
            {Object.keys(industryVerticals).map((key) => {
              const ind = industryVerticals[key];
              const isSelected = activeIndustryTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveIndustryTab(key)}
                  className={`px-5 py-3 rounded-xl text-xs font-bold tracking-wide uppercase transition-all duration-200 whitespace-nowrap flex items-center gap-2.5 ${
                    isSelected
                      ? "bg-[#ff3b00] text-white shadow-md shadow-[#ff3b00]/20"
                      : "bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.07] border border-white/5"
                  }`}
                >
                  <Icon icon={ind.icon} width={16} />
                  <span>{ind.badge}</span>
                </button>
              );
            })}
          </div>

          {/* Active Industry Card */}
          <div className="p-8 md:p-12 rounded-3xl bg-neutral-900/50 border border-white/10">
            <div className="max-w-3xl mb-8">
              <span className="px-3 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider text-[#ff3b00] bg-[#ff3b00]/10 border border-[#ff3b00]/20 inline-block mb-4">
                {industryVerticals[activeIndustryTab].badge}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                {industryVerticals[activeIndustryTab].title}
              </h3>
              <p className="text-base text-neutral-300 leading-relaxed">
                {industryVerticals[activeIndustryTab].desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {industryVerticals[activeIndustryTab].points.map((pt, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#ff3b00] flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-neutral-300 leading-relaxed">{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-neutral-400">
                Need tailored digital systems for this vertical?
              </p>
              <Link
                href={industryVerticals[activeIndustryTab].link}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff3b00] hover:text-white transition group"
              >
                <span>{industryVerticals[activeIndustryTab].linkText}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── 9. Our SEO Process ── */}
      <section className="py-24 relative z-10 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] mb-3 block">
              Step-by-Step Methodology
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Our 7-Step SEO Process
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed font-normal">
              Sustainable SEO is not about tricks or shortcuts. We follow a structured, step-by-step workflow designed to deliver steady, long-term search growth for your business:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoProcessSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black font-mono text-[#ff3b00] mb-4 block">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 10. SEO Timeline (What to Expect) ── */}
      <section className="py-24 relative z-10 border-b border-white/5 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] mb-3 block">
              Realistic Expectations
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              SEO Roadmap & Growth Timeline
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed font-normal">
              SEO is an engineering and compounding process. Here is what happens month-by-month as we work on your website:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoTimelineStages.map((st, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-black font-mono text-[#ff3b00]">{st.stage}</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-white/5 px-2 py-0.5 rounded">
                      {st.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-4">{st.title}</h3>
                  <ul className="space-y-2.5">
                    {st.items.map((it, iIdx) => (
                      <li key={iIdx} className="text-xs text-neutral-400 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#ff3b00] flex-shrink-0 mt-0.5" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 11. Technical SEO (Deep Dive) ── */}
      <section className="py-24 relative z-10 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] block">
                Engineering Core
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Technical SEO & Core Web Vitals
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed">
                If search engine crawlers encounter slow server responses, Javascript hydration errors, or broken redirect chains, even great content won't rank.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Because Webflora is a software development agency, our developers optimize Largest Contentful Paint (LCP &lt; 1.5s), Interaction to Next Paint (INP), Cumulative Layout Shift (CLS), and crawl budget directly in code.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ff3b00] flex-shrink-0" />
                  <span>Sub-second server response & modern SSR / ISR caching architecture</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ff3b00] flex-shrink-0" />
                  <span>Clean XML sitemaps, semantic robots.txt, and canonical URL enforcement</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ff3b00] flex-shrink-0" />
                  <span>Resolution of soft 404s, redirect loops, and crawl budget wastage</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/it-company-in-patna/website-development-company-in-patna"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-xs uppercase tracking-wider transition"
                >
                  <span>Explore Web Development Services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#ff3b00]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-neutral-900/50 border border-white/10 rounded-3xl p-6 md:p-8 space-y-4">
              <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                <h4 className="font-bold text-sm text-white mb-1">LCP (Largest Contentful Paint)</h4>
                <p className="text-xs text-neutral-400">Optimized below 1.5 seconds on 4G/5G mobile devices across India.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                <h4 className="font-bold text-sm text-white mb-1">INP (Interaction to Next Paint)</h4>
                <p className="text-xs text-neutral-400">Eliminating Javascript main-thread blocking for instant tap responsiveness.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                <h4 className="font-bold text-sm text-white mb-1">CLS (Cumulative Layout Shift)</h4>
                <p className="text-xs text-neutral-400">Zero layout shifting through strict dimension reservations and font preloading.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 12. Content SEO (Deep Dive) ── */}
      <section className="py-24 relative z-10 border-b border-white/5 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] mb-3 block">
              Helpful Content Strategy
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Search Intent & Content SEO
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed font-normal">
              Google rewards content that demonstrates genuine first-hand experience (E-E-A-T) and satisfies search intent. We write for humans first:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5">
              <span className="text-xs font-mono uppercase tracking-wider text-[#ff3b00] mb-2 block">Stage 1</span>
              <h3 className="text-xl font-bold text-white mb-3">Informational Content</h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                Educational guides, cost breakdowns, and FAQs that answer top-of-funnel customer research questions.
              </p>
              <Link href="/blog" className="text-xs text-[#ff3b00] hover:underline font-semibold flex items-center gap-1">
                <span>View Knowledge Base</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5">
              <span className="text-xs font-mono uppercase tracking-wider text-[#ff3b00] mb-2 block">Stage 2</span>
              <h3 className="text-xl font-bold text-white mb-3">Commercial Comparison</h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                Service comparisons, framework evaluations, and vendor selection criteria that build buyer trust.
              </p>
              <Link href="/why-webflora" className="text-xs text-[#ff3b00] hover:underline font-semibold flex items-center gap-1">
                <span>Why Webflora Standards</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5">
              <span className="text-xs font-mono uppercase tracking-wider text-[#ff3b00] mb-2 block">Stage 3</span>
              <h3 className="text-xl font-bold text-white mb-3">Transactional Landing Pages</h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                High-converting landing pages targeting buyer search terms with direct call triggers and quotation forms.
              </p>
              <a href="#audit-form" className="text-xs text-[#ff3b00] hover:underline font-semibold flex items-center gap-1">
                <span>Request SEO Proposal</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── 13. Off-Page SEO & Authority ── */}
      <section className="py-24 relative z-10 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] mb-3 block">
              Ethical Trust Building
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Off-Page SEO & Brand Authority
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed font-normal">
              We never buy spam PBN links. We build genuine domain authority through verified business listings, regional digital PR, and editorial mentions:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ff3b00] mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Verified Local Citations</h3>
              <p className="text-xs text-neutral-400">Consistent listings across IndiaMART, Justdial, Sulekha, and TradeIndia.</p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ff3b00] mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Editorial Guest Articles</h3>
              <p className="text-xs text-neutral-400">Thought leadership insights published on reputable technology and business media.</p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ff3b00] mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Competitor Link Gap</h3>
              <p className="text-xs text-neutral-400">Analyzing competitor link sources and bridging the authority deficit ethically.</p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ff3b00] mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Toxic Link Disavowal</h3>
              <p className="text-xs text-neutral-400">Regular audits to identify and remove toxic backlink spam hurting domain trust.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 14. AEO & GEO (AI Search Optimization) ── */}
      <section className="py-24 relative z-10 border-b border-white/5 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] mb-3 block">
              Generative Engine Optimization
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              AEO & Generative Engine Optimization (GEO)
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed font-normal">
              Users increasingly query ChatGPT, Google AI Overviews, and Perplexity for business recommendations. We optimize your website entity to be cited as the authoritative source:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#ff3b00]/10 text-[#ff3b00] flex items-center justify-center mb-6">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">LLM Entity Grounding</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Structuring your business schema and founder credentials so LLMs recognize Webflora as a verified technology entity in Patna.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#ff3b00]/10 text-[#ff3b00] flex items-center justify-center mb-6">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Citation-Ready Data Blocks</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Formatting direct answers, pricing matrices, and technical checklists that AI engines readily extract into generative summaries.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#ff3b00]/10 text-[#ff3b00] flex items-center justify-center mb-6">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Conversational Q&A Format</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Structuring content to match conversational voice prompts and zero-click Position 0 featured snippet algorithms.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 15. E-Commerce SEO ── */}
      <section className="py-24 relative z-10 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] block">
                E-Commerce Scaling
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                E-Commerce SEO That Drives Direct Sales
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed">
                Scaling an online store requires structured product data, crawl budget management across thousands of SKUs, and category silo architectures.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ff3b00] flex-shrink-0" />
                  <span>Product, Offer, InStock, and Review JSON-LD schema markup</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ff3b00] flex-shrink-0" />
                  <span>Faceted navigation crawl budget control & duplicate parameter handling</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ff3b00] flex-shrink-0" />
                  <span>Transactional keyword targeting across Indian retail searchers</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/ecommerce-website-development"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-xs uppercase tracking-wider transition"
                >
                  <span>Explore eCommerce Web Development</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#ff3b00]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 rounded-3xl bg-neutral-900/50 border border-white/10 space-y-4">
              <div className="font-mono text-xs text-[#ff3b00] uppercase tracking-wider">Store Optimization Stack</div>
              <div className="text-2xl font-bold text-white">Custom Next.js, Shopify & WooCommerce</div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We optimize both custom React/Next.js headless storefronts and popular platforms like Shopify and WooCommerce for lightning-fast sub-second mobile checkouts.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 16. Website Migration SEO ── */}
      <section className="py-24 relative z-10 border-b border-white/5 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] mb-3 block">
              Zero Traffic Loss
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Website Redesign & Migration SEO
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed font-normal">
              Redesigning your website or changing domain URLs can destroy search rankings if 301 redirects and canonicals are mishandled. We ensure zero-downtime SEO transitions:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5">
              <div className="font-mono text-base font-bold text-[#ff3b00] mb-2">01</div>
              <h3 className="text-base font-bold text-white mb-2">URL Benchmarking</h3>
              <p className="text-xs text-neutral-400">Crawling and recording all legacy URLs, backlinks, and existing keyword ranks.</p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5">
              <div className="font-mono text-base font-bold text-[#ff3b00] mb-2">02</div>
              <h3 className="text-base font-bold text-white mb-2">1-to-1 301 Redirect Mapping</h3>
              <p className="text-xs text-neutral-400">Ensuring every old page redirects smoothly to its corresponding new URL.</p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5">
              <div className="font-mono text-base font-bold text-[#ff3b00] mb-2">03</div>
              <h3 className="text-base font-bold text-white mb-2">Staging Environment Audit</h3>
              <p className="text-xs text-neutral-400">Testing schemas, canonical tags, and mobile responsive layouts prior to DNS switch.</p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5">
              <div className="font-mono text-base font-bold text-[#ff3b00] mb-2">04</div>
              <h3 className="text-base font-bold text-white mb-2">Post-Launch Index Monitoring</h3>
              <p className="text-xs text-neutral-400">Real-time Search Console monitoring to resolve any 404 errors or crawl anomalies.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 17. SEO KPIs That Matter ── */}
      <section className="py-24 relative z-10 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] mb-3 block">
              Business Value Metrics
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              SEO KPIs That Actually Matter
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed font-normal">
              We don't measure success by vanity rankings for meaningless terms. We track real commercial outcomes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoKpis.map((kpi, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#ff3b00]/10 text-[#ff3b00] flex items-center justify-center mb-4">
                  <Icon icon={kpi.icon} width={20} />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{kpi.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{kpi.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 18. Monthly Reporting & Transparency ── */}
      <section className="py-24 relative z-10 border-b border-white/5 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] block">
                Total Transparency
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Clear Monthly Reporting Deliverables
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed">
                No smoke and mirrors. Every month, you receive a transparent breakdown of what was completed, how search metrics moved, and what is scheduled next.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ff3b00] flex-shrink-0" />
                  <span>Google Search Console clicks, impressions, and average CTR</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ff3b00] flex-shrink-0" />
                  <span>Keyword rank position shifts across target local & commercial terms</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ff3b00] flex-shrink-0" />
                  <span>Detailed developer log of all technical code and content fixes completed</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-neutral-900/50 border border-white/10 rounded-3xl p-8 space-y-4">
              <div className="font-bold text-white text-lg">Direct Search Console Access</div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We configure Google Search Console and GA4 directly under your ownership. You always retain 100% full administrative access and data control.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 19. Grounded Case Studies ── */}
      <section className="py-24 relative z-10 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] mb-3 block">
              Practical Experience
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Our SEO Case Studies
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed font-normal">
              We believe SEO results should be measured with real business outcomes. Here are examples of how we've helped clients in education, healthcare, and commercial sectors resolve technical hurdles and gain search visibility:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-neutral-900/50 border border-white/10 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div>
                    <span className="px-3 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider text-[#ff3b00] bg-[#ff3b00]/10 border border-[#ff3b00]/20 inline-block mb-3">
                      {cs.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {cs.client}
                    </h3>
                    <span className="text-xs text-neutral-400 flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{cs.location}</span>
                    </span>
                  </div>

                  <div className="space-y-4 pt-2 border-t border-white/5 text-sm">
                    <div>
                      <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1">
                        The Challenge:
                      </h4>
                      <p className="text-neutral-400 text-xs leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1">
                        Our Strategy:
                      </h4>
                      <p className="text-neutral-400 text-xs leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                      <h4 className="text-xs font-bold text-[#ff3b00] uppercase tracking-wider mb-1">
                        Business Outcome:
                      </h4>
                      <p className="text-neutral-300 text-xs leading-relaxed font-medium">
                        {cs.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                {cs.link && (
                  <div className="pt-4 mt-6 border-t border-white/5">
                    <Link
                      href={cs.link}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-[#ff3b00] transition"
                    >
                      <span>{cs.linkText}</span>
                      <ArrowRight className="w-3 h-3 text-[#ff3b00]" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-xs uppercase tracking-wider transition"
            >
              <span>Explore All Client Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#ff3b00]" />
            </Link>
          </div>

        </div>
      </section>

      {/* ── 20. Verified Reviews & Testimonials ── */}
      <section className="py-24 relative z-10 border-b border-white/5 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] mb-3 block">
              Verified Feedback
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Client Reviews from Patna Businesses
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed font-normal">
              What local business founders say about partnering with Webflora Technologies:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientReviews.map((rev, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-neutral-900/40 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[#ff3b00] mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <div className="font-bold text-white text-sm">{rev.author}</div>
                  <div className="text-xs text-neutral-400">{rev.role}</div>
                  <div className="text-[11px] text-neutral-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-[#ff3b00]" />
                    <span>{rev.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 21. Pricing Plans ── */}
      <section id="pricing" className="py-24 relative z-10 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] mb-3 block">
              Transparent Investment
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              SEO Plans for Different Business Needs
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed font-normal">
              Whether you are a local clinic in Patna or a growing regional enterprise, we offer straightforward monthly SEO packages tailored to your goals:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`p-7 rounded-3xl flex flex-col justify-between transition-all ${
                  plan.popular
                    ? "bg-neutral-900 border-2 border-[#ff3b00] shadow-xl shadow-[#ff3b00]/10"
                    : "bg-neutral-900/40 border border-white/10"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-neutral-300 bg-white/5 border border-white/10">
                      {plan.badge}
                    </span>
                    {plan.popular && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-[#ff3b00] text-white">
                        Recommended
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-neutral-400 mb-6 leading-relaxed">{plan.desc}</p>

                  <div className="mb-6 pb-6 border-b border-white/10">
                    <span className="text-3xl md:text-4xl font-black text-white font-mono">{plan.price}</span>
                    <span className="text-xs text-neutral-400 font-medium ml-1">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#ff3b00] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#audit-form"
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-center transition block ${
                    plan.popular
                      ? "bg-[#ff3b00] hover:bg-[#e03400] text-white shadow-md shadow-[#ff3b00]/20"
                      : "bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 22. SEO vs Google Ads ── */}
      <section className="py-24 relative z-10 border-b border-white/5 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] mb-3 block">
              Strategic Comparison
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              SEO vs. Google Ads (PPC)
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed font-normal">
              Understanding the difference helps you choose the right acquisition channel for your stage of growth:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse rounded-2xl overflow-hidden bg-neutral-900/40 border border-white/10 text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-4 sm:p-5 font-bold text-white">Comparison Factor</th>
                  <th className="p-4 sm:p-5 font-bold text-[#ff3b00]">Organic SEO (Webflora)</th>
                  <th className="p-4 sm:p-5 font-bold text-neutral-300">Google Ads (PPC)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {seoVsAdsData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02]">
                    <td className="p-4 sm:p-5 font-semibold text-white">{row.factor}</td>
                    <td className="p-4 sm:p-5 text-neutral-300">{row.seo}</td>
                    <td className="p-4 sm:p-5 text-neutral-400">{row.ads}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* ── 23. How to Choose an SEO Company ── */}
      <section className="py-24 relative z-10 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] mb-3 block">
              Buyer's Guide
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              How to Choose an SEO Company in Patna
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed font-normal">
              Protect your business from deceptive guarantees and black-hat penalty risks by watching for these clear signs:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Red Flags */}
            <div className="p-8 rounded-3xl bg-red-950/10 border border-red-500/20 space-y-4">
              <h3 className="text-lg font-bold text-red-400 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                <span>Red Flags to Avoid</span>
              </h3>
              <ul className="space-y-3">
                {redFlagsVsGreenFlags.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>{item.red}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Green Flags */}
            <div className="p-8 rounded-3xl bg-emerald-950/10 border border-emerald-500/20 space-y-4">
              <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Green Flags (What Webflora Follows)</span>
              </h3>
              <ul className="space-y-3">
                {redFlagsVsGreenFlags.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item.green}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ── 24. Frequently Asked Questions (FAQ) ── */}
      <section className="py-24 relative z-10 border-b border-white/5 bg-[#070707]">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] mb-3 block">
              Clear Answers
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed font-normal">
              Have questions about SEO in Patna? Here are straightforward answers to help you make an informed decision:
            </p>
          </div>

          <div className="space-y-4">
            {conversationalFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-neutral-900/40 border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-bold text-base md:text-lg text-white tracking-tight">
                      {faq.q}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 flex-shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-white/5 text-sm md:text-base text-neutral-300 leading-relaxed font-normal">
                          {faq.renderA ? faq.renderA() : faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 25. Free SEO Audit Form ── */}
      <section id="audit-form" className="py-24 relative z-10 border-b border-white/5 bg-[#050505]">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="p-8 md:p-14 rounded-3xl bg-neutral-900 border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff3b00]/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] block">
                  Free Initial Review
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Want to Know Where Your Website Stands?
                </h2>
                <p className="text-neutral-300 text-base leading-relaxed">
                  If you're looking for an SEO company in Patna, start by understanding what is currently holding your website back.
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Our team will evaluate your website structure, existing keyword rankings, speed bottlenecks, and top competitors to provide a clear, actionable summary of areas that deserve attention.
                </p>

                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-neutral-300">
                    <Phone className="w-4 h-4 text-[#ff3b00]" />
                    <span>Direct Call: <a href="tel:+918540814729" className="text-white font-semibold hover:underline">+91 85408 14729</a></span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-300">
                    <MapPin className="w-4 h-4 text-[#ff3b00]" />
                    <span>Office: Patna, Bihar, India</span>
                  </div>
                </div>

                {/* Quick Navigation Footer Links */}
                <div className="pt-4 flex flex-wrap gap-2.5">
                  <Link
                    href="/case-studies"
                    className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] text-neutral-300 hover:text-white transition"
                  >
                    View Client Results
                  </Link>
                  <Link
                    href="/why-webflora"
                    className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] text-neutral-300 hover:text-white transition"
                  >
                    Why Choose Webflora
                  </Link>
                  <Link
                    href="/contact"
                    className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] text-neutral-300 hover:text-white transition"
                  >
                    Contact Team
                  </Link>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-6 bg-black/60 p-6 md:p-8 rounded-2xl border border-white/10">
                {formSuccess ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Audit Request Received</h3>
                    <p className="text-neutral-400 text-xs leading-relaxed">
                      Thank you! Our SEO specialist will analyze your website and reach out to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Anand Prakash"
                        className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ff3b00]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ff3b00]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="name@business.com"
                          className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ff3b00]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Website URL (Optional)
                      </label>
                      <input
                        type="text"
                        value={formState.website}
                        onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                        placeholder="https://yourwebsite.com"
                        className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ff3b00]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Business Type
                      </label>
                      <select
                        value={formState.businessType}
                        onChange={(e) => setFormState({ ...formState, businessType: e.target.value })}
                        className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#ff3b00]"
                      >
                        <option value="Local Business in Patna">Local Business in Patna</option>
                        <option value="Coaching Institute / School">Coaching Institute / School</option>
                        <option value="Healthcare Clinic / Doctor">Healthcare Clinic / Doctor</option>
                        <option value="E-Commerce Store">E-Commerce Store</option>
                        <option value="B2B / Startup / Enterprise">B2B / Startup / Enterprise</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={formLoading}
                      className="w-full py-4 rounded-xl bg-[#ff3b00] hover:bg-[#e03400] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#ff3b00]/25 disabled:opacity-50"
                    >
                      {formLoading ? "Sending Details..." : "Get My Free SEO Audit"}
                    </button>
                    <p className="text-[10px] text-neutral-500 text-center">
                      No spam. We will only review your website and provide practical recommendations.
                    </p>
                  </form>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── 26. Final CTA & Related Services Hub ── */}
      <footer className="py-24 relative z-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff3b00] mb-3 block">
                Full-Service IT Ecosystem
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Explore Our Other Digital Services
              </h2>
              <p className="text-base sm:text-lg text-neutral-400 mt-4 leading-relaxed font-normal">
                Beyond SEO, Webflora Technologies is a premier engineering and technology consulting company headquartered in Patna. We build custom websites, mobile apps, SaaS platforms, and AI automations for businesses across India.
              </p>
            </div>

            <Link
              href="/it-company-in-patna"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff3b00] hover:text-white transition group flex-shrink-0"
            >
              <span>View All IT Company Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 8 Core Services Grid with Deep Internal Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {otherDigitalServices.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="group p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-[#ff3b00]/40 hover:bg-neutral-900/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#ff3b00]/30 group-hover:bg-[#ff3b00]/10 flex items-center justify-center text-[#ff3b00] transition-colors">
                      <Icon icon={service.icon} width={20} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#ff3b00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-white transition-colors">
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#ff3b00] transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          {/* Categorized Internal Linking Architecture Hub */}
          <div className="p-6 md:p-8 rounded-2xl bg-neutral-950/60 border border-white/5 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#ff3b00]" />
              <span>Related Services & Architecture Links in Patna, Bihar</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {/* Column 1: Core Engineering */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#ff3b00] font-semibold mb-2">
                  Core Engineering
                </div>
                <div className="flex flex-col space-y-1.5 text-xs">
                  <Link href="/it-company-in-patna/website-development-company-in-patna" className="text-neutral-300 hover:text-[#ff3b00] transition">
                    Website Development Company in Patna
                  </Link>
                  <Link href="/ecommerce-website-development" className="text-neutral-300 hover:text-[#ff3b00] transition">
                    eCommerce Website Development
                  </Link>
                  <Link href="/it-company-in-patna/mobile-app-development-company-in-patna" className="text-neutral-300 hover:text-[#ff3b00] transition">
                    Mobile App Development in Patna
                  </Link>
                  <Link href="/it-company-in-patna/software-development-company-in-patna" className="text-neutral-300 hover:text-[#ff3b00] transition">
                    Custom Software Development Patna
                  </Link>
                </div>
              </div>

              {/* Column 2: Growth & AI */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#ff3b00] font-semibold mb-2">
                  Growth & AI Automation
                </div>
                <div className="flex flex-col space-y-1.5 text-xs">
                  <Link href="/it-company-in-patna/digital-marketing-agency-in-patna" className="text-neutral-300 hover:text-[#ff3b00] transition">
                    Digital Marketing & PPC in Patna
                  </Link>
                  <Link href="/it-company-in-patna/ai-automation-company-in-patna" className="text-neutral-300 hover:text-[#ff3b00] transition">
                    AI Automation Solutions
                  </Link>
                  <Link href="/it-company-in-patna/ai-chatbot-company-in-patna" className="text-neutral-300 hover:text-[#ff3b00] transition">
                    AI Chatbot Systems
                  </Link>
                  <Link href="/blog" className="text-neutral-300 hover:text-[#ff3b00] transition">
                    Tech & SEO Knowledge Base
                  </Link>
                </div>
              </div>

              {/* Column 3: Enterprise SaaS & Company */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#ff3b00] font-semibold mb-2">
                  SaaS & Company Hubs
                </div>
                <div className="flex flex-col space-y-1.5 text-xs">
                  <Link href="/attendance-management-software" className="text-neutral-300 hover:text-[#ff3b00] transition">
                    Attendance Management Software
                  </Link>
                  <Link href="/electronic-health-records-software" className="text-neutral-300 hover:text-[#ff3b00] transition">
                    Electronic Health Records (EHR)
                  </Link>
                  <Link href="/locations/patna" className="text-neutral-300 hover:text-[#ff3b00] transition">
                    Patna Technology Office Hub
                  </Link>
                  <Link href="/case-studies" className="text-neutral-300 hover:text-[#ff3b00] transition">
                    Client Case Studies & Results
                  </Link>
                  <Link href="/why-webflora" className="text-neutral-300 hover:text-[#ff3b00] transition">
                    Why Choose Webflora
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
