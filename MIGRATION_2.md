# Migration brief — old Weebly site → this Astro repo

You are Claude Code, working inside this repository. Your job is to migrate all
content from the old Weebly site at `https://www.fingerpoppinsoul.amsterdam`
into this Astro site, following the structure already scaffolded here.

The repo is set up and builds cleanly. Read `README.md` first for the content
model, then follow this brief top to bottom. Work in phases; run `npm run build`
after each phase and fix any error before moving on.

---

## Done when

- [ ] All static-page copy migrated (About, Artists We Met, Selections)
- [ ] Every blog post from the old site exists as one Markdown file, original slug preserved
- [ ] All referenced images downloaded to `public/images/` and every reference rewritten
- [ ] Dead links removed (see Phase 4)
- [ ] `npm run build` passes with zero errors
- [ ] No remaining reference to `weebly`, `/uploads/`, or `radio.co` chrome in `src/` or built HTML
- [ ] `MIGRATION-REPORT.md` written, listing what you did and what needs Sherry's review

## What NOT to do

- Do **not** touch the design: leave `src/styles/global.css`, the layout, and the
  components' styling alone. You are moving content, not restyling.
- Do **not** invent facts, dates, names, or copy. If the source is ambiguous or a
  page won't load, leave a `TODO:` note in place and record it in the report.
  Never fill a gap with plausible-sounding text.
- Do **not** migrate Weebly chrome: the repeated top/bottom nav, "Site powered by
  Weebly", comment counts, the `twitter.com/share` buttons, or the RSS boilerplate.
- Keep prose faithful to the originals — this is Hans & Harry's own writing. Fix
  only obvious typos; don't rewrite their voice.

---

## Phase 1 — Fetch and map

Fetch each old URL below. Weebly renders the real content inside the page; strip
the surrounding nav/footer and keep the main content region only.

### Page mapping (old → new destination)

| Old URL | Goes to |
|---|---|
| `/our-philosophy.html` | `src/pages/about.astro`, "Our philosophy" section |
| `/our-history.html` | `src/pages/about.astro`, "Our history" section |
| `/about.html` | `src/pages/about.astro`, intro (already partly done — reconcile) |
| `/artists-we-met.html` | `src/pages/artists-we-met.astro` (see Phase 3b) |
| `/rare-soul-lps.html` | `src/data/selections.ts`, "Rare Soul LPs" entry |
| `/hattricks-full-of-soul-i.html` … `-v.html` | `src/data/selections.ts`, the five Hattricks entries |
| `/mixcloud-shows.html` | `/listen` — collect Mixcloud feed(s); most is already the embed |
| `/spotify-playlists.html` | `/listen` — collect Spotify playlist IDs, add `<SpotifyEmbed>` |
| `/soundcloud-google-and-youtube.html` | `/listen` — collect SoundCloud/YouTube URLs, add the matching embeds |
| `/blog.html` + archive | `src/content/blog/*.md` (Phase 3) |
| `/contact.html` | Already handled in the footer — just confirm the two emails match |

For the About page: the scaffold has placeholder text marked `<em>Placeholder…</em>`.
Replace each placeholder with the real copy. Keep the three-part structure
(intro / philosophy / history).

---

## Phase 2 — Images

Every old image lives under `https://www.fingerpoppinsoul.amsterdam/uploads/9/2/6/4/92646990/`.

1. For each page and post you migrate, collect the image URLs it references.
2. Download each into `public/images/`. Give it a clean, human name derived from
   the original filename; strip any `?…` timestamp query and the Weebly `_orig`
   suffix (e.g. `hideaway-2_orig.jpg` → `hideaway-2.jpg`).
3. Rewrite every reference to `/images/<clean-name>` (leading slash = from
   `public/`). Blog post images go in that post's frontmatter `image:` field
   and/or inline Markdown.
4. Deduplicate: if the same file is referenced twice, download once.

Use `curl -sSL <url> -o public/images/<name>`. If a download 404s, skip it and
log it in the report — do not invent a replacement.

Priority order (heaviest first): Artists We Met, then Selections, then blog posts.

---

## Phase 3 — Blog

The blog is the living core. One Markdown file per post, in `src/content/blog/`.

### 3a — Enumerate every post

Page 1 of `/blog.html` shows the most recent posts; older ones are behind
`<<Previous` (`/blog/previous/2`, `/3`, …) and the month archives. Walk them all.
The archive months present on the old site are:

