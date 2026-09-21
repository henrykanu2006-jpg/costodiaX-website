import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WaybrixLogo from "@/components/WaybrixLogo";

export const metadata: Metadata = {
  title: "Waybrix Platform",
  description:
    "Waybrix is the operating system Nigerian logistics companies run on. Jobs, customs invoicing, terminal, transport and client portal — live now.",
  alternates: { canonical: "/waybrix" },
  openGraph: {
    title: "Waybrix Platform — Powered by CostodiaX",
    description:
      "The operating system for African logistics. Jobs, invoices, terminal, transport and client portal — live now, starting at $22/month.",
    url: "/waybrix",
    type: "website",
  },
};

const problems = [
  "Clients call every hour asking where their cargo is",
  "Documents lost in email threads",
  "Invoices typed manually in Excel with errors",
  "No way to track storage charges on terminal cargo",
  "No system — everyone calling everyone",
];

const solutions = [
  "Clients track their own cargo through a dedicated portal — no calls",
  "All documents stored and linked to each job",
  "Nigerian customs invoices generated automatically",
  "Terminal storage billed daily, weekly reports auto-sent",
  "Staff see exactly their assigned jobs — no confusion",
];

const jobStages = [
  { label: "Documents received", color: "#F59E0B" },
  { label: "PAAR filed", color: "#F59E0B" },
  { label: "Vessel arrived", color: "#F59E0B" },
  { label: "DO collected", color: "#EA580C" },
  { label: "Duties paid", color: "#EA580C" },
  { label: "Under examination", color: "#EA580C" },
  { label: "Released", color: "#10B981" },
  { label: "Delivered", color: "#10B981" },
];

const features = [
  { n: "01", title: "Jobs & 8-stage tracking", desc: "Every job moves through all 8 stages of the Nigerian clearance process automatically — nothing tracked by memory or WhatsApp." },
  { n: "02", title: "Nigerian customs invoicing", desc: "Invoices with VAT (7.5%), CISS (1% of CIF), ETLS (0.5% of CIF) and duty advance — all calculated automatically at your CBN rate with PDF download." },
  { n: "03", title: "Bonded terminal management", desc: "Log cargo, set daily rates, track storage charges from day one. Own terminal and third-party terminals tracked separately. Weekly reports generated automatically." },
  { n: "04", title: "Client cargo portal", desc: "Your clients log in and see their shipments, documents and invoices in real time. Personalised greeting. No more “where is my cargo?” calls to your office." },
  { n: "05", title: "Staff role management", desc: "Port runners see only their assigned jobs. Finance officers see only invoices. Drivers see their trips. Each role gets exactly the access they need." },
];

const proFeatures = [
  "Full access for your whole team",
  "Jobs, terminal, and transport tracking",
  "Invoicing and the client portal",
  "Nigeria Customs duty calculator",
  "Cancel any time, no lock-in",
];

