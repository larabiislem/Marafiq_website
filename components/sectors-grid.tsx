"use client";

import Image from "next/image";
import { useState } from "react";
import { sectors } from "@/lib/site-content";
import { FadeIn, Stagger, StaggerItem } from "@/components/animated";

export function SectorsGrid({ locale }: { locale: "en" | "ar" }) {
  const isEn = locale === "en";

  return (
    <section className="bg-zinc-50 py-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-[#111] md:text-5xl">
              {isEn ? "Sectors Served" : "قطاعات الأعمال المخدومة"}
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-24 rounded-full bg-[#e8a33d]" />
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, idx) => (
            <SectorCard key={idx} sector={sector} isEn={isEn} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectorCard({ sector, isEn }: { sector: typeof sectors[0]; isEn: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative h-80 w-full cursor-pointer overflow-hidden rounded-2xl shadow-md transition-shadow hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <Image
        src={sector.image}
        alt={isEn ? sector.titleEn : sector.titleAr}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Permanent dark gradient to make the title legible always */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      
      {/* Title always visible at the bottom */}
      <div className={`absolute bottom-0 left-0 w-full p-6 transition-all duration-500 ${isHovered ? 'translate-y-[20px] opacity-0' : 'translate-y-0 opacity-100'}`}>
        <h3 className="text-xl font-bold text-white md:text-2xl drop-shadow-md">
          {isEn ? sector.titleEn : sector.titleAr}
        </h3>
      </div>

      {/* Overlay Description shown on hover/click */}
      <div 
        className={`absolute inset-0 flex flex-col justify-end bg-black/80 p-6 text-white backdrop-blur-sm transition-all duration-500 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="mb-4">
          <h3 className="mb-3 text-xl font-bold text-[#e8a33d] md:text-2xl">
            {isEn ? sector.titleEn : sector.titleAr}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-200 md:text-base">
            {isEn ? sector.descriptionEn : sector.descriptionAr}
          </p>
        </div>
      </div>
    </div>
  );
}
