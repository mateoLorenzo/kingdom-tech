<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# White-label clinic rules (config/clinics/*.json)

These are **strict** rules for every new clinic landing. No deviation.

## Header logo text — `brand.name`

- `brand.name` must ALWAYS be exactly two words: `Clinica [Nombre]`.
- `[Nombre]` is the single most distinctive word of the clinic name (e.g. "Dr. Barboza" → `"Clinica Barboza"`).
- If the official name has multiple words, pick the one representative word so the result stays exactly two words.
- Keep the full official name in `seo.title`, `seo.siteName`, and `footer.copyrightName`.
- `brand.shortName` keeps the brand-distinctive form (drives the OG/favicon initial).

## Hero headline

- The hero headline must ALWAYS be `Expertos en` / `Odontologia` (two lines, accent on "Odontologia"):

```json
"headline": [
  { "text": "Expertos en\n" },
  { "text": "Odontologia", "accent": true }
]
```
