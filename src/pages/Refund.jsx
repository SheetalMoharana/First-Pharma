import { useState } from 'react';

const REFUND_SECTIONS = [
  {
    icon: '🔄',
    title: 'Return Policy',
    color: 'border-cyan-200 bg-cyan-50/40',
    accent: 'text-cyan-600',
    points: [
      'You can return most products within 30 days of delivery.',
      'Items must be unused, unwashed, and in their original packaging with all tags intact.',
      'The original invoice or order confirmation must be included with the return.',
      'Free return pickup is available across all serviceable pincodes.',
      'Returns are processed within 2–3 business days after the item is received at our warehouse.',
    ],
  },
  {
    icon: '🚫',
    title: 'Non-Returnable Items',
    color: 'border-red-100 bg-red-50/30',
    accent: 'text-red-500',
    points: [
      'Products that have been used, worn, or opened (for hygiene reasons) — this includes braces, supports, and compression garments.',
      'Items explicitly marked as "Non-Returnable" on the product page.',
      'Products damaged due to misuse, accidents, or improper handling by the customer.',
      'Consumable accessories such as electrode pads, gels, and replacement parts once opened.',
      'Gift cards and promotional vouchers.',
    ],
  },
  {
    icon: '💰',
    title: 'Refund Process',
    color: 'border-emerald-200 bg-emerald-50/30',
    accent: 'text-emerald-600',
    points: [
      'Once your return is received and inspected, we will notify you via email within 48 hours.',
      'Approved refunds are credited to your original payment method within 5–7 business days.',
      'UPI and wallet refunds are typically faster and may reflect within 2–3 business days.',
      'Cash on Delivery (COD) refunds are processed via NEFT/bank transfer within 7–10 business days.',
      'If your refund is delayed beyond the stated timeline, contact us at support@firstpharma.com.',
    ],
  },
  {
    icon: '❌',
    title: 'Order Cancellation',
    color: 'border-amber-200 bg-amber-50/30',
    accent: 'text-amber-600',
    points: [
      'Orders can be cancelled within 12 hours of placement, provided the item has not been dispatched.',
      'To cancel, go to My Orders in your account and select "Cancel Order", or contact support.',
      'Once an order is shipped, it cannot be cancelled — you must use the return process instead.',
      'If First Pharma cancels your order due to stock issues or pricing errors, a full refund will be issued automatically.',
      'Prepaid orders that are cancelled will be refunded within 5–7 business days.',
    ],
  },
  {
    icon: '🔁',
    title: 'Exchange Policy',
    color: 'border-violet-200 bg-violet-50/30',
    accent: 'text-violet-600',
    points: [
      'Free size exchanges are available within 30 days of delivery for eligible products.',
      'To exchange, initiate a return from My Orders and select "Exchange for Different Size".',
      'The replacement item will be shipped once we receive and inspect the original.',
      'Exchanges are subject to stock availability. If the requested size is unavailable, a full refund will be issued.',
      'Color or style exchanges are not available — only size exchanges are permitted.',
    ],
  },
  {
    icon: '📦',
    title: 'Damaged or Wrong Items',
    color: 'border-sky-200 bg-sky-50/30',
    accent: 'text-sky-600',
    points: [
      'If you receive a damaged or defective product, report it within 48 hours of delivery.',
      'Take clear photographs of the damaged item and packaging, and email them to support@firstpharma.com.',
      'We will arrange a free replacement or full refund at no additional cost to you.',
      'If you receive the wrong item, do not use it. Contact us and we will arrange a pickup and send the correct product within 24 hours.',
      'We do not require you to return damaged or wrong items in all cases — our team will advise you.',
    ],
  },
];

export default function RefundAndCancellation() {
  return (
    <div className="min-h-screen bg-white pt-20">

      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-50 via-white to-cyan-50/30 py-14 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#1e3a5f] mb-4">
            Refund & <span className="text-cyan-500">Cancellation</span>
          </h1>
          <p className="text-slate-500 text-base leading-relaxed max-w-xl mx-auto">
            We want you to shop with confidence. Here is everything you need to know about our return, refund, and cancellation policies.
          </p>
        </div>
      </div>

      {/* Quick summary cards */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { label: 'Return Window', value: '30 Days', icon: '📅' },
            { label: 'Refund Timeline', value: '5–7 Days', icon: '⏱️' },
            { label: 'Free Pickup', value: 'All India', icon: '🚚' },
            { label: 'Cancel Window', value: '12 Hours', icon: '⚡' },
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-slate-50 to-cyan-50/30 border border-slate-100 rounded-2xl p-4 text-center">
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-xl font-black text-[#1e3a5f]">{item.value}</p>
              <p className="text-xs font-semibold text-slate-500 mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Policy sections */}
        <div className="flex flex-col gap-6">
          {REFUND_SECTIONS.map((sec, i) => (
            <div key={i} className={`rounded-2xl border p-6 ${sec.color}`}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{sec.icon}</span>
                <h2 className={`text-lg font-black ${sec.accent}`}>{sec.title}</h2>
              </div>
              <ul className="flex flex-col gap-3">
                {sec.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm text-slate-600 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* How to return steps */}
        <div className="mt-14">
          <h2 className="text-2xl font-black text-[#1e3a5f] mb-8 text-center">How to Initiate a Return</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Go to My Orders', desc: 'Log in and navigate to My Orders in your account dashboard.' },
              { step: '02', title: 'Select the Item', desc: 'Choose the order and click "Return" or "Exchange" on the item.' },
              { step: '03', title: 'Free Pickup', desc: 'We schedule a free pickup from your address within 48 hours.' },
              { step: '04', title: 'Refund Processed', desc: 'Once inspected, refund is credited within 5–7 business days.' },
            ].map((s, i) => (
              <div key={i} className="relative bg-white border border-slate-100 rounded-2xl p-5 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-100/40 transition-all duration-200">
                <div className="text-4xl font-black text-cyan-100 mb-3 leading-none">{s.step}</div>
                <h3 className="text-sm font-black text-[#1e3a5f] mb-1">{s.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 z-10">
                    <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#1e3a5f] to-cyan-700 p-8 text-center text-white">
          <h3 className="text-xl font-black mb-2">Need help with a return or refund?</h3>
          <p className="text-cyan-100 text-sm mb-6">Our team is ready to help you Mon–Sat, 9AM to 7PM.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="mailto:support@firstpharma.com" className="inline-flex items-center gap-2 bg-white text-[#1e3a5f] font-bold text-sm px-5 py-2.5 rounded-xl hover:shadow-lg transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              support@firstpharma.com
            </a>
            <a href="tel:1800XXXXXXX" className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-white/20 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              9876543210
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}