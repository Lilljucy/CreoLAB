"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getDict, type Locale } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

export default function About({ locale }: { locale: Locale }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = getDict(locale);

  useGSAP(
    () => {
      gsap.from(".about-reveal", {
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

  const cards = [
    { title: t.about.mission.title, text: t.about.mission.text },
    { title: t.about.vision.title, text: t.about.vision.text },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative px-6 pt-16 pb-16">
      <div className="mx-auto max-w-4xl">
        <div className="about-reveal mb-16 text-center">
          <h2 className="mb-8 text-[clamp(2rem,4vw,3rem)]">{t.about.eyebrow}</h2>
          <div className="flex flex-col gap-4 text-left text-[var(--text-muted)]">
            <p>{t.about.heading}</p>
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <div key={card.title} className="about-reveal glass rounded-2xl p-6">
              <h3 className="mb-2 text-lg">{card.title}</h3>
              <p className="text-sm text-[var(--text-muted)]">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="about-reveal glass mt-6 rounded-2xl p-6">
          <h3 className="mb-3 text-lg">{t.about.values.title}</h3>
          <ul className="flex flex-col gap-2 text-sm text-[var(--text-muted)]">
            {t.about.values.items.map((item) => {
              const [label, ...rest] = item.split(": ");
              return (
                <li key={label}>
                  <strong className="text-[var(--text)]">{label}:</strong> {rest.join(": ")}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