export default function WaybrixPage() {
  return (
    <>
      <div className="min-h-[75vh] relative flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/waybrix-hero.jpg)" }} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,18,0.6)_0%,rgba(5,10,18,0.98)_100%)]" />
        <div className="relative z-[2] px-[6%] pb-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <WaybrixLogo size={36} />
              <div className="flex items-center gap-3">
                <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase">Waybrix Platform — Powered by CostodiaX</div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#10B981] tracking-[0.1em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulseSoft" />
                  Live now
                </div>
              </div>
            </div>
            <h1 className="font-serif text-[clamp(40px,6vw,80px)] font-bold text-white tracking-[-0.03em] leading-[1.06] max-w-[780px] mb-5">The operating system<br />for African logistics.</h1>
            <p className="text-[17px] text-text-2 leading-[1.78] max-w-[600px] mb-10">Waybrix is the platform clearing agents, freight forwarders and logistics companies in Nigeria run their operation on — jobs, customs duty, documentation, terminal, transport and invoicing, in one place.</p>
            <div className="flex gap-3.5 flex-wrap">
              <a href="https://app.costodiax.com" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline inline-flex items-center gap-2 bg-orange text-white hover:bg-orange-2">
                Try Waybrix free
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="#pricing" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-transparent text-white border border-white/20">See pricing</a>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="bg-black py-2.5 overflow-hidden border-t border-b border-border">
        <div className="flex w-max animate-ticker">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center whitespace-nowrap font-mono text-[10.5px] tracking-wide">
              {[
                { id: "CTX-2026-0142", route: "LOS→ABJ", status: "CLEARED", color: "text-[#10B981]" },
                { id: "CTX-2026-0139", route: "PHC→LOS", status: "IN TRANSIT", color: "text-[#3B82F6]" },
                { id: "CTX-2026-0137", route: "LOS→KAN", status: "CUSTOMS HOLD", color: "text-gold" },
                { id: "CTX-2026-0131", route: "LOS→IBA", status: "DELIVERED", color: "text-[#10B981]" },
                { id: "CTX-2026-0128", route: "KAN→LOS", status: "DUTY VERIFIED", color: "text-[#10B981]" },
                { id: "CTX-2026-0119", route: "TIN→LOS", status: "FREE DAYS: 2", color: "text-gold" },
              ].map((row) => (
                <span key={row.id} className="flex items-center gap-2.5 px-5 border-r border-white/10">
                  <span className="text-text-3">{row.id}</span>
                  <span className="text-text-2">{row.route}</span>
                  <span className={`font-semibold ${row.color}`}>● {row.status}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="px-[6%] py-[100px] bg-dark border-t border-b border-border">
        <div className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-16 max-[960px]:gap-10">
          <Reveal>
            <div className="text-[11px] font-bold text-text-3 tracking-[0.16em] uppercase mb-4">The Problem</div>
            <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-7">Most logistics companies still run on WhatsApp and Excel.</h2>
            <div className="flex flex-col gap-3">
              {problems.map((p) => (
                <div key={p} className="flex gap-3.5 p-4 bg-[#EF4444]/5 border border-[#EF4444]/10 rounded-lg">
                  <div className="text-[#EF4444] text-base shrink-0">✕</div>
                  <div className="text-sm text-text-2 leading-relaxed">{p}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay="d2">
            <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">The Waybrix Solution</div>
            <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-7">One platform. Everything in order.</h2>
            <div className="flex flex-col gap-3">
              {solutions.map((s) => (
                <div key={s} className="flex gap-3.5 p-4 bg-[#10B981]/5 border border-[#10B981]/10 rounded-lg">
                  <div className="text-[#10B981] text-base shrink-0">✓</div>
                  <div className="text-sm text-text-2 leading-relaxed">{s}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-[6%] py-[100px]" id="features">
        <div className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-20 max-[960px]:gap-10 items-start">
          <Reveal>
            <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">What&apos;s included</div>
            <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-4">Built for the Nigerian logistics industry.</h2>
            <div className="w-10 h-0.5 bg-orange rounded-sm mb-8" />
            <p className="text-[17px] text-text-2 leading-[1.78] mb-8">Every module built specifically for how Nigerian clearing agents and logistics companies actually work — not adapted from generic business software.</p>
            {features.map((f) => (
              <div key={f.n} className="flex gap-5 items-start py-6 border-b border-border last:border-none">
                <div className="font-serif text-[13px] text-orange font-bold shrink-0 min-w-[24px] pt-0.5">{f.n}</div>
                <div className="flex-1">
                  <div className="text-[15px] font-semibold text-white mb-1.5">{f.title}</div>
                  <div className="text-[13.5px] text-text-3 leading-[1.68]">{f.desc}</div>
                  {f.n === "01" && (
                    <div className="mt-4 flex flex-col">
                      {jobStages.map((s, i) => (
                        <div key={s.label} className="flex items-center gap-3 relative">
                          {i < jobStages.length - 1 && (
                            <div className="absolute left-[3px] top-[13px] w-px h-[20px]" style={{ background: s.color, opacity: 0.35 }} />
                          )}
                          <div className="w-[7px] h-[7px] rounded-full shrink-0 z-[1]" style={{ background: s.color }} />
                          <div className="text-[11.5px] text-text-2 py-[5px]">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal delay="d2" className="max-[960px]:!static sticky top-[100px]">
            <div className="bg-card border border-white/10 rounded-2xl overflow-hidden shadow-[0_48px_96px_rgba(0,0,0,0.6)]">
              <div className="bg-white/[0.03] border-b border-border px-4 py-3 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <div className="flex-1 flex items-center justify-center gap-1.5 text-[9px] text-text-3">
                  <WaybrixLogo size={14} />
                  Waybrix — Powered by CostodiaX
                </div>
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
                    { id: "CX-2026-004 — Vehicle Parts", status: "PAAR Filed", color: "text-[#8B5CF6] bg-[#8B5CF6]/10" },
                  ].map((row) => (
                    <div key={row.id} className="flex justify-between items-center px-3 py-2.5 border-b border-white/[0.03] last:border-none text-[10px]">
                      <span className="text-text-2 font-medium">{row.id}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-semibold ${row.color}`}>{row.status}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3.5 p-3 bg-gold/[0.06] border border-gold/15 rounded-lg">
                  <div className="text-[9px] text-gold uppercase tracking-wider mb-1">Terminal Alert</div>
                  <div className="text-[11px] text-text-2">3 containers approaching 30-day mark — action required</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-[6%] py-[100px] bg-dark border-t border-b border-border" id="pricing">
        <Reveal className="!block text-center mb-14">
          <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">Pricing</div>
          <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-4">Honest pricing.<br />No hidden fees.</h2>
          <p className="text-[17px] text-text-2 leading-[1.78] max-w-[480px] mx-auto">One flat plan. Everything included. No tiers to figure out.</p>
        </Reveal>
        <div className="max-w-[420px] mx-auto">
          <div
            className="bg-card rounded-xl p-9 relative flex flex-col"
            style={{ border: "2px solid #6366F1" }}
          >
            <div className="flex items-center gap-2.5 mb-3.5">
              <WaybrixLogo size={28} />
              <div className="text-xs font-bold tracking-[0.12em] uppercase" style={{ color: "#6366F1" }}>Waybrix Pro</div>
            </div>
            <div className="font-serif text-4xl text-white leading-none mb-1">$22</div>
            <div className="text-xs text-text-3 mb-6">per month, flat</div>
            <div className="border-t border-border pt-5 flex-1">
              {proFeatures.map((f) => (
                <div key={f} className="flex gap-2.5 mb-2.5 text-[13.5px] text-text-2">
                  <span className="font-bold" style={{ color: "#6366F1" }}>✓</span>{f}
                </div>
              ))}
            </div>
            <a
              href="https://app.costodiax.com"
              className="w-full justify-center mt-7 py-3 rounded-lg text-sm font-semibold no-underline flex items-center"
              style={{ background: "linear-gradient(135deg,#6366F1,#4F46E5)", color: "white" }}
            >
              Get started
            </a>
          </div>
        </div>
      </section>

      <section className="px-[6%] py-[100px]" id="signup">
        <div className="max-w-[640px] mx-auto">
          <Reveal className="!block text-center mb-10">
            <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">Get started</div>
            <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-4">Waybrix is live. Start today.</h2>
            <p className="text-[17px] text-text-2 leading-[1.78] mb-8">Create your company account and start running jobs in minutes — no sales call required.</p>
            <a href="https://app.costodiax.com" className="px-7 py-4 rounded-lg text-[15px] font-semibold no-underline inline-flex items-center gap-2 bg-orange text-white hover:bg-orange-2">
              Create your account
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </Reveal>
          <Reveal className="!block text-center mb-8">
            <div className="text-[13px] text-text-3">Prefer to talk it through first? Tell us about your company below.</div>
          </Reveal>
          <Reveal delay="d1">
            <form action="https://formspree.io/f/xnjeodoj" method="POST" className="bg-card border border-border rounded-2xl p-11">
              <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-text-2 mb-2">Company name</label>
                  <input type="text" name="company" placeholder="Your company name" className="w-full px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-2 mb-2">Your name</label>
                  <input type="text" name="name" placeholder="Full name" className="w-full px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange" />
                </div>
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
                <label className="block text-xs font-medium text-text-2 mb-2">Which plan interests you?</label>
                <select name="plan" className="w-full px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange">
                  <option value="">Select a plan</option>
                  <option>Waybrix Pro — $22/month</option>
                  <option>Not sure — I want to discuss</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-xs font-medium text-text-2 mb-2">Tell us about your business</label>
                <textarea name="message" placeholder="How many jobs per month? Do you have a bonded terminal? How many staff?" className="w-full min-h-[110px] px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange resize-y" />
              </div>
              <input type="hidden" name="_subject" value="New Waybrix Platform Request" />
              <input type="hidden" name="_next" value="https://www.costodiax.com/waybrix" />
              <button type="submit" className="w-full justify-center flex items-center gap-2 py-4 rounded-lg text-[15px] font-semibold bg-transparent text-white border border-white/20 hover:border-white/40 transition-colors">
                Talk to our team
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
              <p className="text-center text-[12.5px] text-text-3 mt-4">Our team will reach out to discuss your setup.</p>
            </form>
          </Reveal>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
}
