import Link from "next/link";
import { MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { EventDoc } from "@/lib/payload-types";

interface EventBannerProps {
  event: EventDoc | null;
}

const MONTH_FORMAT = new Intl.DateTimeFormat("fr-FR", { month: "short" });
const DATE_FORMAT = new Intl.DateTimeFormat("fr-FR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function EventBanner({ event }: EventBannerProps) {
  if (!event) {
    return null;
  }

  const date = new Date(event.date);

  return (
    <section className="bg-surface">
      <div className="container flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="text-[0.65rem] font-medium uppercase leading-none tracking-wide">
              {MONTH_FORMAT.format(date)}
            </span>
            <span className="font-heading text-xl font-semibold leading-tight">
              {date.getDate()}
            </span>
          </div>
          <div>
            <p className="font-heading text-lg font-semibold text-foreground">
              {event.title}
            </p>
            <p className="flex items-center gap-1.5 text-sm text-foreground-muted">
              <MapPin className="h-3.5 w-3.5" />
              {DATE_FORMAT.format(date)}
              {event.location ? ` — ${event.location}` : ""}
            </p>
          </div>
        </div>
        <Button asChild variant="outline" size="sm" className="shrink-0">
          <Link href="/agenda">S&apos;inscrire →</Link>
        </Button>
      </div>
    </section>
  );
}
