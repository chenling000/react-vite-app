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
