export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary mb-8 tracking-tight">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-secondary-muted font-light leading-relaxed">
            <section>
              <p className="text-sm text-secondary-muted mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p>
                At ProScience Nutra, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Name and contact information (email, phone, address)</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Order history and preferences</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Process and fulfill your orders</li>
                <li>Send you order confirmations and updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our customers, as long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">
                Email: <a href="mailto:info@prosciencenutra.com" className="text-primary hover:underline">info@prosciencenutra.com</a><br />
                Phone: <a href="tel:+13024993725" className="text-primary hover:underline">+1 (302) 499-3725</a><br />
                Address: 1013 Centre Road, Suite 403A, City of Wilmington, Country of New Castle, Delaware 19805
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

