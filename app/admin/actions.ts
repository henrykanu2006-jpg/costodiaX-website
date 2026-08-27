"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, createSessionToken, isValidPassword } from "@/lib/auth";
import { upsertShipment, deleteShipment } from "@/lib/db";

export async function loginAction(formData: FormData) {
  const password = String(formData.get("password") || "");

  if (!isValidPassword(password)) {
    redirect("/admin/login?error=1");
  }

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect("/admin");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
  redirect("/admin/login");
}

export async function saveShipmentAction(formData: FormData) {
  const trackingNumber = String(formData.get("tracking_number") || "").trim();
  const status = String(formData.get("status") || "").trim();
  const description = String(formData.get("description") || "").trim();

  if (!trackingNumber || !status) {
    redirect("/admin?error=missing_fields");
  }

  await upsertShipment(trackingNumber, status, description);
  redirect("/admin?saved=1");
}

export async function deleteShipmentAction(formData: FormData) {
  const trackingNumber = String(formData.get("tracking_number") || "");
  if (trackingNumber) {
    await deleteShipment(trackingNumber);
  }
  redirect("/admin?deleted=1");
}
