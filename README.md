# Fingerpoppin Soul

The website for the Fingerpoppin Soul radio show and The Hideaway soul night,
Amsterdam. Built with [Astro](https://astro.build), deployed on Cloudflare.
Static, fast, and light to maintain — content lives in plain files.

## Run it locally

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # preview the built site
```

## Where the content lives

Everything you'll edit day-to-day is in a handful of files:

| What | File |
|------|------|
| The Hideaway season, dates, venue, guest DJs | `src/data/hideaway.ts` |
| Blog posts (one Markdown file each) | `src/content/blog/*.md` |
| Selections (Rare LPs + Hattricks) | `src/data/selections.ts` |
| Site name, nav, emails, socials | `src/data/site.ts` |
| Images | `public/images/` |

### Add a blog post

Create a file in `src/content/blog/`, e.g. `my-post.md`:

```markdown
---
title: "My post title"
date: 2026-09-01
category: Announcements   # Announcements | Show | Hideaway
excerpt: "One line shown in the list."
# image: "/images/my-photo.jpg"
---

Your text here, in Markdown.
```

It appears at `/blog/my-post` automatically.

### Announce a Hideaway guest DJ

In `src/data/hideaway.ts`, set the `guest` field on the relevant date:

```ts
{ date: '2026-10-03', guest: 'Russell Gilbert' },
```

## Structure (7 pages, down from 16)

```
/                Home — record-label hero, Hideaway band, latest shows
/the-hideaway    The event: season, dates, venue, guests   ← was buried in the blog
/listen          Mixcloud + Spotify + SoundCloud/YouTube
/artists-we-met  A–Z artists (to migrate)
/selections      Rare LPs + Hattricks I–V
/blog            The living core; existing /blog/<slug> URLs preserved
/about           Philosophy + History + About, merged
```

Old Weebly URLs redirect via `public/_redirects`.

## Deploy to Cloudflare

Pure static site → **Cloudflare Pages** is the simplest path:

1. Push this repo to GitHub.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → connect the repo.
3. Build command `npm run build`, output directory `dist`.
4. Add the custom domain `www.fingerpoppinsoul.amsterdam` and point the
   nameservers/DNS to Cloudflare.

Every `git push` rebuilds and deploys. `_redirects` is picked up automatically.

## The contact form

`src/components/Footer.astro` posts to [Web3Forms](https://web3forms.com)
(free, no backend). Get an access key and replace `YOUR_ACCESS_KEY`.
Don't want a third party? Delete the `<form>` — the two email addresses remain.

## Still to migrate from the old site

- [ ] Export all images from the old `/uploads/…` folder into `public/images/`
- [ ] "Our Philosophy" and "Our History" copy → `src/pages/about.astro`
- [ ] Artists We Met A–Z list + photos
- [ ] Rare Soul LPs and Hattricks I–V content → `src/data/selections.ts`
- [ ] Remaining blog posts (2016–2025) → `src/content/blog/`
- [ ] Remove dead links (old Salto and AT5 stream/video URLs)

## Optional: a visual editor for Hans & Harry

If they'd rather not touch files, add a git-based CMS — [Sveltia CMS](https://github.com/sveltia/sveltia-cms)
or [Decap CMS](https://decapcms.org) — as an `/admin` page. It writes to the
same files via a web UI. No servers, still free.
