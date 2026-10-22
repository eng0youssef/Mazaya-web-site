"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut } from "lucide-react";

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
  const [mounted, setMounted] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset scale whenever modal is opened
  useEffect(() => {
    if (isOpen) {
      setScale(1);
    }
  }, [isOpen]);

  // Close on Escape key press, handle +/- keyboard shortcuts, and prevent background scrolling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "+" || e.key === "=") {
        setScale((prev) => Math.min(prev + 0.25, 3));
      } else if (e.key === "-") {
        setScale((prev) => Math.max(prev - 0.25, 0.6));
      } else if (e.key === "0") {
        setScale(1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.6));
  const handleResetZoom = () => setScale(1);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[99999] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 select-none"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop click listener to close */}
          <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

          {/* Modal Container: strictly bounded to 86vh so it never touches the screen edges */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-6xl h-[86vh] max-h-[86vh] bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-700/80 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Modal Header */}
            <div className="h-14 sm:h-16 px-4 sm:px-6 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between flex-shrink-0 text-white">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-[#0A507A] text-[#F2C12E] flex items-center justify-center shadow-soft flex-shrink-0">
                  <ZoomIn className="w-4 h-4 text-[#F2C12E]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-xs sm:text-sm text-white truncate">
                    {title}
                  </h3>
                  {subtitle && (
                    <p className="text-[11px] text-slate-400 truncate">
                      {subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center gap-2 flex-shrink-0">
                {/* Zoom Controls */}
                <div className="flex items-center gap-1 bg-slate-800/90 rounded-xl p-1 border border-slate-700/80">
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    className="w-7 h-7 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition cursor-pointer"
                    title="تصغير (-)"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleResetZoom}
                    className="px-2 h-7 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center text-xs font-mono font-medium transition cursor-pointer"
                    title="إعادة ضبط الحجم لملاءمة الشاشة (0)"
                  >
                    {Math.round(scale * 100)}%
                  </button>
                  <button
                    type="button"
                    onClick={handleZoomIn}
                    className="w-7 h-7 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition cursor-pointer"
                    title="تكبير (+)"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-rose-900/40 text-slate-300 hover:text-rose-300 transition cursor-pointer"
                  title="إغلاق (Esc)"
                  aria-label="إغلاق"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Viewport: Guaranteed 100% Fit & Scrollable when Zoomed */}
            <div className="flex-1 min-h-0 w-full relative bg-slate-950/80 flex items-center justify-center p-3 sm:p-5 overflow-auto">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-auto h-auto object-contain rounded-xl select-none shadow-2xl transition-transform duration-150"
                style={{
                  maxHeight: "calc(82vh - 120px)",
                  maxWidth: "100%",
                  transform: `scale(${scale})`,
                  transformOrigin: "center center",
                }}
                draggable={false}
              />
            </div>

            {/* Modal Slim Footer */}
            <div className="h-8 sm:h-9 px-4 sm:px-6 bg-slate-900/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 flex-shrink-0 select-none">
              <span className="truncate">
                💡 الصورة معروضة بالكامل لتناسب شاشتك — استخدم (+) و (-) للتكبير
              </span>
              <span className="hidden sm:inline flex-shrink-0 text-slate-400">
                اضغط <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-white font-mono text-[10px]">Esc</kbd> أو انقر بالخارج للإغلاق
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
