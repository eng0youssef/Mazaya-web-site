"use client";

import React from "react";
import Link from "next/link";
import { 
  Zap, 
  Code2, 
  CheckCircle2, 
  ArrowLeft, 
  Sparkles, 
  Store, 
  Factory, 
  Layers, 
  ShieldCheck,
  Cpu
} from "lucide-react";

export default function ReadyVsCustomSection() {
  return (
    <section id="ready-vs-custom" className="py-16 lg:py-24 bg-[#F8FAFC] relative border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0A507A]/15 shadow-soft">
            <Sparkles className="w-4 h-4 text-[#F2C12E]" />
            <span className="text-xs font-bold text-[#0A507A]">
             برنامج جاهز ولا سيستم متفصل على مقاسك؟
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            حلول برمجية مرنة تناسب المحلات التجارية والمصانع والشركات الكبرى
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            في مزايا لا نفرض عليك قالباً واحداً؛ نوفر لك برامج جاهزة للتشغيل الفوري في نفس اليوم، أو نقوم ببرمجة وتفصيل نظام ERP متكامل من الصفر ليلائم أدق تفاصيل دورتك التشغيلية.
          </p>
        </div>

        {/* 2 Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Ready-to-Use Systems */}
          <div data-aos="fade-up" data-aos-delay="100" className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-soft hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 end-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-soft">
                  <Zap className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  تشغيل في نفس اليوم ⚡
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                البرامج الجاهزة للتشغيل الفوري
              </h3>
              
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                أنظمة متجربة ومستقرة بنسبة 100% تخدم آلاف الأنشطة التجارية؛ استلم البرنامج متسطب على جهازك مع شروحاته وتدريبه وابدأ في البيع وجرد المخازن في ساعات معدودة.
              </p>

              {/* Ideal For */}
              <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-2">
                  <Store className="w-4 h-4 text-[#0A507A]" />
                  <span>مناسب ومثالي جداً لـ:</span>
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {[
                    "السوبر ماركت والهايبر",
                    "محلات الملابس والأحذية",
                    "المطاعم والكافيهات",
                    "المعارض ومحلات الأدوات الصحية",
                    "شركات التوزيع وتجار الجملة",
                    "محلات العدد اليدوية والحدايد",
                  ].map((cat, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-white text-slate-700 font-medium border border-slate-200/70">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-3 mb-8 text-xs sm:text-sm text-slate-700">
                {[
                  "جاهز للعمل فوراً بدون فترات انتظار طويلة أو تكاليف تطوير كبيرة.",
                  "قواعد بيانات سريعة ومحمية ضد انقطاع الكهرباء وتلف الملفات.",
                  "شامل كافة تقارير الكاشير، كروت الأصناف، وكشوف حسابات العملاء.",
                  "تحديثات دورية مجانية وتطوير مستمر للأداء والأمان.",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="#lead-capture"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-slate-100 hover:bg-[#0A507A] active:scale-[0.98] text-slate-800 hover:text-white font-bold text-sm transition-all shadow-xs group"
            >
              <span>طلب نسخة تجريبية فورية للبرامج الجاهزة</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 2: Custom ERP & Tailored Systems */}
          <div data-aos="fade-up" data-aos-delay="200" className="bg-white rounded-3xl p-8 border-2 border-[#0A507A]/30 shadow-card hover:shadow-2xl transition-all flex flex-col justify-between relative overflow-hidden">
            {/* Top Navy and Gold decorative header bar */}
            <div className="absolute top-0 start-0 end-0 h-2 bg-gradient-to-r from-[#0A507A] via-[#F2C12E] to-[#0A507A]" />
            <div className="absolute top-0 end-0 w-32 h-32 bg-[#0A507A]/5 rounded-bl-full pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#0A507A]/10 text-[#0A507A] flex items-center justify-center border border-[#0A507A]/20 shadow-soft">
                  <Code2 className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#F2C12E]/15 text-[#946c00] text-xs font-bold border border-[#F2C12E]/40">
                  تفصيل وبرمجة مخصصة 100%
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0A507A] mb-2 flex items-center gap-2">
                <span>أنظمة مفصلة مخصوص (Custom ERP)</span>
              </h3>
              
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                هل تمتلك مصنعاً، خط إنتاج، أو دورة عمل خاصة ومعقدة لا تجدها في البرامج الجاهزة؟ فريق مهندسي البرمجيات في مزايا يحلل دورتك المستندية بالكامل ويبرمج لك نظاماً رقمياً مصمماً على مقاسك.
              </p>

              {/* Ideal For */}
              <div className="mb-6 p-4 rounded-2xl bg-[#F0F7FB] border border-[#0A507A]/15">
                <div className="text-xs font-bold text-[#0A507A] mb-2 flex items-center gap-2">
                  <Factory className="w-4 h-4" />
                  <span>حلول استراتيجية مخصصة لـ:</span>
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {[
                    "المصانع وخطوط الإنتاج والتصنيع",
                    "شركات المقاولات والاستثمار العقاري",
                    "شركات الشحن واللوجستيات",
                    "سلاسل الفروع الكبرى متعددة المخازن",
                    "المستشفيات والمجمعات الطبية",
                    "المؤسسات ذات الدورات المستندية الحصرية",
                  ].map((cat, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-white text-slate-800 font-medium border border-slate-200">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-3 mb-8 text-xs sm:text-sm text-slate-700">
                {[
                  "جلسات تحليل أعمال مستفيضة لفهم وتوثيق كل خطوة في مصنعك أو شركتك.",
                  "إمكانية اختيار منصة التشغيل المفضلة: ديسكتوب، وتطبيقات موبايل.",
                  "قواعد بيانات غير محدودة وقابلة للتوسع المستقبلي مع نمو أعمالك.",
                  "ربط كامل مع البوابات، أو أي أنظمة خارجية (APIs).",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0A507A] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="#lead-capture"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#0A507A] hover:bg-[#06324D] active:scale-[0.98] text-white font-bold text-sm transition-all shadow-navy group border border-[#F2C12E]/30"
            >
              <span>اطلب دراسة ومقايسة لنظامك المخصوص</span>
              <ArrowLeft className="w-4 h-4 text-[#F2C12E] group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
