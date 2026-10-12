import React from "react";
import Link from "next/link";
import {
  Globe2,
  Code2,
  TrendingUp,
  Smartphone,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    id: "website",
    title: "Website Development",
    href: "/locations/website-development-company-in-gaya",
    desc: "Next.js websites, e-commerce stores & portals",
    badge: "Web Engineering",
    icon: Globe2,
  },
  {
    id: "software",
    title: "Software Company",
    href: "/locations/software-company-in-gaya",
    desc: "Custom CRM, ERP & operational workflow tools",
    badge: "Business Software",
    icon: Code2,
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    href: "/locations/digital-marketing-company-in-gaya",
    desc: "SEO, Google Ads, Meta Ads & lead generation",
    badge: "Growth & SEO",
    icon: TrendingUp,
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    href: "/locations/mobile-app-development-company-in-gaya",
    desc: "Android, iOS & React Native / Flutter apps",
    badge: "Mobile Apps",
    icon: Smartphone,
  },
];

export default function GayaServicesNav({ activeId }) {
  const sequenceServices = services.filter((s) => s.id !== activeId);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#060606] border-y border-white/10 relative">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-[#FF3C00] font-mono text-xs font-black uppercase tracking-[0.25em] block mb-1">
              Gaya Digital Ecosystem
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white">
              Explore Our Core Technology Services in Gaya
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md">
            Webflora Technologies provides end-to-end digital solutions for growing businesses in Gaya, Bodh Gaya, and Bihar.
          </p>
        </div>

        {/* Explicit Contextual Link Chain Bar */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-950/90 border border-white/10 shadow-lg flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <span className="text-gray-400 font-mono text-[11px] sm:text-xs uppercase tracking-wider font-semibold">
              Explore Other Services:
            </span>
            {sequenceServices.map((svc, idx) => (
              <React.Fragment key={svc.id}>
                <Link
                  href={svc.href}
                  className="font-bold text-orange-400 hover:text-white transition-colors underline decoration-orange-500/40 hover:decoration-white inline-flex items-center gap-1"
                >
                  {svc.title} in Gaya
                </Link>
                {idx < sequenceServices.length - 1 && (
                  <span className="text-gray-600 font-bold select-none">➜</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <span className="text-[10px] font-mono text-gray-500 hidden md:inline-block">
            Webflora Gaya Cluster
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {services.map((svc) => {
            const Icon = svc.icon;
            const isCurrent = svc.id === activeId;

            if (isCurrent) {
              return (
                <div
                  key={svc.id}
                  className="p-4 sm:p-5 rounded-2xl bg-[#FF3C00]/10 border border-[#FF3C00]/50 shadow-[0_0_25px_rgba(255,60,0,0.15)] flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-xl bg-[#FF3C00] text-white flex items-center justify-center">
                        <Icon size={16} />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FF3C00] text-white font-bold flex items-center gap-1">
                        <CheckCircle2 size={10} /> Active Page
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white">
                        {svc.title} in Gaya
                      </h3>
                      <p className="text-xs text-gray-300 font-light mt-1">
                        {svc.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={svc.id}
                href={svc.href}
                className="p-4 sm:p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-orange-500/50 hover:bg-zinc-900 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 text-gray-300 group-hover:bg-[#FF3C00] group-hover:text-white transition-all flex items-center justify-center">
                      <Icon size={16} />
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 group-hover:text-orange-400 transition-colors">
                      {svc.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                      {svc.title} in Gaya
                    </h3>
                    <p className="text-xs text-gray-400 font-light mt-1">
                      {svc.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400 group-hover:text-white transition-colors">
                  <span>View Service</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
