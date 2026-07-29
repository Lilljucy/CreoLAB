"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import IntroLogo from "./IntroLogo";
import { getDict, type Locale } from "@/lib/i18n";

export default function Hero({ locale }: { locale: Locale }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showIntro, setShowIntro] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const t = getDict(locale);

  useGSAP(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIntroDone(true);
      return;
    }

    setShowIntro(true);
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative flex min-h-[60vh] items-center justify-center px-6 pt-28 pb-4"
    >
      <div className="grain-overlay" aria-hidden />

      {showIntro && !introDone && (
        <div className="intro-overlay fixed inset-0 z-100 flex items-center justify-center bg-[var(--bg)] px-6">
          <IntroLogo onComplete={() => setIntroDone(true)} />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="hero-eyebrow mb-8 inline-block rounded-2xl border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
          {t.hero.eyebrow}
        </h1>

        <h2 className="mb-8 text-[clamp(2.5rem,7vw,5.5rem)]">
          <span className="hero-heading-line block">{t.hero.line1}</span>
          <span className="hero-heading-line text-gradient block">{t.hero.line2}</span>
        </h2>

        <p className="hero-sub mx-auto mb-12 max-w-xl text-balance text-lg text-[var(--text-muted)]">
          {t.hero.sub}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`/${locale}/portfolio`}
            className="hero-cta btn-glow rounded-full bg-gradient-to-br from-[#93c5fd] to-[#e0f2fe] px-8 py-4 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href={`/${locale}/kontakt`}
            className="hero-cta rounded-full border border-[var(--border)] px-8 py-4 text-sm font-semibold text-[var(--text)] transition-colors hover:bg-white/10"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
