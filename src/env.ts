/**
 * Public environment variables (safe to ship in the browser bundle).
 *
 * Rules:
 * - Only non-secret values may use the NEXT_PUBLIC_ prefix.
 * - Secrets must use server-only names (no NEXT_PUBLIC_) and never be imported
 *   into Client Components.
 * - This module validates required public vars so misconfigured deploys fail
 *   loudly instead of shipping a half-broken client.
 */

/** Official GTM web container ID shape, e.g. GTM-M9S5TG62. */
const GTM_ID_PATTERN = /^GTM-[A-Z0-9]+$/;

function readGtmId(): string | null {
  const raw = process.env.NEXT_PUBLIC_GTM_ID?.trim();

  if (!raw) {
    // Production must fail closed so analytics misconfig is visible at deploy.
    if (process.env.NODE_ENV === "production") {
      throw new Error(
        "Missing required environment variable: NEXT_PUBLIC_GTM_ID. " +
          "Set it to your GTM container ID (e.g. GTM-XXXXXXX). See .env.example.",
      );
    }
    return null;
  }

  if (!GTM_ID_PATTERN.test(raw)) {
    throw new Error(
      `Invalid NEXT_PUBLIC_GTM_ID "${raw}". ` +
        "Expected GTM- followed by alphanumeric characters only (e.g. GTM-XXXXXXX). " +
        "Rejecting untrusted values prevents script injection via the GTM bootstrap.",
    );
  }

  return raw;
}

/**
 * Validated public env. Import from Server Components / layout only where
 * possible; values are inlined by Next at build time when referenced.
 */
export const publicEnv = {
  /** GTM container ID, or null in development when unset. */
  gtmId: readGtmId(),
} as const;
