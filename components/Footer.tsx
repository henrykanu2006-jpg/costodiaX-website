import Link from "next/link";

const socials = [
  {
    href: "https://www.instagram.com/costodia_x/",
    title: "Instagram",
    path: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
      </>
    ),
    stroke: true,
  },
  {
    href: "https://www.tiktok.com/@costodiax4",
    title: "TikTok",
    d: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.16 8.16 0 004.77 1.52V6.82a4.85 4.85 0 01-1-.13z",
  },
  {
    href: "https://www.linkedin.com/company/costodia-x",
    title: "LinkedIn",
    d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
    circle: true,
  },
  {
    href: "https://www.facebook.com/costodia_x",
    title: "Facebook",
    d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#030508] border-t border-border px-[6%] pt-[70px] pb-9">
      <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 mb-14 max-[960px]:grid-cols-2 max-[960px]:gap-8 max-[600px]:grid-cols-1">
        <div>
          <div className="font-serif text-2xl text-white mb-3.5">
            COSTODIA<span className="text-orange">X</span> Group
          </div>
          <p className="text-[13.5px] text-text-3 leading-relaxed max-w-[240px] mb-4">
            Nigeria&apos;s premier logistics conglomerate — customs clearing, bonded terminal in Port Harcourt, haulage and the Voya platform.
          </p>
          <div className="flex gap-3 mt-4">
            {socials.map((s) => (
              <a
                key={s.title}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.title}
                className="w-[38px] h-[38px] rounded-lg bg-white/[0.06] border border-white/[0.12] flex items-center justify-center no-underline transition-colors hover:bg-orange"
              >
                {s.path ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {s.path}
                  </svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                    <path d={s.d} />
                    {s.circle && <circle cx="4" cy="4" r="2" />}
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-[11px] font-bold text-white tracking-wider uppercase mb-5">Company</h4>
          <Link href="/" className="block text-[13.5px] text-text-3 no-underline mb-3 hover:text-orange">Home</Link>
          <Link href="/services" className="block text-[13.5px] text-text-3 no-underline mb-3 hover:text-orange">Services</Link>
          <Link href="/about" className="block text-[13.5px] text-text-3 no-underline mb-3 hover:text-orange">About Us</Link>
          <Link href="/contact" className="block text-[13.5px] text-text-3 no-underline mb-3 hover:text-orange">Contact</Link>
          <Link href="/faq" className="block text-[13.5px] text-text-3 no-underline mb-3 hover:text-orange">FAQ</Link>
        </div>
        <div>
          <h4 className="text-[11px] font-bold text-white tracking-wider uppercase mb-5">Voya Platform</h4>
          <Link href="/voya" className="block text-[13.5px] text-text-3 no-underline mb-3 hover:text-orange">Overview</Link>
          <Link href="/voya#features" className="block text-[13.5px] text-text-3 no-underline mb-3 hover:text-orange">Features</Link>
          <Link href="/voya#pricing" className="block text-[13.5px] text-text-3 no-underline mb-3 hover:text-orange">Pricing</Link>
          <Link href="/voya#signup" className="block text-[13.5px] text-text-3 no-underline mb-3 hover:text-orange">Sign Up</Link>
        </div>
        <div>
          <h4 className="text-[11px] font-bold text-white tracking-wider uppercase mb-5">Contact</h4>
          <a href="tel:+2348161172972" className="contact-link block text-[13.5px] text-text-3 no-underline mb-3 hover:text-orange">0816 117 2972</a>
          <a href="mailto:contact@costodiax.com" className="contact-link block text-[13.5px] text-text-3 no-underline mb-3 hover:text-orange">contact@costodiax.com</a>
          <div className="text-[13.5px] text-text-3 mb-3">11 Ahoada East-West Road, Eleme, Rivers State</div>
          <div className="text-[13.5px] text-text-3 mb-3">Bonded Terminal, Port Harcourt</div>
        </div>
      </div>
      <div className="border-t border-border pt-7 flex justify-between items-center max-[960px]:flex-col max-[960px]:gap-3 max-[960px]:text-center">
        <div className="text-[12.5px] text-text-3">
          © 2026 CostodiaX Group. All rights reserved.{" "}
          <Link href="/privacy" className="text-text-3 no-underline ml-3 hover:text-orange">Privacy Policy</Link>
        </div>
        <div className="text-[12.5px] text-text-3">
          Voya Platform — <span className="text-orange font-semibold">Powered by CostodiaX</span>
        </div>
      </div>
    </footer>
  );
}
