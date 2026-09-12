import type { Locale } from "@/lib/i18n";

const TXT = {
  hr: {
    trust: [
      { t: "Provjereno iskustvo", d: "Brendovi u portfoliju — od obiteljskih vinarija do osiguravajućih kuća." },
      { t: "Prilagođena rješenja", d: "Dizajn i razvoj pod istim krovom, građeni oko cilja vašeg posla, ne gotovog predloška." },
      { t: "Mjerljiv rezultat", d: "Trojezične stranice (HR/EN/DE) sa strukturiranim podacima i SEO temeljima od starta." },
    ],
    compareEyebrow: "Usporedba",
    compareHeading: "CreoLab naspram opće agencije",
    us: "CreoLab",
    them: "Opća agencija",
    rows: [
      { label: "Dizajn i razvoj pod istim krovom", us: true, them: false },
      { label: "Trojezične stranice (HR / EN / DE)", us: true, them: false },
      { label: "SEO temelji ugrađeni od starta", us: true, them: true },
      { label: "Podrška i revizije na hrvatskom", us: true, them: false },
      { label: "Fiksna, jasna ponuda unaprijed", us: true, them: false },
    ],
    langNum: "3",
    langText: "jezika na svakoj stranici — HR, EN i DE, s pravim hreflang oznakama za Google.",
  },
  en: {
    trust: [
      { t: "Proven experience", d: "Brands in our portfolio — from family wineries to insurance companies." },
      { t: "Tailored solutions", d: "Design and development under one roof, built around your business goal, not a ready-made template." },
      { t: "Measurable results", d: "Trilingual pages (HR/EN/DE) with structured data and SEO foundations from the start." },
    ],
    compareEyebrow: "Comparison",
    compareHeading: "CreoLab vs. a general agency",
    us: "CreoLab",
    them: "General agency",
    rows: [
      { label: "Design and development under one roof", us: true, them: false },
      { label: "Trilingual pages (HR / EN / DE)", us: true, them: false },
      { label: "SEO foundations built in from the start", us: true, them: true },
      { label: "Support and revisions in Croatian", us: true, them: false },
      { label: "Fixed, clear quote upfront", us: true, them: false },
    ],
    langNum: "3",
    langText: "languages on every page — HR, EN and DE, with proper hreflang tags for Google.",
  },
  de: {
    trust: [
      { t: "Nachgewiesene Erfahrung", d: "Marken in unserem Portfolio — von familiengeführten Weinkellereien bis zu Versicherungsunternehmen." },
      { t: "Maßgeschneiderte Lösungen", d: "Design und Entwicklung unter einem Dach, ausgerichtet auf Ihr Geschäftsziel, nicht auf eine fertige Vorlage." },
      { t: "Messbare Ergebnisse", d: "Dreisprachige Seiten (HR/EN/DE) mit strukturierten Daten und SEO-Grundlagen von Anfang an." },
    ],
    compareEyebrow: "Vergleich",
    compareHeading: "CreoLab im Vergleich zu einer allgemeinen Agentur",
    us: "CreoLab",
    them: "Allgemeine Agentur",
    rows: [
      { label: "Design und Entwicklung unter einem Dach", us: true, them: false },
      { label: "Dreisprachige Seiten (HR / EN / DE)", us: true, them: false },
      { label: "SEO-Grundlagen von Anfang an eingebaut", us: true, them: true },
      { label: "Support und Korrekturen auf Kroatisch", us: true, them: false },
      { label: "Fixes, klares Angebot im Voraus", us: true, them: false },
    ],
    langNum: "3",
    langText: "Sprachen auf jeder Seite — HR, EN und DE, mit korrekten Hreflang-Tags für Google.",
  },
};

function Mark({ ok }: { ok: boolean }) {
  return ok ? (
    <svg viewBox="0 0 24 24" fill="none" className="mx-auto h-5 w-5 text-[var(--olive)]">
      <path d="M4 13l5 5L20 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" className="mx-auto h-5 w-5 text-[var(--text-muted)] opacity-50">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function HomeExtras({ locale }: { locale: Locale }) {
  const t = TXT[locale];

  return (
    <>
      <section className="relative px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 border-y border-[var(--border)] py-10 sm:grid-cols-3">
          {t.trust.map((item) => (
            <div key={item.t}>
              <h3 className="mb-2 text-lg font-semibold text-[var(--terracotta-deep)]">{item.t}</h3>
              <p className="text-sm text-[var(--text-muted)]">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <span className="inline-flex pill-badge mb-4">{t.compareEyebrow}</span>
            <h2 className="text-[clamp(1.7rem,3.5vw,2.4rem)]">{t.compareHeading}</h2>
          </div>
          <div className="glass overflow-x-auto rounded-2xl">
            <table className="w-full min-w-[520px] border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left" />
                  <th className="p-4 text-center text-sm font-semibold">{t.us}</th>
                  <th className="p-4 text-center text-sm font-semibold text-[var(--text-muted)]">{t.them}</th>
                </tr>
              </thead>
              <tbody>
                {t.rows.map((row) => (
                  <tr key={row.label} className="border-t border-[var(--border)]">
                    <td className="p-4 text-sm font-medium">{row.label}</td>
                    <td className="p-4">
                      <Mark ok={row.us} />
                    </td>
                    <td className="p-4">
                      <Mark ok={row.them} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <div className="glass rounded-2xl p-8 sm:p-10">
            <div className="font-mono text-4xl font-bold text-[var(--ochre)]">{t.langNum}</div>
            <p className="mt-3 max-w-md text-[var(--text-muted)]">{t.langText}</p>
          </div>
        </div>
      </section>
    </>
  );
}
