export type Locale = "hr" | "en" | "de";
export const LOCALES: Locale[] = ["hr", "en", "de"];
export const DEFAULT_LOCALE: Locale = "hr";

export function isLocale(value: string): value is Locale {
  return (LOCALES as string[]).includes(value);
}

type FaqItem = {
  q: string;
  intro?: string;
  p?: string;
  listType?: "ul" | "ol";
  items?: { label: string; text: string }[];
};

type Dict = {
  nav: {
    home: string;
    about: string;
    work: string;
    contact: string;
    cta: string;
    whatsappLabel: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    left: string;
    right: string;
    copy: string;
    cta: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    mission: { title: string; text: string };
    vision: { title: string; text: string };
    values: { title: string; items: string[] };
  };
  services: {
    eyebrow: string;
    heading: string;
    graphic: { title: string; desc: string };
    web: { title: string; desc: string };
    labels: { title: string; desc: string };
  };
  stats: { eyebrow: string; heading: string; completed: string; services: string; personalized: string; response: string };
  process: {
    eyebrow: string;
    heading: string;
    steps: { title: string; desc: string }[];
  };
  portfolioPreview: { eyebrow: string; heading: string; viewAll: string; viewCasestudy: string; bookCall: string };
  servicesBand: { heading: string; more: string; items: { title: string; desc: string }[] };
  faq: { eyebrow: string; heading: string; sub: string; items: FaqItem[] };
  footer: {
    ctaHeadingPlain: string;
    ctaHeadingGradient: string;
    copyrightSuffix: string;
    privacy: string;
    terms: string;
    igLabel: string;
    fbLabel: string;
  };
  cookie: { text: string; privacyLinkText: string; reject: string; accept: string };
  contact: {
    ivaTitle: string;
    lukaTitle: string;
    mailBtn: string;
    mobileBtn: string;
    hours: string;
    hoursValue: string;
    addressTitle: string;
    follow: string;
    followDesc: string;
    talkToUs: string;
    roleGraphic: string;
    roleWeb: string;
    email: string;
    call: string;
    address: string;
  };
  pages: {
    portfolio: { eyebrow: string; h1Plain: string; h1Gradient: string; sub: string };
    kontakt: { eyebrow: string; h1Plain: string; h1Gradient: string; sub: string };
  };
  meta: {
    home: { title: string; description: string };
    portfolio: { title: string; description: string };
    kontakt: { title: string; description: string };
    privatnost: { title: string; description: string };
    uvjeti: { title: string; description: string };
  };
  backToPortfolio: string;
  ctaProject: string;
  portfolioDetail: { challenge: string; approach: string; result: string; prev: string; next: string };
  contactBand: Record<
    "home" | "portfolio" | "graficki" | "web" | "etikete" | "kontakt" | "project",
    { heading: string; lede: string }
  >;
  trust: { t: string; d: string }[];
  compare: { eyebrow: string; heading: string; us: string; them: string; rows: string[] };
  langStat: string;
  cluster: { heading: string; p: string };
  heroSimple: {
    graficki: { label: string; h1: string; lede: string; cta: string };
    web: { label: string; h1: string; lede: string; cta: string };
    etikete: { label: string; h1: string; lede: string; cta: string };
    kontakt: { label: string; h1: string; lede: string };
  };
  servicePage: {
    includesGraficki: [string, string][];
    includesWeb: [string, string][];
    includesEtikete: [string, string][];
    worksEyebrow: string;
    worksHeadingGraficki: string;
    worksHeadingWeb: string;
    worksHeadingEtikete: string;
    workP: string;
    surveyCaption: string;
    faqEyebrow: string;
    faqHeading: string;
    faqsGraficki: { q: string; a: string }[];
    faqsWeb: { q: string; a: string }[];
    faqsEtikete: { q: string; a: string }[];
  };
};

