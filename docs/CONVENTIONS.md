# Conventions de code

## TypeScript

- `strict: true` et `noUncheckedIndexedAccess` activés partout (hérités de `tsconfig.base.json`).
- Cible : ES2022.
- API (`apps/api`) : ESM + `moduleResolution: NodeNext` → les imports relatifs dans le code source doivent utiliser l'extension **`.js`**.
- Web (`apps/web`) : `moduleResolution: bundler`, alias `@/*` vers `src/*`.

## Nommage

- Packages npm préfixés : `@monorepo/web`, `@monorepo/api`, `@monorepo/shared`.
- Dépendances internes déclarées avec `workspace:*`.
- Composants React en `PascalCase`, fonctions utilitaires en `camelCase`.

## Backend (NestJS)

- Un module par domaine dans `apps/api/src`.
- Les chemins d'API sont définis **uniquement** dans `packages/shared` (`API_ROUTES`) — jamais en dur dans les controllers.
- Les réponses suivent l'enveloppe `ApiResult<T>` (`{ success, data }`).

## Frontend (Next.js)

- App Router uniquement (`src/app`).
- Fonctions d'appel HTTP centralisées dans `src/lib/api.ts`.
- `cache: 'no-store'` pour les appels dynamiques vers l'API.

## Style et formatage

- Prettier à la racine (`pnpm format`).
- Pas de commentaires dans le code ; la documentation vit dans `docs/`.

## Commits

Format Conventional Commits : `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`.
