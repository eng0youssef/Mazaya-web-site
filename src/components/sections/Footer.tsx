"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowLeft,
  Download,
  Youtube
} from "lucide-react";
import { SYSTEM_MODULES, COMPANY_INFO } from "@/data/mazaya-data";

export default function Footer() {
  return (
    <footer className="bg-slate-100/80 border-t border-slate-200 text-slate-700 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-14 h-14 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo-clean.png"
                  alt="مزايا للبرمجيات"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>
              <div>
                <span className="font-black text-xl text-[#0A507A] block leading-tight group-hover:text-[#06324D] transition">
                  مزايا للبرمجيات
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  Mazaya for programming
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              الشركة الرائدة في تقديم حلول برمجيات الكاشير، وإدارة المخازن، والأنظمة المحاسبية والـ ERP المتكاملة للمحلات، والمعارض، الشركات، والمصانع في مصر والوطن العربي.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200/80 w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>متوافق ومعتمد مع منظومة الفاتورة الإلكترونية في السعودية (ZATCA)</span>
            </div>
          </div>

          {/* Quick System Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-sm text-slate-900 border-s-2 border-[#0A507A] ps-2.5">
              الأنظمة والموديولات
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SYSTEM_MODULES.map((module) => (
                <Link
                  key={module.id}
                  href={`/systems/${module.slug}`}
                  className="text-slate-600 hover:text-[#0A507A] transition flex items-center gap-1.5 py-1"
                >
                  <span className="text-[10px] text-[#F2C12E] font-mono font-bold">
                    {module.number}
                  </span>
                  <span className="truncate">{module.title}</span>
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200/80">
              <Link
                href="/videos"
                className="text-xs font-bold text-[#0A507A] hover:text-[#06324D] transition inline-flex items-center gap-1.5 py-1"
              >
                <Youtube className="w-3.5 h-3.5 text-rose-600" />
                <span>مكتبة شروحات الفيديو والتدريب</span>
                <ArrowLeft className="w-3 h-3 text-[#F2C12E]" />
              </Link>
            </div>
          </div>

          {/* Contact & Support (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-sm text-slate-900 border-s-2 border-[#0A507A] ps-2.5">
              التواصل والدعم الفني المباشر
            </h4>

            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0A507A] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-[#0A507A] flex-shrink-0" />
                <span>
                  المبيعات: <strong dir="ltr">{COMPANY_INFO.phones.formattedSales}</strong>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-[#0A507A] flex-shrink-0" />
                <span>
                  الدعم الفني: <strong dir="ltr">{COMPANY_INFO.phones.formattedSupport}</strong>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#0A507A] flex-shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </li>
            </ul>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <a
                href={COMPANY_INFO.remoteSupport.anydeskUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium inline-flex items-center gap-1"
              >
                <Download className="w-3 h-3 text-rose-600" />
                <span>تحميل AnyDesk</span>
              </a>
              <a
                href={COMPANY_INFO.remoteSupport.teamviewerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium inline-flex items-center gap-1"
              >
                <Download className="w-3 h-3 text-[#0A507A]" />
                <span>تحميل TeamViewer</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} <strong>شركة مزايا للبرمجيات</strong>.
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <span>جمهورية مصر العربية 🇪🇬</span>
            <span>•</span>
            <span>المملكة العربية السعودية 🇸🇦</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
