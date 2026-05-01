# Conventions

## Folder Layout

    .
    ├── public/          # Static assets & index.html
    ├── src/
    │   ├── Components/  # React components (PascalCase folder)
    │   ├── App.js       # Root component (CRA default)
    │   ├── index.js     # Entry point
    │   └── ...
    └── package.json

## Naming Conventions

| Entity | Convention | Example |
|---|---|---|
| Component folder | PascalCase | `src/Components/` |
| Component files | PascalCase `.js` | `TodoItem.js` |
| CSS files | Match component name | `TodoItem.css` |
| Helper / utility files | camelCase | `helpers.js` |
| Constants | UPPER_SNAKE_CASE | `const MAX_ITEMS = 100` |

## Component Patterns
- Use **functional components** with hooks (`useState`, `useEffect`).
- One component per file; export as the default export.
- Keep components in `src/Components/`. Flat structure is fine given the project size — no deep nesting needed.

Example component structure:

    // src/Components/TodoItem.js
    import React from 'react';
    import './TodoItem.css';

    const TodoItem = ({ text, onDelete }) => {
      return (
        <div className="todo-item">
          <span>{text}</span>
          <button onClick={onDelete}>Delete</button>
        </div>
      );
    };

    export default TodoItem;

## Import Style
- React and library imports first, then local component imports, then CSS imports.
- Use **relative paths** for local imports (e.g., `import TodoItem from './Components/TodoItem'`).
- Prefer named imports for icons from `react-icons`:

    import { FaTrash, FaCheck } from 'react-icons/fa';

## Module Pattern
- Default exports for components.
- No barrel files (`index.js` re-exports) — import directly from the component file.

## General
- No TypeScript — plain `.js` files throughout.
- Keep the `public/` folder minimal; only CRA-generated files and static assets.
