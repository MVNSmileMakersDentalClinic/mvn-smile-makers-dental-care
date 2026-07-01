"use client";

import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const defaultMessage =
  "Hello, I have a question for MVN Smile Makers Dental Care.";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-105 hover:bg-[#1ebe57] md:bottom-6 md:right-6"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}
