'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

interface OrderItem {
  id: string;
  productName: string;
  quantity: number;
  price: number;
  subtotal: number;
}

interface Order {
  id: string;
  orderNumber: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  items: OrderItem[];
  shippingAddress: {
    firstName: string;
    lastName: string;
    address: string;
    apartment?: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'failed';
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
}

export default function OrderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState<string>('');

  useEffect(() => {
    // Simulate loading order data
    setTimeout(() => {
      setOrder({
        id: params.id as string,
        orderNumber: 'ORD-2024-001',
        customer: {
          name: 'Sarah Johnson',
          email: 'sarah@example.com',
          phone: '+1 (555) 123-4567',
        },
        items: [
          { id: '1', productName: 'Omega-3 Premium', quantity: 2, price: 29.99, subtotal: 59.98 },
          { id: '2', productName: 'Vitamin D3 + K2', quantity: 1, price: 24.99, subtotal: 24.99 },
          { id: '3', productName: 'Probiotic Complex', quantity: 1, price: 19.99, subtotal: 19.99 },
        ],
        shippingAddress: {
          firstName: 'Sarah',
          lastName: 'Johnson',
          address: '123 Main Street',
          apartment: 'Apt 4B',
          city: 'New York',
          state: 'NY',
          zipCode: '10001',
          country: 'United States',
        },
        subtotal: 104.96,
        shipping: 0,
        tax: 8.40,
        total: 113.36,
        status: 'pending',
        paymentStatus: 'paid',
        paymentMethod: 'Credit Card',
        createdAt: '2024-01-20T10:30:00Z',
        updatedAt: '2024-01-20T10:30:00Z',
      });
      setSelectedStatus('pending');
      setIsLoading(false);
    }, 500);
  }, [params.id]);

  const handleStatusUpdate = () => {
    if (order && selectedStatus !== order.status) {
      // Simulate update
      setOrder({ ...order, status: selectedStatus as Order['status'] });
      alert('Order status updated successfully!');
    }
  };

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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-secondary-muted">Loading order...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="text-center py-12">
        <p className="text-secondary-muted">Order not found</p>
        <Link href="/admin/orders" className="text-primary hover:underline mt-4 inline-block">
          Back to Orders
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Link
          href="/admin/orders"
          className="inline-flex items-center gap-2 text-secondary-muted hover:text-secondary transition-colors font-medium mb-4"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Orders
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-secondary mb-2">{order.orderNumber}</h1>
            <p className="text-secondary-muted font-light">
              Placed on {new Date(order.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-light"
            >
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <button
              onClick={handleStatusUpdate}
              className="px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors"
            >
              Update Status
            </button>
          </div>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <h3 className="text-sm font-bold text-secondary-muted mb-3">Order Status</h3>
          <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${statusColors[order.status]}`}>
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </span>
        </div>
        <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
          <h3 className="text-sm font-bold text-secondary-muted mb-3">Payment Status</h3>
          <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${paymentStatusColors[order.paymentStatus]}`}>
            {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Order Items */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-secondary mb-6">Order Items</h2>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-gray-200">
                    <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-secondary">{item.productName}</p>
                    <p className="text-sm text-secondary-muted font-light">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-secondary">${item.subtotal.toFixed(2)}</p>
                  <p className="text-sm text-secondary-muted font-light">${item.price.toFixed(2)} each</p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="mt-6 pt-6 border-t-2 border-gray-200">
            <div className="space-y-3">
              <div className="flex justify-between text-secondary-muted font-light">
                <span>Subtotal</span>
                <span className="font-bold text-secondary">${order.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-secondary-muted font-light">
                <span>Shipping</span>
                <span className="font-bold text-secondary">
                  {order.shipping === 0 ? 'Free' : `$${order.shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-secondary-muted font-light">
                <span>Tax</span>
                <span className="font-bold text-secondary">${order.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-baseline pt-3 border-t border-gray-200">
                <span className="text-lg font-bold text-secondary">Total</span>
                <span className="text-2xl font-bold text-secondary">${order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Customer & Shipping Info */}
        <div className="space-y-6">
          {/* Customer Information */}
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <h2 className="text-2xl font-bold text-secondary mb-6">Customer</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-secondary-muted font-light mb-1">Name</p>
                <p className="font-bold text-secondary">{order.customer.name}</p>
              </div>
              <div>
                <p className="text-sm text-secondary-muted font-light mb-1">Email</p>
                <a href={`mailto:${order.customer.email}`} className="text-primary hover:underline font-medium">
                  {order.customer.email}
                </a>
              </div>
              <div>
                <p className="text-sm text-secondary-muted font-light mb-1">Phone</p>
                <a href={`tel:${order.customer.phone}`} className="text-primary hover:underline font-medium">
                  {order.customer.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <h2 className="text-2xl font-bold text-secondary mb-6">Shipping Address</h2>
            <div className="space-y-1 text-secondary-muted font-light">
              <p className="font-bold text-secondary">{order.shippingAddress.firstName} {order.shippingAddress.lastName}</p>
              <p>{order.shippingAddress.address}</p>
              {order.shippingAddress.apartment && <p>{order.shippingAddress.apartment}</p>}
              <p>
                {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
              </p>
              <p>{order.shippingAddress.country}</p>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <h2 className="text-2xl font-bold text-secondary mb-6">Payment</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-secondary-muted font-light mb-1">Method</p>
                <p className="font-bold text-secondary">{order.paymentMethod}</p>
              </div>
              <div>
                <p className="text-sm text-secondary-muted font-light mb-1">Status</p>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${paymentStatusColors[order.paymentStatus]}`}>
                  {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

