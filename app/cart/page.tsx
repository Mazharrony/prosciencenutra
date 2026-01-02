'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/store/cart-context';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart, getTotalItems } = useCart();
  const router = useRouter();
  const [isRemoving, setIsRemoving] = useState<string | null>(null);

  const handleQuantityChange = (productId: string, delta: number) => {
    const item = items.find((i) => i.product.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity + delta);
    }
  };

  const handleRemove = (productId: string) => {
    setIsRemoving(productId);
    setTimeout(() => {
      removeItem(productId);
      setIsRemoving(null);
    }, 300);
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      clearCart();
    }
  };

  const subtotal = getTotalPrice();
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <svg
                className="w-32 h-32 text-gray-300 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary mb-4 tracking-tight">
              Your cart is empty
            </h1>
            <p className="text-xl text-secondary-muted mb-8 font-light">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold text-lg rounded-lg hover:bg-secondary-dark transition-colors shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary mb-2 tracking-tight">
            Shopping Cart
          </h1>
          <p className="text-lg text-secondary-muted font-light">
            {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 gap-8">
          {/* Cart Items - Left Column */}
          <div className="lg:col-span-8">
            {/* Cart Items List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div className="p-5 sm:p-6 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-secondary">Items</h2>
                  <button
                    onClick={handleClearCart}
                    className="text-sm text-red-600 hover:text-red-700 font-medium transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className={`p-5 sm:p-6 transition-all duration-300 ${
                      isRemoving === item.product.id ? 'opacity-50 scale-95' : ''
                    }`}
                  >
                    <div className="flex gap-4 sm:gap-6">
                      {/* Product Image */}
                      <Link
                        href={`/products/${item.product.slug}`}
                        className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200 hover:border-gray-300 transition-colors"
                      >
                        <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </Link>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div className="flex-1">
                            <Link
                              href={`/products/${item.product.slug}`}
                              className="block mb-1"
                            >
                              <h3 className="text-lg sm:text-xl font-bold text-secondary hover:text-primary transition-colors line-clamp-2 mb-1">
                                {item.product.name}
                              </h3>
                            </Link>
                            <p className="text-sm text-secondary-muted font-light mb-3 capitalize">
                              {item.product.category}
                            </p>
                            <div className="flex items-baseline gap-2 mb-4">
                              <span className="text-xl sm:text-2xl font-bold text-secondary">
                                ${item.product.price.toFixed(2)}
                              </span>
                              {item.product.compareAtPrice && (
                                <span className="text-sm text-secondary-muted line-through font-medium">
                                  ${item.product.compareAtPrice.toFixed(2)}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Quantity Controls & Total - Desktop */}
                          <div className="flex items-center gap-6 sm:flex-col sm:items-end">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleQuantityChange(item.product.id, -1)}
                                disabled={item.quantity <= 1}
                                className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-bold disabled:opacity-40 disabled:cursor-not-allowed"
                                aria-label="Decrease quantity"
                              >
                                −
                              </button>
                              <span className="w-12 text-center font-bold text-secondary text-base">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => handleQuantityChange(item.product.id, 1)}
                                className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-bold"
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-secondary-muted font-light mb-1">Total</p>
                              <p className="text-xl font-bold text-secondary">
                                ${(item.product.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <button
                            onClick={() => handleRemove(item.product.id)}
                            className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors font-medium text-sm"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Continue Shopping */}
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary - Right Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Order Summary Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-secondary mb-6">Order Summary</h2>

                {/* Summary Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary-muted font-light">Subtotal</span>
                    <span className="font-bold text-secondary">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary-muted font-light">Shipping</span>
                    <span className="font-bold text-secondary">
                      {shipping === 0 ? (
                        <span className="text-green-600">Free</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-accent font-medium">
                      Add ${(50 - subtotal).toFixed(2)} more for free shipping
                    </p>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary-muted font-light">Tax</span>
                    <span className="font-bold text-secondary">${tax.toFixed(2)}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t-2 border-gray-200 my-6"></div>

                {/* Total */}
                <div className="flex justify-between items-baseline mb-6">
                  <span className="text-lg font-bold text-secondary">Total</span>
                  <span className="text-3xl font-bold text-secondary">
                    ${total.toFixed(2)}
                  </span>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={() => router.push('/checkout')}
                  className="w-full bg-secondary text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-secondary-dark transition-colors shadow-lg hover:shadow-xl mb-4"
                >
                  Proceed to Checkout
                </button>

                {/* Security Badge */}
                <div className="flex items-center justify-center gap-2 text-xs text-secondary-muted pt-4 border-t border-gray-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="font-medium">Secure Checkout</span>
                </div>
              </div>

              {/* Trust Badges - Now inside sticky container */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-primary/20">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-secondary text-sm">Free Shipping</p>
                      <p className="text-xs text-secondary-muted font-light">On orders over $50</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-primary/20">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-secondary text-sm">30-Day Returns</p>
                      <p className="text-xs text-secondary-muted font-light">Money-back guarantee</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-primary/20">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-secondary text-sm">Secure Payment</p>
                      <p className="text-xs text-secondary-muted font-light">Your data is protected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