```
08-2025 08-2024 08-2023 06-2023 03-2023 08-2022 06-2021 05-2020
01-2020 11-2019 05-2019 02-2019 01-2019 10-2018 08-2018 07-2018
06-2018 05-2018 04-2018 03-2018 02-2018 01-2018 12-2017 11-2017
10-2017 08-2017 07-2017 06-2017 05-2017 04-2017 03-2017 02-2017
01-2017 10-2016
```

Fetch `https://www.fingerpoppinsoul.amsterdam/blog/archives/<MM-YYYY>` for each to
find the post URLs, then fetch each post at `/blog/<slug>`. Build a complete list
of `(slug, date, title)` before writing anything.

### 3b — Write each post

Filename **must equal the original slug** (e.g. `/blog/hh-trip-to-california`
→ `src/content/blog/hh-trip-to-california.md`). This preserves shared links —
the redirect layer depends on it. Do not re-slugify.

Two sample posts already exist (`30-years-of-fingerpoppin-soul.md` and
`the-hideaway-2026-2027-season.md`). The first is a real slug — replace its body
with the true original copy. Keep the second as-is (it's the current season).

Frontmatter for every post:

```markdown
---
title: "<exact title>"
date: <YYYY-MM-DD from the post's date>
category: <Announcements | Show | Hideaway>
excerpt: "<one line — first sentence or a short summary>"
# image: "/images/<name>"   # if the post has a lead image
---

<body in Markdown>
```

Category rule: posts about the party → `Hideaway`; about the radio show, guests,
studio, anniversaries → `Show`; everything else → `Announcements`.

Convert HTML to clean Markdown: headings, bold/italic, links, lists, images.
Drop empty paragraphs and the Weebly non-breaking-space litter (`\u200b`).

---

## Phase 4 — Kill dead links

The old site carries link rot. Remove or replace, don't carry across:

- The **Salto** live-stream link (`salto.nl` / `stadsfm_live.asp`) — the station
  restructured; verify before keeping. If it doesn't resolve, remove it.
- The **AT5** video link (`at5.nl/gemist/...`) on the old About page — almost
  certainly dead; remove it unless it resolves.
- Any `twitter.com/share` button markup.

For the two `about.html` video links: keep the YouTube "1000th show" film if the
video still exists (embed it with `<YouTubeEmbed id="…" />`), drop the AT5 one if dead.

---

## Phase 5 — Verify

1. `npm run build` — must pass clean.
2. `grep -ri "weebly\|/uploads/\|twitter.com/share" src/` — must return nothing.
3. `grep -rl "/uploads/" dist/` — must return nothing (no un-rewritten image refs).
4. Spot-check three built pages for missing images (`<img>` with a path that
   doesn't exist in `public/images/`).
5. Confirm every old blog slug now has a matching file in `src/content/blog/`.

## Then write `MIGRATION-REPORT.md`

Include: pages migrated; count of blog posts migrated (with any that failed to
load); count of images downloaded (with any 404s); dead links removed; and a
**"Needs Sherry's review"** list — anything ambiguous, any `TODO:` you left, and
any content that didn't map cleanly. Be specific; this is her checklist.

---

## Appendix — full old-site URL inventory

Static pages:
```
/                                     /our-philosophy.html
/about.html                           /our-history.html
/artists-we-met.html                  /contact.html
/rare-soul-lps.html                   /mixcloud-shows.html
/hattricks-full-of-soul-i.html        /spotify-playlists.html
/hattricks-full-of-soul-ii.html       /soundcloud-google-and-youtube.html
/hattricks-full-of-soul-iii.html
/hattricks-full-of-soul-iv.html
/hattricks-full-of-soul-v.html
```

Known blog slugs (page 1 — find the rest via the archives in Phase 3a):
```
new-season-of-the-hideaway
a-new-season-of-the-hideaway-2024-2025-coming-up-the-clayton-hotel-amsterdam
new-season-2023-2024-of-the-hideaway-in-amsterdam-hard-rock-hotel
hh-trip-to-california
30-years-of-fingerpoppin-soul
hideaway-the-hard-rock-hotel-amsterdam-spring-editions
the-hideaway-on-sep-16
dj-moonshine-guesting-on-the-show-june-10
back-in-the-studio-from-may-27-2021
shout-out-to-our-health-care-workers
```
