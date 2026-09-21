"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/waybrix", label: "Waybrix Platform" },
  { href: "/track", label: "Track Shipment" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] px-[6%] h-[74px] flex items-center justify-between transition-all duration-400 ${
          scrolled ? "bg-[rgba(5,10,18,0.97)] backdrop-blur-xl border-b border-border" : ""
        }`}
      >
        <Link href="/" className="font-serif text-[22px] text-white no-underline">
          COSTODIA<span className="text-orange">X</span>
        </Link>
        <button
          className="hidden max-[900px]:flex flex-col gap-[5px] cursor-pointer p-1 bg-transparent border-none"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className="block w-6 h-0.5 bg-white rounded-sm transition-transform"
            style={open ? { transform: "rotate(45deg) translate(5px,5px)" } : undefined}
          />
          <span className="block w-6 h-0.5 bg-white rounded-sm transition-opacity" style={open ? { opacity: 0 } : undefined} />
          <span
            className="block w-6 h-0.5 bg-white rounded-sm transition-transform"
            style={open ? { transform: "rotate(-45deg) translate(5px,-5px)" } : undefined}
          />
        </button>
        <ul className="max-[900px]:hidden flex items-center gap-9 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`relative text-[13.5px] font-medium no-underline transition-colors ${
                  pathname === l.href ? "text-white" : "text-text-2 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://app.costodiax.com"
              className="px-6 py-2.5 bg-orange text-white! rounded-md font-semibold! transition-all! hover:bg-orange-2! hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(234,88,12,0.3)]!"
            >
              Get Started
            </a>
          </li>
        </ul>
      </nav>

      {open && (
        <div className="min-[901px]:hidden fixed top-[74px] left-0 right-0 bg-[rgba(5,10,18,0.98)] backdrop-blur-xl border-b border-border z-[99] px-[6%] py-5 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-text-2 no-underline text-[15px] font-medium py-3.5 border-b border-border hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://app.costodiax.com"
            onClick={() => setOpen(false)}
            className="text-white no-underline text-[15px] font-semibold bg-orange px-5 py-3.5 rounded-md mt-2 text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </>
  );
}
