import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Flag, HeartHandshake, CheckCircle2, Zap, Wind, Droplets } from "lucide-react";
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
  const rtl = isRtl(locale);

  const capabilityCards = [
    {
      icon: Zap,
      number: "01",
      titleEn: "Mechanical and Electrical Engineering",
      titleAr: "الهندسة الميكانيكية والكهربائية",
      textEn: "Complete planning and execution of electrical distribution, mechanical equipment, and integrated technical infrastructure with quality controls on every phase.",
      textAr: "تخطيط وتنفيذ شامل لشبكات الكهرباء والمعدات الميكانيكية والبنية الفنية المتكاملة مع رقابة جودة دقيقة في جميع المراحل.",
      tag: locale === "en" ? "Electromechanical" : "كهروميكانيكية",
      checklistEn: ["Electrical distribution networks", "Mechanical equipment installation", "Technical infrastructure integration", "Phase-by-phase quality control"],
      checklistAr: ["شبكات توزيع الكهرباء", "تركيب المعدات الميكانيكية", "تكامل البنية الفنية", "رقابة الجودة في كل مرحلة"],
      accent: "#e8a33d",
    },
    {
      icon: Wind,
      number: "02",
      titleEn: "Heating, Ventilation & Air Conditioning",
      titleAr: "التدفئة والتهوية وتكييف الهواء",
      textEn: "Energy-efficient climate systems designed for stable temperature control, healthy air flow, and long-term operating reliability.",
      textAr: "أنظمة مناخية عالية الكفاءة لضبط درجات الحرارة وتوفير تدفق هواء صحي واعتمادية تشغيلية طويلة المدى.",
      tag: "HVAC",
      checklistEn: ["Energy-efficient design", "Temperature & humidity control", "Air quality management", "Preventive maintenance plans"],
      checklistAr: ["تصميم موفر للطاقة", "التحكم في درجة الحرارة والرطوبة", "إدارة جودة الهواء", "خطط الصيانة الوقائية"],
      accent: "#e8a33d",
    },
    {
      icon: Droplets,
      number: "03",
      titleEn: "Plumbing & Sanitary Networks",
      titleAr: "السباكة والشبكات الصحية",
      textEn: "Installation and maintenance of water supply, drainage, and sanitary infrastructure tailored to residential and commercial needs.",
      textAr: "تنفيذ وصيانة شبكات المياه والصرف والبنية الصحية بما يتوافق مع احتياجات المشاريع السكنية والتجارية.",
      tag: locale === "en" ? "Plumbing" : "سباكة",
      checklistEn: ["Water supply systems", "Drainage & sewage networks", "Sanitary fixture installation", "Leak detection & testing"],
      checklistAr: ["أنظمة إمداد المياه", "شبكات الصرف الصحي", "تركيب الأجهزة الصحية", "كشف التسربات والاختبار"],
      accent: "#e8a33d",
    },
  ];

  return (
    <div className="bg-white text-[#1a1a1a]" dir={rtl ? "rtl" : "ltr"}>

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden brand-gradient flex items-center">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#e8a33d]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 shine" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-28 md:px-12">
          <FadeIn>
            <div className="float-slow mb-10 inline-block">
              <Image src="/assets/image.svg" alt="Marafeq Al-Banaa" width={220} height={80} priority />
            </div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#f5c06e]">
              Marafeq Al-Banaa · مرافق البناء
            </p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.1] text-white md:text-7xl">
              {t.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{t.heroSubtitle}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 rounded-full bg-[#e8a33d] px-8 py-4 text-sm font-semibold text-[#111] shadow-lg transition hover:bg-[#f5c06e]">
                {t.ctaQuote}
                <ArrowRight size={16} className={rtl ? "rotate-180" : ""} />
              </Link>
              <Link href={`/${locale}/about`} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
                {t.ctaContact}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── ABOUT ────────────────────────────────────────────────────────── */}
      <section id="about" className="relative overflow-hidden bg-[#0a0a10] py-28 text-white">
        <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#e8a33d]/8 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#e8a33d]/8 blur-3xl" />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12">
          <FadeIn>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-[#e8a33d]" />
              <p className="text-xl font-bold uppercase tracking-[0.15em] text-[#e8a33d]">
                {locale === "en" ? "Who We Are" : "من نحن"}
              </p>
            </div>
            <h2 className="max-w-3xl text-6xl font-bold leading-tight text-white md:text-8xl">
              {t.about.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60">{t.about.intro}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {t.about.values.map((v) => (
                <span key={v} className="rounded-full border border-[#e8a33d]/25 bg-[#e8a33d]/10 px-4 py-1.5 text-xs font-medium text-[#f5c06e]">{v}</span>
              ))}
            </div>
          </FadeIn>
          <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
            <StaggerItem>
              <article className="hover-lift h-full rounded-2xl border border-white/8 bg-white/[0.04] p-8 backdrop-blur">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8a33d]/15">
                  <Compass className="h-5 w-5 text-[#e8a33d]" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{t.about.visionTitle}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{t.about.vision}</p>
              </article>
            </StaggerItem>
            <StaggerItem>
              <article className="hover-lift h-full rounded-2xl border border-white/8 bg-white/[0.04] p-8 backdrop-blur">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8a33d]/15">
                  <Flag className="h-5 w-5 text-[#e8a33d]" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{t.about.missionTitle}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{t.about.mission}</p>
              </article>
            </StaggerItem>
            <StaggerItem>
              <article className="hover-lift shine h-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#e8a33d] to-[#c8841d] p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/15">
                  <HeartHandshake className="h-5 w-5 text-[#111]" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-[#111]">{t.about.promiseTitle}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#111]/75">{t.about.promise}</p>
              </article>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────────────────── */}
      <section id="services" className="bg-[#0a0a10] py-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <FadeIn>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-[#e8a33d]" />
              <p className="text-xl font-bold uppercase tracking-[0.15em] text-[#e8a33d]">
                {locale === "en" ? "What We Do" : "ما نقدمه"}
              </p>
            </div>
            <h2 className="max-w-xl text-6xl font-bold leading-tight text-white md:text-7xl">
              {t.home.serviceOverviewTitle}
            </h2>
          </FadeIn>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <div className="hover-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm transition hover:border-[#e8a33d]/40 hover:bg-white/10 hover:shadow-md">
                  <div className="relative h-44 w-full overflow-hidden bg-zinc-100">
                    <Image src={service.image} alt={service[locale].title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <ServiceIcon icon={service.icon} />
                    <h3 className="mt-4 text-lg font-semibold text-white">{service[locale].title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">{service[locale].description}</p>
                    <div className="mt-5 h-0.5 w-10 rounded-full bg-[#e8a33d] transition-all duration-300 group-hover:w-16" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ─── CAPABILITIES ─────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a10] py-28 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <FadeIn>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-[#e8a33d]" />
              <p className="text-xl font-bold uppercase tracking-[0.15em] text-[#e8a33d]">
                {locale === "en" ? "Engineering Depth" : "العمق الهندسي"}
              </p>
            </div>
            <h2 className="max-w-2xl text-6xl font-bold leading-tight md:text-7xl">
              {locale === "en" ? "Detailed Capabilities" : "القدرات التفصيلية"}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/55">
              {locale === "en"
                ? "Each discipline backed by structured execution, rigorous quality control, and full project documentation."
                : "كل تخصص مدعوم بتنفيذ منظم ورقابة جودة صارمة وتوثيق شامل للمشروع."}
            </p>
          </FadeIn>

          <div className="mt-16 space-y-5">
            {capabilityCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <FadeIn key={card.number} delay={index * 0.1}>
                  <article className="group grid items-stretch overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] md:grid-cols-[1fr_2fr]">

                    {/* LEFT — number + icon + tag */}
                    <div className="relative flex flex-col justify-between border-b border-white/8 p-8 md:border-b-0 md:border-r md:border-white/8 md:p-10">
                      {/* Big faded number */}
                      <span className="absolute right-6 top-4 select-none text-[7rem] font-black leading-none text-white/[0.04] md:right-8 md:top-6">
                        {card.number}
                      </span>

                      <div>
                        {/* Icon circle */}
                        <div
                          className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${card.accent}20`, border: `1px solid ${card.accent}40` }}
                        >
                          <Icon className="h-7 w-7" style={{ color: card.accent }} />
                        </div>

                        {/* Tag pill */}
                        <span
                          className="mt-5 inline-block rounded-full px-3 py-1 text-xs font-semibold"
                          style={{ backgroundColor: `${card.accent}15`, color: card.accent, border: `1px solid ${card.accent}30` }}
                        >
                          {card.tag}
                        </span>
                      </div>

                      {/* Animated accent bar at bottom */}
                      <div
                        className="mt-8 h-0.5 w-12 rounded-full transition-all duration-500 group-hover:w-full"
                        style={{ backgroundColor: card.accent }}
                      />
                    </div>

                    {/* RIGHT — title + text + checklist */}
                    <div className="p-8 md:p-10">
                      <h3 className="text-2xl font-bold leading-snug text-white md:text-3xl">
                        {locale === "en" ? card.titleEn : card.titleAr}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-white/55">
                        {locale === "en" ? card.textEn : card.textAr}
                      </p>

                      {/* Checklist grid */}
                      <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                        {(locale === "en" ? card.checklistEn : card.checklistAr).map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <CheckCircle2
                              size={16}
                              className="mt-0.5 shrink-0"
                              style={{ color: card.accent }}
                            />
                            <span className="text-sm text-white/65">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PARTNERS ─────────────────────────────────────────────────────── */}
      <section id="partners" className="overflow-hidden bg-[#0a0a10] border-t border-white/8 py-16 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <FadeIn>
            <p className="mb-2 text-xl font-bold uppercase tracking-[0.15em] text-[#e8a33d]">
              {locale === "en" ? "Trusted By" : "يثقون بنا"}
            </p>
            <h2 className="text-4xl font-bold text-white md:text-5xl">{t.home.partnersTitle}</h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="group relative h-36 w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:border-[#e8a33d]/50 hover:shadow-md hover:scale-[1.02]"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
