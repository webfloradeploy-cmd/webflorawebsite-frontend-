import Script from "next/script";
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildWebPageSchema,
  buildServiceSchema,
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
  buildLocalBusinessSchema,
  buildProductSchema,
  toGraphSchema
} from "../lib/schemas";

export const dynamic = "force-static";

export const metadata = {
  title: "eCommerce Website Development Company in India | Webflora Technologies",
  description: "Webflora Technologies is a leading eCommerce website development company in India. We develop custom online stores, B2B platforms, D2C storefronts, Shopify & WooCommerce websites with payment gateway, shipping, ERP integration, and SEO starting at ₹30,000.",
  keywords: [
    "eCommerce Website Development Company",
    "ecommerce development company",
    "ecommerce website developer",
    "ecommerce development services",
    "ecommerce website development services",
    "ecommerce web development company",
    "ecommerce web development services",
    "ecommerce development agency",
    "ecommerce website development agency",
    "ecommerce web design company",
    "custom ecommerce development company",
    "ecommerce website developers",
    "ecommerce development solutions",
    "ecommerce website development company in India",
    "ecommerce website development company in Patna",
    "ecommerce website developer in Patna",
    "ecommerce development company in Bihar",
    "online store development",
    "b2b ecommerce website development",
    "d2c ecommerce website development",
    "multi vendor ecommerce development",
    "shopify development services",
    "woocommerce development services"
  ].join(", "),
  alternates: {
    canonical: "https://webfloratechnologies.com/ecommerce-website-development",
  },
  openGraph: {
    title: "eCommerce Website Development Company in India | Webflora Technologies",
    description: "Build a professional, high-conversion online store with Webflora Technologies. Custom eCommerce, B2B platforms, D2C brands, Shopify, WooCommerce, and multi-vendor marketplaces.",
    url: "https://webfloratechnologies.com/ecommerce-website-development",
    siteName: "Webflora Technologies",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://webfloratechnologies.com/title-logo.png",
        width: 512,
        height: 512,
        alt: "Webflora eCommerce Website Development Company in India"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Website Development Company in India | Webflora Technologies",
    description: "Custom eCommerce website development for startups, retailers, manufacturers, wholesalers, and D2C brands across India.",
    images: ["https://webfloratechnologies.com/title-logo.png"],
  }
};

