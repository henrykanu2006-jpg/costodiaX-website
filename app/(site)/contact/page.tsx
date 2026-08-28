import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with CostodiaX Group for customs clearing, bonded terminal storage, haulage, or to sign up for the Voya platform.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us — CostodiaX Group",
    description: "Contact CostodiaX Group for customs clearing, bonded terminal storage, haulage or to sign up for the Voya platform.",
    url: "/contact",
    type: "website",
  },
};

const details = [
  {
    label: "Phone",
    value: "0816 711 7297",
    href: "tel:+2348167117297",
    icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.9 1.18 2 2 0 012.91 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />,
  },
  {
    label: "Email",
    value: "admin@costodiax.com",
    href: "mailto:admin@costodiax.com",
    icon: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
  },
  {
    label: "Head Office",
    value: "11 East West Road, Akpajo\nRivers State, Nigeria",
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    label: "Bonded Terminal",
    value: "Port Harcourt, Rivers State\nLicensed bonded storage facility",
    icon: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </>
    ),
  },
  {
    label: "Primary Port",
    value: "Onne Port, Rivers State\nDaily operations",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </>
    ),
  },
];

const serviceOptions = [
  "Customs clearing & forwarding",
  "Bonded terminal storage — Port Harcourt",
  "Haulage & transport",
  "Freight forwarding",
  "Voya platform — sign up",
  "Voya platform — question",
  "General enquiry",
];

export default function ContactPage() {
  return (
    <>
      <div className="min-h-[65vh] relative flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/contact-hero.jpg)" }} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,18,0.6)_0%,rgba(5,10,18,0.98)_100%)]" />
        <div className="relative z-[2] px-[6%] pb-20">
          <Reveal>
            <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">Contact Us</div>
            <h1 className="font-serif text-[clamp(40px,6vw,80px)] font-bold text-white tracking-[-0.03em] leading-[1.06] max-w-[640px] mb-5">Let&apos;s talk about<br />your logistics.</h1>
            <p className="text-[17px] text-text-2 leading-[1.78] max-w-[520px]">Our team is based in Port Harcourt. Whether you need cargo cleared, goods stored, or your company onboarded onto Voya — reach out and we respond within 24 hours.</p>
          </Reveal>
        </div>
      </div>

      <section className="px-[6%] py-[100px]">
        <div className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-20 max-[960px]:gap-10 items-start">
          <div>
            <Reveal>
              <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">Our details</div>
              <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-4">We are based in<br />Port Harcourt.</h2>
              <div className="w-10 h-0.5 bg-orange rounded-sm mb-11" />
              <p className="text-[17px] text-text-2 leading-[1.78] mb-11">CostodiaX Group operates daily at Onne Port and maintains our bonded terminal facility in Port Harcourt — at the heart of Nigeria&apos;s logistics hub.</p>
            </Reveal>
            <div className="flex flex-col gap-2">
              {details.map((d) => (
                <Reveal key={d.label}>
                  <div className="flex gap-4.5 items-start p-5.5 bg-card border border-border rounded-lg">
                    <div className="w-[46px] h-[46px] rounded-lg bg-orange/10 border border-orange/15 flex items-center justify-center shrink-0">
                      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{d.icon}</svg>
                    </div>
                    <div>
                      <div className="text-[10.5px] font-bold text-text-3 uppercase tracking-wider mb-1">{d.label}</div>
                      {d.href ? (
                        <div className="text-[14.5px] text-text font-medium leading-relaxed"><a href={d.href} className="contact-link">{d.value}</a></div>
                      ) : (
                        <div className="text-[14.5px] text-text font-medium leading-relaxed whitespace-pre-line">{d.value}</div>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay="d2">
            <form action="https://formspree.io/f/xnjeodoj" method="POST" className="bg-card border border-border rounded-2xl p-10">
              <div className="text-[17px] font-semibold text-white mb-1.5">Send us a message</div>
              <div className="text-[13.5px] text-text-3 mb-8">We read every message and respond personally — no bots.</div>
              <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-text-2 mb-2">First name</label>
                  <input type="text" name="first_name" placeholder="First name" className="w-full px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-2 mb-2">Last name</label>
                  <input type="text" name="last_name" placeholder="Last name" className="w-full px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-xs font-medium text-text-2 mb-2">Company</label>
                <input type="text" name="company" placeholder="Your company" className="w-full px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange" />
              </div>
              <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-text-2 mb-2">Email</label>
                  <input type="email" name="email" placeholder="you@company.com" className="w-full px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-2 mb-2">Phone</label>
                  <input type="tel" name="phone" placeholder="080xxxxxxxx" className="w-full px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-xs font-medium text-text-2 mb-2">What do you need?</label>
                <select name="plan" className="w-full px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange">
                  <option value="">Select a service</option>
                  {serviceOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-xs font-medium text-text-2 mb-2">Message</label>
                <textarea name="message" placeholder="Tell us about your cargo, your company, or what you need..." className="w-full min-h-[130px] px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange resize-y" />
              </div>
              <input type="hidden" name="_subject" value="New Enquiry — CostodiaX Website" />
              <input type="hidden" name="_next" value="https://www.costodiax.com/contact" />
              <button type="submit" className="w-full justify-center flex items-center gap-2 py-4 rounded-lg text-[15px] font-semibold bg-orange text-white hover:bg-orange-2 transition-colors">
                Send message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
              <div className="flex items-center gap-2.5 mt-5 p-3.5 bg-[#10B981]/[0.06] border border-[#10B981]/15 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-[#10B981] shrink-0 animate-pulse" />
                <span className="text-[13px] text-[#10B981]/90">We respond within 24 hours — usually much faster.</span>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <div className="bg-[linear-gradient(135deg,#EA580C_0%,#C2410C_100%)] px-[6%] py-20 text-center relative overflow-hidden">
        <h2 className="font-serif text-[clamp(28px,4vw,50px)] text-white font-bold max-w-[680px] mx-auto mb-4 leading-[1.15] tracking-[-0.025em]">Running a logistics company?<br />Try Voya Platform.</h2>
        <p className="text-[17px] text-white/80 max-w-[480px] mx-auto mb-10 leading-[1.7]">Join Nigerian logistics companies managing their jobs, invoices, terminal and transport on Voya — starting at ₦45,000/month.</p>
        <div className="flex gap-4 justify-center flex-wrap relative z-[2]">
          <Link href="/voya#signup" className="px-6.5 py-3.5 rounded-lg text-sm font-bold no-underline bg-white text-orange">Start free trial</Link>
          <Link href="/voya#pricing" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-white/15 text-white border border-white/30">See pricing</Link>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </>
  );
}
