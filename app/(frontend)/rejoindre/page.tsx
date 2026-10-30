import type { Metadata } from "next";
import { RichText } from "@payloadcms/richtext-lexical/react";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ContactInfo } from "@/components/rejoindre/contact-info";
import { MembershipForm } from "@/components/rejoindre/membership-form";
import { NewsletterSignup } from "@/components/rejoindre/newsletter-signup";
import { SocialLinks } from "@/components/rejoindre/social-links";
import { WhatsappCta } from "@/components/rejoindre/whatsapp-cta";
import { getPayloadClient } from "@/lib/payload";
import type {
  ContactPageGlobal,
  PoleDoc,
  SiteSettingsGlobal,
} from "@/lib/payload-types";

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

  const payload = await getPayloadClient();
  const [contactPage, siteSettings, polesResult, matchedEvent] =
    await Promise.all([
      payload.findGlobal({ slug: "contact-page" }) as Promise<ContactPageGlobal>,
      payload.findGlobal({ slug: "site-settings" }) as Promise<SiteSettingsGlobal>,
      payload.find({
        collection: "poles",
        limit: 100,
        depth: 0,
      }) as unknown as Promise<{ docs: PoleDoc[] }>,
      eventSlug
        ? payload
          .find({
            collection: "events",
            where: {
              slug: { equals: eventSlug },
              status: { equals: "published" },
            },
            limit: 1,
            depth: 0,
          })
          .then((result) => result.docs[0] ?? null)
        : Promise.resolve(null),
    ]);

  const poles = polesResult.docs;
  const defaultPole = poles.find((pole) => pole.slug === poleSlug)?.slug;
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
          {contactPage.formIntroText ? (
            <div className="mt-3 text-foreground-muted">
              <RichText data={contactPage.formIntroText} disableContainer />
            </div>
          ) : (
            <p className="mt-3 text-foreground-muted">
              Quelques informations suffisent pour démarrer : nous revenons vers
              toi rapidement pour t&apos;accueillir.
            </p>
          )}
          <div className="mt-10">
            <MembershipForm
              poles={poles}
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
            <ContactInfo
              address={contactPage.address}
              mapEmbedUrl={contactPage.mapEmbedUrl}
              whatsappNumber={siteSettings.whatsappNumber}
            />
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
