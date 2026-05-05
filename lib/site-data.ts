import {
  BookOpen,
  GraduationCap,
  LibraryBig,
  Play,
  FileText,
  ShieldAlert,
  UserRound,
  type LucideIcon,
} from "lucide-react";

export type NavigationLink = {
  label: string;
  href: string;
  match: string;
};

export type RoutePanel = {
  title: string;
  href: string;
  summary: string;
  icon: LucideIcon;
  bullets: string[];
};

export type Book = {
  slug: string;
  title: string;
  arabicTitle: string;
  author: string;
  category: string;
  level: string;
  language: string;
  summary: string;
  description: string;
  highlights: string[];
  keyThemes: string[];
  scholarSlugs: string[];
};

export type Scholar = {
  slug: string;
  name: string;
  honorific: string;
  dates: string;
  region: string;
  focus: string;
  summary: string;
  biography: string[];
  notableWorks: string[];
  traits: string[];
  relatedBookSlugs: string[];
};

export type Video = {
  slug: string;
  title: string;
  category: string;
  level: string;
  youtubeUrl: string;
  playlists: Array<{
    code: string;
    label: string;
    youtubeUrl?: string;
  }>;
  lessons: Array<{
    title: string;
    youtubeUrl?: string;
  }>;
  summary: string;
  description: string;
  duration: string;
  keyThemes: string[];
  scholarSlugs: string[];
};

export const mainNavigation: NavigationLink[] = [
  { label: "Books", href: "/books", match: "/books" },
  { label: "Articles", href: "/articles", match: "/articles" },
  { label: "Refutations", href: "/refutations", match: "/refutations" },
  { label: "Scholars", href: "/scholars", match: "/scholars" },
  { label: "Lectures", href: "/lectures", match: "/lectures" },
];

export const routePanels: RoutePanel[] = [
  {
    title: "Books",
    href: "/books",
    summary:
      "A structured catalogue for core texts, reading notes, themes, and study pathways.",
    icon: LibraryBig,
    bullets: [
      "Book cards and detail pages",
      "Metadata for level, language, and topic",
      "Designed to grow into a real library",
    ],
  },
  {
    title: "Articles",
    href: "/articles",
    summary:
      "Readable guides on the Hanafi madhhab, its books, scholars, method, and study path.",
    icon: FileText,
    bullets: [
      "Overview articles and study notes",
      "Clear introductions for beginners",
      "Built from reliable book summaries",
    ],
  },
  {
    title: "Refutations",
    href: "/refutations",
    summary:
      "A calm section for answering doubts, objections, and common claims with sources and adab.",
    icon: ShieldAlert,
    bullets: [
      "Structured responses, not noise",
      "Separate claims, evidence, and conclusion",
      "Built for future sect and polemic notes",
    ],
  },
  {
    title: "Scholars",
    href: "/scholars",
    summary:
      "Biographical pages for imams, authors, and transmitters connected to the study programme.",
    icon: UserRound,
    bullets: [
      "Short biographies and timelines",
      "Key works and teaching focus",
      "Cross-linked to the books collection",
    ],
  },
  {
    title: "Lectures",
    href: "/lectures",
    summary:
      "Curated lesson series for aqeedah, Hanafi fiqh, polemics, and structured study.",
    icon: Play,
    bullets: [
      "Organized by series, topic, and difficulty",
      "Prepared for playlist embeds, notes, and transcripts",
      "Designed for creed and fiqh curricula",
    ],
  },
];

