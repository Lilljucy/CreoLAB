"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";

const TXT: Record<Locale, { label: string; h1: string; lede: string; cta: string }> = {
  hr: {
    label: "404",
    h1: "Stranica nije pronađena.",
    lede: "Stranica koju tražite ne postoji ili je premještena.",
    cta: "Natrag na početnu",
  },
  en: {
    label: "404",
    h1: "Page not found.",
    lede: "The page you're looking for doesn't exist or has been moved.",
    cta: "Back to homepage",
  },
  de: {
    label: "404",
    h1: "Seite nicht gefunden.",
    lede: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
    cta: "Zurück zur Startseite",
  },
};

export default function NotFound() {
  const pathname = usePathname();
  const segment = pathname.split("/").filter(Boolean)[0];
  const locale: Locale = isLocale(segment) ? segment : DEFAULT_LOCALE;
  const t = TXT[locale];

  return (
    <main>
      <section className="hero-simple" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div className="hero-swirl" aria-hidden />
        <div className="wrap">
          <span className="hero-label">{t.label}</span>
          <h1 style={{ marginTop: 14 }}>{t.h1}</h1>
          <p className="lede">{t.lede}</p>
          <div className="btn-row">
            <Link className="btn btn-solid" href={`/${locale}`}>
              {t.cta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
