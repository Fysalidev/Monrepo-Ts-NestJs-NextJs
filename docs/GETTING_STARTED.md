# Guide de démarrage

## 1. Installation

```bash
pnpm install
```

## 2. Développement

```bash
pnpm dev
```

- web : http://localhost:3000
- api : http://localhost:3001/hello

Ou un seul projet :

```bash
pnpm --filter @monorepo/web dev
pnpm --filter @monorepo/api dev
```

## 3. Ajouter un endpoint API + l'utiliser côté web

1. **Types** : ajouter l'interface dans `packages/shared/src/index.ts` et une route dans `API_ROUTES`, puis `pnpm --filter @monorepo/shared build`.
2. **Backend** : ajouter le controller/méthode dans `apps/api/src`, en important la route depuis `@monorepo/shared`.
3. **Frontend** : ajouter une fonction `fetch...` dans `apps/web/src/lib/api.ts` qui consomme le type partagé.

Exemple — endpoint `health` :

```ts
// packages/shared/src/index.ts
export interface HealthResponse {
  status: 'ok';
}
export const API_ROUTES = { hello: '/hello', health: '/health' } as const;
```

```ts
// apps/api/src/health.controller.ts
import { Controller, Get } from '@nestjs/common';
import { API_ROUTES, HealthResponse } from '@monorepo/shared';

@Controller()
export class HealthController {
  @Get(API_ROUTES.health)
  getHealth(): HealthResponse {
    return { status: 'ok' };
  }
}
```

```ts
// apps/web/src/lib/api.ts
export async function fetchHealth(): Promise<HealthResponse | null> {
  const res = await fetch(`${API_BASE_URL}${API_ROUTES.health}`, { cache: 'no-store' });
  return res.ok ? res.json() : null;
}
```

## 4. Build de production

```bash
pnpm build
pnpm --filter @monorepo/api start   # démarre l'API compilée
pnpm --filter @monorepo/web start   # démarre le frontend compilé
```

## 5. Vérifications

```bash
pnpm typecheck
pnpm test
```
