"use client";

import React from "react";
import Link from "next/link";
import { 
  ShoppingCart, 
  Layers, 
  UtensilsCrossed, 
  GraduationCap, 
  Building2, 
  Dumbbell, 
  Palmtree, 
  Bike, 
  ArrowLeft, 
  CheckCircle2, 
  Star
} from "lucide-react";
import { SYSTEM_MODULES } from "@/data/mazaya-data";

const iconMap: Record<string, React.ReactNode> = {
  ShoppingCart: <ShoppingCart className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Dumbbell: <Dumbbell className="w-6 h-6" />,
  Palmtree: <Palmtree className="w-6 h-6" />,
  Bike: <Bike className="w-6 h-6" />,
};

export default function SystemsBentoGrid() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--spotlight-x", `${x}px`);
    e.currentTarget.style.setProperty("--spotlight-y", `${y}px`);
  };

  return (
    <section id="systems" className="py-20 lg:py-28 bg-[#080E1A] relative border-b border-slate-800/80 overflow-hidden">
      
      {/* Background Decorative Grid (Subtle Dark Pattern) */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: "32px 32px"
        }}
      />
      
      {/* Atmospheric Multi-layer Radial Glow (Navy & Gold Ambient Light) */}
      <div 
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] max-w-[95vw] h-[450px] bg-[radial-gradient(ellipse_at_top,rgba(10,80,122,0.35)_0%,rgba(2,132,199,0.15)_40%,transparent_70%)] blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true"
        className="absolute top-1/3 start-10 w-96 h-96 bg-[#0A507A]/20 blur-[110px] rounded-full pointer-events-none" 
      />
      <div 
        aria-hidden="true"
        className="absolute bottom-1/4 end-10 w-96 h-96 bg-[#F2C12E]/10 blur-[110px] rounded-full pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-soft">
            <span className="text-xs sm:text-sm font-bold text-slate-200">
              أنظمة برمجية متخصصة لكل قطاع تجاري وصناعي
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
            حلول برمجية متخصصة تخدم طبيعة شغلك <span className="text-[#F2C12E]">بدقة 100%</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            من نظام <strong className="text-white font-bold">مزايا ماكس</strong> الأساسي للمبيعات والمخازن، إلى أنظمتنا التخصصية للمصانع والمطاعم والمدارس والعقارات والجيم والمعارض.
          </p>
        </div>

        {/* 8-Card Bento Grid with Dynamic Spotlight Borders (Dark Glassmorphism) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SYSTEM_MODULES.map((module, idx) => {
            const isFeatured = module.slug === "mazaya-max";

            return (
              <div
                key={module.id}
                data-aos="fade-up"
                data-aos-delay={(idx % 4) * 80}
                onMouseMove={handleMouseMove}
                className={`group relative rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default hover:-translate-y-1.5 ${
                  isFeatured
                    ? "p-[2px] bg-gradient-to-b from-[#F2C12E] via-[#DEAA20]/80 to-[#0A507A] shadow-[0_0_35px_-5px_rgba(242,193,46,0.35),0_20px_50px_-10px_rgba(10,80,122,0.6)] ring-1 ring-[#F2C12E]/50"
                    : "p-[1px] bg-slate-800/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_-10px_rgba(10,80,122,0.4)]"
                }`}
              >
                {/* Dynamic Spotlight Border Beam */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                  style={{
                    background: `radial-gradient(280px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), #F2C12E 0%, #0A507A 50%, transparent 80%)`,
                  }}
                />

                {/* Inner Dark Surface */}
                <div
                  className={`relative z-10 backdrop-blur-md rounded-[22px] p-6 flex-1 flex flex-col justify-between overflow-hidden transition-colors duration-300 ${
                    isFeatured
                      ? "bg-gradient-to-b from-[#0F2236] to-[#0A1626] border border-[#F2C12E]/25"
                      : "bg-[#0F172A]/90 group-hover:bg-[#111C33]/95 border border-white/5"
                  }`}
                >
                  {/* Subtle Inner Ambient Glow following mouse */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                    style={{
                      background: `radial-gradient(220px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(242, 193, 46, 0.08), transparent 70%)`,
                    }}
                  />

                  {/* Ambient Gold Glow inside Featured Card */}
                  {isFeatured && (
                    <div
                      aria-hidden="true"
                      className="absolute -top-10 -end-10 w-44 h-44 bg-[#F2C12E]/15 rounded-full blur-2xl pointer-events-none"
                    />
                  )}

                  {/* Card Content Top */}
                  <div className="relative z-10">
                    {/* Icon & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-105 ${
                          isFeatured
                            ? "bg-gradient-to-br from-[#0A507A] via-[#0E3550] to-[#0A507A] text-[#F2C12E] border-2 border-[#F2C12E] shadow-[0_0_20px_rgba(242,193,46,0.35)]"
                            : "bg-gradient-to-br from-[#0A507A]/50 to-[#06324D]/80 text-[#F2C12E] border border-[#0A507A]/80 group-hover:from-[#0A507A] group-hover:to-[#0A507A]"
                        }`}
                      >
                        {iconMap[module.iconName] || <ShoppingCart className="w-6 h-6" />}
                      </div>

                      {isFeatured ? (
                        <span className="text-xs font-bold text-slate-950 bg-[#F2C12E] hover:bg-[#DEAA20] px-3 py-1.5 rounded-full shadow-md border border-[#F2C12E]/60 flex items-center gap-1.5 transition-colors">
                          <Star className="w-3.5 h-3.5 fill-slate-950 text-slate-950 flex-shrink-0" />
                          <span>الأكثر طلباً واعتماداً</span>
                        </span>
                      ) : (
                        <span className="text-[11px] font-bold text-slate-300 bg-slate-800/90 group-hover:bg-[#F2C12E]/15 group-hover:text-[#F2C12E] px-2.5 py-1 rounded-full transition-colors border border-slate-700/80">
                          {module.badge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-base sm:text-lg font-black transition-colors mb-2 ${
                        isFeatured
                          ? "text-[#F2C12E]"
                          : "text-white group-hover:text-[#F2C12E]"
                      }`}
                    >
                      {module.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {module.shortDesc}
                    </p>

                    {/* Highlight Checkmarks */}
                    <ul className="space-y-1.5 mb-6 text-xs text-slate-300">
                      {module.keyBenefits.slice(0, 2).map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2
                            className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                              isFeatured ? "text-[#F2C12E]" : "text-emerald-400"
                            }`}
                          />
                          <span className="line-clamp-1">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer Link / Action Button */}
                  {isFeatured ? (
                    <div className="relative z-10 pt-4 border-t border-[#F2C12E]/20">
                      <Link
                        href={`/systems/${module.slug}`}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#F2C12E] hover:bg-[#DEAA20] active:scale-[0.98] text-slate-950 font-black text-xs sm:text-sm shadow-gold transition-all hover:scale-[1.02] border border-[#F2C12E] group/btn"
                      >
                        <span>تفاصيل النظام</span>
                        <ArrowLeft className="w-4 h-4 text-slate-950 group-hover/btn:-translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  ) : (
                    <div className="relative z-10 pt-4 border-t border-slate-800/90 flex items-center justify-end">
                      <Link
                        href={`/systems/${module.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F2C12E] hover:text-white transition group/link"
                      >
                        <span>تفاصيل النظام</span>
                        <ArrowLeft className="w-3.5 h-3.5 group-hover/link:-translate-x-1 transition-transform text-[#F2C12E]" />
                      </Link>
                    </div>
                  )}

                  {/* Subtle bottom accent line */}
                  <div className="absolute bottom-0 start-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#0A507A] via-[#0284C7] to-[#F2C12E] transition-all duration-300 z-10" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Global systems prompt callout (Elevated VIP Banner with Gold Accents) */}
        <div 
          data-aos="fade-up" 
          className="mt-14 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0A507A] via-[#06324D] to-[#0A507A] text-white shadow-[0_20px_50px_-10px_rgba(10,80,122,0.6)] border-2 border-[#F2C12E]/40 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          {/* Ambient glow inside banner */}
          <div 
            aria-hidden="true" 
            className="absolute -top-12 -right-12 w-48 h-48 bg-[#F2C12E]/20 rounded-full blur-2xl pointer-events-none" 
          />

          <div className="space-y-2 text-center md:text-start relative z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#F2C12E] text-xs font-bold w-fit mx-auto md:mx-0">
              <span>تفصيل وبرمجة مخصصة (Custom ERP)</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black">
              نشاطك التجاري مش موجود في القائمة أو محتاج تعديل خاص؟
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
              بنقدم خدمة تفصيل وتعديل البرامج على مقاس شغلك بالكامل، تواصل مع فريق المبيعات والتحليل البرمجي فوراً.
            </p>
          </div>

          <Link
            href="/#lead-capture"
            className="relative z-10 flex-shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#F2C12E] hover:bg-[#DEAA20] active:scale-95 text-slate-900 font-black text-sm sm:text-base shadow-[0_10px_25px_-5px_rgba(242,193,46,0.5)] transition-all hover:scale-105"
          >
            <span>احجز استشارة مجانية مع مهندس الأنظمة</span>
            <ArrowLeft className="w-4 h-4 text-slate-950" />
          </Link>
        </div>

      </div>
    </section>
  );
}
