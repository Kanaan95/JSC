export type EventStatus = "draft" | "in_discussion" | "published";

export const EVENT_STATUS_OPTIONS: { label: string; value: EventStatus }[] = [
  { label: "Brouillon", value: "draft" },
  { label: "En discussion", value: "in_discussion" },
  { label: "Publié", value: "published" },
];

export const EVENT_STATUS_BADGES: Record<
  EventStatus,
  { label: string; background: string; color: string }
> = {
  draft: { label: "Brouillon", background: "#E5E7EB", color: "#374151" },
  in_discussion: {
    label: "En discussion",
    background: "#FEF3C7",
    color: "#92400E",
  },
  published: { label: "Publié", background: "#DCFCE7", color: "#166534" },
};
