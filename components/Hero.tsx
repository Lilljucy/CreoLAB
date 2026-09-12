"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import IntroLogo from "./IntroLogo";
import Logo from "./Logo";
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
      className="relative min-h-[85vh] overflow-hidden pt-20"
    >
      <Image
        src="/portfolio-full/ember-kamin/01-katalog-dizajn.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 object-cover"
        style={{ filter: "blur(6px) saturate(1.05)" }}
      />
      <div className="hero-overlay z-[5]" aria-hidden />
      <div className="hero-top-fade z-[6]" aria-hidden />
      <div className="hero-bottom-fade z-[6]" aria-hidden />

      {showIntro && !introDone && (
        <div className="intro-overlay fixed inset-0 z-100 flex items-center justify-center bg-[var(--terracotta-deep)] px-6">
          <IntroLogo onComplete={() => setIntroDone(true)} />
        </div>
      )}

      {/* Emblem that emerges from a soft fog, centred between the two quadrants */}
      <div className="hero-emblem pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
        <div className="hero-emblem-fog absolute -inset-16 rounded-full" aria-hidden />
        <div className="hero-emblem-inner relative">
          <Logo size={72} variant="dark" stacked />
        </div>
      </div>

      <div className="relative z-10 grid min-h-[85vh] px-6 pb-10 md:grid-cols-2 md:px-10">
        <div className="flex items-center py-10 md:py-0">
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.05]">
            <span className="hero-heading-line block text-[var(--cream-on-dark)]">{t.hero.line1}</span>
            <span className="hero-heading-line block text-[var(--cream-on-dark)]">{t.hero.line2}</span>
          </h1>
        </div>

        <div className="flex flex-col justify-end gap-6 py-10 text-right md:py-0">
          <span className="hero-eyebrow inline-flex self-end pill-badge">{t.hero.eyebrow}</span>
          <p className="hero-sub ml-auto max-w-sm text-balance text-lg text-[var(--cream-on-dark)] opacity-90">
            {t.hero.sub}
          </p>
          <div className="flex flex-wrap items-center justify-end gap-4">
            <a href={`/${locale}/portfolio`} className="hero-cta inline-flex btn-cta">
              {t.hero.ctaPrimary}
            </a>
            <a href={`/${locale}/kontakt`} className="hero-cta inline-flex btn-cta-glow">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mb-8 flex w-full max-w-md items-center gap-4 px-6 text-xs uppercase tracking-[0.15em] text-[var(--cream-on-dark)] opacity-80">
        <span className="h-px flex-1 bg-[rgba(244,235,218,0.35)]" />
        <span className="flex items-center gap-2 whitespace-nowrap">
          <svg viewBox="0 0 16 26" className="h-5 w-3" fill="none">
            <rect x="1" y="1" width="14" height="24" rx="7" stroke="currentColor" strokeWidth="1.2" />
            <circle className="scroll-dot" cx="8" cy="7" r="2" fill="currentColor" />
          </svg>
          {t.hero.scrollHint}
        </span>
        <span className="h-px flex-1 bg-[rgba(244,235,218,0.35)]" />
      </div>

      <div className="relative z-10 mx-auto mb-10 w-full max-w-5xl overflow-hidden px-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track">
          {[...SOCIAL_CLIENTS, ...SOCIAL_CLIENTS].map((client, i) => (
            <span
              key={`${client.name}-${i}`}
              className="px-8 text-2xl font-semibold whitespace-nowrap text-[var(--cream-on-dark)] opacity-80 sm:text-3xl"
            >
              {client.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
