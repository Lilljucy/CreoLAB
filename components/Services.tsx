"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardCarousel from "./CardCarousel";
import { getDict, type Locale } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

const GRAPHIC_IMAGES = [
  "/portfolio/bilokapic-destilerija.jpg",
  "/portfolio/platinum-grupa.jpg",
  "/portfolio/previsic-vinarija.jpg",
  "/portfolio-full/soldo-vinarija/02-logo-dizajn.jpg",
  "/portfolio/triglav-osiguranje.jpg",
];

const WEB_IMAGES = [
  "/web-dizajn/01-naslovnica.jpg",
  "/web-dizajn/02-portfolio.jpg",
  "/web-dizajn/03-kontakt.jpg",
];

const SOCIAL_CLIENTS = [
  { name: "Fitness Klub Play", handle: "@fitnessklubplay", url: "https://www.instagram.com/fitnessklubplay/" },
  { name: "Triglav Osiguranje", handle: "@triglav.osiguranje.hrvatska", url: "https://www.instagram.com/triglav.osiguranje.hrvatska/" },
  { name: "Caffe Bar Vanilla", handle: "@vanilla__bar", url: "https://www.instagram.com/vanilla__bar/" },
  { name: "Soldo Vinarija", handle: "@vinarija_soldo", url: "https://www.instagram.com/vinarija_soldo/" },
  { name: "Sax-Win", handle: "@sax.win", url: "https://www.instagram.com/sax.win/" },
  { name: "Pub Mackey", handle: "@pubmackey_pz", url: "https://www.instagram.com/pubmackey_pz/" },
  { name: "Color Trgovina", handle: "@colortrgovina", url: "https://www.instagram.com/colortrgovina/" },
];

export default function Services({ locale }: { locale: Locale }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = getDict(locale);

  useGSAP(
    () => {
      gsap.from(".service-card", {
        opacity: 0,
        y: 24,
        scale: 0.96,
        duration: 0.5,
        stagger: { each: 0.1, grid: "auto" },
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="usluge" ref={sectionRef} className="relative px-6 pt-4 pb-40">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            {t.services.eyebrow}
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">{t.services.heading}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="service-card shine-card glass overflow-hidden rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <h3 className="mb-1 text-xl">{t.services.graphic.title}</h3>
            <p className="mb-4 text-sm text-[var(--text-muted)]">{t.services.graphic.desc}</p>
            <CardCarousel images={GRAPHIC_IMAGES} />
          </div>

          <div className="service-card shine-card glass overflow-hidden rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <h3 className="mb-1 text-xl">{t.services.web.title}</h3>
            <p className="mb-4 text-sm text-[var(--text-muted)]">{t.services.web.desc}</p>
            <CardCarousel images={WEB_IMAGES} cycleSeconds={12} />
          </div>

          <div className="service-card shine-card glass flex flex-col overflow-hidden rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <h3 className="mb-1 text-xl">{t.services.social.title}</h3>
            <p className="mb-4 text-sm text-[var(--text-muted)]">{t.services.social.desc}</p>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
              {SOCIAL_CLIENTS.map((client, i) => (
                <a
                  key={client.name}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-1 bg-white/5 text-center opacity-0 transition-colors hover:bg-white/10"
                  style={
                    {
                      animation: "card-carousel-fade 28s infinite",
                      animationDelay: `${i * 4}s`,
                    } as React.CSSProperties
                  }
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="mb-1 h-6 w-6 text-[var(--text-muted)]">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16Zm0-2.16C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.35 2.63 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.63 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.34-2.63-6.78-6.98-6.98C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44Z" />
                  </svg>
                  <span className="text-lg font-semibold">{client.name}</span>
                  <span className="text-xs text-[var(--text-muted)]">{client.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
