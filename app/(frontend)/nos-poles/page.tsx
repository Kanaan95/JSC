import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { PoleMobileTabs, PoleSideNav } from "@/components/nos-poles/pole-nav";
import { PoleSection } from "@/components/nos-poles/pole-section";
import { POLES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nos pôles",
  description:
    "Les 8 axes d'action de la Jeunesse Saint Charbel Nice : spirituel, solidaire, culturel, sportif, social, humanitaire, animation et after mass.",
};

export default function NosPolesPage() {
  return (
    <>
      <PageHero
        title="Nos Pôles"
        subtitle="Huit axes d'action, une même communauté : spirituel, solidaire, culturel, sportif, social, humanitaire, animation et after mass."
        decorativeImage="/assets/logos/flamme-croix-blanc-fond-transparent.svg"
        decorativeAlt=""
      />

      <PoleMobileTabs />


      {POLES.map((pole, index) => (
        <PoleSection key={pole.slug} pole={pole} index={index} />
      ))}

      <section className="bg-surface py-20">
        <Reveal className="container flex flex-col items-start gap-6 text-left">
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Tu ne sais pas quel pôle te correspond ?
          </h2>
          <p className="max-w-xl text-foreground-muted">
            Pas d&apos;engagement exclusif : tu peux participer à plusieurs
            pôles. Parle-nous de toi, on t&apos;aide à trouver ta place dans
            la communauté.
          </p>
          <Button asChild size="lg">
            <Link href="/rejoindre">Contacte-nous</Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
