import NavigationHeroSection from "@/components/NavigationHeroSection";

/**
 * PrivacyPolicy Component
 */
const PrivacyPolicy = () => {
  return (
    <section>
      {/* Page Hero with breadcrumb path */}
      <NavigationHeroSection title="Privacy Policy" path="Privacy Policy" />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Page Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center my-6">
          Corporate Social Responsibility Policy
        </h2>

        {/* Content Wrapper */}
        <div className="space-y-4">
          {/* Intro Section */}
          <p className="text-gray-500">
            At <strong>IndusViva,</strong> we value the trust you place in us. That’s why we insist upon the highest
            standards for secure transactions and customer information privacy.
            Please read the following statement to learn about our information gathering process and dissemination practices.
          </p>

          <p className="text-gray-500">
            <strong>Note:</strong>
          </p>

          <p className="text-gray-500">
            Our privacy policy is subject to change at any time without notice. To make sure you are aware of the changes,
            please keep visiting this page.
          </p>

          <p className="text-gray-500">
            By visiting this Website, you agree to be bound by the terms and conditions of this Privacy Policy.
            If you do not agree, please do not use or access our Website.
          </p>

          <p className="text-gray-500">
            The mere usage of the Website implies your consent to our use and disclosure of your personal information
            in accordance with this Privacy Policy, which is incorporated into and subjected to the Terms of Use.
          </p>

          {/* Section: Data Collection */}
          <h4 className="text-2xl font-semibold mb-3">
            Collection of Personally Identifiable and Other Information
          </h4>

          <p className="text-gray-500">
            When you use our Website, we collect and store your personal information which is provided by you from time to time.
            Our primary goal is to ensure a safe, efficient, smooth and customized experience.
          </p>

          <p className="text-gray-500">
            In general, you can browse the Website without revealing any personal information.
            Once you give us your information, you are not anonymous to us.
            You always have the option not to provide information by avoiding specific services or features.
          </p>

          <p className="text-gray-500">
            We may track behavioral patterns during usage for internal research such as demographics and interests.
            This helps us understand and serve users better. Data like referral URLs, browser info, and IP address
            may be collected and aggregated.
          </p>

          {/* Section: Usage of Information */}
          <h4 className="text-2xl font-semibold mb-3">
            Use of Demographic / Profile Data / Your Information
          </h4>

          <p className="text-gray-500">
            We use your information to provide the requested services. If we use it for marketing, you have an opt-out option.
            We also analyze user behavior to improve product offerings and user experience.
          </p>

          <p className="text-gray-500">
            IP address may be used for troubleshooting and demographic insights.
          </p>

          {/* Section: Cookies */}
          <p className="text-gray-500">
            <strong>Cookies</strong>
          </p>
          <p className="text-gray-500">
            A “cookie” is a small file stored in your browser that helps recognize returning users.
            Cookies help personalize the experience and store user preferences, without storing identifiable personal info.
          </p>

          {/* Section: Sharing Info */}
          <h4 className="text-2xl font-semibold mb-3">
            Sharing of Personal Information
          </h4>

          <p className="text-gray-500">
            We may share personal information if required by law or to enforce our policies,
            such as in legal proceedings or law enforcement investigations.
          </p>

          <p className="text-gray-500">
            If IndusViva is acquired or merged, user data may be transferred and the new entity must comply with this policy.
          </p>

          {/* Section: External Links */}
          <h4 className="text-2xl font-semibold mb-3">Links to Other Sites</h4>
          <p className="text-gray-500">
            Our Website may contain links to third-party websites that may collect personal information.
            Please review their policies individually, as we are not responsible for their privacy practices.
          </p>

          {/* Section: Security */}
          <h4 className="text-2xl font-semibold mb-3">Security Precautions</h4>
          <p className="text-gray-500">
            We follow industry-standard measures to protect user data from unauthorized access, misuse or loss.
            Once data is with us, it is handled securely according to strict internal protocols.
          </p>

          {/* Section: Consent */}
          <h4 className="text-2xl font-semibold mb-3">Your Consent</h4>
          <p className="text-gray-500">
            By using our site or submitting your information, you consent to our privacy practices as described.
          </p>

          <p className="text-gray-500">
            Any future changes to this policy will be reflected on this page for your review.
          </p>

          {/* Section: Contact */}
          <h4 className="text-2xl font-semibold mb-3">Contact Details</h4>
          <p className="text-gray-500">
            If you have questions or concerns about this policy or your data, please contact us:
          </p>

          <p className="text-gray-500">
            <strong>
              IndusViva HealthSciences Pvt Ltd,<br />
              Viva Tower, No.36,<br />
              V P Deendayal Road, Jayamahal Extension,<br />
              Bangalore – 560046, Karnataka, India<br />
              Email: compliance@indusviva.com
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
