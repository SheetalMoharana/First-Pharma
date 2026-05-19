import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

const tabs = ['All', 'TENS & EMS', 'Supports', 'Massage', 'Exercise']

const products = [
  { name: 'Dual Channel TENS Machine', price: 2499, originalPrice: 4999, rating: 4.8, reviews: 342, category: 'TENS & EMS', badge: 'Bestseller', image: 'https://images.pexels.com/photos/5473182/pexels-photo-5473182.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Professional Resistance Band Set', price: 849, originalPrice: 1299, rating: 4.6, reviews: 218, category: 'Exercise', badge: 'Sale', image: 'https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Knee Compression Support', price: 699, originalPrice: 999, rating: 4.7, reviews: 503, category: 'Supports', image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400' },
//   { name: 'Trigger Point Massage Gun', price: 3299, originalPrice: 5999, rating: 4.9, reviews: 189, category: 'Massage', badge: 'New', image: 'https://images.pexels.com/photos/3865711/pexels-photo-3865711.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Hot Cold Therapy Gel Pack', price: 449, originalPrice: 699, rating: 4.5, reviews: 412, category: 'Exercise', image: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Wrist & Forearm Support', price: 549, originalPrice: 799, rating: 4.4, reviews: 167, category: 'Supports', image: 'https://images.pexels.com/photos/5473183/pexels-photo-5473183.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Balance Wobble Board', price: 1299, originalPrice: 1999, rating: 4.6, reviews: 94, category: 'Exercise', badge: 'Popular', image: 'https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'EMS Muscle Stimulator', price: 1899, originalPrice: 3499, rating: 4.7, reviews: 276, category: 'TENS & EMS', image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=400' },
]

export default function BestSellers() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? products : products.filter((p) => p.category === active)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-cyan-500 text-sm font-semibold uppercase tracking-widest mb-1">Top Rated</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Best Sellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 hover:text-cyan-700"
          >
            View all products
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`shrink-0 px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                active === tab
                  ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-white shadow-md shadow-cyan-200'
                  : 'bg-slate-100 text-slate-600 hover:bg-cyan-50 hover:text-cyan-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}