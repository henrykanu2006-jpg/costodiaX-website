import { neon } from "@neondatabase/serverless";

function getSql() {
  const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set — connect a Postgres database in Vercel first.");
  }
  return neon(url);
}

export type Shipment = {
  tracking_number: string;
  status: string;
  description: string | null;
  updated_at: string;
};

async function ensureTable() {
  const sql = getSql();
  await sql`
    CREATE TABLE IF NOT EXISTS shipments (
      tracking_number TEXT PRIMARY KEY,
      status TEXT NOT NULL,
      description TEXT,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  return sql;
}

export async function getShipment(trackingNumber: string): Promise<Shipment | null> {
  const sql = await ensureTable();
  const rows = await sql`
    SELECT tracking_number, status, description, updated_at
    FROM shipments
    WHERE tracking_number = ${trackingNumber.trim()}
  `;
  return (rows[0] as Shipment) ?? null;
}

export async function listShipments(): Promise<Shipment[]> {
  const sql = await ensureTable();
  const rows = await sql`
    SELECT tracking_number, status, description, updated_at
    FROM shipments
    ORDER BY updated_at DESC
  `;
  return rows as Shipment[];
}

export async function upsertShipment(trackingNumber: string, status: string, description: string) {
  const sql = await ensureTable();
  await sql`
    INSERT INTO shipments (tracking_number, status, description, updated_at)
    VALUES (${trackingNumber.trim()}, ${status.trim()}, ${description.trim() || null}, now())
    ON CONFLICT (tracking_number)
    DO UPDATE SET status = EXCLUDED.status, description = EXCLUDED.description, updated_at = now()
  `;
}

export async function deleteShipment(trackingNumber: string) {
  const sql = await ensureTable();
  await sql`DELETE FROM shipments WHERE tracking_number = ${trackingNumber.trim()}`;
}
