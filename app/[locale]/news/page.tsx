import { notFound } from "next/navigation";
import { FadeIn } from "@/components/animated";
import { dictionary, isLocale } from "@/lib/site-content";

type NewsProps = {
  params: Promise<{ locale: string }>;
};

export default async function NewsPage({ params }: NewsProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const t = dictionary[rawLocale].news;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <FadeIn>
        <h1 className="text-4xl font-bold">{t.title}</h1>
        <p className="mt-3 max-w-3xl text-zinc-700">{t.subtitle}</p>
      </FadeIn>
    </div>
  );
}
