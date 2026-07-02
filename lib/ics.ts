function formatIcsDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

interface CalendarLinkInput {
  uid: string;
  title: string;
  description: string;
  location: string;
  start: Date;
  end: Date;
}

export function buildGoogleCalendarUrl(input: CalendarLinkInput): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: input.title,
    dates: `${formatIcsDate(input.start)}/${formatIcsDate(input.end)}`,
    details: input.description,
    location: input.location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function buildIcsDataUrl(input: CalendarLinkInput): string {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Jeunesse Saint Charbel Nice//Agenda//FR",
    "BEGIN:VEVENT",
    `UID:${input.uid}@jscnice.fr`,
    `DTSTAMP:${formatIcsDate(new Date())}`,
    `DTSTART:${formatIcsDate(input.start)}`,
    `DTEND:${formatIcsDate(input.end)}`,
    `SUMMARY:${input.title}`,
    `DESCRIPTION:${input.description}`,
    `LOCATION:${input.location}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join("\r\n"))}`;
}
