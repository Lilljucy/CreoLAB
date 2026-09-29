import type { Locale } from "./i18n";

type ProjectStory =
  | { challenge: string; approach: string; result: string }
  | { summary: string };

export type Project = {
  slug: string;
  name: string;
  category: Record<Locale, string>;
  img: string;
  imgFit?: "cover" | "contain";
  gallery: string[];
  galleryAlt: string[];
  galleryFocus?: Record<number, string>;
  galleryFit?: Record<number, "cover" | "contain">;
  story?: Partial<Record<Locale, ProjectStory>>;
};

const NAMES: Record<string, { en: string; de: string }> = {
  "bilokapic-destilerija": { en: "Bilokapić Distillery", de: "Bilokapić Destillerie" },
  "vinarija-knezevic": { en: "Knežević Winery", de: "Weingut Knežević" },
  "ember-kamin": { en: "Ember Fireplaces", de: "Ember Kamine" },
  "soldo-vinarija": { en: "Soldo Winery", de: "Weingut Soldo" },
  "omega-knjigovodstvo": { en: "Omega Bookkeeping", de: "Omega Buchhaltung" },
  "previsic-vinarija": { en: "Previšić Winery", de: "Weingut Previšić" },
  "mitrovic-vinarija": { en: "Mitrović Winery", de: "Weingut Mitrović" },
  "udruga-igrac": { en: "Igrač Association", de: "Verein Igrač" },
  "majstorovic-vinarija": { en: "Majstorović Winery", de: "Weingut Majstorović" },
};

