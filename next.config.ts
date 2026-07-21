import type { NextConfig } from "next";

/**
 * Security headers applied to every route.
 *
 * CSP is intentionally allowlist-based (not nonce-based) to avoid forcing
 * dynamic rendering via proxy. GTM's official bootstrap is an inline script,
 * so script-src includes 'unsafe-inline'. Tighten further only with nonces.
 *
 * Allowed third parties match current product usage:
 * - GTM / GA4 (configured in Tag Manager)
 * - Cloudinary hero media
 * - Unsplash gallery images
 */
function buildContentSecurityPolicy(): string {
  const isDev = process.env.NODE_ENV === "development";

  // React Refresh / Next dev tooling evaluate code in the browser.
  const scriptSrc = [
    "'self'",
    "'unsafe-inline'",
    ...(isDev ? ["'unsafe-eval'"] : []),
    "https://www.googletagmanager.com",
    "https://*.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://*.google-analytics.com",
    "https://*.google.com",
    "https://*.g.doubleclick.net",
  ].join(" ");

  const directives = [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    // React inline style props (e.g. VideoBackground opacity, GTM noscript iframe).
    "style-src 'self' 'unsafe-inline'",
    [
      "img-src 'self' data: blob:",
      "https://images.unsplash.com",
      "https://res.cloudinary.com",
      "https://*.google-analytics.com",
      "https://*.googletagmanager.com",
      "https://*.g.doubleclick.net",
    ].join(" "),
    "font-src 'self' data:",
    "media-src 'self' https://res.cloudinary.com",
    [
      "connect-src 'self'",
      "https://www.google-analytics.com",
      "https://*.google-analytics.com",
      "https://*.analytics.google.com",
      "https://www.googletagmanager.com",
      "https://*.googletagmanager.com",
      "https://*.g.doubleclick.net",
    ].join(" "),
    "frame-src https://www.googletagmanager.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ];

  return directives.join("; ");
}

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: buildContentSecurityPolicy(),
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
