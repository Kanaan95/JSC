import type { GlobalConfig } from "payload";

import { checkRole } from "../access/checkRole";
import { safeRevalidatePath } from "../lib/revalidate";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  access: {
    read: () => true,
    update: ({ req: { user } }) => checkRole(["super-admin", "editor"], user),
  },
  hooks: {
    afterChange: [
      async () => {
        // Logo/social links/whatsapp number appear in the header and
        // footer on every page.
        await safeRevalidatePath("/", "layout");
      },
    ],
  },
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "socialLinks",
      type: "array",
      fields: [
        {
          name: "platform",
          type: "select",
          required: true,
          options: [
            { label: "Instagram", value: "instagram" },
            { label: "Facebook", value: "facebook" },
            { label: "WhatsApp", value: "whatsapp" },
            { label: "TikTok", value: "tiktok" },
            { label: "YouTube", value: "youtube" },
          ],
        },
        {
          name: "url",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "whatsappNumber",
      type: "text",
    },
    {
      name: "primaryColor",
      type: "text",
      defaultValue: "#26336E",
    },
    {
      name: "polesSectionEnabled",
      type: "checkbox",
      defaultValue: false,
      label: 'Show the "Nos pôles" section on the public website',
      admin: {
        description:
          "When unchecked, the Nos pôles page, its navigation links, the homepage teaser and the pôle choice in the join form are hidden. Pôles data stays editable.",
      },
    },
  ],
};
