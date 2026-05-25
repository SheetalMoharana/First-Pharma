const team = [
  { name: 'Dr. Ananya Sharma', role: 'Chief Physiotherapist', img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Rohan Verma', role: 'Product Curator', img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Meera Pillai', role: 'Customer Success', img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Vikram Singh', role: 'Tech & Operations', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200' },
]

export default function About() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center space-y-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Healing India,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">One Recovery at a Time</span>
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            First Pharma was born from a simple frustration — quality physiotherapy equipment was hard to find, expensive, and often poorly described. We changed that.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <p className="text-cyan-500 text-sm font-semibold uppercase tracking-widest">Our Mission</p>
            <h2 className="text-3xl font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Making Professional Physio Care Accessible to Everyone
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Founded in 2026 by a team of physiotherapists and technologists, First Pharma set out to bridge the gap between clinical-grade equipment and everyday patients. We curate only products that meet our strict clinical standards, making professional-grade recovery possible at home.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Today we serve 12,000+ happy patients and 500+ physiotherapy clinics across India. Every product in our catalog is personally reviewed by our in-house clinical team.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[['12K+', 'Patients Served'], ['500+', 'Products'], ['98%', 'Satisfaction']].map(([val, label]) => (
                <div key={label} className="text-center p-4 rounded-2xl bg-cyan-50 border border-cyan-100">
                  <p className="text-2xl font-extrabold text-cyan-600" style={{ fontFamily: 'Outfit, sans-serif' }}>{val}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 h-80 lg:h-auto">
            <img
              src="https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="About First Pharma"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-cyan-500 text-sm font-semibold uppercase tracking-widest mb-2">The People</p>
            <h2 className="text-3xl font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>Meet Our Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, img }) => (
              <div key={name} className="bg-white rounded-2xl border border-slate-100 p-6 text-center hover:shadow-lg hover:shadow-cyan-50 hover:-translate-y-1 transition-all duration-300">
                <img src={img} alt={name} className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-cyan-50 shadow-md" />
                <h3 className="font-bold text-slate-800 text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>{name}</h3>
                <p className="text-xs text-cyan-500 mt-0.5 font-medium">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}