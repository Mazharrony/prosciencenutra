'use client';

import { useState } from 'react';

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    // General
    storeName: 'ProScience Nutra',
    storeEmail: 'info@prosciencenutra.com',
    storePhone: '+1 (302) 499-3725',
    storeAddress: '1013 Centre Road, Suite 403A, City of Wilmington, Country of New Castle, Delaware 19805',
    // Shipping & Tax
    currency: 'USD',
    taxRate: 8,
    freeShippingThreshold: 50,
    shippingCost: 9.99,
    // Email Notifications
    orderNotifications: true,
    lowStockAlerts: true,
    reviewNotifications: true,
    newsletterEnabled: true,
    // SEO
    metaTitle: 'ProScience - Premium Supplements for Optimal Health',
    metaDescription: 'Science-backed premium supplements for optimal health and performance.',
    // Social Media
    facebookUrl: '',
    instagramUrl: '',
    twitterUrl: '',
    linkedinUrl: '',
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate save
    setTimeout(() => {
      setIsSaving(false);
      alert('Settings saved successfully!');
    }, 1000);
  };

  const tabs = [
    { id: 'general', label: 'General', icon: '⚙️' },
    { id: 'shipping', label: 'Shipping & Tax', icon: '🚚' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'seo', label: 'SEO', icon: '🔍' },
    { id: 'social', label: 'Social Media', icon: '📱' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-secondary mb-2">Settings</h1>
        <p className="text-secondary-muted font-light">Manage your store settings and preferences</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl p-2 border-2 border-gray-200">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary text-white'
                  : 'text-secondary hover:bg-gray-100'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* General Settings */}
      {activeTab === 'general' && (
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-secondary mb-6">General Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">Store Name</label>
              <input
                type="text"
                value={settings.storeName}
                onChange={(e) => setSettings({ ...settings, storeName: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">Store Email</label>
              <input
                type="email"
                value={settings.storeEmail}
                onChange={(e) => setSettings({ ...settings, storeEmail: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">Store Phone</label>
              <input
                type="tel"
                value={settings.storePhone}
                onChange={(e) => setSettings({ ...settings, storePhone: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">Store Address</label>
              <textarea
                value={settings.storeAddress}
                onChange={(e) => setSettings({ ...settings, storeAddress: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light resize-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* Shipping & Tax Settings */}
      {activeTab === 'shipping' && (
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-secondary mb-6">Shipping & Tax</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">Currency</label>
              <select
                value={settings.currency}
                onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="CAD">CAD ($)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">Tax Rate (%)</label>
              <input
                type="number"
                value={settings.taxRate}
                onChange={(e) => setSettings({ ...settings, taxRate: parseFloat(e.target.value) })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
                min="0"
                max="100"
                step="0.1"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">Free Shipping Threshold ($)</label>
              <input
                type="number"
                value={settings.freeShippingThreshold}
                onChange={(e) => setSettings({ ...settings, freeShippingThreshold: parseFloat(e.target.value) })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
                min="0"
                step="0.01"
              />
              <p className="text-xs text-secondary-muted font-light mt-1">
                Orders above this amount qualify for free shipping
              </p>
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">Standard Shipping Cost ($)</label>
              <input
                type="number"
                value={settings.shippingCost}
                onChange={(e) => setSettings({ ...settings, shippingCost: parseFloat(e.target.value) })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
                min="0"
                step="0.01"
              />
            </div>
          </div>
        </div>
      )}

      {/* Notifications */}
      {activeTab === 'notifications' && (
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-secondary mb-6">Email Notifications</h2>
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <input
                type="checkbox"
                checked={settings.orderNotifications}
                onChange={(e) => setSettings({ ...settings, orderNotifications: e.target.checked })}
                className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <div>
                <span className="font-bold text-secondary">Order Notifications</span>
                <p className="text-sm text-secondary-muted font-light">Receive email alerts for new orders</p>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <input
                type="checkbox"
                checked={settings.lowStockAlerts}
                onChange={(e) => setSettings({ ...settings, lowStockAlerts: e.target.checked })}
                className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <div>
                <span className="font-bold text-secondary">Low Stock Alerts</span>
                <p className="text-sm text-secondary-muted font-light">Get notified when products are running low</p>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <input
                type="checkbox"
                checked={settings.reviewNotifications}
                onChange={(e) => setSettings({ ...settings, reviewNotifications: e.target.checked })}
                className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <div>
                <span className="font-bold text-secondary">Review Notifications</span>
                <p className="text-sm text-secondary-muted font-light">Receive alerts for new product reviews</p>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <input
                type="checkbox"
                checked={settings.newsletterEnabled}
                onChange={(e) => setSettings({ ...settings, newsletterEnabled: e.target.checked })}
                className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <div>
                <span className="font-bold text-secondary">Newsletter Enabled</span>
                <p className="text-sm text-secondary-muted font-light">Allow customers to subscribe to newsletter</p>
              </div>
            </label>
          </div>
        </div>
      )}

      {/* SEO Settings */}
      {activeTab === 'seo' && (
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-secondary mb-6">SEO Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">Meta Title</label>
              <input
                type="text"
                value={settings.metaTitle}
                onChange={(e) => setSettings({ ...settings, metaTitle: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
                placeholder="Page title for search engines"
              />
              <p className="text-xs text-secondary-muted font-light mt-1">
                Recommended: 50-60 characters
              </p>
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">Meta Description</label>
              <textarea
                value={settings.metaDescription}
                onChange={(e) => setSettings({ ...settings, metaDescription: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light resize-none"
                placeholder="Page description for search engines"
              />
              <p className="text-xs text-secondary-muted font-light mt-1">
                Recommended: 150-160 characters
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Social Media */}
      {activeTab === 'social' && (
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-secondary mb-6">Social Media Links</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">Facebook URL</label>
              <input
                type="url"
                value={settings.facebookUrl}
                onChange={(e) => setSettings({ ...settings, facebookUrl: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
                placeholder="https://facebook.com/yourpage"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">Instagram URL</label>
              <input
                type="url"
                value={settings.instagramUrl}
                onChange={(e) => setSettings({ ...settings, instagramUrl: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
                placeholder="https://instagram.com/yourpage"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">Twitter URL</label>
              <input
                type="url"
                value={settings.twitterUrl}
                onChange={(e) => setSettings({ ...settings, twitterUrl: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
                placeholder="https://twitter.com/yourpage"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">LinkedIn URL</label>
              <input
                type="url"
                value={settings.linkedinUrl}
                onChange={(e) => setSettings({ ...settings, linkedinUrl: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
                placeholder="https://linkedin.com/company/yourpage"
              />
            </div>
          </div>
        </div>
      )}

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className={`px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl ${
            isSaving
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary-dark'
          }`}
        >
          {isSaving ? 'Saving...' : 'Save Settings'}
        </button>
      </div>
    </div>
  );
}
