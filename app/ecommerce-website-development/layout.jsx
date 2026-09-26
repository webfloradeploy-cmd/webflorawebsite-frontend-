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
  title: "eCommerce Website Development Company in Patna | Webflora Technologies",
  description: "Webflora Technologies is the leading eCommerce website development company in Patna, Bihar. We develop custom online stores, B2B wholesale portals, D2C brand storefronts, Shopify & WooCommerce websites with UPI, payment gateways, automated shipping, Tally ERP sync, and local SEO starting at ₹30,000.",
  keywords: [
    "eCommerce Website Development Company in Patna",
    "ecommerce development company in patna",
    "ecommerce website developer in patna",
    "ecommerce development services in patna",
    "ecommerce website development services in patna",
    "best ecommerce website development company in patna",
    "ecommerce web development company in patna",
    "ecommerce development company in bihar",
    "custom ecommerce development company in patna",
    "shopify development company in patna",
    "woocommerce website development patna",
    "b2b ecommerce website development in patna",
    "d2c ecommerce website development patna",
    "online store development in patna",
    "ecommerce web design company in patna",
    "ecommerce website developer near me patna",
    "ecommerce development agency patna",
    "ecommerce website development cost in patna"
  ].join(", "),
  alternates: {
    canonical: "https://webfloratechnologies.com/ecommerce-website-development",
  },
  openGraph: {
    title: "eCommerce Website Development Company in Patna | Webflora Technologies",
    description: "Build a high-converting online store with Webflora Technologies, the top eCommerce website development company in Patna. Custom eCommerce, B2B wholesale portals, D2C brands, Shopify, WooCommerce, and multi-vendor marketplaces.",
    url: "https://webfloratechnologies.com/ecommerce-website-development",
    siteName: "Webflora Technologies",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://webfloratechnologies.com/title-logo.png",
        width: 512,
        height: 512,
        alt: "Webflora eCommerce Website Development Company in Patna"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Website Development Company in Patna | Webflora Technologies",
    description: "Top eCommerce website development company in Patna, Bihar. Custom online stores, B2B portals, and D2C storefronts with instant UPI payments and automated shipping.",
    images: ["https://webfloratechnologies.com/title-logo.png"],
  }
};

