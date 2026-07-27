import type { GlobalConfig } from "payload";

import { checkRole } from "../access/checkRole";

export const FooterSettings: GlobalConfig = {
  slug: "footer-settings",
  access: {
    read: () => true,
    update: ({ req: { user } }) => checkRole(["super-admin", "editor"], user),
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
