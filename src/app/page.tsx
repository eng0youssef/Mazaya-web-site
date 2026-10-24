import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import SystemsBentoGrid from "@/components/sections/SystemsBentoGrid";
import ZigZagShowcase from "@/components/sections/ZigZagShowcase";
import ReadyVsCustomSection from "@/components/sections/ReadyVsCustomSection";
import SupportHubSection from "@/components/sections/SupportHubSection";
import FaqAccordion from "@/components/sections/FaqAccordion";
import LeadCaptureSection from "@/components/sections/LeadCaptureSection";
import { FAQ_ITEMS } from "@/data/mazaya-data";

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <div className="w-full flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <SystemsBentoGrid />
      <ZigZagShowcase />
      <ReadyVsCustomSection />
      <SupportHubSection />
      <FaqAccordion />
      <LeadCaptureSection />
    </div>
  );
}
