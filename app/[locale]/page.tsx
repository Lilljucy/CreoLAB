import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import PortfolioPreview from "@/components/PortfolioPreview";
import FAQ from "@/components/FAQ";
import { isLocale, getDict, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/alternates";
import { buildOpenGraph } from "@/lib/opengraph";
import { PROFESSIONAL_SERVICE_JSON_LD } from "@/lib/structuredData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const t = getDict(locale);

  return {
    title: t.meta.home.title,
    description: t.meta.home.description,
    alternates: buildAlternates(locale, ""),
    verification: { google: "Jj0PGhhA_0bz_bwkmB8ubm9hOJnMrv7N6J2yLrU0t-o" },
    ...buildOpenGraph(locale, "", t.meta.home.title, t.meta.home.description),
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PROFESSIONAL_SERVICE_JSON_LD) }}
      />
      <Hero locale={locale} />
      <PortfolioPreview locale={locale} />
      <About locale={locale} />
      <Process locale={locale} />
      <Services locale={locale} />
      <Stats locale={locale} />
      <FAQ locale={locale} />
    </main>
  );
}
