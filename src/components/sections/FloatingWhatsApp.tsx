"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, X, Headphones, ShoppingBag, ArrowLeft } from "lucide-react";
import { COMPANY_INFO } from "@/data/mazaya-data";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const salesUrl = `https://wa.me/${COMPANY_INFO.whatsapp.sales}?text=${encodeURIComponent(
    COMPANY_INFO.whatsapp.salesMessage
  )}`;

  const supportUrl = `https://wa.me/${COMPANY_INFO.whatsapp.support}?text=${encodeURIComponent(
    COMPANY_INFO.whatsapp.supportMessage
  )}`;

  return (
    <div className="fixed bottom-6 start-6 z-50 flex flex-col items-start select-none">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-[#0A507A] to-[#06324D] text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 shadow-sm">
                  <Image
                    src="/logo-clean.png"
                    alt="مزايا للبرمجيات"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm">مزايا للبرمجيات</h4>
                  <p className="text-xs text-slate-200">الدعم المباشر والمبيعات</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
                aria-label="إغلاق"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-100">
              أهلاً بيك في شركة مزايا للبرمجيات! يسعدنا مساعدتك، تحب تتواصل مع مين دلوقتي؟
            </p>
          </div>

          {/* Department Selection Options */}
          <div className="p-4 space-y-2.5 bg-[#F8FAFC]">
            {/* Sales Channel */}
            <a
              href={salesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3 rounded-xl bg-white hover:bg-amber-50/50 border border-slate-200/80 hover:border-[#F2C12E] transition shadow-soft"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F2C12E]/15 text-[#946c00] flex items-center justify-center group-hover:scale-105 transition">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900 group-hover:text-[#0A507A] transition">
                    المبيعات والاستفسار عن الأسعار
                  </div>
                  <div className="text-[11px] text-slate-500">
                    طلب عرض سعر، نسخ تجريبية، ومقايسات
                  </div>
                </div>
              </div>
              <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-[#0A507A] group-hover:-translate-x-1 transition" />
            </a>

            {/* Support Channel */}
            <a
              href={supportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3 rounded-xl bg-white hover:bg-sky-50/50 border border-slate-200/80 hover:border-[#0A507A]/40 transition shadow-soft"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0A507A]/10 text-[#0A507A] flex items-center justify-center group-hover:scale-105 transition">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900 group-hover:text-[#0A507A] transition">
                    خدمة العملاء والدعم الفني
                  </div>
                  <div className="text-[11px] text-slate-500">
                    تدريب، صيانة، واستفسارات التشغيل
                  </div>
                </div>
              </div>
              <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-[#0A507A] group-hover:-translate-x-1 transition" />
            </a>
          </div>

          {/* Quick status bar */}
          <div className="px-4 py-2 bg-slate-100 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              متاحون للرد السريع عبر الواتساب
            </span>
            <span>مصر 🇪🇬</span>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow-elevated transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-400/30"
        aria-label="تواصل عبر الواتساب"
      >
        <span className="absolute -top-1 -end-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="text-xs sm:text-sm font-semibold tracking-wide">
          تواصل معنا واتساب
        </span>
      </button>
    </div>
  );
}
