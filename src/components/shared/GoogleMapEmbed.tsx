import { formatLocation, getMapEmbedUrl, type ClinicLocation } from "@/lib/metadata";

interface GoogleMapEmbedProps {
  location: ClinicLocation;
}

export function GoogleMapEmbed({ location }: GoogleMapEmbedProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <div className="border-b px-4 py-3">
        <h4 className="font-semibold text-foreground">{location.label}</h4>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {formatLocation(location)}
        </p>
      </div>
      <iframe
        title={`Map of ${location.label}`}
        src={getMapEmbedUrl(location)}
        className="h-64 w-full border-0 md:h-72"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
