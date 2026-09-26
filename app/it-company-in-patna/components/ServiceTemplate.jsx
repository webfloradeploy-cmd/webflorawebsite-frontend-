import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import SafeIcon from "./client/SafeIcon";
import ClientMarquee from "../../Components/ClientMarquee";
import BentoWhyChoose from "../../Components/WhyChooseSection";
import WorkSection from "../../Components/WorkSection";
import SEOContentBlock from "../../Components/SEOContentBlock";
import GlowBlob from "./client/GlowBlob";
import FaqSection from "./FaqSection";

const ContactSection = dynamic(() => import("../../Components/ContactSection"));
const TestimonialSection = dynamic(() => import("./TestimonialSection"));

import {
  ProblemWrapper,
  BenefitsWrapper,
  FeaturedAppsWrapper,
  TechStackWrapper,
  SubServicesWrapper,
  SuitableForWrapper,
  IndustriesWrapper,
  ProcessWrapper,
  PricingWrapper,
  DetailedArticleWrapper,
  ServiceComparisonWrapper,
  ServiceGlossaryWrapper,
  OtherServicesWrapper
} from "./ServiceSubComponents";

export {
  ProblemWrapper,
  BenefitsWrapper,
  FeaturedAppsWrapper,
  TechStackWrapper,
  SubServicesWrapper,
  SuitableForWrapper,
  IndustriesWrapper,
  ProcessWrapper,
  PricingWrapper,
  DetailedArticleWrapper,
  ServiceComparisonWrapper,
  ServiceGlossaryWrapper,
  OtherServicesWrapper
} from "./ServiceSubComponents";

