import type { MetadataRoute } from "next";
import { LOCALES, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { PROJECTS } from "@/lib/portfolio";

const BASE_URL = "https://creolab-design.hr";

function languageAlternates(suffix: string, locales: Locale[] = LOCALES) {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${BASE_URL}/${l}${suffix}`;
  }
  languages["x-default"] = locales.includes(DEFAULT_LOCALE)
    ? `${BASE_URL}/${DEFAULT_LOCALE}${suffix}`
    : `${BASE_URL}/${locales[0]}${suffix}`;
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/portfolio", "/kontakt", "/uvjeti-koristenja"];
  const entries: MetadataRoute.Sitemap = [];

  for (const path of staticPaths) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.8,
        alternates: { languages: languageAlternates(path) },
      });
    }
  }

  entries.push({
    url: `${BASE_URL}/de/impressum`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  });

  for (const path of ["/dizajn-etiketa-za-vino", "/izrada-web-stranica", "/graficki-dizajn"]) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
        alternates: { languages: languageAlternates(path) },
      });
    }
  }

  for (const locale of LOCALES) {
    for (const project of PROJECTS) {
      entries.push({
        url: `${BASE_URL}/${locale}/portfolio/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.6,
        alternates: { languages: languageAlternates(`/portfolio/${project.slug}`) },
      });
    }
  }

  return entries;
}
