'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { useCart } from '@/lib/store/cart-context';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const discountPercent = product.compareAtPrice 
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!product.inStock) return;
    
    setIsAdding(true);
    addItem(product, 1);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 500);
  };

  return (
    <Link href={`/products/${product.slug}`} className="group block h-full">
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        {/* Image Area - Premium */}
        <div className="relative aspect-square bg-gray-50 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-white/80 rounded-lg flex items-center justify-center mb-3 backdrop-blur-sm">
                <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-gray-400 text-xs font-medium">Image</span>
            </div>
          </div>
          
          {/* Badges - Minimal */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
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

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
        </div>

        {/* Content - Clean */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Category - Minimal */}
          <span className="text-[10px] font-semibold text-accent uppercase mb-2 tracking-widest">
            {product.category}
          </span>

          {/* Name */}
          <h3 className="text-lg font-bold text-secondary mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-snug flex-grow">
            {product.name}
          </h3>

          {/* Price - Premium */}
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-bold text-secondary">
              ${product.price.toFixed(2)}
            </span>
            {product.compareAtPrice && (
              <span className="text-sm text-secondary-muted line-through font-medium">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Add to Cart Button - Premium */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock || isAdding}
            className={`w-full py-3 px-4 rounded-md font-bold text-sm transition-colors ${
              !product.inStock
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : isAdding
                ? 'bg-primary text-white'
                : 'bg-secondary text-white hover:bg-secondary-dark'
            }`}
          >
            {!product.inStock ? 'Out of Stock' : isAdding ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </Link>
  );
}
