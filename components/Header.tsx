"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { LOCALES, getDict, localizePath, type Locale } from "@/lib/i18n";

export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const t = getDict(locale);
  const [open, setOpen] = useState(false);

  const NAV = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/portfolio`, label: t.nav.work },
    { href: `/${locale}/kontakt`, label: t.nav.contact },
  ];

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="logo" href={`/${locale}`} aria-label="CREOLAB" onClick={() => setOpen(false)}>
          <Logo size={22} />
        </Link>

        <nav className="site-nav">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="navlink">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <div className="lang-switch">
            {LOCALES.map((l) => (
              <Link
                key={l}
                href={localizePath(pathname, l)}
                className={`lang-opt${l === locale ? " active" : ""}`}
                hrefLang={l}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
          <a
            href="https://wa.me/385919798969"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.nav.whatsappLabel}
            className="icon-btn wa"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
              <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3Z" />
            </svg>
          </a>
          <Link href={`/${locale}/kontakt`} className="btn btn-solid btn-sm hidden sm:inline-flex">
            {t.nav.cta}
          </Link>
          <button
            type="button"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-9 w-9 items-center justify-center text-[var(--text)] md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[1.5px] w-full bg-current transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[1.5px] w-full bg-current transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-[var(--border)] bg-[var(--bg)] transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-base text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--text)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-between gap-4 border-t border-[var(--border)] px-6 py-4">
          <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[var(--text-muted)]">
            {LOCALES.map((l, i) => (
              <span key={l} className="flex items-center gap-1.5">
                {i > 0 && <span aria-hidden>/</span>}
                <Link
                  href={localizePath(pathname, l)}
                  onClick={() => setOpen(false)}
                  className={l === locale ? "text-[var(--text)]" : "transition-colors hover:text-[var(--text)]"}
                >
                  {l.toUpperCase()}
                </Link>
              </span>
            ))}
          </div>
          <a
            href="https://wa.me/385919798969"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.nav.whatsappLabel}
            onClick={() => setOpen(false)}
            className="flex h-9 w-9 items-center justify-center text-[var(--text)] transition-opacity hover:opacity-70"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.09c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.6-2.86-1.24-4.72-4.1-4.86-4.29-.14-.19-1.16-1.55-1.16-2.95 0-1.4.73-2.09.99-2.37.26-.28.57-.35.76-.35h.55c.18 0 .41-.01.64.49.24.55.81 1.9.88 2.04.07.14.11.3.02.49-.09.19-.14.3-.28.46-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.18-.28.36-.23.6-.14.24.09 1.53.72 1.79.85.26.14.44.21.5.32.07.12.07.68-.17 1.36Z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
