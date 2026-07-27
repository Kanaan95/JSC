import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CONTACT, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Mentions légales",
    description:
        "Mentions légales du site de la Jeunesse Saint Charbel Nice : éditeur, hébergement, propriété intellectuelle et contact.",
};

export default function MentionsLegalesPage() {
    return (
        <>
            <PageHero
                title="Mentions légales"
                subtitle="Informations légales relatives à l'édition et à l'hébergement de ce site."
                decorativeImage="/assets/logos/flamme-croix-blanc-fond-transparent.svg"
                decorativeAlt=""
            />

            <section className="py-20">
                <Reveal className="container max-w-3xl space-y-12">
                    <div>
                        <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                            Éditeur du site
                        </h2>
                        <p className="mt-4 text-foreground-muted">
                            Le site {SITE_NAME} est édité par la communauté {SITE_NAME}, une
                            association de jeunes de la communauté catholique maronite de
                            Nice, sans but lucratif.
                        </p>
                        {/* TODO: update this once JSC formalizes a legal structure (association loi 1901, numéro RNA/SIRET, etc.) */}
                        <p className="mt-4 text-foreground-muted">
                            La communauté JSC Nice fonctionne actuellement de manière
                            informelle, sans structure juridique déclarée. Ces mentions
                            seront complétées dès la création d&apos;une structure
                            associative officielle.
                        </p>
                        <p className="mt-4 text-foreground-muted">
                            Responsable de la publication : Edwin Lattouf, Président de{" "}
                            {SITE_NAME}.
                        </p>
                        <p className="mt-4 text-foreground-muted">
                            Contact :{" "}
                            <a
                                href={`mailto:${CONTACT.email}`}
                                className="text-primary underline underline-offset-4"
                            >
                                {CONTACT.email}
                            </a>
                        </p>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                            Hébergement
                        </h2>
                        {/* TODO: replace with the real hosting provider identity before launch (e.g. Vercel Inc. or Netlify Inc.) */}
                        <p className="mt-4 text-foreground-muted">
                            Ce site est hébergé par un prestataire d&apos;hébergement web.
                            Les coordonnées complètes de l&apos;hébergeur seront précisées
                            ici avant la mise en ligne définitive du site.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                            Propriété intellectuelle
                        </h2>
                        <p className="mt-4 text-foreground-muted">
                            L&apos;ensemble des contenus présents sur ce site (textes,
                            images, logos, photographies) est la propriété de{" "}
                            {SITE_NAME} ou de ses membres, sauf mention contraire. Toute
                            reproduction, représentation ou diffusion, totale ou partielle,
                            sans autorisation préalable est interdite.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                            Contact
                        </h2>
                        <p className="mt-4 text-foreground-muted">
                            Pour toute question relative à ce site, vous pouvez nous écrire
                            à{" "}
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
