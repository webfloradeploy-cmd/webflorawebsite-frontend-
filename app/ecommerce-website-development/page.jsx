import React from "react";
import dynamic from "next/dynamic";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  ShoppingCart,
  Store,
  Layers,
  Briefcase,
  CreditCard,
  Truck,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Sliders,
  Database,
  Search,
  Users,
  Building2,
  Package,
  RefreshCw,
  Clock,
  PhoneCall,
  ChevronDown,
  ChevronUp,
  Cpu,
  BarChart3,
  Globe,
  MapPin,
  Laptop,
  Smartphone,
  Tag,
  Check,
  Percent,
  Lock,
  Boxes,
  Compass,
  Code2,
  Activity,
  Award,
  HelpCircle,
  X,
  Send,
  SlidersHorizontal,
  Workflow,
  ExternalLink,
  BookOpen,
  DollarSign,
  FileCode2,
  HeartHandshake,
  Star,
  Shirt,
  Tv,
  Apple,
  Factory,
  CheckCircle,
  Receipt,
  Scale,
  PieChart,
  MessageSquare,
  Flame,
  ArrowUpRight,
  Server
} from "lucide-react";
import ConsultationForm from "./components/ConsultationForm";
import FaqAccordion from "./components/FaqAccordion";

const StoreSimulator = dynamic(() => import("./components/StoreSimulator"), {
  loading: () => (
    <div className="w-full bg-[#080808] rounded-3xl border border-white/10 p-8 text-center text-neutral-400 min-h-[250px] flex items-center justify-center">
      <span className="text-xs font-mono uppercase tracking-widest text-[#d93200] font-semibold">
        Loading Store Operations Simulator...
      </span>
    </div>
  )
});

const BRAND = "#ff3b00";

const clientLogos = [
  { name: "DBM", src: "/client-logo/DBM.png" },
  { name: "Diamond Resort", src: "/client-logo/DiamondResort.png" },
  { name: "Edugen World School", src: "/client-logo/Edugen-world-school.png" },
  { name: "Feedrani", src: "/client-logo/feedrani-logo.png" },
  { name: "Krisivarsha", src: "/client-logo/Krisivarsha-logo.png" },
  { name: "RGMS", src: "/client-logo/RGMS-logo.jpeg" },
  { name: "Team Excellent", src: "/client-logo/Team-excellentlogo.webp" },
  { name: "Best For Everyone", src: "/client-logo/best-for-everyone.png" },
  { name: "Heo Sahyog", src: "/client-logo/heo-sahyog.png" },
  { name: "Vidya Bharti", src: "/client-logo/vidya-bharti.png" },
  { name: "LogiSafeWay", src: "/client-logo/logisafeway-logo.png" },
  { name: "AG", src: "/client-logo/AG-logo.png" },
];