export function nameFor(project: Project, locale: Locale): string {
  return locale === "hr" ? project.name : NAMES[project.slug]?.[locale] ?? project.name;
}

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
    story: {
      hr: {
        challenge:
          "Platinum Grupa je tvrtka za računovodstvo i poslovno savjetovanje koja je dugo poslovala bez jedinstvenog vizualnog nastupa. Ponude, računi i dopisi slali su se na različitim predlošcima, bez zajedničkog loga, boja ili tipografije, što je otežavalo prepoznatljivost tvrtke i ostavljalo dojam neusklađenosti pred klijentima koji od knjigovodstvene struke prije svega očekuju red i preciznost. Trebalo je osmisliti identitet koji tu preciznost komunicira već na prvi pogled, prije nego što klijent uopće pročita sadržaj dokumenta.",
        approach:
          "Krenuli smo od snažne simbolike: u središtu vizualnog identiteta nalazi se geometrijski oblik dijamanta kao asocijacija na izvrsnost i trajnost, dok u njega utkana strelica za rast jasno naglašava napredak i financijski uzlet. Za paletu boja odabrali smo primarnu Oxford Blue (povjerenje), sekundarnu Platinum Grey (prestiž) i tercijarnu Bone White — kombinaciju koja u financijskom sektoru tradicionalno komunicira pouzdanost i ozbiljnost. Vizualni identitet upotpunjen je prepoznatljivom Montserrat tipografijom, a sve je dosljedno provedeno kroz cijelu poslovnu galanteriju: memorandum s jasno strukturiranim zaglavljem i podnožjem, kuvertu s utisnutim monogramom te vizitke zaposlenika, tako da svaki dokument odiše profesionalnošću i jasnom vizualnom pričom.",
        result:
          "Platinum Grupa danas ima dosljedan identitet koji prati svaki dokument, od prve ponude do potpisanog ugovora, i koji zaposlenicima omogućuje da bez razmišljanja koriste ispravan predložak za svaku situaciju. Klijenti pri prvom kontaktu vide urednu, jedinstvenu vizualnu priču umjesto proizvoljno sastavljenih dopisa, što izravno potkrepljuje poruku da je riječ o partneru kojem se financije mogu povjeriti bez brige. Ujednačen izgled dokumentacije olakšava i internu organizaciju, jer svaki novi zaposlenik odmah zna kojim se predloškom koristiti za koju vrstu dopisa, umjesto da svaki put iznova smišlja format.",
      },
      en: {
        challenge:
          "Platinum Grupa is an accounting and business consulting firm that had long operated without a unified visual presence. Quotes, invoices and letters went out on different templates, with no shared logo, colours or typography, making the company hard to recognise and leaving an impression of inconsistency with clients who, from an accounting firm above all, expect order and precision. We needed to design an identity that communicates that precision at first glance, before the client even read the document.",
        approach:
          "We started with strong symbolism: at the centre of the visual identity is a geometric diamond shape, evoking excellence and permanence, with an arrow for growth woven into it to clearly emphasise progress and financial upswing. For the colour palette we chose Oxford Blue as the primary (trust), Platinum Grey as the secondary (prestige) and Bone White as the tertiary — a combination that traditionally communicates reliability and seriousness in the financial sector. The identity is completed by the distinctive Montserrat typeface, and everything was applied consistently across the business stationery: a letterhead with a clearly structured header and footer, an envelope with an embossed monogram, and employee business cards, so every document exudes professionalism and a clear visual story.",
        result:
          "Platinum Grupa now has a consistent identity that follows every document, from the first quote to the signed contract, letting employees use the right template for every situation without thinking twice. Clients see a tidy, unified visual story on first contact instead of ad hoc correspondence, directly reinforcing the message that it's a partner you can trust with your finances without worry. The consistent look of the documentation also makes internal organisation easier, since every new employee immediately knows which template to use for which type of letter, instead of improvising a format each time.",
      },
      de: {
        challenge:
          "Platinum Grupa ist ein Unternehmen für Buchhaltung und Unternehmensberatung, das lange ohne einheitlichen visuellen Auftritt arbeitete. Angebote, Rechnungen und Schreiben wurden auf unterschiedlichen Vorlagen versandt, ohne gemeinsames Logo, gemeinsame Farben oder Typografie. Das erschwerte den Wiedererkennungswert und hinterließ bei Kunden, die von einer Buchhaltungsfirma vor allem Ordnung und Präzision erwarten, einen uneinheitlichen Eindruck. Es galt, eine Identität zu entwickeln, die diese Präzision schon auf den ersten Blick vermittelt, noch bevor der Kunde den Inhalt des Dokuments liest.",
        approach:
          "Wir sind von einer starken Symbolik ausgegangen: Im Zentrum der visuellen Identität steht eine geometrische Diamantform als Sinnbild für Exzellenz und Beständigkeit, in die ein Wachstumspfeil eingewoben ist, der Fortschritt und finanziellen Aufschwung klar betont. Als Farbpalette wählten wir Oxford Blue als Primärfarbe (Vertrauen), Platinum Grey als Sekundärfarbe (Prestige) und Bone White als Tertiärfarbe – eine Kombination, die im Finanzsektor traditionell Verlässlichkeit und Seriosität ausstrahlt. Abgerundet wird die Identität durch die markante Montserrat-Typografie. Alles wurde konsequent auf die gesamte Geschäftsausstattung angewendet: Briefbogen mit klar strukturiertem Kopf- und Fußbereich, Umschlag mit geprägtem Monogramm sowie Visitenkarten der Mitarbeitenden, sodass jedes Dokument Professionalität und eine klare visuelle Geschichte ausstrahlt.",
        result:
          "Platinum Grupa hat heute eine konsistente Identität, die jedes Dokument begleitet, vom ersten Angebot bis zum unterzeichneten Vertrag, und die es den Mitarbeitenden ermöglicht, für jede Situation ohne Nachdenken die richtige Vorlage zu verwenden. Kunden sehen beim ersten Kontakt eine ordentliche, einheitliche visuelle Geschichte statt willkürlich zusammengestellter Schreiben, was die Botschaft unmittelbar untermauert, dass es sich um einen Partner handelt, dem man seine Finanzen unbesorgt anvertrauen kann. Das einheitliche Erscheinungsbild der Unterlagen erleichtert auch die interne Organisation, denn jede neue Mitarbeiterin und jeder neue Mitarbeiter weiß sofort, welche Vorlage für welche Art von Schreiben zu verwenden ist, statt jedes Mal ein Format neu zu erfinden.",
      },
    },
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
    story: {
      hr: {
        challenge:
          "Obiteljska destilerija Bilokapić proizvodi vrhunska žestoka pića po tradicionalnim recepturama, no na policama i u ugostiteljstvu žestokih pića morala se snažnije izdvojiti od sve brojnije konkurencije koja ulaže u vizualni identitet. Kupac odluku donosi u nekoliko sekundi pogleda, a dotadašnja ambalaža nije u potpunosti prenosila razinu zanatske pažnje i truda uloženu u sam sadržaj. Trebalo je premostiti taj jaz između visoke kvalitete pića i dojma koji ono ostavlja na polici, stvarajući ambalažu koja već na prvi pogled privlači poglede i odiše tradicijom.",
        approach:
          "Za temelj identiteta osmislili smo zlatni logotip s ilustracijom bačve za čuvanje rakije u stilu starinskog pečata, koji odmah komunicira obiteljsko podrijetlo i zanatski pristup. Taj se logotip zatim dosljedno prenosi na liniju proizvoda – od šljivovice i vinjaka do kajsije – pri čemu je svaka boca dobila vlastitu ilustraciju voća, ručno rađenu i usklađenu s etiketom. Vizualnu priču zaokružuju pomno birani detalji poput elegantnih čepova i traka, dok su oblik i boja stakla birani tako da svjetlo idealno naglašava boju i bistroću samog pića.",
        result:
          "Destilerija Bilokapić danas na tržištu nastupa s prepoznatljivom ambalažom koja djeluje kao proizvod višeg cjenovnog ranga. Kupac koji jednom zapamti zlatni pečat s bačvom lako ga prepoznaje i na sljedećoj boci – bilo da je riječ o šljivovici, vinjaku ili kajsiji – što destileriji olakšava predstavljanje budućih proizvoda pod istim vizualnim krovom. Ovakav cjeloviti vizualni identitet izravno potkrepljuje kvalitetu kapljice i sam po sebi postaje snažan argument na polici.",
      },
      en: {
        challenge:
          "The family distillery Bilokapić produces premium spirits using traditional recipes, but on shelves and in hospitality venues it needed to stand out more strongly from a growing field of competitors investing in visual identity. Buyers decide within seconds of a glance, and the existing packaging didn't fully convey the level of craft and effort put into the product itself. We needed to bridge the gap between the high quality of the drink and the impression it makes on the shelf, creating packaging that catches the eye at first glance and radiates tradition.",
        approach:
          "For the foundation of the identity we designed a gold logo with an illustration of a barrel for ageing brandy in the style of an old-fashioned stamp, immediately communicating family heritage and a crafted approach. The logo is then applied consistently across the product line – from plum brandy and grape brandy to apricot brandy – with each bottle given its own hand-drawn fruit illustration matched to the label. The visual story is rounded off by carefully chosen details such as elegant stoppers and ribbons, while the shape and colour of the glass were chosen so that light ideally highlights the colour and clarity of the drink itself.",
        result:
          "Bilokapić distillery now goes to market with recognisable packaging that reads as a higher price tier product. A buyer who remembers the gold stamp with the barrel easily recognises it on the next bottle too – whether it's plum brandy, grape brandy or apricot brandy – making it easy for the distillery to introduce future products under the same visual roof. This complete visual identity directly reinforces the quality of what's in the bottle and becomes a strong argument on the shelf in its own right.",
      },
      de: {
        challenge:
          "Die Familiendestillerie Bilokapić stellt hochwertige Spirituosen nach traditionellen Rezepturen her, musste sich aber im Regal und in der Gastronomie stärker von der wachsenden Konkurrenz abheben, die in ihre visuelle Identität investiert. Käufer entscheiden innerhalb weniger Sekunden, und die bisherige Verpackung vermittelte das handwerkliche Können und den Aufwand, die in das Produkt selbst fließen, nicht vollständig. Es galt, die Lücke zwischen der hohen Qualität des Getränks und dem Eindruck im Regal zu schließen und eine Verpackung zu schaffen, die auf den ersten Blick ins Auge fällt und Tradition ausstrahlt.",
        approach:
          "Als Fundament der Identität entwarfen wir ein goldenes Logo mit der Illustration eines Fasses zur Lagerung von Rakija im Stil eines altertümlichen Siegels, das sofort die Familientradition und die handwerkliche Herangehensweise vermittelt. Dieses Logo wird konsequent auf die gesamte Produktlinie übertragen – vom Zwetschgenbrand und Traubenbrand bis zum Marillenbrand –, wobei jede Flasche eine eigene, von Hand gezeichnete Fruchtillustration erhielt, die auf das Etikett abgestimmt ist. Die visuelle Geschichte runden sorgfältig gewählte Details wie elegante Verschlüsse und Bänder ab, während Form und Farbe des Glases so gewählt wurden, dass das Licht Farbe und Klarheit des Getränks ideal zur Geltung bringt.",
        result:
          "Die Destillerie Bilokapić tritt heute mit einer wiedererkennbaren Verpackung auf, die wie ein Produkt aus einer höheren Preisklasse wirkt. Wer sich das goldene Siegel mit dem Fass einmal gemerkt hat, erkennt es auch auf der nächsten Flasche wieder – ob Zwetschgenbrand, Traubenbrand oder Marillenbrand –, was der Destillerie die Einführung künftiger Produkte unter demselben visuellen Dach erleichtert. Diese ganzheitliche visuelle Identität untermauert unmittelbar die Qualität des Inhalts und wird im Regal selbst zu einem starken Argument.",
      },
    },
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
    story: {
      hr: {
        challenge:
          "Vinarija Knežević proizvodi vrhunska vina i trebala je etikete koje bi na polici odmah odavale karakter i kvalitetu, umjesto generičkog izgleda kakav je uobičajen kod manjih obiteljskih proizvođača. Izazov nije bio samo estetski – etiketa je za manju vinariju često jedini trenutak u kojem kupac uopće sazna nešto o brendu prije kupnje, pa je morala nositi i priču, a ne samo naziv i postotak alkohola. Dodatni zahtjev bio je da se dizajn lako razlikuje između sorti, a da pritom sve etikete i dalje djeluju kao dio iste, prepoznatljive obitelji proizvoda.",
        approach:
          "U središte vizualnog identiteta utkali smo neraskidivu vezu tradicije, obitelji i duboke ljubavi prema vinu. Logotip smo oblikovali kao rukom pisani potpis obiteljskog prezimena Knežević, čime smo unijeli osobnu, intimnu notu, dok posebnu dušu cijeloj priči daje jedinstveni detalj: note unutar siluete boce vizualni su prikaz prvih taktova pjesme koju je otpjevao stric vlasnika, Franjo Knežević — čovjek po kojem je vlasnik i dobio ime. Svaka kap vina tako nosi dio obiteljske baštine. Kako bi se ta priča dosljedno prenijela na ambalažu, svaka sorta dobila je vlastitu boju trake na etiketi, dok je crna podloga ostala zajednička konstanta koja cijeloj liniji daje dojam vrhunske elegancije i profinjenosti.",
        result:
          "Nastao je sustav etiketa koji je odmah prepoznatljiv na polici, a lako se proširuje na nove sorte jednostavnom promjenom boje trake uz zadržavanje istog rukopisnog potpisa i emotivnog notnog motiva. Rukom pisan logotip i priča o pjesmi vinariji daju toplu, unikatnu crtu koja se duboko urezuje u pamćenje kupaca, čime se Knežević snažno izdvaja među konkurentskim etiketama sličnog cjenovnog ranga. Gost u restoranu ili kupac u trgovini prepoznaje vinariju po istom prepoznatljivom potpisu i priči bez obzira na odabranu sortu, što gradi izniman kontinuitet i vezanost uz brend kroz cijeli asortiman.",
      },
      en: {
        challenge:
          "Knežević Winery produces premium wines and needed labels that would instantly convey character and quality on the shelf, instead of the generic look typical of smaller family producers. The challenge wasn't only aesthetic – for a small winery, the label is often the only moment a buyer learns anything about the brand before purchase, so it had to carry a story, not just a name and alcohol percentage. It also had to clearly differentiate between varieties while all labels still read as part of the same, recognisable product family.",
        approach:
          "At the heart of the visual identity we wove an unbreakable bond between tradition, family and a deep love of wine. We shaped the logotype as a handwritten signature of the family surname Knežević, bringing in a personal, intimate note, while a unique detail gives the whole story its soul: the notes inside the bottle silhouette are a visual depiction of the opening bars of a song sung by the owner's uncle, Franjo Knežević — the man the owner was named after. Every drop of wine thus carries a piece of the family heritage. To carry that story consistently onto the packaging, each variety got its own ribbon colour on the label, while the black background remained the shared constant giving the whole line a sense of superior elegance and refinement.",
        result:
          "The result is a label system that's instantly recognisable on the shelf and easily extends to new varieties simply by changing the ribbon colour while keeping the same handwritten signature and emotional musical motif. The handwritten logotype and the story of the song give the winery a warm, unique touch that sticks deeply in buyers' memory, setting Knežević strongly apart from competing labels in a similar price bracket. A guest in a restaurant or a shopper in a store recognises the winery by the same distinctive signature and story regardless of the variety chosen, building exceptional continuity and loyalty to the brand across the whole range.",
      },
      de: {
        challenge:
          "Das Weingut Knežević produziert hochwertige Weine und brauchte Etiketten, die im Regal sofort Charakter und Qualität vermitteln, statt des generischen Aussehens, das bei kleineren Familienbetrieben üblich ist. Die Aufgabe war nicht nur ästhetischer Natur – für ein kleines Weingut ist das Etikett oft der einzige Moment, in dem der Käufer vor dem Kauf etwas über die Marke erfährt, weshalb es eine Geschichte tragen musste, nicht nur Namen und Alkoholgehalt. Zusätzlich sollte sich das Design leicht zwischen den Rebsorten unterscheiden lassen, während alle Etiketten dennoch als Teil derselben, wiedererkennbaren Produktfamilie wirken.",
        approach:
          "Im Zentrum der visuellen Identität haben wir die unzertrennliche Verbindung von Tradition, Familie und tiefer Liebe zum Wein verwoben. Das Logo haben wir als handgeschriebene Unterschrift des Familiennamens Knežević gestaltet und ihm so eine persönliche, intime Note verliehen, während ein einzigartiges Detail der ganzen Geschichte ihre Seele gibt: Die Noten in der Flaschensilhouette sind die visuelle Darstellung der ersten Takte eines Liedes, das der Onkel des Inhabers, Franjo Knežević, gesungen hat – der Mann, nach dem der Inhaber benannt wurde. So trägt jeder Tropfen Wein ein Stück Familienerbe in sich. Damit sich diese Geschichte konsequent auf die Verpackung überträgt, erhielt jede Sorte eine eigene Bandfarbe auf dem Etikett, während der schwarze Untergrund als gemeinsame Konstante der gesamten Linie den Eindruck von höchster Eleganz und Raffinesse verleiht.",
        result:
          "Entstanden ist ein Etikettensystem, das im Regal sofort wiedererkennbar ist und sich durch einfaches Ändern der Bandfarbe leicht auf neue Sorten erweitern lässt, während dieselbe handgeschriebene Signatur und das emotionale Notenmotiv erhalten bleiben. Das handgeschriebene Logo und die Geschichte des Liedes verleihen dem Weingut eine warme, einzigartige Note, die sich tief in das Gedächtnis der Käufer einprägt und Knežević deutlich von konkurrierenden Etiketten in ähnlicher Preisklasse abhebt. Ein Gast im Restaurant oder ein Käufer im Geschäft erkennt das Weingut unabhängig von der gewählten Sorte an derselben unverwechselbaren Signatur und Geschichte, was außergewöhnliche Kontinuität und Markenbindung über das gesamte Sortiment hinweg schafft.",
      },
    },
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
    story: {
      hr: {
        challenge:
          "Ember Premium je linija kamina na drva pozicionirana u premium segmentu tržišta, gdje kupac ne traži samo grijanje nego i estetiku koja upotpunjuje uređenje doma. Dotadašnji promotivni materijali za tu vrstu proizvoda uobičajeno djeluju tehnički i prodajno — puno specifikacija, malo atmosfere — što ne odgovara kupcu koji kamin bira kao dizajnerski, a ne samo funkcionalni element interijera. Trebalo je pronaći ravnotežu između informativnosti i atmosfere kakvu inače nude modni ili interijerski katalozi.",
        approach:
          "Katalog smo osmislili kao tihi, atmosferski dokument prije nego klasičnu prodajnu brošuru: tamna, topla paleta boja, velike fotografije kamina upaljenih u stvarnom ambijentu dnevnog boravka i zlatna, suzdržana tipografija naziva „Ember” na naslovnici. Namjerno smo ostavili puno praznog prostora oko fotografija kako bi svaka slika imala prostora disati, umjesto da se stranice pretrpaju tekstom i cijenama. Struktura kataloga vodi kupca od dojma i atmosfere prema tehničkim detaljima tek u drugom planu, obrnuto od uobičajenog pristupa. Naslovnu fotografiju birali smo tako da kamin bude izvor jedinog toplog svjetla u kadru, čime prostor odmah djeluje ugodno i stvarno, a ne kao sterilan proizvodni prikaz.",
        result:
          "Nastao je katalog koji djeluje kao reprezentativni, gotovo lifestyle dokument, prikladan za predstavljanje linije proizvoda partnerima i kupcima koji kamin biraju kao investiciju u ambijent doma. Time se Ember Premium na tržištu odmah pozicionira jednako uz bok premium namještaju i dizajnerskim brendovima, umjesto da se natječe isključivo tehničkim specifikacijama. Isti vizualni jezik — tamna paleta, zlatni akcenti, velike atmosferske fotografije — može se prenijeti i na buduće materijale poput web stranice ili izložbenog štanda, tako da dojam ostane dosljedan na svakoj dodirnoj točki s kupcem.",
      },
      en: {
        challenge:
          "Ember Premium is a line of wood-burning fireplaces positioned in the premium market segment, where buyers look for more than heat — they want aesthetics that complete a home's interior. Promotional materials for this type of product typically feel technical and sales-driven — lots of specifications, little atmosphere — which doesn't suit a buyer choosing a fireplace as a design piece rather than a purely functional element. We needed to find the balance between information and atmosphere that fashion or interior catalogues usually offer.",
        approach:
          "We designed the catalogue as a quiet, atmospheric document rather than a classic sales brochure: a dark, warm colour palette, large photographs of fireplaces lit in a real living-room setting, and restrained gold typography for the name 'Ember' on the cover. We deliberately left generous white space around the photographs so each image had room to breathe, instead of crowding the pages with text and prices. The catalogue's structure leads the buyer from mood and atmosphere toward technical detail only in the background, the reverse of the usual approach. We chose the cover photo so the fireplace is the only source of warm light in the frame, making the space feel instantly cosy and real rather than a sterile product shot.",
        result:
          "The result is a catalogue that reads as a representative, almost lifestyle document, suitable for presenting the product line to partners and buyers who see a fireplace as an investment in their home's atmosphere. This immediately positions Ember Premium alongside premium furniture and design brands, rather than competing purely on technical specifications. The same visual language — dark palette, gold accents, large atmospheric photography — can carry over to future materials such as a website or exhibition stand, so the impression stays consistent at every touchpoint with the buyer.",
      },
      de: {
        challenge:
          "Ember Premium ist eine Linie holzbefeuerter Kamine im Premiumsegment, in dem Käufer mehr als nur Wärme suchen – sie wollen eine Ästhetik, die die Einrichtung eines Hauses vervollständigt. Werbematerialien für diese Art von Produkt wirken üblicherweise technisch und verkaufsorientiert – viele Spezifikationen, wenig Atmosphäre –, was nicht zu einem Käufer passt, der einen Kamin als Designobjekt und nicht als rein funktionales Element wählt. Es galt, die Balance zwischen Information und Atmosphäre zu finden, wie sie Mode- oder Interieurkataloge üblicherweise bieten.",
        approach:
          "Den Katalog gestalteten wir als ruhiges, atmosphärisches Dokument statt als klassische Verkaufsbroschüre: eine dunkle, warme Farbpalette, großformatige Fotografien von brennenden Kaminen in einem echten Wohnzimmer und eine zurückhaltende goldene Typografie für den Namen „Ember“ auf dem Titelblatt. Rund um die Fotografien ließen wir bewusst großzügig Weißraum, damit jedes Bild Raum zum Atmen hat, statt die Seiten mit Text und Preisen zu überladen. Die Struktur des Katalogs führt den Käufer von Stimmung und Atmosphäre erst im Hintergrund zu technischen Details, also umgekehrt zum üblichen Vorgehen. Das Titelfoto wählten wir so, dass der Kamin die einzige warme Lichtquelle im Bild ist, wodurch der Raum sofort gemütlich und echt wirkt statt wie eine sterile Produktaufnahme.",
        result:
          "Entstanden ist ein Katalog, der als repräsentatives, fast schon Lifestyle-Dokument wirkt und sich eignet, die Produktlinie Partnern und Käufern vorzustellen, die einen Kamin als Investition in die Atmosphäre ihres Hauses sehen. Damit wird Ember Premium sofort neben Premium-Möbel- und Designmarken positioniert, statt allein über technische Spezifikationen zu konkurrieren. Dieselbe visuelle Sprache – dunkle Palette, goldene Akzente, großformatige atmosphärische Fotografie – lässt sich auf künftige Materialien wie eine Website oder einen Messestand übertragen, sodass der Eindruck an jedem Berührungspunkt mit dem Käufer konsistent bleibt.",
      },
    },
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
    story: {
      hr: {
        challenge:
          "Vis Motus je studio za individualni trening, premium grupne treninge i sportsku masažu, čiji su osnivači dali povjerenje našem timu da od nule pokrenemo cijelu priču i izgradimo prepoznatljiv vizualni identitet. Budući da studio prije ove suradnje nije postojao, trebalo je postaviti sve temelje – od imena i brenda do vizualnih materijala koji odražavaju visoku razinu usluge u privatnom, ekskluzivnom okruženju, stvarajući identitet koji jednako dobro funkcionira na majici trenera i na vizitki uručenoj novom klijentu.",
        approach:
          "Osmislili smo dinamičan monogram kao kombinaciju dvaju početnih slova koja vizualno komuniciraju osobni napredak i pokret. Za boju smo odabrali ljubičastu — rijetko korištenu u fitness industriji dominiranoj crvenom i crnom — čime se Vis Motus odmah vizualno izdvaja od uobičajenih teretana i studija. Identitet smo primijenili na sportsku majicu s diskretnim logom na prsima, te na vizitke s QR kodom koji vodi izravno na WhatsApp za brzu rezervaciju termina, spajajući tako fizički i digitalni dodir s brendom. Tipografiju naziva birali smo kao podebljanu i čvrstu, u skladu s ozbiljnošću individualnog pristupa koji studio nudi svakom klijentu.",
        result:
          "Vis Motus je od prvog dana na tržište izašao s jasnim identitetom i klijentima ostavlja dojam ozbiljnog, premium studija već pri prvom susretu — bilo da je riječ o majici koju nosi trener ili vizitki uručenoj na kraju treninga. Jasan poziv na akciju putem QR koda dodatno skraćuje put od upoznavanja s brendom do zakazanog termina, što studiju olakšava pretvaranje prvog dojma u novog klijenta. Prepoznatljiva ljubičasta boja i dinamični monogram sada prate studio na svakom kanalu komunikacije, od majica trenera u dvorani do profila na društvenim mrežama, gradeći dosljednu sliku brenda od samog početka.",
      },
      en: {
        challenge:
          "Vis Motus is a studio for personal training, premium group sessions and sports massage, whose founders entrusted our team to launch the whole story from scratch and build a recognisable visual identity. Since the studio didn't exist before this collaboration, all the foundations had to be laid – from the name and brand to visual materials reflecting the high level of service in a private, exclusive setting – creating an identity that works equally well on a trainer's t-shirt and on a business card handed to a new client.",
        approach:
          "We designed a dynamic monogram as a combination of the two initial letters, visually communicating personal progress and movement. For the colour we chose purple — rarely used in a fitness industry dominated by red and black — immediately setting Vis Motus apart from typical gyms and studios. We applied the identity to a sports t-shirt with a discreet logo on the chest, and to business cards with a QR code leading straight to WhatsApp for quick booking, connecting the physical and digital touchpoints with the brand. We chose bold, solid typography for the name, matching the seriousness of the individual approach the studio offers every client.",
        result:
          "Vis Motus entered the market from day one with a clear identity and leaves clients with the impression of a serious, premium studio from the very first encounter — whether that's the t-shirt worn by a trainer or the business card handed over at the end of a session. A clear call to action via the QR code further shortens the path from discovering the brand to booking a session, making it easier for the studio to turn a first impression into a new client. The recognisable purple colour and dynamic monogram now follow the studio across every communication channel, from trainers' t-shirts in the gym to social media profiles, building a consistent brand image from the very beginning.",
      },
      de: {
        challenge:
          "Vis Motus ist ein Studio für Einzeltraining, Premium-Gruppentraining und Sportmassage, dessen Gründer unserem Team das Vertrauen schenkten, die gesamte Geschichte von Grund auf zu entwickeln und eine wiedererkennbare visuelle Identität aufzubauen. Da das Studio vor dieser Zusammenarbeit nicht existierte, mussten alle Grundlagen gelegt werden – vom Namen und der Marke bis zu visuellen Materialien, die das hohe Serviceniveau in privatem, exklusivem Umfeld widerspiegeln –, und zwar als Identität, die auf dem T-Shirt eines Trainers genauso gut funktioniert wie auf der Visitenkarte, die einem neuen Kunden überreicht wird.",
        approach:
          "Wir entwarfen ein dynamisches Monogramm als Kombination der beiden Anfangsbuchstaben, das persönlichen Fortschritt und Bewegung visuell vermittelt. Als Farbe wählten wir Violett – in der von Rot und Schwarz dominierten Fitnessbranche selten verwendet –, wodurch sich Vis Motus sofort von üblichen Fitnessstudios abhebt. Die Identität wendeten wir auf ein Sport-T-Shirt mit dezentem Logo auf der Brust sowie auf Visitenkarten mit QR-Code an, der direkt zu WhatsApp für eine schnelle Terminbuchung führt und so den physischen und den digitalen Kontakt mit der Marke verbindet. Die Typografie des Namens wählten wir fett und kräftig, passend zur Ernsthaftigkeit des individuellen Ansatzes, den das Studio jedem Kunden bietet.",
        result:
          "Vis Motus trat vom ersten Tag an mit einer klaren Identität auf den Markt und hinterlässt bei Kunden schon beim ersten Kontakt den Eindruck eines seriösen Premium-Studios – ob auf dem T-Shirt eines Trainers oder auf der Visitenkarte, die am Ende des Trainings überreicht wird. Der klare Handlungsaufruf per QR-Code verkürzt den Weg vom Kennenlernen der Marke bis zum gebuchten Termin zusätzlich und erleichtert es dem Studio, den ersten Eindruck in einen neuen Kunden zu verwandeln. Die wiedererkennbare violette Farbe und das dynamische Monogramm begleiten das Studio nun auf jedem Kommunikationskanal, vom Trainer-T-Shirt im Studio bis zu den Social-Media-Profilen, und bauen von Anfang an ein konsistentes Markenbild auf.",
      },
    },
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
    ],
    galleryAlt: [
      "Logo vinarije Soldo utisnut zlatotiskom na tamnom papiru",
      "Logo vinarije Soldo na pozadini vinograda u zalasku sunca",
      "Boca vina Soldo Graševina osvijetljena toplim svjetlom",
      "Boca vina Soldo Graševina na bijeloj pozadini",
    ],
    galleryFocus: { 1: "right" },
    story: {
      hr: {
        challenge:
          "Vinarija Soldo trebala je modernizaciju i redizajn već postojećeg loga i etiketa za svojih 13 sorti vina, s ciljem stvaranja jedinstvenog identiteta koji bi povezao tako širok asortiman, a istovremeno djelovao svježije i modernije od tradicionalnih, često pretrpanih vinarijskih etiketa punih ornamenata i sitnog teksta. Cilj je bio da etiketa bude prepoznatljiva i na udaljenosti od police, ne tek izbliza. Trebalo je osigurati i da se osvježeni identitet lako primjenjuje na sve sorte, pri čemu svaka boca zadržava svoj prepoznatljiv karakter.",
        approach:
          "Za srce identiteta osmislili smo pamtljiv redizajnirani logotip u obliku slova \"S\" iz kojeg se stvara efekt pune čaše i kapljice vina. Ključni element dizajna je pametno izvedena praznina (prorez) na etiketi u obliku logotipa, kroz koju se vidi vino unutar same boce – na taj način boja samog vina ispunjava logotip, dajući mu jedinstven i živ vizualni izgled za svaku od 13 sorti. Etikete smo namjerno sveli na nužne informacije kako bi čista kompozicija ostala upečatljiva čak i s nekoliko metara udaljenosti, dok tipografija imena „Soldo” donosi elegantan i nenametljiv potpis.",
        result:
          "Nastao je moderan i interaktivan identitet u kojem svaka boca od 13 različitih sorti priča svoju priču jer vino iz unutrašnjosti boce vizualno oživljava sam logotip kroz prorez na etiketi. To vinariji omogućuje snažnu prepoznatljivost na polici i lako širenje asortimana bez narušavanja vizualnog sustava. Isti se motiv proteže i na čaše za degustaciju, čime se zaokružuje jedinstven doživljaj kušanja vina Soldo.",
      },
      en: {
        challenge:
          "Soldo Winery needed a modernisation and redesign of its existing logo and labels for its 13 wine varieties, aiming to create a unified identity that would tie such a wide range together while feeling fresher and more modern than traditional, often cluttered winery labels full of ornament and small print. The goal was a label recognisable even from a distance on the shelf, not only up close. We also had to make sure the refreshed identity could be applied easily across all varieties, with each bottle keeping its own recognisable character.",
        approach:
          "At the heart of the identity we designed a memorable, redesigned logo in the shape of the letter \"S\" that creates the effect of a full glass and a drop of wine. The key design element is a cleverly executed cut-out on the label in the shape of the logo, through which the wine inside the bottle is visible – so the colour of the wine itself fills the logo, giving it a unique, living look for each of the 13 varieties. We deliberately pared the labels down to the essential information so the clean composition stays striking even from a few metres away, while the typography of the name 'Soldo' provides an elegant, understated signature.",
        result:
          "The result is a modern, interactive identity in which each bottle across the 13 varieties tells its own story, because the wine inside the bottle visually brings the logo itself to life through the cut-out on the label. This gives the winery strong shelf recognition and makes it easy to expand the range without disturbing the visual system. The same motif extends to the tasting glasses, rounding off a unified experience of tasting Soldo wine.",
      },
      de: {
        challenge:
          "Das Weingut Soldo brauchte eine Modernisierung und Neugestaltung seines bestehenden Logos und der Etiketten für seine 13 Weinsorten, mit dem Ziel, eine einheitliche Identität zu schaffen, die ein so breites Sortiment verbindet und dabei frischer und moderner wirkt als traditionelle, oft überladene Weinetiketten voller Ornamente und Kleingedrucktem. Das Etikett sollte auch aus der Entfernung im Regal erkennbar sein, nicht nur aus der Nähe. Außerdem musste sichergestellt werden, dass sich die aufgefrischte Identität leicht auf alle Sorten anwenden lässt und jede Flasche ihren eigenen, wiedererkennbaren Charakter behält.",
        approach:
          "Im Herzen der Identität steht ein einprägsames, neu gestaltetes Logo in Form des Buchstabens „S“, das den Effekt eines vollen Glases und eines Weintropfens erzeugt. Das zentrale Gestaltungselement ist eine geschickt ausgeführte Aussparung im Etikett in Form des Logos, durch die man den Wein in der Flasche sieht – so füllt die Farbe des Weins selbst das Logo und verleiht ihm für jede der 13 Sorten ein einzigartiges, lebendiges Aussehen. Die Etiketten haben wir bewusst auf die notwendigen Informationen reduziert, damit die klare Komposition auch aus einigen Metern Entfernung eindrucksvoll bleibt, während die Typografie des Namens „Soldo“ eine elegante, dezente Signatur liefert.",
        result:
          "Entstanden ist eine moderne, interaktive Identität, in der jede Flasche der 13 Sorten ihre eigene Geschichte erzählt, denn der Wein im Inneren der Flasche erweckt das Logo selbst durch die Aussparung im Etikett visuell zum Leben. Das verschafft dem Weingut eine starke Wiedererkennung im Regal und ermöglicht eine einfache Erweiterung des Sortiments, ohne das visuelle System zu stören. Dasselbe Motiv setzt sich auf den Verkostungsgläsern fort und rundet das einheitliche Erlebnis der Soldo-Weinverkostung ab.",
      },
    },
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
    story: {
      hr: {
        summary:
          "Za Triglav Osiguranje kreiramo cjelovito vizualno rješenje i prepoznatljivu komunikaciju koja privlači pažnju na prvu. Kroz blisku suradnju dizajniramo upečatljive plakate za poslovnice, kreativne i dinamične objave za društvene mreže te ciljane digitalne oglase koji uspješno komuniciraju ponudu osiguranja. Spajanjem privlačnih vizuala, jasnih poruka i modernih rješenja poput QR kodova, osiguravamo da svaki oglas i objava grade snažan imidž brenda, olakšavaju komunikaciju s klijentima i vode do brze akcije.",
      },
      en: {
        summary:
          "For Triglav Osiguranje we create a complete visual solution and recognisable communication that grabs attention at first glance. Through close collaboration we design striking posters for branches, creative and dynamic social media posts, and targeted digital ads that successfully communicate the insurance offer. By combining appealing visuals, clear messages and modern solutions such as QR codes, we make sure every ad and post builds a strong brand image, eases communication with clients and leads to quick action.",
      },
      de: {
        summary:
          "Für Triglav Osiguranje entwickeln wir eine ganzheitliche visuelle Lösung und eine wiedererkennbare Kommunikation, die auf den ersten Blick Aufmerksamkeit erregt. In enger Zusammenarbeit gestalten wir auffällige Plakate für die Filialen, kreative und dynamische Social-Media-Beiträge sowie gezielte digitale Anzeigen, die das Versicherungsangebot erfolgreich kommunizieren. Durch die Verbindung ansprechender Visuals, klarer Botschaften und moderner Lösungen wie QR-Codes stellen wir sicher, dass jede Anzeige und jeder Beitrag ein starkes Markenimage aufbaut, die Kommunikation mit den Kunden erleichtert und zu schnellem Handeln führt.",
      },
    },
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
    story: {
      hr: {
        summary:
          "Za Color Trgovinu redovito, svakog mjeseca, kreiramo i dizajniramo promotivne kataloge koji prate sezonske akcije, ponudu alata, grijanja i blagdanske asortimane. Kroz fleksibilan i prepoznatljiv vizualni sustav osiguravamo brzu i učinkovitu pripremu svakog novog izdanja. Spajanjem jasnih cijena, upečatljivih oznaka i uredne strukture, katalozi postaju snažan prodajni alat koji kupci lako prepoznaju i prate, gradeći dosljedan imidž brenda iz mjeseca u mjesec.",
      },
      en: {
        summary:
          "Every month, we create and design promotional catalogues for Color Trgovina that follow seasonal sales, the range of tools, heating and holiday assortments. Through a flexible and recognisable visual system we ensure quick and efficient preparation of every new edition. By combining clear prices, striking labels and a tidy structure, the catalogues become a powerful sales tool that customers easily recognise and follow, building a consistent brand image month after month.",
      },
      de: {
        summary:
          "Für Color Trgovina gestalten wir jeden Monat regelmäßig Werbekataloge, die saisonale Aktionen, das Werkzeugsortiment, Heizungsprodukte und Weihnachtssortimente begleiten. Durch ein flexibles und wiedererkennbares visuelles System sorgen wir für eine schnelle und effiziente Vorbereitung jeder neuen Ausgabe. Durch die Verbindung klarer Preise, auffälliger Kennzeichnungen und einer übersichtlichen Struktur werden die Kataloge zu einem starken Verkaufsinstrument, das Kunden leicht erkennen und verfolgen, und bauen so Monat für Monat ein konsistentes Markenimage auf.",
      },
    },
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
    story: {
      hr: {
        challenge:
          "Omega Consulting, knjigovodstveni obrt iz Delnica, trebao je profesionalan vizualni identitet koji bi klijentima od prvog kontakta signalizirao preciznost i pouzdanost struke. Dotad je poslovanje teklo bez jedinstvenog branda — dopisi, ponude i vizitke nisu dijelili zajednički vizualni jezik, što je za obrt koji se bavi tuđim financijama moglo ostaviti dojam nedostatka reda tamo gdje je red najvažniji. Trebalo je osmisliti simbol koji odmah, bez riječi, komunicira preciznost i završenost posla.",
        approach:
          "Logotip smo oblikovali oko slova omega omotanog tankim prstenom u zlatnoj i tamnoplavoj boji — simbol završetka i cjelovitosti, prikladan za struku koja svake godine „zatvara” financije svojim klijentima. Zlatna boja unosi dojam vrijednosti i preciznosti, dok tamnoplava zadržava ozbiljnost i povjerenje očekivano od financijske struke. Identitet smo proveli kroz kompletnu poslovnu papirologiju — memorandum s jasnim zaglavljem, kuvertu s utisnutim monogramom u boji i vizitke zaposlenika — te dodali slogan „Vaša vizija. Naša stručnost. Besprijekoran rezultat.” koji sažima obećanje obrta u jednoj rečenici vidljivoj na svakom dokumentu. Prsten oko slova omega ponavlja se kao suptilan vodeni žig u pozadini memoranduma, dovoljno diskretan da ne smeta tekstu dopisa, ali dovoljno prisutan da dokument odmah prepoznajete kao autentičan.",
        result:
          "Omega Consulting danas svakom klijentu, od prve poslovne kuverte do potpisanog ugovora, šalje dosljednu, uređenu vizualnu poruku koja potkrepljuje samu bit usluge koju nudi. Zaposlenici imaju gotov sustav predložaka za svaku situaciju, a klijenti pri prvom susretu stječu dojam obrta koji svoje poslovanje vodi jednako pažljivo kao i njihovo. Vizualna dosljednost dokumenata dodatno olakšava i svakodnevnu komunikaciju s klijentima, koji odmah prepoznaju službeni dopis obrta među ostalom poštom, bez potrebe da provjeravaju pošiljatelja.",
      },
      en: {
        challenge:
          "Omega Consulting, a bookkeeping business from Delnice, needed a professional visual identity that would signal precision and reliability to clients from the very first contact. Until then the business operated without a unified brand — letters, quotes and business cards shared no common visual language, which for a firm handling other people's finances could leave an impression of disorder exactly where order matters most. We needed to design a symbol that communicates precision and closure without words.",
        approach:
          "We built the logo around the letter omega wrapped in a thin ring in gold and navy — a symbol of completion and wholeness, fitting for a profession that 'closes' its clients' finances every year. The gold brings a sense of value and precision, while the navy keeps the seriousness and trust expected of the financial profession. We carried the identity through the complete business stationery — a letterhead with a clear header, an envelope with an embossed colour monogram, and employee business cards — and added the tagline 'Your vision. Our expertise. A flawless result.', summarising the firm's promise in a single sentence visible on every document. The ring around the omega repeats as a subtle watermark in the background of the letterhead, discreet enough not to interfere with the letter's text, but present enough that the document is instantly recognisable as authentic.",
        result:
          "Omega Consulting now sends every client, from the first business envelope to the signed contract, a consistent, tidy visual message that reinforces the very essence of the service it offers. Employees have a ready-made set of templates for every situation, and clients get the impression, from their very first encounter, of a firm that runs its own business as carefully as it manages theirs. The visual consistency of the documents also makes everyday communication with clients easier, since they instantly recognise the firm's official correspondence among their other mail, without needing to check the sender.",
      },
      de: {
        challenge:
          "Omega Consulting, ein Buchhaltungsbetrieb aus Delnice, brauchte eine professionelle visuelle Identität, die den Kunden vom ersten Kontakt an Präzision und Verlässlichkeit signalisiert. Bis dahin arbeitete das Unternehmen ohne einheitliche Marke – Briefe, Angebote und Visitenkarten hatten keine gemeinsame visuelle Sprache, was bei einer Firma, die fremde Finanzen verwaltet, genau dort den Eindruck von Unordnung erwecken kann, wo Ordnung am wichtigsten ist. Es galt, ein Symbol zu entwerfen, das Präzision und Abschluss ohne Worte vermittelt.",
        approach:
          "Das Logo bauten wir um den Buchstaben Omega auf, umschlossen von einem dünnen Ring in Gold und Marineblau – ein Symbol für Vollendung und Ganzheit, passend zu einem Berufsstand, der die Finanzen seiner Kunden jedes Jahr „abschließt“. Das Gold bringt ein Gefühl von Wert und Präzision, während das Marineblau die Seriosität und das Vertrauen bewahrt, die vom Finanzberuf erwartet werden. Die Identität übertrugen wir auf die komplette Geschäftsausstattung – Briefbogen mit klarem Kopfbereich, Umschlag mit geprägtem farbigem Monogramm und Visitenkarten der Mitarbeitenden – und ergänzten den Slogan „Ihre Vision. Unsere Expertise. Ein makelloses Ergebnis.“, der das Versprechen der Firma in einem Satz auf jedem Dokument sichtbar zusammenfasst. Der Ring um das Omega wiederholt sich als dezentes Wasserzeichen im Hintergrund des Briefbogens, diskret genug, um den Brieftext nicht zu stören, aber präsent genug, damit das Dokument sofort als authentisch erkennbar ist.",
        result:
          "Omega Consulting sendet heute jedem Kunden, vom ersten Geschäftsumschlag bis zum unterzeichneten Vertrag, eine konsistente, ordentliche visuelle Botschaft, die das Wesen der angebotenen Dienstleistung selbst unterstreicht. Die Mitarbeitenden haben einen fertigen Satz an Vorlagen für jede Situation, und die Kunden gewinnen schon beim ersten Kontakt den Eindruck einer Firma, die ihr eigenes Geschäft so sorgfältig führt wie das ihrer Kunden. Die visuelle Einheitlichkeit der Dokumente erleichtert auch die alltägliche Kommunikation mit den Kunden, da sie die offizielle Korrespondenz der Firma sofort unter ihrer übrigen Post erkennen, ohne den Absender prüfen zu müssen.",
      },
    },
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
    story: {
      hr: {
        challenge:
          "OPG Previšić iz Kutjeva proizvodi vina pod imenom „vino s otoka” i trebao je etikete koje bi tu priču porijekla odmah prenijele kupcu na polici, umjesto uobičajene, generičke etikete kakvu koriste mnogi manji obiteljski proizvođači. Izazov je bio uskladiti dvije različite sorte – Merlot i Graševinu – pod istim prepoznatljivim vizualnim krovom, a istovremeno zadovoljiti sve zakonski propisane podatke (podrijetlo, alkohol, količinu) bez da etiketa djeluje pretrpano.",
        approach:
          "Kreirali smo zlatni pečatni logotip s inicijalom P upisanim u kićeni monogram i natpisom „Previšić – vino s otoka”, koji etiketi daje dojam profinjenosti i modernog pristupa vinarstvu. Kako bismo vizualno povezali liniju, na objema je etiketama u pozadini diskretno smješten list vinove loze, dok se sorte međusobno razlikuju kroz pomno birane tonove i detalje podloge koji ističu karakter vina. Sve zakonski obavezne podatke smjestili smo na stražnju etiketu u urednom, čitljivom rasporedu, tako da prednja strana ostaje posvećena isključivo priči i identitetu.",
        result:
          "Nastao je prepoznatljiv sustav etiketa koji jasno razlikuje sorte, a priča o „vinu s otoka” postala je vizualno utkana u sam dizajn umjesto da ostane tek rečenica na deklaraciji. Kupac koji uzme bocu Previšić vina u ruke odmah dobiva dojam pažljivo osmišljenog i autentičnog proizvoda mlade vinarije, što im pomaže da se izdvoje na polici prepunoj slično cjenovno pozicioniranih vina. Zlatni pečat ostaje čitljiv i prepoznatljiv čak i kad se etiketa umanji na fotografiji za internetsku prodaju ili društvene mreže, što je danas jednako važno kao i dojam na fizičkoj polici.",
      },
      en: {
        challenge:
          "OPG Previšić from Kutjevo produces wine under the name 'vino s otoka' (wine from the island) and needed labels that would immediately convey that origin story to buyers on the shelf, instead of the generic label many smaller family producers use. The challenge was aligning two different varieties – Merlot and Graševina – under the same recognisable visual roof, while still meeting all legally required information (origin, alcohol content, volume) without the label feeling cluttered.",
        approach:
          "We created a gold stamp-style logotype with the initial P set inside an ornate monogram and the inscription 'Previšić – vino s otoka', giving the label a sense of refinement and a modern approach to winemaking. To visually tie the line together, a vine leaf sits discreetly in the background of both labels, while the varieties are told apart through carefully chosen tones and background details that highlight each wine's character. All legally required information was placed on the back label in a tidy, legible layout, so the front stays devoted purely to story and identity.",
        result:
          "The result is a recognisable label system that clearly distinguishes the varieties, and the story of 'vino s otoka' has become visually woven into the design itself instead of remaining just a line on the declaration. A buyer who picks up a bottle of Previšić wine immediately gets the impression of a carefully considered, authentic product from a young winery, helping it stand out on a shelf full of similarly priced wines. The gold seal stays legible and recognisable even when the label is shrunk down in a photo for online sales or social media, which is now as important as the impression on the physical shelf.",
      },
      de: {
        challenge:
          "Der Betrieb OPG Previšić aus Kutjevo produziert Wein unter dem Namen „vino s otoka“ („Wein von der Insel“) und brauchte Etiketten, die diese Herkunftsgeschichte dem Käufer im Regal sofort vermitteln, statt der üblichen, generischen Etiketten, wie sie viele kleinere Familienbetriebe verwenden. Die Aufgabe bestand darin, zwei verschiedene Sorten – Merlot und Graševina – unter demselben wiedererkennbaren visuellen Dach zu vereinen und dabei alle gesetzlich vorgeschriebenen Angaben (Herkunft, Alkoholgehalt, Füllmenge) unterzubringen, ohne dass das Etikett überladen wirkt.",
        approach:
          "Wir schufen ein goldenes Siegel-Logo mit dem Initial P in einem verzierten Monogramm und der Inschrift „Previšić – vino s otoka“, das dem Etikett einen Eindruck von Raffinesse und einem modernen Ansatz im Weinbau verleiht. Um die Linie visuell zu verbinden, ist auf beiden Etiketten dezent ein Weinblatt im Hintergrund platziert, während sich die Sorten durch sorgfältig gewählte Töne und Details des Untergrunds unterscheiden, die den Charakter des jeweiligen Weins betonen. Alle gesetzlich vorgeschriebenen Angaben brachten wir in ordentlicher, gut lesbarer Anordnung auf dem Rückenetikett unter, sodass die Vorderseite ausschließlich der Geschichte und der Identität gewidmet bleibt.",
        result:
          "Entstanden ist ein wiedererkennbares Etikettensystem, das die Sorten klar unterscheidet, und die Geschichte vom „vino s otoka“ ist visuell in das Design selbst eingewoben, statt nur ein Satz auf der Deklaration zu bleiben. Wer eine Flasche Previšić-Wein in die Hand nimmt, erhält sofort den Eindruck eines sorgfältig durchdachten und authentischen Produkts eines jungen Weinguts, was hilft, sich in einem Regal voller ähnlich bepreister Weine abzuheben. Das goldene Siegel bleibt lesbar und wiedererkennbar, selbst wenn das Etikett auf einem Foto für den Online-Verkauf oder für soziale Medien verkleinert wird, was heute ebenso wichtig ist wie der Eindruck im physischen Regal.",
      },
    },
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
    story: {
      hr: {
        challenge:
          "Mitrović Vinarija već je imala postojeći logo, ali joj je trebala njegova modernizacija kako bi na prvi pogled uvjerljivije komunicirala vinogradarsku tradiciju i podrijetlo iz kutjevačkog kraja, uz izgradnju profesionalnog vizualnog identiteta za nastup prema kupcima, ugostiteljima i partnerima na sajmovima. Bez svježijeg i prilagođenijeg znaka, vizualni materijali nisu u potpunosti pratili ambicije vinarije. Trebalo je modernizirati znak i učiniti ga dovoljno postojanim da posluži kao čvrst temelj za sve buduće materijale.",
        approach:
          "Dizajnirali smo moderniziranu i elegantnu verziju logotipa u čijem je središtu slovo M koje izlazi iz vinogradima iscrtanih obronaka kutjevačkog vinogorja, uz dodatak kapljice koja simbolizira vino vrhunske kvalitete. Sve je izvedeno u toploj zlatnoj boji na tamnoj podlozi. Tipografiju naziva „Mitrović Vinarija” birali smo u klasičnom, serifnom stilu koji upotpunjuje osjećaj postojanosti, dok smo zlatnu boju zadržali kao jedini akcent kako bi logotip ostao čitljiv i u sitnijim primjenama poput čepa boce ili kutije za poklon. Kompoziciju smo namjerno centrirali i simetrično uravnotežili, tako da znak jednako dobro funkcionira otisnut na vizitki kao i na svim budućim promotivnim materijalima.",
        result:
          "Mitrović Vinarija sada raspolaže moderniziranim, reprezentativnim logotipom spremnim za primjenu na vizitkama, budućim etiketama i promotivnim materijalima, s jasnim vizualnim smjerom za sve daljnje materijale koje vinarija bude razvijala. Zlatno-crna kombinacija odmah signalizira premium pozicioniranje, dajući vinariji čvrst temelj za izgradnju prepoznatljivosti na sajmovima i u izravnoj prodaji. Kada vinarija bude proširivala asortiman na nove sorte, isti će vizualni jezik moći poslužiti kao osnova za etikete, tako da svaki novi proizvod ostane prepoznatljiv dio iste obiteljske priče. Vinarija tako više ne kreće od nule, već uspješno nadograđuje osvježeni temelj.",
      },
      en: {
        challenge:
          "Mitrović Winery already had an existing logo, but needed it modernised to communicate its winegrowing tradition and Kutjevo-region origin more convincingly at first glance, while building a professional visual identity for presenting to customers, hospitality partners and trade-fair contacts. Without a fresher, better-suited mark, the visual materials didn't fully keep pace with the winery's ambitions. The mark had to be modernised and made durable enough to serve as a solid foundation for all future materials.",
        approach:
          "We designed a modernised, elegant version of the logo with the letter M at its centre, rising out of the vineyard-lined slopes of the Kutjevo wine region, with an added drop symbolising top-quality wine. Everything is rendered in a warm gold on a dark background. We chose a classic serif style for the 'Mitrović Vinarija' typography to complete the sense of permanence, and kept gold as the only accent so the logo stays legible even in small applications such as a bottle stopper or a gift box. We deliberately centred the composition and balanced it symmetrically, so the mark works equally well printed on a business card and on all future promotional materials.",
        result:
          "Mitrović Winery now has a modernised, representative logo ready for use on business cards, future labels and promotional materials, with a clear visual direction for everything the winery develops next. The gold-and-black combination immediately signals premium positioning, giving the winery a solid foundation for building recognition at trade fairs and in direct sales. When the winery expands its range to new varieties, the same visual language can serve as the basis for labels, so every new product remains a recognisable part of the same family story. The winery thus no longer starts from zero, but successfully builds on a refreshed foundation.",
      },
      de: {
        challenge:
          "Das Weingut Mitrović hatte bereits ein Logo, brauchte aber dessen Modernisierung, um die Weinbautradition und die Herkunft aus der Region Kutjevo auf den ersten Blick überzeugender zu vermitteln, und dazu den Aufbau einer professionellen visuellen Identität für den Auftritt gegenüber Kunden, Gastronomen und Partnern auf Messen. Ohne ein frischeres, besser passendes Zeichen hielten die visuellen Materialien nicht ganz mit den Ambitionen des Weinguts Schritt. Das Zeichen musste modernisiert und so beständig gemacht werden, dass es als solides Fundament für alle künftigen Materialien dient.",
        approach:
          "Wir entwarfen eine modernisierte, elegante Version des Logos, in deren Zentrum der Buchstabe M steht, der aus den von Weinbergen gezeichneten Hängen des Weinbaugebiets von Kutjevo emporwächst, ergänzt durch einen Tropfen, der Wein von höchster Qualität symbolisiert. Alles ist in warmem Gold auf dunklem Untergrund ausgeführt. Die Typografie des Namens „Mitrović Vinarija“ wählten wir in einem klassischen Serifenstil, der das Gefühl von Beständigkeit vervollständigt, und behielten Gold als einzigen Akzent bei, damit das Logo auch bei kleineren Anwendungen wie einem Flaschenverschluss oder einer Geschenkbox lesbar bleibt. Die Komposition zentrierten wir bewusst und balancierten sie symmetrisch aus, sodass das Zeichen gedruckt auf einer Visitenkarte ebenso gut funktioniert wie auf allen künftigen Werbematerialien.",
        result:
          "Das Weingut Mitrović verfügt nun über ein modernisiertes, repräsentatives Logo, das für Visitenkarten, künftige Etiketten und Werbematerialien einsatzbereit ist, mit einer klaren visuellen Richtung für alle weiteren Materialien, die das Weingut entwickeln wird. Die Kombination aus Gold und Schwarz signalisiert sofort eine Premium-Positionierung und gibt dem Weingut ein solides Fundament für den Aufbau von Bekanntheit auf Messen und im Direktverkauf. Wenn das Weingut sein Sortiment um neue Sorten erweitert, kann dieselbe visuelle Sprache als Grundlage für die Etiketten dienen, sodass jedes neue Produkt ein wiedererkennbarer Teil derselben Familiengeschichte bleibt. Das Weingut beginnt damit nicht mehr bei null, sondern baut erfolgreich auf einem aufgefrischten Fundament auf.",
      },
    },
  },
  {
    slug: "caffe-bar-vanilla",
    name: "Caffe Bar Vanilla",
    category: { hr: "Dizajn cjenika", en: "Menu Design", de: "Speisekartendesign" },
    img: "/portfolio/caffe-bar-vanilla.jpg",
    imgFit: "contain",
    gallery: ["/portfolio-full/caffe-bar-vanilla/01-dizajn-cjenika.jpg"],
    galleryAlt: ["Božićni cjenik Caffe bara Vanilla s ilustracijama krumpirića"],
    galleryFit: { 0: "contain" },
    story: {
      hr: {
        challenge:
          "Caffe bar Vanilla trebao je blagdanski, sezonski cjenik koji bi na društvenim mrežama i u samom lokalu privukao pažnju gostiju na prigodnu zimsku ponudu jela i pića. Standardni, tekstualni cjenik teško privlači pažnju u moru sličnih objava ugostiteljskih objekata tijekom prosinca, pa je trebalo osmisliti nešto vizualno pamtljivije od uobičajenog popisa stavki i cijena.",
        approach:
          "Osmislili smo topao, ilustrirani dizajn s maskotom simpatičnog „krumpirića” koji u božićnom ugođaju nudi jela iz ponude, čime je cjenik dobio prepoznatljiv, igriv lik umjesto bezličnog popisa. Ponudu smo jasno podijelili u kategorije — hranu, pića i posebnu liniju „spudsi” temeljenu na krumpiru — uz prazničke motive poput snježnih pahulja i božićnih ukrasa usklađenih s tamnozelenom bojom brenda Vanilla. Cijene i nazivi jela ostali su čitljivi i istaknuti unatoč bogatoj ilustraciji, tako da dizajn zabavlja, ali ne otežava snalaženje gosta koji želi brzo naručiti. Dvije verzije cjenika — jedna za jela, druga za „spudse” — dizajnirali smo kao vizualnu cjelinu koja se prirodno nadovezuje jedna na drugu kad se koriste zajedno u lokalu.",
        result:
          "Nastao je prepoznatljiv, dopadljiv cjenik koji je gostima olakšao snalaženje u sezonskoj ponudi, a maskota krumpirića dala je Caffe baru Vanilla igrivu, pamtljivu notu koja ga izdvaja od uobičajenih, čisto tekstualnih cjenika drugih lokala. Takav format lako je ponovno iskoristiti i za buduće sezonske akcije uz izmjenu tematike i zadržavanje istog maskotnog lika. Gosti koji su cjenik vidjeli na društvenim mrežama lokal prepoznaju i pri fizičkom dolasku, jer se isti lik i paleta boja ponavljaju na stolu, čime se digitalna objava izravno prenosi u iskustvo u prostoru.",
      },
      en: {
        challenge:
          "Caffe bar Vanilla needed a festive, seasonal menu that would grab guests' attention on social media and in the venue itself for a special winter food and drinks offer. A standard, text-only menu struggles to stand out in the flood of similar posts from hospitality venues in December, so something more visually memorable than the usual list of items and prices was needed.",
        approach:
          "We designed a warm, illustrated look with a friendly 'potato' mascot offering menu items in a festive setting, giving the menu a recognisable, playful character instead of a faceless list. We clearly divided the offer into categories — food, drinks, and a dedicated potato-based 'spuds' line — with festive motifs like snowflakes and Christmas ornaments matched to Vanilla's dark green brand colour. Prices and dish names stayed legible and prominent despite the rich illustration, so the design entertains without making it harder for a guest who wants to order quickly. We designed the two menu versions — one for food, one for the 'spuds' — as a single visual unit that naturally connects when used together in the venue.",
        result:
          "The result is a recognisable, likeable menu that made it easy for guests to navigate the seasonal offer, and the potato mascot gave Caffe bar Vanilla a playful, memorable note that sets it apart from other venues' plain text menus. The format is easy to reuse for future seasonal promotions simply by changing the theme while keeping the same mascot character. Guests who saw the menu on social media recognise the venue when they arrive in person too, since the same character and colour palette repeat on the table, carrying the digital post directly into the in-venue experience.",
      },
      de: {
        challenge:
          "Das Caffe Bar Vanilla brauchte für ein besonderes winterliches Speisen- und Getränkeangebot eine festliche, saisonale Speisekarte, die die Aufmerksamkeit der Gäste in den sozialen Medien und im Lokal selbst auf sich zieht. Eine gewöhnliche, reine Textkarte geht im Dezember in der Flut ähnlicher Beiträge von Gastronomiebetrieben leicht unter, weshalb etwas visuell Einprägsameres als die übliche Liste aus Speisen und Preisen nötig war.",
        approach:
          "Wir entwarfen einen warmen, illustrierten Look mit einem freundlichen „Kartoffel“-Maskottchen, das Gerichte in festlicher Umgebung anbietet und der Karte einen wiedererkennbaren, verspielten Charakter statt einer gesichtslosen Liste verleiht. Das Angebot teilten wir klar in Kategorien – Speisen, Getränke und eine eigene Linie auf Kartoffelbasis, die „Spuds“ –, mit festlichen Motiven wie Schneeflocken und Weihnachtsschmuck, abgestimmt auf das dunkle Grün der Marke Vanilla. Preise und Gerichtsnamen blieben trotz der reichhaltigen Illustration gut lesbar und deutlich, sodass das Design unterhält, ohne einem Gast, der schnell bestellen möchte, die Orientierung zu erschweren. Die beiden Kartenversionen – eine für Speisen, eine für die „Spuds“ – gestalteten wir als eine visuelle Einheit, die sich beim gemeinsamen Einsatz im Lokal natürlich verbindet.",
        result:
          "Entstanden ist eine wiedererkennbare, sympathische Speisekarte, die es den Gästen leicht machte, sich im saisonalen Angebot zurechtzufinden, und das Kartoffel-Maskottchen verlieh dem Caffe Bar Vanilla eine verspielte, einprägsame Note, die es von den reinen Textkarten anderer Lokale abhebt. Das Format lässt sich für künftige saisonale Aktionen einfach wiederverwenden, indem man das Thema wechselt und dieselbe Maskottchenfigur beibehält. Gäste, die die Karte in den sozialen Medien gesehen haben, erkennen das Lokal auch beim persönlichen Besuch wieder, da sich dieselbe Figur und dieselbe Farbpalette auf dem Tisch wiederholen und den digitalen Beitrag direkt in das Erlebnis vor Ort tragen.",
      },
    },
  },
  {
    slug: "sax-win",
    name: "Sax-Win",
    category: { hr: "Logo dizajn", en: "Logo Design", de: "Logo-Design" },
    img: "/portfolio/sax-win.jpg",
    gallery: ["/portfolio-full/sax-win/01-logo-dizajn.jpg"],
    galleryAlt: ["Logo Sax-Win utisnut u zlatu na crnoj podlozi"],
    story: {
      hr: {
        challenge:
          "Sax-Win je trebao logotip koji bi u jednom kompaktnom simbolu spojio prepoznatljivost imena brenda s dojmom modernosti i pouzdanosti, prikladan za primjenu na svim budućim materijalima tvrtke — od tiskanih do digitalnih. Naziv sam po sebi nije nosio očitu vizualnu asocijaciju, pa je trebalo osmisliti apstraktan, ali upečatljiv simbol koji bi nadopunio tipografiju imena. Dodatan zahtjev bio je da simbol ostane prepoznatljiv i samostalno, bez oslanjanja na puni naziv uz sebe.",
        approach:
          "Kreirali smo geometrijski, kružni monogram sastavljen od isprepletenih okomitih linija u zlatnoj boji, koji unutar kruga stvara dojam kretanja i preciznosti istovremeno. Simbol smo uparili s modernom, oštrom tipografijom naziva brenda u istoj zlatnoj boji, postavljenom na tamnu podlogu koja pojačava kontrast i premium dojam cijelog rješenja. Kompaktnost simbola namjerno smo zadržali visokom kako bi ostao prepoznatljiv i čitljiv i kad se koristi samostalno, bez punog naziva uz sebe, primjerice kao favicon ili sitni pečat. Slova naziva blago smo razmaknuli kako bi tipografija disala jednako mirno kao i sam simbol, izbjegavajući dojam nagurane, agresivne kompozicije.",
        result:
          "Sax-Win danas raspolaže kompaktnim, prepoznatljivim logotipom pogodnim za primjenu na tiskanim i digitalnim materijalima, jednako čitljivim u velikom formatu na fasadi kao i u minijaturnom na vizitki ili profilnoj slici društvenih mreža. Zlatno-crna kombinacija odmah signalizira premium poziciju brenda, dajući čvrst temelj za sve buduće materijale. Time je tvrtka dobila fleksibilan identitet koji ne zahtijeva stalno redizajniranje pri svakoj novoj primjeni, već se samo prilagođava veličini i podlozi na kojoj se pojavljuje, od reklamnog panoa do sitnog pečata na dokumentu, uz jednak dojam ozbiljnosti u oba slučaja.",
      },
      en: {
        challenge:
          "Sax-Win needed a logo that would combine brand name recognition with a sense of modernity and reliability in one compact symbol, suitable for use across all of the company's future materials — from print to digital. The name itself carried no obvious visual association, so an abstract yet striking symbol had to be designed to complement the name's typography. An additional requirement was that the symbol stay recognisable on its own, without relying on the full name beside it.",
        approach:
          "We created a geometric, circular monogram made of interwoven vertical lines in gold, creating an impression of movement and precision within the circle at once. We paired the symbol with modern, sharp typography for the brand name in the same gold colour, set on a dark background that heightens contrast and the overall premium impression of the solution. We deliberately kept the symbol's compactness high so it stays recognisable and legible even when used alone, without the full name beside it, for example as a favicon or a small stamp. We spaced the letters of the name slightly apart so the typography breathes just as calmly as the symbol itself, avoiding a cramped, aggressive composition.",
        result:
          "Sax-Win now has a compact, recognisable logo suitable for both print and digital materials, equally legible large on a shopfront as it is miniaturised on a business card or social media profile picture. The gold-and-black combination immediately signals the brand's premium position, giving a solid foundation for all future materials. This gives the company a flexible identity that doesn't need constant redesigning for every new application, but simply adapts to the size and surface it appears on, from a billboard to a small stamp on a document, with an equally serious impression in both cases.",
      },
      de: {
        challenge:
          "Sax-Win brauchte ein Logo, das in einem kompakten Symbol den Wiedererkennungswert des Markennamens mit einem Gefühl von Modernität und Verlässlichkeit verbindet und sich für alle künftigen Materialien des Unternehmens eignet – vom Druck bis zum Digitalen. Der Name selbst weckte keine offensichtliche visuelle Assoziation, weshalb ein abstraktes und dennoch markantes Symbol entworfen werden musste, das die Typografie des Namens ergänzt. Eine zusätzliche Anforderung war, dass das Symbol auch für sich allein wiedererkennbar bleibt, ohne auf den vollständigen Namen daneben angewiesen zu sein.",
        approach:
          "Wir schufen ein geometrisches, kreisförmiges Monogramm aus ineinander verwobenen vertikalen Linien in Gold, das innerhalb des Kreises zugleich den Eindruck von Bewegung und Präzision erzeugt. Dem Symbol stellten wir eine moderne, scharfe Typografie für den Markennamen in derselben goldenen Farbe zur Seite, auf dunklem Untergrund, der Kontrast und den Premium-Gesamteindruck der Lösung verstärkt. Die Kompaktheit des Symbols hielten wir bewusst hoch, damit es auch allein, ohne den vollständigen Namen daneben, erkennbar und lesbar bleibt, zum Beispiel als Favicon oder kleiner Stempel. Die Buchstaben des Namens setzten wir mit leichtem Abstand, damit die Typografie ebenso ruhig atmet wie das Symbol selbst und keine beengte, aggressive Komposition entsteht.",
        result:
          "Sax-Win hat nun ein kompaktes, wiedererkennbares Logo, das sich für Druck- und Digitalmaterialien eignet und groß an einer Ladenfront ebenso gut lesbar ist wie verkleinert auf einer Visitenkarte oder einem Social-Media-Profilbild. Die Kombination aus Gold und Schwarz signalisiert sofort die Premium-Position der Marke und bietet ein solides Fundament für alle künftigen Materialien. So verfügt das Unternehmen über eine flexible Identität, die nicht für jede neue Anwendung ständig überarbeitet werden muss, sondern sich einfach an Größe und Fläche anpasst, vom Werbeschild bis zum kleinen Stempel auf einem Dokument, und in beiden Fällen einen gleichermaßen seriösen Eindruck macht.",
      },
    },
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
    story: {
      hr: {
        challenge:
          "Dopa Projekt djeluje u elektroinstalacijskoj i energetskoj struci i trebao je logotip koji bi jasno komunicirao djelatnost tvrtke već na prvi pogled, a istovremeno djelovao suvremeno i pouzdano prema klijentima koji povjeravaju elektroinstalacije stručnjacima. Bez jasne vizualne poveznice s energijom i strujom, naziv sam po sebi ne bi dočarao čime se tvrtka bavi. Trebalo je pronaći simbol koji prikazuje kuću kroz koju prolazi munja – simbolizirajući projekte strujnih instalacija koje se protežu kroz cijelu zgradu – a da pritom vizualno bude moderan i čist.",
        approach:
          "Osmislili smo logotip u obliku stilizirane kuće kroz čiju unutrašnjost prolazi munja, izvedena u prijelazu boja od plave prema narančastoj i crvenoj – vizualna metafora struje, energije i instalacija koje oživljavaju građevinu. Podebljana, samopouzdana tipografija naziva „Dopa Projekt” postavljena je ispod simbola u plavoj boji, tako da cijeli logotip funkcionira i kao samostalan znak i kao puni naziv s oznakom. Prijelaz boja unutar munje namjerno smo zadržali živim i toplim usprkos hladnoj plavoj konturi kuće, kako bi kontrast dviju paleta odmah privukao pogled i na sitnijim primjenama poput naljepnice na alatu.",
        result:
          "Dopa Projekt danas ima jasan, odmah prepoznatljiv simbol kuće i munje koja prolazi kroz nju, savršeno komunicirajući djelatnost građevinskih elektroinstalacija bez dodatnog objašnjenja. Spreman je za primjenu na vozilima, radnoj odjeći, poslovnoj dokumentaciji i gradilištima. Živa kombinacija boja osigurava da logotip ostane uočljiv i na udaljenosti, što je važno za tvrtku čija vozila i oprema svakodnevno cirkuliraju terenom. Klijenti tvrtku sada prepoznaju po snažnom simbolu bez obzira susreću li se s njom na ponudi, na kacigi radnika na terenu ili na naljepnici službenog vozila, što gradi dojam ozbiljne i organizirane firme.",
      },
      en: {
        challenge:
          "Dopa Projekt operates in the electrical installation and energy trade and needed a logo that would communicate the company's activity clearly at first glance, while feeling contemporary and reliable to clients who entrust their electrical installations to professionals. Without a clear visual link to energy and electricity, the name alone wouldn't convey what the company does. We had to find a symbol showing a house with a lightning bolt running through it – symbolising electrical installation projects that extend through the whole building – while still looking modern and clean.",
        approach:
          "We designed the logo as a stylised house with a lightning bolt running through its interior, rendered in a colour transition from blue to orange and red – a visual metaphor for electricity, energy and the installations that bring a building to life. The bold, confident typography of the name 'Dopa Projekt' is set beneath the symbol in blue, so the whole logo works both as a standalone mark and as a full name with a symbol. We deliberately kept the colour transition inside the bolt vivid and warm despite the cool blue outline of the house, so the contrast between the two palettes catches the eye immediately, even in small applications such as a sticker on a tool.",
        result:
          "Dopa Projekt now has a clear, instantly recognisable symbol of a house with a lightning bolt through it, communicating the company's building electrical installation work perfectly without further explanation. It is ready for use on vehicles, workwear, business documentation and construction sites. The vivid colour combination keeps the logo noticeable even from a distance, which matters for a company whose vehicles and equipment circulate in the field every day. Clients now recognise the company by its strong symbol whether they meet it on a quote, on a worker's helmet on site or on the sticker of an official vehicle, building the impression of a serious, well-organised firm.",
      },
      de: {
        challenge:
          "Dopa Projekt ist im Bereich Elektroinstallation und Energietechnik tätig und brauchte ein Logo, das die Tätigkeit des Unternehmens schon auf den ersten Blick klar vermittelt und zugleich zeitgemäß und verlässlich auf Kunden wirkt, die ihre Elektroinstallationen Fachleuten anvertrauen. Ohne klare visuelle Verbindung zu Energie und Strom würde der Name allein nicht vermitteln, womit sich die Firma beschäftigt. Es galt, ein Symbol zu finden, das ein Haus zeigt, durch das ein Blitz verläuft – als Sinnbild für Elektroinstallationsprojekte, die sich durch das gesamte Gebäude ziehen –, und dabei modern und klar zu bleiben.",
        approach:
          "Wir entwarfen das Logo als stilisiertes Haus, durch dessen Inneres ein Blitz verläuft, ausgeführt in einem Farbverlauf von Blau über Orange bis Rot – eine visuelle Metapher für Strom, Energie und die Installationen, die ein Gebäude zum Leben erwecken. Die kräftige, selbstbewusste Typografie des Namens „Dopa Projekt“ ist in Blau unter dem Symbol platziert, sodass das gesamte Logo sowohl als eigenständiges Zeichen als auch als vollständiger Name mit Symbol funktioniert. Den Farbverlauf im Blitz haben wir trotz der kühlen blauen Kontur des Hauses bewusst lebendig und warm gehalten, damit der Kontrast der beiden Paletten sofort ins Auge fällt, auch bei kleineren Anwendungen wie einem Aufkleber auf einem Werkzeug.",
        result:
          "Dopa Projekt hat heute ein klares, sofort wiedererkennbares Symbol aus einem Haus mit einem hindurchlaufenden Blitz, das die Tätigkeit im Bereich Gebäude-Elektroinstallation ohne weitere Erklärung perfekt vermittelt. Es ist einsatzbereit für Fahrzeuge, Arbeitskleidung, Geschäftsunterlagen und Baustellen. Die lebendige Farbkombination sorgt dafür, dass das Logo auch aus der Entfernung auffällt, was für ein Unternehmen wichtig ist, dessen Fahrzeuge und Ausrüstung täglich im Einsatz unterwegs sind. Kunden erkennen das Unternehmen nun an seinem starken Symbol, ob sie ihm auf einem Angebot, auf dem Helm eines Arbeiters auf der Baustelle oder auf dem Aufkleber eines Firmenfahrzeugs begegnen, was den Eindruck einer seriösen, gut organisierten Firma aufbaut.",
      },
    },
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
    story: {
      hr: {
        challenge:
          "Udruga vinogradara i vinara „Igrač” okuplja lokalne proizvođače vina s područja Bukovlja i Vranovaca, a trebala je logotip koji bi njihov zajednički rad i tradiciju predstavio jednim prepoznatljivim simbolom. Ključni i jedini strogi zahtjev članova bio je da se u središtu vizualnog identiteta obavezno nađe građevina Villa Igrač – simbolično središte okupljanja, druženja i vinogradarske tradicije ovog kraja. Znak je morao biti primjenjiv jednako na svečanim manifestacijama i službenim dokumentima udruge, uz osiguranu crno-bijelu verziju za situacije kada tisak u boji nije moguć.",
        approach:
          "Dizajnirali smo kružni pečatni logotip u čijoj je pozadini vjerno prenesena ilustracija prepoznatljive Ville Igrač, dok su u prvom planu dvije ruke koje nazdravljaju čašama vina, uokvirene punim nazivom udruge duž ruba kruga. Zelenu boju odabrali smo kao simbol vinograda i prirode, a paralelno smo razvili i monokromatsku, linijsku verziju za crno-bijeli tisak. Postavljanjem Ville Igrač u pozadinu, a ruku s čašama u prvi plan, postigli smo da vizual na prvu komunicira dom, gostoljubivost i zajedništvo svih lokalnih proizvođača.",
        result:
          "Udruga danas raspolaže toplim, prepoznatljivim simbolom koji vizualno ovjekovječuje Villu Igrač i koristi se na dokumentima, promotivnim materijalima te pri predstavljanju na vinskim manifestacijama. Dostupnost dviju verzija — u boji i monokromatske — omogućuje dosljednu primjenu bez obzira na format tiska. Motiv Ville Igrač i nazdravljanja postao je službeni vizualni potpis udruge koji članovima i posjetiteljima jasno komunicira da iza svake boce stoji zajednička priča, tradicija i duh ovog posebnog mjesta.",
      },
      en: {
        challenge:
          "The Igrač Association of Winegrowers and Winemakers brings together local wine producers from the Bukovlje and Vranovci area, and needed a logo that would present their shared work and tradition through one recognisable symbol. The members' key and only strict requirement was that the Villa Igrač building must be at the centre of the visual identity – the symbolic heart of gathering, socialising and the winegrowing tradition of this area. The mark had to work equally well at festive events and on the association's official documents, with a black-and-white version guaranteed for situations where colour printing isn't possible.",
        approach:
          "We designed a circular seal-style logo with a faithful illustration of the recognisable Villa Igrač in the background, while two hands raising a toast with glasses of wine take the foreground, framed by the association's full name along the edge of the circle. We chose green as a symbol of vineyards and nature, and in parallel developed a monochrome line-art version for black-and-white printing. By placing Villa Igrač in the background and the hands with glasses in the foreground, we made the visual communicate home, hospitality and the togetherness of all the local producers at first glance.",
        result:
          "The association now has a warm, recognisable symbol that visually immortalises Villa Igrač and is used on documents, promotional materials and when presenting at wine events. Having two versions – in colour and monochrome – allows consistent use regardless of print format. The motif of Villa Igrač and the toast has become the association's official visual signature, clearly telling members and visitors that behind every bottle stands a shared story, tradition and the spirit of this special place.",
      },
      de: {
        challenge:
          "Der Verein der Winzer und Weinbauern „Igrač“ vereint lokale Weinerzeuger aus dem Gebiet von Bukovlje und Vranovci und brauchte ein Logo, das ihre gemeinsame Arbeit und Tradition in einem wiedererkennbaren Symbol darstellt. Die zentrale und einzige strenge Anforderung der Mitglieder war, dass das Gebäude Villa Igrač zwingend im Mittelpunkt der visuellen Identität steht – als symbolisches Zentrum von Zusammenkunft, Geselligkeit und Weinbautradition dieser Gegend. Das Zeichen musste bei festlichen Veranstaltungen und auf den offiziellen Dokumenten des Vereins gleichermaßen einsetzbar sein, mit einer gesicherten Schwarz-Weiß-Version für Fälle, in denen ein Farbdruck nicht möglich ist.",
        approach:
          "Wir entwarfen ein kreisförmiges Siegel-Logo, in dessen Hintergrund die wiedererkennbare Villa Igrač originalgetreu illustriert ist, während im Vordergrund zwei Hände mit Weingläsern anstoßen, eingerahmt vom vollständigen Namen des Vereins entlang des Kreisrands. Grün wählten wir als Symbol für Weinberge und Natur und entwickelten parallel eine monochrome Strichversion für den Schwarz-Weiß-Druck. Indem wir die Villa Igrač in den Hintergrund und die Hände mit den Gläsern in den Vordergrund setzten, erreichten wir, dass das Bild auf den ersten Blick Heimat, Gastfreundschaft und Zusammenhalt aller lokalen Erzeuger vermittelt.",
        result:
          "Der Verein verfügt heute über ein warmes, wiedererkennbares Symbol, das die Villa Igrač visuell verewigt und auf Dokumenten, Werbematerialien sowie bei Auftritten auf Weinveranstaltungen verwendet wird. Die Verfügbarkeit von zwei Versionen – in Farbe und monochrom – ermöglicht eine konsistente Anwendung unabhängig vom Druckformat. Das Motiv der Villa Igrač und des Anstoßens ist zur offiziellen visuellen Signatur des Vereins geworden und vermittelt Mitgliedern und Besuchern klar, dass hinter jeder Flasche eine gemeinsame Geschichte, Tradition und der Geist dieses besonderen Ortes stehen.",
      },
    },
  },
  {
    slug: "adria-motors",
    name: "Adria Motors",
    category: { hr: "Logo dizajn", en: "Logo Design", de: "Logo-Design" },
    img: "/portfolio/adria-motors.jpg",
    gallery: ["/portfolio-full/adria-motors/01-logo-dizajn.jpg"],
    galleryAlt: ["Logo Adria Motors na zidu izložbenog salona s modelima automobila"],
    story: {
      hr: {
        challenge:
          "Adria Motors, prodavač polovnih i kolekcionarskih automobila, trebao je logotip koji bi već na prvi pogled komunicirao luksuz, brzinu i pouzdanost — vrijednosti koje kupci očekuju prije nego uopće sjednu za volan izloženog vozila. Znak je morao biti dovoljno jednostavan i upečatljiv da podnese izvedbu u nekoliko potpuno različitih medija odjednom: u tisku, na vozilima i kao trodimenzionalni natpis izrađen u fizičkom materijalu. Dodatan zahtjev bio je da logotip ostane jednako čitljiv i prepoznatljiv u svakoj od tih primjena, bez gubitka detalja pri značajnom povećanju ili smanjenju.",
        approach:
          "Kreirali smo logotip koji siluetu sportskog automobila stapa sa stiliziranim slovom A, u crno-zlatnoj kombinaciji koja odiše premium dojmom svojstvenim brendovima kolekcionarskih vozila. Oblik smo namjerno pojednostavili na čiste geometrijske linije bez sitnih detalja, kako bi znak ostao prepoznatljiv i u trodimenzionalnoj izvedbi, jer je bio namijenjen izradi u fizičkim materijalima poput metala ili drva, uz standardnu primjenu u tisku i na vozilima. Zlatnu boju zadržali smo kao jedini akcent na crnoj podlozi, tako da logotip djeluje dosljedno bez obzira na materijal ili veličinu u kojoj se izvodi.",
        result:
          "Adria Motors danas ima upečatljiv, lako prepoznatljiv logotip dosljedno izveden u crno-zlatnoj kombinaciji, koji jednako dobro funkcionira u velikom, trodimenzionalnom izdanju i u sitnijim primjenama — na katalozima vozila, digitalnim oglasima i poslovnoj dokumentaciji. Takva dosljednost gradi jedinstven vizualni jezik za sve kanale komunikacije s kupcima, bez potrebe za redizajnom pri svakoj novoj primjeni. Znak sam po sebi odmah signalizira premium poziciju brenda, pojačavajući dojam ozbiljnog i uređenog poslovanja koji kupci očekuju od prodavača kolekcionarskih vozila.",
      },
      en: {
        challenge:
          "Adria Motors, a dealer in used and collectible cars, needed a logo that would instantly communicate luxury, speed and reliability — values buyers expect before they even sit behind the wheel of a car on display. The mark had to be simple and striking enough to hold up across several completely different media at once: print, vehicles, and a three-dimensional sign made in physical material. An additional requirement was that the logo stay equally legible and recognisable in every one of these applications, without losing detail when significantly enlarged or reduced.",
        approach:
          "We created a logo that fuses the silhouette of a sports car with a stylised letter A, in a black-and-gold combination that carries the premium feel typical of collectible car brands. We deliberately simplified the shape into clean geometric lines with no fine detail, so the mark stays recognisable in three-dimensional form as well, since it was intended for production in physical materials like metal or wood, alongside standard use in print and on vehicles. We kept gold as the only accent on a black background, so the logo reads consistently regardless of the material or size it's produced in.",
        result:
          "Adria Motors now has a striking, easily recognisable logo consistently executed in black and gold, working equally well as a large three-dimensional installation and in smaller applications — on vehicle catalogues, digital ads and business documentation. This consistency builds a unified visual language across every customer communication channel, without needing a redesign for each new application. The mark itself immediately signals the brand's premium position, reinforcing the impression of a serious, well-run business that buyers expect from a collectible car dealer.",
      },
      de: {
        challenge:
          "Adria Motors, ein Händler für gebrauchte und klassische Sammlerfahrzeuge, brauchte ein Logo, das sofort Luxus, Geschwindigkeit und Verlässlichkeit vermittelt – Werte, die Käufer erwarten, noch bevor sie sich hinter das Steuer eines ausgestellten Autos setzen. Das Zeichen musste einfach und markant genug sein, um in mehreren völlig unterschiedlichen Medien gleichzeitig zu bestehen: im Druck, auf Fahrzeugen und als dreidimensionales Schild aus physischem Material. Eine zusätzliche Anforderung war, dass das Logo in all diesen Anwendungen gleichermaßen lesbar und wiedererkennbar bleibt, ohne bei starker Vergrößerung oder Verkleinerung Details zu verlieren.",
        approach:
          "Wir schufen ein Logo, das die Silhouette eines Sportwagens mit einem stilisierten Buchstaben A verschmilzt, in einer Kombination aus Schwarz und Gold, die den für Sammlerfahrzeugmarken typischen Premium-Charakter trägt. Die Form vereinfachten wir bewusst zu klaren geometrischen Linien ohne feine Details, damit das Zeichen auch in dreidimensionaler Form wiedererkennbar bleibt, da es neben der üblichen Verwendung im Druck und auf Fahrzeugen für die Fertigung aus physischen Materialien wie Metall oder Holz vorgesehen war. Gold behielten wir als einzigen Akzent auf schwarzem Untergrund bei, damit das Logo unabhängig vom Material oder der Größe der Produktion einheitlich wirkt.",
        result:
          "Adria Motors hat nun ein markantes, leicht wiedererkennbares Logo in konsequenter Ausführung in Schwarz und Gold, das als große dreidimensionale Installation ebenso gut funktioniert wie in kleineren Anwendungen – auf Fahrzeugkatalogen, digitalen Anzeigen und Geschäftsunterlagen. Diese Konsistenz schafft eine einheitliche visuelle Sprache über alle Kommunikationskanäle mit den Kunden hinweg, ohne dass für jede neue Anwendung eine Überarbeitung nötig wäre. Das Zeichen selbst signalisiert sofort die Premium-Position der Marke und verstärkt den Eindruck eines seriösen, gut geführten Unternehmens, den Käufer von einem Händler für Sammlerfahrzeuge erwarten.",
      },
    },
  },
  {
    slug: "majstorovic-vinarija",
    name: "Vinarija Majstorović",
    category: { hr: "Logo i ambalaža", en: "Logo & Packaging", de: "Logo & Verpackung" },
    img: "/portfolio/majstorovic-vinarija.jpg",
    gallery: [
      "/portfolio-full/majstorovic-vinarija/01-logo-dizajn.jpg",
      "/portfolio-full/majstorovic-vinarija/02-logo-dizajn.jpg",
      "/portfolio-full/majstorovic-vinarija/03-dizajn-etikete.jpg",
      "/portfolio-full/majstorovic-vinarija/04-dizajn-etikete.jpg",
    ],
    galleryAlt: [
      "Logo Vinarije Majstorović s pleternim ornamentom i čašom uklesan u kamen",
      "Vizitka Vinarije Majstorović Kutjevo na starom drvu",
      "Boca Graševine Majstorović sa zlatnim logom na crnoj etiketi",
      "Boca Graševine Majstorović s pleternim ukrasom na etiketi i grlu",
    ],
    story: {
      hr: {
        challenge:
          "Vinarija Majstorović iz Kutjeva trebala je cjeloviti vizualni identitet i dizajn etiketa za svoju vinsku liniju koji će na prvi pogled ispričati priču o vrhunskoj kvaliteti i dubokoj ukorijenjenosti u tradiciju kutjevačkog vinogorja. Izazov je bio stvoriti ambalažu koja se snažno ističe na polici, odiše elegancijom te uspješno spaja povijesnu baštinu i suvremeni vinski izričaj.",
        approach:
          "Osnovu vizualnog identiteta čini pleter – starohrvatski troplet prisutan na kamenim spomenicima još od 9. stoljeća – koji simbolizira kontinuitet, isprepletenost i nasljeđe. Unutar tog pleternog ornamenta skladno je oblikovana silueta čaše za vino, čime je ostvaren savršen spoj hrvatske tradicije i suvremenog vinarstva. Izvedba u profinjenoj zlatnoj boji na elegantnoj tamnoj podlozi nosi jasnu asocijaciju na vino, zrelost grožđa i vrhunsku ekskluzivnost proizvoda.",
        result:
          "Vinarija Majstorović dobila je prepoznatljiv, luksuzan i duboko simboličan vizualni identitet. Etikete na bocama i prateći materijali zrače elegancijom i autentičnošću, dajući kupcu u trgovini ili gostu u restoranu jasan dojam vrhunskog vina iza kojeg stoji poštovanje prema tradiciji i beskompromisna kvaliteta.",
      },
      en: {
        challenge:
          "Majstorović Winery from Kutjevo needed a complete visual identity and label design for its wine line that would tell the story of top quality and deep roots in the tradition of the Kutjevo wine region at first glance. The challenge was to create packaging that stands out strongly on the shelf, exudes elegance and successfully combines historical heritage with a contemporary wine expression.",
        approach:
          "The foundation of the visual identity is the pleter – the Old Croatian three-strand interlace found on stone monuments since the 9th century – which symbolises continuity, interconnection and heritage. Within that interlace ornament, the silhouette of a wine glass is harmoniously shaped, achieving a perfect blend of Croatian tradition and contemporary winemaking. Rendered in a refined gold on an elegant dark background, it carries a clear association with wine, the ripeness of the grape and the premium exclusivity of the product.",
        result:
          "Majstorović Winery received a recognisable, luxurious and deeply symbolic visual identity. The bottle labels and accompanying materials radiate elegance and authenticity, giving a shopper in a store or a guest in a restaurant a clear impression of a top wine backed by respect for tradition and uncompromising quality.",
      },
      de: {
        challenge:
          "Das Weingut Majstorović aus Kutjevo brauchte eine ganzheitliche visuelle Identität und ein Etikettendesign für seine Weinlinie, das auf den ersten Blick die Geschichte von höchster Qualität und tiefer Verwurzelung in der Tradition des Weinbaugebiets von Kutjevo erzählt. Die Herausforderung bestand darin, eine Verpackung zu schaffen, die im Regal stark hervorsticht, Eleganz ausstrahlt und historisches Erbe erfolgreich mit einem zeitgenössischen Weinausdruck verbindet.",
        approach:
          "Die Grundlage der visuellen Identität bildet der „Pleter“ – das altkroatische Dreiflechtband, das seit dem 9. Jahrhundert auf Steindenkmälern zu finden ist – und das Kontinuität, Verflechtung und Erbe symbolisiert. Innerhalb dieses Flechtornaments ist die Silhouette eines Weinglases harmonisch eingefügt, wodurch eine perfekte Verbindung von kroatischer Tradition und zeitgemäßem Weinbau entsteht. Die Ausführung in raffiniertem Gold auf elegantem dunklem Untergrund weckt eine klare Assoziation mit Wein, der Reife der Traube und der erstklassigen Exklusivität des Produkts.",
        result:
          "Das Weingut Majstorović erhielt eine wiedererkennbare, luxuriöse und zutiefst symbolische visuelle Identität. Die Flaschenetiketten und die begleitenden Materialien strahlen Eleganz und Authentizität aus und vermitteln einem Käufer im Geschäft oder einem Gast im Restaurant den klaren Eindruck eines erstklassigen Weins, hinter dem Respekt vor der Tradition und kompromisslose Qualität stehen.",
      },
    },
  },
];

export const FEATURED_SLUGS = ["soldo-vinarija", "vismotus", "platinum-grupa", "bilokapic-destilerija"];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
