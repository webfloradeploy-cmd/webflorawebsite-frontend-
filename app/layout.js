// app/layout.js
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import FooterSection from "./Components/FooterSection";
import Script from "next/script";
import FloatingCTA from "./Components/FloatingCTA";
import ChatbotLoader from "./Components/ChatbotLoader";
import { buildOrganizationSchema, buildWebSiteSchema, buildSiteNavigationElementSchema, toGraphSchema } from "./lib/schemas";


/* Inter – Body / UI */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

/* Space Grotesk – Headings / Brand
   display:"swap" ensures font paints immediately with system fallback and swaps in */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});



export const metadata = {
  metadataBase: new URL("https://webfloratechnologies.com"),
  title: "Software Company in Patna, Bihar | Webflora Technologies",
  description: "Looking for a reliable tech partner? Webflora builds websites, mobile apps, custom software, AI automation and digital solutions to help businesses grow. Get started today.",
  keywords: "web development company, website development company, website design, website development, web design, e commerce websites, web application development, app software, mobile app development company, software company in patna, software company in bihar, website company in patna, Webflora Technologies",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Software Company in Patna, Bihar | Webflora Technologies",
    description: "Looking for a reliable tech partner? Webflora builds websites, mobile apps, custom software, AI automation and digital solutions to help businesses grow. Get started today.",
    url: "https://webfloratechnologies.com",
    siteName: "Webflora Technologies",
    images: [
      {
        url: "/title-logo.png",
        width: 512,
        height: 512,
        alt: "Webflora Technologies - Software Company in Patna, Bihar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Company in Patna, Bihar | Webflora Technologies",
    description: "Looking for a reliable tech partner? Webflora builds websites, mobile apps, custom software, AI automation and digital solutions to help businesses grow. Get started today.",
    site: "@WebfloraTech",
    images: ["/title-logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/title-logo.png",
  },
  verification: {
    google: [
      "xDzlrPLpH4of46ZPCmVZzzZK82PAxOu7vAUZ_6yDLkI",
      "Fv5XfPtCaUGzUYkoKxfONROTTTBp6pKHW93z5JgG78k"
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="sitemap" type="application/xml" href="https://webfloratechnologies.com/sitemap.xml" />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7DCZZDRV1R"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7DCZZDRV1R');
        `}
      </Script>
      <body
        suppressHydrationWarning
        className={`
          ${inter.variable}
          ${spaceGrotesk.variable}
          antialiased
        `}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#ff3b00] focus:text-white focus:rounded-md focus:font-bold">
          Skip to main content
        </a>
        {/* Banner and Nav */}
        <Navbar />
        <FloatingCTA />
        <main id="main-content">
          {children}
        </main>

        {/* Global SEO Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              toGraphSchema([
                buildOrganizationSchema(),
                buildWebSiteSchema(),
                buildSiteNavigationElementSchema()
              ])
            )
          }}
        />

        {/* Footer Section */}
        <FooterSection />

        {/* Interaction-loaded Vegavan AI Support Chatbot */}
        <ChatbotLoader />
      </body>
    </html>
  );
}
