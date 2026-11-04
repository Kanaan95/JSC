import type { CollectionConfig } from "payload";

import { checkRole } from "../access/checkRole";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
    create: ({ req: { user } }) =>
      checkRole(["super-admin", "editor", "content-manager"], user),
    update: ({ req: { user } }) =>
      checkRole(["super-admin", "editor", "content-manager"], user),
    delete: ({ req: { user } }) =>
      checkRole(["super-admin", "editor", "content-manager"], user),
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      admin: {
        description: "Alt text for accessibility (required).",
      },
    },
  ],
  upload: {
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 512,
        position: "centre",
      },
      {
        name: "hero",
        width: 1920,
        height: 1080,
        position: "centre",
      },
    ],
  },
};
