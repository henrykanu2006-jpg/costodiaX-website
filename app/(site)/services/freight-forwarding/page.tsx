import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Freight Forwarding",
  description: "Freight forwarding into Onne Port, Nigeria — sea and air cargo coordination from origin through to customs clearance.",
  alternates: { canonical: "/services/freight-forwarding" },
  openGraph: {
    title: "Freight Forwarding — CostodiaX Group",
    description: "Freight forwarding into Onne Port, Nigeria — sea and air cargo coordination from origin through to customs clearance.",
    url: "/services/freight-forwarding",
    type: "website",
  },
};

const whatWeHandle = [
  "Sea and air freight coordination",
  "Origin-side booking coordination with your shipper",
  "Shipping document handling and review",
  "Destination coordination into Onne Port",
  "Handoff into our customs clearance process",
];

const process = [
  { n: "01", title: "Tell us your shipment plan", desc: "Origin, cargo type, and whether you're moving by sea or air — share it through the quote form." },
  { n: "02", title: "Coordination with origin", desc: "We work with your supplier or agent at origin to keep documentation and booking aligned." },
  { n: "03", title: "Transit to Onne Port", desc: "We track your shipment's progress toward arrival and prepare for clearance ahead of time." },
  { n: "04", title: "Arrival & clearance", desc: "On arrival, your cargo moves directly into our customs clearance process — no separate handoff needed." },
];

export default function FreightForwardingPage() {
  return (
    <>
      <div className="pt-[140px] pb-16 px-[6%] bg-dark border-b border-border">
        <div className="max-w-[760px]">
          <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">Freight Forwarding</div>
          <h1 className="font-serif text-[clamp(34px,5vw,60px)] font-bold text-white tracking-[-0.03em] leading-[1.08] mb-5">
            Getting your cargo from origin into Onne Port.
          </h1>
          <p className="text-[17px] text-text-2 leading-[1.78] max-w-[600px]">
            We coordinate international cargo movement by sea and air, from any origin, into Onne Port — carrying it straight through into customs clearance once it arrives.
          </p>
        </div>
      </div>

      <section className="px-[6%] py-20">
        <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-16 max-[900px]:gap-10">
          <Reveal>
            <h2 className="font-serif text-2xl font-bold text-white mb-4">Who this is for</h2>
            <p className="text-[15px] text-text-2 leading-[1.8] mb-8">
              Importers who need their cargo moved from an overseas supplier all the way into Nigeria, with one team coordinating the journey instead of juggling separate freight and clearing agents.
            </p>
            <h2 className="font-serif text-2xl font-bold text-white mb-4">What we handle</h2>
            <ul className="flex flex-col gap-3 list-none">
              {whatWeHandle.map((w) => (
                <li key={w} className="flex gap-3 items-start">
                  <span className="text-orange font-bold text-base -mt-0.5">✓</span>
                  <span className="text-sm text-text-2">{w}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay="d2">
            <div className="bg-card border border-border rounded-2xl p-9">
              <h2 className="font-serif text-xl font-bold text-white mb-4">Why coordinate it with us</h2>
              <p className="text-[14px] text-text-2 leading-relaxed mb-5">
                Freight forwarding and customs clearance are two separate problems that usually mean two separate agents, two handoffs, and two chances for something to fall through the cracks.
              </p>
              <p className="text-[14px] text-text-2 leading-relaxed">
                Since we operate our own customs clearance out of Onne Port, your shipment moves from arrival straight into clearance under one point of contact.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-[6%] py-20 bg-dark border-t border-b border-border">
        <Reveal className="max-w-[600px] mb-14">
          <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">Our process</div>
          <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-bold text-white tracking-[-0.025em] leading-[1.1]">Origin to Onne Port.</h2>
        </Reveal>
        <div className="flex flex-col max-w-[720px]">
          {process.map((p, i) => (
            <Reveal key={p.n} delay={(["d1", "d2", "d3", "d4"] as const)[i % 4]}>
              <div className="flex gap-6 items-start py-6 border-b border-border last:border-none">
                <div className="font-serif text-2xl text-orange font-bold shrink-0 w-10">{p.n}</div>
                <div>
                  <div className="text-[15px] font-semibold text-white mb-1.5">{p.title}</div>
                  <div className="text-[13.5px] text-text-3 leading-relaxed">{p.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-[6%] py-20 text-center">
        <Reveal className="!block max-w-[600px] mx-auto">
          <h2 className="font-serif text-2xl font-bold text-white mb-4">Moving cargo into Nigeria?</h2>
          <p className="text-[15px] text-text-2 mb-8">Tell us your shipment details and we&apos;ll get back to you with a quote.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/quote" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-orange text-white hover:bg-orange-2">Request a Quote</Link>
            <Link href="/contact" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-transparent text-white border border-white/20">Contact CostodiaX</Link>
            <a href="https://wa.me/2348161172972?text=I%20have%20a%20freight%20forwarding%20enquiry" target="_blank" rel="noopener noreferrer" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-[#25D366] text-white">WhatsApp Us</a>
          </div>
        </Reveal>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
}
