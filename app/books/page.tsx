import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BookOpenCheck,
  GraduationCap,
  LibraryBig,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { books, type Book } from "@/lib/site-data";

const categoryCopy: Record<
  string,
  {
    description: string;
    icon: typeof BookOpen;
  }
> = {
  Fiqh: {
    description: "Core Hanafi manuals for worship, daily rulings, and legal training.",
    icon: BookOpen,
  },
  Aqidah: {
    description: "Creed texts and primers for transmitted belief and theological clarity.",
    icon: BookOpenCheck,
  },
  Adab: {
    description: "Study ethics, intention, companionship, and the manners of knowledge.",
    icon: GraduationCap,
  },
};

const categories = Array.from(new Set(books.map((book) => book.category))).map(
  (category) => ({
    name: category,
    books: books.filter((book) => book.category === category),
    ...categoryCopy[category],
  }),
);

function coverClass(book: Book) {
  const byCategory: Record<string, string> = {
    Fiqh: "cover-1",
    Aqidah: "cover-3",
    Adab: "cover-4",
  };

  return byCategory[book.category] ?? "cover-2";
}

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
              <a href={`#${category.name.toLowerCase()}`} className="book-topic-card">
                <span className="book-topic-icon">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="book-topic-count">
                  {category.books.length} {category.books.length === 1 ? "book" : "books"}
                </span>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
                <span className="book-topic-link">
                  View topic
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </Reveal>
          );
        })}
      </section>

      <section className="books-catalog-note">
        <Sparkles className="h-5 w-5" />
        <p>
          More categories can be added as the library grows, such as Hadith,
          Tafsir, Usul al-Fiqh, Arabic, and Hanafi tabaqat.
        </p>
      </section>

      <div className="book-category-sections">
        {categories.map((category) => (
          <section
            key={category.name}
            id={category.name.toLowerCase()}
            className="book-category-section"
          >
            <div className="yaqeen-section-title">
              <span />
              <a href={`#${category.name.toLowerCase()}`}>{category.name}</a>
              <span />
            </div>

            <div className="book-catalog-strip">
              {category.books.map((book, index) => (
                <Reveal key={book.slug} delay={0.05 * index}>
                  <Link href={`/books/${book.slug}`} className="book-catalog-card">
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
                        {book.keyThemes.slice(0, 3).map((theme) => (
                          <small key={theme}>{theme}</small>
                        ))}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
