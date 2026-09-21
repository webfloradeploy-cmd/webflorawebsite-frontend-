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
  title: "Digital Marketing Agency in Patna for SEO, Google Ads & Business Growth | Webflora Technologies",
  description: "Webflora Technologies is a Patna-based digital marketing agency helping businesses improve search visibility, generate qualified enquiries and acquire customers through SEO, Local SEO, Google Ads, Meta Ads, and conversion-focused websites.",
  keywords: [
    "digital marketing agency in patna",
    "digital marketing company in patna",
    "digital marketing services in patna",
    "seo company in patna",
    "local seo services patna",
    "google ads agency in patna",
    "ppc services patna",
    "meta ads agency patna",
    "social media marketing company in patna",
    "performance marketing agency patna",
    "best digital marketing agency in bihar",
    "aeo agency patna",
    "geo agency patna",
    "lead generation company patna",
    "webflora technologies digital marketing"
  ],
  alternates: {
    canonical: "https://webfloratechnologies.com/it-company-in-patna/digital-marketing-agency-in-patna",
  },
  openGraph: {
    title: "Digital Marketing Agency in Patna for SEO, Google Ads & Business Growth | Webflora Technologies",
    description: "Webflora Technologies is a Patna-based digital marketing agency helping businesses improve search visibility, generate qualified enquiries and acquire customers through SEO, Local SEO, Google Ads, Meta Ads, and conversion-focused websites.",
    url: "https://webfloratechnologies.com/it-company-in-patna/digital-marketing-agency-in-patna",
    siteName: "Webflora Technologies",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://webfloratechnologies.com/title-logo.png",
        width: 512,
        height: 512,
        alt: "Digital Marketing Agency in Patna - Webflora Technologies"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Patna for SEO, Google Ads & Business Growth | Webflora Technologies",
    description: "Webflora Technologies is a Patna-based digital marketing agency helping businesses improve search visibility, generate qualified enquiries and acquire customers through SEO, Local SEO, Google Ads, Meta Ads, and conversion-focused websites.",
    images: ["https://webfloratechnologies.com/title-logo.png"],
  }
};

const marketingFaqs = [
  {
    question: "What does a digital marketing agency in Patna do?",
    answer: "A digital marketing agency in Patna helps businesses attract customers through online channels such as Google Search, Google Ads, social media, local search, content marketing, and conversion-focused websites. Webflora Technologies provides these services along with AEO, GEO, analytics, and AI automation for businesses in Patna, Bihar, and across India."
  },
  {
    question: "How much does digital marketing cost in Patna?",
    answer: "Digital marketing costs in Patna vary according to the services, competition, target locations, content requirements, and advertising scope. Webflora's current plans start from ₹8,999/month for the services included in the Starter package, while multi-channel growth packages range from ₹18,999 to ₹34,999/month. Package fees cover listed marketing services; Google/Meta advertising budget is paid directly to the platforms."
  },
  {
    question: "Which digital marketing services does Webflora Technologies provide?",
    answer: "Webflora Technologies provides comprehensive digital marketing solutions including Search Engine Optimization (SEO), Local SEO (Google Maps / Google Business Profile), Google Ads (Search, Display, YouTube PPC), Meta Ads (Facebook & Instagram), Social Media Marketing (SMM), Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), conversion rate optimization (CRO), high-speed Next.js landing pages, and CRM lead tracking integrations."
  },
  {
    question: "How long does SEO take to show measurable results?",
    answer: "Organic search visibility is a compounding long-term asset. Technical audit fixes and Google Maps optimizations can show initial ranking improvements within 4 to 8 weeks, while ranking for competitive regional and commercial terms on Google's first page typically requires 3 to 6 months of structured on-page optimization, content publishing, and local authority building."
  },
  {
    question: "Do you provide Local SEO for businesses targeting Patna neighborhoods?",
    answer: "Yes. We optimize your Google Business Profile (GBP), manage categories, build consistent NAP citations across regional directories, target localized neighborhood keywords (such as Boring Road, Kankarbagh, Bailey Road, Fraser Road, and Patliputra), and implement systematic review collection workflows to improve visibility on Google Maps and Local 3-Pack results."
  },
  {
    question: "Do you manage Google Ads and pay-per-click (PPC) campaigns?",
    answer: "Yes. We set up, manage, and optimize Google Search, Display, Remarketing, and YouTube Ads. We conduct deep keyword research, structure high-intent match types, eliminate negative search terms to prevent wasted spend, and connect conversion tracking to measure qualified inquiries directly."
  },
  {
    question: "Do you manage Meta (Facebook & Instagram) advertising?",
    answer: "Yes. We manage end-to-end Meta advertising including custom graphic creative design, compelling ad copywriting, audience interest and lookalike targeting, Meta Pixel / Conversions API tracking setup, and campaign optimization focused on cost-per-lead (CPL) and return on ad spend (ROAS)."
  },
  {
    question: "Do you provide social media marketing and content creation?",
    answer: "Yes. We manage business profiles across Instagram, Facebook, and LinkedIn. Our deliverables include monthly content calendars, custom graphic design, caption copywriting, and scripting/editing support for short-form video reels to build brand authority and customer engagement."
  },
  {
    question: "Can you help our business optimize for AI search, AEO, and GEO?",
    answer: "Yes. We optimize your brand for answer engines and generative search tools like Google AI Overviews, ChatGPT Search, and Perplexity by structuring entity data, creating clear question-and-answer content, publishing verifiable business facts, and implementing structured Schema.org markup."
  },
  {
    question: "Do you work with businesses outside Patna?",
    answer: "Yes. While our headquarters are in Patna, Bihar, our digital marketing team serves businesses across Bihar (Muzaffarpur, Gaya, Bhagalpur, Darbhanga), pan-India (Delhi, Mumbai, Bangalore, Pune), and international clients remotely through agile communication and transparent reporting."
  },
  {
    question: "How do you measure and report digital marketing results?",
    answer: "We track meaningful business metrics rather than vanity impressions. This includes organic search impressions, qualified lead form submissions, direct phone calls, WhatsApp inquiries, cost-per-lead (CPL), and return on ad spend (ROAS) using Google Analytics 4 (GA4), Google Tag Manager (GTM), and CRM lead attribution dashboards."
  },
  {
    question: "How can I get started with a digital marketing campaign?",
    answer: "You can request a free consultation through our website form, call our Patna office at +91 8540814729, or message us on WhatsApp. We will audit your current online visibility, identify growth opportunities, and provide a transparent, milestone-driven digital marketing roadmap."
  }
];

