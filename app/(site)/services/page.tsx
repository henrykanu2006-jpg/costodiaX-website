import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "CostodiaX provides customs clearing, bonded terminal storage in Port Harcourt, haulage, freight forwarding and import documentation.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Services — CostodiaX Group",
    description:
      "Customs clearing, bonded terminal storage in Port Harcourt, haulage, freight forwarding and import documentation across Nigeria.",
    url: "/services",
    type: "website",
  },
};

const ports = [
  { name: "Onne Port", note: "Rivers State — our primary operating base, daily operations" },
  { name: "Bonded Terminal", note: "Port Harcourt, Rivers State — licensed bonded storage" },
];

const clearingChecklist = [
  "Form M application and processing",
  "PAAR filing with Nigeria Customs Service",
  "Bill of Lading and shipping document handling",
  "Duty calculation and payment coordination",
  "NCS examination attendance",
  "Combined Certificate of Value and Origin",
];

const moreServices = [
  {
    title: "Haulage & Transport",
    desc: "Cargo movement from port gate to warehouse across Nigeria, coordinated through trusted third-party transport partners. Every trip tracked live.",
    points: ["20ft & 40ft containers", "Real-time tracking via Voya", "Proof of delivery"],
    icon: (
      <>
        <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </>
    ),
  },
  {
    title: "Freight Forwarding",
    desc: "International cargo coordination by sea and air — from any origin to any Nigerian port with full documentation and real-time visibility.",
    points: ["Sea and air freight", "Origin to destination", "Full documentation"],
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </>
    ),
  },
  {
    title: "Import Documentation",
    desc: "Complete handling of every document required by Nigerian Customs — Form M, PAAR, Bill of Lading, Combined Certificate and more.",
    points: ["Form M & PAAR", "HS code advice", "Duty consultancy"],
    icon: (
      <>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="min-h-[65vh] relative flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/services-hero.jpg)" }} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,18,0.6)_0%,rgba(5,10,18,0.98)_100%)]" />
        <div className="relative z-[2] px-[6%] pb-20">
          <Reveal>
            <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">Our Services</div>
            <h1 className="font-serif text-[clamp(40px,6vw,80px)] font-bold text-white tracking-[-0.03em] leading-[1.06] max-w-[700px] mb-5">Port to door.<br />We handle every step.</h1>
            <p className="text-[17px] text-text-2 leading-[1.78] max-w-[540px]">From customs documentation to last-mile delivery — CostodiaX delivers complete logistics solutions across Nigeria and West Africa.</p>
          </Reveal>
        </div>
      </div>

      <section className="px-[6%] py-[100px]">
        <div className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-[72px] max-[960px]:gap-10 items-center">
          <Reveal>
            <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">01 — Customs Clearing</div>
            <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-4">Fast, accurate clearance from our Onne Port base.</h2>
            <p className="text-[17px] text-text-2 leading-[1.78] mb-7">Our team processes customs documentation and duty payments through our operating base at Onne Port, Rivers State — with a licensed bonded terminal for secure storage right in Port Harcourt.</p>
            <ul className="flex flex-col gap-3 mb-9 list-none">
              {clearingChecklist.map((c) => (
                <li key={c} className="flex gap-3 items-start">
                  <span className="text-orange font-bold text-base -mt-0.5">✓</span>
                  <span className="text-sm text-text-2">{c}</span>
                </li>
              ))}
            </ul>
            <Link href="/quote" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-orange text-white hover:bg-orange-2">Get a quote</Link>
          </Reveal>
          <Reveal delay="d2">
            <div className="bg-dark border border-border rounded-2xl p-10">
              <div className="text-xs font-bold text-text-3 tracking-wider uppercase mb-7">Where We Operate</div>
              {ports.map((p) => (
                <div key={p.name} className="flex items-center gap-4 py-4 border-b border-border last:border-none">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange shrink-0" />
                  <div>
                    <div className="text-[15px] font-semibold text-white">{p.name}</div>
                    <div className="text-[12.5px] text-text-3 mt-0.5">{p.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="relative h-[460px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/bonded-terminal.jpg)" }} />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(5,10,18,0.97)_0%,rgba(5,10,18,0.75)_50%,rgba(5,10,18,0.3)_100%)]" />
        <Reveal className="!absolute top-1/2 left-[6%] -translate-y-1/2 max-w-[580px]">
          <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">02 — Bonded Terminal</div>
          <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-5">Secure bonded storage<br />in <span className="text-gold">Port Harcourt.</span></h2>
          <p className="text-base text-[rgba(226,232,240,0.8)] leading-[1.75] mb-8">Our licensed bonded terminal in Port Harcourt provides secure storage for imported goods awaiting customs clearance. Daily storage charges tracked automatically through Voya — full visibility, no surprises.</p>
          <div className="flex gap-3.5 flex-wrap">
            <Link href="/contact" className="px-6.5 py-3.5 rounded-lg text-sm font-bold no-underline bg-gold text-[#0A0A0A]">Enquire about storage</Link>
            <Link href="/voya" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-transparent text-white border border-white/20">See how Voya tracks terminal</Link>
          </div>
        </Reveal>
      </div>

      <section className="px-[6%] py-[100px] bg-dark border-t border-b border-border">
        <Reveal className="max-w-[600px] mb-14">
          <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">More Services</div>
          <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-4">Everything else<br />your cargo needs.</h2>
          <div className="w-10 h-0.5 bg-orange rounded-sm" />
        </Reveal>
        <div className="grid grid-cols-3 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1 gap-5">
          {moreServices.map((s, i) => (
            <Reveal key={s.title} delay={i === 0 ? "d1" : i === 1 ? "d2" : "d3"}>
              <div className="group bg-card border border-border rounded-xl p-9 h-full transition-all hover:border-orange/20 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.4)]">
                <div className="w-[50px] h-[50px] rounded-[11px] bg-orange/10 border border-orange/20 flex items-center justify-center mb-5.5 transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
                </div>
                <h3 className="text-base font-semibold text-white mb-2.5">{s.title}</h3>
                <p className="text-[13.5px] text-text-3 leading-[1.7] mb-4">{s.desc}</p>
                <ul className="flex flex-col gap-2 list-none">
                  {s.points.map((p) => (
                    <li key={p} className="text-[13px] text-text-3 flex gap-2"><span className="text-orange">✓</span>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="bg-[linear-gradient(135deg,#EA580C_0%,#C2410C_100%)] px-[6%] py-20 text-center relative overflow-hidden">
        <h2 className="font-serif text-[clamp(28px,4vw,50px)] text-white font-bold max-w-[680px] mx-auto mb-4 leading-[1.15] tracking-[-0.025em]">Have cargo that needs clearing?</h2>
        <p className="text-[17px] text-white/80 max-w-[480px] mx-auto mb-10 leading-[1.7]">Contact our operations team. We will respond within 24 hours with a clear quote.</p>
        <div className="flex gap-4 justify-center flex-wrap relative z-[2]">
          <Link href="/contact" className="px-6.5 py-3.5 rounded-lg text-sm font-bold no-underline bg-white text-orange">Contact our team</Link>
          <Link href="/voya#signup" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-white/15 text-white border border-white/30">Request early access</Link>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </>
  );
}
