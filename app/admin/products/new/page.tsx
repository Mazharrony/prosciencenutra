'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NewProductPage() {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    category: 'vitamins',
    price: '',
    compareAtPrice: '',
    description: '',
    shortDescription: '',
    ingredients: '',
    benefits: '',
    usageInstructions: '',
    inStock: true,
    stockQuantity: '',
    featured: false,
    flavour: '',
    tags: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Auto-generate slug from name
    if (name === 'name') {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    // Simulate save
    setTimeout(() => {
      setIsSaving(false);
      router.push('/admin/products');
    }, 1500);
  };

  const categories = ['vitamins', 'protein', 'wellness', 'sports'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/admin/products"
            className="inline-flex items-center gap-2 text-secondary-muted hover:text-secondary transition-colors font-medium mb-4"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Products
          </Link>
          <h1 className="text-4xl font-bold text-secondary mb-2">Add New Product</h1>
          <p className="text-secondary-muted font-light">Create a new product listing</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-secondary mb-6">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-secondary mb-2">
                Product Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
                placeholder="Omega-3 Premium"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">
                Slug *
              </label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
                placeholder="omega-3-premium"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
                required
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">
                Price ($) *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                step="0.01"
                min="0"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
                placeholder="29.99"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">
                Compare At Price ($)
              </label>
              <input
                type="number"
                name="compareAtPrice"
                value={formData.compareAtPrice}
                onChange={handleInputChange}
                step="0.01"
                min="0"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
                placeholder="39.99"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">
                Flavour
              </label>
              <input
                type="text"
                name="flavour"
                value={formData.flavour}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
                placeholder="Vanilla, Chocolate, etc."
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-secondary mb-6">Description</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">
                Short Description *
              </label>
              <input
                type="text"
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
                placeholder="Brief product description for cards"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">
                Full Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light resize-none"
                placeholder="Detailed product description..."
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">
                Usage Instructions
              </label>
              <textarea
                name="usageInstructions"
                value={formData.usageInstructions}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light resize-none"
                placeholder="How to use this product..."
              />
            </div>
          </div>
        </div>

        {/* Ingredients & Benefits */}
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-secondary mb-6">Ingredients & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">
                Ingredients (comma-separated)
              </label>
              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light resize-none"
                placeholder="Fish Oil, Vitamin E, Gelatin..."
              />
              <p className="text-xs text-secondary-muted font-light mt-1">Separate with commas</p>
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">
                Benefits (comma-separated)
              </label>
              <textarea
                name="benefits"
                value={formData.benefits}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light resize-none"
                placeholder="Heart Health, Brain Function..."
              />
              <p className="text-xs text-secondary-muted font-light mt-1">Separate with commas</p>
            </div>
          </div>
        </div>

        {/* Inventory */}
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-secondary mb-6">Inventory</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="inStock"
                  checked={formData.inStock}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <span className="font-bold text-secondary">In Stock</span>
              </label>
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">
                Stock Quantity
              </label>
              <input
                type="number"
                name="stockQuantity"
                value={formData.stockQuantity}
                onChange={handleInputChange}
                min="0"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
                placeholder="100"
              />
            </div>
          </div>
        </div>

        {/* Additional Settings */}
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-secondary mb-6">Additional Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <span className="font-bold text-secondary">Featured Product</span>
              </label>
              <p className="text-xs text-secondary-muted font-light mt-1 ml-8">
                Show this product on the homepage
              </p>
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">
                Tags (comma-separated)
              </label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
                placeholder="premium, heart-health, omega-3"
              />
              <p className="text-xs text-secondary-muted font-light mt-1">Separate with commas</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4">
          <Link
            href="/admin/products"
            className="px-6 py-3 border-2 border-gray-300 text-secondary rounded-lg font-bold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isSaving}
            className={`px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl ${
              isSaving
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-primary text-white hover:bg-primary-dark'
            }`}
          >
            {isSaving ? 'Saving...' : 'Create Product'}
          </button>
        </div>
      </form>
    </div>
  );
}

