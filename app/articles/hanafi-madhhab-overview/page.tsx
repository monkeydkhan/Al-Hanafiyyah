import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  Library,
  MapPinned,
  Scale,
  ScrollText,
  Users,
} from "lucide-react";

const sections = [
  {
    title: "1. What is a madhhab?",
    icon: ScrollText,
    body: [
      "A madhhab is a school of Islamic law. It is not simply a list of opinions from one imam. It is a disciplined way of understanding the Quran and Sunnah through principles, legal reasoning, transmitted rulings, and generations of trained jurists.",
      "The Hanafi madhhab is therefore a method and a tradition. It gives Muslims a reliable path for learning practical rulings without pretending every person can personally derive law from the sources.",
    ],
  },
  {
    title: "2. The story begins in Kufa",
    icon: MapPinned,
    body: [
      "The Hanafi school grows out of the legal culture of Kufa, a major early center of Islamic learning. Its roots are tied especially to the teaching legacy of Abdullah ibn Mas'ud, then Alqamah, Ibrahim al-Nakhai, Hammad ibn Abi Sulayman, and finally Imam Abu Hanifah.",
      "That lineage matters because it shows the school was not invented suddenly. Abu Hanifah inherited an earlier juristic culture, refined it, taught it, and helped turn it into a lasting legal school.",
    ],
  },
  {
    title: "3. Abu Hanifah's circle was a workshop",
    icon: Users,
    body: [
      "One of the most interesting parts of the Hanafi story is the teaching circle. Abu Hanifah did not merely answer questions alone. He trained students, discussed cases, debated possibilities, and worked with jurists who had different strengths.",
      "His major students, especially Abu Yusuf and Muhammad ibn al-Hasan al-Shaybani, preserved, spread, and developed the school. Abu Yusuf served as a judge and helped spread Hanafi legal method through judicial life. Muhammad codified foundational works that later Hanafi books relied upon.",
    ],
  },
  {
    title: "4. The method has a source order",
    icon: Scale,
    body: [
      "The Hanafi madhhab is rooted in the Quran and Sunnah, then ijma, the opinions of the Companions, qiyas, custom, and istihsan. The school gives careful attention to the strength of evidence, whether a proof is definitive or speculative, and how transmitted texts relate to legal reasoning.",
      "This is why differences between schools are not always about ignoring evidence. Often they are about how evidence is classified, reconciled, prioritized, and applied.",
    ],
  },
  {
    title: "5. The madhhab became a library",
    icon: Library,
    body: [
      "The Hanafi tradition is carried through books. Imam Muhammad's six foundational works, known as Zahir al-Riwayah, became a base layer for later legal writing. Over time, primers, abridgements, commentaries, marginal notes, fatwa collections, and usul works formed a large scholarly library.",
      "Texts like Mukhtasar al-Quduri, al-Hidayah, Kanz al-Daqa'iq, Badai al-Sanai, al-Mabsut, and Radd al-Muhtar are not random titles. They represent different levels of study: memorization, practice, explanation, evidence, fatwa, and advanced legal analysis.",
    ],
  },
  {
    title: "6. How should someone study it?",
    icon: BookOpen,
    body: [
      "The average Muslim should first learn enough fiqh to worship Allah correctly: purification, prayer, fasting, zakah when relevant, hajj when relevant, and the rulings connected to their life situation.",
      "A serious student needs more than quick answers. They need teachers, repeated study of relied-upon texts, exposure to usul al-fiqh, and patience with the way legal rulings are built.",
    ],
  },
  {
    title: "7. Taqlid and adab keep the path balanced",
    icon: GraduationCap,
    body: [
      "Taqlid means following qualified scholarship when one does not have the tools for ijtihad. It is not meant to replace the Quran and Sunnah. It is a practical way for non-specialists to follow the Quran and Sunnah through reliable scholarship.",
      "The mature student also learns adab al-ikhtilaf. Some issues are definitive, but many fiqh questions are open to valid scholarly disagreement. A person can follow their school with confidence while respecting valid differences among qualified scholars.",
    ],
  },
];

