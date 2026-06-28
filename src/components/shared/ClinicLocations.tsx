import { MapPin, ExternalLink } from "lucide-react";
import {
  siteConfig,
  formatLocation,
  type ClinicLocation,
} from "@/lib/metadata";
import { cn } from "@/lib/utils";

interface ClinicLocationsProps {
  locations?: ClinicLocation[];
  compact?: boolean;
  className?: string;
}

export function ClinicLocations({
  locations = siteConfig.locations,
  compact = false,
  className,
}: ClinicLocationsProps) {
  return (
    <ul className={cn("space-y-4", className)}>
      {locations.map((location) => (
        <li key={location.id} className="flex items-start gap-2">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground">{location.label}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {formatLocation(location)}
            </p>
            {!compact && (
              <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                Get Directions
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
