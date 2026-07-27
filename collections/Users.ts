import type { CollectionConfig } from "payload";

import { checkRole } from "../access/checkRole";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  access: {
    read: ({ req: { user } }) => {
      if (checkRole(["super-admin"], user)) {
        return true;
      }

      if (user) {
        return { id: { equals: user.id } };
      }

      return false;
    },
    create: ({ req: { user } }) => checkRole(["super-admin"], user),
    update: ({ req: { user } }) => {
      if (checkRole(["super-admin"], user)) {
        return true;
      }

      if (user) {
        return { id: { equals: user.id } };
      }

      return false;
    },
    delete: ({ req: { user } }) => checkRole(["super-admin"], user),
  },
  fields: [
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "editor",
      options: [
        { label: "Super Admin", value: "super-admin" },
        { label: "Editor", value: "editor" },
        { label: "Content Manager", value: "content-manager" },
      ],
      access: {
        // Only a super-admin may change a user's role — prevents editors
        // and content-managers from escalating their own privileges.
        update: ({ req: { user } }) => checkRole(["super-admin"], user),
      },
    },
  ],
};
