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
      gsap.from(".pf-card", {
        opacity: 0,
        y: 24,
        scale: 0.97,
        duration: 0.5,
        stagger: { each: 0.08, grid: "auto" },
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="work" ref={sectionRef}>
      <div className="wrap">
        <div
          className="section-head"
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, maxWidth: "none" }}
        >
          <div>
            <span className="eyebrow">{t.portfolioPreview.eyebrow}</span>
            <h2 style={{ marginTop: 10 }}>{t.portfolioPreview.heading}</h2>
          </div>
          <Link href={`/${locale}/portfolio`} className="btn btn-outline">
            {t.portfolioPreview.viewAll}
          </Link>
        </div>
        <div className="pf-grid">
          {FEATURED.map((p) => (
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
      </div>
    </section>
  );
}
