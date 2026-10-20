"use client";

import React from "react";
import { 
  Headphones, 
  Download, 
  MessageCircle, 
  PhoneCall, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  Monitor,
  Laptop
} from "lucide-react";
import { COMPANY_INFO } from "@/data/mazaya-data";

export default function SupportHubSection() {
  const supportWaUrl = `https://wa.me/${COMPANY_INFO.whatsapp.support}?text=${encodeURIComponent(
    COMPANY_INFO.whatsapp.supportMessage
  )}`;

  return (
    <section id="support-hub" className="py-16 lg:py-24 bg-[#F8FAFC] relative border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0A507A]/15 shadow-soft">
            <Headphones className="w-4 h-4 text-[#F2C12E]" />
            <span className="text-xs font-bold text-[#0A507A]">
              أقوى خدمة ما بعد البيع ودعم فني في مصر
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            مش بنبيعلك السيستم ونسيبك؛ مهندسو الدعم الفني معاك لحظة بلحظة
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            عارفين إن توقف الكاشير أو السيستم يعني تعطل شغلك وخسارة فلوس؛ عشان كده فريق الدعم الفني في مزايا متاح للتدخل السريع عن بعد أو عبر الهاتف لحل أي استفسار في ثواني معدودة.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-soft">
            <div className="w-12 h-12 rounded-2xl bg-[#0A507A]/10 text-[#0A507A] flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              استجابة سريعة وحل فوري
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              لا نتركك في قوائم انتظار طويلة؛ اتصالك التليفوني أو رسالتك على الواتساب يتم الرد عليها مباشرة بواسطة مهندس دعم فني متخصص فاهم طبيعة شغلك.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-soft">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#946c00] flex items-center justify-center mb-4 border border-amber-200/60">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              دعم فني عن بُعد على شاشتك
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              من خلال برامج التحكم عن بعد المرخصة والآمنة (AnyDesk و TeamViewer)، يدخل المهندس على جهازك ويحل المشكلة أو يدرب الموظف وكأنه جالس بجوارك تماماً.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-soft">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              حماية البيانات ونسخ احتياطي
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              نساعدك في إعداد النسخ الاحتياطي التلقائي اليومي لقاعدة بيانات نشاطك لضمان عدم ضياع أي فاتورة بيع أو كشف حساب حتى في حال تعطل جهاز الكمبيوتر.
            </p>
          </div>

        </div>

        {/* Remote Support Quick Download Portal */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="space-y-1 text-center lg:text-start">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  بوابة الدعم الفني عن بُعد
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                حمّل برنامج الدعم الفني المفضل لديك ودع مهندسنا يساعدك فوراً
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                فقط قم بتنزيل أحد البرنامجين وافتح الشاشة وأعطِ الكود لمهندس الدعم الفني.
              </p>
            </div>

            {/* Direct Download Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={COMPANY_INFO.remoteSupport.anydeskUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs sm:text-sm border border-rose-200 transition shadow-soft"
              >
                <Download className="w-4 h-4 text-rose-600" />
                <span>تحميل AnyDesk للويندوز</span>
              </a>

              <a
                href={COMPANY_INFO.remoteSupport.teamviewerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-sky-50 hover:bg-sky-100 text-[#0A507A] font-bold text-xs sm:text-sm border border-sky-200 transition shadow-soft"
              >
                <Download className="w-4 h-4 text-[#0A507A]" />
                <span>تحميل TeamViewer</span>
              </a>
            </div>
          </div>

          {/* Contact Bar */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-600">
              <PhoneCall className="w-4 h-4 text-[#0A507A]" />
              <span>
                خط الدعم الفني المباشر في مصر: <strong>{COMPANY_INFO.phones.formattedSupport}</strong>
              </span>
            </div>

            <a
              href={supportWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition shadow-soft"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>تواصل مع مهندس الدعم الفني على واتساب</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
