import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CostodiaX Group",
  url: "https://www.costodiax.com",
  logo: "https://www.costodiax.com/favicon.ico",
  telephone: "+2348161172972",
  address: {
    "@type": "PostalAddress",
    streetAddress: "11 East West Road, Akpajo",
    addressRegion: "Rivers State",
    addressCountry: "NG",
  },
  areaServed: "NG",
  sameAs: [
    "https://www.instagram.com/costodia_x/",
    "https://www.tiktok.com/@costodiax4",
    "https://www.linkedin.com/company/costodia-x",
    "https://www.facebook.com/costodia_x",
  ],
};

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
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
