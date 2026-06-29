import Image from "next/image";
import Link from "next/link";
import { MapPin, ExternalLink } from "lucide-react";
import {
  siteConfig,
  formatLocation,
  type ClinicLocation,
} from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ClinicLocationCardsProps {
  locations?: ClinicLocation[];
  className?: string;
}

export function ClinicLocationCards({
  locations = siteConfig.locations,
  className,
}: ClinicLocationCardsProps) {
  return (
    <div className={cn("grid gap-6", className)}>
      {locations.map((location) => (
        <article
          key={location.id}
          className="overflow-hidden rounded-xl border bg-white shadow-sm"
        >
          <div className="grid md:grid-cols-[1fr_auto]">
            <div className="p-5">
              <div className="mb-3 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {location.label}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {formatLocation(location)}
                  </p>
                </div>
              </div>

              <Button asChild size="sm" className="mt-2">
                <Link
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>

            {location.qrCode && (
              <div className="flex flex-col items-center justify-center border-t bg-slate-50 p-5 md:w-52 md:border-l md:border-t-0">
                <Image
                  src={location.qrCode}
                  alt={`Google Maps QR code for ${location.label}`}
                  width={140}
                  height={140}
                  className="rounded-lg border bg-white p-1 shadow-sm"
                />
                <p className="mt-3 text-center text-xs font-medium text-muted-foreground">
                  Scan to open Google profile
                </p>
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
