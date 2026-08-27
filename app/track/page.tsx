import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { getShipment } from "@/lib/db";

export const metadata: Metadata = {
  title: "Track Your Shipment",
  description: "Track the real-time status of your cargo with CostodiaX Group — enter your tracking number to see where your shipment is.",
  alternates: { canonical: "/track" },
};

export const dynamic = "force-dynamic";

const stages = [
  "Documents Received",
  "PAAR Filed",
  "Vessel Arrived",
  "DO Collected",
  "Duties Paid",
  "Under Examination",
  "Released",
  "Delivered",
];

export default async function TrackPage({
  searchParams,
}: {
  searchParams: Promise<{ number?: string }>;
}) {
  const params = await searchParams;
  const number = params.number?.trim();
  let shipment = null;
  let notFound = false;
  let dbError = false;

  if (number) {
    try {
      shipment = await getShipment(number);
      notFound = !shipment;
    } catch {
      dbError = true;
    }
  }

  const stageIndex = shipment ? stages.indexOf(shipment.status) : -1;

  return (
    <>
      <div className="min-h-[50vh] pt-[140px] pb-20 px-[6%] bg-dark border-b border-border">
        <div className="max-w-[640px] mx-auto text-center">
          <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">Track Your Shipment</div>
          <h1 className="font-serif text-[clamp(32px,4.5vw,52px)] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-4">
            Where&apos;s your cargo?
          </h1>
          <p className="text-[17px] text-text-2 leading-[1.78] mb-10">
            Enter your CostodiaX tracking number to see the current status of your shipment.
          </p>
          <form method="GET" className="flex gap-3 max-[500px]:flex-col">
            <input
              type="text"
              name="number"
              defaultValue={number}
              placeholder="e.g. CX-2026-001"
              required
              className="flex-1 px-5 py-4 bg-black/40 border border-border rounded-lg text-white text-sm outline-none focus:border-orange"
            />
            <button type="submit" className="px-7 py-4 rounded-lg text-sm font-semibold bg-orange text-white hover:bg-orange-2 transition-colors whitespace-nowrap">
              Track shipment
            </button>
          </form>
        </div>
      </div>

      <section className="px-[6%] py-20">
        <div className="max-w-[640px] mx-auto">
          {dbError && (
            <div className="px-5 py-4 bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-lg text-sm text-[#EF4444] text-center">
              Tracking is temporarily unavailable. Please try again shortly, or contact us directly.
            </div>
          )}

          {notFound && !dbError && (
            <div className="px-5 py-4 bg-gold/10 border border-gold/20 rounded-lg text-sm text-gold text-center">
              No shipment found for <strong>{number}</strong>. Double-check the tracking number, or{" "}
              <Link href="/contact" className="underline">contact us</Link>.
            </div>
          )}

          {shipment && (
            <div className="bg-card border border-border rounded-2xl p-9">
              <div className="flex justify-between items-start mb-8 max-[500px]:flex-col max-[500px]:gap-2">
                <div>
                  <div className="text-xs text-text-3 uppercase tracking-wider mb-1">Tracking Number</div>
                  <div className="text-xl font-semibold text-white">{shipment.tracking_number}</div>
                </div>
                <div className="px-4 py-1.5 rounded-full text-sm font-semibold bg-orange/10 text-orange border border-orange/20">
                  {shipment.status}
                </div>
              </div>
              {shipment.description && (
                <p className="text-sm text-text-2 mb-8">{shipment.description}</p>
              )}

              {stageIndex >= 0 && (
                <div className="flex flex-col gap-0">
                  {stages.map((stage, i) => (
                    <div key={stage} className="flex gap-4 items-start">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-3 h-3 rounded-full shrink-0 mt-1 ${i <= stageIndex ? "bg-orange" : "bg-border"}`}
                        />
                        {i < stages.length - 1 && (
                          <div className={`w-px h-8 ${i < stageIndex ? "bg-orange" : "bg-border"}`} />
                        )}
                      </div>
                      <div className={`text-sm pb-6 ${i <= stageIndex ? "text-white font-medium" : "text-text-3"}`}>
                        {stage}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="text-xs text-text-3 mt-2">
                Last updated {new Date(shipment.updated_at).toLocaleString()}
              </div>
            </div>
          )}

          {!number && (
            <p className="text-center text-sm text-text-3">
              Your tracking number was provided by your CostodiaX clearing agent, or is on your Voya client portal.
            </p>
          )}
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
}
