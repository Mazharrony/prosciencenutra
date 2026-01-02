'use client';

import { useState, useMemo } from 'react';
import { getAllProducts, getProductsByCategory } from '@/lib/data/products';
import { ProductCategory } from '@/types/product';
import { CATEGORIES } from '@/lib/constants';
import ProductGrid from '@/components/products/ProductGrid';

type SortOption = 'default' | 'price-low' | 'price-high' | 'name-asc' | 'name-desc';
type StockFilter = 'all' | 'in-stock' | 'out-of-stock';

export default function ProductsPage() {
  const allProducts = getAllProducts();

  // Get price range and flavours from products
  const maxPrice = Math.max(...allProducts.map(p => p.price));
  const minPrice = Math.min(...allProducts.map(p => p.price));
  const allFlavours = Array.from(new Set(allProducts.filter(p => p.flavour).map(p => p.flavour!)));

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('default');
  const [selectedFlavours, setSelectedFlavours] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);
  const [stockFilter, setStockFilter] = useState<StockFilter>('all');
  const [showNewProducts, setShowNewProducts] = useState(false);

  // Check if product is new (created within last 30 days)
  const isNewProduct = (createdAt: Date) => {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return new Date(createdAt) > thirtyDaysAgo;
  };

  const filteredProducts = useMemo(() => {
    let products = selectedCategory === 'all' 
      ? allProducts 
      : getProductsByCategory(selectedCategory);

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.benefits.some((benefit) => benefit.toLowerCase().includes(query))
      );
    }

    // Flavour filter
    if (selectedFlavours.length > 0) {
      products = products.filter(
        (product) => product.flavour && selectedFlavours.includes(product.flavour)
      );
    }

    // Price range filter
    products = products.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Stock filter
    if (stockFilter === 'in-stock') {
      products = products.filter(p => p.inStock);
    } else if (stockFilter === 'out-of-stock') {
      products = products.filter(p => !p.inStock);
    }

    // New products filter
    if (showNewProducts) {
      products = products.filter(p => isNewProduct(p.createdAt));
    }

    // Sorting
    const sorted = [...products];
    switch (sortOption) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    return sorted;
  }, [selectedCategory, searchQuery, sortOption, selectedFlavours, priceRange, stockFilter, showNewProducts, allProducts]);

  const hasActiveFilters = 
    selectedCategory !== 'all' || 
    searchQuery.trim() !== '' || 
    selectedFlavours.length > 0 ||
    priceRange[0] !== minPrice || 
    priceRange[1] !== maxPrice ||
    stockFilter !== 'all' ||
    showNewProducts;

  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSelectedFlavours([]);
    setPriceRange([minPrice, maxPrice]);
    setStockFilter('all');
    setShowNewProducts(false);
    setSortOption('default');
  };

  const toggleFlavour = (flavour: string) => {
    setSelectedFlavours(prev =>
      prev.includes(flavour)
        ? prev.filter(f => f !== flavour)
        : [...prev, flavour]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary mb-4 tracking-tight">
            All Products
          </h1>
          <p className="text-lg text-secondary-muted font-light">
            Discover our complete range of premium supplements
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-secondary">Filters</h2>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-primary hover:text-primary-dark font-medium"
                  >
                    Clear all
                  </button>
                )}
              </div>

              <div className="space-y-8">
                {/* Type Filter */}
                <div>
                  <h3 className="text-sm font-bold text-secondary mb-3">Type</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === 'all'}
                        onChange={() => setSelectedCategory('all')}
                        className="w-4 h-4 text-secondary border-gray-300 focus:ring-secondary"
                      />
                      <span className="text-sm text-secondary-muted font-medium">All</span>
                    </label>
                    {CATEGORIES.map((category) => (
                      <label key={category.id} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category.id}
                          onChange={() => setSelectedCategory(category.id as ProductCategory)}
                          className="w-4 h-4 text-secondary border-gray-300 focus:ring-secondary"
                        />
                        <span className="text-sm text-secondary-muted font-medium capitalize">{category.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Flavour Filter */}
                {allFlavours.length > 0 && (
                  <div>
                    <h3 className="text-sm font-bold text-secondary mb-3">Flavour</h3>
                    <div className="space-y-2">
                      {allFlavours.map((flavour) => (
                        <label key={flavour} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedFlavours.includes(flavour)}
                            onChange={() => toggleFlavour(flavour)}
                            className="w-4 h-4 text-secondary border-gray-300 rounded focus:ring-secondary"
                          />
                          <span className="text-sm text-secondary-muted font-medium">{flavour}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Price Filter */}
                <div>
                  <h3 className="text-sm font-bold text-secondary mb-3">
                    Price: ${priceRange[0].toFixed(0)} - ${priceRange[1].toFixed(0)}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <input
                        type="range"
                        min={minPrice}
                        max={maxPrice}
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                      />
                      <div className="flex justify-between text-xs text-secondary-muted mt-1">
                        <span>${minPrice.toFixed(0)}</span>
                        <span>${maxPrice.toFixed(0)}</span>
                      </div>
                    </div>
                    <div>
                      <input
                        type="range"
                        min={minPrice}
                        max={maxPrice}
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                      />
                    </div>
                  </div>
                </div>

                {/* Stock Filter */}
                <div>
                  <h3 className="text-sm font-bold text-secondary mb-3">Stock Status</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="stock"
                        checked={stockFilter === 'all'}
                        onChange={() => setStockFilter('all')}
                        className="w-4 h-4 text-secondary border-gray-300 focus:ring-secondary"
                      />
                      <span className="text-sm text-secondary-muted font-medium">All</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="stock"
                        checked={stockFilter === 'in-stock'}
                        onChange={() => setStockFilter('in-stock')}
                        className="w-4 h-4 text-secondary border-gray-300 focus:ring-secondary"
                      />
                      <span className="text-sm text-secondary-muted font-medium">In Stock</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="stock"
                        checked={stockFilter === 'out-of-stock'}
                        onChange={() => setStockFilter('out-of-stock')}
                        className="w-4 h-4 text-secondary border-gray-300 focus:ring-secondary"
                      />
                      <span className="text-sm text-secondary-muted font-medium">Out of Stock</span>
                    </label>
                  </div>
                </div>

                {/* New Products Filter */}
                <div>
                  <h3 className="text-sm font-bold text-secondary mb-3">New Products</h3>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showNewProducts}
                      onChange={(e) => setShowNewProducts(e.target.checked)}
                      className="w-4 h-4 text-secondary border-gray-300 rounded focus:ring-secondary"
                    />
                    <span className="text-sm text-secondary-muted font-medium">Show new products only</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Sort Bar */}
            <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-11 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-light"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-muted"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as SortOption)}
                  className="appearance-none px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium text-sm bg-white cursor-pointer"
                >
                  <option value="default">Sort by</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-muted pointer-events-none"
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
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <div className="text-sm text-secondary-muted font-medium">
                Showing <span className="text-secondary font-bold">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <>
                <ProductGrid products={filteredProducts} />
                
                {/* Bottom Sections */}
                <div className="mt-20 space-y-16">
                  {/* Popular Products Section */}
                  <section>
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-secondary mb-4 tracking-tight">
                        Popular Products
                      </h2>
                      <p className="text-lg text-secondary-muted font-light">
                        Best-selling supplements our customers love
                      </p>
                    </div>
                    <ProductGrid 
                      products={allProducts
                        .filter(p => p.featured)
                        .slice(0, 4)
                      } 
                    />
                  </section>

                  {/* Trust & Benefits Section */}
                  <section className="bg-gray-50 rounded-xl p-8 lg:p-12 border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-secondary mb-2">Lab Tested</h3>
                        <p className="text-sm text-secondary-muted font-light">
                          All products undergo rigorous third-party testing
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-secondary mb-2">Fast Shipping</h3>
                        <p className="text-sm text-secondary-muted font-light">
                          Free shipping on orders over $50
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-secondary mb-2">30-Day Returns</h3>
                        <p className="text-sm text-secondary-muted font-light">
                          Money-back guarantee if not satisfied
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Newsletter CTA */}
                  <section className="bg-primary rounded-xl p-8 lg:p-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
                      Get 10% Off Your First Purchase
                    </h2>
                    <p className="text-lg text-white/90 mb-8 font-light max-w-2xl mx-auto">
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
                  </section>
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <svg
                  className="w-16 h-16 text-gray-300 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-bold text-secondary mb-2">No products found</h3>
                <p className="text-secondary-muted mb-6">Try adjusting your filters or search terms</p>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="px-6 py-2 bg-secondary text-white rounded-lg font-medium hover:bg-secondary-dark transition-colors"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
