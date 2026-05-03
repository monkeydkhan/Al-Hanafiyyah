import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  LibraryBig,
  UserRound,
} from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { books, getBookBySlug, getScholarsBySlugs } from "@/lib/site-data";

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  const relatedScholars = getScholarsBySlugs(book.scholarSlugs);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-16 sm:px-8 lg:px-12">
      <Reveal>
        <Link
          href="/books"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to books
        </Link>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="space-y-8">
            <PageIntro
              eyebrow={book.category}
              title={book.title}
              description={book.description}
            />

            <div className="surface-panel rounded-[2rem] p-6">
              <h2 className="font-display text-3xl text-foreground">
                What belongs on this page
              </h2>
              <div className="mt-6 grid gap-3">
                {book.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="surface-soft rounded-[1.3rem] px-4 py-4 text-sm leading-7 text-[var(--muted)]"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-panel rounded-[2rem] p-6">
              <h2 className="font-display text-3xl text-foreground">
                Key themes
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {book.keyThemes.map((theme) => (
                  <span
                    key={theme}
                    className="rounded-full bg-[var(--primary-soft)] px-3 py-1 text-xs font-semibold text-[var(--primary-strong)]"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="surface-panel rounded-[2rem] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                Book information
              </p>
              <div className="mt-5 space-y-4">
                {[
                  ["Arabic title", book.arabicTitle],
                  ["Author", book.author],
                  ["Level", book.level],
                  ["Language", book.language],
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
                <UserRound className="h-4 w-4 text-[var(--primary-strong)]" />
                <p className="text-sm font-semibold text-foreground">
                  Related scholars
                </p>
              </div>
              <div className="mt-4 space-y-3">
                {relatedScholars.map((scholar) => (
                  <Link
                    key={scholar.slug}
                    href="/scholars"
                    className="surface-soft block rounded-[1.2rem] px-4 py-4 transition hover:border-[color:var(--primary)]"
                  >
                    <p className="text-sm font-semibold text-foreground">
                      {scholar.name}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {scholar.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="surface-panel rounded-[2rem] p-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary-strong)]">
              <LibraryBig className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Related route structure
              </p>
              <p className="text-sm text-[var(--muted)]">
                This page is ready to expand into chapter notes, tagged articles,
                and edition-level metadata.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
