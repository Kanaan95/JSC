import { APIError, type CollectionConfig } from "payload";

import { checkRole, type UserRole } from "../access/checkRole";
import { EVENT_STATUS_OPTIONS } from "../lib/event-status";
import { safeRevalidatePath } from "../lib/revalidate";
import { slugify } from "../lib/utils";

const ALL_STAFF: UserRole[] = ["super-admin", "editor", "content-manager"];
const REVIEWERS: UserRole[] = ["super-admin", "editor"];

export const Events: CollectionConfig = {
  slug: "events",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "status", "date", "category", "featured"],
  },
  defaultSort: "-date",
  access: {
    // Staff see every status in the admin; the public API only sees published events.
    read: ({ req: { user } }) =>
      checkRole(ALL_STAFF, user) ? true : { status: { equals: "published" } },
    create: ({ req: { user } }) => checkRole(ALL_STAFF, user),
    update: ({ req: { user } }) => checkRole(ALL_STAFF, user),
    delete: ({ req: { user } }) => checkRole(REVIEWERS, user),
  },
  hooks: {
    beforeValidate: [
      ({ data, operation, originalDoc, req: { user } }) => {
        if (!data) {
          return data;
        }

        // Any client-sent status is ignored on creation.
        if (operation === "create") {
          return { ...data, status: "draft" };
        }

        // Runs before field access strips the value, so the error is explicit.
        if (
          operation === "update" &&
          checkRole(["content-manager"], user) &&
          data.status === "published" &&
          originalDoc?.status !== "published"
        ) {
          throw new APIError(
            "Un gestionnaire de contenu ne peut pas publier un événement.",
            403,
            null,
            true,
          );
        }

        return data;
      },
    ],
    beforeChange: [
      ({ data, originalDoc, operation, req: { user } }) => {
        const isCreate = operation === "create";
        const fromStatus = isCreate ? null : (originalDoc?.status ?? null);
        const toStatus = data.status ?? originalDoc?.status;
        const previous = isCreate ? [] : (originalDoc?.statusHistory ?? []);

        // Always rebuilt from the stored history so client-sent values are ignored.
        if (!isCreate && fromStatus === toStatus) {
          return { ...data, statusHistory: previous };
        }

        return {
          ...data,
          statusHistory: [
            ...previous,
            {
              date: new Date().toISOString(),
              fromStatus,
              toStatus,
              changedBy: user?.id ?? null,
            },
          ],
        };
      },
    ],
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
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "draft",
      index: true,
      options: EVENT_STATUS_OPTIONS,
      admin: {
        position: "sidebar",
        components: {
          Cell: "/components/admin/status-cell#StatusCell",
        },
      },
      access: {
        create: ({ req: { user } }) => checkRole(ALL_STAFF, user),
        update: ({ req: { user }, data, doc }) => {
          if (checkRole(REVIEWERS, user)) {
            return true;
          }

          if (checkRole(["content-manager"], user)) {
            // Content-managers may never introduce "published".
            return data?.status !== "published" || doc?.status === "published";
          }

          return false;
        },
      },
    },
    {
      name: "statusHistory",
      type: "array",
      admin: {
        readOnly: true,
        initCollapsed: true,
        description: "Rempli automatiquement à chaque changement de statut.",
      },
      fields: [
        {
          name: "date",
          type: "date",
          admin: { date: { pickerAppearance: "dayAndTime" } },
        },
        { name: "fromStatus", type: "select", options: EVENT_STATUS_OPTIONS },
        { name: "toStatus", type: "select", options: EVENT_STATUS_OPTIONS },
        { name: "changedBy", type: "relationship", relationTo: "users" },
      ],
    },
  ],
};
