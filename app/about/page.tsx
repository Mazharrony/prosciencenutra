export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>SCIENCE-DRIVEN NUTRITION</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary mb-8 tracking-tight leading-tight">
              FUELING PERFORMANCE
              <span className="block text-primary mt-2">WITH SCIENCE</span>
            </h1>
            <div className="space-y-6 text-lg lg:text-xl text-secondary-muted font-light leading-relaxed max-w-3xl mx-auto">
              <p>
                At ProScience Nutra, our mission is simple: to provide clean, effective, and science-backed supplements that help you perform at your best. We combine advanced research with premium ingredients to create nutrition you can trust — whether you're an athlete, fitness enthusiast, or simply committed to a healthier lifestyle.
              </p>
              <p>
                Every formula is crafted with transparency and quality in mind. No shortcuts. No fillers. Just proven nutrition designed to support strength, recovery, and overall well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - Enhanced with Icons */}
      <section className="py-20 lg:py-24 bg-white border-y-2 border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-6xl lg:text-7xl font-bold text-primary mb-4">100%</div>
              <p className="text-xl text-secondary font-bold mb-2">Science-backed formulations</p>
              <p className="text-base text-secondary-muted font-light">Every product is backed by clinical research and scientific evidence</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-6xl lg:text-7xl font-bold text-primary mb-4">10K+</div>
              <p className="text-xl text-secondary font-bold mb-2">Customers served worldwide</p>
              <p className="text-base text-secondary-muted font-light">Trusted by athletes and health enthusiasts globally</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="text-6xl lg:text-7xl font-bold text-primary mb-4">100%</div>
              <p className="text-xl text-secondary font-bold mb-2">Clinically researched ingredients</p>
              <p className="text-base text-secondary-muted font-light">Used across all our product formulations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section - New */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>OUR STORY</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-6 tracking-tight">
                  Built on Science, Driven by Results
                </h2>
                <div className="space-y-4 text-lg text-secondary-muted font-light leading-relaxed">
                  <p>
                    ProScience Nutra was founded with a simple yet powerful vision: to bridge the gap between cutting-edge scientific research and accessible, high-quality nutrition. Our journey began when our founders, a team of nutrition scientists and fitness professionals, recognized a critical need in the supplement industry.
                  </p>
                  <p>
                    Too many products on the market were filled with marketing hype but lacked the scientific rigor to back their claims. We set out to change that by creating a brand that prioritizes transparency, quality, and proven results above all else.
                  </p>
                  <p>
                    Today, we're proud to serve thousands of customers worldwide, from elite athletes to everyday health enthusiasts, all united by a shared commitment to optimal performance and well-being.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 lg:p-12 border-2 border-primary/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="text-3xl font-bold text-secondary mb-1">5+</div>
                      <div className="text-sm text-secondary-muted font-light">Years of Excellence</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-3xl font-bold text-secondary mb-1">50+</div>
                      <div className="text-sm text-secondary-muted font-light">Products</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div className="text-3xl font-bold text-secondary mb-1">15+</div>
                      <div className="text-sm text-secondary-muted font-light">Expert Scientists</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-3xl font-bold text-secondary mb-1">30+</div>
                      <div className="text-sm text-secondary-muted font-light">Countries Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Quality Section - Enhanced */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>OUR COMMITMENT</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 tracking-tight">
                Commitment to Quality
              </h2>
              <p className="text-xl text-secondary-muted font-light max-w-3xl mx-auto leading-relaxed">
                At ProScience Nutra, quality is not just a promise — it's the foundation of everything we do. From sourcing premium ingredients to maintaining the highest standards in formulation and testing, we are committed to delivering supplements you can trust.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* Pricing */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 lg:p-10 shadow-lg border-2 border-gray-100 hover:border-primary transition-all duration-300 hover:shadow-xl group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-4">Pricing</h3>
                <p className="text-lg text-secondary-muted font-light leading-relaxed mb-4">
                  We believe health should be accessible. By working directly with trusted suppliers and cutting unnecessary costs, we make it possible to offer premium supplements at fair, competitive prices.
                </p>
                <ul className="space-y-2 text-secondary-muted font-light">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Direct supplier relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No middleman markups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Transparent pricing structure</span>
                  </li>
                </ul>
              </div>

              {/* Quality */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 lg:p-10 shadow-lg border-2 border-gray-100 hover:border-primary transition-all duration-300 hover:shadow-xl group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-4">Quality</h3>
                <p className="text-lg text-secondary-muted font-light leading-relaxed mb-4">
                  Every product is developed with precision and backed by research. From ingredient sourcing to third-party lab testing, we ensure purity, potency, and transparency in every formula.
                </p>
                <ul className="space-y-2 text-secondary-muted font-light">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Third-party lab testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Premium ingredient sourcing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Full transparency in labeling</span>
                  </li>
                </ul>
              </div>

              {/* Performance */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 lg:p-10 shadow-lg border-2 border-gray-100 hover:border-primary transition-all duration-300 hover:shadow-xl group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-4">Performance</h3>
                <p className="text-lg text-secondary-muted font-light leading-relaxed mb-4">
                  Our supplements are designed to do more than just fill a gap — they're built to enhance energy, endurance, recovery, and overall wellness so you can perform at your highest level.
                </p>
                <ul className="space-y-2 text-secondary-muted font-light">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Enhanced energy & endurance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Faster recovery times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Optimized for peak performance</span>
                  </li>
                </ul>
              </div>

              {/* Customers */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 lg:p-10 shadow-lg border-2 border-gray-100 hover:border-primary transition-all duration-300 hover:shadow-xl group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-4">Customers</h3>
                <p className="text-lg text-secondary-muted font-light leading-relaxed mb-4">
                  Our community is at the heart of what we do. With responsive support, reliable delivery, and a focus on your health journey, we're here to make sure you feel confident and supported every step of the way.
                </p>
                <ul className="space-y-2 text-secondary-muted font-light">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>24/7 customer support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fast & reliable shipping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Personalized health guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Development Section - New */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <span>SCIENCE & INNOVATION</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 tracking-tight">
                Research & Development
              </h2>
              <p className="text-xl text-secondary-muted font-light max-w-3xl mx-auto leading-relaxed">
                Our dedicated team of scientists and nutrition experts continuously research and develop new formulations to meet evolving health needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Clinical Studies</h3>
                <p className="text-secondary-muted font-light leading-relaxed">
                  Every ingredient we use is backed by peer-reviewed clinical studies and scientific evidence.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Formulation Innovation</h3>
                <p className="text-secondary-muted font-light leading-relaxed">
                  We continuously refine our formulas based on the latest nutritional science and customer feedback.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Quality Assurance</h3>
                <p className="text-secondary-muted font-light leading-relaxed">
                  Rigorous testing protocols ensure every batch meets our exacting standards for purity and potency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>WHY CHOOSE US</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 tracking-tight">
                Why Choose ProScience Nutra
              </h2>
              <p className="text-xl text-secondary-muted font-light max-w-3xl mx-auto leading-relaxed">
                We go above and beyond to ensure you receive the highest quality supplements with complete transparency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* High-Quality Raw Material */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 lg:p-8 border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-xl group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">High-Quality Raw Material</h3>
                <p className="text-base text-secondary-muted font-light leading-relaxed">
                  We source only the finest, purest ingredients from trusted suppliers worldwide to ensure maximum effectiveness and consistency in every supplement.
                </p>
              </div>

              {/* cGMP Certified Facility */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 lg:p-8 border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-xl group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">cGMP Certified Facility</h3>
                <p className="text-base text-secondary-muted font-light leading-relaxed">
                  All of our products are manufactured in state-of-the-art, cGMP-certified facilities, guaranteeing the highest standards of safety and quality control.
                </p>
              </div>

              {/* Gluten-Free Products */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 lg:p-8 border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-xl group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Gluten-Free Products</h3>
                <p className="text-base text-secondary-muted font-light leading-relaxed">
                  Our formulas are carefully crafted to be gluten-free, making them suitable for individuals with sensitivities or those following a gluten-free lifestyle.
                </p>
              </div>

              {/* Vegan-Friendly */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 lg:p-8 border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-xl group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Vegan-Friendly</h3>
                <p className="text-base text-secondary-muted font-light leading-relaxed">
                  We proudly offer vegan-friendly options, made without animal-derived ingredients — so you can feel confident about what you put in your body.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-secondary via-secondary to-secondary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>START YOUR JOURNEY</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Ready to Elevate Your Performance?
            </h2>
            <p className="text-xl text-white/90 font-light mb-10 leading-relaxed max-w-2xl mx-auto">
              Discover our range of science-backed supplements designed to support your health and wellness goals. Join thousands of satisfied customers who trust ProScience Nutra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/products"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-dark transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Shop Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all"
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
