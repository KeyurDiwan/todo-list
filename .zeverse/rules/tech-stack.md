# Tech Stack

## Language & Runtime
- **JavaScript** (ES6+) — no TypeScript in this project
- **Node.js** runtime for tooling (Create React App)

## Framework
- **React 17** (`react@^17.0.2`, `react-dom@^17.0.2`)
- Bootstrapped with **Create React App** (`react-scripts@5.0.0`)

## Key Dependencies
| Package | Purpose |
|---|---|
| `react-icons@^4.3.1` | Icon library (FontAwesome, Material, etc.) |
| `react-icon@^1.0.0` | Legacy icon package (likely unused — prefer `react-icons`) |
| `@testing-library/react@^12.1.2` | Component testing utilities |
| `@testing-library/jest-dom@^5.16.1` | Custom DOM matchers for Jest |
| `@testing-library/user-event@^13.5.0` | Simulating user interactions in tests |
| `web-vitals@^2.1.2` | Performance metrics reporting |

## Build & Dev Commands

| Command | Description |
|---|---|
| `npm start` | Start dev server (default port 3000) |
| `npm run build` | Production build to `build/` |
| `npm test` | Run Jest tests in watch mode |
| `npm run eject` | Eject CRA config (irreversible) |

## ESLint
- Extends `react-app` and `react-app/jest` presets (configured in `package.json` under `eslintConfig`)
- No custom `.eslintrc` file — all config lives in `package.json`

## Notes
- No CSS preprocessor or utility-CSS framework is declared as a dependency; the project likely uses plain CSS files.
- No router dependency — the app is a single-view todo list.
- No state management library — React local state (`useState` / `useReducer`) is expected.
