# Styling

## Approach
- **Plain CSS files** — no CSS-in-JS, Tailwind, or preprocessor is configured.
- Each component should have a co-located CSS file imported directly:

    import './TodoItem.css';

## Naming
- Use **kebab-case** for CSS class names (e.g., `.todo-item`, `.add-button`).
- Prefix class names with the component name to avoid collisions:

    /* TodoItem.css */
    .todo-item { ... }
    .todo-item__text { ... }
    .todo-item--completed { ... }

  This loosely follows BEM (Block-Element-Modifier) convention.

## File Organization
- CSS files live alongside their component in `src/Components/`.
- Global styles (resets, body font, CSS custom properties) belong in `src/index.css` or `src/App.css`.

## Icons
- Use `react-icons` for all iconography. Import only the icons you need:

    import { FaPlus, FaTrash } from 'react-icons/fa';

- Do not use inline SVG or image files for common UI icons.

## General Guidelines
- Avoid inline styles except for truly dynamic values (e.g., computed widths).
- Keep selectors shallow — no more than 2 levels of nesting conceptually.
- Use `rem` or `em` for font sizes and spacing; avoid `px` for typography.
