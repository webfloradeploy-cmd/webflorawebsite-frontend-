import React from "react";
import Link from "next/link";
import {
  Code2,
  Laptop,
  Users,
  Building2,
  Layers,
  Cpu,
  Workflow,
  Server,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Smartphone,
  Search,
  Compass,
  FileCheck,
  Clock,
  ChevronRight,
  Check,
  Lock,
  MessageSquare,
  Sparkles,
  Award,
  Sliders,
  MapPin,
  GraduationCap,
  Hotel,
  Stethoscope,
  Briefcase,
  Database,
  Terminal,
  Shield,
  Bot
} from "lucide-react";
import ContactSection from "../../Components/ContactSection";
import ClientMarquee from "../../Components/ClientMarquee";
import GayaSoftwareFAQAccordion from "./GayaSoftwareFAQAccordion";
import GayaSoftwareHeroWidget from "./GayaSoftwareHeroWidget";
import GayaSoftwareScopeEstimator from "./GayaSoftwareScopeEstimator";
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
  title: "Software Company in Gaya, Bihar | Webflora Technologies",
  description:
    "Looking for a software company in Gaya, Bihar? Webflora Technologies offers custom software, web applications, CRM, ERP, and AI automation solutions.",
  keywords:
    "software company in gaya, software company in gaya bihar, software development company in gaya, custom software development gaya, software developers in gaya, business software development gaya, ERP software development gaya, CRM software development gaya, SaaS development company gaya, business automation software gaya, AI software development gaya, software solutions in gaya, Webflora Technologies",
  alternates: {
    canonical: "https://webfloratechnologies.com/locations/software-company-in-gaya",
  },
  openGraph: {
    title: "Software Company in Gaya, Bihar | Webflora Technologies",
    description:
      "Looking for a software company in Gaya, Bihar? Webflora Technologies offers custom software, web applications, CRM, ERP, and AI automation solutions.",
    url: "https://webfloratechnologies.com/locations/software-company-in-gaya",
    siteName: "Webflora Technologies",
    images: [
      {
        url: "https://webfloratechnologies.com/title-logo.png",
        width: 512,
        height: 512,
        alt: "Webflora Technologies - Software Company in Gaya, Bihar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Company in Gaya, Bihar | Webflora Technologies",
    description:
      "Looking for a software company in Gaya, Bihar? Webflora Technologies offers custom software, web applications, CRM, ERP, and AI automation solutions.",
    images: ["https://webfloratechnologies.com/title-logo.png"],
  },
};

const softwareFaqsData = [
  {
    question: "Which is a software company in Gaya, Bihar?",
    answer:
      "Webflora Technologies is a software company serving businesses and organizations in Gaya, Bihar. Headquartered in Patna, Bihar (registered MSME: UDYAM-BR-26-0183379), Webflora Technologies plans and builds custom software, business management portals, web applications, and CRM/ERP systems remotely for clients in Gaya, Bodh Gaya, and across India.",
  },
  {
    question: "What services does a software development company provide?",
    answer:
      "A software development company provides end-to-end technical services including business workflow analysis, system architecture design, UI/UX interface planning, custom software programming, web application engineering, database configuration, third-party API integrations, quality assurance testing, cloud deployment, and post-launch maintenance.",
  },
  {
    question: "How much does custom software development cost in Gaya?",
    answer:
      "The cost of custom software development in Gaya depends directly on the project's functional scope, number of user roles, database architecture, complexity of business logic, third-party API integrations, and maintenance requirements. A simple internal management utility requires fewer engineering hours than an enterprise-wide multi-branch ERP or multi-tenant SaaS platform. Webflora Technologies provides detailed, requirement-specific milestone quotations after discovery.",
  },
  {
    question: "How long does it take to develop custom software?",
    answer:
      "Development timelines vary by scope. A focused operational tool or internal management dashboard typically takes 3 to 6 weeks, while comprehensive business applications, CRM/ERP platforms, or custom software with multi-user approval workflows generally take 6 to 12 weeks from technical scoping to final deployment.",
  },
  {
    question: "What is the difference between custom software and ready-made software?",
    answer:
      "Ready-made software is a generic, pre-built product designed for broad industry use with fixed workflows and ongoing per-user subscription fees. Custom software is engineered specifically around your organization's unique operational procedures, proprietary data fields, team roles, and existing tools, giving you complete ownership of your data and zero per-seat licensing fees.",
  },
  {
    question: "Can you develop CRM software for my business?",
    answer:
      "Yes. We develop custom CRM (Customer Relationship Management) solutions designed around your specific sales cycle, customer support channels, and communication channels. Features can include lead tracking, quotation workflows, client communication logs, task assignments, and follow-up reminders.",
  },
  {
    question: "Can you develop ERP or business management software?",
    answer:
      "Yes. We develop tailored business management software for operational workflows such as inventory tracking, order processing, vendor management, internal staff task coordination, and management reporting. Modules are planned strictly according to your actual business requirements rather than forcing bloated unused features.",
  },
  {
    question: "Do you provide web application development services?",
    answer:
      "Yes. We build responsive, browser-based web applications that allow businesses, their teams, and their clients to access data securely from anywhere. Our web apps feature secure authentication, role-based dashboards, database integrations, responsive layouts, and administrative controls.",
  },
  {
    question: "Can you build AI-powered business software?",
    answer:
      "Yes. We build practical AI-enabled workflows and integrations for appropriate business use cases, such as conversational customer support assistants, document field extraction, automated lead qualification, and routine data routing. We plan AI features where they offer measurable operational utility without making unscientific claims of full autonomy.",
  },
  {
    question: "Can you integrate software with existing business systems?",
    answer:
      "Yes. We build and connect REST APIs to integrate custom software with your existing digital tools, such as Indian payment gateways (UPI, net banking), SMS alerts, WhatsApp Business APIs, accounting tools, and external cloud services.",
  },
  {
    question: "Do you provide software maintenance and support?",
    answer:
      "Yes. We provide ongoing software maintenance, security patching, performance optimization, database backup verification, bug fixes, and feature enhancements under clear service agreements to ensure your application runs reliably over time.",
  },
  {
    question: "How can I start a software development project with Webflora Technologies?",
    answer:
      "You can start by contacting our engineering team through our website contact form, emailing hello@webfloratechnologies.com, or messaging +91 85408 14729. We schedule an initial technical discovery session to understand your business requirements, define project scope, and provide a clear implementation roadmap.",
  },
];

const softwareServices = [
  {
    icon: Code2,
    badge: "Core Engineering",
    title: "Custom Software Development",
    desc: "Build software engineered around your specific business workflows, data models, operational processes, and distinct user permissions.",
    useCases: "Internal management tools, operational dashboards, team workflow systems, and specialized business utilities.",
    features: ["Workflow-specific logic", "Role-based permissions", "Tailored database structure"],
  },
  {
    icon: Laptop,
    badge: "Cloud & Web",
    title: "Web Application Development",
    desc: "Develop browser-based applications that enable businesses, staff, and customers to interact with real-time data and manage daily operations.",
    useCases: "Client portals, customer service platforms, online booking dashboards, and dynamic administrative panels.",
    features: ["Secure authentication", "Real-time reporting", "Cross-device responsiveness"],
  },
  {
    icon: Users,
    badge: "Customer Operations",
    title: "CRM Software Development",
    desc: "Create customer relationship management software to systematically organize inquiries, customer history, sales stages, and team follow-ups.",
    useCases: "Lead pipeline tracking, client communication logs, quotation generation, and sales task coordination.",
    features: ["Lead stage pipeline", "WhatsApp/call logs", "Follow-up reminders"],
  },
  {
    icon: Building2,
    badge: "Business Operations",
    title: "ERP & Business Management Software",
    desc: "Develop integrated business management tools to coordinate inventory, order processing, personnel tracking, and management reporting.",
    useCases: "Stock and billing tracking, vendor order processing, multi-branch tracking, and executive overview dashboards.",
    features: ["Inventory control", "Order management", "Custom executive reports"],
  },
  {
    icon: Layers,
    badge: "Product Engineering",
    title: "SaaS Product Development",
    desc: "Help startups and established businesses build scalable Software-as-a-Service products with multi-tenant architecture and user management.",
    useCases: "Subscription portals, niche B2B tools, multi-organization software platforms, and digital client products.",
    features: ["Multi-tenant isolation", "User subscription tiers", "Modular feature flags"],
  },
  {
    icon: Bot,
    badge: "Intelligence",
    title: "AI Software Development & Automation",
    desc: "Develop AI-enabled capabilities and integrations for appropriate business use cases to reduce manual data handling and enhance service response.",
    useCases: "Automated customer inquiry handling, structured document processing, lead qualification, and routine data extraction.",
    features: ["Document field parsing", "AI inquiry assistants", "Context-aware routing"],
  },
  {
    icon: Workflow,
    badge: "Efficiency",
    title: "Business Process Automation",
    desc: "Identify repetitive digital operations and engineer reliable software integrations that reduce manual steps and human data-entry errors.",
    useCases: "Multi-system data sync, automated invoice notifications, lead assignment routing, and periodic status reporting.",
    features: ["Webhook automations", "Notification triggers", "Data synchronization"],
  },
  {
    icon: Server,
    badge: "Connectivity",
    title: "API Development & Integration",
    desc: "Build secure RESTful APIs and integrate third-party business services to allow approved digital tools to exchange data smoothly.",
    useCases: "Payment gateway connections (UPI/Cards), SMS/WhatsApp gateways, CRM connectors, and accounting software synchronization.",
    features: ["Secure REST endpoints", "Rate limiting & tokens", "Third-party webhooks"],
  },
  {
    icon: RefreshCw,
    badge: "Lifecycle",
    title: "Software Modernization & Maintenance",
    desc: "Help organizations upgrade legacy applications through codebase refactoring, security patches, performance tuning, and planned support.",
    useCases: "Legacy software migrations, database speed optimization, bug resolution, and long-term security maintenance.",
    features: ["Performance refactoring", "Security updates", "Ongoing SLA support"],
  },
];

const industrySolutions = [
  {
    icon: Building2,
    title: "Retail and Distribution",
    desc: "Software solutions to track warehouse inventory, manage distributor orders, generate GST-compliant invoices, and analyze sales performance across product lines.",
    tag: "Trade & Supply",
    stat: "Inventory Accuracy",
  },
  {
    icon: GraduationCap,
    title: "Education and Coaching Institutes",
    desc: "Centralized systems for Gaya coaching hubs to manage student enrollment, batch scheduling, fee collection tracking, attendance monitoring, and parent updates.",
    tag: "Institutes & EdTech",
    stat: "Batch Coordination",
  },
  {
    icon: Stethoscope,
    title: "Healthcare and Clinics",
    desc: "Patient appointment scheduling, doctor consultation rosters, diagnostic test tracking, and administrative record management compliant with health privacy norms.",
    tag: "Clinics & OPD",
    stat: "Patient Scheduling",
  },
  {
    icon: Hotel,
    title: "Hospitality and Tourism",
    desc: "Custom management software for Bodh Gaya and Gaya hotels, guest houses, and tour operators to handle direct bookings, room inventories, and pilgrim excursions.",
    tag: "Bodh Gaya Tourism",
    stat: "Direct Bookings",
  },
  {
    icon: Layers,
    title: "Real Estate Businesses",
    desc: "Lead management and property enquiry tracking for Gaya real estate developers, site visit scheduling, payment installment plans, and broker coordination.",
    tag: "Real Estate",
    stat: "Lead Tracking",
  },
  {
    icon: Briefcase,
    title: "Service Businesses",
    desc: "Customer request tracking, job quotation preparation, field staff coordination, task completion verification, and customer feedback management.",
    tag: "Commercial Services",
    stat: "Task Tracking",
  },
  {
    icon: Sparkles,
    title: "Startups and Growing Companies",
    desc: "Rapid prototype development, MVP engineering, custom web applications, and scalable architecture design to validate business concepts efficiently.",
    tag: "Venture & Tech",
    stat: "MVP Velocity",
  },
];

const whyChoosePoints = [
  {
    icon: Compass,
    title: "Requirement-Driven Software Planning",
    desc: "We begin every project by thoroughly analyzing your operational bottlenecks, team responsibilities, and specific functional requirements.",
    highlight: "Workflow First",
  },
  {
    icon: Workflow,
    title: "Solutions Tailored to Business Workflows",
    desc: "Software designed around how your company actually operates, rather than forcing your staff to conform to inflexible generic tools.",
    highlight: "Custom Fit",
  },
  {
    icon: Laptop,
    title: "User-Friendly Application Interfaces",
    desc: "Clean, intuitive UI/UX design that makes daily usage simple for administrators, management teams, and non-technical staff alike.",
    highlight: "Intuitive UX",
  },
  {
    icon: Code2,
    title: "Appropriate Architecture & Tech Choices",
    desc: "We select modern, stable technologies like React, Next.js, Node.js, and PostgreSQL based strictly on your project scope and scale.",
    highlight: "Modern Stack",
  },
  {
    icon: Server,
    title: "Integration with Existing Business Systems",
    desc: "Seamless connectivity with your current spreadsheets, payment gateways, messaging tools, and internal software via clean APIs.",
    highlight: "Connected Systems",
  },
  {
    icon: Layers,
    title: "Attention to Maintainability & Scalability",
    desc: "Clean, modular component architecture that allows your software to accommodate new features, data volume, and user roles as you grow.",
    highlight: "Scalable Core",
  },
  {
    icon: ShieldCheck,
    title: "Testing and Quality Assurance",
    desc: "Systematic functional validation, role-permission testing, data consistency checks, and edge-case handling before production rollout.",
    highlight: "Thorough QA",
  },
  {
    icon: FileCheck,
    title: "Clear Communication on Scope & Deliverables",
    desc: "Transparent milestone roadmaps, explicit functional specifications, regular staging demonstrations, and zero technical ambiguity.",
    highlight: "Transparent Scope",
  },
  {
    icon: Building2,
    title: "Remote Collaboration from Patna, Bihar",
    desc: "Headquartered in Patna (registered MSME: UDYAM-BR-26-0183379), we provide structured remote software development with direct senior tech lead access.",
    highlight: "Patna HQ to Gaya",
  },
];

const processSteps = [
  {
    number: "01",
    phase: "Discovery",
    title: "Business Requirement Analysis",
    desc: "Understand your operational problem, key stakeholders, user types, input data flows, and required operational outcomes.",
    deliverable: "Requirement Analysis Document",
    duration: "Step 1",
  },
  {
    number: "02",
    phase: "Planning",
    title: "Scope and Planning",
    desc: "Define the detailed feature list, system user roles, third-party integrations, development milestones, and acceptance criteria.",
    deliverable: "Technical Scope & Milestones",
    duration: "Step 2",
  },
  {
    number: "03",
    phase: "Design",
    title: "UI/UX Design",
    desc: "Plan user journeys, application wireframes, navigation structures, and intuitive responsive screens for each user type.",
    deliverable: "Interactive Figma Wireframes",
    duration: "Step 3",
  },
  {
    number: "04",
    phase: "Engineering",
    title: "Software Architecture and Development",
    desc: "Implement database models, backend business logic, secure API endpoints, and frontend user interfaces using modern frameworks.",
    deliverable: "Modular Codebase & Staging Build",
    duration: "Step 4",
  },
  {
    number: "05",
    phase: "Testing",
    title: "Integration and Testing",
    desc: "Validate user workflows, permission boundaries, error handling, third-party API data sync, and database performance under load.",
    deliverable: "QA & Verification Report",
    duration: "Step 5",
  },
  {
    number: "06",
    phase: "Handover",
    title: "Deployment and Handover",
    desc: "Deploy the application to your chosen cloud environment, verify SSL/security protocols, and provide administrator orientation.",
    deliverable: "100% Code & Asset Handover",
    duration: "Step 6",
  },
  {
    number: "07",
    phase: "Sustenance",
    title: "Maintenance and Improvement",
    desc: "Provide agreed ongoing technical support, system monitoring, security updates, and planned feature enhancements.",
    deliverable: "Support & SLA Roadmap",
    duration: "Step 7",
  },
];

const pricingFactors = [
  {
    title: "Project Complexity & Features",
    desc: "A focused internal data utility requires fewer engineering hours than an enterprise portal with multi-step validation workflows.",
    metric: "Feature Scope",
  },
  {
    title: "Number of User Roles & Permissions",
    desc: "Granular access controls (such as Admin, Branch Manager, Billing Clerk, and Customer) require distinct interface views and authorization logic.",
    metric: "User Roles (RBAC)",
  },
  {
    title: "Application Architecture",
    desc: "Standalone business web apps require different infrastructure than distributed microservices or multi-tenant SaaS products.",
    metric: "Architecture Type",
  },
  {
    title: "Database & Reporting Complexity",
    desc: "Advanced data filtering, automated financial calculations, and customized PDF export routines require deeper backend engineering.",
    metric: "Data & Reports",
  },
  {
    title: "Third-Party Integrations",
    desc: "Connecting payment gateways, WhatsApp Business APIs, SMS gateways, and legacy databases influences overall integration hours.",
    metric: "API Connections",
  },
  {
    title: "AI & Automation Functionality",
    desc: "Integrating intelligent document parsing, conversational chatbots, or automated data routing adds specific development steps.",
    metric: "Automation Logic",
  },
  {
    title: "Security & Testing Requirements",
    desc: "Enterprise data encryption, rigorous vulnerability testing, audit trails, and strict compliance checks influence QA requirements.",
    metric: "Security & QA",
  },
  {
    title: "Hosting, Deployment & Maintenance",
    desc: "Cloud infrastructure setup, automated database backups, monitoring alerts, and ongoing software support agreements.",
    metric: "DevOps & SLA",
  },
];

export default function GayaSoftwareLandingPage() {
  const canonicalUrl = "https://webfloratechnologies.com/locations/software-company-in-gaya";

  const pageSchemas = [
    buildOrganizationSchema(),
    buildProfessionalServiceSchema({
      name: "Webflora Technologies - Software Company in Gaya",
      url: canonicalUrl,
      description: "Custom business software, ERP, CRM, and cloud application development for enterprises and MSMEs in Gaya and Bihar.",
      areaServed: {
        "@type": "AdministrativeArea",
        "name": "Gaya, Bihar, India"
      }
    }),
    buildSoftwareApplicationSchema({
      name: "Webflora Custom Business Software & ERP Systems",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Cloud, Windows, Linux, Android, iOS",
      description: "Bespoke enterprise software, CRM, ERP, and business workflow automation systems developed by Webflora Technologies for organizations in Gaya, Bihar.",
      url: canonicalUrl
    }),
    buildProductSchema({
      name: "Webflora Custom Enterprise Software Package",
      description: "Custom ERP, CRM, and cloud business automation software development with complete source code ownership for businesses in Gaya, Bihar.",
      category: "Business Management Software",
      image: "https://webfloratechnologies.com/title-logo.png",
      url: canonicalUrl,
      offers: {
        price: "50000",
        priceCurrency: "INR",
        url: canonicalUrl
      },
      aggregateRating: {
        ratingValue: 4.9,
        reviewCount: 112
      },
      review: {
        authorName: "Rajeev Ranjan",
        reviewRating: 5,
        reviewBody: "Webflora engineered our multi-branch billing and inventory software in Gaya. Fast performance, zero monthly fees, and excellent post-launch support."
      }
    }),
    buildWebPageSchema({
      name: "Software Company in Gaya, Bihar | Webflora Technologies",
      description:
        "Looking for a software company in Gaya, Bihar? Webflora Technologies offers custom software, web applications, CRM, ERP, and AI automation solutions.",
      url: canonicalUrl,
    }),
    buildServiceSchema({
      name: "Software Development Services in Gaya",
      serviceType: "Software Development",
      description:
        "Webflora Technologies plans and builds custom software, web applications, CRM, ERP, and business automation solutions for businesses in Gaya and Bodh Gaya, Bihar.",
      areaServed: "Gaya, Bihar, India",
    }),
    buildBreadcrumbListSchema([
      { name: "Home", url: "/" },
      { name: "Locations", url: "/locations" },
      {
        name: "Software Company in Gaya",
        url: canonicalUrl,
      },
    ]),
    buildHowToSchema({
      name: "Our Custom Software Development Process in Gaya",
      description: "A structured 7-stage software engineering methodology ensuring transparent delivery, high code quality, and measurable operational efficiency.",
      steps: [
        { name: "System Architecture & Requirement Mapping", text: "Map exact business workflows, roles, edge cases, integration points, and define a functional specification document." },
        { name: "Database Schema & API Architecture", text: "Design normalized database structures, indexing models, REST/GraphQL endpoints, and secure authentication flows." },
        { name: "Agile Development Sprints", text: "Develop frontend and backend modules in 2-week agile sprints with bi-weekly staging demonstration milestones." },
        { name: "Third-Party & Hardware Integrations", text: "Seamlessly integrate WhatsApp Business APIs, payment gateways, SMS gateways, and legacy biometric or accounting systems." },
        { name: "Rigorous Testing & Security Audits", text: "Perform functional testing, role-based access validation, SQL injection/XSS audits, and peak load stress testing." },
        { name: "Deployment & Full Source Code Handover", text: "Deploy to your private cloud instance (AWS/GCP/Hostinger VPS), configure automated backups, and handover 100% source code." },
        { name: "Ongoing SLA & Feature Enhancements", text: "Continuous system monitoring, vulnerability patches, database maintenance, and planned capability expansions." }
      ]
    }),
    buildItemListSchema([
      { name: "Custom Business Management Software", url: `${canonicalUrl}#software-services` },
      { name: "Enterprise Web Application Engineering", url: `${canonicalUrl}#software-services` },
      { name: "Bespoke CRM (Customer Relationship Management)", url: `${canonicalUrl}#software-services` },
      { name: "ERP & Multi-Branch Inventory Systems", url: `${canonicalUrl}#software-services` },
      { name: "Automated Workflow & WhatsApp Notification Bots", url: `${canonicalUrl}#software-services` },
      { name: "SaaS Product & MVP Development", url: `${canonicalUrl}#software-services` },
      { name: "Secure API & Database Integration Services", url: `${canonicalUrl}#software-services` },
      { name: "AI-Powered Business Intelligence & Analytics", url: `${canonicalUrl}#software-services` },
      { name: "Legacy System Modernization & Cloud Migration", url: `${canonicalUrl}#software-services` }
    ]),
    buildSiteNavigationElementSchema(),
    buildFAQPageSchema(softwareFaqsData),
  ];

  return (
    <div className="bg-[#050505] text-white selection:bg-[#FF3C00] selection:text-white min-h-screen font-sans antialiased overflow-x-hidden">
      {/* Structured Schema Data */}
      <JsonLd data={pageSchemas} />

      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="relative pt-24 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 overflow-hidden border-b border-white/10">
        <div className="creative-grid-bg opacity-25 pointer-events-none" />
        <div className="creative-grid-dots opacity-20 pointer-events-none" />
        
        {/* Ambient atmospheric glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,60,0,0.18),transparent_65%)] blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-24 w-[450px] h-[450px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-7 text-left">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-transparent border border-orange-500/30 text-[10px] sm:text-xs font-mono tracking-wider text-orange-400 backdrop-blur-md shadow-[0_0_20px_rgba(255,60,0,0.1)] w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3C00] animate-pulse shrink-0" />
                <span className="font-bold text-white tracking-wider shrink-0">WEBFLORA</span>
                <span className="text-gray-500">|</span>
                <span className="text-orange-300">GAYA SOFTWARE ENGINEERING</span>
              </div>

              {/* Exact H1 and Supporting Headline */}
              <div className="space-y-2 sm:space-y-3">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
                  Software Company in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 drop-shadow-[0_0_25px_rgba(255,60,0,0.35)]">
                    Gaya, Bihar
                  </span>
                </h1>
                <p className="text-sm sm:text-base lg:text-lg font-medium text-orange-300/90 font-mono tracking-tight">
                  Custom Software Development and Digital Solutions for Growing Businesses
                </p>
              </div>

              {/* Hero description */}
              <p className="text-gray-300 text-xs sm:text-base lg:text-lg font-light leading-relaxed max-w-xl">
                Looking for a software company in Gaya, Bihar? Webflora Technologies helps businesses plan and build custom software, web applications, business management systems, CRM and ERP solutions, AI-powered tools, and digital platforms tailored to their operational needs.
              </p>

              {/* 4 Supporting points */}
              <div className="grid grid-cols-2 gap-2 max-w-xl pt-1">
                {[
                  { text: "Custom software development", hint: "Bespoke Logic" },
                  { text: "Business web applications", hint: "Secure Portals" },
                  { text: "CRM and ERP solutions", hint: "Operations Sync" },
                  { text: "AI automation & integrations", hint: "API Connectors" },
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
                  <span>Discuss Your Software Project</span>
                  <ArrowRight size={14} />
                </a>

                <a
                  id="hero-services-cta"
                  href="#services"
                  className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-white/5 border border-white/15 hover:border-orange-500/50 hover:bg-orange-500/10 text-white font-semibold text-xs sm:text-sm transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-1.5"
                >
                  <Code2 size={13} className="text-orange-400" />
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
                  href="https://wa.me/918540814729?text=Hello%20Webflora%2C%20I%20am%20looking%20for%20software%20development%20in%20Gaya."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white underline decoration-emerald-500/40"
                >
                  +91 85408 14729
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Software Architecture Widget */}
            <div className="lg:col-span-5 relative pt-4 lg:pt-0">
              <GayaSoftwareHeroWidget />
            </div>
          </div>

          {/* Trust Strip */}
          <div className="pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 text-xs font-mono uppercase tracking-wider text-gray-400">
            <div className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-zinc-950/70 border border-white/10 shadow-lg backdrop-blur-md">
              <ShieldCheck size={18} className="text-[#FF3C00] shrink-0" />
              <div className="min-w-0">
                <span className="text-white font-bold block truncate text-[11px] sm:text-xs">UDYAM-BR-26-0183379</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 truncate block">Registered MSME</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-zinc-950/70 border border-white/10 shadow-lg backdrop-blur-md">
              <Code2 size={18} className="text-amber-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-white font-bold block truncate text-[11px] sm:text-xs">Modern Stacks</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 truncate block">React, Node, PostgreSQL</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-zinc-950/70 border border-white/10 shadow-lg backdrop-blur-md">
              <Lock size={18} className="text-emerald-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-white font-bold block truncate text-[11px] sm:text-xs">100% IP Ownership</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 truncate block">Full Code & DB Rights</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-zinc-950/70 border border-white/10 shadow-lg backdrop-blur-md">
              <Server size={18} className="text-orange-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-white font-bold block truncate text-[11px] sm:text-xs">Remote Delivery</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 truncate block">Patna HQ to Gaya</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: INTRODUCTION SECTION
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#080808] border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14 relative z-10">
          <div className="space-y-3 sm:space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Sparkles size={12} />
              <span>CUSTOM BUSINESS SOFTWARE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Software Development Services in Gaya, Bihar
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Operational Value Card */}
            <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-zinc-950/80 border border-white/10 flex flex-col justify-between space-y-6 sm:space-y-8 backdrop-blur-xl relative overflow-hidden">
              <div className="space-y-4 sm:space-y-5 text-gray-300 leading-relaxed text-xs sm:text-base lg:text-lg font-light">
                <p>
                  As organizations in Gaya expand, relying solely on disconnected spreadsheets, paper ledgers, or generic off-the-shelf software packages often creates operational friction. Custom software development allows businesses to centralize critical operational information, automate repetitive daily tasks, enforce consistent data validation, track employee activities, and coordinate customer interactions through purpose-built interfaces.
                </p>
                <p>
                  Every enterprise operates with distinct constraints: a wholesale distributor in Manpur or GB Road requires different inventory controls than an educational coaching institute managing hundreds of student admissions, or a hospitality provider in Bodh Gaya handling seasonal accommodation bookings. Software requirements must be engineered around actual business workflows, team roles, integration touchpoints, and long-term organizational goals.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6 border-t border-white/10 text-center">
                <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-zinc-900/50 border border-white/5">
                  <span className="text-lg sm:text-2xl lg:text-3xl font-black text-white block">Workflow</span>
                  <span className="text-[9px] sm:text-[11px] font-mono text-gray-400 uppercase tracking-wider">Tailored Logic</span>
                </div>
                <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-zinc-900/50 border border-white/5">
                  <span className="text-lg sm:text-2xl lg:text-3xl font-black text-[#FF3C00] block">Centralized</span>
                  <span className="text-[9px] sm:text-[11px] font-mono text-gray-400 uppercase tracking-wider">Secure Data</span>
                </div>
                <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-zinc-900/50 border border-white/5">
                  <span className="text-lg sm:text-2xl lg:text-3xl font-black text-white block">Zero</span>
                  <span className="text-[9px] sm:text-[11px] font-mono text-gray-400 uppercase tracking-wider">Seat Lock-in</span>
                </div>
              </div>
            </div>

            {/* Remote Delivery Transparency Card */}
            <div className="lg:col-span-5 p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-zinc-900/80 via-zinc-950 to-black border border-white/10 flex flex-col justify-between space-y-6 sm:space-y-7 relative overflow-hidden backdrop-blur-xl">
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-orange-400">
                  <ShieldCheck size={13} />
                  Transparent Collaboration
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight">
                  Headquartered in Patna, Serving Gaya Remotely
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Webflora Technologies is an officially registered software company based in <strong className="text-white">Patna, Bihar</strong> (MSME Registration: UDYAM-BR-26-0183379), delivering custom software engineering and digital solutions remotely to clients in Gaya and across India.
                </p>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  We maintain transparent commercial communication: we do not claim to operate a physical branch office or local facility in Gaya. Our structured remote model uses virtual screen-share requirement sessions, secure staging server deployments, Git repository transparency, and direct communication with software architects.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/60 border border-white/10 space-y-2.5 sm:space-y-3">
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-300">
                  <Check size={13} className="text-[#FF3C00] shrink-0" strokeWidth={3} />
                  <span>Interactive Staging Environments</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-300">
                  <Check size={13} className="text-[#FF3C00] shrink-0" strokeWidth={3} />
                  <span>Direct Video & WhatsApp Scoping</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-300">
                  <Check size={13} className="text-[#FF3C00] shrink-0" strokeWidth={3} />
                  <span>100% Source Code & Database Handover</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFIED CLIENT LOGO MARQUEE */}
      <ClientMarquee />

      {/* =========================================================================
          SECTION 3: SOFTWARE DEVELOPMENT SERVICES (9 SERVICES)
          ========================================================================= */}
      <section id="services" className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#050505] border-b border-white/10 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Layers size={12} />
              <span>CORE TECHNICAL OFFERINGS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Our Software Development Services in Gaya
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg">
              Explore our comprehensive range of custom software engineering, business platform architecture, and operational integration services tailored for enterprises in Gaya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {softwareServices.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-zinc-950/70 border border-white/10 hover:border-[#FF3C00]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,60,0,0.15)] flex flex-col justify-between overflow-hidden backdrop-blur-xl"
                >
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

                    {/* Checkpoints */}
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
                      Typical Use Case
                    </span>
                    <p className="text-[11px] sm:text-xs text-gray-300 leading-normal">
                      {service.useCases}
                    </p>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-[#FF3C00] font-bold group-hover:text-orange-300 pt-1 font-mono"
                    >
                      <span>Discuss This Requirement</span>
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
          SECTION 4: INDUSTRY-SPECIFIC SOFTWARE SOLUTIONS
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#080808] border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Building2 size={12} />
              <span>INDUSTRY-FOCUSED WORKFLOWS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Software Solutions for Businesses in Gaya
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg">
              Explore how specialized software architectures can be tailored to match the daily operational workflows of organizations across prominent commercial sectors in Gaya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {industrySolutions.map((ind, index) => {
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
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-orange-400 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
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
                    <span>Key Outcome</span>
                    <span className="text-emerald-400 font-bold">{ind.stat}</span>
                  </div>
                </div>
              );
            })}
          </div>
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
              <span>ENGINEERING PRINCIPLES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Why Choose Webflora Technologies for Software Development in Gaya?
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg">
              Our engineering philosophy is built on disciplined requirement scoping, scalable architectural standards, and direct technical collaboration.
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
          SECTION 6: SOFTWARE DEVELOPMENT PROCESS (7 STAGES)
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#080808] border-b border-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Clock size={12} />
              <span>DISCIPLINED SDLC ROADMAP</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Our Software Development Process
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg">
              A structured 7-stage software development lifecycle ensuring requirement clarity, robust code quality, and predictable deployment.
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
                        {step.duration}: {step.phase}
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
          SECTION 7: MODERN SOFTWARE DEVELOPMENT TECHNOLOGIES
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#050505] border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Terminal size={12} />
              <span>TECHNOLOGY SELECTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Modern Software Development Technologies
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg">
              Technology selection depends strictly on application requirements rather than imposing the same technical stack on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: Laptop,
                title: "React & Next.js",
                role: "Web Interfaces",
                desc: "High-performance frontend rendering, component-driven UI architectures, and responsive administrative dashboards.",
              },
              {
                icon: Server,
                title: "Node.js & Express",
                role: "Backend & Microservices",
                desc: "Event-driven, asynchronous backend runtimes for building high-throughput REST APIs and business microservices.",
              },
              {
                icon: Database,
                title: "MongoDB & PostgreSQL",
                role: "Relational & Document DBs",
                desc: "PostgreSQL for ACID-compliant transactional business data, and MongoDB for dynamic document schemas and high-volume logging.",
              },
              {
                icon: Workflow,
                title: "REST APIs & Webhooks",
                role: "System Integration",
                desc: "Standardized API protocols for securely connecting CRM portals, payment channels, ERP systems, and internal tools.",
              },
              {
                icon: Smartphone,
                title: "React Native",
                role: "Cross-Platform Mobile Apps",
                desc: "Cross-platform mobile apps for Android and iOS sharing business logic with web platforms for field staff and customers.",
              },
              {
                icon: Cpu,
                title: "AI APIs & Cloud DevOps",
                role: "Automation & Hosting",
                desc: "Integrating tested AI model APIs for text parsing, alongside cloud infrastructure deployment on AWS, Vercel, and Docker.",
              },
            ].map((tech, idx) => {
              const TechIcon = tech.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-zinc-950/70 border border-white/10 space-y-3 hover:border-orange-500/30 transition-all backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#FF3C00]">
                      <TechIcon size={20} />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-gray-400 uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded">
                      {tech.role}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{tech.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: SOFTWARE DEVELOPMENT COST IN GAYA & INTERACTIVE ESTIMATOR
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#080808] border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <Sliders size={12} />
              <span>TRANSPARENT COST CRITERIA</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Software Development Cost in Gaya, Bihar
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg">
              Software pricing in Gaya depends on your precise functional specifications, scale, and operational scope. A focused internal workflow utility requires fewer hours than a multi-branch business platform. Cost is shaped by these key factors:
            </p>
          </div>

          {/* Pricing Factors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {pricingFactors.map((factor, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-zinc-950/70 border border-white/10 space-y-1.5 hover:border-orange-500/30 transition-all flex flex-col justify-between backdrop-blur-xl"
              >
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-orange-400 font-bold block mb-1">
                    {factor.metric}
                  </span>
                  <h3 className="text-sm font-bold text-white">{factor.title}</h3>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed pt-1">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Software Scope Planner */}
          <GayaSoftwareScopeEstimator />

          {/* Direct CTA */}
          <div className="text-center pt-2">
            <a
              id="cost-discuss-cta"
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#FF3C00] via-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(255,60,0,0.35)]"
            >
              <span>Discuss Your Software Requirements</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: LOCAL SEO AND GEO SECTION
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#050505] border-b border-white/10 relative">
        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
          <div className="space-y-3 sm:space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <MapPin size={12} />
              <span>REGIONAL TECHNICAL INSIGHTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Software Development Services in Gaya and Across Bihar
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed text-xs sm:text-base lg:text-lg font-light">
            <p>
              Organizations in Gaya and Bodh Gaya are increasingly digitizing their core business workflows to meet evolving customer expectations and improve operational efficiency. Whether you operate a wholesale trading firm in Gaya, an educational academy managing competitive batches, or a pilgrimage accommodation and tour venture in Bodh Gaya, bespoke digital systems provide clear visibility into operations and reduce reliance on error-prone paper records.
            </p>
            <p>
              Webflora Technologies collaborates remotely with businesses across Gaya, Bodh Gaya, and adjacent districts from our registered headquarters in Patna, Bihar. We do not publish artificial branch listings or claim physical office premises in Gaya; instead, we deliver verified software engineering backed by transparent milestone delivery and direct tech lead consultation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-4 sm:my-6">
              <div className="p-5 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-2.5 backdrop-blur-xl">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#FF3C00]">
                  <Building2 size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Gaya Commercial & Wholesale Workflows
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Trading companies, textile units in Manpur, and service distributors benefit from custom inventory systems, staff assignment tools, and payment tracking software.
                </p>
              </div>

              <div className="p-5 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-2.5 backdrop-blur-xl">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-400">
                  <Hotel size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Bodh Gaya Hospitality & Tourism Systems
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Hotel and travel businesses benefit from centralized booking inquiry systems, tour scheduling software, multi-currency accounting, and direct customer communication channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: AEO-OPTIMIZED FAQ SECTION
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#080808] border-b border-white/10 relative">
        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-orange-400">
              <MessageSquare size={12} />
              <span>DIRECT FACTUAL ANSWERS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Frequently Asked Questions About Software Development in Gaya
            </h2>
            <p className="text-gray-400 text-xs sm:text-base lg:text-lg">
              Find transparent, factual answers regarding custom software development scopes, technology choices, timelines, and remote collaboration from Patna.
            </p>
          </div>

          <GayaSoftwareFAQAccordion faqs={softwareFaqsData} />
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: VERIFIED INTERNAL LINKING
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#050505] border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#FF3C00] font-mono text-xs font-black uppercase tracking-[0.25em] block">
              Verified Solutions
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white">
              Related Technology & Web Services
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
                title: "Software Development in Patna",
                href: "/it-company-in-patna/software-development-company-in-patna",
                desc: "Custom enterprise portals & ERPs",
              },
              {
                title: "Mobile App Development",
                href: "/it-company-in-patna/mobile-app-development-company-in-patna",
                desc: "Cross-platform iOS & Android apps",
              },
              {
                title: "AI Automation Solutions",
                href: "/it-company-in-patna/ai-automation-company-in-patna",
                desc: "Intelligent workflow automation",
              },
              {
                title: "Digital Marketing Agency",
                href: "/it-company-in-patna/digital-marketing-agency-in-patna",
                desc: "Performance marketing & leads",
              },
              {
                title: "SEO Services",
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
      <GayaServicesNav activeId="software" />

      {/* =========================================================================
          SECTION 12: FINAL CTA SECTION
          ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#080808] via-zinc-950 to-black border-b border-white/10 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,60,0,0.18),transparent_65%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-[11px] sm:text-xs font-mono text-orange-400">
            <Sparkles size={12} />
            <span>START YOUR SOFTWARE PROJECT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Looking for a Software Development Company in Gaya?
          </h2>

          <p className="text-gray-300 text-xs sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Whether you need custom business software, a CRM system, an ERP solution, a web application, a SaaS product, or AI-powered workflow automation, Webflora Technologies can help you define the requirements and plan a suitable technical solution.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <a
              id="final-discuss-btn"
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-9 sm:py-4 rounded-full bg-gradient-to-r from-[#FF3C00] via-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xs sm:text-base transition-all duration-300 shadow-[0_0_35px_rgba(255,60,0,0.4)] hover:shadow-[0_0_50px_rgba(255,60,0,0.6)] cursor-pointer"
            >
              <span>Discuss Your Software Project</span>
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
