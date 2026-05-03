import Link from "next/link";
import { ArrowRight, ScrollText } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";

const articles = [
  {
    title: "An Overview of the Hanafi Madhhab",
    href: "/articles/hanafi-madhhab-overview",
    category: "Madhhab",
    summary:
      "A clear introduction to the Hanafi school: what a madhhab is, how the school formed in Kufa, why its books matter, and how a student should approach it.",
    points: ["Kufa and Abu Hanifah", "Sources and method", "Books, study, and adab"],
  },
];

export default function ArticlesPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-16 sm:px-8 lg:px-12">
      <PageIntro
        eyebrow="Articles"
        title="Readable guides for the tradition."
        description="Short, structured essays that introduce the books, scholars, legal method, and study paths behind Al Hanafiyyah."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {articles.map((article, index) => (
          <Reveal key={article.href} delay={0.08 * index}>
            <Link href={article.href} className="route-card block rounded-[1.9rem] p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="eyebrow-chip">{article.category}</span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary-strong)]">
                  <ScrollText className="h-5 w-5" />
                </span>
              </div>
              <h2 className="mt-8 font-display text-4xl text-foreground">
                {article.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {article.summary}
              </p>
              <div className="mt-6 space-y-3">
                {article.points.map((point) => (
                  <div
                    key={point}
                    className="surface-soft rounded-[1.2rem] px-4 py-3 text-sm text-[var(--muted)]"
                  >
                    {point}
                  </div>
                ))}
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-strong)]">
                Read article
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
