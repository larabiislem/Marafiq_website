import { notFound } from "next/navigation";
import { FadeIn } from "@/components/animated";
import { ProjectsGallery } from "@/components/projects-gallery";
import { dictionary, isLocale } from "@/lib/site-content";

type ProjectsProps = {
  params: Promise<{ locale: string }>;
};

export default async function ProjectsPage({ params }: ProjectsProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const t = dictionary[rawLocale].projects;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <FadeIn>
        <h1 className="text-4xl font-bold">{t.title}</h1>
        <p className="mt-3 max-w-4xl text-zinc-700">{t.subtitle}</p>
      </FadeIn>

      <div className="mt-8">
        <ProjectsGallery locale={rawLocale} />
      </div>

      <FadeIn className="mt-12 rounded-2xl bg-[var(--brand-gray)] p-6 text-sm text-zinc-700">
        <strong>{t.beforeAfter}</strong>
      </FadeIn>
    </div>
  );
}
