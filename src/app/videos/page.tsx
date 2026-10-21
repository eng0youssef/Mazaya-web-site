import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Home, ArrowLeft, PhoneCall } from "lucide-react";
import VideoAcademySection from "@/components/sections/VideoAcademySection";
import { COMPANY_INFO } from "@/data/mazaya-data";

export const metadata: Metadata = {
  title: "فيديوهات الشرح والتدريب | شركة مزايا للبرمجيات",
  description: "مكتبة فيديوهات تدريبية وشروحات تفصيلية لكافة شاشات وموديولات برامج مزايا لإدارة المبيعات، الكاشير، الحسابات، والمخازن.",
  icons: {
    icon: "/favicon-circle.png?v=3",
    shortcut: "/favicon-circle.png?v=3",
    apple: "/favicon-circle.png?v=3",
  },
};

export default function VideosPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Top Breadcrumb Header Bar */}
      <div className="bg-[#F8FAFC] border-b border-slate-200/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#0A507A] transition flex items-center gap-1.5">
              <Home className="w-3.5 h-3.5 text-slate-400" />
              <span>الرئيسية</span>
            </Link>
            <span>/</span>
            <span className="text-[#0A507A] font-bold">فيديوهات الشرح والتدريب</span>
          </nav>
        </div>
      </div>

      {/* Main Video Academy Section */}
      <VideoAcademySection />

      {/* Bottom Support Banner */}
      <div className="bg-[#F0F7FB] border-t border-slate-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-soft text-[#0A507A] mb-2 border border-[#0A507A]/15">
            <PhoneCall className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            محتاج مساعدة في تطبيق أي شرح عملياً؟
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            فريق الدعم الفني في شركة مزايا جاهز للدخول معاك عن بعد وتدريبك أنت وفريق عملك خطوة بخطوة كل يوم من 10 ص لـ 7 م ما عدا الجمعة.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phones.support}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A507A] hover:bg-[#06324D] text-white font-bold text-xs sm:text-sm transition shadow-navy"
            >
              <PhoneCall className="w-4 h-4 text-[#F2C12E]" />
              <span>اتصل بالدعم الفني: <strong dir="ltr">{COMPANY_INFO.phones.formattedSupport}</strong></span>
            </a>
            <Link
              href="/#lead-capture"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 transition shadow-soft"
            >
              <span>طلب تجربة مجانية للنظام</span>
              <ArrowLeft className="w-4 h-4 text-[#0A507A]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
