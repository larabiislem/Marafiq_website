import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { companyInfo, dictionary, isLocale, isRtl, locales } from "@/lib/site-content";

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
      ? "Marafeq Al-Banaa | Integrated Construction & Facility Solutions"
      : "مرافق البناء | حلول إنشائية متكاملة";
  const description = dictionary[rawLocale].heroSubtitle;

  return {
    title,
    description,
    alternates: {
      canonical: `https://marafeqalbnaa.com/${rawLocale}`,
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://marafeqalbnaa.com/${rawLocale}`,
      siteName: rawLocale === "en" ? "Marafeq Al-Banaa" : "مرافق البناء",
      locale: rawLocale === "en" ? "en_US" : "ar_SA",
      type: "website",
      images: [
        {
          url: "/assets/logo.png",
          width: 800,
          height: 600,
          alt: companyInfo.nameAr,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/logo.png"],
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: locale === "en" ? companyInfo.nameEn : companyInfo.nameAr,
    image: "https://marafeqalbnaa.com/assets/logo.png",
    telePhone: companyInfo.phone,
    email: companyInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Jawharah",
      addressLocality: "Al Khobar",
      postalCode: "34434",
      addressCountry: "SA",
    },
    url: `https://marafeqalbnaa.com/${locale}`,
    priceRange: "$$",
  };

  return (
    <div dir={isRtl(locale) ? "rtl" : "ltr"} className={isRtl(locale) ? "font-ar" : ""}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader locale={locale} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={locale} />
      <WhatsAppFloat />
    </div>
  );
}

