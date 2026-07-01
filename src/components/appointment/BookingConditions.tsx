import { Info } from "lucide-react";
import { locationBookingConditions } from "@/lib/data";

interface BookingConditionsProps {
  locationId: string;
}

export function BookingConditions({ locationId }: BookingConditionsProps) {
  const conditions = locationBookingConditions[locationId];
  if (!conditions) return null;

  return (
    <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
      <div className="mb-2 flex items-center gap-2">
        <Info className="h-4 w-4 text-primary" />
        <h4 className="font-semibold text-foreground">{conditions.title}</h4>
      </div>
      <p className="mb-3 text-sm font-medium text-primary">{conditions.schedule}</p>
      <ul className="space-y-1.5">
        {conditions.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
