export const SITE_NAME = "Jeunesse Saint Charbel Nice";
export const SITE_SHORT_NAME = "JSC Nice";

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/saint-charbel", label: "Saint Charbel" },
  { href: "/nos-poles", label: "Nos pôles" },
  { href: "/agenda", label: "Agenda" },
  { href: "/rejoindre", label: "Rejoindre" },
] as const;

export const LEGAL_LINKS = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Politique de confidentialité" },
] as const;

// TODO: replace placeholders with real community contact details before launch
export const CONTACT = {
  whatsappUrl: "https://chat.whatsapp.com/TODO-REPLACE-WITH-REAL-INVITE-LINK",
  email: "contact@jscnice.fr",
  phone: "+33 6 00 00 00 00",
  address: "Nice, Côte d'Azur (adresse précise communiquée aux membres)",
  mapEmbedUrl: "https://www.google.com/maps?q=Nice,France&output=embed",
} as const;

export const SOCIAL_LINKS = [
  { href: "https://instagram.com/jsc.nice", label: "Instagram" },
  { href: "https://facebook.com/jscnice", label: "Facebook" },
  {
    href: "https://chat.whatsapp.com/TODO-REPLACE-WITH-REAL-INVITE-LINK",
    label: "WhatsApp",
  },
  { href: "https://tiktok.com/@jsc.nice", label: "TikTok" },
  { href: "https://youtube.com/@jscnice", label: "YouTube" },
] as const;

export const POLES = [
  {
    slug: "spirituel",
    name: "Spirituel",
    tagline: "Nourrir la vie de foi de la communauté.",
    logo: "/assets/poles/spirituel-logo.png",
    responsible: "Laura Azar / Rita Francis",
    mission:
      "Nourrir la vie de foi de la communauté à travers la prière, les sacrements et la formation, pour grandir ensemble dans une relation vivante avec le Christ.",
    activities: [
      "Messes des jeunes",
      "Soirées de prière / adoration",
      "Témoignages",
      "Retraites spirituelles",
      "Pèlerinages",
      "Tables rondes Évangile",
      "Catéchisme",
      "Messes maronito-latines",
      "Prière tournante",
    ],
  },
  {
    slug: "solidaire",
    name: "Solidaire",
    tagline: "Un système de parrainage et d'entraide entre membres.",
    logo: "/assets/poles/solidaire-logo.png",
    responsible: "Eleonora Abi Rached",
    mission:
      "Créer un filet d'entraide concret entre les membres de la communauté, pour que personne ne traverse seul ses difficultés du quotidien.",
    activities: [
      "Système de parrainage",
      "Entraide emploi",
      "Entraide logement",
      "Entraide déménagement",
    ],
  },
  {
    slug: "culturel",
    name: "Culturel & Artistique",
    tagline: "Faire vivre et transmettre la culture libanaise.",
    logo: "/assets/poles/culture-logo.png",
    responsible: "Evelyne Helo",
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
  },
  {
    slug: "sportif",
    name: "Sportif",
    tagline: "Rassembler autour du sport et de l'esprit d'équipe.",
    logo: "/assets/poles/sport-logo.png",
    responsible: "Elie Habre",
    mission:
      "Rassembler la communauté autour du sport et de l'esprit d'équipe, pour prendre soin de son corps autant que de sa vie fraternelle.",
    activities: [
      "Randonnées",
      "Compétitions de foot",
      "Compétitions de basket",
      "Compétitions de volley",
      "Santé physique",
      "Jeux de boules",
      "Karting",
      "Paintball",
    ],
  },
  {
    slug: "social",
    name: "Social",
    tagline: "Accueillir chaleureusement chaque nouveau visage.",
    logo: "/assets/poles/social-logo.png",
    responsible: "Peter Daoura",
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
  },
  {
    slug: "humanitaire",
    name: "Humanitaire",
    tagline: "Vivre la charité concrètement, ici et au Liban.",
    logo: "/assets/poles/humain-logo.png",
    responsible: "Elias Bou Ghosn",
    mission:
      "Vivre la charité concrètement, ici à Nice et au Liban, en allant à la rencontre de ceux que l'on croise trop peu.",
    activities: [
      "Visites EHPAD",
      "Visites orphelinat",
      "Maraudes SDF",
      "Collectes de dons",
      "Rencontres inter-paroisses",
    ],
  },
  {
    slug: "animation",
    name: "Animation",
    tagline: "Donner vie aux rencontres et créer la joie.",
    logo: "/assets/poles/animation-logo.png",
    responsible: "Clara Antoinetta Elias",
    mission:
      "Donner vie aux rencontres et créer la joie, en animant les temps forts de la communauté du début à la fin.",
    activities: [
      "Chasse aux œufs",
      "Photobooth",
      "Décoration de bougies",
      "Blé de la Sainte Barbe",
      "Maamoul de Pâques",
    ],
  },
  {
    slug: "after-mass",
    name: "After Mass",
    tagline: "Prolonger la messe par un temps fraternel autour d'un café.",
    logo: "/assets/poles/after-mass-logo.png",
    // TODO: no responsable is named for After Mass in CLAUDE.md or the team org chart — update once known
    responsible: "À venir",
    mission:
      "Prolonger le moment de la messe par un temps fraternel, un pont entre la liturgie et la vie communautaire.",
    activities: [
      "Accueil café / thé",
      "Goûters",
      "Discussions",
      "Rencontre des nouveaux paroissiens",
    ],
  },
] as const;

// TODO: replace with real data once the Agenda page / CMS is wired up
export const NEXT_EVENT = {
  title: "Soirée de prière",
  day: "11",
  month: "Juil.",
  date: "Vendredi 11 juillet 2026",
  location: "Nice",
  href: "/agenda",
} as const;

// TODO: replace with the actual monthly quote once the rotation is defined
export const MONTHLY_QUOTE = {
  text: "Le silence est le langage de Dieu, tout le reste est une pauvre traduction.",
  attribution: "Saint Charbel Makhlouf",
} as const;

export const TEAM = [
  { name: "Edwin Lattouf", role: "Président · Responsable recrutement" },
  { name: "Ralph Saade", role: "Adjoint · Secrétaire" },
  { name: "Karine Chahine", role: "Trésorière" },
  { name: "Célina Mitri", role: "Responsable logistique" },
  { name: "Joe Khairallah", role: "Responsable communication" },
  { name: "Philippe Bou Hanna", role: "Responsable relations publiques" },
  { name: "Evelyne Helo", role: "Événements culturels & artistiques" },
  { name: "Elie Habre", role: "Événements sportifs" },
  { name: "Elias Bou Ghosn", role: "Événements humanitaires" },
  { name: "Peter Daoura", role: "Événements sociaux" },
  { name: "Clara Antoinetta Elias", role: "Responsable animation" },
  { name: "Laura Azar", role: "Responsable activités spirituelles" },
  { name: "Rita Francis", role: "Responsable activités spirituelles" },
  { name: "Eleonora Abi Rached", role: "Responsable solidarité" },
] as const;
