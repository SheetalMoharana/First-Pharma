import { useState } from 'react'
import ProductCard from '../components/ProductCard'

const allProducts = [
  // TENS & EMS (keep as physio)
  { id: 1,  name: 'Digital BP Monitor (Upper Arm)', price: 1299, originalPrice: 1999, rating: 4.8, reviews: 892, category: 'BP Monitors', badge: 'Bestseller' },
  { id: 2,  name: 'Wrist BP Monitor Automatic', price: 899, originalPrice: 1399, rating: 4.6, reviews: 543, category: 'BP Monitors', badge: 'Sale' },
  { id: 3,  name: 'Glucometer Blood Sugar Testing Kit', price: 699, originalPrice: 1099, rating: 4.7, reviews: 1204, category: 'Sugar Monitors', badge: 'Bestseller' },
  { id: 4,  name: 'Glucose Test Strips (50 pcs)', price: 349, originalPrice: 499, rating: 4.5, reviews: 2341, category: 'Sugar Monitors' },
  { id: 5,  name: 'Stethoscope Classic II', price: 1499, originalPrice: 2199, rating: 4.9, reviews: 678, category: 'Diagnostic', badge: 'Top Rated' },
  { id: 6,  name: 'Stethoscope Dual Head (Student)', price: 799, originalPrice: 1199, rating: 4.6, reviews: 412, category: 'Diagnostic' },
  { id: 7,  name: 'Digital Thermometer Fast Read', price: 249, originalPrice: 399, rating: 4.7, reviews: 3102, category: 'Diagnostic', badge: 'Bestseller' },
  { id: 8,  name: 'Infrared Forehead Thermometer', price: 799, originalPrice: 1299, rating: 4.5, reviews: 987, category: 'Diagnostic' },
  { id: 9,  name: 'Fingertip Pulse Oximeter', price: 599, originalPrice: 999, rating: 4.8, reviews: 1567, category: 'Diagnostic', badge: 'Popular' },
  { id: 10, name: 'Nebulizer Compressor Machine', price: 1899, originalPrice: 2999, rating: 4.7, reviews: 743, category: 'Respiratory' },
  { id: 11, name: 'Mesh Nebulizer Portable', price: 2499, originalPrice: 3999, rating: 4.6, reviews: 321, category: 'Respiratory', badge: 'New' },
  { id: 12, name: 'Peak Flow Meter (Asthma)', price: 449, originalPrice: 699, rating: 4.4, reviews: 234, category: 'Respiratory' },
  { id: 13, name: 'Digital Weighing Scale (Personal)', price: 799, originalPrice: 1199, rating: 4.5, reviews: 1893, category: 'Weighing Scales' },
  { id: 14, name: 'Baby Weighing Scale Digital', price: 1299, originalPrice: 1999, rating: 4.7, reviews: 456, category: 'Weighing Scales' },
  { id: 15, name: 'BMI Body Fat Analyser Scale', price: 1799, originalPrice: 2799, rating: 4.6, reviews: 678, category: 'Weighing Scales', badge: 'Sale' },
  { id: 16, name: 'Dual Channel TENS Machine', price: 2499, originalPrice: 4999, rating: 4.8, reviews: 342, category: 'Physio Equipment', badge: 'Bestseller' },
  { id: 17, name: 'EMS Muscle Stimulator', price: 1899, originalPrice: 3499, rating: 4.7, reviews: 276, category: 'Physio Equipment' },
  { id: 18, name: 'Ultrasound Therapy Device', price: 4999, originalPrice: 7999, rating: 4.9, reviews: 189, category: 'Physio Equipment', badge: 'Pro' },
  { id: 19, name: 'Hot & Cold Therapy Gel Pack', price: 449, originalPrice: 699, rating: 4.5, reviews: 412, category: 'Physio Equipment' },
  { id: 20, name: 'Infrared Heat Lamp Therapy', price: 1599, originalPrice: 2499, rating: 4.6, reviews: 298, category: 'Physio Equipment' },
  { id: 21, name: 'Knee Compression Support Brace', price: 699, originalPrice: 999, rating: 4.7, reviews: 503, category: 'Supports & Braces' },
  { id: 22, name: 'Lumbar Back Support Belt', price: 849, originalPrice: 1299, rating: 4.6, reviews: 734, category: 'Supports & Braces', badge: 'Popular' },
  { id: 23, name: 'Wrist & Carpal Tunnel Support', price: 549, originalPrice: 799, rating: 4.4, reviews: 167, category: 'Supports & Braces' },
  { id: 24, name: 'Cervical Neck Collar Soft', price: 399, originalPrice: 599, rating: 4.3, reviews: 289, category: 'Supports & Braces' },
  { id: 25, name: 'Ankle Brace Support (Pair)', price: 479, originalPrice: 699, rating: 4.5, reviews: 221, category: 'Supports & Braces' },
  { id: 26, name: 'Professional Resistance Band Set', price: 849, originalPrice: 1299, rating: 4.6, reviews: 218, category: 'Exercise & Rehab', badge: 'Sale' },
  { id: 27, name: 'Balance Wobble Board', price: 1299, originalPrice: 1999, rating: 4.6, reviews: 94, category: 'Exercise & Rehab' },
  { id: 28, name: 'Foam Roller Deep Tissue', price: 799, originalPrice: 1199, rating: 4.8, reviews: 388, category: 'Exercise & Rehab', badge: 'Bestseller' },
  { id: 29, name: 'Trigger Point Massage Gun', price: 3299, originalPrice: 5999, rating: 4.9, reviews: 189, category: 'Exercise & Rehab', badge: 'New' },
  { id: 30, name: 'Exercise Ball 65cm Anti-Burst', price: 699, originalPrice: 999, rating: 4.5, reviews: 312, category: 'Exercise & Rehab' },
  { id: 31, name: 'Surgical Scissors Stainless Steel', price: 299, originalPrice: 449, rating: 4.7, reviews: 543, category: 'Surgical Tools' },
  { id: 32, name: 'Bandage Scissors Nurse Kit', price: 199, originalPrice: 299, rating: 4.5, reviews: 876, category: 'Surgical Tools' },
  { id: 33, name: 'Dressing Forceps Set (3 pcs)', price: 449, originalPrice: 699, rating: 4.6, reviews: 234, category: 'Surgical Tools' },
  { id: 34, name: 'Reflex Hammer (Taylor)', price: 249, originalPrice: 399, rating: 4.8, reviews: 456, category: 'Diagnostic' },
  { id: 35, name: 'Otoscope & Ophthalmoscope Set', price: 2999, originalPrice: 4499, rating: 4.7, reviews: 178, category: 'Diagnostic', badge: 'Pro' },
  { id: 36, name: 'Urine Glucose Test Strips (100)', price: 249, originalPrice: 399, rating: 4.4, reviews: 1023, category: 'Sugar Monitors' },
  { id: 37, name: 'Lancets for Glucometer (100 pcs)', price: 199, originalPrice: 299, rating: 4.6, reviews: 1567, category: 'Sugar Monitors' },
  { id: 38, name: 'First Aid Kit Complete Box', price: 599, originalPrice: 899, rating: 4.8, reviews: 2341, category: 'First Aid', badge: 'Essential' },
  { id: 39, name: 'Crepe Bandage Set (6 rolls)', price: 299, originalPrice: 449, rating: 4.5, reviews: 987, category: 'First Aid' },
  { id: 40, name: 'Adhesive Bandage Strips (100 pcs)', price: 149, originalPrice: 249, rating: 4.6, reviews: 3421, category: 'First Aid' },
  { id: 41, name: 'Surgical Gloves (100 pcs, M)', price: 399, originalPrice: 599, rating: 4.5, reviews: 1234, category: 'First Aid' },
  { id: 42, name: 'Digital Hearing Aid (BTE)', price: 3999, originalPrice: 6999, rating: 4.6, reviews: 89, category: 'Hearing & Vision', badge: 'New' },
  { id: 43, name: 'Reading Glasses +2.0 (Unisex)', price: 299, originalPrice: 499, rating: 4.4, reviews: 567, category: 'Hearing & Vision' },
  { id: 44, name: 'Cervical Traction Device Home', price: 1299, originalPrice: 1999, rating: 4.5, reviews: 143, category: 'Physio Equipment' },
  { id: 45, name: 'Heel Cups Silicone (Pair)', price: 299, originalPrice: 499, rating: 4.7, reviews: 876, category: 'Supports & Braces' },
  { id: 46, name: 'Portable ECG Heart Monitor', price: 4499, originalPrice: 6999, rating: 4.8, reviews: 234, category: 'Diagnostic', badge: 'Advanced' },
  { id: 47, name: 'Digital Holter BP Monitor 24Hr', price: 3499, originalPrice: 5499, rating: 4.7, reviews: 156, category: 'BP Monitors' },
  { id: 48, name: 'Crutches Adjustable Aluminium (Pair)', price: 899, originalPrice: 1399, rating: 4.6, reviews: 198, category: 'Mobility Aids' },
  { id: 49, name: 'Foldable Walking Stick Adjustable', price: 599, originalPrice: 899, rating: 4.5, reviews: 312, category: 'Mobility Aids' },
  { id: 50, name: 'Wheelchair Manual Foldable', price: 7999, originalPrice: 11999, rating: 4.8, reviews: 167, category: 'Mobility Aids', badge: 'Premium' },
]

