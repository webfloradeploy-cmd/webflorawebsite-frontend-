import {
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildWebPageSchema,
  buildServiceSchema,
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
  buildLocalBusinessSchema,
  buildProfessionalServiceSchema,
  buildProductSchema,
  buildAggregateRatingSchema,
  buildReviewSchema,
  toGraphSchema
} from "../../lib/schemas";

export const dynamic = "force-static";

export const metadata = {
  title: "Software Development Company in Patna | Webflora Technologies",
  description: "Webflora Technologies is a software development company in Patna building custom software, ERP, CRM, web applications and business automation solutions.",
  keywords: [
    "software development company in patna",
    "software development services in patna",
    "custom software development company in patna",
    "custom software development in patna",
    "software company in patna",
    "best software development company in patna",
    "best software company in patna bihar",
    "top software development company in patna",
    "software development agency in patna",
    "software developers in patna",
    "software company in bihar",
    "erp software development in patna",
    "custom erp software development in patna",
    "erp development company in patna",
    "crm development company patna",
    "custom crm software development in patna",
    "hrms software development in patna",
    "hrms development company in patna",
    "attendance management software patna",
    "hospital software development patna",
    "hospital and clinic management software in patna",
    "clinic management software patna",
    "school erp development in patna",
    "coaching institute erp software patna",
    "custom inventory management software patna",
    "inventory software development in patna",
    "billing software development in patna",
    "custom billing and invoice software patna",
    "gst billing software patna",
    "ai automation company in patna",
    "business process automation patna",
    "web application development company patna",
    "mobile app and software development patna",
    "enterprise software development bihar",
    "saas product development company patna",
    "software development company boring road patna",
    "software development company kankarbagh patna",
    "software development company saketpuri patna",
    "webflora technologies software development"
  ],
  alternates: {
    canonical: "https://webfloratechnologies.com/it-company-in-patna/software-development-company-in-patna",
  },
  openGraph: {
    title: "Software Development Company in Patna | Webflora Technologies",
    description: "Webflora Technologies is a Patna-based software development company building custom software, ERP, CRM, web applications and business automation solutions for startups, local businesses, and enterprises.",
    url: "https://webfloratechnologies.com/it-company-in-patna/software-development-company-in-patna",
    siteName: "Webflora Technologies",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://webfloratechnologies.com/title-logo.png",
        width: 512,
        height: 512,
        alt: "Software Development Company in Patna - Webflora Technologies"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in Patna | Webflora Technologies",
    description: "Webflora Technologies builds custom software, ERP, CRM, web applications and business automation solutions in Patna, Bihar.",
    images: ["https://webfloratechnologies.com/title-logo.png"],
  }
};

const softwareFaqs = [
  {
    question: "What is a software development company?",
    answer: "A software development company creates digital applications and systems based on specific business or technical requirements. This can include planning, UI/UX, programming, database development, API integration, testing, deployment, and maintenance."
  },
  {
    question: "Is Webflora Technologies a software development company in Patna?",
    answer: "Yes. Webflora Technologies is a Patna-based software development and digital solutions company with its headquarters at Saketpuri, Bajar Samiti, Patna, Bihar."
  },
  {
    question: "What software does Webflora Technologies develop?",
    answer: "Webflora develops custom software, ERP and CRM systems, web applications, mobile applications, business management systems, industry-specific software, and automation solutions."
  },
  {
    question: "Can Webflora build custom software for a startup?",
    answer: "Yes. Webflora works with startups as well as local businesses and enterprises across Bihar and India, developing scalable MVPs, SaaS platforms, and cloud applications."
  },
  {
    question: "Does Webflora provide software development outside Patna?",
    answer: "Yes. Although its headquarters are in Patna, Webflora provides software development services remotely to businesses across Bihar, pan-India, and overseas."
  },
  {
    question: "Does Webflora provide maintenance after software development?",
    answer: "Yes. The company provides complete post-launch support including server management, security updates, database optimization, bug fixes, and feature scaling."
  },
  {
    question: "How can I start a software development project?",
    answer: "Share your business requirements, expected features, target users, existing systems, and approximate timeline. The development team will discuss the appropriate architecture, technology stack, and project scope."
  },
  {
    question: "How much does custom software development cost in Patna?",
    answer: "The cost depends on application complexity, feature scope, user roles, integrations, UI/UX requirements, and hosting infrastructure. Custom business tools start from basic modular tiers to enterprise ERP architectures tailored to exact specifications."
  },
  {
    question: "How long does software development take?",
    answer: "Development timelines depend on scope: a focused business application typically takes 3 to 6 weeks, while a comprehensive multi-module ERP or SaaS platform can take 8 to 16+ weeks structured into discovery, design, development, QA, and deployment sprints."
  }
];