export const books: Book[] = [
  {
    slug: "mukhtasar-al-quduri",
    title: "Mukhtasar al-Quduri",
    arabicTitle: "مختصر القدوري",
    author: "Imam Abu al-Husayn al-Quduri",
    category: "Fiqh",
    level: "Foundational",
    language: "Arabic",
    summary:
      "A compact Hanafi manual that gives the site a strong legal backbone and a clear study spine.",
    description:
      "Mukhtasar al-Quduri is one of the most recognisable entry texts for Hanafi jurisprudence. It is concise enough for guided study while still rich enough to serve as a durable reference point as students advance.",
    highlights: [
      "Strong fit for structured fiqh lessons",
      "Clear progression through worship and daily rulings",
      "Easy to pair with teacher notes and article commentary",
    ],
    keyThemes: ["Worship", "Transactions", "Legal method", "Study sequence"],
    scholarSlugs: ["abu-hanifa"],
  },
  {
    slug: "nur-al-idah",
    title: "Nur al-Idah",
    arabicTitle: "نور الإيضاح",
    author: "Hasan al-Shurunbulali",
    category: "Fiqh",
    level: "Beginner",
    language: "Arabic",
    summary:
      "A practical text for worship and a natural teaching tool for students who need a first working handbook.",
    description:
      "Nur al-Idah is often used for introductory Hanafi fiqh, especially in matters of purification, prayer, fasting, and pilgrimage. On the site it works well as a reader-friendly book page with practical study notes and class summaries.",
    highlights: [
      "Excellent for first-stage classes",
      "Clear worship coverage for article series",
      "Useful bridge between beginner and text-based study",
    ],
    keyThemes: ["Taharah", "Salah", "Sawm", "Hajj"],
    scholarSlugs: ["abu-hanifa"],
  },
  {
    slug: "lumat-al-itiqad",
    title: "Lum'at al-I'tiqad",
    arabicTitle: "لمعة الاعتقاد",
    author: "Ibn Qudamah al-Maqdisi",
    category: "Aqidah",
    level: "Intermediate",
    language: "Arabic",
    summary:
      "A concise Athari creed primer suited to a dedicated theology track or an annotated reading page.",
    description:
      "Lum'at al-I'tiqad gives the project a clear creed identity and a compact text around which to build article notes, glossary entries, and guided study commentary.",
    highlights: [
      "Strong candidate for annotated creed lessons",
      "Short enough for focused page design",
      "Works well with linked scholar biographies",
    ],
    keyThemes: ["Names and attributes", "Faith", "Qadar", "Transmission"],
    scholarSlugs: [],
  },
  {
    slug: "talim-al-mutaallim",
    title: "Ta'lim al-Muta'allim",
    arabicTitle: "تعليم المتعلم",
    author: "Burhan al-Din al-Zarnuji",
    category: "Adab",
    level: "Open",
    language: "Arabic",
    summary:
      "A study-ethics classic that helps the site feel like an institute, not only a content archive.",
    description:
      "Ta'lim al-Muta'allim sits naturally beside a library and biography system because it speaks to how knowledge is sought, carried, and lived. It can anchor pages about study etiquette, teachers, intention, and companionship.",
    highlights: [
      "Excellent for institute identity",
      "Useful for quote cards and article extracts",
      "Connects scholarship with practical adab",
    ],
    keyThemes: ["Intention", "Companionship", "Study discipline", "Respect"],
    scholarSlugs: [],
  },
];

export const scholars: Scholar[] = [
  {
    slug: "abu-hanifa",
    name: "Imam Abu Hanifa",
    honorific: "Imam al-A'zam",
    dates: "80-150 AH",
    region: "Kufa",
    focus: "Fiqh and legal reasoning",
    summary:
      "The foundational imam of the Hanafi madhhab, remembered for his worship, intelligence, legal precision, and disciplined method of deriving rulings.",
    biography: [
      "Imam Abu Hanifa, al-Nu'man ibn Thabit, was born in Kufa in 80 AH. Kufa was one of the great centers of early Islamic learning, shaped by the knowledge of the Companions and their students. In that environment, Abu Hanifa became known for worship, restraint, sharp understanding, and careful legal reasoning.",
      "He studied with scholars of his time and became especially connected to the legal inheritance of Kufa. His fiqh was not a loose collection of personal opinions. It was a disciplined method rooted in the Quran, Sunnah, the practice and verdicts of the early Muslims, consensus, analogy, and careful attention to people's real circumstances.",
      "One of the most important features of his legacy was his teaching circle. Legal questions were examined, discussed, refined, and preserved through students such as Abu Yusuf and Muhammad ibn al-Hasan al-Shaybani. Through them, the school took written form and became one of the most influential legal traditions in the Muslim world.",
      "For students of the Hanafi madhhab, Imam Abu Hanifa is not only a historical figure. He represents a way of approaching sacred law with reverence, intelligence, caution, and service to the ummah.",
    ],
    notableWorks: [
      "al-Fiqh al-Akbar (attributed)",
      "Musnad Abi Hanifa (compiled narrations)",
      "Transmission through his leading students",
    ],
    traits: ["Kufan imam", "Foundational jurist", "Teacher of jurists"],
    relatedBookSlugs: ["mukhtasar-al-quduri", "nur-al-idah", "talim-al-mutaallim"],
  },
];

