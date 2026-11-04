import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { IdentitySection } from "@/components/qui-sommes-nous/identity-section";
import { MissionVision } from "@/components/qui-sommes-nous/mission-vision";
import { SaintCharbelIntro } from "@/components/qui-sommes-nous/saint-charbel-intro";
import { TeamGrid } from "@/components/qui-sommes-nous/team-grid";
import { ValuesGrid } from "@/components/qui-sommes-nous/values-grid";
import { getPayloadClient } from "@/lib/payload";
import type { TeamMemberDoc } from "@/lib/payload-types";

export const metadata: Metadata = {
  title: "Qui sommes-nous",
  description:
    "Identité, mission, vision, valeurs et équipe de la Jeunesse Saint Charbel Nice, une communauté à la croisée de l'Orient et de l'Occident.",
};

export default async function QuiSommesNousPage() {
  const payload = await getPayloadClient();
  const { docs: teamMembers } = (await payload.find({
    collection: "team-members",
    depth: 1,
    limit: 100,
    sort: "order",
  })) as unknown as { docs: TeamMemberDoc[] };

  return (
    <>
      <PageHero
        title="Qui sommes-nous"
        subtitle="Une communauté à la croisée de l'Orient et de l'Occident"
        decorativeImage="/assets/logos/barque-blanche-transparent.png"
        decorativeAlt=""
      />
      <IdentitySection />
      <MissionVision />
      <ValuesGrid />
      <TeamGrid teamMembers={teamMembers} />
      <SaintCharbelIntro />
    </>
  );
}
