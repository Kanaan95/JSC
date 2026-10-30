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

- **Framework:** Next.js 14 with App Router and TypeScript
- **Styling:** Tailwind CSS v3
- **Components:** shadcn/ui
- **Content:** MDX for blog/articles
- **Deployment:** Static-first, Vercel or Netlify ready
- **Forms:** Netlify Forms or Resend (no backend required for MVP)

***

## Project Structure

```
/app                    → Next.js App Router pages
/components             → reusable UI components
/components/ui          → shadcn/ui base components
/lib                    → utilities and shared logic
/content                → MDX content files (blog, team bios, poles)
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

| File                                          | Description                               | Use when                        |
| --------------------------------------------- | ----------------------------------------- | ------------------------------- |
| `Logo-JSC-complet-marine-fond-blanc.jpg`      | Full logo (boat+JSC+text), navy on white  | Main logo, footer, about page   |
| `JSC-Nice-marine-transparent.jpg`             | "JSC NICE" wordmark, navy, transparent bg | Light backgrounds               |
| `JSC-Nice-blanc-fond-marine.jpg`              | "JSC NICE" wordmark, white on navy        | Dark/navy backgrounds           |
| `barque-blanche-transparent.jpg`              | Boat icon only, white, transparent bg     | Small icon use on dark bg       |
| `barque-blanche-JSC-texte-transparent.jpg`    | Boat + JSC text, white, transparent bg    | Hero overlays                   |
| `comite-marine-transparent.jpg`               | "JSC COMITÉ" lockup, navy                 | Comité/team section             |
| `flamme-croix-marine-transparent.jpg`         | Flame+cross icon, navy, transparent bg    | Favicon, small icon on light bg |
| `flamme-croix-blanche-transparent.jpg`        | Flame+cross icon, white, transparent bg   | Small icon on dark bg           |
| `flamme-croix-blanc-fond-marine-12.svg`       | SVG flame+cross, white on navy            | Scalable icon on navy bg        |
| `flamme-croix-marine-fond-transparent-14.svg` | SVG flame+cross, navy, transparent        | Scalable icon on light bg       |
| `flamme-croix-blanc-fond-transparent-13.svg`  | SVG flame+cross, white, transparent       | Scalable icon on any dark bg    |

### Pole / Axe Logos

| Axe         | File                  |
| ----------- | --------------------- |
| Spirituel   | `spirituel logo.png`  |
| Solidaire   | `solidaire logo.png`  |
| After Mass  | `after mass logo.png` |
| Culturel    | `culture logo.png`    |
| Sportif     | `sport logo.png`      |
| Social      | `social logo.png`     |
| Humanitaire | `humain logo.png`     |
| Animation   | `animation logo.png`  |

> **Note:** Poles marked ⚠️ are missing dedicated logos. Use the flame+cross as a placeholder and add a TODO comment. Replace when assets are provided.

### Asset Path Convention
All assets must be referenced as:
```
/assets/logos/[filename]      → main brand logos
/assets/poles/[filename]      → pole/axe specific logos
/assets/images/[filename]     → photos and hero images
```

Copy all provided files into the correct subfolder before starting development.

***

## Pages (MVP — build in this order)

1. **Accueil** — Hero, intro, pôles preview, upcoming event, join CTA, footer
2. **Qui sommes-nous** — Identity, mission, vision, values, team, Saint Charbel intro
3. **Nos pôles** — All axes with their dedicated logos (see Asset Inventory)
4. **Agenda** — Filterable event calendar (spiritual / social / cultural / sport / humanitarian)
5. **Rejoindre / Contact** — Membership form, WhatsApp CTA, map of Nice

## Pages (Phase 2 — after MVP)
6. Saint Charbel & saints maronites
7. Médiathèque (photo gallery by event)
8. Blog / Actualités
9. Faire un don
10. FAQ
11. Demande de prière / Mur d'intentions
12. Calendrier liturgique maronite

***

## Axes d'action (Poles content)

**Spirituel** | Logo: `spirituel logo.png` | Responsables: Laura Azar / Rita Francis
Messes des jeunes, soirées de prière/adoration, témoignages, retraites, pèlerinages, tables rondes Évangile, catéchisme, messes maronito-latines, prière tournante

**Solidaire** | Logo: `solidaire logo.png` | Responsable: Eleonora Abi Rached
Système de parrainage, entraide (emploi, logement, déménagement)

**Culturel & Artistique** | Logo: `culture logo.png` | Responsable: Evelyne Helo
Traditions libanaises, événements interculturels Orient/Occident, cinéma, concerts, ateliers (musique, cuisine, art), cours de langue libanaise/chant/piano

**Sportif** | Logo: `sport logo.png` | Responsable: Elie Habre
Randonnées, compétitions (foot, basket, volley), santé physique, jeux de boules, karting, paintball

**Social** | Logo: `social logo.png` | Responsable: Peter Daoura
Dîners tournants, pique-niques, soirées d'intégration, aide aux étudiants étrangers, after mass, Noël/Nouvel An

**Humanitaire** | Logo: `humain logo.png` | Responsable: Elias Bou Ghosn
Visites EHPAD/orphelinat/SDF, collectes de dons, rencontres inter-paroisses

**Animation** | Logo: `animation logo.png` | Responsable: Clara Antoinetta Elias
Chasse aux œufs, photobooth, décoration de bougies, spécialités libanaises (blé de la Sainte Barbe, maamoul de Pâques)

**After Mass** | Logo: `after mass logo.jpg` | Responsable: (see team)
Accueil café/thé après la messe, goûters, discussions, rencontre des nouveaux paroissiens

***

## Commands

```bash
npm run dev         # start dev server on port 3000
npm run build       # production build
npm run lint        # ESLint check
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

