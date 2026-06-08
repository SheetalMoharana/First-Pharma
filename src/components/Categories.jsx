import { useState, useRef, useEffect } from 'react'

// ── IMAGE SLOTS ───────────────────────────────────────────────────────────────
// Each category has image: null  — import from assets.js and pass here
// Recommended size: 300×200px
// ─────────────────────────────────────────────────────────────────────────────

const categories = [
  { title: 'BP Monitors',       count: '6 products',  color: 'from-cyan-400 to-sky-500',    bg: 'bg-cyan-50',    image: null },
  { title: 'Glucometers',       count: '5 products',  color: 'from-teal-400 to-cyan-500',   bg: 'bg-teal-50',    image: null },
  { title: 'Stethoscopes',      count: '4 products',  color: 'from-sky-400 to-blue-500',    bg: 'bg-sky-50',     image: null },
  { title: 'Thermometers',      count: '3 products',  color: 'from-indigo-400 to-sky-500',  bg: 'bg-indigo-50',  image: null },
  { title: 'Pulse Oximeters',   count: '3 products',  color: 'from-cyan-300 to-teal-500',   bg: 'bg-cyan-50',    image: null },
  { title: 'Nebulizers',        count: '3 products',  color: 'from-sky-500 to-cyan-600',    bg: 'bg-sky-50',     image: null },
  { title: 'Physio Equipment',  count: '7 products',  color: 'from-teal-500 to-sky-400',    bg: 'bg-teal-50',    image: null },
  { title: 'First Aid',         count: '4 products',  color: 'from-cyan-500 to-indigo-400', bg: 'bg-cyan-50',    image: null },
  { title: 'Supports & Braces', count: '5 products',  color: 'from-sky-400 to-cyan-500',    bg: 'bg-sky-50',     image: null },
  { title: 'Weighing Scales',   count: '3 products',  color: 'from-teal-400 to-sky-500',    bg: 'bg-teal-50',    image: null },
  { title: 'Surgical Tools',    count: '3 products',  color: 'from-cyan-400 to-teal-600',   bg: 'bg-cyan-50',    image: null },
  { title: 'Mobility Aids',     count: '3 products',  color: 'from-indigo-400 to-cyan-500', bg: 'bg-indigo-50',  image: null },
]

// How many cards are visible in the slider before the rest are hidden
const VISIBLE = 4

function CategoryCard({ title, count, color, bg, image }) {
  return (
    <div className={`group shrink-0 rounded-2xl ${bg} overflow-hidden border border-white hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/60 transition-all duration-300 hover:-translate-y-1 cursor-pointer`}>
      <div className="h-36 overflow-hidden bg-slate-100 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="flex flex-col items-center gap-1 text-slate-300 select-none">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs">Category Image</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className={`inline-block w-8 h-1 rounded-full bg-gradient-to-r ${color} mb-2`} />
        <h3 className="text-sm font-bold text-slate-800 leading-snug">{title}</h3>
        <p className="text-xs text-slate-500 mt-0.5">{count}</p>
      </div>
    </div>
  )
}

function AllCategoriesPopup({ onClose }) {
  // Close when clicking the dark backdrop
  const backdropRef = useRef(null)

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
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
        className="bg-white rounded-3xl shadow-2xl shadow-slate-900/20 w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col"
        style={{ animation: 'slide-up 0.25s ease-out forwards' }}
      >
        {/* Popup header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <div>
            <h3 className="text-xl font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>
              All Categories
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">{categories.length} categories available</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-500 text-slate-500 flex items-center justify-center transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Popup grid — scrollable */}
        <div className="overflow-y-auto p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <CategoryCard key={i} {...cat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Categories() {
  const [popupOpen, setPopupOpen]   = useState(false)
  const [canPrev,   setCanPrev]     = useState(false)
  const [canNext,   setCanNext]     = useState(true)
  const sliderRef                   = useRef(null)

  // visible slice for the slider — rest are hidden
  const visible = categories.slice(0, VISIBLE)
  const hidden  = categories.slice(VISIBLE)         // shown only in popup

  function scroll(dir) {
    const el = sliderRef.current
    if (!el) return
    const amount = el.clientWidth * 0.75
    el.scrollBy({ left: dir === 'next' ? amount : -amount, behavior: 'smooth' })
  }

  function onScroll() {
    const el = sliderRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Header */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-cyan-500 text-sm font-semibold uppercase tracking-widest mb-1">Browse by Type</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Shop Categories
              </h2>
            </div>
            <button
              onClick={() => setPopupOpen(true)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors"
            >
              View all
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Slider row */}
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

            {/* Scrollable slider — shows VISIBLE cards, rest are cut off */}
            <div
  ref={sliderRef}
  onScroll={onScroll}
  className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
>
              {/* First VISIBLE cards — always shown */}
              {visible.map((cat, i) => (
                <div key={i} className="shrink-0 w-52 sm:w-56 lg:w-64 snap-start">
                  <CategoryCard {...cat} />
                </div>
              ))}

              {/* Hidden cards — visible in slider only after scrolling, full set in popup */}
              {hidden.map((cat, i) => (
                <div key={i + VISIBLE} className="shrink-0 w-52 sm:w-56 lg:w-64 snap-start">
                  <CategoryCard {...cat} />
                </div>
              ))}
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
            {categories.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${i < VISIBLE ? 'w-4 bg-cyan-500' : 'w-1.5 bg-slate-200'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popup */}
      {popupOpen && <AllCategoriesPopup onClose={() => setPopupOpen(false)} />}
    </>
  )
}