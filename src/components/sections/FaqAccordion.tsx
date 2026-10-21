"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { FAQ_ITEMS } from "@/data/mazaya-data";

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white relative border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F7FB] border border-[#0A507A]/15 shadow-soft">
            <HelpCircle className="w-4 h-4 text-[#F2C12E]" />
            <span className="text-xs font-bold text-[#0A507A]">
              إجابات واضحة ومباشرة
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            الأسئلة الشائعة وإجابات كل ما يدور في ذهنك
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            جمعنا لك أكثر الأسئلة التي يطرحها علينا التجار وأصحاب الأعمال في السوق المصري والسعودي قبل اختيار برنامج الكاشير والمخازن.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#F8FAFC] border-[#0A507A]/40 shadow-soft"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-5 text-start flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#0A507A] text-white rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-10 p-5 rounded-2xl bg-[#F0F7FB] border border-[#0A507A]/15 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-slate-800 text-xs sm:text-sm font-semibold">
            <MessageSquare className="w-5 h-5 text-[#0A507A]" />
            <span>عندك سؤال تاني مش موجود هنا؟ فريق المبيعات متاح للإجابة فوراً.</span>
          </div>
          <a
            href="#lead-capture"
            className="px-4 py-2 rounded-xl bg-[#0A507A] hover:bg-[#06324D] text-white font-bold text-xs transition"
          >
            تحدث معنا الآن
          </a>
        </div>

      </div>
    </section>
  );
}
