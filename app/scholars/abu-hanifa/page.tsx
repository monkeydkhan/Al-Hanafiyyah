import Link from "next/link";
import { ArrowLeft, Clock3 } from "lucide-react";
import { Reveal } from "@/components/reveal";

export default function AbuHanifaBiographyPage() {
  return (
    <main className="scholar-coming-soon-shell">
      <Link href="/scholars" className="back-link">
        <ArrowLeft className="h-4 w-4" />
        Back to scholars
      </Link>

      <Reveal>
        <section className="scholar-coming-soon-card">
          <div className="scholar-coming-soon-icon">
            <Clock3 className="h-6 w-6" />
          </div>
          <span className="section-kicker">Biography In Progress</span>
          <h1>Imam Abu Hanifah</h1>
          <p>
            This scholar biography is being prepared and reviewed before
            publication. It will be added here when the page is ready.
          </p>
        </section>
      </Reveal>
    </main>
  );
}
