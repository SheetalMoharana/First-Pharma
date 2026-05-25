import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit() {
    if (!form.name || !form.email || !form.message) return
    setSent(true)
  }

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>
        <div className="relative max-w-xl mx-auto px-4 space-y-3">
          <h1 className="text-4xl font-extrabold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>Get in Touch</h1>
          <p className="text-slate-400 text-sm">Our physio experts are here to help you choose the right equipment and answer any questions.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14 grid lg:grid-cols-3 gap-8">
        {/* Info cards */}
        <div className="space-y-4">
          {[
            {
              icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
              title: 'Email Us',
              detail: 'support@firstpharma.in',
              sub: 'Replies within 2 hours',
            },
            {
              icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
              title: 'Call Us',
              detail: '+91 98765 43210',
              sub: 'Mon–Sat, 9am–7pm IST',
            },
            {
              icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
              title: 'Office',
              detail: 'Bhubaneswar, Odisha',
              sub: 'India — 751001',
            },
          ].map(({ icon, title, detail, sub }) => (
            <div key={title} className="flex gap-4 bg-white rounded-2xl border border-slate-100 p-5 hover:border-cyan-200 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-500 flex items-center justify-center shrink-0">{icon}</div>
              <div>
                <p className="font-semibold text-slate-800 text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>{title}</p>
                <p className="text-sm text-slate-700 mt-0.5">{detail}</p>
                <p className="text-xs text-slate-500">{sub}</p>
              </div>
            </div>
          ))}

          {/* FAQ note */}
          <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-5">
            <p className="text-sm font-semibold text-cyan-800 mb-1">Quick help?</p>
            <p className="text-xs text-cyan-700">Check our Help Center for instant answers about orders, returns, and product guides.</p>
          </div>
        </div>

        {/* Contact form */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
          {!sent ? (
            <div className="space-y-5">
              <h2 className="text-xl font-bold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>Send us a message</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Full Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email Address *</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white font-semibold text-sm shadow-lg shadow-cyan-200 hover:shadow-cyan-300 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
              >
                Send Message
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 space-y-4 text-center">
              <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>Message Sent!</h3>
              <p className="text-slate-500 text-sm">Thanks {form.name || 'there'}! We'll get back to you within 2 hours.</p>
              <button onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }} className="text-cyan-500 text-sm font-semibold hover:underline">
                Send another message
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}