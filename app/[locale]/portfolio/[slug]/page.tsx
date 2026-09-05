import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PROJECTS, getProject, categoryFor } from "@/lib/portfolio";
import { isLocale, getDict, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/alternates";
import { buildOpenGraph } from "@/lib/opengraph";
import { buildBreadcrumbJsonLd } from "@/lib/structuredData";

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
  const description = `${category}: ${project.name}. ${
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
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "CreoLab", url: `${SITE_URL}/${locale}` },
    { name: t.pages.portfolio.eyebrow, url: `${SITE_URL}/${locale}/portfolio` },
    { name: project.name, url: `${SITE_URL}/${locale}/portfolio/${slug}` },
  ]);

  return (
    <main className="px-6 pt-40 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="mx-auto max-w-5xl">
        <Link
          href={`/${locale}/portfolio`}
          className="mb-10 inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
        >
          &larr; {t.backToPortfolio}
        </Link>

        <div className="mb-16">
          <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            {category}
          </span>
          <h1 className="text-[clamp(2.2rem,5vw,4rem)]">{project.name}</h1>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {project.gallery.map((src, i) => (
            <div
              key={src}
              className={`glass relative overflow-hidden rounded-2xl ${
                project.gallery.length === 1 || i === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={src}
                  alt={project.galleryAlt[i]}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href={`/${locale}/kontakt`} className="inline-flex btn-cta">
            {t.ctaProject}
          </Link>
        </div>
      </div>
    </main>
  );
}
