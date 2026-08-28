"use client";

import { useState } from "react";
import Image from "next/image";
import { ServiceIcon } from "@/components/service-icon";
import { Stagger, StaggerItem } from "@/components/animated";
import { X, CheckCircle2 } from "lucide-react";

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
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

  return (
    <>
      <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <StaggerItem key={service.slug}>
            <div 
              className="cursor-pointer hover-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:border-[#e8a33d]/40 hover:shadow-md"
              onClick={() => setSelectedService(service)}
            >
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
          </StaggerItem>
        ))}
      </Stagger>

      {/* MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" dir={rtl ? "rtl" : "ltr"}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedService(null)} />
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col">
            <button 
              onClick={() => setSelectedService(null)}
              className={`absolute top-4 ${rtl ? 'left-4' : 'right-4'} z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60 hover:scale-110`}
            >
              <X size={20} />
            </button>
            <div className="relative h-64 sm:h-80 w-full shrink-0">
              <Image src={selectedService.image} alt={selectedService[locale].title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8a33d] shadow-lg">
                   <ServiceIcon icon={selectedService.icon} />
                </div>
                <h2 className="text-3xl font-bold text-white sm:text-5xl">{selectedService[locale].title}</h2>
              </div>
            </div>
            <div className="overflow-y-auto p-8 sm:p-12">
              <p className="mb-10 text-xl leading-relaxed text-zinc-600 font-medium">
                {selectedService[locale].detailsIntro}
              </p>
              <h3 className="mb-8 flex items-center gap-4 text-2xl font-bold text-[#111]">
                <span className="w-8 h-1 bg-[#e8a33d] rounded-full inline-block"></span>
                {locale === "en" ? "Service Capabilities" : "قدرات الخدمة"}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {selectedService[locale].features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 rounded-2xl bg-zinc-50 p-5 border border-zinc-100 hover:border-[#e8a33d]/30 hover:bg-white hover:shadow-sm transition-all">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#e8a33d]" />
                    <span className="text-zinc-800 font-bold text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
