# Design Bites

- [What is this?](#what-is-this)
- [Setup New Project](#setup-new-project)
  - [Vite Project with React](#vite-project-with-react)
  - [Tailwind Setup](#tailwind-setup)
  - [Prettier and ESLint](#prettier-and-eslint)
  - [Husky and Lint Staged](#husky-and-lint-staged)
  - [Storybook](#storybook)
  - [Chromatic](#chromatic)
- [Dependencies](#dependencies)

## What is this?

There are multiple UI libraries out there including Bootstrap, Angular Material, Material UI, ect. Storybook is a library that allows you to make your own UI Library. I want control over my UI library to tweak components without a lot of work. Therefore here is my library where I take the code I like and place it here for reusability. This repository is also guide to seting up a new project and environment with all my favorite tools.

## Setup New Project

### Vite Project with React

[Get Started With Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

- Run in CLI `npm create vite@latest`
- Name your new project
- Choose react for the vite project
- Go into your new project folder and run `npm install`
- Run `npm install react-dom react-router-dom sass react-icons`
- Create README.md in your root folder to start documentation
- Add default server open to vite.config.js [Vite Serever](https://vitejs.dev/config/#server-open)
  ```
  server: {
    open: '/',
  },
  ```
- In the package.json, change script "dev" to "start"
- Run CLI command `npm start` and React + Vite App should open up

### Tailwind Setup

- Install tailwind and other classes
  ```
  npm install -D tailwindcss postcss autoprefixer
  ```
- Initiate tailwing config
  ```
  npx tailwindcss init -p
  ```
- Tailwind config file

  ```
  /** @type {import('tailwindcss').Config} */
  module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/**/*.{js,jsx,ts,tsx}',
    './src/**/**/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      'sm': '500px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1920px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: 'transparent',
      primary: 'var(--primary)',
      onPrimary: 'var(--on-primary)',
      primaryContainer: 'var(--primary-container)',
      onPrimaryContainer: 'var(--on-primary-container)',
      secondary: 'var(--secondary)',
      onSecondary: 'var(-on-secondary)',
      secondaryContainer: 'var(--secondary-container)',
      onSecondaryContainer: 'var(--on-secondary-container)',
      tertiary: 'var(--tertiary)',
      onTertiary: 'var(--on-tertiary)',
      tertiaryContainer: 'var(--tertiary-container)',
      onTertiaryContainer: 'var(--on-tertiary-container)',
      error: 'var(--error)',
      onError: 'var(--on-error)',
      errorContainer: 'var(--error-container)',
      onErrorContainer: 'var(--on-error-container)',
      background: 'var(--background)',
      onBackground: 'var(--on-background)',
      surfaceVariant: 'var(--surface-variant)',
      onSurfaceVariant: 'var(--on-surface-variant)',
      outline: 'var(--outline)',
      surface1: 'var(--surface-1)',
      surface2: 'var(--surface-2)',
      surface3: 'var(--surface-3)',
      surface4: 'var(--surface-4)',
      surface5: 'var(--surface-5)',
      navigation: 'var(--navigation-bar)',
      disabled: 'var(--disabled)',
    },
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      'xs': '12px',
      'sm': '14px',
      'tiny': '12px',
      'base': '16px',
      'lg': '20px',
      'xl': '22px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '36px',
      '6xl': '45px',
      '7xl': '57px',
    },
    fontWeight: {
      'hairline': 100,
      'extra-light': 100,
      'thin': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'extra-bold': 800,
      'black': 900,
    },
    borderRadius: {
      'none': '0',
      'sm': '2px',
      'DEFAULT': '4px',
      'md': '6px',
      'lg': '8px',
      'xl': '12px',
      '2xl': '16px',
      '3xl': '24px',
      'full': '9999px',
      'large': '12px',
    },
  },
  plugins: [],
  };
  ```

- Add tailwind classes to index.scss
  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

### Prettier and ESLint

[Dev Prettier and ESLint Setup](https://dev.to/knowankit/setup-eslint-and-prettier-in-react-app-357b)

- Run `npm install eslint --save-dev`
- Create .eslintrc.json by running `npx eslint --init`
- Follow directions to get started
- Replace content in .eslintrc.js file with content in this .eslintrc.js or follow directions on Resource
- Run `npm install eslint-config-prettier eslint-plugin-prettier prettier --save-dev `
- Create .prettierrc and paste the below code:

```
{
  "semi": true,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "es5",
  "quoteProps": "consistent",
  "htmlWhitespaceSensitivity": "ignore"
}
```

- Create .prettierignore and paste the below code:

```
node_modules
storybook-static
build
.github
```

- Add the following scripts to your package.json:

```
"lint": "eslint .",
"lint:fix": "eslint --fix",
"format": "prettier --write './**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc",
```

- Run scripts `npm run format` and `npm run lint` to make sure they are working

### Husky and Lint Staged

[Prettier Resource](https://prettier.io/docs/en/precommit.html)

- Run `git init`
- Connect to remote repo on github with `git remote add origin REPO`
- Push code to main branch on remote repo
- Run `npx mrm@2 lint-staged` to install husky and lint-staged. this will create a script in package.json and create .husky directory
- Change lint-staged script in package.json to be:

```
  "lint-staged": {
    "**/*.{js,jsx}": [
      "npm run lint",
      "npm run format"
    ]
  },
```

- Feel free to go into pre-commit file to add tests
- Go ahead and git commit to see pre-commit hook work in action

### Storybook

[Storybook Blog Post](https://storybook.js.org/blog/storybook-for-vite/)
[@storybook/builder-vite Repo](https://github.com/storybookjs/builder-vite)

- Run `npx sb init --builder @storybook/builder-vite`
- Change stories array in .storybook/main.js to be:

```
  "stories": [
    '../src/stories/*.stories.mdx',
    '../src/stories/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/**/**/*.stories.mdx',
    '../src/stories/**/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/**/**/**/*.stories.mdx',
    '../src/stories/**/**/**/*.stories.@(js|jsx|ts|tsx)'
  ],
```

- Run `npm install @storybook/addon-a11y --save-dev`
- Add the addon-a11y to the .storybook/main.js

```
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
  ],
```

- Run `npm run storybook`
- Change css files to scss files
- Drop scss folder into src folder
- Change content in index.scss to the content in the index.scss
- Delete stories folder and add in this stories folder
- Rerun `npm run storybook`

### Chromatic

- Visit your chromatic account and add a new project with this new repo
- Run `npm install --save-dev chromatic`
- Run `npx chromatic --project-token={TOKEN}` and this should give you the option to create a chromatic script
- Add in secrets for Project Token and Admin token in Github Repo
- Push up changes to your remote repo
- Create a github action called "chromatic.yml" and include the following for automatic deployment to chromatic on push to main

```
# Workflow name
name: 'Chromatic Deployment'

# Event for the workflow
on:
  push:
    branches: [ main ]

# List of jobs
jobs:
  test:
    # Operating System
    runs-on: ubuntu-latest
    # Job steps
    steps:
      - uses: actions/checkout@v1
      - run: yarn
        #👇 Adds Chromatic as a step in the workflow
      - uses: chromaui/action@v1
        # Options required for Chromatic's GitHub Action
        with:
          #👇 Chromatic projectToken, see https://storybook.js.org/tutorials/intro-to-storybook/react/en/deploy/ to obtain it
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
          token: ${{ secrets.ADMIN_TOKEN }}

```

- View Github Action pass with new build in Chromatic

## Dependencies

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Sass](https://sass-lang.com/install)
- [React-Icons](https://react-icons.github.io/react-icons/)
- [React-DOM](https://reactjs.org/docs/react-dom.html)
- [Storybook](https://storybook.js.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/)
- [Chromatic](https://www.chromatic.com/)
