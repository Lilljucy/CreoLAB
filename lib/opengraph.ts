import { type Locale } from "./i18n";

const SITE_NAME = "CREOlab";
const DEFAULT_IMAGE = "/web-dizajn/01-naslovnica.jpg";

const OG_LOCALE: Record<Locale, string> = {
  hr: "hr_HR",
  en: "en_US",
  de: "de_DE",
};

export function buildOpenGraph(
  locale: Locale,
  path: string,
  title: string,
  description: string,
  image: string = DEFAULT_IMAGE
) {
  const url = `/${locale}${path}`;

  return {
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: OG_LOCALE[locale],
      type: "website" as const,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [image],
    },
  };
}
