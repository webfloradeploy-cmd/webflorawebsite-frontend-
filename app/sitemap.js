import API_BASE_URL from "./config";
import { citiesData } from "../data/cities";
import { servicesData } from "../data/services";
import { industriesData } from "./industries/data";
import { technologiesData } from "./technology/data";
import { pricingGuidesData } from "./pricing-guides/data";
import { comparisonsData } from "./compare/data";

export const dynamic = "force-static";

export default async function sitemap() {
  const baseUrl = "https://webfloratechnologies.com";

  // Main static routes
  const staticRoutes = [
    // Main Pages
    { route: "", priority: 1.0 },
    { route: "/it-company-in-patna", priority: 0.95 },
    { route: "/about", priority: 0.85 },
    { route: "/contact", priority: 0.85 },
    { route: "/case-studies", priority: 0.8 },
    { route: "/blog", priority: 0.8 },
    { route: "/career", priority: 0.7 },
    { route: "/why-webflora", priority: 0.8 },
    { route: "/locations", priority: 0.85 },
    { route: "/industries", priority: 0.8 },
    { route: "/electronic-health-records-software", priority: 0.8 },
    { route: "/attendance-management-software", priority: 0.85 },
    { route: "/faq", priority: 0.8 },

    // Core Service Pages
    { route: "/seo-services-in-patna", priority: 0.95 },
    { route: "/ecommerce-website-development", priority: 0.95 },
    { route: "/it-company-in-patna/ai-chatbot-company-in-patna", priority: 0.95 },
    { route: "/it-company-in-patna/website-development-company-in-patna", priority: 0.95 },
    { route: "/it-company-in-patna/mobile-app-development-company-in-patna", priority: 0.9 },
    { route: "/it-company-in-patna/software-development-company-in-patna", priority: 0.9 },
    { route: "/it-company-in-patna/ai-automation-company-in-patna", priority: 0.95 },
    { route: "/it-company-in-patna/digital-marketing-agency-in-patna", priority: 0.9 },

    // Legal Pages
    { route: "/privacy-policy", priority: 0.2 },
    { route: "/terms-of-service", priority: 0.2 },
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: new Date().toISOString(),
    changeFrequency:
      item.priority >= 0.9
        ? "weekly"
        : item.priority >= 0.7
          ? "monthly"
          : "yearly",
    priority: item.priority,
  }));

  // Dynamic Locations & Location Services
  const cityRoutes = Object.keys(citiesData).map((city) => ({
    url: `${baseUrl}/locations/${city}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const locationServiceRoutes = [];
  Object.keys(citiesData).forEach((city) => {
    Object.keys(servicesData).forEach((service) => {
      locationServiceRoutes.push({
        url: `${baseUrl}/locations/${city}/${service}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    });
  });

  // Dynamic Industries
  const industryRoutes = Object.keys(industriesData).map((industry) => ({
    url: `${baseUrl}/industries/${industry}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Dynamic Technologies
  const techRoutes = Object.keys(technologiesData).map((slug) => ({
    url: `${baseUrl}/technology/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Dynamic Pricing Guides
  const pricingGuideRoutes = Object.keys(pricingGuidesData).map((slug) => ({
    url: `${baseUrl}/pricing-guides/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Dynamic Comparisons
  const compareRoutes = Object.keys(comparisonsData).map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Fetch dynamic routes (Blogs & Case Studies)
  let blogs = [];
  let caseStudies = [];

  try {
    // We try to fetch the blogs and case studies. 
    // In a production build, ensure the backend is running or use fallback data if build fails.
    const [blogsRes, caseStudiesRes] = await Promise.all([
      fetch(`${API_BASE_URL}/api/public/blogs`, { cache: "force-cache" }).catch(() => null),
      fetch(`${API_BASE_URL}/api/public/case-studies`, { cache: "force-cache" }).catch(() => null)
    ]);

    if (blogsRes && blogsRes.ok) {
      blogs = await blogsRes.json();
    }
    if (caseStudiesRes && caseStudiesRes.ok) {
      caseStudies = await caseStudiesRes.json();
    }
  } catch (error) {
    console.error("Error fetching data for sitemap:", error);
  }

  const blogRoutes = Array.isArray(blogs)
    ? blogs
        .filter((blog) => blog && (blog.slug || blog._id))
        .map((blog) => {
          const slug = blog.slug || blog._id;
          const dateVal = blog.updatedAt || blog.createdAt;
          const isValidDate = dateVal && !isNaN(new Date(dateVal).getTime());
          return {
            url: `${baseUrl}/blog/${slug}`,
            lastModified: isValidDate ? new Date(dateVal).toISOString() : new Date().toISOString(),
            changeFrequency: "monthly",
            priority: 0.6,
          };
        })
    : [];

  const caseStudyRoutes = Array.isArray(caseStudies)
    ? caseStudies
        .filter((cs) => cs && (cs.slug || cs._id))
        .map((cs) => {
          const slug = cs.slug || cs._id;
          const dateVal = cs.updatedAt || cs.createdAt;
          const isValidDate = dateVal && !isNaN(new Date(dateVal).getTime());
          return {
            url: `${baseUrl}/case-studies/${slug}`,
            lastModified: isValidDate ? new Date(dateVal).toISOString() : new Date().toISOString(),
            changeFrequency: "monthly",
            priority: 0.7,
          };
        })
    : [];

  return [
    ...staticRoutes,
    ...cityRoutes,
    ...locationServiceRoutes,
    ...industryRoutes,
    ...techRoutes,
    ...pricingGuideRoutes,
    ...compareRoutes,
    ...blogRoutes,
    ...caseStudyRoutes,
  ];
}
