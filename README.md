# The Vyzkaris Covenant

The public site for the Vyzkaris Covenant (a governmental/worldbuilding project for a Minecraft SMP kingdom): Home, Announcements (historical record), Governance (Charter/Structure/Legion/etc.), Covenant Resources, Gallery, and Contact.

Static site built with [Eleventy](https://www.11ty.dev/), hosted on GitHub Pages via a GitHub Actions build. No server, no database, no login — see `CLAUDE.md` for the full architecture rationale and file map.

## Local development

```
npm install
npm start
```

Opens a local dev server (with live reload) at the URL printed in the terminal.

## Building

```
npm run build
```

Outputs the static site to `_site/`. This is what the GitHub Actions workflow runs on every push to `main`.

## Editing content

- **Add or edit a page**: create/edit a `.md` file under `src/` (or `src/governance/` for a nested page), then add/edit its entry in `src/_data/nav.json` to control where it shows up in the menu.
- **Reorder or nest menu items**: edit `src/_data/nav.json` only.
- **Add an Announcements record**: add an entry to `src/_data/logs.json`:
  ```json
  { "date": "YYYY-MM-DD", "title": "Short title", "category": "Political | Military | Diplomatic | Administrative | Cultural", "body": "1-3 sentences." }
  ```
  Citizens can also propose records themselves via the Google Form linked on the Announcements page — set its URL once in `src/_data/site.json`'s `recordsFormUrl` field. Submissions still need to be manually added to `logs.json` by an admin; the form doesn't write to the site automatically (this is a static site with no backend).
- **Add a Covenant Resource**: add an entry to `src/_data/resources.json`:
  ```json
  { "title": "...", "description": "...", "category": "...", "driveLink": "https://drive.google.com/..." }
  ```
- **Add a gallery image**: drop the image file in `src/assets/images/gallery/`, then add an entry to `src/_data/gallery.json`:
  ```json
  { "file": "filename.jpg", "caption": "...", "alt": "...", "order": 1 }
  ```

Commit and push — GitHub Actions rebuilds and deploys automatically.

## Hosting

GitHub Pages, served from the Actions-built output (Settings → Pages → Source: **GitHub Actions**). No custom domain configured — see `CLAUDE.md` → Pending work.
