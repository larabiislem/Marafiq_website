"use client";

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
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            type="button"
            key={category.value}
            onClick={() => setActiveCategory(category.value)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              activeCategory === category.value
                ? "bg-[#e8a33d] text-[#1a1a1a]"
                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, idx) => (
          <article
            key={`${project.titleEn}-${idx}`}
            className="hover-lift rounded-2xl border border-zinc-200 bg-white"
          >
            <div className="space-y-1 p-4 text-sm">
              <h3 className="text-base font-semibold">
                {locale === "en" ? project.titleEn : project.titleAr}
              </h3>
              <p>
                <span className="font-semibold">{t.detailClient}: </span>
                {project.client}
              </p>
              <p>
                <span className="font-semibold">{t.detailLocation}: </span>
                {project.location}
              </p>
              <p>
                <span className="font-semibold">{t.detailType}: </span>
                {locale === "en" ? project.typeEn : project.typeAr}
              </p>
              <p>
                <span className="font-semibold">{t.detailDate}: </span>
                {project.completion}
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
