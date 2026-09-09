# The Vyzkaris Covenant — Archive

The historical records site for the Vyzkaris Covenant (a governmental/worldbuilding project for a Minecraft SMP kingdom).

## What this is right now

Just a single logs page (`index.html`) that renders entries from `logs.json` as a chronological timeline. This is the "historical records system" — a lightweight, low-maintenance way to record major Covenant events (founding, wars, treaties, successions, new Dominions) as they happen, without relying on scrolling back through Discord.

This is intentionally the first piece of what will eventually be a fuller Covenant website (Charter, structure, territory map, etc.) — not the full site yet.

## Adding a new record

Edit `logs.json` and add an entry:

```json
{
  "date": "YYYY-MM-DD",
  "title": "Short title",
  "category": "Political | Military | Diplomatic | Administrative | Cultural",
  "body": "1-3 sentences describing what happened."
}
```

Commit and push — GitHub Pages rebuilds automatically.

## Hosting

Served via GitHub Pages from the `main` branch root.
