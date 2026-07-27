import type { GlobalConfig } from "payload";
import { revalidatePath } from "next/cache";

import { checkRole } from "../access/checkRole";

export const FooterSettings: GlobalConfig = {
  slug: "footer-settings",
  access: {
    read: () => true,
    update: ({ req: { user } }) => checkRole(["super-admin", "editor"], user),
  },
  hooks: {
    afterChange: [
      () => {
        revalidatePath("/", "layout");
      },
    ],
  },
  fields: [
    {
      name: "footerText",
      type: "richText",
    },
    {
      name: "legalLinks",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "url",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
