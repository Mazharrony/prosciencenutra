'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface DashboardStats {
  totalOrders: number;
  totalRevenue: number;
  totalProducts: number;
  totalCustomers: number;
  pendingOrders: number;
  lowStockProducts: number;
  todayRevenue: number;
  todayOrders: number;
  averageOrderValue: number;
  conversionRate: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalOrders: 0,
    totalRevenue: 0,
    totalProducts: 0,
    totalCustomers: 0,
    pendingOrders: 0,
    lowStockProducts: 0,
    todayRevenue: 0,
    todayOrders: 0,
    averageOrderValue: 0,
    conversionRate: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('30d');

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setStats({
        totalOrders: 1247,
        totalRevenue: 125430.50,
        totalProducts: 18,
        totalCustomers: 10234,
        pendingOrders: 23,
        lowStockProducts: 5,
        todayRevenue: 1245.50,
        todayOrders: 12,
        averageOrderValue: 100.58,
        conversionRate: 3.2,
      });
      setIsLoading(false);
    }, 500);
  }, []);

  const statCards = [
    {
      title: 'Total Revenue',
      value: `$${stats.totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: '+12.5%',
      changeType: 'positive',
      icon: '💰',
      color: 'green',
      href: '/admin/analytics',
      subtitle: `Today: $${stats.todayRevenue.toFixed(2)}`,
    },
    {
      title: 'Total Orders',
      value: stats.totalOrders.toLocaleString(),
      change: '+8.2%',
      changeType: 'positive',
      icon: '🛒',
      color: 'blue',
      href: '/admin/orders',
      subtitle: `${stats.todayOrders} today`,
    },
    {
      title: 'Total Products',
      value: stats.totalProducts.toString(),
      change: '+3',
      changeType: 'positive',
      icon: '📦',
      color: 'purple',
      href: '/admin/products',
      subtitle: `${stats.lowStockProducts} low stock`,
    },
    {
      title: 'Total Customers',
      value: stats.totalCustomers.toLocaleString(),
      change: '+15.3%',
      changeType: 'positive',
      icon: '👥',
      color: 'orange',
      href: '/admin/customers',
      subtitle: 'Active customers',
    },
    {
      title: 'Pending Orders',
      value: stats.pendingOrders.toString(),
      change: '-5',
      changeType: 'negative',
      icon: '⏳',
      color: 'yellow',
      href: '/admin/orders?status=pending',
      subtitle: 'Needs attention',
    },
    {
      title: 'Average Order Value',
      value: `$${stats.averageOrderValue.toFixed(2)}`,
      change: '+3.9%',
      changeType: 'positive',
      icon: '📊',
      color: 'indigo',
      href: '/admin/analytics',
      subtitle: 'Per order',
    },
  ];

  const recentOrders = [
    { id: 'ORD-2024-001', customer: 'Sarah Johnson', amount: 89.99, status: 'pending', date: '2024-01-20', items: 3 },
    { id: 'ORD-2024-002', customer: 'Michael Chen', amount: 124.50, status: 'processing', date: '2024-01-20', items: 2 },
    { id: 'ORD-2024-003', customer: 'Emily Rodriguez', amount: 45.99, status: 'shipped', date: '2024-01-19', items: 1 },
    { id: 'ORD-2024-004', customer: 'David Thompson', amount: 199.99, status: 'delivered', date: '2024-01-18', items: 4 },
    { id: 'ORD-2024-005', customer: 'Jessica Martinez', amount: 67.50, status: 'pending', date: '2024-01-18', items: 2 },
  ];

  const topProducts = [
    { name: 'Omega-3 Premium', sales: 342, revenue: 10258.58 },
    { name: 'Whey Protein Isolate', sales: 298, revenue: 8940.02 },
    { name: 'Vitamin D3 + K2', sales: 256, revenue: 7679.44 },
    { name: 'Pre-Workout Energy', sales: 189, revenue: 5670.11 },
  ];

  const recentActivity = [
    { type: 'order', message: 'New order from Sarah Johnson', time: '2 minutes ago', icon: '🛒' },
    { type: 'product', message: 'Product "Omega-3 Premium" stock updated', time: '15 minutes ago', icon: '📦' },
    { type: 'review', message: 'New review received for "Whey Protein"', time: '1 hour ago', icon: '⭐' },
    { type: 'customer', message: 'New customer registered: John Doe', time: '2 hours ago', icon: '👤' },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-secondary-muted">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-secondary mb-2">Dashboard</h1>
          <p className="text-secondary-muted font-light">Welcome back! Here's what's happening with your store today.</p>
        </div>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
        >
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat, index) => (
          <Link
            key={index}
            href={stat.href}
            className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <span
                className={`text-sm font-bold px-2 py-1 rounded ${
                  stat.changeType === 'positive'
                    ? 'bg-green-100 text-green-700'
                    : stat.changeType === 'negative'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {stat.change}
              </span>
            </div>
            <h3 className="text-sm text-secondary-muted font-light mb-1">{stat.title}</h3>
            <p className="text-3xl font-bold text-secondary mb-1">{stat.value}</p>
            {stat.subtitle && (
              <p className="text-xs text-secondary-muted font-light">{stat.subtitle}</p>
            )}
          </Link>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border-2 border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-secondary">Recent Orders</h2>
            <Link
              href="/admin/orders"
              className="text-sm text-primary hover:text-primary-dark font-bold transition-colors"
            >
              View All →
            </Link>
          </div>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <Link
                key={order.id}
                href={`/admin/orders/${order.id}`}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="font-bold text-secondary group-hover:text-primary transition-colors">{order.id}</p>
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded ${
                        order.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : order.status === 'processing'
                          ? 'bg-blue-100 text-blue-700'
                          : order.status === 'shipped'
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-secondary-muted font-light">
                    <span>{order.customer}</span>
                    <span>•</span>
                    <span>{order.items} items</span>
                    <span>•</span>
                    <span>{order.date}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-secondary text-lg">${order.amount.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions & Activity */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <h2 className="text-2xl font-bold text-secondary mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <Link
                href="/admin/products/new"
                className="flex items-center gap-3 p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors group"
              >
                <span className="text-2xl">➕</span>
                <div>
                  <p className="font-bold text-secondary group-hover:text-primary transition-colors">Add New Product</p>
                  <p className="text-xs text-secondary-muted font-light">Create a new product listing</p>
                </div>
              </Link>
              <Link
                href="/admin/orders?status=pending"
                className="flex items-center gap-3 p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors group"
              >
                <span className="text-2xl">⏳</span>
                <div>
                  <p className="font-bold text-secondary group-hover:text-yellow-700 transition-colors">Review Pending Orders</p>
                  <p className="text-xs text-secondary-muted font-light">{stats.pendingOrders} orders need attention</p>
                </div>
              </Link>
              <Link
                href="/admin/products?filter=low-stock"
                className="flex items-center gap-3 p-4 bg-red-50 hover:bg-red-100 rounded-lg transition-colors group"
              >
                <span className="text-2xl">⚠️</span>
                <div>
                  <p className="font-bold text-secondary group-hover:text-red-700 transition-colors">Check Low Stock</p>
                  <p className="text-xs text-secondary-muted font-light">{stats.lowStockProducts} products need restocking</p>
                </div>
              </Link>
              <Link
                href="/admin/analytics"
                className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
              >
                <span className="text-2xl">📈</span>
                <div>
                  <p className="font-bold text-secondary group-hover:text-blue-700 transition-colors">View Analytics</p>
                  <p className="text-xs text-secondary-muted font-light">See detailed reports</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <h2 className="text-2xl font-bold text-secondary mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{activity.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-secondary leading-tight">{activity.message}</p>
                    <p className="text-xs text-secondary-muted font-light mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Products & Sales Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-secondary">Top Products</h2>
            <Link
              href="/admin/products"
              className="text-sm text-primary hover:text-primary-dark font-bold transition-colors"
            >
              View All →
            </Link>
          </div>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center font-bold text-primary">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-secondary truncate">{product.name}</p>
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

        {/* Sales Chart Placeholder */}
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-secondary">Sales Overview</h2>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="text-sm px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
            >
              <option value="7d">7 Days</option>
              <option value="30d">30 Days</option>
              <option value="90d">90 Days</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <div className="text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <p className="text-secondary-muted font-light">Sales Chart</p>
              <p className="text-xs text-secondary-muted font-light">(Chart library integration)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
