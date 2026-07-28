"use client";

import { useRef } from "react";
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
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-center md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="stat-item">
            <div
              className="stat-value mb-2 text-4xl font-bold md:text-5xl"
              data-target={s.target}
              data-suffix={s.suffix}
            >
              0{s.suffix}
            </div>
            <div className="text-sm text-[var(--text-muted)]">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
