import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "What Is A Madhhab?",
    body: [
      "A madhhab is a disciplined school of Islamic law. It is not merely a list of isolated opinions from one imam, but a structured way of understanding the Qur'an and Sunnah through principles, transmitted rulings, legal reasoning, and generations of trained jurists.",
      "The Hanafi madhhab gives Muslims a reliable path for learning practical rulings without assuming that every person can independently derive law from the revealed sources.",
    ],
  },
  {
    title: "The School Begins In Kufa",
    body: [
      "The Hanafi school grew out of the legal culture of Kufa, one of the major early centers of Islamic learning. Its roots are connected to the teaching legacy of Abdullah ibn Mas'ud, then Alqamah, Ibrahim al-Nakhai, Hammad ibn Abi Sulayman, and Imam Abu Hanifah.",
      "This lineage matters because it shows that the school was not invented suddenly. Imam Abu Hanifah inherited an earlier juristic culture, refined it, taught it, and helped turn it into a lasting legal school.",
    ],
  },
  {
    title: "Abu Hanifah's Circle",
    body: [
      "Imam Abu Hanifah did not merely answer questions alone. His circle functioned like a juristic workshop where cases were discussed, possibilities were debated, and students were trained to think carefully.",
      "His leading students, especially Abu Yusuf and Muhammad ibn al-Hasan al-Shaybani, preserved, spread, and developed the school. Their work became central to the later Hanafi tradition.",
    ],
  },
  {
    title: "Method And Sources",
    body: [
      "The Hanafi madhhab is rooted in the Qur'an and Sunnah, then ijma, the opinions of the Companions, qiyas, custom, and istihsan. The school pays close attention to the strength of evidence and how proofs are reconciled and applied.",
      "Differences between the schools are often not about ignoring evidence. They are frequently about how evidence is classified, prioritized, reconciled, and brought into legal application.",
    ],
  },
  {
    title: "A Living Library",
    body: [
      "The Hanafi tradition is preserved through books. Imam Muhammad's foundational works became a base layer for later legal writing. Over time, primers, abridgements, commentaries, marginal notes, fatwa collections, and usul works formed a large scholarly library.",
      "Texts such as Mukhtasar al-Quduri, al-Hidayah, Kanz al-Daqa'iq, Badai al-Sanai, al-Mabsut, and Radd al-Muhtar represent different levels of study, explanation, evidence, fatwa, and legal analysis.",
    ],
  },
  {
    title: "How To Study It",
    body: [
      "The average Muslim should first learn enough fiqh to worship Allah correctly: purification, prayer, fasting, zakah when relevant, hajj when relevant, and the rulings connected to their life situation.",
      "A serious student needs more than quick answers. They need teachers, repeated study of relied-upon texts, exposure to usul al-fiqh, and patience with the way legal rulings are built.",
    ],
  },
];

const summaryCards = [
  ["Rooted in Kufa", "The school carries the legal inheritance of early Iraqi scholarship."],
  ["Built by jurists", "Its method was preserved by Imam Abu Hanifah and his leading students."],
  ["Studied through books", "The madhhab is learned through primers, commentaries, and relied-upon texts."],
];

export default function HanafiMadhhabOverviewArticle() {
  return (
    <article className="article-shell">
      <Link href="/articles" className="back-link">
        <ArrowLeft className="h-4 w-4" />
        Back to articles
      </Link>

      <header className="article-hero">
        <span className="section-kicker">Madhhab Overview</span>
        <h1>An Overview of the Hanafi Madhhab</h1>
        <p>
          A simple map of what a madhhab is, how the Hanafi school formed, why
          its books matter, and how a beginner should approach its study.
        </p>
      </header>

      <section className="article-summary-grid">
        {summaryCards.map(([title, text]) => (
          <div key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        ))}
      </section>

      <section className="article-body">
        {sections.map((section) => (
          <section key={section.title} className="article-section">
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </section>

      <section className="article-takeaway">
        <span className="section-kicker">Takeaway</span>
        <p>
          The Hanafi madhhab is best understood as a disciplined path of legal
          learning. It begins with revelation, passes through the scholarship of
          the early Muslims, takes shape in Kufa through Abu Hanifah and his
          students, and is preserved through centuries of careful study.
        </p>
      </section>
    </article>
  );
}
