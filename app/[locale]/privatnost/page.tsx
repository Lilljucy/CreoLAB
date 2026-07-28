import type { Metadata } from "next";
import { isLocale, getDict, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/alternates";
import { getPrivacy } from "@/lib/privacyContent";

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
  };
}

function renderWithLinks(text: string) {
  return text.split(/(\{\{email\}\}|\{\{phone\}\})/g).map((part, i) => {
    if (part === "{{email}}") {
      return (
        <a key={i} href="mailto:iva.creolab@gmail.com">
          iva.creolab@gmail.com
        </a>
      );
    }
    if (part === "{{phone}}") {
      return (
        <a key={i} href="tel:+385919798969">
          +385 91 979 8969
        </a>
      );
    }
    return part;
  });
}

export default async function PrivatnostPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const content = getPrivacy(locale);

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
    </main>
  );
}
