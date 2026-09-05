import Link from "next/link";
import Logo from "./Logo";
import SmokeBackground from "./SmokeBackground";
import { getDict, type Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDict(locale);

  return (
    <footer id="contact" className="relative overflow-hidden px-6 pt-8 pb-20">
      <SmokeBackground className="pointer-events-none absolute inset-0 z-0" />
      <div className="hero-top-fade z-[6]" aria-hidden />
      <div className="hero-bottom-fade z-[6]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="mb-6 text-[clamp(2rem,5vw,3.5rem)] text-[var(--text)]">
            {t.footer.ctaHeadingPlain}
            {t.footer.ctaHeadingGradient}
          </h2>
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-12">
            <div className="flex items-center gap-3">
              <span className="text-sm text-[var(--text-muted)]">{t.services.graphic.title}</span>
              <a href="mailto:iva.creolab@gmail.com" className="inline-flex btn-cta px-6 py-2.5 text-sm">
                Iva
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-[var(--text-muted)]">{t.services.web.title}</span>
              <a href="mailto:lukamaric97@gmail.com" className="inline-flex btn-cta px-6 py-2.5 text-sm">
                Luka
              </a>
            </div>
          </div>
        </div>

        <div className="mb-16 flex justify-center gap-3">
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

        <div className="flex flex-col items-center justify-between gap-6 border-t border-[var(--border)] pt-8 md:flex-row">
          <Logo size={24} />
          <p className="text-sm text-[var(--text-muted)]">
            {`© ${new Date().getFullYear()} CREOLAB. ${t.footer.copyrightSuffix}`}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={`/${locale}/privatnost`}
              className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href={`/${locale}/uvjeti-koristenja`}
              className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              {t.footer.terms}
            </Link>
            {locale === "de" && (
              <Link
                href={`/${locale}/impressum`}
                className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
              >
                Impressum
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
