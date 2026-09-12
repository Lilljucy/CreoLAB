import Image from "next/image";
import { getDict, type Locale } from "@/lib/i18n";
import { PROJECTS, getProject } from "@/lib/portfolio";

const MOSAIC_SLUGS = PROJECTS.map((p) => p.slug).filter(
  (s) => !["soldo-vinarija", "udruga-igrac", "caffe-bar-vanilla", "adria-motors"].includes(s)
);

const CLUSTER_SLUGS = [
  { slug: "ember-kamin", size: 150, c: "c2" },
  { slug: "color-trgovina", size: 142, c: "c1" },
  { slug: "omega-knjigovodstvo", size: 115, c: "c3" },
  { slug: "previsic-vinarija", size: 115, c: "c4" },
  { slug: "mitrovic-vinarija", size: 115, c: "c5" },
  { slug: "sax-win", size: 96, c: "c6" },
];

function Mark({ ok }: { ok: boolean }) {
  return ok ? (
    <svg viewBox="0 0 24 24" fill="none" className="mark yes">
      <path d="M4 13l5 5L20 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" className="mark no">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function TrustRow({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  return (
    <section>
      <div className="wrap trust-row">
        {t.trust.map((item) => (
          <div key={item.t}>
            <h3>{item.t}</h3>
            <p>{item.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CompareSection({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  return (
    <section>
      <div className="wrap">
        <span className="eyebrow">{t.compare.eyebrow}</span>
        <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 500, margin: "10px 0 32px" }}>
          {t.compare.heading}
        </h2>
        <div className="compare-wrap">
          <table className="compare">
            <thead>
              <tr>
                <th />
                <th>{t.compare.us}</th>
                <th>{t.compare.them}</th>
              </tr>
            </thead>
            <tbody>
              {t.compare.rows.map((row, i) => (
                <tr key={row}>
                  <td>{row}</td>
                  <td>
                    <Mark ok />
                  </td>
                  <td>
                    <Mark ok={i === 2} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function StatMosaicSection({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  return (
    <section>
      <div className="wrap stat-split">
        <div className="stat-panel">
          <div className="num">3</div>
          <p>{t.langStat}</p>
        </div>
        <div className="mini-mosaic">
          {MOSAIC_SLUGS.map((slug) => {
            const p = getProject(slug)!;
            return (
              <div className="cell" key={slug}>
                <Image src={p.img} alt={p.name} fill sizes="12vw" className="object-cover" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ClusterSection({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  return (
    <section>
      <div className="wrap cluster-layout">
        <div className="cluster-legend">
          <span className="eyebrow">Portfolio</span>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 500, marginTop: 10 }}>{t.cluster.heading}</h2>
          <p>{t.cluster.p}</p>
        </div>
        <div className="circle-cluster">
          {CLUSTER_SLUGS.map(({ slug, size, c }) => {
            const p = getProject(slug)!;
            return (
              <div className={`circle ${c}`} style={{ width: size, height: size }} key={slug}>
                <div className="circle-inner" style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image src={p.img} alt={p.name} fill sizes="150px" className="object-cover" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
