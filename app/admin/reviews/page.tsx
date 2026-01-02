'use client';

import { useState } from 'react';

interface Review {
  id: string;
  product: string;
  productId: string;
  customer: string;
  customerEmail: string;
  rating: number;
  comment: string;
  date: string;
  status: 'approved' | 'pending' | 'rejected';
  verified: boolean;
}

export default function AdminReviewsPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: '1',
      product: 'Omega-3 Premium',
      productId: 'omega-3-premium',
      customer: 'Sarah Johnson',
      customerEmail: 'sarah@example.com',
      rating: 5,
      comment: 'Best supplements I\'ve tried! Noticeable difference in my energy levels and recovery time. The quality is exceptional and the taste is great. Highly recommend to anyone serious about their fitness goals.',
      date: '2024-01-20',
      status: 'approved',
      verified: true,
    },
    {
      id: '2',
      product: 'Whey Protein Isolate',
      productId: 'whey-protein-isolate',
      customer: 'Michael Chen',
      customerEmail: 'michael@example.com',
      rating: 5,
      comment: 'Great quality and taste. Highly recommend! Mixes well and no aftertaste. Perfect for post-workout recovery.',
      date: '2024-01-19',
      status: 'approved',
      verified: true,
    },
    {
      id: '3',
      product: 'Vitamin D3 + K2',
      productId: 'vitamin-d3-k2',
      customer: 'Emily Rodriguez',
      customerEmail: 'emily@example.com',
      rating: 4,
      comment: 'Good product, fast shipping. I\'ve been taking it for a month and feel more energetic. Would recommend.',
      date: '2024-01-18',
      status: 'pending',
      verified: true,
    },
    {
      id: '4',
      product: 'Pre-Workout Energy',
      productId: 'pre-workout-energy',
      customer: 'David Thompson',
      customerEmail: 'david@example.com',
      rating: 5,
      comment: 'Excellent energy boost without the crash. Clean ingredients and no jitters. This has become an essential part of my training routine.',
      date: '2024-01-17',
      status: 'approved',
      verified: true,
    },
    {
      id: '5',
      product: 'Probiotic Complex',
      productId: 'probiotic-complex',
      customer: 'Jessica Martinez',
      customerEmail: 'jessica@example.com',
      rating: 3,
      comment: 'Not sure if it\'s working yet, will update. Only been taking for a week. Shipping was fast though.',
      date: '2024-01-16',
      status: 'pending',
      verified: false,
    },
    {
      id: '6',
      product: 'Omega-3 Premium',
      productId: 'omega-3-premium',
      customer: 'Robert Wilson',
      customerEmail: 'robert@example.com',
      rating: 5,
      comment: 'Amazing product! I\'ve tried many brands and this is by far the best. Great value for money.',
      date: '2024-01-15',
      status: 'approved',
      verified: true,
    },
  ]);

  const handleStatusChange = (reviewId: string, newStatus: 'approved' | 'rejected') => {
    setReviews(reviews.map(review => 
      review.id === reviewId ? { ...review, status: newStatus } : review
    ));
  };

  const handleDelete = (reviewId: string) => {
    if (confirm('Are you sure you want to delete this review?')) {
      setReviews(reviews.filter(review => review.id !== reviewId));
    }
  };

  const filteredReviews = reviews.filter((review) => {
    const matchesStatus = selectedStatus === 'all' || review.status === selectedStatus;
    const matchesSearch = 
      review.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.comment.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const stats = {
    total: reviews.length,
    approved: reviews.filter(r => r.status === 'approved').length,
    pending: reviews.filter(r => r.status === 'pending').length,
    rejected: reviews.filter(r => r.status === 'rejected').length,
    averageRating: (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1),
  };

  const statusColors = {
    approved: 'bg-green-100 text-green-700',
    pending: 'bg-yellow-100 text-yellow-700',
    rejected: 'bg-red-100 text-red-700',
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-secondary mb-2">Reviews</h1>
        <p className="text-secondary-muted font-light">Manage customer product reviews</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
          <p className="text-sm text-secondary-muted font-light mb-1">Total Reviews</p>
          <p className="text-2xl font-bold text-secondary">{stats.total}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
          <p className="text-sm text-secondary-muted font-light mb-1">Approved</p>
          <p className="text-2xl font-bold text-green-600">{stats.approved}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
          <p className="text-sm text-secondary-muted font-light mb-1">Pending</p>
          <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
          <p className="text-sm text-secondary-muted font-light mb-1">Rejected</p>
          <p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
          <p className="text-sm text-secondary-muted font-light mb-1">Avg Rating</p>
          <p className="text-2xl font-bold text-secondary">{stats.averageRating} ⭐</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-secondary mb-2">Search Reviews</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by product, customer, or comment..."
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
              <option value="all">All Reviews</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.length === 0 ? (
          <div className="bg-white rounded-xl p-12 border-2 border-gray-200 text-center">
            <p className="text-secondary-muted font-light">No reviews found</p>
          </div>
        ) : (
          filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-secondary">{review.product}</h3>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${statusColors[review.status]}`}
                    >
                      {review.status}
                    </span>
                    {review.verified && (
                      <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-secondary-muted font-light mb-2">
                    <span>by {review.customer}</span>
                    <span>•</span>
                    <a href={`mailto:${review.customerEmail}`} className="hover:text-primary transition-colors">
                      {review.customerEmail}
                    </a>
                    <span>•</span>
                    <span>{review.date}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < review.rating ? 'text-primary' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-secondary-muted font-light">({review.rating}/5)</span>
                  </div>
                  <p className="text-secondary-muted font-light leading-relaxed">{review.comment}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-gray-200 flex-wrap">
                {review.status === 'pending' && (
                  <>
                    <button
                      onClick={() => handleStatusChange(review.id, 'approved')}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-bold text-sm"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleStatusChange(review.id, 'rejected')}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-bold text-sm"
                    >
                      Reject
                    </button>
                  </>
                )}
                {review.status === 'approved' && (
                  <button
                    onClick={() => handleStatusChange(review.id, 'rejected')}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-bold text-sm"
                  >
                    Reject
                  </button>
                )}
                {review.status === 'rejected' && (
                  <button
                    onClick={() => handleStatusChange(review.id, 'approved')}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-bold text-sm"
                  >
                    Approve
                  </button>
                )}
                <button
                  onClick={() => handleDelete(review.id)}
                  className="px-4 py-2 border-2 border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors font-bold text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Summary */}
      <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
        <div className="flex items-center justify-between">
          <p className="text-secondary-muted font-light">
            Showing <span className="font-bold text-secondary">{filteredReviews.length}</span> of{' '}
            <span className="font-bold text-secondary">{reviews.length}</span> reviews
          </p>
        </div>
      </div>
    </div>
  );
}
