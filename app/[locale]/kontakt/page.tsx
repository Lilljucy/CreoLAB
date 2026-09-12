import type { Metadata } from "next";
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
    title: t.meta.kontakt.title,
    description: t.meta.kontakt.description,
    alternates: buildAlternates(locale, "/kontakt"),
    ...buildOpenGraph(locale, "/kontakt", t.meta.kontakt.title, t.meta.kontakt.description),
  };
}

export default async function KontaktPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const t = getDict(locale);

  return (
    <main>
      <section className="hero-simple" style={{ paddingBlock: "32px 0" }}>
        <div className="hero-swirl" aria-hidden />
        <div className="wrap">
          <span className="hero-label">{t.heroSimple.kontakt.label}</span>
          <h1 style={{ marginTop: 14 }}>{t.heroSimple.kontakt.h1}</h1>
          <p className="lede">{t.heroSimple.kontakt.lede}</p>
        </div>
      </section>
      <ContactBand locale={locale} heading={t.contactBand.kontakt.heading} lede={t.contactBand.kontakt.lede} />
    </main>
  );
}