const jsonLdSchema = [
  buildOrganizationSchema({
    description: "Webflora Technologies is an MSME-registered digital marketing and technology company in Patna, Bihar providing SEO, Google Ads, Meta Ads, and conversion systems."
  }),
  buildWebSiteSchema(),
  buildWebPageSchema({
    name: "Digital Marketing Agency in Patna for SEO, Google Ads & Business Growth",
    description: "Webflora Technologies is a Patna-based digital marketing agency helping businesses improve search visibility, generate qualified enquiries and acquire customers.",
    url: "https://webfloratechnologies.com/it-company-in-patna/digital-marketing-agency-in-patna"
  }),
  buildServiceSchema({
    name: "Digital Marketing Services in Patna",
    serviceType: "Digital Marketing, SEO, PPC & Social Media Marketing",
    description: "Performance digital marketing, Local SEO, Google Ads management, Meta Ads, AEO, GEO, and conversion-focused web engineering for businesses in Patna and Bihar."
  }),
  buildLocalBusinessSchema({
    name: "Webflora Technologies - Digital Marketing Agency Patna",
    description: "MSME-registered digital marketing agency and SEO company based at Saketpuri, Bajar Samiti, Patna, Bihar."
  }),
  buildProfessionalServiceSchema({
    name: "Webflora Technologies Digital Marketing Services Patna",
    description: "Professional digital marketing agency, SEO services, Google Ads management, and AI search optimization team based in Patna, Bihar."
  }),
  buildProductSchema({
    name: "Digital Marketing & Growth Campaigns Patna",
    description: "Monthly digital marketing management covering SEO, Google Maps, Google Ads, Meta Ads, and conversion tracking.",
    category: "Digital Marketing Service",
    url: "https://webfloratechnologies.com/it-company-in-patna/digital-marketing-agency-in-patna",
    offers: { price: "8999", priceCurrency: "INR", url: "https://webfloratechnologies.com/it-company-in-patna/digital-marketing-agency-in-patna" },
    aggregateRating: { ratingValue: 4.9, reviewCount: 156 }
  }),
  buildBreadcrumbListSchema([
    { name: "Home", url: "/" },
    { name: "IT Company In Patna", url: "/it-company-in-patna" },
    { name: "Digital Marketing Agency in Patna", url: "/it-company-in-patna/digital-marketing-agency-in-patna" }
  ]),
  buildFAQPageSchema(marketingFaqs),
  buildAggregateRatingSchema({ ratingValue: 4.9, reviewCount: 156 }),
  buildReviewSchema({
    authorName: "Team Excellent Career Institute",
    reviewRating: 5,
    reviewBody: "Webflora Technologies manages our complete SEO, Google Business Profile, and Google Ads campaigns in Patna. We have seen consistent growth in student admission inquiries every batch!"
  }),
  buildReviewSchema({
    authorName: "Nishant Kumar",
    reviewRating: 5,
    reviewBody: "Working with Webflora on our digital marketing and web funnel was smooth from day one. Clear reporting and genuine business results."
  })
];

export default function DigitalMarketingLayout({ children }) {
  return (
    <>
      <script
        id="digital-marketing-patna-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(toGraphSchema(jsonLdSchema))
        }}
      />
      {children}
    </>
  );
}
