export default function CatalogsPage() {
  const catalogs = [
    {
      title: '2024 Product Catalog',
      description: 'Download our complete 2024 product catalog featuring all our supplements, detailed descriptions, usage guidelines, and nutritional information.',
      type: 'PDF',
      size: '12.5 MB',
      pages: 48,
      icon: '📄',
      color: 'primary',
    },
    {
      title: 'Wholesale Catalog',
      description: 'Interested in wholesale pricing? Request our wholesale catalog with special pricing for retailers and distributors. Includes volume discounts and terms.',
      type: 'Request',
      size: 'Available upon request',
      pages: 'Custom',
      icon: '📦',
      color: 'secondary',
    },
    {
      title: 'Product Specification Sheets',
      description: 'Detailed technical specifications, ingredient lists, and quality certifications for each product. Perfect for healthcare professionals and retailers.',
      type: 'PDF',
      size: '8.2 MB',
      pages: 32,
      icon: '📋',
      color: 'primary',
    },
    {
      title: 'Nutrition Guide',
      description: 'Comprehensive guide to supplement nutrition, recommended dosages, and how to incorporate our products into your wellness routine.',
      type: 'PDF',
      size: '5.8 MB',
      pages: 24,
      icon: '🥗',
      color: 'primary',
    },
  ];

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
              <span>PRODUCT CATALOGS</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary mb-6 tracking-tight leading-tight">
              Product Catalogs
            </h1>
            <p className="text-xl text-secondary-muted font-light leading-relaxed max-w-2xl mx-auto">
              Browse our comprehensive product catalogs to discover our full range of science-backed supplements designed to support your health and wellness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
              {catalogs.map((catalog, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 ${catalog.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'} rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {catalog.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-secondary mb-2">{catalog.title}</h2>
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`inline-flex items-center px-3 py-1 ${catalog.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} rounded-full text-xs font-bold`}>
                          {catalog.type}
                        </span>
                        {catalog.size && (
                          <span className="text-xs text-secondary-muted font-light">{catalog.size}</span>
                        )}
                        {catalog.pages && typeof catalog.pages === 'number' && (
                          <span className="text-xs text-secondary-muted font-light">{catalog.pages} pages</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-secondary-muted font-light leading-relaxed mb-6">
                    {catalog.description}
                  </p>
                  {catalog.type === 'Request' ? (
                    <a
                      href="/contact?subject=wholesale"
                      className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-bold hover:bg-secondary-dark transition-colors"
                    >
                      Request Catalog
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </a>
                  ) : (
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors"
                    >
                      Download PDF
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Digital Catalogs */}
              <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-secondary mb-4">Digital Catalogs</h2>
                <p className="text-secondary-muted font-light leading-relaxed mb-4">
                  All our catalogs are available in digital format. You can browse our products online or download PDF versions for offline viewing. Digital catalogs are updated regularly with the latest products and information.
                </p>
                <ul className="space-y-2 text-secondary-muted font-light">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Instant download access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Regularly updated content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mobile-friendly PDF format</span>
                  </li>
                </ul>
              </div>

              {/* Physical Catalog */}
              <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-secondary mb-4">Request a Physical Catalog</h2>
                <p className="text-secondary-muted font-light leading-relaxed mb-6">
                  Prefer a physical catalog? Contact us and we'll be happy to send you a printed copy. Physical catalogs are perfect for keeping in your office or sharing with colleagues.
                </p>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Email</h3>
                    <a href="mailto:info@prosciencenutra.com" className="text-primary hover:text-primary-dark font-medium transition-colors">
                      info@prosciencenutra.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Phone</h3>
                    <a href="tel:+13024993725" className="text-primary hover:text-primary-dark font-medium transition-colors">
                      +1 (302) 499-3725
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
