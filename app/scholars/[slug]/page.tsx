import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpenText, UserRound } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { getBooksBySlugs, getScholarBySlug, scholars } from "@/lib/site-data";

export function generateStaticParams() {
  return scholars.map((scholar) => ({ slug: scholar.slug }));
}

export default async function ScholarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scholar = getScholarBySlug(slug);

  if (!scholar) {
    notFound();
  }

  const relatedBooks = getBooksBySlugs(scholar.relatedBookSlugs);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-16 sm:px-8 lg:px-12">
      <Reveal>
        <Link
          href="/scholars"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to scholars
        </Link>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="space-y-8">
            <PageIntro
              eyebrow={scholar.region}
              title={scholar.name}
              description={scholar.summary}
            />

            <div className="surface-panel rounded-[2rem] p-6">
              <h2 className="font-display text-3xl text-foreground">
                Biography
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-8 text-[var(--muted)] sm:text-base">
                {scholar.biography.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="surface-panel rounded-[2rem] p-6">
              <h2 className="font-display text-3xl text-foreground">
                Notable works
              </h2>
              <div className="mt-5 grid gap-3">
                {scholar.notableWorks.map((work) => (
                  <div
                    key={work}
                    className="surface-soft rounded-[1.2rem] px-4 py-4 text-sm text-[var(--muted)]"
                  >
                    {work}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="surface-panel rounded-[2rem] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                Scholar information
              </p>
              <div className="mt-5 space-y-4">
                {[
                  ["Honorific", scholar.honorific],
                  ["Dates", scholar.dates],
                  ["Region", scholar.region],
                  ["Focus", scholar.focus],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="surface-soft rounded-[1.2rem] px-4 py-3"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                      {label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-panel rounded-[2rem] p-5">
              <div className="flex items-center gap-2">
                <BookOpenText className="h-4 w-4 text-[var(--primary-strong)]" />
                <p className="text-sm font-semibold text-foreground">
                  Related books
                </p>
              </div>
              <div className="mt-4 space-y-3">
                {relatedBooks.map((book) => (
                  <Link
                    key={book.slug}
                    href={`/books/${book.slug}`}
                    className="surface-soft block rounded-[1.2rem] px-4 py-4 transition hover:border-[color:var(--primary)]"
                  >
                    <p className="text-sm font-semibold text-foreground">
                      {book.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {book.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/admin" className="button-primary w-full">
              Edit profile in admin
              <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="surface-panel rounded-[2rem] p-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary-strong)]">
              <UserRound className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Route purpose
              </p>
              <p className="text-sm text-[var(--muted)]">
                Each scholar page is set up to connect biography, major works,
                and the library routes built elsewhere in the site.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
