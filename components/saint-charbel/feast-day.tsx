import { Reveal } from "@/components/reveal";

const FEAST_DAYS = [
  {
    month: "Juil.",
    day: "3e",
    description:
      "Fête maronite de Saint Charbel, célébrée le 3e dimanche de juillet.",
  },
  {
    month: "Déc.",
    day: "24",
    description:
      "Anniversaire de sa mort à l'ermitage d'Annaya, également fêté le 24 décembre.",
  },
] as const;

export function FeastDay() {
  return (
    <section className="bg-surface py-20">
      <Reveal className="container">
        <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          Sa fête
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {FEAST_DAYS.map((feast) => (
            <div
              key={feast.month}
              className="flex items-center gap-4 rounded-lg border border-border bg-background p-6"
            >
              <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="text-[0.65rem] font-medium uppercase leading-none tracking-wide">
                  {feast.month}
                </span>
                <span className="font-heading text-xl font-semibold leading-tight">
                  {feast.day}
                </span>
              </div>
              <p className="text-foreground-muted">{feast.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
