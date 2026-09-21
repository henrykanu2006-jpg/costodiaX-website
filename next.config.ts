import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/voya.html", destination: "/waybrix", permanent: true },
      { source: "/voya", destination: "/waybrix", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/privacy.html", destination: "/privacy", permanent: true },
    ];
  },
};

export default nextConfig;
