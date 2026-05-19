import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm shadow-cyan-100/60 py-3'
          : 'bg-white/70 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center shadow-md shadow-cyan-200 group-hover:scale-105 transition-transform duration-200">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <span className="text-xl font-bold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>
            First<span className="text-cyan-500">Pharma</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-50 text-cyan-600'
                    : 'text-slate-600 hover:text-cyan-600 hover:bg-cyan-50/60'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <button className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 hover:bg-cyan-50 text-slate-500 hover:text-cyan-600 text-sm transition-all duration-200">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="m21 21-4.35-4.35" />
            </svg>
            <span className="text-xs">Search</span>
          </button>

          {/* Cart */}
          <Link to="/cart" className="relative p-2 rounded-lg hover:bg-cyan-50 text-slate-600 hover:text-cyan-600 transition-all duration-200">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path strokeLinecap="round" d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-cyan-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
          </Link>

          {/* Sign In */}
          <Link
            to="/signin"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white text-sm font-semibold shadow-md shadow-cyan-200 hover:shadow-cyan-300 hover:scale-[1.02] transition-all duration-200"
          >
            Sign In
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-200"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 border-t border-slate-100 bg-white/95 backdrop-blur-md space-y-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive ? 'bg-cyan-50 text-cyan-600' : 'text-slate-700 hover:bg-cyan-50 hover:text-cyan-600'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="pt-2 flex gap-2">
            <Link
              to="/signin"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white text-sm font-semibold"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center py-2.5 rounded-xl border border-cyan-300 text-cyan-600 text-sm font-semibold"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}