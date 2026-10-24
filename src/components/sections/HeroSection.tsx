"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Play, 
  ArrowLeft, 
  ShieldCheck,
  CheckCircle2,
  ZoomIn,
  Maximize2,
  Laptop,
  Zap
} from "lucide-react";
import { TRUST_METRICS } from "@/data/mazaya-data";
import VideoModal from "@/components/ui/VideoModal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ImageLightboxModal from "@/components/ui/ImageLightboxModal";

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#EEF5F9] to-[#F8FAFC] pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200/70">
      
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none" />
      
      {/* Atmospheric Multi-layer Radial Glow (Navy, Sky, Gold) behind Heading */}
      <div 
        aria-hidden="true"
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] max-w-[95vw] h-[550px] bg-[radial-gradient(circle_at_center,rgba(10,80,122,0.18)_0%,rgba(2,132,199,0.12)_35%,rgba(242,193,46,0.14)_65%,transparent_80%)] blur-3xl pointer-events-none" 
      />
      
      {/* Ambient Floating Glow Circles */}
      <div className="absolute top-16 start-12 w-36 h-36 rounded-full bg-[#0A507A]/12 blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute top-48 end-12 w-44 h-44 rounded-full bg-[#F2C12E]/18 blur-3xl animate-float-reverse pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-7">
          
          {/* Animated Badge */}
          <div 
            data-aos="fade-down"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0A507A]/15 shadow-soft"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#F2C12E] animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-[#0A507A]">
              الحل البرمجي المتكامل لإدارة شغلك في مصر والوطن العربي
            </span>
          </div>

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
            <span>متوافق ومعتمد مع الفاتورة والإيصال الإلكتروني بمصر وهيئة الزكاة بالسعودية ZATCA</span>
          </div>

          {/* ========================================================================= */}
          {/* Visual Anchor: 3D Elevated Software Window Mockup (Main System Showcase) */}
          {/* ========================================================================= */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="relative w-full max-w-5xl pt-4 sm:pt-6"
          >
            {/* Ambient Backlight Glow behind Mockup */}
            <div 
              aria-hidden="true" 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-[320px] bg-gradient-to-r from-[#0A507A]/25 via-[#0284C7]/20 to-[#F2C12E]/25 blur-3xl rounded-full pointer-events-none -z-10" 
            />

            {/* Floating Smart Badge 1: Top Start (Desktop Only) */}
            <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl shadow-slate-900/5 absolute -top-4 -start-4 z-20 animate-float-slow">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200/70 shadow-xs flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-right">
                <div className="text-xs font-black text-slate-900">معتمد 100% للضرائب والزكاة</div>
                <div className="text-[10px] font-semibold text-slate-500">مصلحة الضرائب المصرية & ZATCA</div>
              </div>
            </div>

            {/* Floating Smart Badge 2: Bottom End (Desktop Only) */}
            <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl shadow-slate-900/5 absolute -bottom-5 -end-4 z-20 animate-float-reverse">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200/70 shadow-xs flex-shrink-0">
                <Zap className="w-5 h-5 text-[#DEAA20]" />
              </div>
              <div className="text-right">
                <div className="text-xs font-black text-slate-900">أداء فوري واستجابة 0.2s</div>
                <div className="text-[10px] font-semibold text-slate-500">محرك بيانات قوي للأصناف والفواتير</div>
              </div>
            </div>

            {/* Luxury Acrylic Window Mockup Container */}
            <div 
              onClick={() => setIsImageOpen(true)}
              className="group relative cursor-zoom-in rounded-2xl sm:rounded-3xl bg-slate-950 border border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(10,80,122,0.3),0_10px_30px_-10px_rgba(15,23,42,0.2)] hover:shadow-[0_35px_80px_-15px_rgba(10,80,122,0.4),0_15px_40px_-5px_rgba(242,193,46,0.2)] transition-all duration-500 hover:border-slate-500 overflow-hidden ring-1 ring-white/10"
            >
              {/* Acrylic macOS / Windows 11 Titlebar */}
              <div className="flex items-center justify-between px-3.5 py-2.5 sm:px-5 sm:py-3 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900 border-b border-slate-800 text-xs select-none">
                
                {/* Window Controls (Traffic Lights) */}
                <div className="flex items-center gap-2">
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-rose-500 inline-block shadow-2xs" />
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-amber-400 inline-block shadow-2xs" />
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-500 inline-block shadow-2xs" />
                </div>

                {/* Center Title & Status Badge */}
                <div className="flex items-center gap-2 sm:gap-2.5 font-bold text-slate-200">
                  <Laptop className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F2C12E]" />
                  <span className="text-xs sm:text-sm">نظام مزايا ماكس ERP — الشاشة الرئيسية المعتمدة</span>
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>مباشر 2026</span>
                  </span>
                </div>

                {/* Zoom Affordance Action */}
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-300 group-hover:text-white transition bg-slate-800/90 group-hover:bg-[#0A507A] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border border-slate-700/80">
                  <ZoomIn className="w-3.5 h-3.5 text-[#F2C12E]" />
                  <span className="hidden sm:inline">انقر للتكبير والتفاصيل</span>
                  <span className="sm:hidden">تكبير</span>
                </div>
              </div>

              {/* Actual Dashboard Screenshot */}
              <div className="relative overflow-hidden bg-slate-950 aspect-[1024/475]">
                <img
                  src="/screenshots/mazaya-main-dashboard.png"
                  alt="الشاشة الرئيسية ونظام لوحة التحكم لنظام مزايا ماكس ERP لإدارة المبيعات والمخازن والحسابات"
                  className="w-full h-full object-cover sm:object-contain select-none group-hover:scale-[1.012] transition-transform duration-500"
                  loading="eager"
                />

                {/* Floating Bottom Left Badge overlay on image */}
                <div className="absolute bottom-2.5 start-2.5 sm:bottom-4 sm:start-4 bg-slate-950/85 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-white/20 flex items-center gap-2 shadow-2xl">
                  <Maximize2 className="w-3.5 h-3.5 text-[#F2C12E]" />
                  <span>معاينة حية بدقة 4K — اضغط للاستعراض الكامل</span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Trust Metrics Bar (Anchored smoothly under the Visual Anchor)             */}
          {/* ========================================================================= */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="pt-10 sm:pt-12 mt-6 sm:mt-8 border-t border-slate-200/80 w-full max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
          >
            {TRUST_METRICS.map((metric, idx) => (
              <div 
                key={idx} 
                data-aos="zoom-in"
                data-aos-delay={400 + idx * 80}
                className="flex flex-col items-center text-center p-3.5 sm:p-4 rounded-2xl bg-white/70 backdrop-blur-xs border border-slate-200/70 shadow-xs hover:shadow-soft hover:border-[#0A507A]/30 transition-all"
              >
                <AnimatedCounter
                  value={metric.value}
                  duration={3500}
                  delay={400 + idx * 80}
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

      {/* Interactive 4K Fullscreen Image Lightbox Modal */}
      <ImageLightboxModal
        isOpen={isImageOpen}
        onClose={() => setIsImageOpen(false)}
        imageSrc="/screenshots/mazaya-main-dashboard.png"
        imageAlt="الشاشة الرئيسية لنظام مزايا ماكس ERP"
        title="نظام مزايا ماكس ERP — الشاشة الرئيسية ولوحة التحكم الشاملة"
        subtitle="معاينة تفصيلية لجميع أقسام النظام: المبيعات، المشتريات، المخازن، الخزينة والبنوك، شؤون الموظفين، والتقارير المالية"
      />
    </section>
  );
}
