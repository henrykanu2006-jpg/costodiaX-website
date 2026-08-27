import type { Metadata } from "next";
import { loginAction } from "../actions";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <form action={loginAction} className="w-full max-w-[380px] bg-card border border-border rounded-2xl p-9">
        <div className="font-serif text-2xl text-white mb-1">
          COSTODIA<span className="text-orange">X</span>
        </div>
        <div className="text-sm text-text-3 mb-8">Admin access</div>

        {params.error && (
          <div className="mb-5 px-4 py-3 bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-lg text-sm text-[#EF4444]">
            Incorrect password.
          </div>
        )}

        <label className="block text-xs font-medium text-text-2 mb-2">Password</label>
        <input
          type="password"
          name="password"
          required
          autoFocus
          className="w-full px-4 py-3.5 bg-black/40 border border-border rounded-lg text-text text-sm outline-none focus:border-orange mb-6"
        />
        <button
          type="submit"
          className="w-full py-3.5 rounded-lg text-sm font-semibold bg-orange text-white hover:bg-orange-2 transition-colors"
        >
          Log in
        </button>
      </form>
    </div>
  );
}
