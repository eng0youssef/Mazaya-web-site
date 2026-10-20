"use client";

import React, { useState } from "react";
import { 
  Play, 
  Youtube, 
  Clock, 
  Sparkles, 
  CheckCircle,
  ExternalLink
} from "lucide-react";
import { VIDEO_TUTORIALS, VideoTutorial } from "@/data/mazaya-data";
import VideoModal from "@/components/ui/VideoModal";

type FilterCategory = "all" | "sales" | "inventory" | "treasury" | "reports";

export default function VideoAcademySection() {
  const [activeTab, setActiveTab] = useState<FilterCategory>("all");
  const [selectedVideo, setSelectedVideo] = useState<VideoTutorial | null>(null);

  const filteredVideos = activeTab === "all"
    ? VIDEO_TUTORIALS
    : VIDEO_TUTORIALS.filter((v) => v.category === activeTab);

  return (
    <section id="video-academy" className="py-16 lg:py-24 bg-white relative border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F7FB] border border-[#0A507A]/15 shadow-soft">
            <Youtube className="w-4 h-4 text-rose-600" />
            <span className="text-xs font-bold text-[#0A507A]">
              شروحات فيديو تفصيلية على قناتنا الرسمية
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            اتفرج على السيستم بنفسك — مكتبة شروحات فيديو متكاملة
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            مش بنسيبك لوحدك بعد الشراء؛ جهزنالك فيديوهات شرح تفصيلية على قناتنا في يوتيوب لكل شاشة في البرنامج عشان تدرب نفسك وموظفينك بسهولة وفي أي وقت.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: "all", label: "الكل" },
            { id: "sales", label: "شرح المبيعات والكاشير" },
            { id: "inventory", label: "المخازن والجرد" },
            { id: "treasury", label: "الخزنة والحسابات" },
            { id: "reports", label: "الربط والتقارير" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as FilterCategory)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-[#0A507A] text-white shadow-soft"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group bg-[#F8FAFC] rounded-3xl border border-slate-200/90 shadow-soft hover:shadow-xl hover:border-[#0A507A]/40 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              {/* Video Thumbnail Simulator */}
              <div className="relative aspect-video bg-gradient-to-tr from-[#06324D] to-[#0A507A] p-4 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                
                {/* Duration Badge & Category Tag */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold">
                    {video.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/60 text-white text-[11px] font-mono">
                    <Clock className="w-3 h-3 text-[#F2C12E]" />
                    <span>{video.duration}</span>
                  </div>
                </div>

                {/* Center Glowing Play Button */}
                <div className="relative z-10 self-center my-auto">
                  <div className="w-14 h-14 rounded-full bg-[#F2C12E] text-slate-900 flex items-center justify-center shadow-gold group-hover:scale-115 transition-transform">
                    <Play className="w-6 h-6 fill-current ms-1" />
                  </div>
                </div>

                {/* Subtitle brand tag */}
                <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-300">
                  <span>مزايا للبرمجيات 🇪🇬</span>
                  <span className="text-[#F2C12E]">اضغط للمشاهدة الآن</span>
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#0A507A] transition-colors leading-snug mb-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-[#0A507A] font-bold">
                  <span>شاهد الشرح المباشر</span>
                  <span className="text-slate-400 group-hover:text-[#0A507A] group-hover:-translate-x-1 transition-transform">
                    ←
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe / YouTube Channel Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F0F7FB] border border-[#0A507A]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-rose-600 text-white flex items-center justify-center flex-shrink-0 shadow-soft">
              <Youtube className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">
                قناة مزايا للبرمجيات الرسمية على يوتيوب
              </h4>
              <p className="text-xs text-slate-600">
                ننشر دورياً فيديوهات تدريبية، نصائح لحماية المخازن، وتحديثات برامج نقاط البيع والـ ERP.
              </p>
            </div>
          </div>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs border border-slate-200 shadow-soft transition"
          >
            <span>اشترك في القناة</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>

      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          youtubeId={selectedVideo.youtubeId}
          title={selectedVideo.title}
        />
      )}
    </section>
  );
}
