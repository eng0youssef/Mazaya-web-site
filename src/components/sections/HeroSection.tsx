"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Play, 
  ArrowLeft, 
  ShieldCheck
} from "lucide-react";
import { TRUST_METRICS } from "@/data/mazaya-data";
import VideoModal from "@/components/ui/VideoModal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#EEF5F9] to-[#F8FAFC] pt-6 pb-16 sm:pt-8 lg:pt-10 lg:pb-20 border-b border-slate-200/70">
      
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none" />
      
      {/* Atmospheric Multi-layer Radial Glow (Navy, Sky, Gold) behind Heading */}
      <div 
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] max-w-[95vw] h-[550px] bg-[radial-gradient(circle_at_center,rgba(10,80,122,0.18)_0%,rgba(2,132,199,0.12)_35%,rgba(242,193,46,0.14)_65%,transparent_80%)] blur-3xl pointer-events-none" 
      />
      
      {/* Ambient Floating Glow Circles */}
      <div className="absolute top-16 start-12 w-36 h-36 rounded-full bg-[#0A507A]/12 blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute top-48 end-12 w-44 h-44 rounded-full bg-[#F2C12E]/18 blur-3xl animate-float-reverse pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-7">

          {/* H1 Heading */}
          <h1 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-[1.25] tracking-tight max-w-4xl"
          >
            <span className="block text-xl sm:text-3xl md:text-4xl font-black text-[#0A507A] mb-3">
              شركة مزايا للبرمجيات
            </span>
            <span className="block">
              ظبّط <span className="text-[#0A507A]">مبيعاتك</span>،{" "}
              <span className="text-[#0A507A]">مخازنك</span>، وحساباتك{" "}
              <span className="relative whitespace-nowrap inline-block">
                <span className="relative z-10 text-slate-900">بدقة وسرعة</span>
                <span className="absolute bottom-1.5 start-0 w-full h-3.5 bg-[#F2C12E]/40 -z-0 rounded-sm"></span>
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl"
          >
            بنقدملك أقوى برامج الكاشير والمخازن والحسابات والأنظمة المتخصصة الجاهزة للشغل فوراً، مع إمكانية تفصيل وبرمجة أنظمة مخصوصة (Custom ERP) على مقاس دورة العمل في شركتك أو مصنعك، مع دعم فني معاك خطوة بخطوة وشروحات فيديو لكل تفصيلة.
          </p>

          {/* Dual Call To Actions */}
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-wrap items-center justify-center gap-4 pt-2 w-full sm:w-auto"
          >
            <Link
              href="#lead-capture"
              className="relative overflow-hidden group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#0A507A] hover:bg-[#06324D] active:scale-[0.98] text-white font-bold text-sm sm:text-base shadow-navy hover:shadow-lg transition-all transform hover:-translate-y-0.5 border border-[#F2C12E]/40"
            >
              {/* Shimmer Light Beam */}
              <div 
                aria-hidden="true" 
                className="pointer-events-none absolute inset-y-0 -left-1/4 w-[150%] bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer-sweep" 
              />
              <span className="relative z-10">اطلب ديمو مجاني الآن</span>
              <ArrowLeft className="relative z-10 w-5 h-5 text-[#F2C12E] group-hover:-translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={() => setIsVideoOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-800 font-bold text-sm sm:text-base border border-slate-200/90 shadow-soft hover:border-[#0A507A]/40 transition group"
            >
              <div className="w-7 h-7 rounded-full bg-[#F2C12E] text-slate-900 flex items-center justify-center shadow-xs group-hover:scale-110 transition">
                <Play className="w-3.5 h-3.5 fill-current ms-0.5" />
              </div>
              <span>شوف شرح السيستم (فيديو)</span>
            </button>
          </div>

          {/* Tax Compliance Micro-Tag */}
          <div 
            data-aos="fade-up"
            data-aos-delay="250"
            className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50/80 px-4 py-2 rounded-xl border border-emerald-200/80"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>متوافق مع الفاتورة والإيصال الإلكتروني ومعتمد من هيئة الزكاة بالسعودية ZATCA</span>
          </div>

          {/* Trust Metrics Bar */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="pt-8 mt-2 border-t border-slate-200/80 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
          >
            {TRUST_METRICS.map((metric, idx) => (
              <div 
                key={idx} 
                data-aos="zoom-in"
                data-aos-delay={300 + idx * 80}
                className="flex flex-col items-center text-center p-3.5 sm:p-4 rounded-2xl bg-white/70 backdrop-blur-xs border border-slate-200/70 shadow-xs hover:shadow-soft hover:border-[#0A507A]/30 transition-all"
              >
                <AnimatedCounter
                  value={metric.value}
                  duration={3500}
                  delay={300 + idx * 80}
                  className="text-2xl sm:text-3xl font-extrabold text-[#0A507A]"
                />
                <span className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                  {metric.label}
                </span>
                <span className="text-[11px] text-slate-500 mt-0.5">
                  {metric.subLabel}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Video Modal Trigger */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        youtubeId="X0mdQtelSdk"
        title="شرح شامل لنظام مزايا ماكس لإدارة المبيعات والمخازن"
      />
    </section>
  );
}
