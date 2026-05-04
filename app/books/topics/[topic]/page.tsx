import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  BookOpenCheck,
  GraduationCap,
  LibraryBig,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { books, type Book } from "@/lib/site-data";

const topicCopy: Record<
  string,
  {
    title: string;
    description: string;
    icon: typeof BookOpen;
  }
> = {
  fiqh: {
    title: "Fiqh",
    description:
      "Core Hanafi manuals for worship, daily rulings, and structured legal training.",
    icon: BookOpen,
  },
  aqidah: {
    title: "Aqidah",
    description:
      "Creed texts and primers for transmitted belief, theological clarity, and disciplined study.",
    icon: BookOpenCheck,
  },
  adab: {
    title: "Adab",
    description:
      "Study ethics, intention, companionship, and the manners that protect sacred knowledge.",
    icon: GraduationCap,
  },
};

function coverClass(book: Book) {
  const byCategory: Record<string, string> = {
    Fiqh: "cover-1",
    Aqidah: "cover-3",
    Adab: "cover-4",
  };

  return byCategory[book.category] ?? "cover-2";
}

export function generateStaticParams() {
  return Object.keys(topicCopy).map((topic) => ({ topic }));
}

export default async function BookTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const topicInfo = topicCopy[topic];

  if (!topicInfo) {
    notFound();
  }

  const topicBooks = books.filter(
    (book) => book.category.toLowerCase() === topic,
  );
  const Icon = topicInfo.icon;

  return (
    <div className="book-topic-page-shell">
      <Reveal>
        <Link href="/books" className="book-detail-back">
          <ArrowLeft className="h-4 w-4" />
          Back to books
        </Link>
      </Reveal>

      <section className="book-topic-page-hero">
        <Reveal>
          <span className="books-catalog-kicker">
            <Icon className="h-4 w-4" />
            Book topic
          </span>
          <h1>{topicInfo.title} books.</h1>
          <p>{topicInfo.description}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="book-topic-page-count">
            <LibraryBig className="h-5 w-5" />
            <strong>{topicBooks.length}</strong>
            <span>{topicBooks.length === 1 ? "book" : "books"}</span>
          </div>
        </Reveal>
      </section>

      <section className="book-topic-tabs" aria-label="Book topics">
        {Object.entries(topicCopy).map(([slug, item]) => (
          <Link
            key={slug}
            href={`/books/topics/${slug}`}
            className={slug === topic ? "is-active" : ""}
          >
            {item.title}
          </Link>
        ))}
      </section>

      <section className="book-topic-book-grid" aria-label={`${topicInfo.title} books`}>
        {topicBooks.map((book, index) => (
          <Reveal key={book.slug} delay={0.05 * index}>
            <Link href={`/books/${book.slug}`} className="book-topic-book-card">
              <div className={`book-cover ${coverClass(book)}`}>
                {index === 0 ? <span className="new-dot">New!</span> : null}
                <p>{book.arabicTitle}</p>
                <h3>{book.title}</h3>
                <small>{book.category}</small>
              </div>
              <div className="book-catalog-copy">
                <span>{book.level}</span>
                <h3>{book.title}</h3>
                <p>{book.summary}</p>
                <div>
                  {book.keyThemes.slice(0, 4).map((theme) => (
                    <small key={theme}>{theme}</small>
                  ))}
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
