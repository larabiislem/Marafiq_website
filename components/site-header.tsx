"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { companyInfo, dictionary, Locale } from "@/lib/site-content";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const t = dictionary[locale];
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  const handleScroll = (sectionId: string) => {
    setIsOpen(false);
    if (isHome) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(`/${locale}#${sectionId}`);
    }
  };

  const links = [
    { type: "link",    href: `/${locale}`,          label: t.nav.home },
    { type: "section", section: "about",             label: t.nav.about },
    { type: "section", section: "services",          label: t.nav.services },
    { type: "section", section: "partners",          label: t.nav.partners },
    { type: "link",    href: `/${locale}/contact`,   label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#111]/95 text-white shadow-lg backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div className="py-1">
            <Image
              src="/assets/logo_white.png"
              alt={`${companyInfo.nameEn} logo`}
              width={240}
              height={80}
              className="h-16 md:h-20 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {links.map((item) => {
            if (item.type === "section") {
              return (
                <button
                  key={item.section}
                  onClick={() => handleScroll(item.section!)}
                  className="cursor-pointer text-sm text-white/85 transition hover:text-[#e8a33d]"
                >
                  {item.label}
                </button>
              );
            }
            const active =
              pathname === item.href ||
              (item.href !== `/${locale}` && pathname.startsWith(item.href!));
            return (
              <Link
                key={item.href}
                href={item.href!}
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
            {links.map((item) => {
              if (item.type === "section") {
                return (
                  <button
                    key={item.section}
                    onClick={() => handleScroll(item.section!)}
                    className="text-start text-sm text-white/90"
                  >
                    {item.label}
                  </button>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="text-sm text-white/90"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      )}
    </header>
  );
}
