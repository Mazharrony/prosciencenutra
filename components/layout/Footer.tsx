'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/constants';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setEmail('');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">ProScience Nutra</h3>
            <p className="text-gray-300 mb-6 max-w-md font-light leading-relaxed">
              Premium supplements for optimal health and performance. Science-backed formulas for your wellness journey.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-3">Get 10% Off Your First Purchase</h4>
              <p className="text-sm text-gray-300 mb-4 font-light">Sign up to receive our special offers.</p>
              {submitStatus === 'success' ? (
                <div className="p-3 bg-green-600/20 border border-green-500/30 rounded-lg text-sm text-green-300">
                  ✓ Successfully subscribed!
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary font-light text-sm"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 text-sm"
                  >
                    {isSubmitting ? '...' : 'Sign Up'}
                  </button>
                </form>
              )}
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Fitness Goals */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Fitness Goal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products?goal=muscle-building" className="text-gray-300 hover:text-white transition-colors font-light">
                  Muscle Building
                </Link>
              </li>
              <li>
                <Link href="/products?goal=energy-performance" className="text-gray-300 hover:text-white transition-colors font-light">
                  Energy & Performance
                </Link>
              </li>
              <li>
                <Link href="/products?goal=recovery" className="text-gray-300 hover:text-white transition-colors font-light">
                  Recovery
                </Link>
              </li>
              <li>
                <Link href="/products?goal=weight-management" className="text-gray-300 hover:text-white transition-colors font-light">
                  Weight Management
                </Link>
              </li>
              <li>
                <Link href="/products?goal=wellness" className="text-gray-300 hover:text-white transition-colors font-light">
                  Health & Wellness
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">About Us</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors font-light">
                  Company Info
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-300 hover:text-white transition-colors font-light">
                  Press Releases
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-white transition-colors font-light">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors font-light">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors font-light">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/return-policy" className="text-gray-300 hover:text-white transition-colors font-light">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors font-light">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors font-light">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/catalogs" className="text-gray-300 hover:text-white transition-colors font-light">
                  Catalogs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h5 className="font-bold mb-2 text-white">Address</h5>
              <address className="text-gray-300 not-italic font-light leading-relaxed">
                1013 Centre Road, Suite 403A<br />
                City of Wilmington, Country of New Castle<br />
                Delaware 19805
              </address>
            </div>
            <div>
              <h5 className="font-bold mb-2 text-white">Phone</h5>
              <a href="tel:+13024993725" className="text-gray-300 hover:text-white transition-colors font-light">
                +1 (302) 499-3725
              </a>
            </div>
            <div>
              <h5 className="font-bold mb-2 text-white">Email</h5>
              <a href="mailto:info@prosciencenutra.com" className="text-gray-300 hover:text-white transition-colors font-light">
                info@prosciencenutra.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300 text-sm font-light">
            © {new Date().getFullYear()} ProScience Nutra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
