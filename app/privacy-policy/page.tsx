export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>PRIVACY & SECURITY</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary mb-6 tracking-tight leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-secondary-muted font-light leading-relaxed max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-secondary-muted mt-4 font-light">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Introduction */}
              <section className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 lg:p-10 border-2 border-primary/20">
                <p className="text-lg text-secondary-muted font-light leading-relaxed">
                  At ProScience Nutra, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. By using our website, you consent to the data practices described in this policy.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-secondary">Information We Collect</h2>
                </div>
                <p className="text-secondary-muted font-light mb-6 leading-relaxed">
                  We collect information that you provide directly to us, including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Name and contact information (email, phone, address)',
                    'Payment information (processed securely through third-party providers)',
                    'Order history and preferences',
                    'Communication preferences',
                    'Account credentials (if you create an account)',
                    'Product reviews and feedback',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-secondary-muted font-light leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <p className="text-sm text-blue-900 font-light">
                    <strong className="font-bold">Note:</strong> We also automatically collect certain information when you visit our website, such as your IP address, browser type, device information, and usage patterns through cookies and similar technologies.
                  </p>
                </div>
              </section>

              {/* How We Use Information */}
              <section className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-secondary">How We Use Your Information</h2>
                </div>
                <p className="text-secondary-muted font-light mb-6 leading-relaxed">
                  We use the information we collect to:
                </p>
                <div className="space-y-4">
                  {[
                    { icon: '🛒', title: 'Process Orders', desc: 'Process and fulfill your orders, send order confirmations and updates' },
                    { icon: '💬', title: 'Customer Support', desc: 'Respond to your inquiries and provide customer support' },
                    { icon: '📧', title: 'Marketing', desc: 'Send you marketing communications (with your consent)' },
                    { icon: '🔧', title: 'Improve Services', desc: 'Improve our website and services based on usage patterns' },
                    { icon: '⚖️', title: 'Legal Compliance', desc: 'Comply with legal obligations and protect our rights' },
                    { icon: '🔒', title: 'Security', desc: 'Detect and prevent fraud, abuse, and security issues' },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <h3 className="font-bold text-secondary mb-1">{item.title}</h3>
                        <p className="text-secondary-muted font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Information Sharing */}
              <section className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-secondary">Information Sharing</h2>
                </div>
                <div className="space-y-4 text-secondary-muted font-light leading-relaxed">
                  <p>
                    <strong className="font-bold text-secondary">We do not sell your personal information.</strong> We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our customers, as long as those parties agree to keep this information confidential.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <p className="font-bold text-secondary mb-3">We may share information with:</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Payment processors for transaction processing</li>
                      <li>Shipping companies for order fulfillment</li>
                      <li>Email service providers for communications</li>
                      <li>Analytics providers to understand website usage</li>
                      <li>Legal authorities when required by law</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Security */}
              <section className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-secondary">Data Security</h2>
                </div>
                <div className="space-y-4 text-secondary-muted font-light leading-relaxed">
                  <p>
                    We implement appropriate security measures to protect your personal information, including:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'SSL encryption for data transmission',
                      'Secure payment processing',
                      'Regular security audits',
                      'Access controls and authentication',
                      'Data encryption at rest',
                      'Employee training on data protection',
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <p className="text-sm text-yellow-900 font-light">
                      <strong className="font-bold">Important:</strong> While we strive to protect your personal information, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                  </div>
                </div>
              </section>

              {/* Your Rights */}
              <section className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-secondary">Your Rights</h2>
                </div>
                <p className="text-secondary-muted font-light mb-6 leading-relaxed">
                  You have the following rights regarding your personal information:
                </p>
                <div className="space-y-4">
                  {[
                    { title: 'Access', desc: 'Request access to your personal information we hold' },
                    { title: 'Correction', desc: 'Correct inaccurate or incomplete information' },
                    { title: 'Deletion', desc: 'Request deletion of your personal information' },
                    { title: 'Opt-Out', desc: 'Opt-out of marketing communications at any time' },
                    { title: 'Data Portability', desc: 'Request a copy of your data in a portable format' },
                    { title: 'Objection', desc: 'Object to certain processing of your information' },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-secondary mb-1">{item.title}</h3>
                        <p className="text-secondary-muted font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <p className="text-sm text-blue-900 font-light">
                    To exercise any of these rights, please contact us using the information provided below.
                  </p>
                </div>
              </section>

              {/* Cookies */}
              <section className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-secondary">Cookies and Tracking</h2>
                </div>
                <div className="space-y-4 text-secondary-muted font-light leading-relaxed">
                  <p>
                    We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <p className="font-bold text-secondary mb-3">Types of cookies we use:</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
                      <li><strong>Analytics cookies:</strong> Help us understand how visitors use our website</li>
                      <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section className="bg-gradient-to-br from-secondary to-secondary-dark text-white rounded-2xl p-8 lg:p-10">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6">Questions About Privacy?</h2>
                <p className="text-white/90 font-light mb-6 leading-relaxed">
                  If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <a href="mailto:info@prosciencenutra.com" className="text-white/90 hover:text-white transition-colors font-light">
                      info@prosciencenutra.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Phone</h3>
                    <a href="tel:+13024993725" className="text-white/90 hover:text-white transition-colors font-light">
                      +1 (302) 499-3725
                    </a>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Address</h3>
                    <p className="text-white/90 font-light text-sm">
                      1013 Centre Road, Suite 403A<br />
                      City of Wilmington, Country of New Castle<br />
                      Delaware 19805
                    </p>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors"
                >
                  Contact Us
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
