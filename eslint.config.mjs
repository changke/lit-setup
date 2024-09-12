// @ts-check
import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    name: 'my/typescript-lint',
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked
    ],
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  {
    name: 'my/javascript-lint',
    files: ['*.mjs'],
    extends: [eslint.configs.recommended],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },
  {
    name: 'my/ignores',
    ignores: ['dest/*']
  }
);
