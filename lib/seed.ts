/**
 * Seeds the database with JSC Nice's real content, based on CLAUDE.md.
 *
 * Idempotent: every document is looked up by a natural key (slug for
 * poles/events, name for team members) before writing, so running this
 * multiple times will not create duplicates — existing docs are updated
 * in place instead.
 *
 * Invoked via the protected POST /api/seed route handler (see
 * app/(payload)/api/seed/route.ts) so it runs inside Next.js's own
 * request context — required for Payload's Local API and for the
 * `revalidatePath` calls triggered by collection/global hooks.
 */
import type { Payload } from "payload";

import { slugify } from "./utils";

interface RichTextValue {
  root: {
    type: "root";
    children: unknown[];
    direction: "ltr";
    format: "";
    indent: 0;
    version: 1;
  };
}

function toRichText(text: string): RichTextValue {
  return {
    root: {
      type: "root",
      children: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text,
              format: 0,
              detail: 0,
              mode: "normal",
              style: "",
              version: 1,
            },
          ],
          direction: "ltr",
          format: "",
          indent: 0,
          version: 1,
        },
      ],
      direction: "ltr",
      format: "",
      indent: 0,
      version: 1,
    },
  };
}

interface PoleSeed {
  name: string;
  mission: string;
  activities: string[];
  color: string;
  /** Name of the team member to link as `responsable`, matched after team members are seeded. */
  responsableName?: string;
}

const POLES_SEED: PoleSeed[] = [
  {
    name: "Spirituel",
    mission:
      "Nourrir la vie de foi de la communauté à travers la prière, les sacrements et la formation, pour grandir ensemble dans une relation vivante avec le Christ.",
    activities: [
      "Messes des jeunes",
      "Soirées de prière / adoration",
      "Témoignages",
      "Retraites",
      "Pèlerinages",
      "Tables rondes Évangile",
      "Catéchisme",
      "Messes maronito-latines",
      "Prière tournante",
    ],
    color: "#26336E",
    responsableName: "Laura Azar",
  },
  {
    name: "Solidaire",
    mission:
      "Créer un filet d'entraide concret entre les membres de la communauté, pour que personne ne traverse seul ses difficultés du quotidien.",
    activities: [
      "Système de parrainage",
      "Entraide emploi",
      "Entraide logement",
      "Entraide déménagement",
    ],
    color: "#857140",
    responsableName: "Eleonora Abi Rached",
  },
  {
    name: "Culturel & Artistique",
    mission:
      "Faire vivre et transmettre la culture libanaise et maronite, à travers des événements qui font dialoguer l'Orient et l'Occident.",
    activities: [
      "Traditions libanaises",
      "Événements interculturels Orient / Occident",
      "Cinéma",
      "Concerts",
      "Ateliers musique",
      "Ateliers cuisine",
      "Ateliers art",
      "Cours de langue libanaise",
      "Chant",
      "Piano",
    ],
    color: "#26336E",
    responsableName: "Evelyne Helo",
  },
  {
    name: "Sportif",
    mission:
      "Rassembler la communauté autour du sport et de l'esprit d'équipe, pour prendre soin de son corps autant que de sa vie fraternelle.",
    activities: [
      "Randonnées",
      "Compétitions de foot",
      "Compétitions de basket",
      "Compétitions de volley",
      "Jeux de boules",
      "Karting",
      "Paintball",
    ],
    color: "#26336E",
    responsableName: "Elie Habre",
  },
  {
    name: "Social",
    mission:
      "Créer du lien entre les membres et accueillir chaleureusement chaque nouveau visage, pour que chacun se sente chez soi dans la communauté.",
    activities: [
      "Dîners tournants",
      "Pique-niques",
      "Soirées d'intégration",
      "Aide aux étudiants étrangers",
      "After mass",
      "Noël",
      "Nouvel An",
    ],
    color: "#26336E",
    responsableName: "Peter Daoura",
  },
  {
    name: "Humanitaire",
    mission:
      "Vivre la charité concrètement, ici à Nice et au Liban, en allant à la rencontre de ceux que l'on croise trop peu.",
    activities: [
      "Visites EHPAD",
      "Visites orphelinat",
      "Maraudes SDF",
      "Collectes de dons",
      "Rencontres inter-paroisses",
    ],
    color: "#26336E",
    responsableName: "Elias Bou Ghosn",
  },
  {
    name: "Animation",
    mission:
      "Donner vie aux rencontres et créer la joie, en animant les temps forts de la communauté du début à la fin.",
    activities: [
      "Chasse aux œufs",
      "Photobooth",
      "Décoration de bougies",
      "Blé de la Sainte Barbe",
      "Maamoul de Pâques",
    ],
    color: "#26336E",
    responsableName: "Clara Antoinetta Elias",
  },
  {
    name: "After Mass",
    mission:
      "Prolonger le moment de la messe par un temps fraternel, un pont entre la liturgie et la vie communautaire.",
    activities: [
      "Accueil café / thé",
      "Goûters",
      "Discussions",
      "Rencontre des nouveaux paroissiens",
    ],
    color: "#5BB8D4",
  },
];

