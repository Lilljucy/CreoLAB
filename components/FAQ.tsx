"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getDict, type Locale } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

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
    <section id="faq" ref={sectionRef} className="relative px-6 pt-16 pb-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            {t.faq.eyebrow}
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">{t.faq.heading}</h2>
        </div>

        <div className="flex flex-col gap-4">
          {t.faq.items.map((item) => {
            const ListTag = item.listType === "ol" ? "ol" : "ul";
            return (
              <details key={item.q} className="faq-item glass group rounded-2xl px-6 py-2 open:pb-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-lg font-semibold">
                  {item.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-xl transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="text-[var(--text-muted)]">
                  {item.items ? (
                    <>
                      <p>{item.intro}</p>
                      <ListTag className="mt-3 flex flex-col gap-2 pl-5">
                        {item.items.map((li) => (
                          <li key={li.label}>
                            <strong className="text-[var(--text)]">{li.label}</strong> — {li.text}
                          </li>
                        ))}
                      </ListTag>
                    </>
                  ) : (
                    <p>{item.p}</p>
                  )}
                </div>
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
                text: item.plain,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
