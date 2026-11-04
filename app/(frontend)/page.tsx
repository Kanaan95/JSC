import { CommunityIntro } from "@/components/home/community-intro";
import { EventBanner } from "@/components/home/event-banner";
import { Hero } from "@/components/home/hero";
import { JoinCta } from "@/components/home/join-cta";
import { MonthlyQuote } from "@/components/home/monthly-quote";
import { PolesPreview } from "@/components/home/poles-preview";
import { getPayloadClient } from "@/lib/payload";
import type {
  EventDoc,
  HomepageGlobal,
  PoleDoc,
} from "@/lib/payload-types";
import { getPolesSectionEnabled } from "@/lib/site-settings";

export default async function HomePage() {
  const payload = await getPayloadClient();

  const [homepage, featuredEvents, polesSectionEnabled] = await Promise.all([
    payload.findGlobal({ slug: "homepage" }) as Promise<HomepageGlobal>,
    payload.find({
      collection: "events",
      where: {
        featured: { equals: true },
        status: { equals: "published" },
      },
      sort: "date",
      limit: 1,
      depth: 0,
    }) as unknown as Promise<{ docs: EventDoc[] }>,
    getPolesSectionEnabled(),
  ]);

  const poles = polesSectionEnabled
    ? ((await payload.find({
      collection: "poles",
      limit: 100,
      depth: 1,
    })) as unknown as { docs: PoleDoc[] })
    : null;

  return (
    <>
      <Hero
        heroTitle={homepage.heroTitle}
        heroSubtitle={homepage.heroSubtitle}
      />
      <EventBanner event={featuredEvents.docs[0] ?? null} />
      <CommunityIntro />
      {poles ? <PolesPreview poles={poles.docs} /> : null}
      <JoinCta />
      <MonthlyQuote quote={homepage.monthlyQuote} />
    </>
  );
}
