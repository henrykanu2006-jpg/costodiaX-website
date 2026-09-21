import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Port & Terminal Operations",
  description: "Onne Port operations and licensed bonded terminal storage in Port Harcourt, Rivers State — CostodiaX Group's operating base.",
  alternates: { canonical: "/services/port-terminal" },
  openGraph: {
    title: "Port & Terminal Operations — CostodiaX Group",
    description: "Onne Port operations and licensed bonded terminal storage in Port Harcourt, Rivers State — CostodiaX Group's operating base.",
    url: "/services/port-terminal",
    type: "website",
  },
};

const terminalFeatures = [
  "Licensed bonded storage — a real, licensed facility, not informal arrangement",
  "Daily storage charges tracked automatically through Waybrix",
  "Secure holding for cargo awaiting customs clearance",
  "Weekly reporting on stored cargo",
];

export default function PortTerminalPage() {
  return (
    <>
      <div className="pt-[140px] pb-16 px-[6%] bg-dark border-b border-border">
        <div className="max-w-[760px]">
          <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">Port & Terminal Operations</div>
          <h1 className="font-serif text-[clamp(34px,5vw,60px)] font-bold text-white tracking-[-0.03em] leading-[1.08] mb-5">
            Our base at Onne Port, and secure storage in Port Harcourt.
          </h1>
          <p className="text-[17px] text-text-2 leading-[1.78] max-w-[600px]">
            CostodiaX operates daily out of Onne Port, Rivers State, and maintains a licensed bonded terminal in Port Harcourt for secure cargo storage.
          </p>
        </div>
      </div>

      <section className="px-[6%] py-20">
        <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-16 max-[900px]:gap-10">
          <Reveal>
            <h2 className="font-serif text-2xl font-bold text-white mb-4">Onne Port</h2>
            <p className="text-[15px] text-text-2 leading-[1.8] mb-4">
              Onne Port, in Rivers State, is our primary operating base — where our team handles day-to-day customs clearance and cargo coordination.
            </p>
            <p className="text-[15px] text-text-2 leading-[1.8]">
              We&apos;re based here, not just occasionally present — it&apos;s where our operations actually run.
            </p>
          </Reveal>
          <Reveal delay="d2">
            <div className="bg-card border border-border rounded-2xl p-9">
              <h2 className="font-serif text-xl font-bold text-white mb-6">Bonded Terminal — Port Harcourt</h2>
              <ul className="flex flex-col gap-3 list-none">
                {terminalFeatures.map((t) => (
                  <li key={t} className="flex gap-3 items-start">
                    <span className="text-orange font-bold text-base -mt-0.5">✓</span>
                    <span className="text-sm text-text-2">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-[6%] py-20 bg-dark border-t border-b border-border">
        <Reveal className="!block max-w-[700px] mx-auto text-center">
          <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">Why it matters</div>
          <h2 className="font-serif text-[clamp(26px,4vw,40px)] font-bold text-white tracking-[-0.025em] leading-[1.15] mb-6">
            One base, one bonded terminal — full visibility on both.
          </h2>
          <p className="text-[15px] text-text-2 leading-relaxed">
            Having our clearing operations and bonded storage in the same area means less coordination overhead between separate parties. And because storage is billed and tracked through Waybrix, you can see exactly what your cargo is costing you in storage, day by day — not a surprise bill at the end.
          </p>
        </Reveal>
      </section>

      <section className="px-[6%] py-20 text-center">
        <Reveal className="!block max-w-[600px] mx-auto">
          <h2 className="font-serif text-2xl font-bold text-white mb-4">Need storage or port coordination?</h2>
          <p className="text-[15px] text-text-2 mb-8">Reach out and we&apos;ll walk you through it.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/quote" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-orange text-white hover:bg-orange-2">Request a Quote</Link>
            <Link href="/contact" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-transparent text-white border border-white/20">Contact CostodiaX</Link>
            <a href="https://wa.me/2348161172972?text=I%20need%20bonded%20terminal%20storage%20in%20Port%20Harcourt" target="_blank" rel="noopener noreferrer" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-[#25D366] text-white">WhatsApp Us</a>
          </div>
        </Reveal>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
}
