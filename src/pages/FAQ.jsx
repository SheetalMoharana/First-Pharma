import { useState } from 'react';

const FAQ_DATA = [
  {
    section: 'Orders & Shipping',
    icon: '📦',
    questions: [
      {
        q: 'How do I place an order on First Pharma?',
        a: 'Browse our products, add items to your cart, and proceed to checkout. You can pay via UPI, credit/debit card, net banking, or cash on delivery. You will receive a confirmation email once your order is placed.',
      },
      {
        q: 'How long does delivery take?',
        a: 'Standard delivery takes 2–5 business days depending on your location. Express delivery (1–2 days) is available for select pincodes at checkout. Remote areas may take an additional 1–2 days.',
      },
      {
        q: 'Do you offer free delivery?',
        a: 'Yes! We offer free delivery on all orders above ₹999. For orders below ₹999, a flat shipping fee of ₹49 is applied.',
      },
      {
        q: 'Can I track my order?',
        a: 'Absolutely. Once your order is dispatched, you will receive a tracking link via email and SMS. You can also track your order from the "My Orders" section in your account.',
      },
      {
        q: 'Do you deliver across India?',
        a: 'Yes, we deliver to 18,000+ pincodes across India. Enter your pincode on the product page to check availability for your area.',
      },
    ],
  },
  {
    section: 'Products & Equipment',
    icon: '🩺',
    questions: [
      {
        q: 'Are the physiotherapy products on First Pharma genuine?',
        a: 'Yes, all products sold on First Pharma are 100% genuine and sourced directly from certified manufacturers and authorized distributors. Every product goes through quality checks before being listed.',
      },
      {
        q: 'Are your products recommended by physiotherapists?',
        a: 'Yes. Our product range is curated in consultation with licensed physiotherapists and medical professionals. Look for the "Expert Approved" badge on product pages.',
      },
      {
        q: 'How do I know which product is right for me?',
        a: 'Each product page includes a detailed description, usage guide, and conditions it is suitable for. You can also use our support chat to speak with a product specialist. We always recommend consulting your physiotherapist for personalized advice.',
      },
      {
        q: 'Do the products come with a warranty?',
        a: 'Most electronic physiotherapy devices (TENS machines, massagers, ultrasound devices) come with a 1-year manufacturer warranty. The warranty period is mentioned on each product page.',
      },
      {
        q: 'Can I buy products in bulk for a clinic or hospital?',
        a: 'Yes, we offer bulk pricing for clinics, hospitals, and physiotherapy centers. Contact us at support@firstpharma.com or call 1800-XXX-XXXX for a custom quote.',
      },
    ],
  },
  {
    section: 'Returns & Refunds',
    icon: '🔄',
    questions: [
      {
        q: 'What is your return policy?',
        a: 'We offer a 30-day hassle-free return policy. Items must be unused, in original packaging, and accompanied by the original invoice. Certain hygiene-sensitive products (like braces and supports that have been used) are not eligible for return.',
      },
      {
        q: 'How do I initiate a return?',
        a: 'Go to "My Orders" in your account, select the order, and click "Return Item". Our team will schedule a free pickup within 48 hours. Refunds are processed within 5–7 business days after the item is received and inspected.',
      },
      {
        q: 'Can I exchange a product for a different size?',
        a: 'Yes, we offer free size exchanges within 30 days of delivery. Select "Exchange" when initiating a return, choose your new size, and we will ship it once we receive the original item.',
      },
      {
        q: 'When will I receive my refund?',
        a: 'Refunds are credited to your original payment method within 5–7 business days after the returned item passes inspection. UPI and wallet refunds are usually faster (2–3 days).',
      },
    ],
  },
  {
    section: 'Payments',
    icon: '💳',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept UPI (GPay, PhonePe, Paytm), credit and debit cards (Visa, Mastercard, RuPay), net banking, EMI, and Cash on Delivery for eligible orders.',
      },
      {
        q: 'Is it safe to pay on First Pharma?',
        a: 'Yes. All transactions are secured with 256-bit SSL encryption. We do not store your card details. Payments are processed through PCI-DSS compliant payment gateways.',
      },
      {
        q: 'What should I do if my payment failed but money was deducted?',
        a: 'If money was deducted but the order was not confirmed, the amount will be automatically reversed within 48 hours. If you do not receive the refund within 5 business days, contact us at support@firstpharma.com.',
      },
      {
        q: 'Can I pay in EMI?',
        a: 'Yes, EMI options are available on orders above ₹2,000 for select credit cards. EMI details are shown at checkout depending on your card and bank.',
      },
    ],
  },
  {
    section: 'Account & Privacy',
    icon: '👤',
    questions: [
      {
        q: 'Do I need an account to place an order?',
        a: 'You can browse and add items to your cart without an account. However, creating a free account allows you to track orders, save addresses, view order history, and get personalized recommendations.',
      },
      {
        q: 'How do I reset my password?',
        a: 'Click "Forgot Password" on the Sign In page and enter your registered email. You will receive a password reset link within a few minutes. Check your spam folder if you do not see it.',
      },
      {
        q: 'How does First Pharma use my personal data?',
        a: 'We use your data only to process orders, provide support, and improve your experience. We never sell your personal information to third parties. Read our full Privacy Policy for details.',
      },
      {
        q: 'How do I delete my account?',
        a: 'You can request account deletion by emailing support@firstpharma.com. Account deletion is permanent and removes all order history. Processing takes up to 48 hours.',
      },
    ],
  },
];

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-2xl transition-all duration-300 ${open ? 'border-cyan-200 bg-cyan-50/40' : 'border-slate-100 bg-white hover:border-slate-200'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className={`text-sm font-semibold leading-snug transition-colors duration-200 ${open ? 'text-[#1e3a5f]' : 'text-slate-700'}`}>{q}</span>
        <span className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${open ? 'bg-cyan-500 text-white rotate-45' : 'bg-slate-100 text-slate-400'}`}>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16M4 12h16" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-5 pb-4 text-sm text-slate-500 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="min-h-screen bg-white pt-20">

      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-50 via-white to-cyan-50/30 py-14 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse block" />
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Help Center</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#1e3a5f] mb-4">
            Frequently Asked <span className="text-cyan-500">Questions</span>
          </h1>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed">
            Find answers to the most common questions about orders, products, payments, and more.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-14">

        {/* Section tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {FAQ_DATA.map((sec, i) => (
            <button
              key={i}
              onClick={() => setActiveSection(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeSection === i
                  ? 'bg-gradient-to-r from-[#1e3a5f] to-cyan-600 text-white shadow-md shadow-cyan-200/40'
                  : 'bg-slate-100 text-slate-600 hover:bg-cyan-50 hover:text-cyan-700'
              }`}
            >
              <span>{sec.icon}</span>
              <span>{sec.section}</span>
            </button>
          ))}
        </div>

        {/* Questions */}
        <div className="flex flex-col gap-3">
          {FAQ_DATA[activeSection].questions.map((item, i) => (
            <AccordionItem key={i} q={item.q} a={item.a} />
          ))}
        </div>

        {/* Still need help */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#1e3a5f] to-cyan-700 p-8 text-center text-white">
          <h3 className="text-xl font-black mb-2">Still have questions?</h3>
          <p className="text-cyan-100 text-sm mb-6">Our support team is available Mon–Sat, 9AM to 7PM.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="mailto:support@firstpharma.com" className="inline-flex items-center gap-2 bg-white text-[#1e3a5f] font-bold text-sm px-5 py-2.5 rounded-xl hover:shadow-lg transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              support@firstpharma.com
            </a>
            <a href="tel:1800XXXXXXX" className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-white/20 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              1800-XXX-XXXX
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}