import { Reveal } from "@/components/reveal";

export function PatronageIntro() {
  return (
    <section className="bg-background py-20">
      <Reveal className="container">
        <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          Pourquoi Saint Charbel ?
        </h2>
        <p className="mt-6 text-foreground-muted">
          Notre communauté porte son nom parce qu&apos;il incarne, mieux que
          quiconque, le pont que nous cherchons à construire entre l&apos;Orient
          et l&apos;Occident, entre nos racines libanaises et notre vie ici, à
          Nice. Charbel est l&apos;un des visages les plus universels de la
          tradition maronite : un homme simple, né dans un village de
          montagne, devenu un saint reconnu et prié bien au-delà du Liban et
          de l&apos;Église catholique.
        </p>
        <p className="mt-4 text-foreground-muted">
          En le prenant pour patron, la Jeunesse Saint Charbel Nice affirme ce
          qu&apos;elle veut être : une famille spirituelle enracinée dans la
          foi, fidèle à son héritage maronite libanais, et pourtant grande
          ouverte à tous les jeunes qui croisent son chemin — quelle que soit
          leur origine.
        </p>
        <blockquote className="mt-10 border-l-4 border-primary py-2 pl-6 font-heading text-2xl italic text-foreground sm:text-3xl">
          Être un pont vivant entre cultures, générations et horizons.
        </blockquote>
      </Reveal>
    </section>
  );
}