const fiqhTopics = [
  {
    label: "1.",
    title: "al-ʿIbādāt (Devotional Practices)",
    body: "Rules and regulations related to acts of devotional worship and actions related to them such as purification (ṭahārah), prayer (ṣalāh), zakāh, fasting (ṣawm), and ḥajj.",
  },
  {
    label: "2.",
    title: "al-Muʿamalāt (Social Dealings)",
    body: "This would include transactional law (sales, lease, contracts, partnerships, prohibition of interest), family law (marriage, divorce, inheritance), and judicial matters (adjudication, court procedure, evidence, witnesses, testifying, qualification of a judge, arbitration).",
  },
  {
    label: "3.",
    title: "al-Ḥudūd wa al-Jināyāt (Divinely Ordained Punishments and Crimes)",
    body: "This includes criminal law (crimes, prescribed punishments, discretionary punishment).",
  },
];

export default function HanafiMadhhabOverviewArticle() {
  return (
    <article className="mx-auto w-full max-w-5xl px-4 pb-20 sm:px-8 lg:px-12">
      <Link
        href="/articles"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] transition hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to articles
      </Link>

      <header className="surface-panel mt-8 rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="eyebrow-chip">Madhhab overview</div>
        <h1 className="mt-6 font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
          An Overview of the Hanafi Madhhab
        </h1>
        <p className="mt-6 text-base leading-8 text-[var(--muted)] sm:text-lg">
          Based on <em>A Brief Introduction to the Hanafi Madhhab</em> by Furhan
          Zubairi, this article gives a simple map of the Hanafi school: where it
          came from, how it thinks, why its books matter, and how a beginner should
          approach it.
        </p>
      </header>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          ["Oldest of the four", "The Hanafi school is commonly presented as the earliest of the four surviving Sunni legal schools."],
          ["Rooted in Kufa", "Its early story is tied to the legal inheritance of Ibn Mas'ud and the scholars of Kufa."],
          ["A living library", "The school is preserved through primers, commentaries, fatwa works, and usul texts."],
        ].map(([title, text]) => (
          <div key={title} className="surface-soft rounded-[1.5rem] p-5">
            <h2 className="font-bold text-foreground">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{text}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 space-y-5">
        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <section key={section.title} className="surface-panel rounded-[1.8rem] p-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary-strong)]">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display text-3xl text-foreground">{section.title}</h2>
                  <div className="mt-4 space-y-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-7 text-[var(--muted)] sm:text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </section>

      <section className="surface-panel mt-10 overflow-hidden rounded-[1.8rem]">
        <div className="border-b border-[var(--line)] p-6 sm:p-8">
          <div className="eyebrow-chip">Chapter 1 · Preliminary Definitions</div>
          <h2 className="mt-5 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            What is Fiqh?
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            The following article section preserves the original wording from{" "}
            <em>A Brief Introduction to the Hanafi Madhhab</em> and begins the
            overview one step at a time, starting with the definition of fiqh.
          </p>
        </div>

        <div className="space-y-7 p-6 sm:p-8">
          <p className="text-sm leading-8 text-[var(--muted)] sm:text-base">
            The word fiqh literally means to understand and comprehend. Imām Abū
            Ḥanīfah defined it as,
          </p>

          <div className="surface-soft rounded-[1.5rem] p-5 text-center">
            <p
              lang="ar"
              dir="rtl"
              className="font-serif text-2xl leading-loose text-foreground sm:text-3xl"
            >
              مَعْرِفَةُ النَّفْسِ مَا لَهَا وَمَا عَلَيْهَا
            </p>
            <p className="mt-3 text-sm italic leading-7 text-[var(--muted)] sm:text-base">
              An individual knowing their rights and responsibilities
            </p>
          </div>

          <p className="text-sm leading-8 text-[var(--muted)] sm:text-base">
            This is a very broad and general definition that is inclusive of
            articles of faith, laws of worship, and social interactions. As time
            progressed, the definition of fiqh became more specific and refined.
            The more specific and refined technical definition of fiqh is,
          </p>

          <div className="surface-soft rounded-[1.5rem] p-5 text-center">
            <p
              lang="ar"
              dir="rtl"
              className="font-serif text-2xl leading-loose text-foreground sm:text-3xl"
            >
              العِلْمُ بِالأَحْكَامِ الشَّرْعِيَّةِ العَمَلِيَّةِ المُكْتَسَبَةِ مِنْ
              أَدِلَّتِهَا التَّفْصِيلِيَّةِ
            </p>
            <p className="mt-3 text-sm italic leading-7 text-[var(--muted)] sm:text-base">
              The knowledge of practical legal rulings derived from their
              detailed evidences
            </p>
          </div>

          <p className="text-sm leading-8 text-[var(--muted)] sm:text-base">
            It is the discipline of knowing and understanding Islamic Law.
          </p>

          <p className="text-sm leading-8 text-[var(--muted)] sm:text-base">
            When defining terms, jurists are very specific and particular in their
            choice of words. They ensure that the definition is both exclusive
            (māniʿ), excluding everything extraneous, and inclusive (jāmiʿ),
            including everything necessary. “Knowledge of practical legal rulings”
            refers to those laws associated with a person’s actions or conduct.
            For example, it includes laws related to worship, such as
            purification, prayer, and fasting, as well as family and commercial
            law, such as marriage, divorce, and contracts. It excludes knowledge
            related to the articles of faith, which is the subject matter of
            creed (ʿaqīdah). The words “derived from their detailed evidences”
            refers to the fact that these practical laws are derived from specific
            texts of the Quran and Sunnah (the actions, sayings, and tacit
            approvals of the Prophet Muḥammad), as well as other sources of law
            such as ijmāʿ (scholarly consensus) and qiyās (analogical reasoning).
          </p>

          <p className="text-sm leading-8 text-[var(--muted)] sm:text-base">
            At this point, it is also essential to understand the definition of
            sharīʿah because oftentimes the words fiqh and sharīʿah are used
            interchangeably. Linguistically, the word sharīʿah is derived from
            the root letters ش ر ع, which convey the meaning of coming to water to
            drink. Sharīʿah is defined as a watering hole or a drinking place: a
            place where a person or animal comes to drink water. Technically, it
            is defined as what Allah has legislated for His servants from
            religion. Sharīʿah is God’s revealed law that governs and regulates
            human life and activity. It is a code of life that believers follow
            in order to obtain guidance in this world and salvation in the next.
            Oftentimes, sharīʿah is translated as Islamic Law; however, that is
            only partially correct. The sharīʿah includes creed, ritual acts of
            worship, morals, ethics, and law. That is why a better understanding
            would be that the sharīʿah is a complete code of life based on
            revealed scripture from God.
          </p>

          <p className="text-sm leading-8 text-[var(--muted)] sm:text-base">
            The most commonly accepted distinction between the two is that
            sharīʿah is the revealed law found in the Quran and Sunnah, and fiqh
            is a human understanding of that law. Sharīʿah is more general and
            inclusive; it includes beliefs, deeds, morals, and ethics; whereas
            fiqh deals with deeds alone.
          </p>

          <p className="text-sm leading-8 text-[var(--muted)] sm:text-base">
            Fiqh, which is commonly translated as Islamic Jurisprudence, deals
            with Islamic Law. A typical book or manual of fiqh deals with three
            major topics:
          </p>

          <div className="grid gap-4">
            {fiqhTopics.map((topic) => (
              <div key={topic.title} className="surface-soft rounded-[1.4rem] p-5">
                <div className="flex gap-4">
                  <span className="text-lg font-black text-[var(--primary-strong)]">
                    {topic.label}
                  </span>
                  <div>
                    <h3 className="font-bold text-foreground">{topic.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)] sm:text-base">
                      {topic.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-panel mt-10 rounded-[1.8rem] p-6">
        <h2 className="font-display text-3xl text-foreground">The takeaway</h2>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
          The Hanafi madhhab is best understood as a disciplined path of legal
          learning. It begins with revelation, passes through the scholarship of
          the early Muslims, takes shape in Kufa through Abu Hanifah and his
          students, and is preserved through centuries of careful study. For a
          beginner, the goal is simple: learn enough fiqh to worship correctly,
          study with reliable teachers, and respect valid scholarly disagreement.
        </p>
      </section>
    </article>
  );
}
