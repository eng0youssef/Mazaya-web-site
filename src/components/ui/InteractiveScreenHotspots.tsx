"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import ImageLightboxModal from "./ImageLightboxModal";

interface HotspotData {
  id: number;
  title: string;
  desc: string;
  top: string;
  left: string;
  isBottom?: boolean;
  tooltipCustomStyle?: React.CSSProperties;
}

const HOTSPOTS: HotspotData[] = [
  {
    id: 1,
    title: "إدخال ذكي وفوري للأصناف",
    desc: "بحث سريع بالاسم أو الكود أو قارئ الباركود في جزء من الثانية، مع خيار إخفاء الأرصدة الصفرية تلقائياً.",
    top: "39%",
    left: "66%",
    isBottom: false,
  },
  {
    id: 2,
    title: "مرونة كاملة في السداد",
    desc: "بيع نقدي (كاش) أو آجل بضغطة زر، مع تحديد الخزينة المحصل عليها وقيمة المدفوع في نفس اللحظة.",
    top: "91%",
    left: "86%",
    isBottom: false,
    tooltipCustomStyle: { left: "-60px" },
  },
  {
    id: 3,
    title: "متابعة لحظية لمديونية العميل",
    desc: "بمجرد اختيار العميل يظهر رصيده الحالي فوراً أمام الكاشير مع إمكانية ربط الفاتورة بمندوب مبيعات محدد.",
    top: "19%",
    left: "28%",
    isBottom: false,
  },
  {
    id: 4,
    title: "تعدد المخازن وقوائم الأسعار",
    desc: "تحكم في البيع من أي مخزن، وبدّل بين شرائح الأسعار (جملة / نص جملة / مستهلك) مع كشف رصيد الصنف بكل المخازن.",
    top: "31%",
    left: "53%",
    isBottom: false,
  },
  {
    id: 5,
    title: "اختصارات سريعة للكاشير",
    desc: "دعم كامل لأزرار الكيبورد (F9 للطباعة، F10 للحفظ، F12 لفاتورة جديدة) مع إمكانية طباعة إذن صرف مخزني مستقل.",
    top: "6%",
    left: "73%",
    isBottom: true,
  },
  {
    id: 6,
    title: "حسابات دقيقة للخصم والإضافات",
    desc: "إمكانية تطبيق الخصم كنسبة مئوية (%) أو كمبلغ ثابت، مع حساب فوري للإجمالي وصافي الفاتورة النهائي.",
    top: "86%",
    left: "45%",
    isBottom: false,
  },
];

