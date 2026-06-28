import {
  siteConfig,
  formatPhoneDisplay,
  getTelLink,
} from "@/lib/metadata";
import { cn } from "@/lib/utils";

interface PhoneListProps {
  className?: string;
  stacked?: boolean;
}

export function PhoneList({ className, stacked = false }: PhoneListProps) {
  return (
    <div className={cn(stacked ? "space-y-1" : "flex flex-wrap gap-x-4 gap-y-1", className)}>
      {siteConfig.phones.map((phone) => (
        <a
          key={phone}
          href={getTelLink(phone)}
          className="text-sm hover:text-primary"
        >
          {formatPhoneDisplay(phone)}
        </a>
      ))}
    </div>
  );
}
