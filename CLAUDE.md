# The Vyzkaris Covenant — Project Brief

Public site for the Vyzkaris Covenant (a governmental/worldbuilding project for a Minecraft SMP kingdom). Multi-page static site, built with Eleventy (11ty), hosted on GitHub Pages via a GitHub Actions build. No server, no database, no login/admin panel — all content lives in files in this repo and is edited directly (by the user or by asking Claude), then committed and pushed like any other code change.

## Architecture decision (why 11ty, not plain HTML or Astro/Hugo)

The core requirement was: adding a page or reordering the menu means editing one well-organized file, not hunting through markup. Plain HTML can't do that without either duplicating the header/nav on every page, or fetching content client-side at runtime (no real Markdown pages, loading flash, nothing in view-source). Eleventy was chosen over Astro (component-oriented, more machinery than a prose site needs) and Hugo (Go template syntax is a rougher fit for hand-editing than Nunjucks) because it's the most "just Markdown + templates" option: pages are plain Markdown files with YAML front matter, nav/resources/gallery are plain JSON files, layouts are simple Nunjucks (`{{ }}` / `{% %}`) templates, and the build output is plain static HTML/CSS with zero client-side framework.

Hosting is still GitHub Pages only. A GitHub Actions workflow (`.github/workflows/deploy.yml`) runs `npx eleventy` on every push to `main` and deploys the built `_site/` output via GitHub's own `actions/deploy-pages` — this is not a new external service, it's the standard "build step + Pages" pattern, free on a public repo.

## Design system (carried forward from the original single-page Annals archive — do not redesign without asking)

- Colors: near-black background `#0a0a0d` / panel `#111116`, border `#26262e`, gold/bronze accent `#c9a86a` with dim shade `#8a7248`, body text `#e4e2db`, dim text `#8b8a8f`.
- Fonts: **Cinzel** (Google Fonts, loaded in `theme.css`) for headers/nav — wide letter-spacing, uppercase, Roman-inscription feel. **Georgia/Times New Roman** (system serif) for body prose. **Courier New** (system mono) for eyebrow labels, nav links, category tags, dates.
- Motifs: diamond/rotated-square sigil (header logo, Annals timeline dots) instead of circles.
- This theme is defined once in `src/assets/css/theme.css` via CSS custom properties and applies to every page through the shared layout — there is no per-page styling to keep in sync.

## File map

