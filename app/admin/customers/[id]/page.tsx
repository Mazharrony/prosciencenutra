'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: string;
  total: number;
  items: number;
}

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  registeredDate: string;
  totalOrders: number;
  totalSpent: number;
  averageOrderValue: number;
  lastOrderDate: string;
  status: 'active' | 'inactive';
  orders: Order[];
}

export default function CustomerDetailPage() {
  const params = useParams();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading customer data
    setTimeout(() => {
      setCustomer({
        id: params.id as string,
        name: 'Sarah Johnson',
        email: 'sarah@example.com',
        phone: '+1 (555) 123-4567',
        registeredDate: '2023-06-15',
        totalOrders: 12,
        totalSpent: 1245.50,
        averageOrderValue: 103.79,
        lastOrderDate: '2024-01-20',
        status: 'active',
        orders: [
          { id: '1', orderNumber: 'ORD-2024-001', date: '2024-01-20', status: 'pending', total: 89.99, items: 3 },
          { id: '2', orderNumber: 'ORD-2023-045', date: '2023-12-15', status: 'delivered', total: 124.50, items: 2 },
          { id: '3', orderNumber: 'ORD-2023-038', date: '2023-11-20', status: 'delivered', total: 199.99, items: 4 },
        ],
      });
      setIsLoading(false);
    }, 500);
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-secondary-muted">Loading customer...</p>
        </div>
      </div>
    );
  }

  if (!customer) {
    return (
      <div className="text-center py-12">
        <p className="text-secondary-muted">Customer not found</p>
        <Link href="/admin/customers" className="text-primary hover:underline mt-4 inline-block">
          Back to Customers
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Link
          href="/admin/customers"
          className="inline-flex items-center gap-2 text-secondary-muted hover:text-secondary transition-colors font-medium mb-4"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Customers
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-secondary mb-2">{customer.name}</h1>
            <p className="text-secondary-muted font-light">
              Customer since {new Date(customer.registeredDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
          <span
            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${
              customer.status === 'active'
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <p className="text-sm text-secondary-muted font-light mb-2">Total Orders</p>
          <p className="text-3xl font-bold text-secondary">{customer.totalOrders}</p>
        </div>
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <p className="text-sm text-secondary-muted font-light mb-2">Total Spent</p>
          <p className="text-3xl font-bold text-secondary">${customer.totalSpent.toFixed(2)}</p>
        </div>
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <p className="text-sm text-secondary-muted font-light mb-2">Average Order</p>
          <p className="text-3xl font-bold text-secondary">${customer.averageOrderValue.toFixed(2)}</p>
        </div>
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <p className="text-sm text-secondary-muted font-light mb-2">Last Order</p>
          <p className="text-lg font-bold text-secondary">
            {new Date(customer.lastOrderDate).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Information */}
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-secondary mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-secondary-muted font-light mb-1">Email</p>
              <a href={`mailto:${customer.email}`} className="text-primary hover:underline font-medium">
                {customer.email}
              </a>
            </div>
            <div>
              <p className="text-sm text-secondary-muted font-light mb-1">Phone</p>
              <a href={`tel:${customer.phone}`} className="text-primary hover:underline font-medium">
                {customer.phone}
              </a>
            </div>
            <div>
              <p className="text-sm text-secondary-muted font-light mb-1">Member Since</p>
              <p className="font-medium text-secondary">
                {new Date(customer.registeredDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border-2 border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-secondary">Order History</h2>
            <Link
              href={`/admin/orders?customer=${customer.id}`}
              className="text-sm text-primary hover:text-primary-dark font-bold transition-colors"
            >
              View All →
            </Link>
          </div>
          <div className="space-y-3">
            {customer.orders.length === 0 ? (
              <p className="text-secondary-muted font-light text-center py-8">No orders yet</p>
            ) : (
              customer.orders.map((order) => (
                <Link
                  key={order.id}
                  href={`/admin/orders/${order.id}`}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="font-bold text-secondary group-hover:text-primary transition-colors">
                        {order.orderNumber}
                      </p>
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded ${
                          order.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-700'
                            : order.status === 'delivered'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-secondary-muted font-light">
                      <span>{order.items} items</span>
                      <span>•</span>
                      <span>{order.date}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-secondary">${order.total.toFixed(2)}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

