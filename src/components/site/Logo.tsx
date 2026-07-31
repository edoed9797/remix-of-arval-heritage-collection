export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`flex flex-col leading-none ${light ? "text-white" : "text-ink"}`}
      aria-label="Arval Argenti Valenza"
    >
      <span className="font-display text-[1.7rem] font-light tracking-[0.34em] sm:text-[2rem]">
        ARVAL
      </span>
      <span className="mt-[0.35rem] text-[0.5rem] font-medium tracking-[0.42em] opacity-70 sm:text-[0.55rem]">
        ARGENTI · VALENZA · 1967
      </span>
    </span>
  );
}
