"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  duration = 3200,
  delay = 250,
  className = "",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState<string>(value);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el || hasAnimatedRef.current) return;

    // Check if value contains a number
    const match = value.match(/^([^\d]*)(\d[\d,]*)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1];
    const targetNum = parseInt(match[2].replace(/,/g, ""), 10);
    const suffix = match[3];

    // Set initial display to 0 with proper prefix and suffix
    setDisplayValue(`${prefix}0${suffix}`);

    let frameId: number | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          observer.disconnect();

          timeoutId = setTimeout(() => {
            const startTime = performance.now();

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Smooth ease-out quad curve so the eyes clearly see every number rolling up
              const easeOut = progress * (2 - progress);
              const currentNum = Math.round(targetNum * easeOut);

              // Format with commas if target originally had commas
              const formatted = match[2].includes(",")
                ? currentNum.toLocaleString("en-US")
                : currentNum.toString();

              setDisplayValue(`${prefix}${formatted}${suffix}`);

              if (progress < 1) {
                frameId = requestAnimationFrame(animate);
              } else {
                setDisplayValue(value);
              }
            };

            frameId = requestAnimationFrame(animate);
          }, delay);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [value, duration, delay]);

  return (
    <span ref={elementRef} className={className}>
      {displayValue}
    </span>
  );
}
