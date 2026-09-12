import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PROJECTS, getProject, categoryFor } from "@/lib/portfolio";
import { isLocale, getDict, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/alternates";
import { buildOpenGraph } from "@/lib/opengraph";
import { buildBreadcrumbJsonLd } from "@/lib/structuredData";
import ContactBand from "@/components/ContactBand";

const SITE_URL = "https://creolab-design.hr";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const project = getProject(slug);
  if (!project) return {};

  const category = categoryFor(project, locale);
  const title = `${project.name}: ${category} | CreoLab`;
  const story = project.story?.[locale];
  const description = story
    ? story.challenge.slice(0, 150).replace(/\s+\S*$/, "") + "…"
    : `${category}: ${project.name}. ${
        locale === "en"
          ? "See the project in the CREOLAB portfolio."
          : locale === "de"
            ? "Sehen Sie sich das Projekt im CREOLAB-Portfolio an."
            : "Pogledajte projekt u CREOLAB portfoliju."
      }`;
  return {
    title,
    description,
    alternates: buildAlternates(locale, `/portfolio/${slug}`),
    ...buildOpenGraph(locale, `/portfolio/${slug}`, title, description, project.gallery[0]),
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const t = getDict(locale);
  const project = getProject(slug);
  if (!project) notFound();

  const category = categoryFor(project, locale);
  const story = project.story?.[locale];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "CreoLab", url: `${SITE_URL}/${locale}` },
    { name: t.pages.portfolio.eyebrow, url: `${SITE_URL}/${locale}/portfolio` },
    { name: project.name, url: `${SITE_URL}/${locale}/portfolio/${slug}` },
  ]);

  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const prevProject = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="hero-simple" style={{ paddingBlock: "28px 0 22px" }}>
        <div className="hero-swirl" aria-hidden />
        <div className="wrap" style={{ textAlign: "left" }}>
          <div className="breadcrumb">
            <Link href={`/${locale}/portfolio`}>&larr; {t.pages.portfolio.eyebrow}</Link>
          </div>
          <span className="hero-label">{category}</span>
          <h1 style={{ marginTop: 10, textAlign: "left" }}>{project.name}</h1>
        </div>
      </section>

      {story && (
        <section>
          <div className="wrap">
            <div className="story-grid">
              <div className="card">
                <span className="eyebrow">{t.portfolioDetail.challenge}</span>
                <p>{story.challenge}</p>
              </div>
              <div className="card">
                <span className="eyebrow">{t.portfolioDetail.approach}</span>
                <p>{story.approach}</p>
              </div>
              <div className="card">
                <span className="eyebrow">{t.portfolioDetail.result}</span>
                <p>{story.result}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="wrap">
          <div className="detail-gallery">
            {project.gallery.map((src, i) => (
              <div className="cell" key={src}>
                <Image
                  src={src}
                  alt={project.galleryAlt[i]}
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                  style={project.galleryFocus?.[i] ? { objectPosition: project.galleryFocus[i] } : undefined}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="prevnext">
            <Link href={`/${locale}/portfolio/${prevProject.slug}`}>
              <span className="pn-label">&larr; {t.portfolioDetail.prev}</span>
              <span className="pn-name">{prevProject.name}</span>
            </Link>
            <Link href={`/${locale}/portfolio/${nextProject.slug}`} className="next">
              <span className="pn-label">{t.portfolioDetail.next} &rarr;</span>
              <span className="pn-name">{nextProject.name}</span>
            </Link>
          </div>
        </div>
      </section>

      <ContactBand locale={locale} heading={t.contactBand.project.heading} lede={t.contactBand.project.lede} />
    </main>
  );
}
