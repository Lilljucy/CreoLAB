"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import IntroLogo from "./IntroLogo";
import Logo from "./Logo";
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
    <section id="top" ref={containerRef} className="hero">
      <Image
        src="/portfolio-full/ember-kamin/01-katalog-dizajn.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-photo"
      />
      <div className="hero-scrim" aria-hidden />
      <div className="hero-swirl" aria-hidden />

      {showIntro && !introDone && (
        <div className="intro-overlay fixed inset-0 z-100 flex items-center justify-center bg-[var(--terracotta-deep)] px-6">
          <IntroLogo onComplete={() => setIntroDone(true)} />
        </div>
      )}

      <div className="hero-emblem" aria-hidden={false}>
        <div className="hero-emblem-fog absolute -inset-16 rounded-full" aria-hidden />
        <div className="hero-emblem-inner">
          <Logo size={72} variant="dark" stacked />
        </div>
      </div>

      <div className="hero-grid">
        <div className="hero-q hq-left">
          <h1 dangerouslySetInnerHTML={{ __html: t.hero.left }} />
        </div>
        <div className="hero-q hq-tr">
          <h1 dangerouslySetInnerHTML={{ __html: t.hero.right }} />
        </div>
        <div className="hero-q hq-br">
          <div className="hero-copy">
            <p>{t.hero.copy}</p>
            <a className="btn btn-solid" href={`/${locale}/kontakt`}>
              {t.hero.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