export default function EcommerceWebsiteDevelopmentPage() {
  const servicesList = [
    {
      title: "Custom eCommerce Website Development in Patna",
      icon: Code2,
      link: "/technology/nextjs-development",
      desc: "Tailored Next.js & Node.js online stores for Patna businesses with zero sales cuts, bespoke pricing tiers, custom checkout workflows, and multi-warehouse synchronization."
    },
    {
      title: "B2B Wholesale eCommerce Platform in Patna",
      icon: Building2,
      link: "/industries/manufacturing",
      desc: "Enterprise wholesale portals for Patna manufacturers & distributors with dealer logins, negotiated price lists, bulk CSV ordering, MOQs, and Tally Prime ERP sync."
    },
    {
      title: "D2C Brand Storefronts in Patna",
      icon: Zap,
      link: "/industries/retail",
      desc: "High-conversion direct-to-consumer brand storefronts with 1-click UPI checkout, subscription commerce, customer loyalty, and automated WhatsApp delivery updates."
    },
    {
      title: "Multi-Vendor Marketplace Development",
      icon: Users,
      link: "/it-company-in-patna/software-development-company-in-patna",
      desc: "Hyperlocal and regional marketplace platforms with vendor dashboards, automated commission calculations, seller payouts, and central admin control."
    },
    {
      title: "Shopify Store Design & Development in Patna",
      icon: ShoppingBag,
      link: "/technology/shopify-development",
      desc: "End-to-end Shopify store setup, bespoke Liquid theme design, private app development, Razorpay/UPI payment, Shiprocket shipping, and Shopify SEO."
    },
    {
      title: "WooCommerce Website Development in Patna",
      icon: Globe,
      link: "/technology/wordpress-development",
      desc: "WordPress & WooCommerce online stores with custom plugins, lightweight database queries, high-speed Redis caching, and local courier integration."
    },
    {
      title: "eCommerce Mobile App Development in Patna",
      icon: Smartphone,
      link: "/it-company-in-patna/mobile-app-development-company-in-patna",
      desc: "Native and cross-platform mobile shopping apps for Android and iOS using Flutter and React Native with push notifications and live GPS tracking."
    },
    {
      title: "Payment Gateway & Logistics Integration",
      icon: CreditCard,
      link: "/it-company-in-patna/ai-automation-company-in-patna",
      desc: "Seamless integration of Razorpay, Cashfree, Paytm PG, Shiprocket, Delhivery, Blue Dart, Tally Prime, and WhatsApp notification engines in Patna."
    },
    {
      title: "eCommerce UI/UX Design & SEO in Patna",
      icon: Laptop,
      link: "/it-company-in-patna/website-development-company-in-patna",
      desc: "Conversion rate optimized (CRO) design systems, intuitive search filtering, sticky one-page checkout, and sub-second mobile page loads with local Patna SEO."
    }
  ];

  const faqs = [
    {
      q: "What does an eCommerce website development company in Patna do?",
      a: "An eCommerce website development company in Patna like Webflora Technologies designs, builds, and maintains online stores and digital commerce platforms for businesses across Patna, Bihar, and India. This encompasses conversion-focused UI/UX design, product catalog structure, shopping cart engineering, secure payment gateway integrations (UPI, Cards, NetBanking), automated courier shipping connections (Shiprocket, Delhivery), inventory tracking across warehouses, customer account management, and CRM/ERP synchronization (such as Tally Prime, Busy, or SAP). We ensure your online store is fast, secure, mobile-friendly, and ranked on Google."
    },
    {
      q: "How much does an eCommerce website cost in Patna, Bihar?",
      a: "The cost of developing an eCommerce website in Patna typically ranges from ₹30,000 to ₹5,00,000+ depending on your business requirements. A basic starter online store on Shopify or WooCommerce costs around ₹30,000 to ₹60,000. A custom-designed professional D2C storefront with automated courier and WhatsApp integrations ranges from ₹60,000 to ₹1,50,000. Advanced custom platforms (Next.js/Node.js), B2B wholesale portals with Tally ERP sync, and multi-vendor marketplaces range from ₹1,50,000 to ₹5,00,000+. We provide fixed-price, transparent quotations."
    },
    {
      q: "How long does it take to develop an eCommerce website in Patna?",
      a: "A standard eCommerce store built on Shopify or WooCommerce typically takes 2 to 4 weeks to design, configure, test, and launch. A professional custom-designed store with specialized payment, shipping, and automated messaging workflows takes 4 to 8 weeks. Enterprise B2B platforms requiring complex ERP integrations, custom wholesale pricing tiers, or multi-vendor marketplace functionality generally take 8 to 16+ weeks. We provide clear milestone timelines during the initial scope discovery."
    },
    {
      q: "Which platform is best for an eCommerce website in Patna?",
      a: "The best platform depends on your operational model: Shopify is ideal for startups and D2C brands wanting managed hosting and rapid time-to-market. WooCommerce is best for WordPress-based businesses wanting full content control and zero recurring platform fees. Custom eCommerce (Next.js, React, Node.js) is best for high-volume retailers, B2B wholesalers in Patna, and brands requiring proprietary workflows, sub-second load times, Tally ERP synchronization, and zero percentage cuts on sales."
    },
    {
      q: "Can you build a custom eCommerce website with Tally Prime integration in Patna?",
      a: "Yes, absolutely. Webflora Technologies specializes in custom eCommerce development using Next.js App Router, React, Node.js, Express, and PostgreSQL/MongoDB. Custom development gives you 100% code ownership, zero monthly transaction cuts, tailored B2B quotation workflows, dynamic multi-warehouse routing, bespoke customer-specific pricing matrices, and direct bi-directional synchronization with Tally Prime, Zoho Books, or Marg ERP."
    },
    {
      q: "Can you develop a Shopify store in Patna?",
      a: "Yes. Our certified Shopify developers design bespoke Liquid themes from scratch, build custom private apps, configure Indian payment gateways (Razorpay, Paytm, Cashfree), connect Shiprocket logistics from Patna, and implement Shopify SEO. We also build Headless Shopify architectures utilizing Next.js for brands demanding extreme mobile performance."
    },
    {
      q: "Can you develop a WooCommerce website in Patna?",
      a: "Yes. We engineer high-performance WooCommerce stores built on WordPress. We write custom plugins, optimize MySQL queries, implement Redis in-memory caching, build customized one-page checkouts, and connect local payment and logistics carriers, ensuring your WordPress store loads in under 1.5 seconds without bloat."
    },
    {
      q: "Can you build a B2B wholesale eCommerce website in Patna?",
      a: "Yes. We build enterprise B2B eCommerce platforms tailored for Patna & Bihar manufacturers, distributors, and wholesalers. Features include dealer and distributor login portals, customer-specific negotiated price lists, bulk CSV ordering, Minimum Order Quantities (MOQs), instant Request for Quote (RFQ) generation, GST tax invoicing, credit payment terms, and live Tally Prime or SAP ERP ledger synchronization."
    },
    {
      q: "Can you build a multi-vendor marketplace in Patna?",
      a: "Yes. We engineer scalable multi-vendor marketplaces similar to Amazon, Flipkart, or regional platforms. The platform includes a unified customer storefront with multi-seller split carts, dedicated vendor self-service dashboards (product listings, orders, payouts), and a master administrator control panel with automated commission calculation and payout disbursements."
    },
    {
      q: "Can you integrate payment gateways and Instant UPI?",
      a: "Yes. We integrate all major Indian and international payment gateways including Razorpay, Cashfree, PayU, Paytm, PhonePe PG, Stripe, and PayPal. We support Instant UPI (Google Pay, PhonePe, Paytm QR & Intent), Credit/Debit Cards, Net Banking across 50+ banks, Cardless EMIs, and Cash on Delivery (COD) with automated OTP verification."
    },
    {
      q: "Can you integrate shipping services and courier pickup from Patna?",
      a: "Yes. We integrate automated shipping APIs including Shiprocket, Delhivery, Blue Dart, Ecom Express, and India Post. This enables automatic AWB generation upon order confirmation, bulk shipping label and manifest printing, real-time courier rate comparison, doorstep courier pickup in Patna, and live GPS package tracking with automated WhatsApp/SMS delivery updates to customers."
    },
    {
      q: "Do you provide in-person meetings and local technical support in Patna?",
      a: "Yes. Webflora Technologies is based in Patna. You can meet our lead eCommerce architects in person at our Patna office to discuss your project requirements, review live development milestones, or receive hands-on training for your back-office staff."
    },
    {
      q: "Is eCommerce website development SEO-friendly for Google ranking in Patna and India?",
      a: "Yes. Technical SEO is embedded into every online store we build. We structure clean semantic URLs, logical product and category hierarchies, dynamic XML sitemaps, canonical tags to prevent duplicate faceted filter indexing, Product and FAQPage Schema JSON-LD structured data, and sub-second Core Web Vitals performance for top Google search visibility in Patna and nationwide."
    },
    {
      q: "Do you provide eCommerce website maintenance and post-launch support in Patna?",
      a: "Yes. We provide comprehensive post-launch technical support and maintenance agreements. Our Patna-based team handles routine security patches, speed audits, database optimization, third-party API updates, automated backups, conversion rate optimization (CRO) testing, and continuous feature enhancements."
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#FF3B00] selection:text-white pt-20 sm:pt-24 pb-20 overflow-hidden">
      
      {/* ── Background Glow Elements ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[#FF3B00]/10 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[20%] left-[15%] w-[450px] h-[450px] bg-emerald-900/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── 1. Hero Section (Mobile App Development Page Template) ── */}
        <section className="relative flex items-center justify-center overflow-hidden pt-2 sm:pt-4 md:pt-6 pb-12 md:pb-16 border-b border-white/5">
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Subtext, Badges & CTAs */}
            <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-5 text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 w-fit">
                <span className="text-orange-400 text-xs">⭐</span>
                <span className="text-[11px] font-mono font-bold tracking-wider text-orange-300 uppercase">
                  Top eCommerce Agency in Patna, Bihar
                </span>
              </div>

              {/* Dominant High-Impact Heading - LCP Priority */}
              <h1 className="font-display font-black tracking-tight leading-[1.08] text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-white w-full">
                eCommerce Website{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#FF3B00] to-red-500">
                  Development Company in Patna
                </span>
              </h1>

              {/* Crisp, high-contrast Value Prop Subtext */}
              <p className="text-neutral-200 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
                <strong className="text-white font-semibold">Webflora Technologies</strong> is the leading eCommerce website development company in Patna that builds custom online stores for startups, <Link href="/industries/retail" className="text-[#FF3B00] underline hover:text-white">D2C brands</Link>, retailers, wholesalers, and <Link href="/industries/manufacturing" className="text-neutral-200 underline hover:text-[#FF3B00]">manufacturers</Link> across Bihar. From instant UPI checkouts to automated Shiprocket shipping, local warehouse inventory, and Tally ERP sync, we engineer eCommerce platforms built for high conversion and scale.
              </p>

              {/* Quick Value Metrics Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1 min-h-[32px]">
                {[
                  { icon: Code2, label: "100% Store & Code Ownership" },
                  { icon: Zap, label: "Sub-1s Native Speed" },
                  { icon: CreditCard, label: "Razorpay, Cashfree & UPI PG" },
                  { icon: Truck, label: "Shiprocket & Delhivery Sync" },
                  { icon: Award, label: "90+ Lighthouse Score" }
                ].map((pill, i) => {
                  const IconComp = pill.icon;
                  return (
                    <div
                      key={i}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-white/10 text-neutral-200 text-xs font-medium h-[28px]"
                    >
                      <span className="w-3.5 h-3.5 flex items-center justify-center shrink-0 text-orange-400">
                        <IconComp className="w-3.5 h-3.5" />
                      </span>
                      <span>{pill.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2 sm:pt-3 min-h-[48px]">
                <a
                  href="#consultation-form"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#d93200] hover:bg-[#c22d00] text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-full transition-all duration-300 shadow-[0_4px_25px_rgba(217,50,0,0.4)] hover:scale-105 active:scale-95 cursor-pointer min-h-[44px]"
                >
                  <span>Start Project</span>
                  <span className="w-4 h-4 flex items-center justify-center shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>

                <a
                  href="tel:8540814729"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-900 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-300 active:scale-95 cursor-pointer min-h-[44px]"
                >
                  <span className="w-4 h-4 flex items-center justify-center shrink-0 text-orange-400">
                    <PhoneCall className="w-4 h-4" />
                  </span>
                  <span>Call Us Directly</span>
                </a>
              </div>
            </div>

            {/* Right Column: Dynamic Tech Stack & SLA Dashboard */}
            <div className="lg:col-span-5 flex flex-col gap-4 relative">
              {/* Tech Stack Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950 border border-white/10 shadow-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold">
                    Engineered eCommerce Stack
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">
                    ● Production Ready
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { name: "Next.js 15", icon: Code2 },
                    { name: "Shopify Plus", icon: ShoppingBag },
                    { name: "WooCommerce", icon: Globe },
                    { name: "Node.js", icon: Server },
                    { name: "Razorpay PG", icon: CreditCard },
                    { name: "Shiprocket", icon: Truck }
                  ].map((tech, idx) => {
                    const IconComp = tech.icon;
                    return (
                      <div
                        key={idx}
                        className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-zinc-900 border border-white/5 hover:border-orange-500/40 hover:bg-zinc-800 transition-all duration-300 min-h-[64px]"
                      >
                        <div className="w-[26px] h-[26px] mb-1 flex items-center justify-center shrink-0 text-orange-400">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono text-neutral-200 uppercase text-center tracking-wider truncate w-full">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Metrics Grid */}
              <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950 border border-white/10 shadow-2xl grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white font-display">99.9%</p>
                  <p className="text-[10px] font-mono uppercase text-neutral-300 tracking-wider font-semibold">Uptime & Cart SLA</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white font-display">Sub-1s</p>
                  <p className="text-[10px] font-mono uppercase text-neutral-300 tracking-wider font-semibold">Load & Checkout</p>
                </div>
                <div className="col-span-2 h-[1px] bg-white/5" />
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white font-display">150+</p>
                  <p className="text-[10px] font-mono uppercase text-neutral-300 tracking-wider font-semibold">eCommerce Stores</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-orange-400 font-display">100%</p>
                  <p className="text-[10px] font-mono uppercase text-neutral-300 tracking-wider font-semibold">Code & Store Ownership</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── 2. TRUST: Real Clients / Projects / Reviews ── */}
        <div
          className="my-10 relative rounded-3xl bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent border border-white/10 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="flex flex-col items-center sm:items-start gap-1.5">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]"
                    />
                  ))}
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-bold">
                  Verified Google Reviews in Patna & Bihar
                </span>
              </div>

              <div className="hidden sm:block w-px h-10 bg-white/10" />

              <div>
                <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">
                  Trusted eCommerce Website Developers in Patna
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400 font-light mt-0.5">
                  Helping businesses in Patna, Bihar, and across India build scalable online stores, B2B platforms, and digital marketplaces.
                </p>
              </div>
            </div>

            <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl px-5 py-2.5 backdrop-blur-sm shrink-0">
              <span className="text-white font-black text-2xl tracking-tighter mr-2 font-mono">5.0</span>
              <div className="h-4 w-[2px] bg-amber-400/50 mx-2" />
              <span className="text-[10px] text-neutral-300 font-bold uppercase tracking-widest leading-none">
                Client<br />Rating
              </span>
            </div>
          </div>

          <div className="pt-6">
            <div className="text-center mb-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                Trusted by Fast-Growing Brands & Companies in Patna, Bihar & Across India
              </span>
            </div>

            <div className="relative flex overflow-x-hidden w-full">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

              <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] py-2">
                <div className="flex items-center gap-8 md:gap-14 px-4">
                  {clientLogos.map((logo, index) => (
                    <div
                      key={`trust-logo-1-${index}`}
                      className="w-28 h-9 md:w-32 md:h-10 shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    >
                      <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        width={120}
                        height={36}
                        loading="lazy"
                        className="object-contain max-h-9 w-auto"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-8 md:gap-14 px-4" aria-hidden="true">
                  {clientLogos.map((logo, index) => (
                    <div
                      key={`trust-logo-2-${index}`}
                      className="w-28 h-9 md:w-32 md:h-10 shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    >
                      <Image
                        src={logo.src}
                        alt=""
                        width={120}
                        height={36}
                        loading="lazy"
                        className="object-contain max-h-9 w-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Interactive Live Store Simulator ── */}
        <section className="py-12 md:py-16">
          <StoreSimulator />
        </section>

        {/* ── 3. H2: eCommerce Website Development Services in Patna ── */}
        <section id="services" className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Layers className="w-3.5 h-3.5" /> What We Build in Patna
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              eCommerce Website Development Services in Patna
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base mt-4 font-light">
              Every business in Patna and Bihar sells differently. That's why we develop custom eCommerce websites tailored specifically around your retail products, wholesale dealer network, sales channels, and regional logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={idx}
                  className="group bg-neutral-900/40 hover:bg-neutral-900/80 border border-white/5 hover:border-[#FF3B00]/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,59,0,0.1)] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-white/5 group-hover:bg-[#FF3B00]/20 border border-white/10 group-hover:border-[#FF3B00]/40 flex items-center justify-center text-[#FF3B00] transition-colors mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#FF3B00] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/5">
                    <Link
                      href={srv.link}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FF3B00] hover:underline group-hover:translate-x-1 transition-transform"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 4. H2: Custom eCommerce Website Development in Patna ── */}
        <section className="py-16 md:py-24 border-t border-white/5 bg-gradient-to-b from-transparent via-[#FF3B00]/5 to-transparent rounded-3xl p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
                <Code2 className="w-3.5 h-3.5" /> Bespoke Engineering in Patna
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Custom eCommerce Website Development in Patna
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
                Standard templates and closed SaaS platforms force your brand into rigid constraints, recurring percentage cuts on sales, and limited customization.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                With our custom eCommerce website development in Patna using <Link href="/technology/nextjs-development" className="text-[#FF3B00] underline hover:text-white">Next.js</Link>, Node.js, and PostgreSQL/MongoDB, you get 100% source code ownership, sub-second page speeds, custom database schemas, and tailored checkout flows with direct Tally Prime sync. Check out our <Link href="/compare/custom-software-vs-saas" className="text-[#FF3B00] underline hover:text-white">custom development vs SaaS breakdown</Link>.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Link href="/technology/nextjs-development" className="text-xs bg-white/5 hover:bg-[#FF3B00]/20 border border-white/10 hover:border-[#FF3B00]/40 px-3 py-1.5 rounded-lg text-neutral-300 transition">Next.js App Router</Link>
                <Link href="/technology/nodejs-development" className="text-xs bg-white/5 hover:bg-[#FF3B00]/20 border border-white/10 hover:border-[#FF3B00]/40 px-3 py-1.5 rounded-lg text-neutral-300 transition">Node.js / Express APIs</Link>
                <Link href="/it-company-in-patna/software-development-company-in-patna" className="text-xs bg-white/5 hover:bg-[#FF3B00]/20 border border-white/10 hover:border-[#FF3B00]/40 px-3 py-1.5 rounded-lg text-neutral-300 transition">Custom REST & GraphQL</Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="text-xs font-mono uppercase text-[#FF3B00] mb-3">Custom eCommerce is essential when you need:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Complex product variant matrices & custom sizing",
                  "Customer-specific negotiated pricing & dealer tiers",
                  "B2B bulk ordering & instant RFQ generation",
                  "Zero recurring transaction cuts on gross sales",
                  "Multi-warehouse logistics routing & live deduction",
                  "Deep ERP & CRM integrations (Tally Prime, Zoho, SAP)",
                  "Custom financial & GST invoice generation",
                  "Frictionless 1-page OTP checkout workflows",
                  "Recurring subscriptions & membership billing",
                  "Full database & user data privacy control"
                ].map((item, idx) => (
                  <div key={idx} className="bg-neutral-900/70 border border-white/5 rounded-xl p-3.5 flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-medium text-neutral-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. H2: eCommerce Website Features ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Workflow className="w-3.5 h-3.5" /> Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              eCommerce Website Features for High Online Sales
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              A high-converting eCommerce website must deliver a frictionless shopping journey for customers while providing your back-office team complete operational control.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Product Catalog Management",
                icon: Package,
                points: ["Unlimited Products & Categories", "SKUs, Variants & Swatches", "Dynamic Pricing & Discounts", "High-Resolution Image Zoom", "Technical Specifications & Guides"]
              },
              {
                title: "Smart Search & Faceted Filters",
                icon: Search,
                points: ["Instant Autocomplete Search", "Filter by Price, Brand & Size", "Category & Availability Filter", "Product Attribute Tagging", "Spell Correction & Synonyms"]
              },
              {
                title: "Cart & Sticky Mini-Cart",
                icon: ShoppingCart,
                points: ["Instant Client-Side Calculations", "Free Delivery Progress Bar", "Coupon Code Validation", "Cart Cross-Sell Recommendations", "Save Cart for Later"]
              },
              {
                title: "Frictionless One-Page Checkout",
                icon: ShieldCheck,
                points: ["Instant Phone OTP Login", "Address Book & PIN Validation", "GSTIN & Business Invoicing", "Delivery Method Selection", "Order Summary & Live Tax Breakdown"]
              },
              {
                title: "Payment Gateway Integration",
                icon: CreditCard,
                points: ["Instant UPI (GPay, PhonePe, Paytm)", "Credit / Debit Cards & EMIs", "Net Banking & Digital Wallets", "Cash on Delivery (COD) with OTP", "International Cards (Stripe)"]
              },
              {
                title: "Automated Order Lifecycle",
                icon: ShoppingBag,
                points: ["Status: New → Confirmed → Shipped", "Automated GST Tax Invoices", "Cancellation & Return Workflows", "WhatsApp & SMS Status Alerts", "Customer Re-Order Trigger"]
              },
              {
                title: "Multi-Warehouse Inventory",
                icon: Boxes,
                points: ["Real-time Stock Deductions", "Multi-Location Warehouse Sync", "Automated Low-Stock Alerts", "Restock Notification Triggers", "POS & Channel Integration"]
              },
              {
                title: "Customer Self-Service Portal",
                icon: Users,
                points: ["Order History & Re-ordering", "Live Courier Package Tracking", "Wishlist & Saved Products", "Address Book Management", "Downloadable Tax Invoices"]
              },
              {
                title: "Automated Shipping & Tracking",
                icon: Truck,
                points: ["Shiprocket, Delhivery, Blue Dart APIs", "Instant AWB Generation", "Shipping Label & Manifest Printing", "Doorstep Delivery Verification", "Reverse Pickup Management"]
              },
              {
                title: "Discount & Coupon Engine",
                icon: Tag,
                points: ["Percentage & Flat Discounts", "First-Order Promo Codes", "Minimum Order Value Rules", "BOGO & Tiered Promotions", "Festive Flash Sale Timers"]
              },
              {
                title: "Role-Based Admin Dashboard",
                icon: BarChart3,
                points: ["Sales & Revenue Analytics", "Customer Cohort Insights", "Staff Roles & Access Permissions", "Product & Banner CMS", "Exportable Sales & Tax Reports"]
              },
              {
                title: "Security & Sub-Second Speed",
                icon: Lock,
                points: ["SSL Encryption & Data Security", "Core Web Vitals Optimized", "DDoS & Firewall Protection", "Automated Database Backups", "PCI-DSS Compliance Ready"]
              }
            ].map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <div key={idx} className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#FF3B00]/10 border border-[#FF3B00]/20 flex items-center justify-center text-[#FF3B00] mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-3">{feature.title}</h3>
                    <ul className="space-y-1.5 text-xs text-neutral-300">
                      {feature.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 6. H2: B2B Wholesale eCommerce Development in Patna ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
                <Building2 className="w-3.5 h-3.5" /> Wholesale & Enterprise in Bihar
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                B2B Wholesale eCommerce Development in Patna
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
                B2B transactions require specialized pricing, credit terms, multi-tier approvals, and bulk order workflows that standard retail carts cannot support.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                We engineer scalable <Link href="/industries/manufacturing" className="text-[#FF3B00] underline hover:text-white">B2B eCommerce platforms</Link> designed for manufacturers, distributors, and trading businesses in Patna (such as Marufganj, Bakarganj, Boring Road, and Bailey Road) looking to digitize their dealer network, automate quotation requests (RFQs), and sync with Tally Prime or SAP ERP systems.
              </p>

              <div className="mt-6 space-y-3 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Dealer & Distributor Portals:</strong> Secure login with customer-specific pricing catalogs.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Bulk CSV Ordering & MOQs:</strong> Fast SKU entry, tiered volume discounts, and carton packaging rules.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>GST Compliance & Credit Terms:</strong> Automated tax invoices, e-way bills, and 30/60-day credit lines.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-neutral-900/60 border border-white/10 rounded-3xl p-6 sm:p-8">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#FF3B00]" /> B2B eCommerce Architecture Stack
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-3.5 bg-neutral-950/80 rounded-xl border border-white/5">
                  <div className="font-semibold text-white">Tiered Wholesale Price Matrix</div>
                  <div className="text-neutral-400 mt-1">Different rates for Master Distributors, Regional Dealers, and Commercial Accounts.</div>
                </div>
                <div className="p-3.5 bg-neutral-950/80 rounded-xl border border-white/5">
                  <div className="font-semibold text-white">RFQ & Quotation Workflow</div>
                  <div className="text-neutral-400 mt-1">Buyers request custom price quotes for large order volumes with one-click admin approval.</div>
                </div>
                <div className="p-3.5 bg-neutral-950/80 rounded-xl border border-white/5">
                  <div className="font-semibold text-white">Direct ERP & Accounting Sync</div>
                  <div className="text-neutral-400 mt-1">Bi-directional ledger synchronization with Tally Prime, Zoho Books, SAP, and Busy.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. H2: D2C eCommerce Development in Patna ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 bg-neutral-900/60 border border-white/10 rounded-3xl p-6 sm:p-8">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#FF3B00]" /> High-Velocity D2C Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-neutral-950/80 rounded-xl border border-white/5">
                  <div className="font-semibold text-white">1-Click UPI Checkout</div>
                  <div className="text-neutral-400 mt-1">Instant mobile authorization via GPay & PhonePe reducing checkout drop-offs.</div>
                </div>
                <div className="p-3.5 bg-neutral-950/80 rounded-xl border border-white/5">
                  <div className="font-semibold text-white">Abandoned Cart Recovery</div>
                  <div className="text-neutral-400 mt-1">Automated WhatsApp & SMS follow-ups reclaiming 25-35% of lost checkouts.</div>
                </div>
                <div className="p-3.5 bg-neutral-950/80 rounded-xl border border-white/5">
                  <div className="font-semibold text-white">Subscription Commerce</div>
                  <div className="text-neutral-400 mt-1">Recurring product replenishment with automated monthly card billing.</div>
                </div>
                <div className="p-3.5 bg-neutral-950/80 rounded-xl border border-white/5">
                  <div className="font-semibold text-white">UGC & Verified Reviews</div>
                  <div className="text-neutral-400 mt-1">Customer photo reviews, star ratings, and social proof widgets.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
                <Zap className="w-3.5 h-3.5" /> Direct to Consumer in Patna
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                D2C eCommerce Storefronts in Patna
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
                Direct-to-consumer (D2C) brands require visually stunning, mobile-optimized storefronts engineered for high conversion rates, impulse buying, and brand storytelling.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                We develop high-performance <Link href="/industries/retail" className="text-[#FF3B00] underline hover:text-white">D2C brand websites</Link> that turn social media ad clicks into loyal repeat customers with optimized Core Web Vitals, dynamic upsells, and tight Meta Pixel / Google Analytics 4 integration.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-neutral-300">Fashion & Apparel</span>
                <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-neutral-300">Beauty & Skincare</span>
                <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-neutral-300">Health & Organic Food</span>
                <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-neutral-300">Electronics & Gadgets</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. H2: Multi-Vendor eCommerce Marketplace Development in Patna ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Users className="w-3.5 h-3.5" /> Marketplace Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Multi-Vendor eCommerce Development in Patna
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              Build the next Amazon, Flipkart, or hyperlocal Patna marketplace. We create scalable multi-vendor platforms where independent sellers register, list products, and fulfill orders while you earn automated commissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">1. Customer Storefront</h3>
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  Unified catalog browsing across thousands of sellers with multi-vendor split cart, single payment transaction, and individual shipment tracking.
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-neutral-400">
                  <div>✓ Multi-seller product search</div>
                  <div>✓ Unified shopping cart & checkout</div>
                  <div>✓ Seller reviews & ratings</div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Store className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">2. Vendor Self-Service Portal</h3>
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  Dedicated portal for merchants to manage catalog items, review incoming orders, print shipping labels, track payouts, and view sales performance.
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-neutral-400">
                  <div>✓ Product listing & stock control</div>
                  <div>✓ Order dispatch & packing slips</div>
                  <div>✓ Earnings & payout ledger</div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FF3B00]/20 text-[#FF3B00] flex items-center justify-center mb-4">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">3. Master Admin Control Panel</h3>
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  Total administrative oversight with commission percentage rules, KYC vendor onboarding approval, transaction settlement, and dispute resolution.
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-neutral-400">
                  <div>✓ Automated commission calculation</div>
                  <div>✓ Vendor verification & onboarding</div>
                  <div>✓ Platform revenue analytics</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. H2: Shopify eCommerce Development in Patna ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
                <ShoppingBag className="w-3.5 h-3.5" /> Hosted Commerce Leader
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Shopify eCommerce Development in Patna
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
                Shopify is an exceptional hosted platform for brands seeking fast deployment, bank-grade hosting security, and access to a massive app ecosystem.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                As a specialized <Link href="/technology/shopify-development" className="text-[#FF3B00] underline hover:text-white">Shopify development company in Patna</Link>, we design custom Liquid themes, build private Shopify apps, configure Indian payment gateways and Shiprocket logistics from Patna, and engineer Headless Shopify stores with Next.js frontends.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
                <div className="p-3 bg-neutral-900/60 rounded-xl border border-white/5">✓ Custom Theme Design & Liquid Coding</div>
                <div className="p-3 bg-neutral-900/60 rounded-xl border border-white/5">✓ Shopify Plus Enterprise Architecture</div>
                <div className="p-3 bg-neutral-900/60 rounded-xl border border-white/5">✓ Indian Payment & Shiprocket Setup</div>
                <div className="p-3 bg-neutral-900/60 rounded-xl border border-white/5">✓ Headless Shopify with Next.js</div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-neutral-900/60 border border-white/10 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Icon icon="logos:shopify" width={28} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Shopify Store Launch Roadmap</h3>
                  <div className="text-xs text-neutral-400">Typically delivered in 2–4 Weeks in Patna</div>
                </div>
              </div>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FF3B00]/20 text-[#FF3B00] font-mono flex items-center justify-center shrink-0">1</span>
                  <div><strong className="text-white">Store Setup & Architecture:</strong> Product taxonomy, variant matrices, and collection structures.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FF3B00]/20 text-[#FF3B00] font-mono flex items-center justify-center shrink-0">2</span>
                  <div><strong className="text-white">Custom Liquid Theme:</strong> Pixel-perfect responsive design tailored to your brand identity.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FF3B00]/20 text-[#FF3B00] font-mono flex items-center justify-center shrink-0">3</span>
                  <div><strong className="text-white">Gateway & Carrier Hookup:</strong> Razorpay, Paytm, Cashfree, Shiprocket, and WhatsApp notifications.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FF3B00]/20 text-[#FF3B00] font-mono flex items-center justify-center shrink-0">4</span>
                  <div><strong className="text-white">SEO & Go-Live:</strong> Schema markup, Google Search Console indexing, and launch verification.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. H2: WooCommerce Development in Patna ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 bg-neutral-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <Icon icon="logos:woocommerce" width={28} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">WooCommerce Technical Excellence</h3>
                  <div className="text-xs text-neutral-400">WordPress Open-Source Control</div>
                </div>
              </div>
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-neutral-950/80 rounded-xl border border-white/5">
                  <strong className="text-white">Zero Subscription Lock-in:</strong> Complete ownership of your store database, hosting, and files.
                </div>
                <div className="p-3 bg-neutral-950/80 rounded-xl border border-white/5">
                  <strong className="text-white">Custom Plugin Engineering:</strong> Tailored checkout modifiers, custom shipping rules, and wholesale extensions.
                </div>
                <div className="p-3 bg-neutral-950/80 rounded-xl border border-white/5">
                  <strong className="text-white">High-Speed Optimization:</strong> Redis object caching, Cloudflare CDN, and optimized MySQL queries.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
                <Globe className="w-3.5 h-3.5" /> WordPress eCommerce in Patna
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                WooCommerce Development in Patna
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
                For businesses wanting complete control over their hosting, codebase, and content management, WooCommerce on WordPress delivers unparalleled flexibility.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                Our <Link href="/technology/wordpress-development" className="text-[#FF3B00] underline hover:text-white">WooCommerce developers in Patna</Link> build lean, lightning-fast stores engineered without code bloat, incorporating customized checkouts, Indian payment gateways, and automated logistics.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Link href="/technology/wordpress-development" className="text-xs bg-white/5 hover:bg-[#FF3B00]/20 border border-white/10 hover:border-[#FF3B00]/40 px-3 py-1.5 rounded-lg text-neutral-300 transition">Custom WooCommerce Plugins</Link>
                <Link href="/compare/shopify-vs-woocommerce" className="text-xs bg-white/5 hover:bg-[#FF3B00]/20 border border-white/10 hover:border-[#FF3B00]/40 px-3 py-1.5 rounded-lg text-neutral-300 transition">Shopify vs WooCommerce Guide</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 11. H2: eCommerce Payment & Shipping Integration in Patna ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Workflow className="w-3.5 h-3.5" /> Connected Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              eCommerce Payment & Shipping Integration in Patna
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              Your online store shouldn't exist in a silo. We seamlessly integrate payment gateways, automated logistics carriers, ERP accounting software, and WhatsApp notifications into a unified workflow for Patna businesses.
            </p>
          </div>

          {/* Connected Flow Banner */}
          <div className="bg-neutral-950/80 border border-white/10 rounded-3xl p-6 md:p-8 mb-10">
            <div className="text-xs font-mono uppercase text-[#FF3B00] mb-2 text-center">
              Automated eCommerce Operations Pipeline (Patna Hub)
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 py-4 text-xs font-mono">
              <span className="bg-neutral-900 border border-white/10 px-3 py-2 rounded-xl text-white">Customer Order</span>
              <span className="text-[#FF3B00] font-bold">→</span>
              <span className="bg-neutral-900 border border-white/10 px-3 py-2 rounded-xl text-white">Gateway Webhook</span>
              <span className="text-[#FF3B00] font-bold">→</span>
              <span className="bg-neutral-900 border border-white/10 px-3 py-2 rounded-xl text-white">GST Invoice & Tally Sync</span>
              <span className="text-[#FF3B00] font-bold">→</span>
              <span className="bg-neutral-900 border border-white/10 px-3 py-2 rounded-xl text-white">Shiprocket AWB</span>
              <span className="text-[#FF3B00] font-bold">→</span>
              <span className="bg-emerald-500/20 border border-emerald-500/40 px-3 py-2 rounded-xl text-emerald-300 font-bold">WhatsApp Delivery Alerts</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-6">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Gateways</div>
              <h3 className="text-base font-bold text-white mb-3">Online Payments</h3>
              <div className="space-y-1.5 text-xs text-neutral-300">
                <div className="p-2 bg-black/40 rounded border border-white/5">💳 Razorpay Direct API</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">💳 Cashfree Payments</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">💳 PayU & Paytm Gateway</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">💳 Stripe (International Cards)</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">⚡ UPI Intent, QR & NetBanking</div>
              </div>
            </div>

            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-6">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Logistics</div>
              <h3 className="text-base font-bold text-white mb-3">Shipping & Tracking</h3>
              <div className="space-y-1.5 text-xs text-neutral-300">
                <div className="p-2 bg-black/40 rounded border border-white/5">🚚 Shiprocket API Hub</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">🚚 Delhivery Direct</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">🚚 Blue Dart Express API</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">🚚 India Post Speed Post</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">📍 Automated AWB & Manifests</div>
              </div>
            </div>

            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-6">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Accounting</div>
              <h3 className="text-base font-bold text-white mb-3">CRM & ERP Systems</h3>
              <div className="space-y-1.5 text-xs text-neutral-300">
                <div className="p-2 bg-black/40 rounded border border-white/5">📊 Tally Prime API Sync</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">📊 Zoho Books & Inventory</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">📊 SAP Business One</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">📊 Busy Accounting Software</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">🔄 Multi-Warehouse Stock Logic</div>
              </div>
            </div>

            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-6">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Marketing</div>
              <h3 className="text-base font-bold text-white mb-3">Alerts & Analytics</h3>
              <div className="space-y-1.5 text-xs text-neutral-300">
                <div className="p-2 bg-black/40 rounded border border-white/5">💬 WhatsApp Business API</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">📱 Fast2SMS / MSG91 OTP</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">📧 Automated PDF Invoices</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">📈 Google Analytics 4 & Pixel</div>
                <div className="p-2 bg-black/40 rounded border border-white/5">🛒 Abandoned Cart Recovery</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 12. H2: eCommerce Website Development Process in Patna ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Workflow className="w-3.5 h-3.5" /> Proven Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              eCommerce Website Development Process in Patna
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              We follow a disciplined 8-step engineering lifecycle with local in-person and digital collaboration in Patna to ensure your online store is delivered on schedule, within budget, and optimized for sales from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { num: "01", title: "Business & Requirement Analysis", desc: "We evaluate your products, SKUs, sales processes, target buyers in Patna and India, payment gateway preferences, and logistics requirements." },
              { num: "02", title: "eCommerce Architecture & Platform", desc: "We select the optimal platform (Shopify, WooCommerce, or Custom Next.js) and map product taxonomy and database schemas." },
              { num: "03", title: "UI/UX Design & Wireframing", desc: "We design conversion-optimized storefront wireframes, sticky cart interactions, and frictionless mobile checkout experiences." },
              { num: "04", title: "Frontend Development", desc: "Our engineers build responsive, sub-second loading storefront pages with Next.js/React, Tailwind CSS, and optimized media assets." },
              { num: "05", title: "Backend & API Development", desc: "We build secure APIs, database logic, user authentication, inventory tracking, and role-based administrative dashboards." },
              { num: "06", title: "Payment & Shipping Integration", desc: "We hook up Razorpay, Cashfree, UPI Intent, Shiprocket, Delhivery, Tally Prime ERP, and automated WhatsApp alert triggers." },
              { num: "07", title: "Testing & SEO Setup", desc: "We conduct stress testing under transaction load, audit Core Web Vitals, and configure Product & FAQPage Schema markup for Patna SEO." },
              { num: "08", title: "Deployment & Post-Launch Support", desc: "We launch on secure cloud infrastructure, link your domain, submit XML sitemaps to Google, and provide ongoing maintenance." }
            ].map((step, idx) => (
              <div key={idx} className="bg-neutral-900/50 border border-white/10 hover:border-[#FF3B00]/30 p-6 rounded-2xl transition flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-extrabold font-mono text-[#FF3B00]">{step.num}</span>
                  <h3 className="text-base font-bold text-white mt-2">{step.title}</h3>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 13. H2: Technologies We Use ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Cpu className="w-3.5 h-3.5" /> Modern Stack
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Technologies We Use for eCommerce in Patna
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              We select modern, battle-tested technologies based on your business volume, performance goals, and operational complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-5">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Frontend</div>
              <h3 className="text-sm font-bold text-white mb-2">Storefront UI</h3>
              <ul className="space-y-1 text-xs text-neutral-300">
                <li>• Next.js 15 & React</li>
                <li>• TypeScript & JavaScript</li>
                <li>• Tailwind CSS & SCSS</li>
                <li>• Framer Motion</li>
              </ul>
            </div>

            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-5">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Backend</div>
              <h3 className="text-sm font-bold text-white mb-2">APIs & Logic</h3>
              <ul className="space-y-1 text-xs text-neutral-300">
                <li>• Node.js & Express</li>
                <li>• Laravel (PHP)</li>
                <li>• RESTful & GraphQL APIs</li>
                <li>• Webhook Handlers</li>
              </ul>
            </div>

            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-5">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Databases</div>
              <h3 className="text-sm font-bold text-white mb-2">Data & Cache</h3>
              <ul className="space-y-1 text-xs text-neutral-300">
                <li>• PostgreSQL</li>
                <li>• MongoDB</li>
                <li>• MySQL Database</li>
                <li>• Redis In-Memory Caching</li>
              </ul>
            </div>

            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-5">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Platforms</div>
              <h3 className="text-sm font-bold text-white mb-2">eCommerce Engines</h3>
              <ul className="space-y-1 text-xs text-neutral-300">
                <li>• Shopify Plus & Custom</li>
                <li>• WooCommerce (WP)</li>
                <li>• Custom Next.js Commerce</li>
                <li>• Headless Commerce</li>
              </ul>
            </div>

            <div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-5">
              <div className="text-xs font-mono text-[#FF3B00] uppercase mb-2">Mobile & Apps</div>
              <h3 className="text-sm font-bold text-white mb-2">Android & iOS</h3>
              <ul className="space-y-1 text-xs text-neutral-300">
                <li>• Flutter Cross-Platform</li>
                <li>• React Native</li>
                <li>• Progressive Web Apps</li>
                <li>• Firebase Push Alerts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 14. H2: eCommerce Website Development Cost in Patna ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Tag className="w-3.5 h-3.5" /> Pricing & Timelines in Patna
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              eCommerce Website Development Cost in Patna
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
              The cost of developing an eCommerce website in Patna depends on the number of products, custom UI/UX design, payment and courier shipping integrations, Tally ERP sync, and whether the store is built using Shopify, WooCommerce or a custom Next.js stack. We provide transparent, milestone-based pricing with no hidden charges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Basic Tier */}
            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-neutral-400 uppercase">Starter Online Store</div>
                <h3 className="text-xl font-bold text-white mt-1">Basic eCommerce Website</h3>
                <div className="mt-4 pb-4 border-b border-white/10">
                  <span className="text-3xl font-extrabold font-mono text-white">₹30,000</span>
                  <span className="text-xs text-neutral-400 font-mono"> – ₹60,000+</span>
                  <div className="text-[11px] text-[#FF3B00] font-mono mt-1">Timeline: Approx. 2–4 Weeks</div>
                </div>
                <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
                  Suitable for small businesses and local shops in Patna launching their first online catalogue.
                </p>
                <div className="mt-4 space-y-2 text-xs text-neutral-300">
                  <div>✓ Clean product catalogue</div>
                  <div>✓ Shopping cart & checkout</div>
                  <div>✓ Razorpay / Instant UPI gateway</div>
                  <div>✓ Basic admin dashboard</div>
                </div>
              </div>
              <a href="#consultation-form" className="mt-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-semibold text-center block cursor-pointer">
                Choose Basic Plan
              </a>
            </div>

            {/* Professional Tier (Highlighted) */}
            <div className="bg-neutral-900/80 border-2 border-[#FF3B00] rounded-2xl p-6 flex flex-col justify-between relative shadow-[0_0_30px_rgba(255,59,0,0.2)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d93200] text-white text-[10px] font-mono uppercase tracking-widest px-3 py-0.5 rounded-full font-bold">
                Most Popular in Patna
              </div>
              <div>
                <div className="text-xs font-mono text-[#FF3B00] uppercase font-semibold">Growing D2C Brands</div>
                <h3 className="text-xl font-bold text-white mt-1">Professional eCommerce Website</h3>
                <div className="mt-4 pb-4 border-b border-white/10">
                  <span className="text-3xl font-extrabold font-mono text-white">₹60,000</span>
                  <span className="text-xs text-neutral-400 font-mono"> – ₹1,50,000+</span>
                  <div className="text-[11px] text-emerald-400 font-mono mt-1">Timeline: Approx. 4–8 Weeks</div>
                </div>
                <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
                  Suitable for growing Patna brands requiring custom UI/UX, advanced search filters, and automated shipping from Bihar.
                </p>
                <div className="mt-4 space-y-2 text-xs text-neutral-300">
                  <div>✓ Custom responsive UI/UX</div>
                  <div>✓ Shiprocket & Delhivery APIs</div>
                  <div>✓ WhatsApp & SMS alerts</div>
                  <div>✓ Patna & National SEO Schema</div>
                </div>
              </div>
              <a href="#consultation-form" className="mt-6 py-2.5 bg-[#d93200] hover:bg-[#c22d00] text-white rounded-xl text-xs font-bold text-center block shadow-lg shadow-[#d93200]/30 cursor-pointer transition">
                Get Started Now
              </a>
            </div>

            {/* Custom / B2B Tier */}
            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-neutral-400 uppercase">Enterprise & B2B Bihar</div>
                <h3 className="text-xl font-bold text-white mt-1">Custom eCommerce Platform</h3>
                <div className="mt-4 pb-4 border-b border-white/10">
                  <span className="text-3xl font-extrabold font-mono text-white">₹1,50,000</span>
                  <span className="text-xs text-neutral-400 font-mono"> – ₹5,00,000+</span>
                  <div className="text-[11px] text-[#FF3B00] font-mono mt-1">Timeline: Approx. 8–16+ Weeks</div>
                </div>
                <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
                  Suitable for businesses requiring custom workflows, B2B wholesale dealer logic, Tally Prime sync, and multi-warehouse routing.
                </p>
                <div className="mt-4 space-y-2 text-xs text-neutral-300">
                  <div>✓ Wholesale tiered pricing</div>
                  <div>✓ Tally Prime / Zoho / SAP ERP sync</div>
                  <div>✓ Multi-warehouse stock logic</div>
                  <div>✓ 100% bespoke Next.js codebase</div>
                </div>
              </div>
              <a href="#consultation-form" className="mt-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-semibold text-center block cursor-pointer">
                Request Custom Plan
              </a>
            </div>

            {/* Multi-Vendor Tier */}
            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-neutral-400 uppercase">Marketplace Model</div>
                <h3 className="text-xl font-bold text-white mt-1">Multi-Vendor Marketplace</h3>
                <div className="mt-4 pb-4 border-b border-white/10">
                  <span className="text-3xl font-extrabold font-mono text-white">₹3,00,000+</span>
                  <div className="text-[11px] text-[#FF3B00] font-mono mt-1">Timeline: Approx. 12–24+ Weeks</div>
                </div>
                <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
                  Suitable for startups building regional or national multi-seller platforms with automated vendor commissions.
                </p>
                <div className="mt-4 space-y-2 text-xs text-neutral-300">
                  <div>✓ Vendor dashboard & KYC</div>
                  <div>✓ Automated commission splitting</div>
                  <div>✓ Seller payout disbursements</div>
                  <div>✓ Master platform admin panel</div>
                </div>
              </div>
              <a href="#consultation-form" className="mt-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-semibold text-center block cursor-pointer">
                Explore Marketplace
              </a>
            </div>
          </div>
        </section>

        {/* ── 15. H2: Shopify vs WooCommerce vs Custom eCommerce ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Platform Decision Guide
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Shopify vs WooCommerce vs Custom eCommerce in Patna
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              No single platform fits every business model. Here is an objective comparison to help you choose the ideal solution for your Patna business:
            </p>
          </div>

          <div className="overflow-x-auto bg-neutral-950/80 border border-white/10 rounded-3xl p-6 md:p-8">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-neutral-400 font-mono uppercase text-[11px]">
                  <th className="py-3 px-4">Solution</th>
                  <th className="py-3 px-4">Best For</th>
                  <th className="py-3 px-4">Key Advantages</th>
                  <th className="py-3 px-4">Limitations</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-neutral-300">
                <tr className="hover:bg-white/5 transition">
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                    <Icon icon="logos:shopify" width={18} /> Shopify
                  </td>
                  <td className="py-4 px-4">Startups & D2C Brands</td>
                  <td className="py-4 px-4 text-emerald-400">Fast launch, managed hosting security</td>
                  <td className="py-4 px-4 text-neutral-400">Less backend control, recurring monthly app fees</td>
                  <td className="py-4 px-4">
                    <Link href="/technology/shopify-development" className="text-[#FF3B00] hover:underline font-medium">
                      Shopify Services →
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                    <Icon icon="logos:woocommerce" width={18} /> WooCommerce
                  </td>
                  <td className="py-4 px-4">Content + Commerce Stores</td>
                  <td className="py-4 px-4 text-emerald-400">100% open source, WordPress ecosystem</td>
                  <td className="py-4 px-4 text-neutral-400">Requires manual hosting & security maintenance</td>
                  <td className="py-4 px-4">
                    <Link href="/technology/wordpress-development" className="text-[#FF3B00] hover:underline font-medium">
                      WooCommerce Services →
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                    <Icon icon="logos:nextjs-icon" width={18} /> Custom eCommerce
                  </td>
                  <td className="py-4 px-4">B2B, Tally Sync & High Volume</td>
                  <td className="py-4 px-4 text-[#FF3B00] font-bold">Sub-second speeds, zero transaction cuts, full control</td>
                  <td className="py-4 px-4 text-neutral-400">Higher initial upfront development investment</td>
                  <td className="py-4 px-4">
                    <Link href="/technology/nextjs-development" className="text-[#FF3B00] hover:underline font-medium">
                      Next.js Architecture →
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#FF3B00]" /> Multi-Vendor
                  </td>
                  <td className="py-4 px-4">Digital Marketplaces</td>
                  <td className="py-4 px-4 text-blue-400">Multiple seller portals, automated commission splits</td>
                  <td className="py-4 px-4 text-neutral-400">More complex architecture & merchant management</td>
                  <td className="py-4 px-4">
                    <Link href="/it-company-in-patna/software-development-company-in-patna" className="text-[#FF3B00] hover:underline font-medium">
                      Marketplace Dev →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-neutral-900/60 border border-white/10 rounded-2xl p-6">
            <h3 className="text-base font-bold text-white mb-2">Which eCommerce platform should you choose in Patna?</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              If you want to validate a brand rapidly with minimal initial development time, <strong>Shopify</strong> is a reliable choice. If your business is already centered around WordPress content and you want zero monthly software fees, <strong>WooCommerce</strong> is ideal. If you require custom wholesale pricing, Tally Prime ERP integration, multi-warehouse automated routing, high-volume transactions without revenue cuts, or proprietary workflows, a <strong>Custom Next.js & Node.js eCommerce build</strong> is the most profitable long-term investment.
            </p>
          </div>
        </section>

        {/* ── 16. H2: eCommerce SEO & Search-Friendly Development in Patna ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Search className="w-3.5 h-3.5" /> Organic Discovery in Patna
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              eCommerce SEO & Local Search Optimization in Patna
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              An online store that cannot be found on Google doesn't generate sales. We build search-engine friendly architecture, Product Schema, Core Web Vitals, and AI-search visibility directly into your codebase. Learn about our <Link href="/seo-services-in-patna" className="text-[#FF3B00] underline hover:text-white">SEO services in Patna</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FF3B00]/20 text-[#FF3B00] flex items-center justify-center mb-4">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Technical eCommerce SEO</h3>
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  We build search-engine friendly architecture from the ground up:
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-neutral-400">
                  <div>✓ Clean semantic URLs & H1/H2 hierarchy</div>
                  <div>✓ Product & Category Schema JSON-LD</div>
                  <div>✓ Dynamic XML sitemaps & robots.txt</div>
                  <div>✓ Canonical tags avoiding duplicate filter content</div>
                  <div>✓ Sub-second TTFB & Core Web Vitals 90+</div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Search & AI-Friendly Architecture</h3>
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  Optimized for search engines and AI assistants to accurately surface your products:
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-neutral-400">
                  <div>✓ Crawlable navigation & logical category hierarchy</div>
                  <div>✓ FAQPage schema embedded in server HTML</div>
                  <div>✓ Structured product specification attributes</div>
                  <div>✓ High mobile rendering stability & fast TTFB</div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Entity Authority & Local Schema</h3>
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  Entity authority signals structured so search engines recognize your brand:
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-neutral-400">
                  <div>✓ Organization & LocalBusiness schema graphs in Patna</div>
                  <div>✓ Verified brand entity citations in Bihar</div>
                  <div>✓ Accurate priceCurrency & availability tags</div>
                  <div>✓ High-authority internal linking network</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 17. H2: eCommerce Development Case Studies in Patna & Bihar ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Award className="w-3.5 h-3.5" /> Proven Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              eCommerce Development Case Studies in Patna & Bihar
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              Explore how Webflora Technologies engineered scalable online stores and platforms for businesses in Patna and Bihar that delivered measurable commercial outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Case Study 1: RGM Services */}
            <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#FF3B00]/30 transition">
              <div>
                <div className="text-xs font-mono uppercase text-[#FF3B00] mb-2">Custom Product & Business Platform</div>
                <h3 className="text-xl font-bold text-white">RGM Services Platform</h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-3 leading-relaxed">
                  <strong>Business Problem:</strong> RGM Services needed a scalable digital product catalogue with admin content control and direct WhatsApp customer enquiry routing without third-party marketplace fees.
                </p>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                  <strong>Solution Built:</strong> Developed a custom Next.js storefront with Node.js/Express APIs, Cloudinary image CDN, JWT role-based admin panel, and instant WhatsApp enquiry integration.
                </p>
                <div className="mt-5 space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-neutral-400">Mobile Page Load:</span>
                    <span className="font-mono text-emerald-400 font-bold">0.9 Seconds</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-neutral-400">Direct Enquiries:</span>
                    <span className="font-mono text-[#FF3B00] font-bold">+240% Increase</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-neutral-400">Tech Stack:</span>
                    <span className="font-mono text-white">Next.js + Node.js + Express + MongoDB</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-white/5">
                <Link href="/case-studies" className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF3B00] hover:underline">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Case Study 2: Feedrani D2C */}
            <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#FF3B00]/30 transition">
              <div>
                <div className="text-xs font-mono uppercase text-[#FF3B00] mb-2">D2C Farm-to-Fork Brand</div>
                <h3 className="text-xl font-bold text-white">Feedrani D2C Online Store</h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-3 leading-relaxed">
                  <strong>Business Problem:</strong> High shopping cart abandonment and slow mobile checkout on a previous platform were hurting ad campaign ROAS.
                </p>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                  <strong>Solution Built:</strong> Engineered a lightweight Next.js storefront featuring 1-click UPI checkout, automated Shiprocket AWB creation, and WhatsApp order alerts.
                </p>
                <div className="mt-5 space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-neutral-400">Checkout Speed:</span>
                    <span className="font-mono text-emerald-400 font-bold">0.8 Seconds</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-neutral-400">Cart Conversion Lift:</span>
                    <span className="font-mono text-[#FF3B00] font-bold">+184% Improvement</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-neutral-400">Tech Stack:</span>
                    <span className="font-mono text-white">Next.js + Razorpay + Shiprocket API</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-white/5">
                <Link href="/case-studies" className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF3B00] hover:underline">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Case Study 3: Krisivarsha Agri */}
            <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#FF3B00]/30 transition">
              <div>
                <div className="text-xs font-mono uppercase text-[#FF3B00] mb-2">B2B Wholesale Portal</div>
                <h3 className="text-xl font-bold text-white">Krisivarsha Agri Portal</h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-3 leading-relaxed">
                  <strong>Business Problem:</strong> Managing wholesale orders from 200+ regional dealers over phone and WhatsApp caused inventory discrepancies and billing delays.
                </p>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                  <strong>Solution Built:</strong> Built a custom B2B portal with dealer-specific tiered pricing, bulk CSV ordering, Minimum Order Quantities (MOQs), and live Tally Prime sync.
                </p>
                <div className="mt-5 space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-neutral-400">Order Processing:</span>
                    <span className="font-mono text-emerald-400 font-bold">4.5x Faster</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-neutral-400">Manual Billing Errors:</span>
                    <span className="font-mono text-[#FF3B00] font-bold">Reduced by 92%</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-neutral-400">Tech Stack:</span>
                    <span className="font-mono text-white">Node.js + PostgreSQL + Tally Sync</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-white/5">
                <Link href="/case-studies" className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF3B00] hover:underline">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 18. H2: Why Choose Webflora Technologies? ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <Award className="w-3.5 h-3.5" /> Our Commitment in Patna
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Why Choose Webflora Technologies in Patna?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              Selecting the right eCommerce development company is a high-impact business decision. Here is how Webflora provides measurable commercial value to businesses in Patna and Bihar:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Proven Local & National Projects",
                desc: "We showcase authentic case studies across D2C brands, B2B wholesale portals, and retail platforms in Bihar and India with real commercial outcomes."
              },
              {
                title: "Modern Full-Stack Engineering",
                desc: "We build on Next.js 15, React, Node.js, Express, PostgreSQL, MongoDB, and Redis to achieve sub-second speeds and bulletproof stability."
              },
              {
                title: "Tally ERP & Courier Integration",
                desc: "We connect your online store seamlessly with Razorpay/UPI, Shiprocket/Delhivery logistics in Patna, Tally Prime ERP, and WhatsApp automation."
              },
              {
                title: "100% Code Ownership",
                desc: "For custom development projects, you own 100% of your source code, database, and customer data with zero monthly revenue cuts."
              },
              {
                title: "Direct In-Person Patna Meetings",
                desc: "You collaborate directly with senior eCommerce engineers at our Patna development office rather than passing messages through layers of account managers."
              },
              {
                title: "Post-Launch Growth & Support",
                desc: "We support your store after go-live with regular security patching, speed audits, conversion rate optimization (CRO), and feature development."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6">
                <div className="w-8 h-8 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] flex items-center justify-center font-bold font-mono text-xs mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 19. H2: Top eCommerce Website Development Company in Patna & Bihar ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <MapPin className="w-3.5 h-3.5" /> Patna & Bihar eCommerce Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Top eCommerce Website Development Company in Patna
            </h2>
            <div className="mt-6 text-left sm:text-center space-y-3 text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
              <p>
                <strong className="text-white font-medium">Webflora Technologies</strong> is the leading eCommerce website development company based in Patna, Bihar. Our team works with startups, retailers, D2C brands, manufacturers, wholesalers and established businesses across Patna, Bihar, and all over India that want to sell products online or upgrade an existing store.
              </p>
              <p>
                Depending on your specific goals, we develop Shopify stores, WooCommerce websites, and custom eCommerce platforms using cutting-edge Next.js, React, Node.js, and Express architectures.
              </p>
              <p>
                Our eCommerce development services include product catalogues, shopping carts, one-click UPI checkout systems, payment gateway integration, courier shipping APIs, inventory management, customer accounts, Tally Prime CRM/ERP integration and custom admin dashboards.
              </p>
              <p>
                Businesses in Patna can partner with Webflora whether they are launching their first online storefront, migrating from an older slow platform, or building an advanced B2B wholesale portal or multi-vendor marketplace.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Regional Stronghold in Patna & Bihar */}
            <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-black border border-[#FF3B00]/30 rounded-3xl p-8 relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/15 text-[#FF3B00] text-xs font-mono uppercase mb-4 border border-[#FF3B00]/30">
                <MapPin className="w-3.5 h-3.5" /> Regional Stronghold
              </div>
              <h3 className="text-2xl font-bold text-white">
                <Link href="/it-company-in-patna" className="hover:text-[#FF3B00] transition">
                  eCommerce Website Development Across Patna Localities
                </Link>
              </h3>
              <p className="text-neutral-300 text-sm mt-3 leading-relaxed">
                As the leading eCommerce website development company based in Patna, Bihar, we empower regional manufacturers, retailers, and wholesalers to expand into national online markets.
              </p>
              <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                If you are looking for an <strong className="text-white">eCommerce website developer in Patna</strong> or an <strong className="text-white">eCommerce development company in Bihar</strong>, meet our technical team directly at our Patna office for face-to-face consultation.
              </p>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-xs font-mono uppercase text-neutral-400 mb-2">Key Patna & Bihar Service Areas:</div>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {["Patna", "Boring Road", "Bailey Road", "Kankarbagh", "Danapur", "Rajendra Nagar", "Fraser Road", "Exhibition Road", "Patliputra", "Raja Bazar", "Saguna More", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga", "Purnia", "Begusarai"].map((city) => (
                    <span key={city} className="bg-white/5 border border-white/10 px-2.5 py-1 rounded text-neutral-300">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Serving Clients Across India */}
            <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-black border border-white/10 rounded-3xl p-8 relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 text-blue-400 text-xs font-mono uppercase mb-4 border border-blue-500/30">
                <Globe className="w-3.5 h-3.5" /> Serving Clients Across India
              </div>
              <h3 className="text-2xl font-bold text-white">
                <Link href="/locations" className="hover:text-blue-400 transition">
                  Nationwide Remote Engineering
                </Link>
              </h3>
              <p className="text-neutral-300 text-sm mt-3 leading-relaxed">
                Headquartered in Patna, we also work with ambitious digital brands across India including Delhi NCR, Mumbai, Bangalore, Pune, Hyderabad, Chennai, and Kolkata.
              </p>
              <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                Our remote engineering workflow includes weekly sprint video demos, private staging URLs, dedicated communication channels, and real-time project tracking.
              </p>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-xs font-mono uppercase text-neutral-400 mb-2">Major Commercial Hubs:</div>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {[
                    { name: "Delhi NCR", link: "/locations/delhi" },
                    { name: "Mumbai", link: "/locations/mumbai" },
                    { name: "Bangalore", link: "/locations/bangalore" },
                    { name: "Pune", link: "/locations/pune" },
                    { name: "Hyderabad", link: "/locations/hyderabad" },
                    { name: "Chennai", link: "/locations/chennai" },
                    { name: "Kolkata", link: "/locations/kolkata" },
                  ].map((loc) => (
                    <Link key={loc.name} href={loc.link} className="bg-white/5 hover:bg-white/15 border border-white/10 px-2.5 py-1 rounded text-neutral-300 hover:text-white transition">
                      {loc.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 20. H2: Frequently Asked Questions in Patna ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase tracking-wider mb-4 border border-[#FF3B00]/20">
              <HelpCircle className="w-3.5 h-3.5" /> Clarifications & Answers
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Frequently Asked Questions About eCommerce Development in Patna
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light">
              Clear, transparent answers to common questions about eCommerce website development costs, timelines, platforms, Tally ERP sync, and logistics in Patna and Bihar.
            </p>
          </div>

          <FaqAccordion faqs={faqs} />
        </section>

        {/* ── 21. H2: Start Your eCommerce Project in Patna ── */}
        <section id="consultation-form" className="py-16 md:py-24 border-t border-white/5">
          <div className="bg-gradient-to-br from-neutral-950 via-[#0A0A0A] to-neutral-950 border border-[#FF3B00]/30 rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF3B00]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B00]/10 text-[#FF3B00] text-xs font-mono uppercase mb-4 border border-[#FF3B00]/30">
                  <Sparkles className="w-3.5 h-3.5" /> Let's Build in Patna
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                  Start Your eCommerce Project in Patna
                </h2>
                <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
                  Looking for the top eCommerce website development company in Patna for your retail or wholesale business? Tell us your requirements and get a complete project scope, architecture plan, and development estimate.
                </p>
                <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                  We review what you sell, who your target customers are, and what business integrations you need. Meet our technical team at our Patna office or receive an itemized proposal within 2 business hours.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span>Free technical architecture consultation & store roadmap in Patna</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span>Fixed timeline & transparent milestone-based quote</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span>Direct phone, WhatsApp & in-person access to Patna lead developers</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-6">
                  <div>
                    <div className="text-[11px] text-neutral-400 uppercase font-mono">Patna Direct Phone Line</div>
                    <a href="tel:+918540814729" className="text-sm font-bold text-white hover:text-[#FF3B00] transition">
                      +91 8540814729
                    </a>
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400 uppercase font-mono">Email Inquiries</div>
                    <a href="mailto:hello@webfloratechnologies.com" className="text-sm font-bold text-white hover:text-[#FF3B00] transition">
                      hello@webfloratechnologies.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Form Card */}
              <div className="lg:col-span-6">
                <ConsultationForm />
              </div>
            </div>
          </div>
        </section>

        {/* ── Master Internal Linking Ecosystem ── */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="bg-neutral-950/90 border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-neutral-300 text-xs font-mono uppercase mb-3 border border-white/10">
                <Globe className="w-3.5 h-3.5 text-[#FF3B00]" /> Webflora Digital Network
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Explore Related Services, Technologies & Solutions
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2">
                Discover our interconnected digital engineering ecosystem across Bihar and India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-xs">
              
              {/* Column 1: Core Services */}
              <div className="space-y-3">
                <h4 className="font-bold text-white uppercase font-mono tracking-wider text-xs flex items-center gap-2 pb-2 border-b border-white/10">
                  <Briefcase className="w-4 h-4 text-[#FF3B00]" /> Core Development Services
                </h4>
                <div className="space-y-2">
                  <Link href="/seo-services-in-patna" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → SEO Services in Patna
                  </Link>
                  <Link href="/it-company-in-patna/website-development-company-in-patna" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Website Development Company in Patna
                  </Link>
                  <Link href="/it-company-in-patna/mobile-app-development-company-in-patna" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Mobile App Development Company in Patna
                  </Link>
                  <Link href="/it-company-in-patna/software-development-company-in-patna" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Custom Software Development in Patna
                  </Link>
                  <Link href="/it-company-in-patna/ai-automation-company-in-patna" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → AI Automation & Workflow Integration
                  </Link>
                  <Link href="/it-company-in-patna/digital-marketing-agency-in-patna" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Digital Marketing Agency in Patna
                  </Link>
                  <Link href="/it-company-in-patna/ai-chatbot-company-in-patna" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → AI Chatbot Development in Patna
                  </Link>
                  <Link href="/attendance-management-software" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Attendance Management Software
                  </Link>
                </div>
              </div>

              {/* Column 2: Technologies & Comparisons */}
              <div className="space-y-3">
                <h4 className="font-bold text-white uppercase font-mono tracking-wider text-xs flex items-center gap-2 pb-2 border-b border-white/10">
                  <Code2 className="w-4 h-4 text-[#FF3B00]" /> Technologies & Platforms
                </h4>
                <div className="space-y-2">
                  <Link href="/technology/shopify-development" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Shopify Store Development
                  </Link>
                  <Link href="/technology/wordpress-development" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → WordPress & WooCommerce Development
                  </Link>
                  <Link href="/technology/nextjs-development" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Next.js Web Development
                  </Link>
                  <Link href="/technology/react-development" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → React.js Frontend Engineering
                  </Link>
                  <Link href="/technology/flutter-development" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Flutter Mobile App Development
                  </Link>
                  <Link href="/compare/shopify-vs-woocommerce" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Shopify vs WooCommerce Comparison
                  </Link>
                  <Link href="/compare/wordpress-vs-nextjs" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → WordPress vs Next.js Architecture
                  </Link>
                  <Link href="/compare/custom-software-vs-saas" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Custom Software vs SaaS Cost Breakdown
                  </Link>
                </div>
              </div>

              {/* Column 3: Industries & Guides */}
              <div className="space-y-3">
                <h4 className="font-bold text-white uppercase font-mono tracking-wider text-xs flex items-center gap-2 pb-2 border-b border-white/10">
                  <Building2 className="w-4 h-4 text-[#FF3B00]" /> Industries & Resources
                </h4>
                <div className="space-y-2">
                  <Link href="/industries/retail" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Retail & eCommerce Digital Transformation
                  </Link>
                  <Link href="/industries/manufacturing" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Manufacturing ERP & B2B Portals
                  </Link>
                  <Link href="/pricing-guides/website-development-cost-in-patna" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Website Development Cost in Patna
                  </Link>
                  <Link href="/pricing-guides/mobile-app-cost-in-india" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Mobile App Development Cost in India
                  </Link>
                  <Link href="/case-studies" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Verified Client Case Studies
                  </Link>
                  <Link href="/why-webflora" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Why Choose Webflora Technologies
                  </Link>
                  <Link href="/contact" className="block text-neutral-300 hover:text-[#FF3B00] transition">
                    → Contact Our Engineering Team
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
