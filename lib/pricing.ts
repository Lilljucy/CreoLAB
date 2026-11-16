import type { Locale } from "./i18n";

// Cjenik usluga — izvor: cjenik.pdf (16.11.2026.): iznos iz stupca "Cijena (€)",
// datum i iznos iz stupca "Cijena na dan" (priceOnDate) za tu istu stavku.
// Predujam i putni troškovi nisu uvršteni (nisu cijene usluga / nema jedinice).

type L10n = Record<Locale, string>;

export type PriceItem = { name: L10n; price: number; date: string; priceOnDate: number };
export type PriceGroup = { title: L10n; items: PriceItem[] };


export const priceStrings: Record<Locale, { title: string; note: string; priceLabel: string; onDay: string; csvLabel: string }> = {
  hr: {
    title: "Cjenik usluga",
    note: "Cijene su izražene u eurima (€) i informativne su naravi. Konačna cijena određuje se individualnom ponudom.",
    priceLabel: "Cijena",
    csvLabel: "Cjenik (CSV)",
    onDay: "Cijena na dan",
  },
  en: {
    title: "Price list",
    note: "Prices are stated in euros (€) and are for information purposes. The final price is set in an individual quote.",
    priceLabel: "Price",
    csvLabel: "Price list (CSV)",
    onDay: "Price as of",
  },
  de: {
    title: "Preisliste",
    note: "Die Preise sind in Euro (€) angegeben und dienen der Information. Der Endpreis wird in einem individuellen Angebot festgelegt.",
    priceLabel: "Preis",
    csvLabel: "Preisliste (CSV)",
    onDay: "Preis Stand",
  },
};

export const priceGroups: PriceGroup[] = [
  {
    title: { hr: "Brending", en: "Branding", de: "Branding" },
    items: [
      { name: { hr: "Posjetnica", en: "Business card", de: "Visitenkarte" }, price: 50, date: "10.09.2026.", priceOnDate: 20 },
      { name: { hr: "Brending događaja", en: "Event branding", de: "Event-Branding" }, price: 200, date: "24.09.2026.", priceOnDate: 200 },
      { name: { hr: "Dizajn etikete", en: "Label design", de: "Etikettendesign" }, price: 500, date: "10.09.2026.", priceOnDate: 500 },
      { name: { hr: "Vizualni identitet BASIC", en: "Visual identity BASIC", de: "Visuelle Identität BASIC" }, price: 400, date: "10.09.2026.", priceOnDate: 400 },
      { name: { hr: "Vizualni identitet BUSINESS", en: "Visual identity BUSINESS", de: "Visuelle Identität BUSINESS" }, price: 650, date: "10.09.2026.", priceOnDate: 650 },
      { name: { hr: "Vizualni identitet PREMIUM", en: "Visual identity PREMIUM", de: "Visuelle Identität PREMIUM" }, price: 1000, date: "10.09.2026.", priceOnDate: 1000 },
    ],
  },
  {
    title: { hr: "Društvene mreže", en: "Social media", de: "Soziale Medien" },
    items: [
      { name: { hr: "Društvene mreže – objave", en: "Social media – posts", de: "Soziale Medien – Beiträge" }, price: 20, date: "10.09.2026.", priceOnDate: 10 },
      { name: { hr: "Obrada slike", en: "Image editing", de: "Bildbearbeitung" }, price: 20, date: "10.09.2026.", priceOnDate: 20 },
      { name: { hr: "Izrada content plana", en: "Content plan", de: "Content-Plan" }, price: 100, date: "04.11.2026.", priceOnDate: 100 },
      { name: { hr: "Snimanje contenta za društvene mreže", en: "Content shooting for social media", de: "Content-Aufnahmen für Social Media" }, price: 150, date: "10.09.2026.", priceOnDate: 150 },
    ],
  },
  {
    title: { hr: "Paketi vođenja društvenih mreža", en: "Social media management packages", de: "Social-Media-Betreuungspakete" },
    items: [
      { name: { hr: "Start – paket vođenje društvenih mreža", en: "Start – social media management package", de: "Start – Social-Media-Betreuungspaket" }, price: 200, date: "10.09.2026.", priceOnDate: 200 },
      { name: { hr: "PRO – paket vođenje društvenih mreža", en: "PRO – social media management package", de: "PRO – Social-Media-Betreuungspaket" }, price: 300, date: "10.09.2026.", priceOnDate: 300 },
      { name: { hr: "Premium – paket vođenje društvenih mreža", en: "Premium – social media management package", de: "Premium – Social-Media-Betreuungspaket" }, price: 450, date: "10.09.2026.", priceOnDate: 450 },
    ],
  },
  {
    title: { hr: "Katalog", en: "Catalogue", de: "Katalog" },
    items: [
      { name: { hr: "Dizajn deplijana", en: "Leaflet design", de: "Faltblatt-Design" }, price: 200, date: "24.09.2026.", priceOnDate: 200 },
      { name: { hr: "Izrada – katalog proizvoda", en: "Product catalogue", de: "Produktkatalog" }, price: 30, date: "10.09.2026.", priceOnDate: 30 },
    ],
  },
  {
    title: { hr: "Plakati", en: "Posters", de: "Plakate" },
    items: [
      { name: { hr: "Plakat A2/A3/A4", en: "Poster A2/A3/A4", de: "Plakat A2/A3/A4" }, price: 50, date: "10.09.2026.", priceOnDate: 20 },
      { name: { hr: "Dizajn – jumbo plakat", en: "Jumbo poster design", de: "Jumbo-Plakat-Design" }, price: 100, date: "10.09.2026.", priceOnDate: 100 },
      { name: { hr: "Dizajn panoa", en: "Billboard design", de: "Großflächenplakat-Design" }, price: 70, date: "24.09.2026.", priceOnDate: 70 },
      { name: { hr: "Vizual za LED ekran", en: "LED screen visual", de: "Visual für LED-Bildschirm" }, price: 70, date: "10.09.2026.", priceOnDate: 70 },
      { name: { hr: "Priprema za tisak", en: "Print preparation", de: "Druckvorbereitung" }, price: 20, date: "10.09.2026.", priceOnDate: 20 },
    ],
  },
  {
    title: { hr: "Web dizajn", en: "Web design", de: "Webdesign" },
    items: [{ name: { hr: "Web stranica – landing page", en: "Website – landing page", de: "Website – Landingpage" }, price: 500, date: "16.11.2026.", priceOnDate: 500 }],
  },
];

export function formatPrice(value: number, locale: Locale): string {
  if (locale === "en") {
    return `€${value.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  return `${value.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
}
