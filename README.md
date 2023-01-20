# Setting Up React Project with Vite

## Start Project

https://vitejs.dev/guide/

> `yarn create vite`

And clean the redundant stuff......

## Set Up ESlint

- Install and init eslint

  > yarn add --dev eslint

  > npx eslint --init

- Import airbnb eslint style

  https://www.npmjs.com/package/eslint-config-airbnb

  > npx install-peerdeps --dev eslint-config-airbnb

  Then add `"extends": ["airbnb", "airbnb/hooks"]` to your .eslintrc and remove `"eslint:recommended"`.

- Import airbnb style for typescript

  https://www.npmjs.com/package/eslint-config-airbnb-typescript

  > yarn add --dev eslint-config-airbnb-typescript

  Then add `"extends": ["airbnb-typescript"]` to your .eslintrc,

  And configure the ESLint TypeScript parser like

  ```
  parserOptions: {
    project: './tsconfig.json'
  }
  ```

- Fix the Parsing error

  Configure the tsconfig.json's include section like

  ```
  "include": ["src", ".eslintrc.cjs"],
  ```

## Set Up Prettier

- Install required packages

  > yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier

- Add configuration file

  https://prettier.io/docs/en/configuration.html

  .prettierrc.cjs

  ```
  // prettier.config.js or .prettierrc.js
  module.exports = {
    trailingComma: 'es5',
    tabWidth: 2,
    semi: true,
    singleQuote: false,
  }
  ```

- Configure the .eslintrc.cjs like

  ```
  {
    "plugins": ["prettier"],
    "extends": ["plugin:prettier/recommended"]
  }
  ```

## Set Up Vitest

https://vitest.dev/guide/

- Install vitest

  > yarn add --dev vitest

- Configure vite.config.ts like

  https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib-msw/vite.config.ts

  ```
  /// <reference types="vitest" />
  /// <reference types="vite/client" />

  import react from '@vitejs/plugin-react'
  import { defineConfig } from 'vite'

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/setupTests.ts'],
    },
  })
  ```

- Fix the Parsing error

  Configure the tsconfig.json's include section like

  ```
  "include": [... , "vite.config.ts"],
  ```

- Ignore the eslint import/no-extraneous-dependencies rule for vite.config.ts

  `/* eslint-disable import/no-extraneous-dependencies */`

- Install related testing libraries

  > yarn add --dev @testing-library/react @testing-library/jest-dom

- Add setupTests.ts

  https://markus.oberlehner.net/blog/using-testing-library-jest-dom-with-vitest/

  ```
  /* eslint-disable import/no-extraneous-dependencies */
  import matchers from '@testing-library/jest-dom/matchers';
  import { expect } from 'vitest';

  expect.extend(matchers);
  ```

- Guidance for writing testing code

  https://testing-library.com/docs/queries/about

## Set Up React-Router

- Install react-router-dom

  https://reactrouter.com/en/main/start/tutorial#setup

  > react-router-dom localforage match-sorter sort-by

- Wrap App with router component
