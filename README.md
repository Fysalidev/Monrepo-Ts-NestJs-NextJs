# Monorepo TypeScript — Next.js + NestJS

Monorepo pnpm regroupant un **frontend Next.js** (App Router) et un **backend NestJS**, avec un package **shared** de types et de constantes communes.

## Structure

```
monorepo/
├── apps/
│   ├── web/    # Frontend Next.js (port 3000)
│   └── api/    # Backend NestJS (port 3001)
├── packages/
│   └── shared/ # Types et constantes partagés (utilisé par web et api)
├── docs/       # Documentation du projet
├── pnpm-workspace.yaml
├── tsconfig.base.json
└── package.json
```

## Prérequis

- Node.js ≥ 22
- pnpm ≥ 10 (`npm install -g pnpm`)

## Démarrage rapide

```bash
pnpm install
pnpm dev
```

- Frontend : http://localhost:3000
- Backend : http://localhost:3001/hello

## Scripts racine

| Commande         | Description                                  |
|------------------|----------------------------------------------|
| `pnpm dev`       | Démarre web et api en mode watch parallèle   |
| `pnpm build`     | Build tous les packages (ordre topologique)  |
| `pnpm typecheck` | Vérification TypeScript de tous les projets  |
| `pnpm test`      | Lance tous les tests                         |
| `pnpm format`    | Formate le code avec Prettier                |
| `pnpm clean`     | Supprime les dossiers de build              |

## Documentation

- [Architecture du monorepo](docs/ARCHITECTURE.md)
- [Guide de démarrage et d'ajout de fonctionnalités](docs/GETTING_STARTED.md)
- [Conventions de code](docs/CONVENTIONS.md)

## Configuration

Copier `.env.example` vers `.env` et adapter si besoin :

```bash
cp .env.example .env
```
