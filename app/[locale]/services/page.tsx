import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FadeIn, Stagger, StaggerItem } from "@/components/animated";
import { ServiceIcon } from "@/components/service-icon";
import { dictionary, isLocale, services } from "@/lib/site-content";

type ServicesProps = {
  params: Promise<{ locale: string }>;
};

export default async function ServicesPage({ params }: ServicesProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const t = dictionary[rawLocale].services;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <FadeIn>
        <h1 className="text-4xl font-bold">{t.title}</h1>
        <p className="mt-3 text-zinc-700">{t.subtitle}</p>
      </FadeIn>

      <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <StaggerItem key={service.slug}>
            <Link
              href={`/${rawLocale}/services/${service.slug}`}
              className="hover-lift block overflow-hidden rounded-2xl border border-zinc-200 bg-white"
            >
              <div className="relative h-40 w-full overflow-hidden bg-zinc-100">
                <Image
                  src={service.image}
                  alt={service[rawLocale].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <ServiceIcon icon={service.icon} />
                <h2 className="mt-4 text-lg font-semibold">{service[rawLocale].title}</h2>
                <p className="mt-2 text-sm text-zinc-600">{service[rawLocale].description}</p>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
