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
    about: string;
    work: string;
    contact: string;
    cta: string;
    whatsappLabel: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollHint: string;
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
    social: { title: string; desc: string };
  };
  stats: { eyebrow: string; heading: string; completed: string; services: string; personalized: string; response: string };
  process: {
    eyebrow: string;
    heading: string;
    steps: { title: string; desc: string }[];
  };
  portfolioPreview: { eyebrow: string; heading: string; viewAll: string; viewCasestudy: string; bookCall: string };
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
};

const DICT: Record<Locale, Dict> = {
  hr: {
    nav: {
      about: "O nama",
      work: "Radovi",
      contact: "Kontakt",
      cta: "Zatražite ponudu",
      whatsappLabel: "Kontaktirajte nas putem WhatsAppa",
      openMenu: "Otvorite izbornik",
      closeMenu: "Zatvorite izbornik",
    },
    hero: {
      eyebrow: "Grafički dizajn, izrada web stranica i marketing · CreoLab Požega",
      line1: "Dizajn i marketing",
      line2: "koji grade vaš brend.",
      sub: "CREOLAB je specijaliziran za grafički dizajn, izradu web stranica i social media marketing.",
      ctaPrimary: "Pogledajte portfolio",
      ctaSecondary: "Kontaktirajte nas",
      scrollHint: "Pomaknite se za radove",
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
      social: { title: "Društvene mreže", desc: "Profili, oglasi i sadržaj koji donosi rezultate." },
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
      eyebrow: "Izdvojeni radovi",
      heading: "Radovi koji govore sami za sebe.",
      viewAll: "Pogledajte sve radove",
      viewCasestudy: "Pogledajte rad",
      bookCall: "Zakažite poziv",
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
            { label: "Grafički dizajn & Branding", text: "izrada logotipa, knjige standarda, tiskani materijali te specijalizirani branding vozila i uniformi." },
            { label: "Društvene mreže & Sadržaj", text: "strateško vođenje profila, vođenje oglasnih kampanja (Ads) te foto i video produkcija na terenu." },
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
            { label: "Upoznavanje & Analiza", text: "definiranje vaših ciljeva i potreba." },
            { label: "Koncept", text: "razvoj i predstavljanje početnih vizualnih ideja." },
            { label: "Izrada & Dorada", text: "finiziranje dizajna kroz definiran broj izmjena." },
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
  },
  en: {
    nav: {
      about: "About",
      work: "Work",
      contact: "Contact",
      cta: "Request a Quote",
      whatsappLabel: "Contact us via WhatsApp",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      eyebrow: "Graphic Design, Web Development & Marketing · CreoLab Požega, Croatia",
      line1: "Design and marketing",
      line2: "that build your brand.",
      sub: "CREOLAB specializes in graphic design, web development and social media marketing.",
      ctaPrimary: "View Portfolio",
      ctaSecondary: "Contact Us",
      scrollHint: "Scroll down to see projects",
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
      social: { title: "Social Media", desc: "Profiles, ads and content that deliver results." },
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
      eyebrow: "Featured Work",
      heading: "Work that speaks for itself.",
      viewAll: "View All Work",
      viewCasestudy: "View Casestudy",
      bookCall: "Book a Call",
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
  },
  de: {
    nav: {
      about: "Über uns",
      work: "Arbeiten",
      contact: "Kontakt",
      cta: "Angebot anfordern",
      whatsappLabel: "Kontaktieren Sie uns über WhatsApp",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
    },
    hero: {
      eyebrow: "Grafikdesign, Webentwicklung & Marketing · CreoLab Požega, Kroatien",
      line1: "Design und Marketing,",
      line2: "die Ihre Marke aufbauen.",
      sub: "CREOLAB ist spezialisiert auf Grafikdesign, Webentwicklung und Social-Media-Marketing.",
      ctaPrimary: "Portfolio ansehen",
      ctaSecondary: "Kontaktieren Sie uns",
      scrollHint: "Scrollen Sie zu den Projekten",
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
      social: { title: "Social Media", desc: "Profile, Anzeigen und Inhalte, die Ergebnisse liefern." },
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
      eyebrow: "Ausgewählte Arbeiten",
      heading: "Arbeiten, die für sich sprechen.",
      viewAll: "Alle Arbeiten ansehen",
      viewCasestudy: "Projekt ansehen",
      bookCall: "Termin vereinbaren",
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
