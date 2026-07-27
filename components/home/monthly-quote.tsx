import { RichText } from "@payloadcms/richtext-lexical/react";

import { Reveal } from "@/components/reveal";
import type { RichTextValue } from "@/lib/payload-types";

interface MonthlyQuoteProps {
  quote?: RichTextValue;
}

const FALLBACK_QUOTE = {
  text: "Le silence est le langage de Dieu, tout le reste est une pauvre traduction.",
  attribution: "Saint Charbel Makhlouf",
};

export function MonthlyQuote({ quote }: MonthlyQuoteProps) {
  return (
    <section className="bg-background py-24">
      <Reveal className="container flex max-w-2xl flex-col items-center gap-2 text-center">
        <span
          className="font-heading text-8xl leading-none text-accent/40"
          aria-hidden
        >
          &laquo;
        </span>
        {quote ? (
          <div className="-mt-6 font-heading text-3xl italic text-foreground sm:text-4xl">
            <RichText data={quote} disableContainer />
          </div>
        ) : (
          <>
            <blockquote className="-mt-6 font-heading text-3xl italic text-foreground sm:text-4xl">
              {FALLBACK_QUOTE.text}
            </blockquote>
            <p className="mt-4 text-sm text-foreground-muted">
              — {FALLBACK_QUOTE.attribution}
            </p>
          </>
        )}
      </Reveal>
    </section>
  );
}
