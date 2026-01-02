export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>TERMS & CONDITIONS</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary mb-6 tracking-tight leading-tight">
              Terms of Service
            </h1>
            <p className="text-xl text-secondary-muted font-light leading-relaxed max-w-2xl mx-auto">
              Please read these terms carefully before using our website and services.
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
                  Please read these Terms of Service carefully before using the ProScience Nutra website. By accessing or using our website, you agree to be bound by these terms. If you do not agree to these terms, please do not use our website.
                </p>
              </section>

              {/* Acceptance of Terms */}
              <section className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-secondary">Acceptance of Terms</h2>
                </div>
                <p className="text-secondary-muted font-light leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our website.
                </p>
              </section>

              {/* Use License */}
              <section className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-secondary">Use License</h2>
                </div>
                <p className="text-secondary-muted font-light mb-6 leading-relaxed">
                  Permission is granted to temporarily download one copy of the materials on ProScience Nutra's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Modify or copy the materials',
                    'Use the materials for any commercial purpose',
                    'Attempt to decompile or reverse engineer any software',
                    'Remove any copyright or other proprietary notations',
                    'Transfer the materials to another person',
                    'Mirror the materials on any other server',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                      <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <p className="text-secondary-muted font-light leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Product Information */}
              <section className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-secondary">Product Information</h2>
                </div>
                <div className="space-y-4 text-secondary-muted font-light leading-relaxed">
                  <p>
                    We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions or other content on this site is accurate, complete, reliable, current, or error-free.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <p className="font-bold text-secondary mb-2">Important Notes:</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Product images are for illustrative purposes and may not reflect the exact appearance</li>
                      <li>We reserve the right to correct any errors, inaccuracies, or omissions</li>
                      <li>We reserve the right to refuse or cancel any order at any time</li>
                      <li>Prices are subject to change without notice</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Health Disclaimer */}
              <section className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-red-200 bg-red-50/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-secondary">Health Disclaimer</h2>
                </div>
                <div className="space-y-4 text-secondary-muted font-light leading-relaxed">
                  <p className="font-bold text-secondary">
                    Our supplements are not intended to diagnose, treat, cure, or prevent any disease.
                  </p>
                  <p>
                    Always consult with a healthcare professional before starting any new supplement regimen, especially if you have a medical condition or are taking medication. The information provided on this website is for educational purposes only and should not be considered medical advice.
                  </p>
                  <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                    <p className="font-bold text-red-600 mb-2">⚠️ Important Warning:</p>
                    <ul className="space-y-2 list-disc list-inside text-red-700">
                      <li>Consult your physician before use if you are pregnant, nursing, or have a medical condition</li>
                      <li>Keep out of reach of children</li>
                      <li>Do not exceed recommended dosage</li>
                      <li>Discontinue use and consult a physician if adverse reactions occur</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-secondary">Limitation of Liability</h2>
                </div>
                <div className="space-y-4 text-secondary-muted font-light leading-relaxed">
                  <p>
                    In no event shall ProScience Nutra or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <p className="font-bold text-secondary mb-3">Limitations include:</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Indirect, incidental, or consequential damages</li>
                      <li>Loss of profits, revenue, or data</li>
                      <li>Business interruption or loss of business opportunities</li>
                      <li>Personal injury or property damage resulting from product use</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Payment Terms */}
              <section className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-secondary">Payment Terms</h2>
                </div>
                <div className="space-y-4 text-secondary-muted font-light leading-relaxed">
                  <p>All payments are processed securely through our payment partners. By placing an order, you agree to:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Pay the full amount for all products ordered</li>
                    <li>Provide accurate payment information</li>
                    <li>Authorize us to charge your payment method</li>
                    <li>Accept that prices are subject to change</li>
                    <li>Understand that all sales are final unless otherwise stated</li>
                  </ul>
                </div>
              </section>

              {/* Revisions */}
              <section className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-secondary">Revisions</h2>
                </div>
                <p className="text-secondary-muted font-light leading-relaxed">
                  ProScience Nutra may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service. We encourage you to review these terms periodically.
                </p>
              </section>

              {/* Contact Section */}
              <section className="bg-gradient-to-br from-secondary to-secondary-dark text-white rounded-2xl p-8 lg:p-10">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6">Questions About Terms?</h2>
                <p className="text-white/90 font-light mb-6 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
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
