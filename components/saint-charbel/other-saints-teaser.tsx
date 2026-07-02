import { Reveal } from "@/components/reveal";

export function OtherSaintsTeaser() {
  return (
    <section className="bg-background py-16">
      <Reveal className="container">
        <div className="rounded-lg border border-dashed border-border p-8">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary">
            À venir
          </span>
          <h2 className="mt-4 font-heading text-2xl font-semibold text-foreground">
            D&apos;autres figures de la tradition maronite
          </h2>
          <p className="mt-2 max-w-xl text-foreground-muted">
            Saint Maroun, père spirituel de notre Église fêté le 9 février,
            ainsi que d&apos;autres saints maronites, auront bientôt leur
            propre page sur ce site.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
