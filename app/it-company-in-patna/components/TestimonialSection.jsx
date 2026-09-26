"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Quote } from "lucide-react";

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = useMemo(
    () => [
      {
        id: 4,
        clientName: "Albert Newwel",
        company: "Founder, Team Excellent (Patna, Bihar)",
        feedback:
          "We had an amazing experience working with Webflora Technologies. Shashank and his team built a highly scalable digital portal and responsive mobile app for our educational center in Patna, Bihar, exactly the way we envisioned. Their technical SEO optimization and performance marketing strategy dramatically improved our online visibility, bringing over 140% boost in online admission inquiries. Highly professional, responsive, and result-oriented team.",
        avatar: "👨‍💼",
      },
      {
        id: 5,
        clientName: "Shyam Kishor Sharma",
        company: "Founder, Best For Everyone (Bihar)",
        feedback:
          "I had an excellent experience working with Webflora Technologies for custom MLM software development in Bihar. They built a fully secure, high-performance MLM management portal with real-time genealogies, automated commission wallets, and advanced analytics dashboards. Their node.js backend architecture runs flawlessly under load. They are truly the best custom software developers in Patna for serious business automation.",
        avatar: "🚀",
      },
      {
        id: 6,
        clientName: "Dinesh Kumar",
        company: "Managing Director, Diamond Resort (Patna, Bihar)",
        feedback:
          "We had a great experience partnering with Webflora Technologies for Diamond Resort’s custom web app development in Patna, Bihar. They engineered a stunning, fast, and SEO-optimized booking platform with secure payment integrations. Their expert local SEO optimization shot our rankings to the top of Google page 1, resulting in consistent booking inquiries. The absolute best choice for web development in Bihar.",
        avatar: "💎",
      },
    ],
    [],
  );

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-black">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none bg-grid opacity-[0.1]" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white tracking-tight leading-tight uppercase">
            Client <span className="text-[#FF3B00]">Success</span> Stories
          </h2>
        </div>

        <div
          className="relative h-[340px] md:h-[440px] flex items-center justify-center [perspective:1500px] overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {testimonials.map((testimonial, index) => {
              const total = testimonials.length;
              let diff = index - activeIndex;
              if (diff > total / 2) diff -= total;
              if (diff < -total / 2) diff += total;

              const absDiff = Math.abs(diff);
              const isActive = index === activeIndex;

              return (
                <div
                  key={testimonial.id}
                  onClick={() => {
                    if (!isActive) {
                      setActiveIndex(index);
                    }
                  }}
                  aria-hidden={!isActive}
                  className={`absolute w-full max-w-[340px] sm:max-w-[420px] md:max-w-[620px] select-none transition-all duration-700 ease-out ${
                    isActive
                      ? "opacity-100 scale-100 z-20 pointer-events-auto"
                      : "opacity-0 scale-95 z-0 pointer-events-none md:opacity-30 md:scale-90 md:z-10"
                  }`}
                  style={{
                    transform: isActive
                      ? "translate3d(0, 0, 0)"
                      : `translate3d(${diff > 0 ? 100 : -100}px, 0, -100px)`,
                  }}
                >
                  <div className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-500 ${isActive
                      ? "bg-zinc-950/90 border border-white/15 shadow-2xl"
                      : "bg-zinc-950/40 border border-white/5 grayscale"
                    }`}>

                    {/* Content Area */}
                    <div className="p-6 md:p-8 flex flex-col">
                      <div className="mb-4">
                        <Quote
                          className={`w-6 h-6 md:w-8 md:h-8 mb-2 transition-colors duration-500 ${isActive ? "text-orange-400" : "text-white/20"
                            }`}
                        />
                        <p className={`text-xs md:text-sm font-light leading-relaxed transition-colors duration-500 ${isActive ? "text-neutral-100" : "text-neutral-400 line-clamp-3"
                          }`}>
                          {testimonial.feedback}
                        </p>
                      </div>

                      <div className="mt-auto flex items-center gap-4 pt-4 border-t border-white/10">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl border border-white/10">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h3 className={`text-sm md:text-base font-bold leading-none mb-1 ${isActive ? "text-white" : "text-neutral-300"
                            }`}>
                            {testimonial.clientName}
                          </h3>
                          <p className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isActive ? "text-orange-400" : "text-neutral-400"
                            }`}>
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Active Accent Bar */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d93200]" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-4 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
              }}
              aria-label={`View testimonial ${index + 1}`}
              className="relative p-3 min-w-[44px] min-h-[44px] flex items-center justify-center group cursor-pointer"
            >
              <div className={`h-1.5 rounded-full transition-all duration-700 ${index === activeIndex
                  ? "w-12 bg-[#FF3B00]"
                  : "w-2 bg-white/20 group-hover:bg-white/40"
                }`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;