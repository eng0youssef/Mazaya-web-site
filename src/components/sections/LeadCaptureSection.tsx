"use client";

import React, { useState } from "react";
import { 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  PhoneCall, 
  Clock, 
  Building2, 
  User, 
  Layers
} from "lucide-react";
import { COMPANY_INFO, SYSTEM_MODULES } from "@/data/mazaya-data";

export default function LeadCaptureSection() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    phone: "",
    businessType: "mazaya-max",
    systemInterest: "mazaya-max",
    branchesCount: "1",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="lead-capture" className="py-16 lg:py-24 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Right Column: Value pitch & Trust */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0A507A]/15 shadow-soft">
              <Sparkles className="w-4 h-4 text-[#F2C12E]" />
              <span className="text-xs font-bold text-[#0A507A]">
                نسخة تجريبية مجانية 
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              جاهز لتشغيل وتجربة السيستم في نشاطك؟ اطلب نسختك التجريبية الآن
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              سجل بيانات نشاطك التجاري وهيتم التواصل معاك خلال 15 دقيقة لتجهيز النسخة التجريبية لنظام مزايا المناسب لك وشرح طريقة الشغل خطوة بخطوة مجاناً.
            </p>

            <div className="space-y-4 pt-2">
              {[
                { title: "معاينة حية للنظام المتخصص بمجالك", desc: "سواء مزايا ماكس، جلاس، ريستورانت، أو موتو، هتشوف دورتك العملية كاملة." },
                { title: "شرح كامل لأساسيات السيستم", desc: "نساعدك في فهم وتعلم الشغل على السيستم." },
                { title: "دعم كامل لمنظومة الفاتورة والإيصال", desc: "جاهزون للربط القانوني المباشر مع مصلحة الضرائب السعودية." },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-soft flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A507A]/10 text-[#0A507A] flex items-center justify-center flex-shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="text-slate-500 block">تفضل الاتصال الهاتفي الفوري؟</span>
                <a
                  href={`tel:${COMPANY_INFO.phones.sales}`}
                  className="font-bold text-slate-900 hover:text-[#0A507A] text-sm"
                  dir="ltr"
                >
                  {COMPANY_INFO.phones.formattedSupport}
                </a>
              </div>
            </div>

          </div>

          {/* Left Column: Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-soft">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    تم استلام طلبك بنجاح!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    شكراً لثقتك في مزايا للبرمجيات. سيقوم مهندس الدعم بالتواصل مع حضرتك على رقم الموبايل / الواتساب المسجل لتنسيق الديمو وتجربة السيستم.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition"
                  >
                    إرسال طلب آخر
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-4 mb-4">
                    <h3 className="font-bold text-lg text-slate-900">
                      طلب تجربة مجانية ومعرفة الأسعار
                    </h3>
                    <p className="text-xs text-slate-500">
                      برجاء كتابة البيانات وسيتواصل معك مهندس متخصص لمتابعة طلبك.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        اسم النشاط / المنشأة <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="مثال: مصنع الزجاج الحديث أو مطعم الأصدقاء"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0A507A] focus:ring-2 focus:ring-[#0A507A]/10 text-slate-800 placeholder-slate-400 bg-white"
                      />
                    </div>

                    {/* Contact Person Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        اسم المسؤول <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        placeholder="أ / محمد أحمد"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0A507A] focus:ring-2 focus:ring-[#0A507A]/10 text-slate-800 placeholder-slate-400 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        رقم الموبايل / الواتساب <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        dir="ltr"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="010XXXXXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0A507A] focus:ring-2 focus:ring-[#0A507A]/10 text-slate-800 placeholder-slate-400 bg-white text-end"
                      />
                    </div>

                    {/* System Interest */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        اختر النظام المطلوب
                      </label>
                      <select
                        value={formData.systemInterest}
                        onChange={(e) => setFormData({ ...formData, systemInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0A507A] focus:ring-2 focus:ring-[#0A507A]/10 text-slate-800 bg-white"
                      >
                        {SYSTEM_MODULES.map((mod) => (
                          <option key={mod.slug} value={mod.slug}>
                            {mod.title} — {mod.badge}
                          </option>
                        ))}
                        <option value="custom">تفصيل وبرمجة سيستم مخصص (Custom ERP)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Number of Branches */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        عدد الفروع / نقاط البيع
                      </label>
                      <select
                        value={formData.branchesCount}
                        onChange={(e) => setFormData({ ...formData, branchesCount: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0A507A] focus:ring-2 focus:ring-[#0A507A]/10 text-slate-800 bg-white"
                      >
                        <option value="1">فرع واحد (نقطة بيع واحدة)</option>
                        <option value="2-3">من 2 إلى 3 فروع</option>
                        <option value="4-10">من 4 إلى 10 فروع</option>
                        <option value="10+">سلسلة كبرى (أكثر من 10 فروع)</option>
                      </select>
                    </div>

                    {/* Additional Note */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        ملاحظات إضافية (اختياري)
                      </label>
                      <input
                        type="text"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="أي تفاصيل أخرى..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0A507A] focus:ring-2 focus:ring-[#0A507A]/10 text-slate-800 placeholder-slate-400 bg-white"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 rounded-xl bg-[#0A507A] hover:bg-[#06324D] text-white font-bold text-sm shadow-navy hover:shadow-lg transition-all flex items-center justify-center gap-2 border border-[#F2C12E]/30"
                  >
                    {isLoading ? (
                      <span>جاري إرسال الطلب...</span>
                    ) : (
                      <>
                        <span>إرسال طلب الديمو المجاني الآن</span>
                        <Send className="w-4 h-4 text-[#F2C12E] -rotate-45" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>بياناتك في أمان تام ولن يتم مشاركتها مع أي جهة خارجية.</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
