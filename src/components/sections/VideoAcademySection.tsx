"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { 
  Play, 
  Youtube, 
  Clock, 
  Sparkles, 
  Search, 
  ExternalLink,
  Tag,
  Dumbbell,
  CheckCircle2,
  FolderOpen,
  ArrowLeft
} from "lucide-react";
import { 
  VIDEO_TUTORIALS, 
  VIDEO_CATEGORIES, 
  VideoTutorial, 
  VideoCategory 
} from "@/data/mazaya-data";
import VideoModal from "@/components/ui/VideoModal";

export default function VideoAcademySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<VideoTutorial | null>(null);

  // Filter videos by category and search query
  const filteredVideos = useMemo(() => {
    return VIDEO_TUTORIALS.filter((video) => {
      const matchesCategory = 
        activeCategory === "all" || video.category === activeCategory;
      
      const matchesSearch = 
        searchQuery.trim() === "" ||
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (video.code && video.code.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="video-academy" className="py-16 lg:py-24 bg-white relative border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F7FB] border border-[#0A507A]/15 shadow-soft">
            <Youtube className="w-4 h-4 text-rose-600" />
            <span className="text-xs font-bold text-[#0A507A]">
              أكاديمية تدريب وشروحات مزايا الرسمية
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            اتفرج على السيستم بنفسك — مكتبة شروحات فيديو تفصيلية
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            مش بنسيبك لوحدك بعد الشراء؛ جهزنالك مكتبة فيديو كاملة مقسمة لكل شاشة وخطوة في <strong>مزايا ماكس</strong> ونظام <strong>مزايا جيم</strong> عشان تدرب نفسك وموظفينك بكل سهولة.
          </p>
        </div>

        {/* Search Bar & Playlist Quick Link */}
        <div className="max-w-2xl mx-auto mb-8 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن أي شاشة أو موضوع (مثال: الباركود، المخازن، التقسيط، الخزينة)..."
              className="w-full ps-11 pe-4 py-3 rounded-2xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0A507A] focus:ring-2 focus:ring-[#0A507A]/10 text-slate-800 placeholder-slate-400 bg-[#F8FAFC]"
            />
            <Search className="w-4 h-4 text-slate-400 absolute start-4 top-1/2 -translate-y-1/2" />
          </div>

          <a
            href="https://youtube.com/playlist?list=PLWpefE81eeVnRxdyuefLwACAH4bdOhXX6"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs border border-rose-200 transition shadow-soft flex-shrink-0"
          >
            <Youtube className="w-4 h-4 text-rose-600" />
            <span>البلاي ليست كاملة على يوتيوب</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 text-xs max-w-5xl mx-auto px-2">
          {VIDEO_CATEGORIES.map((tab) => {
            const count = tab.id === "all" 
              ? VIDEO_TUTORIALS.length 
              : VIDEO_TUTORIALS.filter((v) => v.category === tab.id).length;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeCategory === tab.id
                    ? "bg-[#0A507A] text-white shadow-soft"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  activeCategory === tab.id
                    ? "bg-white/20 text-white"
                    : "bg-slate-200/80 text-slate-600"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>


        {/* Video Cards Grid */}
        {filteredVideos.length === 0 ? (
          <div className="py-16 text-center space-y-3">
            <FolderOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h4 className="font-bold text-slate-700">لم يتم العثور على فيديوهات مطابقة</h4>
            <p className="text-xs text-slate-500">جرب البحث بكلمة أخرى أو اختر تصنيفاً مختلفاً.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="group bg-[#F8FAFC] rounded-3xl border border-slate-200/90 shadow-soft hover:shadow-xl hover:border-[#0A507A]/40 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                {/* Video Thumbnail with Real YouTube HQ Image */}
                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                  <Image
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Top Overlay Badges */}
                  <div className="absolute top-3 start-3 end-3 flex items-center justify-between z-10 pointer-events-none">
                    {video.code ? (
                      <span className="px-2.5 py-0.5 rounded-lg bg-[#0A507A]/90 text-white font-mono font-bold text-xs backdrop-blur-sm shadow-xs">
                        {video.code}
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-lg bg-[#F2C12E] text-slate-900 font-bold text-[11px] shadow-xs">
                        فيديو مخصص
                      </span>
                    )}

                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-black/70 text-white text-[11px] font-mono backdrop-blur-sm">
                      <Clock className="w-3 h-3 text-[#F2C12E]" />
                      <span>{video.duration}</span>
                    </div>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <div className="w-13 h-13 rounded-full bg-[#F2C12E] text-slate-900 flex items-center justify-center shadow-gold group-hover:scale-115 transition-transform">
                      <Play className="w-6 h-6 fill-current ms-0.5" />
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-semibold text-[#0A507A] bg-[#0A507A]/10 px-2 py-0.5 rounded-md">
                        {video.categoryLabel}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#0A507A] transition-colors leading-snug line-clamp-2">
                      {video.title}
                    </h3>

                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-2">
                      {video.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-[#0A507A]">
                    <span>تشغيل الفيديو الآن</span>
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

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
