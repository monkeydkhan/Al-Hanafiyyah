import { AlertTriangle, ArrowRight, BookOpenCheck, FileWarning, ShieldAlert } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";

const principles = [
  {
    title: "Name the claim clearly",
    description:
      "Every response should begin by stating the objection in plain language before answering it.",
    icon: FileWarning,
  },
  {
    title: "Separate evidence from tone",
    description:
      "The aim is not loud argument. It is careful sourcing, fair reading, and useful correction.",
    icon: BookOpenCheck,
  },
  {
    title: "Keep adab in the answer",
    description:
      "Refutations should protect belief and practice without training readers to become reckless.",
    icon: ShieldAlert,
  },
];

const upcoming = [
  "Common claims about taqlid and madhhabs",
  "Misreadings of Hanafi legal method",
  "Questions around hadith, qiyas, and istihsan",
  "Notes on sects, polemics, and scholarly boundaries",
];

export default function RefutationsPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-16 sm:px-8 lg:px-12">
      <PageIntro
        eyebrow="Refutations"
        title="Calm answers to recurring claims."
        description="A future home for sourced responses, objections, doubts, and polemical notes. The tone stays firm, structured, and useful."
      />

      <Reveal>
        <section className="surface-panel rounded-[1.6rem] p-5 sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary-strong)]">
                <AlertTriangle className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-2xl font-black text-foreground">Built for careful responses</h2>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-[var(--muted)]">
                  Each refutation can later become its own article with the claim,
                  the short answer, evidence, scholarly notes, and practical takeaway.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--primary-soft)] px-4 py-2 text-sm font-black text-[var(--primary-strong)]">
              Coming soon
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </section>
      </Reveal>

      <section className="grid gap-4 lg:grid-cols-3">
        {principles.map((principle, index) => {
          const Icon = principle.icon;

          return (
            <Reveal key={principle.title} delay={0.06 * index}>
              <article className="surface-panel h-full rounded-[1.5rem] p-5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary-strong)]">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-xl font-black text-foreground">
                  {principle.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {principle.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </section>

      <Reveal>
        <section className="surface-panel rounded-[1.6rem] p-5 sm:p-6">
          <h2 className="text-2xl font-black text-foreground">Possible collections</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {upcoming.map((item) => (
              <div
                key={item}
                className="surface-soft rounded-[1.1rem] px-4 py-3 text-sm text-[var(--muted)]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
