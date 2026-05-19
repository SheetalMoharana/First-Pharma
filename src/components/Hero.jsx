import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

const stats = [
  { value: 500, suffix: '+', label: 'Products' },
  { value: 12000, suffix: '+', label: 'Happy Patients' },
  { value: 98, suffix: '%', label: 'Satisfaction' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50/40">

      {/* Background decoration blobs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-100/60 to-sky-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-sky-100/50 to-cyan-50/30 blur-3xl pointer-events-none" />

      {/* Diagonal divider (right side tint) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 h-full w-[48%] bg-gradient-to-bl from-cyan-50/80 to-sky-100/30"
          style={{ clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-80px)] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center w-full py-12">

          {/* LEFT — Text content */}
          <div className={`space-y-7 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>

            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              Trusted Physiotherapy Equipment
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1
                className="text-5xl sm:text-6xl lg:text-[64px] font-extrabold text-slate-800 leading-[1.1] tracking-tight"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Recover
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-sky-500">
                  Stronger,
                </span>
                Move Better
              </h1>
              <p className="text-lg text-slate-500 max-w-md leading-relaxed pt-2">
                Professional-grade physiotherapy equipment delivered to your door. From resistance bands to TENS machines — everything you need for effective recovery.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white font-semibold text-base shadow-lg shadow-cyan-200 hover:shadow-cyan-300 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                Shop Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border-2 border-slate-200 text-slate-700 font-semibold text-base hover:border-cyan-300 hover:text-cyan-600 hover:bg-cyan-50/50 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 pt-2">
              {stats.map(({ value, suffix, label }, i) => (
                <StatCard key={i} target={value} suffix={suffix} label={label} trigger={visible} delay={i * 200} />
              ))}
            </div>
          </div>

          {/* RIGHT — Floating product visual */}
          <div className={`relative flex justify-center items-center transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

            {/* Pulse rings behind image */}
            <div className="absolute w-72 h-72 rounded-full border-2 border-cyan-200/50 animate-pulse-ring" />
            <div className="absolute w-72 h-72 rounded-full border-2 border-sky-200/40 animate-pulse-ring [animation-delay:1s]" />

            {/* Main product image card */}
            <div className="relative z-10 animate-float">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl bg-gradient-to-br from-cyan-100 to-sky-100 shadow-2xl shadow-cyan-200/50 overflow-hidden flex items-center justify-center border border-white/80">
                <img
                  src="https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Physiotherapy equipment"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge — Free delivery */}
              <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl shadow-slate-200/80 px-4 py-3 flex items-center gap-3 border border-slate-100 animate-float-slow [animation-delay:0.5s]">
                <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Free Delivery</p>
                  <p className="text-[10px] text-slate-500">Orders above ₹999</p>
                </div>
              </div>

              {/* Floating badge — Rating */}
              <div className="absolute -top-4 -right-6 bg-white rounded-2xl shadow-xl shadow-slate-200/80 px-4 py-3 flex items-center gap-2 border border-slate-100 animate-float [animation-delay:1s]">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.95 2.878c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.064 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">4.9/5</p>
                  <p className="text-[10px] text-slate-500">2.4k Reviews</p>
                </div>
              </div>
            </div>

            {/* Secondary product cards */}
            <div className="absolute top-4 -left-8 hidden lg:block animate-float-slow [animation-delay:0.8s]">
              <div className="w-24 h-24 rounded-2xl bg-white shadow-lg shadow-slate-200/80 border border-slate-100 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Resistance bands"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-8 -right-8 hidden lg:block animate-float [animation-delay:1.5s]">
              <div className="w-20 h-20 rounded-2xl bg-white shadow-lg shadow-slate-200/80 border border-slate-100 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Exercise equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-xs text-slate-500 font-medium">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-300 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

function StatCard({ target, suffix, label, trigger, delay }) {
  const count = useCountUp(target, 2000, trigger)
  return (
    <div className="flex flex-col" style={{ animationDelay: `${delay}ms` }}>
      <span className="text-3xl font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-xs text-slate-500 font-medium">{label}</span>
    </div>
  )
}