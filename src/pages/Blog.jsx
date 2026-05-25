import { useState } from 'react'
import { Link } from 'react-router-dom'

const posts = [
  {
    id: 1,
    title: 'How TENS Therapy Works: A Complete Guide for Beginners',
    excerpt: 'Transcutaneous Electrical Nerve Stimulation (TENS) is one of the most effective non-invasive pain management tools available. Learn how it works and how to use it safely at home.',
    category: 'TENS & EMS',
    author: 'Dr. Ananya Sharma',
    date: 'May 12, 2025',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/5473182/pexels-photo-5473182.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: true,
  },
  {
    id: 2,
    title: '10 Resistance Band Exercises for Knee Rehabilitation',
    excerpt: 'Resistance bands are a cornerstone of physiotherapy. These 10 exercises target the muscles around the knee to speed up recovery after injury or surgery.',
    category: 'Exercise',
    author: 'Rohan Verma',
    date: 'Apr 28, 2025',
    readTime: '8 min read',
    // image: 'https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
  },
  {
    id: 3,
    title: 'Ice vs Heat Therapy: When to Use Which',
    excerpt: 'One of the most common questions from patients is whether to use ice or heat on an injury. The answer depends on the type, stage, and location of your injury.',
    category: 'Recovery',
    author: 'Dr. Ananya Sharma',
    date: 'Apr 15, 2025',
    readTime: '5 min read',
    // image: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
  },
  {
    id: 4,
    title: 'Choosing the Right Orthopedic Support for Your Injury',
    excerpt: 'From wrist braces to lumbar supports, orthopedic supports come in dozens of varieties. This guide helps you pick the right one for your specific condition.',
    category: 'Supports',
    author: 'Meera Pillai',
    date: 'Apr 4, 2025',
    readTime: '7 min read',
    // image: 'https://images.pexels.com/photos/5473183/pexels-photo-5473183.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
  },
  {
    id: 5,
    title: 'Massage Gun Therapy: Benefits, Risks, and Best Practices',
    excerpt: 'Percussion massage guns have exploded in popularity among athletes and recovery patients alike. Here\'s everything you need to know before buying one.',
    category: 'Massage',
    author: 'Rohan Verma',
    date: 'Mar 20, 2025',
    readTime: '9 min read',
    // image: 'https://images.pexels.com/photos/3865711/pexels-photo-3865711.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
  },
  {
    id: 6,
    title: 'Balance Training: Why It Matters After Any Lower Limb Injury',
    excerpt: 'Proprioception and balance training are often overlooked in home recovery programs. Discover why they are essential and how to incorporate them easily.',
    category: 'Exercise',
    author: 'Dr. Ananya Sharma',
    date: 'Mar 8, 2025',
    readTime: '6 min read',
    // image: 'https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
  },
]

const categories = ['All', 'TENS & EMS', 'Exercise', 'Recovery', 'Supports', 'Massage']

const categoryColors = {
  'TENS & EMS': 'bg-cyan-50 text-cyan-600',
  Exercise: 'bg-sky-50 text-sky-600',
  Recovery: 'bg-teal-50 text-teal-600',
  Supports: 'bg-indigo-50 text-indigo-600',
  Massage: 'bg-blue-50 text-blue-600',
}

export default function Blog() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? posts : posts.filter((p) => p.category === active)
  const featured = posts.find((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured || active !== 'All')

  return (
    <div className="pt-20 min-h-screen bg-slate-50">

      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/3 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-sky-500/10 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            First Pharma Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Recovery Tips &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
              Expert Advice
            </span>
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            Evidence-based articles from certified physiotherapists to help you recover faster and move better.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Category filter */}
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

        {/* Featured post — show only on All tab */}
        {active === 'All' && featured && (
          <div className="mb-10 group cursor-pointer">
            <div className="rounded-3xl overflow-hidden bg-white border border-slate-100 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-100/40 transition-all duration-300 grid lg:grid-cols-2">
              <div className="h-64 lg:h-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold ${categoryColors[featured.category] || 'bg-slate-100 text-slate-600'}`}>
                    {featured.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium px-2 py-1 bg-amber-50 text-amber-600 rounded-lg font-semibold">★ Featured</span>
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
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700 mt-2 group/link"
                >
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
            <article
              key={post.id}
              className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
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

        {/* Load more */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-2xl border-2 border-slate-200 text-slate-600 text-sm font-semibold hover:border-cyan-300 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-200">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  )
}