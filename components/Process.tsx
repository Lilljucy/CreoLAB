"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getDict, type Locale } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

export default function Process({ locale }: { locale: Locale }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = getDict(locale);
  const STEPS = t.process.steps.map((s, i) => ({ no: String(i + 1).padStart(2, "0"), ...s }));

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".step-item");
      const hiddenState = { opacity: 0, y: 36, scale: 0.85 };
      gsap.set(items, hiddenState);

      const reveal = () => {
        gsap.to(items, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: { each: 0.45, from: "start" },
          ease: "back.out(1.7)",
          overwrite: true,
        });
      };

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        end: "bottom 25%",
        onEnter: reveal,
        onEnterBack: reveal,
        onLeave: () => gsap.set(items, hiddenState),
        onLeaveBack: () => gsap.set(items, hiddenState),
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative px-6 py-40">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            {t.process.eyebrow}
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">{t.process.heading}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.no} className="step-item">
              <div className="step-number mb-4 text-3xl font-bold text-[var(--accent-2)]">{s.no}</div>
              <h3 className="mb-2 text-lg">{s.title}</h3>
              <p className="text-sm text-[var(--text-muted)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
