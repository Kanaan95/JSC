import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { CATEGORY_META, getEventDateRange, type CommunityEvent } from "@/lib/events";

const WEEKDAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const MONTHS = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const VISIBLE_CHIPS = 2;

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

interface MonthCalendarProps {
  events: CommunityEvent[];
  selectedDay: Date | null;
  onSelectDay: (day: Date | null) => void;
}

export function MonthCalendar({
  events,
  selectedDay,
  onSelectDay,
}: MonthCalendarProps) {
  const today = new Date();
  const [visibleMonth, setVisibleMonth] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const year = visibleMonth.getFullYear();
  const month = visibleMonth.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const leadingBlanks = (firstOfMonth.getDay() + 6) % 7;

  const days: Array<Date | null> = [
    ...Array.from({ length: leadingBlanks }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1)),
  ];
  const trailingBlanks = (7 - (days.length % 7)) % 7;
  days.push(...Array.from({ length: trailingBlanks }, () => null));

  const eventsOnDay = (day: Date) =>
    events.filter((event) => isSameDay(getEventDateRange(event).start, day));

  return (
    <div className="rounded-lg border border-border bg-surface p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h3 className="font-heading text-xl font-semibold text-foreground">
          {MONTHS[month]} {year}
        </h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() =>
              setVisibleMonth(new Date(today.getFullYear(), today.getMonth(), 1))
            }
            className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground-muted transition-colors hover:border-primary hover:text-primary"
          >
            Aujourd&apos;hui
          </button>
          <button
            type="button"
            aria-label="Mois précédent"
            onClick={() => setVisibleMonth(new Date(year, month - 1, 1))}
            className="rounded-full border border-border p-1.5 text-foreground-muted transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Mois suivant"
            onClick={() => setVisibleMonth(new Date(year, month + 1, 1))}
            className="rounded-full border border-border p-1.5 text-foreground-muted transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-7 gap-1 text-center text-xs font-medium text-foreground-muted">
        {WEEKDAYS.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          if (!day) {
            return <div key={`blank-${index}`} className="min-h-16 sm:min-h-24" />;
          }
          const dayEvents = eventsOnDay(day);
          const isToday = isSameDay(day, today);
          const isSelected = selectedDay ? isSameDay(day, selectedDay) : false;
          const overflowCount = dayEvents.length - VISIBLE_CHIPS;

          return (
            <button
              key={day.toISOString()}
              type="button"
              onClick={() => onSelectDay(isSelected ? null : day)}
              className={`flex min-h-16 flex-col items-start gap-1 rounded-md p-1 text-left transition-colors sm:min-h-24 sm:p-1.5 ${
                isSelected
                  ? "ring-2 ring-primary ring-offset-1 ring-offset-surface"
                  : "hover:bg-background"
              }`}
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium ${
                  isToday
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground"
                }`}
              >
                {day.getDate()}
              </span>
              <div className="flex w-full flex-col gap-0.5">
                {dayEvents.slice(0, VISIBLE_CHIPS).map((event) => (
                  <span
                    key={event.slug}
                    className={`hidden truncate rounded px-1 py-0.5 text-left text-[0.65rem] leading-tight sm:block ${
                      CATEGORY_META[event.category].badgeClass
                    }`}
                  >
                    {event.title}
                  </span>
                ))}
                {dayEvents.length > 0 && (
                  <span
                    className={`h-1 w-1 rounded-full sm:hidden ${
                      CATEGORY_META[dayEvents[0]!.category].dotClass
                    }`}
                  />
                )}
                {overflowCount > 0 && (
                  <span className="hidden text-[0.65rem] text-foreground-muted sm:block">
                    +{overflowCount} de plus
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
