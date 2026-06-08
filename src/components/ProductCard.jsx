import { Link } from 'react-router-dom'
import { useState } from 'react'

// When you're ready:
// 1. Create src/assets/assets.js and import your images there
// 2. Pass the imported image as the `image` prop from Shop/BestSellers data
// 3. Replace the placeholder <div> below with: <img src={image} alt={name} className="w-full h-full object-cover ..." />

export default function ProductCard({ product }) {
  const [wishlist, setWishlist] = useState(false)
  const [added, setAdded]       = useState(false)

  const {
    name          = 'Product',
    price         = 999,
    originalPrice = null,
    rating        = 4.5,
    reviews       = 0,
    badge         = null,
    category      = '',
    image         = null,   // import from assets.js and pass here later
  } = product || {}

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : null

  function handleAdd() {
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/50 transition-all duration-300 hover:-translate-y-1">

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      {/* Badge */}
      {badge && (
        <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-lg bg-gradient-to-r from-cyan-500 to-sky-500 text-white text-[10px] font-bold uppercase tracking-wide shadow-sm">
          {badge}
        </span>
      )}

      {/* Wishlist */}
      <button
        onClick={() => setWishlist(!wishlist)}
        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center hover:scale-110 transition-transform duration-200"
      >
        <svg
          className={`w-4 h-4 transition-colors duration-200 ${wishlist ? 'text-rose-500 fill-rose-500' : 'text-slate-400'}`}
          viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>

      {/* ── IMAGE SLOT h-48 ── replace inner div with <img> once assets are ready */}
      <Link to="/shop" className="block h-48 overflow-hidden bg-slate-100 relative">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-slate-300 select-none">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 15l-5-5L5 21" />
            </svg>
            <span className="text-[11px] font-medium tracking-wide">Product Image</span>
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="p-4 space-y-3">
        {category && (
          <p className="text-[10px] text-cyan-500 font-semibold uppercase tracking-widest">{category}</p>
        )}

        <Link to="/shop">
          <h3 className="text-sm font-semibold text-slate-800 leading-snug line-clamp-2 hover:text-cyan-600 transition-colors duration-200">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-amber-400' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.95 2.878c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.064 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
              </svg>
            ))}
          </div>
          <span className="text-[11px] text-slate-500">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 pt-1">
          <span className="text-lg font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>
            ₹{price.toLocaleString()}
          </span>
          {originalPrice && <span className="text-xs text-slate-400 line-through">₹{originalPrice.toLocaleString()}</span>}
          {discount     && <span className="text-[10px] font-bold text-green-600">{discount}% off</span>}
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAdd}
          className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
            added
              ? 'bg-green-50 text-green-600 border border-green-200'
              : 'bg-gradient-to-r from-cyan-500 to-sky-500 text-white shadow-md shadow-cyan-200 hover:shadow-cyan-300 hover:scale-[1.02] active:scale-95'
          }`}
        >
          {added ? '✓ Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}