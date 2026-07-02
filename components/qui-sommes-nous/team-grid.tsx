import { Reveal } from "@/components/reveal";
import { TEAM } from "@/lib/constants";
import { getInitials } from "@/lib/utils";

const REVEAL_DELAYS = ["none", "short", "medium", "long"] as const;

export function TeamGrid() {
  return (
    <section className="bg-surface py-20">
      <div className="container">
        <Reveal>
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Notre équipe
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, index) => (
            <Reveal
              key={member.name}
              delay={REVEAL_DELAYS[index % REVEAL_DELAYS.length]}
            >
              <div className="flex items-center gap-4 rounded-lg border border-border bg-background p-5">
                {/* TODO: replace initials avatar with a real team photo once provided */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-semibold text-primary-foreground">
                  {getInitials(member.name)}
                </div>
                <div>
                  <p className="font-heading text-lg font-semibold text-foreground">
                    {member.name}
                  </p>
                  <p className="text-sm text-foreground-muted">
                    {member.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
