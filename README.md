# Viral Besties Club

Portfolio-style landing page + waitlist, built with Next.js (App Router) and Tailwind CSS v4.

## Routes

- `/` — Home: profile header, headline, two colored CTAs.
- `/waitlist` — Waitlist page: video placeholder, email capture form, `CASE STUDIES` divider.
- `/quantem` — Stub "coming soon" page.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Placeholders to replace

- `public/profile.svg` → drop in a real `profile.jpg` and update the `src` in `components/ProfileHeader.tsx`.
- Headline copy in `app/page.tsx`.
- Waitlist description + video in `app/waitlist/page.tsx` (video block is just a styled `<div>` — swap for a real player when ready).
- Social links: all `href="#"` in `components/ProfileHeader.tsx`.
- Waitlist form backend: wire `components/WaitlistForm.tsx` to Resend / ConvertKit / Typeform.

## Styling notes

- Tailwind v4 is configured CSS-first in `app/globals.css` via `@import "tailwindcss"` and `@theme`.
- Serif font (Playfair Display) loaded with `next/font/google` in `app/layout.tsx`, exposed as `font-serif`.

## Deploy

Push to GitHub and connect the repo in the Vercel dashboard, or run `vercel` from this directory.
# Viralbestieswebsite
