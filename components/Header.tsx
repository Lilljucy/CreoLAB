"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { LOCALES, getDict, localizePath, type Locale } from "@/lib/i18n";

export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const t = getDict(locale);

  const NAV = [
    { href: `/${locale}#about`, label: t.nav.about },
    { href: `/${locale}/portfolio`, label: t.nav.work },
    { href: `/${locale}/kontakt`, label: t.nav.contact },
  ];

  return (
    <header className="glass-header fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <Link href={`/${locale}`} aria-label="CREOLAB">
          <Logo size={30} />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1.5 text-xs uppercase tracking-wider text-[var(--text-muted)] sm:flex">
            {LOCALES.map((l, i) => (
              <span key={l} className="flex items-center gap-1.5">
                {i > 0 && <span aria-hidden>/</span>}
                <Link
                  href={localizePath(pathname, l)}
                  className={l === locale ? "text-[var(--text)]" : "transition-colors hover:text-[var(--text)]"}
                >
                  {l}
                </Link>
              </span>
            ))}
          </div>
          <a
            href="https://wa.me/385919798969"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.nav.whatsappLabel}
            className="flex h-9 w-9 items-center justify-center text-[var(--text)] transition-opacity hover:opacity-70"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.09c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.6-2.86-1.24-4.72-4.1-4.86-4.29-.14-.19-1.16-1.55-1.16-2.95 0-1.4.73-2.09.99-2.37.26-.28.57-.35.76-.35h.55c.18 0 .41-.01.64.49.24.55.81 1.9.88 2.04.07.14.11.3.02.49-.09.19-.14.3-.28.46-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.18-.28.36-.23.6-.14.24.09 1.53.72 1.79.85.26.14.44.21.5.32.07.12.07.68-.17 1.36Z" />
            </svg>
          </a>
          <Link
            href={`/${locale}/kontakt`}
            className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:bg-white/10"
          >
            {t.nav.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
