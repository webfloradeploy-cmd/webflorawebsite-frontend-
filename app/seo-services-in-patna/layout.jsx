import Script from "next/script";
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
  toGraphSchema
} from "../lib/schemas";

export const metadata = {
  title: "Best SEO Company in Patna | SEO Services in Bihar | Webflora Technologies",
  description: "Webflora Technologies is a leading SEO company in Patna, Bihar. We help businesses improve Google search rankings, attract local customers, and generate meaningful enquiries through practical, sustainable SEO.",
  keywords: [
    "best seo company in patna",
    "seo company in patna",
    "seo agency in patna",
    "seo services in patna",
    "seo expert in patna",
    "local seo company in patna",
    "seo company in bihar",
    "seo services patna",
    "top seo company in patna",
    "local seo services in patna",
    "technical seo patna",
    "google maps seo patna",
    "digital marketing company in patna",
    "digital marketing agency in patna",
    "aeo services patna"
  ].join(", "),
  alternates: {
    canonical: "https://webfloratechnologies.com/seo-services-in-patna",
  },
  openGraph: {
    title: "Best SEO Company in Patna | SEO Services in Bihar | Webflora Technologies",
    description: "Webflora Technologies is a leading SEO company in Patna, Bihar. We help businesses improve Google search rankings, attract local customers, and generate meaningful enquiries through practical, sustainable SEO.",
    url: "https://webfloratechnologies.com/seo-services-in-patna",
    siteName: "Webflora Technologies",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://webfloratechnologies.com/webflora-logo.svg",
        width: 1200,
        height: 630,
        alt: "Best SEO Company in Patna - Webflora Technologies"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Best SEO Company in Patna | SEO Services in Bihar | Webflora Technologies",
    description: "Practical and sustainable SEO services in Patna. Technical SEO, Google Maps, On-Page, and Content strategy.",
    images: ["https://webfloratechnologies.com/webflora-logo.svg"],
  }
};

const seoFaqs = [
  {
    question: "What are SEO services?",
    answer: "SEO (Search Engine Optimization) services involve auditing, optimizing, and enhancing a website's technical architecture, on-page content, and backlink authority to improve organic rankings in search engines like Google, Bing, and AI search engines, driving high-intent targeted traffic."
  },
  {
    question: "How much do SEO services cost in Patna?",
    answer: "SEO pricing in Patna generally ranges from ₹15,000/month for small local business campaigns to ₹45,000–₹1,00,000+/month for competitive e-commerce, multi-location brands, and enterprise software portals, depending on keyword difficulty, market competition, and website size."
  },
  {
    question: "How long does SEO take to show results?",
    answer: "SEO is a compounding growth strategy. Initial technical fixes, indexing improvements, and low-competition keyword movement typically show in 4–8 weeks, while competitive local, national, and high-volume commercial keywords generally take 3–6 months to establish top-3 dominance."
  },
  {
    question: "Do you provide local SEO services in Patna?",
    answer: "Yes. Our local SEO services in Patna cover Google Business Profile (GBP) optimization, Google Maps 3-Pack rankings, local citation building, NAP consistency, hyper-local landing pages, customer review workflows, and Patna geo-targeted schema markup."
  },
  {
    question: "Can SEO generate leads and paying customers?",
    answer: "Absolutely. Rather than just targeting high-volume vanity keywords, we focus heavily on high-intent commercial and transactional search queries (e.g. 'hire software company in Patna' or 'best clinic near me') that attract visitors actively looking to purchase your services."
  },
  {
    question: "Do you provide SEO for e-commerce websites?",
    answer: "Yes. Our e-commerce SEO covers product schema markup (Product, Offer, AggregateRating), category page optimization, faceted navigation crawl budget management, core web vitals speed optimization, and transactional keyword targeting across India."
  },
  {
    question: "Do you provide SEO for businesses outside Patna across Bihar and India?",
    answer: "Yes. While our physical headquarters is in Patna, Bihar, we run national and international SEO campaigns for brands targeting pan-India audiences, Tier-1 metros (Delhi, Mumbai, Bangalore), and global overseas markets."
  },
  {
    question: "What are AEO and GEO, and why are they important for SEO?",
    answer: "Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) optimize your content and brand entity so that AI engines like ChatGPT, Google AI Overviews (SGE), Perplexity, and Copilot cite and recommend your business as the authoritative answer."
  },
  {
    question: "What is the difference between SEO and Google Ads?",
    answer: "Google Ads (PPC) provides instant paid visibility where you pay for every click and traffic stops once your budget runs out. SEO builds sustainable organic search engine equity, providing consistent 24/7 traffic, leads, and brand authority without paying per click."
  },
  {
    question: "What SEO tools and reporting deliverables do you provide?",
    answer: "We use Google Search Console, Google Analytics 4, Screaming Frog, Ahrefs, Semrush, and Google Keyword Planner. Clients receive transparent monthly reports detailing keyword movements, organic clicks, impressions, CTR, indexed pages, backlinks, and conversion metrics."
  }
];

const jsonLdSchema = [
  buildOrganizationSchema(),
  buildWebSiteSchema(),
  buildWebPageSchema({
    name: "SEO Services in Patna That Grow Your Website, Leads & Business",
    description: "Webflora Technologies provides result-driven SEO services in Patna, Bihar, helping businesses improve Google rankings, increase organic traffic, generate qualified leads, and build long-term online visibility.",
    url: "https://webfloratechnologies.com/seo-services-in-patna"
  }),
  buildServiceSchema({
    name: "SEO Services in Patna",
    serviceType: "Search Engine Optimization & Digital Marketing",
    description: "Full-suite SEO services in Patna including Technical SEO, On-Page SEO, Local SEO & Google Maps, Off-Page Link Building, Content SEO, AEO and GEO optimization.",
    areaServed: "India"
  }),
  buildLocalBusinessSchema({
    name: "Webflora Technologies - Best SEO Company in Patna",
    description: "Top-rated SEO agency and digital growth consultancy located in Patna, Bihar offering professional local and technical SEO services."
  }),
  buildProfessionalServiceSchema({
    name: "Webflora SEO Agency Patna",
    description: "Professional SEO, AEO, GEO, and search marketing agency serving businesses across Patna, Bihar, and India."
  }),
  buildProductSchema({
    name: "Professional SEO Services & Growth Strategy Plan",
    description: "Comprehensive SEO, Local 3-Pack Optimization, Technical Audit, and Generative Engine Optimization service package.",
    category: "Digital Marketing Service",
    url: "https://webfloratechnologies.com/seo-services-in-patna",
    offers: { price: "15000", priceCurrency: "INR", url: "https://webfloratechnologies.com/seo-services-in-patna" },
    aggregateRating: { ratingValue: 5.0, reviewCount: 142 }
  }),
  buildBreadcrumbListSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/it-company-in-patna" },
    { name: "SEO Services in Patna", url: "/seo-services-in-patna" }
  ]),
  buildFAQPageSchema(seoFaqs)
];

export default function SeoServicesLayout({ children }) {
  return (
    <>
      <Script
        id="seo-patna-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(toGraphSchema(jsonLdSchema))
        }}
      />
      {children}
    </>
  );
}
