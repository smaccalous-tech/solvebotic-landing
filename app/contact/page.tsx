import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Contact — SolveBotic",
  description:
    "Get in touch with SolveBotic for sales, customer support, or privacy and data requests.",
};

const SUPPORT_EMAIL = "support@solvebotic.com";

export default function ContactPage() {
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
        .contact-bg {
          position: fixed; inset: 0; z-index: -1; pointer-events: none;
          background-image:
            linear-gradient(rgba(0,170,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,170,255,0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 100% 100% at 50% 0%, black 20%, transparent 80%);
        }
        .contact-bg::after {
          content: ''; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 600px 400px at 20% 30%, rgba(0,119,204,0.10) 0%, transparent 70%),
            radial-gradient(ellipse 400px 300px at 80% 60%, rgba(0,170,255,0.06) 0%, transparent 70%);
        }

        .contact-main {
          padding: 128px 24px 80px;
          display: flex; justify-content: center;
          position: relative; z-index: 1;
        }
        .contact-container { max-width: 720px; width: 100%; }
        .contact-eyebrow {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 11px; font-weight: 700;
          color: var(--accent2);
          letter-spacing: 0.14em; text-transform: uppercase;
          margin-bottom: 14px;
        }
        .contact-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #fff;
          margin-bottom: 18px;
        }
        .contact-lead {
          font-size: 17px; color: var(--text2);
          line-height: 1.7;
          margin-bottom: 40px;
        }

        .email-card {
          background: linear-gradient(145deg, rgba(0,119,204,0.16), rgba(27,58,140,0.08));
          border: 1px solid rgba(0,170,255,0.3);
          border-radius: 18px;
          padding: 32px 28px;
          text-align: center;
          margin-bottom: 40px;
          box-shadow: 0 8px 32px rgba(0,100,200,0.15);
        }
        .email-card-label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 11px; font-weight: 700;
          color: var(--accent2);
          letter-spacing: 0.14em; text-transform: uppercase;
          margin-bottom: 12px;
        }
        .email-card a {
          display: inline-block;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          padding: 8px 0;
          border-bottom: 2px solid rgba(0,170,255,0.4);
          transition: border-color 0.2s, color 0.2s;
        }
        .email-card a:hover { color: #7DD3FC; border-bottom-color: #7DD3FC; }
        .email-card-sla {
          font-size: 13px; color: var(--text3);
          margin-top: 14px;
        }

        .reason-grid {
          display: grid; grid-template-columns: 1fr; gap: 16px;
          margin-bottom: 40px;
        }
        .reason-card {
          background: rgba(0,119,204,0.06);
          border: 1px solid rgba(0,170,255,0.12);
          border-radius: 14px;
          padding: 22px 24px;
        }
        .reason-card h3 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 17px; font-weight: 700;
          color: #fff;
          margin-bottom: 6px;
        }
        .reason-card p {
          font-size: 14px; color: var(--text2);
          line-height: 1.6;
        }
        .reason-card .subject-hint {
          display: inline-block;
          margin-top: 10px;
          font-family: 'Inter', monospace;
          font-size: 12px;
          color: var(--accent2);
          background: rgba(0,170,255,0.08);
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid rgba(0,170,255,0.18);
        }

        .closing-note {
          font-size: 14px;
          color: var(--text3);
          text-align: center;
          padding-top: 24px;
          border-top: 1px solid rgba(0,170,255,0.12);
        }

        @media (max-width: 768px) {
          .contact-main { padding: 104px 20px 64px; }
          .email-card { padding: 26px 20px; }
          .reason-card { padding: 18px 20px; }
        }
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Outfit:wght@300;400;500;600&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="contact-bg" />

      <SiteHeader />

      <main className="contact-main">
        <article className="contact-container">
          <div className="contact-eyebrow">Contact</div>
          <h1 className="contact-title">Get in touch</h1>
          <p className="contact-lead">
            We&apos;re a small team. The fastest way to reach us is by email — write to us directly and we&apos;ll respond personally.
          </p>

          <div className="email-card">
            <div className="email-card-label">Email us at</div>
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            <div className="email-card-sla">
              We aim to respond to all messages within 1–2 business days.
            </div>
          </div>

          <div className="reason-grid">
            <div className="reason-card">
              <h3>Sales &amp; pricing</h3>
              <p>
                Questions about plans, Enterprise pricing, or fit for your store? Let&apos;s talk.
              </p>
              <span className="subject-hint">Subject: Sales — …</span>
            </div>
            <div className="reason-card">
              <h3>Customer support</h3>
              <p>
                Trouble with your widget, dashboard, or integration? We&apos;ll help you get unblocked.
              </p>
              <span className="subject-hint">Subject: Support — …</span>
            </div>
            <div className="reason-card">
              <h3>Privacy &amp; data requests</h3>
              <p>
                Need to access, correct, or delete your data, or have other privacy questions? See our{" "}
                <a href="/privacy" style={{ color: "var(--accent2)", textDecoration: "underline", textUnderlineOffset: 3 }}>
                  Privacy Policy
                </a>{" "}
                and email us with the subject below.
              </p>
              <span className="subject-hint">Subject: Privacy — …</span>
            </div>
          </div>

          <p className="closing-note">
            Prefer something else? You can also reach the team at <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: "var(--accent2)", textDecoration: "underline", textUnderlineOffset: 3 }}>{SUPPORT_EMAIL}</a>.
          </p>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
