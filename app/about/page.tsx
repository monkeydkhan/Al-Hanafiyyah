import Link from "next/link";
import { BookOpenCheck, Fingerprint, Scale, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";

const sections = [
  {
    id: "anonymity",
    label: "01",
    title: "Priority of Anonymity and Presenting the Truth",
    icon: Fingerprint,
    paragraphs: [
      "We hold anonymity and privacy in high regard, which is why we do not see any reason to share personal details that are not relevant to the content. The truth does not depend on who said it, but on evidence from the Qur'an and Sunnah upon the understanding of the righteous generations.",
      "We avoid emphasizing personal credentials as if they add weight to what is said. One may have reservations about taking from a website, and that is perfectly understandable. We are not obliged to divulge information about credentials, and neither are you obliged to take from us. The criterion is the Qur'an and the Sunnah, which is objective.",
    ],
    quote:
      "The truth is not known through men. Rather men are known through truth.",
  },
  {
    id: "methodology",
    label: "02",
    title: "Methodology and Sources",
    icon: BookOpenCheck,
    paragraphs: [
      "We do not consider ourselves scholars or people of knowledge. The content is based on lectures of our mashaayikh, who are Hanafis, or translations of existing works. Nothing is personal opinion.",
      "We affirm the Qur'an and Sunnah upon the understanding of the Salaf: the Sahaabah, the Tabi'een, and those after them. We acknowledge all four madhhabs as acceptable and valid to follow.",
      "We follow the Hanafi Madhhab through the guidance of our mashaayikh. The general understanding of this website should be upon the furoo' and usool of the Hanafi madhhab, unless stated otherwise.",
      "Our 'Aqeedah is upon Ahlus-Sunnah wal-Jama'ah, which is also the creed of our Imams. We affirm what Imam Abu Ja'far at-Tahaaawi, may Allaah have mercy on him, presented in his famous treatise.",
    ],
    quote:
      "This is a clear presentation of the creed of Ahlus-Sunnah wal Jama'ah, according to the way of the jurists of the religion, Abu Haneefah an-Nu'maan ibn Thaabit al-Kufi, Abu Yoosuf Ya'qoob ibn Ibraheem al-Ansaari and Abu Abdullah Muhammad ibn al-Hasan ash-Shaybaani, may Allaah be pleased with them all, and what they believe regarding the fundamentals of the religion and their faith in the Lord of the worlds.",
  },
  {
    id: "reason",
    label: "03",
    title: "Reason for Existence",
    icon: ShieldCheck,
    paragraphs: [
      "One may ask why this website exists when many other resources are already available. The reason is that we have found that many commonly used Hanafi resources are not good for various reasons.",
      "Firstly, some of these sites do not belong to, nor do they follow, the principles, fundamentals, and methodology of Ahlus-Sunnah wa'l Jama'ah. Rather, they promote Ahlul-Kalaam, whose misguidance the righteous generations warned against, including the imams of this madhhab.",
      "Secondly, many answers do not align with the Hanafi madhhab either. At times, opinions foreign to the madhhab are labelled as Hanafi fiqh, weak or rejected positions are presented, or the words of the fuqaha' are misconstrued. In sha Allaah, we intend to compile these errors when time allows.",
    ],
    quote:
      "Whoever seeks the religion through Al-Kalam becomes a heretical apostate.",
  },
  {
    id: "sharing",
    label: "04",
    title: "Permission to Share",
    icon: Scale,
    paragraphs: [
      "Anyone may share the content as-is. Do not modify it and present altered versions as though they are approved. The content should be shared in its original form.",
    ],
    quote: "Attribution-NonCommercial-NoDerivatives 4.0 International",
  },
];

export default function AboutPage() {
  return (
    <div className="about-shell">
      <section className="about-hero">
        <Reveal>
          <div className="about-intro-card">
            <span className="about-kicker">About this site</span>
            <p className="about-bismillah" dir="rtl">
              بسم الله الحمد لله والصلاة والسلام على رسول الله وعلى آله واصحابه ومن اتبع الهدى
            </p>
          </div>
        </Reveal>
      </section>

      <div className="about-layout">
        <aside className="about-nav" aria-label="About sections">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              <span>{section.label}</span>
              {section.title}
            </a>
          ))}
        </aside>

        <main className="about-content">
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <Reveal key={section.id} delay={0.04 * index}>
                <section id={section.id} className="about-section">
                  <div className="about-section-heading">
                    <span>{section.label}</span>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <blockquote>{section.quote}</blockquote>
                  {section.id === "sharing" ? (
                    <Link
                      href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                      className="about-license-link"
                    >
                      View license
                    </Link>
                  ) : null}
                </section>
              </Reveal>
            );
          })}

          <Reveal>
            <div className="about-signoff">- Al-Hanafiyyah Team</div>
          </Reveal>
        </main>
      </div>
    </div>
  );
}
