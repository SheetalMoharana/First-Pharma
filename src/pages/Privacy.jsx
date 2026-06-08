import { useEffect, useRef, useState } from 'react';

const SECTIONS = [
  {
    id: 'overview',
    title: 'Overview',
    content: `First Pharma ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website (www.firstpharma.com) or make a purchase.

By using our platform, you consent to the practices described in this policy. If you do not agree, please discontinue use of our website. This policy is compliant with the Information Technology Act, 2000 and the IT (Amendment) Act, 2008 of India.`,
  },
  {
    id: 'collection',
    title: 'Information We Collect',
    content: `We collect information you provide directly to us, including:

Personal Identification: Name, email address, phone number, and date of birth when you register or place an order.

Delivery Information: Shipping address, billing address, and delivery preferences.

Payment Information: We collect payment method details (card type, last 4 digits) for order processing. Full card numbers are processed by our payment gateway partners and are never stored on our servers.

Health-related Preferences: Optional information such as conditions you are recovering from, to help us recommend suitable products. This is voluntary and never shared with third parties.

Usage Data: Pages visited, products viewed, time spent, browser type, IP address, and device information collected automatically through cookies and analytics tools.`,
  },
  {
    id: 'usage',
    title: 'How We Use Your Information',
    content: `We use your information for the following purposes:

Order Processing: To confirm, process, ship, and track your orders, and handle returns and refunds.

Account Management: To create and manage your account, authenticate logins, and maintain order history.

Customer Support: To respond to your queries, complaints, and support tickets.

Communications: To send order confirmations, shipping updates, and important account notifications via email and SMS.

Marketing: With your consent, to send promotional offers, product recommendations, and newsletters. You can opt out at any time.

Improvement: To analyze usage patterns, improve our website, personalize your experience, and develop new features.

Legal Compliance: To comply with applicable laws, regulations, and legal processes.`,
  },
  {
    id: 'sharing',
    title: 'Information Sharing',
    content: `First Pharma does not sell, rent, or trade your personal information to third parties for their marketing purposes. We may share your information only in the following circumstances:

Service Providers: With courier partners, payment processors, and technology vendors who assist in operating our platform. These parties are contractually bound to keep your data confidential and use it only for the services they provide to us.

Legal Requirements: When required by law, court order, or government authority, or to protect the rights, property, or safety of First Pharma, our customers, or others.

Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity. We will notify you before this occurs.

With Your Consent: In any other circumstances, only with your explicit consent.`,
  },
  {
    id: 'cookies',
    title: 'Cookies & Tracking',
    content: `We use cookies and similar tracking technologies to enhance your browsing experience. Types of cookies we use:

Essential Cookies: Required for the website to function — session management, cart contents, login state.

Analytics Cookies: Used to understand how visitors interact with our website (e.g., Google Analytics). Data is anonymized and aggregated.

Preference Cookies: Remember your settings and preferences for future visits.

Marketing Cookies: Used to deliver relevant advertisements. These are only placed with your consent.

You can manage cookie preferences through your browser settings. Disabling certain cookies may affect website functionality. We respect Do Not Track (DNT) signals from browsers.`,
  },
  {
    id: 'security',
    title: 'Data Security',
    content: `We implement industry-standard security measures to protect your personal information:

All data transmitted between your browser and our servers is encrypted using 256-bit SSL (HTTPS). Payment information is processed through PCI-DSS compliant gateways. We do not store full credit/debit card numbers.

Access to personal data is restricted to authorized personnel only, on a need-to-know basis. Our systems undergo regular security audits and vulnerability assessments.

Despite our best efforts, no method of transmission over the internet is 100% secure. We encourage you to use strong passwords and keep your account credentials confidential.`,
  },
  {
    id: 'rights',
    title: 'Your Rights',
    content: `You have the following rights regarding your personal data:

Access: Request a copy of the personal information we hold about you.

Correction: Request correction of inaccurate or incomplete data.

Deletion: Request deletion of your account and associated personal data. Note that some data may be retained for legal or operational reasons.

Opt-Out: Unsubscribe from marketing emails at any time using the "Unsubscribe" link in any email, or by contacting us.

Data Portability: Request your data in a machine-readable format.

To exercise any of these rights, email us at support@firstpharma.com. We will respond within 30 days.`,
  },
  {
    id: 'children',
    title: "Children's Privacy",
    content: `First Pharma is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal data, please contact us immediately at support@firstpharma.com and we will delete the information promptly.`,
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make significant changes, we will notify you by email or by posting a prominent notice on our website.

The "Last Updated" date at the bottom of this page indicates when the policy was last revised. We encourage you to review this policy periodically.`,
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact our Privacy Team:

Email: support@firstpharma.com
Phone: 1800-XXX-XXXX (Mon–Sat, 9AM–7PM IST)
Address: First Pharma, [Your Business Address], India

Last updated: June 2026`,
  },
];

export default function PrivacyPolicy() {
  const [active, setActive] = useState('overview');
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
            Privacy <span className="text-cyan-500">Policy</span>
          </h1>
          <p className="text-slate-500 text-base leading-relaxed">
            Your privacy matters to us. Learn how First Pharma collects, uses, and protects your data.
          </p>
        </div>
      </div>

      {/* Trust badges */}
      <div className="border-b border-slate-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-5">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: '🔒', label: '256-bit SSL Encrypted' },
              { icon: '🛡️', label: 'No Data Selling' },
              { icon: '✅', label: 'IT Act 2000 Compliant' },
              { icon: '🔐', label: 'PCI-DSS Payments' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-lg">{item.icon}</span>
                <span className="text-xs font-bold text-slate-600">{item.label}</span>
              </div>
            ))}
          </div>
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

            {/* Contact box */}
            <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#1e3a5f] to-cyan-700 p-8 text-center text-white">
              <h3 className="text-xl font-black mb-2">Questions about your privacy?</h3>
              <p className="text-cyan-100 text-sm mb-6">Our team will respond to all privacy requests within 30 days.</p>
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
          </main>
        </div>
      </div>
    </div>
  );
}