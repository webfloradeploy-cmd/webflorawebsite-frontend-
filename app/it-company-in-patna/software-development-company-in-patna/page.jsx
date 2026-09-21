"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Layers,
  Database,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  Users,
  Smartphone,
  Globe,
  Server,
  Settings,
  Cpu,
  BarChart3,
  FileCheck2,
  Clock,
  PhoneCall,
  Phone,
  Check,
  ChevronDown,
  ChevronUp,
  Award,
  Lock,
  Workflow,
  Laptop,
  GraduationCap,
  Heart,
  Store,
  Rocket,
  Utensils,
  MapPin,
  ExternalLink,
  HelpCircle,
  TrendingUp,
  Activity,
  Send,
  Sliders,
  DollarSign,
  Scale,
  FolderKanban,
  Star
} from "lucide-react";
import ClientMarquee from "../../Components/ClientMarquee";
import GoogleReviewsSection from "../../Components/GoogleReviewsSection";
import API_BASE_URL from "../../config";

const BRAND = "#ff3b00";

export default function SoftwareDevelopmentPatnaPage() {
  const [activeIndustryTab, setActiveIndustryTab] = useState("education");
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeServiceTab, setActiveServiceTab] = useState("erp");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    softwareType: "Custom Software Development",
    industry: "Education & Coaching",
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
          subject: `Software Consultation Request: ${formState.name} (${formState.softwareType} - ${formState.industry})`
        })
      });
      if (res.ok) {
        setFormSuccess(true);
      } else {
        alert("Submission failed. Please call +91 8540814729 or connect on WhatsApp directly.");
      }
    } catch (err) {
      alert("Network error. Please reach out via WhatsApp at +91 8540814729.");
    } finally {
      setFormLoading(false);
    }
  };

  const caseStudies = [
    {
      title: "Smart QR Code & Biometric Attendance System",
      slug: "smart-qr-code-attendance-system",
      client: "Enterprise & Educational Hubs in Bihar",
      category: "ENTERPRISE SOFTWARE",
      metrics: "99.8% On-Time Log Accuracy • Zero Proxy Entries",
      problem: "Traditional manual register attendance caused time-theft, buddy punching, and reconciliation delays for institutions.",
      solution: "Engineered real-time QR code generation, GPS geofencing, and automated daily WhatsApp attendance reporting for staff and parents.",
      tech: ["Node.js", "PostgreSQL", "React Native", "AWS IoT"],
      internalLink: "/attendance-management-software"
    },
    {
      title: "Infinity Network Enterprise Management & Multi-Tier ERP",
      slug: "mlm-software-case-study-infinity-network-solutions",
      client: "Infinity Network Solutions",
      category: "CUSTOM ERP SYSTEM",
      metrics: "50,000+ Daily Transactions • Sub-second Payout Calc",
      problem: "Complex multi-tier distributor hierarchy calculations created accounting bottlenecks and payout delays.",
      solution: "Built a high-performance tree database computation engine with real-time wallet withdrawals and GST invoice generation.",
      tech: ["Next.js", "Node.js", "Redis", "Razorpay X"],
      internalLink: "/software-development-company-in-patna"
    },
    {
      title: "Vegavan AI – Autonomous Chatbot & Support Automation",
      slug: "case-study-vegavan-ai-smart-ai-chatbot",
      client: "Commercial & Healthcare Clients",
      category: "AI & WORKFLOW AUTOMATION",
      metrics: "84% Automated Lead Capture • 24/7 Response",
      problem: "High drop-off rate of potential customer enquiries during off-hours and high customer support labor overhead.",
      solution: "Integrated conversational LLMs with custom enterprise knowledge bases and CRM auto-assignment pipelines.",
      tech: ["OpenAI API", "Python", "FastAPI", "n8n"],
      internalLink: "/it-company-in-patna/ai-chatbot-company-in-patna"
    },
    {
      title: "Team Excellent Career Institute ERP & Exam Portal",
      slug: "complete-website-rebuild-optimization-for-team-excellent-career-institute",
      client: "Team Excellent Career Institute, Patna",
      category: "EDUCATION ERP & WEB",
      metrics: "300% Online Registration Surge • 100% Uptime",
      problem: "Outdated legacy website with no mobile compatibility, failing under high exam result traffic spikes.",
      solution: "Engineered ultra-fast static SSR Next.js portal with student admission funnels, test series, and Razorpay fee collections.",
      tech: ["Next.js", "Tailwind CSS", "MongoDB", "Razorpay"],
      internalLink: "/industries/education"
    }
  ];

  const industries = [
    {
      id: "education",
      name: "Education & Coaching",
      icon: GraduationCap,
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
      icon: Heart,
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
      icon: Building2,
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
      icon: Utensils,
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
      icon: Store,
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
      icon: Rocket,
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
      icon: Layers,
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
      bestSuitedFor: "Distributors, manufacturers, retailers, service businesses, and growing organizations.",
      relatedProject: {
        name: "Infinity Network Enterprise Management & Multi-Tier ERP",
        industry: "Enterprise Operations",
        features: "Distributor hierarchy, automated wallet payouts, GST ledger sync",
        tech: "Next.js, Node.js, PostgreSQL, Redis",
        link: "/case-studies/mlm-software-case-study-infinity-network-solutions"
      },
      learnMoreUrl: "/software-development-company-in-patna"
    },
    {
      id: "crm",
      title: "CRM Development",
      headline: "Custom CRM Software Development in Patna",
      icon: Users,
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
      bestSuitedFor: "Real estate builders, service agencies, B2B sales teams, and corporate consultants.",
      relatedProject: {
        name: "Enterprise Multi-Channel Lead Ingestion CRM",
        industry: "Real Estate & Agency Sales",
        features: "Meta/Google lead webhook capture, WhatsApp follow-ups, executive tracking",
        tech: "React, Node.js, PostgreSQL, WhatsApp API",
        link: "/seo-services-in-patna"
      },
      learnMoreUrl: "/seo-services-in-patna"
    },
    {
      id: "hrms",
      title: "HRMS Development",
      headline: "HRMS Software Development in Patna",
      icon: Clock,
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
        name: "Smart QR Code & Biometric Attendance System",
        industry: "Corporate & Education",
        features: "Zero-proxy QR scanning, GPS geofencing, daily WhatsApp alerts",
        tech: "Node.js, PostgreSQL, React Native, AWS IoT",
        link: "/case-studies/smart-qr-code-attendance-system"
      },
      learnMoreUrl: "/attendance-management-software"
    },
    {
      id: "hospital",
      title: "Hospital Software Development",
      headline: "Hospital & Clinic Management Software in Patna",
      icon: Heart,
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
        industry: "Healthcare",
        features: "NABH-ready EHR, doctor scheduling, automated WhatsApp lab reports",
        tech: "Next.js, Node.js, PostgreSQL, HIPAA-ready arch",
        link: "/electronic-health-records-software"
      },
      learnMoreUrl: "/electronic-health-records-software"
    },
    {
      id: "school",
      title: "School & Coaching Institute ERP",
      headline: "School ERP Development in Patna",
      icon: GraduationCap,
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
        industry: "Education & Coaching",
        features: "Student admissions, batch tracking, online test series, fee collection",
        tech: "Next.js, MongoDB, Razorpay, SMS Gateways",
        link: "/case-studies/complete-website-rebuild-optimization-for-team-excellent-career-institute"
      },
      learnMoreUrl: "/industries/education"
    },
    {
      id: "inventory",
      title: "Inventory Software Development",
      headline: "Custom Inventory Management Software",
      icon: Building2,
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
        industry: "Retail & Distribution",
        features: "Live inventory deduction, barcode generation, multi-store transfer logs",
        tech: "Next.js, Node.js, PostgreSQL, Barcode SDK",
        link: "/ecommerce-website-development"
      },
      learnMoreUrl: "/ecommerce-website-development"
    },
    {
      id: "billing",
      title: "Billing Software Development",
      headline: "Custom Billing & Invoice Software",
      icon: DollarSign,
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
        industry: "Retail & Commerce",
        features: "1-click thermal printing, GST calculation, customer credit balance",
        tech: "React, Node.js, SQLite/PostgreSQL, Razorpay",
        link: "/software-development-company-in-patna"
      },
      learnMoreUrl: "/software-development-company-in-patna"
    },
    {
      id: "ai",
      title: "AI Automation",
      headline: "AI Automation & Business Process Automation in Patna",
      icon: Zap,
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
        industry: "AI & Workflow Automation",
        features: "84% Automated lead capture, conversational LLM context, instant CRM sync",
        tech: "OpenAI API, Python, FastAPI, n8n, WhatsApp Cloud API",
        link: "/case-studies/case-study-vegavan-ai-smart-ai-chatbot"
      },
      learnMoreUrl: "/it-company-in-patna/ai-automation-company-in-patna"
    }
  ];

  const [activeProcessStep, setActiveProcessStep] = useState(0);

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
      ],
      icon: "solar:compass-bold-duotone"
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
      ],
      icon: "solar:diagram-up-bold-duotone"
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
      ],
      icon: "solar:palette-bold-duotone"
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
      ],
      icon: "solar:code-circle-bold-duotone"
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
      ],
      icon: "solar:shield-check-bold-duotone"
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
      ],
      icon: "solar:rocket-bold-duotone"
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
      ],
      icon: "solar:settings-bold-duotone"
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
            {"</software_dev>"}
          </div>
          <div className="absolute left-[2%] bottom-[20%] hidden 2xl:block opacity-10 animate-float-2 pointer-events-none text-white text-3xl font-mono select-none" aria-hidden="true">
            {"{ enterprise_erp }"}
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
              Software Development Company in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#FF3B00] to-red-500 font-black drop-shadow-[0_0_35px_rgba(255,59,0,0.35)]">
                Patna
              </span>
            </h1>

            {/* Subtext description */}
            <p className="text-neutral-300 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-6 px-1 sm:px-0">
              <strong className="text-white font-medium">Webflora Technologies</strong> is a premier software development company in Patna building custom software, <Link href="/it-company-in-patna/website-development-company-in-patna" className="text-white hover:text-[#ff3b00] underline">web applications</Link>, <Link href="/it-company-in-patna/mobile-app-development-company-in-patna" className="text-white hover:text-[#ff3b00] underline">mobile applications</Link>, <Link href="/attendance-management-software" className="text-white hover:text-[#ff3b00] underline">ERP systems</Link>, CRM, and <Link href="/it-company-in-patna/ai-automation-company-in-patna" className="text-white hover:text-[#ff3b00] underline">AI automation</Link> for businesses across Bihar & India.
            </p>

            {/* Quick Capabilities Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-10 max-w-4xl mx-auto">
              {[
                { name: "Custom Web Applications", icon: Globe },
                { name: "ERP & CRM Systems", icon: Layers },
                { name: "Mobile Apps (iOS & Android)", icon: Cpu },
                { name: "AI Automation Workflows", icon: Sparkles },
                { name: "100% Source Code Ownership", icon: ShieldCheck }
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
                className="px-8 py-4 w-full sm:w-auto cursor-pointer bg-gradient-to-r from-[#FF3B00] via-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-sm sm:text-base font-bold tracking-wide text-center rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(255,59,0,0.4)] hover:scale-105 hover:shadow-[0_0_40px_rgba(255,59,0,0.6)] flex items-center justify-center gap-2 group"
              >
                <span>Get a Software Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/918540814729?text=Hi%20Webflora,%20I%20want%20to%20discuss%20a%20custom%20software%20development%20project%20in%20Patna."
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 w-full sm:w-auto bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-white text-sm sm:text-base font-semibold text-center rounded-full transition-all duration-300 backdrop-blur-md hover:scale-105 flex items-center justify-center gap-2"
              >
                <Icon icon="logos:whatsapp-icon" className="w-4 h-4 shrink-0" />
                <span>Chat on WhatsApp</span>
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

              <Link
                href="/compare/custom-software-vs-saas"
                className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-emerald-500/10 to-white/[0.01] border border-emerald-500/20 backdrop-blur-md hover:border-emerald-500/50 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)] hover:-translate-y-1 transition-all duration-300 group text-center block"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono text-emerald-400">
                  100%
                </div>
                <div className="text-neutral-300 text-[10px] sm:text-xs font-mono uppercase tracking-wider mt-1 font-semibold">
                  Code Ownership →
                </div>
              </Link>
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
                    <h2 className="text-lg sm:text-xl font-semibold text-white">
                      Which is a software development company in Patna?
                    </h2>
                  </div>
                  <p className="text-neutral-200 text-sm sm:text-base leading-relaxed font-light mb-4">
                    <strong className="text-white font-medium">Webflora Technologies</strong> is a Patna-based software development company providing custom software, <Link href="/attendance-management-software" className="text-[#ff3b00] hover:underline">ERP</Link>, CRM, <Link href="/it-company-in-patna/website-development-company-in-patna" className="text-[#ff3b00] hover:underline">web applications</Link>, <Link href="/it-company-in-patna/mobile-app-development-company-in-patna" className="text-[#ff3b00] hover:underline">mobile applications</Link>, and <Link href="/it-company-in-patna/ai-automation-company-in-patna" className="text-[#ff3b00] hover:underline">business automation solutions</Link> for businesses across Bihar and India.
                  </p>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    Headquartered near NMCH College at Saketpuri, Bajar Samiti in Patna, the company builds high-performance digital systems tailored to exact business workflows with full source code ownership. Explore our <Link href="/case-studies" className="text-neutral-200 hover:text-[#ff3b00] underline">verified customer case studies</Link>.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
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
                      <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">GEO Knowledge Graph Entity</span>
                    </div>
                    <Link href="/locations" className="text-xs text-neutral-400 hover:text-white transition">Patna, Bihar, India →</Link>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Webflora Technologies — Entity & Service Specifications
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-neutral-500 block text-[11px] uppercase">Business Name</span>
                      <strong className="text-white font-medium">Webflora Technologies</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-neutral-500 block text-[11px] uppercase">Industry</span>
                      <Link href="/it-company-in-patna" className="text-neutral-200 hover:text-[#ff3b00] transition">Software & Digital Engineering</Link>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-neutral-500 block text-[11px] uppercase">Headquarters</span>
                      <span className="text-neutral-200">Saketpuri, Bajar Samiti, Patna – 800016</span>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-neutral-500 block text-[11px] uppercase">MSME / Udyam Reg.</span>
                      <span className="text-emerald-400 font-mono">UDYAM-BR-26-0183379</span>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-neutral-500 block text-[11px] uppercase">Founders & Leadership</span>
                      <Link href="/about" className="text-neutral-200 hover:text-[#ff3b00] transition">Shashank Manohar (CTO) & Amitesh Kumar (CEO)</Link>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-neutral-500 block text-[11px] uppercase">Service Coverage</span>
                      <Link href="/locations" className="text-neutral-200 hover:text-[#ff3b00] transition">Patna, Bihar & All India</Link>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-2 text-[11px]">
                  {["Next.js", "Node.js", "React Native", "PostgreSQL", "MongoDB", "AWS", "Python/AI", "Docker"].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 text-neutral-300 border border-white/5 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── PROVEN CASE STUDIES & PRODUCTION DEPLOYMENTS (E-E-A-T & INTERNAL LINKS) ── */}
        <section className="py-20 border-b border-white/10 bg-gradient-to-b from-black to-[#070707]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-2">
                  Proven Real-World Track Record
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Software Engineering Case Studies & Deployments
                </h2>
                <p className="text-neutral-400 text-sm sm:text-base font-light mt-2 max-w-2xl">
                  Inspect real architectures built by our Patna software engineering team. Problem statements, engineering solutions, and tangible metrics.
                </p>
              </div>
              <Link
                href="/case-studies"
                className="px-6 py-3 rounded-full bg-white/5 hover:bg-[#ff3b00] text-white text-xs sm:text-sm font-medium border border-white/10 transition-all flex items-center gap-2 shrink-0 w-fit"
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
                      <span className="text-xs font-mono text-neutral-500">
                        {cs.client}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff3b00] transition-colors">
                      <Link href={`/case-studies/${cs.slug}`}>
                        {cs.title}
                      </Link>
                    </h3>

                    <div className="p-3.5 rounded-xl bg-[#ff3b00]/5 border border-[#ff3b00]/15 mb-4 text-xs sm:text-sm text-emerald-400 font-medium flex items-center gap-2">
                      <Star className="w-4 h-4 text-[#ff3b00] shrink-0 fill-[#ff3b00]" />
                      <span>{cs.metrics}</span>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm text-neutral-300 font-light mb-6">
                      <p><strong className="text-neutral-400 font-medium">Problem:</strong> {cs.problem}</p>
                      <p><strong className="text-neutral-400 font-medium">Engineering Solution:</strong> {cs.solution}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {cs.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-neutral-400 font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/case-studies/${cs.slug}`}
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What Does a Software Development Company in Patna Do?
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light">
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
                    className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#ff3b00]/40 transition-all duration-300 group block"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-[#ff3b00]/10 border border-white/10 group-hover:border-[#ff3b00]/30 flex items-center justify-center text-white group-hover:text-[#ff3b00] transition-colors mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#ff3b00] transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#ff3b00]" />
                    </h3>
                    <p className="text-neutral-400 text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CUSTOM SOFTWARE DEVELOPMENT SERVICES IN PATNA (DEEP DIVE) ── */}
        <section className="py-20 bg-[#080808] border-b border-white/10" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-2">
                Engineering Capabilities & Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Software Development Services in Patna
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                Webflora Technologies provides custom software development services in Patna for businesses, startups, educational institutions, healthcare organizations, retailers, and other organizations. Our solutions are designed around specific business workflows and can include ERP, CRM, HRMS, hospital management, school ERP, inventory, billing, and AI automation.
              </p>
            </div>

            {/* Service Navigation Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {servicesBreakdown.map((s) => {
                const IconComp = s.icon;
                const isActive = activeServiceTab === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveServiceTab(s.id)}
                    className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-[#ff3b00] text-white shadow-[0_0_20px_rgba(255,59,0,0.4)]"
                        : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5"
                    }`}
                  >
                    <IconComp className="w-4 h-4" />
                    <span>{s.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Service Showcase Card */}
            {servicesBreakdown.map((s) => {
              if (s.id !== activeServiceTab) return null;
              const IconComp = s.icon;
              return (
                <div
                  key={s.id}
                  className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 shadow-2xl relative overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                    {/* Left: What it does + Audience */}
                    <div className="lg:col-span-6 space-y-5">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#ff3b00]/10 border border-[#ff3b00]/30 flex items-center justify-center text-[#ff3b00]">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-mono uppercase tracking-wider text-[#ff3b00] font-semibold block">
                            {s.title}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-bold text-white">
                            {s.headline}
                          </h3>
                        </div>
                      </div>

                      <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                        {s.description}
                      </p>

                      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                        <div className="text-xs font-mono uppercase tracking-wider text-[#ff3b00] font-semibold mb-1">
                          Best suited for:
                        </div>
                        <p className="text-neutral-300 text-xs sm:text-sm">
                          {s.bestSuitedFor}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <a
                          href="#consultation"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff3b00] hover:bg-[#e03400] text-white text-xs sm:text-sm font-medium transition-colors duration-300 shadow-[0_0_20px_rgba(255,59,0,0.3)]"
                        >
                          <span>Request Consultation</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                        <Link
                          href={s.learnMoreUrl}
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs sm:text-sm font-medium transition-colors duration-300 border border-white/10"
                        >
                          <span>Learn More →</span>
                        </Link>
                      </div>
                    </div>

                    {/* Right: Key Features Inclusions */}
                    <div className="lg:col-span-6 bg-black/40 p-6 sm:p-8 rounded-2xl border border-white/5 h-full">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b00]" />
                        <span>{s.title} features can include:</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {s.features.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00] mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Real-World Case Study / E-E-A-T Proof Block */}
                  <div className="p-6 rounded-2xl bg-black/60 border border-[#ff3b00]/20 relative overflow-hidden">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10 mb-4">
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-1">
                          Proven Track Record // Verifiable Experience
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-white">
                          Related Project: {s.relatedProject.name}
                        </h4>
                      </div>
                      <Link
                        href={s.relatedProject.link}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#ff3b00] hover:text-white transition-colors self-start md:self-auto"
                      >
                        <span>View Project Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                      <div>
                        <span className="text-neutral-500 block mb-1">Industry / Domain:</span>
                        <span className="text-neutral-200 font-medium">{s.relatedProject.industry}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500 block mb-1">Delivered Modules:</span>
                        <span className="text-neutral-200 font-medium">{s.relatedProject.features}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500 block mb-1">Technology Stack:</span>
                        <span className="text-[#ff3b00] font-mono font-medium">{s.relatedProject.tech}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick 8-Services Grid Browser */}
            <div className="mt-12">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-4 text-center">
                All 8 Core Development Capabilities at a Glance
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {servicesBreakdown.map((item) => {
                  const IconC = item.icon;
                  const isActive = activeServiceTab === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveServiceTab(item.id)}
                      className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                        isActive
                          ? "bg-[#ff3b00]/10 border-[#ff3b00] shadow-[0_0_20px_rgba(255,59,0,0.2)]"
                          : "bg-white/[0.02] hover:bg-white/[0.05] border-white/5 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                          isActive ? "bg-[#ff3b00] text-white" : "bg-white/5 text-[#ff3b00]"
                        }`}>
                          <IconC className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-mono text-neutral-500">
                          {item.id.toUpperCase()}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1.5">
                        {item.title}
                      </h4>
                      <p className="text-neutral-400 text-xs line-clamp-2 mb-3">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px]">
                        <span className="text-[#ff3b00] font-medium">
                          {isActive ? "Active View" : "Click to view"}
                        </span>
                        <Link
                          href={item.learnMoreUrl}
                          onClick={(e) => e.stopPropagation()}
                          className="text-neutral-400 hover:text-white transition-colors"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dedicated AEO Question & Answer Container */}
            <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#ff3b00]/10 via-[#0d0d0d] to-[#ff3b00]/5 border border-[#ff3b00]/30 shadow-2xl relative overflow-hidden">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3b00]/20 border border-[#ff3b00]/40 text-[#ff3b00] text-xs font-mono uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AEO Direct Answer • Semantic Entity Overview</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 leading-snug">
                  Which Software Development Services Does Webflora Technologies Provide?
                </h3>
                
                <p className="text-neutral-200 text-sm sm:text-base font-light leading-relaxed mb-4">
                  Webflora Technologies provides custom software development services including ERP development, CRM development, HRMS development, hospital management software, school and coaching institute ERP, inventory management software, billing software, and AI automation solutions.
                </p>
                
                <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                  These solutions can be developed as standalone applications or integrated with existing websites, mobile applications, databases, APIs, payment systems, communication platforms, and other business software depending on project requirements.
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
                  <span className="text-xs font-mono text-neutral-400 mr-2">Explore Solutions:</span>
                  {[
                    { label: "ERP Software", id: "erp" },
                    { label: "CRM System", id: "crm" },
                    { label: "HRMS & Attendance", id: "hrms" },
                    { label: "Hospital & EHR", id: "hospital" },
                    { label: "School ERP", id: "school" },
                    { label: "Inventory Engine", id: "inventory" },
                    { label: "GST Billing", id: "billing" },
                    { label: "AI Automation", id: "ai" }
                  ].map((pill) => (
                    <button
                      key={pill.id}
                      onClick={() => {
                        setActiveServiceTab(pill.id);
                        const el = document.getElementById("services");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#ff3b00]/20 text-xs font-medium text-neutral-300 hover:text-white border border-white/10 hover:border-[#ff3b00]/40 transition-all"
                    >
                      {pill.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SOFTWARE SOLUTIONS FOR DIFFERENT INDUSTRIES ── */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-2">
                Industry-Specific Systems
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Software Solutions for Different Industries
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light">
                Software requirements depend heavily on the industry and business workflow. Webflora develops technology solutions tailored to specific regional and commercial verticals across Bihar.
              </p>
            </div>

            {/* Industry Tab Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
              {industries.map((ind) => {
                const IconComponent = ind.icon;
                const isActive = activeIndustryTab === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveIndustryTab(ind.id)}
                    className={`p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-2 transition-all duration-300 border ${
                      isActive
                        ? "bg-[#ff3b00] border-[#ff3b00] text-white shadow-[0_0_25px_rgba(255,59,0,0.35)] scale-[1.02]"
                        : "bg-white/[0.02] hover:bg-white/[0.06] border-white/5 text-neutral-400 hover:text-white"
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                    <span className="text-xs font-medium">{ind.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Industry Content Card */}
            {industries.map((ind) => {
              if (ind.id !== activeIndustryTab) return null;
              const IconComponent = ind.icon;
              return (
                <div
                  key={ind.id}
                  className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 relative overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#ff3b00]/10 border border-[#ff3b00]/30 flex items-center justify-center text-[#ff3b00]">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {ind.headline}
                        </h3>
                        <span className="text-xs font-mono text-[#ff3b00] uppercase tracking-wider">
                          {ind.tag}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href={ind.industryLink}
                        className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-[#ff3b00] text-white text-xs sm:text-sm font-medium border border-white/10 transition-colors w-fit"
                      >
                        Explore {ind.name} Vertical →
                      </Link>
                      <Link
                        href={ind.productLink}
                        className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs sm:text-sm font-medium border border-white/10 transition-colors w-fit"
                      >
                        Dedicated Product Page →
                      </Link>
                    </div>
                  </div>

                  <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-8 max-w-4xl">
                    {ind.desc}
                  </p>

                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
                    Industry Feature Modules:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ind.features.map((feat, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-neutral-200">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── WHY CHOOSE WEBFLORA TECHNOLOGIES (VERIFIABLE E-E-A-T) ── */}
        <section className="py-20 bg-[#080808] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-2">
                Verifiable Trust & Experience
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Choose Webflora Technologies for Software Development in Patna?
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light">
                Choosing a software development partner involves more than comparing pricing. Here are verifiable facts and operational trust signals behind Webflora Technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Card 1: Patna HQ */}
              <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-5">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Patna-Based Development Team
                </h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed mb-4">
                  Webflora Technologies operates from its headquarters at Saketpuri, Bajar Samiti, Patna, Bihar, offering local in-person meetings, requirement workshops, and direct regional accountability.
                </p>
                <Link href="/contact" className="text-xs text-[#ff3b00] hover:underline font-mono">
                  Visit Patna Office Coordinates →
                </Link>
              </div>

              {/* Card 2: 200+ Projects */}
              <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-5">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  200+ Delivered Projects
                </h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed mb-4">
                  Over 200+ software applications, custom web portals, mobile apps, and ERP systems delivered for local brands, healthcare networks, and national clients.
                </p>
                <Link href="/case-studies" className="text-xs text-emerald-400 font-mono flex items-center gap-1 hover:underline">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 150+ Verified Client Engagements →
                </Link>
              </div>

              {/* Card 3: 5+ Years Experience */}
              <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-5">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  5+ Years of Engineering Experience
                </h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed mb-4">
                  Half a decade of proven experience building scalable digital architectures, secure database pipelines, and high-concurrency cloud software.
                </p>
                <Link href="/why-webflora" className="text-xs text-neutral-400 hover:text-white font-mono flex items-center gap-1">
                  Why Clients Choose Webflora →
                </Link>
              </div>

              {/* Card 4: MSME Registered */}
              <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Government MSME Registered
                </h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed mb-4">
                  Formally registered under the Ministry of Micro, Small and Medium Enterprises with Government of India Udyam credentials.
                </p>
                <div className="text-xs text-neutral-300 font-mono bg-white/5 p-2 rounded-lg border border-white/5">
                  UDYAM-BR-26-0183379
                </div>
              </div>

              {/* Card 5: Founder-Led Execution */}
              <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-5">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Founder-Led Execution
                </h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed mb-4">
                  Led by founders <strong className="text-white">Shashank Manohar (CTO)</strong> and <strong className="text-white">Amitesh Kumar (CEO)</strong>, ensuring hands-on engineering strategy and executive oversight on every project.
                </p>
                <Link href="/about" className="text-xs text-[#ff3b00] hover:underline flex items-center gap-1 font-mono">
                  Meet the Leadership Team <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Card 6: Post-Launch Support */}
              <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3b00] mb-5">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Post-Launch SLA & Server Support
                </h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed mb-4">
                  Software requires ongoing updates. We provide active server management, cloud backups, zero-downtime deployments, and security monitoring.
                </p>
                <Link href="/contact" className="text-xs text-emerald-400 font-mono hover:underline">
                  Inquire About Maintenance SLAs →
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ── CUSTOM SOFTWARE VS READY-MADE SOFTWARE (BALANCED E-E-A-T COMPARISON) ── */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-2">
                Objective Decision Guide
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Custom Software vs. Ready-Made Software
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light">
                Custom software isn&apos;t automatically the right solution for every business. If an existing commercial product satisfies all requirements, a ready-made solution may be sufficient. Custom development becomes necessary when your workflows, scale, or competitive edge require bespoke logic. Read our <Link href="/compare/custom-software-vs-saas" className="text-[#ff3b00] underline">in-depth Custom vs SaaS analysis</Link>.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.02]">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="p-4 sm:p-5 text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-400 font-semibold w-1/4">
                      Evaluation Parameter
                    </th>
                    <th className="p-4 sm:p-5 text-xs sm:text-sm font-semibold text-[#ff3b00] w-3/8 bg-[#ff3b00]/10">
                      Custom Software (Webflora)
                    </th>
                    <th className="p-4 sm:p-5 text-xs sm:text-sm font-semibold text-neutral-400 w-3/8">
                      Ready-Made / Off-the-Shelf SaaS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 sm:p-5 font-medium text-white flex items-center gap-2">
                        <Scale className="w-4 h-4 text-neutral-500 shrink-0" />
                        {row.criteria}
                      </td>
                      <td className="p-4 sm:p-5 text-neutral-200 bg-[#ff3b00]/[0.03]">
                        <span className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{row.custom}</span>
                        </span>
                      </td>
                      <td className="p-4 sm:p-5 text-neutral-400">
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

        {/* ── OUR 7-STEP SOFTWARE DEVELOPMENT PROCESS ── */}
        <section className="py-20 bg-[#080808] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-2">
                Engineering Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Software Development Process
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light">
                Consistent with the engineering methodology described on our <Link href="/about" className="text-neutral-200 hover:text-[#ff3b00] underline">About page</Link>, every project follows a structured 7-step development lifecycle from business discovery to post-launch optimization.
              </p>
            </div>

            {/* Interactive Step Navigator Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {processSteps.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProcessStep(idx)}
                  className={`px-4 py-2.5 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-2 ${
                    activeProcessStep === idx
                      ? "bg-[#ff3b00] text-white shadow-[0_0_20px_rgba(255,59,0,0.4)] scale-105 font-bold"
                      : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  <span className="opacity-70">{s.number}</span>
                  <span>{s.title}</span>
                </button>
              ))}
            </div>

            {/* Active Step Deep-Dive Card */}
            {processSteps.map((s, idx) => {
              if (idx !== activeProcessStep) return null;
              return (
                <div
                  key={idx}
                  className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-black border border-[#ff3b00]/30 shadow-2xl relative overflow-hidden mb-12"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-5">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3b00]/10 border border-[#ff3b00]/30 text-xs font-mono text-[#ff3b00] mb-4">
                        <span>Phase {s.number} of 07</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        {s.step}: {s.title}
                      </h3>
                      <p className="text-sm font-medium text-[#ff3b00] mb-4">
                        {s.headline}
                      </p>
                      <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                        {s.desc}
                      </p>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setActiveProcessStep((idx + 1) % processSteps.length)}
                          className="px-5 py-2.5 rounded-full bg-[#ff3b00] hover:bg-[#e03400] text-white text-xs font-medium transition-colors flex items-center gap-2"
                        >
                          <span>Next: {processSteps[(idx + 1) % processSteps.length].title}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <Link
                          href="/why-webflora"
                          className="px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-medium border border-white/10 transition-colors"
                        >
                          Why Webflora Process →
                        </Link>
                      </div>
                    </div>

                    <div className="lg:col-span-7 bg-black/60 p-6 sm:p-8 rounded-2xl border border-white/10">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b00]" />
                        {s.bulletsTitle}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {s.bullets.map((b, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Complete 7-Step Comprehensive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((s, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveProcessStep(idx)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                    activeProcessStep === idx
                      ? "bg-white/[0.06] border-[#ff3b00]/60 shadow-[0_0_25px_rgba(255,59,0,0.2)]"
                      : "bg-white/[0.02] hover:bg-white/[0.05] border-white/5 hover:border-white/20"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-mono font-bold text-[#ff3b00]">
                        {s.number}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-500 uppercase">
                        {s.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#ff3b00] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-neutral-400 text-xs font-light leading-relaxed mb-4">
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
                        <div className="text-[10px] text-[#ff3b00] font-mono pt-1">
                          + {s.bullets.length - 3} more deliverables
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-500">
                    <span>Explore Step {idx + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#ff3b00]" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-xs sm:text-sm text-neutral-400 font-light">
                Ready to initiate Step 1? <a href="#consultation" className="text-[#ff3b00] hover:underline font-medium">Schedule a Discovery Call with our Patna software team →</a>
              </p>
            </div>
          </div>
        </section>

        {/* ── COST & TIMELINE DETERMINANTS (AEO / E-E-A-T) ── */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Cost Factors */}
              <div className="lg:col-span-6 p-8 rounded-3xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ff3b00]/10 border border-[#ff3b00]/30 flex items-center justify-center text-[#ff3b00]">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    How Much Does Software Development Cost in Patna?
                  </h3>
                </div>
                <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
                  There is no single flat price for custom software because every system has different technical requirements. A small business management application and a multi-user enterprise ERP require completely different architectures.
                </p>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  Cost Determinants Include:
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-300 mb-6">
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
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-neutral-400">
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
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
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

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-neutral-400">
                  ⚡ <strong className="text-white font-medium">Sprint Methodology:</strong> Requirements → UI/UX Prototypes → Sprints → QA & Security Audits → Cloud Deployment.
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── VERIFIED GOOGLE CLIENT REVIEWS ── */}
        <GoogleReviewsSection />

        {/* ── PROJECT SCOPE & CONSULTATION FORM (CTA) ── */}
        <section id="consultation" className="py-20 bg-[#080808] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Scope Questions */}
              <div className="lg:col-span-5">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-2">
                  Start Your Project
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
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
                    <span>Direct founder consultation (<Link href="/about" className="text-white hover:text-[#ff3b00] underline">Shashank Manohar & Amitesh Kumar</Link>)</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="text-xs text-neutral-400 mb-1">Direct Engineering Hotline:</div>
                  <a href="tel:+918540814729" className="text-lg font-bold text-white hover:text-[#ff3b00] transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#ff3b00]" /> +91 8540814729
                  </a>
                  <div className="text-xs text-neutral-500 mt-2 font-mono">
                    Saketpuri, Bajar Samiti, Patna, Bihar – 800016
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Form */}
              <div className="lg:col-span-7">
                <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.04] border border-white/10 relative overflow-hidden backdrop-blur-xl">
                  {formSuccess ? (
                    <div className="py-12 text-center">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                      <p className="text-neutral-300 text-sm max-w-md mx-auto mb-6 font-light">
                        Thank you. A senior software engineer from our Patna office will contact you within 24 business hours to discuss your software architecture.
                      </p>
                      <button
                        onClick={() => {
                          setFormSuccess(false);
                          setFormState({
                            name: "",
                            email: "",
                            phone: "",
                            softwareType: "Custom Software Development",
                            industry: "Education & Coaching",
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
                            placeholder="name@company.com"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#ff3b00]/60 focus:bg-white/10 transition-all font-light"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-neutral-400 uppercase tracking-wider block mb-1.5 font-mono">
                            Software Type
                          </label>
                          <select
                            value={formState.softwareType}
                            onChange={(e) => setFormState({ ...formState, softwareType: e.target.value })}
                            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff3b00]/60 transition-all font-light"
                          >
                            <option value="Custom Software Development">Custom Business Software</option>
                            <option value="ERP Software Development">ERP Software System</option>
                            <option value="CRM Software Development">CRM & Sales Pipeline</option>
                            <option value="Web Application">Web Application / Portal</option>
                            <option value="Mobile Application">Mobile App (iOS/Android)</option>
                            <option value="SaaS / MVP Development">SaaS Product / MVP</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs text-neutral-400 uppercase tracking-wider block mb-1.5 font-mono">
                          Target Industry
                        </label>
                        <select
                          value={formState.industry}
                          onChange={(e) => setFormState({ ...formState, industry: e.target.value })}
                          className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff3b00]/60 transition-all font-light"
                        >
                          <option value="Education & Coaching">Education & Coaching Institutes</option>
                          <option value="Healthcare & Hospitals">Healthcare, Hospitals & Clinics</option>
                          <option value="Real Estate & Construction">Real Estate & Construction</option>
                          <option value="Restaurants & Hospitality">Restaurants & Hospitality</option>
                          <option value="E-commerce & Retail">E-commerce & Retail</option>
                          <option value="Startups & SaaS">Startups & Tech Founders</option>
                          <option value="Other Business">Other Commercial Business</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs text-neutral-400 uppercase tracking-wider block mb-1.5 font-mono">
                          Project Requirements / Main Features
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Briefly describe what you want to build, who will use it, and your expected timeline..."
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#ff3b00]/60 focus:bg-white/10 transition-all font-light resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={formLoading}
                        className="w-full py-4 rounded-full bg-[#ff3b00] hover:bg-[#e03400] text-white font-medium transition-all shadow-[0_0_25px_rgba(255,59,0,0.35)] flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                      >
                        {formLoading ? (
                          <span>Processing Inquiry...</span>
                        ) : (
                          <>
                            <span>Request Software Consultation</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <p className="text-[11px] text-neutral-500 text-center font-light">
                        🔒 100% Confidential. NDA signed on request. Zero spam.
                      </p>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── FREQUENTLY ASKED QUESTIONS (SEO & AEO ACCORDION) ── */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff3b00] font-semibold block mb-2">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Questions About Software Development in Patna
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light">
                Direct, transparent answers regarding technology, costs, timelines, and post-launch maintenance.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-white hover:text-[#ff3b00] transition-colors"
                    >
                      <span className="text-base sm:text-lg font-medium">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#ff3b00]" : "text-neutral-400"
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-neutral-300 text-sm sm:text-base font-light leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── ABOUT WEBFLORA TECHNOLOGIES & INTERNAL NAVIGATION LINKS ── */}
        <section className="py-16 bg-[#080808]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10">
              <div className="max-w-4xl mx-auto text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  About Webflora Technologies
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                  Webflora Technologies is a software development and digital solutions company headquartered in Patna, Bihar. The company works with startups, local businesses, <Link href="/industries/education" className="text-neutral-200 hover:text-[#ff3b00] underline">coaching institutes</Link>, <Link href="/ecommerce-website-development" className="text-neutral-200 hover:text-[#ff3b00] underline">e-commerce businesses</Link>, <Link href="/industries/healthcare" className="text-neutral-200 hover:text-[#ff3b00] underline">healthcare organizations</Link>, and enterprises across Bihar and India. Its core services include <Link href="/software-development-company-in-patna" className="text-[#ff3b00] underline">custom software development</Link>, <Link href="/it-company-in-patna/website-development-company-in-patna" className="text-neutral-200 hover:text-[#ff3b00] underline">website development</Link>, <Link href="/it-company-in-patna/mobile-app-development-company-in-patna" className="text-neutral-200 hover:text-[#ff3b00] underline">mobile application development</Link>, <Link href="/it-company-in-patna/ai-automation-company-in-patna" className="text-neutral-200 hover:text-[#ff3b00] underline">AI automation</Link>, and <Link href="/seo-services-in-patna" className="text-neutral-200 hover:text-[#ff3b00] underline">SEO & digital marketing</Link>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-xs sm:text-sm text-neutral-400">
                <div className="text-center md:text-left">
                  <span className="text-white font-medium block mb-1">Corporate Headquarters</span>
                  <span>NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri, Patna, Bihar – 800016, India.</span>
                </div>
                <div className="text-center">
                  <span className="text-white font-medium block mb-1">MSME / Udyam Credentials</span>
                  <span className="font-mono text-emerald-400">UDYAM-BR-26-0183379</span>
                </div>
                <div className="text-center md:text-right">
                  <span className="text-white font-medium block mb-1">Founder Leadership</span>
                  <Link href="/about" className="hover:text-white transition">Shashank Manohar (CTO) & Amitesh Kumar (CEO)</Link>
                </div>
              </div>

              {/* Comprehensive Cross-Service Internal Linking Matrix */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3 text-center">
                  Explore Related Digital Engineering Capabilities
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
                  <Link href="/it-company-in-patna" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-300 hover:text-white border border-white/5 transition-colors">
                    IT Company in Patna
                  </Link>
                  <Link href="/seo-services-in-patna" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-300 hover:text-white border border-white/5 transition-colors">
                    SEO Services in Patna
                  </Link>
                  <Link href="/ecommerce-website-development" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-300 hover:text-white border border-white/5 transition-colors">
                    eCommerce Website Development
                  </Link>
                  <Link href="/it-company-in-patna/website-development-company-in-patna" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-300 hover:text-white border border-white/5 transition-colors">
                    Website Development Patna
                  </Link>
                  <Link href="/it-company-in-patna/mobile-app-development-company-in-patna" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-300 hover:text-white border border-white/5 transition-colors">
                    Mobile App Development Patna
                  </Link>
                  <Link href="/attendance-management-software" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-300 hover:text-white border border-white/5 transition-colors">
                    Attendance Software
                  </Link>
                  <Link href="/electronic-health-records-software" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-300 hover:text-white border border-white/5 transition-colors">
                    EHR Software
                  </Link>
                  <Link href="/it-company-in-patna/ai-automation-company-in-patna" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-300 hover:text-white border border-white/5 transition-colors">
                    AI Automation Bihar
                  </Link>
                  <Link href="/it-company-in-patna/ai-chatbot-company-in-patna" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-300 hover:text-white border border-white/5 transition-colors">
                    AI Chatbots
                  </Link>
                  <Link href="/compare/custom-software-vs-saas" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-300 hover:text-white border border-white/5 transition-colors">
                    Custom vs SaaS Comparison
                  </Link>
                  <Link href="/industries" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-300 hover:text-white border border-white/5 transition-colors">
                    All Industries
                  </Link>
                  <Link href="/industries/healthcare" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-300 hover:text-white border border-white/5 transition-colors">
                    Healthcare Solutions
                  </Link>
                  <Link href="/industries/education" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-300 hover:text-white border border-white/5 transition-colors">
                    Education Solutions
                  </Link>
                  <Link href="/industries/real-estate" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-300 hover:text-white border border-white/5 transition-colors">
                    Real Estate Systems
                  </Link>
                  <Link href="/industries/manufacturing" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-300 hover:text-white border border-white/5 transition-colors">
                    Manufacturing ERP
                  </Link>
                  <Link href="/case-studies" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-300 hover:text-white border border-white/5 transition-colors">
                    Case Studies
                  </Link>
                  <Link href="/about" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-300 hover:text-white border border-white/5 transition-colors">
                    About Webflora
                  </Link>
                  <Link href="/why-webflora" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-300 hover:text-white border border-white/5 transition-colors">
                    Why Webflora
                  </Link>
                  <Link href="/locations" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-300 hover:text-white border border-white/5 transition-colors">
                    Locations Served
                  </Link>
                  <Link href="/contact" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ff3b00]/20 text-neutral-300 hover:text-white border border-white/5 transition-colors">
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Geographic Cities Covered */}
              <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-center gap-2 text-[11px] text-neutral-500">
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
                  <Link key={city.name} href={city.href} className="text-neutral-400 hover:text-[#ff3b00] underline">
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
