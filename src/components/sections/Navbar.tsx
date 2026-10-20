"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronDown, 
  Menu, 
  X, 
  PhoneCall, 
  ArrowLeft,
  ShoppingCart,
  Layers,
  UtensilsCrossed,
  GraduationCap,
  Building2,
  Dumbbell,
  Palmtree,
  Bike,
  Sparkles
} from "lucide-react";
import { SYSTEM_MODULES, COMPANY_INFO } from "@/data/mazaya-data";

const iconMap: Record<string, React.ReactNode> = {
  ShoppingCart: <ShoppingCart className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  UtensilsCrossed: <UtensilsCrossed className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  Dumbbell: <Dumbbell className="w-5 h-5" />,
  Palmtree: <Palmtree className="w-5 h-5" />,
  Bike: <Bike className="w-5 h-5" />,
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Right side: Brand Logo - Clean, Unboxed, High-Fidelity */}
          <Link href="/" className="flex items-center gap-3.5 group focus:outline-none py-1">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo-clean.png"
                alt="شعار شركة مزايا للبرمجيات"
                width={56}
                height={56}
                className="w-full h-full object-contain filter drop-shadow-sm"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg sm:text-xl text-[#0A507A] leading-tight group-hover:text-[#06324D] transition tracking-tight">
                مزايا للبرمجيات
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-semibold tracking-wide">
                أنظمة الـ ERP والحلول المتخصصة
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* Mega Menu Trigger: الأنظمة الجاهزة */}
            <div 
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition ${
                  isMegaMenuOpen
                    ? "bg-[#0A507A]/10 text-[#0A507A]"
                    : "text-slate-700 hover:text-[#0A507A] hover:bg-slate-50"
                }`}
              >
                <span>الأنظمة المتخصصة</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMegaMenuOpen ? "rotate-180 text-[#0A507A]" : "text-slate-400"}`} />
              </button>

              {/* Mega Dropdown Panel */}
              {isMegaMenuOpen && (
                <div className="absolute top-full start-0 mt-2 w-[760px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">
                        أنظمة مزايا المتكاملة والتخصصية للأنشطة المختلفة
                      </h4>
                      <p className="text-xs text-slate-500">
                        حلول برمجية جاهزة للشغل الفوري ومعتمدة تدعم الكاشير، الفواتير، والمخازن
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0A507A] bg-[#0A507A]/10 px-2.5 py-1 rounded-full">
                      <Sparkles className="w-3 h-3 text-[#F2C12E]" />
                      8 أنظمة تشغيلية
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {SYSTEM_MODULES.map((module) => (
                      <Link
                        key={module.id}
                        href={`/systems/${module.slug}`}
                        onClick={() => setIsMegaMenuOpen(false)}
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F0F7FB] border border-transparent hover:border-slate-200/80 transition"
                      >
                        <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-[#0A507A] text-[#0A507A] group-hover:text-white flex items-center justify-center flex-shrink-0 transition shadow-xs">
                          {iconMap[module.iconName] || <ShoppingCart className="w-5 h-5" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-[#0A507A] transition truncate">
                              {module.title}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400 group-hover:text-[#F2C12E] transition">
                              {module.number}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 truncate mt-0.5">
                            {module.badge}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50/70 p-2.5 rounded-xl">
                    <span className="text-slate-600">
                      محتاج نظام مصمم ومبرمج مخصوص لدورة عمل شركتك؟
                    </span>
                    <Link
                      href="/#ready-vs-custom"
                      onClick={() => setIsMegaMenuOpen(false)}
                      className="text-[#0A507A] font-bold hover:underline flex items-center gap-1"
                    >
                      <span>تفصيل وبرمجة مخصصة</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/#ready-vs-custom"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-[#0A507A] hover:bg-slate-50 transition"
            >
              أنظمة مفصلة خصيصاً
            </Link>

            <Link
              href="/#video-academy"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-[#0A507A] hover:bg-slate-50 transition"
            >
              فيديوهات الشرح
            </Link>

            <Link
              href="/#support-hub"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-[#0A507A] hover:bg-slate-50 transition"
            >
              الدعم الفني
            </Link>

            <Link
              href="/#faq"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-[#0A507A] hover:bg-slate-50 transition"
            >
              الأسئلة الشائعة
            </Link>
          </nav>

          {/* Left: Contact Phone & Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phones.sales}`}
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#0A507A] px-2 py-1.5 rounded-lg transition"
            >
              <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-[#0A507A]">
                <PhoneCall className="w-3.5 h-3.5" />
              </div>
              <span dir="ltr">{COMPANY_INFO.phones.formattedSales}</span>
            </a>

            <Link
              href="/#lead-capture"
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#0A507A] hover:bg-[#06324D] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 border border-[#F2C12E]/30"
            >
              <span>اطلب نسخة تجريبية</span>
              <span className="w-2 h-2 rounded-full bg-[#F2C12E] animate-pulse"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              href="/#lead-capture"
              className="px-3 py-1.5 rounded-lg bg-[#0A507A] text-white text-xs font-bold"
            >
              ديمو مجاني
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition"
              aria-label="القائمة الرئيسية"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation (Sheet) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            <div className="px-3 py-2 text-xs font-bold text-slate-400">الأنظمة التخصصية:</div>
            <div className="grid grid-cols-2 gap-2">
              {SYSTEM_MODULES.map((module) => (
                <Link
                  key={module.id}
                  href={`/systems/${module.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-bold text-slate-800 hover:bg-[#F0F7FB] hover:text-[#0A507A]"
                >
                  <span className="text-[10px] text-[#F2C12E] font-mono">{module.number}</span>
                  <span className="truncate">{module.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 pt-3 space-y-2">
            <Link
              href="/#ready-vs-custom"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              أنظمة مفصلة خصيصاً (Custom ERP)
            </Link>
            <Link
              href="/#video-academy"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              فيديوهات الشرح والتدريب
            </Link>
            <Link
              href="/#support-hub"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              الدعم الفني عن بُعد
            </Link>
            <Link
              href="/#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              الأسئلة الشائعة
            </Link>
          </div>

          <div className="border-t border-slate-100 pt-3 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_INFO.phones.sales}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold"
            >
              <PhoneCall className="w-4 h-4 text-[#0A507A]" />
              <span>اتصل بالمبيعات: {COMPANY_INFO.phones.formattedSales}</span>
            </a>
            <Link
              href="/#lead-capture"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center py-2.5 rounded-xl bg-[#0A507A] text-white text-xs font-bold shadow-md"
            >
              طلب نسخة تجريبية فورية
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
