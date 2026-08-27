import type { Metadata } from "next";
import { listShipments } from "@/lib/db";
import { saveShipmentAction, deleteShipmentAction, logoutAction } from "./actions";

export const metadata: Metadata = {
  title: "Admin — Shipments",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

const statusOptions = [
  "Documents Received",
  "PAAR Filed",
  "Vessel Arrived",
  "DO Collected",
  "Duties Paid",
  "Under Examination",
  "Released",
  "Delivered",
];

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; deleted?: string }>;
}) {
  const params = await searchParams;

  let shipments: Awaited<ReturnType<typeof listShipments>> = [];
  let dbError: string | null = null;
  try {
    shipments = await listShipments();
  } catch (err) {
    dbError = err instanceof Error ? err.message : "Could not connect to the database.";
  }

  return (
    <div className="min-h-screen px-[6%] py-16 max-w-[1000px] mx-auto">
      <div className="flex justify-between items-start mb-10">
        <div>
          <div className="font-serif text-2xl text-white mb-1">
            COSTODIA<span className="text-orange">X</span> <span className="text-text-3 text-lg font-sans">Admin</span>
          </div>
          <div className="text-sm text-text-3">Manage shipment tracking statuses</div>
        </div>
        <form action={logoutAction}>
          <button type="submit" className="px-4 py-2 rounded-lg text-sm font-medium bg-white/[0.06] border border-border text-text-2 hover:bg-white/10 transition-colors">
            Log out
          </button>
        </form>
      </div>

      {params.saved && (
        <div className="mb-6 px-4 py-3 bg-[#10B981]/10 border border-[#10B981]/20 rounded-lg text-sm text-[#10B981]">
          Shipment saved.
        </div>
      )}
      {params.deleted && (
        <div className="mb-6 px-4 py-3 bg-[#10B981]/10 border border-[#10B981]/20 rounded-lg text-sm text-[#10B981]">
          Shipment deleted.
        </div>
      )}

      {dbError ? (
        <div className="px-5 py-4 bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-lg text-sm text-[#EF4444]">
          No database connected yet. Go to this project&apos;s <strong>Storage</strong> tab in Vercel and connect a
          Postgres database, then set the <code>ADMIN_PASSWORD</code> and <code>SESSION_SECRET</code> environment
          variables and redeploy.
          <div className="mt-2 text-xs text-[#EF4444]/70">{dbError}</div>
        </div>
      ) : (
      <>
      <div className="bg-card border border-border rounded-2xl p-8 mb-10">
        <div className="text-[15px] font-semibold text-white mb-5">Add / update shipment</div>
        <form action={saveShipmentAction} className="grid grid-cols-3 max-[700px]:grid-cols-1 gap-4 items-end">
          <div>
            <label className="block text-xs font-medium text-text-2 mb-2">Tracking number</label>
            <input
              type="text"
              name="tracking_number"
              required
              placeholder="CX-2026-005"
              className="w-full px-4 py-3 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-text-2 mb-2">Status</label>
            <select name="status" required className="w-full px-4 py-3 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange">
              {statusOptions.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-text-2 mb-2">Description (optional)</label>
            <input
              type="text"
              name="description"
              placeholder="Generator Sets"
              className="w-full px-4 py-3 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange"
            />
          </div>
          <div className="col-span-3 max-[700px]:col-span-1">
            <button type="submit" className="px-6 py-3 rounded-lg text-sm font-semibold bg-orange text-white hover:bg-orange-2 transition-colors">
              Save shipment
            </button>
          </div>
        </form>
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="text-[15px] font-semibold text-white p-8 pb-5">All shipments ({shipments.length})</div>
        {shipments.length === 0 ? (
          <div className="px-8 pb-8 text-sm text-text-3">No shipments yet. Add one above.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-t border-border text-left text-xs text-text-3 uppercase tracking-wider">
                  <th className="px-8 py-3 font-medium">Tracking #</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Description</th>
                  <th className="px-4 py-3 font-medium">Updated</th>
                  <th className="px-8 py-3 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {shipments.map((s) => (
                  <tr key={s.tracking_number} className="border-t border-border">
                    <td className="px-8 py-4 text-white font-medium whitespace-nowrap">{s.tracking_number}</td>
                    <td className="px-4 py-4 text-text-2 whitespace-nowrap">{s.status}</td>
                    <td className="px-4 py-4 text-text-3">{s.description || "—"}</td>
                    <td className="px-4 py-4 text-text-3 whitespace-nowrap">{new Date(s.updated_at).toLocaleString()}</td>
                    <td className="px-8 py-4 text-right">
                      <form action={deleteShipmentAction}>
                        <input type="hidden" name="tracking_number" value={s.tracking_number} />
                        <button type="submit" className="text-[#EF4444] text-xs font-medium hover:underline">
                          Delete
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      </>
      )}
    </div>
  );
}
