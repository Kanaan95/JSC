import { POLES } from "@/lib/constants";

export function PoleSideNav() {
  return (
    <nav
      aria-label="Navigation des pôles"
      className="fixed left-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
    >
      {POLES.map((pole) => (
        <a
          key={pole.slug}
          href={`#${pole.slug}`}
          className="group flex items-center gap-2 text-xs font-medium text-foreground-muted transition-colors hover:text-primary"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-border transition-colors group-hover:bg-primary" />
          {pole.name}
        </a>
      ))}
    </nav>
  );
}

export function PoleMobileTabs() {
  return (
    <nav
      aria-label="Navigation des pôles"
      className="sticky top-24 z-30 flex gap-2 overflow-x-auto border-b border-border bg-background/95 px-4 py-3 backdrop-blur lg:hidden"
    >
      {POLES.map((pole) => (
        <a
          key={pole.slug}
          href={`#${pole.slug}`}
          className="shrink-0 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground hover:border-primary hover:text-primary"
        >
          {pole.name}
        </a>
      ))}
    </nav>
  );
}
