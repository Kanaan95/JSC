import { Reveal } from "@/components/reveal";

// Years marked "commonly documented" are widely repeated across hagiographic
// sources but haven't been cross-checked against a diocesan/parish source —
// worth confirming before launch. Birth, death and canonization years were
// explicitly confirmed.
const MILESTONES = [
  { year: "1828", label: "Naissance à Beqaa-Kafra, au Liban" },
  {
    year: "1851",
    label: "Entrée au noviciat de l'Ordre Libanais Maronite, à Mayfouq",
  },
  { year: "1859", label: "Ordination sacerdotale" },
  {
    year: "1875",
    label:
      "Retrait à l'ermitage Saints-Pierre-et-Paul, au-dessus d'Annaya",
  },
  { year: "1898", label: "Mort à l'ermitage, le 24 décembre" },
  { year: "1965", label: "Béatification" },
  { year: "1977", label: "Canonisation" },
] as const;

export function Timeline() {
  return (
    <section className="bg-surface py-20">
      <Reveal className="container max-w-3xl">
        <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          Repères d&apos;une vie
        </h2>
        <ol className="mt-12 flex flex-col">
          {MILESTONES.map((milestone, index) => (
            <li
              key={milestone.year}
              className={`relative border-l-2 border-border pl-8 ${
                index === MILESTONES.length - 1 ? "" : "pb-10"
              }`}
            >
              <span className="absolute left-0 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-surface" />
              <span className="font-heading text-2xl font-semibold text-primary">
                {milestone.year}
              </span>
              <p className="mt-1 max-w-md text-foreground-muted">
                {milestone.label}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
