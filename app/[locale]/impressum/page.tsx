import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/alternates";
import { buildOpenGraph } from "@/lib/opengraph";

export function generateStaticParams() {
  return [{ locale: "de" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const title = "Impressum — CREOLAB";
  const description = "Impressum und Anbieterkennzeichnung von CREOLAB gemäß § 5 TMG.";

  return {
    title,
    description,
    robots: { index: false, follow: true },
    alternates: buildAlternates(locale, "/impressum", ["de"]),
    ...buildOpenGraph(locale, "/impressum", title, description),
  };
}

export default async function ImpressumPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (rawLocale !== "de") notFound();

  return (
    <main className="px-6 pt-40 pb-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Rechtliches
          </span>
          <h1 className="break-words text-[clamp(2.2rem,5vw,4rem)]">
            Impress<span className="text-gradient">um</span>
          </h1>
        </div>

        <div className="legal-content">
          <div>
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              CREOLAB — Grafikdesign, Webdesign und Social-Media-Marketing
              <br />
              Marije Jurić Zagorke 9
              <br />
              34000 Požega
              <br />
              Kroatien
              <br />
              OIB: 78349582424
            </p>
          </div>

          <div>
            <h2>Kontakt</h2>
            <p>
              Telefon: <a href="tel:+385919798969">+385 91 979 8969</a>
              <br />
              E-Mail (Webdesign): <a href="mailto:lukamaric97@gmail.com">lukamaric97@gmail.com</a>
              <br />
              E-Mail (Grafikdesign &amp; Social Media): <a href="mailto:iva.creolab@gmail.com">iva.creolab@gmail.com</a>
            </p>
          </div>

          <div>
            <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              Luka Marić
              <br />
              Marije Jurić Zagorke 9, 34000 Požega, Kroatien
            </p>
          </div>

          <div>
            <h2>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, abrufbar unter{" "}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                ec.europa.eu/consumers/odr
              </a>
              . Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir für eigene Inhalte auf dieser Website nach den allgemeinen Gesetzen
              verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen
              zu überwachen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt.
            </p>
          </div>

          <div>
            <h2>Haftung für Links</h2>
            <p>
              Unsere Website enthält Links zu externen Websites Dritter (z. B. soziale Medien), auf deren Inhalte wir
              keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir daher keine Gewähr. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
            </p>
          </div>

          <div>
            <h2>Urheberrecht</h2>
            <p>
              Die durch CREOLAB erstellten Inhalte und Werke auf dieser Website unterliegen dem kroatischen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechts bedürfen der vorherigen schriftlichen Zustimmung.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
