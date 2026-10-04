export const dynamic = "force-static";

export const metadata = {
  title: "AI Calling Agent for Business | AI Voice Agent Solutions | Webflora",
  description: "Automate your customer calls with intelligent AI calling agents by Webflora Technologies. Natural voice, Hindi & English multilingual, CRM integrations, and 24/7 lead qualification.",
  keywords: [
    "AI calling agent",
    "AI calling agent for business",
    "AI voice agent",
    "AI voice calling solution",
    "AI calling solution",
    "AI phone agent",
    "AI voice bot",
    "AI calling automation",
    "AI lead calling agent",
    "AI customer calling agent",
    "AI calling software",
    "AI calling agent in India",
    "AI voice agent development company",
    "AI calling agent development company",
    "AI voice agent Patna",
    "voice bot development India"
  ].join(", "),
  alternates: {
    canonical: "/ai-calling-agent",
  },
  openGraph: {
    title: "AI Calling Agent for Business | Intelligent Voice Automation",
    description: "Automate outbound and inbound phone calls with natural, conversational AI voice agents tailored for your business workflow and CRM.",
    url: "https://webfloratechnologies.com/ai-calling-agent",
    siteName: "Webflora Technologies",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://webfloratechnologies.com/title-logo.png",
        width: 512,
        height: 512,
        alt: "Webflora AI Calling Agent Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Calling Agent for Smarter, Automated Business Calls | Webflora",
    description: "Transform phone support and outbound sales with intelligent multilingual AI calling agents by Webflora Technologies.",
    images: ["https://webfloratechnologies.com/title-logo.png"],
  }
};

export default function AICallingAgentLayout({ children }) {
  return <>{children}</>;
}
