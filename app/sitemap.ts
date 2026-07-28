import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/i18n";
import { PROJECTS } from "@/lib/portfolio";

const BASE_URL = "https://creolab-design.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/portfolio", "/kontakt"];
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const path of staticPaths) {
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.8,
      });
    }
    for (const project of PROJECTS) {
      entries.push({
        url: `${BASE_URL}/${locale}/portfolio/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
