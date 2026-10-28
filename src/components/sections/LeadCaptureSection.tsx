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
    activity: "",
    address: "",
    phone: "",
    systemInterest: "mazaya-max",
    branchesCount: "فرع واحد (نقطة بيع واحدة)",
    notes: "",
  });

  const [errors, setErrors] = useState<{
    businessName?: string;
    contactName?: string;
    activity?: string;
    address?: string;
    phone?: string;
  }>({});

  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const selectedModuleName = formData.systemInterest === "custom"
    ? "تفصيل وبرمجة سيستم مخصص (Custom ERP)"
    : SYSTEM_MODULES.find(m => m.slug === formData.systemInterest)?.title || "نظام مزايا ماكس ERP";

  // Convert Arabic digits (٠-٩) to English digits (0-9)
  const normalizeDigits = (str: string) => {
    return str.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d).toString());
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear individual field error if exists
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof typeof errors];
        return next;
      });
    }

    if (formError) setFormError(null);
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};

    // 1. Business Name
    if (!formData.businessName.trim()) {
      newErrors.businessName = "يرجى كتابة اسم المنشأة أو المحل";
    } else if (formData.businessName.trim().length < 2) {
      newErrors.businessName = "اسم المنشأة يجب أن يكون حرفين على الأقل";
    }

    // 2. Contact Name
    if (!formData.contactName.trim()) {
      newErrors.contactName = "يرجى كتابة اسم المسؤول للتواصل";
    } else if (formData.contactName.trim().length < 2) {
      newErrors.contactName = "اسم المسؤول يجب أن يكون حرفين على الأقل";
    }

    // 3. Activity (النشاط)
    if (!formData.activity.trim()) {
      newErrors.activity = "يرجى كتابة نوع النشاط (مثال: محل أدوات صحية)";
    } else if (formData.activity.trim().length < 2) {
      newErrors.activity = "يرجى تحديد النشاط بشكل صحيح";
    }

    // 4. Address (العنوان)
    if (!formData.address.trim()) {
      newErrors.address = "يرجى كتابة العنوان أو المنطقة (مثال: ابو النمرس - الجيزه)";
    } else if (formData.address.trim().length < 3) {
      newErrors.address = "يرجى كتابة العنوان بالتفصيل (المنطقة - المحافظة)";
    }

    // 5. Phone / WhatsApp
    const cleanPhone = normalizeDigits(formData.phone.trim().replace(/[\s\-\+]/g, ""));
    const isEgyptianPhone = /^(?:20|0020)?01[0125][0-9]{8}$/.test(cleanPhone);
    const isGeneralPhone = /^[0-9]{10,14}$/.test(cleanPhone);

    if (!cleanPhone) {
      newErrors.phone = "يرجى إدخال رقم الموبايل أو الواتساب";
    } else if (!isEgyptianPhone && !isGeneralPhone) {
      newErrors.phone = "يرجى إدخال رقم هاتف صحيح (11 رقماً يبدأ بـ 01)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Validate form fields
    if (!validateForm()) {
      setFormError("يرجى مراجعة الحقول المطلوبة الموضحة باللون الأحمر.");
      return;
    }

    setIsLoading(true);

    const cleanPhone = normalizeDigits(formData.phone.trim().replace(/[\s\-\+]/g, ""));

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: formData.businessName.trim(),
          contactName: formData.contactName.trim(),
          activity: formData.activity.trim(),
          address: formData.address.trim(),
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
                          activity: "",
                          address: "",
                          phone: "",
                          systemInterest: "mazaya-max",
                          branchesCount: "فرع واحد (نقطة بيع واحدة)",
                          notes: "",
                        });
                        setErrors({});
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

                  {/* General Validation Error Banner */}
                  {formError && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-2 text-rose-800 text-xs font-semibold animate-in fade-in duration-200">
                      <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Row 1: Business Name & Contact Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        اسم المنشأة / المحل <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => handleInputChange("businessName", e.target.value)}
                        placeholder="مثال: سوبرماركت الأصدقاء، معرض النور..."
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all text-slate-800 placeholder-slate-400 bg-white ${
                          errors.businessName
                            ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 bg-rose-50/20"
                            : "border-slate-200 focus:border-[#0A507A] focus:ring-2 focus:ring-[#0A507A]/10"
                        }`}
                      />
                      {errors.businessName && (
                        <p className="mt-1 text-[11px] text-rose-600 font-medium flex items-center gap-1 animate-in fade-in duration-150">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.businessName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        اسم المسؤول <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.contactName}
                        onChange={(e) => handleInputChange("contactName", e.target.value)}
                        placeholder="أ / محمد أحمد"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all text-slate-800 placeholder-slate-400 bg-white ${
                          errors.contactName
                            ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 bg-rose-50/20"
                            : "border-slate-200 focus:border-[#0A507A] focus:ring-2 focus:ring-[#0A507A]/10"
                        }`}
                      />
                      {errors.contactName && (
                        <p className="mt-1 text-[11px] text-rose-600 font-medium flex items-center gap-1 animate-in fade-in duration-150">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.contactName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Activity (النشاط) & Address (العنوان) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        النشاط <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.activity}
                        onChange={(e) => handleInputChange("activity", e.target.value)}
                        placeholder="مثال: محل أدوات صحية"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all text-slate-800 placeholder-slate-400 bg-white ${
                          errors.activity
                            ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 bg-rose-50/20"
                            : "border-slate-200 focus:border-[#0A507A] focus:ring-2 focus:ring-[#0A507A]/10"
                        }`}
                      />
                      {errors.activity && (
                        <p className="mt-1 text-[11px] text-rose-600 font-medium flex items-center gap-1 animate-in fade-in duration-150">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.activity}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        العنوان <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        placeholder="مثال: ابو النمرس - الجيزه"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all text-slate-800 placeholder-slate-400 bg-white ${
                          errors.address
                            ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 bg-rose-50/20"
                            : "border-slate-200 focus:border-[#0A507A] focus:ring-2 focus:ring-[#0A507A]/10"
                        }`}
                      />
                      {errors.address && (
                        <p className="mt-1 text-[11px] text-rose-600 font-medium flex items-center gap-1 animate-in fade-in duration-150">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.address}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Phone / WhatsApp & System Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        رقم الموبايل / الواتساب <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        dir="ltr"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", normalizeDigits(e.target.value))}
                        placeholder="010XXXXXXXX"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all text-slate-800 placeholder-slate-400 bg-white text-end font-mono ${
                          errors.phone
                            ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 bg-rose-50/20"
                            : "border-slate-200 focus:border-[#0A507A] focus:ring-2 focus:ring-[#0A507A]/10"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-[11px] text-rose-600 font-medium flex items-center gap-1 animate-in fade-in duration-150">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        اختر النظام المطلوب
                      </label>
                      <select
                        value={formData.systemInterest}
                        onChange={(e) => handleInputChange("systemInterest", e.target.value)}
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

                  {/* Row 4: Branches Count & Notes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        عدد الفروع / نقاط البيع
                      </label>
                      <select
                        value={formData.branchesCount}
                        onChange={(e) => handleInputChange("branchesCount", e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0A507A] focus:ring-2 focus:ring-[#0A507A]/10 text-slate-800 bg-white"
                      >
                        <option value="فرع واحد (نقطة بيع واحدة)">فرع واحد (نقطة بيع واحدة)</option>
                        <option value="من 2 إلى 3 فروع">من 2 إلى 3 فروع</option>
                        <option value="من 4 إلى 10 فروع">من 4 إلى 10 فروع</option>
                        <option value="سلسلة كبرى (أكثر من 10 فروع)">سلسلة كبرى (أكثر من 10 فروع)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        ملاحظات إضافية (اختياري)
                      </label>
                      <input
                        type="text"
                        value={formData.notes}
                        onChange={(e) => handleInputChange("notes", e.target.value)}
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
