import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { CONTACT } from "@/lib/constants";

export function JoinCta() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
      <div
        className="absolute inset-0 bg-repeat opacity-[0.05] bg-[length:6rem_6rem] bg-[url('/assets/logos/flamme-croix-blanc-fond-transparent.svg')]"
        aria-hidden
      />
      <Reveal className="container relative flex flex-col items-start gap-6">
        <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
          Rejoins la communauté JSC
        </h2>
        <p className="max-w-lg text-white/90">
          Que tu sois libanais, français ou d&apos;ailleurs, croyant de longue
          date ou simplement curieux, il y a une place pour toi parmi nous.
        </p>
        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-white text-primary transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/90"
          >
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
              Rejoindre le groupe WhatsApp
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-primary"
          >
            <Link href="/rejoindre">Remplir le formulaire</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
