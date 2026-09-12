"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getDict, type Locale } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

function faqAnswerText(item: {
  intro?: string;
  p?: string;
  items?: { label: string; text: string }[];
}): string {
  if (item.items) {
    return [item.intro, ...item.items.map((li) => `${li.label} — ${li.text}`)]
      .filter(Boolean)
      .join(" ");
  }
  return item.p ?? "";
}

export default function FAQ({ locale }: { locale: Locale }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = getDict(locale);

  useGSAP(
    () => {
      gsap.from(".faq-item", {
        opacity: 0,
        y: 16,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="faq" ref={sectionRef}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{t.faq.eyebrow}</span>
          <h2>{t.faq.heading}</h2>
          <p>{t.faq.sub}</p>
        </div>

        <div className="faq-list">
          {t.faq.items.map((item) => {
            const ListTag = item.listType === "ol" ? "ol" : "ul";
            return (
              <details key={item.q} className="faq-item">
                <summary>
                  {item.q}
                  <span className="plus">+</span>
                </summary>
                {item.items ? (
                  <>
                    <p className="intro">{item.intro}</p>
                    <ListTag className="sub">
                      {item.items.map((li) => (
                        <li key={li.label}>
                          <strong>{li.label}</strong> — {li.text}
                        </li>
                      ))}
                    </ListTag>
                  </>
                ) : (
                  <p className="a">{item.p}</p>
                )}
              </details>
            );
          })}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: t.faq.items.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faqAnswerText(item),
              },
            })),
          }),
        }}
      />
    </section>
  );
}
