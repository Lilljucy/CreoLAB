"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import IntroLogo from "./IntroLogo";
import SmokeBackground from "./SmokeBackground";
import { getDict, type Locale } from "@/lib/i18n";
import { SOCIAL_CLIENTS } from "@/lib/clients";

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
      className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-10"
    >
      <SmokeBackground className="pointer-events-none absolute inset-0 z-0" />
      <div className="hero-overlay z-[5]" aria-hidden />
      <div className="hero-top-fade z-[6]" aria-hidden />
      <div className="hero-bottom-fade z-[6]" aria-hidden />
      <div className="grain-overlay" aria-hidden />

      {showIntro && !introDone && (
        <div className="intro-overlay fixed inset-0 z-100 flex items-center justify-center bg-[var(--bg)] px-6">
          <IntroLogo onComplete={() => setIntroDone(true)} />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <span className="hero-eyebrow inline-flex pill-badge mb-8">{t.hero.eyebrow}</span>

        <h1 className="mb-8 text-[clamp(2.5rem,7vw,6rem)]">
          <span className="hero-heading-line block text-[var(--text)]">{t.hero.line1}</span>
          <span className="hero-heading-line block text-[var(--text)]">{t.hero.line2}</span>
        </h1>

        <p className="hero-sub mx-auto mb-12 max-w-xl text-balance text-lg text-[var(--text-muted)]">
          {t.hero.sub}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href={`/${locale}/portfolio`} className="hero-cta inline-flex btn-cta">
            {t.hero.ctaPrimary}
          </a>
          <a href={`/${locale}/kontakt`} className="hero-cta inline-flex btn-cta-glow">
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-16 flex w-full max-w-md items-center gap-4 text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">
        <span className="h-px flex-1 bg-[var(--border)]" />
        <span className="flex items-center gap-2 whitespace-nowrap">
          <svg viewBox="0 0 16 26" className="h-5 w-3" fill="none">
            <rect x="1" y="1" width="14" height="24" rx="7" stroke="currentColor" strokeWidth="1.2" />
            <circle className="scroll-dot" cx="8" cy="7" r="2" fill="currentColor" />
          </svg>
          {t.hero.scrollHint}
        </span>
        <span className="h-px flex-1 bg-[var(--border)]" />
      </div>

      <div className="relative z-10 mt-10 w-full max-w-5xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track">
          {[...SOCIAL_CLIENTS, ...SOCIAL_CLIENTS].map((client, i) => (
            <span
              key={`${client.name}-${i}`}
              className="px-8 text-2xl font-semibold whitespace-nowrap text-[var(--text-muted)] opacity-80 sm:text-3xl"
            >
              {client.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