const categories = ['All', 'BP Monitors', 'Sugar Monitors', 'Diagnostic', 'Respiratory', 'Weighing Scales', 'Physio Equipment', 'Supports & Braces', 'Exercise & Rehab', 'Surgical Tools', 'First Aid', 'Mobility Aids', 'Hearing & Vision']
const sortOptions = ['Relevance', 'Price: Low to High', 'Price: High to Low', 'Highest Rated', 'Most Reviews']

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [sort, setSort] = useState('Relevance')
  const [search, setSearch] = useState('')
  const [filterOpen, setFilterOpen] = useState(false)
  const [priceRange, setPriceRange] = useState(12000)

  let filtered = allProducts.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchPrice = p.price <= priceRange
    return matchCat && matchSearch && matchPrice
  })

  if (sort === 'Price: Low to High') filtered = [...filtered].sort((a, b) => a.price - b.price)
  if (sort === 'Price: High to Low') filtered = [...filtered].sort((a, b) => b.price - a.price)
  if (sort === 'Highest Rated') filtered = [...filtered].sort((a, b) => b.rating - a.rating)
  if (sort === 'Most Reviews') filtered = [...filtered].sort((a, b) => b.reviews - a.reviews)

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs text-slate-400 mb-1">Home / Shop</p>
          <h1 className="text-3xl font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Medical Instruments & Equipment
          </h1>
          <p className="text-slate-500 text-sm mt-1">{filtered.length} products found</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search e.g. stethoscope, BP machine, glucometer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all"
            />
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 focus:outline-none focus:border-cyan-400 transition-all"
          >
            {sortOptions.map((o) => <option key={o}>{o}</option>)}
          </select>
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="sm:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters
          </button>
        </div>

        <div className="flex gap-6">
          <aside className={`shrink-0 w-56 space-y-6 sm:block ${filterOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-2xl border border-slate-100 p-5">
              <h3 className="text-sm font-bold text-slate-800 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Category</h3>
              <div className="space-y-1">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      activeCategory === c
                        ? 'bg-cyan-50 text-cyan-600 font-semibold'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 p-5">
              <h3 className="text-sm font-bold text-slate-800 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Max Price</h3>
              <input
                type="range"
                min={100}
                max={12000}
                step={100}
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-cyan-500"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>₹100</span>
                <span className="font-semibold text-cyan-600">₹{priceRange.toLocaleString()}</span>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                <svg className="w-16 h-16 mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg font-semibold">No products found</p>
                <p className="text-sm mt-1">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((p, i) => <ProductCard key={i} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}