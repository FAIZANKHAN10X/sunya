"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { smoothScrollToId } from "@/components/lenisBridge";

/**
 * Handles /#section deep links after navigation from other routes.
 * Uses Lenis when available so motion matches in-page nav.
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
      smoothScrollToId(hash, prefersReduced);
    }, 120);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
