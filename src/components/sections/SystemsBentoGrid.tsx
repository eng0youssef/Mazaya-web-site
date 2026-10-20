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
  Sparkles
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
  return (
    <section id="systems" className="py-16 lg:py-24 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0A507A]/15 shadow-soft">
            <Sparkles className="w-4 h-4 text-[#F2C12E]" />
            <span className="text-xs font-bold text-[#0A507A]">
              أنظمة برمجية متخصصة لكل قطاع تجاري وصناعي
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            حلول برمجية متخصصة تخدم طبيعة شغلك بدقة 100%
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            من نظام <strong>مزايا ماكس</strong> الأساسي للمبيعات والمخازن، إلى أنظمتنا التخصصية للمصانع والمطاعم والمدارس والعقارات والجيم والمعارض.
          </p>
        </div>

        {/* 8-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SYSTEM_MODULES.map((module) => (
            <div
              key={module.id}
              className="group relative bg-white rounded-3xl p-6 border border-slate-200/90 shadow-soft hover:shadow-xl hover:border-[#0A507A]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Large Watermark Number */}
              <span className="absolute top-2 end-4 font-mono font-extrabold text-6xl text-slate-100 group-hover:text-amber-100/60 transition-colors pointer-events-none select-none">
                {module.number}
              </span>

              {/* Card Content Top */}
              <div className="relative z-10">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A507A]/10 text-[#0A507A] group-hover:bg-[#0A507A] group-hover:text-white flex items-center justify-center transition-colors shadow-soft">
                    {iconMap[module.iconName] || <ShoppingCart className="w-6 h-6" />}
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 group-hover:bg-amber-50 group-hover:text-[#946c00] px-2.5 py-1 rounded-full transition-colors border border-slate-200/60">
                    {module.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0A507A] transition-colors mb-2">
                  {module.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {module.shortDesc}
                </p>

                {/* Highlight Checkmarks */}
                <ul className="space-y-1.5 mb-6 text-xs text-slate-600">
                  {module.keyBenefits.slice(0, 2).map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Link */}
              <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">
                  {module.metricNumber}
                </span>
                <Link
                  href={`/systems/${module.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A507A] group-hover:text-[#06324D] transition"
                >
                  <span>تفاصيل النظام</span>
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Subtle bottom accent line */}
              <div className="absolute bottom-0 start-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#0A507A] to-[#F2C12E] transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Global systems prompt callout */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-[#0A507A] to-[#06324D] text-white shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-start">
            <h4 className="text-lg sm:text-xl font-bold">
              نشاطك التجاري مش موجود في القائمة أو محتاج تعديل خاص؟
            </h4>
            <p className="text-xs sm:text-sm text-slate-200">
              بنقدم خدمة تفصيل وتعديل البرامج على مقاس شغلك بالكامل، تواصل مع فريق المبيعات والتحليل البرمجي فوراً.
            </p>
          </div>
          <Link
            href="/#lead-capture"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F2C12E] hover:bg-[#DEAA20] text-slate-900 font-bold text-sm shadow-gold transition-transform hover:scale-105"
          >
            <span>احجز استشارة مجانية مع مهندس الأنظمة</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
