import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import API_BASE_URL from "../config";

const DEFAULT_PROJECTS = [
  {
    _id: "1",
    title: "Feedrani E-Commerce Ecosystem",
    category: "WEB",
    slug: "feedrani-ecommerce",
    description: "High-performance Next.js direct-to-consumer store with real-time inventory management and UPI payment gateway.",
    image: "/client-logo/feedrani-logo.png",
  },
  {
    _id: "2",
    title: "Edugen World School Portal",
    category: "SOFTWARE",
    slug: "edugen-world-school",
    description: "Comprehensive school management ERP with fee billing, attendance records, and student report card generator.",
    image: "/client-logo/Edugen-world-school.png",
  },
  {
    _id: "3",
    title: "Diamond Resort Booking Engine",
    category: "WEB",
    slug: "diamond-resort-patna",
    description: "Luxury resort reservation engine with real-time room availability, banquet inquiries, and local SEO dominance.",
    image: "/client-logo/DiamondResort.png",
  },
  {
    _id: "4",
    title: "Best For Everyone MLM Suite",
    category: "SOFTWARE",
    slug: "best-for-everyone",
    description: "Enterprise multi-tier affiliate platform with real-time genealogy graphs, payout calculations, and wallet security.",
    image: "/client-logo/best-for-everyone.png",
  },
  {
    _id: "5",
    title: "Krisivarsha AgriTech App",
    category: "MOBILE",
    slug: "krisivarsha-agritech",
    description: "Cross-platform mobile app for farm produce distribution, weather notifications, and wholesale supply chain tracking.",
    image: "/client-logo/Krisivarsha-logo.png",
  },
  {
    _id: "6",
    title: "Team Excellent EdTech Platform",
    category: "AI/ML",
    slug: "team-excellent",
    description: "Smart learning portal with automated test grading, student analytics, and WhatsApp query bots.",
    image: "/client-logo/Team-excellentlogo.webp",
  },
];

export default function WorkSection() {
  const projects = DEFAULT_PROJECTS;

  return (
    <section
      id="work"
      className="relative py-20 px-6 bg-neutral-950 overflow-hidden"
    >
      {/* Ambient premium glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-[#FF3B00]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-[#FF3B00]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight mb-6 uppercase">
            Case Studies
          </h2>

          <nav
            aria-label="Filter case studies by category"
            className="flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {["ALL", "WEB", "MOBILE", "AI/ML", "SOFTWARE", "DIGITAL MARKETING"].map((item, idx) => (
              <Link
                key={item}
                href="/case-studies"
                aria-label={`Browse ${item} case studies`}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold border transition-all duration-300 cursor-pointer ${idx === 0
                    ? "border-[#d93200] bg-[#d93200] text-white shadow-[0_0_30px_rgba(217,50,0,0.35)]"
                    : "border-white/10 text-neutral-300 hover:text-white hover:border-white/40 bg-white/[0.02]"
                  }`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const imageSrc = project.image?.startsWith("http")
              ? project.image
              : project.image?.startsWith("/")
                ? project.image
                : `${API_BASE_URL}/${project.image}`;

            return (
              <Link
                key={project._id || project.title}
                href={`/case-studies/${project.slug}`}
                aria-label={`Read case study: ${project.title}`}
                className="group flex flex-col rounded-2xl md:rounded-[1.5rem] bg-[#0c0c0e] border border-zinc-800/60 overflow-hidden cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-[#FF3B00]/40 hover:-translate-y-1.5 hover:shadow-[0_8px_40px_rgba(255,59,0,0.15)]"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 flex items-center justify-center p-6">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={imageSrc}
                      alt={project.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 280px, 360px"
                      quality={75}
                      loading="lazy"
                    />
                  </div>
                  {/* Subtle Top Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Box */}
                <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-[#0c0c0e] to-zinc-950 relative">
                  <span className="text-orange-400 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] mb-2 font-mono">
                    {project.category}
                  </span>

                  <h3 className="font-sans font-bold text-base sm:text-lg text-white mb-2 leading-tight group-hover:text-[#FF3B00] transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-neutral-300 text-xs mb-5 line-clamp-2 font-normal leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-auto flex items-center text-white font-bold uppercase tracking-wider text-[10px] gap-2">
                    <span className="pb-0.5 border-b border-[#FF3B00]/40 group-hover:border-[#FF3B00] transition-colors duration-300">
                      View Case Study
                    </span>
                    <ArrowRight size={14} className="text-[#FF3B00] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <Link
            href="/case-studies"
            aria-label="See all case study projects"
            className="inline-flex items-center gap-2 border-b border-[#FF3B00] pb-1 text-white hover:text-[#FF3B00] transition-all duration-300 group text-lg"
          >
            <span className="flex items-center gap-2">
              See All Projects
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
