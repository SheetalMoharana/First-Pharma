import { useState } from 'react'
import { Link } from 'react-router-dom'

const initialItems = [
  {
    id: 1,
    name: 'Digital BP Monitor (Upper Arm)',
    category: 'BP Monitors',
    price: 1299,
    originalPrice: 1999,
    qty: 1,
  },
  {
    id: 2,
    name: 'Glucometer Blood Sugar Testing Kit',
    category: 'Sugar Monitors',
    price: 699,
    originalPrice: 1099,
    qty: 1,
  },
  {
    id: 3,
    name: 'Fingertip Pulse Oximeter',
    category: 'Diagnostic',
    price: 599,
    originalPrice: 999,
    qty: 2,
  },
]

export default function Cart() {
  const [items, setItems] = useState(initialItems)
  const [coupon, setCoupon] = useState('')
  const [couponApplied, setCouponApplied] = useState(false)
  const [couponError, setCouponError] = useState(false)

  function changeQty(id, delta) {
    setItems((prev) =>
      prev.map((item) => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item)
    )
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  function applyCoupon() {
    if (coupon.trim().toUpperCase() === 'MEDI10') {
      setCouponApplied(true)
      setCouponError(false)
    } else {
      setCouponError(true)
      setCouponApplied(false)
    }
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const originalTotal = items.reduce((sum, item) => sum + item.originalPrice * item.qty, 0)
  const savings = originalTotal - subtotal
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0
  const shipping = subtotal >= 999 ? 0 : 99
  const total = subtotal - discount + shipping

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400 mb-0.5">Home / Cart</p>
            <h1 className="text-2xl font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>
              My Cart
              <span className="ml-2 text-base font-semibold text-slate-400">({items.length} items)</span>
            </h1>
          </div>
          <Link to="/shop" className="flex items-center gap-1.5 text-sm text-cyan-600 font-semibold hover:text-cyan-700 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Continue Shopping
          </Link>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-28 px-4 text-center space-y-5">
          <div className="w-24 h-24 rounded-full bg-cyan-50 flex items-center justify-center">
            <svg className="w-12 h-12 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-700" style={{ fontFamily: 'Outfit, sans-serif' }}>Your cart is empty</h2>
          <p className="text-slate-500 text-sm max-w-xs">Browse our medical instruments and equipment to add items to your cart.</p>
          <Link to="/shop" className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white font-semibold text-sm shadow-lg shadow-cyan-200 hover:shadow-cyan-300 hover:scale-[1.02] transition-all duration-200">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Cart items */}
            <div className="flex-1 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 flex gap-4 hover:border-cyan-200 hover:shadow-md transition-all duration-200">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-slate-100 shrink-0 flex items-center justify-center">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <svg className="w-8 h-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )}
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <p className="text-[11px] text-cyan-500 font-semibold uppercase tracking-widest">{item.category}</p>
                    <h3 className="text-sm font-bold text-slate-800 leading-snug" style={{ fontFamily: 'Outfit, sans-serif' }}>{item.name}</h3>
                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="text-base font-extrabold text-slate-800">₹{item.price.toLocaleString()}</span>
                      <span className="text-xs text-slate-400 line-through">₹{item.originalPrice.toLocaleString()}</span>
                      <span className="text-[10px] font-bold text-green-600">
                        {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% off
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between shrink-0">
                    <button onClick={() => removeItem(item.id)} className="text-slate-400 hover:text-rose-500 transition-colors duration-200">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <div className="flex items-center gap-2 bg-slate-100 rounded-xl p-1">
                      <button onClick={() => changeQty(item.id, -1)} className="w-7 h-7 rounded-lg bg-white shadow-sm text-slate-600 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-200 flex items-center justify-center font-bold text-base">−</button>
                      <span className="w-6 text-center text-sm font-bold text-slate-800">{item.qty}</span>
                      <button onClick={() => changeQty(item.id, 1)} className="w-7 h-7 rounded-lg bg-white shadow-sm text-slate-600 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-200 flex items-center justify-center font-bold text-base">+</button>
                    </div>
                    <span className="text-sm font-bold text-slate-800">₹{(item.price * item.qty).toLocaleString()}</span>
                  </div>
                </div>
              ))}

              {/* Coupon */}
              <div className="bg-white rounded-2xl border border-slate-100 p-5">
                <p className="text-sm font-bold text-slate-700 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Have a coupon code?</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => { setCoupon(e.target.value); setCouponError(false) }}
                    placeholder="Enter code (try MEDI10)"
                    className={`flex-1 px-4 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      couponApplied ? 'border-green-300 bg-green-50 focus:ring-green-100'
                        : couponError ? 'border-rose-300 bg-rose-50 focus:ring-rose-100'
                        : 'border-slate-200 focus:border-cyan-400 focus:ring-cyan-100'
                    }`}
                  />
                  <button
                    onClick={applyCoupon}
                    disabled={couponApplied}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white text-sm font-semibold disabled:opacity-50 hover:scale-[1.02] transition-all duration-200"
                  >
                    {couponApplied ? '✓ Applied' : 'Apply'}
                  </button>
                </div>
                {couponApplied && <p className="text-xs text-green-600 font-medium mt-2">🎉 MEDI10 applied! You saved 10% extra.</p>}
                {couponError && <p className="text-xs text-rose-500 font-medium mt-2">Invalid coupon code. Please try again.</p>}
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:w-80 shrink-0">
              <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-4 sticky top-24">
                <h2 className="text-lg font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>Order Summary</h2>
                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal ({items.reduce((s, i) => s + i.qty, 0)} items)</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>Product Savings</span>
                    <span>−₹{savings.toLocaleString()}</span>
                  </div>
                  {couponApplied && (
                    <div className="flex justify-between text-green-600 font-medium">
                      <span>Coupon (MEDI10)</span>
                      <span>−₹{discount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? 'text-green-600 font-medium' : ''}>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                  </div>
                  {shipping > 0 && <p className="text-xs text-slate-400">Add ₹{(999 - subtotal).toLocaleString()} more for free shipping</p>}
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>Total</span>
                    <span className="text-xl font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>₹{total.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-green-600 font-medium mt-1">You save ₹{(savings + discount).toLocaleString()} on this order!</p>
                </div>
                <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white font-bold text-sm shadow-lg shadow-cyan-200 hover:shadow-cyan-300 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                  Proceed to Checkout
                </button>
                <div className="flex items-center justify-center gap-4 pt-2">
                  {[{ icon: '🔒', label: 'Secure Payment' }, { icon: '↩️', label: '30-Day Returns' }, { icon: '🚚', label: 'Fast Delivery' }].map(({ icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-1">
                      <span className="text-lg">{icon}</span>
                      <span className="text-[9px] text-slate-500 font-medium text-center">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}