import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { services, isLocale, dictionary } from "@/lib/site-content";
import { ServiceIcon } from "@/components/service-icon";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const locales = ["en", "ar"];
  const paths = [];
  for (const locale of locales) {
    for (const service of services) {
      paths.push({ locale, slug: service.slug });
    }
  }
  return paths;
}

export default async function ServicePage({ params }: Props) {
  const { locale: rawLocale, slug } = await params;
  
  if (!isLocale(rawLocale)) {
    notFound();
  }
  
  const locale = rawLocale;
  const rtl = locale === "ar";
  const service = services.find((s) => s.slug === slug);
  const t = dictionary[locale];
  
  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white pb-24">
      {/* HERO BANNER */}
      <section className="relative h-[50vh] min-h-[400px] w-full bg-[#0a0a10] overflow-hidden">
        <Image 
          src={service.image} 
          alt={service[locale].title} 
          fill 
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a10] via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12 mt-20">
            <div className="flex flex-col items-start gap-6">
              <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl max-w-4xl leading-tight">
                {service[locale].title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto w-full max-w-7xl px-6 md:px-12 mt-16 md:mt-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_350px]">
          
          {/* MAIN COLUMN */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-12 bg-[#e8a33d]" />
              <p className="text-sm font-bold uppercase tracking-widest text-[#e8a33d]">
                {locale === "en" ? "Service Overview" : "نظرة عامة على الخدمة"}
              </p>
            </div>
            <p className="mb-12 text-xl leading-relaxed text-zinc-600 font-medium">
              {service[locale].detailsIntro}
            </p>
            
            <h2 className="mb-8 text-3xl font-bold text-[#111]">
              {locale === "en" ? "Key Capabilities" : "القدرات الرئيسية"}
            </h2>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {service[locale].features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 rounded-2xl bg-zinc-50 p-6 border border-zinc-100 hover:border-[#e8a33d]/30 hover:bg-white hover:shadow-sm transition-all">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#e8a33d]" />
                  <span className="text-zinc-800 font-bold text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR CTA */}
          <div>
            <div className="sticky top-32 rounded-3xl bg-[#0a0a10] p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">
                {locale === "en" ? "Need this service?" : "هل تحتاج لهذه الخدمة؟"}
              </h3>
              <p className="text-white/70 mb-8 leading-relaxed text-sm">
                {locale === "en" 
                  ? "Contact our experts today to get a customized quote tailored to your facility's requirements." 
                  : "تواصل مع خبرائنا اليوم للحصول على عرض سعر مخصص يناسب متطلبات منشأتك."}
              </p>
              <Link 
                href={`/${locale}/contact`}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#e8a33d] px-6 py-4 font-bold text-[#111] transition hover:bg-[#f5c06e] hover:scale-105"
              >
                {t.ctaQuote}
                <ArrowRight size={20} className={rtl ? "rotate-180" : ""} />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
