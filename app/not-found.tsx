import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-4xl px-4 pb-16 sm:px-8 lg:px-12">
      <div className="surface-panel w-full rounded-[2rem] p-8 sm:p-10">
        <div className="eyebrow-chip">Not found</div>
        <h1 className="mt-6 font-display text-4xl text-foreground sm:text-5xl">
          That page is not in the library yet.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
          Try going back to the books route, the scholars route, or the admin
          workspace.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="button-secondary">
            Home
          </Link>
          <Link href="/books" className="button-primary">
            Browse books
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
