export default function PressPage() {
  const pressReleases = [
    {
      date: '2024-01-15',
      title: 'ProScience Nutra Launches New Recovery Formula Line',
      excerpt: 'Company introduces advanced recovery supplements backed by latest sports nutrition research.',
      category: 'Product Launch',
    },
    {
      date: '2023-12-10',
      title: 'ProScience Nutra Achieves cGMP Certification',
      excerpt: 'Manufacturing facility receives certification, ensuring highest quality standards for all products.',
      category: 'Company News',
    },
    {
      date: '2023-11-20',
      title: 'New Study Validates Effectiveness of Omega-3 Premium Formula',
      excerpt: 'Independent clinical study confirms superior bioavailability and absorption rates.',
      category: 'Research',
    },
    {
      date: '2023-10-05',
      title: 'ProScience Nutra Expands International Shipping',
      excerpt: 'Company now ships to 30+ countries, making premium supplements accessible worldwide.',
      category: 'Company News',
    },
    {
      date: '2023-09-12',
      title: 'Partnership with Leading Nutrition Research Institute',
      excerpt: 'Strategic partnership established to advance supplement formulation and research.',
      category: 'Partnership',
    },
    {
      date: '2023-08-18',
      title: 'ProScience Nutra Reaches 10,000 Customer Milestone',
      excerpt: 'Company celebrates milestone achievement, thanking customers for their trust and support.',
      category: 'Company News',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span>PRESS & MEDIA</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary mb-6 tracking-tight leading-tight">
              Press Releases
            </h1>
            <p className="text-xl text-secondary-muted font-light leading-relaxed max-w-2xl mx-auto">
              Stay updated with the latest news, announcements, and developments from ProScience Nutra.
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <article
                  key={index}
                  className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">
                          {release.category}
                        </span>
                        <time className="text-sm text-secondary-muted font-light">
                          {new Date(release.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                      <h2 className="text-2xl font-bold text-secondary mb-3 hover:text-primary transition-colors">
                        {release.title}
                      </h2>
                      <p className="text-secondary-muted font-light leading-relaxed">
                        {release.excerpt}
                      </p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold transition-colors text-sm"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12 border-2 border-gray-200">
              <h2 className="text-3xl font-bold text-secondary mb-6">Media Inquiries</h2>
              <p className="text-lg text-secondary-muted font-light leading-relaxed mb-6">
                For media inquiries, interview requests, or press kit information, please contact our media relations team.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-secondary mb-2">Email</h3>
                  <a href="mailto:press@prosciencenutra.com" className="text-primary hover:text-primary-dark font-medium transition-colors">
                    press@prosciencenutra.com
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-2">Phone</h3>
                  <a href="tel:+13024993725" className="text-primary hover:text-primary-dark font-medium transition-colors">
                    +1 (302) 499-3725
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

