"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { setLenisInstance } from "@/components/lenisBridge";
import "lenis/dist/lenis.css";

/**
 * Root Lenis smooth scroll (wheel). No GSAP.
 * Skips init when prefers-reduced-motion is set.
 * Touch stays mostly native (syncTouch: false).
 */
export default function SmoothScroll() {
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let lenis: Lenis | null = null;

    const mount = () => {
      if (motionQuery.matches) {
        lenis?.destroy();
        lenis = null;
        setLenisInstance(null);
        return;
      }

      if (lenis) return;

      lenis = new Lenis({
        autoRaf: true,
        lerp: 0.085,
        smoothWheel: true,
        syncTouch: false,
        touchMultiplier: 1,
        wheelMultiplier: 0.92,
        anchors: false,
        autoResize: true,
      });

      setLenisInstance(lenis);
    };

    mount();

    const onMotionChange = () => {
      if (motionQuery.matches) {
        lenis?.destroy();
        lenis = null;
        setLenisInstance(null);
      } else {
        mount();
      }
    };

    motionQuery.addEventListener("change", onMotionChange);

    return () => {
      motionQuery.removeEventListener("change", onMotionChange);
      lenis?.destroy();
      lenis = null;
      setLenisInstance(null);
    };
  }, []);

  return null;
}
