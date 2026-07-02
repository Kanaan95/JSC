import { useEffect, useRef, useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";

import { buildGoogleCalendarUrl, buildIcsDataUrl } from "@/lib/ics";
import { getEventDateRange, type CommunityEvent } from "@/lib/events";

export function AddToCalendarMenu({ event }: { event: CommunityEvent }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { start, end } = getEventDateRange(event);
  const linkInput = {
    uid: event.slug,
    title: event.title,
    description: event.description,
    location: event.location,
    start,
    end,
  };
  const googleUrl = buildGoogleCalendarUrl(linkInput);
  const icsUrl = buildIcsDataUrl(linkInput);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
      >
        <Calendar className="h-4 w-4" />
        Ajouter à mon agenda
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-10 mt-2 w-52 rounded-lg border border-border bg-background py-1 shadow-lg">
          <a
            href={googleUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 text-sm text-foreground hover:bg-surface"
          >
            Google Calendar
          </a>
          <a
            href={icsUrl}
            download={`${event.slug}.ics`}
            onClick={() => setOpen(false)}
            className="block px-4 py-2 text-sm text-foreground hover:bg-surface"
          >
            Apple Calendar (.ics)
          </a>
        </div>
      )}
    </div>
  );
}
