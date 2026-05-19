import { Link } from 'react-router-dom'

const categories = [
  {
    title: 'TENS & EMS Units',
    count: '48 products',
    color: 'from-cyan-400 to-sky-500',
    bg: 'bg-cyan-50',
    img: 'https://images.pexels.com/photos/5473182/pexels-photo-5473182.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Resistance Bands',
    count: '62 products',
    color: 'from-teal-400 to-cyan-500',
    bg: 'bg-teal-50',
    img: 'https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Hot & Cold Therapy',
    count: '35 products',
    color: 'from-sky-400 to-blue-500',
    bg: 'bg-sky-50',
    img: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Ultrasound Therapy',
    count: '24 products',
    color: 'from-indigo-400 to-sky-500',
    bg: 'bg-indigo-50',
    img: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Exercise Balls',
    count: '41 products',
    color: 'from-cyan-300 to-teal-500',
    bg: 'bg-cyan-50',
    img: 'https://images.pexels.com/photos/4325463/pexels-photo-4325463.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Orthopedic Supports',
    count: '78 products',
    color: 'from-sky-500 to-cyan-600',
    bg: 'bg-sky-50',
    img: 'https://images.pexels.com/photos/5473183/pexels-photo-5473183.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
//   {
//     title: 'Massage Tools',
//     count: '53 products',
//     color: 'from-teal-500 to-sky-400',
//     bg: 'bg-teal-50',
//     img: 'https://images.pexels.com/photos/3865711/pexels-photo-3865711.jpeg?auto=compress&cs=tinysrgb&w=400',
//   },
  {
    title: 'Balance & Stability',
    count: '29 products',
    color: 'from-cyan-500 to-indigo-400',
    bg: 'bg-cyan-50',
    img: 'https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
]

export default function Categories() {
  return (
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
          <Link
            to="/shop"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors"
          >
            View all
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0 scrollbar-hide snap-x snap-mandatory">
          {categories.map(({ title, count, color, bg, img }, i) => (
            <Link
              key={i}
              to="/shop"
              className={`group shrink-0 w-52 sm:w-56 lg:w-auto snap-start rounded-2xl ${bg} overflow-hidden border border-white hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/60 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="h-36 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className={`inline-block w-8 h-1 rounded-full bg-gradient-to-r ${color} mb-2`} />
                <h3 className="text-sm font-bold text-slate-800 leading-snug">{title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}