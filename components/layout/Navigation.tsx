'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/constants';

interface NavigationProps {
  pathname: string;
  mobile?: boolean;
}

export default function Navigation({ pathname, mobile = false }: NavigationProps) {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const navLinkClass = (path: string) => {
    const baseClass = mobile
      ? 'block py-2 text-sm font-medium transition-colors'
      : 'text-sm font-medium transition-colors';
    
    return isActive(path)
      ? `${baseClass} text-primary`
      : `${baseClass} text-secondary-muted hover:text-secondary`;
  };

  if (mobile) {
    return (
      <>
        <Link href="/" className={navLinkClass('/')} onClick={() => setIsCategoriesOpen(false)}>
          Home
        </Link>
        <Link
          href="/products"
          className={navLinkClass('/products')}
          onClick={() => setIsCategoriesOpen(false)}
        >
          Products
        </Link>
        <div>
          <button
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            className={`w-full ${navLinkClass('/products')} flex items-center justify-between`}
          >
            <span>Categories</span>
            <svg
              className={`w-4 h-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isCategoriesOpen && (
            <div className="pl-4 mt-2 space-y-2">
              {CATEGORIES.map((category) => (
                <Link
                  key={category.id}
                  href={`/products?category=${category.slug}`}
                  className="block py-1.5 text-sm text-secondary-muted hover:text-secondary transition-colors capitalize"
                  onClick={() => setIsCategoriesOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link
          href="/about"
          className={navLinkClass('/about')}
          onClick={() => setIsCategoriesOpen(false)}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={navLinkClass('/contact')}
          onClick={() => setIsCategoriesOpen(false)}
        >
          Contact
        </Link>
      </>
    );
  }

  return (
    <>
      <Link href="/" className={navLinkClass('/')}>
        Home
      </Link>
      <Link href="/products" className={navLinkClass('/products')}>
        Products
      </Link>
      <div className="relative group">
        <button
          className={`text-sm font-medium transition-colors flex items-center gap-1 ${
            pathname.startsWith('/products')
              ? 'text-primary'
              : 'text-secondary-muted hover:text-secondary'
          }`}
        >
          Categories
          <svg
            className="w-4 h-4 transition-transform group-hover:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div className="absolute left-0 mt-3 w-48 bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <div className="py-2">
            {CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.slug}`}
                className="block px-4 py-2 text-sm text-secondary-muted hover:text-secondary transition-colors capitalize"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Link href="/about" className={navLinkClass('/about')}>
        About
      </Link>
      <Link href="/contact" className={navLinkClass('/contact')}>
        Contact
      </Link>
    </>
  );
}
