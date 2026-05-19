const reviews = [
  {
    name: 'Ravi Shankar',
    role: 'Marathon Runner, Mumbai',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    text: 'The TENS machine I ordered arrived in perfect condition and works exactly as described. My knee pain has significantly reduced after just 2 weeks of use. Delivery was super quick!',
  },
  {
    name: 'Priya Nair',
    role: 'Physiotherapist, Bangalore',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    text: 'I recommend First Pharma to all my patients. The product quality is unmatched and the expert team actually understands rehabilitation needs. Best physio e-store in India.',
  },
  {
    name: 'Arjun Mehta',
    role: 'Office Professional, Delhi',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 4,
    text: 'Ordered a lumbar support belt for my chronic back pain. It\'s incredibly comfortable and the price is very reasonable. Return process was also smooth when I needed a size change.',
  },
  {
    name: 'Sneha Patel',
    role: 'Yoga Instructor, Ahmedabad',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    text: 'The resistance bands are top-notch quality — way better than anything I\'ve found in local stores. Very durable and the tension levels are well-calibrated. Highly recommend!',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-cyan-500 text-sm font-semibold uppercase tracking-widest mb-2">Real Stories</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>
            What Our Customers Say
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map(({ name, role, avatar, rating, text }, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-50 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="text-5xl text-cyan-100 font-serif leading-none mb-3 select-none">"</div>

              {/* Text */}
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{text}</p>

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className={`w-3.5 h-3.5 ${j < rating ? 'text-amber-400' : 'text-slate-200'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.95 2.878c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.064 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
                  </svg>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <img
                  src={avatar}
                  alt={name}
                  className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-800">{name}</p>
                  <p className="text-[11px] text-slate-500">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}