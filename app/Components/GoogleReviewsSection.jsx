import React from "react";
import { Star } from "lucide-react";

const googleReviewsData = [
  {
    clientName: "Nishant Kumar",
    rating: 5,
    feedback: "Webflora gave us a website that customers compliment almost every week. Their team listened carefully to what we actually needed instead of pushing a template solution. Highly recommend Webflora to any business that takes quality seriously.",
    avatar: "NK"
  },
  {
    clientName: "SAHIL KUMAR",
    rating: 5,
    feedback: "Our new website built by Webflora has been live for three months and not a single bug so far. Communication was clear and consistent throughout the entire project. Cannot recommend Webflora Technologies enough.",
    avatar: "SK"
  },
  {
    clientName: "SONU KUMAR",
    rating: 5,
    feedback: "We had an app idea sitting on paper for a year and Webflora turned it into a real product in months. A rare team that combines technical skill with genuine business understanding. Cheers to the entire Webflora crew.",
    avatar: "SK"
  },
  {
    clientName: "Er golu Kumar",
    rating: 5,
    feedback: "Webflora developed our customer facing app and it has become the backbone of our business. They were responsive on WhatsApp, email and calls whenever we needed answers. If you want serious work done right the first time, talk to Webflora.",
    avatar: "EK"
  },
  {
    clientName: "Ravindra Kumar",
    rating: 5,
    feedback: "Working with Webflora on our website was smooth from day one and the launch went without a hitch. They pushed back thoughtfully when we suggested something that would have hurt the product. Highly recommend Webflora.",
    avatar: "RK"
  },
  {
    clientName: "Babul Ydv",
    rating: 5,
    feedback: "We compared several app development companies in Patna and Webflora was clearly the most capable. Meetings were efficient and never felt like a waste of our time. Five stars and then some. These people deliver what they promise.",
    avatar: "BY"
  },
  {
    clientName: "DEEPAK KUMAR",
    rating: 5,
    feedback: "Webflora delivered a website that genuinely converts visitors into customers for us. Onboarding was simple and the handover documentation was unusually detailed. Easily the most professional tech team in Bihar.",
    avatar: "DK"
  },
  {
    clientName: "Ranjay Kumar",
    rating: 5,
    feedback: "Webflora Technologies built our mobile app and the feedback from users has been amazing. The discovery phase was thorough and the proposal matched the final delivery exactly. We will absolutely be back for the next phase.",
    avatar: "RK"
  },
  {
    clientName: "Shivam Kumar",
    rating: 5,
    feedback: "Webflora built our app with a level of polish you usually only see from big city studios. The whole team was professional, patient and clearly passionate about what they do. Genuinely the best decision for our digital growth.",
    avatar: "SK"
  },
  {
    clientName: "Rahul Raj",
    rating: 5,
    feedback: "The Webflora developers know what they are doing and our website proves it every single day. Every deadline they committed to was hit without us having to follow up. Top tier work as always.",
    avatar: "RR"
  },
  {
    clientName: "Roushan Rajpandey",
    rating: 5,
    feedback: "The Webflora team built our SaaS MVP and it was production ready from day one. Meetings were efficient and never felt like a waste of our time. Truly worth every rupee we invested in the project.",
    avatar: "RR"
  },
  {
    clientName: "Manish Kumar",
    rating: 5,
    feedback: "I am a client of Webflora Technologies, and they developed my app, website, and software. The quality of work is very good, and the team is professional and cooperative. They understood my requirements well and delivered on time.",
    avatar: "MK"
  }
];

// Duplicate once for infinite marquee scrolling
const marqueeReviews = [...googleReviewsData, ...googleReviewsData];

export default function GoogleReviewsSection() {
  return (
    <section className="py-16 md:py-20 bg-[#030303] relative overflow-hidden z-10 border-t border-white/5">
      {/* Consolidated Structured Review Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": googleReviewsData.map((review) => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": review.clientName
              },
              "itemReviewed": {
                "@type": "LocalBusiness",
                "name": "Webflora Technologies",
                "image": "https://webfloratechnologies.com/webflora-logo.svg",
                "url": "https://webfloratechnologies.com",
                "priceRange": "$$",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Patna",
                  "addressRegion": "Bihar",
                  "addressCountry": "IN"
                }
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": Number(review.rating),
                "bestRating": 5,
                "worstRating": 1
              },
              "reviewBody": review.feedback
            }))
          })
        }}
      />

      {/* Ambient background styling */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.05]" style={{ background: "radial-gradient(circle, #ff3c00 0%, transparent 70%)" }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-6 px-4 py-1.5 w-fit rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-gray-300 font-bold uppercase tracking-[0.3em] text-[10px]">100% Verified Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tighter leading-none uppercase">
            Loved By <span className="text-[#ff3c00]">Our Clients</span>
          </h2>
        </div>
      </div>
 
      {/* Infinite Auto-Scrolling Marquee Container */}
      <div className="relative w-full overflow-hidden select-none py-4">
        {/* Shadow Overlays to blend edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none" />
 
        {/* Marquee Track */}
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max">
          {marqueeReviews.map((review, idx) => (
            <div
              key={review.clientName + "-" + idx}
              className="w-[300px] md:w-[380px] flex-shrink-0 group relative p-6 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-[#ff3c00]/30 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[260px]"
            >
              <div>
                {/* Stars & G Logo Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  
                  {/* Google G Logo representation */}
                  <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114A5.99 5.99 0 0 1 8 12.5a5.99 5.99 0 0 1 5.99-6.029c1.614 0 3.09.61 4.22 1.638l3.14-3.142A9.93 9.93 0 0 0 13.99 2 9.99 9.99 0 0 0 4 12a9.99 9.99 0 0 0 9.99 10c5.52 0 10.01-4.48 10.01-10 0-.685-.06-1.352-.16-2H12.24z" />
                    </svg>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-300 font-light text-xs sm:text-sm leading-relaxed mb-5 group-hover:text-gray-200 transition-colors duration-300 line-clamp-4">
                  &ldquo;{review.feedback}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-3 border-t border-white/5 mt-auto">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 flex items-center justify-center text-xs font-bold text-white uppercase tracking-wider">
                  {review.avatar}
                </div>
                <div>
                  <h3 className="text-white font-bold text-xs sm:text-sm tracking-wide leading-none mb-1 group-hover:text-[#ff3c00] transition-colors duration-300">
                    {review.clientName}
                  </h3>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">
                    Google Reviewer
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
