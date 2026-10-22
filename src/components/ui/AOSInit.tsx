"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });

    // Refresh on DOM mutations/hydration
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
