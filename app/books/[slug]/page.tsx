import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BookMarked,
  LibraryBig,
  ScrollText,
  UserRound,
} from "lucide-react";
import { BookReaderModal } from "@/components/book-reader-modal";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { books, getBookBySlug, getScholarsBySlugs, type Book } from "@/lib/site-data";

const quduriPdf = "https://archive.org/download/Mukhtasar-Al-Quduri/quduri.pdf";
const quduriReader = `${quduriPdf}#view=FitH&zoom=70`;

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

function QuduriCover() {
  return (
    <div className="quduri-cover" aria-label="Mukhtasar al-Quduri cover">
      <div className="quduri-cover-ornament" />
      <p dir="rtl">مختصر القدوري</p>
      <h2>Mukhtasar al-Quduri</h2>
      <span>Hanafi Fiqh</span>
      <small>Imam Abu al-Husayn al-Quduri</small>
    </div>
  );
}

function QuduriBookPage({ book }: { book: Book }) {
  const facts = [
    ["Arabic title", book.arabicTitle],
    ["Author", book.author],
    ["Lifespan", "362-428 AH / 972-1037 CE"],
    ["Language", "Arabic"],
  ];

  return (
    <div className="book-reader-shell">
      <Reveal>
        <Link href="/books" className="book-detail-back">
          <ArrowLeft className="h-4 w-4" />
          Back to books
        </Link>
      </Reveal>

      <section className="quduri-opening-card">
        <Reveal>
          <div className="quduri-opening-copy">
            <span className="book-detail-kicker">
              <BookMarked className="h-4 w-4" />
              Hanafi Fiqh
            </span>
            <h1>{book.title}</h1>
            <p className="quduri-arabic-title" dir="rtl">
              {book.arabicTitle}
            </p>
            <p className="quduri-opening-summary">
              A foundational Hanafi manual for students beginning structured
              study of worship, daily rulings, and legal method.
            </p>

            <div className="quduri-action-row">
              <BookReaderModal
                downloadUrl={quduriPdf}
                readerUrl={quduriReader}
                title="Read Mukhtasar al-Quduri"
              />
              <span className="quduri-reader-note">Arabic scan opens in a reader</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <QuduriCover />
        </Reveal>
      </section>

      <section className="quduri-meta-grid" aria-label="Book information">
        {facts.map(([label, value], index) => (
          <Reveal key={label} delay={0.04 * index}>
            <div className="quduri-meta-card">
              <span>{label}</span>
              <p>{value}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="quduri-study-panel">
        <Reveal>
          <div className="quduri-study-intro">
            <span className="book-detail-kicker">
              <ScrollText className="h-4 w-4" />
              Study notes
            </span>
            <h2>What this page will grow into</h2>
            <p>
              Later this can support translations, teacher notes, chapter
              navigation, vocabulary aids, and side-by-side commentary.
            </p>
          </div>
        </Reveal>

        <div className="quduri-study-list">
          {book.highlights.map((highlight, index) => (
            <Reveal key={highlight} delay={0.05 * index}>
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{highlight}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
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

  if (book.slug === "mukhtasar-al-quduri") {
    return <QuduriBookPage book={book} />;
  }

  const relatedScholars = getScholarsBySlugs(book.scholarSlugs);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-16 sm:px-8 lg:px-12">
      <Reveal>
        <Link href="/books" className="book-detail-back">
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
              <h2 className="font-display text-3xl text-foreground">Key themes</h2>
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
                  <div key={label} className="surface-soft rounded-[1.2rem] px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                      {label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-panel rounded-[2rem] p-5">
              <div className="flex items-center gap-2">
                <UserRound className="h-4 w-4 text-[var(--primary-strong)]" />
                <p className="text-sm font-semibold text-foreground">Related scholars</p>
              </div>
              <div className="mt-4 space-y-3">
                {relatedScholars.map((scholar) => (
                  <Link
                    key={scholar.slug}
                    href="/scholars"
                    className="surface-soft block rounded-[1.2rem] px-4 py-4 transition hover:border-[color:var(--primary)]"
                  >
                    <p className="text-sm font-semibold text-foreground">{scholar.name}</p>
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