const DICT: Record<Locale, Dict> = {
  hr: {
    nav: {
      home: "Početna",
      about: "O nama",
      work: "Radovi",
      contact: "Kontakt",
      cta: "Zatražite ponudu",
      whatsappLabel: "Kontaktirajte nas putem WhatsAppa",
      openMenu: "Otvorite izbornik",
      closeMenu: "Zatvorite izbornik",
    },
    hero: {
      left: "Jači<br />nastup.",
      right: "Jasniji<br />brend.",
      copy: "Spajamo kreativni dizajn i strateško razmišljanje kako bismo obrtima i tvrtkama pomogli izgraditi brend kojem se vraćaju kupci i partneri.",
      cta: "Zakažite razgovor",
    },
    about: {
      eyebrow: "O nama",
      heading: "O CreoLabu – vaš partner za vizualni identitet i digitalni marketing",
      paragraphs: [
        "CreoLab iz Požege posvećen je stvaranju jakih, prepoznatljivih i modernih brendova. Vjerujemo da dobar grafički dizajn i funkcionalna web stranica nisu luksuz, već temeljan alat za rast svakog poslovanja.",
        "Bilo da krećete od nule i trebate izradu logotipa i vizualnog identiteta, želite redizajn postojećeg loga kako bi pratio moderne standarde, ili trebate izradu responzivne web stranice koja pretvara posjetitelje u kupce – tu smo da vaše ideje pretvorimo u stvarnost.",
        "Naš pristup spaja čistu estetiku, strategiju i jasne ciljeve. Nudimo cjelovitu uslugu – od ideje i dizajna ambalaže, pripreme za tisak, pa sve do vođenja društvenih mreža (Facebook i Instagram oglasi). Surađujemo s poduzetnicima, obrtima i tvrtkama u Požegi, Slavoniji i diljem Hrvatske koji žele napraviti korak dalje i istaknuti se na tržištu.",
      ],
      mission: {
        title: "Naša misija",
        text: "Pružiti poduzetnicima cjelovita dizajn i marketing rješenja – od izrade prepoznatljivog logotipa do optimizirane web stranice – koja jasno komuniciraju vrijednost vaših usluga i privlače prave klijente.",
      },
      vision: {
        title: "Naša vizija",
        text: "Postati vodeći partner za grafički dizajn i digitalni marketing malim i srednjim tvrtkama koje traže pouzdanu, brzu i posvećenu uslugu usmjerenu na stvarne rezultate.",
      },
      values: {
        title: "Naši ciljevi i vrijednosti",
        items: [
          "Funkcionalan i moderan dizajn: stvaramo vizualni identitet i redizajn loga koji privlači pažnju i ostavlja profesionalan dojam.",
          "Brza i jednostavna komunikacija: poštivanje rokova, jasni dogovori i personaliziran pristup svakom projektu.",
          "Sve na jednom mjestu: od pripreme za tisak i dizajna ambalaže do web dizajna i upravljanja društvenim mrežama.",
        ],
      },
    },
    services: {
      eyebrow: "Naše usluge",
      heading: "Sve što vašem brendu treba.",
      graphic: { title: "Grafički dizajn", desc: "Logo, identitet, tisak i ambalaža." },
      web: { title: "Web dizajn", desc: "Moderne, brze i responzivne web stranice." },
      labels: { title: "Dizajn etiketa", desc: "Etikete i ambalaža koje prodaju same." },
    },
    stats: {
      eyebrow: "U brojkama",
      heading: "Rezultati koji govore sami za sebe.",
      completed: "Završenih projekata",
      services: "Usluge pod jednim krovom",
      personalized: "Personaliziran pristup",
      response: "Vrijeme odgovora na upit",
    },
    process: {
      eyebrow: "Kako radimo",
      heading: "Jasan proces od ideje do rezultata.",
      steps: [
        { title: "Upoznavanje", desc: "Razgovaramo o vašem brendu, ciljevima i publici." },
        { title: "Koncept", desc: "Predlažemo kreativni koncept i strategiju." },
        { title: "Izrada i dorada", desc: "Dizajniramo i pripremamo sadržaj uz vaše povratne informacije." },
        { title: "Lansiranje", desc: "Objavljujemo projekt i pratimo rezultate." },
      ],
    },
    portfolioPreview: {
      eyebrow: "Portfolio",
      heading: "Nekoliko izdvojenih radova",
      viewAll: "Pogledajte sav portfolio",
      viewCasestudy: "Pogledajte rad",
      bookCall: "Zakažite poziv",
    },
    servicesBand: {
      heading: "Naše usluge",
      more: "Saznajte više",
      items: [
        { title: "Grafički dizajn", desc: "Logotip, vizualni identitet i priprema za tisak koji jednako dobro djeluju na vizitki i na fasadi." },
        { title: "Izrada web stranica", desc: "Brze, responzivne stranice s SEO temeljima ugrađenima od prvog dana rada, ne dodanima naknadno." },
        { title: "Dizajn etiketa", desc: "Etikete koje na polici nose priču vinarije, od zlatotiska do zakonski obveznih podataka." },
      ],
    },
    faq: {
      eyebrow: "Česta pitanja",
      heading: "Odgovori na najčešća pitanja.",
      sub: "Pronađite odgovore na najčešća pitanja o našem procesu, uslugama i suradnji.",
      items: [
        {
          q: "Koje usluge nudite u sklopu grafičkog dizajna, weba i društvenih mreža?",
          intro: "Nudimo cjelovita digitalna i vizualna rješenja:",
          listType: "ul",
          items: [
            { label: "Grafički dizajn i branding", text: "izrada logotipa, knjige standarda, tiskani materijali te specijalizirani branding vozila i uniformi." },
            { label: "Društvene mreže i sadržaj", text: "strateško vođenje profila, vođenje oglasnih kampanja (Ads) te foto i video produkcija na terenu." },
            { label: "Web dizajn", text: "izrada modernih i funkcionalnih web stranica prilagođenih vašem poslovanju." },
          ],
        },
        {
          q: "Nudite li gotove pakete ili radite ponude na upit?",
          p: "Svakom klijentu pristupamo individualno. Definirane strukture usluga služe nam kao smjernica, ali je svaka ponuda 100% personalizirana i prilagođena vašem budžetu, ciljevima i potrebama.",
        },
        {
          q: "Koliko prosječno traje proces izrade?",
          p: "Okvirni rokovi ovise o složenosti projekta. Izrada logotipa ili vizualnog identiteta obično traje od nekoliko radnih dana do dva tjedna. Rokovi za izradu web stranice definiraju se uvodnim dogovorom.",
        },
        {
          q: "Kako izgleda proces suradnje nakon što vam se javim?",
          intro: "Naš proces je transparentan i podijeljen u 4 jasna koraka:",
          listType: "ol",
          items: [
            { label: "Upoznavanje i analiza", text: "definiranje vaših ciljeva i potreba." },
            { label: "Koncept", text: "razvoj i predstavljanje početnih vizualnih ideja." },
            { label: "Izrada i dorada", text: "finiziranje dizajna kroz definiran broj izmjena." },
            { label: "Lansiranje", text: "isporuka finalnih datoteka i puštanje projekta u rad." },
          ],
        },
        {
          q: "Što ako ne budem zadovoljan/na prvim predloženim konceptom?",
          p: "Prije početka rada radimo detaljnu analizu kako bismo smanjili mogućnost promašaja vizije. Ako prvi koncept ne ispuni očekivanja, kroz otvorenu komunikaciju dorađujemo rješenje ili izrađujemo novi koncept dok ne dođemo do željene vizije.",
        },
        {
          q: "Koliko je rundi izmjena (revizija) uključeno u cijenu?",
          p: "Broj izmjena definira se službenom ponudom. Standardno uključujemo od 1 do 4 kruga revizija ovisno o opsegu projekta, dok za najopsežnije projekte nudimo neograničen broj dorada do potpunog zadovoljstva.",
        },
        {
          q: "Koji su vaši uvjeti plaćanja za projekte?",
          p: "Radimo po principu uplate akontacije (pologa) prije početka izrade projekta. Preostali iznos uplaćuje se po odobrenju finalnog rješenja, a prije slanja izvoznih datoteka i lansiranja weba.",
        },
        {
          q: "U kojim formatima dobivam gotove dizajnerske materijale?",
          intro: "Isporučujemo kompletne materijale spremne za sve namjene:",
          listType: "ul",
          items: [
            { label: "Za tisak", text: "vektorski formati visoke kvalitete s tehničkom pripremom (PDF, AI, EPS)." },
            { label: "Za digitalno korištenje", text: "visoka rezolucija u PNG (prozirna pozadina) i JPG formatima za web i mreže." },
          ],
        },
        {
          q: "Kome pripadaju autorska prava na dizajn nakon završetka projekta?",
          p: "Nakon što je račun u potpunosti isplaćen, sva autorska prava i puno vlasništvo nad odobrenim finalnim dizajnom i materijalima prelaze na vas.",
        },
        {
          q: "Moram li sam/a osigurati tekstove i slike ili vi radite i taj dio?",
          p: "Nudimo potpunu uslugu. Ako nemate spremne materijale, mi možemo preuzeti pisanje tekstova (SEO copywriting) te terensko fotografiranje i video snimanje. Ako već imate spremne materijale, rado ćemo ih uklopiti.",
        },
        {
          q: "Radite li redizajn postojećeg logotipa i osvježavanje brenda?",
          p: "Da! Ako je vaš postojeći logo zastario ili više ne predstavlja vašu tvrtku na pravi način, nudimo profesionalan redizajn logotipa. Zadržavamo prepoznatljivost vašeg brenda uz modernizaciju oblika, tipografije i boja, čineći ga spremnim za sve digitalne i tiskane medije.",
        },
      ],
    },
    footer: {
      ctaHeadingPlain: "Spremni pokrenuti ",
      ctaHeadingGradient: "svoj projekt?",
      copyrightSuffix: "Sva prava pridržana.",
      privacy: "Politika privatnosti",
      terms: "Uvjeti korištenja",
      igLabel: "CREOLAB na Instagramu",
      fbLabel: "CREOLAB na Facebooku",
    },
    cookie: {
      text: "Koristimo kolačiće Google Analyticsa za razumijevanje posjećenosti stranice — postavljaju se samo uz vaš pristanak. Više informacija u",
      privacyLinkText: "Politici privatnosti",
      reject: "Samo nužni",
      accept: "Prihvaćam",
    },
    contact: {
      ivaTitle: "Kontakt za grafički dizajn i social media marketing",
      lukaTitle: "Kontakt za web dizajn",
      mailBtn: "Mail",
      mobileBtn: "Mobitel",
      hours: "Radno vrijeme",
      hoursValue: "Pon – Pet: 08:00 – 16:00",
      addressTitle: "Adresa",
      follow: "Pratite nas",
      followDesc: "Pogledajte naše najnovije radove i objave na društvenim mrežama.",
      talkToUs: "Razgovarajmo",
      roleGraphic: "Grafički dizajn",
      roleWeb: "Web razvoj",
      email: "Email",
      call: "Pozovi",
      address: "Marije Jurić Zagorke 9, 34000 Požega",
    },
    pages: {
      portfolio: {
        eyebrow: "Portfolio",
        h1Plain: "Radovi koji ",
        h1Gradient: "govore sami za sebe.",
        sub: "Stvarni projekti za stvarne klijente iz cijele Hrvatske — od logo dizajna i brendiranja do ambalaže i dizajna etiketa.",
      },
      kontakt: {
        eyebrow: "Kontakt",
        h1Plain: "Popričajmo o ",
        h1Gradient: "vašem projektu.",
        sub: "Najbrži način da nas dobijete jest izravno putem emaila, telefona ili WhatsAppa. Javite nam se s nekoliko riječi o vašem projektu.",
      },
    },
    meta: {
      home: {
        title: "Grafički dizajner i izrada web stranica | CreoLab Požega",
        description:
          "CreoLab iz Požege radi logotipe, vizualni identitet, izradu web stranica i vođenje društvenih mreža za obrte i tvrtke. Zatražite besplatnu ponudu.",
      },
      portfolio: {
        title: "Portfolio: logo dizajn i brendiranje | CreoLab Požega",
        description:
          "Pogledajte 16 projekata CreoLaba: logotipi, vizualni identiteti, ambalaža, etikete i web stranice za vinarije, obrte i tvrtke diljem Hrvatske.",
      },
      kontakt: {
        title: "Kontakt | Grafički dizajn i izrada weba, Požega",
        description:
          "Kontaktirajte CreoLab u Požegi za ponudu: grafički dizajn, izrada web stranica i društvene mreže. Nazovite +385 91 979 8969 ili pišite na email.",
      },
      privatnost: {
        title: "Politika privatnosti — CREOLAB",
        description:
          "Politika privatnosti i kolačića CREOLAB-a — koje podatke prikupljamo, kako ih koristimo i koja su vaša prava.",
      },
      uvjeti: {
        title: "Uvjeti korištenja — CREOLAB",
        description: "Uvjeti korištenja web stranice i usluga CREOLAB-a.",
      },
    },
    backToPortfolio: "Natrag na portfolio",
    ctaProject: "Pokrenimo sličan projekt",
    portfolioDetail: {
      challenge: "Izazov",
      approach: "Pristup",
      result: "Rezultat",
      prev: "Prethodni projekt",
      next: "Sljedeći projekt",
    },
    contactBand: {
      home: { heading: "Imate ideju? Pretvorimo je u brend.", lede: "Javite nam se izravno — odgovaramo osobno, bez posrednika." },
      portfolio: { heading: "Vaš projekt može biti sljedeći.", lede: "Recite nam par riječi o brendu i idemo dalje zajedno." },
      graficki: { heading: "Pokrenimo dizajn vašeg brenda.", lede: "Javite se Ivi izravno — odgovaramo osobno, bez posrednika." },
      web: { heading: "Pokrenimo izradu vaše stranice.", lede: "Javite se Luki izravno — odgovaramo osobno, bez posrednika." },
      etikete: { heading: "Pokrenimo dizajn vaše etikete.", lede: "Javite se Ivi izravno — odgovaramo osobno, bez posrednika." },
      kontakt: { heading: "Pišite, nazovite ili pošaljite poruku.", lede: "Javljamo se osobno — nema automatskih odgovora ni posrednika." },
      project: { heading: "Sviđa vam se ovaj rad?", lede: "Recite nam par riječi o vašem brendu — rado ćemo vidjeti kako možemo pomoći." },
    },
    trust: [
      { t: "Provjereno iskustvo", d: "Brendovi u portfoliju — od obiteljskih vinarija do osiguravajućih kuća." },
      { t: "Prilagođena rješenja", d: "Dizajn i razvoj pod istim krovom, građeni oko cilja vašeg posla, ne gotovog predloška." },
      { t: "Mjerljiv rezultat", d: "Trojezične stranice (HR/EN/DE) sa strukturiranim podacima i SEO temeljima od starta." },
    ],
    compare: {
      eyebrow: "Usporedba",
      heading: "CreoLab naspram opće agencije",
      us: "CreoLab",
      them: "Opća agencija",
      rows: [
        "Dizajn i razvoj pod istim krovom",
        "Trojezične stranice (HR / EN / DE)",
        "SEO temelji ugrađeni od starta",
        "Podrška i revizije na hrvatskom",
        "Fiksna, jasna ponuda unaprijed",
      ],
    },
    langStat: "jezika na svakoj stranici — HR, EN i DE, s pravim hreflang oznakama za Google.",
    cluster: {
      heading: "Nekoliko brendova iz naše radionice",
      p: "Mali izbor iz dosadašnjeg portfolija — cijeli popis pogledajte na stranici Portfolio.",
    },
    heroSimple: {
      graficki: {
        label: "Usluga · Grafički dizajn",
        h1: "Grafički dizajn koji gradi brend.",
        lede: "Od logotipa do gotove tiskane ili digitalne primjene — radimo vizualni identitet za obrte i tvrtke u Požegi i diljem Hrvatske koji žele izgledati ozbiljno i prepoznatljivo.",
        cta: "Zatražite ponudu za dizajn",
      },
      web: {
        label: "Usluga · Web dizajn",
        h1: "Izrada web stranica koje rade posao.",
        lede: "Radimo moderne, brze i responzivne web stranice za obrte i tvrtke u Požegi i diljem Hrvatske — od dizajna i razvoja do SEO temelja koji vas čine vidljivima na Googleu.",
        cta: "Zatražite ponudu za web stranicu",
      },
      etikete: {
        label: "Usluga · Dizajn etiketa",
        h1: "Etikete koje se prodaju same.",
        lede: "Radimo etikete za vinarije i OPG-ove u Slavoniji i diljem Hrvatske — od koncepta i ilustracije do zakonski usklađenih podataka na boci.",
        cta: "Zatražite ponudu za etiketu",
      },
      kontakt: {
        label: "Kontakt",
        h1: "Razgovarajmo o vašem brendu.",
        lede: "Najbrži način da nas dobijete jest izravno putem emaila, telefona ili WhatsAppa.",
      },
    },
    servicePage: {
      includesGraficki: [
        ["Logo i vizualni identitet", "Znak, tipografija i sustav boja koji rade zajedno na svakom materijalu koji vaša tvrtka objavi."],
        ["Redizajn postojećeg loga", "Modernizacija oblika, tipografije i boja uz zadržavanje prepoznatljivosti koju ste već izgradili."],
        ["Priprema za tisak", "Vizitke, memorandumi, kuverte, katalozi i plakati pripremljeni tehnički ispravno za vašu tiskaru."],
        ["Dizajn ambalaže i etiketa", "Pakiranje koje na polici izgleda vrijedno onoliko koliko vrijedi i proizvod unutra."],
      ],
      includesWeb: [
        ["Dizajn i korisničko iskustvo", "Svaka stranica se dizajnira za vaš brend i vašu publiku, ne prema gotovom predlošku koji izgleda kao stotine drugih."],
        ["Responzivan razvoj", "Stranica jednako dobro izgleda i radi na mobitelu, tabletu i računalu, jer većina posjetitelja danas dolazi s mobitela."],
        ["SEO temelji od početka", "Ispravne meta oznake, brzo učitavanje i strukturirani podaci ugrađuju se već pri izradi, ne dodaju naknadno."],
        ["Podrška nakon lansiranja", "Nakon objave stranice ostajemo dostupni za manje izmjene, dodavanje sadržaja i savjete oko daljnjeg rasta."],
      ],
      includesEtikete: [
        ["Koncept i priča etikete", "Svaka etiketa nosi vizualnu priču vinarije, ne samo naziv sorte i postotak alkohola."],
        ["Usklađenost sorti u seriji", "Etikete za više sorti iste vinarije djeluju kao obitelj, uz jasnu razliku boje ili motiva po sorti."],
        ["Zakonski obvezni podaci", "Podrijetlo, alkohol i količina uredno su raspoređeni, bez da naruše čistoću prednje strane."],
        ["Priprema za tisak na naljepnicama", "Datoteke pripremljene za stvarni materijal i stroj vaše tiskare naljepnica, bez iznenađenja pri tisku."],
      ],
      worksEyebrow: "Radovi",
      worksHeadingGraficki: "Radovi na vizualnom identitetu",
      worksHeadingWeb: "Stranice koje smo izradili",
      worksHeadingEtikete: "Etikete koje smo dizajnirali",
      workP: "Od vlastite stranice do anketa i stranica vinarija — evo nekoliko web projekata koje je CreoLab dizajnirao i izradio.",
      surveyCaption: "Taste the Journey anketa",
      faqEyebrow: "Pitanja",
      faqHeading: "Česta pitanja",
      faqsGraficki: [
        { q: "Koliko traje izrada logotipa?", a: "Izrada logotipa ili vizualnog identiteta obično traje od nekoliko radnih dana do dva tjedna, ovisno o složenosti i broju dogovorenih revizija." },
        { q: "Radite li redizajn postojećeg logotipa?", a: "Da. Ako vaš logo djeluje zastarjelo, modernizirat ćemo oblik, tipografiju i boje uz zadržavanje prepoznatljivosti koju je brend već izgradio." },
        { q: "U kojim formatima dobivam gotove materijale?", a: "Za tisak isporučujemo vektorske formate visoke kvalitete (PDF, AI, EPS), a za digitalnu upotrebu visoku rezoluciju u PNG i JPG formatima." },
      ],
      faqsWeb: [
        { q: "Koliko traje izrada web stranice?", a: "Ovisno o opsegu, jednostavnija predstavljačka stranica obično je gotova unutar dva do tri tjedna, dok veći projekti s više funkcionalnosti traju dulje — točan rok dogovaramo u uvodnom razgovoru." },
        { q: "Hoće li stranica biti prilagođena mobitelima i tražilicama?", a: "Da. Svaka stranica koju izrađujemo je u potpunosti responzivna i od početka uključuje osnovne SEO postavke — naslove, opise, brzinu učitavanja i strukturirane podatke." },
        { q: "Mogu li sam mijenjati sadržaj nakon što stranica bude gotova?", a: "Ovisno o vrsti projekta, možemo dogovoriti jednostavan sustav za uređivanje sadržaja ili preuzeti manje izmjene za vas — što god vam više odgovara." },
      ],
      faqsEtikete: [
        { q: "Koliko etiketa odjednom mogu naručiti?", a: "Radimo i pojedinačne etikete i cijele linije od nekoliko sorti — sustav boja i motiva prilagođavamo tako da sve djeluje kao jedna obitelj." },
        { q: "Trebate li uzorak boce ili naljepnice unaprijed?", a: "Nije nužno, ali pomaže — ako nam pošaljete dimenzije naljepnice i vrstu papira vaše tiskare, dizajn odmah prilagođavamo stvarnim uvjetima tiska." },
        { q: "Hoće li etiketa zadovoljiti zakonske uvjete deklariranja?", a: "Da, svi obvezni podaci (podrijetlo, alkohol, količina) uključeni su u dizajn od početka, na mjestu koje ne narušava vizualni dojam." },
      ],
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      work: "Work",
      contact: "Contact",
      cta: "Request a Quote",
      whatsappLabel: "Contact us via WhatsApp",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      left: "Stronger<br />presence.",
      right: "Clearer<br />brand.",
      copy: "We combine creative design and strategic thinking to help tradespeople and companies build a brand that customers and partners keep coming back to.",
      cta: "Book a call",
    },
    about: {
      eyebrow: "About Us",
      heading: "About CreoLab – your partner for visual identity and digital marketing",
      paragraphs: [
        "CreoLab, from Požega, is dedicated to building strong, recognizable and modern brands. We believe great graphic design and a functional website aren't a luxury — they're a fundamental tool for growing any business.",
        "Whether you're starting from scratch and need a logo and visual identity, want to redesign an existing logo to meet modern standards, or need a responsive website that turns visitors into customers — we're here to turn your ideas into reality.",
        "Our approach combines clean aesthetics, strategy and clear goals. We offer a complete service — from concept and packaging design, through print preparation, all the way to social media management (Facebook and Instagram ads). We work with entrepreneurs, craftspeople and companies in Požega, Slavonia and across Croatia who want to take the next step and stand out in the market.",
      ],
      mission: {
        title: "Our Mission",
        text: "To give entrepreneurs complete design and marketing solutions — from a recognizable logo to an optimized website — that clearly communicate the value of your services and attract the right clients.",
      },
      vision: {
        title: "Our Vision",
        text: "To become the leading graphic design and digital marketing partner for small and medium businesses looking for reliable, fast, dedicated service focused on real results.",
      },
      values: {
        title: "Our Goals & Values",
        items: [
          "Functional, modern design: we create visual identities and logo redesigns that grab attention and leave a professional impression.",
          "Fast, simple communication: respecting deadlines, clear agreements and a personalized approach to every project.",
          "Everything in one place: from print preparation and packaging design to web design and social media management.",
        ],
      },
    },
    services: {
      eyebrow: "Our Services",
      heading: "Everything your brand needs.",
      graphic: { title: "Graphic Design", desc: "Logo, identity, print and packaging." },
      web: { title: "Web Design", desc: "Modern, fast and responsive websites." },
      labels: { title: "Label Design", desc: "Labels and packaging that sell themselves." },
    },
    stats: {
      eyebrow: "By the numbers",
      heading: "Results that speak for themselves.",
      completed: "Completed projects",
      services: "Services under one roof",
      personalized: "Personalized approach",
      response: "Response time to inquiries",
    },
    process: {
      eyebrow: "How We Work",
      heading: "A clear process from idea to result.",
      steps: [
        { title: "Discovery", desc: "We talk about your brand, goals and audience." },
        { title: "Concept", desc: "We propose a creative concept and strategy." },
        { title: "Production", desc: "We design and prepare content with your feedback." },
        { title: "Launch", desc: "We publish the project and track results." },
      ],
    },
    portfolioPreview: {
      eyebrow: "Portfolio",
      heading: "A few selected projects",
      viewAll: "View the full portfolio",
      viewCasestudy: "View Casestudy",
      bookCall: "Book a Call",
    },
    servicesBand: {
      heading: "Our services",
      more: "Learn more",
      items: [
        { title: "Graphic design", desc: "Logos, visual identity and print preparation that work just as well on a business card as on a shopfront." },
        { title: "Web design", desc: "Fast, responsive sites with SEO foundations built in from day one, not bolted on afterwards." },
        { title: "Label design", desc: "Labels that carry a winery's story on the shelf, from foil stamping to the legally required details." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      heading: "Answers to frequently asked questions.",
      sub: "Find answers to common questions about our process, services and collaboration.",
      items: [
        {
          q: "What services do you offer in graphic design, web and social media?",
          intro: "We offer complete digital and visual solutions:",
          listType: "ul",
          items: [
            { label: "Graphic design & branding", text: "logo design, brand guideline books, print materials, plus specialized vehicle and uniform branding." },
            { label: "Social media & content", text: "strategic profile management, running ad campaigns, and on-location photo and video production." },
            { label: "Web design", text: "modern, functional websites tailored to your business." },
          ],
        },
        {
          q: "Do you offer fixed packages or custom quotes?",
          p: "We take an individual approach with every client. Our defined service structures serve as a guideline, but every quote is 100% personalized and tailored to your budget, goals and needs.",
        },
        {
          q: "How long does the design process usually take?",
          p: "Timelines depend on the complexity of the project. Designing a logo or visual identity usually takes anywhere from a few working days to two weeks. Website timelines are defined in the initial consultation.",
        },
        {
          q: "What does the process look like after I contact you?",
          intro: "Our process is transparent and split into 4 clear steps:",
          listType: "ol",
          items: [
            { label: "Discovery & analysis", text: "defining your goals and needs." },
            { label: "Concept", text: "developing and presenting initial visual ideas." },
            { label: "Design & refinement", text: "finalizing the design through a defined number of revisions." },
            { label: "Launch", text: "delivery of final files and project go-live." },
          ],
        },
        {
          q: "What if I'm not happy with the first proposed concept?",
          p: "Before starting work, we carry out a detailed analysis to reduce the chance of missing your vision. If the first concept doesn't meet expectations, we refine the solution or create a new concept through open communication until we reach the result you want.",
        },
        {
          q: "How many rounds of revisions are included in the price?",
          p: "The number of revisions is defined in the official quote. We typically include 1 to 4 rounds of revisions depending on project scope, while for the most extensive projects we offer unlimited revisions until you're fully satisfied.",
        },
        {
          q: "What are your payment terms for projects?",
          p: "We work on a deposit basis, paid before work on the project begins. The remaining amount is paid once the final solution is approved, and before export files are sent or the website goes live.",
        },
        {
          q: "What formats do I receive the finished design files in?",
          intro: "We deliver complete materials ready for every purpose:",
          listType: "ul",
          items: [
            { label: "For print", text: "high-quality vector formats with technical prepress (PDF, AI, EPS)." },
            { label: "For digital use", text: "high resolution PNG (transparent background) and JPG formats for web and social media." },
          ],
        },
        {
          q: "Who owns the copyright to the design after the project is finished?",
          p: "Once the invoice is paid in full, all copyright and full ownership of the approved final design and materials transfer to you.",
        },
        {
          q: "Do I need to provide my own copy and images, or do you handle that too?",
          p: "We offer a full-service option. If you don't have materials ready, we can take care of copywriting (SEO copywriting) as well as on-location photography and video. If you already have materials ready, we're happy to work with them.",
        },
        {
          q: "Do you redesign existing logos and refresh brand identities?",
          p: "Yes! If your current logo feels outdated or no longer represents your business the right way, we offer professional logo redesign. We preserve your brand's recognizability while modernizing its shape, typography and colors, making it ready for every digital and print medium.",
        },
      ],
    },
    footer: {
      ctaHeadingPlain: "Ready to start ",
      ctaHeadingGradient: "your project?",
      copyrightSuffix: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      igLabel: "CREOLAB on Instagram",
      fbLabel: "CREOLAB on Facebook",
    },
    cookie: {
      text: "We use Google Analytics cookies to understand site traffic — they are only set with your consent. More information in our",
      privacyLinkText: "Privacy Policy",
      reject: "Necessary only",
      accept: "Accept",
    },
    contact: {
      ivaTitle: "Contact for graphic design and social media marketing",
      lukaTitle: "Contact for web design",
      mailBtn: "Mail",
      mobileBtn: "Mobile",
      hours: "Business Hours",
      hoursValue: "Mon – Fri: 8:00 AM – 4:00 PM",
      addressTitle: "Address",
      follow: "Follow Us",
      followDesc: "Check out our latest work and posts on social media.",
      talkToUs: "Let's talk",
      roleGraphic: "Graphic design",
      roleWeb: "Web development",
      email: "Email",
      call: "Call",
      address: "Marije Jurić Zagorke 9, 34000 Požega, Croatia",
    },
    pages: {
      portfolio: {
        eyebrow: "Portfolio",
        h1Plain: "Work that ",
        h1Gradient: "speaks for itself.",
        sub: "Real projects for real clients across Croatia — from logo design and branding to packaging and label design.",
      },
      kontakt: {
        eyebrow: "Contact",
        h1Plain: "Let's talk about ",
        h1Gradient: "your project.",
        sub: "The fastest way to reach us is directly by email, phone or WhatsApp. Send us a few words about your project.",
      },
    },
    meta: {
      home: {
        title: "Graphic Design & Web Development | CreoLab Croatia",
        description:
          "CreoLab is a graphic design and web development studio in Požega, Croatia. Logos, visual identity, websites and social media for growing brands.",
      },
      portfolio: {
        title: "Portfolio: Logo Design & Branding | CreoLab Croatia",
        description:
          "Real projects by CREOLAB — logo design, branding, packaging, label design and more for clients across Croatia.",
      },
      kontakt: {
        title: "Contact | Graphic Design & Web Development, Croatia",
        description: "Contact CREOLAB for graphic design, web design and social media marketing in Požega, Croatia.",
      },
      privatnost: {
        title: "Privacy Policy — CREOLAB",
        description:
          "CREOLAB's privacy and cookie policy — what data we collect, how we use it, and your rights.",
      },
      uvjeti: {
        title: "Terms of Service — CREOLAB",
        description: "Terms of Service for CREOLAB's website and services.",
      },
    },
    backToPortfolio: "Back to portfolio",
    ctaProject: "Let's start a similar project",
    portfolioDetail: {
      challenge: "Challenge",
      approach: "Approach",
      result: "Result",
      prev: "Previous project",
      next: "Next project",
    },
    contactBand: {
      home: { heading: "Got an idea? Let's turn it into a brand.", lede: "Reach out directly — we reply personally, no middlemen." },
      portfolio: { heading: "Your project could be next.", lede: "Tell us a bit about your brand and let's get started together." },
      graficki: { heading: "Let's kick off your brand design.", lede: "Reach out to Iva directly — we reply personally, no middlemen." },
      web: { heading: "Let's build your website.", lede: "Reach out to Luka directly — we reply personally, no middlemen." },
      etikete: { heading: "Let's design your label.", lede: "Reach out to Iva directly — we reply personally, no middlemen." },
      kontakt: { heading: "Write, call, or send a message.", lede: "We reply personally — no automated responses, no middlemen." },
      project: { heading: "Like this project?", lede: "Tell us a bit about your brand — we'd love to see how we can help." },
    },
    trust: [
      { t: "Proven experience", d: "Brands in our portfolio — from family wineries to insurance companies." },
      { t: "Tailored solutions", d: "Design and development under one roof, built around your business goal, not a ready-made template." },
      { t: "Measurable results", d: "Trilingual pages (HR/EN/DE) with structured data and SEO foundations from the start." },
    ],
    compare: {
      eyebrow: "Comparison",
      heading: "CreoLab vs. a general agency",
      us: "CreoLab",
      them: "General agency",
      rows: [
        "Design and development under one roof",
        "Trilingual pages (HR / EN / DE)",
        "SEO foundations built in from the start",
        "Support and revisions in Croatian",
        "Fixed, clear quote upfront",
      ],
    },
    langStat: "languages on every page — HR, EN and DE, with proper hreflang tags for Google.",
    cluster: {
      heading: "A few brands from our workshop",
      p: "A small selection from our portfolio so far — see the full list on the Portfolio page.",
    },
    heroSimple: {
      graficki: {
        label: "Service · Graphic design",
        h1: "Graphic design that builds brands.",
        lede: "From a logo to the finished print or digital application — we create visual identities for businesses in Požega and across Croatia who want to look serious and recognisable.",
        cta: "Request a design quote",
      },
      web: {
        label: "Service · Web design",
        h1: "Websites built to do a job.",
        lede: "We build modern, fast and responsive websites for businesses in Požega and across Croatia — from design and development to SEO foundations that make you visible on Google.",
        cta: "Request a website quote",
      },
      etikete: {
        label: "Service · Label design",
        h1: "Labels that sell themselves.",
        lede: "We design labels for wineries and family farms in Slavonia and across Croatia — from concept and illustration to legally compliant details on the bottle.",
        cta: "Request a label quote",
      },
      kontakt: {
        label: "Contact",
        h1: "Let's talk about your brand.",
        lede: "The fastest way to reach us is directly by email, phone or WhatsApp.",
      },
    },
    servicePage: {
      includesGraficki: [
        ["Logo & visual identity", "A mark, typography and colour system that work together across everything your company publishes."],
        ["Redesign of an existing logo", "Modernising shape, typography and colour while keeping the recognition you've already built."],
        ["Print preparation", "Business cards, letterheads, envelopes, catalogues and posters prepared correctly for your printer."],
        ["Packaging & label design", "Packaging that looks on the shelf as valuable as the product inside it."],
      ],
      includesWeb: [
        ["Design & user experience", "Every site is designed for your brand and your audience, not from a template that looks like hundreds of others."],
        ["Responsive development", "The site looks and works equally well on mobile, tablet and desktop, since most visitors today arrive on mobile."],
        ["SEO foundations from day one", "Correct meta tags, fast loading and structured data are built in from the start, not added later."],
        ["Support after launch", "After the site goes live, we stay available for small changes, content updates and advice on further growth."],
      ],
      includesEtikete: [
        ["Concept & label story", "Every label carries a winery's visual story, not just the grape variety and alcohol percentage."],
        ["Consistency across a range", "Labels for several varieties from the same winery feel like a family, with a clear colour or motif difference per variety."],
        ["Legally required information", "Origin, alcohol content and volume are neatly arranged without disrupting the clean look of the front label."],
        ["Print-ready label files", "Files prepared for your label printer's actual material and press, with no surprises at print time."],
      ],
      worksEyebrow: "Work",
      worksHeadingGraficki: "Visual identity work",
      worksHeadingWeb: "Websites we've built",
      worksHeadingEtikete: "Labels we've designed",
      workP: "From our own site to surveys and winery pages — here are a few web projects CreoLab designed and built.",
      surveyCaption: "Taste the Journey survey",
      faqEyebrow: "Questions",
      faqHeading: "FAQ",
      faqsGraficki: [
        { q: "How long does a logo take to design?", a: "Designing a logo or visual identity usually takes a few working days to two weeks, depending on complexity and the number of agreed revisions." },
        { q: "Do you redesign existing logos?", a: "Yes. If your logo feels outdated, we'll modernise its shape, typography and colours while keeping the recognition your brand has already built." },
        { q: "What formats do I receive the finished materials in?", a: "For print we deliver high-quality vector formats (PDF, AI, EPS), and for digital use, high-resolution PNG and JPG files." },
      ],
      faqsWeb: [
        { q: "How long does building a website take?", a: "Depending on scope, a simpler presentation site is usually ready within two to three weeks, while larger projects with more functionality take longer — we agree on an exact timeline during the initial conversation." },
        { q: "Will the site be optimised for mobile and search engines?", a: "Yes. Every site we build is fully responsive and includes core SEO settings from the start — titles, descriptions, loading speed and structured data." },
        { q: "Can I update the content myself once the site is done?", a: "Depending on the type of project, we can set up a simple content-editing system, or take care of small updates for you — whichever suits you better." },
      ],
      faqsEtikete: [
        { q: "How many labels can I order at once?", a: "We design single labels as well as entire ranges across several varieties — we adapt the colour and motif system so everything feels like one family." },
        { q: "Do you need a bottle or label sample in advance?", a: "Not necessarily, but it helps — if you send us the label dimensions and paper type from your printer, we adapt the design to the real print conditions straight away." },
        { q: "Will the label meet legal labelling requirements?", a: "Yes, all mandatory details (origin, alcohol content, volume) are built into the design from the start, placed so they don't disrupt the visual impression." },
      ],
    },
  },
  de: {
    nav: {
      home: "Startseite",
      about: "Über uns",
      work: "Arbeiten",
      contact: "Kontakt",
      cta: "Angebot anfordern",
      whatsappLabel: "Kontaktieren Sie uns über WhatsApp",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
    },
    hero: {
      left: "Stärkerer<br />Auftritt.",
      right: "Klarere<br />Marke.",
      copy: "Wir verbinden kreatives Design mit strategischem Denken, um Handwerksbetrieben und Unternehmen eine Marke aufzubauen, zu der Kunden und Partner immer wieder zurückkehren.",
      cta: "Termin vereinbaren",
    },
    about: {
      eyebrow: "Über uns",
      heading: "Über CreoLab – Ihr Partner für visuelle Identität und digitales Marketing",
      paragraphs: [
        "CreoLab aus Požega widmet sich der Entwicklung starker, wiedererkennbarer und moderner Marken. Wir glauben, dass gutes Grafikdesign und eine funktionale Website kein Luxus sind, sondern ein grundlegendes Werkzeug für das Wachstum jedes Unternehmens.",
        "Ob Sie bei null anfangen und ein Logo sowie eine visuelle Identität benötigen, ein bestehendes Logo nach modernen Standards neu gestalten möchten, oder eine responsive Website brauchen, die Besucher in Kunden verwandelt – wir sind da, um Ihre Ideen Wirklichkeit werden zu lassen.",
        "Unser Ansatz verbindet klare Ästhetik, Strategie und klare Ziele. Wir bieten einen Rundum-Service – von Konzept und Verpackungsdesign über die Druckvorstufe bis hin zur Betreuung sozialer Medien (Facebook- und Instagram-Anzeigen). Wir arbeiten mit Unternehmern, Handwerksbetrieben und Firmen in Požega, Slawonien und ganz Kroatien zusammen, die den nächsten Schritt machen und sich am Markt abheben wollen.",
      ],
      mission: {
        title: "Unsere Mission",
        text: "Unternehmern umfassende Design- und Marketinglösungen zu bieten – von einem wiedererkennbaren Logo bis zu einer optimierten Website –, die den Wert Ihrer Leistungen klar kommunizieren und die richtigen Kunden anziehen.",
      },
      vision: {
        title: "Unsere Vision",
        text: "Der führende Partner für Grafikdesign und digitales Marketing für kleine und mittlere Unternehmen zu werden, die einen zuverlässigen, schnellen und engagierten, ergebnisorientierten Service suchen.",
      },
      values: {
        title: "Unsere Ziele & Werte",
        items: [
          "Funktionales, modernes Design: Wir gestalten visuelle Identitäten und Logo-Redesigns, die Aufmerksamkeit erregen und einen professionellen Eindruck hinterlassen.",
          "Schnelle, unkomplizierte Kommunikation: Einhaltung von Fristen, klare Absprachen und ein individueller Ansatz für jedes Projekt.",
          "Alles aus einer Hand: von der Druckvorstufe und dem Verpackungsdesign bis zu Webdesign und Social-Media-Betreuung.",
        ],
      },
    },
    services: {
      eyebrow: "Unsere Leistungen",
      heading: "Alles, was Ihre Marke braucht.",
      graphic: { title: "Grafikdesign", desc: "Logo, Identität, Druck und Verpackung." },
      web: { title: "Webdesign", desc: "Moderne, schnelle und responsive Websites." },
      labels: { title: "Etikettendesign", desc: "Etiketten und Verpackungen, die sich von selbst verkaufen." },
    },
    stats: {
      eyebrow: "In Zahlen",
      heading: "Ergebnisse, die für sich sprechen.",
      completed: "Abgeschlossene Projekte",
      services: "Leistungen unter einem Dach",
      personalized: "Individueller Ansatz",
      response: "Antwortzeit auf Anfragen",
    },
    process: {
      eyebrow: "So arbeiten wir",
      heading: "Ein klarer Prozess von der Idee bis zum Ergebnis.",
      steps: [
        { title: "Kennenlernen", desc: "Wir sprechen über Ihre Marke, Ziele und Zielgruppe." },
        { title: "Konzept", desc: "Wir schlagen ein kreatives Konzept und eine Strategie vor." },
        { title: "Umsetzung", desc: "Wir gestalten und bereiten Inhalte mit Ihrem Feedback vor." },
        { title: "Launch", desc: "Wir veröffentlichen das Projekt und verfolgen die Ergebnisse." },
      ],
    },
    portfolioPreview: {
      eyebrow: "Portfolio",
      heading: "Einige ausgewählte Arbeiten",
      viewAll: "Gesamtes Portfolio ansehen",
      viewCasestudy: "Projekt ansehen",
      bookCall: "Termin vereinbaren",
    },
    servicesBand: {
      heading: "Unsere Leistungen",
      more: "Mehr erfahren",
      items: [
        { title: "Grafikdesign", desc: "Logo, visuelle Identität und Druckvorstufe, die auf der Visitenkarte genauso gut funktionieren wie an der Fassade." },
        { title: "Webdesign", desc: "Schnelle, responsive Websites mit SEO-Grundlagen, die von Anfang an eingebaut sind, nicht nachträglich ergänzt werden." },
        { title: "Etikettendesign", desc: "Etiketten, die im Regal die Geschichte einer Weinkellerei erzählen, von der Goldprägung bis zu den gesetzlich vorgeschriebenen Angaben." },
      ],
    },
    faq: {
      eyebrow: "Häufige Fragen",
      heading: "Antworten auf häufig gestellte Fragen.",
      sub: "Antworten auf häufige Fragen zu unserem Prozess, unseren Leistungen und der Zusammenarbeit.",
      items: [
        {
          q: "Welche Leistungen bieten Sie im Bereich Grafikdesign, Web und Social Media an?",
          intro: "Wir bieten umfassende digitale und visuelle Lösungen:",
          listType: "ul",
          items: [
            { label: "Grafikdesign & Branding", text: "Logo-Design, Styleguides, Druckmaterialien sowie spezialisiertes Fahrzeug- und Uniform-Branding." },
            { label: "Social Media & Content", text: "strategische Profilbetreuung, Durchführung von Werbekampagnen (Ads) sowie Foto- und Videoproduktion vor Ort." },
            { label: "Webdesign", text: "Erstellung moderner und funktionaler Websites, zugeschnitten auf Ihr Unternehmen." },
          ],
        },
        {
          q: "Bieten Sie fertige Pakete an oder erstellen Sie individuelle Angebote?",
          p: "Wir gehen auf jeden Kunden individuell ein. Unsere definierten Leistungsstrukturen dienen als Orientierung, doch jedes Angebot ist zu 100% personalisiert und an Ihr Budget, Ihre Ziele und Bedürfnisse angepasst.",
        },
        {
          q: "Wie lange dauert der Gestaltungsprozess im Durchschnitt?",
          p: "Die Fristen hängen von der Komplexität des Projekts ab. Die Erstellung eines Logos oder einer visuellen Identität dauert in der Regel wenige Werktage bis zu zwei Wochen. Die Fristen für eine Website werden im Erstgespräch festgelegt.",
        },
        {
          q: "Wie läuft die Zusammenarbeit ab, nachdem ich mich bei Ihnen gemeldet habe?",
          intro: "Unser Prozess ist transparent und in 4 klare Schritte unterteilt:",
          listType: "ol",
          items: [
            { label: "Kennenlernen & Analyse", text: "Definition Ihrer Ziele und Bedürfnisse." },
            { label: "Konzept", text: "Entwicklung und Präsentation erster visueller Ideen." },
            { label: "Umsetzung & Feinschliff", text: "Finalisierung des Designs durch eine festgelegte Anzahl an Überarbeitungen." },
            { label: "Launch", text: "Lieferung der finalen Dateien und Start des Projekts." },
          ],
        },
        {
          q: "Was passiert, wenn mir das erste vorgeschlagene Konzept nicht gefällt?",
          p: "Vor Arbeitsbeginn führen wir eine detaillierte Analyse durch, um das Risiko einer verfehlten Vision zu minimieren. Entspricht das erste Konzept nicht Ihren Erwartungen, überarbeiten wir die Lösung oder entwickeln durch offene Kommunikation ein neues Konzept, bis wir die gewünschte Vision erreichen.",
        },
        {
          q: "Wie viele Überarbeitungsrunden sind im Preis enthalten?",
          p: "Die Anzahl der Überarbeitungen wird im offiziellen Angebot festgelegt. Standardmäßig sind je nach Projektumfang 1 bis 4 Überarbeitungsrunden enthalten, während wir bei den umfangreichsten Projekten unbegrenzte Überarbeitungen bis zur vollständigen Zufriedenheit anbieten.",
        },
        {
          q: "Welche Zahlungsbedingungen gelten für Projekte?",
          p: "Wir arbeiten nach dem Prinzip einer Anzahlung vor Projektbeginn. Der Restbetrag wird nach Freigabe der finalen Lösung fällig, bevor die Exportdateien versendet werden oder die Website live geht.",
        },
        {
          q: "In welchen Formaten erhalte ich die fertigen Designmaterialien?",
          intro: "Wir liefern komplette, einsatzbereite Materialien für jeden Zweck:",
          listType: "ul",
          items: [
            { label: "Für den Druck", text: "hochwertige Vektorformate mit technischer Druckvorstufe (PDF, AI, EPS)." },
            { label: "Für die digitale Nutzung", text: "hochauflösende PNG- (transparenter Hintergrund) und JPG-Formate für Web und soziale Netzwerke." },
          ],
        },
        {
          q: "Wem gehören die Urheberrechte am Design nach Projektabschluss?",
          p: "Nach vollständiger Bezahlung der Rechnung gehen sämtliche Urheberrechte und das volle Eigentum am genehmigten finalen Design und den Materialien auf Sie über.",
        },
        {
          q: "Muss ich selbst Texte und Bilder bereitstellen, oder übernehmen Sie das auch?",
          p: "Wir bieten einen Rundum-Service an. Falls Sie keine fertigen Materialien haben, übernehmen wir gerne das Texten (SEO-Copywriting) sowie Foto- und Videoaufnahmen vor Ort. Wenn Sie bereits fertige Materialien haben, binden wir diese gerne ein.",
        },
        {
          q: "Führen Sie ein Redesign bestehender Logos und eine Auffrischung des Markenauftritts durch?",
          p: "Ja! Wenn Ihr bestehendes Logo veraltet wirkt oder Ihr Unternehmen nicht mehr richtig repräsentiert, bieten wir ein professionelles Logo-Redesign an. Wir bewahren den Wiedererkennungswert Ihrer Marke und modernisieren gleichzeitig Form, Typografie und Farben – bereit für alle digitalen und gedruckten Medien.",
        },
      ],
    },
    footer: {
      ctaHeadingPlain: "Bereit, ",
      ctaHeadingGradient: "Ihr Projekt zu starten?",
      copyrightSuffix: "Alle Rechte vorbehalten.",
      privacy: "Datenschutzerklärung",
      terms: "Nutzungsbedingungen",
      igLabel: "CREOLAB auf Instagram",
      fbLabel: "CREOLAB auf Facebook",
    },
    cookie: {
      text: "Wir nutzen Google-Analytics-Cookies, um den Website-Traffic zu verstehen — sie werden nur mit Ihrer Einwilligung gesetzt. Weitere Informationen in unserer",
      privacyLinkText: "Datenschutzerklärung",
      reject: "Nur notwendige",
      accept: "Akzeptieren",
    },
    contact: {
      ivaTitle: "Kontakt für Grafikdesign und Social-Media-Marketing",
      lukaTitle: "Kontakt für Webdesign",
      mailBtn: "E-Mail",
      mobileBtn: "Mobil",
      hours: "Öffnungszeiten",
      hoursValue: "Mo – Fr: 08:00 – 16:00 Uhr",
      addressTitle: "Adresse",
      follow: "Folgen Sie uns",
      followDesc: "Sehen Sie sich unsere neuesten Arbeiten und Beiträge in den sozialen Medien an.",
      talkToUs: "Lassen Sie uns reden",
      roleGraphic: "Grafikdesign",
      roleWeb: "Web-Entwicklung",
      email: "E-Mail",
      call: "Anrufen",
      address: "Marije Jurić Zagorke 9, 34000 Požega, Kroatien",
    },
    pages: {
      portfolio: {
        eyebrow: "Portfolio",
        h1Plain: "Arbeiten, die ",
        h1Gradient: "für sich sprechen.",
        sub: "Echte Projekte für echte Kunden in ganz Kroatien — von Logo-Design und Branding bis zu Verpackungs- und Etikettendesign.",
      },
      kontakt: {
        eyebrow: "Kontakt",
        h1Plain: "Lassen Sie uns über ",
        h1Gradient: "Ihr Projekt sprechen.",
        sub: "Der schnellste Weg, uns zu erreichen, ist direkt per E-Mail, Telefon oder WhatsApp. Schreiben Sie uns kurz zu Ihrem Projekt.",
      },
    },
    meta: {
      home: {
        title: "Grafikdesign & Webentwicklung | CreoLab Kroatien",
        description:
          "CreoLab ist ein Studio für Grafikdesign und Webentwicklung in Požega, Kroatien. Logos, Corporate Design, Websites und Social Media für Ihre Marke.",
      },
      portfolio: {
        title: "Portfolio: Logodesign & Branding | CreoLab Kroatien",
        description:
          "Echte Projekte von CREOLAB — Logo-Design, Branding, Verpackung, Etikettendesign und mehr für Kunden in ganz Kroatien.",
      },
      kontakt: {
        title: "Kontakt | Grafikdesign & Webentwicklung, Kroatien",
        description: "Kontaktieren Sie CREOLAB für Grafikdesign, Webdesign und Social-Media-Marketing in Požega, Kroatien.",
      },
      privatnost: {
        title: "Datenschutzerklärung — CREOLAB",
        description: "Die Datenschutz- und Cookie-Richtlinie von CREOLAB — welche Daten wir erheben, wie wir sie nutzen und Ihre Rechte.",
      },
      uvjeti: {
        title: "Nutzungsbedingungen — CREOLAB",
        description: "Nutzungsbedingungen für die Website und Leistungen von CREOLAB.",
      },
    },
    backToPortfolio: "Zurück zum Portfolio",
    ctaProject: "Lassen Sie uns ein ähnliches Projekt starten",
    portfolioDetail: {
      challenge: "Herausforderung",
      approach: "Ansatz",
      result: "Ergebnis",
      prev: "Vorheriges Projekt",
      next: "Nächstes Projekt",
    },
    contactBand: {
      home: { heading: "Haben Sie eine Idee? Machen wir daraus eine Marke.", lede: "Melden Sie sich direkt bei uns — wir antworten persönlich, ohne Umwege." },
      portfolio: { heading: "Ihr Projekt könnte das nächste sein.", lede: "Erzählen Sie uns kurz von Ihrer Marke, und legen wir gemeinsam los." },
      graficki: { heading: "Starten wir das Design Ihrer Marke.", lede: "Wenden Sie sich direkt an Iva — wir antworten persönlich, ohne Umwege." },
      web: { heading: "Starten wir die Erstellung Ihrer Website.", lede: "Wenden Sie sich direkt an Luka — wir antworten persönlich, ohne Umwege." },
      etikete: { heading: "Starten wir das Design Ihres Etiketts.", lede: "Wenden Sie sich direkt an Iva — wir antworten persönlich, ohne Umwege." },
      kontakt: { heading: "Schreiben, anrufen oder eine Nachricht senden.", lede: "Wir antworten persönlich — keine automatischen Antworten, keine Umwege." },
      project: { heading: "Gefällt Ihnen diese Arbeit?", lede: "Erzählen Sie uns kurz von Ihrer Marke — wir sehen uns gerne an, wie wir helfen können." },
    },
    trust: [
      { t: "Nachgewiesene Erfahrung", d: "Marken in unserem Portfolio — von familiengeführten Weinkellereien bis zu Versicherungsunternehmen." },
      { t: "Maßgeschneiderte Lösungen", d: "Design und Entwicklung unter einem Dach, ausgerichtet auf Ihr Geschäftsziel, nicht auf eine fertige Vorlage." },
      { t: "Messbare Ergebnisse", d: "Dreisprachige Seiten (HR/EN/DE) mit strukturierten Daten und SEO-Grundlagen von Anfang an." },
    ],
    compare: {
      eyebrow: "Vergleich",
      heading: "CreoLab im Vergleich zu einer allgemeinen Agentur",
      us: "CreoLab",
      them: "Allgemeine Agentur",
      rows: [
        "Design und Entwicklung unter einem Dach",
        "Dreisprachige Seiten (HR / EN / DE)",
        "SEO-Grundlagen von Anfang an eingebaut",
        "Support und Korrekturen auf Kroatisch",
        "Fixes, klares Angebot im Voraus",
      ],
    },
    langStat: "Sprachen auf jeder Seite — HR, EN und DE, mit korrekten Hreflang-Tags für Google.",
    cluster: {
      heading: "Einige Marken aus unserer Werkstatt",
      p: "Eine kleine Auswahl aus unserem bisherigen Portfolio — die vollständige Liste finden Sie auf der Portfolio-Seite.",
    },
    heroSimple: {
      graficki: {
        label: "Leistung · Grafikdesign",
        h1: "Grafikdesign, das Marken aufbaut.",
        lede: "Vom Logo bis zur fertigen Druck- oder Digitalanwendung — wir entwickeln visuelle Identitäten für Betriebe in Požega und ganz Kroatien, die seriös und wiedererkennbar wirken möchten.",
        cta: "Angebot für Design anfordern",
      },
      web: {
        label: "Leistung · Webdesign",
        h1: "Websites, die ihre Aufgabe erfüllen.",
        lede: "Wir entwickeln moderne, schnelle und responsive Websites für Betriebe in Požega und ganz Kroatien — von Design und Entwicklung bis zu SEO-Grundlagen, die Sie bei Google sichtbar machen.",
        cta: "Angebot für Website anfordern",
      },
      etikete: {
        label: "Leistung · Etikettendesign",
        h1: "Etiketten, die sich von selbst verkaufen.",
        lede: "Wir gestalten Etiketten für Weinkellereien und landwirtschaftliche Familienbetriebe in Slawonien und ganz Kroatien — vom Konzept und der Illustration bis zu rechtskonformen Angaben auf der Flasche.",
        cta: "Angebot für Etikett anfordern",
      },
      kontakt: {
        label: "Kontakt",
        h1: "Lassen Sie uns über Ihre Marke sprechen.",
        lede: "Der schnellste Weg, uns zu erreichen, ist direkt per E-Mail, Telefon oder WhatsApp.",
      },
    },
    servicePage: {
      includesGraficki: [
        ["Logo & visuelle Identität", "Ein Zeichen, eine Typografie und ein Farbsystem, die auf jedem Material Ihres Unternehmens zusammenwirken."],
        ["Redesign eines bestehenden Logos", "Modernisierung von Form, Typografie und Farben unter Beibehaltung des bereits aufgebauten Wiedererkennungswerts."],
        ["Druckvorstufe", "Visitenkarten, Briefpapier, Kuverts, Kataloge und Plakate, technisch korrekt für Ihre Druckerei vorbereitet."],
        ["Verpackungs- & Etikettendesign", "Verpackung, die im Regal genauso wertvoll wirkt wie das Produkt darin."],
      ],
      includesWeb: [
        ["Design & Nutzererlebnis", "Jede Website wird für Ihre Marke und Ihr Publikum gestaltet, nicht nach einer Vorlage, die wie hunderte andere aussieht."],
        ["Responsive Entwicklung", "Die Website sieht auf Handy, Tablet und Computer gleich gut aus und funktioniert gleich gut, da die meisten Besucher heute über das Handy kommen."],
        ["SEO-Grundlagen von Anfang an", "Korrekte Meta-Tags, schnelle Ladezeiten und strukturierte Daten werden bereits bei der Erstellung eingebaut, nicht nachträglich hinzugefügt."],
        ["Support nach dem Launch", "Nach der Veröffentlichung der Website stehen wir für kleinere Änderungen, Inhaltsergänzungen und Wachstumsberatung zur Verfügung."],
      ],
      includesEtikete: [
        ["Konzept & Etikettengeschichte", "Jedes Etikett erzählt die visuelle Geschichte einer Weinkellerei, nicht nur Rebsorte und Alkoholgehalt."],
        ["Abstimmung innerhalb einer Serie", "Etiketten für mehrere Sorten derselben Weinkellerei wirken wie eine Familie, mit einem klaren Farb- oder Motivunterschied je Sorte."],
        ["Gesetzlich vorgeschriebene Angaben", "Herkunft, Alkoholgehalt und Menge sind ordentlich platziert, ohne die klare Vorderseite zu stören."],
        ["Druckfertige Etikettendateien", "Dateien, vorbereitet für das tatsächliche Material und die Maschine Ihrer Etikettendruckerei, ohne Überraschungen beim Druck."],
      ],
      worksEyebrow: "Arbeiten",
      worksHeadingGraficki: "Arbeiten zur visuellen Identität",
      worksHeadingWeb: "Websites, die wir erstellt haben",
      worksHeadingEtikete: "Etiketten, die wir gestaltet haben",
      workP: "Von unserer eigenen Website über Umfragen bis zu Weinkellerei-Seiten — hier einige Webprojekte, die CreoLab gestaltet und umgesetzt hat.",
      surveyCaption: "Taste the Journey Umfrage",
      faqEyebrow: "Fragen",
      faqHeading: "Häufige Fragen",
      faqsGraficki: [
        { q: "Wie lange dauert die Erstellung eines Logos?", a: "Die Erstellung eines Logos oder einer visuellen Identität dauert in der Regel wenige Werktage bis zwei Wochen, je nach Komplexität und vereinbarter Anzahl an Korrekturrunden." },
        { q: "Gestalten Sie bestehende Logos neu?", a: "Ja. Wirkt Ihr Logo veraltet, modernisieren wir Form, Typografie und Farben und bewahren dabei den bereits aufgebauten Wiedererkennungswert Ihrer Marke." },
        { q: "In welchen Formaten erhalte ich die fertigen Materialien?", a: "Für den Druck liefern wir hochwertige Vektorformate (PDF, AI, EPS), für die digitale Nutzung hochauflösende PNG- und JPG-Dateien." },
      ],
      faqsWeb: [
        { q: "Wie lange dauert die Erstellung einer Website?", a: "Je nach Umfang ist eine einfachere Präsentationsseite meist innerhalb von zwei bis drei Wochen fertig, größere Projekte mit mehr Funktionen dauern länger — die genaue Frist vereinbaren wir im Erstgespräch." },
        { q: "Wird die Website für Mobilgeräte und Suchmaschinen optimiert?", a: "Ja. Jede von uns erstellte Website ist vollständig responsiv und enthält von Anfang an grundlegende SEO-Einstellungen — Titel, Beschreibungen, Ladegeschwindigkeit und strukturierte Daten." },
        { q: "Kann ich die Inhalte nach Fertigstellung selbst ändern?", a: "Je nach Projektart können wir ein einfaches System zur Inhaltsbearbeitung einrichten oder kleinere Änderungen für Sie übernehmen — ganz wie es Ihnen lieber ist." },
      ],
      faqsEtikete: [
        { q: "Wie viele Etiketten kann ich gleichzeitig bestellen?", a: "Wir gestalten einzelne Etiketten ebenso wie ganze Serien über mehrere Sorten — wir passen das Farb- und Motivsystem so an, dass alles wie eine Familie wirkt." },
        { q: "Benötigen Sie vorab ein Flaschen- oder Etikettenmuster?", a: "Nicht zwingend, aber es hilft — wenn Sie uns die Etikettenmaße und die Papierart Ihrer Druckerei mitteilen, passen wir das Design sofort an die realen Druckbedingungen an." },
        { q: "Erfüllt das Etikett die gesetzlichen Kennzeichnungspflichten?", a: "Ja, alle Pflichtangaben (Herkunft, Alkoholgehalt, Menge) sind von Anfang an im Design berücksichtigt und so platziert, dass sie den visuellen Eindruck nicht stören." },
      ],
    },
  },
};

export function getDict(locale: Locale): Dict {
  return DICT[locale];
}

export function localizePath(pathname: string, targetLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = targetLocale;
  } else {
    segments.unshift(targetLocale);
  }
  return "/" + segments.join("/");
}
