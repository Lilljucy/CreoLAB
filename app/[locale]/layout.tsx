import type { Metadata } from "next";
import "../globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { LOCALES, isLocale, getDict, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const t = getDict(locale);

  return {
    metadataBase: new URL("https://creolab-design.com"),
    title: { default: t.meta.home.title, template: "%s" },
    description: t.meta.home.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  return (
    <html lang={locale} className="h-full">
      <body className="min-h-full">
        <SmoothScroll>
          <Header locale={locale} />
          {children}
          <Footer locale={locale} />
          <CookieBanner locale={locale} />
        </SmoothScroll>
      </body>
    </html>
  );
}
