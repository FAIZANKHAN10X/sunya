"use client";

import { Suspense } from "react";
import PageViewTracker from "@/analytics/PageViewTracker";
import SectionViewTracker from "@/analytics/SectionViewTracker";

/**
 * Client analytics wiring: SPA page_view + section_view observers.
 */
export default function AnalyticsRoot() {
  return (
    <>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
      <SectionViewTracker />
    </>
  );
}
