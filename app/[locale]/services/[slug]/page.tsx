import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/animated";
import {
  dictionary,
  isLocale,
  locales,
  projectItems,
  services,
} from "@/lib/site-content";
import { ServiceIcon } from "@/components/service-icon";

type ServiceDetailProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((locale) => services.map((service) => ({ locale, slug: service.slug })));
}

export default async function ServiceDetailPage({ params }: ServiceDetailProps) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();

  const service = services.find((entry) => entry.slug === slug);
  if (!service) notFound();

  const t = dictionary[rawLocale].services;
  const examples = projectItems.filter((project) => project.category === slug).slice(0, 3);
  const detailedScope =
    rawLocale === "en"
      ? {
          electromechanical: [
            "Electrical panels, cabling, and distribution networks",
            "Mechanical equipment installation and commissioning",
            "Integrated coordination with architectural and civil disciplines",
          ],
          hvac: [
            "Cooling load study and equipment sizing",
            "Ducting, ventilation, insulation, and balancing",
            "Preventive maintenance plans for long-term performance",
          ],
          plumbing: [
            "Water supply networks and sanitary drainage systems",
            "Pressure testing and leakage prevention protocols",
            "Compliance with Saudi building and safety standards",
          ],
          "low-voltage": [
            "Access control, CCTV, and structured network points",
            "Fire alarm and life safety low-current integrations",
            "Documentation, training, and handover support",
          ],
          cleaning: [
            "Industrial deep-cleaning and operational site maintenance",
            "Commercial and residential periodic cleaning programs",
            "Health and safety-compliant cleaning workflows",
          ],
        }
      : {
          electromechanical: [
            "تنفيذ لوحات وشبكات التوزيع والتمديدات الكهربائية",
            "تركيب وتشغيل المعدات والأنظمة الميكانيكية",
            "تنسيق فني متكامل مع الأعمال المعمارية والمدنية",
          ],
          hvac: [
            "دراسة الأحمال الحرارية واختيار الأحجام المناسبة للمعدات",
            "تنفيذ الدكت والتهوية والعزل وضبط تدفق الهواء",
            "خطط صيانة وقائية لضمان أداء طويل المدى",
          ],
          plumbing: [
            "تنفيذ شبكات التغذية المائية والصرف الصحي",
            "اختبارات الضغط ومنع التسرب وفق منهجيات دقيقة",
            "التوافق مع معايير البناء والسلامة في المملكة",
          ],
          "low-voltage": [
            "أنظمة التحكم بالدخول وكاميرات المراقبة ونقاط الشبكات",
            "دمج أنظمة إنذار الحريق والسلامة منخفضة التيار",
            "توثيق كامل وتدريب ودعم عند التسليم",
          ],
          cleaning: [
            "تنظيف صناعي عميق وصيانة نظافة مواقع التشغيل",
            "برامج تنظيف دورية للمباني التجارية والسكنية",
            "إجراءات تنظيف متوافقة مع الصحة والسلامة",
          ],
        };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <FadeIn className="rounded-2xl bg-[var(--brand-gray)] p-8">
        <ServiceIcon icon={service.icon} />
        <h1 className="mt-4 text-4xl font-bold">{service[rawLocale].title}</h1>
        <p className="mt-3 max-w-4xl text-zinc-700">{service[rawLocale].description}</p>
        <ul className="mt-5 list-disc space-y-1 px-5 text-sm text-zinc-700">
          {detailedScope[slug as keyof typeof detailedScope].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link
          href={`/${rawLocale}/contact`}
          className="mt-6 inline-block rounded-full bg-[#1a1a1a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#333]"
        >
          {t.quoteForService}
        </Link>
      </FadeIn>

      <FadeIn className="mt-12">
        <h2 className="text-2xl font-semibold">{t.examplesTitle}</h2>
      </FadeIn>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {(examples.length ? examples : projectItems.slice(0, 3)).map((project) => (
          <FadeIn key={project.titleEn}>
            <article className="rounded-2xl border border-zinc-200 bg-white p-4">
              <div className="p-4">
                <h3 className="font-semibold">
                  {rawLocale === "en" ? project.titleEn : project.titleAr}
                </h3>
                <p className="mt-1 text-sm text-zinc-600">{project.location}</p>
                <p className="mt-1 text-sm text-zinc-500">
                  {rawLocale === "en" ? project.typeEn : project.typeAr}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