- `src/index.md` — homepage. Identity blurb + quick links to the other sections.
- `src/annals.md` — the original Annals timeline, migrated from client-side `fetch()` into an 11ty template that loops over `_data/logs.json` at build time. Same editing workflow as before (add an entry to the JSON, commit, push); it's just rendered at build time now instead of runtime, so there's no loading flash and the HTML is real (crawlable, visible in view-source).
- `src/resources.md` — loops over `_data/resources.json`, grouped by `category` (via the custom `groupBy` Nunjucks filter in `.eleventy.js`).
- `src/gallery.md` — loops over `_data/gallery.json`, sorted by `order`. Images referenced by filename live in `src/assets/images/gallery/`.
- `src/contact.md` — Formspree form. **The form action still has a placeholder (`YOUR_FORM_ID`) — see Pending work.**
- `src/governance/*.md` — 8 stub pages (Charter, Structure, Legion, Territory, Diplomacy, Judiciary, Recruitment, Enterprise), nested under the "Governance" nav dropdown. Each is currently just an eyebrow + title + "content coming soon" placeholder — the user has real worldbuilding drafts for these (`Documents/Vyzkaris/*.md`) but asked to scaffold the site structure first and write the real content later.
- `src/_data/nav.json` — **the single file that defines the nav menu**: labels, URLs, order, and nesting (`children`). Adding a page to the menu, reordering it, or nesting it under another entry is a change to this file only — the layout renders it recursively, no per-page nav markup exists anywhere.
- `src/_data/resources.json` — Covenant Resources entries: `{title, description, category, driveLink}`. Currently empty (`[]`) — no real resources have been published yet. Files themselves are hosted on Google Drive by the user; this only stores the metadata/links.
- `src/_data/gallery.json` — Gallery entries: `{file, caption, alt, order}`. `file` is a filename inside `src/assets/images/gallery/`. Currently empty.
- `src/_data/logs.json` — the Annals log entries, same format as the original single-page site: `{date, title, category, body}`. One seed entry exists (archive establishment).
- `src/_includes/layouts/base.njk` — the one shared layout every page renders through: `<head>`, header (sigil + title + nav), `<main>` (page content goes here), footer, nav toggle script. This is the only place the page shell exists — pages themselves are just body content.
- `src/assets/css/theme.css` — all site styling (CSS variables + nav/timeline/cards/form/gallery styles).
- `src/assets/js/nav.js` — small vanilla JS for the mobile hamburger toggle and the Governance dropdown's click-to-expand (desktop uses CSS `:hover`, mobile uses a `.open` class since there's no hover on touch).
- `.eleventy.js` — Eleventy config: input/output dirs, `pathPrefix: "/TheVyzkarisCovenant/"` (required for GitHub Pages project sites — see Deployment below), Nunjucks as the template engine for both `.md` and `.html` (not the 11ty default of Liquid, so `{{ }}`/`{% %}` syntax is consistent everywhere), and two custom filters (`groupBy` for Resources, plus Nunjucks' built-in `sort` filter is used directly for the Annals/Gallery date and order sorting).
- `.github/workflows/deploy.yml` — builds with `npm ci && npm run build`, deploys `_site/` to GitHub Pages via `actions/upload-pages-artifact` + `actions/deploy-pages`.

## Adding a page

1. Create `src/<page>.md` (or `src/<section>/<page>.md` for a nested page) with front matter: `title`, `description`, `layout: layouts/base.njk`, and optionally `wide: true` for a wider content column.
2. Write the body as Markdown (or raw HTML — both work; the layout just drops the rendered content into `<main>`).
3. Add an entry to `src/_data/nav.json` (top-level, or inside a `children` array to nest it under an existing entry). Order in the array = order in the menu.
4. Commit, push — the Actions workflow rebuilds and deploys automatically.

**One gotcha**: if a page loops over data to generate repeated HTML blocks (like Annals/Resources/Gallery do), keep the generated HTML flush against the left margin inside `{% for %}`/`{% if %}` blocks. Indenting it causes markdown-it (the Markdown-to-HTML step that runs after Nunjucks) to misdetect where the raw-HTML block starts and wraps it in a stray `<p>`, producing invalid `<p><div>...</div></p>` nesting. This bit the first draft of `annals.md` — fixed by de-indenting; see that file for the working pattern.

## Deployment

- **GitHub Pages project site** at `https://darkwizady.github.io/TheVyzkarisCovenant/` (no custom domain configured). Because it's a project site (not a `<user>.github.io` root site), every internal URL needs the `/TheVyzkarisCovenant/` prefix — handled once via `pathPrefix` in `.eleventy.js` and the `url` filter used on every `href`/`src` in the layout and content pages. **Never hardcode a root-relative link like `href="/annals/"` directly — always route it through `{{ '/annals/' | url }}`**, or it will 404 on the live project-pages URL (it would only work if this ever migrates to a custom domain or a user/org root site).
- Build source: **must be set to "GitHub Actions" in the repo's Settings → Pages** (not "Deploy from a branch") for `deploy.yml` to actually publish. This is a one-time manual step in the GitHub UI — flagged as pending below since it can't be done via git.
- Never force-push or rewrite git history without confirming with the user first (carried over from the Aerostorm project convention).

## Pending work

1. **GitHub Pages source needs to be switched to "GitHub Actions"** in the repo's Settings → Pages (github.com/DarkWizAdy/TheVyzkarisCovenant/settings/pages) — one-time manual step, not doable from here.
2. **Formspree form ID is still a placeholder** (`src/contact.md`, `action="https://formspree.io/f/YOUR_FORM_ID"`). The user needs to sign up at formspree.io (free tier), create a form, and swap in the real endpoint ID.
3. **Governance pages are stubs** — real content exists in draft form in `Documents/Vyzkaris/VYZKARIS COVENANT — *.md` (Main Idea, Structure, Legion System, Territory, Diplomacy, Judiciary, Recruitment System, State-Enterprise System) and should eventually be adapted into `src/governance/*.md`.
4. **Resources and Gallery have no real entries yet** (`src/_data/resources.json` and `gallery.json` are both `[]`). Add entries as the user has real Drive links / images to publish; gallery images themselves go in `src/assets/images/gallery/`.
5. **No custom domain configured** — site lives at the default `github.io` project-pages URL. Not in scope unless asked.
