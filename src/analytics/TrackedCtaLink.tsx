"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackCtaClick } from "@/analytics/track";

type TrackedCtaLinkProps = {
  href: string;
  className?: string;
  ctaId: string;
  ctaText: string;
  ctaLocation: string;
  children: ReactNode;
};

/** Link that emits cta_click to the dataLayer before navigation. */
export default function TrackedCtaLink({
  href,
  className = "",
  ctaId,
  ctaText,
  ctaLocation,
  children,
}: TrackedCtaLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() =>
        trackCtaClick({
          cta_id: ctaId,
          cta_text: ctaText,
          cta_location: ctaLocation,
          link_url: href,
        })
      }
    >
      {children}
    </Link>
  );
}
