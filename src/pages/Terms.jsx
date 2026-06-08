import { useEffect, useRef, useState } from 'react';

const SECTIONS = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: `By accessing or using the First Pharma website (www.firstpharma.com) or placing an order, you confirm that you are at least 18 years of age and have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please discontinue use of our platform immediately.

These terms apply to all visitors, users, and customers of First Pharma. We reserve the right to update or modify these terms at any time without prior notice. Continued use of our website after changes constitutes acceptance of the revised terms.`,
  },
  {
    id: 'products',
    title: 'Products & Availability',
    content: `All physiotherapy and medical equipment listed on First Pharma are subject to availability. We reserve the right to discontinue any product at any time without notice. Product images are for illustrative purposes only and may differ slightly from the actual product.

We take every care to ensure product descriptions and specifications are accurate. However, we do not warrant that product descriptions are error-free. In the event of an error, we reserve the right to cancel the order and issue a full refund. First Pharma sells only physiotherapy equipment, rehabilitation devices, and related accessories — we do not sell medicines, prescription drugs, or pharmacy products.`,
  },
  {
    id: 'pricing',
    title: 'Pricing & Payments',
    content: `All prices on First Pharma are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise. Prices are subject to change without prior notice. The price at the time of placing the order will be the final billed amount.

We accept UPI, credit/debit cards, net banking, EMI, and Cash on Delivery (for eligible orders and pincodes). All online payments are processed through secure, PCI-DSS compliant payment gateways. First Pharma does not store your payment card information.

In case of a failed payment where the amount has been deducted, an automatic refund will be initiated within 48 hours to the original payment method.`,
  },
  {
    id: 'orders',
    title: 'Orders & Cancellations',
    content: `Once an order is placed, you will receive a confirmation email with your order details. Orders can be cancelled within 12 hours of placement, provided the item has not been dispatched. To cancel, go to "My Orders" in your account or contact our support team.

If an order is cancelled by First Pharma due to stock unavailability, pricing errors, or other operational reasons, a full refund will be issued within 5–7 business days. We reserve the right to refuse or cancel any order at our discretion, including orders that appear fraudulent or in violation of these terms.`,
  },
  {
    id: 'shipping',
    title: 'Shipping & Delivery',
    content: `First Pharma delivers across 18,000+ pincodes in India. Delivery timelines are estimates and are not guaranteed. Standard delivery takes 2–5 business days. Express delivery (1–2 days) is available for select pincodes.

Shipping charges, if applicable, are displayed at checkout. Risk of loss and title for items purchased passes to you upon delivery. First Pharma is not responsible for delays caused by courier partners, natural disasters, government actions, or other circumstances beyond our control.`,
  },
  {
    id: 'returns',
    title: 'Returns & Refunds',
    content: `We offer a 30-day return policy for unused products in original packaging. Certain products including opened hygiene items, used braces or supports, and customized products are not eligible for return. Detailed return eligibility is mentioned on each product page.

Refunds are processed within 5–7 business days of receiving and inspecting the returned item. Refunds are credited to the original payment method. For Cash on Delivery orders, refunds are processed via bank transfer within 7–10 business days.`,
  },
  {
    id: 'intellectual',
    title: 'Intellectual Property',
    content: `All content on the First Pharma website including text, graphics, logos, images, product descriptions, and software is the property of First Pharma or its content suppliers and is protected by applicable intellectual property laws.

You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise exploit any content from our website without express written permission from First Pharma. Unauthorized use of our content may result in legal action.`,
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    content: `First Pharma provides physiotherapy equipment and accessories for general rehabilitation and wellness use. We strongly recommend consulting a licensed physiotherapist or medical professional before using any device for treatment purposes.

To the fullest extent permitted by law, First Pharma shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our products or website. Our maximum liability in any claim shall not exceed the amount paid by you for the product in question.`,
  },
  {
    id: 'governing',
    title: 'Governing Law',
    content: `These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.

If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.`,
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: `For any questions regarding these Terms and Conditions, please reach out to us:

Email: support@firstpharma.com
Phone: 1800-XXX-XXXX (Mon–Sat, 9AM–7PM)
Address: First Pharma, [Your Business Address], India

Last updated: June 2026`,
  },
];

export default function TermsAndConditions() {
  const [active, setActive] = useState('acceptance');
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white pt-20">

      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-50 via-white to-cyan-50/30 py-14 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#1e3a5f] mb-4">
            Terms & <span className="text-cyan-500">Conditions</span>
          </h1>
          <p className="text-slate-500 text-base leading-relaxed">
            Please read these terms carefully before using First Pharma. Last updated June 2026.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex gap-10">

          {/* Sticky Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 px-2">Contents</p>
              <nav className="flex flex-col gap-0.5">
                {SECTIONS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                      active === s.id
                        ? 'bg-gradient-to-r from-[#1e3a5f] to-cyan-600 text-white shadow-sm'
                        : 'text-slate-500 hover:bg-white hover:text-[#1e3a5f]'
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">
            <div className="flex flex-col gap-10">
              {SECTIONS.map((s) => (
                <section
                  key={s.id}
                  id={s.id}
                  ref={(el) => (sectionRefs.current[s.id] = el)}
                  className="scroll-mt-28"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1.5 h-7 rounded-full bg-gradient-to-b from-[#1e3a5f] to-cyan-500" />
                    <h2 className="text-xl font-black text-[#1e3a5f]">{s.title}</h2>
                  </div>
                  <div className="bg-slate-50/60 rounded-2xl p-6 border border-slate-100">
                    {s.content.split('\n\n').map((para, i) => (
                      <p key={i} className="text-sm text-slate-600 leading-relaxed mb-3 last:mb-0">{para}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}