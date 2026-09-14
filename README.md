# The Bridge of Hope Foundation — frontend

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4.

## Status

Static pages ported faithfully from the approved HTML in `../files/`
(home, give, privacy — copy, structure and design tokens unchanged, see
`app/globals.css` for the ported `:root` tokens). The donation form
(`components/GiveForm.tsx`, a client component; the rest of `/give` is a
Server Component) is wired to the real backend API, `/updates` and
`/updates/[slug]` pull from the backend's posts endpoint, and
`/manage/[token]` is the working donor self-service/cancel page. See
`../backend/CONTENT-TODO.md` for every real-world fact still needed before
this can go live, and `../files/PROMPT.md` for the full build spec.

One deliberate deviation from the spec's file tree: `our-work`,
`safeguarding`, `who-we-are` and `accountability` are sections on the home
page (`#work`, `#safeguarding`, `#people`, `#accountability`), matching the
single-page structure of the approved `index.html`, rather than separate
routes — splitting them into their own pages would have meant inventing a
different content layout than what was approved.

## Local setup

```bash
npm install
copy .env.example .env.local     # point BACKEND_URL / NEXT_PUBLIC_BACKEND_URL at your backend
npm run dev
```

Requires the backend running (see `../backend/README.md`) for the give
form, `/updates`, and `/manage/[token]` to have real data — the static
pages (home shell, privacy) work without it.

## Payment rails on the give page

`NEXT_PUBLIC_{STRIPE,PAYPAL,MPESA}_ENABLED` mirror the backend's feature
flags (kept in sync manually until real credentials exist — see
`../backend/CONTENT-TODO.md`). With all three off, the form uses the
backend's in-house `test` rail so the full donate → receipt → cancel flow
is exercisable end to end; a visible on-page notice says so.

## Build & deploy (Vercel)

```bash
npm run build
```

Deploy via the Vercel CLI or dashboard, with `BACKEND_URL` /
`NEXT_PUBLIC_BACKEND_URL` set to the deployed backend's URL (Render) and
`NEXT_PUBLIC_SITE_URL` set to the production frontend URL.
