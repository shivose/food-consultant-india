import type { Metadata } from "next";
import Link from "next/link";
import LegalPageLayout from "@/components/LegalPageLayout";
import { siteBusiness, siteContact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service | FoodConsultPro",
  description:
    "Read the terms and conditions for using the FoodConsultPro website and engaging our restaurant consulting services.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated={siteBusiness.effectiveDate}>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the {siteBusiness.name}{" "}
        website and your interaction with our restaurant operations and FSSAI compliance consulting
        services. By accessing our website or submitting a consultation request, you agree to these
        Terms. If you do not agree, please do not use our website or services.
      </p>

      <h2>1. About FoodConsultPro</h2>
      <p>
        {siteBusiness.name} provides professional consulting services to restaurants and food businesses
        in India, including food safety audits, SOP development, staff training, and FSSAI compliance
        support. Information on this website is provided for general informational purposes and does not
        constitute legal, regulatory, or professional advice on its own.
      </p>

      <h2>2. Use of Our Website</h2>
      <p>You agree to use our website only for lawful purposes. You must not:</p>
      <ul>
        <li>Submit false, misleading, or fraudulent information through our contact form</li>
        <li>Attempt to gain unauthorized access to our systems or data</li>
        <li>Interfere with the proper functioning or security of the website</li>
        <li>Use automated tools to scrape, copy, or harvest content without our permission</li>
        <li>Use the website in any way that violates applicable laws or regulations</li>
      </ul>

      <h2>3. Consultation Requests</h2>
      <p>
        Submitting a consultation request through our website does not create a client relationship or
        binding contract. A formal engagement with {siteBusiness.name} begins only after mutual agreement
        on scope, deliverables, fees, and timelines, typically documented in a written proposal, statement
        of work, or service agreement.
      </p>
      <p>
        We reserve the right to decline or discontinue communication regarding any inquiry at our
        discretion, including where we determine that our services are not a suitable fit.
      </p>

      <h2>4. Consulting Services</h2>
      <p>
        Our consulting services are advisory in nature. While we apply professional expertise to help
        improve food safety practices, operational processes, and compliance readiness, you remain
        solely responsible for your restaurant&apos;s day-to-day operations and regulatory compliance.
      </p>
      <p>Specific service terms, including deliverables, timelines, and fees, will be defined in a separate written agreement when you engage us as a client.</p>

      <h2>5. No Guarantee of Outcomes</h2>
      <p>
        {siteBusiness.name} does not guarantee specific business results, revenue outcomes, inspection
        outcomes, or regulatory approvals. We do not guarantee that your business will pass an FSSAI
        inspection, receive a license, or avoid penalties. Compliance outcomes depend on many factors
        outside our control, including your implementation of recommendations and changes in applicable
        regulations.
      </p>

      <h2>6. Client Responsibilities</h2>
      <p>If you engage our consulting services, you agree to:</p>
      <ul>
        <li>Provide accurate and complete information about your operations</li>
        <li>Grant reasonable access to relevant staff, records, and premises as needed</li>
        <li>Implement agreed recommendations in a timely manner where applicable</li>
        <li>Maintain your own legal and regulatory obligations as a food business operator</li>
      </ul>

      <h2>7. Intellectual Property</h2>
      <p>
        All content on this website — including text, graphics, logos, branding, and layout — is owned
        by or licensed to {siteBusiness.name} and is protected by applicable intellectual property laws.
        You may not copy, reproduce, distribute, or create derivative works from our website content
        without our prior written consent.
      </p>
      <p>
        Ownership and licensing of consulting deliverables (such as SOPs, audit reports, or training
        materials) will be specified in your service agreement. Unless otherwise agreed in writing,
        general methodologies and frameworks used by {siteBusiness.name} remain our intellectual property.
      </p>

      <h2>8. Third-Party Links and Tools</h2>
      <p>
        Our website may include links to third-party websites or services, such as Google Maps, WhatsApp,
        email providers, or social media platforms. We do not control and are not responsible for the
        content, policies, or practices of those third parties. Your use of third-party services is
        subject to their respective terms and policies.
      </p>

      <h2>9. Disclaimer of Warranties</h2>
      <p>
        Our website and any information provided through it are offered on an &quot;as is&quot; and
        &quot;as available&quot; basis. To the fullest extent permitted by law, {siteBusiness.name}{" "}
        disclaims all warranties, express or implied, including warranties of merchantability, fitness
        for a particular purpose, and non-infringement.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, {siteBusiness.name} shall not be liable for
        any indirect, incidental, special, consequential, or punitive damages, including loss of profits,
        revenue, data, or business opportunities, arising from your use of our website or services.
      </p>
      <p>
        Where liability cannot be excluded, our total liability for any claim arising out of or relating
        to our website or services shall be limited to the amount you paid us for the specific consulting
        engagement giving rise to the claim, or INR 10,000, whichever is lower.
      </p>

      <h2>11. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless {siteBusiness.name}, its consultants, and affiliates
        from any claims, losses, damages, or expenses (including reasonable legal fees) arising from your
        misuse of the website, violation of these Terms, or failure to comply with applicable laws in
        connection with your food business operations.
      </p>

      <h2>12. Privacy</h2>
      <p>
        Your use of our website is also governed by our{" "}
        <Link href="/privacy">Privacy Policy</Link>, which explains how we collect and handle personal
        information. By using our website, you acknowledge that you have read and understood our Privacy
        Policy.
      </p>

      <h2>13. Governing Law and Jurisdiction</h2>
      <p>
        These Terms are governed by the laws of India. Any disputes arising out of or relating to these
        Terms or your use of our website shall be subject to the exclusive jurisdiction of the courts
        located in {siteBusiness.jurisdiction}.
      </p>

      <h2>14. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. When we do, we will revise the &quot;Last
        updated&quot; date at the top of this page. Your continued use of the website after changes are
        posted constitutes acceptance of the updated Terms.
      </p>

      <h2>15. Contact Information</h2>
      <p>For questions about these Terms, contact us at:</p>
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
      </ul>
    </LegalPageLayout>
  );
}
