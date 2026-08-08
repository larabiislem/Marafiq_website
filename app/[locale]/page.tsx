import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/animated";
import { ServiceIcon } from "@/components/service-icon";
import { dictionary, isLocale, isRtl, Locale, partners, services } from "@/lib/site-content";
import { notFound } from "next/navigation";

type HomeProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: HomeProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const t = dictionary[locale];

  const capabilityCards = [
    {
      titleEn: "Mechanical and Electrical Engineering Execution",
      titleAr: "تنفيذ هندسي متكامل للأعمال الميكانيكية والكهربائية",
      textEn:
        "Complete planning and execution of electrical distribution, mechanical equipment, and integrated technical infrastructure with quality controls on every phase.",
      textAr:
        "تخطيط وتنفيذ شامل لشبكات الكهرباء والمعدات الميكانيكية والبنية الفنية المتكاملة مع رقابة جودة دقيقة في جميع المراحل.",
      image: "/assets/Electromechanical Works.png",
    },
    {
      titleEn: "Heating, Ventilation and Air Conditioning Solutions",
      titleAr: "حلول متقدمة للتدفئة والتهوية وتكييف الهواء",
      textEn:
        "Energy-efficient climate systems designed for stable temperature control, healthy air flow, and long-term operating reliability.",
      textAr:
        "أنظمة مناخية عالية الكفاءة لضبط درجات الحرارة وتوفير تدفق هواء صحي واعتمادية تشغيلية طويلة المدى.",
      image: "/assets/PLACEHOLDER_HVAC.png",
    },
    {
      titleEn: "Plumbing and Sanitary Network Delivery",
      titleAr: "تنفيذ شبكات السباكة والأنظمة الصحية",
      textEn:
        "Installation and maintenance of water supply, drainage, and sanitary infrastructure tailored to residential and commercial needs.",
      textAr:
        "تنفيذ وصيانة شبكات المياه والصرف والبنية الصحية بما يتوافق مع احتياجات المشاريع السكنية والتجارية.",
      image: "/assets/Plumbing,Systems.png",
    },
  ];

  return (
    <div className="bg-white text-[#1a1a1a]">
      {/* HERO */}
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

      {/* ABOUT — dynamic, pro, inspiring — now BEFORE services */}
      <section id="about" className="relative overflow-hidden bg-[#101010] py-24 text-white">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#e8a33d]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#e8a33d]/10 blur-3xl" />
        <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e8a33d]">
              {locale === "en" ? "Who We Are" : "من نحن"}
            </p>
            <h2 className="gold-text mt-4 max-w-3xl text-4xl font-bold leading-[1.15] md:text-6xl">
              {t.about.title}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
              {t.about.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {t.about.values.map((value) => (
                <span
                  key={value}
                  className="rounded-full border border-[#e8a33d]/30 bg-[#e8a33d]/10 px-4 py-1.5 text-xs font-medium text-[#f5c06e] md:text-sm"
                >
                  {value}
                </span>
              ))}
            </div>
          </FadeIn>

          <Stagger className="mt-14 grid gap-6 md:grid-cols-2">
            <StaggerItem>
              <article className="hover-lift relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur md:p-9">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#e8a33d] to-[#cf8a22]" />
                <h3 className="text-2xl font-semibold text-[#e8a33d]">{t.about.visionTitle}</h3>
                <p className="mt-4 leading-relaxed text-white/70">{t.about.vision}</p>
              </article>
            </StaggerItem>
            <StaggerItem>
              <article className="hover-lift relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur md:p-9">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#e8a33d] to-[#cf8a22]" />
                <h3 className="text-2xl font-semibold text-[#e8a33d]">{t.about.missionTitle}</h3>
                <p className="mt-4 leading-relaxed text-white/70">{t.about.mission}</p>
              </article>
            </StaggerItem>
          </Stagger>

          <FadeIn delay={0.1} className="mt-6">
            <article className="shine relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#e8a33d] to-[#cf8a22] p-9 text-[#1a1a1a] shadow-2xl md:p-12">
              <div className="relative flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a1a1a]/10">
                  <Sparkles className="h-5 w-5 text-[#1a1a1a]" />
                </span>
                <h3 className="text-2xl font-semibold md:text-3xl">{t.about.promiseTitle}</h3>
              </div>
              <p className="relative mt-5 max-w-3xl text-base leading-relaxed text-[#1a1a1a]/85 md:text-lg">
                {t.about.promise}
              </p>
            </article>
          </FadeIn>

          <FadeIn delay={0.16} className="mt-6">
            <article className="hover-lift rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur md:p-9">
              <h3 className="text-xl font-semibold text-white">
                {locale === "en" ? "Execution Methodology" : "منهجية التنفيذ"}
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
                {locale === "en"
                  ? "Our teams follow a structured methodology covering technical evaluation, integrated execution, quality control checkpoints, and final handover with complete documentation."
                  : "تتبع فرقنا منهجية منظمة تشمل التقييم الفني والتنفيذ المتكامل ونقاط فحص الجودة والتسليم النهائي مع توثيق كامل."}
              </p>
            </article>
          </FadeIn>

          <FadeIn delay={0.22} className="mt-10">
            <Link
              href={`/${locale}/about`}
              className="hover-lift group inline-flex items-center gap-2 rounded-full bg-[#e8a33d] px-8 py-4 text-sm font-semibold text-[#111] shadow-xl transition hover:bg-[#f5c06e]"
            >
              {locale === "en" ? "Learn more about us" : "المزيد عنا"}
              <ArrowRight
                size={18}
                className={`transition-transform group-hover:translate-x-1 ${isRtl(locale) ? "rotate-180 group-hover:-translate-x-1" : ""}`}
              />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES — display-only, no navigation */}
      <section id="services" className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold">{t.home.serviceOverviewTitle}</h2>
        </FadeIn>
        <Stagger className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <div className="hover-lift overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                <div className="relative h-40 w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={service.image}
                    alt={service[locale].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <ServiceIcon icon={service.icon} />
                  <h3 className="mt-4 text-lg font-semibold">{service[locale].title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{service[locale].description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* DETAILED CAPABILITIES — zigzag image + text layout */}
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
        <div className="mt-10 space-y-10">
          {capabilityCards.map((card, index) => {
            const reverse = index % 2 === 1;
            return (
              <FadeIn key={card.titleEn} delay={index * 0.08}>
                <article
                  className={`grid items-center gap-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm md:grid-cols-2 ${
                    reverse ? "md:[direction:rtl]" : ""
                  }`}
                >
                  <div className={`relative h-64 w-full overflow-hidden md:h-80 ${reverse ? "md:[direction:ltr]" : ""}`}>
                    <Image
                      src={card.image}
                      alt={locale === "en" ? card.titleEn : card.titleAr}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className={`p-6 md:p-8 ${reverse ? "md:[direction:ltr]" : ""}`}>
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
            );
          })}
        </div>
      </section>

      {/* PARTNERS */}
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
