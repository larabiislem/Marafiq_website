import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/animated";
import { companyInfo, dictionary, isLocale } from "@/lib/site-content";

type ContactProps = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: ContactProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const t = dictionary[rawLocale].contact;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <FadeIn>
        <h1 className="text-4xl font-bold">{t.title}</h1>
        <p className="mt-3 text-zinc-700">{t.subtitle}</p>
      </FadeIn>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <ContactForm locale={rawLocale} />

        <FadeIn className="space-y-5 rounded-2xl bg-[var(--brand-gray)] p-6">
          <h2 className="text-xl font-semibold">{t.mapTitle}</h2>
          <div className="space-y-2 text-sm text-zinc-700">
            <p>{rawLocale === "en" ? companyInfo.addressEn : companyInfo.addressAr}</p>
            <p>
              <a href={`tel:${companyInfo.phone}`}>{companyInfo.phoneDisplay}</a>
            </p>
            <p>
              <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
            </p>
            <p>{companyInfo.instagram}</p>
          </div>
          <iframe
            src={companyInfo.mapEmbed}
            title="Marafeq location map"
            className="h-72 w-full rounded-xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </FadeIn>
      </div>
    </div>
  );
}
