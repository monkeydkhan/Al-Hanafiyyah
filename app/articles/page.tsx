import Link from "next/link";
import { ScrollText } from "lucide-react";
import { Reveal } from "@/components/reveal";

const article = {
  title: "An Overview of the Hanafi Madhhab",
  href: "/articles/hanafi-madhhab-overview",
  category: "Madhhab",
  summary:
    "A clear introduction to what a madhhab is, how the Hanafi school formed, why its books matter, and how students should approach its study.",
};

export default function ArticlesPage() {
  return (
    <div className="articles-shell">
      <section className="articles-hero">
        <Reveal>
          <span className="section-kicker">Articles</span>
          <h1>Read structured guides.</h1>
          <p>
            Essays on the Hanafi madhhab, its method, books, scholars, and the
            study path behind Al Hanafiyyah.
          </p>
        </Reveal>
      </section>

      <section className="articles-feature-section">
        <Reveal delay={0.05}>
          <Link href={article.href} className="articles-feature-card">
            <div className="articles-feature-icon">
              <ScrollText className="h-6 w-6" />
            </div>
            <span>{article.category}</span>
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <strong>Read article</strong>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
