import {
  GraduationCap,
  LibraryBig,
  Play,
  ScrollText,
  UserRound,
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
  icon: typeof LibraryBig;
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
  summary: string;
  description: string;
  duration: string;
  keyThemes: string[];
  scholarSlugs: string[];
};

export type AdminDraft = {
  id: string;
  title: string;
  status: "Draft" | "Review" | "Published";
  collection: string;
  updatedAt: string;
  excerpt: string;
  content: string;
};

export const mainNavigation: NavigationLink[] = [
  { label: "Books", href: "/books", match: "/books" },
  { label: "Scholars", href: "/scholars", match: "/scholars" },
  { label: "Videos", href: "/videos", match: "/videos" },
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
    title: "Videos",
    href: "/videos",
    summary:
      "Curated video lectures on Athari aqeedah, Hanafi fiqh, and foundational Islamic knowledge.",
    icon: Play,
    bullets: [
      "Organized by topic and difficulty level",
      "Core content on Usul al-Thalatha and Athari creed",
      "Linked to books and scholar profiles",
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
    scholarSlugs: ["abu-hanifa", "al-tahawi"],
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
    scholarSlugs: ["abu-hanifa", "mulla-ali-al-qari"],
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
      "Lum'at al-I'tiqad gives the project a clear creed identity and a compact text around which to build article notes, glossary entries, and guided study commentary. It also gives the admin area a meaningful sample collection for doctrinal writing.",
    highlights: [
      "Strong candidate for annotated creed lessons",
      "Short enough for focused page design",
      "Works well with linked scholar biographies",
    ],
    keyThemes: ["Names and attributes", "Faith", "Qadar", "Transmission"],
    scholarSlugs: ["ibn-qudamah", "ibn-abi-al-izz"],
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
    scholarSlugs: ["al-zarnuji", "abu-hanifa"],
  },
];

