import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { AdminWorkspace } from "@/components/admin-workspace";
import { PageIntro } from "@/components/page-intro";
import { adminDrafts } from "@/lib/site-data";

export default function AdminPage() {
  return (
    <div className="mx-auto flex w-full max-w-[92rem] flex-col gap-10 px-4 pb-16 sm:px-8 lg:px-12">
      <PageIntro
        eyebrow="Admin"
        title="Qirtaas-inspired editor."
        description="A focused writing workspace for articles, notes, and edits."
        actions={
          <>
            <Link href="/books" className="button-secondary">
              View books
            </Link>
            <a
              href="https://qirtaas.io"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-strong)] hover:underline"
            >
              Reference: qirtaas.io
              <ExternalLink className="h-4 w-4" />
            </a>
          </>
        }
      />

      <AdminWorkspace drafts={adminDrafts} />
    </div>
  );
}
