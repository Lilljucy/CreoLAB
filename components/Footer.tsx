import Link from "next/link";
import Logo from "./Logo";
import { getDict, type Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDict(locale);

  return (
    <footer id="contact" className="relative px-6 pt-8 pb-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-[clamp(2rem,5vw,3.5rem)]">
            {t.footer.ctaHeadingPlain}
            <span className="text-gradient">{t.footer.ctaHeadingGradient}</span>
          </h2>
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-12">
            <div className="flex items-center gap-3">
              <span className="text-sm text-[var(--text-muted)]">{t.services.graphic.title}</span>
              <a
                href="mailto:iva.creolab@gmail.com"
                className="btn-glow inline-block rounded-full bg-gradient-to-br from-[#93c5fd] to-[#e0f2fe] px-6 py-2.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
              >
                Iva
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-[var(--text-muted)]">{t.services.web.title}</span>
              <a
                href="mailto:lukamaric97@gmail.com"
                className="btn-glow inline-block rounded-full bg-gradient-to-br from-[#93c5fd] to-[#e0f2fe] px-6 py-2.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
              >
                Luka
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-[var(--border)] pt-8 md:flex-row">
          <Logo size={24} />
          <p className="text-sm text-[var(--text-muted)]">
            {`© ${new Date().getFullYear()} CREOLAB. ${t.footer.copyrightSuffix}`}
          </p>
          <Link
            href={`/${locale}/privatnost`}
            className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
          >
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
