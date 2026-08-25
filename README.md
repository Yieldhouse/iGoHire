# iGoHire — site redesign

Jekyll site. Header and footer are `_includes/header.html` and
`_includes/footer.html`, and both pull their links from
**`_data/nav.yml`** — that's the only file you need to touch to add,
remove, or reorder a link anywhere on the site.

## What changed from the old Google Sites version

- Full visual redesign: navy/ink + brass palette, Fraunces (display)
  + Inter (body) instead of the default Google Sites look
- Single-source nav (`_data/nav.yml`) instead of hand-editing every page
- Header logo/nav/CTA sit in a true left / center / right split, with
  the real "iGoHire" wordmark logo (`assets/img/logo-light-bg.png` in
  the header, `logo-dark-bg.png` in the footer — see below)
- Sticky header with a real dropdown for Services > Employers / Aspirant
- "Listings" removed from the header and footer nav (the page itself
  still exists at `/listings/` if you want to re-link it later)
- Brand shortened to "iGoHire" everywhere (was "iGoHireLeaders")
- Two video placeholders (home page + Aspirant page) — swap
  `_includes/video-placeholder.html`'s usage for a real `<iframe>`
  embed once you have final video files/links
- Leadership photos are placeholder initials (MA / JJ) — swap the
  `.avatar` divs in `about.html` for real headshots when you have them
- All existing Fillout form links (schedule consultation, build resume,
  submit resume, vacancy listing, job applications) carried over as-is
- Copy across every page matches what's actually on the live Google
  Site — nothing invented beyond real design/layout structure

## Logo files

`assets/img/logo-light-bg.png` and `logo-dark-bg.png` were generated
from your uploaded wordmark (it only had opaque white + brass strokes
on a transparent background, so it was invisible on white). The
light-bg version recolors the white strokes to ink-navy so it reads
on the light header; the dark-bg version is your original file,
unmodified, used on the navy footer. If you get a proper vector/SVG
version of the logo later, swap these two PNGs out directly — no
other file needs to change.

## Baseurl — important if you move off the current GitHub Pages URL

`_config.yml` currently has:
```
url: "https://yieldhouse.github.io"
baseurl: "/iGoHire"
```
This matches a GitHub Pages project page at
`yieldhouse.github.io/iGoHire`. If you later point a custom domain
(e.g. igohire.com) at this site, set `baseurl: ""` and `url` to the
custom domain — otherwise every asset and nav link will 404.

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
