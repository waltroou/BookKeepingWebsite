# Johnny Roou Accounting & Advisory

Static Next.js website for Johnny Roou Accounting & Advisory.

## Local Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Contact Form Setup

The site is configured for a static Render deployment, so the inquiry form uses
Formspree instead of a backend server. The current live endpoint is configured
in `src/config/site.ts`.

1. Create a Formspree form at `https://formspree.io`.
2. Set the receiving email to `johnroou68@gmail.com`.
3. Copy the Formspree endpoint. It should look like:

```text
https://formspree.io/f/your-form-id
```

4. Replace the placeholder in `src/config/site.ts`:

```ts
formEndpoint: "https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID",
```

with the real endpoint.

The Formspree form ID is not a secret API key. Do not add private API keys to
the frontend.

## Checks

```bash
npm run lint
npm run build
```
