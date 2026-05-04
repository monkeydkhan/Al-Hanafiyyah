import {
  BookOpenCheck,
  FileWarning,
  Layers3,
  LibraryBig,
  MessageSquareQuote,
  ShieldAlert,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

const sectCategories = [
  {
    title: "Hadadiyyah",
    arabic: "الحدادية",
    summary:
      "A future collection on harsh polemical tendencies, reckless tabdi', and how Sunni scholarship keeps criticism disciplined.",
    status: "Planned",
    topics: ["Tabdi'", "Scholarly adab", "Polemical excess"],
  },
];

const answerStructure = [
  {
    title: "Claim",
    description: "State the objection without exaggerating it.",
    icon: MessageSquareQuote,
  },
  {
    title: "Evidence",
    description: "Bring Qur'an, hadith, fiqh, and cited scholarly texts.",
    icon: LibraryBig,
  },
  {
    title: "Answer",
    description: "Separate the ruling, the reasoning, and the practical takeaway.",
    icon: BookOpenCheck,
  },
];

const emptyArticles = [
  "Overview and boundaries",
  "Frequently repeated claims",
  "Primary source excerpts",
  "Common misquotations",
];

export default function RefutationsPage() {
  return (
    <div className="refutations-shell">
      <section className="refutations-hero">
        <Reveal>
          <div className="refutations-eyebrow">
            <ShieldAlert className="h-4 w-4" />
            Refutations
          </div>
          <h1>Analysis of Sects</h1>
          <p>
            A calm archive for categorised responses. Each section will grow into
            sourced articles that name the claim, cite the evidence, and answer
            with adab.
          </p>
        </Reveal>
      </section>

      <section className="refutations-feature">
        <Reveal>
          <div className="refutations-feature-card">
            <div>
              <span className="refutations-section-label">Categories</span>
              <h2>Start by choosing the group or claim family.</h2>
            </div>
            <div className="refutations-filter-row" aria-label="Sect categories">
              <a href="#hadadiyyah">Hadadiyyah</a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="refutation-category-grid" aria-label="Refutation categories">
        {sectCategories.map((category, index) => (
          <Reveal key={category.title} delay={0.05 * index}>
            <article
              id={category.title.toLowerCase().replace(/[^a-z]+/g, "")}
              className="refutation-category-card"
            >
              <div className="refutation-card-top">
                <span>{category.status}</span>
                <Layers3 className="h-5 w-5" />
              </div>
              <p className="refutation-arabic">{category.arabic}</p>
              <h2>{category.title}</h2>
              <p className="refutation-summary">{category.summary}</p>
              <div className="refutation-topic-list">
                {category.topics.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>
              <Link href="/refutations" className="refutation-card-link">
                View collection
              </Link>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="refutations-method">
        <Reveal>
          <div className="yaqeen-section-title">
            <span />
            How Each Answer Works
            <span />
          </div>
        </Reveal>
        <div className="refutation-method-grid">
          {answerStructure.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={0.05 * index}>
                <article className="refutation-method-card">
                  <span className="refutation-method-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-5 w-5" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Reveal>
        <section className="refutations-empty-panel">
          <div className="refutations-empty-copy">
            <span className="refutations-section-label">Coming soon</span>
            <h2>No refutations have been published yet.</h2>
            <p>
              The page is ready for the archive. When content is added, these
              placeholders can become article cards under each sect category.
            </p>
          </div>
          <div className="refutations-empty-grid">
            {emptyArticles.map((item) => (
              <div key={item} className="refutations-empty-card">
                <FileWarning className="h-4 w-4" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
