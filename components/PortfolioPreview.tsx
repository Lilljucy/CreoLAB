"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS, FEATURED_SLUGS, categoryFor } from "@/lib/portfolio";
import { getDict, type Locale } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

const FEATURED = FEATURED_SLUGS.map((slug) => PROJECTS.find((p) => p.slug === slug)!);

export default function PortfolioPreview({ locale }: { locale: Locale }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = getDict(locale);

  useGSAP(
    () => {
      gsap.from(".portfolio-cell", {
        opacity: 0,
        y: 24,
        scale: 0.97,
        duration: 0.5,
        stagger: { each: 0.06, grid: "auto" },
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="work" ref={sectionRef} className="relative px-6 pt-16 pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="inline-flex pill-badge mb-4">{t.portfolioPreview.eyebrow}</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">{t.portfolioPreview.heading}</h2>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {[0, 1, 2].map((col) => (
            <div
              key={col}
              className={`flex flex-col gap-3 sm:gap-4 ${col === 1 ? "md:-translate-y-10" : ""}`}
            >
              {[0, 1, 2].map((row) => {
                const p = FEATURED[row * 3 + col];
                const tall = col === 1 && row === 0;
                return (
                  <Link
                    key={p.slug}
                    href={`/${locale}/portfolio/${p.slug}`}
                    className={`portfolio-cell glass group relative block overflow-hidden rounded-2xl ${
                      tall ? "aspect-[3/4]" : "aspect-square"
                    }`}
                  >
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 33vw, 25vw"
                      className="object-cover grayscale transition-[filter,transform] duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />
                    <span className="glass absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-3 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-[var(--text)] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {t.portfolioPreview.viewCasestudy}
                      <span aria-hidden>↗</span>
                    </span>
                    <span className="sr-only">{categoryFor(p, locale)}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <Link
            href={`/${locale}/portfolio`}
            className="text-sm font-medium text-[var(--text)] underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            {t.portfolioPreview.viewAll}
          </Link>
          <Link href={`/${locale}/kontakt`} className="inline-flex btn-cta-glow">
            {t.portfolioPreview.bookCall}
          </Link>
        </div>
      </div>
    </section>
  );
}
