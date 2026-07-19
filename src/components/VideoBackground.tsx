"use client";

import { useEffect, useRef } from "react";

type VideoBackgroundProps = {
  src: string;
  poster: string;
};

/** Hero ratio below this: begin dissolving the black sheet into the next section. */
const HANDOFF_RATIO = 0.28;
const HIDE_MS = 500;

export default function VideoBackground({ src, poster }: VideoBackgroundProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const wasAtZeroRef = useRef(false);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const video = videoRef.current;
    const overlay = overlayRef.current;
    const hero = document.getElementById("hero");
    if (!root || !video || !overlay || !hero) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const clearHideTimer = () => {
      if (hideTimerRef.current !== null) {
        clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
    };

    const deactivate = () => {
      root.style.opacity = "0";
      clearHideTimer();
      // Let opacity transition finish before removing from paint.
      hideTimerRef.current = setTimeout(() => {
        if (wasAtZeroRef.current) {
          root.style.visibility = "hidden";
        }
      }, prefersReduced ? 0 : HIDE_MS);
    };

    const activate = () => {
      clearHideTimer();
      root.style.visibility = "visible";
    };

    const smoothstep = (t: number) => t * t * (3 - 2 * t);

    const observer = new IntersectionObserver(
      ([entry]) => {
        const t = entry.intersectionRatio;

        if (t === 0) {
          if (!wasAtZeroRef.current) {
            wasAtZeroRef.current = true;
            video.pause();
          }
          if (!prefersReduced) {
            overlay.style.opacity = "1";
          }
          deactivate();
          return;
        }

        activate();

        if (prefersReduced) {
          root.style.opacity = "1";
          overlay.style.opacity = "0";
        } else {
          // Phase A: video → black as the Hero leaves.
          overlay.style.opacity = String(1 - smoothstep(t));

          // Phase B: dissolve the black sheet so the next section eases in (no hard cut).
          const handoff = Math.min(1, t / HANDOFF_RATIO);
          root.style.opacity = String(smoothstep(handoff));
        }

        if (t > 0.05 && wasAtZeroRef.current) {
          wasAtZeroRef.current = false;
          video.currentTime = 0;
          void video.play();
        }
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i / 20) },
    );

    observer.observe(hero);
    return () => {
      observer.disconnect();
      clearHideTimer();
    };
  }, []);

  return (
    // Use top/left + h-svh (not inset-0). When the nav opens, SiteShell applies
    // transform to the page surface and traps position:fixed; inset-0 would then
    // stretch this layer to the full page height and object-cover would zoom in.
    <div
      ref={rootRef}
      className="pointer-events-none fixed top-0 left-0 z-0 h-svh w-full bg-background transition-[opacity,visibility] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover object-center"
        src={src}
        poster={poster}
        preload="metadata"
        muted
        playsInline
        autoPlay
        loop
      />
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-background transition-opacity duration-150 ease-linear motion-reduce:transition-none"
        style={{ opacity: 0 }}
      />
    </div>
  );
}
