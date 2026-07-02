import Image from "next/image";

import { Reveal } from "@/components/reveal";

export function Biography() {
  return (
    <section className="bg-surface py-20">
      <Reveal className="container flex flex-col gap-10 lg:flex-row lg:gap-16">
        <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-lg lg:aspect-auto lg:w-2/5">
          <Image
            src="/assets/images/saint-charbel/saint-charbel-a-lighthouse-of-virtue-in-the-stormy-seas-of-modern-catholic-life-332709.webp"
            alt="Icône de Saint Charbel Makhlouf"
            fill
            className="object-cover"
          />
        </div>

        <div className="lg:w-3/5">
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Une vie de silence et de prière
          </h2>
          <p className="mt-6 text-foreground-muted">
            Youssef Antoun Makhlouf naît en 1828 à Beqaa-Kafra, un village
            niché dans les montagnes du nord du Liban, dans une famille de
            paysans pieux. Très tôt attiré par la vie de prière de son oncle
            ermite, il quitte sa famille à l&apos;âge adulte pour entrer dans
            l&apos;Ordre Libanais Maronite, où il reçoit le nom de Charbel, en
            mémoire d&apos;un martyr du IIe siècle.
          </p>
          <p className="mt-4 text-foreground-muted">
            Après ses vœux et son ordination sacerdotale, le Père Charbel vit
            près de vingt-cinq ans en communauté, avant d&apos;obtenir la
            permission de se retirer comme ermite à l&apos;ermitage
            Saints-Pierre-et-Paul, au-dessus du monastère Saint-Maron
            d&apos;Annaya. Il y passera le reste de sa vie dans une existence
            entièrement vouée à la prière, au jeûne et au silence,
            jusqu&apos;à sa mort le 24 décembre 1898.
          </p>
          <blockquote className="mt-10 border-l-4 border-primary py-2 pl-6 font-heading text-2xl italic text-foreground sm:text-3xl">
            Le silence est le langage de Dieu, tout le reste est une pauvre
            traduction.
          </blockquote>
        </div>
      </Reveal>
    </section>
  );
}
