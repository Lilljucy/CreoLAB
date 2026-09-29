import type { Locale } from "./i18n";

// Alt tekstovi slika pisani su na hrvatskom u kodu; ovdje su njihovi prijevodi.
const ALT: Record<string, { en: string; de: string }> = {
  // Platinum Grupa
  "Memorandum i vizitka Platinum Grupe na radnom stolu": {
    en: "Platinum Grupa letterhead and business card on a desk",
    de: "Briefbogen und Visitenkarte von Platinum Grupa auf einem Schreibtisch",
  },
  "Kuverta i memorandum s utisnutim logom Platinum Grupe": {
    en: "Envelope and letterhead with the embossed Platinum Grupa logo",
    de: "Umschlag und Briefbogen mit geprägtem Platinum-Grupa-Logo",
  },
  "Poslovna omotnica i memorandum s logom Platinum Grupe": {
    en: "Business envelope and letterhead with the Platinum Grupa logo",
    de: "Geschäftsumschlag und Briefbogen mit dem Platinum-Grupa-Logo",
  },
  "Memorandum, kuverta i vizitka brenda Platinum Grupa": {
    en: "Platinum Grupa brand letterhead, envelope and business card",
    de: "Briefbogen, Umschlag und Visitenkarte der Marke Platinum Grupa",
  },
  "Vizitka direktora Platinum Grupe s kontakt podacima": {
    en: "Platinum Grupa director's business card with contact details",
    de: "Visitenkarte des Direktors von Platinum Grupa mit Kontaktdaten",
  },
  // Bilokapić
  "Logo destilerije Bilokapić utisnut zlatotiskom na tamnom papiru": {
    en: "Bilokapić distillery logo gold-foil stamped on dark paper",
    de: "Logo der Destillerie Bilokapić in Goldprägung auf dunklem Papier",
  },
  "Boca vinjaka Bilokapić s drvenim čepom i crnom etiketom": {
    en: "Bilokapić brandy bottle with a wooden stopper and black label",
    de: "Bilokapić-Weinbrandflasche mit Holzverschluss und schwarzem Etikett",
  },
  "Boca vinjaka Bilokapić destilerije položena u kadru": {
    en: "Bilokapić distillery brandy bottle lying in frame",
    de: "Liegende Weinbrandflasche der Destillerie Bilokapić im Bildausschnitt",
  },
  "Detalj etikete i drvenog čepa na boci vinjaka Bilokapić": {
    en: "Detail of the label and wooden stopper on a Bilokapić brandy bottle",
    de: "Detail von Etikett und Holzverschluss auf einer Bilokapić-Weinbrandflasche",
  },
  "Boca šljivovice Bilokapić s ilustracijom šljive na etiketi": {
    en: "Bilokapić plum brandy bottle with a plum illustration on the label",
    de: "Bilokapić-Zwetschgenbrandflasche mit Zwetschgenillustration auf dem Etikett",
  },
  "Boca lozovače Bilokapić s ilustracijom grožđa na etiketi": {
    en: "Bilokapić grape brandy bottle with a grape illustration on the label",
    de: "Bilokapić-Traubenbrandflasche mit Traubenillustration auf dem Etikett",
  },
  // Knežević
  "Logo vinarije Knežević s motivom bačve i notnog crtovlja": {
    en: "Knežević winery logo with a barrel and music staff motif",
    de: "Logo des Weinguts Knežević mit Fass- und Notenlinien-Motiv",
  },
  "Boce vina Knežević Merlot i Sauvignon s crno-zlatnim etiketama": {
    en: "Knežević Merlot and Sauvignon wine bottles with black-and-gold labels",
    de: "Knežević-Weinflaschen Merlot und Sauvignon mit schwarz-goldenen Etiketten",
  },
  "Boca vina Knežević Sauvignon sa zelenom etiketom": {
    en: "Knežević Sauvignon wine bottle with a green label",
    de: "Knežević-Sauvignon-Flasche mit grünem Etikett",
  },
  "Boce vina Knežević Merlot i Sauvignon položene jedna uz drugu": {
    en: "Knežević Merlot and Sauvignon wine bottles lying side by side",
    de: "Knežević-Weinflaschen Merlot und Sauvignon nebeneinander liegend",
  },
  // Ember
  "Naslovnica kataloga Ember Premium s fotografijom kamina": {
    en: "Ember Premium catalogue cover with a photograph of a fireplace",
    de: "Titelseite des Ember-Premium-Katalogs mit einem Kaminfoto",
  },
  "Katalog Ember Premium naslonjen na naslonjač": {
    en: "Ember Premium catalogue resting on an armchair",
    de: "Ember-Premium-Katalog an einen Sessel gelehnt",
  },
  "Dva primjerka kataloga Ember Premium u pletenoj posudi": {
    en: "Two copies of the Ember Premium catalogue in a wicker basket",
    de: "Zwei Exemplare des Ember-Premium-Katalogs in einem Weidenkorb",
  },
  // Vis Motus
  "Vizitka Vis Motus s logotipom na betonskoj podlozi": {
    en: "Vis Motus business card with the logo on a concrete surface",
    de: "Vis-Motus-Visitenkarte mit Logo auf einer Betonfläche",
  },
  "Bijela majica s otisnutim logom Vis Motus": {
    en: "White t-shirt with the printed Vis Motus logo",
    de: "Weißes T-Shirt mit aufgedrucktem Vis-Motus-Logo",
  },
  "Ljubičasta majica s logom Vis Motus": {
    en: "Purple t-shirt with the Vis Motus logo",
    de: "Violettes T-Shirt mit dem Vis-Motus-Logo",
  },
  "Vizitka trenera Vis Motusa s QR kodom": {
    en: "Vis Motus trainer's business card with a QR code",
    de: "Visitenkarte eines Vis-Motus-Trainers mit QR-Code",
  },
  // Soldo
  "Logo vinarije Soldo utisnut zlatotiskom na tamnom papiru": {
    en: "Soldo winery logo gold-foil stamped on dark paper",
    de: "Logo des Weinguts Soldo in Goldprägung auf dunklem Papier",
  },
  "Logo vinarije Soldo na pozadini vinograda u zalasku sunca": {
    en: "Soldo winery logo against a vineyard at sunset",
    de: "Logo des Weinguts Soldo vor einem Weinberg im Sonnenuntergang",
  },
  "Boca vina Soldo Graševina osvijetljena toplim svjetlom": {
    en: "Soldo Graševina wine bottle lit by warm light",
    de: "Soldo-Graševina-Flasche im warmen Licht",
  },
  "Boca vina Soldo Graševina na bijeloj pozadini": {
    en: "Soldo Graševina wine bottle on a white background",
    de: "Soldo-Graševina-Flasche vor weißem Hintergrund",
  },
  // Triglav
  "Plakat Triglav osiguranja s obitelji u prirodi na uličnom štandu": {
    en: "Triglav Osiguranje poster with a family in nature on a street stand",
    de: "Triglav-Osiguranje-Plakat mit einer Familie in der Natur auf einem Straßenaufsteller",
  },
  "Plakat Triglav osiguranja s QR kodom za WhatsApp kanal": {
    en: "Triglav Osiguranje poster with a QR code for the WhatsApp channel",
    de: "Triglav-Osiguranje-Plakat mit QR-Code für den WhatsApp-Kanal",
  },
  "Plakat Triglav osiguranja i Imex banke s dvije žene": {
    en: "Triglav Osiguranje and Imex Bank poster with two women",
    de: "Plakat von Triglav Osiguranje und Imex Banka mit zwei Frauen",
  },
  // Color
  "Naslovnica kataloga Color trgovine za slavonsko kolinje": {
    en: "Color Trgovina catalogue cover for the Slavonian pig-slaughter season",
    de: "Titelseite des Color-Trgovina-Katalogs zur slawonischen Schlachtsaison",
  },
  "Otvoreni katalog Color trgovine s ponudom kamina": {
    en: "Open Color Trgovina catalogue with a fireplace offer",
    de: "Aufgeschlagener Color-Trgovina-Katalog mit Kaminangebot",
  },
  "Više izdanja kataloga Color trgovine razloženih na stolu": {
    en: "Several editions of the Color Trgovina catalogue spread out on a table",
    de: "Mehrere Ausgaben des Color-Trgovina-Katalogs auf einem Tisch ausgebreitet",
  },
  "Katalog Color trgovine s proljetnom ponudom za vrt i dom": {
    en: "Color Trgovina catalogue with a spring offer for garden and home",
    de: "Color-Trgovina-Katalog mit Frühlingsangebot für Garten und Haus",
  },
  "Katalog Color trgovine s ponudom vrtnog alata za proljeće": {
    en: "Color Trgovina catalogue with a garden tools offer for spring",
    de: "Color-Trgovina-Katalog mit Gartenwerkzeug-Angebot für das Frühjahr",
  },
  "Katalog Color trgovine s božićnom ponudom ukrasa": {
    en: "Color Trgovina catalogue with a Christmas decoration offer",
    de: "Color-Trgovina-Katalog mit Weihnachtsdekoration im Angebot",
  },
  // Omega
  "Vizitka Omega knjigovodstva s logom na kožnoj podlozi": {
    en: "Omega Consulting business card with the logo on a leather surface",
    de: "Omega-Consulting-Visitenkarte mit Logo auf einer Lederfläche",
  },
  "Poslovni memorandum, kuverta i vizitke Omega knjigovodstva": {
    en: "Omega Consulting letterhead, envelope and business cards",
    de: "Briefbogen, Umschlag und Visitenkarten von Omega Consulting",
  },
  // Previšić
  "Logo vinarije Previšić utisnut zlatotiskom na papiru": {
    en: "Previšić winery logo gold-foil stamped on paper",
    de: "Logo des Weinguts Previšić in Goldprägung auf Papier",
  },
  "Boce vina Previšić Merlot i Graševina u nizu": {
    en: "Previšić Merlot and Graševina wine bottles in a row",
    de: "Previšić-Weinflaschen Merlot und Graševina in einer Reihe",
  },
  "Boca vina Previšić Merlot uz košaru s grožđem": {
    en: "Previšić Merlot wine bottle next to a basket of grapes",
    de: "Previšić-Merlot-Flasche neben einem Korb mit Trauben",
  },
  // Mitrović
  "Logo vinarije Mitrović u zlatotisku na tamnoj vizitki": {
    en: "Mitrović winery logo in gold foil on a dark business card",
    de: "Logo des Weinguts Mitrović in Goldprägung auf einer dunklen Visitenkarte",
  },
  "Vizitka vinarije Mitrović na kamenoj podlozi": {
    en: "Mitrović winery business card on a stone surface",
    de: "Visitenkarte des Weinguts Mitrović auf einer Steinfläche",
  },
  // Dopa
  "Logo Dopa Projekt s munjom na bijelom papiru": {
    en: "Dopa Projekt logo with a lightning bolt on white paper",
    de: "Dopa-Projekt-Logo mit Blitz auf weißem Papier",
  },
  "Logo Dopa Projekt na uvijenom listu papira": {
    en: "Dopa Projekt logo on a curled sheet of paper",
    de: "Dopa-Projekt-Logo auf einem gerollten Blatt Papier",
  },
  "Logo Dopa Projekt na savijenoj stranici": {
    en: "Dopa Projekt logo on a folded page",
    de: "Dopa-Projekt-Logo auf einer gefalteten Seite",
  },
  // Igrač
  "Logo udruge vinogradara i vinara Igrač u boji": {
    en: "Logo of the Igrač Association of Winegrowers and Winemakers in colour",
    de: "Logo des Winzer- und Weinbauernvereins Igrač in Farbe",
  },
  "Logo udruge vinogradara i vinara Igrač u crno-bijeloj varijanti": {
    en: "Logo of the Igrač Association of Winegrowers and Winemakers in black and white",
    de: "Logo des Winzer- und Weinbauernvereins Igrač in Schwarz-Weiß",
  },
  // Majstorović
  "Logo Vinarije Majstorović s pleternim ornamentom i čašom uklesan u kamen": {
    en: "Majstorović winery logo with an interlace ornament and a glass carved into stone",
    de: "Logo des Weinguts Majstorović mit Flechtornament und Glas in Stein gemeißelt",
  },
  "Vizitka Vinarije Majstorović Kutjevo na starom drvu": {
    en: "Majstorović Kutjevo winery business card on old wood",
    de: "Visitenkarte des Weinguts Majstorović Kutjevo auf altem Holz",
  },
  "Boca Graševine Majstorović sa zlatnim logom na crnoj etiketi": {
    en: "Majstorović Graševina bottle with a gold logo on a black label",
    de: "Majstorović-Graševina-Flasche mit goldenem Logo auf schwarzem Etikett",
  },
  "Boca Graševine Majstorović s pleternim ukrasom na etiketi i grlu": {
    en: "Majstorović Graševina bottle with an interlace ornament on the label and neck",
    de: "Majstorović-Graševina-Flasche mit Flechtornament auf Etikett und Flaschenhals",
  },
  "Božićni cjenik Caffe bara Vanilla s ilustracijama krumpirića": {
    en: "Caffe Bar Vanilla Christmas menu with potato illustrations",
    de: "Weihnachtliche Speisekarte des Caffe Bar Vanilla mit Kartoffel-Illustrationen",
  },
  "Logo Sax-Win utisnut u zlatu na crnoj podlozi": {
    en: "Sax-Win logo stamped in gold on a black background",
    de: "Sax-Win-Logo in Goldprägung auf schwarzem Untergrund",
  },
  "Logo Adria Motors na zidu izložbenog salona s modelima automobila": {
    en: "Adria Motors logo on the wall of a showroom with car models",
    de: "Adria-Motors-Logo an der Wand eines Ausstellungsraums mit Automodellen",
  },
  // Stranica: dizajn etiketa
  "Boca vina Soldo s etiketom u krupnom planu": {
    en: "Close-up of a Soldo wine bottle with its label",
    de: "Nahaufnahme einer Soldo-Weinflasche mit Etikett",
  },
  "Boca ružičastog vina Soldo Rosé s etiketom": {
    en: "Soldo Rosé pink wine bottle with its label",
    de: "Soldo-Rosé-Flasche mit Etikett",
  },
  "Boca vina Soldo Graševina i čaša vina": {
    en: "Soldo Graševina wine bottle and a glass of wine",
    de: "Soldo-Graševina-Flasche und ein Glas Wein",
  },
  // Stranica: izrada web stranica
  "Naslovnica web stranice CreoLab s glavnim pozivom na akciju": {
    en: "CreoLab website homepage with the main call to action",
    de: "Startseite der CreoLab-Website mit dem zentralen Handlungsaufruf",
  },
  "Portfolio stranica web stranice CreoLab s pregledom projekata": {
    en: "Portfolio page of the CreoLab website with a project overview",
    de: "Portfolio-Seite der CreoLab-Website mit Projektübersicht",
  },
  "Kontakt stranica web stranice CreoLab s podacima za kontakt": {
    en: "Contact page of the CreoLab website with contact details",
    de: "Kontaktseite der CreoLab-Website mit Kontaktdaten",
  },
  "Naslovnica web stranice vinarije Soldo s fotografijom vinograda": {
    en: "Soldo winery website homepage with a vineyard photograph",
    de: "Startseite der Website des Weinguts Soldo mit Weinbergfoto",
  },
  "Odjeljak Zašto Soldo web stranice vinarije s fotografijama vinograda": {
    en: "\"Why Soldo\" section of the winery website with vineyard photographs",
    de: "Abschnitt „Warum Soldo“ der Weingut-Website mit Weinbergfotos",
  },
  "Stranica O nama web stranice vinarije Soldo s pričom o vinariji": {
    en: "About page of the Soldo winery website telling the winery's story",
    de: "Über-uns-Seite der Soldo-Website mit der Geschichte des Weinguts",
  },
  "Stranica ponude vina web stranice vinarije Soldo": {
    en: "Wine range page of the Soldo winery website",
    de: "Weinsortiment-Seite der Website des Weinguts Soldo",
  },
  "Kontakt stranica web stranice vinarije Soldo s kartom i radnim vremenom": {
    en: "Contact page of the Soldo winery website with a map and opening hours",
    de: "Kontaktseite der Soldo-Website mit Karte und Öffnungszeiten",
  },
  "Anketa Taste the Journey za ocjenjivanje gastronomskog doživljaja": {
    en: "Taste the Journey survey for rating the gastronomic experience",
    de: "Taste-the-Journey-Umfrage zur Bewertung des gastronomischen Erlebnisses",
  },
};


export function altFor(hr: string, locale: Locale): string {
  if (locale === "hr") return hr;
  return ALT[hr]?.[locale] || hr;
}
