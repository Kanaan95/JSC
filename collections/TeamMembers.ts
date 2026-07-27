import type { CollectionConfig } from "payload";
import { revalidatePath } from "next/cache";

import { checkRole } from "../access/checkRole";

export const TeamMembers: CollectionConfig = {
  slug: "team-members",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "role", "pole", "order"],
  },
  defaultSort: "order",
  access: {
    // Public read access — this content powers the public "Qui sommes-nous"
    // and "Nos pôles" pages.
    read: () => true,
    create: ({ req: { user } }) => checkRole(["super-admin", "editor"], user),
    update: ({ req: { user } }) => checkRole(["super-admin", "editor"], user),
    delete: ({ req: { user } }) => checkRole(["super-admin"], user),
  },
  hooks: {
    afterChange: [
      () => {
        revalidatePath("/qui-sommes-nous");
        revalidatePath("/nos-poles");
      },
    ],
    afterDelete: [
      () => {
        revalidatePath("/qui-sommes-nous");
        revalidatePath("/nos-poles");
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
      name: "role",
      type: "text",
      admin: {
        description:
          'Title/role within JSC, e.g. "Responsable activités spirituelles"',
      },
    },
    {
      name: "pole",
      type: "relationship",
      relationTo: "poles",
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "bio",
      type: "richText",
    },
    {
      name: "order",
      type: "number",
      admin: {
        description: "Controls display order (lower numbers first).",
        position: "sidebar",
      },
    },
  ],
};
