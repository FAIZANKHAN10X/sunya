import type { TrackParams } from "@/analytics/types";

/** Session-scoped keys already sent (prevents duplicate page/section/lead noise). */
const sentKeys = new Set<string>();

function ensureDataLayer(): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
}

/**
 * Push a custom event to the GTM dataLayer.
 * Use GTM Custom Event triggers + GA4 Event tags to forward to GA4.
 */
export function trackEvent(event: string, params: TrackParams = {}): void {
  if (typeof window === "undefined") return;
  ensureDataLayer();

  const payload: Record<string, unknown> = {
    event,
    ...sanitize(params),
  };

  window.dataLayer.push(payload);
}

/**
 * Track once per browser tab session for a stable key.
 * Returns true if the event was sent.
 */
export function trackEventOnce(
  dedupeKey: string,
  event: string,
  params: TrackParams = {},
): boolean {
  if (typeof window === "undefined") return false;
  if (sentKeys.has(dedupeKey)) return false;
  sentKeys.add(dedupeKey);
  trackEvent(event, params);
  return true;
}

/** Clear dedupe keys that start with a prefix (e.g. section_view on route change). */
export function clearDedupePrefix(prefix: string): void {
  for (const key of sentKeys) {
    if (key.startsWith(prefix)) sentKeys.delete(key);
  }
}

export function trackPageView(path: string, title?: string): void {
  const pagePath = path || "/";
  const pageTitle =
    title ||
    (typeof document !== "undefined" ? document.title : undefined) ||
    "Sunya";

  // Deduping for soft nav is handled by PageViewTracker (last path ref).
  // Do not session-lock page_view here or back-navigation would go silent.
  trackEvent("page_view", {
    page_path: pagePath,
    page_title: pageTitle,
    page_location:
      typeof window !== "undefined" ? window.location.href : undefined,
  });
}

export function trackCtaClick(params: {
  cta_id: string;
  cta_text: string;
  cta_location: string;
  link_url: string;
}): void {
  trackEvent("cta_click", {
    cta_id: params.cta_id,
    cta_text: params.cta_text,
    cta_location: params.cta_location,
    link_url: params.link_url,
  });
}

export function trackGenerateLead(params: {
  lead_type: "newsletter" | "contact";
  form_id: string;
  form_name: string;
}): void {
  const path =
    typeof window !== "undefined" ? window.location.pathname : "unknown";
  // One lead event per form type per page load (avoid double success spam)
  trackEventOnce(
    `generate_lead:${params.lead_type}:${path}`,
    "generate_lead",
    {
      lead_type: params.lead_type,
      form_id: params.form_id,
      form_name: params.form_name,
      page_path: path,
    },
  );
}

export function trackSectionView(params: {
  section_id: string;
  section_name: string;
  section_index: number;
  page_path: string;
}): void {
  trackEventOnce(
    `section_view:${params.page_path}:${params.section_id}`,
    "section_view",
    {
      section_id: params.section_id,
      section_name: params.section_name,
      section_index: params.section_index,
      page_path: params.page_path,
    },
  );
}

function sanitize(params: TrackParams): Record<string, string | number | boolean> {
  const out: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) continue;
    out[key] = value;
  }
  return out;
}
