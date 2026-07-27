import type { GlobalConfig } from "payload";
import { revalidatePath } from "next/cache";

import { checkRole } from "../access/checkRole";

export const ContactPage: GlobalConfig = {
  slug: "contact-page",
  access: {
    read: () => true,
    update: ({ req: { user } }) => checkRole(["super-admin", "editor"], user),
  },
  hooks: {
    afterChange: [
      () => {
        revalidatePath("/rejoindre");
      },
    ],
  },
  fields: [
    {
      name: "address",
      type: "text",
    },
    {
      name: "formIntroText",
      type: "richText",
    },
    {
      name: "mapEmbedUrl",
      type: "text",
    },
  ],
};