export const scholars: Scholar[] = [
  {
    slug: "abu-hanifa",
    name: "Abu Hanifa",
    honorific: "Imam al-A'zam",
    dates: "80-150 AH",
    region: "Kufa",
    focus: "Fiqh and legal reasoning",
    summary:
      "Founder of the Hanafi school and a central reference point for the legal identity of the site.",
    biography: [
      "Abu Hanifa al-Nu'man ibn Thabit emerged from Kufa as one of the most influential jurists in Sunni Islam. His school became known for disciplined legal method, strong engagement with transmitted knowledge, and practical reasoning rooted in the revealed sources.",
      "A book and scholar platform carrying Hanafi identity needs a clear way to introduce visitors to Abu Hanifa, not only as a name, but as a jurist whose legacy shaped how law was studied, taught, and organized across centuries.",
    ],
    notableWorks: [
      "al-Fiqh al-Akbar (attributed)",
      "Musnad Abi Hanifa (compiled narrations)",
      "Transmission through his leading students",
    ],
    traits: ["Foundational jurist", "Kufan school", "Method and discipline"],
    relatedBookSlugs: ["mukhtasar-al-quduri", "nur-al-idah", "talim-al-mutaallim"],
  },
  {
    slug: "al-tahawi",
    name: "Imam al-Tahawi",
    honorific: "Abu Ja'far al-Tahawi",
    dates: "239-321 AH",
    region: "Egypt",
    focus: "Hadith, fiqh, and creed",
    summary:
      "A major Hanafi imam whose clarity in creed and legal transmission makes him ideal for a scholar profile page.",
    biography: [
      "Al-Tahawi became one of the most important later voices in articulating Sunni creed and preserving legal discussion with precision. His work gives a platform like this one a bridge between legal study and a more systematic theological voice.",
      "His profile page can hold biography, major works, and linked reading routes so users can move directly from scholar to text.",
    ],
    notableWorks: [
      "Sharh Ma'ani al-Athar",
      "Mushkil al-Athar",
      "al-'Aqidah al-Tahawiyyah",
    ],
    traits: ["Systematic scholar", "Creed and hadith", "Hanafi transmission"],
    relatedBookSlugs: ["mukhtasar-al-quduri"],
  },
  {
    slug: "ibn-qudamah",
    name: "Ibn Qudamah",
    honorific: "Muwaffaq al-Din",
    dates: "541-620 AH",
    region: "Damascus",
    focus: "Aqidah and fiqh",
    summary:
      "A key reference for Athari creed texts and a natural anchor for the theology side of the library.",
    biography: [
      "Ibn Qudamah is widely read for his juristic and doctrinal contributions. For this site he is especially important because Lum'at al-I'tiqad gives the theology catalogue a concise, recognisable text with strong teaching value.",
      "A scholar page for Ibn Qudamah should make it easy to move from biography into text study, quotations, and topic-based articles.",
    ],
    notableWorks: [
      "Lum'at al-I'tiqad",
      "Rawdat al-Nazir",
      "al-Mughni",
    ],
    traits: ["Athari creed", "Author and educator", "Text-based learning"],
    relatedBookSlugs: ["lumat-al-itiqad"],
  },
  {
    slug: "al-zarnuji",
    name: "al-Zarnuji",
    honorific: "Burhan al-Din",
    dates: "6th-7th century AH",
    region: "Transoxiana",
    focus: "Adab of study",
    summary:
      "His work on the ethics of learning helps shape the softer institutional voice of the project.",
    biography: [
      "Although less known to general audiences than major juristic imams, al-Zarnuji remains deeply influential in how students are taught to approach knowledge, teachers, discipline, and intention.",
      "On this site, his presence helps the project feel educational and cultivated rather than merely informational.",
    ],
    notableWorks: ["Ta'lim al-Muta'allim"],
    traits: ["Study adab", "Formation", "Student discipline"],
    relatedBookSlugs: ["talim-al-mutaallim"],
  },
  {
    slug: "ibn-abi-al-izz",
    name: "Ibn Abi al-'Izz",
    honorific: "Sadr al-Din",
    dates: "731-792 AH",
    region: "Damascus",
    focus: "Creed commentary",
    summary:
      "Useful for the scholar catalogue because he connects theological writing, commentary, and educational explanation.",
    biography: [
      "Ibn Abi al-'Izz is often encountered through his creed commentary tradition, and he gives the scholar section a way to represent later explanatory writing rather than only foundational names.",
      "His profile can serve as a model for scholars whose value lies in commentary, clarification, and synthesis.",
    ],
    notableWorks: ["Sharh al-'Aqidah al-Tahawiyyah"],
    traits: ["Commentary", "Clarification", "Doctrinal teaching"],
    relatedBookSlugs: ["lumat-al-itiqad"],
  },
  {
    slug: "mulla-ali-al-qari",
    name: "Mulla Ali al-Qari",
    honorific: "Nur al-Din",
    dates: "d. 1014 AH",
    region: "Herat / Makkah",
    focus: "Hadith, fiqh, and commentary",
    summary:
      "A prolific scholar whose presence gives the scholars section depth beyond introductory biographies.",
    biography: [
      "Mulla Ali al-Qari is a helpful inclusion because he represents a mature scholarly ecosystem of commentary, hadith, legal reflection, and textual service.",
      "A polished scholar route should make room for figures like him whose benefit comes through sustained commentary and explanation.",
    ],
    notableWorks: [
      "Mirqat al-Mafatih",
      "Sharh works in fiqh and creed",
      "Pedagogical commentaries",
    ],
    traits: ["Commentary tradition", "Hanafi scholarship", "Teaching depth"],
    relatedBookSlugs: ["nur-al-idah"],
  },
];

