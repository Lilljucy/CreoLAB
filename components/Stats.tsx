"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getDict, type Locale } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

export default function Stats({ locale }: { locale: Locale }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = getDict(locale);

  const STATS = [
    { target: 50, suffix: "+", label: t.stats.completed },
    { target: 3, suffix: "", label: t.stats.services },
    { target: 100, suffix: "%", label: t.stats.personalized },
    { target: 24, suffix: "h", label: t.stats.response },
  ];

  useGSAP(
    () => {
      gsap.from(".stat-item", {
        opacity: 0,
        y: 16,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      const counters = gsap.utils.toArray<HTMLElement>(".stat-value");
      counters.forEach((el) => {
        const target = Number(el.dataset.target);
        const suffix = el.dataset.suffix ?? "";
        const proxy = { val: 0 };
        gsap.to(proxy, {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
          onUpdate: () => {
            el.textContent = Math.round(proxy.val) + suffix;
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative px-6 py-20">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
        <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl md:order-1">
          <Image src="/portfolio/omega-knjigovodstvo.jpg" alt="" fill sizes="40vw" className="object-cover" />
        </div>

        <div className="order-1 md:order-2">
          <span className="inline-flex pill-badge mb-4">{t.stats.eyebrow}</span>
          <h2 className="mb-8 text-[clamp(1.75rem,3.5vw,2.5rem)]">{t.stats.heading}</h2>

          <div className="grid grid-cols-2 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="stat-item">
                <div
                  className="stat-value mb-2 text-3xl font-bold md:text-4xl"
                  data-target={s.target}
                  data-suffix={s.suffix}
                >
                  0{s.suffix}
                </div>
                <div className="text-sm text-[var(--text-muted)]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
