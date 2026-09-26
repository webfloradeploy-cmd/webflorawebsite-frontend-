import React from "react";
import Link from "next/link";
import {
  Code2,
  Layers,
  Database,
  Server,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  Users,
  Smartphone,
  Globe,
  Cpu,
  BarChart3,
  Clock,
  PhoneCall,
  Phone,
  Check,
  Award,
  Workflow,
  GraduationCap,
  Heart,
  Store,
  Rocket,
  Utensils,
  MapPin,
  Activity,
  DollarSign,
  Scale,
  Star,
  Sliders
} from "lucide-react";
import ClientMarquee from "../../Components/ClientMarquee";
import GoogleReviewsSection from "../../Components/GoogleReviewsSection";
import {
  ServicesTabsWidget,
  IndustryTabsWidget,
  ProcessStepsWidget,
  FaqAccordionWidget,
  ConsultationFormWidget
} from "./SoftwareInteractiveWidgets";

export const dynamic = "force-static";

export default function SoftwareDevelopmentPatnaPage() {
  const caseStudies = [
    {
      title: "Brijrani Trading – Custom B2B Goods Trading CRM & Operations Suite",
      slug: "brijrani-trading-crm-software",
      client: "Brijrani Goods Trading Network, Bihar",
      category: "B2B TRADING CRM & ERP",
      metrics: "100% Real-Time Order Sync • Zero Reconcile Errors",
      problem: "Manual wholesale phone orders, decentralized driver routes, and billing discrepancies caused operational delays across trading supply routes in Bihar.",
      solution: "Engineered a custom trading CRM with automated distributor order management, driver route manifests, live stock inventory sync, and instant GST billing ledgers.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "REST APIs"],
      internalLink: "/software-development-company-in-patna"
    },
    {
      title: "Feedrani – Animal Feed Manufacturing & Trading ERP/CRM",
      slug: "feedrani-ecommerce",
      client: "Feedrani Animal Feed Industries, Bihar",
      category: "MANUFACTURING & TRADING ERP",
      metrics: "40% Lower Overhead • 100% Raw Material Traceability",
      problem: "Complex raw material procurement, batch manufacturing calculations, and distributed cattle/poultry feed dealer ledgers created inventory bottlenecks.",
      solution: "Built a customized manufacturing ERP & CRM suite managing batch production schedules, raw material inventory, dealer distributor network, and Razorpay payment collections.",
      tech: ["Next.js", "Node.js", "MongoDB", "Redis", "Razorpay"],
      internalLink: "/case-studies/feedrani-website-development-case-study"
    },
    {
      title: "LogiSafe CRM – Logistics & Consignment Shipment Tracking System",
      slug: "smart-qr-code-attendance-system",
      client: "LogiSafeWay / LPL Logistics, Patna & Pan-India",
      category: "LOGISTICS & SHIPMENT CRM",
      metrics: "Sub-Second GPS Tracking • 99.9% Cloud Uptime",
      problem: "Tracking multi-hub parcel shipments, consignment statuses, and proof-of-delivery handoffs across regional transit hubs was prone to manual delays.",
      solution: "Developed an enterprise logistics CRM with live GPS consignment mapping, QR/barcode package intake scanning, multi-branch dispatch pipelines, and automated customer WhatsApp/SMS tracking alerts.",
      tech: ["Next.js", "Node.js", "Google Maps SDK", "PostgreSQL", "Firebase FCM"],
      internalLink: "/it-company-in-patna/mobile-app-development-company-in-patna"
    },
    {
      title: "Team Excellent Career Institute – QR Code-Based Student Attendance & ERP",
      slug: "complete-website-rebuild-optimization-for-team-excellent-career-institute",
      client: "Team Excellent Career Institute, Patna",
      category: "QR ATTENDANCE & ACADEMIC ERP",
      metrics: "99.8% Log Accuracy • Zero Proxy Entries",
      problem: "Manual pen-and-paper student registers caused proxy entries, classroom queue delays, and delayed communication with parents.",
      solution: "Engineered real-time dynamic QR code & biometric attendance scanner with automated instant parent WhatsApp notifications, test series marks analytics, and digital fee payments.",
      tech: ["Node.js", "PostgreSQL", "React Native", "Redis", "Razorpay"],
      internalLink: "/attendance-management-software"
    }
  ];

  const industries = [
    {
      id: "education",
      name: "Education & Coaching",
      headline: "Coaching Institutes, Schools & EdTech Platforms",
      desc: "Comprehensive coaching ERPs and education management platforms built to handle student admissions, fee tracking, online exams, and batch schedules across Bihar.",
      features: [
        "Student lifecycle and admission management",
        "Batch and classroom timetable scheduling",
        "Automated biometric and QR attendance sync",
        "Online test series and automated grading",
        "Fee collection with Razorpay & instant SMS receipts",
        "Parent and student mobile app portals"
      ],
      tag: "High Demand in Patna",
      industryLink: "/industries/education",
      productLink: "/attendance-management-software"
    },
    {
      id: "healthcare",
      name: "Healthcare & Clinics",
      headline: "Hospitals, Clinics & Diagnostic Networks",
      desc: "HIPAA-compliant and NABH-ready clinic management and hospital software for Patna healthcare facilities, streamlining patient history and OPD queues.",
      features: [
        "Patient OPD/IPD registration & EHR records",
        "Doctor appointment booking and queue displays",
        "Diagnostic lab reports and WhatsApp delivery",
        "Pharmacy inventory and automated billing",
        "Insurance and TPA claim documentation",
        "Multi-branch clinic synchronization"
      ],
      tag: "NABH / EHR Ready",
      industryLink: "/industries/healthcare",
      productLink: "/electronic-health-records-software"
    },
    {
      id: "realestate",
      name: "Real Estate & Builders",
      headline: "Property Developers, Builders & Brokers",
      desc: "Custom real estate ERP and CRM platforms designed for site-visit tracking, lead attribution, unit booking, payment schedules, and broker commissions.",
      features: [
        "Interactive project layout and unit availability",
        "Lead capture from Facebook, Google, and 99acres",
        "Site visit scheduling and sales executive GPS tracking",
        "Milestone-based payment demand letters",
        "Channel partner and broker payout management",
        "Automated legal agreement generation"
      ],
      tag: "Lead Automation",
      industryLink: "/industries/real-estate",
      productLink: "/seo-services-in-patna"
    },
    {
      id: "hospitality",
      name: "Restaurants & Hospitality",
      headline: "Restaurants, Cafes & Banquet Halls",
      desc: "End-to-end POS, QR code ordering, banquet booking, and kitchen display systems (KDS) engineered for fast service and inventory control.",
      features: [
        "Contactless QR table ordering and digital menus",
        "Kitchen Display Systems (KDS) and captain apps",
        "Raw material and recipe-level inventory control",
        "Banquet event scheduling and advance billing",
        "Customer loyalty points and SMS campaigns",
        "Multi-outlet central cloud dashboard"
      ],
      tag: "POS & Inventory",
      industryLink: "/industries",
      productLink: "/it-company-in-patna/website-development-company-in-patna"
    },
    {
      id: "ecommerce",
      name: "E-commerce & Retail",
      headline: "D2C Brands, Wholesalers & Multi-Stores",
      desc: "Tailor-made e-commerce portals and retail inventory systems with real-time stock sync across physical stores and online channels.",
      features: [
        "Custom B2B wholesale pricing and credit limits",
        "Unified multi-warehouse stock management",
        "Integrated Razorpay, Paytm, Cashfree gateways",
        "Automated Shiprocket & logistics API sync",
        "Abandoned cart automated recovery pipelines",
        "GST-compliant automated invoicing and e-way bills"
      ],
      tag: "Scalable Arch",
      industryLink: "/industries/retail",
      productLink: "/ecommerce-website-development"
    },
    {
      id: "startups",
      name: "Startups & SaaS",
      headline: "Early-Stage MVPs & Cloud SaaS Products",
      desc: "Agile product engineering for startup founders looking to launch production-grade MVPs and scalable multi-tenant SaaS applications in 4-8 weeks.",
      features: [
        "Multi-tenant SaaS architecture & workspace isolation",
        "Stripe / Razorpay subscription recurring billing",
        "Role-based access control (RBAC) & OAuth2 login",
        "High-performance Next.js frontend with REST/GraphQL APIs",
        "Serverless cloud deployment on AWS / Vercel",
        "Comprehensive analytics and user audit logs"
      ],
      tag: "MVP to Scale",
      industryLink: "/compare/custom-software-vs-saas",
      productLink: "/it-company-in-patna/ai-automation-company-in-patna"
    }
  ];

  const servicesBreakdown = [
    {
      id: "erp",
      title: "ERP Development",
      headline: "Custom ERP Software Development in Patna",
      description: "Manage your business operations through a centralized ERP software solution built around your workflow. We develop ERP systems for inventory, purchasing, sales, finance, employees, warehouse operations, reporting, and other business processes.",
      features: [
        "Inventory and stock management",
        "Purchase and sales management",
        "Warehouse management",
        "Employee and payroll modules",
        "Reports and dashboards",
        "Role-based access control",
        "Business workflow automation",
        "Third-party integrations (Accounting, Tally, SMS)"
      ],
      bestSuitedFor: "Distributors, animal feed manufacturers, trading networks, and growing enterprises.",
      relatedProject: {
        name: "Feedrani Animal Feed Manufacturing & Wholesale Trading ERP",
        link: "/case-studies/feedrani-website-development-case-study"
      },
      learnMoreUrl: "/software-development-company-in-patna"
    },
    {
      id: "crm",
      title: "CRM Development",
      headline: "Custom CRM Software Development in Patna",
      description: "Build a centralized CRM system to manage leads, customers, sales activities, follow-ups, and communication. A custom CRM can be configured around your sales process instead of requiring your team to adapt to a fixed workflow.",
      features: [
        "Lead management & multi-channel ingestion",
        "Customer profile & history tracking",
        "Visual drag-and-drop sales pipeline",
        "Follow-up reminders & task alerts",
        "Team assignment & territory routing",
        "Lead source attribution & ROI tracking",
        "Interactive reports & conversion dashboards",
        "WhatsApp Business API and tele-calling integrations"
      ],
      bestSuitedFor: "B2B trading distributors, logistics shipment trackers, real estate builders, and sales teams.",
      relatedProject: {
        name: "Brijrani Goods Trading & LogiSafe Shipment Tracking CRM",
        link: "/software-development-company-in-patna"
      },
      learnMoreUrl: "/software-development-company-in-patna"
    },
    {
      id: "hrms",
      title: "HRMS Development",
      headline: "HRMS Software Development in Patna",
      description: "Manage employee information, attendance, leave, payroll, and HR operations through a centralized Human Resource Management System (HRMS). Depending on business requirements, an HRMS can integrate with attendance devices and biometric systems and automate employee-related workflows.",
      features: [
        "Employee records & digital documentation",
        "Attendance management (Geofenced QR & Biometric)",
        "Face-recognition integration available based on project requirements",
        "Leave management & automated approval hierarchy",
        "Payroll processing & automated payslip generation",
        "Biometric and hardware device integrations",
        "Employee self-service mobile portal",
        "Role-based access & compliance audit logs"
      ],
      bestSuitedFor: "Educational institutes, hospitals, corporate offices, factories, and retail chains.",
      relatedProject: {
        name: "Team Excellent QR Code & Biometric Attendance System",
        link: "/attendance-management-software"
      },
      learnMoreUrl: "/attendance-management-software"
    },
    {
      id: "hospital",
      title: "Hospital Software Development",
      headline: "Hospital & Clinic Management Software in Patna",
      description: "We develop hospital and clinic management software to help healthcare organizations manage appointments, patient information, billing, staff operations, and administrative workflows from a centralized platform.",
      features: [
        "Patient registration & digital OPD/IPD intake",
        "Doctor appointment booking & token queue displays",
        "Comprehensive electronic health records (EHR/EMR)",
        "Billing, GST invoices, and insurance claims",
        "Pharmacy inventory & medicine batch tracking",
        "Laboratory diagnostic report generation",
        "Clinical analytics reports & revenue dashboards",
        "User and healthcare staff role management"
      ],
      bestSuitedFor: "Hospitals, nursing homes, polyclinics, diagnostic networks, and pathology centers.",
      relatedProject: {
        name: "EHR Clinic Management & Patient Records Portal",
        link: "/electronic-health-records-software"
      },
      learnMoreUrl: "/electronic-health-records-software"
    },
    {
      id: "school",
      title: "School & Coaching Institute ERP",
      headline: "School ERP Development in Patna",
      description: "Manage admissions, students, fees, attendance, classes, examinations, staff, and parent communication through customized school and coaching institute management software.",
      features: [
        "Student admission management & enrollment forms",
        "Complete student profile & academic history",
        "Fee management with Razorpay & instant SMS receipts",
        "Automated biometric / QR student attendance",
        "Class, batch, and teacher timetable scheduling",
        "Examination management & report card generator",
        "Parent-teacher communication & broadcast alerts",
        "Staff management, payroll, and administrative dashboards"
      ],
      bestSuitedFor: "Schools, colleges, coaching institutes, and educational academies across Bihar.",
      relatedProject: {
        name: "Team Excellent Career Institute ERP & Exam Portal",
        link: "/industries/education"
      },
      learnMoreUrl: "/industries/education"
    },
    {
      id: "inventory",
      title: "Inventory Software Development",
      headline: "Custom Inventory Management Software",
      description: "Improve stock visibility with customized inventory management software for businesses handling products across stores, warehouses, or multiple locations. The system can be integrated with billing, ERP, e-commerce, or other business applications where required.",
      features: [
        "Real-time stock management & item catalogs",
        "Purchase and sales transaction tracking",
        "Barcode / QR-code scanning integration",
        "Low stock alerts & automated reorder notifications",
        "Warehouse bin & rack management",
        "Multi-location & branch stock transfers",
        "Product batch, expiry & variant management",
        "Comprehensive stock valuation reports & user permissions"
      ],
      bestSuitedFor: "Wholesalers, distributors, supermarkets, pharmacies, retail chains, and manufacturing plants.",
      relatedProject: {
        name: "Multi-Warehouse B2B Retail & Stock Sync Engine",
        link: "/ecommerce-website-development"
      },
      learnMoreUrl: "/ecommerce-website-development"
    },
    {
      id: "billing",
      title: "Billing Software Development",
      headline: "Custom Billing & Invoice Software",
      description: "Develop billing software around your business's invoicing and sales workflow. Solutions can include invoice generation, product management, customer records, tax calculations, payment tracking, and reporting.",
      features: [
        "Fast counter invoice & POS receipt generation",
        "GST billing software functionality & tax ledgers",
        "Product catalog with dynamic price tiers",
        "Customer ledger & outstanding payment tracking",
        "Thermal printer & standard A4/A5 printable invoices",
        "Barcode scanner integration for sub-second checkout",
        "Real-time sales & tax summary reports",
        "Direct integration with central inventory & accounting"
      ],
      bestSuitedFor: "Retail shops, wholesale traders, contractors, service vendors, and distribution outlets.",
      relatedProject: {
        name: "High-Speed Counter POS & Invoicing System",
        link: "/software-development-company-in-patna"
      },
      learnMoreUrl: "/software-development-company-in-patna"
    },
    {
      id: "ai",
      title: "AI Automation",
      headline: "AI Automation & Business Process Automation in Patna",
      description: "Use AI and automation to reduce repetitive manual tasks and improve business workflows. Webflora can develop customized automation solutions involving AI tools, APIs, chatbots, notifications, data processing, and business applications.",
      features: [
        "AI conversational chatbots with custom business context",
        "WhatsApp Business API automated workflows",
        "24/7 Automated lead qualification & routing",
        "Automated instant customer notifications (SMS, Email, WhatsApp)",
        "Customer support ticketing & resolution workflows",
        "Automated document processing & PDF data extraction",
        "API-based multi-platform data synchronizations",
        "AI-assisted business workflows tailored to your use case"
      ],
      bestSuitedFor: "High-inquiry brands, clinics, coaching institutes, customer service desks, and fast-growing startups.",
      relatedProject: {
        name: "Vegavan AI – Autonomous Chatbot & Support Automation",
        link: "/case-studies/case-study-vegavan-ai-smart-ai-chatbot"
      },
      learnMoreUrl: "/it-company-in-patna/ai-automation-company-in-patna"
    }
  ];

  const processSteps = [
    {
      step: "Step 1",
      number: "01",
      title: "Business Discovery",
      headline: "Understanding Your Organization & Workflow",
      desc: "Before writing any code, we conduct structured discovery sessions to thoroughly understand your business reality.",
      bulletsTitle: "We Understand:",
      bullets: [
        "What your business does and core revenue drivers",
        "Who will use the software (Admin, Staff, Customers, Field Agents)",
        "Current operational workflows & day-to-day manual touchpoints",
        "Problems & inefficiencies with the existing process",
        "Required feature sets & business logic rules",
        "Third-party integrations (Tally, Payment Gateways, Biometrics, WhatsApp)",
        "Expected user volume & peak concurrency",
        "Future requirements & 3-year scalability vision"
      ]
    },
    {
      step: "Step 2",
      number: "02",
      title: "Technical Planning",
      headline: "Architectural Design & Tech Stack Selection",
      desc: "Our senior software architects translate business requirements into technical blueprints and security frameworks.",
      bulletsTitle: "We Define the:",
      bullets: [
        "Application architecture (Microservices / Modular Monolith)",
        "Database structure (PostgreSQL, MongoDB, Redis caching)",
        "Granular user roles & Role-Based Access Control (RBAC)",
        "API requirements (REST endpoints, Webhooks, GraphQL)",
        "Technology stack (Next.js, Node.js, Python, Flutter)",
        "Security requirements (AES-256 encryption, SSL, JWT auth)",
        "Milestone-based agile development roadmap"
      ]
    },
    {
      step: "Step 3",
      number: "03",
      title: "UI/UX Design",
      headline: "Human-Centric Interface & Workflow Prototyping",
      desc: "We create interfaces based on the users, workflows, devices, and functionality required by the application.",
      bulletsTitle: "Design Inclusions:",
      bullets: [
        "Interactive Figma prototypes and design systems",
        "Role-specific UI views tailored for desktop, tablet, and mobile",
        "Intuitive navigation reducing staff training time to zero",
        "Dark-mode and high-contrast accessibility compliance",
        "Clickable walkthrough approval before development starts"
      ]
    },
    {
      step: "Step 4",
      number: "04",
      title: "Software Development",
      headline: "Agile Engineering & Full-Stack Implementation",
      desc: "The frontend, backend, database, APIs, authentication, integrations, and required business functionality are developed according to the approved scope.",
      bulletsTitle: "Engineering Deliverables:",
      bullets: [
        "High-performance responsive frontend components",
        "Secure backend REST/GraphQL API services",
        "Database schema migrations and optimized query indexing",
        "Secure authentication with multi-factor auth (MFA) & OAuth2",
        "Seamless third-party API and hardware integrations",
        "1-to-2 week milestone review sprints with live staging demo"
      ]
    },
    {
      step: "Step 5",
      number: "05",
      title: "Testing & Quality Checks",
      headline: "Rigorous QA, Security Audits & Load Benchmarks",
      desc: "We test functionality, responsiveness, performance, integrations, and important application workflows before deployment.",
      bulletsTitle: "Testing Protocols:",
      bullets: [
        "End-to-end user workflow & edge-case validation",
        "Cross-browser and mobile device compatibility checks",
        "API stress testing and high-traffic concurrency simulation",
        "Security vulnerability, SQL injection & XSS penetration testing",
        "Data backup and disaster recovery failover validation"
      ]
    },
    {
      step: "Step 6",
      number: "06",
      title: "Deployment & Training",
      headline: "Zero-Downtime Cloud Go-Live & Team Onboarding",
      desc: "After testing and approval, the software is deployed to the appropriate hosting or cloud environment.",
      bulletsTitle: "Launch Deliverables:",
      bullets: [
        "Production deployment on AWS, Vercel, or custom dedicated servers",
        "SSL installation, DNS routing, and CDN caching configuration",
        "Automated database daily snapshot backups setup",
        "Comprehensive user manuals and recorded video training",
        "100% Source code handover and repository transfer"
      ]
    },
    {
      step: "Step 7",
      number: "07",
      title: "Maintenance & Improvements",
      headline: "Continuous Optimization, SLAs & Feature Scaling",
      desc: "After launch, our Patna engineering team provides long-term maintenance and scaling support.",
      bulletsTitle: "After Launch, We Continue With:",
      bullets: [
        "Rapid bug fixes and patch releases",
        "Proactive security updates and library maintenance",
        "Database tuning and server performance optimization",
        "New feature additions and business expansion modules",
        "24/7 Server uptime monitoring and technical support SLAs"
      ]
    }
  ];

  const comparisonData = [
    {
      criteria: "Business Workflow",
      custom: "Engineered 100% around your exact business process",
      readyMade: "Forces your team to adapt to rigid predefined workflows"
    },
    {
      criteria: "Feature Set",
      custom: "Tailored to your needs without bloat or missing tools",
      readyMade: "Fixed feature set; often missing specific local requirements"
    },
    {
      criteria: "Third-Party Integrations",
      custom: "Direct integration with any API, payment, SMS, or hardware",
      readyMade: "Limited strictly to vendor-approved plug-ins"
    },
    {
      criteria: "User Roles & Permissions",
      custom: "Completely customizable role hierarchy and view access",
      readyMade: "Basic pre-set roles with restricted permission control"
    },
    {
      criteria: "Future Development",
      custom: "Can be expanded, modified, or scaled at any time",
      readyMade: "Dependent entirely on external vendor roadmap"
    },
    {
      criteria: "Ownership & Control",
      custom: "100% source code and database ownership by client",
      readyMade: "Vendor-controlled; risk of price hikes and lock-in"
    },
    {
      criteria: "Initial Investment",
      custom: "Higher initial build investment; zero monthly per-user licensing fees",
      readyMade: "Lower initial cost, but compounding recurring monthly fees"
    }
  ];

  const faqs = [
    {
      q: "What is a software development company?",
      a: "A software development company creates digital applications and systems based on specific business or technical requirements. This includes requirement planning, UI/UX design, database engineering, API integrations, frontend and backend programming, testing, deployment, and ongoing technical maintenance."
    },
    {
      q: "Is Webflora Technologies a software development company in Patna?",
      a: "Yes. Webflora Technologies is a Patna-based software development and digital solutions company with its corporate headquarters located at Saketpuri, Bajar Samiti, Patna, Bihar. We build custom software for businesses across Bihar and pan-India."
    },
    {
      q: "What software does Webflora Technologies develop?",
      a: "Webflora develops custom enterprise software, customized ERP systems, CRM platforms, Next.js web applications, mobile applications (iOS/Android), business workflow automations, SaaS MVPs, admin portals, and industry-specific tools for coaching institutes and healthcare clinics."
    },
    {
      q: "Can Webflora build custom software for a startup?",
      a: "Yes. Webflora partners with early-stage startups and MSMEs to develop scalable MVPs, SaaS products, and API-driven web applications with modern tech stacks, fast turnarounds, and full IP code ownership."
    },
    {
      q: "Does Webflora provide software development outside Patna?",
      a: "Yes. While our headquarters are in Patna, Bihar, our engineering team serves clients across India (Delhi, Mumbai, Bangalore, Pune, Kolkata) and internationally through structured remote agile development."
    },
    {
      q: "Does Webflora provide maintenance after software development?",
      a: "Yes. Every custom software project is backed by our post-launch support SLA covering cloud server management, database backups, security patches, performance optimization, and new feature additions."
    },
    {
      q: "How can I start a software development project?",
      a: "You can reach out by filling our project consultation form, calling our engineering desk at +91 8540814729, or messaging us on WhatsApp. We will schedule a discovery call to understand your requirements and provide a detailed technical scope and roadmap."
    },
    {
      q: "How much does custom software development cost in Patna?",
      a: "The cost of custom software development depends on application complexity, feature scope, number of user roles, database architecture, API integrations, and infrastructure needs. We provide modular milestone-based pricing with zero hidden fees and full source code handover."
    },
    {
      q: "How long does software development take?",
      a: "Timelines range from 3 to 6 weeks for focused business portals or workflow tools, and 8 to 16+ weeks for comprehensive multi-module ERP systems, SaaS platforms, or healthcare applications. We break every project into transparent agile milestones."
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

        {/* ── HIGH-CONVERTING 2-COLUMN HERO SECTION ── */}
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
                  Top Software Development Agency in Patna
                </span>
              </div>

              {/* Dominant High-Impact Heading - LCP Priority */}
              <h1 className="font-display font-black tracking-tight leading-[1.08] text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-white w-full">
                Software Development Company in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#FF3B00] to-red-500">
                  Patna
                </span>
              </h1>

              {/* Crisp, high-contrast Value Prop Subtext */}
              <p className="text-neutral-100 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
                <strong className="text-white font-medium">Webflora Technologies</strong> is a premier software development company in Patna building custom software, <Link href="/it-company-in-patna/website-development-company-in-patna" className="text-white hover:text-[#ff3b00] underline font-medium">web portals</Link>, <Link href="/it-company-in-patna/mobile-app-development-company-in-patna" className="text-white hover:text-[#ff3b00] underline font-medium">mobile apps</Link>, <Link href="/attendance-management-software" className="text-white hover:text-[#ff3b00] underline font-medium">ERP systems</Link>, CRM, and <Link href="/it-company-in-patna/ai-automation-company-in-patna" className="text-white hover:text-[#ff3b00] underline font-medium">AI automation</Link> for businesses across Bihar & India.
              </p>

              {/* Quick Value Metrics Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {[
                  { name: "100% Source Code Ownership", icon: ShieldCheck },
                  { name: "Sub-1s Native Speed", icon: Zap },
                  { name: "Enterprise Security", icon: ShieldCheck },
                  { name: "90+ Lighthouse Score", icon: Award }
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
                  aria-label="Start Software Project"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#d93200] hover:bg-[#c22d00] text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-full transition-all duration-300 shadow-[0_4px_25px_rgba(217,50,0,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Start Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/918540814729?text=Hi%20Webflora,%20I%20want%20to%20discuss%20a%20custom%20software%20development%20project%20in%20Patna."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
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

            {/* Right Column: Dynamic Tech Stack & SLA Dashboard */}
            <div className="lg:col-span-5 flex flex-col gap-4 relative">
              {/* Tech Stack Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950 border border-white/10 shadow-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-orange-300 font-bold">
                    Engineered Tech Stack
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">
                    ● Production Ready
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { name: "Next.js", icon: Code2, color: "text-white" },
                    { name: "Node.js", icon: Server, color: "text-emerald-400" },
                    { name: "PostgreSQL", icon: Database, color: "text-blue-400" },
                    { name: "Python", icon: Cpu, color: "text-amber-400" },
                    { name: "Docker", icon: Layers, color: "text-sky-400" },
                    { name: "AWS Cloud", icon: Globe, color: "text-orange-400" }
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
                  <p className="text-2xl sm:text-3xl font-black text-white font-display">99.9%</p>
                  <p className="text-[10px] font-mono uppercase text-neutral-300 tracking-wider font-semibold">Uptime SLA</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white font-display">Sub-1s</p>
                  <p className="text-[10px] font-mono uppercase text-neutral-300 tracking-wider font-semibold">Load Speed</p>
                </div>
                <div className="col-span-2 h-[1px] bg-white/5" />
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white font-display">200+</p>
                  <p className="text-[10px] font-mono uppercase text-neutral-300 tracking-wider font-semibold">Shipped Systems</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-orange-300 font-display">100%</p>
                  <p className="text-[10px] font-mono uppercase text-neutral-300 tracking-wider font-semibold">Code Handover</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CLIENT MARQUEE ── */}
        <ClientMarquee />

        {/* ── AEO & GEO DUAL ENTITY BLOCK ── */}
        <section className="py-16 bg-[#080808] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* AEO Quick Answer Block */}
              <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-[#ff3b00]/30 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#ff3b00]/20 border-b border-l border-[#ff3b00]/40 rounded-bl-2xl text-[11px] font-mono text-[#ff3b00] uppercase tracking-wider font-semibold">
                  AEO Direct Answer
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#ff3b00]/10 border border-[#ff3b00]/30 flex items-center justify-center text-[#ff3b00]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                      Which is a Software Development Company in Patna?
                    </h2>
                  </div>
                  <p className="text-neutral-200 text-sm sm:text-base leading-relaxed font-light mb-4">
                    <strong className="text-white font-medium">Webflora Technologies</strong> is a Patna-based software development company providing custom software, <Link href="/attendance-management-software" className="text-[#ff3b00] hover:underline font-medium">ERP</Link>, CRM, <Link href="/it-company-in-patna/website-development-company-in-patna" className="text-[#ff3b00] hover:underline font-medium">web applications</Link>, <Link href="/it-company-in-patna/mobile-app-development-company-in-patna" className="text-[#ff3b00] hover:underline font-medium">mobile applications</Link>, and <Link href="/it-company-in-patna/ai-automation-company-in-patna" className="text-[#ff3b00] hover:underline font-medium">business automation solutions</Link> for businesses across Bihar and India.
                  </p>
                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-light">
                    Headquartered near NMCH College at Saketpuri, Bajar Samiti in Patna, the company builds high-performance digital systems tailored to exact business workflows with full source code ownership. Explore our <Link href="/case-studies" className="text-neutral-100 hover:text-[#ff3b00] underline font-medium">verified customer case studies</Link>.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-200 font-medium">
                  <Link href="/about" className="hover:text-white transition">Entity: Webflora Technologies</Link>
                  <span className="text-emerald-400 flex items-center gap-1 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Local Entity
                  </span>
                </div>
              </div>

              {/* GEO Entity Knowledge Card */}
              <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-[#ff3b00]" />
                      <span className="text-xs font-mono uppercase tracking-wider text-neutral-200 font-semibold">GEO Knowledge Graph Entity</span>
                    </div>
                    <Link href="/locations" className="text-xs text-neutral-200 hover:text-white transition font-medium">Patna, Bihar, India →</Link>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Regional Engineering Hub & Patna Headquarters
                  </h3>
                  <p className="text-neutral-200 text-xs sm:text-sm leading-relaxed font-light mb-4">
                    Serving businesses throughout Patna including Boring Road, Kankarbagh, Bailey Road, Fraser Road, Patliputra Colony, Danapur, Rajendra Nagar, and greater Bihar with on-site discovery workshops and continuous local support.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono text-neutral-200">
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">🏢 Saketpuri HQ</div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">📍 Boring Road</div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">📍 Kankarbagh</div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">📍 Bailey Road</div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">📍 Patliputra</div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">📍 Danapur</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-200">
                  <span>Pin: 800016 • Bihar</span>
                  <Link href="/contact" className="text-[#ff3b00] hover:underline font-medium">Schedule In-Person Meeting →</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── PROVEN CASE STUDIES & PRODUCTION DEPLOYMENTS ── */}
        <section className="py-20 border-b border-white/10 bg-gradient-to-b from-black to-[#070707]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-2">
                  Proven Real-World Track Record
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                  Software Engineering Case Studies & Deployments
                </h2>
                <p className="text-neutral-300 text-sm sm:text-base font-light mt-2 max-w-2xl">
                  Inspect real architectures built by our Patna software engineering team. Problem statements, engineering solutions, and tangible metrics.
                </p>
              </div>
              <Link
                href="/case-studies"
                aria-label="View all case studies"
                className="px-6 py-3 rounded-full bg-white/5 hover:bg-[#d93200] text-white text-xs sm:text-sm font-medium border border-white/10 transition-all flex items-center gap-2 shrink-0 w-fit"
              >
                <span>View All Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((cs, idx) => (
                <div
                  key={idx}
                  className="p-7 sm:p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-[#ff3b00]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#ff3b00]/10 border border-[#ff3b00]/30 text-[11px] font-mono text-[#ff3b00] font-semibold">
                        {cs.category}
                      </span>
                      <span className="text-xs font-mono text-neutral-300 font-medium">
                        {cs.client}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#ff3b00] transition-colors">
                      <Link href={`/case-studies/${cs.slug}`} aria-label={`Read case study: ${cs.title}`}>
                        {cs.title}
                      </Link>
                    </h3>

                    <div className="p-3.5 rounded-xl bg-[#ff3b00]/5 border border-[#ff3b00]/15 mb-4 text-xs sm:text-sm text-emerald-400 font-medium flex items-center gap-2">
                      <Star className="w-4 h-4 text-[#ff3b00] shrink-0 fill-[#ff3b00]" />
                      <span>{cs.metrics}</span>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm text-neutral-300 font-light mb-6">
                      <p><strong className="text-neutral-200 font-medium">Problem:</strong> {cs.problem}</p>
                      <p><strong className="text-neutral-200 font-medium">Engineering Solution:</strong> {cs.solution}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {cs.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-neutral-200 font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      aria-label={`Read case study for ${cs.title}`}
                      className="text-xs text-[#ff3b00] hover:text-white font-medium flex items-center gap-1 group-hover:translate-x-1 transition-all"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT DOES A SOFTWARE DEVELOPMENT COMPANY IN PATNA DO? ── */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-2">
                Core Capabilities & Offerings
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
                What Does a Software Development Company in Patna Do?
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base font-light">
                A software development company designs, develops, tests, deploys, and maintains software applications for specific business or technical requirements. At Webflora Technologies, our development approach covers discovery, architecture, engineering, testing, optimization, and continuous improvement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Custom Business Software", icon: Code2, desc: "Bespoke internal software solving organizational bottlenecks, data entry redundancies, and workflow friction.", link: "/compare/custom-software-vs-saas" },
                { title: "ERP Development", icon: Layers, desc: "Centralized platforms uniting sales, inventory, accounting, payroll, and logistics into a single dashboard.", link: "/attendance-management-software" },
                { title: "CRM Development", icon: Users, desc: "Lead pipeline tracking, customer 360 history, follow-up reminders, and sales team accountability software.", link: "/seo-services-in-patna" },
                { title: "Web Application Development", icon: Globe, desc: "Fast, responsive browser portals, client onboarding dashboards, and interactive SaaS platforms.", link: "/it-company-in-patna/website-development-company-in-patna" },
                { title: "SaaS Product Development", icon: Rocket, desc: "Multi-tenant cloud platforms engineered for subscription monetization, API scaling, and high concurrency.", link: "/why-webflora" },
                { title: "Business Management Systems", icon: BarChart3, desc: "Custom operational software designed for retail chains, coaching institutes, and manufacturing facilities.", link: "/industries" },
                { title: "API Development & Integration", icon: Workflow, desc: "Connecting payment gateways, SMS/WhatsApp APIs, biometric scanners, and external third-party tools.", link: "/it-company-in-patna/ai-automation-company-in-patna" },
                { title: "Workflow Automation", icon: Zap, desc: "Eliminating repetitive manual labor with automated data sync, document generation, and alert triggers.", link: "/it-company-in-patna/ai-automation-company-in-patna" },
                { title: "Mobile Application Development", icon: Smartphone, desc: "Cross-platform iOS and Android apps connected in real time to your central databases and ERP.", link: "/it-company-in-patna/mobile-app-development-company-in-patna" },
                { title: "AI-Powered Business Solutions", icon: Cpu, desc: "LLM integrations, AI document extractors, automated customer support agents, and predictive reports.", link: "/it-company-in-patna/ai-chatbot-company-in-patna" },
                { title: "Admin Dashboards & Portals", icon: Sliders, desc: "Secure multi-tier access panels with granular permission roles, audit trails, and live analytics.", link: "/software-development-company-in-patna" },
                { title: "Industry-Specific Solutions", icon: Building2, desc: "Custom software tailored for coaching institutes, hospitals, real estate developers, and restaurants in Bihar.", link: "/electronic-health-records-software" }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={idx}
                    href={item.link}
                    aria-label={`Explore ${item.title}`}
                    className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#ff3b00]/40 transition-all duration-300 group block"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-[#ff3b00]/10 border border-white/10 group-hover:border-[#ff3b00]/30 flex items-center justify-center text-white group-hover:text-[#ff3b00] transition-colors mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#ff3b00] transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#ff3b00]" />
                    </h3>
                    <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CUSTOM SOFTWARE DEVELOPMENT SERVICES IN PATNA (ISLAND COMPONENT) ── */}
        <section className="py-20 bg-[#080808] border-b border-white/10" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-2">
                Engineering Capabilities & Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
                Software Development Services in Patna
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                Webflora Technologies provides custom software development services in Patna for businesses, startups, educational institutions, healthcare organizations, retailers, and other organizations.
              </p>
            </div>

            <ServicesTabsWidget servicesBreakdown={servicesBreakdown} />
          </div>
        </section>

        {/* ── SOFTWARE SOLUTIONS FOR DIFFERENT INDUSTRIES (ISLAND COMPONENT) ── */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-2">
                Industry-Specific Systems
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
                Software Solutions for Different Industries
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base font-light">
                Software requirements depend heavily on the industry and business workflow. Webflora develops technology solutions tailored to specific regional and commercial verticals across Bihar.
              </p>
            </div>

            <IndustryTabsWidget industries={industries} />
          </div>
        </section>

        {/* ── WHY CHOOSE WEBFLORA TECHNOLOGIES ── */}
        <section className="py-20 bg-[#080808] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-2">
                Verifiable Trust & Experience
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
                Why Choose Webflora Technologies for Software Development in Patna?
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base font-light">
                Choosing a software development partner involves more than comparing pricing. Here are verifiable facts and operational trust signals behind Webflora Technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Card 1: Patna HQ */}
              <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-5">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  Patna-Based Development Team
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-4">
                  Webflora Technologies operates from its headquarters at Saketpuri, Bajar Samiti, Patna, Bihar, offering local in-person meetings, requirement workshops, and direct regional accountability.
                </p>
                <Link href="/contact" aria-label="Visit Patna Office Coordinates" className="text-xs text-[#ff3b00] hover:underline font-mono font-medium">
                  Visit Patna Office Coordinates →
                </Link>
              </div>

              {/* Card 2: 200+ Projects */}
              <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-5">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  200+ Delivered Projects
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-4">
                  Over 200+ software applications, custom web portals, mobile apps, and ERP systems delivered for local brands, healthcare networks, and national clients.
                </p>
                <Link href="/case-studies" aria-label="View verified client engagements" className="text-xs text-emerald-400 font-mono flex items-center gap-1 hover:underline font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 150+ Verified Client Engagements →
                </Link>
              </div>

              {/* Card 3: 5+ Years Experience */}
              <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-5">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  5+ Years of Engineering Experience
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-4">
                  Half a decade of proven experience building scalable digital architectures, secure database pipelines, and high-concurrency cloud software.
                </p>
                <Link href="/why-webflora" aria-label="Learn why clients choose Webflora" className="text-xs text-neutral-200 hover:text-white font-mono flex items-center gap-1 font-medium">
                  Why Clients Choose Webflora →
                </Link>
              </div>

              {/* Card 4: MSME Registered */}
              <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  Government MSME Registered
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-4">
                  Formally registered under the Ministry of Micro, Small and Medium Enterprises with Government of India Udyam credentials.
                </p>
                <div className="text-xs text-neutral-200 font-mono bg-white/5 p-2 rounded-lg border border-white/5">
                  UDYAM-BR-26-0183379
                </div>
              </div>

              {/* Card 5: Founder-Led Execution */}
              <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-5">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  Founder-Led Execution
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-4">
                  Led by founders <strong className="text-white">Shashank Manohar (CTO)</strong> and <strong className="text-white">Amitesh Kumar (CEO)</strong>, ensuring hands-on engineering strategy and executive oversight on every project.
                </p>
                <Link href="/about" aria-label="Meet the leadership team" className="text-xs text-[#ff3b00] hover:underline flex items-center gap-1 font-mono font-medium">
                  Meet the Leadership Team <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Card 6: Post-Launch Support */}
              <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-5">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  Post-Launch SLA & Server Support
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-4">
                  Software requires ongoing updates. We provide active server management, cloud backups, zero-downtime deployments, and security monitoring.
                </p>
                <Link href="/contact" aria-label="Inquire about maintenance SLAs" className="text-xs text-emerald-400 font-mono hover:underline font-medium">
                  Inquire About Maintenance SLAs →
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ── CUSTOM SOFTWARE VS READY-MADE SOFTWARE ── */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-2">
                Objective Decision Guide
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
                Custom Software vs. Ready-Made Software
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base font-light">
                Custom software isn&apos;t automatically the right solution for every business. If an existing commercial product satisfies all requirements, a ready-made solution may be sufficient. Custom development becomes necessary when your workflows, scale, or competitive edge require bespoke logic. Read our <Link href="/compare/custom-software-vs-saas" className="text-[#ff3b00] underline font-medium">in-depth Custom vs SaaS analysis</Link>.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.02]">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th scope="col" className="p-4 sm:p-5 text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-200 font-semibold w-1/4">
                      Evaluation Parameter
                    </th>
                    <th scope="col" className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-[#ff3b00] w-3/8 bg-[#ff3b00]/10">
                      Custom Software (Webflora)
                    </th>
                    <th scope="col" className="p-4 sm:p-5 text-xs sm:text-sm font-semibold text-neutral-200 w-3/8">
                      Ready-Made / Off-the-Shelf SaaS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 sm:p-5 font-medium text-white flex items-center gap-2">
                        <Scale className="w-4 h-4 text-neutral-400 shrink-0" />
                        {row.criteria}
                      </td>
                      <td className="p-4 sm:p-5 text-neutral-200 bg-[#ff3b00]/[0.03]">
                        <span className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{row.custom}</span>
                        </span>
                      </td>
                      <td className="p-4 sm:p-5 text-neutral-300 font-light">
                        {row.readyMade}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-neutral-300 font-light max-w-4xl mx-auto text-center">
              💡 <strong className="text-white font-medium">When to choose custom:</strong> When your business processes give you a competitive advantage, when recurring monthly user licenses exceed ₹50,000/month, or when off-the-shelf software cannot integrate with your physical equipment and regional workflow. Check our <Link href="/compare/custom-software-vs-saas" className="text-[#ff3b00] underline font-medium">Detailed Software Comparison Guide</Link>.
            </div>
          </div>
        </section>

        {/* ── OUR 7-STEP SOFTWARE DEVELOPMENT PROCESS (ISLAND COMPONENT) ── */}
        <section className="py-20 bg-[#080808] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-2">
                Engineering Methodology
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
                Our 7-Step Software Development Process
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base font-light">
                Consistent with the engineering methodology described on our <Link href="/about" className="text-neutral-200 hover:text-[#ff3b00] underline font-medium">About page</Link>, every project follows a structured 7-step development lifecycle from business discovery to post-launch optimization.
              </p>
            </div>

            <ProcessStepsWidget processSteps={processSteps} />

            {/* Complete 7-Step Summary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((s, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/5 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-mono font-bold text-[#ff3b00]">
                        {s.number}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-300 uppercase font-semibold">
                        {s.step}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#ff3b00] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-neutral-300 text-xs font-light leading-relaxed mb-4">
                      {s.desc}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-white/5">
                      {s.bullets.slice(0, 3).map((b, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-neutral-300">
                          <span className="w-1 h-1 rounded-full bg-[#ff3b00]" />
                          <span className="truncate">{b}</span>
                        </div>
                      ))}
                      {s.bullets.length > 3 && (
                        <div className="text-[10px] text-[#ff3b00] font-mono pt-1 font-semibold">
                          + {s.bullets.length - 3} more deliverables
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-300">
                    <span>Phase {idx + 1} Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#ff3b00]" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-xs sm:text-sm text-neutral-300 font-light">
                Ready to initiate Step 1? <a href="#consultation" className="text-[#ff3b00] hover:underline font-medium">Schedule a Discovery Call with our Patna software team →</a>
              </p>
            </div>
          </div>
        </section>

        {/* ── COST & TIMELINE DETERMINANTS ── */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-2">
                Transparent Guidance
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
                Software Development Cost & Timelines in Patna
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base font-light">
                Get clear estimations based on engineering architecture, modules, and integration scope.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* Cost Factors */}
              <div className="lg:col-span-6 p-8 rounded-3xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ff3b00]/10 border border-[#ff3b00]/30 flex items-center justify-center text-[#ff3b00]">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    How Much Does Software Development Cost in Patna?
                  </h3>
                </div>
                <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
                  There is no single flat price for custom software because every system has different technical requirements. A small business management application and a multi-user enterprise ERP require completely different architectures.
                </p>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-200 mb-3 font-semibold">
                  Cost Determinants Include:
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-300 mb-6 font-light">
                  {[
                    "Number of feature modules",
                    "Application complexity & logic",
                    "User roles & permission tiers",
                    "UI/UX custom designs",
                    "Backend & database scale",
                    "Third-party API integrations",
                    "Payment & SMS gateways",
                    "Mobile app extensions (iOS/Android)",
                    "Data migration from legacy systems",
                    "Cloud server & SLA support"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-neutral-300">
                  💬 <strong className="text-white font-medium">Accurate Quote:</strong> Share your workflow during our consultation to receive a transparent fixed-scope milestone proposal.
                </div>
              </div>

              {/* Timeline Factors */}
              <div className="lg:col-span-6 p-8 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#ff3b00]/10 border border-[#ff3b00]/30 flex items-center justify-center text-[#ff3b00]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      How Long Does Software Development Take?
                    </h3>
                  </div>
                  <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
                    Development duration depends on the application scope. We work in 1-to-2 week agile sprints so you can test features incrementally instead of waiting months for a final release.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-white font-medium">Focused Business Tool / Custom CRM</span>
                      <span className="text-[#ff3b00] font-mono font-semibold">3 – 5 Weeks</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-white font-medium">Comprehensive Coaching / Hospital ERP</span>
                      <span className="text-[#ff3b00] font-mono font-semibold">6 – 10 Weeks</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-white font-medium">Enterprise Multi-Tenant SaaS & Mobile App</span>
                      <span className="text-[#ff3b00] font-mono font-semibold">10 – 16+ Weeks</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-neutral-300">
                  ⚡ <strong className="text-white font-medium">Sprint Methodology:</strong> Requirements → UI/UX Prototypes → Sprints → QA & Security Audits → Cloud Deployment.
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── VERIFIED GOOGLE CLIENT REVIEWS ── */}
        <GoogleReviewsSection />

        {/* ── PROJECT SCOPE & CONSULTATION FORM (CTA) (ISLAND COMPONENT) ── */}
        <section id="consultation" className="py-20 bg-[#080808] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Column: Scope Questions */}
              <div className="lg:col-span-5">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-2">
                  Start Your Project
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
                  Request a Software Development Consultation
                </h2>
                <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                  Looking for a software development company in Patna? Discuss your requirements directly with our engineering team and get actionable technical direction.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3b00] shrink-0 mt-0.5" />
                    <span>Free architectural review and tech stack recommendation</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3b00] shrink-0 mt-0.5" />
                    <span>Detailed milestone scope and timeline estimation</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3b00] shrink-0 mt-0.5" />
                    <span>Direct founder consultation (<Link href="/about" className="text-white hover:text-[#ff3b00] underline font-medium">Shashank Manohar & Amitesh Kumar</Link>)</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="text-xs text-neutral-300 mb-1 font-medium">Direct Engineering Hotline:</div>
                  <a href="tel:+918540814729" aria-label="Call Webflora Engineering Hotline" className="text-lg font-bold text-white hover:text-[#ff3b00] transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#ff3b00]" /> +91 8540814729
                  </a>
                  <div className="text-xs text-neutral-300 mt-2 font-mono">
                    Saketpuri, Bajar Samiti, Patna, Bihar – 800016
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Form with Explicit Labels & IDs */}
              <div className="lg:col-span-7">
                <ConsultationFormWidget />
              </div>

            </div>
          </div>
        </section>

        {/* ── FREQUENTLY ASKED QUESTIONS (ISLAND COMPONENT) ── */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-2">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
                Questions About Software Development in Patna
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base font-light">
                Direct, transparent answers regarding technology, costs, timelines, and post-launch maintenance.
              </p>
            </div>

            <FaqAccordionWidget faqs={faqs} />
          </div>
        </section>

        {/* ── ABOUT WEBFLORA TECHNOLOGIES & INTERNAL NAVIGATION LINKS ── */}
        <section className="py-16 bg-[#080808]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10">
              <div className="max-w-4xl mx-auto text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3">
                  About Webflora Technologies
                </h2>
                <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                  Webflora Technologies is a software development and digital solutions company headquartered in Patna, Bihar. The company works with startups, local businesses, <Link href="/industries/education" className="text-neutral-200 hover:text-[#ff3b00] underline font-medium">coaching institutes</Link>, <Link href="/ecommerce-website-development" className="text-neutral-200 hover:text-[#ff3b00] underline font-medium">e-commerce businesses</Link>, <Link href="/industries/healthcare" className="text-neutral-200 hover:text-[#ff3b00] underline font-medium">healthcare organizations</Link>, and enterprises across Bihar and India. Its core services include <Link href="/software-development-company-in-patna" className="text-[#ff3b00] underline font-medium">custom software development</Link>, <Link href="/it-company-in-patna/website-development-company-in-patna" className="text-neutral-200 hover:text-[#ff3b00] underline font-medium">website development</Link>, <Link href="/it-company-in-patna/mobile-app-development-company-in-patna" className="text-neutral-200 hover:text-[#ff3b00] underline font-medium">mobile application development</Link>, <Link href="/it-company-in-patna/ai-automation-company-in-patna" className="text-neutral-200 hover:text-[#ff3b00] underline font-medium">AI automation</Link>, and <Link href="/seo-services-in-patna" className="text-neutral-200 hover:text-[#ff3b00] underline font-medium">SEO & digital marketing</Link>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-xs sm:text-sm text-neutral-300">
                <div className="text-center md:text-left">
                  <span className="text-white font-medium block mb-1">Corporate Headquarters</span>
                  <span>NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri, Patna, Bihar – 800016, India.</span>
                </div>
                <div className="text-center">
                  <span className="text-white font-medium block mb-1">MSME / Udyam Credentials</span>
                  <span className="font-mono text-emerald-400 font-semibold">UDYAM-BR-26-0183379</span>
                </div>
                <div className="text-center md:text-right">
                  <span className="text-white font-medium block mb-1">Founder Leadership</span>
                  <Link href="/about" className="hover:text-white transition font-medium">Shashank Manohar (CTO) & Amitesh Kumar (CEO)</Link>
                </div>
              </div>

              {/* Comprehensive Cross-Service Internal Linking Matrix */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-300 mb-3 text-center font-semibold">
                  Explore Related Digital Engineering Capabilities
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
                  <Link href="/it-company-in-patna" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-200 hover:text-white border border-white/5 transition-colors">
                    IT Company in Patna
                  </Link>
                  <Link href="/seo-services-in-patna" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-200 hover:text-white border border-white/5 transition-colors">
                    SEO Services in Patna
                  </Link>
                  <Link href="/ecommerce-website-development" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-200 hover:text-white border border-white/5 transition-colors">
                    eCommerce Website Development
                  </Link>
                  <Link href="/it-company-in-patna/website-development-company-in-patna" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-200 hover:text-white border border-white/5 transition-colors">
                    Website Development Patna
                  </Link>
                  <Link href="/it-company-in-patna/mobile-app-development-company-in-patna" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-200 hover:text-white border border-white/5 transition-colors">
                    Mobile App Development Patna
                  </Link>
                  <Link href="/attendance-management-software" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-200 hover:text-white border border-white/5 transition-colors">
                    Attendance Software
                  </Link>
                  <Link href="/electronic-health-records-software" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-200 hover:text-white border border-white/5 transition-colors">
                    EHR Software
                  </Link>
                  <Link href="/it-company-in-patna/ai-automation-company-in-patna" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-200 hover:text-white border border-white/5 transition-colors">
                    AI Automation Bihar
                  </Link>
                  <Link href="/it-company-in-patna/ai-chatbot-company-in-patna" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-200 hover:text-white border border-white/5 transition-colors">
                    AI Chatbots
                  </Link>
                  <Link href="/compare/custom-software-vs-saas" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-200 hover:text-white border border-white/5 transition-colors">
                    Custom vs SaaS Comparison
                  </Link>
                  <Link href="/industries" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-200 hover:text-white border border-white/5 transition-colors">
                    All Industries
                  </Link>
                  <Link href="/industries/healthcare" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-200 hover:text-white border border-white/5 transition-colors">
                    Healthcare Solutions
                  </Link>
                  <Link href="/industries/education" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-200 hover:text-white border border-white/5 transition-colors">
                    Education Solutions
                  </Link>
                  <Link href="/industries/real-estate" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-200 hover:text-white border border-white/5 transition-colors">
                    Real Estate Systems
                  </Link>
                  <Link href="/industries/manufacturing" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-200 hover:text-white border border-white/5 transition-colors">
                    Manufacturing ERP
                  </Link>
                  <Link href="/case-studies" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-200 hover:text-white border border-white/5 transition-colors">
                    Case Studies
                  </Link>
                  <Link href="/about" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-200 hover:text-white border border-white/5 transition-colors">
                    About Webflora
                  </Link>
                  <Link href="/why-webflora" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-200 hover:text-white border border-white/5 transition-colors">
                    Why Webflora
                  </Link>
                  <Link href="/locations" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-200 hover:text-white border border-white/5 transition-colors">
                    Locations Served
                  </Link>
                  <Link href="/contact" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-200 hover:text-white border border-white/5 transition-colors">
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Geographic Cities Covered */}
              <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-center gap-2 text-[11px] text-neutral-300">
                <span>Serving Remotely:</span>
                {[
                  { name: "Delhi NCR", href: "/locations/delhi" },
                  { name: "Mumbai", href: "/locations/mumbai" },
                  { name: "Bangalore", href: "/locations/bangalore" },
                  { name: "Pune", href: "/locations/pune" },
                  { name: "Hyderabad", href: "/locations/hyderabad" },
                  { name: "Chennai", href: "/locations/chennai" },
                  { name: "Kolkata", href: "/locations/kolkata" }
                ].map((city) => (
                  <Link key={city.name} href={city.href} className="text-neutral-200 hover:text-[#ff3b00] underline font-medium">
                    {city.name}
                  </Link>
                ))}
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
