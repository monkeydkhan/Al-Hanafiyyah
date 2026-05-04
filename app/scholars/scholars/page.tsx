import Link from "next/link";
import { ArrowLeft, BookOpenText, Feather, ScrollText } from "lucide-react";

const eras = [
  {
    id: "second-century",
    label: "2nd Century",
    title: "2nd Century Hijri",
    scholars: [
      { name: "At-Tahawi", born: "239 AH" },
      { name: "Abu al-Hasan al-Karkhi", born: "260 AH" },
    ],
  },
  {
    id: "third-century",
    label: "3rd Century",
    title: "3rd Century Hijri",
    scholars: [
      { name: "Abu Bakr al-Jassas", born: "305 AH" },
      { name: "Abu al-Layth as-Samarqandi", born: "333 AH" },
    ],
  },
  {
    id: "fourth-century",
    label: "4th Century",
    title: "4th Century Hijri",
    scholars: [
      { name: "al-Quduri", born: "362 AH" },
      { name: "as-Sarakhsi", born: "400 AH" },
    ],
  },
  {
    id: "fifth-century",
    label: "5th Century",
    title: "5th Century Hijri",
    scholars: [
      { name: "al-Kasani", born: "d. 587 AH" },
      { name: "Burhan al-Din al-Marghinani", born: "d. 593 AH" },
    ],
  },
  {
    id: "sixth-century",
    label: "6th Century",
    title: "6th Century Hijri",
    scholars: [
      { name: "Ibn al-Humam", born: "790 AH" },
      { name: "Badr al-Din al-Ayni", born: "762 AH" },
    ],
  },
];

export default function MadhhabScholarsPage() {
  return (
    <div className="scholar-era-shell -mt-20 px-4 pb-24 pt-28 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <section className="scholar-archive-hero">
          <div>
            <Link href="/scholars" className="scholar-back-link">
              <ArrowLeft className="h-4 w-4" />
              Back to scholars
            </Link>

            <p className="scholar-archive-kicker">Biography of the Scholars</p>
            <h1>The Scholars of the Madhhab</h1>
            <p className="scholar-archive-subtitle">
              Biographies of the jurists, authors, commentators, and transmitters
              who preserved the Hanafi school across generations.
            </p>
          </div>

          <div className="scholar-archive-note">
            <ScrollText className="h-6 w-6" />
            <p>
              Organized by Hijri era so the growth of the madhhab can be read as
              a living chain rather than a flat list.
            </p>
          </div>
        </section>

        <div className="scholar-era-layout">
          <aside className="era-jump-bar" aria-label="Jump to era">
            <div className="era-jump-label">
              <Feather className="h-4 w-4" />
              Jump to era
            </div>
            <div className="era-jump-scroll">
              {eras.map((era) => (
                <a key={era.id} href={`#${era.id}`}>
                  {era.label}
                </a>
              ))}
            </div>
          </aside>

          <main>
            <section className="scholar-era-intro">
              <div className="intro-mark">
                <BookOpenText className="h-5 w-5" />
              </div>
              <div>
                <p>
                  After the era of Imam Abu Haneefah and his companions, the madhhab
                  was preserved, refined, and transmitted by great jurists who codified
                  its principles and clarified its rulings.
                </p>
                <p>
                  Their works became references for understanding relied-upon positions,
                  evidences, commentaries, and explanations. This archive groups them
                  by the Hijri centuries in which they were born.
                </p>
              </div>
            </section>

            <div className="era-timeline">
              {eras.map((era, index) => (
                <section key={era.id} id={era.id} className="era-section">
                  <div className="era-heading">
                    <span className="era-pin">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <p>{era.label}</p>
                      <h2>{era.title}</h2>
                    </div>
                  </div>

                  <div className="era-scholar-grid">
                    {era.scholars.map((scholar) => (
                      <article key={scholar.name} className="era-scholar-card">
                        <span className="era-card-rule" />
                        <h3>{scholar.name}</h3>
                        <p>Born in {scholar.born}</p>
                        <Link href="/scholars/abu-hanifa">
                          Open biography
                        </Link>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
