export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>RETURN POLICY</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary mb-6 tracking-tight leading-tight">
              Return Policy
            </h1>
            <p className="text-xl text-secondary-muted font-light leading-relaxed max-w-2xl mx-auto">
              Your satisfaction is our priority. Learn about our hassle-free return process and 30-day money-back guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* 30-Day Guarantee Card */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 lg:p-10 mb-12 border-2 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-secondary mb-4">30-Day Money-Back Guarantee</h2>
                  <p className="text-lg text-secondary-muted font-light leading-relaxed">
                    At ProScience Nutra, we stand behind the quality of our products. If you're not completely satisfied with your purchase, you can return it within 30 days of delivery for a full refund. No questions asked.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              {/* Return Conditions */}
              <section className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-secondary">Return Conditions</h2>
                </div>
                <p className="text-secondary-muted font-light mb-6 leading-relaxed">
                  To be eligible for a return, please ensure the following conditions are met:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: '📅', text: 'Items must be returned within 30 days of delivery' },
                    { icon: '📦', text: 'Products must be unopened and in original packaging' },
                    { icon: '✨', text: 'Items must be in resalable condition' },
                    { icon: '🧾', text: 'Original receipt or order confirmation required' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <p className="text-secondary-muted font-light leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* How to Return */}
              <section className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-secondary">How to Return</h2>
                </div>
                <div className="space-y-6">
                  {[
                    { step: 1, title: 'Contact Us', desc: 'Contact our customer service team at info@prosciencenutra.com or call +1 (302) 499-3725' },
                    { step: 2, title: 'Provide Details', desc: 'Provide your order number and reason for return' },
                    { step: 3, title: 'Get Authorization', desc: 'Receive a return authorization and prepaid shipping label' },
                    { step: 4, title: 'Ship Back', desc: 'Package the item securely and ship it back to us using the provided label' },
                    { step: 5, title: 'Receive Refund', desc: 'Once received, we\'ll process your refund within 5-7 business days' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                        <p className="text-secondary-muted font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Refund Process */}
              <section className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-secondary">Refund Process</h2>
                </div>
                <div className="space-y-4 text-secondary-muted font-light leading-relaxed">
                  <p>
                    Refunds will be issued to the original payment method used for the purchase. Processing typically takes 5-7 business days after we receive your returned item.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <p className="font-bold text-secondary mb-2">Important Notes:</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Refunds may take 1-2 additional business days to appear in your account, depending on your bank or credit card company</li>
                      <li>Original shipping costs are non-refundable unless the return is due to our error</li>
                      <li>For defective or damaged items, we will cover return shipping costs</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Exchanges */}
              <section className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-secondary">Exchanges</h2>
                </div>
                <p className="text-secondary-muted font-light leading-relaxed">
                  We currently do not offer direct exchanges. If you need a different product, please return the original item and place a new order. We'll process your refund quickly so you can order the correct item.
                </p>
              </section>

              {/* Contact Section */}
              <section className="bg-gradient-to-br from-secondary to-secondary-dark text-white rounded-2xl p-8 lg:p-10">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6">Need Help with Returns?</h2>
                <p className="text-white/90 font-light mb-6 leading-relaxed">
                  Our customer service team is here to assist you with any questions about returns or to help initiate a return.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>
                <div className="mt-6">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors"
                  >
                    Contact Support
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