## Payload CMS Integration (Added 2026-07-27)

### Why Payload CMS
JSC Nice website needs non-technical admins to edit content (events, team members,
poles, blog posts) without code changes. Payload CMS 3 installs directly into the
existing Next.js app rather than requiring a separate server, keeping the stack simple.

### Stack additions
- Payload CMS 3 (installed inside the existing Next.js 15+ app)
- PostgreSQL 16 (via Docker Compose for local dev)
- Payload Local API for server-side data fetching in Next.js Server Components

### Prerequisite
Next.js must be on version 15 or higher before installing Payload 3.
If the project is currently on Next.js 14, upgrade first.

### Content Model

#### Globals (single-instance content)
- `SiteSettings` — logo, socialLinks[], whatsappNumber, primaryColor
- `Homepage` — heroTitle, heroSubtitle, monthlyQuote, ctaButtons[]
- `ContactPage` — address, formIntroText, mapEmbedUrl
- `FooterSettings` — footerText, legalLinks[]

#### Collections (repeatable content)
- `Users` — auth-enabled. Field `role` (select): super-admin | editor | content-manager
- `Events` — title, slug, date, endDate, location, category (priere/social/caritatif),
  description (richText), image (upload), registrationLink, featured (checkbox)
- `TeamMembers` — name, role, pole (relationship→Poles), photo (upload), bio (richText), order (number)
- `Poles` — name, slug, mission (richText), responsable (relationship→TeamMembers),
  logo (upload), activities (array of text), color
- `Posts` — title, slug, excerpt, content (richText), coverImage (upload),
  publishedDate, author (relationship→TeamMembers)
- `Media` — standard Payload upload collection, alt text required

Note: Saint Charbel page remains a static page (content changes rarely).
Revisit only if the team requests frequent edits to that page.

### Access Control / Roles

| Role            | Read | Create                     | Update                     | Delete         |
| --------------- | ---- | -------------------------- | -------------------------- | -------------- |
| super-admin     | All  | All                        | All                        | All            |
| editor          | All  | Events, Posts, TeamMembers | Events, Posts, TeamMembers | Events, Posts  |
| content-manager | All  | Posts only                 | Own posts only             | Own posts only |

Implement via a reusable `checkRole.ts` utility in `/access` — do not duplicate
access logic across collection configs.

### Data Flow
- Frontend pages (Homepage, Qui sommes-nous, Pôles, Agenda, Contact) fetch content
  via Payload's Local API inside Next.js Server Components.
- Use on-demand revalidation so published changes go live without a full redeploy.
- Real content (9 poles, team members, sample events) is seeded via a seed script,
  not entered manually on first launch.

### Local Development
- `docker-compose.yml` provides a Postgres 16 service.
- `.env.example` documents `DATABASE_URI` and `PAYLOAD_SECRET`.
- Admin panel is available at `/admin` inside the existing Next.js app — no separate
  deployment or subdomain required.