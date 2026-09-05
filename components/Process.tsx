"use client";

import { useRef } from "react";
import Image from "next/image";
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
    <section ref={sectionRef} className="relative px-6 pt-40 pb-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="inline-flex pill-badge mb-4">{t.process.eyebrow}</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">{t.process.heading}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-start">
          <div className="relative hidden aspect-[3/4] overflow-hidden rounded-2xl md:block">
            <Image src="/portfolio/adria-motors.jpg" alt="" fill sizes="40vw" className="object-cover" />
          </div>

          <div className="flex flex-col gap-4">
            {STEPS.map((s) => (
              <div key={s.no} className="step-item glass relative rounded-2xl p-6">
                <span className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-[var(--text)]">
                  {s.no}
                </span>
                <h3 className="mb-3 pr-10 text-lg">{s.title}</h3>
                <div className="mb-3 h-px w-full bg-[var(--border)]" />
                <p className="text-sm text-[var(--text-muted)]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
