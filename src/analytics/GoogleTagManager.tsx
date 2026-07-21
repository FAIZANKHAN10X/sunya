import { publicEnv } from "@/env";

/**
 * Official GTM web container install (head + noscript).
 * GA4 is NOT loaded here — configure G-… only inside Tag Manager.
 *
 * --- XSS exception (approved) ---
 * This is the only file allowed to use `dangerouslySetInnerHTML`.
 * The injected string is a fixed Google bootstrap IIFE; the sole
 * interpolation is `publicEnv.gtmId`, which is validated in `src/env.ts`
 * against /^GTM-[A-Z0-9]+$/ before use. User/request content must never
 * reach this path.
 *
 * ESLint: react/no-danger is disabled for this file only (see eslint.config.mjs).
 *
 * @see https://developers.google.com/tag-platform/tag-manager/web
 */
export default function GoogleTagManager() {
  const gtmId = publicEnv.gtmId;
  if (!gtmId) return null;

  // Exact Google head snippet pattern (single load of gtm.js — no second Script tag).
  // gtmId is format-validated; do not concatenate any other dynamic input here.
  const snippet = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`;

  return (
    <script
      id="google-tag-manager"
      dangerouslySetInnerHTML={{ __html: snippet }}
    />
  );
}

/** Official noscript fallback — first child of body. */
export function GoogleTagManagerNoscript() {
  const gtmId = publicEnv.gtmId;
  if (!gtmId) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
