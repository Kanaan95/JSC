import type { CollectionConfig } from "payload";

import { checkRole } from "../access/checkRole";
import { slugify } from "../lib/utils";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "status", "publishedDate", "author"],
  },
  defaultSort: "-publishedDate",
  access: {
    // Staff (any role) can see every post, including drafts, so they can
    // review/edit them in the admin panel. Unauthenticated/public requests
    // only ever see published posts.
    read: ({ req: { user } }) => {
      if (checkRole(["super-admin", "editor", "content-manager"], user)) {
        return true;
      }

      return { status: { equals: "published" } };
    },
    create: ({ req: { user } }) =>
      checkRole(["super-admin", "editor", "content-manager"], user),
    update: ({ req: { user } }) => {
      if (checkRole(["super-admin", "editor"], user)) {
        return true;
      }

      if (checkRole(["content-manager"], user) && user) {
        // content-managers may only edit posts they created themselves.
        return { createdBy: { equals: user.id } };
      }

      return false;
    },
    delete: ({ req: { user } }) => checkRole(["super-admin", "editor"], user),
  },
  hooks: {
    beforeChange: [
      ({ req, data, operation }) => {
        // Track the actual logged-in Payload user who created the post —
        // used only for the "own posts" access check above. This is
        // separate from `author`, which is the public-facing byline
        // (a relationship to TeamMembers, not necessarily the CMS user).
        if (operation === "create" && req.user) {
          data.createdBy = req.user.id;
        }

        return data;
      },
    ],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      admin: {
        position: "sidebar",
        description: "Auto-generated from the title if left empty.",
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (value) {
              return slugify(value);
            }

            if (data?.title) {
              return slugify(data.title);
            }

            return value;
          },
        ],
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      admin: {
        description: "Short description shown on blog list cards.",
      },
    },
    {
      name: "content",
      type: "richText",
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "publishedDate",
      type: "date",
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "team-members",
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "draft",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "createdBy",
      type: "relationship",
      relationTo: "users",
      admin: {
        hidden: true,
      },
      access: {
        // Only ever set by the beforeChange hook above — never directly
        // writable by any client, including super-admins.
        update: () => false,
      },
    },
  ],
};
