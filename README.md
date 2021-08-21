# **TEMPLATE** Vite + Routify + TS + Svelte Material UI

This template is based on [Oxova's Svelte-Vite-Template](https://github.com/Oxova/svelte-vite-template). Thanks!

## Features

-   Vite
-   Routify
-   Typescript
-   Svelte Material UI
-   SCSS
-   PostCSS (Prefixer)

## Installation / Scripts

```
npm install
```

| Command | Description         |
| ------- | ------------------- |
| dev     | start dev server    |
| build   | build site          |
| serve   | serve build         |
| check   | check for TS-errors |
| prepare | build SMUI-Theme    |

## Introduction

I am not an expert on Vite. If you see ways to improve this template please feel very welcome to contribute.

## What Material Design Components are available?

Please refer to the official [documentation](https://sveltematerialui.com/) to get an overview of all available components.

## Theming

Changes to the default Material Design Theme are applied in `src/theme/_smui-theme.scss` and `src/theme/dark/_smui-theme.scss` . After each change you have to `npm run prepare` to apply these changes.

## How to install additional Components?

It's enough to install the corresponding NPM package if you are using the default theme. However: if you change colors (or whatever else) in "/src/theme" you have to run `npm run prepare` again in order for theme-colors to be applied to newly added components.

## Available Icons

As far as I can tell all icons provided by [Google](https://fonts.google.com/icons) work. Please look at the examples at `src/pages/index.svelte` to see how you can use these icons.
