import type { Locale } from "./i18n";

export type Project = {
  slug: string;
  name: string;
  category: Record<Locale, string>;
  img: string;
  gallery: string[];
  galleryAlt: string[];
};

export function categoryFor(project: Project, locale: Locale): string {
  return project.category[locale];
}

export function uniqueCategories(locale: Locale): string[] {
  return [...new Set(PROJECTS.map((p) => categoryFor(p, locale)))];
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
    galleryAlt: [
      "Memorandum i vizitka Platinum Grupe na radnom stolu",
      "Kuverta i memorandum s utisnutim logom Platinum Grupe",
      "Poslovna omotnica i memorandum s logom Platinum Grupe",
      "Memorandum, kuverta i vizitka brenda Platinum Grupa",
      "Vizitka direktora Platinum Grupe s kontakt podacima",
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
    galleryAlt: [
      "Logo destilerije Bilokapić utisnut zlatotiskom na tamnom papiru",
      "Boca vinjaka Bilokapić s drvenim čepom i crnom etiketom",
      "Boca vinjaka Bilokapić destilerije položena u kadru",
      "Detalj etikete i drvenog čepa na boci vinjaka Bilokapić",
      "Boca šljivovice Bilokapić s ilustracijom šljive na etiketi",
      "Boca lozovače Bilokapić s ilustracijom grožđa na etiketi",
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
    galleryAlt: [
      "Logo vinarije Knežević s motivom bačve i notnog crtovlja",
      "Boce vina Knežević Merlot i Sauvignon s crno-zlatnim etiketama",
      "Boca vina Knežević Sauvignon sa zelenom etiketom",
      "Boce vina Knežević Merlot i Sauvignon položene jedna uz drugu",
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
    galleryAlt: [
      "Naslovnica kataloga Ember Premium s fotografijom kamina",
      "Katalog Ember Premium naslonjen na naslonjač",
      "Dva primjerka kataloga Ember Premium u pletenoj posudi",
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
    galleryAlt: [
      "Vizitka Vis Motus s logotipom na betonskoj podlozi",
      "Bijela majica s otisnutim logom Vis Motus",
      "Ljubičasta majica s logom Vis Motus",
      "Vizitka trenera Vis Motusa s QR kodom",
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
    galleryAlt: [
      "Logo vinarije Soldo utisnut zlatotiskom na tamnom papiru",
      "Logo vinarije Soldo na pozadini vinograda u zalasku sunca",
      "Boca vina Soldo Graševina osvijetljena toplim svjetlom",
      "Boca vina Soldo Graševina na bijeloj pozadini",
      "Boca ružičastog vina Soldo Rosé uz bazen",
      "Boca vina Soldo Graševina i čaša vina ispred božićnog drvca",
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
    galleryAlt: [
      "Plakat Triglav osiguranja s obitelji u prirodi na uličnom štandu",
      "Plakat Triglav osiguranja s QR kodom za WhatsApp kanal",
      "Plakat Triglav osiguranja i Imex banke s dvije žene",
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
    galleryAlt: [
      "Naslovnica kataloga Color trgovine za slavonsko kolinje",
      "Otvoreni katalog Color trgovine s ponudom kamina",
      "Više izdanja kataloga Color trgovine razloženih na stolu",
      "Katalog Color trgovine s proljetnom ponudom za vrt i dom",
      "Katalog Color trgovine s ponudom vrtnog alata za proljeće",
      "Katalog Color trgovine s božićnom ponudom ukrasa",
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
    galleryAlt: [
      "Vizitka Omega knjigovodstva s logom na kožnoj podlozi",
      "Poslovni memorandum, kuverta i vizitke Omega knjigovodstva",
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
    galleryAlt: [
      "Logo vinarije Previšić utisnut zlatotiskom na papiru",
      "Boce vina Previšić Merlot i Graševina u nizu",
      "Boca vina Previšić Merlot uz košaru s grožđem",
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
    galleryAlt: [
      "Logo vinarije Mitrović u zlatotisku na tamnoj vizitki",
      "Vizitka vinarije Mitrović na kamenoj podlozi",
    ],
  },
  {
    slug: "caffe-bar-vanilla",
    name: "Caffe Bar Vanilla",
    category: { hr: "Dizajn cjenika", en: "Menu Design", de: "Speisekartendesign" },
    img: "/portfolio/caffe-bar-vanilla.jpg",
    gallery: ["/portfolio-full/caffe-bar-vanilla/01-dizajn-cjenika.jpg"],
    galleryAlt: ["Božićni cjenik Caffe bara Vanilla s ilustracijama krumpirića"],
  },
  {
    slug: "sax-win",
    name: "Sax-Win",
    category: { hr: "Logo dizajn", en: "Logo Design", de: "Logo-Design" },
    img: "/portfolio/sax-win.jpg",
    gallery: ["/portfolio-full/sax-win/01-logo-dizajn.jpg"],
    galleryAlt: ["Logo Sax-Win utisnut u zlatu na crnoj podlozi"],
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
    galleryAlt: [
      "Logo Dopa Projekt s munjom na bijelom papiru",
      "Logo Dopa Projekt na uvijenom listu papira",
      "Logo Dopa Projekt na savijenoj stranici",
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
    galleryAlt: [
      "Logo udruge vinogradara i vinara Igrač u boji",
      "Logo udruge vinogradara i vinara Igrač u crno-bijeloj varijanti",
    ],
  },
  {
    slug: "adria-motors",
    name: "Adria Motors",
    category: { hr: "Logo dizajn", en: "Logo Design", de: "Logo-Design" },
    img: "/portfolio/adria-motors.jpg",
    gallery: ["/portfolio-full/adria-motors/01-logo-dizajn.jpg"],
    galleryAlt: ["Logo Adria Motors na zidu izložbenog salona s modelima automobila"],
  },
];

export const FEATURED_SLUGS = [
  "bilokapic-destilerija",
  "ember-kamin",
  "vinarija-knezevic",
  "color-trgovina",
  "soldo-vinarija",
  "triglav-osiguranje",
  "previsic-vinarija",
  "dopa-projekt",
  "vismotus",
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
