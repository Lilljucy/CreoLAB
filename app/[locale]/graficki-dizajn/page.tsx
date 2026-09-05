import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/alternates";
import { buildOpenGraph } from "@/lib/opengraph";
import { PROJECTS, categoryFor } from "@/lib/portfolio";

const SITE_URL = "https://creolab-design.hr";
const TITLE = "Grafički dizajn | CreoLab Požega";
const DESCRIPTION =
  "Grafički dizajn za obrte i tvrtke u Požegi i diljem Hrvatske — logotip, vizualni identitet, tisak i ambalaža. Pogledajte portfolio i zatražite ponudu.";

const RELATED_SLUGS = [
  "platinum-grupa",
  "omega-knjigovodstvo",
  "dopa-projekt",
  "vismotus",
  "adria-motors",
  "sax-win",
];

const INCLUDES = [
  {
    title: "Logo i vizualni identitet",
    desc: "Znak, tipografija i sustav boja koji rade zajedno na svakom materijalu koji vaša tvrtka objavi.",
  },
  {
    title: "Redizajn postojećeg loga",
    desc: "Modernizacija oblika, tipografije i boja uz zadržavanje prepoznatljivosti koju ste već izgradili.",
  },
  {
    title: "Priprema za tisak",
    desc: "Vizitke, memorandumi, kuverte, katalozi i plakati pripremljeni tehnički ispravno za vašu tiskaru.",
  },
  {
    title: "Dizajn ambalaže i etiketa",
    desc: "Pakiranje koje na polici izgleda vrijedno onoliko koliko vrijedi i proizvod unutra.",
  },
];

const FAQS = [
  {
    q: "Koliko traje izrada logotipa?",
    a: "Izrada logotipa ili vizualnog identiteta obično traje od nekoliko radnih dana do dva tjedna, ovisno o složenosti i broju dogovorenih revizija.",
  },
  {
    q: "Radite li redizajn postojećeg logotipa?",
    a: "Da. Ako vaš logo djeluje zastarjelo, modernizirat ćemo oblik, tipografiju i boje uz zadržavanje prepoznatljivosti koju je brend već izgradio.",
  },
  {
    q: "U kojim formatima dobivam gotove materijale?",
    a: "Za tisak isporučujemo vektorske formate visoke kvalitete (PDF, AI, EPS), a za digitalnu upotrebu visoku rezoluciju u PNG i JPG formatima.",
  },
];

export function generateStaticParams() {
  return [{ locale: "hr" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: buildAlternates(locale, "/graficki-dizajn", ["hr"]),
    ...buildOpenGraph(locale, "/graficki-dizajn", TITLE, DESCRIPTION, "/portfolio/platinum-grupa.jpg"),
  };
}

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Grafički dizajn",
  serviceType: "Grafički dizajn i izrada logotipa",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [
    { "@type": "City", name: "Požega" },
    { "@type": "Country", name: "Hrvatska" },
  ],
  description: DESCRIPTION,
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default async function GrafickiDizajnPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (rawLocale !== "hr") notFound();
  const locale: Locale = "hr";

  const related = RELATED_SLUGS.map((slug) => PROJECTS.find((p) => p.slug === slug)!).filter(Boolean);

  return (
    <main className="px-6 pt-40 pb-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Usluga · Grafički dizajn
          </span>
          <h1 className="mb-6 text-[clamp(2.2rem,5vw,4rem)]">
            Grafički dizajn{" "}
            <span className="text-gradient">koji gradi brend.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-[var(--text-muted)]">
            Od logotipa do gotove tiskane ili digitalne primjene — radimo vizualni identitet za obrte i tvrtke u
            Požegi i diljem Hrvatske koji žele izgledati ozbiljno i prepoznatljivo.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href={`/${locale}/kontakt`} className="inline-flex btn-cta-glow">
              Zatražite ponudu za dizajn
            </Link>
          </div>
        </div>

        <div className="mb-20 grid gap-6 sm:grid-cols-2">
          {INCLUDES.map((item) => (
            <div key={item.title} className="glass rounded-2xl p-6">
              <h2 className="mb-2 text-lg">{item.title}</h2>
              <p className="text-sm text-[var(--text-muted)]">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="mb-8 text-center text-[clamp(1.6rem,3vw,2.2rem)]">Radovi na vizualnom identitetu</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/${locale}/portfolio/${p.slug}`}
                className="glass group block overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={p.img}
                    alt={`${p.name} — ${categoryFor(p, locale)}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="mb-1 block text-xs uppercase tracking-wider text-[var(--text-muted)]">
                    {categoryFor(p, locale)}
                  </span>
                  <h3 className="text-lg">{p.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-20 flex flex-col gap-4">
          <h2 className="mb-4 text-center text-[clamp(1.6rem,3vw,2.2rem)]">Česta pitanja</h2>
          {FAQS.map((item) => (
            <details key={item.q} className="glass group rounded-2xl px-6 py-2 open:pb-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-lg font-semibold">
                {item.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-xl transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="text-[var(--text-muted)]">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="text-center">
          <Link href={`/${locale}/kontakt`} className="inline-flex btn-cta">
            Pokrenimo dizajn vašeg brenda
          </Link>
        </div>
      </div>
    </main>
  );
}
