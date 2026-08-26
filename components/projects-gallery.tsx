"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { dictionary, Locale, projectItems, services } from "@/lib/site-content";

type ProjectsGalleryProps = {
  locale: Locale;
};

export function ProjectsGallery({ locale }: ProjectsGalleryProps) {
  const t = dictionary[locale].projects;
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = useMemo(
    () => [
      { value: "all", label: t.all },
      ...services.map((service) => ({
        value: service.slug,
        label: service[locale].title,
      })),
    ],
    [locale, t.all],
  );

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? projectItems
        : projectItems.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <>
      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            type="button"
            key={category.value}
            onClick={() => setActiveCategory(category.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeCategory === category.value
                ? "bg-[#e8a33d] text-[#1a1a1a] shadow-md"
                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, idx) => (
          <article
            key={`${project.titleEn}-${idx}`}
            className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.01]"
          >
            {/* Image */}
            <div className="relative h-56 w-full overflow-hidden bg-zinc-100">
              <Image
                src={project.image}
                alt={locale === "en" ? project.titleEn : project.titleAr}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay always visible at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Category badge */}
              <span className="absolute top-3 start-3 rounded-full bg-[#e8a33d] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#111]">
                {locale === "en" ? project.typeEn : project.typeAr}
              </span>
            </div>

            {/* Details */}
            <div className="p-5">
              <h3 className="text-base font-bold leading-snug text-[#111]">
                {locale === "en" ? project.titleEn : project.titleAr}
              </h3>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-500">
                <span>📍 {project.location}</span>
                <span>🗓 {project.completion}</span>
                <span>🏢 {project.client}</span>
              </div>
              <div className="mt-4 h-0.5 w-8 rounded-full bg-[#e8a33d] transition-all duration-300 group-hover:w-16" />
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
