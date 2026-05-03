import Image from "next/image";

type LogoMarkProps = {
  compact?: boolean;
  iconOnly?: boolean;
  hero?: boolean;
  nav?: boolean;
};

export function LogoMark({
  compact = false,
  iconOnly = false,
  hero = false,
  nav = false,
}: LogoMarkProps) {
  const logoSize = hero
    ? "h-16 w-16"
    : nav
      ? "h-12 w-12"
      : compact
        ? "h-10 w-10"
        : "h-12 w-12";
  const imageSize = hero ? 56 : nav ? 44 : compact ? 32 : 40;

  return (
    <div className={`flex items-center ${compact ? "gap-2.5" : "gap-3"}`}>
      <span className={`logo-orb relative inline-flex items-center justify-center overflow-hidden rounded-full p-1 ${logoSize}`}>
        <Image
          src="/hanafii.png"
          alt="Al Hanafiyyah logo"
          width={imageSize}
          height={imageSize}
          className="h-full w-full rounded-full object-cover"
          priority
        />
      </span>

      {iconOnly ? null : (
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
      )}
    </div>
  );
}
