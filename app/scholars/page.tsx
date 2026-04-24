import Link from "next/link";
import { ArrowRight, GraduationCap, ScrollText } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { scholars } from "@/lib/site-data";

export default function ScholarsPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-16 sm:px-8 lg:px-12">
      <PageIntro
        eyebrow="Scholars"
        title="Biographies that connect names, books, and study pathways."
        description="This route is designed for clean scholar pages with short biographies, major works, and links back into the book catalogue."
      />

      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {scholars.map((scholar, index) => (
          <Reveal key={scholar.slug} delay={0.05 * index}>
            <article className="route-card h-full rounded-[1.9rem] p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="eyebrow-chip">{scholar.region}</span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary-strong)]">
                  <GraduationCap className="h-5 w-5" />
                </span>
              </div>

              <h2 className="mt-8 font-display text-4xl leading-tight text-foreground">
                {scholar.name}
              </h2>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[var(--muted)]">
                {scholar.honorific}
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                {scholar.dates} • {scholar.focus}
              </p>
              <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                {scholar.summary}
              </p>

              <div className="mt-6 space-y-3">
                {scholar.traits.map((trait) => (
                  <div
                    key={trait}
                    className="surface-soft rounded-[1.2rem] px-4 py-3 text-sm text-[var(--muted)]"
                  >
                    {trait}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                  <ScrollText className="h-4 w-4 text-[var(--primary-strong)]" />
                  {scholar.relatedBookSlugs.length} linked texts
                </div>
                <Link
                  href={`/scholars/${scholar.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-strong)] hover:underline"
                >
                  Read bio
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
