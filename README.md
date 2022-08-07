# Next.js Skeleton

This is my simple and highly customizable skeleton build with Next. The skeleton is bootstrapped with [create-next-app](https://nextjs.org/docs/api-reference/create-next-app)
and has the following features:

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [TypeScript](https://www.typescriptlang.org/)

## Table of contents

- [Next.js Skeleton](#nextjs-skeleton)
  - [Table of contents](#table-of-contents)
  - [1. Setup](#1-setup)
    - [1.1 Node.js](#11-nodejs)
    - [1.2 Clone this repo](#12-clone-this-repo)
    - [1.3 TypeScript](#13-typescript)
  - [2. Scripts](#2-scripts)

## 1. Setup

### 1.1 Node.js

First install the Node.js higher or equal to 14.0.0. Use the JavaScript Tool Manager [Volta](https://volta.sh/) or the [Node Version Manager](https://github.com/nvm-sh/nvm).

### 1.2 Clone this repo

### 1.3 TypeScript

This skeleton uses **TypeScript** out of the box. If you don't feel comfortable using it or don't need it, just rename all the files to their JavaScript equivalent (`.js` and `.jsx`) and uninstall TypeScript and all the `@types` listed in the `package.json`.

## 2. Scripts

- Use `npm dev` to start a local dev server for all projects
- Use `npm dev --scope=<app>` to start a local dev server for that project on e.g: [http://localhost:3000](http://localhost:3000)
- To test the code using ESLint, use `npm lint`
- To build the application for production, use `npm build lint --scope=<app>`
- To start a production server, open an app folder and use `npm start`
