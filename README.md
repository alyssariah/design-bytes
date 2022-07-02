# Design Bites

- [What is this?](#what-is-this)
- [Tools Used](#tools-used)
- [Setup New Project](#setup-new-project)

## What is this?

There are multiple UI libraries out there including Bootstrap, Angular Material, Material UI, ect. As I was trying to decide on a library, I started to think about a tool called Storybook that allows you to make your own UI Library. I am someone who wants to create new components and reuse them. I also want control over that library to tweak components without a lot of work. Therefore here is my library where I take the code I like and place it here for reusability. This repository is also giving myself the steps to setup a new project and environment to work well with this storybook library.

## Setup New Project

### Vite Project with React

[Vite Get Started](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

- Run in CLI `npm create vite@latest`
- Name your new project
- Choose react for the vite project
- Go into your new project folder and run `npm install`
- Create README.md in your root folder to start documentation
- Add default server open to vite.config.js [Vite Serever](https://vitejs.dev/config/#server-open)
  ```
  server: {
    open: '/index.html',
  },
  ```
- In the package.json, change script "dev" to "start"
- Run CLI command `npm start` and React + Vite App should open up

### Prettier and ESLint

[Resource](https://dev.to/knowankit/setup-eslint-and-prettier-in-react-app-357b)

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

### Husky, Lint-Staged, and Precommits
[Resource](https://prettier.io/docs/en/precommit.html)

- Run `git init`
- Connect to remote repo on github with `git remote add origin REPO`
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
- Go ahead and `git -am" "` to see pre-commit hook work in action

## Dependencies

- [Vite](https://vitejs.dev/)
- storybook
- chromatic
- sass
- use-local-storage
- react-icons
