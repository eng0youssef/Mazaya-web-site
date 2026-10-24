"use client";

import React, { useState } from "react";
import { 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  PhoneCall, 
  Clock, 
  AlertCircle, 
  ArrowLeft,
  Loader2
} from "lucide-react";
import { COMPANY_INFO, SYSTEM_MODULES } from "@/data/mazaya-data";

export default function LeadCaptureSection() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    phone: "",
    systemInterest: "mazaya-max",
    branchesCount: "فرع واحد",
    notes: "",
  });

  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const selectedModuleName = formData.systemInterest === "custom"
    ? "تفصيل وبرمجة سيستم مخصص (Custom ERP)"
    : SYSTEM_MODULES.find(m => m.slug === formData.systemInterest)?.title || "نظام مزايا ماكس ERP";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Arabic Form Validation
    if (!formData.businessName.trim() || formData.businessName.trim().length < 2) {
      setFormError("يرجى كتابة اسم النشاط أو الشركة بشكل صحيح.");
      return;
    }

    if (!formData.contactName.trim() || formData.contactName.trim().length < 2) {
      setFormError("يرجى إدخال اسم المسؤول للتواصل.");
      return;
    }

    const cleanPhone = formData.phone.replace(/[\s\-\+]/g, "");
    if (!cleanPhone || cleanPhone.length < 10 || isNaN(Number(cleanPhone))) {
      setFormError("يرجى إدخال رقم موبايل صحيح (10-11 رقماً) لنتواصل معك عبر الواتساب أو الهاتف.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: formData.businessName.trim(),
          contactName: formData.contactName.trim(),
          phone: cleanPhone,
          system: selectedModuleName,
          branches: formData.branchesCount,
          notes: formData.notes.trim() || "لا يوجد",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "حدث خطأ أثناء إرسال البيانات");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setFormError(
        err.message || "عذراً، تعذر إرسال الطلب في الوقت الحالي. يرجى التواصل معنا عبر الواتساب مباشرة."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="lead-capture" className="py-16 lg:py-24 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Right Column: Value pitch & Trust */}
          <div data-aos="fade-up" className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0A507A]/15 shadow-soft">
              <Sparkles className="w-4 h-4 text-[#F2C12E]" />
              <span className="text-xs font-bold text-[#0A507A]">
                نسخة تجريبية مجانية 100%
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              جاهز لتشغيل وتجربة السيستم في نشاطك؟ اطلب نسختك الآن
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              سجل بيانات نشاطك وسيتواصل معك مهندس متخصص خلال 15 دقيقة لتثبيت النسخة التجريبية وشرح طريقة العمل خطوة بخطوة مجاناً على جهازك.
            </p>

            <div className="space-y-4 pt-2">
              {[
                { title: "معاينة حية للنظام المتخصص بمجالك", desc: "سواء مزايا ماكس، جلاس، ريستورانت، أو موتو، هتشوف دورتك العملية كاملة." },
                { title: "تدريب عملي وشروحات فيديو", desc: "نساعدك في تدريب موظفيك والكاشير على استخدام البرنامج بكل سهولة." },
                { title: "دعم كامل لمنظومة الفاتورة والإيصال", desc: "جاهزون للربط القانوني المباشر مع الضرائب المصرية وهيئة الزكاة ZATCA." },
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
                <PhoneCall className="w-5 h-5 text-[#0A507A]" />
              </div>
              <div>
                <span className="text-xs text-slate-500 block">أو اتصل بقسم المبيعات مباشرة:</span>
                <a
                  href={`tel:${COMPANY_INFO.phones.sales}`}
                  className="font-bold text-slate-900 hover:text-[#0A507A] text-sm"
                  dir="ltr"
                >
                  {COMPANY_INFO.phones.formattedSales}
                </a>
              </div>
            </div>

          </div>

          {/* Left Column: Form Card */}
          <div data-aos="fade-up" data-aos-delay="150" className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-soft">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      تم استلام طلبك وإرساله لفريق المبيعات بنجاح!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      شكراً لثقتك في شركة مزايا للبرمجيات. تم تسجيل بيانات نشاطك بنجاح، وسيتواصل معك أحد مهندسينا هاتفياً على رقم ({formData.phone}) لشرح وتجربة السيستم.
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>سيتواصل معك مهندس متخصص خلال 15 دقيقة</span>
                  </div>

                  <div className="pt-3">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          businessName: "",
                          contactName: "",
                          phone: "",
                          systemInterest: "mazaya-max",
                          branchesCount: "فرع واحد",
                          notes: "",
                        });
                      }}
                      className="px-7 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition shadow-xs"
                    >
                      إرسال طلب آخر
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="border-b border-slate-100 pb-4 mb-4">
                    <h3 className="font-bold text-lg text-slate-900">
                      طلب تجربة مجانية ومعرفة الأسعار
                    </h3>
                    <p className="text-xs text-slate-500">
                      سجل بياناتك وسيصل إشعار فوري لمهندسي المبيعات والدعم الفني لمتابعتك.
                    </p>
                  </div>

                  {/* Inline Arabic Validation Error Banner */}
                  {formError && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-2 text-rose-800 text-xs font-semibold animate-in fade-in duration-200">
                      <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        اسم النشاط / المنشأة <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => {
                          setFormData({ ...formData, businessName: e.target.value });
                          if (formError) setFormError(null);
                        }}
                        placeholder="مثال: مصنع الزجاج الحديث أو سوبرماركت الأصدقاء"
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
                        value={formData.contactName}
                        onChange={(e) => {
                          setFormData({ ...formData, contactName: e.target.value });
                          if (formError) setFormError(null);
                        }}
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
                        dir="ltr"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (formError) setFormError(null);
                        }}
                        placeholder="010XXXXXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0A507A] focus:ring-2 focus:ring-[#0A507A]/10 text-slate-800 placeholder-slate-400 bg-white text-end font-mono"
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
                        <option value="فرع واحد (نقطة بيع واحدة)">فرع واحد (نقطة بيع واحدة)</option>
                        <option value="من 2 إلى 3 فروع">من 2 إلى 3 فروع</option>
                        <option value="من 4 إلى 10 فروع">من 4 إلى 10 فروع</option>
                        <option value="سلسلة كبرى (أكثر من 10 فروع)">سلسلة كبرى (أكثر من 10 فروع)</option>
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
                        placeholder="أي تفاصيل خاصة بدورة عملك..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0A507A] focus:ring-2 focus:ring-[#0A507A]/10 text-slate-800 placeholder-slate-400 bg-white"
                      />
                    </div>
                  </div>

                  {/* Primary Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 rounded-xl bg-[#0A507A] hover:bg-[#06324D] active:scale-[0.98] text-white font-bold text-sm shadow-navy hover:shadow-lg transition-all flex items-center justify-center gap-2 border border-[#F2C12E]/30 disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#F2C12E]" />
                        <span>جاري إرسال الطلب لتيليجرام وجوجل شيت...</span>
                      </>
                    ) : (
                      <>
                        <span>إرسال طلب الديمو المجاني الآن</span>
                        <ArrowLeft className="w-4 h-4 text-[#F2C12E]" />
                      </>
                    )}
                  </button>

                  {/* Trust Micro-Features Grid */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 text-center">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="text-emerald-700 font-bold text-xs flex items-center justify-center gap-1 mb-0.5">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        <span>15 دقيقة</span>
                      </div>
                      <div className="text-[10px] text-slate-500">تواصل فوري وسريع</div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="text-[#0A507A] font-bold text-xs flex items-center justify-center gap-1 mb-0.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#F2C12E]" />
                        <span>مجاني 100%</span>
                      </div>
                      <div className="text-[10px] text-slate-500">ديمو وتجربة كاملة</div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="text-emerald-700 font-bold text-xs flex items-center justify-center gap-1 mb-0.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>بيانات آمنة</span>
                      </div>
                      <div className="text-[10px] text-slate-500">خصوصية وسرية تامة</div>
                    </div>
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
