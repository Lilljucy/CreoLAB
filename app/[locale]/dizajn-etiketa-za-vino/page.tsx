import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/alternates";
import { buildOpenGraph } from "@/lib/opengraph";
import { PROJECTS, categoryFor } from "@/lib/portfolio";

const SITE_URL = "https://creolab-design.hr";
const TITLE = "Dizajn etiketa za vino | CreoLab Slavonija";
const DESCRIPTION =
  "Dizajn etiketa za vino, rakiju i vinjak za vinarije i OPG-ove u Slavoniji i diljem Hrvatske — od koncepta do tiskovne pripreme. Zatražite ponudu.";

const RELATED_SLUGS = [
  "previsic-vinarija",
  "vinarija-knezevic",
  "soldo-vinarija",
  "mitrovic-vinarija",
  "bilokapic-destilerija",
];

const INCLUDES = [
  {
    title: "Koncept i priča brenda",
    desc: "Prije prvog skiciranja istražujemo sortu, podrijetlo i priču vinarije, da etiketa nosi značenje, a ne samo naziv i alkohol.",
  },
  {
    title: "Dizajn prednje i stražnje etikete",
    desc: "Logotip, tipografija i kompozicija koji rade i izbliza na degustaciji i izdaleka na polici trgovine.",
  },
  {
    title: "Tiskovna priprema",
    desc: "Pripremamo datoteke za tisak — nijanse, folije, lakiranje, reljef — usklađeno sa zahtjevima vaše tiskare.",
  },
  {
    title: "Sustav za cijeli asortiman",
    desc: "Etiketa koja se dosljedno širi na svaku sortu i liniju, umjesto da se svaka nova boca dizajnira iznova.",
  },
];

const FAQS = [
  {
    q: "Koliko traje izrada etikete za vino?",
    a: "Ovisno o opsegu, od koncepta do tiskovno spremne datoteke obično prođe od nekoliko radnih dana do dva tjedna, uz dogovoreni broj revizija.",
  },
  {
    q: "Radite li i tiskovnu pripremu za tiskaru?",
    a: "Da. Isporučujemo datoteke spremne za tisak, usklađene s formatom, materijalom i tehnikom dorade (folija, lak, reljef) koje odabere vaša tiskara.",
  },
  {
    q: "Mogu li naručiti etikete za cijelu liniju vina odjednom?",
    a: "Da, i to je čest slučaj — osmišljavamo sustav koji se dosljedno primjenjuje na sve sorte, tako da svaka nova boca djeluje kao dio iste obitelji proizvoda.",
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
    alternates: buildAlternates(locale, "/dizajn-etiketa-za-vino", ["hr"]),
    ...buildOpenGraph(locale, "/dizajn-etiketa-za-vino", TITLE, DESCRIPTION, "/portfolio/previsic-vinarija.jpg"),
  };
}

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dizajn etiketa za vino",
  serviceType: "Dizajn etiketa za vino i žestoka pića",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Slavonija" },
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

export default async function DizajnEtiketaZaVinoPage({
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
            Dizajn etiketa za{" "}
            <span className="text-gradient">vino koje se pamti.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-[var(--text-muted)]">
            Etiketa je prvi, a često i jedini trenutak u kojem vino progovori kupcu prije kupnje. Radimo dizajn
            etiketa za vinarije, OPG-ove i destilerije u Slavoniji i diljem Hrvatske — od koncepta i priče brenda do
            tiskovno spremne datoteke.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href={`/${locale}/kontakt`} className="inline-flex btn-cta-glow">
              Zatražite ponudu za etikete
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
          <h2 className="mb-8 text-center text-[clamp(1.6rem,3vw,2.2rem)]">Radovi na etiketama i ambalaži</h2>
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
            Pokrenimo dizajn vaše etikete
          </Link>
        </div>
      </div>
    </main>
  );
}
