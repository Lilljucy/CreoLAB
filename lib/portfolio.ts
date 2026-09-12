import type { Locale } from "./i18n";

type ProjectStory = { challenge: string; approach: string; result: string };

export type Project = {
  slug: string;
  name: string;
  category: Record<Locale, string>;
  img: string;
  gallery: string[];
  galleryAlt: string[];
  galleryFocus?: Record<number, string>;
  story?: Partial<Record<Locale, ProjectStory>>;
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
    story: {
      hr: {
        challenge:
          "Platinum Grupa je zagrebačka tvrtka za računovodstvo i poslovno savjetovanje koja je dugo poslovala bez jedinstvenog vizualnog nastupa. Ponude, računi i dopisi slali su se na različitim predlošcima, bez zajedničkog loga, boja ili tipografije, što je otežavalo prepoznatljivost tvrtke i ostavljalo dojam neusklađenosti pred klijentima koji od knjigovodstvene struke prije svega očekuju red i preciznost. Trebalo je osmisliti identitet koji bi tu preciznost komunicirao već na prvi pogled, prije nego što klijent uopće pročita sadržaj dokumenta.",
        approach:
          "Krenuli smo od simbola: geometrijskog monograma u obliku strelice koja raste ulijevo prema gore, kao vizualna metafora napretka, rasta i financijske stabilnosti. Za paletu boja odabrali smo tamnoplavu i bijelu — kombinaciju koja u financijskom sektoru tradicionalno komunicira pouzdanost i ozbiljnost, bez suvišnih ukrasa koji bi odvlačili pažnju od sadržaja dokumenta. Identitet smo zatim doslovno proveli kroz cijelu poslovnu papirologiju: memorandum s jasno strukturiranim zaglavljem i podnožjem, kuvertu s utisnutim monogramom te vizitke zaposlenika s ujednačenim rasporedom kontakt podataka, tako da svaki novi dokument koji tvrtka pošalje odmah djeluje kao dio iste, promišljene cjeline.",
        result:
          "Platinum Grupa danas ima dosljedan identitet koji prati svaki dokument, od prve ponude do potpisanog ugovora, i koji zaposlenicima omogućuje da bez razmišljanja koriste ispravan predložak za svaku situaciju. Klijenti pri prvom kontaktu vide urednu, jedinstvenu vizualnu priču umjesto proizvoljno sastavljenih dopisa, što izravno potkrepljuje poruku koju tvrtka želi prenijeti — da je riječ o partneru kojem se financije mogu povjeriti bez brige. Ujednačen izgled dokumentacije olakšava i internu organizaciju, jer svaki novi zaposlenik odmah zna kojim se predloškom koristiti za koju vrstu dopisa, umjesto da svaki put iznova smišlja format.",
      },
      en: {
        challenge:
          "Platinum Grupa is a Zagreb-based accounting and business consulting firm that had long operated without a unified visual presence. Quotes, invoices and letters went out on different templates, with no shared logo, colours or typography, making the company hard to recognise and leaving an impression of inconsistency with clients who, from an accounting firm above all, expect order and precision. We needed to design an identity that would communicate that precision at first glance, before the client even read the document.",
        approach:
          "We started with a symbol: a geometric monogram shaped like an arrow rising up and to the left, a visual metaphor for progress, growth and financial stability. For the colour palette we chose navy blue and white — a combination that traditionally communicates trust and seriousness in the financial sector, without unnecessary decoration that would distract from the document's content. We then carried the identity through the entire set of business stationery: a letterhead with a clearly structured header and footer, an envelope with an embossed monogram, and employee business cards with a consistent layout for contact details, so every new document the company sends immediately feels part of the same, considered whole.",
        result:
          "Platinum Grupa now has a consistent identity that follows every document, from the first quote to the signed contract, letting employees use the right template for every situation without thinking twice. Clients see a tidy, unified visual story on first contact instead of ad hoc correspondence, directly reinforcing the message the company wants to send — that it's a partner you can trust with your finances without worry. The consistent look of the documentation also makes internal organisation easier, since every new employee immediately knows which template to use for which type of letter, instead of improvising a format each time.",
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
          "Obiteljska destilerija Bilokapić proizvodi vinjak, šljivovicu i lozovaču po tradicionalnim recepturama, no na policama premium žestokih pića nije se izdvajala od konkurencije koja godinama ulaže u vizualni identitet svojih boca. Kupac odlučuje u nekoliko sekundi pogleda, a dotadašnja ambalaža nije prenosila razinu zanatske pažnje uloženu u sam sadržaj — trebalo je premostiti taj jaz između kvalitete pića i dojma koji ostavlja na polici.",
        approach:
          "Za temelj identiteta osmislili smo kružni zlatno-antracit logotip s ilustracijom kotla za pečenje rakije u stilu starinskog pečata, koji odmah komunicira tradiciju, zanat i obiteljsko podrijetlo proizvoda. Taj se logotip zatim prenosi na tri zasebne linije proizvoda — vinjak, šljivovicu i lozovaču — od kojih je svaka dobila vlastitu ilustraciju voća ili grožđa od kojeg nastaje, ručno rađenu u istom zlatnom tonu na tamnoj podlozi. Uz etiketu smo osmislili i drveni čep s utisnutim nazivom pića, koji ambalaži daje taktilnu, premium notu čim je kupac uzme u ruke, dok smo boju stakla i oblik bočice birali tako da svjetlo naglašava boju samog pića.",
        result:
          "Bilokapić danas na tržištu nastupa s ambalažom koja djeluje kao proizvod višeg cjenovnog ranga, s dosljednim sustavom koji povezuje sve tri linije pića u jedinstven, lako prepoznatljiv brend. Kupac koji jednom zapamti zlatni pečat s kotlom prepoznaje ga i na sljedećoj boci, bez obzira je li riječ o vinjaku, šljivovici ili lozovači, što destileriji olakšava predstavljanje budućih proizvoda pod istim vizualnim krovom. Drveni čep i tamno staklo dodatno signaliziraju ručnu izradu i pažnju posvećenu detalju, čime ambalaža sama po sebi postaje argument za viši cjenovni razred u odnosu na industrijski proizvedena pića.",
      },
      en: {
        challenge:
          "The family distillery Bilokapić produces brandy, plum brandy and grape brandy using traditional recipes, but wasn't standing out on premium spirits shelves against competitors who had spent years investing in bottle identity. Buyers decide within seconds of a glance, and the existing packaging didn't convey the level of craft put into the drink itself — we needed to bridge that gap between the quality of the drink and the impression it made on the shelf.",
        approach:
          "For the foundation of the identity we designed a circular gold-and-anthracite logo with an illustration of a traditional brandy still in the style of an old-fashioned stamp, immediately communicating tradition, craft and family heritage. That logo then carries across three separate product lines — brandy, plum brandy and grape brandy — each given its own hand-drawn illustration of the fruit or grapes it's made from, rendered in the same gold tone on a dark background. Alongside the label we designed a wooden stopper with the drink's name embossed into it, giving the packaging a tactile, premium note as soon as the buyer picks it up, while we chose the glass colour and bottle shape so light highlights the colour of the drink itself.",
        result:
          "Bilokapić now goes to market with packaging that reads as a higher price tier product, with a consistent system tying all three drink lines into a single, easily recognisable brand. A buyer who remembers the gold stamp with the still recognises it on the next bottle too, whether it's brandy, plum brandy or grape brandy, making it easy for the distillery to introduce future products under the same visual roof. The wooden stopper and dark glass further signal handcraft and attention to detail, making the packaging itself an argument for a higher price bracket compared with industrially produced spirits.",
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
          "Vinarija Knežević proizvodi Merlot i Sauvignon i trebala je etikete koje bi na polici odmah odavale karakter i kvalitetu vina, umjesto generičkog izgleda kakav je uobičajen kod manjih obiteljskih proizvođača. Izazov nije bio samo estetski — etiketa je za manju vinariju često jedini trenutak u kojem kupac uopće sazna nešto o brendu prije kupnje, pa je morala nositi i priču, ne samo naziv i postotak alkohola. Dodatni zahtjev bio je da se dizajn lako razlikuje između sorti, a da pritom obje etikete i dalje djeluju kao dio iste, prepoznatljive obitelji proizvoda.",
        approach:
          "Logotip smo oblikovali kao rukom pisani potpis obiteljskog prezimena Knežević, čime smo unijeli osobnu, gotovo intimnu notu svojstvenu malim vinarijama koje vino i dalje rade po obiteljskoj recepturi. Uz potpis smo dodali suptilnu ilustraciju notnog zapisa provučenog kroz siluetu boce — vizualnu referencu na sklad i strpljenje koje zrenje vina zahtijeva. Svaka sorta dobila je vlastitu boju trake na etiketi, crvenu za Merlot i zelenu za Sauvignon, dok je crna podloga ostala zajednička konstanta koja cijeloj liniji daje dojam elegancije i ozbiljnosti, bez obzira mijenja li se boja iz sezone u sezonu.",
        result:
          "Nastao je sustav etiketa koji je odmah prepoznatljiv na polici, a lako se proširuje na nove sorte jednostavnom promjenom boje trake uz zadržavanje istog rukopisnog potpisa i notnog motiva. Rukom pisan logotip vinariji daje osobnu, obiteljsku notu koja je i dalje dovoljno suptilna da ne odvlači pažnju od samog vina, čime se Knežević jasno izdvaja među konkurentskim etiketama sličnog cjenovnog ranga. Gost u restoranu ili kupac u trgovini prepoznaje vinariju po istom potpisu bez obzira poseže li za crvenim ili bijelim vinom, što gradi kontinuitet dojma kroz cijeli asortiman.",
      },
      en: {
        challenge:
          "Vinarija Knežević produces Merlot and Sauvignon and needed labels that would instantly convey the wine's character and quality on the shelf, instead of the generic look typical of smaller family producers. The challenge wasn't only aesthetic — for a small winery, the label is often the only moment a buyer learns anything about the brand before purchase, so it had to carry a story, not just a name and alcohol percentage. It also had to clearly differentiate between varieties while both labels still read as part of the same, recognisable family.",
        approach:
          "We shaped the logotype as a handwritten signature of the family surname Knežević, bringing in a personal, almost intimate note typical of small wineries that still make wine to a family recipe. Alongside the signature we added a subtle illustration of sheet music woven through a bottle silhouette — a visual reference to the harmony and patience that ageing wine requires. Each variety got its own ribbon colour on the label, red for Merlot and green for Sauvignon, while a black background remained the shared constant giving the whole line a sense of elegance and seriousness, regardless of which colour changes from season to season.",
        result:
          "The result is a label system that's instantly recognisable on the shelf and easily extends to new varieties simply by changing the ribbon colour while keeping the same handwritten signature and music motif. The handwritten logotype gives the winery a personal, family note that's still subtle enough not to distract from the wine itself, clearly setting Knežević apart from competing labels in a similar price bracket. A guest in a restaurant or a shopper in a store recognises the winery by the same signature whether they reach for the red or the white, building continuity of impression across the whole range.",
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
          "Vis Motus je zagrebački studio za individualni trening, premium grupne treninge i sportsku masažu, koji je do suradnje s nama poslovao bez ijedinstvenog vizualnog identiteta. Klijenti su termine dogovarali telefonski ili preko poruka bez prepoznatljivog brenda iza kojeg stoje, a niti oprema niti materijali studija nisu odražavali razinu usluge koju studio nudi u privatnom, ekskluzivnom okruženju. Trebalo je osmisliti identitet koji jednako dobro funkcionira na majici trenera i na vizitki uručenoj novom klijentu.",
        approach:
          "Osmislili smo dinamičan monogram od dva preklopljena slova V okrenuta prema gore, koji istovremeno podsjeća na pokret i uzlaznu putanju napretka klijenta kroz trening. Za boju smo odabrali ljubičastu — rijetko korištenu u fitness industriji dominiranoj crvenom i crnom — čime se Vis Motus odmah vizualno izdvaja od uobičajenih teretana i studija. Identitet smo primijenili na sportsku majicu s diskretnim logom na prsima, te na vizitke s QR kodom koji vodi izravno na WhatsApp za brzu rezervaciju termina, spajajući tako fizički i digitalni dodir s brendom. Tipografiju naziva birali smo podebljanu i čvrstu, u skladu s ozbiljnošću individualnog pristupa koji studio nudi svakom klijentu.",
        result:
          "Vis Motus danas klijentima ostavlja dojam ozbiljnog, premium studija već pri prvom susretu — bilo da je riječ o majici koju nosi trener ili vizitki uručenoj na kraju treninga. Jasan poziv na akciju putem QR koda dodatno skraćuje put od upoznavanja s brendom do zakazanog termina, što studiju olakšava pretvaranje prvog dojma u novog klijenta. Prepoznatljiva ljubičasta boja i dinamični monogram sada prate studio na svakom kanalu komunikacije, od majica trenera u dvorani do profila na društvenim mrežama, gradeći dosljednu sliku brenda kroz vrijeme.",
      },
      en: {
        challenge:
          "Vis Motus is a Zagreb studio for personal training, premium group sessions and sports massage that, before working with us, operated without a unified visual identity. Clients booked sessions by phone or message with no recognisable brand behind the service, and neither the equipment nor the materials reflected the level of service the studio offers in its private, exclusive setting. We needed an identity that would work equally well on a trainer's t-shirt and on a business card handed to a new client.",
        approach:
          "We designed a dynamic monogram of two overlapping, upward-facing V letters, evoking both movement and the upward trajectory of a client's progress through training. For the colour we chose purple — rarely used in a fitness industry dominated by red and black — immediately setting Vis Motus apart from typical gyms and studios. We applied the identity to a sports t-shirt with a discreet logo on the chest, and to business cards with a QR code leading straight to WhatsApp for quick booking, connecting the physical and digital touchpoints with the brand. We chose bold, solid typography for the name, matching the seriousness of the individual approach the studio offers every client.",
        result:
          "Vis Motus now leaves clients with the impression of a serious, premium studio from the very first encounter — whether that's the t-shirt worn by a trainer or the business card handed over at the end of a session. A clear call to action via the QR code further shortens the path from discovering the brand to booking a session, making it easier for the studio to turn a first impression into a new client. The recognisable purple colour and dynamic monogram now follow the studio across every communication channel, from trainers' t-shirts in the gym to social media profiles, building a consistent brand image over time.",
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
          "Vinarija Soldo proizvodi Graševinu i rosé vino i trebala je jedinstven identitet koji bi povezao obje linije, a istovremeno djelovao svježije i modernije od tradicionalnih, često pretrpanih vinarijskih etiketa punih ornamenata i sitnog teksta. Cilj je bio da etiketa bude prepoznatljiva i na udaljenosti od police, ne tek izbliza. Trebalo je i osigurati da se identitet lako širi na buduće sorte bez potrebe za redizajnom od nule svaki put.",
        approach:
          "Za srce identiteta osmislili smo minimalistički simbol kapi vina koja se pretače iz obrisa čaše — jednostavan, geometrijski oblik koji odmah asocira na degustaciju i užitak u vinu. Boju smo prilagodili svakoj liniji: zlatnu za Graševinu, koja naglašava toplinu bijelog vina, i ružičastu za rosé, u skladu s bojom samog pića. Etikete smo namjerno svijetlile do gole nužne informacije — naziv, sorta, oznaka kvalitete — kako bi kompozicija ostala čista i čitljiva čak i s nekoliko metara udaljenosti, za razliku od gusto ispisanih etiketa konkurencije. Tipografiju naziva „Soldo” izveli smo u tankom, elegantnom rezu koji na etiketi ostavlja dovoljno praznog prostora da simbol kapi ostane vizualno središte cijele kompozicije.",
        result:
          "Nastao je moderan, prepoznatljiv identitet u kojem simbol kapi vina djeluje kao zajednički vizualni potpis neovisno o boji ili sorti, što vinariji omogućuje jednostavno širenje asortimana u budućnosti bez potrebe za redizajnom cijelog sustava. Etikete danas na polici djeluju svježe i suvremeno, jasno se izdvajajući od tradicionalnijeg izgleda okolnih vina. Isti simbol kapi pojavljuje se i na čaši korištenoj pri degustacijama, čime se identitet proteže izvan same etikete i postaje dio cjelokupnog doživljaja kušanja vina Soldo.",
      },
      en: {
        challenge:
          "Vinarija Soldo produces Graševina and rosé wine and needed a unified identity connecting both lines, while feeling fresher and more modern than traditional, often cluttered winery labels full of ornament and small print. The goal was a label recognisable even from a distance on the shelf, not only up close. It also had to be easy to extend to future varieties without redesigning from scratch every time.",
        approach:
          "At the heart of the identity we designed a minimalist symbol of a drop of wine pouring from the outline of a glass — a simple, geometric shape that immediately evokes tasting and enjoying wine. We adapted the colour to each line: gold for Graševina, emphasising the warmth of the white wine, and pink for the rosé, matching the drink's own colour. We deliberately pared the labels down to the bare essential information — name, variety, quality mark — so the composition stays clean and legible even from a few metres away, unlike the densely printed labels of competitors. We set the 'Soldo' name in a thin, elegant cut that leaves enough open space on the label for the drop symbol to remain the visual centre of the whole composition.",
        result:
          "The result is a modern, recognisable identity in which the wine-drop symbol acts as a shared visual signature regardless of colour or variety, letting the winery expand its range in future without redesigning the whole system. The labels now feel fresh and contemporary on the shelf, clearly standing out from the more traditional look of neighbouring wines. The same drop symbol also appears on the glass used at tastings, extending the identity beyond the label itself and making it part of the whole experience of tasting Soldo wine.",
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
        challenge:
          "Triglav osiguranje trebalo je seriju plakata za promociju dopunskog zdravstvenog osiguranja koji bi se prikazivali u poslovnicama Hrvatske pošte i partnerskih banaka diljem zemlje. Publika je izrazito raznolika po dobi i navikama, a poruka je morala u nekoliko sekundi privući pogled prolaznika u pošti te ga usmjeriti prema konkretnoj, jednostavnoj akciji — bez oslanjanja na dugo objašnjavanje uvjeta police. Dodatna složenost bila je uskladiti vizualni identitet više partnera na istom plakatu, a da poruka pritom ne izgubi na jasnoći.",
        approach:
          "Za svaku ciljanu skupinu osmislili smo plakat s toplom, autentičnom fotografijom (obitelj u prirodi, mlada osoba s kućnim ljubimcem, prijateljice u razgovoru uz kavu) i jasnom hijerarhijom poruke — pitanje koje odmah privlači pažnju, kratko objašnjenje pogodnosti u dvije-tri riječi te vidljiv poziv na akciju. Za digitalno educiraniju publiku dodali smo QR kod koji vodi izravno na WhatsApp kanal Triglav kluba, dok je za starije korisnike poziv na akciju ostao jednostavan: pitati na šalteru. Boje i logotip Triglava dosljedno smo zadržali u gornjem lijevom kutu svakog plakata, tako da brend ostaje prepoznatljiv bez obzira na motiv fotografije.",
        result:
          "Plakati su postavljeni na štandove i zidne nosače u poslovnicama diljem Hrvatske, nudeći istovremeno brz digitalni put do ugovaranja (skeniranje koda) i tradicionalan put preko šaltera, ovisno o publici koja prolazi pored njih. Time je Triglav dobio fleksibilan komunikacijski sustav koji se lako prilagođava novoj lokaciji, partneru ili ciljanoj skupini bez potrebe za redizajnom osnovnog koncepta. Suradnja s više partnera na istom plakatu — Hrvatskom poštom, Imex bankom — dodatno je zahtijevala da logotipi svih strana ostanu jasno vidljivi i ravnopravno istaknuti, bez da narušavaju čitljivost glavne poruke prema krajnjem korisniku.",
      },
      en: {
        challenge:
          "Triglav osiguranje needed a series of posters promoting supplementary health insurance, to be displayed in Croatian Post branches and partner banks across the country. The audience varies widely in age and habits, and the message had to catch a passer-by's eye within seconds and direct them to a concrete, simple action — without relying on a long explanation of policy terms. An added complexity was aligning multiple partners' visual identities on the same poster without losing message clarity.",
        approach:
          "For each target group we designed a poster with a warm, authentic photograph (a family outdoors, a young person with a pet, friends chatting over coffee) and a clear message hierarchy — a question that immediately grabs attention, a two-to-three-word benefit, and a visible call to action. For a more digitally savvy audience we added a QR code leading straight to the Triglav Club WhatsApp channel, while for older users the call to action stayed simple: ask at the counter. Triglav's colours and logo were kept consistently in the top-left corner of every poster, so the brand stays recognisable regardless of the photo's subject.",
        result:
          "The posters were placed on stands and wall mounts in branches across Croatia, offering both a quick digital path to signing up (scanning the code) and a traditional path via the counter, depending on the audience passing by. This gave Triglav a flexible communication system that easily adapts to a new location, partner or target group without redesigning the underlying concept. Collaborating with multiple partners on the same poster — Croatian Post, Imex Bank — further required every party's logo to stay clearly visible and equally prominent, without compromising the readability of the main message for the end user.",
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
        challenge:
          "Color trgovina iz Požege redovito priprema sezonske kataloge — proljetni sajam, slavonsko kolinje, sezonu grijanja, božićnu ponudu — no svako novo izdanje dosad se slagalo gotovo od nule, što je trošilo vrijeme i dovodilo do manjih nedosljednosti u izgledu od kataloga do kataloga. Trebao je predložak koji bi ubrzao pripremu svakog novog izdanja, a istovremeno zadržao prepoznatljiv identitet trgovine bez obzira na sezonu.",
        approach:
          "Razvili smo fleksibilan predložak s prepoznatljivom crveno-bijelom trakom brenda koja ostaje konstanta u svakom izdanju, dok se pozadina i ilustracije mijenjaju prema sezoni — proljetni cvjetovi i leptiri za proljetni sajam, tradicionalni motivi za slavonsko kolinje, snijeg i božićni ukrasi za blagdansku ponudu. Cijene i akcije istaknuli smo kroz dosljedan sustav oznaka (npr. „Top cijena”, postotci sniženja u žutim krugovima) koji kupac prepoznaje bez obzira na to je li riječ o alatu, kaminu ili božićnoj dekoraciji. Struktura stranica — logo i naslovna traka gore, proizvodi s cijenama u mreži ispod, uvjeti kupnje na rate pri dnu — ostala je identična u svakom izdanju, što ubrzava i pripremu i čitanje kataloga.",
        result:
          "Color trgovina danas za svaku sezonu i akciju brzo priprema novo izdanje kataloga po istom prokušanom obrascu, uz vizualni identitet koji kupci odmah prepoznaju bez obzira je li riječ o ljetnoj rasprodaji vrtnog alata ili božićnoj ponudi ukrasa. Dosljednost predloška smanjuje vrijeme pripreme svakog novog broja i osigurava da trgovina uvijek djeluje jednako uređeno, sezonu za sezonom. Kupci koji redovito prate ponudu tako lakše prepoznaju novi katalog čim ga vide, bez obzira dolazi li poštom, visi li na oglasnoj ploči trgovine ili se dijeli putem društvenih mreža.",
      },
      en: {
        challenge:
          "Color trgovina from Požega regularly prepares seasonal catalogues — a spring fair, the traditional winter pig-slaughter season, heating season, Christmas offers — but until now each new edition was built almost from scratch, wasting time and causing small inconsistencies from one catalogue to the next. They needed a template that would speed up preparing each new edition while keeping the store's identity recognisable regardless of season.",
        approach:
          "We developed a flexible template with the brand's recognisable red-and-white ribbon staying constant across every edition, while the background and illustrations change with the season — spring flowers and butterflies for the spring fair, traditional motifs for the winter pig-slaughter season, snow and Christmas ornaments for the holiday offer. We highlighted prices and promotions through a consistent labelling system (e.g. 'Top price', discount percentages in yellow circles) that shoppers recognise regardless of whether the product is a tool, a fireplace, or Christmas decorations. The page structure — logo and header band at the top, priced products in a grid below, instalment purchase terms at the bottom — stayed identical in every edition, speeding up both preparation and reading of the catalogue.",
        result:
          "Color trgovina now quickly prepares a new catalogue edition for every season and promotion using the same proven template, with a visual identity shoppers instantly recognise whether it's a summer garden-tool sale or a Christmas decoration offer. The template's consistency cuts preparation time for every new issue and ensures the store always looks equally well put-together, season after season. Regular customers find it easier to recognise the new catalogue the moment they see it, whether it arrives by post, hangs on the store's noticeboard, or is shared on social media.",
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
          "OPG Previšić iz Kutjeva proizvodi vina pod imenom „vino s otoka” i trebao je etikete koje bi tu priču porijekla odmah prenijele kupcu na polici, umjesto uobičajene, generičke etikete kakvu koriste mnogi manji obiteljski proizvođači. Izazov je bio uskladiti dvije različite sorte — Merlot i Graševinu — pod istim prepoznatljivim vizualnim krovom, a istovremeno zadovoljiti sve zakonski propisane podatke (podrijetlo, alkohol, količinu) bez da etiketa djeluje pretrpano.",
        approach:
          "Kreirali smo zlatni pečatni logotip s inicijalom P upisanim u kićeni monogram i natpisom „Previšić — vino s otoka”, koji etiketi daje dojam tradicije, autentičnosti i pažljivo njegovanog obiteljskog nasljeđa. Za crveno vino odabrali smo tamnocrvenu podlogu s ilustracijom lišća vinove loze koja podsjeća na sam vinograd, dok je bijelo vino dobilo tamnosivu podlogu s motivom grožđa — dovoljno različito da se sorte razlikuju na prvi pogled, ali dovoljno slično da je odmah jasno da je riječ o istoj vinariji. Sve zakonski obavezne podatke smjestili smo na stražnju etiketu u urednom, čitljivom rasporedu, tako da prednja strana ostaje posvećena isključivo priči i identitetu.",
        result:
          "Nastao je prepoznatljiv sustav etiketa koji jasno razlikuje sorte, a priča o vinu s otoka postala je vizualno utkana u sam dizajn umjesto da ostane tek rečenica na deklaraciji. Kupac koji uzme bocu Previšić vina u ruke odmah dobiva dojam pažljivo vođenog, autentičnog obiteljskog proizvoda, što vinariji pomaže da se izdvoji na polici prepunoj slično cjenovno pozicioniranih vina. Zlatni pečat ostaje čitljiv i prepoznatljiv čak i kad se etiketa umanji na fotografiji za internetsku prodaju ili društvene mreže, što je danas jednako važno kao i dojam na fizičkoj polici.",
      },
      en: {
        challenge:
          "OPG Previšić from Kutjevo produces wine under the name 'vino s otoka' (wine from the island) and needed labels that would immediately convey that origin story to buyers on the shelf, instead of the generic label many smaller family producers use. The challenge was aligning two different varieties — Merlot and Graševina — under the same recognisable visual roof, while still meeting all legally required information (origin, alcohol content, volume) without the label feeling cluttered.",
        approach:
          "We created a gold stamp-style logotype with the initial P set inside an ornate monogram and the wording 'Previšić — vino s otoka', giving the label a sense of tradition, authenticity and carefully preserved family heritage. For the red wine we chose a dark red background with an illustration of vine leaves evoking the vineyard itself, while the white wine got a dark grey background with a grape motif — different enough that the varieties are told apart at a glance, yet similar enough that it's immediately clear they're from the same winery. All legally required details were placed on the back label in a tidy, legible layout, leaving the front dedicated purely to the story and identity.",
        result:
          "The result is a recognisable label system that clearly differentiates the varieties, with the island-wine story now visually woven into the design itself rather than remaining just a line on the declaration. A buyer picking up a bottle of Previšić wine immediately gets the impression of a carefully run, authentic family product, helping the winery stand out on a shelf crowded with similarly priced wines. The gold stamp stays legible and recognisable even when the label is shrunk down in a photo for online sales or social media, which matters today just as much as the impression made on the physical shelf.",
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
          "Vinarija Mitrović trebala je logotip koji bi na prvi pogled komunicirao vinogradarsku tradiciju, a dotad nije imala nikakav formalni vizualni identitet za nastup prema kupcima, ugostiteljima i partnerima na sajmovima. Bez prepoznatljivog znaka, svaka nova vizitka ili etiketa morala bi se osmišljavati iznova, bez zajedničke niti koja bi gradila prepoznatljivost vinarije kroz vrijeme. Trebao je nastati znak dovoljno postojan da posluži kao temelj za sve buduće materijale vinarije, ne samo za trenutnu vizitku.",
        approach:
          "Dizajnirali smo elegantan logotip sa stiliziranim inicijalom M postavljenim iznad ilustracije loze s grozdovima, izveden u toploj zlatnoj boji na tamnoj podlozi koja odiše dojmom vinarija duže tradicije. Tipografiju naziva „Mitrović vinarija” birali smo u klasičnom, serifnom stilu koji upotpunjuje osjećaj postojanosti, dok smo zlatnu boju zadržali kao jedini akcent kako bi logotip ostao čitljiv i u sitnijim primjenama poput čepa boce ili kutije za poklon. Kompoziciju smo namjerno centrirali i simetrično uravnotežili, tako da znak jednako dobro funkcionira otisnut na vizitki kao i utisnut u vosak na poklon pakiranju.",
        result:
          "Vinarija Mitrović sada raspolaže reprezentativnim logotipom spremnim za primjenu na vizitkama, budućim etiketama i promotivnim materijalima, s jasnim vizualnim smjerom za sve daljnje materijale koje vinarija bude razvijala. Zlatno-crna kombinacija odmah signalizira premium pozicioniranje, dajući vinariji čvrst temelj za izgradnju prepoznatljivosti na sajmovima i u izravnoj prodaji. Kada vinarija bude proširivala asortiman na nove sorte, isti će vizualni jezik moći poslužiti kao osnova za etikete, tako da svaki novi proizvod ostane prepoznatljivo dio iste obiteljske priče, a ne izgleda kao slučajan dodatak asortimanu. Vinarija tako više ne mora svaki nastup graditi od nule, već nadograđuje već postavljen temelj.",
      },
      en: {
        challenge:
          "Vinarija Mitrović needed a logo that would communicate winemaking tradition at first glance, having had no formal visual identity until then for presenting itself to buyers, restaurateurs and partners at fairs. Without a recognisable mark, every new business card or label would have to be designed from scratch each time, with no common thread building the winery's recognition over time. The mark needed to be durable enough to serve as the foundation for all the winery's future materials, not just the current business card.",
        approach:
          "We designed an elegant logo with a stylised initial M set above an illustration of a vine with grape clusters, rendered in warm gold on a dark background that evokes a winery with a longer tradition. We chose a classic serif typeface for the name 'Mitrović vinarija', reinforcing a sense of permanence, while keeping gold as the only accent so the logo stays legible even at small sizes, such as on a bottle stopper or gift box. We deliberately centred and symmetrically balanced the composition, so the mark works equally well printed on a business card as it does stamped into wax on a gift package.",
        result:
          "Vinarija Mitrović now has a representative logo ready for use on business cards, future labels and promotional materials, with a clear visual direction for everything the winery develops going forward. The gold-and-black combination immediately signals a premium position, giving the winery a solid foundation for building recognition at fairs and in direct sales. As the winery expands its range with new varieties, the same visual language will be able to serve as the basis for their labels, so every new product stays recognisably part of the same family story rather than looking like a random addition to the range. The winery no longer has to build every appearance from scratch, but builds on a foundation already in place.",
      },
    },
  },
  {
    slug: "caffe-bar-vanilla",
    name: "Caffe Bar Vanilla",
    category: { hr: "Dizajn cjenika", en: "Menu Design", de: "Speisekartendesign" },
    img: "/portfolio/caffe-bar-vanilla.jpg",
    gallery: ["/portfolio-full/caffe-bar-vanilla/01-dizajn-cjenika.jpg"],
    galleryAlt: ["Božićni cjenik Caffe bara Vanilla s ilustracijama krumpirića"],
    galleryFocus: { 0: "top" },
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
          "Dopa Projekt djeluje u elektroinstalacijskoj i energetskoj struci i trebao je logotip koji bi jasno komunicirao djelatnost tvrtke već na prvi pogled, a istovremeno djelovao suvremeno i pouzdano prema klijentima koji povjeravaju elektroinstalacije stručnjacima. Bez jasne vizualne poveznice s energijom i strujom, naziv sam po sebi ne bi dočarao čime se tvrtka bavi. Trebalo je pronaći simbol koji je istovremeno jasan laiku i dovoljno moderan da ne djeluje kao zastarjeli tehnički piktogram.",
        approach:
          "Osmislili smo logotip u obliku stiliziranog slova D unutar kojeg se nalazi munja izvedena u prijelazu boja od plave prema narančastoj i crvenoj — vizualna metafora struje i energije koja odmah signalizira djelatnost tvrtke. Podebljana, samopouzdana tipografija naziva „Dopa Projekt” postavljena je ispod simbola u plavoj boji, tako da cijeli logotip funkcionira i kao samostalan znak i kao puni naziv s oznakom, ovisno o prostoru na kojem se primjenjuje. Prijelaz boja unutar munje namjerno smo zadržali živim i toplim nasuprot hladnoj plavoj konturi slova D, kako bi kontrast dviju paleta odmah privukao pogled i na sitnijim primjenama poput naljepnice na alatu.",
        result:
          "Dopa Projekt danas ima jasan, odmah prepoznatljiv simbol koji komunicira djelatnost tvrtke bez dodatnog objašnjenja, spreman za primjenu na vozilima, radnoj odjeći, poslovnoj dokumentaciji i gradilištima. Živa kombinacija boja munje osigurava da logotip ostane uočljiv i na udaljenost, što je važno za tvrtku čija vozila i oprema svakodnevno cirkuliraju terenom. Klijenti tvrtku sada prepoznaju po istom simbolu bez obzira susreću li se s njom na ponudi, na kacigi radnika na terenu ili na naljepnici službenog vozila, što gradi dojam ozbiljne i organizirane firme.",
      },
      en: {
        challenge:
          "Dopa Projekt operates in electrical installation and energy, and needed a logo that would clearly communicate the company's field at first glance while still feeling contemporary and trustworthy to clients entrusting their electrical work to professionals. Without a clear visual link to energy and electricity, the name alone wouldn't convey what the company does. We needed to find a symbol that's clear to a layperson while modern enough not to feel like a dated technical pictogram.",
        approach:
          "We designed a logo shaped like a stylised letter D containing a lightning bolt rendered in a gradient from blue through orange to red — a visual metaphor for electricity and energy that immediately signals the company's field. Bold, confident typography for the name 'Dopa Projekt' sits below the symbol in blue, so the whole logo works both as a standalone mark and as a full name with symbol, depending on where it's applied. We deliberately kept the colour gradient inside the lightning bolt vivid and warm against the cool blue outline of the letter D, so the contrast between the two palettes catches the eye immediately even in smaller applications like a sticker on a tool.",
        result:
          "Dopa Projekt now has a clear, instantly recognisable symbol that communicates its field without further explanation, ready for use on vehicles, workwear, business documentation and job sites. The vivid colour combination of the lightning bolt keeps the logo visible even from a distance, which matters for a company whose vehicles and equipment circulate through the field every day. Clients now recognise the company by the same symbol whether they encounter it in a quote, on a worker's helmet on site, or on a company vehicle's sticker, building an impression of a serious, well-organised firm.",
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
          "Udruga vinogradara i vinara „Igrač” okuplja lokalne proizvođače vina i trebala je logotip koji bi njihovu zajedničku tradiciju vinogradarstva predstavio jednim prepoznatljivim simbolom, primjenjivim jednako na svečanim manifestacijama kao i na jednostavnim internim dokumentima udruge. Uz to je bilo potrebno osigurati i crno-bijelu verziju za situacije kad tisak u boji nije moguć ili isplativ. Simbol je trebao odražavati zajedništvo članova, a ne izgledati kao logotip pojedinačnog komercijalnog proizvođača.",
        approach:
          "Dizajnirali smo kružni pečatni logotip s ilustracijom klijeti — tradicionalnog vinskog podruma — i dvije ruke koje se nazdravljaju čašama vina u prednjem planu, uokviren punim nazivom udruge duž ruba kruga. Zelenu boju odabrali smo kao simbol vinograda i prirode, dok smo paralelno razvili i monokromatsku, linijsku verziju istog motiva namijenjenu crno-bijelom tisku, tako da udruga ne mora birati između vjernosti izvornom dizajnu i praktičnosti tiska. Ilustraciju klijeti postavili smo u pozadinu prizora, dok su ruke s čašama u prvom planu, kako bi prizor odmah čitao kao gostoljubivost i zajedništvo, a ne samo kao tehnički prikaz zgrade.",
        result:
          "Udruga danas raspolaže toplim, prepoznatljivim simbolom zajedništva i tradicije koji koristi na dokumentima, promotivnim materijalima i pri predstavljanju na vinskim manifestacijama i sajmovima. Dostupnost dviju verzija — u boji i crno-bijele — omogućuje dosljednu primjenu bez obzira na format ili proračun konkretnog materijala koji se tiska. Simbol klijeti i nazdravljanja postao je vizualni potpis udruge prepoznatljiv članovima i posjetiteljima manifestacija, jasno komunicirajući da iza svake boce ili štanda stoji zajednica lokalnih proizvođača, a ne pojedinačni brend, što udruzi olakšava zajednički nastup prema javnosti.",
      },
      en: {
        challenge:
          "The winegrowers' and winemakers' association 'Igrač' brings together local wine producers and needed a logo that would represent their shared winegrowing tradition in a single recognisable symbol, suitable equally for formal events and simple internal association documents. A black-and-white version was also needed for situations where colour printing isn't possible or cost-effective. The symbol needed to reflect the members' togetherness rather than look like the logo of an individual commercial producer.",
        approach:
          "We designed a circular stamp-style logo with an illustration of a traditional wine cellar and two hands toasting with glasses of wine in the foreground, framed by the association's full name along the circle's edge. We chose green as a symbol of vineyards and nature, while also developing a monochrome, line-art version of the same motif for black-and-white printing, so the association never has to choose between fidelity to the original design and print practicality. We placed the cellar illustration in the background of the scene, with the hands and glasses in front, so the image reads immediately as hospitality and togetherness rather than just a technical drawing of a building.",
        result:
          "The association now has a warm, recognisable symbol of togetherness and tradition that it uses on documents, promotional materials and at wine events and fairs. Having two versions available — colour and black-and-white — allows consistent use regardless of the format or budget of the specific material being printed. The cellar-and-toast symbol has become the association's visual signature, recognisable to members and event visitors alike, clearly communicating that behind every bottle or stand stands a community of local producers rather than an individual brand, making it easier for the association to present a united face to the public.",
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
    },
  },
];

export const FEATURED_SLUGS = ["bilokapic-destilerija", "vismotus", "platinum-grupa", "vinarija-knezevic"];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
