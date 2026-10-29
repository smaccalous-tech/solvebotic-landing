import type { Metadata } from "next";
import { LegalPageShell } from "../components/LegalPageShell";

export const metadata: Metadata = {
  title: "Sub-processors — SolveBotic",
  description:
    "The third parties that process personal data on SolveBotic's behalf, what each receives, where it is processed, and how we notify merchants of changes.",
};

// Canonical sub-processor list (Annex 3 of the future merchant DPA). The Privacy
// Policy (§4, §10) links here instead of keeping its own copy. When this list
// changes: add a dated changelog entry, email every active/trialing account
// owner at least 30 days before the new sub-processor receives personal data,
// and bump "Last updated". A NEW sub-processor expands processing, so it also
// needs the Privacy/Terms effectiveDate + the app's CURRENT_TERMS_VERSION bumped
// together (see PROJECT.md → Privacy-change rule).
const LAST_UPDATED = "October 29, 2026";

type SubProcessor = {
  name: string;
  role: string;
  receives: string;
  location: string;
  listUrl: string;
};

const SUB_PROCESSORS: SubProcessor[] = [
  {
    name: "Anthropic, PBC",
    role: "AI processing. Reads each message sent through the chat widget, works out what the customer needs, and drafts the reply.",
    receives:
      "The end-customer's message and the earlier messages in the same conversation (whatever the customer typed, plus our earlier replies, which can mention an order's status or tracking), the merchant's brand name, and the merchant's FAQ / knowledge-base text. Order records are not sent from our database directly.",
    location:
      "Stored in the United States. Under Anthropic's default routing, the model may run in data centers outside the United States.",
    listUrl: "https://www.anthropic.com/subprocessors",
  },
  {
    name: "Supabase",
    role: "Database and merchant sign-in.",
    receives:
      "Everything SolveBotic stores: merchant accounts and settings, including the store credentials a merchant connects (Shopify access tokens, and WooCommerce consumer keys, consumer secrets and webhook secrets — all stored encrypted, and never shown to other accounts), synced order details (order number, customer name and email, shipping city, state, postal code and country, totals, payment and fulfillment status, tracking), chat conversations, return requests, and error logs (with email addresses and card numbers removed).",
    location: "United States (Amazon Web Services, us-east-1, Northern Virginia).",
    listUrl: "https://supabase.com/legal/customer-resources/subprocessor-list",
  },
  {
    name: "Vercel Inc.",
    role: "Hosting. Runs the SolveBotic app and serves the chat widget.",
    receives:
      "Every request to the app and the widget passes through Vercel, including chat messages on their way to us. Our server logs record IDs, store domains, and yes/no flags, not message text.",
    location:
      "Our application servers run in the United States (Washington, D.C. area). Requests first reach Vercel's global edge network at the location nearest the visitor.",
    listUrl: "https://security.vercel.com",
  },
  {
    name: "Resend (Plus Five Five, Inc.)",
    role: "Transactional email.",
    receives:
      "Sign-in emails to merchants (the merchant's own email address and a one-time sign-in link), escalation emails to the merchant (the end-customer's email address, a summary of the conversation, and the order number), return-request emails to the merchant (email address, order number, return category, and reason), alerts to SolveBotic about Shopify customer data requests (the end-customer's email address and Shopify order IDs), and alerts to SolveBotic about service errors.",
    location: "United States (Amazon Web Services, us-east-1).",
    listUrl: "https://resend.com/legal/subprocessors",
  },
  {
    name: "Stripe, LLC",
    role: "Merchant billing.",
    receives:
      "Merchant billing details only: name, email address, payment card (entered directly with Stripe), and subscription. No end-customer data.",
    location: "United States, and Stripe's affiliates and service providers in other countries.",
    listUrl: "https://stripe.com/legal/service-providers",
  },
  {
    name: "Zoho Corporation",
    role: "SolveBotic's business email.",
    receives:
      "Alerts about Shopify privacy requests (which include the end-customer's email address and Shopify order IDs), and messages sent to our support, privacy, billing, and general addresses.",
    location: "United States (Zoho's US data center).",
    listUrl: "https://www.zoho.com/privacy/sub-processors.html",
  },
];

const CHANGELOG: Array<{ date: string; entry: string }> = [
  {
    date: "October 29, 2026",
    entry:
      "Updated the Resend entry. Sign-in emails to merchants now go through Resend, so it receives the merchant's own email address. Alerts about Shopify requests to erase data no longer include the end-customer's details. No new sub-processor.",
  },
  {
    date: "October 12, 2026",
    entry:
      "Updated the Supabase entry. WooCommerce consumer keys and webhook secrets are now stored encrypted, so every store credential a merchant connects is encrypted where we store it. No change to who processes data or what they receive.",
  },
  {
    date: "October 8, 2026",
    entry:
      "Corrected the Supabase entry. It said store API credentials are encrypted; that is true for Shopify access tokens and WooCommerce consumer secrets, but WooCommerce consumer keys and webhook secrets are stored unencrypted. No change to who processes data or what they receive.",
  },
  {
    date: "October 6, 2026",
    entry:
      "First version of this page. Zoho Corporation is listed for the first time: it was already in use for SolveBotic's business email but was missing from earlier versions of our Privacy Policy.",
  },
];

