import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const imams = [
  {
    number: "1.",
    name: "Abu Haneefah",
    href: "/scholars/abu-hanifa",
  },
  {
    number: "2.",
    name: "al-Qaadhi Abu Yoosuf",
    href: "/scholars/abu-hanifa",
  },
  {
    number: "3.",
    name: "Muhammad ibn al-Hasan ash-Shaybaani",
    href: "/scholars/abu-hanifa",
  },
  {
    number: "4.",
    name: "Zufar ibn al-Huthayl",
    href: "/scholars/abu-hanifa",
  },
];

export default function ImamsPage() {
  return (
    <div className="scholar-detail-shell px-4 pb-24 pt-12 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-5xl">
        <Link href="/scholars" className="scholar-back-link">
          <ArrowLeft className="h-4 w-4" />
          Back to scholars
        </Link>

        <header className="scholar-detail-header">
          <div className="yaqeen-section-title scholar-detail-title">
            <span />
            <Link href="/scholars/imams" className="inline-flex items-center gap-3">
              Biography of the Imams
            </Link>
            <span />
          </div>
          <h1>The Imams of the Madhhab</h1>
          <p>Biographies of the Imams of the Hanafi Madhhab</p>
        </header>

        <div className="scholar-copy">
          <p>
            The Hanafi madhhab is unlike the other three madhhahib in this regard.
            The madhhab is not limited to the sayings of Imam Abu Haneefah, but
            rather the close students of the Imam are also considered in their
            sayings and opinions.
          </p>
          <p>
            The most important companions are Abu Yoosuf and Muhammad ibn al-Hasan
            ash-Shaybaani. They are referred to as the Two Companions, and their
            positions are frequently referenced throughout Hanafi fiqh.
          </p>
          <p>The hierarchy is as follows:</p>
          <p>
            Abu Haneefah, Abu Yoosuf, Muhammad, Zufar ibn al-Huthayl, and
            Al-Hasan ibn Ziyad al-Lu&apos;lu&apos;i.
          </p>
        </div>

        <div className="scholar-imam-grid">
          {imams.map((imam) => (
            <Link key={imam.name} href={imam.href} className="scholar-imam-card">
              <span>{imam.number}</span> {imam.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
