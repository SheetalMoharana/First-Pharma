import { useState } from 'react'
import { Link } from 'react-router-dom'

const posts = [
  {
    id: 1,
    title: 'How to Choose the Right BP Monitor for Home Use',
    excerpt: 'With so many blood pressure monitors on the market, picking the right one can be confusing. We break down upper arm vs wrist models, accuracy ratings, and what features actually matter for daily home monitoring.',
    category: 'BP Monitors',
    author: 'Dr. Ananya Sharma',
    date: 'May 18, 2025',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Understanding Your Glucometer: A Beginner\'s Guide',
    excerpt: 'Blood sugar monitoring at home is a critical part of diabetes management. Learn how to use your glucometer correctly, when to test, and how to read and act on your results.',
    category: 'Sugar Monitors',
    author: 'Dr. Ananya Sharma',
    date: 'May 10, 2025',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'Pulse Oximeter: When Do You Actually Need One?',
    excerpt: 'Fingertip pulse oximeters became household essentials during COVID-19. But how accurate are they, and what SpO2 reading should you worry about? A clear, no-jargon guide.',
    category: 'Diagnostic',
    author: 'Rohan Verma',
    date: 'Apr 29, 2025',
    readTime: '4 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'Nebulizer vs Inhaler: Which Is Better for Asthma?',
    excerpt: 'Both nebulizers and inhalers deliver medication to your lungs — but they work very differently. This guide helps you and your doctor decide which device suits your condition and lifestyle.',
    category: 'Respiratory',
    author: 'Meera Pillai',
    date: 'Apr 15, 2025',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'TENS Therapy for Chronic Pain: What Science Says',
    excerpt: 'Transcutaneous Electrical Nerve Stimulation (TENS) has been used in physiotherapy for decades. We look at the clinical evidence, best practices, and which conditions respond best.',
    category: 'Physio Equipment',
    author: 'Dr. Ananya Sharma',
    date: 'Apr 2, 2025',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'First Aid Kit Essentials Every Home Must Have in 2025',
    excerpt: 'Most store-bought kits are incomplete. This updated checklist covers the 20 essential items every Indian household first aid box must contain, from bandages to ORS sachets.',
    category: 'First Aid',
    author: 'Rohan Verma',
    date: 'Mar 20, 2025',
    readTime: '5 min read',
    featured: false,
  },
]

const categories = ['All', 'BP Monitors', 'Sugar Monitors', 'Diagnostic', 'Respiratory', 'Physio Equipment', 'First Aid']

const categoryColors = {
  'BP Monitors':    'bg-cyan-50 text-cyan-600',
  'Sugar Monitors': 'bg-teal-50 text-teal-600',
  Diagnostic:       'bg-sky-50 text-sky-600',
  Respiratory:      'bg-indigo-50 text-indigo-600',
  'Physio Equipment': 'bg-blue-50 text-blue-600',
  'First Aid':      'bg-green-50 text-green-600',
}

export default function Blog() {
  const [active, setActive] = useState('All')
  const [showAll, setShowAll] = useState(false)
  const filtered = active === 'All' ? posts : posts.filter((p) => p.category === active)
  const featured = posts.find((p) => p.featured)
  const rest = (
  active === 'All'
    ? filtered.filter((p) => !p.featured)
    : filtered
).slice(0, showAll ? undefined : 3)

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/3 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-sky-500/10 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            MediKart Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Health Guides &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
              Expert Advice
            </span>
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Practical guides on using medical instruments correctly, understanding your readings, and making smarter health decisions at home.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-2 overflow-x-auto pb-4 mb-10 scrollbar-hide">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`shrink-0 px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                active === c
                  ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-white shadow-md shadow-cyan-200'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-cyan-300 hover:text-cyan-600'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Featured post */}
        {active === 'All' && featured && (
          <div className="mb-10 group cursor-pointer">
            <div className="rounded-3xl overflow-hidden bg-white border border-slate-100 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-100/40 transition-all duration-300 grid lg:grid-cols-2">
              {/* Featured image placeholder */}
              <div className="h-64 lg:h-auto overflow-hidden bg-slate-100 flex items-center justify-center">
                {featured.image ? (
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-slate-300">
                    <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">Featured image</span>
                  </div>
                )}
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold ${categoryColors[featured.category] || 'bg-slate-100 text-slate-600'}`}>
                    {featured.category}
                  </span>
                  <span className="text-xs px-2 py-1 bg-amber-50 text-amber-600 rounded-lg font-semibold">★ Featured</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-800 leading-tight group-hover:text-cyan-600 transition-colors duration-200" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {featured.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center text-white text-xs font-bold">
                      {featured.author.charAt(0)}
                    </div>
                    <span className="text-xs font-semibold text-slate-700">{featured.author}</span>
                  </div>
                  <span className="text-slate-300">·</span>
                  <span className="text-xs text-slate-500">{featured.date}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-xs text-cyan-500 font-medium">{featured.readTime}</span>
                </div>
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700 mt-2 group/link">
                  Read Article
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Post grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <article key={post.id} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              {/* Post image placeholder */}
              <div className="h-48 overflow-hidden bg-slate-100 flex items-center justify-center">
                {post.image ? (
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="flex flex-col items-center gap-1 text-slate-300">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs">Add image</span>
                  </div>
                )}
              </div>
              <div className="p-5 space-y-3">
                <span className={`inline-block px-3 py-1 rounded-lg text-[11px] font-bold ${categoryColors[post.category] || 'bg-slate-100 text-slate-600'}`}>
                  {post.category}
                </span>
                <h3 className="text-base font-bold text-slate-800 leading-snug group-hover:text-cyan-600 transition-colors duration-200" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {post.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-[11px] text-slate-600 font-medium truncate max-w-[90px]">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span className="text-cyan-500 font-medium">{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!showAll &&
  ((active === 'All'
    ? filtered.filter((p) => !p.featured).length
    : filtered.length) > 3) && (
    <div className="text-center mt-12">
      <button
        onClick={() => setShowAll(true)}
        className="px-8 py-3 rounded-2xl border-2 border-slate-200 text-slate-600 text-sm font-semibold hover:border-cyan-300 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-200"
      >
        Load More Articles
      </button>
    </div>
)}
      </div>
    </div>
  )
}