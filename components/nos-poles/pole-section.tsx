import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { POLES } from "@/lib/constants";

type Pole = (typeof POLES)[number];

const BG_CYCLE = [
  "bg-background",
  "bg-surface",
  "bg-background",
  "bg-primary",
] as const;

const BG_OVERRIDE: Partial<Record<Pole["slug"], string>> = {
  solidaire: "bg-solidaire/10",
  "after-mass": "bg-after-mass/10",
};

interface PoleSectionProps {
  pole: Pole;
  index: number;
}

export function PoleSection({ pole, index }: PoleSectionProps) {
  const background = BG_OVERRIDE[pole.slug] ?? BG_CYCLE[index % BG_CYCLE.length];
  const isDark = background === "bg-primary";
  const imageFirst = index % 2 === 0;

  return (
    <section id={pole.slug} className={`scroll-mt-40 py-20 ${background}`}>
      <Reveal
        className={`container flex flex-col gap-10 lg:gap-16 ${
          imageFirst ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-lg lg:w-2/5">
          <Image
            src={pole.logo}
            alt={`Logo du pôle ${pole.name}`}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center lg:w-3/5">
          <h2
            className={`font-heading text-3xl font-semibold sm:text-4xl ${
              isDark ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            {pole.name}
          </h2>
          <p
            className={`mt-2 text-sm font-medium ${
              isDark ? "text-white/70" : "text-foreground-muted"
            }`}
          >
            Responsable : {pole.responsible}
          </p>
          <p
            className={`mt-6 max-w-2xl ${
              isDark ? "text-white/90" : "text-foreground-muted"
            }`}
          >
            {pole.mission}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {pole.activities.map((activity) => (
              <li
                key={activity}
                className={`rounded-full border px-3 py-1 text-sm ${
                  isDark
                    ? "border-white/30 text-white/90"
                    : "border-border text-foreground-muted"
                }`}
              >
                {activity}
              </li>
            ))}
          </ul>

          <Button
            asChild
            size="lg"
            className={`mt-8 w-fit ${
              isDark ? "bg-white text-primary hover:bg-white/90" : ""
            }`}
          >
            <Link href={`/rejoindre?pole=${pole.slug}`}>
              Rejoindre ce pôle
            </Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
