import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/animated";
import { ServiceIcon } from "@/components/service-icon";
import { dictionary, isLocale, isRtl, Locale, partners, projectItems, services } from "@/lib/site-content";
import { notFound } from "next/navigation";

type HomeProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: HomeProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const t = dictionary[locale];
  const featuredProjects = projectItems.slice(0, 6);
  const capabilityCards = [
    {
      titleEn: "Mechanical and Electrical Engineering Execution",
      titleAr: "تنفيذ هندسي متكامل للأعمال الميكانيكية والكهربائية",
      textEn:
        "Complete planning and execution of electrical distribution, mechanical equipment, and integrated technical infrastructure with quality controls on every phase.",
      textAr:
        "تخطيط وتنفيذ شامل لشبكات الكهرباء والمعدات الميكانيكية والبنية الفنية المتكاملة مع رقابة جودة دقيقة في جميع المراحل.",
    },
    {
      titleEn: "Heating, Ventilation and Air Conditioning Solutions",
      titleAr: "حلول متقدمة للتدفئة والتهوية وتكييف الهواء",
      textEn:
        "Energy-efficient climate systems designed for stable temperature control, healthy air flow, and long-term operating reliability.",
      textAr:
        "أنظمة مناخية عالية الكفاءة لضبط درجات الحرارة وتوفير تدفق هواء صحي واعتمادية تشغيلية طويلة المدى.",
    },
    {
      titleEn: "Plumbing and Sanitary Network Delivery",
      titleAr: "تنفيذ شبكات السباكة والأنظمة الصحية",
      textEn:
        "Installation and maintenance of water supply, drainage, and sanitary infrastructure tailored to residential and commercial needs.",
      textAr:
        "تنفيذ وصيانة شبكات المياه والصرف والبنية الصحية بما يتوافق مع احتياجات المشاريع السكنية والتجارية.",
    },
  ];

  return (
    <div className="bg-white text-[#1a1a1a]">
      <section className="relative min-h-[78vh] overflow-hidden brand-gradient">
        <div className="absolute inset-0 shine" />
        <div className="absolute -left-20 top-8 h-64 w-64 rounded-full bg-[#e8a33d]/20 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-start px-4 py-24 text-white md:px-8">
          <FadeIn className="max-w-3xl">
            <div className="float-slow mb-7 inline-flex">
            <Image
              src="/assets/image.svg"
              alt="Marafeq Al-Banaa Arabic logo in SVG"
              width={250}
              height={92}
              priority
            />
            </div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#f5c06e]">
              Marafeq Al-Banaa
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">{t.heroTitle}</h1>
            <p className="mt-5 max-w-2xl text-base text-white/90 md:text-lg">{t.heroSubtitle}</p>
            <div className={`mt-8 flex flex-wrap gap-3 ${isRtl(locale) ? "md:flex-row-reverse" : ""}`}>
              <Link
                href={`/${locale}/contact`}
                className="rounded-full bg-[#e8a33d] px-6 py-3 text-sm font-semibold text-[#111] transition hover:bg-[#f0b14f]"
              >
                {t.ctaQuote}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {t.ctaContact}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold">{t.home.serviceOverviewTitle}</h2>
        </FadeIn>
        <Stagger className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <Link
                href={`/${locale}/services/${service.slug}`}
                className="hover-lift block rounded-2xl border border-zinc-200 bg-white p-6"
              >
                <ServiceIcon icon={service.icon} />
                <h3 className="mt-4 text-lg font-semibold">{service[locale].title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{service[locale].description}</p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 md:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold">
            {locale === "en" ? "Detailed Engineering Capabilities" : "قدرات هندسية تفصيلية"}
          </h2>
          <p className="mt-3 max-w-4xl text-zinc-700">
            {locale === "en"
              ? "The following project visuals are integrated with clear technical explanation so clients understand scope, quality process, and expected project outcomes."
              : "تم دمج صور المشاريع مع شرح تقني واضح لمساعدة العميل على فهم نطاق العمل ومعايير الجودة والنتائج المتوقعة."}
          </p>
        </FadeIn>
        <div className="mt-8 space-y-8">
          {capabilityCards.map((card, index) => (
            <FadeIn key={card.titleEn} delay={index * 0.08}>
              <article className="grid items-center gap-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div>
                  <h3 className="text-2xl font-semibold">
                    {locale === "en" ? card.titleEn : card.titleAr}
                  </h3>
                  <p className="mt-3 text-zinc-700">
                    {locale === "en" ? card.textEn : card.textAr}
                  </p>
                  <p className="mt-4 text-sm text-zinc-500">
                    {locale === "en"
                      ? "Execution includes design review, safety compliance, technical supervision, and final quality handover."
                      : "يشمل التنفيذ مراجعة التصميم والالتزام بمعايير السلامة والإشراف الفني والتسليم النهائي وفق الجودة."}
                  </p>
                  <div className="mt-4 h-1 w-20 rounded-full bg-[#e8a33d]" />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-[var(--brand-gray)] py-16">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold">{t.home.whyTitle}</h2>
          </FadeIn>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.metrics.map((metric) => (
              <FadeIn key={metric.label}>
                <div className="hover-lift rounded-xl bg-white p-6">
                  <p className="text-3xl font-bold text-[#e8a33d]">{metric.value}</p>
                  <p className="mt-2 text-sm text-zinc-600">{metric.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">{t.home.featuredProjects}</h2>
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#c17f1f]"
          >
            {t.home.viewAllProjects}
            <ArrowRight size={16} />
          </Link>
        </div>
        <Stagger className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.titleEn}>
              <article className="hover-lift rounded-2xl border border-zinc-200 bg-white">
                <div className="p-5">
                  <h3 className="font-semibold">
                    {locale === "en" ? project.titleEn : project.titleAr}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600">{project.location}</p>
                  <p className="mt-2 text-sm text-zinc-500">
                    {locale === "en" ? project.typeEn : project.typeAr}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="overflow-hidden bg-[#101010] py-14 text-white">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <h2 className="text-2xl font-bold text-[#e8a33d]">{t.home.partnersTitle}</h2>
          <div className="mt-8 overflow-hidden">
            <div className="marquee flex min-w-max gap-4">
              {[...partners, ...partners].map((partner, idx) => (
                <div
                  key={`${partner}-${idx}`}
                  className="rounded-full border border-white/25 px-5 py-2 text-sm text-white/90"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
