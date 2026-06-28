"use client";

import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

const defaultMessage =
  "Hello, I would like to book an appointment at MVN Smile Makers Dental Care.";

interface WhatsAppQuickLinkProps {
  message?: string;
  label?: string;
  className?: string;
  size?: "default" | "sm" | "lg";
}

export function WhatsAppQuickLink({
  message = defaultMessage,
  label = "Book on WhatsApp",
  className,
  size = "lg",
}: WhatsAppQuickLinkProps) {
  return (
    <WhatsAppButton
      label={label}
      size={size}
      className={className}
      onClick={() => {
        window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
      }}
    />
  );
}
