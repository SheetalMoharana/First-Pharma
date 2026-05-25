import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirm: '',
    agree: false,
  })
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
    setErrors({ ...errors, [name]: '' })
  }

  function validate() {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'Required'
    if (!form.email.includes('@')) e.email = 'Valid email required'
    if (form.password.length < 6) e.password = 'Minimum 6 characters'
    if (form.password !== form.confirm) e.confirm = 'Passwords do not match'
    if (!form.agree) e.agree = 'Please accept the terms'
    return e
  }

  function handleSubmit() {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); setDone(true) }, 1800)
  }

  const strength = form.password.length === 0 ? 0
    : form.password.length < 6 ? 1
    : form.password.length < 10 ? 2
    : 3

  const strengthLabel = ['', 'Weak', 'Good', 'Strong']
  const strengthColor = ['', 'bg-rose-400', 'bg-amber-400', 'bg-green-400']

  if (done) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50/30 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 p-10 max-w-md w-full text-center space-y-5">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-50 to-sky-100 border-2 border-cyan-200 flex items-center justify-center mx-auto">
            <svg className="w-10 h-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Welcome to First Pharma!
          </h2>
          <p className="text-slate-500 text-sm">
            Your account has been created, <span className="font-semibold text-slate-700">{form.firstName}</span>! You can now shop, track orders, and access exclusive member benefits.
          </p>
          <Link
            to="/shop"
            className="block w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white font-bold text-sm shadow-lg shadow-cyan-200 hover:shadow-cyan-300 hover:scale-[1.01] transition-all duration-200"
          >
            Start Shopping
          </Link>
          <Link to="/signin" className="block text-sm text-slate-500 hover:text-cyan-500 transition-colors">
            Sign in instead
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl grid lg:grid-cols-2 shadow-2xl shadow-slate-200/60 rounded-3xl overflow-hidden">

        {/* Left panel */}
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

          <Link to="/" className="relative flex items-center gap-2 w-fit">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center shadow-md shadow-cyan-900/50">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              First<span className="text-cyan-400">Pharma</span>
            </span>
          </Link>

          <div className="relative space-y-4">
            <h2 className="text-3xl font-extrabold text-white leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Start Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
                Recovery Today
              </span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Join 12,000+ patients using First Pharma to get the right equipment for faster, safer recovery at home and in clinic.
            </p>
          </div>

          <div className="relative space-y-4">
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest">New member benefits</p>
            {[
              { icon: '🎁', text: '₹200 welcome discount on first order' },
              { icon: '📦', text: 'Free shipping on all first orders' },
              { icon: '🩺', text: 'Free physio consultation on signup' },
              { icon: '🔔', text: 'Early access to new products & sales' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <span className="text-lg">{icon}</span>
                <span className="text-sm text-slate-300">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel — form */}
        <div className="bg-white p-8 sm:p-10 space-y-5 overflow-y-auto max-h-screen">
          {/* Mobile logo */}
          <Link to="/" className="flex lg:hidden items-center gap-2 w-fit">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <span className="text-lg font-bold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>
              First<span className="text-cyan-500">Pharma</span>
            </span>
          </Link>

          <div>
            <h1 className="text-2xl font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>Create account</h1>
            <p className="text-slate-500 text-sm mt-1">Join First Pharma — it's free!</p>
          </div>

          {/* Name row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">First Name *</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${errors.firstName ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-100' : 'border-slate-200 focus:border-cyan-400 focus:ring-cyan-100'}`}
              />
              {errors.firstName && <p className="text-[10px] text-rose-500 mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Last Name</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email Address *</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${errors.email ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-100' : 'border-slate-200 focus:border-cyan-400 focus:ring-cyan-100'}`}
            />
            {errors.email && <p className="text-[10px] text-rose-500 mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Phone Number</label>
            <div className="flex gap-2">
              <span className="px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-600 font-medium">+91</span>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="9876543210"
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Password *</label>
            <div className="relative">
              <input
                name="password"
                type={showPass ? 'text' : 'password'}
                value={form.password}
                onChange={handleChange}
                placeholder="Minimum 6 characters"
                className={`w-full px-4 py-2.5 pr-12 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${errors.password ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-100' : 'border-slate-200 focus:border-cyan-400 focus:ring-cyan-100'}`}
              />
              <button
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {showPass
                    ? <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    : <><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></>
                  }
                </svg>
              </button>
            </div>
            {/* Strength bar */}
            {form.password.length > 0 && (
              <div className="flex items-center gap-2 mt-2">
                <div className="flex gap-1 flex-1">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${i <= strength ? strengthColor[strength] : 'bg-slate-200'}`}
                    />
                  ))}
                </div>
                <span className={`text-[10px] font-semibold ${strength === 1 ? 'text-rose-500' : strength === 2 ? 'text-amber-500' : 'text-green-500'}`}>
                  {strengthLabel[strength]}
                </span>
              </div>
            )}
            {errors.password && <p className="text-[10px] text-rose-500 mt-1">{errors.password}</p>}
          </div>

          {/* Confirm password */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Confirm Password *</label>
            <input
              name="confirm"
              type="password"
              value={form.confirm}
              onChange={handleChange}
              placeholder="Repeat your password"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${errors.confirm ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-100' : 'border-slate-200 focus:border-cyan-400 focus:ring-cyan-100'}`}
            />
            {errors.confirm && <p className="text-[10px] text-rose-500 mt-1">{errors.confirm}</p>}
          </div>

          {/* Terms */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                name="agree"
                type="checkbox"
                checked={form.agree}
                onChange={handleChange}
                className="mt-0.5 w-4 h-4 accent-cyan-500 cursor-pointer"
              />
              <span className="text-xs text-slate-500 leading-relaxed">
                I agree to First Pharma's{' '}
                <span className="text-cyan-500 font-semibold cursor-pointer hover:underline">Terms of Service</span>{' '}
                and{' '}
                <span className="text-cyan-500 font-semibold cursor-pointer hover:underline">Privacy Policy</span>
              </span>
            </label>
            {errors.agree && <p className="text-[10px] text-rose-500 mt-1">{errors.agree}</p>}
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white font-bold text-sm shadow-lg shadow-cyan-200 hover:shadow-cyan-300 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Creating account...
              </>
            ) : 'Create Account'}
          </button>

          <p className="text-center text-sm text-slate-500">
            Already have an account?{' '}
            <Link to="/signin" className="text-cyan-500 font-semibold hover:text-cyan-600 transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}