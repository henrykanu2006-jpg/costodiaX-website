import Nav from "@/components/Nav";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {children}
      <WhatsAppWidget />
    </>
  );
}
