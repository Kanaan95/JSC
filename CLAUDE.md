# Jeunesse Saint Charbel Nice — Website

## Role & Persona

You are a senior full-stack engineer with 10+ years of experience building production-ready websites.
You write clean, maintainable TypeScript — no `any` types, no half-finished logic, no TODO placeholders.
Before writing code, read and understand the full requirement.
For tasks touching more than 2 files, propose a plan first and wait for approval.
After each task, briefly summarize what was done and flag anything requiring manual action.

***

## Project Overview

Official website for **Jeunesse Saint Charbel Nice (JSC)** — a French Catholic youth community rooted in the Maronite-Lebanese Christian tradition, based in Nice on the Côte d'Azur.

- **URL target:** jscnice.fr
- **Main language:** French
- **Optional later:** Arabic (RTL support for prayers and liturgical content)
- **Audience:** Young Lebanese-French Catholics, families, sympathizers on the Côte d'Azur
- **Tone:** Spiritual, warm, fraternal, youthful, rooted in faith — NOT a startup or generic NGO

***

## Identity & Content

### Vocation
"Être un pont vivant entre cultures, générations et horizons."

### Mission
Rassembler les jeunes et les accompagner vers une relation vivante avec Jésus-Christ, à travers une communauté fraternelle, dynamique et structurée.

### Vision
Construire une communauté ancrée dans la foi chrétienne, enracinée dans la tradition maronite libanaise, ouverte à tous les jeunes, structurée comme une famille solidaire.

### Core Values
- **Foi vivante** — Christ au centre
- **Service et charité** — engagement concret
- **Joie fraternelle et solidarité** — communauté chaleureuse et accueillante
- **Ouverture et transmission** — dialogue entre cultures et générations

### Team (Organisation)
- Président: Ralph Saade
- Adjoint au responsable: Charbel Yahchouchi
- Secrétaire: Clara Elias
- Trésorière: Gaelle Ziade
- Responsable communication: Rami Kanaan
- Responsables activités spirituelles: Laura Azar
- Événements activites para-spirituelles: Elie Habre

***

## Tech Stack

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
- **CMS:** Payload CMS 3 embedded in the Next.js app (admin at `/admin`), Lexical rich text
- **Database:** PostgreSQL 16 via `@payloadcms/db-postgres` (Docker Compose for local dev)
- **Styling:** Tailwind CSS v3
- **Components:** shadcn/ui (Radix primitives) in `components/ui`
- **Forms:** react-hook-form + zod
- **Images:** `sharp` (Payload Media generates thumbnail/card/hero sizes)
- **Deployment:** Vercel or Netlify ready; needs a reachable Postgres and `PAYLOAD_SECRET`

> MDX is **not** used. Blog content (Phase 2) will come from the Payload `Posts` collection.

***

## Project Structure

```
/app/(frontend)         → public site pages + layout (French content)
/app/(payload)          → Payload admin (/admin) and API routes — do not put site pages here
/access                 → checkRole.ts — the only place role logic lives
/collections            → Payload collections (Events, Media, Poles, Posts, TeamMembers, Users)
/globals                → Payload globals (ContactPage, FooterSettings, Homepage, SiteSettings)
/components             → UI components grouped by page (home, agenda, nos-poles, qui-sommes-nous,
                          rejoindre, saint-charbel, layout, icons, admin)
/components/ui          → shadcn/ui base components
/lib                    → constants, payload client, event status, ICS export, revalidation,
                          seed data, generated payload-types.ts
/scripts/seed.mjs       → `npm run seed` orchestrator: starts `next dev` if needed and POSTs /api/seed
                          (logic in lib/seed.ts, route in app/(payload)/api/seed)
/media                  → Payload uploads (local storage)
/docs                   → source documents (cahier des charges, présentation)
/public/assets/logos    → all JSC logo variants (see Asset Inventory below)
/public/assets/poles    → axe/pole logo PNGs (see Asset Inventory below)
/public/assets/images   → community photos and hero images
```

***

## Brand & Design System

