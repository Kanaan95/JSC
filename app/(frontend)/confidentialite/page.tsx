import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CONTACT, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Politique de confidentialité",
    description:
        "Politique de confidentialité de la Jeunesse Saint Charbel Nice : données collectées, finalités, durée de conservation et droits des utilisateurs.",
};

export default function ConfidentialitePage() {
    return (
        <>
            <PageHero
                title="Politique de confidentialité"
                subtitle="Comment nous traitons les données que tu nous confies via ce site."
                decorativeImage="/assets/logos/flamme-croix-blanc-fond-transparent.svg"
                decorativeAlt=""
            />

            <section className="py-20">
                <Reveal className="container max-w-3xl space-y-12">
                    <div>
                        <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                            Données collectées
                        </h2>
                        <p className="mt-4 text-foreground-muted">
                            Lorsque tu remplis le formulaire d&apos;adhésion, le formulaire
                            de contact ou l&apos;inscription à la newsletter sur ce site,
                            nous collectons uniquement les informations que tu nous
                            transmets volontairement : nom, prénom, adresse email,
                            éventuellement numéro de téléphone, pôle d&apos;intérêt et
                            message.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                            Finalité du traitement
                        </h2>
                        <p className="mt-4 text-foreground-muted">
                            Ces données sont utilisées exclusivement pour répondre à tes
                            demandes, t&apos;accueillir au sein de la communauté{" "}
                            {SITE_NAME}, t&apos;informer des événements à venir et, si tu y
                            as consenti, t&apos;envoyer notre newsletter mensuelle. Elles ne
                            sont ni vendues, ni cédées, ni utilisées à des fins
                            commerciales.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                            Durée de conservation
                        </h2>
                        <p className="mt-4 text-foreground-muted">
                            Tes données sont conservées le temps nécessaire à la gestion de
                            ta demande ou de ton adhésion, et au maximum pendant trois ans à
                            compter de notre dernier échange, sauf demande de suppression de
                            ta part.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                            Partage des données
                        </h2>
                        {/* TODO: update once the form submission provider (e.g. Netlify Forms / Resend) is finalized */}
                        <p className="mt-4 text-foreground-muted">
                            Les données transmises via les formulaires de ce site peuvent
                            être traitées par un prestataire technique tiers (service
                            d&apos;envoi de formulaires ou d&apos;emails) dans le seul but
                            d&apos;acheminer ta demande jusqu&apos;à l&apos;équipe {SITE_NAME}
                            . Aucune donnée n&apos;est partagée à d&apos;autres fins.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                            Cookies
                        </h2>
                        <p className="mt-4 text-foreground-muted">
                            Ce site n&apos;utilise pas de cookies de suivi publicitaire ni
                            d&apos;outils de mesure d&apos;audience tiers. Seuls des cookies
                            techniques strictement nécessaires au bon fonctionnement du site
                            peuvent être déposés.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                            Tes droits
                        </h2>
                        <p className="mt-4 text-foreground-muted">
                            Conformément au Règlement Général sur la Protection des Données
                            (RGPD) et à la loi Informatique et Libertés, tu disposes d&apos;un
                            droit d&apos;accès, de rectification, de suppression et
                            d&apos;opposition concernant tes données personnelles. Tu peux
                            exercer ces droits à tout moment en nous écrivant à{" "}
                            <a
                                href={`mailto:${CONTACT.email}`}
                                className="text-primary underline underline-offset-4"
                            >
                                {CONTACT.email}
                            </a>
                            .
                        </p>
                    </div>
                </Reveal>
            </section>
        </>
    );
}
