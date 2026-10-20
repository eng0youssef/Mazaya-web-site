import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import SystemsBentoGrid from "@/components/sections/SystemsBentoGrid";
import ZigZagShowcase from "@/components/sections/ZigZagShowcase";
import ReadyVsCustomSection from "@/components/sections/ReadyVsCustomSection";
import VideoAcademySection from "@/components/sections/VideoAcademySection";
import SupportHubSection from "@/components/sections/SupportHubSection";
import FaqAccordion from "@/components/sections/FaqAccordion";
import LeadCaptureSection from "@/components/sections/LeadCaptureSection";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <SystemsBentoGrid />
      <ZigZagShowcase />
      <ReadyVsCustomSection />
      <VideoAcademySection />
      <SupportHubSection />
      <FaqAccordion />
      <LeadCaptureSection />
    </div>
  );
}