interface TeamMemberSeed {
  name: string;
  role: string;
  poleName?: string;
  order: number;
}

const TEAM_SEED: TeamMemberSeed[] = [
  {
    name: "Edwin Lattouf",
    role: "Président · Responsable recrutement",
    order: 1,
  },
  { name: "Ralph Saade", role: "Adjoint · Secrétaire", order: 2 },
  { name: "Karine Chahine", role: "Trésorière", order: 3 },
  { name: "Célina Mitri", role: "Responsable logistique", order: 4 },
  { name: "Joe Khairallah", role: "Responsable communication", order: 5 },
  {
    name: "Philippe Bou Hanna",
    role: "Responsable relations publiques",
    order: 6,
  },
  {
    name: "Evelyne Helo",
    role: "Événements culturels & artistiques",
    poleName: "Culturel & Artistique",
    order: 7,
  },
  {
    name: "Elie Habre",
    role: "Événements sportifs",
    poleName: "Sportif",
    order: 8,
  },
  {
    name: "Elias Bou Ghosn",
    role: "Événements humanitaires",
    poleName: "Humanitaire",
    order: 9,
  },
  {
    name: "Peter Daoura",
    role: "Événements sociaux",
    poleName: "Social",
    order: 10,
  },
  {
    name: "Clara Antoinetta Elias",
    role: "Responsable animation",
    poleName: "Animation",
    order: 11,
  },
  {
    name: "Laura Azar",
    role: "Responsable activités spirituelles",
    poleName: "Spirituel",
    order: 12,
  },
  {
    name: "Rita Francis",
    role: "Responsable activités spirituelles",
    poleName: "Spirituel",
    order: 13,
  },
  {
    name: "Eleonora Abi Rached",
    role: "Responsable solidarité",
    poleName: "Solidaire",
    order: 14,
  },
];

interface EventSeed {
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
  featured?: boolean;
}

const EVENTS_SEED: EventSeed[] = [
  {
    title: "Messe des jeunes de rentrée",
    date: "2026-09-06T18:00:00.000Z",
    location: "Église Sainte-Rita, Nice",
    category: "spirituel",
    description:
      "Une messe animée par et pour les jeunes, suivie d'un temps fraternel pour bien démarrer l'année.",
    featured: true,
  },
  {
    title: "Dîner tournant entre membres",
    date: "2026-09-19T19:30:00.000Z",
    location: "Chez un membre, Nice",
    category: "social",
    description:
      "Un dîner convivial chez l'un des membres pour resserrer les liens autour d'un bon repas partagé.",
  },
  {
    title: "Maraude solidaire",
    date: "2026-10-03T20:00:00.000Z",
    location: "Centre-ville, Nice",
    category: "humanitaire",
    description:
      "Distribution de repas et de vêtements chauds auprès des personnes sans-abri du centre-ville.",
  },
];

