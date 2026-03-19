// @ts-check
import {defineConfig} from 'eslint/config';
import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import {configs} from 'eslint-plugin-lit';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
  {
    name: 'my/typescript-lint',
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      configs['flat/recommended'],
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked
    ],
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parserOptions: {
        projectService: true
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
    ignores: ['dest/**']
  },
  {
    name: 'my/coding-styles',
    files: ['**/*.js', '**/*.mjs', '**/*.ts'],
    extends: [stylistic.configs.customize({
      blockSpacing: false,
      braceStyle: '1tbs',
      semi: true
    })],
    rules: {
      '@stylistic/arrow-parens': ['error', 'as-needed', {requireForBlockBody: false}],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/object-curly-spacing': ['error', 'never'],
      '@stylistic/quotes': ['warn', 'single'],
      '@stylistic/quote-props': 0,
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/space-before-function-paren': ['error', {anonymous: 'ignore', asyncArrow: 'always', named: 'never'}]
    }
  }
]);
