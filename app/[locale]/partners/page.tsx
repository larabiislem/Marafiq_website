import { notFound } from "next/navigation";
import { FadeIn, Stagger, StaggerItem } from "@/components/animated";
import { dictionary, isLocale, partners } from "@/lib/site-content";

type PartnersProps = {
  params: Promise<{ locale: string }>;
};

export default async function PartnersPage({ params }: PartnersProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const t = dictionary[rawLocale].partners;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <FadeIn>
        <h1 className="text-4xl font-bold">{t.title}</h1>
        <p className="mt-3 max-w-4xl text-zinc-700">{t.subtitle}</p>
      </FadeIn>

      <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {partners.map((partner) => (
          <StaggerItem key={partner.name}>
            <div className="hover-lift flex h-36 items-center justify-center rounded-2xl border border-zinc-200 bg-white p-5 text-center">
              <p className="font-medium">{partner.name}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}