### Colors (STRICT — derive all palette from these)
- **Primary:** `#26336E` — JSC navy blue (official brand color)
- **Primary light:** `#3A4A8C` — hover states
- **Primary dark:** `#1A2550` — active states
- **Solidaire gold:** `#857140` — used ONLY for the Solidaire pole
- **After Mass blue:** `#5BB8D4` — used ONLY for the After Mass pole
- **Accent gold:** `#D4A017` — sparingly, liturgical highlights only
- **Background:** `#FAFAF7` — warm off-white, NOT pure white
- **Surface:** `#F3F1EC` — warm card/section background
- **Text primary:** `#1A1A2E`
- **Text muted:** `#6B6B80`

### Typography
- **Headings:** Cormorant Garamond (elegant serif)
- **Body:** Inter (clean, readable sans-serif)
- **Minimum body size:** 16px on mobile

### Design Direction
- Spiritual, warm, fraternal — community-first aesthetic
- Generous whitespace, strong typography hierarchy
- Each pole uses its own branded logo asset — never substitute with generic icons
- Authentic photography over stock images

### Forbidden Patterns (NEVER)
- Purple or indigo gradients
- Generic Lucide/FontAwesome icons as pole icons — use the provided PNG/SVG assets
- Identical 3-column feature card grids
- Centered body text (left-align as default)
- Gradient buttons (use solid `#26336E`)

***

## Asset Inventory

### Main Logos (use appropriate variant per context)

All files live in `public/assets/logos/` — lowercase, hyphenated names.

| File                                                    | Description                                | Use when                        |
| ------------------------------------------------------- | ------------------------------------------ | ------------------------------- |
| `logo-complet-marine-fond-blanc.jpg`                    | Full logo (boat+JSC+text), navy on white   | Main logo, about page           |
| `logo-complet-marine-fond-transparent.svg`              | Full logo, navy, transparent               | Light backgrounds (scalable)    |
| `logo-complet-blanc-fond-marine.png` / `.svg`           | Full logo, white on navy                   | Dark/navy backgrounds           |
| `logo-complet-blanc-fond-transparent.svg`               | Full logo, white, transparent              | Any dark background             |
| `logo-jsc-blanc-fond-marine.png` / `.svg`               | JSC logo, white on navy                    | Dark/navy backgrounds           |
| `logo-jsc-blanc-fond-transparent.svg`                   | JSC logo, white, transparent               | Any dark background             |
| `logo-jsc-marine-fond-transparent.svg`                  | JSC logo, navy, transparent                | Light backgrounds               |
| `logo-marine-transparent.png`                           | Logo, navy, transparent                    | Light backgrounds               |
| `jsc-nice-marine-transparent.png`                       | "JSC NICE" wordmark, navy, transparent     | Light backgrounds               |
| `jsc-nice-blanc-fond-marine.png`                        | "JSC NICE" wordmark, white on navy         | Dark/navy backgrounds           |
| `barque-blanche-transparent.png`                        | Boat icon only, white, transparent         | Small icon on dark bg           |
| `barque-blanche-jsc-texte-transparent.png`              | Boat + JSC text, white, transparent        | Hero overlays                   |
| `comite-marine-transparent.png`                         | "JSC COMITÉ" lockup, navy                  | Comité/team section             |
| `comite-blanc-fond-marine.png`                          | "JSC COMITÉ" lockup, white on navy         | Comité on dark bg               |
| `flamme-croix-marine-transparent.png`                   | Flame+cross, navy, transparent             | Favicon, small icon on light bg |
| `flamme-croix-blanche-transparent.png`                  | Flame+cross, white, transparent            | Small icon on dark bg           |
| `flamme-croix-blanc-fond-marine.svg`                    | SVG flame+cross, white on navy             | Scalable icon on navy bg        |
| `flamme-croix-marine-fond-transparent.svg`              | SVG flame+cross, navy, transparent         | Scalable icon on light bg       |
| `flamme-croix-blanc-fond-transparent.svg`               | SVG flame+cross, white, transparent        | Scalable icon on any dark bg    |
| `croix-blanche-transparent.png`                         | Cross only, white, transparent             | Small accent on dark bg         |

### Pole / Axe Logos

Files live in `public/assets/poles/`. On the site, a pôle's logo is rendered from its
`logo` upload (Media) in the CMS — the seed does **not** upload them, so an admin must
attach the logo to each pôle (or the UI shows its fallback).

