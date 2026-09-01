import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "CostodiaX Group — Nigeria's Premier Logistics Conglomerate",
    description:
      "CostodiaX delivers customs clearing, bonded terminal storage in Port Harcourt, haulage and the Voya logistics platform across Nigeria.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CostodiaX Group",
    description: "Nigeria's premier logistics conglomerate — port to door, sea to shelf.",
  },
};

const services = [
  {
    title: "Customs Clearing",
    desc: "Fast, accurate customs documentation through our operating base at Onne Port, Rivers State.",
    href: "/services/customs-clearance",
    icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: "Bonded Terminal",
    desc: "Licensed bonded storage in Port Harcourt with automated daily billing through Voya.",
    href: "/services/port-terminal",
    icon: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </>
    ),
  },
  {
    title: "Haulage & Transport",
    desc: "Cargo movement from port to warehouse across Nigeria, coordinated through trusted third-party transport partners, tracked live.",
    href: "/services/haulage-transport",
    icon: (
      <>
        <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </>
    ),
  },
  {
    title: "Import Documentation",
    desc: "Complete Form M, PAAR, Bill of Lading and NCS documentation handled accurately.",
    href: "/services/customs-clearance",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </>
    ),
  },
  {
    title: "Freight Forwarding",
    desc: "International cargo coordination by sea and air from any origin into Onne Port.",
    href: "/services/freight-forwarding",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </>
    ),
  },
  {
    title: "Voya Platform",
    desc: "Our SaaS platform for logistics companies. Jobs, invoices, terminal, transport — all in one place.",
    href: "/voya",
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
  },
];

const whyPoints = [
  "Technology-first — not adapted from generic software",
  "Built specifically for Nigerian customs and ports",
  "19-year-old founder, moving fast",
  "Backed by the Voya platform for full operational control",
];

const trustPoints = [
  {
    title: "Full shipment visibility",
    desc: "Every job gets a tracking number you can check anytime on our Track Shipment page — no chasing us for updates.",
    icon: (
      <>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </>
    ),
  },
  {
    title: "Licensed bonded terminal",
    desc: "Our bonded storage facility in Port Harcourt is a licensed operation, not an informal arrangement.",
    icon: (
      <>
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </>
    ),
  },
  {
    title: "You reach a real person",
    desc: "Phone, WhatsApp and email all go to our actual Nigerian team — not a call centre or a chatbot.",
    icon: (
      <>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.9 1.18 2 2 0 012.91 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </>
    ),
  },
  {
    title: "Registered Nigerian company",
    desc: "CostodiaX Group is a registered company operating from Port Harcourt, Rivers State.",
    icon: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </>
    ),
  },
];

