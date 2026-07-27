import type { CollectionConfig } from "payload";
import { revalidatePath } from "next/cache";

import { checkRole } from "../access/checkRole";
import { slugify } from "../lib/utils";

export const Poles: CollectionConfig = {
  slug: "poles",
  admin: {
    useAsTitle: "name",
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
      () => {
        revalidatePath("/nos-poles");
        revalidatePath("/");
        revalidatePath("/rejoindre");
      },
    ],
    afterDelete: [
      () => {
        revalidatePath("/nos-poles");
        revalidatePath("/");
        revalidatePath("/rejoindre");
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
