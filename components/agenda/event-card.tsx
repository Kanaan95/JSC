import Link from "next/link";

import { Button } from "@/components/ui/button";
import { AddToCalendarMenu } from "@/components/agenda/add-to-calendar-menu";
import { CATEGORY_META, getEventDateRange, type CommunityEvent } from "@/lib/events";

const MONTHS_SHORT = [
  "Jan.",
  "Fév.",
  "Mars",
  "Avr.",
  "Mai",
  "Juin",
  "Juil.",
  "Août",
  "Sept.",
  "Oct.",
  "Nov.",
  "Déc.",
];

export function EventCard({ event }: { event: CommunityEvent }) {
  const { start } = getEventDateRange(event);
  const meta = CATEGORY_META[event.category];
  const formattedDate = start.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="flex overflow-hidden rounded-lg border border-border bg-surface">
      <div className={`w-1.5 shrink-0 ${meta.dotClass}`} aria-hidden />
      <div className="flex flex-1 flex-col gap-4 p-6 sm:flex-row sm:items-start">
        <div className="flex-1">
          <span
            className={`inline-block rounded-full px-3 py-0.5 text-xs font-medium ${meta.badgeClass}`}
          >
            {meta.label}
          </span>
          <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">
            {event.title}
          </h3>
          <p className="mt-1 text-sm text-foreground-muted">
            {event.location} · {formattedDate} à {event.time}
          </p>
          <p className="mt-2 text-sm text-foreground-muted">{event.description}</p>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Button asChild size="sm">
              <Link href={`/rejoindre?event=${event.slug}`}>S&apos;inscrire</Link>
            </Button>
            <AddToCalendarMenu event={event} />
          </div>
        </div>

        <div className="flex w-full shrink-0 flex-row items-center justify-center gap-2 rounded-lg bg-primary py-3 text-primary-foreground sm:h-16 sm:w-16 sm:flex-col sm:gap-0 sm:py-0">
          <span className="text-[0.65rem] font-medium uppercase leading-none tracking-wide">
            {MONTHS_SHORT[start.getMonth()]}
          </span>
          <span className="font-heading text-xl font-semibold leading-tight">
            {start.getDate()}
          </span>
        </div>
      </div>
    </div>
  );
}