const faqPreview = [
  { q: "What ports do you operate at?", a: "Our operating base is Onne Port, Rivers State, alongside our licensed bonded terminal in Port Harcourt." },
  { q: "Can I track my shipment?", a: "Yes — once your shipment is in our system, check its status anytime on our Track Shipment page." },
  { q: "How do I request a quote?", a: "Use our Request a Quote form with your cargo details, and we'll get back to you directly." },
  { q: "Do you handle container haulage?", a: "Yes, coordinated through trusted third-party transport partners, with every trip tracked." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen relative flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero-ship.jpg)" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(5,10,18,0.97)_0%,rgba(5,10,18,0.88)_50%,rgba(5,10,18,0.45)_100%)]" />
        <div className="relative z-[2] px-[6%] pt-[180px] pb-[120px] max-w-[760px]">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-orange/10 border border-orange/25 rounded-full text-[11px] font-bold text-orange tracking-[0.14em] uppercase mb-8 animate-fadeUp">
            <div className="w-1.5 h-1.5 rounded-full bg-orange animate-pulseSoft" />
            Nigeria&apos;s Premier Logistics Group
          </div>
          <h1 className="font-serif text-[clamp(46px,7vw,88px)] font-bold leading-[1.04] text-white tracking-[-0.03em] mb-2 animate-fadeUp [animation-delay:0.2s] opacity-0">
            Moving Africa&apos;s
            <br />
            Trade <em className="not-italic text-orange">Forward.</em>
          </h1>
          <div className="font-serif text-[clamp(18px,3vw,30px)] text-gold font-normal italic mb-6 animate-fadeUp [animation-delay:0.35s] opacity-0">
            Port to door. Sea to shelf.
          </div>
          <p className="text-[17px] text-[rgba(226,232,240,0.7)] leading-[1.8] mb-12 max-w-[540px] animate-fadeUp [animation-delay:0.5s] opacity-0">
            CostodiaX Group delivers end-to-end logistics across Nigeria and West Africa — customs clearing, bonded terminal storage in Port Harcourt, haulage, and the Voya platform powering logistics companies continent-wide.
          </p>
          <div className="flex gap-4 flex-wrap animate-fadeUp [animation-delay:0.7s] opacity-0">
            <Link href="/services" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline inline-flex items-center gap-2 transition-all bg-orange text-white hover:bg-orange-2 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(234,88,12,0.35)]">
              Our Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/voya" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline inline-flex items-center gap-2 transition-all bg-transparent text-white border border-white/20 hover:border-white hover:-translate-y-0.5">
              Voya Platform
            </Link>
            <Link href="/quote" className="px-6.5 py-3.5 rounded-lg text-sm font-bold no-underline inline-flex items-center gap-2 transition-all bg-gold text-[#0A0A0A] hover:bg-[#D97706] hover:-translate-y-0.5">
              Get a quote
            </Link>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-orange py-3 overflow-hidden border-t border-white/10">
        <div className="flex w-max animate-ticker">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 px-5 whitespace-nowrap text-white text-[13px] font-semibold tracking-wide">
              <span>ONNE PORT</span><span>·</span><span>BONDED TERMINAL — PORT HARCOURT</span><span>·</span><span>CUSTOMS CLEARING</span><span>·</span>
              <span>FREIGHT FORWARDING</span><span>·</span><span>HAULAGE &amp; TRANSPORT</span><span>·</span><span>VOYA PLATFORM</span><span>·</span>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="px-[6%] py-[100px]">
        <Reveal className="max-w-[600px] mb-14">
          <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">What we do</div>
          <h2 className="font-serif text-[clamp(32px,4.5vw,54px)] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-4">Complete logistics,<br />one group.</h2>
          <div className="w-10 h-0.5 bg-orange rounded-sm mb-9" />
          <p className="text-[17px] text-text-2 leading-[1.78] max-w-[540px]">From your cargo arriving at Onne Port to reaching your warehouse — CostodiaX handles every step.</p>
        </Reveal>
        <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {services.map((s) => (
            <div key={s.title} className="group bg-card hover:bg-[rgba(20,30,50,0.9)] p-10 transition-colors relative overflow-hidden">
              <div className="w-[52px] h-[52px] rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-3">{s.title}</h3>
              <p className="text-[13.5px] text-text-3 leading-[1.7] mb-4.5">{s.desc}</p>
              <Link href={s.href} className="text-xs font-semibold text-orange no-underline inline-flex items-center gap-1.5">Learn more →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* PORT IMAGE STRIP */}
      <div className="relative h-[460px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/port-crane.jpg)" }} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#060D1A_0%,transparent_20%,transparent_65%,#060D1A_100%)]" />
        <Reveal className="!absolute bottom-[60px] left-[6%] right-[6%] flex justify-between items-end">
          <div className="font-serif text-[clamp(24px,4vw,46px)] text-white font-bold leading-[1.15] tracking-[-0.02em]">Built on strong<br />Onne Port <span className="text-gold">operations.</span></div>
          <div className="px-5.5 py-3 bg-[rgba(5,10,18,0.85)] border border-gold text-gold rounded-md text-xs font-bold tracking-[0.08em] whitespace-nowrap backdrop-blur-sm max-[700px]:hidden">
            Onne Port · Bonded Terminal, Port Harcourt
          </div>
        </Reveal>
      </div>

      {/* WHY COSTODIAX */}
      <div className="grid grid-cols-2 max-[900px]:grid-cols-1">
        <div className="relative overflow-hidden min-h-[480px]">
          <div className="absolute inset-0 bg-cover bg-center max-[900px]:h-[280px]" style={{ backgroundImage: "url(/images/why-costodiax.png)" }} />
          <div className="absolute inset-0 bg-[rgba(5,10,18,0.5)]" />
        </div>
        <div className="bg-orange px-14 py-[72px] flex flex-col justify-center">
          <div className="text-[11px] font-bold text-white/65 tracking-[0.16em] uppercase mb-4">Why CostodiaX?</div>
          <h2 className="font-serif text-[clamp(26px,4vw,46px)] text-white font-bold tracking-[-0.025em] leading-[1.12] mb-8">Why serious companies<br />choose us.</h2>
          <div className="flex flex-col">
            {whyPoints.map((p) => (
              <div key={p} className="flex gap-3 items-center py-3 border-b border-white/15 last:border-none">
                <span className="text-white font-bold text-base">✓</span>
                <span className="text-white/90 text-sm">{p}</span>
              </div>
            ))}
          </div>
          <div className="mt-9">
            <Link href="/contact" className="px-6.5 py-3.5 rounded-lg text-sm font-bold no-underline inline-flex items-center gap-2 bg-white text-orange">
              Talk to us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </div>

      {/* TRUST */}
      <section className="px-[6%] py-[100px]">
        <Reveal className="!block text-center max-w-[640px] mx-auto mb-14">
          <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">Why trust us</div>
          <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-4">A young company,<br />built to last.</h2>
          <p className="text-[17px] text-text-2 leading-[1.78]">CostodiaX is new — registered in June 2026. We don&apos;t claim decades of history. What we do have is a licensed operation, real technology, and a team that answers the phone.</p>
        </Reveal>
        <div className="grid grid-cols-2 max-[700px]:grid-cols-1 gap-5 max-w-[900px] mx-auto">
          {trustPoints.map((t, i) => (
            <Reveal key={t.title} delay={(["d1", "d2", "d3", "d4"] as const)[i % 4]}>
              <div className="flex gap-4 items-start bg-card border border-border rounded-xl p-6 h-full">
                <div className="w-11 h-11 rounded-lg bg-orange/10 border border-orange/20 flex items-center justify-center shrink-0">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{t.icon}</svg>
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-white mb-1.5">{t.title}</div>
                  <div className="text-[13.5px] text-text-3 leading-relaxed">{t.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VOYA TEASER */}
      <section className="px-[6%] py-[100px] bg-dark border-t border-b border-border">
        <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-20 items-center">
          <Reveal>
            <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">Voya Platform — Powered by CostodiaX</div>
            <h2 className="font-serif text-[clamp(32px,4.5vw,54px)] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-4">The software running<br />modern logistics<br />in <em className="not-italic text-orange">Africa.</em></h2>
            <div className="w-10 h-0.5 bg-orange rounded-sm mb-9" />
            <p className="text-[17px] text-text-2 leading-[1.78] mb-8">Voya is our SaaS platform for clearing agents and logistics companies. Jobs, invoices, terminal, transport, client portal — starting at ₦45,000/month.</p>
            <div className="flex flex-col gap-3 mb-9">
              {[
                "Real-time client cargo tracking portal",
                "Nigerian customs invoicing — VAT, CISS, ETLS at CBN rate",
                "Bonded terminal daily billing and weekly reports",
                "Staff role management — port runners, finance, drivers",
              ].map((f) => (
                <div key={f} className="flex gap-3 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange shrink-0" />
                  <span className="text-sm text-text-2">{f}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3.5 flex-wrap">
              <Link href="/voya" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-orange text-white hover:bg-orange-2">Explore Voya</Link>
              <Link href="/voya#pricing" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-transparent text-white border border-white/20 hover:border-white">See pricing</Link>
            </div>
          </Reveal>
          <Reveal delay="d2">
            <div className="bg-card border border-white/10 rounded-2xl overflow-hidden shadow-[0_48px_96px_rgba(0,0,0,0.6)]">
              <div className="bg-white/[0.03] border-b border-border px-4 py-3 flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <div className="flex-1 text-center text-[9px] text-text-3">Voya — Powered by CostodiaX</div>
              </div>
              <div className="p-5">
                <div className="text-sm font-semibold text-white mb-4">Good afternoon, Henry.</div>
                <div className="grid grid-cols-3 gap-2 mb-3.5">
                  {[
                    { label: "Active Jobs", value: "12", color: "text-orange" },
                    { label: "Revenue", value: "$48k", color: "text-white" },
                    { label: "Terminal", value: "7", color: "text-gold" },
                  ].map((k) => (
                    <div key={k.label} className="bg-white/[0.03] border border-border rounded-lg p-3">
                      <div className="text-[8px] text-text-3 uppercase tracking-wider mb-1">{k.label}</div>
                      <div className={`font-serif text-xl ${k.color}`}>{k.value}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-white/[0.02] border border-border rounded-lg overflow-hidden">
                  {[
                    { id: "CX-2026-001 — Generator Sets", status: "Duties Paid", color: "text-[#10B981] bg-[#10B981]/10" },
                    { id: "CX-2026-002 — Medical Equip", status: "Under Exam", color: "text-orange bg-orange/10" },
                    { id: "CX-2026-003 — Industrial Parts", status: "Released", color: "text-[#3B82F6] bg-[#3B82F6]/10" },
                  ].map((row) => (
                    <div key={row.id} className="flex justify-between items-center px-3 py-2.5 border-b border-white/[0.03] last:border-none text-[10px]">
                      <span className="text-text-2 font-medium">{row.id}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-semibold ${row.color}`}>{row.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="px-[6%] py-[100px] bg-dark border-t border-b border-border">
        <Reveal className="!block text-center max-w-[600px] mx-auto mb-12">
          <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">FAQ</div>
          <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold text-white tracking-[-0.025em] leading-[1.1]">Quick answers.</h2>
        </Reveal>
        <div className="grid grid-cols-2 max-[700px]:grid-cols-1 gap-5 max-w-[900px] mx-auto mb-10">
          {faqPreview.map((f, i) => (
            <Reveal key={f.q} delay={(["d1", "d2", "d3", "d4"] as const)[i % 4]}>
              <div className="bg-card border border-border rounded-xl p-6 h-full">
                <div className="text-[15px] font-semibold text-white mb-2">{f.q}</div>
                <div className="text-[13.5px] text-text-3 leading-relaxed">{f.a}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center">
          <Link href="/faq" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-transparent text-white border border-white/20 hover:border-white">See all FAQs</Link>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-[linear-gradient(135deg,#EA580C_0%,#C2410C_100%)] px-[6%] py-[90px] text-center relative overflow-hidden">
        <div className="relative z-[2]">
          <h2 className="font-serif text-[clamp(28px,4vw,52px)] text-white font-bold max-w-[680px] mx-auto mb-4 leading-[1.15] tracking-[-0.025em]">Ready to clear your cargo<br />or grow your logistics business?</h2>
          <p className="text-[17px] text-white/80 max-w-[480px] mx-auto mb-10 leading-[1.7]">Contact our team today or sign up for Voya and start running your operations properly.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="px-6.5 py-3.5 rounded-lg text-sm font-bold no-underline bg-white text-orange">Contact us</Link>
            <Link href="/voya#signup" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-white/15 text-white border border-white/30">Request early access</Link>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </>
  );
}
