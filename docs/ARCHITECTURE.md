# Architecture

## Vue d'ensemble

Le monorepo est géré par **pnpm workspaces**. Trois projets :

| Projet            | Nom                | Description                                      |
| ----------------- | ------------------ | ------------------------------------------------ |
| `apps/web`        | `@monorepo/web`    | Frontend Next.js 15 (App Router, React 19)       |
| `apps/api`        | `@monorepo/api`    | Backend NestJS 11                                |
| `packages/shared` | `@monorepo/shared` | Types TS et constantes partagés entre web et api |

## Flux de dépendances

```
apps/web  ──► packages/shared ◄── apps/api
```

- `apps/api` consomme `@monorepo/shared` via `workspace:*` et importe `API_ROUTES`, `HelloResponse`, `ApiResult`.
- `apps/web` consomme `@monorepo/shared` et `apps/api` via HTTP (`fetch` dans `src/lib/api.ts`).
- `packages/shared` est le **seul** point de couplage entre les deux apps : toute interface d'API doit y être définie.

## Compilation TypeScript

- `tsconfig.base.json` : configuration commune (strict mode, ES2022, `noUncheckedIndexedAccess`).
- `packages/shared` : compile en ESM (`module: NodeNext`) vers `dist/`.
- `apps/api` : compile en ESM vers `dist/` ; imports relatifs avec extension `.js` (requis par NodeNext).
- `apps/web` : `moduleResolution: bundler`, pas d'émission (Next.js gère le build) ; `transpilePackages: ['@monorepo/shared']` dans `next.config.ts`.

## Réseau

| Service       | Port |
| ------------- | ---- |
| Next.js (web) | 3000 |
| NestJS (api)  | 3001 |

Le frontend appelle l'API via `API_BASE_URL` (défaut `http://localhost:3001`). En server-side rendering, l'URL doit être joignable depuis le process Next.js.

## Ajouter une dépendance

```bash
# racine (outillage)
pnpm add -w -D <pkg>

# un projet précis
pnpm --filter @monorepo/web add <pkg>
```

## Filtres pnpm utiles

```bash
pnpm --filter @monorepo/api dev        # dev sur l'api uniquement
pnpm --filter @monorepo/shared build   # build du package shared
pnpm -r --parallel dev                 # dev partout
```
