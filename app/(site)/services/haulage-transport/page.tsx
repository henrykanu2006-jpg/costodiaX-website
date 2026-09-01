import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Haulage & Transport",
  description: "Container haulage and transport across Nigeria — cargo moved from port to warehouse through trusted third-party transport partners, tracked live.",
  alternates: { canonical: "/services/haulage-transport" },
  openGraph: {
    title: "Haulage & Transport — CostodiaX Group",
    description: "Container haulage and transport across Nigeria — cargo moved from port to warehouse through trusted third-party transport partners, tracked live.",
    url: "/services/haulage-transport",
    type: "website",
  },
};

const whatWeHandle = [
  "20ft and 40ft container haulage",
  "Coordination with trusted third-party transport partners",
  "Port-to-warehouse movement across Nigeria",
  "Trip tracking through the Voya platform",
  "Proof of delivery on completion",
];

const process = [
  { n: "01", title: "Cargo is cleared", desc: "Once your cargo is released from customs (or your bonded terminal hold), it's ready to move." },
  { n: "02", title: "Transport is arranged", desc: "We coordinate with our trusted transport partners to book the right vehicle for your container size and destination." },
  { n: "03", title: "Movement is tracked", desc: "Your trip is logged and tracked through Voya, so you know where your cargo is." },
  { n: "04", title: "Delivery & proof", desc: "On arrival, we provide proof of delivery so you have confirmation your cargo reached its destination." },
];

export default function HaulageTransportPage() {
  return (
    <>
      <div className="pt-[140px] pb-16 px-[6%] bg-dark border-b border-border">
        <div className="max-w-[760px]">
          <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">Haulage & Transport</div>
          <h1 className="font-serif text-[clamp(34px,5vw,60px)] font-bold text-white tracking-[-0.03em] leading-[1.08] mb-5">
            Port to warehouse, tracked the whole way.
          </h1>
          <p className="text-[17px] text-text-2 leading-[1.78] max-w-[600px]">
            Once your cargo clears, we coordinate its move from the port to your warehouse across Nigeria — through trusted third-party transport partners, with every trip tracked.
          </p>
        </div>
      </div>

      <section className="px-[6%] py-20">
        <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-16 max-[900px]:gap-10">
          <Reveal>
            <h2 className="font-serif text-2xl font-bold text-white mb-4">Who this is for</h2>
            <p className="text-[15px] text-text-2 leading-[1.8] mb-8">
              Importers and businesses who need cargo physically moved after it clears customs or leaves our bonded terminal — without having to separately arrange and chase down a transporter themselves.
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
              <h2 className="font-serif text-xl font-bold text-white mb-4">Honestly, how it works</h2>
              <p className="text-[14px] text-text-2 leading-relaxed mb-5">
                We currently coordinate haulage entirely through trusted third-party transport partners rather than an owned truck fleet — we&apos;re not going to claim otherwise. What that means for you: real vehicles, vetted by us, tracked through Voya.
              </p>
              <p className="text-[14px] text-text-2 leading-relaxed">
                We&apos;re working toward operating our own fleet in the future as we grow.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-[6%] py-20 bg-dark border-t border-b border-border">
        <Reveal className="max-w-[600px] mb-14">
          <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">Our process</div>
          <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-bold text-white tracking-[-0.025em] leading-[1.1]">From release to your door.</h2>
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
          <h2 className="font-serif text-2xl font-bold text-white mb-4">Need cargo moved?</h2>
          <p className="text-[15px] text-text-2 mb-8">Tell us your container size and destination and we&apos;ll get back to you.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/quote" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-orange text-white hover:bg-orange-2">Request a Quote</Link>
            <Link href="/contact" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-transparent text-white border border-white/20">Contact CostodiaX</Link>
            <a href="https://wa.me/2348161172972?text=I%20need%20haulage%20or%20transport%20for%20my%20cargo" target="_blank" rel="noopener noreferrer" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-[#25D366] text-white">WhatsApp Us</a>
          </div>
        </Reveal>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
}
