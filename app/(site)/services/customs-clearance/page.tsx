import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Customs Clearance",
  description: "Customs clearing agent in Port Harcourt, Nigeria — Form M, PAAR, duty coordination and documentation through our base at Onne Port.",
  alternates: { canonical: "/services/customs-clearance" },
  openGraph: {
    title: "Customs Clearance — CostodiaX Group",
    description: "Customs clearing agent in Port Harcourt, Nigeria — Form M, PAAR, duty coordination and documentation through our base at Onne Port.",
    url: "/services/customs-clearance",
    type: "website",
  },
};

const whatWeHandle = [
  "Form M application and processing",
  "PAAR filing with Nigeria Customs Service",
  "Bill of Lading and shipping document handling",
  "Duty calculation and payment coordination",
  "NCS examination attendance",
  "HS code guidance for correct classification",
  "Combined Certificate of Value and Origin",
];

const process = [
  { n: "01", title: "Share your shipment details", desc: "Send us your commercial invoice, packing list and Bill of Lading — via the quote form, WhatsApp, or email." },
  { n: "02", title: "Form M & documentation", desc: "We process your Form M and prepare the documentation Nigeria Customs requires before your cargo arrives." },
  { n: "03", title: "PAAR & duty coordination", desc: "Once PAAR is issued, we coordinate duty payment and keep you informed of the amount and timing." },
  { n: "04", title: "Examination & release", desc: "If your cargo is selected for physical examination, we attend on your behalf. Once cleared, we coordinate release." },
  { n: "05", title: "Handover", desc: "Cleared cargo is handed off for haulage to your destination, or held in our bonded terminal if needed." },
];

const documentsNeeded = [
  "Commercial invoice",
  "Packing list",
  "Bill of Lading",
  "Form M (or details to process one)",
  "Certificate of origin, if applicable",
];

export default function CustomsClearancePage() {
  return (
    <>
      <div className="pt-[140px] pb-16 px-[6%] bg-dark border-b border-border">
        <div className="max-w-[760px]">
          <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">Customs Clearance</div>
          <h1 className="font-serif text-[clamp(34px,5vw,60px)] font-bold text-white tracking-[-0.03em] leading-[1.08] mb-5">
            Clearing your cargo through Nigerian customs — done right.
          </h1>
          <p className="text-[17px] text-text-2 leading-[1.78] max-w-[600px]">
            CostodiaX handles the documentation, duty coordination and process of clearing your import through Nigeria Customs Service, operating from our base at Onne Port, Rivers State.
          </p>
        </div>
      </div>

      <section className="px-[6%] py-20">
        <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-16 max-[900px]:gap-10">
          <Reveal>
            <h2 className="font-serif text-2xl font-bold text-white mb-4">Who this is for</h2>
            <p className="text-[15px] text-text-2 leading-[1.8] mb-8">
              Importers bringing cargo into Nigeria through Onne Port who need it cleared accurately and without unnecessary delay — whether it&apos;s your first shipment or a recurring one.
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
              <h2 className="font-serif text-xl font-bold text-white mb-6">What we&apos;ll need from you</h2>
              <ul className="flex flex-col gap-3 list-none mb-8">
                {documentsNeeded.map((d) => (
                  <li key={d} className="flex gap-3 items-start">
                    <span className="text-orange font-bold text-base -mt-0.5">•</span>
                    <span className="text-sm text-text-2">{d}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-border pt-6">
                <p className="text-[13px] text-text-3 leading-relaxed">
                  Clearance timelines depend on documentation readiness, whether your cargo is selected for examination, and terminal conditions — we can&apos;t promise a fixed number of days, but we keep you updated at every stage.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-[6%] py-20 bg-dark border-t border-b border-border">
        <Reveal className="max-w-[600px] mb-14">
          <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">Our process</div>
          <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-bold text-white tracking-[-0.025em] leading-[1.1]">From documents to delivery.</h2>
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
          <h2 className="font-serif text-2xl font-bold text-white mb-4">Ready to clear a shipment?</h2>
          <p className="text-[15px] text-text-2 mb-8">Tell us about your cargo and we&apos;ll get back to you with a clear quote.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/quote" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-orange text-white hover:bg-orange-2">Request a Quote</Link>
            <Link href="/contact" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-transparent text-white border border-white/20">Contact CostodiaX</Link>
            <a href="https://wa.me/2348161172972?text=I%20want%20to%20clear%20my%20cargo%20at%20the%20port" target="_blank" rel="noopener noreferrer" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-[#25D366] text-white">WhatsApp Us</a>
          </div>
        </Reveal>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
}
