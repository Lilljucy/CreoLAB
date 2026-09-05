const SITE_URL = "https://creolab-design.hr";

export const PROFESSIONAL_SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: "CreoLab",
      alternateName: "CREOLAB",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/icon.svg`,
      image: `${SITE_URL}/web-dizajn/01-naslovnica.jpg`,
      telephone: "+385919798969",
      email: "iva.creolab@gmail.com",
      founder: {
        "@type": "Person",
        name: "Luka Marić",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Marije Jurić Zagorke 9",
        postalCode: "34000",
        addressLocality: "Požega",
        addressRegion: "Požeško-slavonska županija",
        addressCountry: "HR",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "16:00",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Požega" },
        { "@type": "AdministrativeArea", name: "Slavonija" },
        { "@type": "Country", name: "Hrvatska" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Usluge",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Grafički dizajn i izrada logotipa" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Izrada web stranica" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Vođenje društvenih mreža" },
          },
        ],
      },
      sameAs: [
        "https://www.instagram.com/creo.l.a.b/",
        "https://www.facebook.com/profile.php?id=61573601529172",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "CreoLab",
      url: `${SITE_URL}/`,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: ["hr", "en", "de"],
    },
  ],
};

export function buildBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
