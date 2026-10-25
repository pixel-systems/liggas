# LigGas

Modern static website for LigGas s.r.o., the engineering-networks company in Viničné.

The public site is Slovak. It keeps the services, reference photographs, certificates, and contact details from [liggas.sk](https://www.liggas.sk/). The layout is new.

## Why this stack

The previous repository was an unfinished Hugo theme. The live site is a small WordPress brochure: one company story, five photo galleries, three certificate scans, and a contact block. That content changes rarely and does not need a database, accounts, or a weekly editor.

[Astro](https://astro.build/) builds the pages to plain HTML and optimizes the photographs at build time. A parish-style CMS with Supabase would add accounts and infrastructure this site does not use. Content lives in `src/data/site.ts` and `src/assets/photos/`.

## Run locally

Node.js 22.23.4 or newer.

```sh
npm ci
npm run dev
```

The site is at http://127.0.0.1:4321/.

```sh
npm run check
npm run build
```

`dist/` is the static site. It can be hosted at the root of `liggas.sk`.

## Edit content

- Company facts, services, and reference labels: `src/data/site.ts`
- Photographs: add or replace files in `src/assets/photos/<category>/`
- Certificates: `src/assets/photos/opravnenia/`

The certificate scans currently published by the company show expiry dates in 2012 and 2014. Replace those files when newer documents are available.
