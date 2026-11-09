# AGENTS.md

Exercise repository for Full Stack Open. Each part is a standalone application.

## Layout

- `part0/`: Mermaid sequence diagrams, named `diagram_<exercise>.md`.
- `part1/`: React + Vite application, exercises 1.1 to 1.14. Source code lives in `part1/src/`.
- `part2/`: React + Vite application, exercises 2.1 onwards. Source code lives in `part2/src/`.
- New parts: create `partN/` with its own `package.json`.

## Language

- All repository content is written in English: documentation, code comments, commit messages, and identifiers.
- Chat replies may follow the user's language; repository files never do.

## Conventions

- Package manager: `pnpm`. Never generate `package-lock.json`.
- React components live in `src/App.jsx` unless the exercise requires separate files.
- No CSS files or assets by default. The course requires removing `App.css`, `index.css`, and `src/assets/`.
- `main.jsx` only mounts `App` into `#root`.
- Semicolons and single quotes, consistent with `part1/src/App.jsx`.

## Verification

Before marking an exercise as done, inside the part:

```bash
pnpm lint
pnpm build
```

## Exercise log

- `EXERCISES.md` is the single source of truth for progress.
- When an exercise is completed, add or update its row: exercise number, title, status, commit.
- Status values are `Done`, `In progress`, and `Pending`. Do not use other labels.
- Keep the table sorted by exercise number.

## Git

- One commit per exercise or per exercise set.
- Commit messages follow Conventional Commits, in English.
- `dist/` and `node_modules/` are ignored; never add them.