const ecommerceFaqs = [
  {
    question: "What does an eCommerce website development company in Patna do?",
    answer: "An eCommerce website development company in Patna like Webflora Technologies designs and builds end-to-end online stores for businesses in Patna and Bihar. This includes UI/UX design, product catalog management, shopping cart, one-click UPI and payment gateways, automated logistics (Shiprocket/Delhivery), inventory management across local warehouses, Tally/ERP integration, and local SEO to generate online sales."
  },
  {
    question: "How much does an eCommerce website cost in Patna, Bihar?",
    answer: "The cost of developing an eCommerce website in Patna typically ranges from ₹30,000 to ₹1,50,000+ depending on features and platform. A starter Shopify/WooCommerce store costs ₹30,000 to ₹60,000, a custom high-performance D2C brand store costs ₹60,000 to ₹1,50,000, while complex B2B wholesale platforms and multi-vendor marketplaces range from ₹1,50,000 to ₹5,00,000+."
  },
  {
    question: "How long does it take to develop an eCommerce website in Patna?",
    answer: "A standard eCommerce store built on Shopify or WooCommerce typically takes 2–4 weeks. A custom-designed store with payment, shipping, and automated WhatsApp workflows takes 4–8 weeks, while enterprise B2B portals with Tally ERP sync take 8–16 weeks."
  },
  {
    question: "Which platform is best for an eCommerce website in Patna?",
    answer: "The right platform depends on your business model: Shopify is ideal for startups seeking fast deployment, WooCommerce is great for WordPress-based businesses wanting full ownership without monthly fees, and custom Next.js/Node.js is best for high-volume retailers and B2B wholesalers in Patna needing zero sales cuts and sub-second load speeds."
  },
  {
    question: "Can you build a custom eCommerce website with Tally ERP integration in Patna?",
    answer: "Yes. Webflora Technologies specializes in custom eCommerce websites with direct bi-directional Tally Prime, Zoho Books, and Busy accounting sync, allowing Patna wholesalers and retailers to automate GST invoicing, dealer pricing, and stock deductions."
  },
  {
    question: "Can you develop a Shopify or WooCommerce store in Patna?",
    answer: "Yes. We offer complete Shopify store setup, bespoke theme design, app integrations, as well as high-performance WooCommerce WordPress store development with Indian payment gateways and Shiprocket logistics."
  },
  {
    question: "Can you build a B2B wholesale eCommerce website in Patna?",
    answer: "Yes. We build B2B wholesale portals with dealer logins, tiered wholesale price lists, bulk CSV ordering, Minimum Order Quantities (MOQs), GST tax invoicing, and credit terms for manufacturers and traders in Patna & Bihar."
  },
  {
    question: "Can you build a multi-vendor marketplace in Patna?",
    answer: "Yes. We engineer marketplace platforms with seller self-service dashboards, product uploads, automated commission splitting, vendor payouts, and master admin control."
  },
  {
    question: "Which payment gateways and UPI options do you integrate?",
    answer: "We integrate all leading payment gateways including Razorpay, Cashfree, Paytm, PhonePe PG, PayU, and Stripe. We support Instant UPI (Google Pay, PhonePe, Paytm QR), Debit/Credit cards, NetBanking across 50+ banks, and Cash on Delivery (COD) with OTP verification."
  },
  {
    question: "Can you integrate courier and shipping APIs for deliveries from Patna?",
    answer: "Yes. We integrate Shiprocket, Delhivery, Blue Dart, and India Post APIs for automatic AWB generation, shipping label printing, real-time courier rate comparison, and automated WhatsApp/SMS tracking alerts from Patna dispatch hubs."
  },
  {
    question: "Do you provide offline in-person meetings and support in Patna?",
    answer: "Yes. Webflora Technologies has a physical development team in Patna. You can meet our lead eCommerce architects in-person for project discussions, milestone reviews, and hands-on staff training."
  },
  {
    question: "Is eCommerce website development SEO-friendly for local and national Google rankings?",
    answer: "Yes. Every online store we build includes clean semantic URLs, Product and FAQPage Schema JSON-LD structured data, dynamic XML sitemaps, canonical tags, and sub-second Core Web Vitals performance for top Google rankings in Patna and across India."
  }
];

const jsonLdSchema = [
  buildOrganizationSchema(),
  buildWebSiteSchema(),
  buildWebPageSchema({
    name: "eCommerce Website Development Company in Patna",
    description: "Build a professional, high-conversion online store with Webflora Technologies, the top eCommerce website development company in Patna, Bihar.",
    url: "https://webfloratechnologies.com/ecommerce-website-development"
  }),
  buildServiceSchema({
    name: "eCommerce Website Development Services in Patna",
    serviceType: "eCommerce Website Development",
    description: "Professional eCommerce website design, online store development, B2B wholesale platforms, D2C brand stores, multi-vendor marketplaces, Shopify, WooCommerce, and custom Next.js engineering in Patna, Bihar.",
    areaServed: "Patna, Bihar, India"
  }),
  buildLocalBusinessSchema({
    name: "Webflora Technologies - eCommerce Website Development Company in Patna",
    description: "Leading eCommerce website development company in Patna, Bihar, delivering custom online stores, B2B portals, and mobile commerce applications."
  }),
  buildProductSchema({
    name: "eCommerce Website Development Services in Patna",
    description: "Professional online store and eCommerce platform development with UPI payment gateway, automated shipping, and Tally ERP integration in Patna.",
    category: "Software Development Services",
    url: "https://webfloratechnologies.com/ecommerce-website-development",
    offers: { price: "30000", priceCurrency: "INR", url: "https://webfloratechnologies.com/ecommerce-website-development" },
    aggregateRating: { ratingValue: 4.9, reviewCount: 128 }
  }),
  buildBreadcrumbListSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/it-company-in-patna" },
    { name: "eCommerce Website Development Company in Patna", url: "/ecommerce-website-development" }
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
