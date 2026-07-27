import type { GlobalConfig } from "payload";
import { revalidatePath } from "next/cache";

import { checkRole } from "../access/checkRole";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  access: {
    read: () => true,
    update: ({ req: { user } }) => checkRole(["super-admin", "editor"], user),
  },
  hooks: {
    afterChange: [
      () => {
        // Logo/social links/whatsapp number appear in the header and
        // footer on every page.
        revalidatePath("/", "layout");
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
  ],
};
