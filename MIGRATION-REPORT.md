# Migration report — old Weebly site → this Astro repo

Migrated from `https://www.fingerpoppinsoul.amsterdam` on 2026-08-03, following
`MIGRATION_2.md`. `npm run build` passes with zero errors (65 pages).

## What was migrated

**Static pages**
- **About** (`/about`) — full "Our Philosophy" copy and the complete year-by-year
  "Our History" (1993–2025), verbatim from the old site. The dead AT5 video link
  was dropped (404); the YouTube "1000th show" film (still live) is embedded.
- **Artists We Met** (`/artists-we-met`) — the full A–Z list, ~600 artists with
  exact meeting dates and locations, plus 18 photos in a grid.
- **Selections** (`/selections`) — the 10 Rare Soul LPs write-ups (full reviews,
  one cover image each) plus the 5 Hattricks full of Soul chapters as simple
  image grids (191 picture-sleeve 45 covers, no per-sleeve captions — per your
  call, since the book has the detailed info on each 45).
- **Listen** (`/listen`) — Mixcloud, SoundCloud (user widget) and two Spotify
  playlist embeds (Latin Soul, Sweet Soul). **Correction:** the scaffold's
  placeholder Mixcloud handle (`fingerpoppinsoul`) was wrong/unregistered — the
  real handle is `fingerpoppinsoulsoulradiofroma`, confirmed live. Fixed in
  `src/data/site.ts` and `MixcloudEmbed.astro`.

**Blog** — 57 posts enumerated from all 34 archive months (Oct 2016 – Aug 2025)
plus the current page, each written to `src/content/blog/<original-slug>.md`
with the original slug preserved. The existing `the-hideaway-2026-2027-season.md`
(current season) was left untouched as instructed; the `30-years-of-fingerpoppin-soul.md`
sample was replaced with the real copy.

**Images** — 314 downloaded to `public/images/` (18 Artists We Met, 203
Selections, 93 blog), deduplicated, clean names, all references rewritten.
Verified automatically: every `/images/...` reference in the built HTML
resolves to a file on disk (0 missing, checked across all 65 built pages).

## Dead links

- **AT5** (`at5.nl/gemist/...`) — confirmed 404, removed.
- **Salto** live-stream link (`stadsfm_live.asp`) — the URL redirects (still
  resolves) to the station's current live page, but it isn't used anywhere in
  the new site (Listen already covers Mixcloud/Spotify/SoundCloud), so there
  was nothing to carry across or replace.
- **Twitter share buttons** — not carried into any migrated content (grep for
  `twitter.com/share` across `src/` and `dist/` returns nothing).
- **"Our Google Hangout"** (old SoundCloud/Google/YouTube page) — Google
  Hangouts is defunct and there was no live embed to migrate (just a static
  screenshot on the old page), so this content was dropped rather than carried
  across as dead weight.

## Needs Sherry's review

1. **History page photos** — the old "Our History" page has 113 embedded
   photos spanning 1993–2025. Embedding all of them inline would have meant
   redesigning the About page layout, which the brief said not to touch, so
   only the text was migrated. The photo URLs are still on the live old site
   if a photo timeline/gallery is wanted later — flagging so this doesn't get
   lost, not deciding it for you.
2. **A few merged photo captions** — in the History text, a handful of old
   photo captions (e.g. "Arthur Conley serving a healthy salad", "Two rare
   Italian picture sleeve Dells 45s") got migrated as their own short sentences
   since they weren't attached to a photo anymore. Worth a proofread pass — no
   facts were changed, just some choppy phrasing here and there.
3. **Two Artists We Met photos are uncertain** — `gwen-mccrae.png` and
   `isaac-hayes.png` are labelled from their original filenames; the old page's
   caption fields were empty so I couldn't cross-check. Worth eyeballing that
   the pictured artist matches the label.
4. **Janet Helms LP has 2 unused images** — `img-2446.jpg` and `img-2447.jpg`
   were downloaded (from the original 3-photo post) but the Selections layout
   only shows one image per record. They're sitting in `public/images/` if you
   want a small gallery there instead.
5. **Spotify/SoundCloud embeds not visually verified** — I confirmed the
   playlist IDs and the SoundCloud user ID against the old site's embed code,
   but couldn't click through Spotify's own player to confirm it still renders
   (no browser access in this session). Worth a quick check on `/listen`.
6. **Blog categories (Announcements/Show/Hideaway) are keyword-guessed** —
   6 Hideaway, 18 Show, 34 Announcements. Reasonable-looking split, but not
   individually verified against your judgment of each post.
7. **Contact form still has `YOUR_ACCESS_KEY`** — pre-existing scaffold TODO in
   `Footer.astro`, unrelated to this migration but sitting right there.

## Not migrated (out of scope / already covered)

- `/contact.html` — emails already matched what's in `src/data/site.ts`
  (`hansdiepstraten@gmail.com`, `vanvlietharry@hotmail.com`), nothing to change.
- Old Weebly nav/footer chrome, comment counts, RSS boilerplate — dropped
  everywhere as instructed.
