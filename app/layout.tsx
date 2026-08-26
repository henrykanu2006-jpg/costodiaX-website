import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.costodiax.com"),
  title: {
    default: "CostodiaX Group — Nigeria's Premier Logistics Conglomerate",
    template: "%s — CostodiaX Group",
  },
  description:
    "CostodiaX Group — customs clearing, bonded terminal storage in Port Harcourt, haulage and the Voya platform across Nigeria and West Africa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans leading-relaxed">
        <Nav />
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
