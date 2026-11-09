# Full Stack Open

Exercises for the [Full Stack Open](https://fullstackopen.com/) course by the University of Helsinki.

## Structure

| Directory | Contents |
| --- | --- |
| `part0/` | Sequence diagrams for the exercises (Mermaid) |
| `part1/` | React + Vite application, exercises 1.1 onwards |
| `part2/` | React + Vite application, exercises 2.1 onwards |

Each part is an independent project with its own `package.json` and `node_modules`.

## Requirements

- Node.js 20.19+ or 22.12+ (Vite 8 requirement)
- pnpm

## Running a part

```bash
cd part1
pnpm install
pnpm dev
```

The application is served at `http://localhost:5173`.

## Scripts in `part1`

```bash
pnpm dev      # development server with HMR
pnpm build    # production build in dist/
pnpm preview  # serve the production build
pnpm lint     # ESLint
```

## Progress

Exercise status per part is tracked in [EXERCISES.md](./EXERCISES.md).
