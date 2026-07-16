"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

/**
 * Bottom-center hero cue. Opacity tracks scroll through the hero:
 * fully visible at rest, fades out as the user scrolls down, returns on scroll up.
 */
export default function HeroScrollHint() {
  const cueRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    const cue = cueRef.current;
    if (!cue) {
      return;
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    gsap.set(cue, { opacity: 1, force3D: true });

    if (prefersReduced) {
      return;
    }

    const syncOpacity = () => {
      const hero = document.getElementById("hero");
      if (!hero) {
        return;
      }

      const heroHeight = hero.offsetHeight || window.innerHeight;
      const fadeDistance = heroHeight * 0.45;
      const progress = gsap.utils.clamp(0, 1, window.scrollY / fadeDistance);
      const eased = progress * progress * (3 - 2 * progress);

      gsap.set(cue, { opacity: 1 - eased });
    };

    syncOpacity();
    window.addEventListener("scroll", syncOpacity, { passive: true });
    window.addEventListener("resize", syncOpacity);

    return () => {
      window.removeEventListener("scroll", syncOpacity);
      window.removeEventListener("resize", syncOpacity);
    };
  }, []);

  return (
    <p
      ref={cueRef}
      className="pointer-events-none text-[0.65rem] font-medium tracking-[0.28em] text-muted uppercase sm:text-xs sm:tracking-[0.32em]"
      aria-hidden="true"
    >
      scroll to initialize
    </p>
  );
}
