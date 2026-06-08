import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

// ─────────────────────────────────────────────────────────────────────────────
// VISIBLE_COLS = how many product cards show at once in the slider
// The rest are still in the slider (scrollable) and all appear in the popup
// ─────────────────────────────────────────────────────────────────────────────
const VISIBLE_COLS = 4

const tabs = ['All', 'BP Monitors', 'Diagnostic', 'Sugar Monitors', 'Physio Equipment', 'First Aid']

const products = [
  { name: 'Digital BP Monitor (Upper Arm)', price: 1299, originalPrice: 1999, rating: 4.8, reviews: 892,  category: 'BP Monitors',     badge: 'Bestseller' },
  { name: 'Stethoscope Classic II',         price: 1499, originalPrice: 2199, rating: 4.9, reviews: 678,  category: 'Diagnostic',       badge: 'Top Rated'  },
  { name: 'Glucometer Blood Sugar Kit',     price: 699,  originalPrice: 1099, rating: 4.7, reviews: 1204, category: 'Sugar Monitors',   badge: 'Bestseller' },
  { name: 'Fingertip Pulse Oximeter',       price: 599,  originalPrice: 999,  rating: 4.8, reviews: 1567, category: 'Diagnostic',       badge: 'Popular'    },
  { name: 'Digital Thermometer Fast Read',  price: 249,  originalPrice: 399,  rating: 4.7, reviews: 3102, category: 'Diagnostic',       badge: 'Bestseller' },
  { name: 'First Aid Kit Complete Box',     price: 599,  originalPrice: 899,  rating: 4.8, reviews: 2341, category: 'First Aid',        badge: 'Essential'  },
  { name: 'Dual Channel TENS Machine',      price: 2499, originalPrice: 4999, rating: 4.8, reviews: 342,  category: 'Physio Equipment', badge: 'Bestseller' },
  { name: 'Nebulizer Compressor Machine',   price: 1899, originalPrice: 2999, rating: 4.7, reviews: 743,  category: 'Diagnostic'                            },
]

// ── Popup: shows ALL filtered products in a scrollable grid ──────────────────
function AllProductsPopup({ items, title, onClose }) {
  const backdropRef = useRef(null)

  useEffect(() => {
    function handleKey(e) { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  function handleBackdropClick(e) {
    if (e.target === backdropRef.current) onClose()
  }

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      style={{ animation: 'fade-in 0.2s ease-out forwards' }}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl shadow-slate-900/20 w-full max-w-5xl max-h-[88vh] overflow-hidden flex flex-col"
        style={{ animation: 'slide-up 0.25s ease-out forwards' }}
      >
        {/* Popup header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 shrink-0">
          <div>
            <h3 className="text-xl font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>
              {title === 'All' ? 'All Best Sellers' : title}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">{items.length} products</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/shop"
              onClick={onClose}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white text-sm font-semibold hover:scale-[1.02] transition-all"
            >
              Go to Shop
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-500 text-slate-500 flex items-center justify-center transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable product grid */}
        <div className="overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-slate-400 gap-3">
              <svg className="w-12 h-12 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-semibold">No products in this category</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {items.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function BestSellers() {
  const [active,     setActive]     = useState('All')
  const [popupOpen,  setPopupOpen]  = useState(false)
  const [canPrev,    setCanPrev]    = useState(false)
  const [canNext,    setCanNext]    = useState(true)
  const sliderRef                   = useRef(null)

  const filtered = active === 'All' ? products : products.filter((p) => p.category === active)

  function scroll(dir) {
    const el = sliderRef.current
    if (!el) return
    const cardW = el.querySelector('[data-card]')?.offsetWidth || 260
    el.scrollBy({ left: dir === 'next' ? (cardW + 16) * 2 : -(cardW + 16) * 2, behavior: 'smooth' })
  }

  function onScroll() {
    const el = sliderRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }

  // Reset scroll on tab change
  function changeTab(tab) {
    setActive(tab)
    if (sliderRef.current) sliderRef.current.scrollLeft = 0
    setCanPrev(false)
    setCanNext(true)
  }

  return (
    <>
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
            <button
              onClick={() => setPopupOpen(true)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors"
            >
              View all products
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Tab filter */}
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => changeTab(tab)}
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

          {/* Slider */}
          <div className="relative">

            {/* Prev arrow */}
            <button
              onClick={() => scroll('prev')}
              disabled={!canPrev}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg shadow-slate-200/80 border border-slate-100 flex items-center justify-center transition-all duration-200 ${
                canPrev ? 'opacity-100 hover:border-cyan-300 hover:text-cyan-600' : 'opacity-0 pointer-events-none'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Scrollable product strip */}
            <div
  ref={sliderRef}
  onScroll={onScroll}
  className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
>
              {filtered.length === 0 ? (
                <div className="w-full py-16 flex flex-col items-center text-slate-400 gap-3">
                  <svg className="w-12 h-12 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm font-semibold">No products in this category</p>
                </div>
              ) : (
                filtered.map((product, i) => (
                  <div
                    key={i}
                    data-card
                    className="shrink-0 snap-start"
                    style={{ width: `calc((100% - ${(VISIBLE_COLS - 1) * 16}px) / ${VISIBLE_COLS})` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))
              )}
            </div>

            {/* Next arrow */}
            <button
              onClick={() => scroll('next')}
              disabled={!canNext}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg shadow-slate-200/80 border border-slate-100 flex items-center justify-center transition-all duration-200 ${
                canNext ? 'opacity-100 hover:border-cyan-300 hover:text-cyan-600' : 'opacity-0 pointer-events-none'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-1.5 mt-5">
            {filtered.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${i < VISIBLE_COLS ? 'w-4 bg-cyan-500' : 'w-1.5 bg-slate-200'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popup */}
      {popupOpen && (
        <AllProductsPopup
          items={filtered}
          title={active}
          onClose={() => setPopupOpen(false)}
        />
      )}
    </>
  )
}