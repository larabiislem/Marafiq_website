import { Bolt, Droplets, Fan, ShieldCheck, Sparkles } from "lucide-react";

type ServiceIconProps = {
  icon: string;
};

export function ServiceIcon({ icon }: ServiceIconProps) {
  if (icon === "bolt") return <Bolt className="h-7 w-7 text-[#e8a33d]" />;
  if (icon === "fan") return <Fan className="h-7 w-7 text-[#e8a33d]" />;
  if (icon === "droplets") return <Droplets className="h-7 w-7 text-[#e8a33d]" />;
  if (icon === "shield") return <ShieldCheck className="h-7 w-7 text-[#e8a33d]" />;
  if (icon === "sparkles") return <Sparkles className="h-7 w-7 text-[#e8a33d]" />;
  return <Bolt className="h-7 w-7 text-[#e8a33d]" />;
}
