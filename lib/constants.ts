export const SITE_NAME = "Jeunesse Saint Charbel Nice";
export const SITE_SHORT_NAME = "JSC Nice";

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/saint-charbel", label: "Saint Charbel" },
  { href: "/nos-poles", label: "Nos pôles" },
  { href: "/agenda", label: "Agenda" },
  { href: "/rejoindre", label: "Rejoindre" },
] as const;

export const LEGAL_LINKS = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Politique de confidentialité" },
] as const;

// TODO: replace placeholders with real community contact details before launch
export const CONTACT = {
  whatsappUrl: "https://chat.whatsapp.com/TODO-REPLACE-WITH-REAL-INVITE-LINK",
  email: "contact@jscnice.fr",
  phone: "+33 6 00 00 00 00",
  address: "Nice, Côte d'Azur (adresse précise communiquée aux membres)",
  mapEmbedUrl: "https://www.google.com/maps?q=Nice,France&output=embed",
} as const;

export const SOCIAL_LINKS = [
  { href: "https://instagram.com/jsc.nice", label: "Instagram" },
  { href: "https://facebook.com/jscnice", label: "Facebook" },
  {
    href: "https://chat.whatsapp.com/TODO-REPLACE-WITH-REAL-INVITE-LINK",
    label: "WhatsApp",
  },
  { href: "https://tiktok.com/@jsc.nice", label: "TikTok" },
  { href: "https://youtube.com/@jscnice", label: "YouTube" },
] as const;
