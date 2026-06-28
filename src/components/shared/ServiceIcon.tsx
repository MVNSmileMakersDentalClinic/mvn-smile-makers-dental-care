import {
  Stethoscope,
  Sparkles,
  AlignCenter,
  CircleDot,
  Baby,
  Siren,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Sparkles,
  AlignCenter,
  CircleDot,
  Baby,
  Siren,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Stethoscope;
  return <Icon className={className} />;
}
