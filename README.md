# Monorepo with PNPM and NX

## PNPM

### Initialize the Monorepo with PNPM
- `$ pnpm init`

### Create and execute an app
- Create: `$ pnpm create-remix@latest`
- Execute `dev`: `$ pnpm run dev`

### Add dependencies for a specific app wih `--filter` flag
- `$ pnpm add --filter shared-ui react`
- `$ pnpm add --filter shared-ui typescript -D`

### Execute scripts from npm in a specific app
- `$ pnpm --filter shared-ui build`

### Adds a package to some App
- `$ pnpm add shared-ui --filter remix-app --workspace`

### Runs every `build` script in app / packages
- Recursively & Sequential: `$ pnpm run -r build`
- Recursively & Parallel: `$ pnpm run --parallel -r build`

### Install NX as a Dependency of Workspace
- `$ pnpm add nx -D -w`

## NX

### Build App or Package
- `$ npx nx build shared-ui`
- `$ npx nx build remix-app`
- `$ npx nx build react-app`

### Graph of dependencies
- `$ npx nx graph`

## Affected changes and cache
- `$ npx nx affected:graph`
- `$ npx nx affected:build`

## Run many commands (affected or not)
- `$ npx nx run-many --target=build --all`