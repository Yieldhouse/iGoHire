# Choose Arkansas — Website

Rebuild of choosearkansas.org (previously Wix) as a static Jekyll site for GitHub Pages.

## Structure
- `_config.yml` — site config
- `_includes/header.html`, `_includes/footer.html` — shared nav/footer (edit once, applies everywhere)
- `_layouts/default.html`, `_layouts/post.html` — page wrappers
- `_posts/` — blog posts (markdown)
- `assets/css/style.css` — all styling, brand colors as CSS variables at the top
- `assets/images/` — logo and images
- Top-level `.html` files — each site page (memberships.html, boardmembers.html, etc.)

## Brand tokens (in `assets/css/style.css`)
- Cream: `#FCFAF5`
- Navy: `#042952`
- Red: `#840505`
- Accent blue: `#0056B3`
- Ink/black: `#1A1A1A`
- Headings: Playfair Display · Body: Inter

## Local preview
```
bundle install
bundle exec jekyll serve
```
Then open http://localhost:4000

## Deploying to GitHub Pages
1. Create a new repo (e.g. `choose-arkansas`) under your GitHub org.
2. Push this folder as the repo contents.
3. In repo Settings → Pages, set source to the `main` branch, `/ (root)`.
4. Custom domain: once ready to cut over from Wix, add a `CNAME` file to the repo root containing `www.choosearkansas.org`, update your domain's DNS to point to GitHub Pages (A records to GitHub's IPs, or a CNAME record for `www` pointing to `<org>.github.io`), then enter the domain in Settings → Pages too.

**Note:** the `CNAME` file is intentionally *not* included in this build so the site previews cleanly at `https://yieldhouse.github.io/Choose-Arkansas/`. Adding a `CNAME` file (even before DNS is updated) makes GitHub Pages redirect the `github.io` URL straight to the custom domain, which is why the preview URL was bouncing to the (still-Wix) `choosearkansas.org`. Only add the `CNAME` file back once you're actually ready to cut over.

### `baseurl` — important
`_config.yml`'s `baseurl` must match where the site is actually served:
- **Previewing at `https://<org>.github.io/<repo-name>/`** (before DNS is cut over) → `baseurl` must be `/<repo-name>` (currently set to `/Choose-Arkansas` to match this repo's name). Without this, CSS/images/nav links all 404 and the page renders unstyled.
- **Once the custom domain `www.choosearkansas.org` is live** (DNS pointed at GitHub Pages + domain entered in Settings → Pages) → the site serves from the domain root, so `baseurl` must be set back to `""` (empty) and re-pushed. Leaving the `/Choose-Arkansas` prefix in place after the domain cutover will break the site the same way, just in reverse.

## Placeholder pages
`gtmpricing.html` (Pricing) and `HogsGiveaway.html` (Hogs Football Giveaway) are placeholders matching the current blank state of the live site. Add content to these files when ready.

## Forms
The contact/vendor forms are static HTML (no backend). Wire them up to Formspree, a mailto, or tofudown before going live.
