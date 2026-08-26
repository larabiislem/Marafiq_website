import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Flag, HeartHandshake } from "lucide-react";
import { FadeIn } from "@/components/animated";
import { StatsSection } from "@/components/stats-section";
import { InteractiveServices } from "@/components/interactive-services";
import { companyInfo, dictionary, isLocale, isRtl, Locale, partners } from "@/lib/site-content";
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

  return (
    <div className="bg-white text-[#1a1a1a]" dir={rtl ? "rtl" : "ltr"}>

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden brand-gradient flex items-center">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#e8a33d]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 shine" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* TEXT CONTENT */}
          <div className="lg:w-1/2">
            <FadeIn>
              <div className="float-slow mb-8 inline-block">
                <Image src="/assets/logo_white.png" alt={companyInfo.nameEn} width={400} height={140} className="h-28 md:h-32 w-auto object-contain" priority />
              </div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#f5c06e]">
                {companyInfo.nameEn} · {companyInfo.nameAr}
              </p>
              <h1 className="max-w-4xl text-5xl font-bold leading-[1.1] text-white md:text-6xl lg:text-7xl">
                {t.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{t.heroSubtitle}</p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 rounded-full bg-[#e8a33d] px-8 py-4 text-sm font-semibold text-[#111] shadow-lg transition hover:bg-[#f5c06e]">
                  {t.ctaQuote}
                  <ArrowRight size={16} className={rtl ? "rotate-180" : ""} />
                </Link>
                <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
                  {t.ctaContact}
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* DYNAMIC PROFESSIONAL GALLERY */}
          <div className="lg:w-1/2 hidden md:flex gap-6 w-full justify-center items-center">
            {/* Column 1 */}
            <div className="flex flex-col gap-6 w-1/2 animate-float1">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <Image src="/assets/hero-gallery-1.jpg" alt="Project 1" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <Image src="/assets/hero-gallery-2.jpg" alt="Project 2" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <Image src="/assets/hero-gallery-5.jpg" alt="Project 5" fill className="object-cover" />
              </div>
            </div>
            {/* Column 2 (Staggered) */}
            <div className="flex flex-col gap-6 w-1/2 pt-16 animate-float2">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <Image src="/assets/hero-gallery-3.jpg" alt="Project 3" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <Image src="/assets/hero-gallery-4.jpg" alt="Project 4" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection locale={locale} />

      {/* ─── ABOUT ────────────────────────────────────────────────────────── */}
      <section id="about" className="bg-white py-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left: Text */}
            <FadeIn>
              <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#e8a33d]/15 text-[#c8841d] text-xs font-bold uppercase tracking-widest border border-[#e8a33d]/30">
                {locale === "en" ? "About Us" : "من نحن"}
              </span>
              <h2 className="text-4xl font-extrabold text-[#111] md:text-5xl leading-tight">
                {t.about.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-600">{t.about.intro}</p>

              {/* Values */}
              <div className="mt-6 flex flex-wrap gap-2">
                {t.about.values.map((v) => (
                  <span key={v} className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-700">
                    {v}
                  </span>
                ))}
              </div>

              {/* Vision + Mission Cards */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-100 bg-[#f7f7f5] p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Compass className="h-4 w-4 text-[#e8a33d]" />
                    <p className="text-xs font-bold uppercase tracking-widest text-[#e8a33d]">{t.about.visionTitle}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-700 font-medium">{t.about.vision}</p>
                </div>
                <div className="rounded-2xl border border-zinc-100 bg-[#f7f7f5] p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Flag className="h-4 w-4 text-[#e8a33d]" />
                    <p className="text-xs font-bold uppercase tracking-widest text-[#e8a33d]">{t.about.missionTitle}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-700 font-medium">{t.about.mission}</p>
                </div>
              </div>
            </FadeIn>

            {/* Right: Promise card + visual accent */}
            <FadeIn delay={0.15}>
              <div className="relative">
                {/* Large gold accent block */}
                <div className="absolute -top-4 -right-4 h-full w-full rounded-3xl bg-[#e8a33d]/10 -z-10" />
                <div className="rounded-3xl overflow-hidden border border-zinc-200 bg-[#111] p-8 md:p-10 text-white shadow-xl">
                  <HeartHandshake className="h-8 w-8 text-[#e8a33d] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{t.about.promiseTitle}</h3>
                  <p className="text-base leading-relaxed text-white/80">{t.about.promise}</p>
                  <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-black text-[#e8a33d]">100+</p>
                      <p className="text-xs text-white/60 mt-1">{locale === "ar" ? "مشروع" : "Projects"}</p>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-[#e8a33d]">10+</p>
                      <p className="text-xs text-white/60 mt-1">{locale === "ar" ? "سنوات" : "Years"}</p>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-[#e8a33d]">3</p>
                      <p className="text-xs text-white/60 mt-1">{locale === "ar" ? "خدمات رئيسية" : "Core Services"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE SERVICES ──────────────────────────────────────────── */}
      <InteractiveServices locale={locale} />

      {/* ─── PARTNERS ─────────────────────────────────────────────────────── */}
      <section className="overflow-hidden bg-[#0a0a10] border-t border-white/8 py-16 text-white">
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
