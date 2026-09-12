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

  useGSAP(
    () => {
      gsap.from(".step", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef}>
      <div className="wrap">
        <span className="eyebrow">{t.process.eyebrow}</span>
        <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 500, margin: "10px 0 32px" }}>
          {t.process.heading}
        </h2>
        <div className="process-steps">
          {t.process.steps.map((s, i) => (
            <div key={s.title} className="step">
              <div className="pn">{`0${i + 1}`}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
