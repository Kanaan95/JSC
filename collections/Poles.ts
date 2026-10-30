import type { CollectionConfig } from "payload";

import { checkRole } from "../access/checkRole";
import { safeRevalidatePath } from "../lib/revalidate";
import { slugify } from "../lib/utils";

export const Poles: CollectionConfig = {
  slug: "poles",
  admin: {
    useAsTitle: "name",
    description:
      "This section is currently hidden from the public website. Toggle polesSectionEnabled in Site Settings to show it again.",
  },
  access: {
    // Public read access — this content powers the public "Nos pôles" page.
    read: () => true,
    create: ({ req: { user } }) => checkRole(["super-admin", "editor"], user),
    update: ({ req: { user } }) => checkRole(["super-admin", "editor"], user),
    delete: ({ req: { user } }) => checkRole(["super-admin"], user),
  },
  hooks: {
    afterChange: [
      async () => {
        await safeRevalidatePath("/nos-poles");
        await safeRevalidatePath("/");
        await safeRevalidatePath("/rejoindre");
      },
    ],
    afterDelete: [
      async () => {
        await safeRevalidatePath("/nos-poles");
        await safeRevalidatePath("/");
        await safeRevalidatePath("/rejoindre");
      },
    ],
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      admin: {
        position: "sidebar",
        description: "Auto-generated from the name if left empty.",
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (value) {
              return slugify(value);
            }

            if (data?.name) {
              return slugify(data.name);
            }

            return value;
          },
        ],
      },
    },
    {
      name: "mission",
      type: "richText",
    },
    {
      name: "responsable",
      type: "relationship",
      relationTo: "team-members",
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "activities",
      type: "array",
      fields: [
        {
          name: "activity",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "color",
      type: "text",
      admin: {
        description: "Hex color code for this pole, e.g. #26336E",
      },
    },
  ],
};
