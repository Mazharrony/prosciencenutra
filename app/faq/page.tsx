'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqCategories = ['All', 'Products', 'Shipping', 'Returns', 'Account', 'General'];

const faqs: FAQItem[] = [
  {
    category: 'Products',
    question: 'Are your products third-party tested?',
    answer: 'Yes, all our products undergo rigorous third-party testing to ensure purity, potency, and safety. We work with certified laboratories to test every batch. Certificates of analysis are available upon request.',
  },
  {
    category: 'Products',
    question: 'What makes ProScience Nutra products different?',
    answer: 'Our products are backed by scientific research, manufactured in cGMP-certified facilities, and use only premium, clinically-researched ingredients. We prioritize transparency, quality, and effectiveness in every formulation.',
  },
  {
    category: 'Products',
    question: 'Are your products suitable for vegetarians and vegans?',
    answer: 'Many of our products are vegan-friendly. We clearly label all products with dietary information. Check individual product pages for specific dietary details, or contact us for more information.',
  },
  {
    category: 'Products',
    question: 'How should I store my supplements?',
    answer: 'Store supplements in a cool, dry place away from direct sunlight. Keep the container tightly closed and follow any specific storage instructions on the product label. Most supplements should be stored at room temperature.',
  },
  {
    category: 'Shipping',
    question: 'How long does shipping take?',
    answer: 'Standard shipping typically takes 5-7 business days. We also offer expedited shipping options at checkout for faster delivery. Shipping times may vary based on your location.',
  },
  {
    category: 'Shipping',
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship to over 30 countries worldwide. Shipping times and costs vary by location. Check our shipping policy at checkout or contact us for specific international shipping information.',
  },
  {
    category: 'Shipping',
    question: 'What is your free shipping policy?',
    answer: 'We offer free standard shipping on orders over $50. For orders under $50, standard shipping is $9.99. Free shipping applies to domestic orders within the United States.',
  },
  {
    category: 'Shipping',
    question: 'Can I track my order?',
    answer: 'Yes! Once your order ships, you\'ll receive a tracking number via email. You can use this number to track your package in real-time through our website or the carrier\'s website.',
  },
  {
    category: 'Returns',
    question: 'What is your return policy?',
    answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with your purchase, you can return it within 30 days of delivery for a full refund. Items must be unopened and in original packaging.',
  },
  {
    category: 'Returns',
    question: 'How do I return a product?',
    answer: 'Contact our customer service team at info@prosciencenutra.com or call +1 (302) 499-3725. Provide your order number and reason for return. We\'ll send you a return authorization and shipping label. Once we receive the item, we\'ll process your refund within 5-7 business days.',
  },
  {
    category: 'Returns',
    question: 'Who pays for return shipping?',
    answer: 'For returns due to our error or defective products, we cover return shipping costs. For other returns, return shipping is the customer\'s responsibility unless otherwise specified.',
  },
  {
    category: 'Account',
    question: 'How do I create an account?',
    answer: 'You can create an account during checkout or by clicking "Sign In" in the top navigation. Having an account allows you to track orders, save addresses, and access exclusive offers.',
  },
  {
    category: 'Account',
    question: 'How do I update my account information?',
    answer: 'Log into your account and navigate to "Account Settings" to update your personal information, shipping addresses, payment methods, and communication preferences.',
  },
  {
    category: 'General',
    question: 'How can I contact customer service?',
    answer: 'You can reach us via email at info@prosciencenutra.com, phone at +1 (302) 499-3725, or through our contact form. Our customer service team is available Monday-Friday, 9:00 AM - 6:00 PM EST.',
  },
  {
    category: 'General',
    question: 'Do you offer wholesale pricing?',
    answer: 'Yes, we offer wholesale pricing for retailers and distributors. Please contact us at info@prosciencenutra.com with your business information to learn more about our wholesale program.',
  },
  {
    category: 'General',
    question: 'Are your supplements FDA approved?',
    answer: 'Dietary supplements are not FDA-approved, but our products are manufactured in FDA-registered facilities following Good Manufacturing Practices (GMP). We ensure all products meet strict quality and safety standards.',
  },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFAQs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary mb-6 tracking-tight leading-tight">
              FAQ
            </h1>
            <p className="text-xl text-secondary-muted font-light leading-relaxed max-w-2xl mx-auto">
              Find answers to common questions about our products, shipping, returns, and more.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {faqCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-secondary hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border-2 border-gray-200 hover:border-primary transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-bold text-secondary flex-1">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-5 pt-0">
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-secondary-muted font-light leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Still Have Questions */}
            <div className="mt-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 lg:p-12 text-center border-2 border-primary/20">
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-secondary-muted font-light mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our customer service team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
                >
                  Contact Us
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="tel:+13024993725"
                  className="inline-flex items-center gap-2 bg-white text-secondary border-2 border-gray-300 px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

