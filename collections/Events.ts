import type { CollectionConfig } from "payload";

import { checkRole } from "../access/checkRole";
import { safeRevalidatePath } from "../lib/revalidate";
import { slugify } from "../lib/utils";

export const Events: CollectionConfig = {
  slug: "events",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "date", "category", "featured"],
  },
  defaultSort: "-date",
  access: {
    // Public read access — this content powers the public "Agenda" page.
    read: () => true,
    create: ({ req: { user } }) => checkRole(["super-admin", "editor"], user),
    update: ({ req: { user } }) => checkRole(["super-admin", "editor"], user),
    delete: ({ req: { user } }) => checkRole(["super-admin", "editor"], user),
  },
  hooks: {
    afterChange: [
      async () => {
        await safeRevalidatePath("/agenda");
        await safeRevalidatePath("/");
      },
    ],
    afterDelete: [
      async () => {
        await safeRevalidatePath("/agenda");
        await safeRevalidatePath("/");
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
      name: "date",
      type: "date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
    {
      name: "endDate",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
    {
      name: "location",
      type: "text",
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Spirituel", value: "spirituel" },
        { label: "Social", value: "social" },
        { label: "Culturel", value: "culturel" },
        { label: "Sportif", value: "sportif" },
        { label: "Humanitaire", value: "humanitaire" },
        { label: "After Mass", value: "after-mass" },
      ],
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "registrationLink",
      type: "text",
      admin: {
        description: "Optional URL, e.g. https://forms.gle/...",
      },
      validate: (value: unknown) => {
        if (!value) {
          return true;
        }

        if (typeof value !== "string") {
          return "Le lien d'inscription doit être une URL valide.";
        }

        try {
          new URL(value);
          return true;
        } catch {
          return "Le lien d'inscription doit être une URL valide (ex: https://...).";
        }
      },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Highlight this event on the homepage.",
      },
    },
  ],
};
