"use client";

import { useEffect, useRef } from "react";

export default function HeroScrollHint() {
  const cueRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const cue = cueRef.current;
    const hero = document.getElementById("hero");
    if (!cue || !hero) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const t = entry.intersectionRatio;
        const eased = t * t * (3 - 2 * t);
        cue.style.opacity = String(eased);
      },
      { threshold: Array.from({ length: 11 }, (_, i) => i / 10) },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <p
      ref={cueRef}
      className="hero-scroll-hint pointer-events-none text-[0.65rem] font-medium tracking-[0.28em] text-muted uppercase sm:text-xs sm:tracking-[0.32em]"
      aria-hidden="true"
    >
      Scroll to begin
    </p>
  );
}
