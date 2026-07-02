import { CommunityIntro } from "@/components/home/community-intro";
import { EventBanner } from "@/components/home/event-banner";
import { Hero } from "@/components/home/hero";
import { JoinCta } from "@/components/home/join-cta";
import { MonthlyQuote } from "@/components/home/monthly-quote";
import { PolesPreview } from "@/components/home/poles-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EventBanner />
      <CommunityIntro />
      <PolesPreview />
      <JoinCta />
      <MonthlyQuote />
    </>
  );
}
