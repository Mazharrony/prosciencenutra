export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Fitness Enthusiast',
      rating: 5,
      date: '2024-01-20',
      product: 'Whey Protein Isolate',
      text: 'Best supplements I\'ve tried! Noticeable difference in my energy levels and recovery time. The quality is exceptional and the taste is great. Highly recommend to anyone serious about their fitness goals.',
      verified: true,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Health Conscious',
      rating: 5,
      date: '2024-01-18',
      product: 'Omega-3 Premium',
      text: 'The Omega-3 has been a game changer for my joint health. I\'ve been taking it for 3 months and noticed significant improvement. Quality is exceptional and shipping was super fast. Will definitely order again.',
      verified: true,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Wellness Advocate',
      rating: 5,
      date: '2024-01-15',
      product: 'Probiotic Complex',
      text: 'Love the probiotic complex! My digestion has improved significantly since starting this product. Great customer service too - they answered all my questions quickly. Very satisfied with my purchase.',
      verified: true,
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Athlete',
      rating: 5,
      date: '2024-01-12',
      product: 'Pre-Workout Energy',
      text: 'Outstanding pre-workout supplement! Gives me the energy boost I need without the crash. Clean ingredients and no jitters. This has become an essential part of my training routine.',
      verified: true,
    },
    {
      id: 5,
      name: 'Jessica Martinez',
      role: 'Nutrition Enthusiast',
      rating: 5,
      date: '2024-01-10',
      product: 'Vitamin D3 + K2',
      text: 'Excellent product! I\'ve noticed improved bone health and energy levels. The combination of D3 and K2 is perfect. Fast shipping and great packaging. Highly recommend!',
      verified: true,
    },
    {
      id: 6,
      name: 'Robert Wilson',
      role: 'Fitness Trainer',
      rating: 5,
      date: '2024-01-08',
      product: 'Creatine Monohydrate',
      text: 'As a fitness trainer, I\'ve tried many creatine supplements. This one is top-notch - pure, effective, and reasonably priced. My clients have seen great results too. ProScience Nutra is now my go-to brand.',
      verified: true,
    },
    {
      id: 7,
      name: 'Amanda Lee',
      role: 'Health & Wellness',
      rating: 5,
      date: '2024-01-05',
      product: 'Multivitamin Complete',
      text: 'Comprehensive multivitamin that covers all my nutritional needs. I feel more energetic and my immune system has improved. Love that it\'s made with quality ingredients and third-party tested.',
      verified: true,
    },
    {
      id: 8,
      name: 'James Anderson',
      role: 'Bodybuilder',
      rating: 5,
      date: '2024-01-03',
      product: 'BCAA Recovery',
      text: 'Perfect for post-workout recovery. I\'ve noticed faster muscle recovery and less soreness. The taste is great and it mixes easily. Great value for the quality you get.',
      verified: true,
    },
  ];

  const averageRating = 5;
  const totalReviews = reviews.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span>CUSTOMER REVIEWS</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary mb-6 tracking-tight leading-tight">
              Customer Reviews
            </h1>
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{averageRating.toFixed(1)}</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-secondary-muted font-light">Based on {totalReviews} reviews</p>
              </div>
            </div>
            <p className="text-xl text-secondary-muted font-light leading-relaxed max-w-2xl mx-auto">
              Real results from real people. See what our customers are saying about ProScience Nutra products.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-secondary">{review.name}</h3>
                        {review.verified && (
                          <span className="inline-flex items-center px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs font-bold">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Verified
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-secondary-muted font-light">{review.role}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'text-primary' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-secondary-muted font-light">
                      {new Date(review.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>

                  {/* Product */}
                  <p className="text-sm font-bold text-primary mb-3">{review.product}</p>

                  {/* Review Text */}
                  <p className="text-secondary-muted font-light leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Write Review CTA */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 lg:p-12 text-center border-2 border-primary/20">
              <h2 className="text-3xl font-bold text-secondary mb-4">
                Share Your Experience
              </h2>
              <p className="text-lg text-secondary-muted font-light mb-6 max-w-2xl mx-auto">
                Have you tried our products? We'd love to hear about your experience!
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
              >
                Write a Review
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

