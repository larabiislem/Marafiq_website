"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { companyInfo, dictionary, Locale } from "@/lib/site-content";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const t = dictionary[locale];
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/services`, label: t.nav.services },
    { href: `/${locale}/partners`, label: t.nav.partners },
    { href: `/${locale}/projects`, label: t.nav.projects },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#111]/95 text-white shadow-lg backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div className="rounded-xl bg-white px-2 py-1">
            <Image src="/assets/image.svg" alt="Marafeq Al-Banaa logo" width={118} height={44} priority />
          </div>
          <div className="leading-tight">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#e8a33d]">
              Marafeq Al-Banaa
            </p>
            <p className="text-base font-semibold text-white">{companyInfo.nameAr}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {links.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== `/${locale}` && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition ${
                  active ? "text-[#e8a33d]" : "text-white/85 hover:text-[#e8a33d]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <LanguageSwitcher locale={locale} />
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/15 px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/90"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      )}
    </header>
  );
}
