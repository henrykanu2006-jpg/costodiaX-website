import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Request a quote from CostodiaX Group for customs clearing, bonded storage, haulage, freight forwarding or import documentation.",
  alternates: { canonical: "/quote" },
  openGraph: {
    title: "Request a Quote — CostodiaX Group",
    description: "Tell us about your cargo and CostodiaX will get back to you with a clear quote.",
    url: "/quote",
    type: "website",
  },
};

const serviceOptions = [
  "Customs Clearing",
  "Bonded Storage",
  "Haulage & Transport",
  "Freight Forwarding",
  "Import Documentation",
  "Not sure — please advise",
];

const containerSizes = ["20ft", "40ft", "Not applicable", "Not sure"];

export default async function QuotePage({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string }>;
}) {
  const params = await searchParams;
  const submitted = params.submitted === "1";

  return (
    <>
      <div className="pt-[140px] pb-20 px-[6%] bg-dark border-b border-border">
        <div className="max-w-[680px] mx-auto text-center">
          <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">Request a Quote</div>
          <h1 className="font-serif text-[clamp(32px,4.5vw,52px)] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-4">
            Tell us about your cargo.
          </h1>
          <p className="text-[17px] text-text-2 leading-[1.78]">
            Fill in what you know — the more detail, the faster we can get back to you with a clear quote. Not sure about some fields? Leave them blank.
          </p>
        </div>
      </div>

      <section className="px-[6%] py-20">
        <div className="max-w-[720px] mx-auto">
          {submitted ? (
            <div className="bg-card border border-border rounded-2xl p-11 text-center">
              <div className="w-14 h-14 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center mx-auto mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
              </div>
              <h2 className="font-serif text-2xl font-bold text-white mb-3">Request received.</h2>
              <p className="text-[15px] text-text-2 leading-relaxed mb-8">
                Thanks — we&apos;ve got your details. Our team will review your cargo information and get back to you directly with a quote.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link href="/" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-orange text-white hover:bg-orange-2">Back to homepage</Link>
                <Link href="/track" className="px-6.5 py-3.5 rounded-lg text-sm font-semibold no-underline bg-transparent text-white border border-white/20">Track a shipment</Link>
              </div>
            </div>
          ) : (
            <form action="https://formspree.io/f/xnjeodoj" method="POST" className="bg-card border border-border rounded-2xl p-10">
              <div className="text-[17px] font-semibold text-white mb-1.5">Cargo & contact details</div>
              <div className="text-[13.5px] text-text-3 mb-8">Fields marked * are needed so we can reach you — everything else helps us quote faster.</div>

              <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-text-2 mb-2">Full name *</label>
                  <input type="text" name="name" required placeholder="Your name" className="w-full px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-2 mb-2">Company</label>
                  <input type="text" name="company" placeholder="Your company" className="w-full px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange" />
                </div>
              </div>

              <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-text-2 mb-2">Email *</label>
                  <input type="email" name="email" required placeholder="you@company.com" className="w-full px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-2 mb-2">Phone / WhatsApp *</label>
                  <input type="tel" name="phone" required placeholder="080xxxxxxxx" className="w-full px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange" />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-medium text-text-2 mb-2">Service needed *</label>
                <select name="service" required className="w-full px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange">
                  <option value="">Select a service</option>
                  {serviceOptions.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-text-2 mb-2">Origin</label>
                  <input type="text" name="origin" placeholder="e.g. Guangzhou, China" className="w-full px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-2 mb-2">Destination / Port</label>
                  <input type="text" name="destination" placeholder="e.g. Onne Port" className="w-full px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange" />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-medium text-text-2 mb-2">Cargo description</label>
                <input type="text" name="cargo_description" placeholder="e.g. Generator sets, machinery parts" className="w-full px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange" />
              </div>

              <div className="grid grid-cols-3 max-[600px]:grid-cols-1 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-text-2 mb-2">Container size</label>
                  <select name="container_size" className="w-full px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange">
                    <option value="">Select</option>
                    {containerSizes.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-2 mb-2">Quantity</label>
                  <input type="text" name="container_quantity" placeholder="e.g. 2" className="w-full px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-2 mb-2">Preferred date</label>
                  <input type="text" name="preferred_date" placeholder="e.g. Mid-October" className="w-full px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-medium text-text-2 mb-2">Additional information</label>
                <textarea name="message" placeholder="Anything else that would help us quote accurately..." className="w-full min-h-[110px] px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange resize-y" />
              </div>

              <input type="hidden" name="_subject" value="New Quote Request — CostodiaX Website" />
              <input type="hidden" name="_next" value="https://www.costodiax.com/quote?submitted=1" />
              <button type="submit" className="w-full justify-center flex items-center gap-2 py-4 rounded-lg text-[15px] font-semibold bg-orange text-white hover:bg-orange-2 transition-colors">
                Request a quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
              <p className="text-center text-[12.5px] text-text-3 mt-4">Prefer to talk directly? <Link href="/contact" className="text-orange no-underline hover:underline">Contact us</Link> or message us on WhatsApp.</p>
            </form>
          )}
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
}
