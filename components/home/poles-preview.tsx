import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import type { PoleDoc } from "@/lib/payload-types";

const FEATURED_SLUGS = ["spirituel", "solidaire", "after-mass", "social"] as const;

type FeaturedSlug = (typeof FEATURED_SLUGS)[number];

const CARD_ACCENT_BAR: Record<FeaturedSlug, string> = {
  spirituel: "bg-primary",
  solidaire: "bg-solidaire",
  "after-mass": "bg-after-mass",
  social: "bg-primary",
};

const REVEAL_DELAYS = ["none", "short", "medium", "long"] as const;

interface PolesPreviewProps {
  poles: PoleDoc[];
}

export function PolesPreview({ poles }: PolesPreviewProps) {
  const featuredPoles = FEATURED_SLUGS.map((slug) =>
    poles.find((pole) => pole.slug === slug)
  ).filter((pole): pole is PoleDoc => Boolean(pole));

  if (featuredPoles.length === 0) {
    return null;
  }

  return (
    <section className="bg-surface py-20">
      <div className="container">
        <Reveal>
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Nos pôles
          </h2>
          <p className="mt-3 max-w-lg text-foreground-muted">
            Huit axes pour vivre sa foi, sa culture et sa fraternité au
            quotidien.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredPoles.map((pole, index) => {
            const slug = pole.slug as FeaturedSlug;
            const logoUrl =
              typeof pole.logo === "object" && pole.logo ? pole.logo.url : null;
            return (
              <Reveal
                key={pole.slug}
                delay={REVEAL_DELAYS[index] ?? "none"}
              >
                <Link
                  href="/nos-poles"
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                >
                  <div
                    className={`h-1.5 w-full ${CARD_ACCENT_BAR[slug] ?? "bg-primary"}`}
                  />
                  {logoUrl ? (
                    <div className="relative aspect-square w-full overflow-hidden">
                      <Image
                        src={logoUrl}
                        alt={`Logo du pôle ${pole.name}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {pole.name}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:underline">
                      Découvrir
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Link
          href="/nos-poles"
          className="mt-10 inline-flex items-center gap-2 font-medium text-primary hover:underline"
        >
          Voir tous les pôles →
        </Link>
      </div>
    </section>
  );
}
