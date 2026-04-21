import { Phone } from "lucide-react";
import { CLINIC } from "../lib/doctor";

export default function EmergencyBanner() {
  return (
    <div
      data-testid="emergency-banner"
      className="w-full bg-[#0F2C59] text-white text-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-2 flex items-center justify-center gap-2 text-center">
        <Phone className="h-4 w-4 text-[#E6F4F1]" aria-hidden="true" />
        <span className="font-medium">
          Cardiac Emergency? Call 24/7:
        </span>
        <a
          href={`tel:${CLINIC.phoneRaw}`}
          className="font-semibold underline-offset-4 hover:underline"
          data-testid="emergency-phone-link"
        >
          {CLINIC.emergencyPhone}
        </a>
      </div>
    </div>
  );
}
