"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  onClick: () => void;
  className?: string;
  size?: "default" | "sm" | "lg";
  fullWidth?: boolean;
  label?: string;
}

export function WhatsAppButton({
  onClick,
  className,
  size = "lg",
  fullWidth = false,
  label = "Book on WhatsApp",
}: WhatsAppButtonProps) {
  return (
    <Button
      type="button"
      size={size}
      onClick={onClick}
      className={cn(
        "bg-[#25D366] text-white hover:bg-[#1ebe57]",
        fullWidth && "w-full",
        className
      )}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </Button>
  );
}
