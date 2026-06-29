import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/metadata";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  imageClassName?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { image: 40, text: "text-base" },
  md: { image: 48, text: "text-lg" },
  lg: { image: 64, text: "text-xl" },
};

export function Logo({
  className,
  imageClassName,
  showText = false,
  size = "md",
}: LogoProps) {
  const dimensions = sizeMap[size];

  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/images/mvn_logo.png"
        alt={siteConfig.name}
        width={dimensions.image}
        height={dimensions.image}
        priority
        className={cn("h-auto w-auto object-contain", imageClassName)}
        style={{ maxHeight: dimensions.image, maxWidth: dimensions.image }}
      />
      {showText && (
        <div className="flex flex-col">
          <span
            className={cn(
              "font-bold leading-tight text-primary",
              dimensions.text
            )}
          >
            {siteConfig.brandShort.line1}
          </span>
          <span className="text-xs leading-tight text-muted-foreground">
            {siteConfig.brandShort.line2}
          </span>
        </div>
      )}
    </Link>
  );
}
