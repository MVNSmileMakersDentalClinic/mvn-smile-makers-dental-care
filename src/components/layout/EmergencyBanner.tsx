import Link from "next/link";
import { Siren, Phone } from "lucide-react";
import { siteConfig, formatPhoneDisplay, getTelLink } from "@/lib/metadata";

export function EmergencyBanner() {
  const emergencyPhone = siteConfig.phones[0];

  return (
    <div className="bg-red-600 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-2 text-sm sm:flex-row">
        <div className="flex items-center gap-2 font-medium">
          <Siren className="h-4 w-4 shrink-0 animate-pulse" />
          <span>Dental Emergency? Same-day care available</span>
        </div>
        <Link
          href={getTelLink(emergencyPhone)}
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-red-600 transition-colors hover:bg-red-50"
        >
          <Phone className="h-4 w-4" />
          Call {formatPhoneDisplay(emergencyPhone)}
        </Link>
      </div>
    </div>
  );
}
