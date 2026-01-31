# CCG.uz portfolio website

[![CI](https://github.com/verstack-uz/ccg-uz-react/actions/workflows/vitest.yml/badge.svg)](https://github.com/verstack-uz/ccg-uz-react/actions/workflows/vitest.yml)

Staging environment: [ccg-uz-react.qobiljon-toshnazarov.workers.dev](https://ccg-uz-react.qobiljon-toshnazarov.workers.dev/)

## Technologies used:

- TypeScript
- i18next
- React
- Shadcn: [ui.shadcn.com](https://ui.shadcn.com/)
  - Magic UI: [magicui.design](https://magicui.design/)
  - Kibo UI: [kibo-ui.com](https://www.kibo-ui.com/)
  - commerce-ui: [ui.stackzero.co](https://ui.stackzero.co/)
- Vite (with a QR code plugin)
- Vitest + jsdom
- Eslint + typescript-eslint + prettier
- Github Actions (CI)
- Cloudflare Pages, Wrangler (CD) - [dashboard](https://dash.cloudflare.com/b3d4de7bc82c62138a104f97c825bdb2/workers/services/view/ccg-uz-react/production)

## Commands

- `npm run test:coverage`
- `npx i18next-cli status`
- `npx i18next-cli extract`
- `npm run build && npm run deploy`
