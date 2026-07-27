import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { Biography } from "@/components/saint-charbel/biography";
import { FeastDay } from "@/components/saint-charbel/feast-day";
import { MiraclesLegacy } from "@/components/saint-charbel/miracles-legacy";
import { OtherSaintsTeaser } from "@/components/saint-charbel/other-saints-teaser";
import { PatronageIntro } from "@/components/saint-charbel/patronage-intro";
import { PdfDownloadCta } from "@/components/saint-charbel/pdf-download-cta";
import { PilgrimageAnnaya } from "@/components/saint-charbel/pilgrimage-annaya";
import { PrayerNeuvaine } from "@/components/saint-charbel/prayer-neuvaine";
import { Timeline } from "@/components/saint-charbel/timeline";

export const metadata: Metadata = {
  title: "Saint Charbel",
  description:
    "Saint Charbel Makhlouf (1828–1898), moine, prêtre et ermite maronite, patron de la Jeunesse Saint Charbel Nice : biographie, repères de vie, miracles, pèlerinage à Annaya et prière.",
};

export default function SaintCharbelPage() {
  return (
    <>
      <PageHero
        title="Saint Charbel Makhlouf"
        subtitle="Moine, prêtre et ermite maronite (1828–1898), patron de la Jeunesse Saint Charbel Nice."
        decorativeImage="/assets/logos/croix-blanche-transparent.png"
        decorativeAlt=""
      />
      <Biography />
      <PatronageIntro />
      
      <Timeline />
      <MiraclesLegacy />
      <FeastDay />
      <PilgrimageAnnaya />
      <PrayerNeuvaine />
      <PdfDownloadCta />
      <OtherSaintsTeaser />
    </>
  );
}
