import Link from 'next/link';
import { getFeaturedProducts, getAllProducts } from '@/lib/data/products';
import ProductGrid from '@/components/products/ProductGrid';
import FAQ from '@/components/FAQ';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const allProducts = getAllProducts();
  const heroProduct = allProducts.find(p => p.featured && p.compareAtPrice) || allProducts[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Cleaner */}
      <section className="relative bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <span>FLASH SALE</span>
                <span className="text-xs">Up to 25% OFF</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary mb-6 leading-[1.1] tracking-tight">
                Premium Supplements for
                <span className="text-primary block mt-2">Optimal Health</span>
              </h1>
              
              <p className="text-xl text-secondary-muted mb-8 max-w-xl lg:max-w-none leading-relaxed font-light">
                Science-backed formulas designed to support your wellness journey. 
                Join <span className="font-semibold text-primary">50,000+</span> satisfied customers.
              </p>

              {/* Trust Indicators - Cleaner */}
              <div className="flex flex-wrap items-center gap-8 justify-center lg:justify-start mb-10 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-secondary-muted font-medium">Free Shipping Over $50</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-secondary-muted font-medium">30-Day Money Back</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href={`/products/${heroProduct.slug}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Shop Now
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-secondary text-secondary font-bold rounded-lg hover:bg-secondary hover:text-white transition-all"
                >
                  Browse All
                </Link>
              </div>
            </div>

            {/* Right Side - Product Showcase - Cleaner */}
            <div className="relative lg:block hidden">
              <Link href={`/products/${heroProduct.slug}`} className="block group">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-xl">
                  <div className="aspect-square bg-gray-50 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-16 h-16 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    {heroProduct.compareAtPrice && (
                      <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        {Math.round(((heroProduct.compareAtPrice - heroProduct.price) / heroProduct.compareAtPrice) * 100)}% OFF
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2 block">
                      {heroProduct.category}
                    </span>
                    <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                      {heroProduct.name}
                    </h3>
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <span className="text-3xl font-bold text-primary">
                        ${heroProduct.price.toFixed(2)}
                      </span>
                      {heroProduct.compareAtPrice && (
                        <span className="text-lg text-secondary-muted line-through">
                          ${heroProduct.compareAtPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <div className="w-full bg-primary text-white py-3 px-4 rounded-lg font-bold hover:bg-primary-dark transition-colors">
                      Add to Cart
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Cleaner */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50K+', label: 'Happy Customers' },
              { number: '100+', label: 'Products' },
              { number: '4.9', label: 'Average Rating' },
              { number: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-secondary-muted font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4 tracking-tight">
              Featured Products
            </h2>
            <p className="text-xl text-secondary-muted max-w-2xl mx-auto font-light">
              Discover our most popular supplements
            </p>
          </div>
          <ProductGrid products={featuredProducts} />
          <div className="text-center mt-16">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-lg hover:bg-secondary-dark transition-colors"
            >
              View All Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4 tracking-tight">
              Shop by Category
            </h2>
            <p className="text-xl text-secondary-muted max-w-2xl mx-auto font-light">
              Find the perfect supplement for your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                id: 'vitamins', 
                name: 'Vitamins', 
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ), 
                count: allProducts.filter(p => p.category === 'vitamins').length
              },
              { 
                id: 'protein', 
                name: 'Protein', 
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ), 
                count: allProducts.filter(p => p.category === 'protein').length
              },
              { 
                id: 'wellness', 
                name: 'Wellness', 
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ), 
                count: allProducts.filter(p => p.category === 'wellness').length
              },
              { 
                id: 'sports', 
                name: 'Sports', 
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ), 
                count: allProducts.filter(p => p.category === 'sports').length
              },
            ].map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-secondary-muted font-medium text-sm">
                  {category.count} Products
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - New */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4 tracking-tight">
              How It Works
            </h2>
            <p className="text-xl text-secondary-muted max-w-2xl mx-auto font-light">
              Simple steps to better health
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Choose Your Products',
                description: 'Browse our curated selection of science-backed supplements tailored to your health goals.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'Fast & Secure Checkout',
                description: 'Complete your purchase with our secure payment system. Free shipping on orders over $50.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'Receive & Transform',
                description: 'Get your supplements delivered quickly. Start your wellness journey and see real results.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <div className="text-primary">{item.icon}</div>
                </div>
                <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                <p className="text-secondary-muted font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4 tracking-tight">
              Why Choose ProScience
            </h2>
            <p className="text-xl text-secondary-muted max-w-2xl mx-auto font-light">
              Excellence in every capsule
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Science-Backed',
                description: 'Formulated based on scientific research and clinical studies',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Premium Quality',
                description: 'Highest quality ingredients from trusted suppliers worldwide',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ),
              },
              {
                title: 'Fast Shipping',
                description: 'Quick and reliable delivery to your doorstep',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Lab Tested',
                description: 'Rigorous testing ensures purity and potency',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-primary transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                <p className="text-secondary-muted leading-relaxed font-light text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4 tracking-tight">
              Customer Reviews
            </h2>
            <p className="text-xl text-secondary-muted max-w-2xl mx-auto font-light">
              Real results from real people
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Fitness Enthusiast',
                rating: 5,
                text: 'Best supplements I\'ve tried! Noticeable difference in my energy levels and recovery time. Highly recommend!',
                product: 'Whey Protein Isolate',
              },
              {
                name: 'Michael Chen',
                role: 'Health Conscious',
                rating: 5,
                text: 'The Omega-3 has been a game changer for my joint health. Quality is exceptional and shipping was super fast.',
                product: 'Omega-3 Premium',
              },
              {
                name: 'Emily Rodriguez',
                role: 'Wellness Advocate',
                rating: 5,
                text: 'Love the probiotic complex! My digestion has improved significantly. Great customer service too.',
                product: 'Probiotic Complex',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-secondary-muted mb-6 leading-relaxed font-light">
                  "{testimonial.text}"
                </p>
                <div className="pt-6 border-t border-gray-200">
                  <p className="font-bold text-secondary mb-1">{testimonial.name}</p>
                  <p className="text-sm text-secondary-muted mb-2">{testimonial.role}</p>
                  <p className="text-xs text-accent font-semibold">{testimonial.product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Modern */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-secondary-muted max-w-2xl mx-auto font-light">
              Everything you need to know
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <FAQ
              items={[
                {
                  question: 'Are your supplements FDA approved?',
                  answer: 'While the FDA does not approve dietary supplements, all our products are manufactured in FDA-registered facilities following Good Manufacturing Practices (GMP). We ensure the highest quality and safety standards through rigorous testing and quality control processes.',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
                {
                  question: 'How long does shipping take?',
                  answer: 'Standard shipping takes 5-7 business days. We offer free shipping on orders over $50. Express shipping options (2-3 business days) are available at checkout for an additional fee. All orders are processed within 1-2 business days.',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  question: 'What is your return policy?',
                  answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with your purchase for any reason, return it within 30 days of delivery for a full refund. Items must be unopened and in original packaging. Contact our customer service team to initiate a return.',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                    </svg>
                  ),
                },
                {
                  question: 'Are your products suitable for vegetarians?',
                  answer: 'Many of our products are vegetarian-friendly. We clearly label all products with dietary information. Check individual product pages for detailed ingredient information and dietary specifications. Our protein powders include both whey and plant-based options.',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  question: 'Do you offer subscription discounts?',
                  answer: 'Yes! Subscribe and save up to 20% on your favorite products. Choose your delivery frequency (every 2, 4, or 6 weeks) and cancel anytime. You can skip, modify, or cancel your subscription at any time through your account dashboard.',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  ),
                },
                {
                  question: 'How should I store my supplements?',
                  answer: 'Store all supplements in a cool, dry place away from direct sunlight. Keep bottles tightly closed and store at room temperature (68-77°F). Refrigeration is not necessary unless specified on the product label. Keep out of reach of children.',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              Get 10% Off Your First Purchase
            </h2>
            <p className="text-xl text-white/90 mb-8 font-light">
              Sign up to receive our special offers
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg border-0 text-secondary font-medium focus:outline-none focus:ring-4 focus:ring-white/30"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-secondary text-white font-bold rounded-lg hover:bg-secondary-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-white/70 mt-4 font-light">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
