import { Reveal } from "@/components/reveal";

export function IdentitySection() {
  return (
    <Reveal className="container py-20">
      <div className="max-w-3xl">
        <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          Notre identité
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
          La Jeunesse Saint Charbel rassemble des jeunes chrétiens
          principalement issus de la tradition maronite libanaise, tout en
          restant ouverte à tous, quelles que soient leur nationalité, culture
          ou parcours spirituel. Elle porte une identité singulière, à la
          croisée de l&apos;Orient et de l&apos;Occident, puisant dans la
          richesse de l&apos;héritage oriento-libano-maronite tout en
          s&apos;inscrivant pleinement dans le tissu français et dans
          l&apos;Église catholique. Son objectif est de permettre aux jeunes
          issus de l&apos;émigration ou nés en France de rester connectés à
          leurs racines, de transmettre cet héritage, et de s&apos;intégrer
          pleinement dans la société.
        </p>

        <blockquote className="mt-10 border-l-4 border-primary py-2 pl-6 font-heading text-2xl italic text-foreground sm:text-3xl">
          Être un pont vivant entre cultures, générations et horizons.
        </blockquote>
      </div>
    </Reveal>
  );
}
