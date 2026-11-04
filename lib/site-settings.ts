import { getPayloadClient } from "@/lib/payload";
import type { SiteSettingsGlobal } from "@/lib/payload-types";

// Null/undefined (e.g. rows created before the field existed) counts as hidden.
export async function getPolesSectionEnabled(): Promise<boolean> {
  const payload = await getPayloadClient();
  const settings = (await payload.findGlobal({
    slug: "site-settings",
    depth: 0,
  })) as SiteSettingsGlobal;

  return settings.polesSectionEnabled === true;
}
