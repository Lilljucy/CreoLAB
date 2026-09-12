import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { isLocale, getDict, LOCALES, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/alternates";
import { buildOpenGraph } from "@/lib/opengraph";
import { PROJECTS, categoryFor } from "@/lib/portfolio";
import ContactBand from "@/components/ContactBand";

const SITE_URL = "https://creolab-design.hr";

const META: Record<Locale, { title: string; description: string; country: string }> = {
  hr: {
    title: "Grafički dizajn | CreoLab Požega",
    description:
      "Grafički dizajn za obrte i tvrtke u Požegi i diljem Hrvatske — logotip, vizualni identitet, tisak i ambalaža. Pogledajte portfolio i zatražite ponudu.",
    country: "Hrvatska",
  },
  en: {
    title: "Graphic Design | CreoLab Croatia",
    description:
      "Graphic design for businesses in Požega and across Croatia — logo, visual identity, print and packaging. View the portfolio and request a quote.",
    country: "Croatia",
  },
  de: {
    title: "Grafikdesign | CreoLab Kroatien",
    description:
      "Grafikdesign für Betriebe in Požega und ganz Kroatien — Logo, visuelle Identität, Druck und Verpackung. Portfolio ansehen und Angebot anfordern.",
    country: "Kroatien",
  },
};

const RELATED_SLUGS = ["platinum-grupa", "omega-knjigovodstvo", "dopa-projekt", "vismotus", "adria-motors", "sax-win"];

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
    alternates: buildAlternates(locale, "/graficki-dizajn"),
    ...buildOpenGraph(locale, "/graficki-dizajn", m.title, m.description, "/portfolio/platinum-grupa.jpg"),
  };
}

export default async function GrafickiDizajnPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const m = META[locale];
  const t = getDict(locale);
  const s = t.heroSimple.graficki;
  const faqs = t.servicePage.faqsGraficki;

  const SERVICE_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.h1,
    serviceType: "Grafički dizajn i izrada logotipa",
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

  const related = RELATED_SLUGS.map((slug) => PROJECTS.find((p) => p.slug === slug)!).filter(Boolean);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      <section className="hero-simple">
        <Image src="/portfolio/platinum-grupa.jpg" alt="" fill sizes="100vw" className="hero-photo" style={{ objectFit: "cover" }} />
        <div className="hero-scrim" aria-hidden />
        <div className="hero-swirl" aria-hidden />
        <div className="wrap">
          <span className="hero-label">{s.label}</span>
          <h1 style={{ marginTop: 14 }}>{s.h1}</h1>
          <p className="lede">{s.lede}</p>
          <div className="btn-row">
            <a className="btn btn-solid" href="mailto:iva.creolab@gmail.com">
              {s.cta}
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="includes-grid">
            {t.servicePage.includesGraficki.map(([h, d]) => (
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
            <h2>{t.servicePage.worksHeadingGraficki}</h2>
          </div>
          <div className="related-grid">
            {related.map((p) => (
              <Link key={p.slug} href={`/${locale}/portfolio/${p.slug}`} className="pf-card">
                <div className="pf-img">
                  <Image src={p.img} alt={`${p.name} — ${categoryFor(p, locale)}`} fill sizes="33vw" className="object-cover" />
                </div>
                <div className="pf-body">
                  <div className="pf-cat">{categoryFor(p, locale)}</div>
                  <div className="pf-name">{p.name}</div>
                </div>
              </Link>
            ))}
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

      <ContactBand locale={locale} heading={t.contactBand.graficki.heading} lede={t.contactBand.graficki.lede} />
    </main>
  );
}
