'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProductGrid from '@/components/products/ProductGrid';
import { Product } from '@/types/product';
import { useCart } from '@/lib/store/cart-context';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
  discountPercent: number;
}

export default function ProductDetailClient({ product, relatedProducts, discountPercent }: ProductDetailClientProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'nutrition' | 'usage'>('description');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    if (!product.inStock) return;
    
    setIsAddingToCart(true);
    addItem(product, quantity);
    
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 1000);
  };

  // Split description into preview and full content
  const descriptionPreview = product.description.substring(0, 200);
  const hasMoreContent = product.description.length > 200;

  const tabs = [
    { id: 'description' as const, label: 'Description' },
    { id: 'ingredients' as const, label: 'Ingredients' },
    { id: 'nutrition' as const, label: 'Nutrition' },
    { id: 'usage' as const, label: 'Usage' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-secondary-muted">
            <li>
              <Link href="/" className="hover:text-secondary transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/products" className="hover:text-secondary transition-colors">
                Products
              </Link>
            </li>
            <li>/</li>
            <li className="text-secondary">{product.name}</li>
          </ol>
        </nav>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Product Image Gallery */}
          <div>
            <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200 mb-4 sticky top-24">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-400 text-sm">Product Image</span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Category & Badges */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-semibold text-accent uppercase tracking-widest">
                {product.category}
              </span>
              {product.featured && (
                <span className="bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                  Featured
                </span>
              )}
              {product.compareAtPrice && (
                <span className="bg-secondary text-white text-[10px] font-bold px-2.5 py-1 rounded">
                  -{discountPercent}%
                </span>
              )}
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary mb-6 leading-tight tracking-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-5xl font-bold text-secondary">
                ${product.price.toFixed(2)}
              </span>
              {product.compareAtPrice && (
                <>
                  <span className="text-2xl text-secondary-muted line-through font-medium">
                    ${product.compareAtPrice.toFixed(2)}
                  </span>
                  <span className="text-sm font-bold text-primary">
                    Save ${(product.compareAtPrice - product.price).toFixed(2)}
                  </span>
                </>
              )}
            </div>

            {/* Short Description */}
            <p className="text-xl text-secondary-muted mb-8 leading-relaxed font-light">
              {product.shortDescription}
            </p>

            {/* Stock Status */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              {product.inStock ? (
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <span className="font-bold text-secondary">In Stock</span>
                    {product.stockQuantity && (
                      <span className="text-sm text-secondary-muted ml-2">({product.stockQuantity} available)</span>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="font-bold text-red-600">Out of Stock</span>
                </div>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-secondary mb-2">Quantity</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-bold"
                >
                  −
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-20 h-10 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-bold"
                />
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart & Wishlist */}
            <div className="flex gap-3 mb-10">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock || isAddingToCart}
                className={`flex-1 py-4 px-6 rounded-lg font-bold transition-colors ${
                  !product.inStock
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : isAddingToCart
                    ? 'bg-primary text-white'
                    : 'bg-secondary text-white hover:bg-secondary-dark'
                }`}
              >
                {!product.inStock
                  ? 'Out of Stock'
                  : isAddingToCart
                  ? 'Added to Cart!'
                  : 'Add to Cart'}
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`px-6 py-4 border rounded-lg transition-colors ${
                  isWishlisted
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-gray-300 text-secondary hover:bg-gray-50'
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill={isWishlisted ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Key Benefits */}
            <div className="border-t border-gray-200 pt-8 mb-8">
              <h3 className="text-lg font-bold text-secondary mb-4">Key Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-secondary-muted font-light">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-200">
              <div>
                <div className="text-xs font-semibold text-secondary-muted uppercase mb-1">Free Shipping</div>
                <div className="text-sm font-bold text-secondary">Over $50</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-secondary-muted uppercase mb-1">Returns</div>
                <div className="text-sm font-bold text-secondary">30 Days</div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="border-t border-gray-200 pt-12 mb-20">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-bold text-sm border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-secondary text-secondary'
                    : 'border-transparent text-secondary-muted hover:text-secondary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl">
            {activeTab === 'description' && (
              <div>
                <div className="space-y-4">
                  <p className="text-secondary-muted leading-relaxed font-light text-lg">
                    {isDescriptionExpanded ? product.description : descriptionPreview}
                    {!isDescriptionExpanded && hasMoreContent && '...'}
                  </p>
                  
                  {hasMoreContent && (
                    <button
                      onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                      className="flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors group"
                    >
                      <span>{isDescriptionExpanded ? 'Read Less' : 'Read More'}</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${isDescriptionExpanded ? 'rotate-180' : ''}`}
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
                  )}

                  {/* Additional Content Section */}
                  {isDescriptionExpanded && (
                    <div className="mt-8 pt-8 border-t border-gray-200 space-y-6">
                      {/* Science & Research */}
                      <div>
                        <h3 className="text-xl font-bold text-secondary mb-3">Science & Research</h3>
                        <p className="text-secondary-muted leading-relaxed font-light">
                          Our {product.name} is backed by extensive scientific research. Each ingredient is carefully selected based on clinical studies and proven efficacy. We work with leading nutritionists and researchers to ensure our formulations deliver optimal results.
                        </p>
                      </div>

                      {/* Quality Assurance */}
                      <div>
                        <h3 className="text-xl font-bold text-secondary mb-3">Quality Assurance</h3>
                        <p className="text-secondary-muted leading-relaxed font-light">
                          Manufactured in FDA-registered facilities following Good Manufacturing Practices (GMP). Every batch undergoes rigorous third-party testing for purity, potency, and safety. We guarantee the highest quality standards in every bottle.
                        </p>
                      </div>

                      {/* Why Choose This Product */}
                      <div>
                        <h3 className="text-xl font-bold text-secondary mb-3">Why Choose This Product</h3>
                        <ul className="space-y-2 text-secondary-muted font-light">
                          <li className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Premium quality ingredients sourced from trusted suppliers</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Third-party tested for purity and potency</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>No artificial colors, flavors, or preservatives</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Made with your health and wellness in mind</span>
                          </li>
                        </ul>
                      </div>

                      {/* Customer Satisfaction */}
                      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h3 className="text-xl font-bold text-secondary mb-3">Customer Satisfaction Guarantee</h3>
                        <p className="text-secondary-muted leading-relaxed font-light">
                          We stand behind the quality of our products. If you're not completely satisfied with your purchase, contact us within 30 days for a full refund. Your satisfaction is our priority.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <ul className="space-y-3">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-secondary-muted font-light flex items-start gap-3">
                      <span className="text-primary mt-1.5 font-bold">•</span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'nutrition' && product.nutritionFacts && (
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 max-w-md">
                <div className="mb-6 space-y-2">
                  <p className="text-sm text-secondary-muted font-medium">
                    Serving Size: <span className="text-secondary font-bold">{product.nutritionFacts.servingSize}</span>
                  </p>
                  <p className="text-sm text-secondary-muted font-medium">
                    Servings Per Container: <span className="text-secondary font-bold">{product.nutritionFacts.servingsPerContainer}</span>
                  </p>
                </div>
                <div className="border-t border-gray-300 pt-6">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left py-3 font-bold text-secondary text-sm">
                          Nutrient
                        </th>
                        <th className="text-right py-3 font-bold text-secondary text-sm">
                          Amount
                        </th>
                        {product.nutritionFacts.nutrients.some((n) => n.dailyValue) && (
                          <th className="text-right py-3 font-bold text-secondary text-sm">
                            %DV
                          </th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {product.nutritionFacts.nutrients.map((nutrient, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="py-3 text-secondary-muted font-light">{nutrient.name}</td>
                          <td className="py-3 text-right text-secondary font-bold">
                            {nutrient.amount}
                          </td>
                          {nutrient.dailyValue && (
                            <td className="py-3 text-right text-secondary font-bold">
                              {nutrient.dailyValue}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-secondary-muted leading-relaxed font-light text-lg">
                  {product.usageInstructions}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="border-t border-gray-200 pt-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-secondary mb-4 tracking-tight">
                Related Products
              </h2>
              <p className="text-lg text-secondary-muted font-light">
                You might also like
              </p>
            </div>
            <ProductGrid products={relatedProducts} />
          </section>
        )}
      </div>
    </div>
  );
}