export default function SubprocessorsPage() {
  return (
    <LegalPageShell title="Sub-processors" effectiveDate={LAST_UPDATED} dateLabel="Last updated">
      <style>{`
        .sp-list { display: flex; flex-direction: column; gap: 16px; margin: 8px 0 28px; }
        .sp-card {
          border: 1px solid rgba(0,170,255,0.14);
          background: rgba(10,16,32,0.6);
          border-radius: 12px;
          padding: 20px 22px;
        }
        .sp-card h3 { margin-top: 0 !important; }
        .sp-card dl { margin: 0; }
        .sp-card dt {
          font-family: var(--font-jakarta), sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--text3);
          margin-top: 12px;
        }
        .sp-card dd { margin: 4px 0 0; }
        .sp-changelog { list-style: none; margin: 0 0 18px !important; padding: 0; }
        .sp-changelog li {
          border-left: 2px solid rgba(0,170,255,0.3);
          padding-left: 14px;
        }
        @media (max-width: 640px) {
          .sp-card { padding: 16px; }
        }
      `}</style>

      <p>
        This page lists the companies that process personal data on SolveBotic&apos;s behalf (&ldquo;sub-processors&rdquo;), what each one receives, and where it is processed. It is the current list referred to in our <a href="/privacy">Privacy Policy</a>.
      </p>
      <p>
        It covers both kinds of data we handle: merchant account data, which we control, and the end-customer data we process for merchants through the chat widget. See Section 1 of the Privacy Policy for the difference.
      </p>

      <h2>Current sub-processors</h2>
      <div className="sp-list">
        {SUB_PROCESSORS.map((sp) => (
          <section key={sp.name} className="sp-card">
            <h3>{sp.name}</h3>
            <dl>
              <dt>What it does</dt>
              <dd>{sp.role}</dd>
              <dt>Data it receives</dt>
              <dd>{sp.receives}</dd>
              <dt>Where</dt>
              <dd>{sp.location}</dd>
              <dt>Its own sub-processors</dt>
              <dd>
                <a href={sp.listUrl} target="_blank" rel="noopener noreferrer">
                  {sp.listUrl.replace(/^https:\/\/(www\.)?/, "")}
                </a>
              </dd>
            </dl>
          </section>
        ))}
      </div>

      <h2>Not sub-processors</h2>
      <p>
        <strong>Shopify and WooCommerce.</strong> These are the merchant&apos;s own store platforms. SolveBotic reads order data from them using credentials the merchant provides; they are where the data comes from, not companies processing it for us.
      </p>
      <p>
        <strong>Slack.</strong> A merchant can choose to send escalation and return alerts to their own Slack workspace. That destination, and the relationship with Slack, belong to the merchant.
      </p>

      <h2>How we tell you about changes</h2>
      <p>
        <strong>Notice.</strong> At least thirty (30) days before a new or replacement sub-processor starts receiving personal data, we will add a dated entry to the changelog below and email the account owner of every active or trialing merchant account.
      </p>
      <p>
        <strong>Objections.</strong> Within fifteen (15) days of that notice, a merchant may object on reasonable data-protection grounds by emailing <a href="mailto:privacy@solvebotic.com">privacy@solvebotic.com</a>. We will discuss the concern in good faith and work toward a resolution. If it can&apos;t be resolved, you may close your account.
      </p>
      <p>
        <strong>Urgent replacements.</strong> If we have to replace a sub-processor quickly &mdash; for a security issue, a prolonged outage, or because the provider stops offering its service &mdash; we may do so with shorter notice. We will tell merchants as soon as we can, and the same right to object applies.
      </p>
      <p>
        <strong>Scope.</strong> This list covers the companies SolveBotic works with directly. Each of them uses its own sub-processors, listed at the links above.
      </p>

      <h2>Changelog</h2>
      <ul className="sp-changelog">
        {CHANGELOG.map((c) => (
          <li key={c.date + c.entry}>
            <strong>{c.date}</strong> &mdash; {c.entry}
          </li>
        ))}
      </ul>

      <h2>Contact</h2>
      <p>
        Questions about this list: <a href="mailto:privacy@solvebotic.com">privacy@solvebotic.com</a>.
      </p>
    </LegalPageShell>
  );
}
