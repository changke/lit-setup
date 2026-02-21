# AGENTS.md

This file contains guidelines and commands for agentic coding agents working in this Lit web components repository.

## Build Commands

### Primary Commands

- `npm run build` - Build the project using esbuild (outputs to `dest/`)
- `npm run lint` - Run ESLint on source files
- `npm run typecheck` - Run TypeScript compiler checks without emitting files

### Development Workflow

1. Always run `npm run typecheck` and `npm run lint` after making changes
2. Build before testing: `npm run build`
3. Serve built files: `cd dest/ && python -m http.server` then visit `http://localhost:8000`

### Testing

- No test framework is currently configured (package.json shows placeholder test script)
- When adding tests, update package.json scripts section accordingly

## Project Structure

```
src/
├── foo/foo.wc.ts    - Example Lit component
└── bar/bar.wc.ts    - Example Lit component
dest/                - Build output directory
assets/              - Static assets copied to build
build.mjs           - Custom esbuild build script
```

## Code Style Guidelines

### TypeScript/Lit Configuration

- Target: ES2023 with DOM libraries
- Module system: ESNext with bundler resolution
- Decorators: Enabled for Lit (`@customElement`, `@property`)
- Class fields: Use `useDefineForClassFields: false`

### Import Conventions

```typescript
// Lit imports - use specific imports
import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

// Node.js built-ins - use node: prefix
import {rm, cp, glob} from 'node:fs/promises';
```

### Component Structure

```typescript
@customElement('component-name')
export class ComponentName extends LitElement {
  static styles = css`
    :host {
      contain: content;
    }
    /* component-specific styles */
  `;

  @property()
  propertyName = 'defaultValue';

  render() {
    return html`
      <!-- component template -->
    `;
  }
}
```

### ESLint Rules (Key Style Points)

- Use single quotes (`'`) for strings
- No trailing commas in objects/arrays
- No space between object braces and content: `{key: value}`
- Semicolons required at end of statements
- Arrow function parentheses: `arg => expression` for single params
- Function declarations: `function name()` (no space before parentheses)
- Anonymous functions: `(arg) => {}` (space before parentheses for block body)

### Naming Conventions

- Component classes: PascalCase (e.g., `Foo`, `Bar`)
- Custom element names: kebab-case with prefix (e.g., `ui-foo`, `ui-bar`)
- Properties: camelCase
- CSS classes: kebab-case
- Files: `[name].wc.ts` for web components

### CSS Guidelines

- Always include `:host { contain: content; }` in component styles
- Use CSS-in-JS with Lit's `css` template literal
- Keep styles scoped to the component
- Use semantic color names (e.g., `darkcyan`, `darkorchid`)

### Error Handling

- TypeScript strict mode enabled via recommended config
- Use type annotations where inference isn't clear
- Handle async operations with proper error boundaries
- Validate component properties in setters if needed

### Build System Notes

- Uses custom esbuild configuration in `build.mjs`
- Entry points: All files matching `src/**/*.wc.ts`
- Output: ESM modules with code splitting to `dest/wc/`
- Assets copied from `assets/` and `index.html` to `dest/`

### Development Environment

- Node.js >= 22.17.0 required
- Uses ESLint flat config format
- TypeScript with recommended strict settings
- EditorConfig: 2-space indentation, LF line endings

## Agent Instructions

When working in this repository:

1. **Always run lint and typecheck** before considering changes complete
2. **Follow the established patterns** in existing components for consistency
3. **Use the build script** - don't call esbuild directly
4. **Test in browser** by building and serving from `dest/` directory
5. **Maintain the file naming convention** (`[name].wc.ts` for components)
6. **Keep components self-contained** with scoped styles and properties
7. **Use TypeScript decorators** for Lit features (`@customElement`, `@property`)

This is a minimal Lit setup focused on web component development with modern tooling.
