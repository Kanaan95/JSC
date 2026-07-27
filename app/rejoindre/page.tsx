import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ContactInfo } from "@/components/rejoindre/contact-info";
import { MembershipForm } from "@/components/rejoindre/membership-form";
import { NewsletterSignup } from "@/components/rejoindre/newsletter-signup";
import { SocialLinks } from "@/components/rejoindre/social-links";
import { WhatsappCta } from "@/components/rejoindre/whatsapp-cta";
import { POLES } from "@/lib/constants";
import { EVENTS } from "@/lib/events";

export const metadata: Metadata = {
  title: "Rejoindre",
  description:
    "Rejoins la Jeunesse Saint Charbel Nice : remplis le formulaire d'adhésion, retrouve-nous sur WhatsApp ou contacte directement l'équipe.",
};

interface RejoindrePageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function RejoindrePage({
  searchParams,
}: RejoindrePageProps) {
  const resolvedSearchParams = await searchParams;
  const poleSlug =
    typeof resolvedSearchParams.pole === "string"
      ? resolvedSearchParams.pole
      : undefined;
  const eventSlug =
    typeof resolvedSearchParams.event === "string"
      ? resolvedSearchParams.event
      : undefined;

  const defaultPole = POLES.find((pole) => pole.slug === poleSlug)?.slug;
  const matchedEvent = EVENTS.find((event) => event.slug === eventSlug);
  const defaultMessage = matchedEvent
    ? `Je souhaite m'inscrire à : ${matchedEvent.title}`
    : undefined;

  return (
    <>
      <PageHero
        title="Rejoins la JSC"
        subtitle="Une communauté fraternelle t'attend : remplis le formulaire, viens comme tu es, la suite se construit ensemble."
        decorativeImage="/assets/logos/barque-blanche-transparent.png"
        decorativeAlt=""
      />

      <section className="py-20">
        <Reveal className="container max-w-3xl">
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Formulaire d&apos;adhésion
          </h2>
          <p className="mt-3 text-foreground-muted">
            Quelques informations suffisent pour démarrer : nous revenons vers
            toi rapidement pour t&apos;accueillir.
          </p>
          <div className="mt-10">
            <MembershipForm
              defaultPole={defaultPole}
              defaultMessage={defaultMessage}
            />
          </div>
        </Reveal>
      </section>

      <WhatsappCta />

      <section className="bg-surface py-20">
        <Reveal className="container flex flex-col items-start gap-6">
          <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
            Newsletter
          </h2>
          <p className="max-w-lg text-foreground-muted">
            Une fois par mois, les temps forts de la communauté directement
            dans ta boîte mail.
          </p>
          <NewsletterSignup />
        </Reveal>
      </section>

      <section className="py-20">
        <Reveal className="container">
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Nous rencontrer
          </h2>
          <div className="mt-10">
            <ContactInfo />
          </div>
        </Reveal>
      </section>

      <section className="bg-surface py-16">
        <Reveal className="container flex flex-col items-start gap-6">
          <h2 className="font-heading text-2xl font-semibold text-foreground">
            Suis-nous
          </h2>
          <SocialLinks />
        </Reveal>
      </section>
    </>
  );
}
