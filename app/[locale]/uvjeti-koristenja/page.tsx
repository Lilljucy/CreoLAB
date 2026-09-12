import type { Metadata } from "next";
import { isLocale, getDict, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/alternates";
import { getTerms } from "@/lib/termsContent";
import { renderWithLinks } from "@/lib/legalRender";
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
    title: t.meta.uvjeti.title,
    description: t.meta.uvjeti.description,
    robots: { index: false, follow: true },
    alternates: buildAlternates(locale, "/uvjeti-koristenja"),
    ...buildOpenGraph(locale, "/uvjeti-koristenja", t.meta.uvjeti.title, t.meta.uvjeti.description),
  };
}

export default async function UvjetiKoristenjaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const content = getTerms(locale);

  return (
    <main>
      <section className="hero-simple" style={{ paddingBlock: "32px 0" }}>
        <div className="hero-swirl" aria-hidden />
        <div className="wrap">
          <span className="hero-label">{content.eyebrow}</span>
          <h1 style={{ marginTop: 14 }}>
            {content.h1Plain}
            {content.h1Gradient}
          </h1>
        </div>
      </section>
      <section>
        <div className="wrap" style={{ maxWidth: 760 }}>
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
      </section>
    </main>
  );
}
