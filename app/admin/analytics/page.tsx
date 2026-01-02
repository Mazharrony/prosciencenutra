'use client';

import { useState, useEffect } from 'react';

export default function AdminAnalyticsPage() {
  const [timeRange, setTimeRange] = useState('30d');

  const stats = {
    revenue: {
      current: 125430.50,
      previous: 111520.00,
      change: 12.5,
    },
    orders: {
      current: 1247,
      previous: 1152,
      change: 8.2,
    },
    customers: {
      current: 10234,
      previous: 8876,
      change: 15.3,
    },
    averageOrder: {
      current: 100.58,
      previous: 96.81,
      change: 3.9,
    },
  };

  const topProducts = [
    { name: 'Omega-3 Premium', sales: 342, revenue: 10258.58 },
    { name: 'Whey Protein Isolate', sales: 298, revenue: 8940.02 },
    { name: 'Vitamin D3 + K2', sales: 256, revenue: 7679.44 },
    { name: 'Pre-Workout Energy', sales: 189, revenue: 5670.11 },
    { name: 'Probiotic Complex', sales: 167, revenue: 5008.33 },
  ];

  const salesByCategory = [
    { category: 'Vitamins', sales: 856, revenue: 25680.00 },
    { category: 'Protein', sales: 623, revenue: 18690.00 },
    { category: 'Wellness', sales: 445, revenue: 13350.00 },
    { category: 'Sports', sales: 312, revenue: 9360.00 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-secondary mb-2">Analytics</h1>
          <p className="text-secondary-muted font-light">Track your store performance and insights</p>
        </div>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
        >
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
          <option value="1y">Last year</option>
        </select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(stats).map(([key, stat]) => (
          <div key={key} className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <h3 className="text-sm text-secondary-muted font-light mb-2 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <p className="text-3xl font-bold text-secondary mb-2">
              {key === 'revenue' || key === 'averageOrder'
                ? `$${stat.current.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                : stat.current.toLocaleString()}
            </p>
            <div className="flex items-center gap-2">
              <span
                className={`text-sm font-bold ${
                  stat.change > 0 ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.change > 0 ? '↑' : '↓'} {Math.abs(stat.change)}%
              </span>
              <span className="text-xs text-secondary-muted font-light">vs previous period</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart Placeholder */}
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <h2 className="text-xl font-bold text-secondary mb-4">Revenue Trend</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <div className="text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <p className="text-secondary-muted font-light">Chart visualization</p>
              <p className="text-xs text-secondary-muted font-light">(Integration with chart library)</p>
            </div>
          </div>
        </div>

        {/* Orders Chart Placeholder */}
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <h2 className="text-xl font-bold text-secondary mb-4">Orders Trend</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <div className="text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <p className="text-secondary-muted font-light">Chart visualization</p>
              <p className="text-xs text-secondary-muted font-light">(Integration with chart library)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Products & Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <h2 className="text-xl font-bold text-secondary mb-6">Top Products</h2>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center font-bold text-primary">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-secondary">{product.name}</p>
                    <p className="text-sm text-secondary-muted font-light">
                      {product.sales} sales
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-secondary">${product.revenue.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sales by Category */}
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <h2 className="text-xl font-bold text-secondary mb-6">Sales by Category</h2>
          <div className="space-y-4">
            {salesByCategory.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-secondary capitalize">{item.category}</span>
                  <span className="text-sm text-secondary-muted font-light">
                    ${item.revenue.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{
                      width: `${(item.revenue / salesByCategory[0].revenue) * 100}%`,
                    }}
                  />
                </div>
                <p className="text-xs text-secondary-muted font-light">
                  {item.sales} orders
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

