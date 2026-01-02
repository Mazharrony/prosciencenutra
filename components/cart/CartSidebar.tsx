'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/store/cart-context';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart, getTotalItems } = useCart();
  const [isRemoving, setIsRemoving] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(64); // Default header height

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Calculate header height dynamically
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Focus trap - trap focus within sidebar
  useEffect(() => {
    if (!isOpen || !sidebarRef.current) return;

    const sidebar = sidebarRef.current;
    const focusableElements = sidebar.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    sidebar.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      sidebar.removeEventListener('keydown', handleTabKey);
    };
  }, [isOpen]);

  // Handle scroll indicator
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setHasScrolled(container.scrollTop > 0);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [items]);

  const showToast = (message: string) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  const handleQuantityChange = (productId: string, delta: number) => {
    const item = items.find((i) => i.product.id === productId);
    if (item) {
      const newQuantity = item.quantity + delta;
      if (newQuantity <= 0) {
        handleRemove(productId);
      } else {
        updateQuantity(productId, newQuantity);
        showToast(delta > 0 ? 'Quantity increased' : 'Quantity decreased');
      }
    }
  };

  const handleRemove = (productId: string) => {
    const item = items.find((i) => i.product.id === productId);
    setIsRemoving(productId);
    setTimeout(() => {
      removeItem(productId);
      setIsRemoving(null);
      if (item) {
        showToast(`${item.product.name} removed from cart`);
      }
    }, 300);
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      clearCart();
      showToast('Cart cleared');
    }
  };

  const subtotal = getTotalPrice();
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + shipping;

  return (
    <>
      {/* Backdrop - Lower z-index */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] animate-in fade-in duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar - Higher z-index, proper responsive widths */}
      <div
        ref={sidebarRef}
        className={`fixed right-0 top-0 h-full w-full md:w-96 lg:w-[420px] xl:w-[480px] bg-white shadow-2xl z-[110] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex flex-col h-full">
          {/* Header - Sticky with ref for height calculation */}
          <div
            ref={headerRef}
            className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 bg-white sticky top-0 z-10 shadow-sm"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-secondary">Shopping Cart</h2>
                {items.length > 0 && (
                  <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {getTotalItems()}
                  </span>
                )}
              </div>
              {items.length > 0 && (
                <p className="text-xs sm:text-sm text-secondary-muted font-light mt-1">
                  {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} • ${subtotal.toFixed(2)}
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors flex-shrink-0"
              aria-label="Close cart"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Scroll Indicator - Dynamic position based on header height */}
          {items.length > 0 && hasScrolled && (
            <div
              className="absolute left-0 right-0 h-1 bg-gradient-to-b from-gray-200 to-transparent z-10 pointer-events-none"
              style={{ top: `${headerHeight}px` }}
            />
          )}

          {/* Cart Items - Scrollable */}
          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto overscroll-contain scroll-smooth"
          >
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center px-6 py-12">
                <div className="mb-6 animate-bounce">
                  <svg
                    className="w-24 h-24 sm:w-32 sm:h-32 text-gray-300"
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
                <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-2">
                  Your cart is empty
                </h3>
                <p className="text-sm sm:text-base text-secondary-muted mb-8 font-light max-w-sm">
                  Start adding products to see them here
                </p>
                <Link
                  href="/products"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-secondary text-white font-bold rounded-lg hover:bg-secondary-dark transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Browse Products
                </Link>
              </div>
            ) : (
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                {items.map((item, index) => (
                  <div
                    key={item.product.id}
                    className={`bg-white rounded-xl border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:border-gray-300 hover:shadow-md ${
                      isRemoving === item.product.id
                        ? 'opacity-0 scale-95 -translate-x-4'
                        : 'opacity-100 scale-100 translate-x-0'
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    <div className="p-3">
                      <div className="flex gap-3">
                        {/* Product Image - Smaller */}
                        <Link
                          href={`/products/${item.product.slug}`}
                          onClick={onClose}
                          className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200 hover:border-primary transition-all group overflow-hidden"
                        >
                          <svg
                            className="w-10 h-10 sm:w-12 sm:h-12 text-gray-300 group-hover:text-primary transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </Link>

                        {/* Product Info - Minimized */}
                        <div className="flex-1 min-w-0">
                          <Link
                            href={`/products/${item.product.slug}`}
                            onClick={onClose}
                            className="block mb-2 group"
                          >
                            <h3 className="text-sm sm:text-base font-bold text-secondary line-clamp-1 group-hover:text-primary transition-colors">
                              {item.product.name}
                            </h3>
                          </Link>
                          
                          {/* Price */}
                          <div className="flex items-baseline gap-2 mb-3">
                            <p className="text-base sm:text-lg font-bold text-secondary">
                              ${item.product.price.toFixed(2)}
                            </p>
                            {item.product.compareAtPrice && (
                              <p className="text-xs text-secondary-muted line-through">
                                ${item.product.compareAtPrice.toFixed(2)}
                              </p>
                            )}
                          </div>

                          {/* Quantity Controls & Actions */}
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                              <button
                                onClick={() => handleQuantityChange(item.product.id, -1)}
                                disabled={item.quantity <= 1}
                                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg hover:bg-white active:scale-95 transition-all font-bold text-sm disabled:opacity-40 disabled:cursor-not-allowed text-secondary"
                                aria-label="Decrease quantity"
                              >
                                −
                              </button>
                              <span className="w-8 sm:w-10 text-center font-bold text-secondary text-sm min-w-[2rem]">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => handleQuantityChange(item.product.id, 1)}
                                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg hover:bg-white active:scale-95 transition-all font-bold text-sm text-secondary"
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-secondary">
                                ${(item.product.price * item.quantity).toFixed(2)}
                              </span>
                              <button
                                onClick={() => handleRemove(item.product.id)}
                                className="text-red-600 hover:text-red-700 active:scale-95 transition-all p-1.5 rounded-lg hover:bg-red-50"
                                aria-label="Remove item"
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer - Sticky */}
          {items.length > 0 && (
            <div className="border-t-2 border-gray-200 bg-white p-4 sm:p-6 space-y-4 sticky bottom-0 shadow-lg">
              {/* Price Summary */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary-muted font-light">Subtotal</span>
                  <span className="font-bold text-secondary">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary-muted font-light">Shipping</span>
                  <span className="font-bold text-secondary">
                    {shipping === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                {subtotal < 50 && (
                  <p className="text-xs text-accent font-medium">
                    Add ${(50 - subtotal).toFixed(2)} more for free shipping
                  </p>
                )}
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-base sm:text-lg font-bold text-secondary">Total</span>
                    <span className="text-xl sm:text-2xl font-bold text-secondary">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2 sm:space-y-3 pt-2">
                <Link
                  href="/cart"
                  onClick={onClose}
                  className="block w-full bg-secondary text-white py-3 sm:py-4 px-6 rounded-lg font-bold text-center hover:bg-secondary-dark active:scale-98 transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                  View Cart
                </Link>
                <Link
                  href="/checkout"
                  onClick={onClose}
                  className="block w-full bg-primary text-white py-3 sm:py-4 px-6 rounded-lg font-bold text-center hover:bg-primary-dark active:scale-98 transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                  Checkout
                </Link>
                <button
                  onClick={handleClearCart}
                  className="w-full py-2.5 sm:py-3 px-6 border-2 border-gray-300 text-secondary rounded-lg font-bold hover:bg-gray-50 active:scale-98 transition-all text-sm sm:text-base"
                >
                  Clear Cart
                </button>
              </div>

              {/* Continue Shopping */}
              <Link
                href="/products"
                onClick={onClose}
                className="block text-center text-sm sm:text-base text-secondary-muted hover:text-secondary transition-colors font-medium"
              >
                Continue Shopping →
              </Link>
            </div>
          )}
        </div>

        {/* Notification Toast - Fixed to viewport, highest z-index */}
        {showNotification && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[120] animate-in slide-in-from-bottom-4 fade-in duration-300 pointer-events-none">
            <div className="bg-secondary text-white px-4 py-3 rounded-lg shadow-xl font-medium text-sm flex items-center gap-2 pointer-events-auto">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {notificationMessage}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
