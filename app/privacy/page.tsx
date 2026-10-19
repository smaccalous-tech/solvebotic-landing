import type { Metadata } from "next";
import { LegalPageShell } from "../components/LegalPageShell";

export const metadata: Metadata = {
  title: "Privacy Policy — SolveBotic",
  description:
    "How SolveBotic collects, uses, and protects merchant and end-customer data, and the sub-processors that help us run the service.",
};

export default function PrivacyPage() {
  return (
    <LegalPageShell title="Privacy Policy" effectiveDate="October 6, 2026">
      <p>
        SolveBotic LLC (&ldquo;SolveBotic,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the SolveBotic service &mdash; an AI-powered customer support platform for ecommerce brands. This Privacy Policy explains what information we collect, how we use it, who we share it with, and your rights.
      </p>
      <p>SolveBotic LLC is a Colorado limited liability company.</p>
      <p>
        If you have questions about this policy or want to make a data request, contact us at <a href="/contact">solvebotic.com/contact</a>.
      </p>

      <h2>1. The Two Data Relationships</h2>
      <p>
        SolveBotic handles two different kinds of personal information, and the relationships are different for each:
      </p>
      <p>
        <strong>Merchant data &mdash; we are the controller.</strong> When a business (the &ldquo;merchant&rdquo;) signs up for SolveBotic, we collect and decide how to use their account information directly. They are our customer.
      </p>
      <p>
        <strong>End-customer data &mdash; we are a processor.</strong> When a merchant installs the SolveBotic widget on their store, that widget collects information from the merchant&apos;s own customers (the &ldquo;end-customers&rdquo;): the messages they type, the email addresses and order numbers they provide, and the conversation history. SolveBotic processes that information on the merchant&apos;s behalf. The merchant &mdash; not SolveBotic &mdash; is the controller of their end-customers&apos; personal data.
      </p>
      <p>
        If you are an end-customer with a question about how your data is handled, please contact the merchant whose store you were interacting with. They can in turn contact us if they need our help.
      </p>

      <h2>2. Information We Collect</h2>
      <p><strong>From merchants (data we control):</strong></p>
      <ul>
        <li>Account information: name, email address, business name</li>
        <li>Brand and store configuration: brand name, slug, platform (Shopify or WooCommerce), and the FAQ / knowledge-base content the merchant provides</li>
        <li>Integration credentials: API tokens for Shopify or WooCommerce, used to read order data from the merchant&apos;s connected store</li>
        <li>Billing information: processed by Stripe &mdash; we receive subscription status, plan, and a Stripe customer ID, but we do not store full payment card numbers</li>
        <li>Notification preferences: email address and Slack webhook URL for escalation alerts</li>
      </ul>
      <p><strong>From end-customers (data we process on the merchant&apos;s behalf):</strong></p>
      <ul>
        <li>The text of support messages typed into the widget</li>
        <li>Email addresses and order numbers provided during the conversation</li>
        <li>Conversation session history</li>
        <li>Return-request details: reason, category, and resolution status</li>
        <li>Order data synced from the merchant&apos;s connected Shopify or WooCommerce store and stored so we can answer customers&apos; questions about their orders: order number and date, customer name and email address, shipping city, state, postal code and country, order total and currency, payment and fulfillment status, and tracking details</li>
      </ul>
      <p><strong>Automatically collected:</strong></p>
      <ul>
        <li>Standard technical and usage data such as IP addresses, browser type, and request logs, used for security, debugging, and service operation</li>
      </ul>

      <h2>3. How We Use Information</h2>
      <p>We use the information described above to:</p>
      <ul>
        <li>Operate the service and respond to customer support inquiries</li>
        <li>Generate AI responses to end-customer messages</li>
        <li>Process return requests and route escalations to the merchant</li>
        <li>Send notification emails and Slack messages</li>
        <li>Process payments and manage subscriptions through Stripe</li>
        <li>Communicate with merchants about their account</li>
        <li>Maintain security and prevent abuse</li>
        <li>Improve the service through aggregated, non-identifying analysis</li>
      </ul>

      <h2>4. AI Processing and Sub-processors</h2>
      <p>
        To run the service, we share personal data with sub-processors for AI processing, database hosting, application hosting, transactional email, payment processing, and our business email. The current list &mdash; who each sub-processor is, what data it receives, and where it is processed &mdash; is published at <a href="/subprocessors">solvebotic.com/subprocessors</a>, together with how we notify merchants before adding a new one.
      </p>
      <p>
        <strong>AI processing.</strong> Support conversation content &mdash; the end-customer&apos;s messages and conversation context &mdash; is sent to Anthropic&apos;s API (Claude) to classify each message and generate a suggested response. The merchant&apos;s FAQ / knowledge-base content is included so responses reflect the merchant&apos;s policies. We use Anthropic&apos;s commercial API, under which customer content is not used to train Anthropic&apos;s models.
      </p>
      <p>
        <strong>Shopify and WooCommerce (merchants&apos; connected stores).</strong> Using credentials the merchant provides, SolveBotic syncs order data from the merchant&apos;s connected Shopify or WooCommerce store and stores it so we can answer customers&apos; questions about their orders. We store the order number and date, the customer&apos;s name and email address, the shipping city, state, postal code and country, the order total and currency, payment and fulfillment status, and tracking details. We act on the merchant&apos;s behalf when making these requests.
      </p>
      <p>
        <strong>Slack (a merchant-configured destination, not a SolveBotic sub-processor).</strong> Separately from the sub-processors above, a merchant may configure a Slack webhook for escalation or return alerts. When they do, the content of those notifications &mdash; which can include an end-customer&apos;s conversation summary and email address &mdash; is sent to the merchant&apos;s own Slack workspace. This happens only when the merchant enables it; the destination, and the data-processing relationship with Slack, are the merchant&apos;s, not ours.
      </p>

      <h2>5. Data Retention and Deletion</h2>
      <p>
        We retain your account information and the associated support-conversation, order, and return-request data for as long as your account is active. When you ask us to close your account or delete your data, we delete it from our production systems within thirty (30) days &mdash; except for any records we are required to retain to comply with our legal obligations, resolve disputes, or enforce our agreements.
      </p>
      <p>
        After data is deleted from our production systems, residual copies may remain in our encrypted, access-controlled backups for a limited period. These backups are rotated on a schedule, and deleted data is purged from them within fourteen (14) days.
      </p>
      <p>
        You can ask us to close your account or delete your data at any time by contacting us at <a href="/contact">solvebotic.com/contact</a>, or by emailing us directly at <a href="mailto:privacy@solvebotic.com">privacy@solvebotic.com</a>.
      </p>

      <h2>6. Legal Basis for Processing (GDPR)</h2>
      <p>
        For individuals in the European Economic Area and the United Kingdom, our legal bases for processing personal data are:
      </p>
      <ul>
        <li><strong>Merchant data:</strong> performance of our contract with the merchant (to provide the service and manage the account), and our legitimate interests in securing the service and preventing abuse.</li>
        <li><strong>End-customer data:</strong> we process this only as a processor, on the instructions and lawful basis of the merchant, who is the controller of their end-customers&apos; personal data.</li>
      </ul>
      <p>
        We do not intentionally process special-category personal data (as defined in Article 9 of the GDPR); if end-customers voluntarily include such information in support conversations, it is processed only as described in Section 4.
      </p>

      <h2>7. Cookies and Local Storage</h2>
      <p>
        The SolveBotic dashboard sets strictly-necessary cookies to keep merchants signed in (managed by our authentication provider, Supabase). The embedded chat widget uses your browser&apos;s <code>sessionStorage</code> to hold a conversation session and does not set cookies. Our landing site sets no analytics or advertising cookies, and we do not use third-party tracking cookies anywhere.
      </p>
      <p>
        Because we use only strictly-necessary storage, no cookie-consent banner is required. You can clear cookies and local storage at any time through your browser settings; doing so will sign you out of the dashboard.
      </p>

      <h2>8. Data Sharing</h2>
      <p>We do not sell personal data.</p>
      <p>
        We share personal data only with the sub-processors listed on our <a href="/subprocessors">Sub-processors page</a> (see Section 4), who use it to provide services to us. We may also disclose information if we are required to do so by law, court order, or to protect the rights, property, or safety of SolveBotic, our users, or others.
      </p>
      <p>We do not share personal data with advertisers and do not use it for advertising purposes.</p>

      <h2>9. Your Rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct, delete, or receive a copy of the personal data we hold about you, and to object to or restrict certain processing.
      </p>
      <p>
        <strong>End-customers:</strong> If you interacted with a SolveBotic widget on a merchant&apos;s store and want to exercise any of these rights, please contact the merchant first &mdash; they are the controller of your data and will direct any necessary requests to us. We will assist the merchant in responding to verified requests.
      </p>
      <p>
        <strong>Merchants:</strong> You can exercise these rights by contacting us at <a href="/contact">solvebotic.com/contact</a>, or by emailing us directly at <a href="mailto:privacy@solvebotic.com">privacy@solvebotic.com</a>.
      </p>
      <p>
        We acknowledge the rights granted under the General Data Protection Regulation (GDPR) in the European Union and United Kingdom, and the California Consumer Privacy Act (CCPA), to the extent they apply.
      </p>

      <h2>10. Security</h2>
      <p>
        We use reasonable technical and organizational measures to protect personal data. These include transport-layer encryption (HTTPS), access controls on our database, scoped API credentials, and the security controls provided by our <a href="/subprocessors">sub-processors</a>.
      </p>
      <p>
        No security measure is perfect, and we cannot guarantee absolute security. We do not hold third-party security certifications and we do not claim any.
      </p>

      <h2>11. International Transfers</h2>
      <p>
        SolveBotic is based in the United States and our sub-processors operate in the United States and other jurisdictions. By using SolveBotic, you acknowledge that information may be transferred to and processed in countries outside your own, which may have different data-protection rules. Where applicable, we and our sub-processors rely on standard contractual safeguards for international transfers.
      </p>

      <h2>12. Children</h2>
      <p>
        SolveBotic is not directed to children under the age of 16. We do not knowingly collect personal information from children under 16. If you believe a child has provided us with personal information, please contact us so that we can delete it.
      </p>

      <h2>13. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. If we make material changes, we will revise the Effective Date above and, where reasonable, provide additional notice through the service. Your continued use of SolveBotic after the changes become effective indicates your acceptance of the revised policy.
      </p>

      <h2>14. Contact</h2>
      <p>
        For any questions about this policy or to exercise any of the rights described above, please contact us at <a href="/contact">solvebotic.com/contact</a>.
      </p>
    </LegalPageShell>
  );
}