const ecommerceFaqs = [
  {
    question: "What does an eCommerce website development company do?",
    answer: "An eCommerce website development company designs and develops online stores and ecommerce platforms. This can include website design, product catalogues, shopping carts, checkout, payment gateways, order management, inventory, shipping and business integrations."
  },
  {
    question: "How much does an eCommerce website cost in India?",
    answer: "The cost depends on the platform, design, number of products, integrations and custom functionality. Basic ecommerce websites may start around ₹30,000 to ₹60,000, while professional stores cost ₹60,000 to ₹1,50,000, and complex custom or marketplace platforms can range from ₹1,50,000 to ₹5,00,000+."
  },
  {
    question: "How long does it take to develop an eCommerce website?",
    answer: "A basic ecommerce website can take around 2–4 weeks. Professional websites may take 4–8 weeks, while custom ecommerce platforms require 8–16 weeks, and multi-vendor marketplaces can take 12–24 weeks or more."
  },
  {
    question: "Which platform is best for an ecommerce website?",
    answer: "The right platform depends on your requirements. Shopify can be suitable for businesses wanting a managed platform, WooCommerce can work well with WordPress, and custom development (Next.js / Node.js) is useful when you need unique business functionality and zero platform cuts."
  },
  {
    question: "Can you build a custom eCommerce website?",
    answer: "Yes. We can develop custom ecommerce websites with features such as custom pricing, B2B ordering, advanced inventory, multiple warehouses, CRM/ERP integration and custom workflows."
  },
  {
    question: "Can you develop a Shopify store?",
    answer: "Yes. We provide Shopify store development, customization, integrations, payment and shipping setup and Shopify SEO implementation."
  },
  {
    question: "Can you develop a WooCommerce website?",
    answer: "Yes. We provide WooCommerce website development, custom design, product setup, integrations, performance optimization and maintenance."
  },
  {
    question: "Can you build a B2B ecommerce website?",
    answer: "Yes. B2B ecommerce websites can include dealer accounts, wholesale pricing, bulk ordering, customer-specific pricing, quotations, GST information and ERP/CRM integration."
  },
  {
    question: "Can you build a multi-vendor ecommerce website?",
    answer: "Yes. We can develop marketplace platforms with seller accounts, seller dashboards, product management, commissions, orders, payments and administration."
  },
  {
    question: "Can you integrate payment gateways?",
    answer: "Yes. Payment gateway integration can be included based on your selected platform and business requirements, including Razorpay, Cashfree, PayU, Paytm, Stripe, UPI, cards and Net banking."
  },
  {
    question: "Can you integrate shipping services?",
    answer: "Yes. We can integrate suitable shipping and logistics APIs such as Shiprocket, Delhivery, Blue Dart, and India Post for shipment creation, delivery tracking and order updates."
  },
  {
    question: "Can you integrate an ecommerce website with ERP or CRM?",
    answer: "Yes. Ecommerce websites can be integrated with CRM, ERP, inventory, accounting, warehouse and other business systems (Tally, Zoho, SAP, Salesforce) through APIs or available integrations."
  },
  {
    question: "Can you develop an ecommerce mobile app?",
    answer: "Yes. We can develop ecommerce mobile applications for Android and iOS using Flutter or React Native depending on your requirements."
  },
  {
    question: "Is ecommerce website development SEO-friendly?",
    answer: "Yes. Ecommerce websites can be developed with SEO-friendly URLs, page structure, internal linking, mobile responsiveness, XML sitemaps, canonical URLs and appropriate structured data."
  },
  {
    question: "Do you provide ecommerce website maintenance?",
    answer: "Yes. We can provide ongoing technical maintenance, updates, improvements, security support and feature development."
  }
];

const jsonLdSchema = [
  buildOrganizationSchema(),
  buildWebSiteSchema(),
  buildWebPageSchema({
    name: "eCommerce Website Development Company in India",
    description: "Build a professional, high-conversion online store with Webflora Technologies.",
    url: "https://webfloratechnologies.com/ecommerce-website-development"
  }),
  buildServiceSchema({
    name: "eCommerce Website Development Services",
    serviceType: "eCommerce Website Development",
    description: "Professional eCommerce website design, online store development, B2B ecommerce platforms, D2C brand stores, multi-vendor marketplaces, Shopify, WooCommerce, and custom Next.js engineering.",
    areaServed: "India"
  }),
  buildLocalBusinessSchema({
    name: "Webflora Technologies - eCommerce Website Development Company",
    description: "eCommerce website development company in Patna, Bihar, serving clients across India."
  }),
  buildProductSchema({
    name: "eCommerce Website Development Services",
    description: "Professional online store and eCommerce platform development with payment gateway, automated shipping, and ERP/CRM integration.",
    category: "Software Development Services",
    url: "https://webfloratechnologies.com/ecommerce-website-development",
    offers: { price: "30000", priceCurrency: "INR", url: "https://webfloratechnologies.com/ecommerce-website-development" },
    aggregateRating: { ratingValue: 4.9, reviewCount: 128 }
  }),
  buildBreadcrumbListSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/it-company-in-patna" },
    { name: "eCommerce Website Development Company", url: "/ecommerce-website-development" }
  ]),
  buildFAQPageSchema(ecommerceFaqs)
];

export default function EcommerceLayout({ children }) {
  return (
    <>
      <Script
        id="ecommerce-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(toGraphSchema(jsonLdSchema))
        }}
      />
      {children}
    </>
  );
}
