import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/sections/FloatingWhatsApp";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A507A",
};

export const metadata: Metadata = {
  title: "مزايا للبرمجيات | أنظمة الكاشير وإدارة المخازن والـ ERP المتكاملة",
  description: "المنظومة البرمجية المتكاملة لإدارة المبيعات، المخازن، الخزينة، الحسابات العامة، والفاتورة والإيصال الإلكتروني في مصر والوطن العربي. برامج جاهزة للتشغيل الفوري مع إمكانية تفصيل وبرمجة أنظمة مخصصة ودعم فني مباشر.",
  icons: {
    icon: [
      { url: "/favicon-circle.png?v=3", type: "image/png" },
      { url: "/favicon.png?v=3", type: "image/png" },
      { url: "/favicon.ico?v=3" },
    ],
    shortcut: "/favicon-circle.png?v=3",
    apple: "/favicon-circle.png?v=3",
  },
  keywords: [
    "مزايا للبرمجيات",
    "برنامج كاشير مصر",
    "برنامج حسابات ومخازن",
    "نظام نقاط البيع POS",
    "الفاتورة الإلكترونية والإيصال الإلكتروني",
    "برنامج ERP للمصانع والشركات",
    "شاشات كاشير سريعة",
    "كارت الصنف والباركود",
  ],
  authors: [{ name: "مزايا للبرمجيات" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={ibmPlexArabic.variable}>
      <head>
        <link rel="icon" href="/favicon-circle.png?v=3" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-circle.png?v=3" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/favicon-circle.png?v=3" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon-circle.png?v=3" />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-slate-900 font-arabic selection:bg-[#F2C12E]/30 selection:text-[#0A507A] flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