export const videos: Video[] = [
  {
    slug: "usul-al-thalatha",
    title: "Usul al-Thalatha",
    category: "Aqidah",
    level: "",
    youtubeUrl:
      "https://www.youtube.com/embed/videoseries?si=SOPDVY4cN_7Ad2uy&list=PL2dRQaGGWZOAW9VrMN7HpHSYykChUZRsy",
    playlists: [
      { code: "AR", label: "Arabic" },
      { code: "UR", label: "Urdu" },
      {
        code: "EN",
        label: "English",
        youtubeUrl:
          "https://www.youtube.com/embed/videoseries?si=SOPDVY4cN_7Ad2uy&list=PL2dRQaGGWZOAW9VrMN7HpHSYykChUZRsy",
      },
    ],
    lessons: [
      {
        title: "Part 1/10: Explanation of Thalaathatul Al-Usool",
        youtubeUrl: "https://www.youtube.com/embed/JxoWpEbpYOM?list=PL2dRQaGGWZOAW9VrMN7HpHSYykChUZRsy",
      },
      {
        title: "Part 2/10: Explanation of Thalaathatul Al-Usool",
        youtubeUrl: "https://www.youtube.com/embed/P-JTV8Qr4_8?list=PL2dRQaGGWZOAW9VrMN7HpHSYykChUZRsy",
      },
      {
        title: "Part 3/10: Explanation of Thalaathatul Al-Usool",
        youtubeUrl: "https://www.youtube.com/embed/3Vw_qZr5IKM?list=PL2dRQaGGWZOAW9VrMN7HpHSYykChUZRsy",
      },
      {
        title: "Part 4/10: Explanation of Thalaathatul Al-Usool",
        youtubeUrl: "https://www.youtube.com/embed/iTqq1PRhRSU?list=PL2dRQaGGWZOAW9VrMN7HpHSYykChUZRsy",
      },
      {
        title: "Part 5/10: Explanation of Thalaathatul Al-Usool",
        youtubeUrl: "https://www.youtube.com/embed/jBU90RWYrfc?list=PL2dRQaGGWZOAW9VrMN7HpHSYykChUZRsy",
      },
      {
        title: "Part 6/10: Explanation of Thalaathatul Al-Usool",
        youtubeUrl: "https://www.youtube.com/embed/wRC2DaXe_lk?list=PL2dRQaGGWZOAW9VrMN7HpHSYykChUZRsy",
      },
      {
        title: "Part 7/10: Explanation of Thalaathatul Al-Usool",
        youtubeUrl: "https://www.youtube.com/embed/9kabmFvjHJU?list=PL2dRQaGGWZOAW9VrMN7HpHSYykChUZRsy",
      },
      {
        title: "Part 8/10: Explanation of Thalaathatul Al-Usool",
        youtubeUrl: "https://www.youtube.com/embed/WTzZAuptG4Y?list=PL2dRQaGGWZOAW9VrMN7HpHSYykChUZRsy",
      },
      {
        title: "Part 9/10: Explanation of Thalaathatul Al-Usool",
        youtubeUrl: "https://www.youtube.com/embed/S9DlEBj4Nd0?list=PL2dRQaGGWZOAW9VrMN7HpHSYykChUZRsy",
      },
      {
        title: "Part 10/10: Explanation of Thalaathatul Al-Usool",
        youtubeUrl: "https://www.youtube.com/embed/tDo0sctpEXg?list=PL2dRQaGGWZOAW9VrMN7HpHSYykChUZRsy",
      },
    ],
    summary:
      "An English playlist introducing the Three Fundamental Principles in a structured Aqidah lesson format.",
    description:
      "This playlist covers Usul al-Thalatha, a foundational primer on the three principles every Muslim is asked about: knowing Allah, knowing Islam, and knowing the Messenger of Allah, peace and blessings be upon him.",
    duration: "Playlist",
    keyThemes: ["Tawheed", "Aqidah", "Three principles", "English"],
    scholarSlugs: [],
  },
];

export const homeMetrics = [
  { label: "Core routes", value: "2" },
  { label: "Sample books", value: `${books.length}` },
  { label: "Scholar profiles", value: `${scholars.length}` },
];

export function getBookBySlug(slug: string) {
  return books.find((book) => book.slug === slug);
}

export function getScholarBySlug(slug: string) {
  return scholars.find((scholar) => scholar.slug === slug);
}

export function getVideoBySlug(slug: string) {
  return videos.find((video) => video.slug === slug);
}

export function getBooksBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getBookBySlug(slug))
    .filter((book): book is Book => Boolean(book));
}

export function getScholarsBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getScholarBySlug(slug))
    .filter((scholar): scholar is Scholar => Boolean(scholar));
}

export const routeIcons = {
  books: LibraryBig,
  scholars: GraduationCap,
  text: FileText,
  articles: BookOpen,
  refutations: ShieldAlert,
};
