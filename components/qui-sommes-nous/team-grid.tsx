import Image from "next/image";

import { Reveal } from "@/components/reveal";
import type { TeamMemberDoc } from "@/lib/payload-types";
import { getInitials } from "@/lib/utils";

const REVEAL_DELAYS = ["none", "short", "medium", "long"] as const;

interface TeamGridProps {
  teamMembers: TeamMemberDoc[];
}

export function TeamGrid({ teamMembers }: TeamGridProps) {
  if (teamMembers.length === 0) {
    return null;
  }

  return (
    <section className="bg-surface py-20">
      <div className="container">
        <Reveal>
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Notre équipe
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => {
            const photoUrl =
              typeof member.photo === "object" && member.photo
                ? member.photo.url
                : null;

            return (
              <Reveal
                key={member.id}
                delay={REVEAL_DELAYS[index % REVEAL_DELAYS.length]}
              >
                <div className="flex items-center gap-4 rounded-lg border border-border bg-background p-5">
                  {photoUrl ? (
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={photoUrl}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-semibold text-primary-foreground">
                      {getInitials(member.name)}
                    </div>
                  )}
                  <div>
                    <p className="font-heading text-lg font-semibold text-foreground">
                      {member.name}
                    </p>
                    {member.role ? (
                      <p className="text-sm text-foreground-muted">
                        {member.role}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
