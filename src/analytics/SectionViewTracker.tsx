"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackSectionView } from "@/analytics/track";

type SectionDef = {
  id: string;
  name: string;
  index: number;
};

/** Homepage journey sections (id must match DOM). */
const HOME_SECTIONS: SectionDef[] = [
  { id: "hero", name: "Hero", index: 1 },
  { id: "introduction", name: "Introduction", index: 2 },
  { id: "presence", name: "Media gallery", index: 3 },
  { id: "beliefs", name: "Beliefs", index: 4 },
  { id: "framework", name: "Framework", index: 5 },
  { id: "notes", name: "Notes", index: 6 },
  { id: "community", name: "Community", index: 7 },
  { id: "experiences", name: "Experiences", index: 8 },
  { id: "stories", name: "Stories", index: 9 },
  { id: "begin", name: "Begin", index: 10 },
  { id: "newsletter", name: "Newsletter", index: 11 },
];

const CONTACT_SECTIONS: SectionDef[] = [
  { id: "contact", name: "Contact", index: 1 },
];

/**
 * Fires section_view once per section per page load when ~50% visible.
 * Works with Lenis (uses IntersectionObserver, not scroll math).
 */
export default function SectionViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const sections =
      pathname === "/"
        ? HOME_SECTIONS
        : pathname === "/contact"
          ? CONTACT_SECTIONS
          : [];

    if (sections.length === 0) return;

    const elements: Element[] = [];
    for (const def of sections) {
      const el = document.getElementById(def.id);
      if (el) {
        el.setAttribute("data-section-name", def.name);
        el.setAttribute("data-section-index", String(def.index));
        elements.push(el);
      }
    }

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (entry.intersectionRatio < 0.45) continue;

          const target = entry.target as HTMLElement;
          const sectionId = target.id;
          const sectionName =
            target.getAttribute("data-section-name") || sectionId;
          const sectionIndex = Number(
            target.getAttribute("data-section-index") || "0",
          );

          trackSectionView({
            section_id: sectionId,
            section_name: sectionName,
            section_index: sectionIndex,
            page_path: pathname,
          });
        }
      },
      {
        threshold: [0, 0.45, 0.5, 0.75, 1],
        // Account for fixed header
        rootMargin: "-10% 0px -10% 0px",
      },
    );

    for (const el of elements) observer.observe(el);

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
