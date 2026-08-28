import { Bolt, Droplets, Fan, ShieldCheck, Sparkles, Cable, Hammer, Factory } from "lucide-react";

type ServiceIconProps = {
  icon: string;
};

export function ServiceIcon({ icon }: ServiceIconProps) {
  if (icon === "bolt") return <Bolt className="h-7 w-7 text-[#e8a33d]" />;
  if (icon === "fan") return <Fan className="h-7 w-7 text-[#e8a33d]" />;
  if (icon === "droplets") return <Droplets className="h-7 w-7 text-[#e8a33d]" />;
  if (icon === "shield") return <ShieldCheck className="h-7 w-7 text-[#e8a33d]" />;
  if (icon === "sparkles") return <Sparkles className="h-7 w-7 text-[#e8a33d]" />;
  if (icon === "cable") return <Cable className="h-7 w-7 text-[#e8a33d]" />;
  if (icon === "hammer") return <Hammer className="h-7 w-7 text-[#e8a33d]" />;
  if (icon === "factory") return <Factory className="h-7 w-7 text-[#e8a33d]" />;
  return <Bolt className="h-7 w-7 text-[#e8a33d]" />;
}
