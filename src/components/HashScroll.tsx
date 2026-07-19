"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Handles /#section deep links after navigation from other routes.
 * Homepage-only; no-ops when the hash target is missing.
 */
export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Wait for layout / loading overlay so offset is correct.
    const timer = window.setTimeout(() => {
      const el = document.getElementById(hash);
      if (!el) return;
      el.scrollIntoView({
        behavior: prefersReduced ? "auto" : "smooth",
        block: "start",
      });
    }, 80);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
