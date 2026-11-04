import { getPayload, type Payload } from "payload";

import config from "@/payload.config";

let cached: Promise<Payload> | null = null;

/**
 * Returns a singleton Payload Local API client, shared across Server
 * Components so we don't re-initialize Payload on every request.
 */
export function getPayloadClient(): Promise<Payload> {
  if (!cached) {
    cached = getPayload({ config });
  }

  return cached;
}
