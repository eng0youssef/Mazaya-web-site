"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Play, 
  ArrowLeft, 
  CheckCircle2, 
  TrendingUp, 
  Receipt, 
  AlertTriangle, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  Layers,
  ChevronLeft
} from "lucide-react";
import { TRUST_METRICS } from "@/data/mazaya-data";
import VideoModal from "@/components/ui/VideoModal";

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F0F7FB] to-[#F8FAFC] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/70">
      
      {/* Background Decorative Pattern & Radial Highlights */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 start-1/4 w-96 h-96 bg-[#0A507A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 end-1/4 w-80 h-80 bg-[#F2C12E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column: Persuasive Egyptian Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-start space-y-6">
            
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0A507A]/15 shadow-soft">
              <span className="flex h-2 w-2 rounded-full bg-[#F2C12E] animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-[#0A507A]">
                الحل البرمجي المتكامل لإدارة شغلك في مصر والوطن العربي 🇪🇬
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-bold text-slate-900 leading-[1.25] tracking-tight">
              ظبّط <span className="text-[#0A507A]">مبيعاتك</span>،{" "}
              <span className="text-[#0A507A]">مخازنك</span>، وحساباتك{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-slate-900">بدقة وسرعة</span>
                <span className="absolute bottom-1 start-0 w-full h-3 bg-[#F2C12E]/35 -z-0 rounded-sm"></span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              بنقدملك أقوى برامج الكاشير والمخازن والحسابات الجاهزة للشغل فوراً، مع إمكانية تفصيل وبرمجة أنظمة مخصوصة (Custom ERP) على مقاس دورة العمل في شركتك أو مصنعك، مع دعم فني معاك خطوة بخطوة وشروحات فيديو لكل تفصيلة.
            </p>

            {/* Dual Call To Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="#lead-capture"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0A507A] hover:bg-[#06324D] text-white font-bold text-sm sm:text-base shadow-navy hover:shadow-lg transition-all transform hover:-translate-y-0.5 border border-[#F2C12E]/40"
              >
                <span>اطلب ديمو مجاني الآن</span>
                <ArrowLeft className="w-5 h-5 text-[#F2C12E]" />
              </Link>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-200/90 shadow-soft hover:border-[#0A507A]/40 transition group"
              >
                <div className="w-7 h-7 rounded-full bg-[#F2C12E] text-slate-900 flex items-center justify-center shadow-xs group-hover:scale-110 transition">
                  <Play className="w-3.5 h-3.5 fill-current ms-0.5" />
                </div>
                <span>شوف شرح السيستم (فيديو)</span>
              </button>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 border-t border-slate-200/80 w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
              {TRUST_METRICS.map((metric, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold text-[#0A507A]">
                    {metric.value}
                  </span>
                  <span className="text-xs font-bold text-slate-800 mt-0.5">
                    {metric.label}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {metric.subLabel}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Left Column: 3D Layered Light Theme ERP Mockup */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Frame & Main Dashboard Mockup */}
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="relative bg-white rounded-3xl p-4 sm:p-5 shadow-2xl border border-slate-200/90 overflow-hidden">
                
                {/* Mockup Header Bar */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                    <span className="ms-2 text-xs font-semibold text-slate-500">
                      شاشة الكاشير والمبيعات — الوردية الصباحية
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    متصل بالخزنة
                  </div>
                </div>

                {/* Primary Metric Banner (Egyptian Pound Figures) */}
                <div className="my-4 p-4 rounded-2xl bg-gradient-to-r from-[#0A507A] to-[#06324D] text-white shadow-soft relative overflow-hidden">
                  <div className="absolute top-0 end-0 -mt-2 -me-2 w-28 h-28 bg-[#F2C12E]/10 rounded-full blur-xl pointer-events-none" />
                  
                  <div className="flex items-start justify-between relative z-10">
                    <div>
                      <span className="text-xs text-slate-200 font-medium block">
                        إجمالي إيراد المبيعات اليوم
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-mono">
                          145,280
                        </span>
                        <span className="text-sm font-bold text-[#F2C12E]">ج.م</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 text-emerald-300 text-xs font-bold backdrop-blur-xs">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>+18.4% نمو</span>
                    </div>
                  </div>

                  {/* Hourly Distribution Micro Bars */}
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <div className="flex items-end justify-between gap-1.5 h-12">
                      {[35, 55, 40, 75, 90, 60, 85, 100, 70, 80].map((val, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div 
                            className="w-full rounded-t-sm transition-all"
                            style={{ 
                              height: `${val}%`, 
                              backgroundColor: i === 7 ? "#F2C12E" : "rgba(255, 255, 255, 0.4)" 
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-300 mt-1">
                      <span>10:00 ص</span>
                      <span>ذروة البيع (3:00 م)</span>
                      <span>10:00 م</span>
                    </div>
                  </div>
                </div>

                {/* Live Sales & POS Feed */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 px-1">
                    <span>آخر فواتير الكاشير الصادرة</span>
                    <span className="text-slate-400 font-normal">طباعة ريسيت فوري</span>
                  </div>

                  {/* Item Row 1 */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                        <Receipt className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-800">فاتورة كاشير #1084</div>
                        <div className="text-[11px] text-slate-500">نقدي — درج 01 (كاشير أحمد)</div>
                      </div>
                    </div>
                    <div className="text-end">
                      <span className="font-bold text-slate-900 block font-mono">1,450 ج.م</span>
                      <span className="text-[10px] text-emerald-600 font-semibold">تم الدفع والترحيل</span>
                    </div>
                  </div>

                  {/* Item Row 2 */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-sky-100 text-[#0A507A] flex items-center justify-center font-bold">
                        <Receipt className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-800">إذن بيع جملة #1083</div>
                        <div className="text-[11px] text-slate-500">آجل — شركة النور للمقاولات</div>
                      </div>
                    </div>
                    <div className="text-end">
                      <span className="font-bold text-slate-900 block font-mono">18,200 ج.م</span>
                      <span className="text-[10px] text-[#0A507A] font-semibold">مُرحل لكشف الحساب</span>
                    </div>
                  </div>
                </div>

                {/* Footer Micro-Bar: ZATCA & Egyptian Tax Compliant */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>تكامل مع الفاتورة والإيصال الإلكتروني (مصلحة الضرائب)</span>
                  </div>
                  <span className="font-bold text-slate-700">QR معتمد</span>
                </div>

              </div>

              {/* Floating Notification Card 1: Inventory Alert */}
              <div className="absolute -top-6 -end-6 hidden sm:flex items-center gap-3 p-3 rounded-2xl bg-white shadow-xl border border-amber-200/80 max-w-xs animate-float-slow">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-slate-900">تنبيه نواقص المخزن</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    شاي العروسة 250جم: المتبقي 4 كراتين فقط
                  </div>
                </div>
              </div>

              {/* Floating Notification Card 2: Growth Indicator */}
              <div className="absolute -bottom-6 -start-6 hidden sm:flex items-center gap-3 p-3 rounded-2xl bg-white shadow-xl border border-slate-200 max-w-xs animate-float-reverse">
                <div className="w-9 h-9 rounded-xl bg-[#0A507A]/10 text-[#0A507A] flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-[#0A507A]" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-slate-900">تحصيل مديونيات آجلة</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    سند قبض: 25,000 ج.م من العميل (أوتوماتيك)
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Video Modal Trigger */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        youtubeId="dQw4w9WgXcQ"
        title="شرح شامل لنظام الكاشير والمخازن والحسابات — مزايا للبرمجيات"
      />
    </section>
  );
}
