import React from "react";
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
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Award,
  Phone,
  PhoneCall,
  Target,
  FileText,
  DollarSign,
  Users,
  Check,
  Cpu,
  Globe,
  Code2
} from "lucide-react";
import ClientMarquee from "../../Components/ClientMarquee";
import GoogleReviewsSection from "../../Components/GoogleReviewsSection";
import {
  ServiceDeepDiveWidget,
  GrowthGuideWidget,
  FaqAccordionWidget,
  ConsultationFormWidget
} from "./DigitalMarketingInteractiveWidgets";

export const dynamic = "force-static";

export default function DigitalMarketingPatnaPage() {
  const marketingServices = [
    {
      id: "seo",
      title: "Search Engine Optimization (SEO)",
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
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-60"
        style={{
          background: "radial-gradient(circle at 10% 15%, rgba(255, 59, 0, 0.08) 0%, transparent 45%), radial-gradient(circle at 90% 45%, rgba(37, 99, 235, 0.06) 0%, transparent 45%), radial-gradient(circle at 15% 80%, rgba(255, 59, 0, 0.06) 0%, transparent 50%)"
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">

        {/* ── HIGH-CONVERTING 2-COLUMN HERO SECTION (MATCHING APP DEV PAGE TEMPLATE) ── */}
        <section className="relative flex items-center justify-center overflow-hidden bg-black pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
          {/* Background Grids & Ambient Glow */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div className="creative-grid-bg opacity-40" />
            <div className="creative-grid-dots opacity-25" />
            <div
              className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                background: "radial-gradient(circle at 80% 25%, rgba(255, 59, 0, 0.12) 0%, transparent 50%), radial-gradient(circle at 15% 85%, rgba(37, 99, 235, 0.08) 0%, transparent 45%)"
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtext, Badges & CTAs */}
            <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-5 text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 w-fit">
                <span className="text-orange-300 text-xs">⭐</span>
                <span className="text-[11px] font-mono font-bold tracking-wider text-orange-300 uppercase">
                  Top Digital Marketing Agency in Patna
                </span>
              </div>

              {/* Dominant High-Impact Heading - LCP Priority */}
              <h1 className="font-display font-black tracking-tight leading-[1.08] text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-white w-full">
                Digital Marketing Agency in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#FF3B00] to-red-500">
                  Patna
                </span>
              </h1>

              {/* Crisp, high-contrast Value Prop Subtext */}
              <p className="text-neutral-100 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
                <strong className="text-white font-medium">Webflora Technologies</strong> is a premier digital marketing agency in Patna engineering high-intent customer acquisition funnels through <Link href="/seo-services-in-patna" className="text-white hover:text-[#ff3b00] underline font-medium">SEO</Link>, <Link href="/it-company-in-patna/website-development-company-in-patna" className="text-white hover:text-[#ff3b00] underline font-medium">web portals</Link>, Google Ads, Meta Ads, and <Link href="/it-company-in-patna/ai-automation-company-in-patna" className="text-white hover:text-[#ff3b00] underline font-medium">AI automation</Link> for businesses across Bihar & India.
              </p>

              {/* Quick Value Metrics Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {[
                  { name: "100% Attribution Transparency", icon: ShieldCheck },
                  { name: "ROI-Focused Lead Funnels", icon: Zap },
                  { name: "Google & Meta Certified", icon: Award },
                  { name: "90+ Page Performance", icon: Sparkles }
                ].map((pill, i) => {
                  const IconC = pill.icon;
                  return (
                    <div
                      key={i}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-white/10 text-neutral-200 text-xs font-medium"
                    >
                      <IconC className="w-3.5 h-3.5 text-orange-300 shrink-0" />
                      <span>{pill.name}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2 sm:pt-3">
                <a
                  href="#consultation"
                  aria-label="Get Free Marketing Consultation"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#d93200] hover:bg-[#c22d00] text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-full transition-all duration-300 shadow-[0_4px_25px_rgba(217,50,0,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/918540814729?text=Hi%20Webflora,%20I%20want%20to%20discuss%20a%20digital%20marketing%20strategy%20in%20Patna."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Talk to Webflora on WhatsApp"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-900 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  <svg className="w-4 h-4 shrink-0 fill-emerald-400" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.546 1.897.834 2.8.835 3.183 0 5.768-2.587 5.769-5.766.001-3.181-2.584-5.769-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.146-.541-1.859-.769-3.053-2.661-3.146-2.784-.093-.122-.75-1-.75-1.908 0-.909.477-1.356.647-1.541.17-.184.372-.231.496-.231.124 0 .248.002.355.007.113.006.264-.043.413.315.153.366.523 1.277.569 1.37.046.092.077.2.015.323-.062.124-.093.2-.185.308-.093.108-.195.241-.278.324-.093.092-.19.193-.082.378.108.185.481.794 1.033 1.285.711.633 1.31.829 1.496.921.185.093.294.077.402-.046.108-.123.463-.54.587-.725.123-.185.247-.154.416-.092.17.062 1.08.51 1.266.602.185.093.308.139.354.216.047.078.047.452-.097.857z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>

                <a
                  href="tel:+918540814729"
                  aria-label="Call Webflora Directly"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-900 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-orange-300 shrink-0" />
                  <span>Call Us Directly</span>
                </a>
              </div>
            </div>

            {/* Right Column: Dynamic Tech/Marketing Stack & SLA Dashboard */}
            <div className="lg:col-span-5 flex flex-col gap-4 relative">
              {/* Marketing Stack Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950 border border-white/10 shadow-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-orange-300 font-bold">
                    Engineered Marketing Stack
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">
                    ● Live Attribution
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { name: "Google Ads", icon: Target, color: "text-blue-400" },
                    { name: "Meta Ads", icon: Share2, color: "text-blue-500" },
                    { name: "Tech SEO", icon: Search, color: "text-emerald-400" },
                    { name: "GA4 Events", icon: BarChart3, color: "text-amber-400" },
                    { name: "Local 3-Pack", icon: MapPin, color: "text-rose-400" },
                    { name: "AI Search", icon: Sparkles, color: "text-orange-400" }
                  ].map((tech, idx) => {
                    const TechIcon = tech.icon;
                    return (
                      <div
                        key={idx}
                        className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-zinc-900 border border-white/5 hover:border-orange-500/40 hover:bg-zinc-800 transition-all duration-300"
                      >
                        <TechIcon className={`w-6 h-6 mb-1 ${tech.color}`} />
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
                  <p className="text-2xl sm:text-3xl font-black text-white font-display">150+</p>
                  <p className="text-[10px] font-mono uppercase text-neutral-300 tracking-wider font-semibold">Clients Scaled</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-emerald-400 font-display">4.9 ★</p>
                  <p className="text-[10px] font-mono uppercase text-neutral-300 tracking-wider font-semibold">Google Rating</p>
                </div>
                <div className="col-span-2 h-[1px] bg-white/5" />
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white font-display">200+</p>
                  <p className="text-[10px] font-mono uppercase text-neutral-300 tracking-wider font-semibold">Campaigns Run</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-orange-300 font-display">100%</p>
                  <p className="text-[10px] font-mono uppercase text-neutral-300 tracking-wider font-semibold">ROI Attribution</p>
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
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ff3b00]/20 border border-[#ff3b00]/40 text-[#ff3b00] text-[10px] sm:text-xs font-mono uppercase tracking-wider mb-3 sm:mb-4 font-bold">
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
                <span className="text-[10px] sm:text-xs font-mono text-neutral-300 mr-1 sm:mr-2 w-full sm:w-auto mb-1 sm:mb-0 font-medium">Explore Core Disciplines:</span>
                {[
                  { label: "SEO", link: "#services-deep-dive" },
                  { label: "Local SEO & Maps", link: "#services-deep-dive" },
                  { label: "Google Ads (PPC)", link: "#services-deep-dive" },
                  { label: "Meta Ads (FB/IG)", link: "#services-deep-dive" },
                  { label: "Social Media (SMM)", link: "#services-deep-dive" },
                  { label: "Conversion Funnels", link: "#services-deep-dive" }
                ].map((pill, idx) => (
                  <a
                    key={idx}
                    href={pill.link}
                    className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-[#ff3b00]/20 text-[11px] sm:text-xs font-medium text-neutral-200 hover:text-white border border-white/10 hover:border-[#ff3b00]/40 transition-all"
                  >
                    {pill.label}
                  </a>
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
              <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light px-1 sm:px-0">
                We track the metrics relevant to each campaign, including organic visibility, qualified enquiries, calls, conversion rates, cost per lead, advertising spend and attributed revenue where reliable tracking is available.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff3b00]/30 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-3 sm:mb-4">
                  <Search className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">Organic Search Visibility</h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
                  We monitor impressions, first-page keyword rankings, and click-through rates (CTR) directly within verified Google Search Console data.
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff3b00]/30 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-3 sm:mb-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">Qualified Inquiries & Calls</h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
                  Every lead form fill, WhatsApp conversation click, and direct telephone call is tracked through Google Tag Manager (GTM) custom event triggers.
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff3b00]/30 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-3 sm:mb-4">
                  <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">Cost Per Lead (CPL)</h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
                  We calculate exact cost-per-acquisition across Google and Meta ad accounts by dividing verified inquiries by total active media spend.
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff3b00]/30 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-3 sm:mb-4">
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">Attributed Revenue</h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
                  Where CRM or sales management tools are connected, we track incoming leads through final admission or booking stage for true ROI visibility.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── CORE DIGITAL MARKETING SERVICES (DEEP DIVE WIDGET) ── */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#080808] border-b border-white/10" id="services-deep-dive">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-1.5 sm:mb-2">
                Service Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                Digital Marketing Services in Patna
              </h2>
              <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light px-1 sm:px-0">
                Explore our core marketing disciplines. Each channel is configured around your business model, customer journey, and commercial goals.
              </p>
            </div>

            <ServiceDeepDiveWidget marketingServices={marketingServices} />
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
              <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light px-1 sm:px-0">
                Search is expanding beyond traditional blue links. Users increasingly interact with AI-powered search and answer experiences to discover businesses, products and services.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-12">
              
              {/* Card 1: AEO */}
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 relative overflow-hidden">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ff3b00]/10 border border-[#ff3b00]/30 text-orange-300 text-[10px] sm:text-xs font-mono uppercase tracking-wider mb-3 sm:mb-4 font-bold">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  <span>AEO — Answer Engine Optimization</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                  Direct Answer Synthesis
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-4 sm:mb-6">
                  We structure content around clear questions, direct answers, supporting explanations and relevant entities so information is easier for answer-oriented search systems (like Google AI Overviews and Perplexity) to understand and surface.
                </p>
                <div className="space-y-2 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Question-and-answer format optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Structured Schema.org FAQ and HowTo markup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Clean factual bullet points and comparative tables</span>
                  </div>
                </div>
              </div>

              {/* Card 2: GEO */}
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 relative overflow-hidden">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] sm:text-xs font-mono uppercase tracking-wider mb-3 sm:mb-4 font-bold">
                  <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  <span>GEO — Generative Engine Optimization</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                  Entity Clarity & AI Citations
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-4 sm:mb-6">
                  We focus on entity clarity, consistent business information, original expertise, supporting evidence and structured content to improve how a brand can be understood and cited across generative search experiences (like ChatGPT Search and Claude).
                </p>
                <div className="space-y-2 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Verifiable business entity details (NAP, founders, registration)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>First-party case studies and original research</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Internal link graphs connecting topical concepts</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-black/40 border border-white/5">
              <h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold mb-2.5 sm:mb-3">
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
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] sm:text-xs text-neutral-200 font-mono">
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
                  <div className="text-[10px] sm:text-xs text-orange-300 font-mono uppercase mb-1 font-bold">Key Observation</div>
                  <p className="text-neutral-200 text-xs sm:text-sm font-light leading-relaxed">
                    Most businesses in Patna have fragmented digital footprints — active social media without lead attribution, unoptimized Google Business Profiles, or slow websites that lose ad traffic.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-neutral-200 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                <p>
                  Through our work with businesses and organizations in Patna, we commonly see the same digital-growth challenges: businesses have websites but limited organic visibility, social media activity without measurable lead attribution, incomplete Google Business Profiles, and advertising campaigns that are not connected to conversion tracking.
                </p>
                <p>
                  Our approach is to connect these areas rather than treat them as separate activities.
                </p>
                <p className="p-3.5 sm:p-4 rounded-xl bg-black/40 border border-white/5 text-neutral-300 text-xs sm:text-sm">
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
              <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light px-1 sm:px-0">
                How a premier coaching institute in Patna scaled student admissions through connected SEO, Local Google Maps, and high-intent advertising.
              </p>
            </div>

            <div className="p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-6 sm:mb-8">
                
                {/* Meta details */}
                <div className="lg:col-span-4 space-y-3 sm:space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ff3b00]/10 border border-[#ff3b00]/30 text-orange-300 text-[10px] sm:text-xs font-mono uppercase font-bold">
                    <span>Education / Coaching</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Team Excellent Career Institute
                  </h3>
                  <div className="text-xs text-neutral-300 space-y-1 font-mono">
                    <div>Location: <strong className="text-white">Patna, Bihar</strong></div>
                    <div>Services: <strong className="text-white">SEO + Local SEO + Ads + Website + AEO/GEO</strong></div>
                    <div>Timeline: <strong className="text-white">Multi-Year Strategic Growth</strong></div>
                  </div>
                  <Link
                    href="/case-studies/complete-website-rebuild-optimization-for-team-excellent-career-institute"
                    aria-label="Read Full Case Study: Team Excellent Career Institute"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#d93200] hover:bg-[#c22d00] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </Link>
                </div>

                {/* Challenge, Strategy, Implementation */}
                <div className="lg:col-span-8 space-y-4 sm:space-y-6 text-xs sm:text-sm font-light">
                  
                  <div className="p-3.5 sm:p-4 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[11px] sm:text-xs font-mono uppercase text-red-400 font-bold block mb-1">Challenge</span>
                    <p className="text-neutral-200 leading-relaxed">
                      Low organic search visibility for competitive medical & engineering coaching keywords across Patna, high mobile bounce rates on legacy web pages, and heavy reliance on offline hoarding banners without conversion attribution.
                    </p>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[11px] sm:text-xs font-mono uppercase text-orange-300 font-bold block mb-1">Strategy & Implementation</span>
                    <p className="text-neutral-200 leading-relaxed">
                      Webflora re-architected the institute&apos;s digital ecosystem: deployed a sub-second Next.js web portal, optimized Google Business Profile for local map searches, targeted high-intent seasonal admission keywords on Google Ads, ran Meta Advantage+ campaigns for upcoming batches, and implemented GTM event tracking.
                    </p>
                  </div>

                  {/* Verified Results Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 pt-1 sm:pt-2">
                    <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-emerald-400 mb-0.5">180+</div>
                      <div className="text-[10px] sm:text-[11px] text-neutral-300 font-medium">Monthly Verified Admissions Inquiries</div>
                    </div>
                    <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-white mb-0.5">Top 3</div>
                      <div className="text-[10px] sm:text-[11px] text-neutral-300 font-medium">Google Local Rankings Across Patna</div>
                    </div>
                    <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-orange-300 mb-0.5">62%</div>
                      <div className="text-[10px] sm:text-[11px] text-neutral-300 font-medium">Lower Cost Per Inquiry vs Offline Ads</div>
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
              <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light px-1 sm:px-0">
                Understanding the distinct roles of organic search and paid advertising ensures you allocate marketing budget effectively based on your business stage.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.02]">
              <table className="w-full text-left border-collapse min-w-[580px] sm:min-w-[650px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-[11px] sm:text-sm font-mono uppercase tracking-wider text-neutral-200 font-semibold">
                    <th scope="col" className="p-3.5 sm:p-5 w-1/4">Channel</th>
                    <th scope="col" className="p-3.5 sm:p-5 w-1/3">Best Suited For</th>
                    <th scope="col" className="p-3.5 sm:p-5 w-1/3 text-orange-300">Main Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                  <tr>
                    <td className="p-3.5 sm:p-5 font-bold text-white">SEO</td>
                    <td className="p-3.5 sm:p-5 text-neutral-200">Long-term search visibility & authority</td>
                    <td className="p-3.5 sm:p-5 text-neutral-100 font-medium">Compounding organic traffic without per-click cost</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-5 font-bold text-white">Google Ads (PPC)</td>
                    <td className="p-3.5 sm:p-5 text-neutral-200">High-intent transactional searches</td>
                    <td className="p-3.5 sm:p-5 text-neutral-100 font-medium">Immediate paid visibility for urgent customer demands</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-5 font-bold text-white">Local SEO</td>
                    <td className="p-3.5 sm:p-5 text-neutral-200">Local businesses, clinics & storefronts</td>
                    <td className="p-3.5 sm:p-5 text-neutral-100 font-medium">Google Maps / Local 3-Pack discovery and calls</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-5 font-bold text-white">Meta Ads</td>
                    <td className="p-3.5 sm:p-5 text-neutral-200">Demand generation & lifestyle branding</td>
                    <td className="p-3.5 sm:p-5 text-neutral-100 font-medium">Granular demographic & interest-based audience targeting</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-5 font-bold text-white">Social Media</td>
                    <td className="p-3.5 sm:p-5 text-neutral-200">Brand authority, community & awareness</td>
                    <td className="p-3.5 sm:p-5 text-neutral-100 font-medium">Long-term customer trust, reviews, and video engagement</td>
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
              <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light px-1 sm:px-0">
                Here are the practical reasons businesses and startups partner with Webflora Technologies for digital growth in Bihar and across India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
              
              <div className="p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff3b00]/30 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-3.5 sm:mb-5">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">Marketing + Technology</h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
                  We combine digital marketing with web development and technical implementation so your campaigns are supported by fast, high-converting digital assets.
                </p>
              </div>

              <div className="p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff3b00]/30 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-3.5 sm:mb-5">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">Local Market Understanding</h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
                  We understand regional search behaviors and consumer intent patterns across Patna, Muzaffarpur, Gaya, and commercial markets in Bihar.
                </p>
              </div>

              <div className="p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff3b00]/30 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-3.5 sm:mb-5">
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">Measurable Campaigns</h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
                  We track meaningful business metrics — verified inquiries, calls, conversion rates, and revenue attribution — rather than relying only on vanity impressions.
                </p>
              </div>

              <div className="p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff3b00]/30 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-3.5 sm:mb-5">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">AI & Search Evolution</h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
                  Our strategy considers traditional search engines, answer engines (AEO), and generative search experiences (GEO) so your brand remains visible as search evolves.
                </p>
              </div>

              <div className="p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff3b00]/30 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-3.5 sm:mb-5">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">Transparent Reporting</h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
                  Clients receive clear reporting on agreed campaign metrics, keyword ranking progress, ad spend breakdowns, and verified lead counts.
                </p>
              </div>

              <div className="p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff3b00]/30 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-3.5 sm:mb-5">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">Direct Implementation</h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
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
              <p className="text-neutral-200 text-xs sm:text-sm md:text-base font-light leading-relaxed px-1 sm:px-0">
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
                <div key={i} className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-neutral-200 text-[11px] sm:text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff3b00] mx-auto mb-1.5 sm:mb-2" />
                  <span>{loc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PATNA DIGITAL GROWTH GUIDE (GROWTH GUIDE WIDGET) ── */}
        <section className="py-12 sm:py-16 md:py-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-1.5 sm:mb-2">
                Knowledge Resource
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                Digital Marketing in Patna: A Practical Guide for Businesses
              </h2>
              <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light px-1 sm:px-0">
                Explore key chapters answering how businesses in Patna can systematically build, measure, and scale customer acquisition online.
              </p>
            </div>

            <GrowthGuideWidget guideChapters={guideChapters} />
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
              <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light px-1 sm:px-0">
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
                    <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
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
              <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light px-1 sm:px-0">
                Webflora Technologies is an MSME-registered technology and digital marketing company based in Patna, Bihar. The company provides digital marketing, SEO, website development, software development, AI automation and related digital services to businesses in Patna and clients across India.
              </p>
            </div>

            {/* Entity Facts Grid with WCAG AAA Contrast */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 mb-8 sm:mb-12">
              <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <div className="text-neutral-300 text-[10px] sm:text-[11px] uppercase font-mono mb-0.5 sm:mb-1 font-semibold">Founded</div>
                <div className="text-white font-bold text-xs sm:text-base">2021</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <div className="text-neutral-300 text-[10px] sm:text-[11px] uppercase font-mono mb-0.5 sm:mb-1 font-semibold">Location</div>
                <div className="text-white font-bold text-xs sm:text-sm">Patna, Bihar</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <div className="text-neutral-300 text-[10px] sm:text-[11px] uppercase font-mono mb-0.5 sm:mb-1 font-semibold">Registration</div>
                <div className="text-white font-mono text-[10px] sm:text-xs truncate font-bold">UDYAM-BR-26</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <div className="text-neutral-300 text-[10px] sm:text-[11px] uppercase font-mono mb-0.5 sm:mb-1 font-semibold">Founder & CTO</div>
                <div className="text-white font-bold text-[11px] sm:text-sm">Shashank Manohar</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <div className="text-neutral-300 text-[10px] sm:text-[11px] uppercase font-mono mb-0.5 sm:mb-1 font-semibold">Co-Founder & CEO</div>
                <div className="text-white font-bold text-[11px] sm:text-sm">Amitesh Kumar</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <div className="text-neutral-300 text-[10px] sm:text-[11px] uppercase font-mono mb-0.5 sm:mb-1 font-semibold">Service Area</div>
                <div className="text-white font-bold text-[11px] sm:text-sm">Patna & India</div>
              </div>
            </div>

            {/* Leadership Profiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#d93200]/15 border border-[#d93200]/30 flex items-center justify-center text-[#ff3b00] shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Shashank Manohar</h3>
                  <div className="text-xs text-orange-300 font-mono mb-1.5 sm:mb-2 font-bold">Founder & CTO — Webflora Technologies</div>
                  <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
                    Works across web development, digital marketing, SEO, AI automation and technology solutions for businesses.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#d93200]/15 border border-[#d93200]/30 flex items-center justify-center text-[#ff3b00] shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Amitesh Kumar</h3>
                  <div className="text-xs text-orange-300 font-mono mb-1.5 sm:mb-2 font-bold">Co-Founder & CEO — Webflora Technologies</div>
                  <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
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
                <p className="text-neutral-200 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                  Slow-loading pages can increase user friction, reduce conversion opportunities and negatively affect page experience. Landing-page experience also matters to advertising performance, making technical performance an important part of conversion optimization.
                </p>
              </div>

              <div className="lg:col-span-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5">
                <h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold mb-3 sm:mb-4">
                  Tools & Platforms We Work With:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 text-xs">
                  {[
                    { name: "Google Ads", icon: Target, color: "text-blue-400" },
                    { name: "Meta Ads Manager", icon: Share2, color: "text-blue-500" },
                    { name: "Google Analytics 4", icon: BarChart3, color: "text-amber-400" },
                    { name: "Search Console", icon: Search, color: "text-emerald-400" },
                    { name: "Tag Manager", icon: Cpu, color: "text-blue-300" },
                    { name: "Next.js Engine", icon: Code2, color: "text-white" }
                  ].map((tool, idx) => {
                    const ToolIcon = tool.icon;
                    return (
                      <div key={idx} className="p-2.5 sm:p-3 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2 text-neutral-200 text-[11px] sm:text-xs font-medium">
                        <ToolIcon className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${tool.color}`} />
                        <span className="truncate">{tool.name}</span>
                      </div>
                    );
                  })}
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
              <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light px-1 sm:px-0">
                Select the marketing plan tailored to your business scale.
              </p>
            </div>

            {/* Critical Pricing Clarification Box */}
            <div className="max-w-3xl mx-auto mb-8 sm:mb-12 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#ff3b00]/10 border border-[#ff3b00]/30 text-center">
              <span className="text-[10px] sm:text-xs font-mono uppercase text-orange-300 font-bold block mb-1">
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
                  <div className="text-[11px] sm:text-xs text-orange-300 font-mono mb-3 sm:mb-4 font-bold">Small Local Shops, Clinics, CAs</div>
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
                <a href="#consultation" aria-label="Get Started with Starter Package" className="w-full py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold uppercase tracking-wider text-center transition-colors">
                  Get Started
                </a>
              </div>

              {/* Growth */}
              <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#ff3b00]/20 to-white/[0.02] border border-[#ff3b00]/40 shadow-xl flex flex-col justify-between relative">
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-2.5 py-0.5 rounded-full bg-[#d93200] text-white text-[9px] sm:text-[10px] font-black uppercase tracking-wider">
                  Popular
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Growth Package</h3>
                  <div className="text-[11px] sm:text-xs text-orange-300 font-mono mb-3 sm:mb-4 font-bold">Coaching Centres, Polyclinics</div>
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
                <a href="#consultation" aria-label="Select Growth Plan" className="w-full py-3 rounded-full bg-[#d93200] hover:bg-[#c22d00] text-white text-xs font-bold uppercase tracking-wider text-center transition-colors shadow-lg shadow-[#d93200]/30">
                  Select Growth Plan
                </a>
              </div>

              {/* Business */}
              <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Business Package</h3>
                  <div className="text-[11px] sm:text-xs text-orange-300 font-mono mb-3 sm:mb-4 font-bold">Real Estate Builders, Brands</div>
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
                <a href="#consultation" aria-label="Choose Business Plan" className="w-full py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold uppercase tracking-wider text-center transition-colors">
                  Choose Business Plan
                </a>
              </div>

              {/* Enterprise */}
              <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Enterprise Plan</h3>
                  <div className="text-[11px] sm:text-xs text-orange-300 font-mono mb-3 sm:mb-4 font-bold">Multi-Location & Startups</div>
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
                <a href="#consultation" aria-label="Contact for Enterprise Scope" className="w-full py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold uppercase tracking-wider text-center transition-colors">
                  Contact for Scope
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ── VERIFIED GOOGLE CLIENT REVIEWS ── */}
        <GoogleReviewsSection />

        {/* ── 12 HIGH-INTENT FAQS SECTION (ACCORDION WIDGET) ── */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#080808] border-b border-white/10" id="faqs">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-1.5 sm:mb-2">
                Frequently Answered
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                Digital Marketing FAQs
              </h2>
              <p className="text-neutral-300 text-xs sm:text-sm font-light px-1 sm:px-0">
                Direct answers to common questions about digital marketing, SEO, advertising budgets, and timelines in Patna.
              </p>
            </div>

            <FaqAccordionWidget faqs={marketingFaqs} />
          </div>
        </section>

        {/* ── CONSULTATION & PROJECT SCOPE INQUIRY (CTA FORM WIDGET) ── */}
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
                <p className="text-neutral-200 text-xs sm:text-sm md:text-base font-light leading-relaxed mb-4 sm:mb-6">
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
                  <div className="text-[11px] sm:text-xs text-neutral-300 mb-1 font-semibold">Direct Marketing Desk:</div>
                  <a href="tel:+918540814729" aria-label="Call Webflora Direct Marketing Desk" className="text-base sm:text-lg font-bold text-white hover:text-[#ff3b00] transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#ff3b00]" /> +91 8540814729
                  </a>
                  <div className="text-[10px] sm:text-xs text-neutral-300 mt-1.5 sm:mt-2 font-mono">
                    Saketpuri, Bajar Samiti, Patna, Bihar – 800016
                  </div>
                </div>
              </div>

              {/* Form Widget */}
              <div className="lg:col-span-7">
                <ConsultationFormWidget />
              </div>

            </div>
          </div>
        </section>

        {/* ── CROSS-SITE INTERNAL LINKS FOOTER ── */}
        <section className="py-16 bg-[#030303] border-t border-white/10 text-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div>
                <h4 className="font-mono uppercase tracking-wider text-neutral-300 font-bold mb-3">Core Digital Services</h4>
                <ul className="space-y-2 text-neutral-300 font-light">
                  <li><Link href="/seo-services-in-patna" className="hover:text-white transition">SEO Company in Patna</Link></li>
                  <li><Link href="/it-company-in-patna/digital-marketing-agency-in-patna" className="hover:text-white transition">Digital Marketing Patna</Link></li>
                  <li><Link href="/it-company-in-patna/ai-automation-company-in-patna" className="hover:text-white transition">AI Automation Patna</Link></li>
                  <li><Link href="/it-company-in-patna/software-development-company-in-patna" className="hover:text-white transition">Software Development Patna</Link></li>
                  <li><Link href="/ecommerce-website-development" className="hover:text-white transition">E-Commerce Web Patna</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono uppercase tracking-wider text-neutral-300 font-bold mb-3">Industry Solutions</h4>
                <ul className="space-y-2 text-neutral-300 font-light">
                  <li><Link href="/industries/education" className="hover:text-white transition">Coaching & Institute Marketing</Link></li>
                  <li><Link href="/industries/healthcare" className="hover:text-white transition">Hospital & Clinic SEO</Link></li>
                  <li><Link href="/industries/real-estate" className="hover:text-white transition">Real Estate Lead Generation</Link></li>
                  <li><Link href="/electronic-health-records-software" className="hover:text-white transition">EHR Software Solutions</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono uppercase tracking-wider text-neutral-300 font-bold mb-3">Case Studies & Proof</h4>
                <ul className="space-y-2 text-neutral-300 font-light">
                  <li><Link href="/case-studies/complete-website-rebuild-optimization-for-team-excellent-career-institute" className="hover:text-white transition">Team Excellent Case Study</Link></li>
                  <li><Link href="/case-studies/smart-qr-code-attendance-system" className="hover:text-white transition">Smart QR Code System</Link></li>
                  <li><Link href="/case-studies/case-study-vegavan-ai-smart-ai-chatbot" className="hover:text-white transition">Vegavan AI Chatbot</Link></li>
                  <li><Link href="/case-studies" className="hover:text-white transition">All Verified Case Studies</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono uppercase tracking-wider text-neutral-300 font-bold mb-3">Company & Leadership</h4>
                <ul className="space-y-2 text-neutral-300 font-light">
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
