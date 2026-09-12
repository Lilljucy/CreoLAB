import { getDict, type Locale } from "@/lib/i18n";

export default function ServicesBand({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const links = [
    { href: `/${locale}/graficki-dizajn`, ...t.servicesBand.items[0] },
    { href: `/${locale}/izrada-web-stranica`, ...t.servicesBand.items[1] },
    { href: `/${locale}/dizajn-etiketa-za-vino`, ...t.servicesBand.items[2] },
  ];

  return (
    <section className="services-band">
      <div className="wrap">
        <div className="services-head">
          <h2>{t.servicesBand.heading}</h2>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M6 18L18 6M18 6H9M18 6v9" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </div>
        <div className="services-grid2">
          {links.map((item) => (
            <a key={item.href} href={item.href}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="go">{t.servicesBand.more} &rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
