import type { Metadata } from "next";
import Image from "next/image";
import { isLocale, getDict, LOCALES, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/alternates";
import { buildOpenGraph } from "@/lib/opengraph";
import CardCarousel from "@/components/CardCarousel";
import ContactBand from "@/components/ContactBand";

const SITE_URL = "https://creolab-design.hr";

const META: Record<Locale, { title: string; description: string; country: string }> = {
  hr: {
    title: "Izrada web stranica | CreoLab Požega",
    description:
      "Izrada modernih, brzih i responzivnih web stranica za obrte i tvrtke u Požegi i diljem Hrvatske. Dizajn, razvoj i SEO temelji. Zatražite ponudu.",
    country: "Hrvatska",
  },
  en: {
    title: "Web Design | CreoLab Croatia",
    description:
      "Modern, fast and responsive websites for businesses in Požega and across Croatia. Design, development and SEO foundations. Request a quote.",
    country: "Croatia",
  },
  de: {
    title: "Webdesign | CreoLab Kroatien",
    description:
      "Moderne, schnelle und responsive Websites für Betriebe in Požega und ganz Kroatien. Design, Entwicklung und SEO-Grundlagen. Angebot anfordern.",
    country: "Kroatien",
  },
};

const CREOLAB_IMAGES = [
  { src: "/web-dizajn/01-naslovnica.jpg", alt: "Naslovnica web stranice CreoLab s glavnim pozivom na akciju" },
  { src: "/web-dizajn/02-portfolio.jpg", alt: "Portfolio stranica web stranice CreoLab s pregledom projekata" },
  { src: "/web-dizajn/03-kontakt.jpg", alt: "Kontakt stranica web stranice CreoLab s podacima za kontakt" },
];

const SOLDO_IMAGES = [
  { src: "/web-dizajn/04-vinarija-soldo-pocetna.jpg", alt: "Naslovnica web stranice vinarije Soldo s fotografijom vinograda" },
  { src: "/web-dizajn/06-vinarija-soldo-zasto.jpg", alt: "Odjeljak Zašto Soldo web stranice vinarije s fotografijama vinograda" },
  { src: "/web-dizajn/07-vinarija-soldo-onama.jpg", alt: "Stranica O nama web stranice vinarije Soldo s pričom o vinariji" },
  { src: "/web-dizajn/08-vinarija-soldo-vina.jpg", alt: "Stranica ponude vina web stranice vinarije Soldo" },
  { src: "/web-dizajn/10-vinarija-soldo-kontakt.jpg", alt: "Kontakt stranica web stranice vinarije Soldo s kartom i radnim vremenom" },
];

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const m = META[locale];

  return {
    title: m.title,
    description: m.description,
    alternates: buildAlternates(locale, "/izrada-web-stranica"),
    ...buildOpenGraph(locale, "/izrada-web-stranica", m.title, m.description, "/web-dizajn/01-naslovnica.jpg"),
  };
}

export default async function IzradaWebStranicaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const m = META[locale];
  const t = getDict(locale);
  const s = t.heroSimple.web;
  const faqs = t.servicePage.faqsWeb;

  const SERVICE_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.h1,
    serviceType: "Izrada web stranica",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Požega" },
      { "@type": "Country", name: m.country },
    ],
    description: m.description,
  };

  const FAQ_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      <section className="hero-simple">
        <div className="hero-swirl" aria-hidden />
        <div className="wrap">
          <span className="hero-label">{s.label}</span>
          <h1 style={{ marginTop: 14 }}>{s.h1}</h1>
          <p className="lede">{s.lede}</p>
          <div className="btn-row">
            <a className="btn btn-solid" href="mailto:lukamaric97@gmail.com">
              {s.cta}
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="includes-grid">
            {t.servicePage.includesWeb.map(([h, d]) => (
              <div className="card" key={h}>
                <h3>{h}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{t.servicePage.worksEyebrow}</span>
            <h2>{t.servicePage.worksHeadingWeb}</h2>
            <p>{t.servicePage.workP}</p>
          </div>
          <div className="showcase-grid">
            <figure>
              <div className="sc">
                <CardCarousel images={CREOLAB_IMAGES} />
              </div>
              <figcaption>
                <a href="https://creolab-design.hr" target="_blank" rel="noopener noreferrer">
                  CreoLab
                </a>
              </figcaption>
            </figure>
            <figure>
              <div className="sc">
                <CardCarousel images={SOLDO_IMAGES} cycleSeconds={25} />
              </div>
              <figcaption>
                <a href="https://vinarija-soldo.hr" target="_blank" rel="noopener noreferrer">
                  Vinarija Soldo
                </a>
              </figcaption>
            </figure>
            <figure>
              <div className="sc">
                <Image
                  src="/web-dizajn/05-taste-the-journey.jpg"
                  alt="Anketa Taste the Journey za ocjenjivanje gastronomskog doživljaja"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption>{t.servicePage.surveyCaption}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{t.servicePage.faqEyebrow}</span>
            <h2>{t.servicePage.faqHeading}</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>
                  {f.q}
                  <span className="plus">+</span>
                </summary>
                <p className="a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactBand locale={locale} heading={t.contactBand.web.heading} lede={t.contactBand.web.lede} />
    </main>
  );
}
