"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight,
  Clock, 
  FileSpreadsheet,
  Boxes,
  Landmark,
  ZoomIn,
  ShoppingCart,
  Layers,
  Sparkles,
  Receipt
} from "lucide-react";
import InteractiveScreenHotspots from "@/components/ui/InteractiveScreenHotspots";
import ImageLightboxModal from "@/components/ui/ImageLightboxModal";

const SLIDES_META = [
  { id: 0, label: "شاشة الكاشير (POS)", icon: ShoppingCart },
  { id: 1, label: "كارت الصنف والمخازن", icon: Boxes },
  { id: 2, label: "كشف حساب الخزينة", icon: Landmark },
];

export default function ZigZagShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<{ src: string; title: string; subtitle: string } | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Smoothly observe which slide is currently in view during finger swipe
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slideRefs.current.findIndex((el) => el === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.55,
      }
    );

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    return () => observer.disconnect();
  }, []);

  const goToSlide = (idx: number) => {
    const target = slideRefs.current[idx];
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setActiveIndex(idx);
    }
  };

  const handlePrev = () => {
    goToSlide(Math.max(0, activeIndex - 1));
  };

  const handleNext = () => {
    goToSlide(Math.min(2, activeIndex + 1));
  };

  return (
    <section id="showcase" className="py-16 lg:py-24 bg-white relative overflow-hidden border-b border-slate-200/70">
      
      {/* ========================================================================= */}
      {/* 1. DESKTOP VIEW: The Classic 3-Block Zig-Zag Showcase (Strictly lg:block) */}
      {/* ========================================================================= */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Block 1: POS / Cashier Speed & Interactive Screen Demo */}
        <div className="grid grid-cols-12 gap-14 items-center">
          
          {/* Text Side (Right in RTL) */}
          <div data-aos="fade-left" data-aos-duration="800" className="col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#0A507A]/10 text-[#0A507A] text-xs font-bold">
              <Clock className="w-3.5 h-3.5 text-[#F2C12E]" />
              <span>دقة متناهية في تسجيل الفواتير</span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              كاشير سريع ميعطلش شغلك في وقت الزحمة وطوابير الزباين
            </h3>

            <p className="text-slate-600 text-base leading-relaxed">
              مهما كان ضغط الشغل وعدد العملاء أمام الكاشير، شاشة البيع في مزايا بتستجيب في أجزاء من الثانية. امسح الباركود، حط الكمية، واطبع الإيصال بضغطة زر واحدة بدون أي تهنيج أو بطء.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "دعم كامل لكل طابعات الفواتير الحرارية (80mm و 58mm) وطابعات A4 و A5.",
                "قراءة فورية لأسكانر الباركود.",
                "إمكانية تحويل عرض السعر إلى فاتورة بضغطة زرار واحدة.",
                "تقدر تعمل كشف حساب تفصيلي للعميل وتعرف كل معاملاته على السيستم.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/systems/mazaya-max"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A507A] hover:bg-[#06324D] text-white font-bold text-sm transition shadow-soft group"
              >
                <span>استكشف مواصفات نظام مزايا ماكس</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#F2C12E]" />
              </Link>
            </div>
          </div>

          {/* Interactive Screen Hotspots Side (Left in RTL) */}
          <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="100" className="col-span-7">
            <InteractiveScreenHotspots />
          </div>

        </div>

        {/* Block 2: Inventory Control & Shortages (Reversed Layout) */}
        <div className="grid grid-cols-12 gap-14 items-center">
          
          {/* Real Report Showcase Side (Right in RTL) */}
          <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="100" className="col-span-6 order-1">
            <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden group hover:border-[#0A507A]/40 transition-all duration-300">
              
              {/* Window Header Strip */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-100/90 border-b border-slate-200 text-xs select-none">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block shadow-2xs" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block shadow-2xs" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shadow-2xs" />
                  <span className="font-bold text-slate-800 ms-2 flex items-center gap-1.5">
                    <FileSpreadsheet className="w-4 h-4 text-[#0A507A]" />
                    <span>تقرير كارت الصنف — مزايا ماكس</span>
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  دقة متناهية
                </span>
              </div>

              <div className="p-5 bg-gradient-to-b from-[#F8FAFC] to-white">
                {/* Real Report Image Container with Zoom On Click */}
                <div 
                  onClick={() => setZoomedImage({
                    src: "/screenshots/mazaya-item-card-report.png",
                    title: "تقرير كارت الصنف — مزايا ماكس",
                    subtitle: "معاينة تفصيلية لحركة الوارد والصادر وتتبع أرصدة الصنف"
                  })}
                  className="mb-4 bg-white rounded-2xl p-2 border border-slate-200 shadow-sm overflow-hidden cursor-zoom-in relative group/zoom"
                  title="اضغط في أي مكان لتكبير التقرير"
                >
                  <img
                    src="/screenshots/mazaya-item-card-report.png"
                    alt="تقرير كارت الصنف في مزايا ماكس"
                    className="w-full h-auto block rounded-xl select-none group-hover/zoom:scale-[1.01] transition-transform duration-200"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Corner Zoom Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setZoomedImage({
                        src: "/screenshots/mazaya-item-card-report.png",
                        title: "تقرير كارت الصنف — مزايا ماكس",
                        subtitle: "معاينة تفصيلية لحركة الوارد والصادر وتتبع أرصدة الصنف"
                      });
                    }}
                    className="absolute bottom-3 start-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/85 hover:bg-slate-900 text-white text-xs font-bold border border-white/20 shadow-lg backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
                    title="اضغط لتكبير التقرير"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-[#F2C12E]" />
                    <span>تكبير التقرير</span>
                  </button>
                </div>

                {/* Summary Stats Strip based on real report numbers */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <span className="text-[11px] text-slate-500 block">إجمالي الوارد</span>
                    <span className="text-lg font-bold text-emerald-600 font-mono mt-0.5 block">
                      +22.00 قطعة
                    </span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <span className="text-[11px] text-slate-500 block">إجمالي الصادر</span>
                    <span className="text-lg font-bold text-rose-600 font-mono mt-0.5 block">
                      -2.00 قطعة
                    </span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#0A507A]/10 border border-[#0A507A]/20 shadow-xs">
                    <span className="text-[11px] text-[#0A507A] font-semibold block">الرصيد الفعلي الحالي</span>
                    <span className="text-lg font-extrabold text-[#0A507A] font-mono mt-0.5 block">
                      20.00 قطعة
                    </span>
                  </div>
                </div>

                {/* Verification Micro-badge */}
                <div className="mt-3.5 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center gap-2.5 text-xs text-emerald-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs leading-relaxed">
                    <strong>دقة 100%:</strong> تتبع تاريخ كل حركة (بيع، شراء، رصيد افتتاحي) برقم الفاتورة واسم العميل والمورد بالثانية.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side (Left in RTL for zigzag reversal effect) */}
          <div data-aos="fade-right" data-aos-duration="800" className="col-span-6 order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#F2C12E]/15 text-[#946c00] text-xs font-bold">
              <Boxes className="w-3.5 h-3.5 text-[#0A507A]" />
              <span>اعرف كل حركات الصنف</span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              سيطرة كاملة على مخازنك ومعرفة الصادر و الوارد بكل سهولة
            </h3>

            <p className="text-slate-600 text-base leading-relaxed">
              المخزن هو رأس مالك الحقيقي؛ مع سيستم مزايا ماكس هتعرف حركة كل صنف بالتفصيل، الرصيد الفعلي في كل فرع، وتكلفة الشراء الفعلية عشان تحافظ على فلوسك وكمان تعرف متوسط التكلفة.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "كارت صنف تفصيلي تتبع مسار القطعة من أمر الشراء وحتى بيعها.",
                "تنبيهات فورية عند وصول أي منتج لحد النواقص لتجهيز طلب الشراء.",
                "أذون إضافة وصرف وتحويل بين المخازن.",
                "تقدر تعمل إقفال سنة عشان تقفل أرصدتك وتقدر ترجعلها تراجع منها.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Block 3: Treasury & Accounting Peace of Mind */}
        <div className="grid grid-cols-12 gap-14 items-center">
          
          {/* Text Side (Right in RTL) */}
          <div data-aos="fade-left" data-aos-duration="800" className="col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100/70 text-emerald-800 text-xs font-bold">
              <Landmark className="w-3.5 h-3.5 text-emerald-600" />
              <span>الخزينة والحسابات بدون تعقيد</span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              حساباتك وخزينتك في أمان تام من غير أي تعقيد محاسبي
            </h3>

            <p className="text-slate-600 text-base leading-relaxed">
              مش لازم تكون خريج تجارة عشان تفهم حساباتك؛ سجل المصروفات والإيرادات اليومية والبرنامج هيرحل القيود تلقائياً ويديلك صافي أرباحك الحقيقية، كشوف حسابات العملاء والموردين، وحركة الخزينة والبنوك بوضوح تام.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "ترحيل تلقائي للمبيعات والمشتريات للخزينة دون كتابة قيود يدوية.",
                "شجرة حسابات مصرية قياسية ومرنة جاهزة للاستخدام في دقائق.",
                "كشف حساب تفصيلي للعميل والمورد يُرسل مباشرة عبر الواتساب.",
                "تقارير قائمة الدخل وميزان المراجعة والأرباح بالجنيه المصري.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Real Treasury Report Showcase Side (Left in RTL) */}
          <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="100" className="col-span-6">
            <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden group hover:border-[#0A507A]/40 transition-all duration-300">
              
              {/* Window Header Strip */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-100/90 border-b border-slate-200 text-xs select-none">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block shadow-2xs" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block shadow-2xs" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shadow-2xs" />
                  <span className="font-bold text-slate-800 ms-2 flex items-center gap-1.5">
                    <Landmark className="w-4 h-4 text-[#0A507A]" />
                    <span>تقرير كشف حساب الخزينة — نظام مزايا ماكس</span>
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  توازن ومطابقة 100%
                </span>
              </div>

              <div className="p-5 bg-gradient-to-b from-[#F8FAFC] to-white">
                {/* Real Treasury Report Image Container with Zoom */}
                <div 
                  onClick={() => setZoomedImage({
                    src: "/screenshots/mazaya-treasury-report.png",
                    title: "تقرير كشف حساب الخزينة والمحافظ (انستا باي) — نظام مزايا ماكس",
                    subtitle: "معاينة تفصيلية لحركات الوارد والصادر والمصروفات والتحصيلات بالجنيه المصري"
                  })}
                  className="mb-4 bg-white rounded-2xl p-2 border border-slate-200 shadow-sm overflow-hidden cursor-zoom-in relative group/zoom"
                  title="اضغط في أي مكان لتكبير كشف الحساب بدقة كاملة"
                >
                  <img
                    src="/screenshots/mazaya-treasury-report.png"
                    alt="تقرير كشف حساب الخزينة في نظام مزايا ماكس"
                    className="w-full h-auto block rounded-xl select-none group-hover/zoom:scale-[1.01] transition-transform duration-200"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Corner Zoom Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setZoomedImage({
                        src: "/screenshots/mazaya-treasury-report.png",
                        title: "تقرير كشف حساب الخزينة والمحافظ (انستا باي) — نظام مزايا ماكس",
                        subtitle: "معاينة تفصيلية لحركات الوارد والصادر والمصروفات والتحصيلات بالجنيه المصري"
                      });
                    }}
                    className="absolute bottom-3 start-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/85 hover:bg-slate-900 text-white text-xs font-bold border border-white/20 shadow-lg backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
                    title="اضغط لتكبير كشف الحساب بدقة كاملة"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-[#F2C12E]" />
                    <span>تكبير كشف الحساب</span>
                  </button>
                </div>

                {/* Summary Stats Strip based on real treasury report numbers */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <span className="text-[11px] text-slate-500 block">إجمالي الوارد (مدين)</span>
                    <span className="text-lg font-bold text-emerald-600 font-mono mt-0.5 block">
                      +1,719.00 ج.م
                    </span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <span className="text-[11px] text-slate-500 block">إجمالي الصادر (دائن)</span>
                    <span className="text-lg font-bold text-rose-600 font-mono mt-0.5 block">
                      -645.00 ج.م
                    </span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#0A507A]/10 border border-[#0A507A]/20 shadow-xs">
                    <span className="text-[11px] text-[#0A507A] font-semibold block">رصيد الخزينة الحالي</span>
                    <span className="text-lg font-extrabold text-[#0A507A] font-mono mt-0.5 block">
                      1,074.00 ج.م
                    </span>
                  </div>
                </div>

                {/* Verification Micro-badge */}
                <div className="mt-3.5 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center gap-2.5 text-xs text-emerald-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs leading-relaxed">
                    <strong>مطابقة بنكية وتزامن فوري:</strong> فواتير الكاشير، المصروفات، ومحافظ انستا باي وفودافون كاش ترحل لحظياً للخزينة بدقة تامة.
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================================================= */}
      {/* 2. MOBILE VIEW: Authentic Mac/Windows App Mockup Carousel (Clean, Ultra-Modern & High-End) */}
      {/* ========================================================================================= */}
      <div className="block lg:hidden max-w-xl mx-auto px-4 space-y-6">
        
        {/* Section Mobile Header */}
        <div className="text-center space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A507A]/10 text-[#0A507A] text-[11px] font-bold border border-[#0A507A]/15">
            <Layers className="w-3.5 h-3.5 text-[#F2C12E]" />
            <span>معاينة حية من داخل النظام</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
            شاهد شاشات نظام مزايا ماكس عملياً
          </h2>

          <p className="text-slate-500 text-xs leading-relaxed">
            المس واسحب الكارت أفقياً لاستعراض الشاشات والتقارير:
          </p>
        </div>

        {/* Top Synchronized Pill Switcher */}
        <div 
          role="tablist"
          aria-label="شاشات البرنامج على الموبايل"
          className="grid grid-cols-3 gap-1.5 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/90 shadow-2xs"
        >
          {SLIDES_META.map((meta) => {
            const isActive = activeIndex === meta.id;
            const Icon = meta.icon;
            return (
              <button
                key={meta.id}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => goToSlide(meta.id)}
                className={`relative flex items-center justify-center gap-1.5 py-2.5 px-1 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer select-none ${
                  isActive
                    ? "bg-[#0A507A] text-white shadow-md shadow-[#0A507A]/25 border border-[#F2C12E]/40"
                    : "bg-white/80 text-slate-700 hover:bg-white"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#F2C12E]" : "text-[#0A507A]"}`} />
                <span className="truncate">{meta.label}</span>
                {isActive && (
                  <span className="absolute bottom-0.5 inset-x-3 h-0.5 bg-[#F2C12E] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* The Swipeable Cards Track */}
        <div className="relative -mx-4 px-4 overflow-hidden">
          <div
            ref={containerRef}
            className="flex items-stretch gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2 px-1"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            
            {/* ================================================================= */}
            {/* CARD 1: POS Screen - Windows / Mac Style Software Window Mockup */}
            {/* ================================================================= */}
            <div
              ref={(el) => { slideRefs.current[0] = el; }}
              className={`w-[90vw] max-w-[420px] flex-shrink-0 snap-center rounded-3xl bg-white p-4 sm:p-5 border-2 transition-all duration-300 flex flex-col justify-between space-y-4 ${
                activeIndex === 0
                  ? "border-[#0A507A] shadow-xl shadow-slate-900/10 ring-4 ring-[#0A507A]/5 scale-[1.01]"
                  : "border-slate-200/90 opacity-70 scale-[0.98]"
              }`}
            >
              {/* Card Meta Row */}
              <div className="flex items-center justify-between pb-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A507A]/10 text-[#0A507A] text-[11px] font-extrabold border border-[#0A507A]/15">
                  <ShoppingCart className="w-3.5 h-3.5 text-[#F2C12E]" />
                  <span>شاشة المبيعات والكاشير</span>
                </span>
                <span className="text-[11px] font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                  1 / 3
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                  كاشير سريع ميعطلش شغلك في وقت الزحمة
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  امسح الباركود، حط الكمية، واطبع الإيصال في أجزاء من الثانية دون أي تهنيج.
                </p>
              </div>

              {/* REAL MAC / WINDOWS OS WINDOW FRAME */}
              <div className="rounded-2xl overflow-hidden border border-slate-700/30 shadow-2xl bg-slate-900">
                {/* Modern Dark Window Titlebar */}
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/60 select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-xs inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-xs inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-xs inline-block" />
                  </div>
                  <span className="font-bold text-slate-200 text-xs truncate max-w-[210px] flex items-center gap-1.5">
                    <Receipt className="w-3.5 h-3.5 text-[#F2C12E]" />
                    <span>مزايا ماكس — شاشة الكاشير السريعة</span>
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    استجابة فورية
                  </span>
                </div>

                {/* Screenshot filling edge-to-edge with zoom */}
                <div 
                  onClick={() => setZoomedImage({
                    src: "/screenshots/mazaya-pos-invoice.png",
                    title: "شاشة فاتورة المبيعات ونقاط البيع (POS) — نظام مزايا ماكس",
                    subtitle: "معاينة كاملة عالية الدقة لشاشة الكاشير السريعة مع دعم الباركود والطباعة الفورية"
                  })}
                  className="relative cursor-zoom-in group bg-slate-950"
                >
                  <img
                    src="/screenshots/mazaya-pos-invoice.png"
                    alt="شاشة فاتورة المبيعات في نظام مزايا ماكس"
                    className="w-full h-auto block select-none group-hover:scale-[1.01] transition-transform duration-200"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2.5 start-2.5 bg-slate-900/90 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg backdrop-blur-md border border-white/20">
                    <ZoomIn className="w-3.5 h-3.5 text-[#F2C12E]" />
                    <span>اضغط لتكبير الشاشة</span>
                  </div>
                </div>
              </div>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-bold text-slate-700 bg-slate-50/90 p-3 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">طابعات حرارية و A4</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">موازين باركود إلكترونية</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">تعليق الفواتير السريع</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">تقفيل وردية وجرد الدرج</span>
                </div>
              </div>

              {/* CTA Action */}
              <Link
                href="/systems/mazaya-max"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0A507A] hover:bg-[#06324D] text-white font-bold text-xs shadow-soft transition-all active:scale-[0.98]"
              >
                <span>استكشف مواصفات نظام مزايا ماكس</span>
                <ArrowLeft className="w-3.5 h-3.5 text-[#F2C12E]" />
              </Link>
            </div>

            {/* ================================================================= */}
            {/* CARD 2: Inventory Report - Windows / Mac Style Software Window   */}
            {/* ================================================================= */}
            <div
              ref={(el) => { slideRefs.current[1] = el; }}
              className={`w-[90vw] max-w-[420px] flex-shrink-0 snap-center rounded-3xl bg-white p-4 sm:p-5 border-2 transition-all duration-300 flex flex-col justify-between space-y-4 ${
                activeIndex === 1
                  ? "border-[#0A507A] shadow-xl shadow-slate-900/10 ring-4 ring-[#0A507A]/5 scale-[1.01]"
                  : "border-slate-200/90 opacity-70 scale-[0.98]"
              }`}
            >
              {/* Card Meta Row */}
              <div className="flex items-center justify-between pb-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-[#946c00] text-[11px] font-extrabold border border-amber-200">
                  <Boxes className="w-3.5 h-3.5 text-[#0A507A]" />
                  <span>رقابة وجرد مخازن صارم</span>
                </span>
                <span className="text-[11px] font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                  2 / 3
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                  سيطرة كاملة على مخازنك ومنع العجز والسرقة
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  تتبع حركة كل صنف بالثانية، الرصيد الفعلي في كل فرع، وتكلفة الشراء لحماية رأس مالك.
                </p>
              </div>

              {/* REAL MAC / WINDOWS OS WINDOW FRAME */}
              <div className="rounded-2xl overflow-hidden border border-slate-700/30 shadow-2xl bg-slate-900">
                {/* Modern Dark Window Titlebar */}
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/60 select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-xs inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-xs inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-xs inline-block" />
                  </div>
                  <span className="font-bold text-slate-200 text-xs truncate max-w-[210px] flex items-center gap-1.5">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-[#F2C12E]" />
                    <span>مزايا ماكس — تقرير كارت الصنف</span>
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    حركة بالثانية
                  </span>
                </div>

                {/* Screenshot filling edge-to-edge with zoom */}
                <div 
                  onClick={() => setZoomedImage({
                    src: "/screenshots/mazaya-item-card-report.png",
                    title: "تقرير كارت الصنف التفصيلي — نظام مزايا ماكس",
                    subtitle: "معاينة تفصيلية لحركة الوارد والصادر وتتبع أرصدة المخازن بالثانية"
                  })}
                  className="relative cursor-zoom-in group bg-slate-950"
                >
                  <img
                    src="/screenshots/mazaya-item-card-report.png"
                    alt="تقرير كارت الصنف التفصيلي في نظام مزايا ماكس"
                    className="w-full h-auto block select-none group-hover:scale-[1.01] transition-transform duration-200"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2.5 start-2.5 bg-slate-900/90 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg backdrop-blur-md border border-white/20">
                    <ZoomIn className="w-3.5 h-3.5 text-[#F2C12E]" />
                    <span>اضغط لتكبير التقرير</span>
                  </div>
                </div>
              </div>

              {/* Real Stats Strip */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[10px] text-slate-500 block">الوارد</span>
                  <span className="text-xs font-bold text-emerald-600 font-mono mt-0.5 block">+22 قطعة</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[10px] text-slate-500 block">الصادر</span>
                  <span className="text-xs font-bold text-rose-600 font-mono mt-0.5 block">-2 قطعة</span>
                </div>
                <div className="p-2 rounded-xl bg-[#0A507A]/10 border border-[#0A507A]/20 shadow-2xs">
                  <span className="text-[10px] text-[#0A507A] font-semibold block">الرصيد</span>
                  <span className="text-xs font-extrabold text-[#0A507A] font-mono mt-0.5 block">20 قطعة</span>
                </div>
              </div>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-bold text-slate-700 bg-slate-50/90 p-3 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">تتبع تاريخ القطعة بالثانية</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">تنبيهات حد النواقص</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">أذون تحويل بين المخازن</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">جرد سنوي ودوري بالباركود</span>
                </div>
              </div>

              {/* CTA Action */}
              <Link
                href="/systems/mazaya-max"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0A507A] hover:bg-[#06324D] text-white font-bold text-xs shadow-soft transition-all active:scale-[0.98]"
              >
                <span>استكشف موديول المخازن والأصناف</span>
                <ArrowLeft className="w-3.5 h-3.5 text-[#F2C12E]" />
              </Link>
            </div>

            {/* ================================================================= */}
            {/* CARD 3: Treasury Report - Windows / Mac Style Software Window    */}
            {/* ================================================================= */}
            <div
              ref={(el) => { slideRefs.current[2] = el; }}
              className={`w-[90vw] max-w-[420px] flex-shrink-0 snap-center rounded-3xl bg-white p-4 sm:p-5 border-2 transition-all duration-300 flex flex-col justify-between space-y-4 ${
                activeIndex === 2
                  ? "border-[#0A507A] shadow-xl shadow-slate-900/10 ring-4 ring-[#0A507A]/5 scale-[1.01]"
                  : "border-slate-200/90 opacity-70 scale-[0.98]"
              }`}
            >
              {/* Card Meta Row */}
              <div className="flex items-center justify-between pb-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-extrabold border border-emerald-200">
                  <Landmark className="w-3.5 h-3.5 text-emerald-600" />
                  <span>الخزينة والحسابات بدون تعقيد</span>
                </span>
                <span className="text-[11px] font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                  3 / 3
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                  حساباتك وخزينتك في أمان تام من غير تعقيد
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  ترحيل فوري للمبيعات والمصروفات ومحافظ انستا باي وفودافون كاش والأرباح لحظياً.
                </p>
              </div>

              {/* REAL MAC / WINDOWS OS WINDOW FRAME */}
              <div className="rounded-2xl overflow-hidden border border-slate-700/30 shadow-2xl bg-slate-900">
                {/* Modern Dark Window Titlebar */}
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/60 select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-xs inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-xs inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-xs inline-block" />
                  </div>
                  <span className="font-bold text-slate-200 text-xs truncate max-w-[210px] flex items-center gap-1.5">
                    <Landmark className="w-3.5 h-3.5 text-[#F2C12E]" />
                    <span>مزايا ماكس — كشف حساب الخزينة</span>
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    تطابق 100%
                  </span>
                </div>

                {/* Screenshot filling edge-to-edge with zoom */}
                <div 
                  onClick={() => setZoomedImage({
                    src: "/screenshots/mazaya-treasury-report.png",
                    title: "تقرير كشف حساب الخزينة والمحافظ (انستا باي) — نظام مزايا ماكس",
                    subtitle: "معاينة تفصيلية لحركات الوارد والصادر والمصروفات والتحصيلات بالجنيه المصري"
                  })}
                  className="relative cursor-zoom-in group bg-slate-950"
                >
                  <img
                    src="/screenshots/mazaya-treasury-report.png"
                    alt="تقرير كشف حساب الخزينة في نظام مزايا ماكس"
                    className="w-full h-auto block select-none group-hover:scale-[1.01] transition-transform duration-200"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2.5 start-2.5 bg-slate-900/90 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg backdrop-blur-md border border-white/20">
                    <ZoomIn className="w-3.5 h-3.5 text-[#F2C12E]" />
                    <span>اضغط لتكبير الحساب</span>
                  </div>
                </div>
              </div>

              {/* Real Stats Strip */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[10px] text-slate-500 block">الوارد</span>
                  <span className="text-xs font-bold text-emerald-600 font-mono mt-0.5 block">+1,719 ج.م</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[10px] text-slate-500 block">الصادر</span>
                  <span className="text-xs font-bold text-rose-600 font-mono mt-0.5 block">-645 ج.م</span>
                </div>
                <div className="p-2 rounded-xl bg-[#0A507A]/10 border border-[#0A507A]/20 shadow-2xs">
                  <span className="text-[10px] text-[#0A507A] font-semibold block">الرصيد</span>
                  <span className="text-xs font-extrabold text-[#0A507A] font-mono mt-0.5 block">1,074 ج.م</span>
                </div>
              </div>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-bold text-slate-700 bg-slate-50/90 p-3 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">ترحيل فوري للمبيعات</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">مطابقة انستا باي والمحافظ</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">كشوف حساب عبر واتساب</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">قائمة الدخل وصافي الأرباح</span>
                </div>
              </div>

              {/* CTA Action */}
              <Link
                href="/systems/mazaya-max"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0A507A] hover:bg-[#06324D] text-white font-bold text-xs shadow-soft transition-all active:scale-[0.98]"
              >
                <span>استكشف موديول الخزينة والحسابات</span>
                <ArrowLeft className="w-3.5 h-3.5 text-[#F2C12E]" />
              </Link>
            </div>

          </div>
        </div>

        {/* Carousel Bottom Controls: Prev Arrow + Dots/Progress + Next Arrow */}
        <div className="flex items-center justify-between px-2 pt-1">
          
          {/* Previous Slide Button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="الشاشة السابقة"
            className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all cursor-pointer ${
              activeIndex === 0
                ? "bg-slate-100 text-slate-300 cursor-not-allowed"
                : "bg-white text-slate-800 border-2 border-slate-200 hover:border-slate-300 active:scale-95 shadow-xs"
            }`}
          >
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Dots Indicator with Interactive Direct Jump */}
          <div className="flex items-center gap-2 bg-slate-100/90 px-3 py-2 rounded-full border border-slate-200/80 shadow-2xs">
            {[0, 1, 2].map((idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`انتقل للشاشة ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? "w-8 h-2.5 bg-[#0A507A] shadow-xs"
                      : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              );
            })}
          </div>

          {/* Next Slide Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={activeIndex === 2}
            aria-label="الشاشة التالية"
            className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all cursor-pointer ${
              activeIndex === 2
                ? "bg-slate-100 text-slate-300 cursor-not-allowed"
                : "bg-[#0A507A] text-white hover:bg-[#06324D] active:scale-95 shadow-soft border border-[#F2C12E]/40"
            }`}
          >
            <ArrowLeft className="w-4 h-4 text-[#F2C12E]" />
          </button>
        </div>

        {/* Subtle Visual Gesture Hint */}
        <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 select-none">
          <span className="inline-block animate-pulse">👈</span>
          <span>اسحب الشاشة بإصبعك للتنقل بين الكروت</span>
          <span className="inline-block animate-pulse">👉</span>
        </div>

      </div>

      {/* Lightbox Modal for Full-Resolution Image Viewing (Shared between Desktop & Mobile) */}
      <ImageLightboxModal
        isOpen={!!zoomedImage}
        onClose={() => setZoomedImage(null)}
        imageSrc={zoomedImage?.src || ""}
        imageAlt={zoomedImage?.title || ""}
        title={zoomedImage?.title || ""}
        subtitle={zoomedImage?.subtitle}
      />
    </section>
  );
}