const SOCIAL_LINKS_SEED = [
  { platform: "instagram", url: "https://instagram.com/jsc.nice" },
  { platform: "facebook", url: "https://facebook.com/jscnice" },
  { platform: "tiktok", url: "https://tiktok.com/@jsc.nice" },
  { platform: "youtube", url: "https://youtube.com/@jscnice" },
];

async function seedSiteSettings(payload: Payload) {
  await payload.updateGlobal({
    slug: "site-settings",
    data: {
      primaryColor: "#26336E",
      socialLinks: SOCIAL_LINKS_SEED,
    },
  });
}

async function seedPoles(payload: Payload): Promise<Map<string, number>> {
  const poleIdByName = new Map<string, number>();

  for (const pole of POLES_SEED) {
    const slug = slugify(pole.name);
    const existing = await payload.find({
      collection: "poles",
      where: { slug: { equals: slug } },
      limit: 1,
    });

    const data = {
      name: pole.name,
      slug,
      mission: toRichText(pole.mission),
      activities: pole.activities.map((activity) => ({ activity })),
      color: pole.color,
    };

    if (existing.docs[0]) {
      await payload.update({
        collection: "poles",
        id: existing.docs[0].id,
        data,
      });
      poleIdByName.set(pole.name, existing.docs[0].id as number);
    } else {
      const created = await payload.create({ collection: "poles", data });
      poleIdByName.set(pole.name, created.id as number);
    }
  }

  return poleIdByName;
}

async function seedTeamMembers(
  payload: Payload,
  poleIdByName: Map<string, number>,
): Promise<Map<string, number>> {
  const teamMemberIdByName = new Map<string, number>();

  for (const member of TEAM_SEED) {
    const existing = await payload.find({
      collection: "team-members",
      where: { name: { equals: member.name } },
      limit: 1,
    });

    const data = {
      name: member.name,
      role: member.role,
      order: member.order,
      pole: member.poleName ? poleIdByName.get(member.poleName) : undefined,
    };

    if (existing.docs[0]) {
      await payload.update({
        collection: "team-members",
        id: existing.docs[0].id,
        data,
      });
      teamMemberIdByName.set(member.name, existing.docs[0].id as number);
    } else {
      const created = await payload.create({
        collection: "team-members",
        data,
      });
      teamMemberIdByName.set(member.name, created.id as number);
    }
  }

  return teamMemberIdByName;
}

async function linkPoleResponsables(
  payload: Payload,
  poleIdByName: Map<string, number>,
  teamMemberIdByName: Map<string, number>,
) {
  for (const pole of POLES_SEED) {
    if (!pole.responsableName) {
      continue;
    }

    const poleId = poleIdByName.get(pole.name);
    const responsableId = teamMemberIdByName.get(pole.responsableName);

    if (!poleId || !responsableId) {
      continue;
    }

    await payload.update({
      collection: "poles",
      id: poleId,
      data: { responsable: responsableId },
    });
  }
}

async function seedEvents(payload: Payload) {
  for (const event of EVENTS_SEED) {
    const slug = slugify(event.title);
    const existing = await payload.find({
      collection: "events",
      where: { slug: { equals: slug } },
      limit: 1,
    });

    const data = {
      title: event.title,
      slug,
      date: event.date,
      location: event.location,
      category: event.category,
      description: toRichText(event.description),
      featured: event.featured ?? false,
    };

    if (existing.docs[0]) {
      await payload.update({
        collection: "events",
        id: existing.docs[0].id,
        data: { ...data, status: "published" },
      });
    } else {
      // Creation is always forced to draft, so publish in a second step.
      const created = await payload.create({ collection: "events", data });
      await payload.update({
        collection: "events",
        id: created.id,
        data: { status: "published" },
      });
    }
  }
}

export async function runSeed(payload: Payload) {
  await seedSiteSettings(payload);
  const poleIdByName = await seedPoles(payload);
  const teamMemberIdByName = await seedTeamMembers(payload, poleIdByName);
  await linkPoleResponsables(payload, poleIdByName, teamMemberIdByName);
  await seedEvents(payload);

  return {
    poles: poleIdByName.size,
    teamMembers: teamMemberIdByName.size,
    events: EVENTS_SEED.length,
  };
}
