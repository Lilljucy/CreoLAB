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
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  return (
    <main>
      <Hero locale={locale} />
      <About locale={locale} />
      <Services locale={locale} />
      <Stats locale={locale} />
      <Process locale={locale} />
      <PortfolioPreview locale={locale} />
      <FAQ locale={locale} />
    </main>
  );
}
