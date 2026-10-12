import Script from "next/script";
import {
  buildSoftwareApplicationSchema,
  buildProductSchema,
  buildOfferSchema,
  buildAggregateRatingSchema,
  buildReviewSchema,
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
  buildWebPageSchema,
  buildOrganizationSchema,
  buildProfessionalServiceSchema,
  buildServiceSchema,
  buildHowToSchema,
  buildItemListSchema,
  buildSiteNavigationElementSchema,
  toGraphSchema
} from "../lib/schemas";

export const dynamic = "force-static";

export const metadata = {
  title: "Attendance Management System & Software in Patna | Face Recognition & Biometric SaaS",
  description: "Best Attendance Management Software & Face Recognition System in Patna, Bihar. Webflora provides custom SaaS attendance, AI face scanning machines, eSSL biometric software, dynamic QR code attendance, and WhatsApp tracking systems with automated payroll.",
  keywords: [
    "saas attendance",
    "attendance management system",
    "face recognition attendance system",
    "attendance management software",
    "face attendance machine",
    "essl biometric software",
    "face scanning attendance system",
    "real time biometric software",
    "e time track lite",
    "attendance manager software",
    "attendance software",
    "qr code attendance system",
    "rfid attendance system",
    "face attendance system",
    "time attendance software",
    "attendance tracking software",
    "time attendance system",
    "employee attendance system",
    "online attendance management system",
    "online attendance system",
    "free attendance management system",
    "attendance tracking system",
    "time and attendance system",
    "attendance software in patna"
  ].join(", "),
  alternates: {
    canonical: "https://webfloratechnologies.com/attendance-management-software",
  },
  openGraph: {
    title: "Attendance Management System | Face Recognition & Biometric SaaS Software",
    description: "Enterprise Attendance Management Software & Online System with AI face scanning, eSSL biometric software sync, dynamic QR codes, and automated payroll integration.",
    url: "https://webfloratechnologies.com/attendance-management-software",
    siteName: "Webflora Technologies",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://webfloratechnologies.com/title-logo.png",
        width: 512,
        height: 512,
        alt: "Webflora Attendance Management Software Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Attendance Management System | AI Face Recognition & Biometrics",
    description: "Webflora Technologies builds custom attendance tracking software featuring AI CCTV face recognition, dynamic QR scanning, eSSL biometric hardware sync, and instant WhatsApp alerts.",
    images: ["https://webfloratechnologies.com/title-logo.png"],
  }
};

