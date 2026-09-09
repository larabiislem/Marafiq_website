import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { companyInfo, dictionary, isLocale, isRtl, locales } from "@/lib/site-content";
import { seoKeywordsEn, seoKeywordsAr } from "@/lib/seo-keywords";

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

  const isEn = rawLocale === "en";
  const title = isEn
    ? "Marafiq Pro | Integrated Facility & Building Maintenance in Eastern Province"
    : "مرافق PRO | إدارة وتشغيل وصيانة المرافق والعقارات بالمنطقة الشرقية";
  
  const description = isEn
    ? "Top-rated integrated facility management, HVAC, plumbing, electrical, and deep cleaning services in Dammam, Khobar, and Dhahran. We operate commercial and residential buildings with high standards."
    : "شركة مرافق PRO تقدم حلولاً متكاملة لإدارة وتشغيل وصيانة المباني والمرافق في الدمام، الخبر، والظهران. خدمات نظافة عميقة، صيانة تكييف، سباكة، كهرباء، وعقود صيانة سنوية لاتحادات الملاك والشركات.";

  const keywords = isEn ? seoKeywordsEn : seoKeywordsAr;

  return {
    title,
    description,
    keywords,
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
      siteName: isEn ? "Marafiq Pro" : "مرافق PRO",
      locale: isEn ? "en_US" : "ar_SA",
      type: "website",
      images: [
        {
          url: "/assets/logo_light_bg.jpg",
          width: 800,
          height: 600,
          alt: isEn ? "Marafiq Pro Logo" : "شعار شركة مرافق PRO",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/logo_light_bg.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
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
  const isEn = locale === "en";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: isEn ? "Marafiq Pro" : "شركة مرافق PRO لإدارة وتشغيل وصيانة المرافق",
    description: isEn 
      ? "Integrated facility management, building maintenance, and commercial cleaning services in Eastern Province, SA."
      : "إدارة المرافق المتكاملة وصيانة المباني التجارية والسكنية وخدمات النظافة في المنطقة الشرقية، الدمام والخبر.",
    image: "https://marafeqalbnaa.com/assets/logo_light_bg.jpg",
    telePhone: companyInfo.phone,
    email: companyInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Jawharah",
      addressLocality: "Al Khobar",
      postalCode: "34434",
      addressRegion: "Eastern Province",
      addressCountry: "SA",
    },
    areaServed: [
      { "@type": "City", name: "Al Khobar" },
      { "@type": "City", name: "Dammam" },
      { "@type": "City", name: "Dhahran" }
    ],
    url: `https://marafeqalbnaa.com/${locale}`,
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "17:00"
      }
    ],
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

