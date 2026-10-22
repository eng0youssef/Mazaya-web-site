import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { 
  SYSTEM_MODULES, 
  VIDEO_TUTORIALS, 
  COMPANY_INFO, 
  SystemModule 
} from "@/data/mazaya-data";
import SystemRelatedVideos from "@/components/sections/SystemRelatedVideos";
import { 
  ArrowLeft, 
  ArrowRight,
  CheckCircle2, 
  Play, 
  Sparkles, 
  PhoneCall, 
  ShieldCheck, 
  TrendingUp,
  ScanLine,
  Printer,
  CreditCard,
  Clock,
  FileSpreadsheet,
  AlertTriangle,
  ArrowLeftRight,
  CalendarClock,
  Receipt,
  Calculator,
  RotateCcw,
  Calendar,
  FileCheck2,
  PieChart,
  Users,
  FileText,
  ShieldAlert,
  Truck,
  BarChart3,
  Network,
  BookOpen,
  BarChart,
  Lock,
  History,
  EyeOff,
  HardDriveDownload,
  QrCode,
  Building2,
  Smartphone,
  WifiOff,
  Boxes,
  ShoppingCart,
  Landmark,
  UserCheck,
  LineChart,
  CloudCog,
  UtensilsCrossed,
  GraduationCap,
  Dumbbell,
  Palmtree,
  Bike,
  Layers,
  Barcode
} from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SYSTEM_MODULES.map((module) => ({
    slug: module.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const module = SYSTEM_MODULES.find((m) => m.slug === params.slug);
  if (!module) return { title: "النظام غير موجود | مزايا للبرمجيات" };

  return {
    title: `${module.title} — ${module.badge} | مزايا للبرمجيات`,
    description: module.heroSubtitle,
    icons: {
      icon: "/favicon-circle.png?v=3",
      shortcut: "/favicon-circle.png?v=3",
      apple: "/favicon-circle.png?v=3",
    },
  };
}

const iconComponentMap: Record<string, React.ReactNode> = {
  ScanLine: <ScanLine className="w-6 h-6" />,
  Printer: <Printer className="w-6 h-6" />,
  CreditCard: <CreditCard className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
  FileSpreadsheet: <FileSpreadsheet className="w-6 h-6" />,
  AlertTriangle: <AlertTriangle className="w-6 h-6" />,
  ArrowLeftRight: <ArrowLeftRight className="w-6 h-6" />,
  CalendarClock: <CalendarClock className="w-6 h-6" />,
  Receipt: <Receipt className="w-6 h-6" />,
  Calculator: <Calculator className="w-6 h-6" />,
  RotateCcw: <RotateCcw className="w-6 h-6" />,
  Calendar: <Calendar className="w-6 h-6" />,
  FileCheck2: <FileCheck2 className="w-6 h-6" />,
  PieChart: <PieChart className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6" />,
  Truck: <Truck className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
  Network: <Network className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  BarChart: <BarChart className="w-6 h-6" />,
  Lock: <Lock className="w-6 h-6" />,
  History: <History className="w-6 h-6" />,
  EyeOff: <EyeOff className="w-6 h-6" />,
  HardDriveDownload: <HardDriveDownload className="w-6 h-6" />,
  QrCode: <QrCode className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  WifiOff: <WifiOff className="w-6 h-6" />,
  Boxes: <Boxes className="w-6 h-6" />,
  ShoppingCart: <ShoppingCart className="w-6 h-6" />,
  Landmark: <Landmark className="w-6 h-6" />,
  UserCheck: <UserCheck className="w-6 h-6" />,
  LineChart: <LineChart className="w-6 h-6" />,
  CloudCog: <CloudCog className="w-6 h-6" />,
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Dumbbell: <Dumbbell className="w-6 h-6" />,
  Palmtree: <Palmtree className="w-6 h-6" />,
  Bike: <Bike className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Barcode: <Barcode className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
};

export default function SystemDetailPage({ params }: PageProps) {
  const currentModule = SYSTEM_MODULES.find((m) => m.slug === params.slug);

  if (!currentModule) {
    notFound();
  }

  // Related videos
  const relatedVideos = currentModule.slug === "mazaya-gym"
    ? VIDEO_TUTORIALS.filter((v) => v.category === "gym")
    : currentModule.slug === "mazaya-max"
    ? VIDEO_TUTORIALS.filter((v) => v.category === "sales" || v.category === "inventory" || v.category === "basic").slice(0, 6)
    : [];

  return (
    <div className="w-full bg-[#F8FAFC]">
      
      {/* Breadcrumb Navigation */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-[#0A507A] transition">
              الرئيسية
            </Link>
            <span>/</span>
            <Link href="/#systems" className="hover:text-[#0A507A] transition">
              الأنظمة المتخصصة
            </Link>
            <span>/</span>
            <span className="font-bold text-slate-800">{currentModule.title}</span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="font-semibold text-emerald-700">نسخة جاهزة للتشغيل والتسليم الفوري</span>
          </div>
        </div>
      </div>

      {/* Module Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-200/80 bg-gradient-to-b from-white to-[#F0F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Right text info */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-lg bg-[#0A507A] text-white font-mono font-bold text-xs shadow-soft">
                  {currentModule.number}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#F2C12E]/15 text-[#946c00] font-bold text-xs border border-[#F2C12E]/30">
                  {currentModule.badge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                {currentModule.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {currentModule.heroSubtitle}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/#lead-capture"
                  className="px-6 py-3.5 rounded-xl bg-[#0A507A] hover:bg-[#06324D] text-white font-bold text-sm shadow-navy transition-all"
                >
                  اطلب تجربة نظام {currentModule.title}
                </Link>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp.sales}?text=${encodeURIComponent(
                    `أهلاً مزايا، محتاج استفسر عن سعر وتفاصيل نظام ${currentModule.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-200 shadow-soft transition"
                >
                  استفسر عبر الواتساب فوراً
                </a>
              </div>

            </div>

            {/* Left Highlights Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-4">
                <h3 className="font-bold text-base text-slate-900 pb-3 border-b border-slate-100 flex items-center justify-between">
                  <span>أبرز مزايا التشغيل لنظام {currentModule.title}</span>
                  <Sparkles className="w-4 h-4 text-[#F2C12E]" />
                </h3>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {currentModule.keyBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>دعم فني وتدريب مجاني عند الاستلام</span>
                  <span className="font-bold text-emerald-600">ضمان 100%</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Deep-Dive Sub-Features Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            أدق التفاصيل التشغيلية المصممة لواقع العمل في مصر
          </h2>
          <p className="text-sm text-slate-600">
            كل شاشة وكل تقرير في نظام {currentModule.title} تم تصميمه بعناية فائقة لتنظيم دورة العمل ومنع أي أخطاء.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentModule.subFeatures.map((sub, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-soft hover:shadow-lg transition-all space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0A507A]/10 text-[#0A507A] flex items-center justify-center shadow-soft">
                {iconComponentMap[sub.iconName] || <Sparkles className="w-6 h-6" />}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {sub.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {sub.description}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* Related Video Tutorials (Interactive with modal) */}
      <SystemRelatedVideos
        moduleTitle={currentModule.title}
        videos={relatedVideos}
      />

      {/* Module CTA Banner */}
      <section className="py-14 bg-gradient-to-r from-[#0A507A] to-[#06324D] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold">
            جاهز لتشغيل نظام {currentModule.title} في شركتك أو مشروعك؟
          </h3>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            تواصل معنا اليوم وسيقوم مهندس مزايا بتثبيت النسخة التجريبية وتدريب فريق عملك بالكامل دون أي رسوم مسبقة.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#lead-capture"
              className="px-7 py-3.5 rounded-xl bg-[#F2C12E] hover:bg-[#DEAA20] text-slate-900 font-bold text-sm shadow-gold transition"
            >
              احجز موعد تجربة البرنامج الآن
            </Link>
            <Link
              href="/"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition"
            >
              العودة للصفحة الرئيسية
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
