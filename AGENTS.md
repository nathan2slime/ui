# AGENTS.md

You are an expert in JavaScript, Rspack, Rsbuild, Rslib, and library development. You write maintainable, performant, and accessible code.
Never use `any` in this project. Prefer library-provided types, generics, or `unknown` with narrowing when needed.
Prefer `type` aliases instead of `interface` for object and public type definitions unless a specific library API requires `interface`.

## TypeScript Rules

### Imports

- Always prefer absolute imports using the `@/` alias that points to `src/`.
- Avoid long relative imports such as `../../../components/Button`.
- Use relative imports only for files that are very close within the same module, when that clearly improves readability.
- All files and folders in the project must use `kebab-case`.

### Types

- Define types with `type` instead of `interface`.
- Prefer explicit, domain-oriented names such as `UserProfile`, `ButtonProps`, and `ApiResponse`.
- Extract reusable types to avoid duplication and keep consistency across files.
- When a group of object properties is entirely optional, prefer wrapping that object shape with `Partial<...>` instead of repeating `?:` on each field.
- For prop objects or config objects where every property is optional, prefer `Partial<...>` specifically to reduce visual noise from repeated `?:`.
- Prefer `VoidFunction` over `() => void` for callback types that do not receive arguments.
- For component prop types that include `children`, prefer `PropsWithChildren<...>` instead of manually declaring `{ children: ReactNode }`.
- When a type represents props, parameters, or an important return value, declare it as a named type instead of leaving everything inline.
- Keep shared and domain types in a dedicated `types/` folder.
- Prefer `.d.ts` files for project type declarations and reusable type definitions.

### React Components

- Prefer the compose pattern when building React components.
- When a component exposes multiple related subparts, prefer the compound pattern with explicit static subcomponents such as `Component.Root`, `Component.Label`, and `Component.Item`.
- Build components in small, reusable pieces that can be combined instead of concentrating multiple responsibilities in a single component.
- When a component exposes related subparts, prefer composition-friendly APIs that make those pieces explicit and reusable.
- Always prefer icons from the installed project icon libraries before creating custom SVGs or inline icon components.
- Keep React features split into small files, with one component per file whenever possible.
- Avoid large feature components that mix layout, state orchestration, rendering helpers, and domain logic in the same file.
- Move reusable or stateful component logic into dedicated hooks when that logic is not purely presentational.
- Prefer custom hooks for orchestration, derived state, async effects, and browser-specific behavior instead of keeping that logic inline in component files.
- Avoid inline event handlers with non-trivial logic in JSX. Extract them into dedicated handlers or hooks and memoize them appropriately with `useCallback`, `useMemo`, or library-approved alternatives when needed.
- Keep hooks in small focused files with names in `kebab-case`, colocated with the feature when appropriate.

### Functions

- Prefer arrow functions over `function` declarations.
- Use named arrow functions assigned to `const` for exported and reusable functions.
- Only use `function` syntax when there is a specific technical reason to do so.
- Prefer one reusable function per file when extracting domain logic, formatters, browser adapters, and data-access helpers.
- Separate utility functions from component files so UI modules stay focused on composition and rendering.

### TSDoc

- Every exported type should have TSDoc when it is not trivial.
- Every exported function should have TSDoc describing its purpose, parameters, return value, and relevant side effects.
- Every exported hook should have TSDoc describing the behavior, parameters, return value, and relevant state transitions or side effects.
- Public component prop types and model types must use richer TSDoc with concrete property descriptions and `@example` blocks when that improves discoverability.
- Prefer standard TSDoc utility tags such as `@example`, `@prop`, `@defaultValue`, `@remarks`, and `@deprecated` when they add real value for library consumers.
- For more important types and functions, document context, constraints, and expected behavior.
- Prefer short, clear, useful descriptions; avoid generic comments that only repeat the symbol name.
- Write all TSDoc in English.

### Expected Example

```ts
import { Button } from "@/components/button";

/**
 * Represents the normalized student data displayed in the UI.
 */
export type StudentCardData = {
  id: string;
  name: string;
  classroom: string;
};

/**
 * Converts the raw API response into the format used by the student card.
 *
 * @param input Data received from the API.
 * @returns Normalized data ready for rendering.
 */
export const mapStudentCardData = (input: StudentApiResponse): StudentCardData => {
  return {
    id: input.id,
    name: input.name,
    classroom: input.classroom,
  };
};
```

## Commands

- `pnpm run build` - Build the library for production
- `pnpm run dev` - Turn on watch mode, watch for changes and rebuild the library
- `git commit -m "<message>"` - Create a commit with a message

## Git Rules

- Commit messages must follow the Conventional Commits specification (for example: `feat: ...`, `fix: ...`, `chore: ...`).

## Docs

- Rslib: https://rslib.rs/llms.txt
- Rsbuild: https://rsbuild.rs/llms.txt
- Rspack: https://rspack.rs/llms.txt
- Rspress: https://rspress.rs/llms.txt
- Rstest: https://rstest.rs/llms.txt

## Tools

### Notifications (pygmy)

- Use `pygmy` to notify the user via Telegram. Messages are Markdown and are converted to Telegram HTML.
- Use notifications when the user says "ping me", "notify me", or "let me know when done".
- Use notifications when completing a long-running task while the user might be away.
- Use notifications when blocked and user input is required.
- Reuse a short, descriptive topic name chosen at the start of the session for all related notifications.
- Do not notify for every small step; only send meaningful milestones or blockers, or when the user explicitly asks.
- Usage:

```bash
pygmy --topic "<topic>" "<message>"
pygmy --topic "<topic>" --stdin <<'EOF'
<long message>
EOF
```

### Biome

- Run `pnpm run lint` to lint your code
- Run `pnpm run format` to format your code

### Storybook

- Run `pnpm run storybook` to start Storybook development server
- Run `pnpm run build:storybook` to build Storybook for production
- Whenever you add a new component, create corresponding Storybook stories in the same task.

### Rspress

- Run `pnpm run doc` to start the Rspress documentation dev server, which will also start Rslib in watch mode
- Run `pnpm run doc:build` to build the documentation
- When adding a new component, always update the docs in `docs/` within the same task.

### Rstest

- Run `pnpm run test` to run tests
- Run `pnpm run test:watch` to run tests in watch mode
- Prefer organizing test files with `describe(...)` blocks named after the component, hook, or utility under test, even when the file has only a few cases.
