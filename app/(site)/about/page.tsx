import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "About Us",
  description: "The story of CostodiaX — built from Port Harcourt to modernise Nigerian logistics through technology.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About CostodiaX Group",
    description:
      "The story of CostodiaX — a 19-year-old founder building Nigeria's most technology-forward logistics company from Port Harcourt.",
    url: "/about",
    type: "website",
  },
};

const timeline = [
  { date: "April 2026", title: "CostodiaX Founded", desc: "Henry Dimkpa Kanu establishes CostodiaX Group in Port Harcourt.", color: "bg-orange", text: "text-orange" },
  { date: "June 2026", title: "Officially Registered", desc: "CostodiaX Group receives official business registration.", color: "bg-gold", text: "text-gold" },
  { date: "June 2026", title: "Voya Platform Launched", desc: "Proprietary SaaS platform for Nigerian logistics companies goes live.", color: "bg-[#10B981]", text: "text-[#10B981]" },
  { date: "2026 →", title: "Expanding Across Nigeria", desc: "Onboarding clearing agents and logistics companies nationwide.", color: "bg-[#3B82F6]", text: "text-[#3B82F6]" },
];

const values = [
  { n: "01", title: "Transparency", desc: "Every fee documented. Every charge explained. Clients see exactly what they are paying for — before they pay it." },
  { n: "02", title: "Technology First", desc: "We do not adapt old processes to software. We rebuild processes from the ground up with technology at the centre." },
  { n: "03", title: "Nigerian by Design", desc: "Voya is not a foreign platform adapted for Nigeria. It is built from scratch for Nigerian customs procedures, Nigerian ports, and Nigerian businesses." },
  { n: "04", title: "Speed", desc: "Time is money in logistics. We move fast, respond fast, and build systems that help our clients move fast too." },
  { n: "05", title: "Reliability", desc: "When cargo is at the port, there is no room for mistakes. Our clients trust us because we deliver — consistently." },
  { n: "06", title: "Growth", desc: "We are building something that lasts. Every client we serve, every company we onboard onto Voya, is a step toward making African trade more efficient." },
];

