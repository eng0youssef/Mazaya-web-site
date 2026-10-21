"use client";

import React from "react";
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
  Sparkles
} from "lucide-react";
import InteractiveScreenHotspots from "@/components/ui/InteractiveScreenHotspots";

export default function ZigZagShowcase() {
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
          
          {/* UI Mockup Side (Right in RTL for zigzag effect) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative bg-[#F8FAFC] rounded-3xl p-5 border border-slate-200 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                <div className="flex items-center gap-2">
                  <Boxes className="w-4 h-4 text-[#0A507A]" />
                  <span className="font-bold text-slate-800">كارت الصنف: مسحوق غسيل أوتوماتيك 5 كجم</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold">
                  حد الطلب
                </span>
              </div>

              {/* Stock breakdown cards */}
              <div className="grid grid-cols-3 gap-2.5 my-4">
                <div className="p-3 rounded-2xl bg-white border border-slate-200/80 text-center">
                  <span className="text-[11px] text-slate-500 block">المخزن الرئيسي</span>
                  <span className="text-lg font-bold text-[#0A507A] font-mono mt-0.5 block">120 كرتونة</span>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-slate-200/80 text-center">
                  <span className="text-[11px] text-slate-500 block">مخزن الفرع 1</span>
                  <span className="text-lg font-bold text-amber-600 font-mono mt-0.5 block">8 كراتين</span>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-slate-200/80 text-center">
                  <span className="text-[11px] text-slate-500 block">سيارة التوزيع</span>
                  <span className="text-lg font-bold text-slate-700 font-mono mt-0.5 block">15 كرتونة</span>
                </div>
              </div>

              {/* Movement Ledger */}
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="font-semibold text-slate-800">إذن إضافة مشتريات (فاتورة #502)</span>
                  </div>
                  <span className="font-mono font-bold text-emerald-600">+50 كرتونة</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    <span className="font-semibold text-slate-800">مبيعات كاشير الفرع الرئيسي</span>
                  </div>
                  <span className="font-mono font-bold text-rose-600">-12 كرتونة</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                    <span className="font-semibold text-slate-800">إذن تحويل لمخزن فرع الهرم</span>
                  </div>
                  <span className="font-mono font-bold text-sky-600">تحويل 20 كرتونة</span>
                </div>
              </div>

              {/* Stock Warning Notice */}
              <div className="mt-4 p-3 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3 text-xs text-amber-900">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span>
                  <strong>تنبيه ذكي:</strong> اقترب رصيد الصنف في فرع الهرم من النفاد، تم تجهيز مقترح إذن تحويل أوتوماتيك.
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
                href="/systems/inventory-stock"
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
                href="/systems/treasury-banking"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0A507A] hover:text-[#06324D] transition group"
              >
                <span>تعرف على موديول الخزينة والحسابات العامة</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* UI Mockup Side */}
          <div className="lg:col-span-6">
            <div className="relative bg-[#F8FAFC] rounded-3xl p-5 border border-slate-200 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                <span className="font-bold text-slate-800">حركة الخزينة اليومية — الخزينة الرئيسية</span>
                <span className="text-[11px] text-slate-500 font-mono">2026/10/20</span>
              </div>

              {/* Treasury Balance Metric */}
              <div className="my-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-soft flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500">رصيد الخزينة الفعلي الحالي</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-bold text-slate-900 font-mono">284,500</span>
                    <span className="text-xs font-bold text-[#0A507A]">ج.م</span>
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  <span>الدرج مطابق للسيستم</span>
                </div>
              </div>

              {/* Transactions Stream */}
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-white border border-slate-200/70 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                      ↓
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">سند قبض نقدية #481</div>
                      <div className="text-[11px] text-slate-500">تحصيل من العميل: شركة الأمل لتجارة التجزئة</div>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-emerald-600">+15,000 ج.م</span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200/70 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                      ↑
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">سند صرف مصروفات #210</div>
                      <div className="text-[11px] text-slate-500">بند: إيجار الفرع ومصروفات كهرباء</div>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-rose-600">-6,200 ج.م</span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200/70 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#0A507A] flex items-center justify-center font-bold">
                      ⇅
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">إيداع بنكي — البنك الأهلي المصري</div>
                      <div className="text-[11px] text-slate-500">تحويل كاش من الخزينة إلى الحساب الجاري</div>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-slate-700">-50,000 ج.م</span>
                </div>
              </div>

              {/* Profit Report Strip */}
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span>صافي أرباح الشهر حتى تاريخه:</span>
                <span className="font-bold text-emerald-600 font-mono text-sm">+64,800 ج.م</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
