'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Order {
  id: string;
  orderNumber: string;
  customer: string;
  email: string;
  items: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
  paymentStatus: 'pending' | 'paid' | 'failed';
}

export default function AdminOrdersPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock orders data
  const orders: Order[] = [
    {
      id: '1',
      orderNumber: 'ORD-2024-001',
      customer: 'Sarah Johnson',
      email: 'sarah@example.com',
      items: 3,
      total: 89.99,
      status: 'pending',
      date: '2024-01-20',
      paymentStatus: 'paid',
    },
    {
      id: '2',
      orderNumber: 'ORD-2024-002',
      customer: 'Michael Chen',
      email: 'michael@example.com',
      items: 2,
      total: 124.50,
      status: 'processing',
      date: '2024-01-20',
      paymentStatus: 'paid',
    },
    {
      id: '3',
      orderNumber: 'ORD-2024-003',
      customer: 'Emily Rodriguez',
      email: 'emily@example.com',
      items: 1,
      total: 45.99,
      status: 'shipped',
      date: '2024-01-19',
      paymentStatus: 'paid',
    },
    {
      id: '4',
      orderNumber: 'ORD-2024-004',
      customer: 'David Thompson',
      email: 'david@example.com',
      items: 4,
      total: 199.99,
      status: 'delivered',
      date: '2024-01-18',
      paymentStatus: 'paid',
    },
    {
      id: '5',
      orderNumber: 'ORD-2024-005',
      customer: 'Jessica Martinez',
      email: 'jessica@example.com',
      items: 2,
      total: 67.50,
      status: 'pending',
      date: '2024-01-18',
      paymentStatus: 'pending',
    },
  ];

  const filteredOrders = orders.filter((order) => {
    const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus;
    const matchesSearch =
      order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-700',
    processing: 'bg-blue-100 text-blue-700',
    shipped: 'bg-purple-100 text-purple-700',
    delivered: 'bg-green-100 text-green-700',
    cancelled: 'bg-red-100 text-red-700',
  };

  const paymentStatusColors = {
    pending: 'bg-gray-100 text-gray-700',
    paid: 'bg-green-100 text-green-700',
    failed: 'bg-red-100 text-red-700',
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-secondary mb-2">Orders</h1>
        <p className="text-secondary-muted font-light">Manage and track customer orders</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-secondary mb-2">Search Orders</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by order number, customer, or email..."
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-secondary mb-2">Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-secondary">Order</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-secondary">Customer</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-secondary">Items</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-secondary">Total</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-secondary">Status</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-secondary">Payment</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-secondary">Date</th>
                <th className="px-6 py-4 text-right text-sm font-bold text-secondary">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center">
                    <p className="text-secondary-muted font-light">No orders found</p>
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <Link
                        href={`/admin/orders/${order.id}`}
                        className="font-bold text-primary hover:text-primary-dark transition-colors"
                      >
                        {order.orderNumber}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-bold text-secondary">{order.customer}</p>
                        <p className="text-sm text-secondary-muted font-light">{order.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-secondary">{order.items}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-secondary">${order.total.toFixed(2)}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${statusColors[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${paymentStatusColors[order.paymentStatus]}`}>
                        {order.paymentStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-secondary-muted font-light">{order.date}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/orders/${order.id}`}
                          className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
        <div className="flex items-center justify-between">
          <p className="text-secondary-muted font-light">
            Showing <span className="font-bold text-secondary">{filteredOrders.length}</span> of{' '}
            <span className="font-bold text-secondary">{orders.length}</span> orders
          </p>
        </div>
      </div>
    </div>
  );
}

