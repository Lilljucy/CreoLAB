import type { Metadata } from "next";
import "../globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
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
  };
}

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://creolab-design.hr/#organization",
      name: "CREOLAB",
      url: "https://creolab-design.hr/",
      logo: "https://creolab-design.hr/icon.svg",
      image: "https://creolab-design.hr/web-dizajn/01-naslovnica.jpg",
      telephone: "+385919798969",
      email: "lukamaric97@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Marije Jurić Zagorke 9",
        postalCode: "34000",
        addressLocality: "Požega",
        addressCountry: "HR",
      },
      sameAs: [
        "https://www.instagram.com/creo.l.a.b/",
        "https://www.facebook.com/profile.php?id=61573601529172",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://creolab-design.hr/#website",
      name: "CREOLAB",
      url: "https://creolab-design.hr/",
      publisher: { "@id": "https://creolab-design.hr/#organization" },
      inLanguage: ["hr", "en", "de"],
    },
  ],
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
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
