import type { DefaultServerCellComponentProps } from "payload";

import { EVENT_STATUS_BADGES, type EventStatus } from "@/lib/event-status";

export function StatusCell({ cellData }: DefaultServerCellComponentProps) {
    const badge = EVENT_STATUS_BADGES[cellData as EventStatus];

    if (!badge) {
        return null;
    }

    return (
        <span
            style={{
                display: "inline-block",
                padding: "2px 10px",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 600,
                background: badge.background,
                color: badge.color,
            }}
        >
            {badge.label}
        </span>
    );
}
