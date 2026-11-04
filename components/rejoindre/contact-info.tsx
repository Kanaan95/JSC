import { Mail, MapPin, Phone } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons/social-icons";
import { CONTACT } from "@/lib/constants";

interface ContactInfoProps {
  address?: string | null;
  mapEmbedUrl?: string | null;
  whatsappNumber?: string | null;
}

export function ContactInfo({
  address,
  mapEmbedUrl,
  whatsappNumber,
}: ContactInfoProps) {
  const phoneDigits = CONTACT.phone.replace(/[^\d+]/g, "");
  const whatsappDigits = (whatsappNumber ?? CONTACT.phone).replace(
    /[^\d+]/g,
    ""
  );

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="flex flex-col gap-5">
        <a
          href={`mailto:${CONTACT.email}`}
          className="flex items-center gap-3 text-foreground-muted hover:text-primary"
        >
          <Mail className="h-5 w-5 shrink-0 text-primary" />
          {CONTACT.email}
        </a>
        <a
          href={`tel:${phoneDigits}`}
          className="flex items-center gap-3 text-foreground-muted hover:text-primary"
        >
          <Phone className="h-5 w-5 shrink-0 text-primary" />
          {CONTACT.phone}
        </a>
        <a
          href={`https://wa.me/${whatsappDigits.replace(/^\+/, "")}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 text-foreground-muted hover:text-primary"
        >
          <WhatsAppIcon className="h-5 w-5 shrink-0 text-primary" />
          WhatsApp direct
        </a>
        <p className="flex items-start gap-3 text-foreground-muted">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          {address || CONTACT.address}
        </p>
      </div>

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border sm:aspect-video">
        <iframe
          src={mapEmbedUrl || CONTACT.mapEmbedUrl}
          title="Carte de Nice"
          loading="lazy"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </div>
  );
}
