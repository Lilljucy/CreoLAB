"use client";

import { useRef, useState } from "react";
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
  const frameRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const quickX = useRef<gsap.QuickToFunc | null>(null);
  const quickY = useRef<gsap.QuickToFunc | null>(null);

  useGSAP(
    () => {
      if (frameRef.current) {
        quickX.current = gsap.quickTo(frameRef.current, "x", { duration: 0.5, ease: "power3" });
        quickY.current = gsap.quickTo(frameRef.current, "y", { duration: 0.5, ease: "power3" });
      }
      gsap.from(".work-row", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    },
    { scope: sectionRef }
  );

  const handleMove = (e: React.MouseEvent) => {
    const bounds = sectionRef.current?.getBoundingClientRect();
    if (!bounds) return;
    quickX.current?.(e.clientX - bounds.left);
    quickY.current?.(e.clientY - bounds.top);
  };

  const activeProject = FEATURED.find((p) => p.name === active);

  return (
    <section id="work" ref={sectionRef} className="relative overflow-hidden px-6 pt-40 pb-16" onMouseMove={handleMove}>
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            {t.portfolioPreview.eyebrow}
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">{t.portfolioPreview.heading}</h2>
        </div>

        <div>
          {FEATURED.map((p) => (
            <Link
              key={p.name}
              href={`/${locale}/portfolio/${p.slug}`}
              className="work-row group flex cursor-pointer items-center justify-between border-b border-[var(--border)] py-7 transition-colors hover:border-white/30"
              onMouseEnter={() => setActive(p.name)}
              onMouseLeave={() => setActive(null)}
            >
              <h3 className="text-2xl transition-transform duration-300 group-hover:translate-x-2 md:text-3xl">
                {p.name}
              </h3>
              <span className="text-sm text-[var(--text-muted)]">{categoryFor(p, locale)}</span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/portfolio`}
            className="inline-block rounded-full border border-[var(--border)] px-8 py-4 text-sm font-semibold transition-colors hover:bg-white/10"
          >
            {t.portfolioPreview.viewAll}
          </Link>
        </div>
      </div>

      <div
        ref={frameRef}
        className="glass pointer-events-none absolute top-0 left-0 z-20 h-56 w-72 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl transition-opacity duration-300"
        style={{ opacity: activeProject ? 1 : 0 }}
      >
        {activeProject && (
          <Image src={activeProject.img} alt={activeProject.name} fill sizes="288px" className="object-cover" />
        )}
      </div>
    </section>
  );
}
