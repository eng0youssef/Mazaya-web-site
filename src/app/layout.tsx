import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/sections/FloatingWhatsApp";
import AOSInit from "@/components/ui/AOSInit";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  applicationName: "مزايا للبرمجيات",
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
    "شركة مزايا للبرمجيات",
    "مزايا للبرمجيات",
    "شركة مزايا ماكس",
    "برنامج كاشير مزايا",
    "مزايا ماكس",
    "برنامج حسابات ومخازن",
    "برنامج كاشير ومخازن في مصر",
    "نظام نقاط البيع POS",
    "الفاتورة الإلكترونية والإيصال الإلكتروني",
    "برنامج الفاتورة الإلكترونية مصلحة الضرائب المصرية",
    "برنامج ERP للمصانع والشركات",
    "برنامج حسابات للمحلات",
    "تحميل برنامج كاشير مجاني",
    "برنامج مبيعات ومشتريات",
    "شاشات كاشير سريعة بالباركود",
    "كارت الصنف وجرد المخازن",
    "برنامج إدارة المحلات والمعارض",
    "برنامج حسابات مصانع زجاج",
    "مزايا جلاس",
    "برنامج كاشير مطاعم وكافيهات",
    "مزايا ريستورانت",
    "برنامج إدارة أقساط المدارس",
    "مزايا سكول",
    "برنامج معارض الموتوسيكلات والسيارات",
    "مزايا موتو",
    "برنامج إدارة الجيم والصالات الرياضية",
    "مزايا جيم",
    "برنامج إدارة القرى والمنتجعات",
    "مزايا للمنتجعات",
    "برنامج إدارة التطوير العقاري",
    "مزايا ريلتي",
    "هيئة الزكاة والضريبة والجمارك ZATCA",
  ],
  authors: [{ name: "مزايا للبرمجيات" }],
  verification: {
    google: "google0d638f691c48868a",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "مزايا للبرمجيات | أنظمة الكاشير وإدارة المخازن والـ ERP المتكاملة",
    description: "المنظومة البرمجية المتكاملة لإدارة المبيعات، المخازن، الخزينة، والحسابات العامة. برامج جاهزة فوراً ومتوافقة مع الفاتورة الإلكترونية وهيئة الزكاة ZATCA.",
    url: SITE_URL,
    siteName: "مزايا للبرمجيات",
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

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "مزايا للبرمجيات",
  "alternateName": ["Mazaya Max", "مزايا ماكس", "شركة مزايا للبرمجيات"],
  "url": "https://mazaya-max.vercel.app/"
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
      "email": "info@mazaya-soft.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "EG",
        "addressRegion": "Cairo",
        "description": "جمهورية مصر العربية والمملكة العربية السعودية"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "10:00",
          "closes": "19:00"
        }
      ],
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
        <meta property="og:site_name" content="مزايا للبرمجيات" />
        <meta name="application-name" content="مزايا للبرمجيات" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-slate-900 font-arabic selection:bg-[#F2C12E]/30 selection:text-[#0A507A] flex flex-col antialiased">
        <AOSInit />
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
