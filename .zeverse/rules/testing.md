# Testing

## Framework
- **Jest** (bundled with Create React App via `react-scripts test`)
- **React Testing Library** (`@testing-library/react@^12`) for rendering and querying components
- **jest-dom** (`@testing-library/jest-dom@^5`) for DOM-specific matchers like `toBeInTheDocument()`
- **user-event** (`@testing-library/user-event@^13`) for simulating realistic user interactions

## Running Tests

| Command | Description |
|---|---|
| `npm test` | Run tests in interactive watch mode |
| `CI=true npm test` | Run tests once (for CI environments) |
| `CI=true npm test -- --coverage` | Run tests with coverage report |

## File Naming & Location
- Test files use the suffix `.test.js` (e.g., `App.test.js`).
- Co-locate test files next to the component they test, or place them in a `__tests__/` directory inside `src/`.

    src/
    ├── Components/
    │   ├── TodoItem.js
    │   └── TodoItem.test.js    # co-located
    └── App.test.js

## Writing Tests

Follow the **Arrange → Act → Assert** pattern. Query elements by accessible roles or text, not by class names or test IDs (use test IDs only as a last resort).

Example:

    import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import '@testing-library/jest-dom';
    import TodoItem from './TodoItem';

    test('calls onDelete when delete button is clicked', () => {
      const handleDelete = jest.fn();
      render(<TodoItem text="Buy milk" onDelete={handleDelete} />);

      userEvent.click(screen.getByRole('button', { name: /delete/i }));

      expect(handleDelete).toHaveBeenCalledTimes(1);
    });

## Best Practices
- Prefer `screen.getByRole`, `screen.getByText`, and `screen.getByLabelText` over `getByTestId`.
- Use `userEvent` instead of `fireEvent` for more realistic interaction simulation.
- Import `@testing-library/jest-dom` in each test file (or in `src/setupTests.js`, which CRA provides by default).
- Keep tests focused — one behavioral assertion per test when practical.
