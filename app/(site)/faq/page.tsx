import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about customs clearance, freight forwarding, tracking and working with CostodiaX Group.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Frequently Asked Questions — CostodiaX Group",
    description: "Answers to common questions about customs clearance, freight forwarding, tracking and working with CostodiaX Group.",
    url: "/faq",
    type: "website",
  },
};

const faqs = [
  {
    q: "What documents are needed for customs clearance?",
    a: "Typically a Bill of Lading, commercial invoice, packing list, Form M, and PAAR once issued. The exact documents required depend on your cargo type and value — our team will tell you exactly what's needed once you share your shipment details.",
  },
  {
    q: "What is Form M?",
    a: "Form M is the mandatory documentation required by the Central Bank of Nigeria for importing goods into the country. It must be processed before your shipment arrives and is one of the first steps in the clearance process.",
  },
  {
    q: "What is PAAR?",
    a: "PAAR (Pre-Arrival Assessment Report) is issued by the Nigeria Customs Service and confirms the duty payable on your shipment before it arrives at port. It's generated from your Form M and other shipping documents.",
  },
  {
    q: "What is an HS Code?",
    a: "An HS (Harmonized System) Code is an internationally standardized number that classifies traded products. It determines the duty rate and regulatory requirements that apply to your goods — getting it right matters, and it's something we help with as part of documentation handling.",
  },
  {
    q: "What is CIF?",
    a: "CIF (Cost, Insurance and Freight) is a pricing term that includes the cost of goods, insurance, and freight to the destination port. Nigerian customs duties are typically calculated as a percentage of the CIF value.",
  },
  {
    q: "How long does customs clearance take?",
    a: "It varies — depending on documentation readiness, whether your cargo is selected for physical examination, duty payment timing, and terminal congestion. We can't promise a fixed number of days, but we keep you updated at every stage and move as quickly as the process allows.",
  },
  {
    q: "Can I track my shipment?",
    a: "Yes — once your shipment is in our system, you can check its status anytime on our Track Shipment page using the tracking number we provide you.",
  },
  {
    q: "Do you handle container haulage?",
    a: "Yes, we coordinate haulage from port to warehouse across Nigeria through trusted third-party transport partners, with every trip tracked.",
  },
  {
    q: "What ports do you operate at?",
    a: "Our operating base is Onne Port in Rivers State, alongside our licensed bonded terminal in Port Harcourt. That's where our day-to-day operations are based.",
  },
  {
    q: "How do I request a quote?",
    a: "Use our Request a Quote form with as much detail about your cargo as you have — origin, destination, container size, and what service you need. We'll get back to you directly with a clear quote.",
  },
  {
    q: "Can you arrange freight forwarding?",
    a: "Yes — we coordinate international cargo movement by sea and air into Onne Port, handling the documentation and destination-side coordination.",
  },
  {
    q: "What happens after my cargo arrives?",
    a: "We handle customs clearance and duty coordination, attend any physical examination if required, and once released, coordinate haulage to your final destination — with visibility at every stage through your tracking number.",
  },
];

export default function FAQPage() {
  return (
    <>
      <div className="pt-[140px] pb-16 px-[6%] bg-dark border-b border-border">
        <div className="max-w-[680px] mx-auto text-center">
          <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">FAQ</div>
          <h1 className="font-serif text-[clamp(32px,4.5vw,52px)] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-4">
            Frequently asked questions.
          </h1>
          <p className="text-[17px] text-text-2 leading-[1.78]">
            Common questions about customs clearance, freight forwarding, and working with CostodiaX.
          </p>
        </div>
      </div>

      <section className="px-[6%] py-20">
        <div className="max-w-[760px] mx-auto flex flex-col gap-4">
          {faqs.map((f) => (
            <details key={f.q} className="group bg-card border border-border rounded-xl px-7 py-5 open:pb-6">
              <summary className="cursor-pointer list-none flex justify-between items-center gap-4 text-[15px] font-semibold text-white">
                {f.q}
                <span className="shrink-0 text-orange text-lg leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-sm text-text-2 leading-relaxed mt-4">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="max-w-[760px] mx-auto mt-14 text-center bg-dark border border-border rounded-2xl p-10">
          <h2 className="font-serif text-xl font-semibold text-white mb-2">Still have a question?</h2>
          <p className="text-sm text-text-2 mb-6">We read every message and respond personally — no bots.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-orange text-white hover:bg-orange-2">Contact us</Link>
            <Link href="/quote" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-transparent text-white border border-white/20">Get a quote</Link>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
}
