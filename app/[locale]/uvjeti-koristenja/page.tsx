import type { Metadata } from "next";
import { isLocale, getDict, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/alternates";
import { getTerms } from "@/lib/termsContent";
import { renderWithLinks } from "@/lib/legalRender";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const t = getDict(locale);

  return {
    title: t.meta.uvjeti.title,
    description: t.meta.uvjeti.description,
    robots: { index: false, follow: true },
    alternates: buildAlternates(locale, "/uvjeti-koristenja"),
  };
}

export default async function UvjetiKoristenjaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const content = getTerms(locale);

  return (
    <main className="px-6 pt-40 pb-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            {content.eyebrow}
          </span>
          <h1 className="break-words text-[clamp(2.2rem,5vw,4rem)]">
            {content.h1Plain}
            <span className="text-gradient">{content.h1Gradient}</span>
          </h1>
        </div>

        <div className="legal-content">
          <p>
            <em>{content.updated}</em>
          </p>

          {content.sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i}>{renderWithLinks(p)}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
