import type { MetadataRoute } from "next";

const BASE_URL = "https://www.costodiax.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, lastModified: "2026-09-01", changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: "2026-09-01", changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/services/customs-clearance`, lastModified: "2026-09-01", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/services/freight-forwarding`, lastModified: "2026-09-01", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/services/haulage-transport`, lastModified: "2026-09-01", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/services/port-terminal`, lastModified: "2026-09-01", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/waybrix`, lastModified: "2026-09-21", changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/track`, lastModified: "2026-08-29", changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/quote`, lastModified: "2026-09-01", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: "2026-09-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: "2026-09-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified: "2026-09-01", changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/privacy`, lastModified: "2026-09-01", changeFrequency: "yearly", priority: 0.5 },
  ];
}
