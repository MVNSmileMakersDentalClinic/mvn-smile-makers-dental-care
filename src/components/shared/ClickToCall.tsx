import { Phone } from "lucide-react";
import { formatPhoneDisplay, getTelLink } from "@/lib/metadata";
import { cn } from "@/lib/utils";

interface ClickToCallProps {
  phone: string;
  className?: string;
  showIcon?: boolean;
  variant?: "link" | "button";
}

export function ClickToCall({
  phone,
  className,
  showIcon = true,
  variant = "link",
}: ClickToCallProps) {
  const href = getTelLink(phone);
  const label = formatPhoneDisplay(phone);

  if (variant === "button") {
    return (
      <a
        href={href}
        className={cn(
          "inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
          className
        )}
      >
        {showIcon && <Phone className="h-4 w-4" />}
        {label}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-1.5 font-medium text-primary hover:underline",
        className
      )}
    >
      {showIcon && <Phone className="h-4 w-4" />}
      {label}
    </a>
  );
}
