import { SOCIAL_ICON_MAP } from "@/components/icons/social-icons";
import { SOCIAL_LINKS } from "@/lib/constants";

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {SOCIAL_LINKS.map((social) => {
        const Icon = SOCIAL_ICON_MAP[social.label as keyof typeof SOCIAL_ICON_MAP];
        return (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground-muted transition-colors hover:border-primary hover:text-primary"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
