import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function PdfDownloadCta() {
  return (
    <section className="bg-surface py-16">
      <Reveal className="container flex flex-col items-start gap-4">
        <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-accent">
          Bientôt disponible
        </span>
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          La neuvaine complète à Saint Charbel
        </h2>
        <p className="max-w-xl text-foreground-muted">
          Un livret PDF avec la neuvaine complète, jour après jour, sera
          bientôt disponible en téléchargement libre.
        </p>
        {/* TODO: once the PDF exists, replace this disabled button with a
            real download link (or asChild + <a href> to the file). */}
        <Button type="button" size="lg" disabled>
          Télécharger le PDF (bientôt)
        </Button>
      </Reveal>
    </section>
  );
}