| Axe                  | File                       |
| -------------------- | -------------------------- |
| Spirituel            | `spirituel-logo.png`       |
| Solidaire            | `solidaire-logo.png`       |
| After Mass           | `after-mass-logo.png`      |
| Culturel & Artistique| `culture-logo.png`         |
| Sportif              | `sport-logo.png`           |
| Social               | `social-logo.png`          |
| Humanitaire          | `humain-logo.png`          |
| Animation            | `animation-logo.png`       |
| Chorale (no pôle yet)| `chorale-logo.png`         |
| Finance (no pôle yet)| `finance-logo.png`         |
| Fishing (no pôle yet)| `fishing-logo.png`         |
| Logistique (no pôle yet) | `logistique-logo.png`  |
| Médias (no pôle yet) | `medias-logo.png`          |
| Relations publiques (no pôle yet) | `relations-pub-logo.png` |

> **Note:** Logos marked "no pôle yet" exist as assets but are not seeded as pôles. Never substitute a generic icon for a pôle; if a pôle has no logo, use the flame+cross as a placeholder until the asset is attached.

### Asset Path Convention
All assets must be referenced as:
```
/assets/logos/[filename]      → main brand logos
/assets/poles/[filename]      → pole/axe specific logos
/assets/images/[filename]     → photos and hero images
```

***

## Pages

### Built (MVP) — all fed by Payload where noted
1. **Accueil** `/` — Hero, intro, pôles preview, upcoming event, monthly quote, join CTA (Payload: Homepage, Events, Poles)
2. **Qui sommes-nous** `/qui-sommes-nous` — Identity, mission, vision, values, team, Saint Charbel intro (Payload: TeamMembers)
3. **Nos pôles** `/nos-poles` — All axes with their dedicated logos. **Hidden unless `SiteSettings.polesSectionEnabled` is checked** (page, nav links, homepage teaser and the pôle choice in the join form)
4. **Agenda** `/agenda` — Filterable event calendar (month view, category filter, "add to calendar" ICS export). Only `published` events are public
5. **Rejoindre / Contact** `/rejoindre` — Membership form, WhatsApp CTA, newsletter signup, map of Nice
6. **Saint Charbel** `/saint-charbel` — static page (see "Additional MVP / Priority Page")
7. **Mentions légales** `/mentions-legales` and **Confidentialité** `/confidentialite`

### Phase 2 — not built yet
- Saints maronites (other than Saint Charbel)
- Médiathèque (photo gallery by event)
- Blog / Actualités (`Posts` collection already exists)
- Faire un don
- FAQ
- Demande de prière / Mur d'intentions
- Calendrier liturgique maronite

***

## Axes d'action (Poles content)

**Spirituel** | Logo: `spirituel-logo.png` | Responsables: Laura Azar / Rita Francis
Messes des jeunes, soirées de prière/adoration, témoignages, retraites, pèlerinages, tables rondes Évangile, catéchisme, messes maronito-latines, prière tournante

**Solidaire** | Logo: `solidaire-logo.png` | Responsable: Eleonora Abi Rached
Système de parrainage, entraide (emploi, logement, déménagement)

**Culturel & Artistique** | Logo: `culture-logo.png` | Responsable: Evelyne Helo
Traditions libanaises, événements interculturels Orient/Occident, cinéma, concerts, ateliers (musique, cuisine, art), cours de langue libanaise/chant/piano

**Sportif** | Logo: `sport-logo.png` | Responsable: Elie Habre
Randonnées, compétitions (foot, basket, volley), santé physique, jeux de boules, karting, paintball

**Social** | Logo: `social-logo.png` | Responsable: Peter Daoura
Dîners tournants, pique-niques, soirées d'intégration, aide aux étudiants étrangers, after mass, Noël/Nouvel An

**Humanitaire** | Logo: `humain-logo.png` | Responsable: Elias Bou Ghosn
Visites EHPAD/orphelinat/SDF, collectes de dons, rencontres inter-paroisses

**Animation** | Logo: `animation-logo.png` | Responsable: Clara Antoinetta Elias
Chasse aux œufs, photobooth, décoration de bougies, spécialités libanaises (blé de la Sainte Barbe, maamoul de Pâques)

