import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "../lib/doctor";

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl("Hi Dr. Sharma, I'd like to book an appointment.")}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="floating-whatsapp"
      aria-label="Chat on WhatsApp"
      className="wa-pulse fixed bottom-24 right-5 md:bottom-6 md:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-500/30 hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
