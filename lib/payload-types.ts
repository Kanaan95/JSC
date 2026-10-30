// Hand-written, minimal Payload document shapes for the frontend.
// `payload generate:types` doesn't run on this Node version (see repo memory),
// so these cover only the fields the frontend actually consumes.
import type { SerializedEditorState } from "lexical";

import type { EventStatus } from "./event-status";

export type RichTextValue = SerializedEditorState | null | undefined;

export interface MediaDoc {
  id: number;
  url?: string | null;
  alt: string;
}

export type EventCategory =
  | "spirituel"
  | "social"
  | "culturel"
  | "sportif"
  | "humanitaire"
  | "after-mass";

export interface TeamMemberDoc {
  id: number;
  name: string;
  role?: string | null;
  pole?: PoleDoc | number | null;
  photo?: MediaDoc | number | null;
  bio?: RichTextValue;
  order?: number | null;
}

export interface PoleDoc {
  id: number;
  name: string;
  slug: string;
  mission?: RichTextValue;
  responsable?: TeamMemberDoc | number | null;
  logo?: MediaDoc | number | null;
  activities?: { activity: string }[] | null;
  color?: string | null;
}

export interface EventDoc {
  id: number;
  title: string;
  slug: string;
  date: string;
  endDate?: string | null;
  location?: string | null;
  category: EventCategory;
  description?: RichTextValue;
  image?: MediaDoc | number | null;
  registrationLink?: string | null;
  featured?: boolean | null;
  status: EventStatus;
}

export interface HomepageGlobal {
  heroTitle?: string | null;
  heroSubtitle?: string | null;
  monthlyQuote?: RichTextValue;
  ctaButtons?:
    { label: string; url: string; style: "primary" | "secondary" }[] | null;
}

export interface ContactPageGlobal {
  address?: string | null;
  formIntroText?: RichTextValue;
  mapEmbedUrl?: string | null;
}

export interface SiteSettingsGlobal {
  logo?: MediaDoc | number | null;
  socialLinks?:
    | {
        platform: "instagram" | "facebook" | "whatsapp" | "tiktok" | "youtube";
        url: string;
      }[]
    | null;
  whatsappNumber?: string | null;
  primaryColor?: string | null;
}

export interface FooterSettingsGlobal {
  footerText?: RichTextValue;
  legalLinks?: { label: string; url: string }[] | null;
}
