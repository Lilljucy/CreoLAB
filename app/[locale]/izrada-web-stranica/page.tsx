import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/alternates";
import { buildOpenGraph } from "@/lib/opengraph";

const SITE_URL = "https://creolab-design.hr";
const TITLE = "Izrada web stranica | CreoLab Požega";
const DESCRIPTION =
  "Izrada modernih, brzih i responzivnih web stranica za obrte i tvrtke u Požegi i diljem Hrvatske. Dizajn, razvoj i SEO temelji. Zatražite ponudu.";

const INCLUDES = [
  {
    title: "Dizajn i korisničko iskustvo",
    desc: "Svaka stranica se dizajnira za vaš brend i vašu publiku, ne prema gotovom predlošku koji izgleda kao stotine drugih.",
  },
  {
    title: "Responzivan razvoj",
    desc: "Stranica jednako dobro izgleda i radi na mobitelu, tabletu i računalu, jer većina posjetitelja danas dolazi s mobitela.",
  },
  {
    title: "SEO temelji od početka",
    desc: "Ispravne meta oznake, brzo učitavanje i strukturirani podaci ugrađuju se već pri izradi, ne dodaju naknadno.",
  },
  {
    title: "Podrška nakon lansiranja",
    desc: "Nakon objave stranice ostajemo dostupni za manje izmjene, dodavanje sadržaja i savjete oko daljnjeg rasta.",
  },
];

const FAQS = [
  {
    q: "Koliko traje izrada web stranice?",
    a: "Ovisno o opsegu, jednostavnija predstavljačka stranica obično je gotova unutar dva do tri tjedna, dok veći projekti s više funkcionalnosti traju dulje — točan rok dogovaramo u uvodnom razgovoru.",
  },
  {
    q: "Hoće li stranica biti prilagođena mobitelima i tražilicama?",
    a: "Da. Svaka stranica koju izrađujemo je u potpunosti responzivna i od početka uključuje osnovne SEO postavke — naslove, opise, brzinu učitavanja i strukturirane podatke.",
  },
  {
    q: "Mogu li sam mijenjati sadržaj nakon što stranica bude gotova?",
    a: "Ovisno o vrsti projekta, možemo dogovoriti jednostavan sustav za uređivanje sadržaja ili preuzeti manje izmjene za vas — što god vam više odgovara.",
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
    alternates: buildAlternates(locale, "/izrada-web-stranica", ["hr"]),
    ...buildOpenGraph(locale, "/izrada-web-stranica", TITLE, DESCRIPTION, "/web-dizajn/01-naslovnica.jpg"),
  };
}

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Izrada web stranica",
  serviceType: "Izrada web stranica",
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

const SHOWCASE = [
  { src: "/web-dizajn/01-naslovnica.jpg", alt: "Naslovnica web stranice CreoLab s glavnim pozivom na akciju" },
  { src: "/web-dizajn/02-portfolio.jpg", alt: "Portfolio stranica web stranice CreoLab s pregledom projekata" },
  { src: "/web-dizajn/03-kontakt.jpg", alt: "Kontakt stranica web stranice CreoLab s podacima za kontakt" },
];

export default async function IzradaWebStranicaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (rawLocale !== "hr") notFound();
  const locale: Locale = "hr";

  return (
    <main className="px-6 pt-40 pb-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Usluga · Web dizajn
          </span>
          <h1 className="mb-6 text-[clamp(2.2rem,5vw,4rem)]">
            Izrada web stranica{" "}
            <span className="text-gradient">koje rade posao.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-[var(--text-muted)]">
            Radimo moderne, brze i responzivne web stranice za obrte i tvrtke u Požegi i diljem Hrvatske — od
            dizajna i razvoja do SEO temelja koji vas čine vidljivima na Googleu.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href={`/${locale}/kontakt`} className="inline-flex btn-cta-glow">
              Zatražite ponudu za web stranicu
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
          <h2 className="mb-8 text-center text-[clamp(1.6rem,3vw,2.2rem)]">Ova stranica je naš rad</h2>
          <p className="mx-auto mb-8 max-w-xl text-center text-sm text-[var(--text-muted)]">
            Web stranicu koju upravo gledate dizajnirali smo i izradili u vlastitoj kući — dobar je primjer onoga
            što možemo napraviti i za vaš brend.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {SHOWCASE.map((img) => (
              <div key={img.src} className="glass relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
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
            Pokrenimo izradu vaše stranice
          </Link>
        </div>
      </div>
    </main>
  );
}
