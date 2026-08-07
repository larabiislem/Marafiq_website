import type { MetadataRoute } from "next";
import { locales, services } from "@/lib/site-content";

const baseUrl = "https://marafeqalbnaa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const corePaths = ["", "/about", "/services", "/partners", "/projects", "/contact", "/news"];

  const localized = locales.flatMap((locale) =>
    corePaths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
  );

  const servicePaths = locales.flatMap((locale) =>
    services.map((service) => ({
      url: `${baseUrl}/${locale}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  );

  return [...localized, ...servicePaths];
}
