import React from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import { servicesData } from "../data";
import { notFound } from "next/navigation";
import {
  buildServiceSchema,
  buildWebPageSchema,
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
  buildItemListSchema,
  buildOfferSchema,
  toGraphSchema
} from "../../lib/schemas";

export const dynamic = "force-static";

const DEDICATED_SERVICES = [
  "digital-marketing-agency-in-patna",
  "ai-chatbot-company-in-patna",
  "software-development-company-in-patna"
];

const SERVICE_PHOTO_MAP = {
  "website-development-company-in-patna": "/page-photo/webflora-website-development-square.webp",
  "mobile-app-development-company-in-patna": "/page-photo/webflora-mobile-app-development-square.webp",
  "software-company-in-bihar": "/page-photo/webflora-software-development-square.webp",
  "digital-marketing-agency-in-bihar": "/page-photo/webflora-digital-marketing-square.png",
};

export async function generateMetadata({ params }) {
  const { service: serviceSlug } = await params;
  if (DEDICATED_SERVICES.includes(serviceSlug)) {
    return {};
  }
  const service = servicesData[serviceSlug];
  if (!service) return {};

  const baseUrl = "https://webfloratechnologies.com";
  const url = `${baseUrl}/it-company-in-patna/${serviceSlug}`;
  const shortDesc = service.seoDescription || (service.subtext ? service.subtext.slice(0, 155) + "..." : "");
  const photoPath = SERVICE_PHOTO_MAP[serviceSlug] || "/title-logo.png";
  const photoUrl = `${baseUrl}${photoPath}`;

  return {
    title: service.seoTitle || `${service.title} Services | Webflora Technologies`,
    description: shortDesc,
    keywords: service.seoKeywords || `${service.title}, Next.js, React, SEO, Patna, Bihar, Web Design, Performance`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: service.seoTitle || service.title,
      description: shortDesc,
      url: url,
      siteName: "Webflora Technologies",
      images: [
        {
          url: photoUrl,
          width: 600,
          height: 600,
          alt: `${service.title} - Webflora Technologies`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle || service.title,
      description: shortDesc,
      images: [photoUrl],
    },
    other: {
      thumbnail: photoUrl,
    },
  };
}

export default async function ServicePage({ params }) {
  const { service: serviceSlug } = await params;
  if (DEDICATED_SERVICES.includes(serviceSlug)) {
    notFound();
  }
  const data = servicesData[serviceSlug];

  if (!data) {
    notFound();
  }

  const baseUrl = "https://webfloratechnologies.com";
  const photoPath = SERVICE_PHOTO_MAP[serviceSlug] || "/title-logo.png";
  const photoUrl = `${baseUrl}${photoPath}`;

  return (
    <>
      <ServiceTemplate data={data} />

      {/* Service Subpage JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toGraphSchema([
              buildServiceSchema({
                name: data.title,
                serviceType: data.title,
                description: data.subtext,
                image: photoUrl
              }),
              buildWebPageSchema({
                name: data.title,
                description: data.subtext.slice(0, 150) + "...",
                url: `https://webfloratechnologies.com/it-company-in-patna/${serviceSlug}`,
                image: photoUrl
              }),
              buildBreadcrumbListSchema([
                { name: "Home", url: "/" },
                { name: "IT Company In Patna", url: "/it-company-in-patna" },
                { name: data.title, url: `/it-company-in-patna/${serviceSlug}` }
              ]),
              buildItemListSchema(
                (data.solutions || []).map(s => ({ name: s, url: `/it-company-in-patna/${serviceSlug}` }))
              ),
              ...(data.faqs ? [buildFAQPageSchema(data.faqs)] : [])
            ])
          )
        }}
      />
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(servicesData)
    .filter((service) => !DEDICATED_SERVICES.includes(service))
    .map((service) => ({
      service: service,
    }));
}
