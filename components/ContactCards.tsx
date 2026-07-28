"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getDict, type Locale } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

export default function ContactCards({ locale }: { locale: Locale }) {
  const gridRef = useRef<HTMLDivElement>(null);
  const t = getDict(locale);

  const PEOPLE = [
    { title: t.contact.ivaTitle, name: "Iva", mail: "iva.creolab@gmail.com", phone: "+385919798969" },
    { title: t.contact.lukaTitle, name: "Luka", mail: "lukamaric97@gmail.com", phone: "+385992022031" },
  ];

  useGSAP(
    () => {
      gsap.from(".contact-card", {
        opacity: 0,
        y: 20,
        scale: 0.96,
        duration: 0.5,
        stagger: { each: 0.08, grid: "auto" },
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
      });
    },
    { scope: gridRef }
  );

  return (
    <div ref={gridRef} className="grid gap-6 sm:grid-cols-2">
      {PEOPLE.map((p) => (
        <div key={p.name} className="contact-card shine-card glass overflow-hidden rounded-2xl p-8">
          <h3 className="mb-2 text-sm uppercase tracking-wider text-[var(--text-muted)]">{p.title}</h3>
          <p className="mb-4 text-xl">{p.name}</p>
          <div className="flex gap-3">
            <a
              href={`mailto:${p.mail}`}
              className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/10"
            >
              {t.contact.mailBtn}
            </a>
            <a
              href={`tel:${p.phone}`}
              className="rounded-full bg-gradient-to-br from-[#93c5fd] to-[#e0f2fe] px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
            >
              {t.contact.mobileBtn}
            </a>
          </div>
        </div>
      ))}

      <div className="contact-card shine-card glass overflow-hidden rounded-2xl p-8 sm:col-span-2">
        <h3 className="mb-2 text-sm uppercase tracking-wider text-[var(--text-muted)]">{t.contact.hours}</h3>
        <p className="text-xl">{t.contact.hoursValue}</p>
      </div>

      <div className="contact-card shine-card glass overflow-hidden rounded-2xl p-8 sm:col-span-2">
        <h3 className="mb-2 text-sm uppercase tracking-wider text-[var(--text-muted)]">
          {t.contact.follow}
        </h3>
        <p className="mb-4 text-[var(--text-muted)]">{t.contact.followDesc}</p>
        <div className="flex gap-3">
          <a
            href="https://www.instagram.com/creo.l.a.b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.igLabel}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition-colors hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16Zm0-2.16C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.35 2.63 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.63 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.34-2.63-6.78-6.98-6.98C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44Z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61573601529172"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.fbLabel}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition-colors hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
