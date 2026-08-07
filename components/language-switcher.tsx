"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Locale } from "@/lib/site-content";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const nextLocale: Locale = locale === "en" ? "ar" : "en";

  const switchedPath = (() => {
    if (!pathname) return `/${nextLocale}`;
    const parts = pathname.split("/");
    if (parts.length > 1) {
      parts[1] = nextLocale;
    }
    return parts.join("/") || `/${nextLocale}`;
  })();

  return (
    <Link
      href={switchedPath}
      className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold text-white transition hover:border-[#e8a33d] hover:text-[#e8a33d]"
    >
      {locale === "en" ? "AR" : "EN"}
    </Link>
  );
}
