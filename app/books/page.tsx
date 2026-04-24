import Link from "next/link";
import { ArrowRight, BookOpenText, ScrollText } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { books } from "@/lib/site-data";

export default function BooksPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-16 sm:px-8 lg:px-12">
      <PageIntro
        eyebrow="Books"
        title="Book pages ready for summaries, themes, metadata, and future annotations."
        description="This route gives each text its own home instead of burying everything on the landing page. You can keep expanding these cards into a full searchable library."
        actions={
          <Link href="/admin" className="button-secondary">
            Manage from admin
          </Link>
        }
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {books.map((book, index) => (
          <Reveal key={book.slug} delay={0.06 * index}>
            <article className="route-card h-full rounded-[2rem] p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <span className="eyebrow-chip">{book.category}</span>
                  <span className="eyebrow-chip">{book.level}</span>
                </div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary-strong)]">
                  <BookOpenText className="h-5 w-5" />
                </span>
              </div>

              <h2 className="mt-8 font-display text-4xl text-foreground">
                {book.title}
              </h2>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
                {book.arabicTitle}
              </p>
              <p className="mt-4 text-sm text-[var(--muted)]">
                {book.author} • {book.language}
              </p>
              <p className="mt-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
                {book.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {book.keyThemes.map((theme) => (
                  <span
                    key={theme}
                    className="rounded-full bg-[var(--primary-soft)] px-3 py-1 text-xs font-semibold text-[var(--primary-strong)]"
                  >
                    {theme}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                  <ScrollText className="h-4 w-4 text-[var(--primary-strong)]" />
                  {book.summary}
                </div>
                <Link
                  href={`/books/${book.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-strong)] hover:underline"
                >
                  Open page
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