export const videos: Video[] = [
  {
    slug: "usul-al-thalatha-intro",
    title: "Usul al-Thalatha: Introduction to the Three Principles",
    category: "Aqidah",
    level: "Beginner",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary:
      "A foundational lecture introducing the three principles of Islamic creed according to Athari methodology.",
    description:
      "This video provides a clear introduction to Usul al-Thalatha, one of the most essential texts in Islamic theology. It covers the fundamental principles of Athari creed in an accessible way for new learners.",
    duration: "45 min",
    keyThemes: ["Tawheed", "Athari creed", "Foundational knowledge"],
    scholarSlugs: ["ibn-qudamah"],
  },
  {
    slug: "tawheed-attributes",
    title: "The Divine Attributes: Understanding Allah's Names and Qualities",
    category: "Aqidah",
    level: "Intermediate",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary:
      "An in-depth exploration of Allah's Divine Names and Attributes according to Athari Islamic scholarship.",
    description:
      "This lecture delves into the Athari approach to understanding Allah's ninety-nine names and how His attributes relate to His essence. Designed for students with some foundational knowledge.",
    duration: "60 min",
    keyThemes: ["Divine attributes", "Asma wa Sifat", "Theological method"],
    scholarSlugs: ["ibn-qudamah", "ibn-abi-al-izz"],
  },
  {
    slug: "hanafi-fiqh-basics",
    title: "Hanafi Fiqh Fundamentals: Legal Methodology and Sources",
    category: "Fiqh",
    level: "Beginner",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary:
      "An introduction to how Hanafi jurisprudence derives Islamic law from Quran, Sunnah, Ijma, and Qiyas.",
    description:
      "This video introduces the legal methodology of the Hanafi school, explaining how jurists reach conclusions on matters of Islamic law through established principles and careful reasoning.",
    duration: "50 min",
    keyThemes: ["Legal methodology", "Usul al-Fiqh", "Hanafi school"],
    scholarSlugs: ["abu-hanifa", "al-tahawi"],
  },
  {
    slug: "qadr-and-free-will",
    title: "Divine Decree and Human Will: Reconciling Qadr and Choice",
    category: "Aqidah",
    level: "Intermediate",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary:
      "An examination of how Islamic creed balances divine predestination with human responsibility and choice.",
    description:
      "This lecture addresses one of the most profound questions in Islamic theology: how do we understand Allah's absolute knowledge and decree while maintaining human agency and responsibility?",
    duration: "55 min",
    keyThemes: ["Qadr", "Human will", "Divine knowledge", "Theological balance"],
    scholarSlugs: ["ibn-qudamah"],
  },
];

export const adminDrafts: AdminDraft[] = [
  {
    id: "draft-1",
    title: "How We Read Mukhtasar al-Quduri in Weekly Circles",
    status: "Draft",
    collection: "Books",
    updatedAt: "Edited 2 hours ago",
    excerpt:
      "A short editorial note introducing how the platform annotates law texts for weekly reading groups.",
    content:
      "# Reading Mukhtasar al-Quduri\n\nThis article introduces the reading method we use across the platform.\n\n## Opening frame\n\nWe begin with scope, terminology, and where the chapter sits inside the Hanafi school.\n\n> Every annotation should help the reader move from text to understanding without overloading the page.\n\n/Quran\n/Hadith\n/Matn\n\n## Teaching notes\n\n- Keep summaries short.\n- Surface chapter logic early.\n- Cross-link to scholar biographies when helpful.",
  },
  {
    id: "draft-2",
    title: "Scholar Profile Template: Abu Hanifa",
    status: "Review",
    collection: "Scholars",
    updatedAt: "Edited yesterday",
    excerpt:
      "A reusable biography format for major imams, including timeline, works, and study relevance.",
    content:
      "# Abu Hanifa\n\nUse this template for scholar pages.\n\n## Biography\n\nWrite a compact account that explains why the scholar matters to the user journey.\n\n## Major works and transmission\n\nList the key works, students, and routes of influence.\n\n## Why this scholar appears on the site\n\nExplain the relevance to current books, lessons, or articles.",
  },
  {
    id: "draft-3",
    title: "Editorial Policy for Creed Articles",
    status: "Published",
    collection: "Articles",
    updatedAt: "Published last week",
    excerpt:
      "A tone and structure guide for writing doctrinal material with clarity, restraint, and proper sourcing.",
    content:
      "# Editorial Policy for Creed Articles\n\nOur creed writing should be calm, sourced, and useful.\n\n## Principles\n\n- Prefer clear definitions over polemical framing.\n- Link texts, scholars, and source notes.\n- Keep the reading surface clean and searchable.\n\n## Command examples\n\n/Quran for verses\n/Hadith for reports\n/Matn for quoted passages",
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
  text: ScrollText,
};
