"use client";

import { useMemo, useState } from "react";
import { ChevronDown, X } from "lucide-react";

import { CategoryFilter } from "@/components/agenda/category-filter";
import { MonthCalendar } from "@/components/agenda/month-calendar";
import { EventCard } from "@/components/agenda/event-card";
import {
  getEventDateRange,
  isPastEvent,
  type CommunityEvent,
  type EventCategory,
} from "@/lib/events";

interface AgendaExplorerProps {
  events: CommunityEvent[];
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

const DATE_HEADING_FORMAT: Intl.DateTimeFormatOptions = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

export function AgendaExplorer({ events }: AgendaExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<EventCategory | "tout">(
    "tout"
  );
  const [showPast, setShowPast] = useState(false);
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const now = useMemo(() => new Date(), []);

  const filteredEvents = useMemo(
    () =>
      activeCategory === "tout"
        ? events
        : events.filter((event) => event.category === activeCategory),
    [events, activeCategory]
  );

  const eventsOnSelectedDay = useMemo(
    () =>
      selectedDay
        ? filteredEvents.filter((event) =>
            isSameDay(getEventDateRange(event).start, selectedDay)
          )
        : [],
    [filteredEvents, selectedDay]
  );

  const upcomingEvents = useMemo(
    () =>
      filteredEvents
        .filter((event) => !isPastEvent(event, now))
        .sort(
          (a, b) =>
            getEventDateRange(a).start.getTime() -
            getEventDateRange(b).start.getTime()
        ),
    [filteredEvents, now]
  );

  const pastEvents = useMemo(
    () =>
      filteredEvents
        .filter((event) => isPastEvent(event, now))
        .sort(
          (a, b) =>
            getEventDateRange(b).start.getTime() -
            getEventDateRange(a).start.getTime()
        ),
    [filteredEvents, now]
  );

  return (
    <div className="container py-20">
      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

      <div className="mt-10">
        <MonthCalendar
          events={filteredEvents}
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
        />
      </div>

      <div className="mt-10">
        {selectedDay ? (
          <>
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-2xl font-semibold capitalize text-foreground">
                {selectedDay.toLocaleDateString("fr-FR", DATE_HEADING_FORMAT)}
              </h2>
              <button
                type="button"
                onClick={() => setSelectedDay(null)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                <X className="h-4 w-4" />
                Effacer
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              {eventsOnSelectedDay.length === 0 && (
                <p className="text-sm text-foreground-muted">
                  Aucun événement ce jour-là dans cette catégorie.
                </p>
              )}
              {eventsOnSelectedDay.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              Prochains événements
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {upcomingEvents.length === 0 && (
                <p className="text-sm text-foreground-muted">
                  Aucun événement à venir dans cette catégorie pour le moment.
                </p>
              )}
              {upcomingEvents.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="mt-16 border-t border-border pt-8">
        <button
          type="button"
          onClick={() => setShowPast((value) => !value)}
          aria-expanded={showPast}
          className="inline-flex items-center gap-2 font-medium text-primary"
        >
          Voir les événements passés
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              showPast ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`grid transition-[grid-template-rows] duration-300 ${
            showPast ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-6 flex flex-col gap-4">
              {pastEvents.length === 0 && (
                <p className="text-sm text-foreground-muted">
                  Aucun événement passé dans cette catégorie.
                </p>
              )}
              {pastEvents.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
