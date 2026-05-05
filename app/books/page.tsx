import Link from "next/link";
import {
  BookOpen,
  BookOpenCheck,
  FileText,
  GraduationCap,
  Languages,
  Layers3,
  LibraryBig,
  ScrollText,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { books, type Book } from "@/lib/site-data";

const libraryTopics: Array<{
  slug: string;
  name: string;
  description: string;
  icon: typeof BookOpen;
}> = [
  {
    slug: "fiqh",
    name: "Fiqh",
    description: "Core Hanafi manuals for worship, daily rulings, and legal training.",
    icon: BookOpen,
  },
  {
    slug: "aqidah",
    name: "Aqidah",
    description: "Creed texts and primers for transmitted belief and theological clarity.",
    icon: BookOpenCheck,
  },
  {
    slug: "adab",
    name: "Adab",
    description: "Study ethics, intention, companionship, and the manners of knowledge.",
    icon: GraduationCap,
  },
  {
    slug: "hadith",
    name: "Hadith",
    description: "Narration collections, terminology, and hadith study resources.",
    icon: ScrollText,
  },
  {
    slug: "tafsir",
    name: "Tafsir",
    description: "Qur'an commentary, meanings, and guided reading resources.",
    icon: FileText,
  },
  {
    slug: "usul-al-fiqh",
    name: "Usul al-Fiqh",
    description: "Legal theory, evidences, principles, and Hanafi method.",
    icon: Layers3,
  },
  {
    slug: "arabic",
    name: "Arabic",
    description: "Grammar, morphology, reading tools, and language foundations.",
    icon: Languages,
  },
  {
    slug: "hanafi-tabaqat",
    name: "Hanafi Tabaqat",
    description: "Biographical layers, jurist rankings, and school history.",
    icon: LibraryBig,
  },
];

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function coverClass(book: Book) {
  const byCategory: Record<string, string> = {
    Fiqh: "cover-1",
    Aqidah: "cover-3",
    Adab: "cover-4",
  };

  return byCategory[book.category] ?? "cover-2";
}

const categories = libraryTopics.map((topic) => ({
  ...topic,
  books: books.filter((book) => slugify(book.category) === topic.slug),
  href: `/books/topics/${topic.slug}`,
}));

export default function BooksPage() {
  return (
    <div className="books-catalog-shell">
      <section className="books-catalog-hero">
        <Reveal>
          <span className="books-catalog-kicker">
            <LibraryBig className="h-4 w-4" />
            Library
          </span>
          <h1>Browse books by topic.</h1>
          <p>
            Choose a topic, then open the text for summaries, themes, and notes.
          </p>
        </Reveal>
      </section>

      <section className="book-topic-grid" aria-label="Book topics">
        {categories.map((category, index) => {
          const Icon = category.icon;

          return (
            <Reveal key={category.name} delay={0.05 * index}>
              <Link href={category.href} className="book-topic-card">
                <span className="book-topic-icon">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="book-topic-count">
                  {category.books.length} {category.books.length === 1 ? "book" : "books"}
                </span>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
                <span className="book-topic-link">Browse</span>
              </Link>
            </Reveal>
          );
        })}
      </section>

      <section className="books-catalog-note">
        <Sparkles className="h-5 w-5" />
        <p>
          Some topics are prepared for future additions. Browse a category to
          see its dedicated book shelf.
        </p>
      </section>

      <section className="book-shelf-section">
        <div className="yaqeen-section-title">
          <span />
          <Link href="/books">Books</Link>
          <span />
        </div>

        <div className="book-shelf-scroll" aria-label="All books">
          {books.map((book, index) => (
            <Reveal key={book.slug} delay={0.04 * index}>
              <Link href={`/books/${book.slug}`} className="book-catalog-card">
                <div className={`book-cover ${coverClass(book)}`}>
                  {index === 0 ? <span className="new-dot">New!</span> : null}
                  <p>{book.arabicTitle}</p>
                  <h3>{book.title}</h3>
                  <small>{book.category}</small>
                </div>
                <div className="book-catalog-copy">
                  <span>{book.category}</span>
                  <h3>{book.title}</h3>
                  <p>{book.summary}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
