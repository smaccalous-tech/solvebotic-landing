import type { NextConfig } from "next";

// Security headers for every page (added 2026-10-20).
//
// The site is static, uses no third-party scripts, styles, fonts or images
// (fonts are self-hosted through next/font, images live in /public), and has no
// forms. So the Content Security Policy is enforced, not report-only, and allows
// only this site's own files:
// - script-src needs 'unsafe-inline': the pages are prerendered, so Next's
//   inline bootstrap scripts can't carry a per-request nonce. Nothing else is
//   allowed to load.
// - style-src needs 'unsafe-inline': the pages use <style> blocks and React
//   style attributes.
// - next dev needs 'unsafe-eval' for fast refresh; production never gets it.
// HSTS covers subdomains but is NOT submitted to the browser preload list
// (no "preload" token), so it stays reversible.
const isDev = process.env.NODE_ENV === "development";

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
