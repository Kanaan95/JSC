import { Reveal } from "@/components/reveal";
import { MONTHLY_QUOTE } from "@/lib/constants";

export function MonthlyQuote() {
  return (
    <section className="bg-background py-24">
      <Reveal className="container flex max-w-2xl flex-col items-center gap-2 text-center">
        <span
          className="font-heading text-8xl leading-none text-accent/40"
          aria-hidden
        >
          &laquo;
        </span>
        <blockquote className="-mt-6 font-heading text-3xl italic text-foreground sm:text-4xl">
          {MONTHLY_QUOTE.text}
        </blockquote>
        <p className="mt-4 text-sm text-foreground-muted">
          — {MONTHLY_QUOTE.attribution}
        </p>
      </Reveal>
    </section>
  );
}
