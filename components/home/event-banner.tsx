import Link from "next/link";
import { MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NEXT_EVENT } from "@/lib/constants";

export function EventBanner() {
  return (
    <section className="bg-surface">
      <div className="container flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="text-[0.65rem] font-medium uppercase leading-none tracking-wide">
              {NEXT_EVENT.month}
            </span>
            <span className="font-heading text-xl font-semibold leading-tight">
              {NEXT_EVENT.day}
            </span>
          </div>
          <div>
            <p className="font-heading text-lg font-semibold text-foreground">
              {NEXT_EVENT.title}
            </p>
            <p className="flex items-center gap-1.5 text-sm text-foreground-muted">
              <MapPin className="h-3.5 w-3.5" />
              {NEXT_EVENT.date} — {NEXT_EVENT.location}
            </p>
          </div>
        </div>
        <Button asChild variant="outline" size="sm" className="shrink-0">
          <Link href={NEXT_EVENT.href}>S&apos;inscrire →</Link>
        </Button>
      </div>
    </section>
  );
}
