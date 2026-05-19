const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Clinically Verified',
    desc: 'Every product is vetted by certified physiotherapists and meets international medical standards.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast Delivery',
    desc: 'Same-day dispatch for most orders. Reach your doorstep within 2–4 business days pan-India.',
    color: 'text-sky-500',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: 'Expert Guidance',
    desc: 'Our team of physio experts is available 24/7 to help you pick the right equipment for your recovery.',
    color: 'text-teal-500',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Easy Returns',
    desc: 'Not satisfied? Return within 30 days, no questions asked. We make returns completely hassle-free.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Best Prices',
    desc: 'We work directly with manufacturers to cut out middlemen and offer the lowest prices on all products.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'Premium Quality',
    desc: 'All products undergo rigorous quality checks. Only top-rated equipment makes it to our catalog.',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
  },
]

export default function WhyUs() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-cyan-500 text-sm font-semibold uppercase tracking-widest mb-2">Why First Pharma</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>
            The Smarter Way to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-sky-500"> Recover</span>
          </h2>
          <p className="text-slate-500 mt-3 text-sm leading-relaxed">
            We combine clinical expertise with convenience to bring you the best physiotherapy shopping experience in India.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(({ icon, title, desc, color, bg, border }, i) => (
            <div
              key={i}
              className={`group p-6 rounded-2xl bg-white border ${border} hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`w-14 h-14 rounded-2xl ${bg} ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {icon}
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}