# React To-do App

A small, local-first to-do list built with React, TypeScript, and Vite. Add, complete, and remove tasks; the list is stored in the browser's local storage. No account or server is required.

## Run locally

Requires Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

Run `npm test`, `npm run build`, and `npm audit --audit-level=high` before publishing changes. The older Create React App experiments remain under `legacy/` for reference and are not part of the current build.

No license is granted in this repository.

## Reliability

Invalid stored tasks and duplicate IDs are ignored. If browser storage is blocked or full, editing continues in the current tab and an accessible warning explains that changes may be lost on reload. A successful save clears the warning.
