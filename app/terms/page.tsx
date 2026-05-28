{/* TODO before Go Live: replace [ENTITY_NAME] with the registered Colorado LLC name once filed */}
{/* TODO before Go Live: replace [EFFECTIVE_DATE] with the actual launch date */}

import type { Metadata } from "next";
import { LegalPageShell } from "../components/LegalPageShell";

export const metadata: Metadata = {
  title: "Terms of Service — SolveBotic",
  description:
    "The terms governing your use of SolveBotic, including subscription, billing, merchant responsibilities, and the limits of the service.",
};

export default function TermsPage() {
  return (
    <LegalPageShell title="Terms of Service" effectiveDate="[EFFECTIVE_DATE]">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of SolveBotic, an AI-powered customer support platform operated by [ENTITY_NAME], a Colorado limited liability company (&ldquo;SolveBotic,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using SolveBotic you agree to these Terms.
      </p>
      <p>If you do not agree, do not use the service.</p>

      <h2>1. The Service</h2>
      <p>SolveBotic provides an AI-powered customer support tool for ecommerce brands. The service:</p>
      <ul>
        <li>Embeds a chat widget on the merchant&apos;s store</li>
        <li>Uses AI to classify and respond to support messages</li>
        <li>Integrates with Shopify and WooCommerce to retrieve order data</li>
        <li>Tracks return requests and escalations</li>
        <li>Provides a dashboard for the merchant to review activity</li>
      </ul>
      <p>
        We may update the service from time to time. We may also add, change, or remove features at our discretion.
      </p>

      <h2>2. Eligibility and Accounts</h2>
      <p>
        To use SolveBotic, you must be at least 18 years old and either a business owner or a person authorized to act on behalf of a business.
      </p>
      <p>
        You agree to provide accurate, current, and complete information when creating an account, and to keep that information up to date. You are responsible for safeguarding your account credentials and for all activity that occurs under your account.
      </p>

      <h2>3. Billing and Subscription</h2>
      <p>
        <strong>Plans.</strong> SolveBotic is offered on a monthly subscription basis across multiple tiers. Current plans, prices, and per-plan limits are described at <a href="/#pricing">solvebotic.com</a>. Enterprise pricing is available on request.
      </p>
      <p>
        <strong>Trial.</strong> New accounts start with a 14-day free trial. A valid payment card is required at signup. At the end of the trial, your card is automatically charged for the selected plan unless you cancel before the trial ends.
      </p>
      <p>
        <strong>Recurring charges.</strong> After any trial, you are billed monthly in advance for your selected plan. Your payment card on file is charged automatically each billing period until you cancel.
      </p>
      <p>
        <strong>Cancellation.</strong> You may cancel your subscription at any time from the billing area of the dashboard. Cancellation stops future charges and takes effect at the end of the current billing period. You will continue to have access to the service until then.
      </p>
      <p>
        <strong>Refunds.</strong> Payments are non-refundable, including for partial months, unused time, downgrades, or periods during which you did not actively use the service. [ENTITY_NAME] may, in its sole discretion, issue refunds in individual cases, but is under no obligation to do so.
      </p>
      <p>
        <strong>Price changes.</strong> We may change pricing or plan terms by giving you reasonable notice (for example, by email or through the dashboard). Any changes apply to subsequent billing periods, not the current one.
      </p>
      <p>
        <strong>Plan limits.</strong> Each plan has a limit on the number of connected brands, as described on our pricing page. The service may prevent connecting more brands than your plan allows.
      </p>

      <h2>4. SolveBotic Does Not Process Refunds or Payments</h2>
      <p>This section is important &mdash; please read it carefully.</p>
      <p>
        <strong>SolveBotic is a support and tracking tool. It does not process, issue, or handle refunds, returns, or payments to your end-customers.</strong>
      </p>
      <p>
        When the AI assists an end-customer with a return or refund inquiry, it gathers information about the request (such as the order number, reason, and category) and creates a record in your dashboard so that you can act on it. <strong>You &mdash; the merchant &mdash; are solely responsible for deciding whether to issue any refund, return, or other remedy, and for processing that decision through your own payment, checkout, or order-management systems.</strong>
      </p>
      <p>
        Marking a return as &ldquo;refunded&rdquo; in the SolveBotic dashboard is a record of an action you have taken outside of SolveBotic. It is not an action that SolveBotic performs on your behalf, and it does not transfer any money.
      </p>

      <h2>5. Merchant Responsibilities</h2>
      <p>As a merchant using SolveBotic, you are responsible for:</p>
      <ul>
        <li>Your relationship with your own end-customers, including communicating with them and resolving their support inquiries</li>
        <li>The accuracy and lawfulness of any FAQ, knowledge-base, or policy content you provide to SolveBotic &mdash; the AI uses this content to answer end-customer questions</li>
        <li>All actual refund, return, cancellation, and shipping decisions, and for processing those decisions through your own systems</li>
        <li>Compliance with all laws and regulations that apply to your business, including consumer-protection, tax, and advertising rules</li>
        <li>Ensuring you have the right to connect your Shopify, WooCommerce, or other store data to SolveBotic</li>
        <li>Your own privacy and data-protection obligations to your end-customers as the controller of their personal data (see our <a href="/privacy">Privacy Policy</a>)</li>
      </ul>

      <h2>6. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use SolveBotic for any unlawful purpose or in violation of any applicable law or regulation</li>
        <li>Attempt to interfere with, disable, or overload the service or the AI</li>
        <li>Attempt to reverse-engineer, decompile, or extract the source code of SolveBotic</li>
        <li>Use SolveBotic to send spam, harass, defraud, or harm anyone</li>
        <li>Use the AI to generate content that violates applicable law or the rights of others</li>
      </ul>

      <h2>7. Intellectual Property</h2>
      <p>
        SolveBotic, including the underlying software, the widget, the dashboard, and all related materials, is owned by [ENTITY_NAME] and protected by intellectual-property laws. These Terms do not grant you any ownership rights in SolveBotic.
      </p>
      <p>
        You retain ownership of the content and data you provide to SolveBotic. You grant us a non-exclusive, worldwide license to use that content and data solely as needed to operate the service for you, including by transmitting it to the sub-processors listed in our Privacy Policy.
      </p>

      <h2>8. AI Limitations</h2>
      <p>
        The AI used by SolveBotic may produce inaccurate, incomplete, or inappropriate responses. AI responses are generated based on the message content, conversation history, and any knowledge-base content you provide; they are not reviewed by a human before being sent.
      </p>
      <p>
        SolveBotic does not guarantee that AI responses will be correct, suitable, or fit for any particular purpose. You are responsible for reviewing escalated matters and for any decisions you make based on AI output.
      </p>

      <h2>9. Disclaimer of Warranties</h2>
      <p>
        The service is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, non-infringement, and any warranties arising from course of dealing or usage of trade. To the maximum extent permitted by law, we disclaim all such warranties.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, [ENTITY_NAME] and its officers, employees, and affiliates will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, data, goodwill, or business opportunity, arising out of or related to your use of the service, even if we have been advised of the possibility of such damages.
      </p>
      <p>
        Our total cumulative liability for any claim arising out of or related to these Terms or the service will not exceed the total fees you paid to SolveBotic in the twelve (12) months immediately preceding the event giving rise to the claim.
      </p>

      <h2>11. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless [ENTITY_NAME] and its officers, employees, and affiliates from and against any claims, damages, liabilities, losses, and expenses (including reasonable attorneys&apos; fees) arising out of or related to: (a) your use of the service; (b) the content or data you provide to the service, including your FAQ and knowledge-base content; (c) your relationship with your end-customers, including any refund, return, or cancellation decisions; (d) your violation of these Terms; or (e) your violation of any law or the rights of any third party.
      </p>

      <h2>12. Termination</h2>
      <p>
        You may stop using SolveBotic at any time and cancel your subscription as described in Section 3.
      </p>
      <p>
        We may suspend or terminate your access to the service if you violate these Terms, if your payment fails, or if we are required to do so by law. We will provide reasonable notice where practical.
      </p>
      <p>
        After termination, we will handle your data in accordance with the retention practices described in our <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>13. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of Colorado, United States, without regard to its conflict-of-laws principles. You agree that any action arising out of or related to these Terms or the service will be brought exclusively in the state or federal courts located in Colorado, and you consent to the personal jurisdiction of those courts.
      </p>

      <h2>14. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. If we make material changes, we will revise the Effective Date above and, where reasonable, provide additional notice through the service. Your continued use of SolveBotic after the changes become effective indicates your acceptance of the revised Terms.
      </p>

      <h2>15. Contact</h2>
      <p>
        For any questions about these Terms, please contact us at <a href="/contact">solvebotic.com/contact</a>.
      </p>
    </LegalPageShell>
  );
}
