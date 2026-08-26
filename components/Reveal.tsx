"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Reveal({
  children,
  delay,
  className = "",
}: {
  children: ReactNode;
  delay?: "d1" | "d2" | "d3" | "d4";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const delayStyle = delay
    ? { transitionDelay: { d1: "0.1s", d2: "0.2s", d3: "0.3s", d4: "0.4s" }[delay] }
    : undefined;

  return (
    <div ref={ref} className={`reveal ${className}`} style={delayStyle}>
      {children}
    </div>
  );
}
