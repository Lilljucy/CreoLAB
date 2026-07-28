import { LOCALES, DEFAULT_LOCALE, type Locale } from "./i18n";

export function buildAlternates(locale: Locale, suffix: string) {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[l] = `/${l}${suffix}`;
  }
  languages["x-default"] = `/${DEFAULT_LOCALE}${suffix}`;

  return {
    canonical: `/${locale}${suffix}`,
    languages,
  };
}
