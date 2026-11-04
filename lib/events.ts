export type EventCategory =
  | "spirituel"
  | "social"
  | "culturel"
  | "sportif"
  | "humanitaire"
  | "after-mass";

export const CATEGORY_META: Record<
  EventCategory,
  { label: string; badgeClass: string; dotClass: string }
> = {
  spirituel: {
    label: "Spirituel",
    badgeClass: "bg-accent text-white",
    dotClass: "bg-accent",
  },
  social: {
    label: "Social",
    badgeClass: "bg-primary text-white",
    dotClass: "bg-primary",
  },
  culturel: {
    label: "Culturel",
    badgeClass: "bg-primary-light text-white",
    dotClass: "bg-primary-light",
  },
  sportif: {
    label: "Sport",
    badgeClass: "bg-primary-dark text-white",
    dotClass: "bg-primary-dark",
  },
  humanitaire: {
    label: "Humanitaire",
    badgeClass: "border border-primary text-primary",
    dotClass: "bg-primary",
  },
  "after-mass": {
    label: "After Mass",
    badgeClass: "bg-after-mass text-white",
    dotClass: "bg-after-mass",
  },
};

export interface CommunityEvent {
  slug: string;
  title: string;
  category: EventCategory;
  date: string;
  time: string;
  durationMinutes: number;
  location: string;
  description: string;
}

export function getEventDateRange(event: CommunityEvent): {
  start: Date;
  end: Date;
} {
  const start = new Date(`${event.date}T${event.time}:00`);
  const end = new Date(start.getTime() + event.durationMinutes * 60000);
  return { start, end };
}

export function isPastEvent(
  event: CommunityEvent,
  now: Date = new Date(),
): boolean {
  return getEventDateRange(event).end.getTime() < now.getTime();
}
