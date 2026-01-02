export default function CatalogsPage() {
  return (
    <div className="min-h-screen bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary mb-8 tracking-tight">
            Product Catalogs
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-secondary-muted font-light leading-relaxed">
            <section>
              <p>
                Browse our comprehensive product catalogs to discover our full range of science-backed supplements designed to support your health and wellness goals.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-primary transition-colors">
                <h2 className="text-xl font-bold text-secondary mb-3">2024 Product Catalog</h2>
                <p className="text-secondary-muted font-light mb-4">
                  Download our complete 2024 product catalog featuring all our supplements, detailed descriptions, and usage guidelines.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold transition-colors"
                >
                  Download PDF
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-primary transition-colors">
                <h2 className="text-xl font-bold text-secondary mb-3">Wholesale Catalog</h2>
                <p className="text-secondary-muted font-light mb-4">
                  Interested in wholesale pricing? Request our wholesale catalog with special pricing for retailers and distributors.
                </p>
                <a
                  href="/contact?subject=wholesale"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold transition-colors"
                >
                  Request Catalog
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-secondary mb-4">Digital Catalogs</h2>
              <p>
                All our catalogs are available in digital format. You can browse our products online or download PDF versions for offline viewing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">Request a Physical Catalog</h2>
              <p>
                Prefer a physical catalog? Contact us and we'll be happy to send you a printed copy.
              </p>
              <p className="mt-4">
                Email: <a href="mailto:info@prosciencenutra.com" className="text-primary hover:underline">info@prosciencenutra.com</a><br />
                Phone: <a href="tel:+13024993725" className="text-primary hover:underline">+1 (302) 499-3725</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