const ServiceTemplate = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-[#030303] text-white selection:bg-[#FF3B00] selection:text-white overflow-x-hidden">
      {/* 1. Above the fold Hero — statically server-rendered for instant LCP */}
      <HeroWrapper data={data} />

      {/* 2. Client Marquee slider */}
      <ClientMarquee />

      {/* 3. Problem Section */}
      <ProblemWrapper data={data} />

      {/* 4. Why Choose Section */}
      <BentoWhyChoose
        title={data.whyChooseTitle}
        subtitle={data.whyChooseSubtitle}
        cards={data.whyChooseCards}
      />

      {/* 5. Benefits Section */}
      <BenefitsWrapper data={data} />

      {/* 6. Sub Services / Features */}
      <SubServicesWrapper data={data} />

      {/* 7. Target Audience (Suitable For) */}
      <SuitableForWrapper data={data} />

      {/* 8. Industries We Serve */}
      <IndustriesWrapper data={data} />

      {/* 9. Tech Stack Grid */}
      <TechStackWrapper data={data} />

      {/* 10. Process Section */}
      <ProcessWrapper data={data} />

      {/* 11. Pricing Section */}
      <PricingWrapper data={data} />

      {/* 12. Testimonials (Client Component) */}
      <TestimonialSection />

      {/* 13. Work / Portfolio (Server Component) */}
      <WorkSection />

      {/* 14. Detailed Article */}
      {data.detailedArticle && (
        <DetailedArticleWrapper data={data} />
      )}

      {/* 15. Service Comparison Matrix */}
      <ServiceComparisonWrapper data={data} />

      {/* 16. Terminology Glossary */}
      <ServiceGlossaryWrapper data={data} />

      {/* 17. FAQ Section (Client Component) */}
      <FaqSection faqs={data.faqs} title={data.title} />

      {/* 18. Other Services */}
      <OtherServicesWrapper currentService={data.title} />

      {/* 19. Localized GEO Content */}
      {(data.geoTitle || data.geoContent) && (
        <section className="py-20 bg-black border-y border-white/5 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tighter leading-none font-display">
              {data.geoTitle}
            </h2>
            <p className="text-neutral-300 text-lg md:text-xl leading-relaxed font-light">
              {data.geoContent}
            </p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-5 pointer-events-none" aria-hidden="true" />
        </section>
      )}

      {/* 20. SEO Content Block */}
      <div className="relative z-10">
        <SEOContentBlock
          title={data.title}
          paragraphs={[
            <React.Fragment key="p1">At <strong className="text-white font-medium">Webflora Technologies</strong>, we specialize in high-end <strong className="text-neutral-200">{data.title.toLowerCase()}</strong> for businesses across India. {data.subtext}</React.Fragment>,
            <React.Fragment key="p2">Our team engineers scalable systems designed for performance, automation, and long-term business growth. By leveraging enterprise-grade technologies, we ensure your digital infrastructure meets modern demands.</React.Fragment>
          ]}
        />
      </div>

      {/* 21. Contact Section (Client Component) */}
      <ContactSection />

      {/* 22. Footer CTA */}
      <section className="relative py-20 px-6 overflow-hidden border-t border-white/5 bg-[#050505]">
        <GlowBlob color="#FF3B00" size="400px" top="0" left="30%" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-none text-white font-display">
              READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B00] to-orange-500">SCALE?</span>
            </h2>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto font-light">
              Don&apos;t let your competition outpace you. Let&apos;s build the future of your {data.title} today.
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-4 px-12 py-6 bg-[#d93200] hover:bg-[#c22d00] rounded-full font-black text-xl hover:shadow-[0_0_60px_rgba(217,50,0,0.5)] hover:scale-105 transition-all">
                <Link href="/contact" aria-label="Start project now" className="flex items-center gap-4 text-white">
                  START PROJECT NOW
                  <SafeIcon icon="solar:arrow-right-up-linear" width={28} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const HeroWrapper = ({ data }) => {
  const words = (data.headline || data.title).split(" ");
  const mainPart = words.slice(0, -2).join(" ");
  const gradientPart = words.slice(-2).join(" ");

  const summaryText = data.heroSummary || (
    data.subtext && data.subtext.length > 200
      ? data.subtext.split(". ").slice(0, 2).join(". ") + "."
      : data.subtext || "High-performance native iOS and Android mobile applications engineered for speed, security, and measurable business growth in Bihar & across India."
  );

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-black pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
      {/* Background Grids & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="creative-grid-bg opacity-40" />
        <div className="creative-grid-dots opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Heading, Subtext, Badges & CTAs */}
        <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-5 text-left">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 w-fit">
            <span className="text-orange-400 text-xs">⭐</span>
            <span className="text-[11px] font-mono font-bold tracking-wider text-orange-300 uppercase">
              {data.heroBadge || "Top Web & App Agency in Bihar"}
            </span>
          </div>

          {/* Dominant High-Impact Heading - LCP Priority */}
          <h1 className="font-display font-black tracking-tight leading-[1.08] text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-white w-full">
            {mainPart}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#FF3B00] to-red-500">
              {gradientPart}
            </span>
          </h1>

          {/* Crisp, high-contrast Value Prop Subtext */}
          <p className="text-neutral-100 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
            {summaryText}
          </p>

          {/* Quick Value Metrics Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1 min-h-[32px]">
            {[
              { icon: "solar:code-square-bold", label: "100% Source Code Ownership" },
              { icon: "solar:bolt-bold", label: "Sub-1s Native Speed" },
              { icon: "solar:shield-check-bold", label: "Enterprise Security" },
              { icon: "solar:cup-first-bold", label: "90+ Lighthouse Score" }
            ].map((pill, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-white/10 text-neutral-200 text-xs font-medium h-[28px]"
              >
                <span className="w-3.5 h-3.5 flex items-center justify-center shrink-0 text-orange-400">
                  <SafeIcon icon={pill.icon} width={13} height={13} />
                </span>
                <span>{pill.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2 sm:pt-3 min-h-[48px]">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#d93200] hover:bg-[#c22d00] text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-full transition-all duration-300 shadow-[0_4px_25px_rgba(217,50,0,0.4)] hover:scale-105 active:scale-95 cursor-pointer min-h-[44px]"
            >
              <span>Start Project</span>
              <span className="w-4 h-4 flex items-center justify-center shrink-0">
                <SafeIcon icon="solar:arrow-right-up-linear" width={16} height={16} />
              </span>
            </Link>

            <a
              href="tel:8540814729"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-900 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-300 active:scale-95 cursor-pointer min-h-[44px]"
            >
              <span className="w-4 h-4 flex items-center justify-center shrink-0 text-orange-400">
                <SafeIcon icon="solar:phone-linear" width={16} height={16} />
              </span>
              <span>Call Us Directly</span>
            </a>
          </div>
        </div>

        {/* Right Column: Dynamic Tech Stack & SLA Dashboard */}
        <div className="lg:col-span-5 flex flex-col gap-4 relative">
          {/* Tech Stack Card */}
          {data.techStack && (
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950 border border-white/10 shadow-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold">
                  Engineered Tech Stack
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">
                  ● Production Ready
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {data.techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-zinc-900 border border-white/5 hover:border-orange-500/40 hover:bg-zinc-800 transition-all duration-300 min-h-[64px]"
                  >
                    <div className="w-[26px] h-[26px] mb-1 flex items-center justify-center shrink-0 text-white">
                      <SafeIcon icon={tech.icon} width={26} height={26} />
                    </div>
                    <span className="text-[10px] font-mono text-neutral-200 uppercase text-center tracking-wider truncate w-full">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Metrics Grid */}
          <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950 border border-white/10 shadow-2xl grid grid-cols-2 gap-4">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white font-display">99.9%</p>
              <p className="text-[10px] font-mono uppercase text-neutral-300 tracking-wider font-semibold">Uptime SLA</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white font-display">Sub-1s</p>
              <p className="text-[10px] font-mono uppercase text-neutral-300 tracking-wider font-semibold">Load Speed</p>
            </div>
            <div className="col-span-2 h-[1px] bg-white/5" />
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white font-display">200+</p>
              <p className="text-[10px] font-mono uppercase text-neutral-300 tracking-wider font-semibold">Shipped Systems</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-orange-400 font-display">100%</p>
              <p className="text-[10px] font-mono uppercase text-neutral-300 tracking-wider font-semibold">Code Handover</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTemplate;
