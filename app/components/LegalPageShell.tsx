"use client";

import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

// Shared shell for /privacy and /terms — sets up a readable prose container
// over the dark circuit-board aesthetic of the rest of the site. Each legal
// page passes its own title, effective date, and content via children.
export function LegalPageShell({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate: string;
  children: ReactNode;
}) {
  return (
    <>
      <style>{`
        :root {
          --bg: #060A18;
          --bg2: #0A1020;
          --accent: #0077CC;
          --accent2: #00AAFF;
          --text: #E8F4FF;
          --text2: #7AA8C8;
          --text3: #3A5870;
        }
        html { scroll-behavior: smooth; }
        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Outfit', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .legal-bg {
          position: fixed; inset: 0; z-index: -1; pointer-events: none;
          background-image:
            linear-gradient(rgba(0,170,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,170,255,0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 100% 100% at 50% 0%, black 20%, transparent 80%);
        }
        .legal-bg::after {
          content: ''; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 600px 400px at 20% 30%, rgba(0,119,204,0.10) 0%, transparent 70%),
            radial-gradient(ellipse 400px 300px at 80% 60%, rgba(0,170,255,0.06) 0%, transparent 70%);
        }

        .legal-main {
          padding: 128px 24px 80px;
          display: flex; justify-content: center;
          position: relative; z-index: 1;
        }
        .legal-container {
          max-width: 760px; width: 100%;
        }
        .legal-eyebrow {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 11px; font-weight: 700;
          color: var(--accent2);
          letter-spacing: 0.14em; text-transform: uppercase;
          margin-bottom: 14px;
        }
        .legal-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #fff;
          margin-bottom: 16px;
        }
        .legal-effective {
          font-size: 13px;
          color: var(--text3);
          margin-bottom: 56px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(0,170,255,0.12);
        }
        .legal-body { font-size: 15px; color: var(--text2); line-height: 1.75; }
        .legal-body h2 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 22px; font-weight: 700;
          color: #fff;
          margin-top: 44px; margin-bottom: 16px;
          letter-spacing: -0.01em;
        }
        .legal-body h3 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 16px; font-weight: 600;
          color: #fff;
          margin-top: 28px; margin-bottom: 10px;
        }
        .legal-body p { margin-bottom: 18px; }
        .legal-body ul { margin: 0 0 18px 22px; }
        .legal-body li { margin-bottom: 8px; }
        .legal-body strong { color: var(--text); font-weight: 600; }
        .legal-body a { color: var(--accent2); text-decoration: underline; text-underline-offset: 3px; }
        .legal-body a:hover { color: #7DD3FC; }

        @media (max-width: 768px) {
          .legal-main { padding: 104px 20px 64px; }
          .legal-body { font-size: 14.5px; }
          .legal-body h2 { font-size: 20px; margin-top: 36px; }
        }
      `}</style>

      <div className="legal-bg" />

      <SiteHeader />

      <main className="legal-main">
        <article className="legal-container">
          <div className="legal-eyebrow">Legal</div>
          <h1 className="legal-title">{title}</h1>
          <div className="legal-effective">Effective Date: {effectiveDate}</div>
          <div className="legal-body">{children}</div>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
