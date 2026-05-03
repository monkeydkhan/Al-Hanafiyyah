import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const sourceUrl =
  "https://www.reddit.com/r/Hanafiyyah/comments/1dxf877/imam_abu_haneefah_part_1_introduction/";

type RedditListing = [
  {
    data: {
      children: Array<{
        data: {
          selftext?: string;
        };
      }>;
    };
  },
];

type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string }
  | { type: "source"; text: string }
  | { type: "paragraph"; text: string };

async function getBiographyMarkdown() {
  const response = await fetch(`${sourceUrl}.json`, {
    headers: {
      "User-Agent": "AlHanafiyyahSite/1.0",
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  });

  if (!response.ok) {
    throw new Error("Unable to load Abu Haneefah biography source.");
  }

  const listing = (await response.json()) as RedditListing;
  const text = listing[0]?.data.children[0]?.data.selftext;

  if (!text) {
    throw new Error("Biography source did not include post text.");
  }

  return cleanSourceText(text);
}

function cleanSourceText(text: string) {
  const cutAt = text.indexOf("The Hanbalis in particular");
  const trimmed = cutAt === -1 ? text : text.slice(0, cutAt).trim();

  return trimmed
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("knoweldge", "knowledge")
    .replaceAll("lemented", "lamented")
    .replaceAll("Khaleefah", "Khalifah")
    .replaceAll("Qadhi", "qadi")
    .replaceAll("hadeeth", "hadith")
    .replaceAll("fatawa", "fatwa")
    .replaceAll("Iraaq", "Iraq")
    .replaceAll("Madeenah", "Madinah")
    .replaceAll("Maalik", "Malik")
    .replaceAll("Ash-Shaafi'i", "al-Shafi'i")
    .replaceAll("ash-Shaafi'i", "al-Shafi'i")
    .replaceAll("Abu Yoosuf", "Abu Yusuf")
    .replaceAll("Yoosuf", "Yusuf")
    .replaceAll("Yoonus", "Yunus")
.replaceAll("Allaah", "Allah");
}

function isSourceLine(line: string) {
  return /^(From|Both from|In the wording of|The wording of)\b/.test(line);
}

function parseMarkdown(markdown: string) {
  const blocks: Block[] = [];
  let buffer: string[] = [];
  let quoteBuffer: string[] = [];

  const flushParagraph = () => {
    if (!buffer.length) {
      return;
    }

    blocks.push({
      type: "paragraph",
      text: buffer.join(" ").replace(/\s+/g, " ").trim(),
    });
    buffer = [];
  };

  const flushQuote = () => {
    if (!quoteBuffer.length) {
      return;
    }

    blocks.push({
      type: "quote",
      text: quoteBuffer.join("\n").trim(),
    });
    quoteBuffer = [];
  };

  for (const rawLine of markdown.split(/\r?\n/)) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushQuote();
      continue;
    }

    if (line.startsWith(">")) {
      flushParagraph();
      quoteBuffer.push(line.replace(/^>\s?/, ""));
      continue;
    }

    flushQuote();

    if (line.startsWith("## ")) {
      flushParagraph();
      blocks.push({ type: "h3", text: line.replace(/^##\s+/, "") });
      continue;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      blocks.push({ type: "h2", text: line.replace(/^#\s+/, "") });
      continue;
    }

    if (/^\*\*.+\*\*$/.test(line)) {
      flushParagraph();
      blocks.push({ type: "h3", text: line.replace(/^\*\*/, "").replace(/\*\*$/, "") });
      continue;
    }

    if (isSourceLine(line)) {
      flushParagraph();
      blocks.push({ type: "source", text: line });
      continue;
    }

    buffer.push(line);
  }

  flushParagraph();
  flushQuote();

  return blocks;
}

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const inlinePattern =
    /(\[([^\]]+)\]\((https?:\/\/[^)]+)\)|\*\*([^*]+)\*\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = inlinePattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[2] && match[3]) {
      nodes.push(
        <a
          key={`${match[3]}-${match.index}`}
          href={match[3]}
          className="font-semibold text-[var(--primary-strong)] hover:underline"
        >
          {match[2]}
        </a>,
      );
    } else if (match[4]) {
      nodes.push(
        <strong key={`${match[4]}-${match.index}`} className="text-[var(--article-ink)]">
          {match[4]}
        </strong>,
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function isArabic(text: string) {
  return /[\u0600-\u06FF]/.test(text);
}

export default async function AbuHanifaBiographyPage() {
  const markdown = await getBiographyMarkdown();
  const blocks = parseMarkdown(markdown);
  const bismillah = blocks.slice(0, 3);
  const articleBlocks = blocks.slice(3);
  const headings = articleBlocks.filter((block) => block.type === "h2");
  const praiseStartIndex = articleBlocks.findIndex(
    (block) => block.type === "h2" && block.text === "Praise from the Scholars",
  );

  return (
    <article className="student-article-shell mx-auto w-full max-w-4xl px-4 pb-20 sm:px-8">
      <Link
        href="/scholars"
        className="student-back-link inline-flex items-center gap-2 text-sm font-semibold transition"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to scholars
      </Link>

      <header className="student-article-header mt-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em]">
          Biography
        </p>
        <h1 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">
          Imam Abu Haneefah
        </h1>
        <p className="mt-4 text-sm uppercase tracking-[0.18em]">
          Introduction, lineage, teachers, students, trials, and scholarly praise
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.18em]">
          <span>80-150 AH</span>
          <span>Kufa</span>
          <span>Hanafi Madhhab</span>
        </div>
      </header>

      <section className="student-bismillah mt-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em]">
          {bismillah[0]?.type === "paragraph" ? bismillah[0].text : "Bismillah"}
        </p>
        {bismillah.slice(1).map((block, index) => {
          if (block.type !== "paragraph") {
            return null;
          }

          return isArabic(block.text) ? (
            <p
              key={index}
              lang="ar"
              dir="rtl"
              className="mt-5 text-right font-serif text-2xl leading-loose sm:text-3xl"
            >
              {block.text}
            </p>
          ) : (
            <p
              key={index}
              className="mt-5 text-sm leading-8 sm:text-base"
            >
              {renderInline(block.text)}
            </p>
          );
        })}
      </section>

      <nav className="student-toc mt-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em]">Contents</p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {headings.map((heading) => (
            <a
              key={heading.text}
              href={`#${heading.text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
            >
              {heading.text}
            </a>
          ))}
        </div>
      </nav>

      <div className="student-article-body mt-10">
        {articleBlocks.map((block, index) => {
          if (block.type === "h2") {
            return (
              <section
                key={index}
                id={block.text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}
                className="prose-section"
              >
                <h2>{block.text}</h2>
              </section>
            );
          }

          if (block.type === "h3") {
            return (
              <div
                key={index}
                className={`prose-section prose-subsection ${
                  praiseStartIndex !== -1 && index > praiseStartIndex
                    ? "praise-scholar-heading"
                    : ""
                }`}
              >
                <h3>{block.text}</h3>
              </div>
            );
          }

          if (block.type === "quote") {
            return (
              <blockquote key={index} className="article-quote">
                {block.text.split("\n").map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {renderInline(line)}
                    {lineIndex < block.text.split("\n").length - 1 ? <br /> : null}
                  </span>
                ))}
              </blockquote>
            );
          }

          if (block.type === "source") {
            return (
              <p key={index} className="article-source-line">
                {renderInline(block.text)}
              </p>
            );
          }

          return isArabic(block.text) ? (
            <p
              key={index}
              lang="ar"
              dir="rtl"
              className="article-arabic"
            >
              {block.text}
            </p>
          ) : (
            <p key={index} className="article-paragraph">
              {renderInline(block.text)}
            </p>
          );
        })}
      </div>

    </article>
  );
}
