"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Download, ExternalLink } from "lucide-react";

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
}

export default function ImageLightboxModal({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title,
  subtitle,
}: ImageLightboxModalProps) {
  // Close on Escape key press and prevent background scrolling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6"
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full bg-slate-900 rounded-3xl p-3 sm:p-5 border border-slate-700 shadow-2xl flex flex-col max-h-[95vh]"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-800 text-white flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#0A507A] text-[#F2C12E] flex items-center justify-center shadow-soft">
                  <ZoomIn className="w-4 h-4 text-[#F2C12E]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-white">
                    {title}
                  </h3>
                  {subtitle && (
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                      {subtitle}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                  title="إغلاق (Esc)"
                  aria-label="إغلاق"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* High-Resolution Image Viewport */}
            <div className="relative flex-1 overflow-auto rounded-2xl bg-slate-950 flex items-center justify-center p-1 sm:p-3">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-xl select-none shadow-2xl"
              />
            </div>

            {/* Modal Footer Tip */}
            <div className="pt-2.5 text-center text-[11px] text-slate-400 flex items-center justify-center gap-2 flex-shrink-0">
              <span>💡 يمكنك النقر في أي مكان خارج النافذة أو الضغط على زر Esc للإغلاق</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
