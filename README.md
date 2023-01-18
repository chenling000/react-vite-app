# Setting Up React Project with Vite

## Start project

https://vitejs.dev/guide/

> `yarn create vite`

And clean the redundant stuff......

## Set up eslint

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
