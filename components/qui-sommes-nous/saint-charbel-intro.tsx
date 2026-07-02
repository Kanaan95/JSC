import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";

export function SaintCharbelIntro() {
  return (
    <section className="bg-background py-20">
      <Reveal className="container flex flex-col gap-6 sm:flex-row sm:gap-10">
        <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-lg sm:aspect-auto sm:w-56">
          <Image
            src="/assets/images/saint-charbel/saint-charbel-a-lighthouse-of-virtue-in-the-stormy-seas-of-modern-catholic-life-332709.webp"
            alt="Icône de Saint Charbel Makhlouf"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Saint Charbel, notre patron
          </h2>
          <p className="mt-4 max-w-2xl text-foreground-muted">
            Charbel Makhlouf (1828–1898) est un moine ermite de la tradition
            maronite libanaise, entré au monastère Saint-Maron d&apos;Annaya
            où il a mené une vie entièrement consacrée à la prière et au
            silence. Sa sainteté et les nombreux miracles qui lui sont
            attribués rayonnent aujourd&apos;hui bien au-delà du Liban. Sa
            fête est célébrée le 3e dimanche de juillet, ainsi que le 24
            décembre.
          </p>
          <Link
            href="/saint-charbel"
            className="mt-4 inline-flex items-center gap-2 font-medium text-primary hover:underline"
          >
            En savoir plus →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