export default function InteractiveScreenHotspots() {
  const [activeHotspotId, setActiveHotspotId] = useState<number | null>(null);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close active tooltip when clicking outside
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setActiveHotspotId(null);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  // Developer helper tool: Log click coordinates on image
  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1);
    const y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1);
    console.log(`انسخ الإحداثيات دي للنقطة الجديدة -> style="top: ${y}%; left: ${x}%;"`);
  };

  return (
    <div className="interactive-showcase-container w-full py-6">
      <div ref={wrapperRef} className="screen-wrapper">
        {/* Real Screenshot */}
        <img
          src="/screenshots/mazaya-pos-invoice.png"
          alt="شاشة فاتورة المبيعات — نظام مزايا ماكس"
          onClick={handleImageClick}
          className="w-full h-auto block select-none"
        />

        {/* 6 Hotspots exactly as requested */}
        {HOTSPOTS.map((h) => {
          const isActive = activeHotspotId === h.id;

          return (
            <div
              key={h.id}
              style={{ top: h.top, left: h.left }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveHotspotId((prev) => (prev === h.id ? null : h.id));
              }}
              className={`hotspot ${h.isBottom ? "tooltip-bottom" : ""} ${
                isActive ? "active" : ""
              }`}
            >
              {h.id}

              <div
                className="tooltip-card"
                style={h.tooltipCustomStyle || {}}
              >
                <strong>{h.title}</strong>
                {h.desc}
              </div>
            </div>
          );
        })}

        {/* Floating Zoom Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsZoomOpen(true);
          }}
          className="absolute bottom-3 start-3 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/85 hover:bg-slate-900 text-white text-xs font-bold border border-white/20 shadow-lg backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
          title="اضغط لتكبير الشاشة بدقة كاملة"
        >
          <ZoomIn className="w-3.5 h-3.5 text-[#F2C12E]" />
          <span>تكبير الشاشة</span>
        </button>
      </div>

      {/* Lightbox Modal for Full-Resolution Viewing */}
      <ImageLightboxModal
        isOpen={isZoomOpen}
        onClose={() => setIsZoomOpen(false)}
        imageSrc="/screenshots/mazaya-pos-invoice.png"
        imageAlt="شاشة فاتورة البيع ونقاط البيع (POS) — نظام مزايا ماكس"
        title="شاشة فاتورة البيع ونقاط البيع (POS) — نظام مزايا ماكس"
        subtitle="معاينة عالية الدقة لكافة حقول الفاتورة، الباركود، وطرق السداد"
      />

      {/* Scoped CSS implementing the exact design and animations requested by user */}
      <style jsx>{`
        .interactive-showcase-container {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        .screen-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
          border: 3px solid #ffffff;
          background: #e8f5e9;
        }

        .screen-wrapper img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 9px;
        }

        /* Hotspot Pin */
        .hotspot {
          position: absolute;
          width: 26px;
          height: 26px;
          background: #ff3b30;
          color: #fff;
          border: 2px solid #fff;
          border-radius: 50%;
          cursor: pointer;
          transform: translate(-50%, -50%);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: bold;
          box-shadow: 0 4px 10px rgba(255, 59, 48, 0.5);
          transition: transform 0.3s ease, background 0.3s ease;
          user-select: none;
        }

        .hotspot:hover,
        .hotspot.active {
          background: #007aff;
          transform: translate(-50%, -50%) scale(1.2);
          z-index: 30;
        }

        /* Continuous Pulse Animation */
        .hotspot::before,
        .hotspot::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(255, 59, 48, 0.6);
          transform: translate(-50%, -50%);
          z-index: -1;
          animation: pulse-ring 2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        .hotspot::after {
          animation-delay: 0.6s;
        }

        .hotspot:hover::before,
        .hotspot:hover::after,
        .hotspot.active::before,
        .hotspot.active::after {
          background: rgba(0, 122, 255, 0.6);
        }

        @keyframes pulse-ring {
          0% {
            width: 100%;
            height: 100%;
            opacity: 0.9;
          }
          100% {
            width: 280%;
            height: 280%;
            opacity: 0;
          }
        }

        /* Tooltip Card */
        .tooltip-card {
          position: absolute;
          bottom: 145%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          width: 260px;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(6px);
          color: #ffffff;
          padding: 14px 16px;
          border-radius: 10px;
          font-size: 13.5px;
          line-height: 1.6;
          text-align: right;
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
          opacity: 0;
          visibility: hidden;
          transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
          pointer-events: none;
          border-right: 4px solid #38bdf8;
          z-index: 40;
        }

        .tooltip-card strong {
          display: block;
          color: #38bdf8;
          font-size: 14.5px;
          margin-bottom: 5px;
        }

        /* Small Arrow below tooltip */
        .tooltip-card::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 7px;
          border-style: solid;
          border-color: rgba(15, 23, 42, 0.95) transparent transparent transparent;
        }

        /* Show on hover or active (mobile click) */
        .hotspot:hover .tooltip-card,
        .hotspot.active .tooltip-card {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        /* Adjust direction for points near top */
        .hotspot.tooltip-bottom .tooltip-card {
          bottom: auto;
          top: 145%;
        }

        .hotspot.tooltip-bottom .tooltip-card::after {
          top: auto;
          bottom: 100%;
          border-color: transparent transparent rgba(15, 23, 42, 0.95) transparent;
        }

        /* Mobile responsiveness */
        @media (max-width: 600px) {
          .hotspot {
            width: 20px;
            height: 20px;
            font-size: 10px;
          }
          .tooltip-card {
            width: 190px;
            font-size: 12px;
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
}
