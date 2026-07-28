import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";
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
    title: t.meta.portfolio.title,
    description: t.meta.portfolio.description,
    alternates: buildAlternates(locale, "/portfolio"),
  };
}

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const t = getDict(locale);

  return (
    <main className="px-6 pt-40 pb-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            {t.pages.portfolio.eyebrow}
          </span>
          <h1 className="mb-6 text-[clamp(2.2rem,5vw,4rem)]">
            {t.pages.portfolio.h1Plain}
            <span className="text-gradient">{t.pages.portfolio.h1Gradient}</span>
          </h1>
          <p className="mx-auto max-w-xl text-[var(--text-muted)]">{t.pages.portfolio.sub}</p>
        </div>

        <PortfolioGrid locale={locale} />
      </div>
    </main>
  );
}
