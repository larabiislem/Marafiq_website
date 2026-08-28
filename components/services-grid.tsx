"use client";

import Image from "next/image";
import Link from "next/link";
import { ServiceIcon } from "@/components/service-icon";
import { Stagger, StaggerItem } from "@/components/animated";

type ServiceData = {
  slug: string;
  icon: string;
  image: string;
  en: { title: string; description: string; detailsIntro: string; features: readonly string[] };
  ar: { title: string; description: string; detailsIntro: string; features: readonly string[] };
};

type Props = {
  services: readonly ServiceData[];
  locale: "en" | "ar";
  rtl: boolean;
};

export function ServicesGrid({ services, locale, rtl }: Props) {
  return (
    <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <StaggerItem key={service.slug}>
          <Link href={`/${locale}/services/${service.slug}`} className="block h-full">
            <div className="hover-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:border-[#e8a33d]/40 hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden bg-zinc-100">
                <Image src={service.image} alt={service[locale].title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <ServiceIcon icon={service.icon} />
                <h3 className="mt-4 text-xl font-bold">{service[locale].title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">{service[locale].description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="h-0.5 w-10 rounded-full bg-[#e8a33d] transition-all duration-300 group-hover:w-16" />
                  <span className="text-xs font-bold text-[#e8a33d] uppercase tracking-wider group-hover:opacity-100 opacity-0 transition-opacity">
                    {locale === "en" ? "View Details" : "عرض التفاصيل"}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
