import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";
import ContactBand from "@/components/ContactBand";
import { isLocale, getDict, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/alternates";
import { buildOpenGraph } from "@/lib/opengraph";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const t = getDict(locale);

  return {
    title: t.meta.portfolio.title,
    description: t.meta.portfolio.description,
    alternates: buildAlternates(locale, "/portfolio"),
    ...buildOpenGraph(locale, "/portfolio", t.meta.portfolio.title, t.meta.portfolio.description, "/web-dizajn/02-portfolio.jpg"),
  };
}

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const t = getDict(locale);

  return (
    <main>
      <section className="hero-simple">
        <div className="hero-swirl" aria-hidden />
        <div className="wrap">
          <span className="hero-label">{t.pages.portfolio.eyebrow}</span>
          <h1 style={{ marginTop: 14 }}>{t.pages.portfolio.h1Plain}{t.pages.portfolio.h1Gradient}</h1>
          <p className="lede">{t.pages.portfolio.sub}</p>
        </div>
      </section>
      <section>
        <div className="wrap">
          <PortfolioGrid locale={locale} />
        </div>
      </section>
      <ContactBand locale={locale} heading={t.contactBand.portfolio.heading} lede={t.contactBand.portfolio.lede} />
    </main>
  );
}
