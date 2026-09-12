import type { Metadata } from "next";
import "../globals.css";
import { fraunces, archivo, spaceMono } from "@/lib/fonts";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ContactTracking from "@/components/ContactTracking";
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
    metadataBase: new URL("https://creolab-design.hr"),
    title: { default: t.meta.home.title, template: "%s" },
    description: t.meta.home.description,
    icons: {
      icon: [
        { url: "/icon.svg", type: "image/svg+xml" },
        { url: "/icon0.png", type: "image/png", sizes: "512x512" },
        { url: "/favicon.ico", type: "image/x-icon", sizes: "16x16 32x32 48x48 256x256" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
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
    <html lang={locale} className={`h-full ${fraunces.variable} ${archivo.variable} ${spaceMono.variable}`}>
      <body className="min-h-full">
        <ContactTracking />
        <div className="bottom-fade-blur" aria-hidden />
        <SmoothScroll>
          <Header locale={locale} />
          {children}
          <Footer locale={locale} />
          <CookieBanner locale={locale} />
          <GoogleAnalytics />
        </SmoothScroll>
      </body>
    </html>
  );
}
