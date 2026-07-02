import { Reveal } from "@/components/reveal";

const VISION_POINTS = [
  "Ancrée dans la foi chrétienne",
  "Enracinée dans la tradition maronite libanaise, tout en la rendant accessible et actuelle",
  "Créant un véritable dialogue entre Orient et Occident",
  "Offrant un cadre accueillant et inclusif, ouvert à tous les jeunes",
  "Structurée comme une famille solidaire",
  "Attirant les jeunes éloignés de l'Église, en leur proposant un espace de sens, d'appartenance et de croissance",
  "Offrant aux jeunes croyants et pratiquants un espace d'approfondissement spirituel et de vie chrétienne active",
] as const;

export function MissionVision() {
  return (
    <section className="bg-surface py-20">
      <div className="container grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Mission
          </h2>
          <p className="mt-6 text-foreground-muted">
            Rassembler les jeunes et les accompagner vers une relation vivante
            avec Jésus-Christ, à travers une communauté fraternelle,
            dynamique et structurée, qui s&apos;appuie sur des activités
            spirituelles, culturelles, artistiques, sportives et sociales,
            des temps de partage, des initiatives solidaires et humanitaires
            et des actions d&apos;intégration comme chemins concrets de
            rencontre avec autrui et avec le Seigneur.
          </p>
          <p className="mt-4 font-heading text-xl italic text-primary">
            Faire grandir des jeunes enracinés, engagés et ouverts.
          </p>
        </Reveal>

        <Reveal delay="short" className="lg:col-span-5">
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Vision
          </h2>
          <ul className="mt-6 space-y-3">
            {VISION_POINTS.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-foreground-muted">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