export default function AboutPage() {
  return (
    <>
      <div className="min-h-[70vh] relative flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/about-hero.jpg)" }} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,13,26,0.7)_0%,rgba(6,13,26,0.98)_100%)]" />
        <div className="relative z-[2] px-[6%] pb-20 max-w-[760px]">
          <Reveal>
            <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">Our Story</div>
            <h1 className="font-serif text-[clamp(40px,6vw,80px)] font-bold text-white tracking-[-0.03em] leading-[1.06] mb-5">Built in Port Harcourt.<br />Built for <span className="text-orange">Africa.</span></h1>
            <p className="text-[17px] text-text-2 leading-[1.78] max-w-[580px]">CostodiaX was founded with one mission — to bring Nigerian logistics into the modern era. Where paper becomes data, phone calls become portals, and chaos becomes clarity.</p>
          </Reveal>
        </div>
      </div>

      <section className="px-[6%] py-[100px]">
        <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-20 max-[900px]:gap-10 items-center">
          <Reveal>
            <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">The Founder</div>
            <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-4">Started at 19.<br />Built to last.</h2>
            <div className="w-10 h-0.5 bg-orange rounded-sm mb-9" />
            <p className="text-base text-text-2 leading-[1.85] mb-5">Henry Dimkpa Kanu founded CostodiaX Group in April 2026 at the age of 19, right in the heart of Port Harcourt — Nigeria&apos;s oil and logistics capital.</p>
            <p className="text-base text-text-2 leading-[1.85] mb-5">Growing up around the logistics industry, Henry saw firsthand how clearing agents and freight companies operated — documents passed from hand to hand, clients calling every hour for updates, invoices typed manually in spreadsheets, and entire operations running on WhatsApp groups. He knew there had to be a better way.</p>
            <p className="text-base text-text-2 leading-[1.85]">In June 2026, CostodiaX Group was officially registered. Within months, the company was not only providing world-class clearing, terminal and haulage services — it had also built Voya, a complete SaaS platform designed specifically for Nigerian logistics companies.</p>
          </Reveal>
          <Reveal delay="d2">
            <div className="bg-dark border border-border rounded-2xl p-10">
              <div className="text-xs font-bold text-text-3 tracking-wider uppercase mb-8">Company Timeline</div>
              {timeline.map((t, i) => (
                <div key={t.title} className="flex gap-5 mb-7 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${t.color} shrink-0 mt-1`} />
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-1.5" />}
                  </div>
                  <div>
                    <div className={`text-[13px] font-bold ${t.text} mb-1`}>{t.date}</div>
                    <div className="text-[15px] font-semibold text-white mb-1">{t.title}</div>
                    <div className="text-[13px] text-text-3">{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-[6%] py-[100px] bg-dark border-t border-b border-border">
        <Reveal className="!block text-center max-w-[700px] mx-auto mb-14">
          <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">What drives us</div>
          <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-4">Mission &amp; Vision</h2>
          <div className="w-10 h-0.5 bg-orange rounded-sm mx-auto" />
        </Reveal>
        <div className="grid grid-cols-2 max-[960px]:grid-cols-1 max-[960px]:gap-10 gap-5 max-w-[900px] mx-auto">
          <Reveal delay="d1">
            <div className="bg-black border border-border rounded-2xl p-11 relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-orange" />
              <div className="text-[11px] font-bold text-orange tracking-[0.15em] uppercase mb-5">Our Mission</div>
              <p className="font-serif text-xl text-white leading-[1.5] font-semibold mb-5">&quot;To move the Nigerian logistics industry into the digital era — making every shipment trackable, every invoice transparent, and every operation efficient.&quot;</p>
              <p className="text-sm text-text-3 leading-[1.7]">We exist to eliminate the inefficiencies that cost Nigerian businesses time and money — and to give every clearing agent, logistics company, and importer the tools to operate at a world-class level.</p>
            </div>
          </Reveal>
          <Reveal delay="d2">
            <div className="bg-black border border-orange/20 rounded-2xl p-11 relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[linear-gradient(90deg,#EA580C,#F59E0B)]" />
              <div className="text-[11px] font-bold text-gold tracking-[0.15em] uppercase mb-5">Our Vision</div>
              <p className="font-serif text-xl text-white leading-[1.5] font-semibold mb-5">&quot;To become the backbone of logistics technology across West Africa — the platform every serious logistics company runs on.&quot;</p>
              <p className="text-sm text-text-3 leading-[1.7]">CostodiaX is not just a clearing company. It is the beginning of an ecosystem — where Voya powers logistics operations from Lagos to Accra to Abidjan, and where African trade moves faster because of what we built in Port Harcourt.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-[6%] py-[100px]">
        <Reveal className="max-w-[560px] mb-14">
          <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">What we stand for</div>
          <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-4">Our Values</h2>
          <div className="w-10 h-0.5 bg-orange rounded-sm" />
        </Reveal>
        <div className="grid grid-cols-3 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1 gap-5">
          {values.map((v, i) => (
            <Reveal key={v.n} delay={(["d1", "d2", "d3"] as const)[i % 3]}>
              <div className="group bg-dark border border-border rounded-xl p-9 h-full transition-all hover:border-orange/25 hover:-translate-y-1">
                <div className="font-serif text-[56px] text-orange opacity-10 leading-none mb-4 font-bold">{v.n}</div>
                <h3 className="text-[17px] font-semibold text-white mb-3">{v.title}</h3>
                <p className="text-[13.5px] text-text-3 leading-[1.72]">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="relative h-[420px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/about-port.jpg)" }} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#060D1A_0%,transparent_25%,transparent_70%,#060D1A_100%)]" />
        <Reveal className="!absolute bottom-[50px] left-[6%] right-[6%] flex justify-between items-end">
          <div className="font-serif text-[clamp(22px,4vw,42px)] text-white font-bold leading-[1.2] tracking-[-0.02em]">From Onne Port to<br />the rest of <span className="text-gold">West Africa.</span></div>
          <div className="px-5.5 py-3 bg-[rgba(6,13,26,0.85)] border border-gold text-gold rounded-md text-xs font-bold tracking-[0.08em] whitespace-nowrap backdrop-blur-sm max-[700px]:hidden">Est. April 2026 · Port Harcourt</div>
        </Reveal>
      </div>

      <div className="bg-[linear-gradient(135deg,#EA580C_0%,#C2410C_100%)] px-[6%] py-20 text-center relative overflow-hidden">
        <h2 className="font-serif text-[clamp(28px,4vw,50px)] text-white font-bold max-w-[680px] mx-auto mb-4 leading-[1.15] tracking-[-0.025em]">Ready to work with us?</h2>
        <p className="text-[17px] text-white/80 max-w-[480px] mx-auto mb-10 leading-[1.7]">Whether you need cargo cleared, goods stored, or your logistics company on Voya — let&apos;s talk.</p>
        <div className="flex gap-4 justify-center flex-wrap relative z-[2]">
          <Link href="/contact" className="px-6.5 py-3.5 rounded-lg text-sm font-bold no-underline bg-white text-orange">Contact us</Link>
          <Link href="/voya#signup" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-white/15 text-white border border-white/30">Request early access</Link>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </>
  );
}
