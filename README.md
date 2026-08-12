# iGoHireLeaders — site redesign

Jekyll site. Header and footer are `_includes/header.html` and
`_includes/footer.html`, and both pull their links from
**`_data/nav.yml`** — that's the only file you need to touch to add,
remove, or reorder a link anywhere on the site.

## What changed from the old Google Sites version

- Full visual redesign: navy/ink + brass palette, Fraunces (display)
  + Inter (body) instead of the default Google Sites look
- Single-source nav (`_data/nav.yml`) instead of hand-editing every page
- Sticky header with a real dropdown for Services > Employers / Aspirant
- Two video placeholders (home page + Aspirant page) — swap
  `_includes/video-placeholder.html`'s usage for a real `<iframe>`
  embed once you have final video files/links
- Leadership photos are placeholder initials (MA / JJ) — swap the
  `.avatar` divs in `about.html` for real headshots when you have them
- All existing Fillout form links (schedule consultation, build resume,
  submit resume, vacancy listing, job applications) carried over as-is

## Run locally

```
gem install bundler jekyll
bundle init
bundle add jekyll jekyll-sitemap
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Deploy on GitHub Pages (same pattern as fullroom.co)

1. Push this folder to a new GitHub repo
2. Repo Settings → Pages → deploy from the `main` branch, root
3. Point your domain's DNS (A/CNAME records) at GitHub Pages, add a
   `CNAME` file with your domain if using a custom domain
4. GitHub rebuilds automatically on every push

## Editing content

- Each page is a plain `.html` file with a small Liquid front-matter
  block at the top (`title`, `description`) — everything else is
  normal HTML you can edit directly
- Job listings on `listings.html` are individual `.listing-card` blocks
  — copy/paste one to add a new opening, delete one to remove
- Client names on `our-clients.html` are individual `<div>` lines in
  `.client-grid` — add/remove freely
