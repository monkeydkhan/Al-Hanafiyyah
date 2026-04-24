import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  actions,
}: PageIntroProps) {
  return (
    <div className="max-w-4xl">
      <div className="eyebrow-chip">{eyebrow}</div>
      <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
        {description}
      </p>
      {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
    </div>
  );
}
