import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Flag, HeartHandshake, CheckCircle2, Zap, Wind, Droplets, Download } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/animated";
import { ServiceIcon } from "@/components/service-icon";
import { HeroSlider } from "@/components/hero-slider";
import { ServicesGrid } from "@/components/services-grid";

import { StatsSection } from "@/components/stats-section";
import { companyInfo, dictionary, isLocale, isRtl, Locale, partners, services } from "@/lib/site-content";
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
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Full Page Auto Sliding Background */}
        <HeroSlider />

        {/* Floating animated elements on top of the background */}
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#e8a33d]/15 blur-[100px] z-10" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-[100px] z-10" />

        <div className="relative z-20 mx-auto w-full max-w-5xl px-6 py-28 md:px-12 flex flex-col items-center">
          <FadeIn>
            <div className="float-slow mb-10 inline-block">
              <Image src="/assets/logo_white.png" alt={companyInfo.nameEn} width={400} height={140} style={{ width: 'auto' }} className="h-32 md:h-40 object-contain drop-shadow-2xl" priority />
            </div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#f5c06e] drop-shadow-md">
              {companyInfo.nameEn} · {companyInfo.nameAr}
            </p>
            <h1 className="max-w-4xl mx-auto text-5xl font-bold leading-[1.1] text-white md:text-6xl lg:text-7xl drop-shadow-xl">
              {t.heroTitle}
            </h1>
            <p className="mt-8 max-w-3xl mx-auto text-lg leading-relaxed text-white/90 drop-shadow-md">
              {t.heroSubtitle}
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
              <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 rounded-full bg-[#e8a33d] px-8 py-4 text-sm font-semibold text-[#111] shadow-lg transition hover:bg-[#f5c06e] hover:scale-105 hover:shadow-[#e8a33d]/20">
                {t.ctaQuote}
                <ArrowRight size={16} className={rtl ? "rotate-180" : ""} />
              </Link>
              <a href="/documents/company-profile.pdf" target="_blank" rel="noopener noreferrer" download className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-black/20 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-white/60 hover:scale-105">
                {t.ctaProfile || "Download Profile"}
                <Download size={16} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
      <StatsSection locale={locale} />
      {/* ─── ABOUT ────────────────────────────────────────────────────────── */}
      <section id="about" className="relative overflow-hidden bg-zinc-50 py-32 text-[#1a1a1a]">
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12">
          
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <div className="mb-6 flex justify-center items-center gap-3">
                <div className="h-px w-12 bg-[#e8a33d]" />
                <p className="text-sm font-bold uppercase tracking-widest text-[#e8a33d]">
                  {locale === "en" ? "Company Overview" : "نظرة عامة"}
                </p>
                <div className="h-px w-12 bg-[#e8a33d]" />
              </div>
              <h2 className="mb-8 text-4xl font-bold leading-[1.15] text-[#111] md:text-5xl lg:text-6xl">
                {t.about.title}
              </h2>
              <p className="mb-12 text-lg leading-relaxed text-zinc-600">
                {t.about.intro}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {t.about.values.map((v) => (
                  <div key={v} className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2.5 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#e8a33d]" />
                    <span className="text-sm font-bold text-zinc-800">{v}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* THREE PILLARS */}
          <Stagger className="mt-32 grid gap-8 md:grid-cols-3">
            <StaggerItem>
              <article className="group h-full rounded-3xl border border-zinc-200 bg-white p-8 md:p-10 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-50 transition-colors group-hover:bg-[#e8a33d]/10">
                  <Compass className="h-8 w-8 text-[#e8a33d]" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#111]">{t.about.visionTitle}</h3>
                <p className="text-zinc-600 leading-relaxed">{t.about.vision}</p>
              </article>
            </StaggerItem>
            
            <StaggerItem>
              <article className="group h-full rounded-3xl border border-zinc-200 bg-white p-8 md:p-10 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-50 transition-colors group-hover:bg-[#e8a33d]/10">
                  <Flag className="h-8 w-8 text-[#e8a33d]" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#111]">{t.about.missionTitle}</h3>
                <p className="text-zinc-600 leading-relaxed">{t.about.mission}</p>
              </article>
            </StaggerItem>

            <StaggerItem>
              <article className="group h-full rounded-3xl bg-[#111] p-8 md:p-10 shadow-xl transition-all hover:-translate-y-1">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                  <HeartHandshake className="h-8 w-8 text-[#e8a33d]" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">{t.about.promiseTitle}</h3>
                <p className="text-white/70 leading-relaxed">{t.about.promise}</p>
              </article>
            </StaggerItem>
          </Stagger>

        </div>
      </section>
      {/* ─── SERVICES ─────────────────────────────────────────────────────── */}
      <section id="services" className="py-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <FadeIn>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-[#e8a33d]" />
              <p className="text-xl font-bold uppercase tracking-[0.15em] text-[#e8a33d]">
                {locale === "en" ? "What We Do" : "ما نقدمه"}
              </p>
            </div>
            <h2 className="max-w-xl text-6xl font-bold leading-tight md:text-7xl">
              {t.home.serviceOverviewTitle}
            </h2>
          </FadeIn>
          <ServicesGrid services={services as any} locale={locale} rtl={rtl} />
        </div>
      </section>
      {/* ─── CAPABILITIES ────────────────────────────────────────────────── */}
      <section id="capabilities" className="overflow-hidden bg-[#0a0a10] py-24 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <FadeIn>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-[#e8a33d]" />
              <p className="text-xl font-bold uppercase tracking-[0.15em] text-[#e8a33d]">
                {locale === "en" ? "Our Capabilities" : "قدراتنا"}
              </p>
            </div>
          </FadeIn>
          <div className="mt-10 grid gap-6">
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
      <section className="overflow-hidden bg-[#0a0a10] border-t border-white/8 py-16 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <FadeIn>
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">{t.home.partnersTitle}</h2>
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