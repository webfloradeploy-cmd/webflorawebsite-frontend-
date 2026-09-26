import React from "react";
import Link from "next/link";
import SafeIcon from "./SafeIcon";
import GlowBlob from "./GlowBlob";
import SEOContentBlock from "../../../Components/SEOContentBlock";
import BentoWhyChoose from "../../../Components/WhyChooseSection";
import WorkSection from "../../../Components/WorkSection";
import ContactSection from "../../../Components/ContactSection";
import FaqSection from "../FaqSection";
import TestimonialWrapper from "./TestimonialWrapper";
import {
  ProblemWrapper,
  BenefitsWrapper,
  SubServicesWrapper,
  SuitableForWrapper,
  IndustriesWrapper,
  TechStackWrapper,
  ProcessWrapper,
  PricingWrapper,
  DetailedArticleWrapper,
  ServiceComparisonWrapper,
  ServiceGlossaryWrapper,
  OtherServicesWrapper
} from "../ServiceSubComponents";

export default function ServiceSections({ data }) {
  if (!data) return null;

  return (
    <div className="relative">
      {/* 1. Problem Section */}
      <ProblemWrapper data={data} />

      {/* 2. Why Choose Section */}
      <BentoWhyChoose
        title={data.whyChooseTitle}
        subtitle={data.whyChooseSubtitle}
        cards={data.whyChooseCards}
      />

      {/* 3. Benefits Section */}
      <BenefitsWrapper data={data} />

      {/* 4. Sub Services / Features */}
      <SubServicesWrapper data={data} />

      {/* 5. Target Audience (Suitable For) */}
      <SuitableForWrapper data={data} />

      {/* 6. Industries We Serve */}
      <IndustriesWrapper data={data} />

      {/* 7. Tech Stack Grid */}
      <TechStackWrapper data={data} />

      {/* 8. Process Section */}
      <ProcessWrapper data={data} />

      {/* 9. Pricing Section */}
      <PricingWrapper data={data} />

      {/* 10. Testimonials */}
      <TestimonialWrapper />

      {/* 11. Work / Portfolio */}
      <WorkSection />

      {/* 12. Detailed Article */}
      {data.detailedArticle && (
        <DetailedArticleWrapper data={data} />
      )}

      {/* 13. Service Comparison Matrix */}
      <ServiceComparisonWrapper data={data} />

      {/* 14. Terminology Glossary */}
      <ServiceGlossaryWrapper data={data} />

      {/* 15. FAQ Section */}
      <FaqSection faqs={data.faqs} title={data.title} />

      {/* 16. Other Services */}
      <OtherServicesWrapper currentService={data.title} />

      {/* 17. Localized GEO Content */}
      {(data.geoTitle || data.geoContent) && (
        <section className="py-20 bg-black border-y border-white/5 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tighter leading-none">
              {data.geoTitle}
            </h2>
            <p className="text-neutral-300 text-lg md:text-xl leading-relaxed font-light">
              {data.geoContent}
            </p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-5 pointer-events-none" aria-hidden="true" />
        </section>
      )}

      {/* 18. SEO Content Block */}
      <div className="relative z-10">
        <SEOContentBlock
          title={data.title}
          paragraphs={[
            <React.Fragment key="p1">At <strong className="text-white font-medium">Webflora Technologies</strong>, we specialize in high-end <strong className="text-neutral-200">{data.title.toLowerCase()}</strong> for businesses across India. {data.subtext}</React.Fragment>,
            <React.Fragment key="p2">Our team engineers scalable systems designed for performance, automation, and long-term business growth. By leveraging enterprise-grade technologies, we ensure your digital infrastructure meets modern demands.</React.Fragment>
          ]}
        />
      </div>

      {/* 19. Contact Section */}
      <ContactSection />

      {/* 20. Footer CTA */}
      <section className="relative py-20 px-6 overflow-hidden border-t border-white/5 bg-[#050505]">
        <GlowBlob color="#FF3B00" size="400px" top="0" left="30%" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-none text-white">
              READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B00] to-orange-500">SCALE?</span>
            </h2>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto font-light">
              Don&apos;t let your competition outpace you. Let&apos;s build the future of your {data.title} today.
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-4 px-12 py-6 bg-[#FF3B00] rounded-full font-black text-xl hover:shadow-[0_0_60px_rgba(255,59,0,0.5)] hover:scale-105 transition-all">
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
}
