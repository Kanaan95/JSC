import { Reveal } from "@/components/reveal";

const VALUES = [
  {
    title: "Foi vivante",
    description:
      "Une relation personnelle avec Jésus-Christ, nourrie par la prière et l'Esprit Saint, recentrée sur l'essentiel : le Christ.",
  },
  {
    title: "Joie fraternelle",
    description:
      "Une communauté unie, chaleureuse et accueillante, où la joie se partage et où chacun veille sur l'autre.",
  },
  {
    title: "Service et charité",
    description:
      "Un engagement concret au service des autres, vécu avec générosité et esprit de don.",
  },
] as const;

export function CommunityIntro() {
  return (
    <section className="py-20">
      <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Être un pont vivant entre cultures, générations et horizons
          </h2>
          <p className="mt-6 max-w-lg text-foreground-muted">
            La Jeunesse Saint Charbel rassemble des jeunes chrétiens issus de
            la tradition maronite libanaise, à la croisée de l&apos;Orient et
            de l&apos;Occident, tout en restant ouverte à tous, quelles que
            soient leur nationalité, culture ou parcours spirituel. À Nice,
            elle construit une communauté fraternelle, dynamique et
            structurée, enracinée dans la foi chrétienne et la tradition
            maronite.
          </p>
        </Reveal>

        <div className="flex flex-col gap-6">
          {VALUES.map((value, index) => (
            <Reveal
              key={value.title}
              delay={index === 0 ? "none" : index === 1 ? "short" : "medium"}
            >
              <div className="rounded-lg border border-border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">
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
