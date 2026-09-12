import type { Metadata } from "next";
import { isLocale, getDict, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/alternates";
import { getPrivacy } from "@/lib/privacyContent";
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
    title: t.meta.privatnost.title,
    description: t.meta.privatnost.description,
    robots: { index: false, follow: true },
    alternates: buildAlternates(locale, "/privatnost"),
    ...buildOpenGraph(locale, "/privatnost", t.meta.privatnost.title, t.meta.privatnost.description),
  };
}

export default async function PrivatnostPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const content = getPrivacy(locale);

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
                {section.rights && (
                  <>
                    <ul>
                      {section.rights.map((r) => (
                        <li key={r.label}>
                          <strong>{r.label}</strong> — {r.text}
                        </li>
                      ))}
                    </ul>
                    {section.rightsOutro && <p>{renderWithLinks(section.rightsOutro)}</p>}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
