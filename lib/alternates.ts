import { LOCALES, DEFAULT_LOCALE, type Locale } from "./i18n";

export function buildAlternates(locale: Locale, suffix: string, availableLocales: Locale[] = LOCALES) {
  const languages: Record<string, string> = {};
  for (const l of availableLocales) {
    languages[l] = `/${l}${suffix}`;
  }
  languages["x-default"] = availableLocales.includes(DEFAULT_LOCALE)
    ? `/${DEFAULT_LOCALE}${suffix}`
    : `/${availableLocales[0]}${suffix}`;

  return {
    canonical: `/${locale}${suffix}`,
    languages,
  };
}
