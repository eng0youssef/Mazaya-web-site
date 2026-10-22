"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowLeft, Clock } from "lucide-react";
import { VideoTutorial } from "@/data/mazaya-data";
import VideoModal from "@/components/ui/VideoModal";

interface SystemRelatedVideosProps {
  moduleTitle: string;
  videos: VideoTutorial[];
}

export default function SystemRelatedVideos({
  moduleTitle,
  videos,
}: SystemRelatedVideosProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoTutorial | null>(null);

  return (
    <section className="py-16 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              شروحات فيديو لكيفية استخدام {moduleTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              فيديوهات توضيحية لتدريب فريق عملك على تشغيل السيستم بكل بساطة.
            </p>
          </div>
          <Link
            href="/videos"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A507A] hover:underline"
          >
            <span>مشاهدة كل الفيديوهات</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>

        {videos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="group bg-[#F8FAFC] rounded-2xl border border-slate-200 overflow-hidden shadow-soft hover:shadow-xl hover:border-[#0A507A]/40 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                  <Image
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#F2C12E] text-slate-900 flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ms-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 end-2 px-2 py-0.5 rounded bg-black/70 text-white text-[10px] font-mono flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5 text-[#F2C12E]" />
                    <span>{video.duration}</span>
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-[#0A507A] transition-colors line-clamp-2">
                      {video.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#0A507A]">
                    <span>تشغيل الفيديو</span>
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 sm:p-10 rounded-3xl bg-[#F0F7FB] border border-[#0A507A]/15 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#0A507A] flex items-center justify-center mx-auto shadow-soft">
              <Play className="w-6 h-6 text-[#F2C12E]" />
            </div>
            <h4 className="font-bold text-base sm:text-lg text-slate-800">
              شروحات فيديو نظام {moduleTitle} جاري تجهيزها وتسجيلها حالياً
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              مهندسو الدعم الفني في مزايا جاهزون لتقديم جلسة تدريب وشرح مباشر (عن بُعد أو حضورياً) لك ولموظفيك لمعاينة النظام وتجربته فورياً.
            </p>
            <div className="pt-2">
              <Link
                href="/#lead-capture"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0A507A] hover:bg-[#06324D] text-white font-bold text-xs shadow-soft transition"
              >
                <span>طلب جلسة تدريب وديمو مباشر</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

      </div>

      {/* Video Modal */}
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
