# Vyzkaris Covenant Archive — Handoff Notes

## Purpose
This repo is the Vyzkaris Covenant's historical records site — task item "Design historical records system" from the broader Vyzkaris Covenant worldbuilding project. It exists so Covenant history (once the Minecraft server launches) gets recorded somewhere durable and browsable, instead of living only in Discord scrollback.

## Current state
- `index.html` — single page, dark/sci-fi/Roman-inspired styling matching the Covenant's aesthetic (order, bureaucracy, strength). Fetches and renders `logs.json` as a chronological timeline.
- `logs.json` — the actual log entries. One seed entry exists (archive establishment). No real Covenant/server history exists yet since the server hasn't launched.
- No build step — pure static HTML/CSS/JS, served directly via GitHub Pages from `main`.

## Design system
- Background: near-black (`#0a0a0d` / `#111116`), gold/bronze accent (`#c9a86a`), dim text (`#8b8a8f`).
- Headers use wide letter-spacing + uppercase, evoking Roman inscriptions ("THE VYZKARIS COVENANT", "THE ANNALS").
- Diamond/rotated-square motifs (`.sigil`, timeline dots) instead of circles — sharper, less generic.
- Serif body font (Georgia) for a formal/archival feel.

## Pending / not yet built
- This is deliberately just the logs page for now. The user wants a fuller Covenant site eventually (Charter, First Circle structure, territory, etc.) but that's explicitly future work, not now.
- No real log entries exist yet — add them as actual Covenant/server events happen, following the format in `README.md`.
- No custom domain configured.

## Working conventions carried over from the Aerostorm project
- Never force-push or rewrite history without confirming with the user first.
- Keep large binary assets (images, PDFs, source docs) out of git history — add to `.gitignore` if any get added later, don't just avoid committing them once.
