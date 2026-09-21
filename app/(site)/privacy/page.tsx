import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for CostodiaX Group and the Waybrix Platform.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <div className="max-w-[760px] mx-auto px-[6%] pt-[140px] pb-[100px]">
        <div className="text-[11px] font-bold text-orange tracking-[0.16em] uppercase mb-4">Legal</div>
        <h1 className="font-serif text-[clamp(36px,5vw,60px)] font-bold text-white tracking-[-0.03em] leading-[1.08] mb-4">Privacy Policy</h1>
        <div className="w-10 h-0.5 bg-orange rounded-sm mb-10" />
        <p className="text-[13px] text-text-3 mb-14">Last updated: July 2026</p>

        <p className="text-[15px] text-text-2 leading-[1.8] mb-4">CostodiaX Group (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights regarding your information.</p>
        <p className="text-[15px] text-text-2 leading-[1.8] mb-4">By using our website at <a href="https://www.costodiax.com" className="text-orange no-underline hover:underline">costodiax.com</a> or submitting any form on our site, you agree to the terms of this Privacy Policy.</p>

        <h2 className="font-serif text-[22px] font-semibold text-white mt-12 mb-4">1. Information We Collect</h2>
        <p className="text-[15px] text-text-2 leading-[1.8] mb-4">When you contact us or submit a form on our website, we may collect the following information:</p>
        <ul className="pl-5 mb-4 list-disc">
          {["Your full name", "Your company name", "Your email address", "Your phone number", "Any message or details you provide about your enquiry"].map((i) => (
            <li key={i} className="text-[15px] text-text-2 leading-[1.8] mb-2">{i}</li>
          ))}
        </ul>
        <p className="text-[15px] text-text-2 leading-[1.8] mb-4">We do not collect any payment information through our website. We do not use cookies for tracking purposes beyond basic website analytics.</p>

        <h2 className="font-serif text-[22px] font-semibold text-white mt-12 mb-4">2. How We Use Your Information</h2>
        <p className="text-[15px] text-text-2 leading-[1.8] mb-4">We use the information you provide solely to:</p>
        <ul className="pl-5 mb-4 list-disc">
          {[
            "Respond to your enquiry about our logistics services or the Waybrix platform",
            "Provide you with a quote or further information you have requested",
            "Onboard you onto the Waybrix platform if you have signed up",
            "Contact you regarding your existing service with CostodiaX Group",
          ].map((i) => (
            <li key={i} className="text-[15px] text-text-2 leading-[1.8] mb-2">{i}</li>
          ))}
        </ul>
        <p className="text-[15px] text-text-2 leading-[1.8] mb-4">We will never sell, rent, or share your personal information with third parties for marketing purposes.</p>

        <h2 className="font-serif text-[22px] font-semibold text-white mt-12 mb-4">3. How We Store Your Information</h2>
        <p className="text-[15px] text-text-2 leading-[1.8] mb-4">Form submissions on our website are processed through Formspree, a secure form handling service. Your submission data is stored on Formspree&apos;s servers and delivered to our email inbox. You can view Formspree&apos;s privacy policy at <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-orange no-underline hover:underline">formspree.io/legal/privacy-policy</a>.</p>
        <p className="text-[15px] text-text-2 leading-[1.8] mb-4">We store your contact details securely and only retain them for as long as necessary to provide our services or respond to your enquiry.</p>

        <h2 className="font-serif text-[22px] font-semibold text-white mt-12 mb-4">4. Your Rights</h2>
        <p className="text-[15px] text-text-2 leading-[1.8] mb-4">You have the right to:</p>
        <ul className="pl-5 mb-4 list-disc">
          {[
            "Request a copy of the personal information we hold about you",
            "Request that we correct any inaccurate information",
            "Request that we delete your personal information",
            "Withdraw consent for us to contact you at any time",
          ].map((i) => (
            <li key={i} className="text-[15px] text-text-2 leading-[1.8] mb-2">{i}</li>
          ))}
        </ul>
        <p className="text-[15px] text-text-2 leading-[1.8] mb-4">To exercise any of these rights, please contact us at <a href="mailto:contact@costodiax.com" className="text-orange no-underline hover:underline">contact@costodiax.com</a>.</p>

        <h2 className="font-serif text-[22px] font-semibold text-white mt-12 mb-4">5. Third-Party Services</h2>
        <p className="text-[15px] text-text-2 leading-[1.8] mb-4">Our website uses the following third-party services:</p>
        <ul className="pl-5 mb-4 list-disc">
          <li className="text-[15px] text-text-2 leading-[1.8] mb-2"><strong className="text-white">Formspree</strong> — for processing contact form submissions</li>
          <li className="text-[15px] text-text-2 leading-[1.8] mb-2"><strong className="text-white">Google Fonts</strong> — for website typography</li>
          <li className="text-[15px] text-text-2 leading-[1.8] mb-2"><strong className="text-white">Google Search Console</strong> — for monitoring website performance in search results</li>
          <li className="text-[15px] text-text-2 leading-[1.8] mb-2"><strong className="text-white">Vercel</strong> — for website hosting</li>
        </ul>

        <h2 className="font-serif text-[22px] font-semibold text-white mt-12 mb-4">6. Children&apos;s Privacy</h2>
        <p className="text-[15px] text-text-2 leading-[1.8] mb-4">Our website and services are not directed at children under the age of 13. We do not knowingly collect personal information from children.</p>

        <h2 className="font-serif text-[22px] font-semibold text-white mt-12 mb-4">7. Changes to This Policy</h2>
        <p className="text-[15px] text-text-2 leading-[1.8] mb-4">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this page periodically.</p>

        <h2 className="font-serif text-[22px] font-semibold text-white mt-12 mb-4">8. Contact Us</h2>
        <p className="text-[15px] text-text-2 leading-[1.8] mb-4">If you have any questions about this Privacy Policy or how we handle your data, please contact us:</p>
        <ul className="pl-5 mb-4 list-disc">
          <li className="text-[15px] text-text-2 leading-[1.8] mb-2"><strong className="text-white">Email:</strong> <a href="mailto:contact@costodiax.com" className="text-orange no-underline hover:underline">contact@costodiax.com</a></li>
          <li className="text-[15px] text-text-2 leading-[1.8] mb-2"><strong className="text-white">Phone:</strong> <a href="tel:+2348161172972" className="text-orange no-underline hover:underline">0816 117 2972</a></li>
          <li className="text-[15px] text-text-2 leading-[1.8] mb-2"><strong className="text-white">Address:</strong> Arise and Shine Bus Stop, 11 Ahoada East-West Road, Eleme, Port Harcourt, Rivers State, Nigeria</li>
        </ul>
      </div>

      <footer className="bg-[#030508] border-t border-border px-[6%] py-10 flex justify-between items-center max-[600px]:flex-col max-[600px]:gap-5 max-[600px]:text-center">
        <div className="font-serif text-xl text-white">COSTODIA<span className="text-orange">X</span> Group</div>
        <div className="text-[12.5px] text-text-3">© 2026 CostodiaX Group. All rights reserved.</div>
        <div className="flex gap-6">
          <Link href="/" className="text-[12.5px] text-text-3 no-underline hover:text-orange">Home</Link>
          <Link href="/contact" className="text-[12.5px] text-text-3 no-underline hover:text-orange">Contact</Link>
          <Link href="/privacy" className="text-[12.5px] text-text-3 no-underline hover:text-orange">Privacy</Link>
        </div>
      </footer>
    </>
  );
}
