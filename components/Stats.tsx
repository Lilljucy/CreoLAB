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
    <section ref={sectionRef} className="stats-band">
      <div className="wrap">
        <span className="eyebrow" style={{ color: "var(--ochre)" }}>
          {t.stats.eyebrow}
        </span>
        <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 500, margin: "10px 0 32px", color: "var(--cream-on-dark)" }}>
          {t.stats.heading}
        </h2>
        <div className="stats-grid">
          {STATS.map((s) => (
            <div key={s.label} className="stat-item">
              <div className="num stat-value" data-target={s.target} data-suffix={s.suffix}>
                {`0${s.suffix}`}
              </div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
