"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { clearDedupePrefix, trackPageView } from "@/analytics/track";

/**
 * SPA-aware page_view for App Router.
 * Fires once per pathname (+ search) change; clears section_view dedupe on route change.
 */
export default function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastPathRef = useRef<string | null>(null);

  useEffect(() => {
    const search = searchParams?.toString();
    const path = search ? `${pathname}?${search}` : pathname;

    if (lastPathRef.current === path) return;

    // New route: allow section_view again for this document context
    if (lastPathRef.current !== null) {
      clearDedupePrefix("section_view:");
      clearDedupePrefix("generate_lead:");
    }

    lastPathRef.current = path;
    trackPageView(pathname, document.title);
  }, [pathname, searchParams]);

  return null;
}
