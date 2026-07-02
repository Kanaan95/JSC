import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { CONTACT } from "@/lib/constants";

export function WhatsappCta() {
  return (
    <section className="bg-[#25D366]/[0.06] py-20">
      <Reveal className="container flex flex-col items-start gap-6">
        <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          Rejoins-nous sur WhatsApp
        </h2>
        <p className="max-w-lg text-foreground-muted">
          Le plus simple pour rester connecté à la communauté au quotidien :
          annonces, sorties, entraide et bonne humeur, directement dans ta
          poche.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-[#25D366] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#1DA851]"
        >
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
            Rejoindre le groupe WhatsApp
          </a>
        </Button>
      </Reveal>
    </section>
  );
}
