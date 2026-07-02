import { Reveal } from "@/components/reveal";

export function PrayerNeuvaine() {
  return (
    <section className="bg-background py-20">
      <Reveal className="container max-w-2xl">
        <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          Prière à Saint Charbel
        </h2>
        <p className="mt-4 text-foreground-muted">
          Une prière simple, à dire seul ou en communauté, pour se confier à
          son intercession.
        </p>
        <div className="mt-8 rounded-lg border-l-4 border-accent bg-surface p-8">
          <p className="font-heading text-lg italic leading-relaxed text-foreground">
            Saint Charbel, toi qui as choisi le silence pour mieux entendre la
            voix de Dieu, apprends-nous à faire de nos vies une prière.
            <br />
            <br />
            Toi qui as tout quitté pour suivre le Christ dans l&apos;humilité
            et le dénuement, intercède pour notre communauté, pour nos
            familles, et pour ceux qui souffrent en silence.
            <br />
            <br />
            Obtiens-nous la force de rester fidèles dans les petites choses,
            la paix du cœur dans les épreuves, et la joie simple de ceux qui
            se savent aimés de Dieu.
            <br />
            <br />
            Saint Charbel, prie pour nous.
            <br />
            Amen.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
