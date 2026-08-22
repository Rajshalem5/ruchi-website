import { PageLayout } from '../components/PageLayout'

export function PrivacyPolicy() {
  return (
    <PageLayout title="Privacy Policy">
      <p className="legal-meta">Last updated: August 22, 2026</p>

      <section className="legal-section">
        <h2>Introduction</h2>
        <p>
          Ruchi (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your
          privacy. This Privacy Policy explains how we collect, use, store, and
          protect your information when you use our website and services.
        </p>
      </section>

      <section className="legal-section">
        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Account information</strong> — such as your email address
            and display name when you create an account.
          </li>
          <li>
            <strong>Usage data</strong> — such as how you interact with the
            app, feature usage, and session information.
          </li>
          <li>
            <strong>Voice and conversation data</strong> — audio and transcripts
            from your interactions, processed to provide the service.
          </li>
          <li>
            <strong>Device and technical data</strong> — such as device type,
            operating system, and app version for troubleshooting and security.
          </li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide, maintain, and improve the Ruchi service</li>
          <li>Personalize your experience and respond to your requests</li>
          <li>Send important service-related communications</li>
          <li>Monitor for abuse, fraud, and security issues</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>We Do Not Sell Your Data</h2>
        <p>
          We do not sell, rent, or trade your personal information to third
          parties for their marketing purposes. We do not share your data with
          advertisers or data brokers.
        </p>
        <p>
          We may share limited information with trusted service providers who
          help us operate the service (such as cloud hosting or analytics), and
          only under strict contractual obligations to protect your data and use
          it solely for the purposes we specify.
        </p>
      </section>

      <section className="legal-section">
        <h2>Data Retention</h2>
        <p>
          We retain your information only for as long as necessary to provide
          the service, fulfill the purposes described in this policy, or comply
          with legal requirements. When you delete your account or request data
          deletion, we will remove or anonymize your personal data within a
          reasonable timeframe, except where retention is required by law.
        </p>
      </section>

      <section className="legal-section">
        <h2>Your Rights</h2>
        <p>Depending on where you live, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Correct inaccurate or incomplete data</li>
          <li>Request deletion of your data or account</li>
          <li>Export your data in a portable format</li>
          <li>Object to or restrict certain processing</li>
          <li>Withdraw consent where processing is consent-based</li>
        </ul>
        <p>
          You can exercise these rights through the in-app settings or by
          contacting us at{' '}
          <a href="mailto:privacy@maaruchi.com">privacy@maaruchi.com</a>.
        </p>
      </section>

      <section className="legal-section">
        <h2>Security</h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your information against unauthorized access, alteration,
          disclosure, or destruction. No method of transmission or storage is
          completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="legal-section">
        <h2>Children&apos;s Privacy</h2>
        <p>
          Ruchi is not intended for children under 13 (or the applicable age of
          consent in your jurisdiction). We do not knowingly collect personal
          information from children. If you believe we have collected data from
          a child, please contact us and we will delete it promptly.
        </p>
      </section>

      <section className="legal-section">
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of material changes by posting the updated policy on this page and
          updating the &quot;Last updated&quot; date. Your continued use of the
          service after changes constitutes acceptance of the updated policy.
        </p>
      </section>

      <section className="legal-section">
        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or our data practices,
          contact us at{' '}
          <a href="mailto:privacy@maaruchi.com">privacy@maaruchi.com</a>.
        </p>
      </section>
    </PageLayout>
  )
}
