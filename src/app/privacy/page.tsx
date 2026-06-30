import type { Metadata } from "next";
import Link from "next/link";
import LegalPageLayout from "@/components/LegalPageLayout";
import { siteBusiness, siteContact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | FoodConsultPro",
  description:
    "Learn how FoodConsultPro collects, uses, and protects your personal information when you use our website or request a consultation.",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated={siteBusiness.effectiveDate}>
      <p>
        {siteBusiness.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the FoodConsultPro
        website and provides restaurant operations and FSSAI compliance consulting services in India.
        This Privacy Policy explains how we collect, use, store, and protect your personal information
        when you visit our website or submit a consultation request.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of information:</p>

      <h3>Information you provide directly</h3>
      <p>When you fill out our consultation form or contact us, we may collect:</p>
      <ul>
        <li>Full name</li>
        <li>Restaurant or business name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>City or location</li>
        <li>Message or inquiry details</li>
      </ul>

      <h3>Information collected automatically</h3>
      <p>
        When you visit our website, we may automatically collect technical information such as your IP
        address, browser type, device type, operating system, referring URLs, and pages viewed. If we
        enable analytics or advertising tools (such as Google Analytics or Google Tag Manager), those
        services may also collect usage data through cookies and similar technologies.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Respond to your consultation requests and follow up with you</li>
        <li>Schedule calls, meetings, or on-site assessments</li>
        <li>Provide information about our consulting services</li>
        <li>Improve our website, content, and user experience</li>
        <li>Measure marketing performance and website analytics (where enabled)</li>
        <li>Comply with applicable legal obligations</li>
      </ul>
      <p>We do not sell your personal information to third parties.</p>

      <h2>3. Legal Basis for Processing (India)</h2>
      <p>
        We process your personal data based on your consent when you submit our contact form, and for
        legitimate business purposes such as responding to inquiries and providing consulting services.
        This policy is designed to align with India&apos;s Digital Personal Data Protection Act, 2023
        (DPDP Act), to the extent applicable to our operations.
      </p>

      <h2>4. How We Share Your Information</h2>
      <p>We may share your information only with trusted service providers who help us operate our business, including:</p>
      <ul>
        <li>
          <strong>Resend</strong> — to deliver consultation form submissions to our email inbox
        </li>
        <li>
          <strong>Website hosting providers</strong> — to host and serve our website securely
        </li>
        <li>
          <strong>Analytics and advertising platforms</strong> (such as Google Analytics or Google Ads)
          — if enabled, to understand website traffic and measure ad performance
        </li>
        <li>
          <strong>Communication platforms</strong> — such as WhatsApp or email, when you choose to
          contact us through those channels
        </li>
      </ul>
      <p>
        These providers process data on our behalf and are expected to maintain appropriate security
        measures. We may also disclose information if required by law, court order, or government
        authority.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain consultation inquiry data for as long as necessary to respond to your request, manage
        our business relationship, and comply with legal or regulatory requirements. If you do not become
        a client, we typically retain inquiry records for up to 24 months unless a longer period is
        required by law or you request earlier deletion.
      </p>

      <h2>6. Data Security</h2>
      <p>
        We use reasonable administrative, technical, and organizational measures to protect your
        personal information, including HTTPS encryption on our website and secure email delivery through
        our service providers. However, no method of transmission or storage over the internet is
        completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>7. Your Rights</h2>
      <p>Subject to applicable law, you may have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Request correction of inaccurate or incomplete data</li>
        <li>Request deletion of your personal data</li>
        <li>Withdraw consent for processing where consent is the basis</li>
        <li>Lodge a grievance regarding our handling of your personal data</li>
      </ul>
      <p>
        To exercise these rights, contact us using the details in the &quot;Contact &amp; Grievance
        Redressal&quot; section below. We will respond within a reasonable timeframe as required under
        applicable law.
      </p>

      <h2>8. Cookies and Tracking Technologies</h2>
      <p>
        Our website may use essential cookies required for basic functionality. If we enable analytics
        or advertising tools, additional cookies may be used to understand how visitors interact with
        our site and to measure campaign performance. You can control cookies through your browser
        settings and, where available, through third-party opt-out tools provided by analytics or
        advertising platforms.
      </p>

      <h2>9. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party services such as Google Maps, WhatsApp, or social
        media platforms. We are not responsible for the privacy practices of those third parties. We
        encourage you to review their privacy policies before providing any personal information.
      </p>

      <h2>10. Children&apos;s Privacy</h2>
      <p>
        Our website and services are intended for business owners and professionals. We do not knowingly
        collect personal information from individuals under 18 years of age. If you believe we have
        collected such information, please contact us so we can delete it.
      </p>

      <h2>11. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will revise the &quot;Last
        updated&quot; date at the top of this page. Continued use of our website after changes are
        posted constitutes your acknowledgment of the updated policy.
      </p>

      <h2>12. Contact &amp; Grievance Redressal</h2>
      <p>
        If you have questions about this Privacy Policy or wish to exercise your data rights, contact
        us at:
      </p>
      <ul>
        <li>
          <strong>Business name:</strong> {siteBusiness.name}
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${siteBusiness.email}`}>{siteBusiness.email}</a>
        </li>
        <li>
          <strong>Phone:</strong> {siteContact.phoneDisplay}
        </li>
        <li>
          <strong>Address:</strong> {siteContact.address}
        </li>
        <li>
          <strong>Grievance officer:</strong> {siteBusiness.grievanceOfficer}
        </li>
      </ul>
      <p>
        For terms governing use of our website and services, please see our{" "}
        <Link href="/terms">Terms of Service</Link>.
      </p>
    </LegalPageLayout>
  );
}