const jsonLdSchema = [
  buildOrganizationSchema(),
  buildProfessionalServiceSchema({
    name: "Webflora Technologies - Attendance & Biometric Software Solutions",
    url: "https://webfloratechnologies.com/attendance-management-software"
  }),
  buildServiceSchema({
    name: "Attendance Management Software Development & Hardware Integration",
    serviceType: "Enterprise Attendance & Biometric Software",
    description: "Custom AI face recognition attendance systems, dynamic QR code attendance, eSSL biometric hardware sync, RFID cards, and automated payroll software.",
    areaServed: "India"
  }),
  buildSoftwareApplicationSchema({
    name: "Webflora AI Face Recognition & Online Attendance Management System",
    operatingSystem: "Web, Android, iOS, Windows, Linux",
    applicationCategory: "BusinessApplication",
    description: "Enterprise online attendance management system supporting 8 distinct punch modes including face recognition attendance system, dynamic QR code attendance, eSSL biometric software sync, RFID, GPS geofencing, WhatsApp bots, and manual desk sheet logging.",
    image: "https://webfloratechnologies.com/title-logo.png",
    url: "https://webfloratechnologies.com/attendance-management-software",
    offers: { price: "0", priceCurrency: "INR", url: "https://webfloratechnologies.com/attendance-management-software" },
    aggregateRating: { ratingValue: 4.9, reviewCount: 142 }
  }),
  buildProductSchema({
    name: "Webflora Attendance Management SaaS & Enterprise Software",
    description: "AI-powered biometric face recognition, dynamic QR code, and eSSL hardware-synced attendance software with automated payroll calculation.",
    category: "Business SaaS Software",
    image: "https://webfloratechnologies.com/title-logo.png",
    url: "https://webfloratechnologies.com/attendance-management-software",
    offers: { price: "120000", priceCurrency: "INR", url: "https://webfloratechnologies.com/attendance-management-software" },
    aggregateRating: { ratingValue: 4.9, reviewCount: 142 },
    review: {
      authorName: "Vikram Sharma",
      reviewRating: 5,
      reviewBody: "Webflora's face recognition attendance software eliminated proxy attendance in our organization completely. The automated payroll integration saves us 20+ hours monthly."
    }
  }),
  buildWebPageSchema({
    name: "Attendance Management System & Software in Patna",
    description: "Best Attendance Management Software & Face Recognition System in Patna, Bihar.",
    url: "https://webfloratechnologies.com/attendance-management-software"
  }),
  buildBreadcrumbListSchema([
    { name: "Home", url: "/" },
    { name: "Attendance Software", url: "/attendance-management-software" }
  ]),
  buildHowToSchema({
    name: "How to Implement Webflora Attendance Management Software",
    description: "A structured 6-step roadmap for deploying AI face recognition and biometric attendance across your organization.",
    steps: [
      { name: "Audit Attendance Points & Hardware", text: "Evaluate your workplace punch points, existing eSSL/ZKTeco biometric devices, mobile field staff requirements, and shift timings." },
      { name: "Cloud Server & Edge Deployment", text: "Deploy Webflora secure cloud server instance with local edge caching for 100% offline punch persistence during internet downtime." },
      { name: "Biometric & Face Recognition Calibration", text: "Configure AI CCTV face recognition streams with 3D liveness detection or integrate biometric machines via API sync." },
      { name: "Shift Policies & Leave Workflows", text: "Set custom shift rotations, overtime rules, late grace periods, and automated manager approval workflows." },
      { name: "Rollout QR Kiosks & Mobile App", text: "Install tablet dynamic QR kiosks at entrance lobbies and distribute employee self-service mobile apps with GPS geofencing." },
      { name: "Automated Payroll Integration", text: "Link real-time attendance logs directly to automated salary sheets, EPF, ESIC, and TDS tax computation engines." }
    ]
  }),
  buildItemListSchema([
    { name: "AI CCTV & Tablet Face Recognition Attendance", url: "https://webfloratechnologies.com/attendance-management-software#punch-modes" },
    { name: "Rotating Dynamic QR Code Kiosk System", url: "https://webfloratechnologies.com/attendance-management-software#punch-modes" },
    { name: "eSSL & Real Time Biometric Hardware Sync", url: "https://webfloratechnologies.com/attendance-management-software#punch-modes" },
    { name: "GPS Geofenced Mobile Punch for Field Staff", url: "https://webfloratechnologies.com/attendance-management-software#punch-modes" },
    { name: "Instant WhatsApp Attendance & Alert Bot", url: "https://webfloratechnologies.com/attendance-management-software#punch-modes" },
    { name: "RFID & NFC Smart Card Access Control", url: "https://webfloratechnologies.com/attendance-management-software#punch-modes" },
    { name: "Offline Edge Sync with Zero Data Loss", url: "https://webfloratechnologies.com/attendance-management-software#punch-modes" },
    { name: "One-Click Automated Payroll & Statutory Compliance", url: "https://webfloratechnologies.com/attendance-management-software#payroll" }
  ]),
  buildSiteNavigationElementSchema(),
  buildFAQPageSchema([
    {
      question: "Can the AI Face Recognition System work with our existing CCTV cameras?",
      answer: "Yes! Our face scanning software connects directly to your existing CCTV camera video streams (Hikvision, Dahua, CP Plus). You don't need to buy extra face scanning machines."
    },
    {
      question: "Can Webflora connect with our current eSSL biometric fingerprint machines?",
      answer: "Yes. We provide direct connectors for eSSL biometric software, Real Time biometric software, e time track lite, and ZKTeco machines. All punches sync live into one central dashboard."
    },
    {
      question: "How does the Dynamic QR Code system stop proxy attendance?",
      answer: "Our system displays a rotating QR code on screen that refreshes every 15 seconds. Combined with mobile phone binding and GPS location checks, screenshot sharing and fake punches are completely blocked."
    },
    {
      question: "Is there a free demo available?",
      answer: "Yes! We provide a free live demo and trial environment so you can test our software before deciding."
    },
    {
      question: "What is the difference between subscription SaaS and custom software?",
      answer: "Subscription SaaS charges monthly fees per employee forever. With Webflora's custom software development option, you pay once, get full source code ownership, and pay zero monthly fees."
    },
    {
      question: "What happens if the internet connection goes down?",
      answer: "Attendance records store safely on your local device or server and automatically sync to the cloud as soon as internet connectivity returns."
    },
    {
      question: "How does the system calculate monthly payroll?",
      answer: "Late marks, overtime, shift allowances, and leave balances calculate automatically and export directly to Tally Prime or Excel in minutes."
    },
    {
      question: "Why choose Webflora for your attendance management system in Patna, Bihar?",
      answer: "Webflora offers an 8-in-1 hybrid attendance system combining AI CCTV face recognition, dynamic QR codes, eSSL biometric software integration, and field GPS tracking. We provide flat-rate software options with 100% source code ownership, zero per-user SaaS tax, offline edge sync, and local on-site support in Patna, Bihar."
    },
    {
      question: "How does the face recognition attendance system stop buddy punching and proxy punches?",
      answer: "Our face scanning attendance system uses 3D ISO-certified liveness detection to verify real human presence in 0.5 seconds, preventing photos, videos, or mobile screen spoofing."
    }
  ])
];

export default function AttendanceLayout({ children }) {
  return (
    <>
      <Script
        id="attendance-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toGraphSchema(jsonLdSchema)) }}
      />
      {children}
    </>
  );
}

