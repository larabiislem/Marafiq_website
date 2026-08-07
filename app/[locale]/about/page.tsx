import { notFound } from "next/navigation";
import { FadeIn } from "@/components/animated";
import { dictionary, isLocale } from "@/lib/site-content";

type AboutProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: AboutProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const t = dictionary[rawLocale].about;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <FadeIn>
        <h1 className="text-4xl font-bold">{t.title}</h1>
        <p className="mt-4 max-w-4xl text-zinc-700">{t.intro}</p>
      </FadeIn>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <FadeIn>
          <article className="rounded-2xl bg-[var(--brand-gray)] p-7">
            <h2 className="text-2xl font-semibold text-[#b7781f]">{t.visionTitle}</h2>
            <p className="mt-3 text-zinc-700">{t.vision}</p>
          </article>
        </FadeIn>
        <FadeIn delay={0.1}>
          <article className="rounded-2xl bg-[var(--brand-gray)] p-7">
            <h2 className="text-2xl font-semibold text-[#b7781f]">{t.missionTitle}</h2>
            <p className="mt-3 text-zinc-700">{t.mission}</p>
          </article>
        </FadeIn>
      </div>

      <FadeIn className="mt-6 rounded-2xl bg-[#111] p-7 text-white">
        <h2 className="text-2xl font-semibold text-[#e8a33d]">{t.promiseTitle}</h2>
        <p className="mt-3 text-white/90">{t.promise}</p>
      </FadeIn>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <FadeIn>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {t.values.map((value) => (
              <div key={value} className="rounded-xl border border-zinc-200 p-4 text-center">
                <p className="font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn>
          <div className="h-72 rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-[#1a1a1a]">
              {rawLocale === "en" ? "Operational Approach" : "منهجية التنفيذ"}
            </h3>
            <p className="mt-4 text-sm leading-7 text-zinc-700">
              {rawLocale === "en"
                ? "Our teams follow a structured method: technical assessment, coordinated execution, quality control checkpoints, and final handover with complete documentation."
                : "تتبع فرقنا منهجية منظمة تشمل التقييم الفني والتنفيذ المتكامل ونقاط فحص الجودة والتسليم النهائي مع توثيق كامل."}
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
