import Link from "next/link";
import { GraduationCap, UsersRound } from "lucide-react";

const biographyLinks = [
  {
    label: "Biography of the Imams",
    href: "/scholars/imams",
    icon: GraduationCap,
    description:
      "Begin with the founding imams and early companions who shaped the Hanafi madhhab.",
  },
  {
    label: "Biography of the Scholars",
    href: "/scholars/scholars",
    icon: UsersRound,
    description:
      "A growing index for jurists, authors, teachers, and transmitters connected to the school.",
  },
];

export default function ScholarsPage() {
  return (
    <div className="scholar-index-shell px-4 pb-24 pt-14 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <header className="scholar-index-hero">
          <p>Scholars</p>
          <h1>Biographies of the Hanafi tradition.</h1>
        </header>

        <section className="scholar-link-panel" aria-label="Scholar biography routes">
          {biographyLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.label} href={item.href} className="scholar-link-row">
                <span className="scholar-link-icon">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="min-w-0 flex-1">
                  <strong>{item.label}</strong>
                  <small>{item.description}</small>
                </span>
              </Link>
            );
          })}
        </section>
      </div>
    </div>
  );
}
