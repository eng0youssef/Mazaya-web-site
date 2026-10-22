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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mazaya-max.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    "برنامج إدارة المحلات",
    "برنامج حسابات زجاج",
    "برنامج كاشير مطاعم",
  ],
  authors: [{ name: "مزايا للبرمجيات" }],
  openGraph: {
    title: "مزايا للبرمجيات | أنظمة الكاشير وإدارة المخازن والـ ERP المتكاملة",
    description: "المنظومة البرمجية المتكاملة لإدارة المبيعات، المخازن، الخزينة، والحسابات العامة. برامج جاهزة فوراً ومتوافقة مع الفاتورة الإلكترونية وهيئة الزكاة ZATCA.",
    url: SITE_URL,
    siteName: "مزايا للبرمجيات (Mazaya for programming)",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "مزايا للبرمجيات — برامج كاشير ومخازن وحسابات ERP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مزايا للبرمجيات | أنظمة الكاشير وإدارة المخازن والـ ERP المتكاملة",
    description: "المنظومة البرمجية المتكاملة لإدارة المبيعات والمخازن والـ ERP في مصر والسعودية.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": "شركة مزايا للبرمجيات",
      "alternateName": "Mazaya for programming",
      "url": SITE_URL,
      "logo": `${SITE_URL}/logo-clean.png`,
      "description": "حلول برمجيات الكاشير، وإدارة المخازن، والأنظمة المحاسبية والـ ERP المتكاملة في مصر والمملكة العربية السعودية.",
      "telephone": "+201000503370",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+201000503370",
          "contactType": "sales",
          "areaServed": ["EG", "SA"],
          "availableLanguage": ["Arabic", "English"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+201026535655",
          "contactType": "technical support",
          "areaServed": ["EG", "SA"],
          "availableLanguage": ["Arabic", "English"]
        }
      ]
    },
    {
      "@type": "SoftwareApplication",
      "name": "مزايا ماكس ERP",
      "operatingSystem": "Windows 10, Windows 11, Windows Server",
      "applicationCategory": "BusinessApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EGP",
        "description": "نسخة تجريبية وديمو مجاني"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "120"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={ibmPlexArabic.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
