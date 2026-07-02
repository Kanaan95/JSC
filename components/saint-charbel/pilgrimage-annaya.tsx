import { Reveal } from "@/components/reveal";

export function PilgrimageAnnaya() {
  return (
    <section className="relative overflow-hidden py-20">
      <div
        className="absolute inset-0 bg-primary"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, hsl(var(--color-primary-light)) 0%, hsl(var(--color-primary)) 45%, hsl(var(--color-primary-dark)) 100%)",
        }}
      />
      <div
        className="absolute inset-0 bg-repeat opacity-[0.06] bg-[length:6rem_6rem] bg-[url('/assets/logos/flamme-croix-blanc-fond-transparent.svg')]"
        aria-hidden
      />

      <Reveal className="container relative max-w-3xl">
        <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
          Le pèlerinage à Annaya
        </h2>
        <p className="mt-6 text-white/90">
          Niché dans les montagnes du Liban-Nord, le monastère Saint-Maron
          d&apos;Annaya et l&apos;ermitage Saints-Pierre-et-Paul qui le
          surplombe restent aujourd&apos;hui un lieu de pèlerinage vivant.
          Chaque année, des centaines de milliers de fidèles s&apos;y rendent
          pour prier sur le tombeau du saint, dans le silence des montagnes
          où il a lui-même vécu.
        </p>
        <p className="mt-4 text-white/90">
          Pour beaucoup de jeunes de notre communauté, Annaya reste un
          pèlerinage à vivre au moins une fois : un retour aux sources de la
          foi maronite, à l&apos;endroit même où Charbel a choisi le silence
          et la prière plutôt que le monde.
        </p>
      </Reveal>
    </section>
  );
}
