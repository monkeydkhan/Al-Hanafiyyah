import Image from "next/image";

type LogoMarkProps = {
  compact?: boolean;
};

export function LogoMark({ compact = false }: LogoMarkProps) {
  return (
    <div className={`flex items-center ${compact ? "gap-2.5" : "gap-3"}`}>
      <span
        className={`relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[var(--line)] bg-[var(--panel-soft)] p-1 shadow-[0_18px_40px_var(--shadow)] ${
          compact ? "h-10 w-10" : "h-12 w-12"
        }`}
      >
        <Image
          src="/hanafii.png"
          alt="Al Hanafiyyah logo"
          width={compact ? 32 : 40}
          height={compact ? 32 : 40}
          className="h-full w-full rounded-full object-cover"
          priority
        />
      </span>

      <div className="leading-none">
        <p
          className={`font-display italic text-foreground ${
            compact ? "text-xl" : "text-2xl"
          }`}
        >
          Al Hanafiyyah
        </p>
        {!compact ? (
          <p className="mt-1 text-[0.7rem] uppercase tracking-[0.26em] text-[var(--muted)]">
            Hanafi Athari
          </p>
        ) : null}
      </div>
    </div>
  );
}
