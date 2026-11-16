"use client";

import { useState } from "react";
import Link from "next/link";
import { priceGroups, priceStrings, formatPrice, PRICE_UPDATED } from "@/lib/pricing";
import type { Locale } from "@/lib/i18n";

type NavLink = { href: string; label: string };

export default function FooterTop({ locale, links }: { locale: Locale; links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const ps = priceStrings[locale];

  return (
    <div className="footer-top">
      <div className="footer-top-links">
        {links.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
        <button
          type="button"
          className="footer-prices-toggle"
          aria-expanded={open}
          aria-controls="footer-prices-panel"
          onClick={() => setOpen((v) => !v)}
        >
          {ps.title}
          <span aria-hidden="true">{open ? " −" : " +"}</span>
        </button>
      </div>

      <div id="footer-prices-panel" className="footer-prices" hidden={!open}>
        <div className="footer-prices-grid">
          {priceGroups.map((g) => (
            <section key={g.title.hr}>
              <h3>{g.title[locale]}</h3>
              <ul>
                {g.items.map((it) => (
                  <li key={it.name.hr}>
                    <span>{formatPrice(it.price, locale)}</span>
                    <span>{it.name[locale]}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p className="footer-prices-note">
          <strong>
            {ps.updated} {PRICE_UPDATED}
          </strong>{" "}
          {ps.note}
        </p>
      </div>
    </div>
  );
}
