"use client";

import { useEffect, useState } from "react";

const options = [
  { text: "I want to clear my cargo at the port", label: "🚢 I want to clear my cargo" },
  { text: "I need bonded terminal storage in Port Harcourt", label: "📦 I need terminal storage" },
  { text: "I want to sign up for the Voya platform", label: "💻 I want to sign up for Voya" },
  { text: "I have a general enquiry for CostodiaX", label: "💬 General enquiry" },
];

const WA_ICON_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

export default function WhatsAppWidget() {
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setPopupOpen(true), 8000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-7 right-7 z-[999] font-sans">
      {popupOpen && (
        <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] w-[300px] mb-3 overflow-hidden">
          <div className="bg-[#25D366] px-5 py-4 flex items-center gap-3">
            <div className="w-[42px] h-[42px] rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d={WA_ICON_PATH} /></svg>
            </div>
            <div>
              <div className="text-sm font-bold text-white">CostodiaX Group</div>
              <div className="text-[11px] text-white/85 flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                Typically replies instantly
              </div>
            </div>
            <button onClick={() => setPopupOpen(false)} className="ml-auto cursor-pointer text-white text-lg leading-none bg-transparent border-none">
              &#10005;
            </button>
          </div>
          <div className="p-5 bg-[#ECE5DD]">
            <div className="bg-white rounded-[0_12px_12px_12px] px-4 py-3 text-[13.5px] text-[#303030] leading-relaxed shadow-sm">
              👋 Hello! Welcome to <strong>CostodiaX Group</strong>.<br /><br />
              How can we help you today? Choose an option below.
            </div>
            <div className="text-[10px] text-[#667781] text-right mt-1">CostodiaX · now</div>
          </div>
          <div className="px-4 py-3 bg-[#ECE5DD] border-t border-black/5 flex flex-col gap-2">
            {options.map((o) => (
              <a
                key={o.text}
                href={`https://wa.me/2348161172972?text=${encodeURIComponent(o.text)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-[#25D366] text-[#25D366] rounded-full px-4 py-2.5 text-[13px] font-semibold no-underline text-center transition-colors hover:bg-[#25D366] hover:text-white"
              >
                {o.label}
              </a>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setPopupOpen((o) => !o)}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center cursor-pointer shadow-[0_4px_20px_rgba(37,211,102,0.5)] transition-transform hover:scale-110 ml-auto border-none"
        aria-label="WhatsApp chat"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d={WA_ICON_PATH} /></svg>
      </button>
    </div>
  );
}
