import { Reveal } from "@/components/reveal";

const VALUES = [
  {
    title: "Foi vivante — Christ au centre",
    description:
      "Une relation personnelle avec Jésus-Christ, nourrie par la prière et l'Esprit Saint, inspirée par l'exemple de Saint Charbel et recentrée sur l'essentiel : le Christ.",
  },
  {
    title: "Service et charité",
    description:
      "Un engagement concret au service des autres, vécu avec générosité, dynamisme et esprit de don.",
  },
  {
    title: "Joie fraternelle et solidarité",
    description:
      "Une communauté unie, chaleureuse, bienveillante et accueillante, où la joie se partage et où chacun veille sur l'autre.",
  },
  {
    title: "Ouverture et transmission",
    description:
      "Une volonté de dialogue, d'accueil et de partage entre cultures et générations pour transmettre un héritage vivant, tout en restant ouverts au monde.",
  },
] as const;

const REVEAL_DELAYS = ["none", "short", "short", "medium"] as const;

export function ValuesGrid() {
  return (
    <section className="py-20">
      <div className="container">
        <Reveal>
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Nos valeurs
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {VALUES.map((value, index) => (
            <Reveal key={value.title} delay={REVEAL_DELAYS[index]}>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-foreground-muted">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
