"use client";

import { useEffect, useRef } from "react";

type VideoBackgroundProps = {
  src: string;
  poster: string;
};

export default function VideoBackground({ src, poster }: VideoBackgroundProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const wasAtZeroRef = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    const video = videoRef.current;
    const overlay = overlayRef.current;
    const hero = document.getElementById("hero");
    if (!root || !video || !overlay || !hero) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const deactivate = () => {
      root.style.visibility = "hidden";
      root.style.opacity = "0";
    };

    const activate = () => {
      root.style.visibility = "visible";
      root.style.opacity = "1";
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const t = entry.intersectionRatio;
        const eased = t * t * (3 - 2 * t);

        if (t === 0) {
          if (!wasAtZeroRef.current) {
            wasAtZeroRef.current = true;
            video.pause();
          }
          // Tear down the whole fixed system so it cannot cover later sections.
          deactivate();
          return;
        }

        activate();

        if (!prefersReduced) {
          overlay.style.opacity = String(1 - eased);
        }

        if (t > 0.05 && wasAtZeroRef.current) {
          wasAtZeroRef.current = false;
          video.currentTime = 0;
          void video.play();
        }
      },
      { threshold: Array.from({ length: 11 }, (_, i) => i / 10) },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-0 pointer-events-none bg-background"
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
        className="absolute inset-0 bg-background"
        style={{ opacity: 0 }}
      />
    </div>
  );
}
