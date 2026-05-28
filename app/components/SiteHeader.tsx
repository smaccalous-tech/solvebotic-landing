"use client";

import { useState } from "react";

// Reusable site header for /privacy, /terms, /contact.
// The landing page (app/page.tsx) still has its own inline nav for now —
// see PROJECT.md cleanup bullet about deduping that into this component.
export function SiteHeader() {
  const arrow = "→";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Outfit:wght@300;400;500;600&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <style>{`
        nav.sb-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 52px; height: 68px;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          box-shadow: 0 1px 12px rgba(0,0,0,0.06);
        }
        .sb-nav-logo { display: flex; align-items: center; text-decoration: none; }
        .sb-nav-logo img { height: 44px; object-fit: contain; }
        .sb-nav-links { display: flex; align-items: center; gap: 32px; }
        .sb-nav-links a { color: #4b5563; font-size: 14px; text-decoration: none; transition: color 0.2s; font-weight: 500; font-family: 'Outfit', sans-serif; }
        .sb-nav-links a:hover { color: #0077CC; }
        .sb-nav-divider { width: 1px; height: 18px; background: #e5e7eb; }
        .sb-btn-primary {
          background: linear-gradient(135deg, #0066BB, #00AAFF);
          color: #fff; font-family: 'Outfit', sans-serif; font-size: 13.5px; font-weight: 600;
          padding: 9px 20px; border-radius: 8px; text-decoration: none; border: none; cursor: pointer;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          display: inline-flex; align-items: center; gap: 6px;
          box-shadow: 0 4px 16px rgba(0,170,255,0.3);
        }
        .sb-btn-primary:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0,170,255,0.4); }

        .sb-hamburger { display: none; background: transparent; border: none; cursor: pointer; padding: 8px; flex-direction: column; gap: 4px; align-items: center; justify-content: center; }
        .sb-hamburger span { display: block; width: 22px; height: 2px; background: #0F172A; border-radius: 2px; transition: transform 0.2s, opacity 0.2s; }
        .sb-hamburger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .sb-hamburger.open span:nth-child(2) { opacity: 0; }
        .sb-hamburger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

        .sb-mobile-menu {
          display: none;
          position: fixed; top: 60px; left: 0; right: 0; z-index: 99;
          background: #ffffff; border-bottom: 1px solid #e5e7eb;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          padding: 20px 24px; flex-direction: column; gap: 4px;
        }
        .sb-mobile-menu.open { display: flex; }
        .sb-mobile-menu a { color: #374151; font-size: 15px; font-weight: 500; padding: 12px 8px; text-decoration: none; border-bottom: 1px solid #f3f4f6; font-family: 'Outfit', sans-serif; }
        .sb-mobile-menu a:last-child { border-bottom: none; }
        .sb-mobile-menu a.sb-btn-primary { color: #fff; border-bottom: none; margin-top: 12px; padding: 13px 20px; justify-content: center; font-size: 14px; }

        @media (max-width: 1024px) {
          nav.sb-nav { padding: 0 28px; height: 64px; }
          .sb-nav-logo img { height: 38px; }
        }
        @media (max-width: 768px) {
          .sb-nav-links { display: none; }
          .sb-hamburger { display: flex; }
        }
        @media (max-width: 480px) {
          nav.sb-nav { padding: 0 18px; height: 60px; }
          .sb-nav-logo img { height: 34px; }
        }
      `}</style>

      <nav className="sb-nav">
        <a href="/" className="sb-nav-logo" onClick={() => setMobileMenuOpen(false)}>
          <img src="/logo.png" alt="SolveBotic" />
        </a>
        <div className="sb-nav-links">
          <a href="/#features">Features</a>
          <a href="/#platforms">Platforms</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#how-it-works">How it works</a>
          <div className="sb-nav-divider" />
          <a href="https://app.solvebotic.com/auth/login">Login</a>
          <a href="https://app.solvebotic.com/onboarding" className="sb-btn-primary">Start Free Trial {arrow}</a>
        </div>
        <button
          className={`sb-hamburger ${mobileMenuOpen ? "open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`sb-mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <a href="/#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
        <a href="/#platforms" onClick={() => setMobileMenuOpen(false)}>Platforms</a>
        <a href="/#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
        <a href="/#how-it-works" onClick={() => setMobileMenuOpen(false)}>How it works</a>
        <a href="https://app.solvebotic.com/auth/login">Login</a>
        <a href="https://app.solvebotic.com/onboarding" className="sb-btn-primary">Start Free Trial {arrow}</a>
      </div>
    </>
  );
}
