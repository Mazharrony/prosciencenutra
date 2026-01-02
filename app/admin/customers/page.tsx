'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  orders: number;
  totalSpent: number;
  lastOrder: string;
  status: 'active' | 'inactive';
}

export default function AdminCustomersPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock customers data
  const customers: Customer[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '+1 (555) 123-4567',
      orders: 12,
      totalSpent: 1245.50,
      lastOrder: '2024-01-20',
      status: 'active',
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'michael@example.com',
      phone: '+1 (555) 234-5678',
      orders: 8,
      totalSpent: 890.25,
      lastOrder: '2024-01-20',
      status: 'active',
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      email: 'emily@example.com',
      phone: '+1 (555) 345-6789',
      orders: 5,
      totalSpent: 450.99,
      lastOrder: '2024-01-19',
      status: 'active',
    },
    {
      id: '4',
      name: 'David Thompson',
      email: 'david@example.com',
      phone: '+1 (555) 456-7890',
      orders: 3,
      totalSpent: 299.99,
      lastOrder: '2024-01-18',
      status: 'active',
    },
    {
      id: '5',
      name: 'Jessica Martinez',
      email: 'jessica@example.com',
      phone: '+1 (555) 567-8901',
      orders: 1,
      totalSpent: 67.50,
      lastOrder: '2024-01-15',
      status: 'inactive',
    },
  ];

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-secondary mb-2">Customers</h1>
        <p className="text-secondary-muted font-light">Manage your customer database</p>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
        <label className="block text-sm font-bold text-secondary mb-2">Search Customers</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name or email..."
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
        />
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-secondary">Customer</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-secondary">Contact</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-secondary">Orders</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-secondary">Total Spent</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-secondary">Last Order</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-secondary">Status</th>
                <th className="px-6 py-4 text-right text-sm font-bold text-secondary">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredCustomers.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center">
                    <p className="text-secondary-muted font-light">No customers found</p>
                  </td>
                </tr>
              ) : (
                filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">
                            {customer.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <p className="font-bold text-secondary">{customer.name}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm text-secondary-muted font-light">{customer.email}</p>
                        <p className="text-sm text-secondary-muted font-light">{customer.phone}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-secondary">{customer.orders}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-secondary">
                        ${customer.totalSpent.toFixed(2)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-secondary-muted font-light">{customer.lastOrder}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                          customer.status === 'active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {customer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/customers/${customer.id}`}
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
            Showing <span className="font-bold text-secondary">{filteredCustomers.length}</span> of{' '}
            <span className="font-bold text-secondary">{customers.length}</span> customers
          </p>
        </div>
      </div>
    </div>
  );
}

