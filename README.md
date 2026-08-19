# asebaq.github.io

Personal site for Ahmad Sebaq — built with [Astro](https://astro.build/), deployed to GitHub Pages.

## Editing content

All copy lives in **`src/data/content.ts`**. Nothing else needs touching for routine updates:

| What | Where in `content.ts` |
| --- | --- |
| Name, tagline, intro, links, CV files | `person` |
| Services and rates | `services`, `availability` |
| Skills grid | `skills` |
| Experience timeline | `roles` (`lane` is `core` / `side` / `research`) |
| Projects | `projects` |
| Education, publications, awards, languages | `education`, `publications`, `awards`, `languages` |
| "How I work" and engagement models | `workStyle`, `engagements` |

Dates in `roles` use `YYYY-MM`; `end: null` means "present" and puts the clip across the playhead.

## Placeholders to fill

- `person.scholar` — Google Scholar URL (the Contact card only appears once it is set)
- `person.calendly` — booking link (the "book a call" note only appears once it is set)
- `services[0].rate` — currently "Rate on request"

## CV PDFs

`public/cv-ahmad-sebaq.pdf` and `public/cv-ahmad-sebaq-video.pdf` are copies of the LaTeX build in
`~/latex/ahmad_sebaq_CV`. Refresh them after rebuilding the CV:

```bash
cp ~/latex/ahmad_sebaq_CV/main.pdf public/cv-ahmad-sebaq.pdf
cp ~/latex/ahmad_sebaq_CV/main_video.pdf public/cv-ahmad-sebaq-video.pdf
```

## Local development

Requires Node 22.12+ (Astro 7).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
```

## Deploying

1. Create a GitHub repo named `asebaq.github.io` under your account.
2. `git remote add origin git@github.com:asebaq/asebaq.github.io.git && git push -u origin main`
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.

## Design notes

The visual language is video annotation: the hero name sits inside a tracker bounding box, and the
experience section is a video-editor timeline — one lane per kind of work, clip length equal to time
served, year ticks down the axis and a playhead at today. Track colours: orange full-time, blue
part-time, violet research.
