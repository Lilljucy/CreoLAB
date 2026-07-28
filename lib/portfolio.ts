import type { Locale } from "./i18n";

export type Project = {
  slug: string;
  name: string;
  category: Record<Locale, string>;
  img: string;
  gallery: string[];
};

export function categoryFor(project: Project, locale: Locale): string {
  return project.category[locale];
}

export const PROJECTS: Project[] = [
  {
    slug: "platinum-grupa",
    name: "Platinum Grupa",
    category: { hr: "Brend identitet", en: "Brand Identity", de: "Markenidentität" },
    img: "/portfolio/platinum-grupa.jpg",
    gallery: [
      "/portfolio-full/platinum-grupa/01-brend-dizajn.jpg",
      "/portfolio-full/platinum-grupa/02-brend-dizajn.jpg",
      "/portfolio-full/platinum-grupa/03-brend-dizajn.jpg",
      "/portfolio-full/platinum-grupa/04-brend-dizajn.jpg",
      "/portfolio-full/platinum-grupa/05-brend-dizajn.jpg",
    ],
  },
  {
    slug: "bilokapic-destilerija",
    name: "Bilokapić Destilerija",
    category: { hr: "Logo i ambalaža", en: "Logo & Packaging", de: "Logo & Verpackung" },
    img: "/portfolio/bilokapic-destilerija.jpg",
    gallery: [
      "/portfolio-full/bilokapic-destilerija/01-logo-dizajn.jpg",
      "/portfolio-full/bilokapic-destilerija/02-dizajn-ambalaze.jpg",
      "/portfolio-full/bilokapic-destilerija/03-dizajn-ambalaze.jpg",
      "/portfolio-full/bilokapic-destilerija/04-dizajn-ambalaze.jpg",
      "/portfolio-full/bilokapic-destilerija/05-dizajn-ambalaze.jpg",
      "/portfolio-full/bilokapic-destilerija/06-dizajn-ambalaze.jpg",
    ],
  },
  {
    slug: "vinarija-knezevic",
    name: "Vinarija Knežević",
    category: { hr: "Dizajn etikete", en: "Label Design", de: "Etikettendesign" },
    img: "/portfolio/vinarija-knezevic.jpg",
    gallery: [
      "/portfolio-full/vinarija-knezevic/01-logo-dizajn.jpg",
      "/portfolio-full/vinarija-knezevic/02-dizajn-etikete.jpg",
      "/portfolio-full/vinarija-knezevic/03-dizajn-etikete.jpg",
      "/portfolio-full/vinarija-knezevic/04-dizajn-etikete.jpg",
    ],
  },
  {
    slug: "ember-kamin",
    name: "Ember Kamin",
    category: { hr: "Dizajn kataloga", en: "Catalog Design", de: "Katalogdesign" },
    img: "/portfolio/ember-kamin.jpg",
    gallery: [
      "/portfolio-full/ember-kamin/01-katalog-dizajn.jpg",
      "/portfolio-full/ember-kamin/02-katalog-dizajn.jpg",
      "/portfolio-full/ember-kamin/03-katalog-dizajn.jpg",
    ],
  },
  {
    slug: "vismotus",
    name: "Vis Motus",
    category: { hr: "Logo dizajn", en: "Logo Design", de: "Logo-Design" },
    img: "/portfolio/vismotus.jpg",
    gallery: [
      "/portfolio-full/vismotus/01-logo-dizajn.jpg",
      "/portfolio-full/vismotus/02-dizajn-majice.jpg",
      "/portfolio-full/vismotus/03-dizajn-majice.jpg",
      "/portfolio-full/vismotus/04-dizajn-posjetnice.jpg",
    ],
  },
  {
    slug: "soldo-vinarija",
    name: "Soldo Vinarija",
    category: { hr: "Dizajn etikete", en: "Label Design", de: "Etikettendesign" },
    img: "/portfolio-full/soldo-vinarija/02-logo-dizajn.jpg",
    gallery: [
      "/portfolio-full/soldo-vinarija/02-logo-dizajn.jpg",
      "/portfolio-full/soldo-vinarija/01-logo-dizajn.jpg",
      "/portfolio-full/soldo-vinarija/03-dizajn-etikete.jpg",
      "/portfolio-full/soldo-vinarija/04-dizajn-etikete.jpg",
      "/portfolio-full/soldo-vinarija/05-dizajn-etikete.jpg",
      "/portfolio-full/soldo-vinarija/06-dizajn-etikete.jpg",
    ],
  },
  {
    slug: "triglav-osiguranje",
    name: "Triglav Osiguranje",
    category: { hr: "Dizajn plakata", en: "Poster Design", de: "Plakatdesign" },
    img: "/portfolio/triglav-osiguranje.jpg",
    gallery: [
      "/portfolio-full/triglav-osiguranje/01-dizajn-plakata.jpg",
      "/portfolio-full/triglav-osiguranje/02-dizajn-plakata.jpg",
      "/portfolio-full/triglav-osiguranje/03-dizajn-plakata.jpg",
    ],
  },
  {
    slug: "color-trgovina",
    name: "Color Trgovina",
    category: { hr: "Dizajn kataloga", en: "Catalog Design", de: "Katalogdesign" },
    img: "/portfolio/color-trgovina.jpg",
    gallery: [
      "/portfolio-full/color-trgovina/01-katalog-dizajn.jpg",
      "/portfolio-full/color-trgovina/02-katalog-dizajn.jpg",
      "/portfolio-full/color-trgovina/03-katalog-dizajn.jpg",
      "/portfolio-full/color-trgovina/04-katalog-dizajn.jpg",
      "/portfolio-full/color-trgovina/05-katalog-dizajn.jpg",
      "/portfolio-full/color-trgovina/06-katalog-dizajn.jpg",
    ],
  },
  {
    slug: "omega-knjigovodstvo",
    name: "Omega Knjigovodstvo",
    category: { hr: "Brend dizajn", en: "Brand Design", de: "Markendesign" },
    img: "/portfolio/omega-knjigovodstvo.jpg",
    gallery: [
      "/portfolio-full/omega-knjigovodstvo/01-brend-dizajn.jpg",
      "/portfolio-full/omega-knjigovodstvo/02-brend-dizajn.jpg",
    ],
  },
  {
    slug: "previsic-vinarija",
    name: "Previšić Vinarija",
    category: { hr: "Dizajn etikete", en: "Label Design", de: "Etikettendesign" },
    img: "/portfolio/previsic-vinarija.jpg",
    gallery: [
      "/portfolio-full/previsic-vinarija/01-logo-dizajn.jpg",
      "/portfolio-full/previsic-vinarija/02-dizajn-etikete.jpg",
      "/portfolio-full/previsic-vinarija/03-dizajn-etikete.jpg",
    ],
  },
  {
    slug: "mitrovic-vinarija",
    name: "Mitrović Vinarija",
    category: { hr: "Logo dizajn", en: "Logo Design", de: "Logo-Design" },
    img: "/portfolio/mitrovic-vinarija.jpg",
    gallery: [
      "/portfolio-full/mitrovic-vinarija/01-logo-dizajn.jpg",
      "/portfolio-full/mitrovic-vinarija/02-logo-dizajn.jpg",
    ],
  },
  {
    slug: "caffe-bar-vanilla",
    name: "Caffe Bar Vanilla",
    category: { hr: "Dizajn cjenika", en: "Menu Design", de: "Speisekartendesign" },
    img: "/portfolio/caffe-bar-vanilla.jpg",
    gallery: ["/portfolio-full/caffe-bar-vanilla/01-dizajn-cjenika.jpg"],
  },
  {
    slug: "sax-win",
    name: "Sax-Win",
    category: { hr: "Logo dizajn", en: "Logo Design", de: "Logo-Design" },
    img: "/portfolio/sax-win.jpg",
    gallery: ["/portfolio-full/sax-win/01-logo-dizajn.jpg"],
  },
  {
    slug: "dopa-projekt",
    name: "Dopa Projekt",
    category: { hr: "Logo dizajn", en: "Logo Design", de: "Logo-Design" },
    img: "/portfolio/dopa-projekt.jpg",
    gallery: [
      "/portfolio-full/dopa-projekt/01-logo-dizajn.jpg",
      "/portfolio-full/dopa-projekt/02-logo-dizajn.jpg",
      "/portfolio-full/dopa-projekt/03-logo-dizajn.jpg",
    ],
  },
  {
    slug: "udruga-igrac",
    name: "Udruga Igrač",
    category: { hr: "Logo dizajn", en: "Logo Design", de: "Logo-Design" },
    img: "/portfolio/udruga-igrac.jpg",
    gallery: [
      "/portfolio-full/udruga-igrac/01-logo-dizajn.jpg",
      "/portfolio-full/udruga-igrac/02-logo-dizajn.jpg",
    ],
  },
  {
    slug: "adria-motors",
    name: "Adria Motors",
    category: { hr: "Logo dizajn", en: "Logo Design", de: "Logo-Design" },
    img: "/portfolio/adria-motors.jpg",
    gallery: ["/portfolio-full/adria-motors/01-logo-dizajn.jpg"],
  },
];

export const FEATURED_SLUGS = ["platinum-grupa", "bilokapic-destilerija", "ember-kamin"];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
