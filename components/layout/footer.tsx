import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { RichText } from "@payloadcms/richtext-lexical/react";

import { SOCIAL_ICON_MAP } from "@/components/icons/social-icons";
import {
  CONTACT,
  getNavLinks,
  LEGAL_LINKS,
  SITE_NAME,
  SOCIAL_LINKS,
} from "@/lib/constants";
import type {
  FooterSettingsGlobal,
  SiteSettingsGlobal,
} from "@/lib/payload-types";

const PLATFORM_ICON: Record<string, keyof typeof SOCIAL_ICON_MAP> = {
  instagram: "Instagram",
  facebook: "Facebook",
  whatsapp: "WhatsApp",
  tiktok: "TikTok",
  youtube: "YouTube",
};

interface FooterProps {
  siteSettings?: SiteSettingsGlobal;
  footerSettings?: FooterSettingsGlobal;
  polesSectionEnabled: boolean;
}

export function Footer({
  siteSettings,
  footerSettings,
  polesSectionEnabled,
}: FooterProps) {
  const logoUrl =
    typeof siteSettings?.logo === "object" && siteSettings.logo
      ? siteSettings.logo.url
      : null;

  const socialLinks =
    siteSettings?.socialLinks && siteSettings.socialLinks.length > 0
      ? siteSettings.socialLinks.map((link) => ({
        href: link.url,
        label: PLATFORM_ICON[link.platform] ?? link.platform,
      }))
      : SOCIAL_LINKS;

  const legalLinks =
    footerSettings?.legalLinks && footerSettings.legalLinks.length > 0
      ? footerSettings.legalLinks.map((link) => ({
        href: link.url,
        label: link.label,
      }))
      : LEGAL_LINKS;

  return (
    <footer className="bg-primary">
      <div className="container grid gap-12 py-16 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="relative h-20 w-20">
            <Image
              src={logoUrl || "/assets/logos/logo-jsc-blanc-fond-transparent.svg"}
              alt={SITE_NAME}
              fill
              className="object-contain"
            />
          </div>
          {footerSettings?.footerText ? (
            <div className="max-w-xs text-sm text-white/70">
              <RichText data={footerSettings.footerText} disableContainer />
            </div>
          ) : (
            <p className="max-w-xs text-sm text-white/70">
              Être un pont vivant entre cultures, générations et horizons.
            </p>
          )}
        </div>

        <nav className="flex flex-col gap-3">
          <h2 className="font-heading text-lg font-semibold text-white">
            Navigation
          </h2>
          {getNavLinks(polesSectionEnabled).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-4">
          <h2 className="font-heading text-lg font-semibold text-white">
            Contact
          </h2>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white"
          >
            <Mail className="h-4 w-4" />
            {CONTACT.email}
          </a>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon =
                SOCIAL_ICON_MAP[social.label as keyof typeof SOCIAL_ICON_MAP];

              if (!Icon) {
                return null;
              }

              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="text-white/70 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/70 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
