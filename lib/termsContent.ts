import type { Locale } from "./i18n";

export type TermsSection = {
  heading: string;
  paragraphs: string[];
};

export type TermsContent = {
  eyebrow: string;
  h1Plain: string;
  h1Gradient: string;
  updated: string;
  sections: TermsSection[];
};

const TERMS: Record<Locale, TermsContent> = {
  hr: {
    eyebrow: "Pravne informacije",
    h1Plain: "Uvjeti ",
    h1Gradient: "korištenja",
    updated: "Zadnje ažurirano: kolovoz 2026.",
    sections: [
      {
        heading: "1. Opće odredbe",
        paragraphs: [
          "Ovi Uvjeti korištenja uređuju korištenje web stranice creolab-design.hr (u daljnjem tekstu: stranica), koju vodi CREOLAB (grafički dizajn, web dizajn i social media marketing) sa sjedištem u Požegi, Hrvatska. Korištenjem stranice prihvaćate ove uvjete. Ako se s njima ne slažete, molimo da stranicu ne koristite.",
        ],
      },
      {
        heading: "2. Sadržaj stranice",
        paragraphs: [
          "Sav sadržaj objavljen na stranici — tekstovi, fotografije, grafike, logotipi i dizajn stranice — vlasništvo je CREOLAB-a ili se koristi uz odgovarajuće dopuštenje, te je zaštićen autorskim pravom. Sadržaj se ne smije kopirati, distribuirati ili koristiti u komercijalne svrhe bez našeg prethodnog pisanog pristanka.",
        ],
      },
      {
        heading: "3. Usluge i ponude",
        paragraphs: [
          "Informacije o uslugama prikazane na stranici (grafički dizajn, web dizajn, social media marketing) informativne su naravi. Svaka suradnja definira se zasebnom, individualno pripremljenom ponudom koja sadrži opseg posla, rokove, cijenu i broj revizija za dotični projekt. Ovi Uvjeti korištenja primjenjuju se uz uvjete iz pojedinačne ponude; u slučaju neslaganja mjerodavni su uvjeti iz ponude.",
        ],
      },
      {
        heading: "4. Plaćanje",
        paragraphs: [
          "Standardno radimo po principu uplate akontacije (pologa) prije početka izrade projekta, dok se preostali iznos uplaćuje po odobrenju finalnog rješenja, a prije isporuke izvoznih datoteka odnosno lansiranja web stranice. Detaljni uvjeti plaćanja navode se u ponudi za svaki projekt.",
        ],
      },
      {
        heading: "5. Revizije i autorska prava",
        paragraphs: [
          "Broj uključenih revizija definira se ponudom; standardno uključujemo 1 do 4 kruga izmjena, a za opsežnije projekte nudimo dogovoreni veći broj dorada. Nakon što je ugovoreni iznos u potpunosti isplaćen, autorska prava i vlasništvo nad odobrenim finalnim dizajnom prelaze na klijenta. Do trenutka potpune isplate CREOLAB zadržava sva prava nad izrađenim materijalima.",
        ],
      },
      {
        heading: "6. Materijali koje dostavlja klijent",
        paragraphs: [
          "Ako nam klijent dostavi vlastite tekstove, fotografije ili druge materijale za izradu projekta, klijent jamči da posjeduje potrebna prava za njihovo korištenje te preuzima odgovornost za njihov sadržaj.",
        ],
      },
      {
        heading: "7. Ograničenje odgovornosti",
        paragraphs: [
          "Trudimo se da stranica bude točna, ažurna i dostupna, no ne jamčimo neprekidan rad stranice niti odsutnost pogrešaka. CREOLAB ne odgovara za eventualnu izravnu ili neizravnu štetu nastalu korištenjem stranice, osim u slučajevima predviđenim zakonom.",
        ],
      },
      {
        heading: "8. Vanjske poveznice",
        paragraphs: [
          "Stranica može sadržavati poveznice na vanjske web stranice (npr. društvene mreže). Ne odgovaramo za sadržaj ili politiku privatnosti stranica trećih strana.",
        ],
      },
      {
        heading: "9. Mjerodavno pravo",
        paragraphs: [
          "Na ove Uvjete korištenja primjenjuje se hrvatsko pravo. Za sve eventualne sporove nadležan je stvarno nadležni sud u Republici Hrvatskoj.",
        ],
      },
      {
        heading: "10. Izmjene uvjeta",
        paragraphs: [
          "Ove Uvjete korištenja možemo povremeno ažurirati. Datum zadnje izmjene naveden je na vrhu ove stranice.",
        ],
      },
      {
        heading: "11. Kontakt",
        paragraphs: ["Za sva pitanja vezana uz ove Uvjete korištenja javite nam se na {{email}} ili {{phone}}."],
      },
    ],
  },
  en: {
    eyebrow: "Legal",
    h1Plain: "Terms of ",
    h1Gradient: "Service",
    updated: "Last updated: August 2026.",
    sections: [
      {
        heading: "1. General Provisions",
        paragraphs: [
          "These Terms of Service govern the use of the website creolab-design.hr (the \"website\"), operated by CREOLAB (graphic design, web design and social media marketing), based in Požega, Croatia. By using the website, you accept these terms. If you do not agree with them, please do not use the website.",
        ],
      },
      {
        heading: "2. Website Content",
        paragraphs: [
          "All content published on the website — text, photographs, graphics, logos and the website design — is owned by CREOLAB or used with appropriate permission, and is protected by copyright. Content may not be copied, distributed or used for commercial purposes without our prior written consent.",
        ],
      },
      {
        heading: "3. Services & Quotes",
        paragraphs: [
          "Service information shown on the website (graphic design, web design, social media marketing) is provided for informational purposes. Each collaboration is defined by a separate, individually prepared quote that sets out the scope of work, timeline, price and number of revisions for that project. These Terms of Service apply alongside the terms of the individual quote; in case of conflict, the quote's terms prevail.",
        ],
      },
      {
        heading: "4. Payment",
        paragraphs: [
          "We typically work on a deposit basis, paid before work on a project begins, with the remaining amount due once the final solution is approved and before export files are delivered or the website goes live. Detailed payment terms are set out in each project's quote.",
        ],
      },
      {
        heading: "5. Revisions & Copyright",
        paragraphs: [
          "The number of included revisions is defined in the quote; we typically include 1 to 4 rounds of changes, with an agreed larger number for more extensive projects. Once the agreed amount has been paid in full, copyright and ownership of the approved final design transfer to the client. Until full payment is received, CREOLAB retains all rights to the materials produced.",
        ],
      },
      {
        heading: "6. Client-Supplied Materials",
        paragraphs: [
          "If a client provides their own text, photographs or other materials for a project, the client warrants that they hold the necessary rights to use them and takes responsibility for their content.",
        ],
      },
      {
        heading: "7. Limitation of Liability",
        paragraphs: [
          "We aim to keep the website accurate, up to date and available, but we do not guarantee uninterrupted operation or the absence of errors. CREOLAB is not liable for any direct or indirect damages arising from use of the website, except as required by law.",
        ],
      },
      {
        heading: "8. External Links",
        paragraphs: [
          "The website may contain links to external websites (e.g. social media). We are not responsible for the content or privacy practices of third-party websites.",
        ],
      },
      {
        heading: "9. Governing Law",
        paragraphs: [
          "These Terms of Service are governed by Croatian law. Any disputes shall be subject to the jurisdiction of the competent court in Croatia.",
        ],
      },
      {
        heading: "10. Changes to These Terms",
        paragraphs: [
          "We may update these Terms of Service from time to time. The date of the last update is shown at the top of this page.",
        ],
      },
      {
        heading: "11. Contact",
        paragraphs: ["For any questions about these Terms of Service, contact us at {{email}} or {{phone}}."],
      },
    ],
  },
  de: {
    eyebrow: "Rechtliches",
    h1Plain: "Nutzungs",
    h1Gradient: "bedingungen",
    updated: "Zuletzt aktualisiert: August 2026.",
    sections: [
      {
        heading: "1. Allgemeine Bestimmungen",
        paragraphs: [
          "Diese Nutzungsbedingungen regeln die Nutzung der Website creolab-design.hr (die „Website“), betrieben von CREOLAB (Grafikdesign, Webdesign und Social-Media-Marketing) mit Sitz in Požega, Kroatien. Mit der Nutzung der Website akzeptieren Sie diese Bedingungen. Falls Sie nicht einverstanden sind, nutzen Sie die Website bitte nicht.",
        ],
      },
      {
        heading: "2. Inhalte der Website",
        paragraphs: [
          "Sämtliche auf der Website veröffentlichten Inhalte — Texte, Fotografien, Grafiken, Logos und das Design der Website — sind Eigentum von CREOLAB oder werden mit entsprechender Erlaubnis genutzt und sind urheberrechtlich geschützt. Inhalte dürfen ohne unsere vorherige schriftliche Zustimmung nicht kopiert, verbreitet oder kommerziell genutzt werden.",
        ],
      },
      {
        heading: "3. Leistungen & Angebote",
        paragraphs: [
          "Die auf der Website dargestellten Leistungsinformationen (Grafikdesign, Webdesign, Social-Media-Marketing) dienen der allgemeinen Information. Jede Zusammenarbeit wird durch ein separates, individuell erstelltes Angebot festgelegt, das Leistungsumfang, Fristen, Preis und Anzahl der Überarbeitungen für das jeweilige Projekt enthält. Diese Nutzungsbedingungen gelten zusätzlich zu den Bedingungen des jeweiligen Angebots; im Konfliktfall haben die Bedingungen des Angebots Vorrang.",
        ],
      },
      {
        heading: "4. Zahlung",
        paragraphs: [
          "Wir arbeiten in der Regel mit einer Anzahlung vor Projektbeginn, der Restbetrag wird nach Freigabe der finalen Lösung und vor Übergabe der Exportdateien bzw. dem Livegang der Website fällig. Die genauen Zahlungsbedingungen werden im jeweiligen Angebot festgelegt.",
        ],
      },
      {
        heading: "5. Überarbeitungen & Urheberrecht",
        paragraphs: [
          "Die Anzahl der enthaltenen Überarbeitungen wird im Angebot festgelegt; standardmäßig sind 1 bis 4 Überarbeitungsrunden enthalten, bei umfangreicheren Projekten eine vereinbarte höhere Anzahl. Nach vollständiger Zahlung des vereinbarten Betrags gehen Urheberrecht und Eigentum am genehmigten finalen Design auf den Kunden über. Bis zur vollständigen Zahlung behält CREOLAB alle Rechte an den erstellten Materialien.",
        ],
      },
      {
        heading: "6. Vom Kunden bereitgestellte Materialien",
        paragraphs: [
          "Stellt ein Kunde eigene Texte, Fotografien oder andere Materialien für ein Projekt bereit, garantiert er, über die erforderlichen Rechte zu deren Nutzung zu verfügen, und übernimmt die Verantwortung für deren Inhalt.",
        ],
      },
      {
        heading: "7. Haftungsbeschränkung",
        paragraphs: [
          "Wir bemühen uns, die Website korrekt, aktuell und verfügbar zu halten, garantieren jedoch keinen unterbrechungsfreien Betrieb und keine Fehlerfreiheit. CREOLAB haftet nicht für direkte oder indirekte Schäden, die aus der Nutzung der Website entstehen, soweit gesetzlich nicht anders vorgeschrieben.",
        ],
      },
      {
        heading: "8. Externe Links",
        paragraphs: [
          "Die Website kann Links zu externen Websites enthalten (z. B. soziale Medien). Für Inhalte oder Datenschutzpraktiken von Websites Dritter übernehmen wir keine Verantwortung.",
        ],
      },
      {
        heading: "9. Anwendbares Recht",
        paragraphs: [
          "Für diese Nutzungsbedingungen gilt kroatisches Recht. Für etwaige Streitigkeiten ist das zuständige Gericht in Kroatien zuständig.",
        ],
      },
      {
        heading: "10. Änderungen dieser Bedingungen",
        paragraphs: [
          "Wir können diese Nutzungsbedingungen von Zeit zu Zeit aktualisieren. Das Datum der letzten Aktualisierung finden Sie oben auf dieser Seite.",
        ],
      },
      {
        heading: "11. Kontakt",
        paragraphs: ["Bei Fragen zu diesen Nutzungsbedingungen wenden Sie sich an {{email}} oder {{phone}}."],
      },
    ],
  },
};

export function getTerms(locale: Locale): TermsContent {
  return TERMS[locale];
}
