import Link from "next/link";
import Logo from "./Logo";
import { getDict, type Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDict(locale);

  return (
    <footer id="contact">
      <div className="wrap">
        <div className="footer-top">
          <Link href={`/${locale}/graficki-dizajn`}>{t.services.graphic.title}</Link>
          <Link href={`/${locale}/izrada-web-stranica`}>{t.services.web.title}</Link>
          <Link href={`/${locale}/dizajn-etiketa-za-vino`}>{t.services.labels.title}</Link>
        </div>

        <div className="footer-row">
          <Link className="logo" href={`/${locale}`}>
            <Logo size={22} />
          </Link>
          <span className="fmuted">{`© ${new Date().getFullYear()} CreoLab · Požega, Hrvatska`}</span>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/creo.l.a.b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.igLabel}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16Zm0 3.68A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61573601529172"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.fbLabel}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-legal">
          <Link href={`/${locale}/privatnost`}>{t.footer.privacy}</Link>
          <Link href={`/${locale}/uvjeti-koristenja`}>{t.footer.terms}</Link>
          {locale === "de" && <Link href={`/${locale}/impressum`}>Impressum</Link>}
        </div>
      </div>
    </footer>
  );
}
