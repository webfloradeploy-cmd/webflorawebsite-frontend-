import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Disabling experimental compiler which might be causing slow renders on Windows
  reactCompiler: false, 
  
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/it-company-in-patna',
        permanent: true,
      },
      {
        source: '/services/:path*',
        destination: '/it-company-in-patna/:path*',
        permanent: true,
      },
      {
        source: '/ecommerce-development',
        destination: '/ecommerce-website-development',
        permanent: true,
      },
      {
        source: '/e-commerce-website-development',
        destination: '/ecommerce-website-development',
        permanent: true,
      },
      {
        source: '/ecommerce-development-company',
        destination: '/ecommerce-website-development',
        permanent: true,
      },
      {
        source: '/ecommerce-development-company-in-patna',
        destination: '/ecommerce-website-development',
        permanent: true,
      },
    ];
  }, 
  
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "@iconify/react"],
  },
  
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  
  images: {
    minimumCacheTTL: 2592000, // Cache optimized images for 30 days (saves Fast Origin Transfer)
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);
