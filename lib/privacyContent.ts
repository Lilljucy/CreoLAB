import type { Locale } from "./i18n";

export type PrivacySection = {
  heading: string;
  paragraphs: string[];
  rights?: { label: string; text: string }[];
  rightsOutro?: string;
};

export type PrivacyContent = {
  eyebrow: string;
  h1Plain: string;
  h1Gradient: string;
  updated: string;
  sections: PrivacySection[];
};

const PRIVACY: Record<Locale, PrivacyContent> = {
  hr: {
    eyebrow: "Pravne informacije",
    h1Plain: "Politika ",
    h1Gradient: "privatnosti",
    updated: "Zadnje ažurirano: kolovoz 2026.",
    sections: [
      {
        heading: "1. Voditelj obrade podataka",
        paragraphs: [
          "Voditelj obrade podataka je CREOLAB (grafički dizajn, web dizajn i social media marketing) sa sjedištem u Požegi, Hrvatska. Za sva pitanja vezana uz privatnost i zaštitu podataka možete nas kontaktirati na {{email}} ili {{phone}}.",
        ],
      },
      {
        heading: "2. Koje podatke prikupljamo",
        paragraphs: [
          "Ova stranica ne sadrži kontaktni formular. Osobne podatke (ime, email adresu, broj telefona) prikupljamo isključivo kada nam ih sami dobrovoljno pošaljete — putem emaila, telefonskog poziva ili WhatsApp poruke — radi dogovora oko suradnje ili odgovora na vaš upit. Te podatke ne dijelimo s trećim stranama i koristimo ih isključivo u svrhu komunikacije s vama.",
        ],
      },
      {
        heading: "3. Kolačići (cookies)",
        paragraphs: [
          "Kolačići su male tekstualne datoteke koje se pohranjuju na vašem uređaju. Za pamćenje vašeg odabira u baneru za kolačiće stranica koristi lokalnu pohranu (localStorage) vašeg preglednika — to nije kolačić u tehničkom smislu i ne zahtijeva privolu.",
          "Ova stranica koristi Google Analytics radi razumijevanja posjećenosti (broj posjetitelja, najposjećenije stranice, izvori prometa). Kolačići Google Analyticsa postavljaju se isključivo ako u baneru odaberete „Prihvaćam” — dok ne date privolu, ti se kolačići ne učitavaju, a odabirom „Samo nužni” ostaju trajno isključeni.",
          "Kolačići koje pritom Google Analytics postavlja su _ga (razlikovanje posjetitelja, traje do 2 godine) i _ga_XXXXXXX (pamćenje stanja sesije unutar alata, traje do 2 godine). Podatke obrađuje Google Ireland Limited, a mogu se prenositi i izvan Europskog gospodarskog prostora (npr. u SAD) na temelju standardnih ugovornih klauzula Europske komisije. Više informacija potražite u Googleovoj politici privatnosti (policies.google.com/privacy).",
          "Svoj odabir možete promijeniti u bilo kojem trenutku brisanjem podataka o odabiru iz lokalne pohrane (localStorage) vašeg preglednika ili brisanjem kolačića preglednika, nakon čega će vam se baner ponovno prikazati.",
        ],
      },
      {
        heading: "4. Usluge trećih strana",
        paragraphs: [
          "Google Analytics: koristimo ovu uslugu tvrtke Google Ireland Limited radi analize posjećenosti stranice, isključivo uz vašu prethodnu privolu (vidi odjeljak 3.). U ovom odnosu Google djeluje kao izvršitelj obrade podataka.",
          "Fontovi: za prikaz fontova na stranici koristimo samostalno hostirane font datoteke, bez povezivanja s vanjskim poslužiteljima za fontove, pa ova usluga ne postavlja kolačiće niti prikuplja osobne podatke posjetitelja.",
        ],
      },
      {
        heading: "5. Vaša prava",
        paragraphs: ["Sukladno Općoj uredbi o zaštiti podataka (GDPR), u odnosu na svoje osobne podatke imate pravo na:"],
        rights: [
          { label: "Pristup", text: "zatražiti uvid u podatke koje o vama obrađujemo." },
          { label: "Ispravak", text: "zatražiti ispravak netočnih ili nepotpunih podataka." },
          { label: "Brisanje", text: "zatražiti brisanje svojih podataka kada više nisu potrebni u svrhu za koju su prikupljeni." },
          { label: "Prigovor", text: "usprotiviti se obradi svojih podataka u određenim okolnostima." },
          { label: "Prenosivost", text: "zatražiti prijenos podataka drugom voditelju obrade." },
        ],
        rightsOutro: "Zahtjev možete poslati na {{email}}. Odgovorit ćemo u zakonski propisanom roku.",
      },
      {
        heading: "6. Čuvanje podataka",
        paragraphs: [
          "Podatke koje nam pošaljete putem emaila ili telefona čuvamo onoliko dugo koliko je potrebno za dovršetak dogovorene suradnje ili odgovora na vaš upit, odnosno u skladu sa zakonskim obvezama čuvanja poslovne dokumentacije.",
        ],
      },
      {
        heading: "7. Izmjene ove politike",
        paragraphs: [
          "Ovu politiku privatnosti možemo povremeno ažurirati, primjerice prilikom uvođenja novih alata ili usluga na stranicu. Datum zadnje izmjene naveden je na vrhu ove stranice.",
        ],
      },
      {
        heading: "8. Kontakt",
        paragraphs: ["Za sva pitanja o ovoj politici privatnosti ili obradi vaših podataka, javite nam se na {{email}}."],
      },
    ],
  },
  en: {
    eyebrow: "Legal",
    h1Plain: "Privacy ",
    h1Gradient: "Policy",
    updated: "Last updated: August 2026.",
    sections: [
      {
        heading: "1. Data Controller",
        paragraphs: [
          "The data controller is CREOLAB (graphic design, web design and social media marketing), based in Požega, Croatia. For any privacy or data protection questions, contact us at {{email}} or {{phone}}.",
        ],
      },
      {
        heading: "2. What Data We Collect",
        paragraphs: [
          "This website does not have a contact form. We only collect personal data (name, email address, phone number) when you voluntarily send it to us — by email, phone call, or WhatsApp message — to discuss a potential project or respond to your enquiry. We do not share this data with third parties and use it solely to communicate with you.",
        ],
      },
      {
        heading: "3. Cookies",
        paragraphs: [
          "Cookies are small text files stored on your device. To remember your choice in the cookie banner, this website uses your browser's local storage (localStorage) — this is not a cookie in the technical sense and does not require consent.",
          "This website uses Google Analytics to understand site traffic (number of visitors, most visited pages, traffic sources). Google Analytics cookies are only set if you click \"Accept\" in the banner — until you give consent, these cookies are not loaded, and choosing \"Necessary only\" keeps them permanently disabled.",
          "The cookies Google Analytics sets are _ga (distinguishing visitors, lasts up to 2 years) and _ga_XXXXXXX (remembering session state within the tool, lasts up to 2 years). This data is processed by Google Ireland Limited and may be transferred outside the European Economic Area (e.g. to the US) under the European Commission's Standard Contractual Clauses. See Google's privacy policy (policies.google.com/privacy) for more information.",
          "You can change your choice at any time by clearing your consent selection from your browser's local storage or by clearing your browser's cookies, after which the banner will be shown again.",
        ],
      },
      {
        heading: "4. Third-Party Services",
        paragraphs: [
          "Google Analytics: we use this service from Google Ireland Limited to analyze site traffic, only with your prior consent (see section 3). Google acts as a data processor in this relationship.",
          "Fonts: we use self-hosted font files to display fonts on this website, without connecting to external font servers, so this service does not set cookies or collect visitors' personal data.",
        ],
      },
      {
        heading: "5. Your Rights",
        paragraphs: ["Under the General Data Protection Regulation (GDPR), you have the right to:"],
        rights: [
          { label: "Access", text: "request a copy of the data we hold about you." },
          { label: "Rectification", text: "request correction of inaccurate or incomplete data." },
          { label: "Erasure", text: "request deletion of your data once it's no longer needed for the purpose it was collected." },
          { label: "Objection", text: "object to the processing of your data in certain circumstances." },
          { label: "Portability", text: "request that your data be transferred to another controller." },
        ],
        rightsOutro: "You can send a request to {{email}}. We will respond within the legally required timeframe.",
      },
      {
        heading: "6. Data Retention",
        paragraphs: [
          "We keep the data you send us by email or phone for as long as necessary to complete an agreed project or respond to your enquiry, or as required by legal obligations for business record keeping.",
        ],
      },
      {
        heading: "7. Changes to This Policy",
        paragraphs: [
          "We may update this privacy policy from time to time, for example when introducing new tools or services on the website. The date of the last update is shown at the top of this page.",
        ],
      },
      {
        heading: "8. Contact",
        paragraphs: ["For any questions about this privacy policy or how we process your data, reach out at {{email}}."],
      },
    ],
  },
  de: {
    eyebrow: "Rechtliches",
    h1Plain: "Datenschutz",
    h1Gradient: "erklärung",
    updated: "Zuletzt aktualisiert: August 2026.",
    sections: [
      {
        heading: "1. Verantwortlicher",
        paragraphs: [
          "Verantwortlicher für die Datenverarbeitung ist CREOLAB (Grafikdesign, Webdesign und Social-Media-Marketing) mit Sitz in Požega, Kroatien. Bei Fragen zum Datenschutz erreichen Sie uns unter {{email}} oder {{phone}}.",
        ],
      },
      {
        heading: "2. Welche Daten wir erheben",
        paragraphs: [
          "Diese Website verfügt über kein Kontaktformular. Wir erheben personenbezogene Daten (Name, E-Mail-Adresse, Telefonnummer) ausschließlich dann, wenn Sie uns diese freiwillig übermitteln — per E-Mail, Telefonanruf oder WhatsApp-Nachricht —, um ein mögliches Projekt zu besprechen oder Ihre Anfrage zu beantworten. Wir geben diese Daten nicht an Dritte weiter und nutzen sie ausschließlich zur Kommunikation mit Ihnen.",
        ],
      },
      {
        heading: "3. Cookies",
        paragraphs: [
          "Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden. Um Ihre Auswahl im Cookie-Banner zu speichern, nutzt diese Website den lokalen Speicher (localStorage) Ihres Browsers — dies ist im technischen Sinne kein Cookie und erfordert keine Einwilligung.",
          "Diese Website nutzt Google Analytics, um den Website-Traffic zu verstehen (Besucherzahl, meistbesuchte Seiten, Traffic-Quellen). Cookies von Google Analytics werden ausschließlich gesetzt, wenn Sie im Banner auf „Akzeptieren” klicken — bis Sie Ihre Einwilligung erteilen, werden diese Cookies nicht geladen, und mit „Nur notwendige” bleiben sie dauerhaft deaktiviert.",
          "Die dabei von Google Analytics gesetzten Cookies sind _ga (Unterscheidung von Besuchern, Laufzeit bis zu 2 Jahre) und _ga_XXXXXXX (Speicherung des Sitzungsstatus innerhalb des Tools, Laufzeit bis zu 2 Jahre). Diese Daten werden von Google Ireland Limited verarbeitet und können auch außerhalb des Europäischen Wirtschaftsraums (z. B. in die USA) übermittelt werden, gestützt auf die Standardvertragsklauseln der Europäischen Kommission. Weitere Informationen finden Sie in der Datenschutzerklärung von Google (policies.google.com/privacy).",
          "Sie können Ihre Auswahl jederzeit ändern, indem Sie die gespeicherte Einwilligung aus dem lokalen Speicher (localStorage) Ihres Browsers oder die Cookies Ihres Browsers löschen — der Banner wird Ihnen dann erneut angezeigt.",
        ],
      },
      {
        heading: "4. Dienste Dritter",
        paragraphs: [
          "Google Analytics: Wir nutzen diesen Dienst von Google Ireland Limited zur Analyse des Website-Traffics, ausschließlich mit Ihrer vorherigen Einwilligung (siehe Abschnitt 3). Google fungiert dabei als Auftragsverarbeiter.",
          "Schriftarten: Zur Darstellung von Schriftarten auf dieser Website nutzen wir selbst gehostete Schriftdateien, ohne Verbindung zu externen Font-Servern. Dieser Dienst setzt daher keine Cookies und erhebt keine personenbezogenen Daten der Besucher.",
        ],
      },
      {
        heading: "5. Ihre Rechte",
        paragraphs: ["Gemäß der Datenschutz-Grundverordnung (DSGVO) haben Sie folgende Rechte:"],
        rights: [
          { label: "Auskunft", text: "Einsicht in die über Sie gespeicherten Daten verlangen." },
          { label: "Berichtigung", text: "Korrektur unrichtiger oder unvollständiger Daten verlangen." },
          { label: "Löschung", text: "Löschung Ihrer Daten verlangen, sobald sie für den ursprünglichen Zweck nicht mehr erforderlich sind." },
          { label: "Widerspruch", text: "der Verarbeitung Ihrer Daten unter bestimmten Umständen widersprechen." },
          { label: "Datenübertragbarkeit", text: "die Übertragung Ihrer Daten an einen anderen Verantwortlichen verlangen." },
        ],
        rightsOutro: "Anfragen richten Sie bitte an {{email}}. Wir antworten innerhalb der gesetzlich vorgeschriebenen Frist.",
      },
      {
        heading: "6. Speicherdauer",
        paragraphs: [
          "Die von Ihnen per E-Mail oder Telefon übermittelten Daten bewahren wir so lange auf, wie es zur Durchführung eines vereinbarten Projekts oder zur Beantwortung Ihrer Anfrage erforderlich ist, bzw. gemäß gesetzlicher Aufbewahrungspflichten für Geschäftsunterlagen.",
        ],
      },
      {
        heading: "7. Änderungen dieser Richtlinie",
        paragraphs: [
          "Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren, etwa bei der Einführung neuer Tools oder Dienste auf der Website. Das Datum der letzten Aktualisierung finden Sie oben auf dieser Seite.",
        ],
      },
      {
        heading: "8. Kontakt",
        paragraphs: ["Bei Fragen zu dieser Datenschutzerklärung oder zur Verarbeitung Ihrer Daten wenden Sie sich an {{email}}."],
      },
    ],
  },
};

export function getPrivacy(locale: Locale): PrivacyContent {
  return PRIVACY[locale];
}
