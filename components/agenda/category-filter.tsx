import { CATEGORY_META, type EventCategory } from "@/lib/events";

const CATEGORIES: Array<EventCategory | "tout"> = [
  "tout",
  "spirituel",
  "social",
  "culturel",
  "sportif",
  "humanitaire",
  "after-mass",
];

interface CategoryFilterProps {
  active: EventCategory | "tout";
  onChange: (category: EventCategory | "tout") => void;
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((category) => {
        const label = category === "tout" ? "Tout" : CATEGORY_META[category].label;
        const isActive = active === category;
        return (
          <button
            key={category}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(category)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "border-primary bg-primary text-white"
                : "border-border text-foreground-muted hover:border-primary hover:text-primary"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
