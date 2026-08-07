import { MessageCircle } from "lucide-react";
import { companyInfo } from "@/lib/site-content";

export function WhatsAppFloat() {
  return (
    <a
      href={companyInfo.whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.03]"
      aria-label="WhatsApp quick contact"
    >
      <MessageCircle size={18} />
      WhatsApp
    </a>
  );
}
