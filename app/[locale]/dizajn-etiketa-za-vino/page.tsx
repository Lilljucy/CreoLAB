import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { isLocale, getDict, LOCALES, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/alternates";
import { buildOpenGraph } from "@/lib/opengraph";
import { PROJECTS, categoryFor } from "@/lib/portfolio";
import CardCarousel from "@/components/CardCarousel";
import ContactBand from "@/components/ContactBand";

const SITE_URL = "https://creolab-design.hr";

const META: Record<Locale, { title: string; description: string; country: string; region: string }> = {
  hr: {
    title: "Dizajn etiketa za vino | CreoLab Slavonija",
    description:
      "Dizajn etiketa za vino, rakiju i vinjak za vinarije i OPG-ove u Slavoniji i diljem Hrvatske — od koncepta do tiskovne pripreme. Zatražite ponudu.",
    country: "Hrvatska",
    region: "Slavonija",
  },
  en: {
    title: "Wine Label Design | CreoLab Slavonia",
    description:
      "Wine, brandy and grape brandy label design for wineries and family farms in Slavonia and across Croatia — from concept to print preparation. Request a quote.",
    country: "Croatia",
    region: "Slavonia",
  },
  de: {
    title: "Weinetikettendesign | CreoLab Slawonien",
    description:
      "Etikettendesign für Wein, Brand und Tresterbrand für Weinkellereien und Familienbetriebe in Slawonien und ganz Kroatien — vom Konzept bis zur Druckvorstufe. Angebot anfordern.",
    country: "Kroatien",
    region: "Slawonien",
  },
};

const BOTTLE_IMAGES = [
  { src: "/portfolio-full/soldo-vinarija/03-dizajn-etikete.jpg", alt: "Boca vina Soldo s etiketom u krupnom planu" },
  { src: "/portfolio-full/bilokapic-destilerija/02-dizajn-ambalaze.jpg", alt: "Boca vinjaka Bilokapić s drvenim čepom i crnom etiketom" },
  { src: "/portfolio-full/previsic-vinarija/02-dizajn-etikete.jpg", alt: "Boce vina Previšić Merlot i Graševina u nizu" },
  { src: "/portfolio-full/soldo-vinarija/04-dizajn-etikete.jpg", alt: "Boca vina Soldo Graševina na bijeloj pozadini" },
  { src: "/portfolio-full/bilokapic-destilerija/03-dizajn-ambalaze.jpg", alt: "Boca vinjaka Bilokapić destilerije položena u kadru" },
  { src: "/portfolio-full/previsic-vinarija/03-dizajn-etikete.jpg", alt: "Boca vina Previšić Merlot uz košaru s grožđem" },
  { src: "/portfolio-full/soldo-vinarija/05-dizajn-etikete.jpg", alt: "Boca ružičastog vina Soldo Rosé s etiketom" },
  { src: "/portfolio-full/bilokapic-destilerija/04-dizajn-ambalaze.jpg", alt: "Detalj etikete i drvenog čepa na boci vinjaka Bilokapić" },
  { src: "/portfolio-full/soldo-vinarija/06-dizajn-etikete.jpg", alt: "Boca vina Soldo Graševina i čaša vina" },
  { src: "/portfolio-full/bilokapic-destilerija/05-dizajn-ambalaze.jpg", alt: "Boca šljivovice Bilokapić s ilustracijom šljive na etiketi" },
  { src: "/portfolio-full/bilokapic-destilerija/06-dizajn-ambalaze.jpg", alt: "Boca lozovače Bilokapić s ilustracijom grožđa na etiketi" },
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
    alternates: buildAlternates(locale, "/dizajn-etiketa-za-vino"),
    ...buildOpenGraph(locale, "/dizajn-etiketa-za-vino", m.title, m.description, "/portfolio/previsic-vinarija.jpg"),
  };
}

export default async function DizajnEtiketaZaVinoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const m = META[locale];
  const t = getDict(locale);
  const s = t.heroSimple.etikete;
  const faqs = t.servicePage.faqsEtikete;

  const SERVICE_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.h1,
    serviceType: "Dizajn etiketa za vino i žestoka pića",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "AdministrativeArea", name: m.region },
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

  const kneževic = PROJECTS.find((p) => p.slug === "vinarija-knezevic")!;
  const soldo = PROJECTS.find((p) => p.slug === "soldo-vinarija")!;
  const previsic = PROJECTS.find((p) => p.slug === "previsic-vinarija")!;
  const related = [
    kneževic,
    { ...soldo, img: "/portfolio-full/soldo-vinarija/03-dizajn-etikete.jpg" },
    previsic,
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      <section className="hero-simple">
        <div className="sc" style={{ position: "absolute", inset: 0, border: "none", borderRadius: 0 }}>
          <CardCarousel images={BOTTLE_IMAGES} cycleSeconds={33} />
        </div>
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
            {t.servicePage.includesEtikete.map(([h, d]) => (
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
            <h2>{t.servicePage.worksHeadingEtikete}</h2>
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

      <ContactBand locale={locale} heading={t.contactBand.etikete.heading} lede={t.contactBand.etikete.lede} />
    </main>
  );
}
