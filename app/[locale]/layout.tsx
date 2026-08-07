import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { dictionary, isLocale, isRtl, locales } from "@/lib/site-content";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) {
    return {};
  }

  const title =
    rawLocale === "en"
      ? "Marafeq Al-Banaa | Complete Construction Solutions"
      : "مرافق البناء | حلول إنشائية متكاملة";
  const description = dictionary[rawLocale].heroSubtitle;

  return {
    title,
    description,
    alternates: {
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale;
  return (
    <div dir={isRtl(locale) ? "rtl" : "ltr"} className={isRtl(locale) ? "font-ar" : ""}>
      <SiteHeader locale={locale} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={locale} />
      <WhatsAppFloat />
    </div>
  );
}
