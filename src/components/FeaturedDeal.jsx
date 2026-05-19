import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function useCountdown(targetHours = 8) {
  const [time, setTime] = useState({ h: targetHours, m: 23, s: 47 })
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev
        if (s > 0) return { h, m, s: s - 1 }
        if (m > 0) return { h, m: m - 1, s: 59 }
        if (h > 0) return { h: h - 1, m: 59, s: 59 }
        return { h: targetHours, m: 0, s: 0 }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return time
}

function TimeBlock({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 bg-white rounded-xl shadow-md shadow-cyan-100 flex items-center justify-center border border-cyan-100">
        <span className="text-2xl font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] text-slate-400 font-medium mt-1 uppercase tracking-wider">{label}</span>
    </div>
  )
}

export default function FeaturedDeal() {
  const time = useCountdown(7)

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-cyan-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 items-center">

            {/* Left — image */}
            <div className="relative h-72 lg:h-full min-h-72 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Deal of the day"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 lg:from-transparent to-transparent" />
              {/* Deal badge */}
              <div className="absolute top-6 left-6">
                <span className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-400 text-white text-xs font-bold uppercase tracking-widest shadow-lg">
                  Deal of the Day
                </span>
              </div>
            </div>

            {/* Right — content */}
            <div className="p-8 lg:p-12 space-y-6">
              <div>
                <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">Limited Time Offer</p>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Professional TENS Machine
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
                    Pain Relief Unit
                  </span>
                </h2>
                <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                  Dual-channel TENS/EMS device with 20 intensity levels. Clinically proven for muscle recovery, chronic pain, and sports rehabilitation.
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>₹2,499</span>
                <span className="text-lg text-slate-500 line-through">₹4,999</span>
                <span className="px-2 py-0.5 rounded-lg bg-green-500/20 text-green-400 text-sm font-bold">50% OFF</span>
              </div>

              {/* Countdown */}
              <div>
                <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-3">Offer ends in</p>
                <div className="flex items-center gap-3">
                  <TimeBlock value={time.h} label="Hours" />
                  <span className="text-2xl font-bold text-cyan-400 mb-4">:</span>
                  <TimeBlock value={time.m} label="Mins" />
                  <span className="text-2xl font-bold text-cyan-400 mb-4">:</span>
                  <TimeBlock value={time.s} label="Secs" />
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2">
                {['20 intensity levels', 'Dual channel output', 'FDA cleared device', 'Includes 8 electrode pads'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex gap-3 pt-2">
                <Link
                  to="/shop"
                  className="flex-1 text-center py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-[1.02] transition-all duration-200"
                >
                  Grab Deal Now
                </Link>
                <Link
                  to="/shop"
                  className="px-5 py-3.5 rounded-2xl border border-slate-600 text-slate-300 text-sm font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}