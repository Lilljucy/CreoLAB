"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "./Logo";
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

  return (
    <section id="about" ref={sectionRef}>
      <div className="wrap">
        <div className="about-grid">
          <div className="about-reveal">
            <span className="eyebrow">{t.about.eyebrow}</span>
            <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 500, margin: "10px 0 18px", maxWidth: "26ch" }}>
              {t.about.heading}
            </h2>
            {t.about.paragraphs.map((p, i) => (
              <p className="about-lede" key={i}>
                {p}
              </p>
            ))}
            <div className="about-cards">
              <div className="card">
                <h3>{t.about.mission.title}</h3>
                <p>{t.about.mission.text}</p>
              </div>
              <div className="card">
                <h3>{t.about.vision.title}</h3>
                <p>{t.about.vision.text}</p>
              </div>
            </div>
            <div className="about-values">
              <h3>{t.about.values.title}</h3>
              <ul>
                {t.about.values.items.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="about-reveal about-logo-panel">
            <Logo size={110} stacked />
          </div>
        </div>
      </div>
    </section>
  );
}
