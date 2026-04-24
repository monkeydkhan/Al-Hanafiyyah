"use client";

import Link from "next/link";
import {
  startTransition,
  useDeferredValue,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  BookOpenText,
  FileText,
  Quote,
  Search,
  Sparkles,
  Upload,
} from "lucide-react";
import type { AdminDraft } from "@/lib/site-data";

type AdminWorkspaceProps = {
  drafts: AdminDraft[];
};

const templates = [
  {
    label: "Quran",
    snippet: "\n\n[Quran 2:255]\nAdd the verse, translation, and a short note here.\n",
  },
  {
    label: "Hadith",
    snippet: "\n\n[Hadith]\nSource, grading, and lesson takeaway.\n",
  },
  {
    label: "Matn Quote",
    snippet: "\n\n[Matn Quote]\nQuoted passage with a concise explanation.\n",
  },
  {
    label: "Pull Quote",
    snippet: "\n\n> Key sentence for emphasis and sidebar quotation.\n",
  },
];

export function AdminWorkspace({ drafts }: AdminWorkspaceProps) {
  const firstDraft = drafts[0];
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [activeId, setActiveId] = useState(firstDraft?.id ?? "");
  const [editor, setEditor] = useState(() => ({
    title: firstDraft?.title ?? "",
    excerpt: firstDraft?.excerpt ?? "",
    content: firstDraft?.content ?? "",
    status: firstDraft?.status ?? ("Draft" as AdminDraft["status"]),
    collection: firstDraft?.collection ?? "",
  }));
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const filteredDrafts = useMemo(() => {
    const term = deferredQuery.trim().toLowerCase();
    if (!term) return drafts;

    return drafts.filter((draft) => {
      return (
        draft.title.toLowerCase().includes(term) ||
        draft.collection.toLowerCase().includes(term) ||
        draft.excerpt.toLowerCase().includes(term)
      );
    });
  }, [deferredQuery, drafts]);

  const loadDraft = (draftId: string) => {
    const nextDraft = drafts.find((draft) => draft.id === draftId);
    if (!nextDraft) return;

    startTransition(() => {
      setActiveId(draftId);
      setEditor({
        title: nextDraft.title,
        excerpt: nextDraft.excerpt,
        content: nextDraft.content,
        status: nextDraft.status,
        collection: nextDraft.collection,
      });
    });
  };

  const insertTemplate = (snippet: string) => {
    setEditor((current) => ({
      ...current,
      content: `${current.content}${snippet}`,
    }));
    textareaRef.current?.focus();
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[18rem_minmax(0,1fr)_21rem]">
      <aside className="surface-panel rounded-[2rem] p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
              Library Desk
            </p>
            <h2 className="mt-2 text-lg font-semibold text-foreground">
              Article drafts
            </h2>
          </div>
          <span className="rounded-full bg-[var(--primary-soft)] px-3 py-1 text-xs font-semibold text-[var(--primary-strong)]">
            {filteredDrafts.length}
          </span>
        </div>

        <label className="mt-5 flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--panel-soft)] px-4 py-3">
          <Search className="h-4 w-4 text-[var(--muted)]" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search drafts"
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-[var(--muted)]"
          />
        </label>

        <div className="mt-4 space-y-3">
          {filteredDrafts.map((draft) => {
            const isActive = draft.id === activeId;
            return (
              <button
                key={draft.id}
                type="button"
                onClick={() => loadDraft(draft.id)}
                className={`w-full rounded-[1.4rem] border p-4 text-left transition ${
                  isActive
                    ? "border-[color:var(--primary)] bg-[var(--panel-strong)] shadow-[0_18px_40px_var(--shadow)]"
                    : "border-[var(--line)] bg-[var(--panel-soft)] hover:border-[color:var(--primary)]"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-foreground">
                    {draft.title}
                  </p>
                  <span className="rounded-full border border-[var(--line)] px-2 py-1 text-[11px] text-[var(--muted)]">
                    {draft.status}
                  </span>
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  {draft.collection}
                </p>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--muted)]">
                  {draft.excerpt}
                </p>
                <p className="mt-3 text-xs text-[var(--muted)]">{draft.updatedAt}</p>
              </button>
            );
          })}
        </div>
      </aside>

      <section className="space-y-4">
        <div className="surface-panel flex flex-wrap items-center justify-between gap-4 rounded-[2rem] px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
              Writing Workspace
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Inspired by the calm editorial rhythm of Qirtaas: focused writing,
              Islamic study commands, and minimal friction.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button type="button" className="button-secondary">
              Save draft
            </button>
            <button type="button" className="button-primary">
              Publish
              <Upload className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="surface-panel rounded-[2rem] p-4">
          <div className="flex flex-wrap gap-2 border-b border-[var(--line)] pb-4">
            {templates.map((template) => (
              <button
                key={template.label}
                type="button"
                onClick={() => insertTemplate(template.snippet)}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel-soft)] px-4 py-2 text-sm text-foreground transition hover:border-[color:var(--primary)]"
              >
                <Sparkles className="h-3.5 w-3.5 text-[var(--primary-strong)]" />
                {template.label}
              </button>
            ))}
          </div>

          <div className="mt-5 space-y-4">
            <input
              value={editor.title}
              onChange={(event) =>
                setEditor((current) => ({
                  ...current,
                  title: event.target.value,
                }))
              }
              className="w-full bg-transparent font-display text-3xl text-foreground outline-none placeholder:text-[var(--muted)] sm:text-4xl"
              placeholder="Article title"
            />

            <textarea
              value={editor.excerpt}
              onChange={(event) =>
                setEditor((current) => ({
                  ...current,
                  excerpt: event.target.value,
                }))
              }
              rows={3}
              className="w-full resize-none rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel-soft)] px-4 py-3 text-sm leading-7 text-foreground outline-none placeholder:text-[var(--muted)]"
              placeholder="Short excerpt or summary"
            />

            <textarea
              ref={textareaRef}
              value={editor.content}
              onChange={(event) =>
                setEditor((current) => ({
                  ...current,
                  content: event.target.value,
                }))
              }
              rows={18}
              className="min-h-[32rem] w-full resize-y rounded-[1.8rem] border border-[var(--line)] bg-[var(--panel-strong)] px-5 py-5 text-base leading-8 text-foreground outline-none placeholder:text-[var(--muted)]"
              placeholder="Start writing..."
            />
          </div>
        </div>
      </section>

      <aside className="space-y-4">
        <div className="surface-panel rounded-[2rem] p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
            Document Settings
          </p>
          <div className="mt-5 space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-foreground">Status</span>
              <select
                value={editor.status}
                onChange={(event) =>
                  setEditor((current) => ({
                    ...current,
                    status: event.target.value as AdminDraft["status"],
                  }))
                }
                className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-[var(--panel-soft)] px-4 py-3 text-sm text-foreground outline-none"
              >
                <option>Draft</option>
                <option>Review</option>
                <option>Published</option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-foreground">Collection</span>
              <input
                value={editor.collection}
                onChange={(event) =>
                  setEditor((current) => ({
                    ...current,
                    collection: event.target.value,
                  }))
                }
                className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-[var(--panel-soft)] px-4 py-3 text-sm text-foreground outline-none"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-foreground">Slug</span>
              <input
                value={editor.title.toLowerCase().replaceAll(" ", "-")}
                readOnly
                className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-[var(--panel-soft)] px-4 py-3 text-sm text-foreground outline-none"
              />
            </label>
          </div>
        </div>

        <div className="surface-panel rounded-[2rem] p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
            Quick Insert
          </p>
          <div className="mt-4 space-y-3">
            {[
              {
                title: "Quran verse",
                description: "Insert verse reference, translation, and note block.",
                icon: BookOpenText,
              },
              {
                title: "Hadith reference",
                description: "Drop in source, grading, and takeaway with one click.",
                icon: Quote,
              },
              {
                title: "Matn quote",
                description: "Create a compact quotation block for text excerpts.",
                icon: FileText,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => {
                    const template = templates.find((entry) =>
                      item.title.toLowerCase().startsWith(entry.label.toLowerCase().split(" ")[0]),
                    );
                    if (template) insertTemplate(template.snippet);
                  }}
                  className="w-full rounded-[1.35rem] border border-[var(--line)] bg-[var(--panel-soft)] p-4 text-left transition hover:border-[color:var(--primary)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary-strong)]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="surface-panel rounded-[2rem] p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
            Next steps
          </p>
          <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
            <p>
              This route is currently a design and interaction shell. It is ready
              for a future database, auth layer, and actual article persistence.
            </p>
            <p>
              For now it gives you the information architecture and editor rhythm
              the project was missing.
            </p>
            <Link href="/books" className="inline-flex text-[var(--primary-strong)] hover:underline">
              Use the books collection as the first content model.
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
