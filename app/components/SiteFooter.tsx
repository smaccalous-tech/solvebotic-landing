"use client";

// Reusable site footer for /privacy, /terms, /contact.
// The landing page (app/page.tsx) still has its own inline footer for now —
// see PROJECT.md cleanup bullet about deduping that into this component.
export function SiteFooter() {
  const copy = "©";

  return (
    <>
      <style>{`
        footer.sb-footer {
          background: #ffffff;
          border-top: 1px solid #e5e7eb;
          padding: 48px 52px 36px;
          max-width: 100%;
          font-family: 'Outfit', sans-serif;
        }
        .sb-footer-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 48px; margin-bottom: 40px; flex-wrap: wrap; }
        .sb-footer-brand { max-width: 280px; }
        .sb-footer-logo { display: flex; align-items: center; text-decoration: none; margin-bottom: 12px; }
        .sb-footer-logo img { height: 44px; object-fit: contain; }
        .sb-footer-tagline { font-size: 13px; color: #6b7280; line-height: 1.6; }
        .sb-footer-cols { display: flex; gap: 56px; flex-wrap: wrap; }
        .sb-footer-col h4 { font-size: 11px; font-weight: 700; color: #374151; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 14px; font-family: 'Plus Jakarta Sans', sans-serif; }
        .sb-footer-col-links { display: flex; flex-direction: column; gap: 9px; }
        .sb-footer-col-links a { font-size: 13px; color: #6b7280; text-decoration: none; transition: color 0.2s; }
        .sb-footer-col-links a:hover { color: #0077CC; }
        .sb-footer-bottom { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; padding-top: 28px; border-top: 1px solid #e5e7eb; }
        .sb-footer-bottom p { font-size: 12px; color: #9ca3af; }
        .sb-footer-bottom-links { display: flex; gap: 20px; }
        .sb-footer-bottom-links a { font-size: 12px; color: #9ca3af; text-decoration: none; transition: color 0.2s; }
        .sb-footer-bottom-links a:hover { color: #374151; }

        @media (max-width: 1024px) {
          footer.sb-footer { padding: 40px 28px 32px; }
          .sb-footer-cols { gap: 36px; }
        }
        @media (max-width: 640px) {
          footer.sb-footer { padding: 36px 18px 28px; }
          .sb-footer-top { gap: 32px; margin-bottom: 32px; }
          .sb-footer-brand { max-width: 100%; }
          .sb-footer-cols { gap: 28px; width: 100%; }
          .sb-footer-col { min-width: 120px; }
          .sb-footer-bottom { flex-direction: column; align-items: flex-start; gap: 14px; padding-top: 24px; }
          .sb-footer-bottom-links { gap: 16px; flex-wrap: wrap; }
        }
      `}</style>

      <footer className="sb-footer">
        <div className="sb-footer-top">
          <div className="sb-footer-brand">
            <a href="/" className="sb-footer-logo">
              <img src="/logo.png" alt="SolveBotic" />
            </a>
            <p className="sb-footer-tagline">
              AI-powered customer support for ecommerce brands. Unlimited AI responses on every plan. Live in under 10 minutes.
            </p>
          </div>
          <div className="sb-footer-cols">
            <div className="sb-footer-col">
              <h4>Product</h4>
              <div className="sb-footer-col-links">
                <a href="/#features">Features</a>
                <a href="/#platforms">Platforms</a>
                <a href="/#pricing">Pricing</a>
                <a href="/#how-it-works">How it works</a>
              </div>
            </div>
            <div className="sb-footer-col">
              <h4>Account</h4>
              <div className="sb-footer-col-links">
                <a href="https://app.solvebotic.com/auth/login">Login</a>
                <a href="https://app.solvebotic.com/onboarding">Get Started</a>
              </div>
            </div>
            <div className="sb-footer-col">
              <h4>Company</h4>
              <div className="sb-footer-col-links">
                <a href="/contact">Contact</a>
                <a href="/contact">Support</a>
              </div>
            </div>
          </div>
        </div>
        <div className="sb-footer-bottom">
          <p>{copy} 2026 SolveBotic. All rights reserved.</p>
          <div className="sb-footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}