const jsonLdSchema = [
  buildOrganizationSchema(),
  buildWebSiteSchema(),
  buildWebPageSchema({
    name: "Software Development Company in Patna | Webflora Technologies",
    description: "Webflora Technologies is a software development company in Patna building custom software, ERP, CRM, web applications and business automation solutions.",
    url: "https://webfloratechnologies.com/it-company-in-patna/software-development-company-in-patna"
  }),
  buildServiceSchema({
    name: "Custom Software Development Services in Patna",
    serviceType: "Software Engineering, ERP Development, CRM Development, Web & Mobile Applications",
    description: "Custom software development, enterprise ERP systems, CRM software, web portals, mobile apps, and business workflow automations designed for startups, SMEs, and enterprises in Patna, Bihar and across India.",
    areaServed: "India"
  }),
  buildLocalBusinessSchema({
    name: "Webflora Technologies - Software Development Company in Patna",
    description: "Headquartered in Patna, Bihar, Webflora Technologies provides bespoke software development, ERP systems, CRM, and cloud engineering services."
  }),
  buildProfessionalServiceSchema({
    name: "Webflora Technologies Software Engineering Patna",
    description: "Professional software development company and digital engineering team based in Patna, Bihar."
  }),
  buildProductSchema({
    name: "Custom Enterprise Software & ERP Development",
    description: "Tailor-made software engineering, ERP, CRM, and cloud application development with 100% source code ownership and zero monthly per-user licensing fees.",
    category: "Software Development Service",
    url: "https://webfloratechnologies.com/it-company-in-patna/software-development-company-in-patna",
    offers: { price: "45000", priceCurrency: "INR", url: "https://webfloratechnologies.com/it-company-in-patna/software-development-company-in-patna" },
    aggregateRating: { ratingValue: 4.9, reviewCount: 156 }
  }),
  buildBreadcrumbListSchema([
    { name: "Home", url: "/" },
    { name: "IT Company In Patna", url: "/it-company-in-patna" },
    { name: "Software Development Company in Patna", url: "/it-company-in-patna/software-development-company-in-patna" }
  ]),
  buildFAQPageSchema(softwareFaqs),
  buildAggregateRatingSchema({ ratingValue: 4.9, reviewCount: 156 }),
  buildReviewSchema({
    authorName: "Nishant Kumar",
    reviewRating: 5,
    reviewBody: "Webflora gave us a website and software that customers compliment almost every week. Their team listened carefully to what we actually needed instead of pushing a template solution. Highly recommend Webflora to any business that takes quality seriously."
  }),
  buildReviewSchema({
    authorName: "SAHIL KUMAR",
    reviewRating: 5,
    reviewBody: "Our new software platform built by Webflora has been live for three months and not a single bug so far. Communication was clear and consistent throughout the entire project. Cannot recommend Webflora Technologies enough."
  }),
  buildReviewSchema({
    authorName: "Manish Kumar",
    reviewRating: 5,
    reviewBody: "I am a client of Webflora Technologies, and they developed my app, website, and software. The quality of work is very good, and the team is professional and cooperative. They understood my requirements well and delivered on time."
  }),
  buildReviewSchema({
    authorName: "Dr. Rajeshwar Sharma",
    reviewRating: 5,
    reviewBody: "Webflora Technologies developed our clinic and hospital management software with appointment booking and billing modules. Excellent Patna-based engineering team!"
  })
];

export default function SoftwareDevelopmentLayout({ children }) {
  return (
    <>
      <script
        id="software-development-patna-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(toGraphSchema(jsonLdSchema))
        }}
      />
      {children}
    </>
  );
}