**After Mass** | Logo: `after-mass-logo.png` | Responsable: (see team)
Accueil café/thé après la messe, goûters, discussions, rencontre des nouveaux paroissiens

***

## Commands

```bash
docker compose up -d postgres  # local Postgres 16
npm run dev                    # start dev server on port 3000 (admin at /admin)
npm run build                  # production build
npm run lint                   # ESLint check
npm run seed                   # idempotent seed of real content (reads .env)
npm run generate:types         # regenerate lib/payload-types.ts after changing collections/globals
npm run generate:importmap     # regenerate admin importMap after adding admin components
npx shadcn-ui@latest add [component]
```

***

## Key Dates & Liturgical Info
- **Fête de Saint Charbel:** 3e dimanche de juillet + 24 décembre
- **Saint Maron:** 9 février
- **Carême maronite:** commence avant le carême romain
- **Transfiguration:** 6 août (importante chez les maronites)

***

## Important Notes
- Community is informal (no legal structure)
- Patron: Saint Charbel Makhlouf (Lebanese Maronite monk, 1828–1898)
- Based in Nice, covers the Côte d'Azur region
- JSC can expand to other cities (Lyon, Paris) — keep architecture city-agnostic
- All copy must be written in natural, warm French — not formal or institutional
- Arabic content added later with proper RTL handling

***

## Additional MVP / Priority Page

Add a dedicated page for **Saint Charbel** before moving to CMS work.

### Saint Charbel page goals
This page is central to the identity of JSC and must be treated as a major content page, not a minor subpage.

### Page slug
`/saint-charbel`

### Page content
Include:
- Hero section with page title and spiritual visual tone
- Short introduction to Saint Charbel and why JSC is under his patronage
- Biography section
- Chronology / timeline of his life
- Miracles and spiritual legacy
- Feast day information
- Pilgrimage section about Annaya, Lebanon
- Prayer / neuvaine section
- CTA linking to future downloadable prayer PDFs
- Optional section introducing other Maronite saints later

### Verified facts to preserve
- Saint Charbel Makhlouf was born in 1828 in Lebanon and died in 1898
- He was a Maronite monk, priest, and hermit
- He is especially associated with healing miracles
- He was canonized in 1977
- Annaya in Lebanon is the main pilgrimage site
- The Maronite liturgical feast is celebrated on the 3rd Sunday of July

### Design direction
- More contemplative and spiritual than the homepage
- Elegant use of whitespace and typography
- Strong emphasis on readability
- Warm, reverent tone
- Avoid sensational or overly dramatic miracle storytelling

***

## Payload CMS Integration (integrated; last synced with code 2026-10-30)

### Why Payload CMS
JSC Nice website needs non-technical admins to edit content (events, team members,
poles, blog posts) without code changes. Payload CMS 3 installs directly into the
existing Next.js app rather than requiring a separate server, keeping the stack simple.

### Stack
- Payload CMS 3 installed inside the Next.js 15 app (admin at `/admin`)
- PostgreSQL 16 (via Docker Compose for local dev)
- Payload Local API (`getPayloadClient()` in `lib/payload.ts`) for server-side fetching in Server Components
- `lib/payload-types.ts` is generated — run `npm run generate:types` after any schema change, never edit by hand

### Content Model

#### Globals (single-instance content)
- `SiteSettings` (`site-settings`) — logo, socialLinks[] (instagram/facebook/whatsapp/tiktok/youtube),
  whatsappNumber, primaryColor, `polesSectionEnabled` (checkbox, default **false**)
- `Homepage` — heroTitle, heroSubtitle, monthlyQuote, ctaButtons[] (label, url, style primary|secondary)
- `ContactPage` — address, formIntroText, mapEmbedUrl
- `FooterSettings` (`footer-settings`) — footerText, legalLinks[]

Globals are publicly readable; update is limited to `super-admin` and `editor` and triggers revalidation.

#### Collections (repeatable content)
- `Users` — auth-enabled. Field `role` (select): super-admin | editor | content-manager (default `editor`).
  Only a super-admin can change a role.
