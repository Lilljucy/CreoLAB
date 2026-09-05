import type { Locale } from "./i18n";

type ProjectStory = { challenge: string; approach: string; result: string };

export type Project = {
  slug: string;
  name: string;
  category: Record<Locale, string>;
  img: string;
  gallery: string[];
  galleryAlt: string[];
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
    story: {
      hr: {
        challenge:
          "Vinarija Soldo proizvodi Graševinu i rosé vino i trebala je jedinstven identitet koji bi povezao obje linije, a istovremeno djelovao svježije i modernije od tradicionalnih, često pretrpanih vinarijskih etiketa punih ornamenata i sitnog teksta. Cilj je bio da etiketa bude prepoznatljiva i na udaljenosti od police, ne tek izbliza. Trebalo je i osigurati da se identitet lako širi na buduće sorte bez potrebe za redizajnom od nule svaki put.",
        approach:
          "Za srce identiteta osmislili smo minimalistički simbol kapi vina koja se pretače iz obrisa čaše — jednostavan, geometrijski oblik koji odmah asocira na degustaciju i užitak u vinu. Boju smo prilagodili svakoj liniji: zlatnu za Graševinu, koja naglašava toplinu bijelog vina, i ružičastu za rosé, u skladu s bojom samog pića. Etikete smo namjerno svijetlile do gole nužne informacije — naziv, sorta, oznaka kvalitete — kako bi kompozicija ostala čista i čitljiva čak i s nekoliko metara udaljenosti, za razliku od gusto ispisanih etiketa konkurencije. Tipografiju naziva „Soldo” izveli smo u tankom, elegantnom rezu koji na etiketi ostavlja dovoljno praznog prostora da simbol kapi ostane vizualno središte cijele kompozicije.",
        result:
          "Nastao je moderan, prepoznatljiv identitet u kojem simbol kapi vina djeluje kao zajednički vizualni potpis neovisno o boji ili sorti, što vinariji omogućuje jednostavno širenje asortimana u budućnosti bez potrebe za redizajnom cijelog sustava. Etikete danas na polici djeluju svježe i suvremeno, jasno se izdvajajući od tradicionalnijeg izgleda okolnih vina. Isti simbol kapi pojavljuje se i na čaši korištenoj pri degustacijama, čime se identitet proteže izvan same etikete i postaje dio cjelokupnog doživljaja kušanja vina Soldo.",
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
    },
  },
  {
    slug: "caffe-bar-vanilla",
    name: "Caffe Bar Vanilla",
    category: { hr: "Dizajn cjenika", en: "Menu Design", de: "Speisekartendesign" },
    img: "/portfolio/caffe-bar-vanilla.jpg",
    gallery: ["/portfolio-full/caffe-bar-vanilla/01-dizajn-cjenika.jpg"],
    galleryAlt: ["Božićni cjenik Caffe bara Vanilla s ilustracijama krumpirića"],
    story: {
      hr: {
        challenge:
          "Caffe bar Vanilla trebao je blagdanski, sezonski cjenik koji bi na društvenim mrežama i u samom lokalu privukao pažnju gostiju na prigodnu zimsku ponudu jela i pića. Standardni, tekstualni cjenik teško privlači pažnju u moru sličnih objava ugostiteljskih objekata tijekom prosinca, pa je trebalo osmisliti nešto vizualno pamtljivije od uobičajenog popisa stavki i cijena.",
        approach:
          "Osmislili smo topao, ilustrirani dizajn s maskotom simpatičnog „krumpirića” koji u božićnom ugođaju nudi jela iz ponude, čime je cjenik dobio prepoznatljiv, igriv lik umjesto bezličnog popisa. Ponudu smo jasno podijelili u kategorije — hranu, pića i posebnu liniju „spudsi” temeljenu na krumpiru — uz prazničke motive poput snježnih pahulja i božićnih ukrasa usklađenih s tamnozelenom bojom brenda Vanilla. Cijene i nazivi jela ostali su čitljivi i istaknuti unatoč bogatoj ilustraciji, tako da dizajn zabavlja, ali ne otežava snalaženje gosta koji želi brzo naručiti. Dvije verzije cjenika — jedna za jela, druga za „spudse” — dizajnirali smo kao vizualnu cjelinu koja se prirodno nadovezuje jedna na drugu kad se koriste zajedno u lokalu.",
        result:
          "Nastao je prepoznatljiv, dopadljiv cjenik koji je gostima olakšao snalaženje u sezonskoj ponudi, a maskota krumpirića dala je Caffe baru Vanilla igrivu, pamtljivu notu koja ga izdvaja od uobičajenih, čisto tekstualnih cjenika drugih lokala. Takav format lako je ponovno iskoristiti i za buduće sezonske akcije uz izmjenu tematike i zadržavanje istog maskotnog lika. Gosti koji su cjenik vidjeli na društvenim mrežama lokal prepoznaju i pri fizičkom dolasku, jer se isti lik i paleta boja ponavljaju na stolu, čime se digitalna objava izravno prenosi u iskustvo u prostoru.",
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
          "Adria Motors, salon polovnih i kolekcionarskih automobila, trebao je logotip koji bi već na prvi pogled komunicirao luksuz, brzinu i pouzdanost — vrijednosti koje kupci očekuju prije nego uopće sjednu za volan izloženog vozila. Prostor salona s pažljivo osvijetljenim vitrinama zahtijevao je znak dovoljno upečatljiv da funkcionira kao istaknuti element interijera, ne samo kao logo na papiru. Dodatan zahtjev bio je da se isti znak jednako dobro snađe u tisku, na vozilima i u trodimenzionalnoj izvedbi na zidu salona.",
        approach:
          "Kreirali smo logotip koji siluetu sportskog automobila stapa sa stiliziranim slovom A, u crno-zlatnoj kombinaciji koja odiše premium dojmom svojstvenim salonima kolekcionarskih vozila. Oblik smo oblikovali tako da ostane prepoznatljiv i u trodimenzionalnoj izvedbi, jer je znak bio namijenjen izradi u fizičkim materijalima poput metala ili drva za postavljanje na zid izložbenog prostora, uz vitrine s modelima automobila.",
        result:
          "Adria Motors danas ima upečatljiv logotip istaknut na zidu salona, uz police s kolekcionarskim modelima automobila, gradeći dojam ozbiljnog i premium prodajnog prostora već na samom ulazu. Crno-zlatna kombinacija dosljedno prati identitet kroz fizički prostor salona, pojačavajući dojam vrijednosti prije nego kupac uopće priđe prvom izloženom vozilu. Isti se znak jednako dobro snalazi i u sitnijim primjenama — na katalozima vozila, digitalnim oglasima i budućoj signalizaciji — što salonu daje jedinstven vizualni jezik za sve kanale komunikacije s kupcima, bez obzira grade li dojam uživo u prostoru ili online. Takva dosljednost dodatno pojačava dojam ozbiljnog, uređenog poslovanja koji kupci očekuju od prodavača kolekcionarskih vozila.",
      },
    },
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
