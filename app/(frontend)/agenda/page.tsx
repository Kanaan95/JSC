import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { AgendaExplorer } from "@/components/agenda/agenda-explorer";
import { EVENTS } from "@/lib/events";

export const metadata: Metadata = {
  title: "Agenda",
  description:
    "Retrouvez tous les événements à venir de la Jeunesse Saint Charbel Nice : soirées de prière, sorties, activités culturelles, sportives et humanitaires.",
};

export default function AgendaPage() {
  return (
    <>
      <PageHero
        title="Agenda"
        subtitle="Tous les temps forts de la communauté : prière, sport, culture, solidarité et fraternité."
        decorativeImage="/assets/logos/croix-blanche-transparent.png"
        decorativeAlt=""
      />
      <AgendaExplorer events={EVENTS} />
    </>
  );
}
