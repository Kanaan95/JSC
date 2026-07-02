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

// TODO: replace with real data once the Agenda is wired up to a CMS/backend
export const EVENTS: CommunityEvent[] = [
  {
    slug: "soiree-priere-adoration",
    title: "Soirée de prière & adoration",
    category: "spirituel",
    date: "2026-07-10",
    time: "19:30",
    durationMinutes: 90,
    location: "Église Sainte-Rita, Nice",
    description:
      "Un temps de louange, de silence et d'adoration pour se recentrer sur l'essentiel, ouvert à tous.",
  },
  {
    slug: "after-mass-cafe-fraternel",
    title: "After Mass — café fraternel",
    category: "after-mass",
    date: "2026-07-13",
    time: "11:00",
    durationMinutes: 60,
    location: "Salle paroissiale, Nice",
    description:
      "Café, thé et viennoiseries après la messe pour prolonger la fraternité et accueillir les nouveaux venus.",
  },
  {
    slug: "randonnee-hauteurs-nice",
    title: "Randonnée sur les hauteurs de Nice",
    category: "sportif",
    date: "2026-07-19",
    time: "08:30",
    durationMinutes: 240,
    location: "Départ parking du Mont Boron, Nice",
    description:
      "Une randonnée conviviale au-dessus de la baie des Anges, prévoir de bonnes chaussures et de l'eau.",
  },
  {
    slug: "soiree-culturelle-libanaise",
    title: "Soirée culturelle libanaise",
    category: "culturel",
    date: "2026-08-02",
    time: "19:00",
    durationMinutes: 180,
    location: "Salle des fêtes, Nice",
    description:
      "Musique, danse et spécialités libanaises pour faire découvrir et vivre notre héritage culturel.",
  },
  {
    slug: "maraude-solidaire",
    title: "Maraude solidaire",
    category: "humanitaire",
    date: "2026-08-09",
    time: "20:00",
    durationMinutes: 120,
    location: "Centre-ville, Nice",
    description:
      "Distribution de repas et de vêtements chauds auprès des personnes sans-abri du centre-ville.",
  },
  {
    slug: "diner-tournant-membres",
    title: "Dîner tournant entre membres",
    category: "social",
    date: "2026-06-20",
    time: "19:30",
    durationMinutes: 150,
    location: "Chez un membre, Nice",
    description:
      "Un dîner convivial chez l'un des membres pour resserrer les liens autour d'un bon repas partagé.",
  },
];

export function getEventDateRange(event: CommunityEvent): {
  start: Date;
  end: Date;
} {
  const start = new Date(`${event.date}T${event.time}:00`);
  const end = new Date(start.getTime() + event.durationMinutes * 60000);
  return { start, end };
}

export function isPastEvent(event: CommunityEvent, now: Date = new Date()): boolean {
  return getEventDateRange(event).end.getTime() < now.getTime();
}
