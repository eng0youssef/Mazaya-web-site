"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowLeft, 
  Printer, 
  Barcode, 
  Layers, 
  AlertCircle, 
  Clock, 
  ShieldCheck, 
  Calculator, 
  Receipt,
  FileSpreadsheet,
  Boxes,
  Landmark,
  TrendingUp,
  Sparkles,
  ZoomIn
} from "lucide-react";
import InteractiveScreenHotspots from "@/components/ui/InteractiveScreenHotspots";
import ImageLightboxModal from "@/components/ui/ImageLightboxModal";

export default function ZigZagShowcase() {
  const [zoomedImage, setZoomedImage] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Block 1: POS / Cashier Speed & Interactive Screen Demo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Text Side (Right in RTL) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#0A507A]/10 text-[#0A507A] text-xs font-bold">
              <Clock className="w-3.5 h-3.5 text-[#F2C12E]" />
              <span>سرعة متناهية في نقاط البيع (POS)</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              كاشير سريع ميعطلش شغلك في وقت الزحمة وطوابير الزباين
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              مهما كان ضغط الشغل وعدد العملاء أمام الكاشير، شاشة البيع في مزايا بتستجيب في أجزاء من الثانية. امسح الباركود، حط الكمية، واطبع الإيصال بضغطة زر واحدة بدون أي تهنيج أو بطء.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "دعم كامل لكل طابعات الفواتير الحرارية (80mm و 58mm) وطابعات A4.",
                "قراءة فورية لباركود الوزن من موازين الأجبان واللحوم الإلكترونية.",
                "إمكانية تعليق الفاتورة والانتقال لعميل آخر دون فقدان الأصناف.",
                "تقفيل وردية الكاشير وجرد الدرج واكتشاف أي عجز أو زيادة في النقدية فوراً.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/systems/mazaya-max"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A507A] hover:bg-[#06324D] text-white font-bold text-xs sm:text-sm transition shadow-soft group"
              >
                <span>استكشف مواصفات نظام مزايا ماكس</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#F2C12E]" />
              </Link>
            </div>
          </div>

          {/* Interactive Screen Hotspots Side (Left in RTL) */}
          <div className="lg:col-span-7">
            <InteractiveScreenHotspots />
          </div>

        </div>

        {/* Block 2: Inventory Control & Shortages (Reversed Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Real Report Showcase Side */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative bg-[#F8FAFC] rounded-3xl p-3.5 sm:p-5 border border-slate-200/90 shadow-xl overflow-hidden group">
              {/* Report Header Strip */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-[#0A507A]" />
                  <span className="font-bold text-slate-800">
                    تقرير كارت الصنف الرسمي — نظام مزايا ماكس
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  حركة بالثانية
                </span>
              </div>

              {/* Real Report Image Container with Zoom On Click */}
              <div 
                onClick={() => setZoomedImage({
                  src: "/screenshots/mazaya-item-card-report.png",
                  title: "تقرير كارت الصنف التفصيلي — نظام مزايا ماكس",
                  subtitle: "معاينة تفصيلية عالية الدقة لحركة الوارد والصادر وتتبع أرصدة المخازن بالثانية"
                })}
                className="my-3.5 bg-white rounded-2xl p-2 border border-slate-200 shadow-sm overflow-hidden cursor-zoom-in relative group/zoom"
                title="اضغط لتكبير التقرير"
              >
                <img
                  src="/screenshots/mazaya-item-card-report.png"
                  alt="تقرير كارت الصنف التفصيلي في نظام مزايا ماكس"
                  className="w-full h-auto block rounded-xl select-none group-hover/zoom:scale-[1.01] transition-transform duration-200"
                  loading="lazy"
                  decoding="async"
                />
                {/* Hover zoom pill overlay */}
                <div className="absolute inset-0 bg-slate-900/15 opacity-0 group-hover/zoom:opacity-100 transition-opacity rounded-xl flex items-center justify-center pointer-events-none">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-bold shadow-xl border border-white/20 backdrop-blur-md transform scale-95 group-hover/zoom:scale-100 transition-transform">
                    <ZoomIn className="w-3.5 h-3.5 text-[#F2C12E]" />
                    <span>اضغط لتكبير التقرير</span>
                  </span>
                </div>
              </div>

              {/* Summary Stats Strip based on real report numbers */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[11px] text-slate-500 block">إجمالي الوارد</span>
                  <span className="text-base sm:text-lg font-bold text-emerald-600 font-mono mt-0.5 block">
                    +22.00 قطعة
                  </span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[11px] text-slate-500 block">إجمالي الصادر</span>
                  <span className="text-base sm:text-lg font-bold text-rose-600 font-mono mt-0.5 block">
                    -2.00 قطعة
                  </span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-2xl bg-[#0A507A]/10 border border-[#0A507A]/20 shadow-xs">
                  <span className="text-[11px] text-[#0A507A] font-semibold block">الرصيد الفعلي الحالي</span>
                  <span className="text-base sm:text-lg font-extrabold text-[#0A507A] font-mono mt-0.5 block">
                    20.00 قطعة
                  </span>
                </div>
              </div>

              {/* Verification Micro-badge */}
              <div className="mt-3 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center gap-2.5 text-xs text-emerald-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs leading-relaxed">
                  <strong>دقة رقابية 100%:</strong> تتبع تاريخ كل حركة (بيع، شراء، رصيد افتتاحي) برقم الفاتورة واسم العميل والمورد بالثانية.
                </span>
              </div>
            </div>
          </div>

          {/* Text Side (Left in RTL for zigzag effect) */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#F2C12E]/15 text-[#946c00] text-xs font-bold">
              <Boxes className="w-3.5 h-3.5 text-[#0A507A]" />
              <span>رقابة وجرد مخازن صارم</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              سيطرة كاملة على مخازنك ومنع العجز والسرقة تماماً
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              المخزن هو رأس مالك الحقيقي؛ مع سيستم مخازن مزايا هتعرف حركة كل صنف بالثانية، الرصيد الفعلي في كل فرع، وتكلفة الشراء الفعلية عشان تحافظ على فلوسك وتضمن عدم تسريب أو عجز أي بضاعة.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "كارتة صنف تفصيلية تتبع مسار القطعة من أمر الشراء وحتى بيعها.",
                "تنبيهات فورية عند وصول أي منتج لحد النواقص لتجهيز طلب الشراء.",
                "أذون إضافة وصرف وتحويل بين المخازن مع موافقة أمين المخزن.",
                "إجراء الجرد السنوي والدوري بسهولة تامة باستخدام أجهزة الباركود.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/systems/mazaya-max"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0A507A] hover:text-[#06324D] transition group"
              >
                <span>شاهد إمكانيات موديول المخازن والأصناف</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* Block 3: Treasury & Accounting Peace of Mind */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Text Side */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100/70 text-emerald-800 text-xs font-bold">
              <Landmark className="w-3.5 h-3.5 text-emerald-600" />
              <span>الخزينة والحسابات بدون تعقيد</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              حساباتك وخزينتك في أمان تام من غير أي تعقيد محاسبي
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
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
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/systems/mazaya-max"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0A507A] hover:text-[#06324D] transition group"
              >
                <span>تعرف على موديول الخزينة والحسابات العامة</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Real Treasury Report Showcase Side */}
          <div className="lg:col-span-6">
            <div className="relative bg-[#F8FAFC] rounded-3xl p-3.5 sm:p-5 border border-slate-200/90 shadow-xl overflow-hidden group">
              {/* Report Header Strip */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                <div className="flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-[#0A507A]" />
                  <span className="font-bold text-slate-800">
                    تقرير كشف حساب الخزينة — نظام مزايا ماكس
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  توازن ومطابقة 100%
                </span>
              </div>

              {/* Real Treasury Report Image Container with Zoom */}
              <div 
                onClick={() => setZoomedImage({
                  src: "/screenshots/mazaya-treasury-report.png",
                  title: "تقرير كشف حساب الخزينة والمحافظ (انستا باي) — نظام مزايا ماكس",
                  subtitle: "معاينة تفصيلية لحركات الوارد والصادر والمصروفات والتحصيلات بالجنيه المصري"
                })}
                className="my-3.5 bg-white rounded-2xl p-2 border border-slate-200 shadow-sm overflow-hidden cursor-zoom-in relative group/zoom"
                title="اضغط لتكبير كشف الحساب"
              >
                <img
                  src="/screenshots/mazaya-treasury-report.png"
                  alt="تقرير كشف حساب الخزينة في نظام مزايا ماكس"
                  className="w-full h-auto block rounded-xl select-none group-hover/zoom:scale-[1.01] transition-transform duration-200"
                  loading="lazy"
                  decoding="async"
                />
                {/* Hover zoom pill overlay */}
                <div className="absolute inset-0 bg-slate-900/15 opacity-0 group-hover/zoom:opacity-100 transition-opacity rounded-xl flex items-center justify-center pointer-events-none">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-bold shadow-xl border border-white/20 backdrop-blur-md transform scale-95 group-hover/zoom:scale-100 transition-transform">
                    <ZoomIn className="w-3.5 h-3.5 text-[#F2C12E]" />
                    <span>اضغط لتكبير كشف الحساب</span>
                  </span>
                </div>
              </div>

              {/* Summary Stats Strip based on real treasury report numbers */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[11px] text-slate-500 block">إجمالي الوارد (مدين)</span>
                  <span className="text-base sm:text-lg font-bold text-emerald-600 font-mono mt-0.5 block">
                    +1,719.00 ج.م
                  </span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[11px] text-slate-500 block">إجمالي الصادر (دائن)</span>
                  <span className="text-base sm:text-lg font-bold text-rose-600 font-mono mt-0.5 block">
                    -645.00 ج.م
                  </span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-2xl bg-[#0A507A]/10 border border-[#0A507A]/20 shadow-xs">
                  <span className="text-[11px] text-[#0A507A] font-semibold block">رصيد الخزينة الحالي</span>
                  <span className="text-base sm:text-lg font-extrabold text-[#0A507A] font-mono mt-0.5 block">
                    1,074.00 ج.م
                  </span>
                </div>
              </div>

              {/* Verification Micro-badge */}
              <div className="mt-3 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center gap-2.5 text-xs text-emerald-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs leading-relaxed">
                  <strong>تزامن فوري:</strong> ربط الخزائن ومحافظ انستا باي وفودافون كاش مباشرة بالدورة المستندية لتسجيل كل سداد وتحصيل بدقة ومنع أي عجز نقدي.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal for Full-Resolution Image Viewing */}
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
