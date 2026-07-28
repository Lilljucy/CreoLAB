import type { Metadata } from "next";
import ContactCards from "@/components/ContactCards";
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
    title: t.meta.kontakt.title,
    description: t.meta.kontakt.description,
    alternates: buildAlternates(locale, "/kontakt"),
  };
}

export default async function KontaktPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const t = getDict(locale);

  return (
    <main className="px-6 pt-40 pb-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            {t.pages.kontakt.eyebrow}
          </span>
          <h1 className="mb-6 text-[clamp(2.2rem,5vw,4rem)]">
            {t.pages.kontakt.h1Plain}
            <span className="text-gradient">{t.pages.kontakt.h1Gradient}</span>
          </h1>
          <p className="mx-auto max-w-xl text-[var(--text-muted)]">{t.pages.kontakt.sub}</p>
        </div>

        <ContactCards locale={locale} />
      </div>
    </main>
  );
}
