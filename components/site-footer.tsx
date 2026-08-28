import Link from "next/link";
import Image from "next/image";
import { companyInfo, dictionary, Locale } from "@/lib/site-content";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const t = dictionary[locale];

  return (
    <footer className="mt-20 bg-[#111] px-4 py-10 text-white md:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <div className="mb-3 inline-flex py-1">
            <Image src="/assets/logo_white.png" alt={`${companyInfo.nameEn} logo`} width={240} height={80} className="h-20 w-auto object-contain" />
          </div>
          <h3 className="mb-3 text-lg font-semibold text-[#e8a33d]">{t.siteName}</h3>
          <p className="text-sm text-white/75">
            {locale === "en"
              ? "Integrated construction and facility services built for quality and long-term performance."
              : "خدمات متكاملة في البناء وإدارة المرافق مبنية على الجودة والأداء طويل المدى."}
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#e8a33d]">
            {locale === "en" ? "Contact" : "التواصل"}
          </h4>
          <ul className="space-y-1 text-sm text-white/80">
            <li>{locale === "en" ? companyInfo.addressEn : companyInfo.addressAr}</li>
            <li className="flex flex-col space-y-1 mt-2">
              <a href={`tel:${companyInfo.phone}`} dir="ltr" className="inline-block text-left">{companyInfo.phoneDisplay}</a>
              <a href={`tel:${companyInfo.phone2}`} dir="ltr" className="inline-block text-left">{companyInfo.phone2Display}</a>
            </li>
            <li className="mt-2">
              <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#e8a33d]">
            {locale === "en" ? "Quick Links" : "روابط سريعة"}
          </h4>
          <div className="flex flex-wrap gap-3 text-sm text-white/80">
            <Link href={`/${locale}/about`}>{t.nav.about}</Link>
            <Link href={`/${locale}/services`}>{t.nav.services}</Link>
            <Link href={`/${locale}/projects`}>{t.nav.projects}</Link>
            <Link href={`/${locale}/contact`}>{t.nav.contact}</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 w-full max-w-7xl border-t border-white/10 pt-6 text-xs text-white/60">
        © {new Date().getFullYear()} {companyInfo.nameEn}.{" "}
        {locale === "en" ? "All rights reserved." : "جميع الحقوق محفوظة."}
      </div>
    </footer>
  );
}