- `Events` — title, slug, date, endDate, location,
  category (`spirituel` | `social` | `culturel` | `sportif` | `humanitaire` | `after-mass`),
  description (richText), image (upload), registrationLink, featured (checkbox, shown on homepage),
  `status` (`draft` | `in_discussion` | `published`), `statusHistory` (read-only audit trail)
- `TeamMembers` — name, role, pole (relationship→Poles), photo (upload), bio (richText), order (number)
- `Poles` — name, slug, mission (richText), responsable (relationship→TeamMembers),
  logo (upload), activities (array of text), color
- `Posts` — title, slug, excerpt, content (richText), coverImage (upload),
  publishedDate, author (relationship→TeamMembers — public byline), `status` (draft/published),
  `createdBy` (the CMS user, set automatically, used for "own posts" access)
- `Media` — upload collection, alt text required, generates `thumbnail`, `card` and `hero` sizes

Note: Saint Charbel page remains a static page (content changes rarely).
Revisit only if the team requests frequent edits to that page.

### Event Status Workflow
- New events are **always** created as `draft` (any client-sent status is ignored).
- Public/unauthenticated reads only return `published` events; staff see all statuses in the admin.
- `content-manager` can never move an event to `published` (blocked in both field access and a hook with an explicit French error).
- Only `super-admin` and `editor` can publish.
- Every status change appends to `statusHistory` (date, from, to, changedBy); the history is rebuilt server-side, so client values are ignored.
- Status labels/badge colors live in `lib/event-status.ts` — reuse `EVENT_STATUS_OPTIONS` / `EVENT_STATUS_BADGES`, don't redefine them.

### Access Control / Roles

| Role            | Read                                     | Create                                         | Update                                     | Delete                       |
| --------------- | ---------------------------------------- | ---------------------------------------------- | ------------------------------------------ | ---------------------------- |
| super-admin     | All                                      | All                                            | All                                        | All                          |
| editor          | All                                      | Events, Posts, TeamMembers, Poles, Media       | Events, Posts, TeamMembers, Poles, Media   | Events, Posts, Media         |
| content-manager | All (Events/Posts: all statuses in admin)| Events (draft only), Posts, Media              | Events (never to `published`), own Posts, Media | Media only             |

Public (no login): Poles, TeamMembers, Media and globals are readable; Events and Posts only when `published`.
Deleting Poles and TeamMembers is super-admin only. Events deletion is limited to super-admin and editor.

Implement via the reusable `checkRole.ts` utility in `/access` — do not duplicate
access logic across collection configs.

> If you change a collection's access rules, update this table in the same change.

### Data Flow
- Frontend pages (Homepage, Qui sommes-nous, Pôles, Agenda, Contact) fetch content
  via Payload's Local API inside Next.js Server Components.
- Collection/global `afterChange` hooks call `safeRevalidatePath` (`lib/revalidate.ts`) so published
  changes go live without a full redeploy. It no-ops outside a Next.js context (e.g. seed).
- **Pôles toggle:** `getPolesSectionEnabled()` (`lib/site-settings.ts`) gates the Nos pôles page,
  nav links (`getNavLinks()` in `lib/constants.ts`), homepage teaser and the join-form pôle choice.
  Null/unset counts as hidden.
- `lib/constants.ts` still holds fallback/static values (nav, legal links, contact info, social links).
  Its `CONTACT` and WhatsApp URLs contain **TODO placeholders** to replace before launch.
- Real content (8 pôles, team members, sample events) is seeded via `npm run seed`, not entered
  manually on first launch. The seed is idempotent (lookup by slug/name, update in place) and does
  **not** upload pôle logos.

### Local Development
- `docker compose up -d postgres` starts Postgres 16 (db `jsc-main`, user/password `postgres`).
- Copy `.env.example` to `.env` and set `DATABASE_URI` and `PAYLOAD_SECRET`
  (`openssl rand -base64 32`). `PAYLOAD_SECRET` also authenticates the `/api/seed` route.
- Admin panel is available at `/admin` inside the existing Next.js app — no separate
  deployment or subdomain required.
- Custom admin components (e.g. `components/admin/status-cell.tsx`) must be registered in the
  Payload import map — run `npm run generate:importmap` after adding one.