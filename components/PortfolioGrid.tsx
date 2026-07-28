"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS, categoryFor } from "@/lib/portfolio";
import type { Locale } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioGrid({ locale }: { locale: Locale }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".portfolio-card", {
        opacity: 0,
        y: 24,
        scale: 0.96,
        duration: 0.5,
        stagger: { each: 0.06, grid: "auto" },
        ease: "back.out(1.3)",
        scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
      });
    },
    { scope: gridRef }
  );

  return (
    <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((p) => (
        <Link
          key={p.slug}
          href={`/${locale}/portfolio/${p.slug}`}
          className="portfolio-card shine-card glass group block overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={p.img}
              alt={`${p.name} — ${categoryFor(p, locale)}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-5">
            <span className="mb-1 block text-xs uppercase tracking-wider text-[var(--text-muted)]">
              {categoryFor(p, locale)}
            </span>
            <h3 className="text-lg">{p.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
