import type { GlobalConfig } from "payload";

import { checkRole } from "../access/checkRole";
import { safeRevalidatePath } from "../lib/revalidate";

export const Homepage: GlobalConfig = {
  slug: "homepage",
  access: {
    read: () => true,
    update: ({ req: { user } }) => checkRole(["super-admin", "editor"], user),
  },
  hooks: {
    afterChange: [
      async () => {
        await safeRevalidatePath("/");
      },
    ],
  },
  fields: [
    {
      name: "heroTitle",
      type: "text",
    },
    {
      name: "heroSubtitle",
      type: "textarea",
    },
    {
      name: "monthlyQuote",
      type: "richText",
    },
    {
      name: "ctaButtons",
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
        {
          name: "style",
          type: "select",
          required: true,
          defaultValue: "primary",
          options: [
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
          ],
        },
      ],
    },
  ],
};
