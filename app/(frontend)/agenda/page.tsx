import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { AgendaExplorer } from "@/components/agenda/agenda-explorer";
import type { CommunityEvent } from "@/lib/events";
import { getPayloadClient } from "@/lib/payload";
import type { EventDoc } from "@/lib/payload-types";
import { richTextToPlainText } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Agenda",
  description:
    "Retrouvez tous les événements à venir de la Jeunesse Saint Charbel Nice : soirées de prière, sorties, activités culturelles, sportives et humanitaires.",
};

const DATE_TIME_FORMAT = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Europe/Paris",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const DEFAULT_DURATION_MINUTES = 60;

function toCommunityEvent(event: EventDoc): CommunityEvent {
  const parts = DATE_TIME_FORMAT.formatToParts(new Date(event.date));
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  const date = `${get("year")}-${get("month")}-${get("day")}`;
  const time = `${get("hour")}:${get("minute")}`;

  const durationMinutes = event.endDate
    ? Math.max(
      15,
      Math.round(
        (new Date(event.endDate).getTime() - new Date(event.date).getTime()) /
        60000
      )
    )
    : DEFAULT_DURATION_MINUTES;

  return {
    slug: event.slug,
    title: event.title,
    category: event.category,
    date,
    time,
    durationMinutes,
    location: event.location ?? "",
    description: richTextToPlainText(event.description),
  };
}

export default async function AgendaPage() {
  const payload = await getPayloadClient();
  const { docs } = (await payload.find({
    collection: "events",
    sort: "date",
    limit: 200,
    depth: 0,
  })) as unknown as { docs: EventDoc[] };

  const events = docs.map(toCommunityEvent);

  return (
    <>
      <PageHero
        title="Agenda"
        subtitle="Tous les temps forts de la communauté : prière, sport, culture, solidarité et fraternité."
        decorativeImage="/assets/logos/croix-blanche-transparent.png"
        decorativeAlt=""
      />
      <AgendaExplorer events={events} />
    </>
  );
}
