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
      gsap.from(".pf-card", {
        opacity: 0,
        y: 24,
        scale: 0.97,
        duration: 0.5,
        stagger: { each: 0.05, grid: "auto" },
        ease: "power2.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
      });
    },
    { scope: gridRef }
  );

  return (
    <div ref={gridRef} className="pf-grid">
      {PROJECTS.map((p) => (
        <Link key={p.slug} href={`/${locale}/portfolio/${p.slug}`} className="pf-card">
          <div className="pf-img">
            <Image
              src={p.img}
              alt={`${p.name} — ${categoryFor(p, locale)}`}
              fill
              sizes="(max-width: 680px) 50vw, (max-width: 980px) 33vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="pf-body">
            <div className="pf-cat">{categoryFor(p, locale)}</div>
            <div className="pf-name">{p.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
