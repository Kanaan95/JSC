import { Reveal } from "@/components/reveal";

const LEGACY_POINTS = [
  {
    title: "Guérisons et intercessions",
    description:
      "Depuis sa mort, des milliers de guérisons et de grâces sont attribuées à son intercession, rapportées par des pèlerins de toutes confessions.",
  },
  {
    title: "Un corps resté incorrompu",
    description:
      "Après son décès, son corps est resté exempt de corruption pendant des décennies, un phénomène qui a marqué durablement la dévotion populaire.",
  },
  {
    title: "Un pèlerinage universel",
    description:
      "Le monastère Saint-Maron d'Annaya accueille chaque année des pèlerins venus du monde entier, bien au-delà des communautés libanaises et maronites.",
  },
  {
    title: "Un rayonnement œcuménique",
    description:
      "Chrétiens de toutes traditions et croyants d'autres religions se recueillent à Annaya, faisant de Charbel une figure spirituelle qui dépasse les frontières confessionnelles.",
  },
] as const;

export function MiraclesLegacy() {
  return (
    <section className="bg-background py-20">
      <Reveal className="container">
        <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          Miracles et héritage spirituel
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {LEGACY_POINTS.map((point) => (
            <div key={point.title} className="border-l-4 border-primary pl-6">
              <h3 className="font-heading text-xl font-semibold text-foreground">
                {point.title}
              </h3>
              <p className="mt-2 text-foreground-muted">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
